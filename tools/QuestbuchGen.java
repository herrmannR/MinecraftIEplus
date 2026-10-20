import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.MessageDigest;
import java.util.*;
import java.util.regex.*;

/**
 * Baut FTB-Quests-Kapitel (SNBT, FTB Quests 2001.4.x für 1.20.1).
 *
 * Mod-Kapitel:   java tools/QuestbuchGen.java <questtexte.md> <steuer.cfg> <ausgabe.snbt>
 * Hauptquests:   java tools/QuestbuchGen.java --hauptquests docs/01_PROGRESSION.md <ausgabe.snbt>
 *
 * Mod-Kapitel aus docs/questtexte/<mod>.md:
 *   "## Abschnitt (Kn Name)"                  = eine Zeile im Kapitel; Kn schaltet sie frei (s. u.)
 *   "### CODE Titel · Hauptweg|Nebenquest"    = Quest; "**Aufgabe:**"-Zeile = Aufgaben, Rest = Text
 *   "### Nebenquest-Reihe Name" + Tabelle mit Spalten "Quest | Aufgabe | …" = je Zeile eine Nebenquest
 *   Tabelle mit "Quest | Aufgabe | …" direkt unter "## …" ebenso.
 * Aufgaben aus der Zeile: Item-IDs in Backticks; "4 × `id`" = Anzahl; "oder"/"eine von" = eine Aufgabe
 * mit Item-Filter (itemfilters:or); "Dimension `id` betreten" = Dimensions-Aufgabe. Zeilen mit
 * "Flüssigkeit" oder "Gas " müssen in der Steuerdatei stehen, sonst bricht der Lauf ab.
 *
 * Steuerdatei tools/questbuch/<mod>.cfg:
 *   chapter = <dateiname>      title = <Kapiteltitel>      icon = <item-id>      order = <zahl>
 *   <CODE> tasks = item(id[,anzahl]); or(Titel; id, id, ...); fluid(id, mB); dim(id); check(Titel)
 *   <CODE> deps  = CODE, CODE        (ersetzt die Standard-Abhängigkeit)
 *   <CODE> icon  = <item-id>
 * Standard-Abhängigkeit: Hauptweg-Quest an der vorigen Hauptweg-Quest, Nebenquest einer Reihe an der
 * vorigen der Reihe, sonst Nebenquest an der letzten Hauptweg-Quest davor.
 *
 * Freischaltung: Die erste Quest eines Abschnitts mit "(Kn …)" hängt zusätzlich an der Hauptquest Kn
 * (Kapitel "hauptquests") und bleibt unsichtbar, bis Kn erledigt ist. Alle anderen Quests werden erst
 * sichtbar, wenn ihre Voraussetzungen sichtbar sind; so erscheint ein Abschnitt mit seinem Kn.
 *
 * Die IDs entstehen aus Kapitelname und Questcode und bleiben beim Neubauen gleich (sonst verlieren
 * Spieler ihren Fortschritt). Questcodes und K-Nummern deshalb nie umbenennen.
 */
public class QuestbuchGen {
    static class Quest {
        String code, title, section, kGate, series; boolean main;
        List<String> desc = new ArrayList<>();
        String aufgabe;
        List<String> tasks = new ArrayList<>(); // fertige SNBT-Blöcke
        List<String> deps = new ArrayList<>();
        String icon; double x, y; boolean milestone, gated;
    }

    static final String HQ = "hauptquests";
    static String chapter, chTitle = "", chIcon = "", order = "1";
    static Map<String, String> cfgTasks = new HashMap<>(), cfgDeps = new HashMap<>(), cfgIcon = new HashMap<>();

    public static void main(String[] a) throws Exception {
        if (a.length == 3 && a[0].equals("--hauptquests")) { hauptquests(Paths.get(a[1]), Paths.get(a[2])); return; }
        if (a.length < 3) { System.out.println("Aufruf: java QuestbuchGen.java <md> <cfg> <out.snbt> | --hauptquests <01_PROGRESSION.md> <out.snbt>"); return; }
        readCfg(Paths.get(a[1]));
        List<Quest> qs = parse(Files.readAllLines(Paths.get(a[0]), StandardCharsets.UTF_8));
        Map<String, Quest> byCode = new LinkedHashMap<>();
        for (Quest q : qs) if (byCode.put(q.code, q) != null) throw new RuntimeException("Questcode doppelt: " + q.code);

        // Querverweise wie "(MK4-03)" durch den Questtitel ersetzen
        Pattern ref = Pattern.compile("\\b([A-Z]{2,3}\\d?-\\d{1,2})\\b");
        for (Quest q : qs) for (int i = 0; i < q.desc.size(); i++) {
            q.desc.set(i, q.desc.get(i).replace(q.code + ": ", "")); // "BOX-07: …" in der eigenen Quest
            Matcher m = ref.matcher(q.desc.get(i)); StringBuffer sb = new StringBuffer();
            while (m.find()) {
                Quest t = byCode.get(m.group(1));
                m.appendReplacement(sb, Matcher.quoteReplacement(t == null || t == q ? m.group(1) : "Quest „" + t.title + "“"));
            }
            m.appendTail(sb); q.desc.set(i, sb.toString());
        }

        // Aufgaben
        for (Quest q : qs) {
            String c = cfgTasks.containsKey(q.code) ? cfgTasks.get(q.code) : autoTasks(q);
            int n = 0;
            for (String t : c.split(";(?![^()]*\\))")) {
                t = t.trim(); if (t.isEmpty()) continue;
                q.tasks.add(task(q, n++, t));
            }
            if (cfgIcon.containsKey(q.code)) q.icon = cfgIcon.get(q.code);
        }

        // Abhängigkeiten
        Quest lastMain = null; Map<String, Quest> lastInSeries = new HashMap<>();
        for (Quest q : qs) {
            if (cfgDeps.containsKey(q.code)) {
                for (String d : cfgDeps.get(q.code).split(",")) {
                    d = d.trim(); if (d.isEmpty()) continue;
                    if (!byCode.containsKey(d)) throw new RuntimeException(q.code + ": unbekannte Abhängigkeit " + d);
                    q.deps.add(d);
                }
            } else if (q.series != null && lastInSeries.containsKey(q.series)) q.deps.add(lastInSeries.get(q.series).code);
            else if (lastMain != null) q.deps.add(lastMain.code);
            if (q.main) lastMain = q;
            if (q.series != null) lastInSeries.put(q.series, q);
        }

        // Layout: je Abschnitt eine Zeile; Hauptweg oben, Nebenquests darunter
        String sec = null; double y = -3, mainX = 0, sideX = 0; Quest prevMain = null;
        for (Quest q : qs) {
            if (!q.section.equals(sec)) {
                if (prevMain != null) prevMain.milestone = true;
                sec = q.section; y += 3.5; mainX = 0; sideX = 0; prevMain = null;
            }
            if (q.main && prevMain != null && prevMain.deps.equals(q.deps) && prevMain.y == y) {
                // parallel zur vorigen Quest (gleiche Voraussetzung): übereinander statt hintereinander
                q.x = prevMain.x; prevMain.y = y - 0.75; q.y = y + 0.75; prevMain = q;
            } else if (q.main) { q.x = mainX; q.y = y; mainX += 1.5; prevMain = q; }
            else {
                double px = 0;
                for (String d : q.deps) { Quest p = byCode.get(d); if (p.section.equals(q.section)) px = Math.max(px, p.x); }
                q.x = Math.max(px, sideX); q.y = y + 1.5; sideX = q.x + 1.25;
            }
        }
        if (prevMain != null) prevMain.milestone = true;

        // Freischaltung über die Hauptquests: erste Quest je Abschnitt mit Kn
        sec = null;
        for (Quest q : qs) {
            if (!q.section.equals(sec)) { sec = q.section; if (q.kGate != null) { q.deps.add(q.kGate); q.gated = true; } }
        }

        write(Paths.get(a[2]), snbt(qs));
        System.out.println(qs.size() + " Quests geschrieben nach " + a[2]);
    }

    static void write(Path p, String s) throws Exception {
        Files.createDirectories(p.toAbsolutePath().getParent());
        Files.write(p, s.getBytes(StandardCharsets.UTF_8));
    }

    static String autoTasks(Quest q) {
        String a = q.aufgabe;
        if (a == null) throw new RuntimeException(q.code + ": keine Aufgabe");
        if (a.matches(".*(Flüssigkeit|Gas ).*"))
            throw new RuntimeException(q.code + ": Aufgabe braucht Eintrag in der Steuerdatei: " + a);
        Matcher d = Pattern.compile("Dimension `([a-z0-9_]+:[a-z0-9_/]+)`").matcher(a);
        if (d.find()) return "dim(" + d.group(1) + ")";
        List<String> ids = new ArrayList<>();
        Matcher m = Pattern.compile("(?:(\\d+) × )?`([a-z0-9_]+:[a-z0-9_/]+)`").matcher(a);
        StringBuilder sb = new StringBuilder();
        while (m.find()) {
            ids.add(m.group(2));
            sb.append(sb.length() > 0 ? "; " : "").append("item(").append(m.group(2)).append(m.group(1) != null ? "," + m.group(1) : "").append(")");
        }
        if (ids.isEmpty()) throw new RuntimeException(q.code + ": keine Item-ID in der Aufgabe: " + a);
        if (a.matches(".*(\\boder\\b|eine von|eines von).*")) return "or(" + q.title + "; " + String.join(", ", ids) + ")";
        return sb.toString();
    }

    static void readCfg(Path p) throws Exception {
        for (String l : Files.readAllLines(p, StandardCharsets.UTF_8)) {
            l = l.trim(); if (l.isEmpty() || l.startsWith("#")) continue;
            int eq = l.indexOf('='); String k = l.substring(0, eq).trim(), v = l.substring(eq + 1).trim();
            String[] kp = k.split("\\s+");
            if (kp.length == 1) switch (k) {
                case "chapter": chapter = v; break; case "title": chTitle = v; break;
                case "icon": chIcon = v; break; case "order": order = v; break;
                default: throw new RuntimeException("Unbekannter Schlüssel " + k);
            } else switch (kp[1]) {
                case "tasks": cfgTasks.put(kp[0], v); break;
                case "deps": cfgDeps.put(kp[0], v); break;
                case "icon": cfgIcon.put(kp[0], v); break;
                default: throw new RuntimeException("Unbekannter Schlüssel " + k);
            }
        }
        if (chapter == null) throw new RuntimeException("chapter fehlt in der Steuerdatei");
    }

    static List<Quest> parse(List<String> lines) {
        List<Quest> qs = new ArrayList<>();
        String section = null, kGate = null, series = null; List<String> intro = new ArrayList<>(); Quest cur = null;
        String[] qTable = null; boolean inTable = false;
        Pattern qh = Pattern.compile("^### (\\S+) (.+?)$");
        for (String raw : lines) {
            String l = raw.replaceAll("\\s+$", "");
            boolean tableLine = l.startsWith("|");
            if (!tableLine) { inTable = false; }
            if (l.startsWith("## ")) {
                cur = null; series = null; intro = new ArrayList<>();
                if (l.contains("Pack-Änderungen") || l.contains("Offen vor dem Einbau") || l.contains("Hinweise zur Verwendung")) { section = null; continue; }
                Matcher k = Pattern.compile("\\((K\\d+)\\b[^)]*\\)").matcher(l);
                kGate = k.find() ? k.group(1) : null;
                section = l.substring(3).replaceAll("\\s*\\(.*\\)\\s*$", "").replace("Nebenquest-Reihe: ", "");
                continue;
            }
            if (section == null) continue;
            if (l.equals("---")) { cur = null; continue; }
            if (l.startsWith("### Nebenquest-Reihe ")) { series = l.substring(21).trim(); cur = null; intro = new ArrayList<>(); continue; }
            Matcher m = qh.matcher(l);
            if (l.startsWith("### ") && m.matches()) {
                series = null;
                cur = newQuest(qs, m.group(1), m.group(2), section, kGate, null, intro); intro = new ArrayList<>();
                continue;
            }
            if (tableLine) {
                String[] c = cells(l);
                if (!inTable) { // Kopfzeile
                    inTable = true;
                    qTable = c.length >= 2 && c[0].equals("Quest") && c[1].equals("Aufgabe") ? c : null;
                    if (qTable != null) continue;
                } else if (qTable != null) {
                    if (l.matches("^\\|[-| ]+\\|$")) continue;
                    String[] ct = c[0].split(" ", 2);
                    Quest q = newQuest(qs, ct[0], ct[1] + " · Nebenquest", section, kGate, series != null ? series : section, intro);
                    intro = new ArrayList<>();
                    q.aufgabe = "**Aufgabe:** " + c[1];
                    for (int i = 2; i < c.length; i++) {
                        String h = qTable[i].trim();
                        q.desc.add(fmt(h + (h.endsWith("→") ? " " : ": ") + c[i]));
                    }
                    cur = q; continue;
                }
            }
            if (cur == null) { // Einleitung des Abschnitts oder der Reihe, geht an die erste Quest danach
                if (!l.isEmpty() || !intro.isEmpty()) addText(intro, l);
                continue;
            }
            if (l.startsWith("**Aufgabe:**")) { cur.aufgabe = l; continue; }
            if (l.isEmpty() && (cur.desc.isEmpty() || cur.desc.get(cur.desc.size() - 1).isEmpty())) continue;
            addText(cur.desc, l);
        }
        for (Quest q : qs) while (!q.desc.isEmpty() && q.desc.get(q.desc.size() - 1).isEmpty()) q.desc.remove(q.desc.size() - 1);
        return qs;
    }

    static Quest newQuest(List<Quest> qs, String code, String t, String section, String kGate, String series, List<String> intro) {
        Quest q = new Quest(); q.code = code; q.section = section; q.kGate = kGate; q.series = series;
        if (t.startsWith("Nebenquest: ")) { q.main = false; t = t.substring(12); }
        else if (t.endsWith(" · Hauptweg")) { q.main = true; t = t.substring(0, t.length() - 11); }
        else if (t.endsWith(" · Nebenquest")) { q.main = false; t = t.substring(0, t.length() - 13); }
        else q.main = false;
        q.title = t.trim();
        while (!intro.isEmpty() && intro.get(intro.size() - 1).isEmpty()) intro.remove(intro.size() - 1);
        if (!intro.isEmpty()) { q.desc.addAll(intro); q.desc.add(""); }
        qs.add(q);
        return q;
    }

    static String[] cells(String l) {
        String[] c = l.substring(1, l.endsWith("|") ? l.length() - 1 : l.length()).split("\\|");
        for (int i = 0; i < c.length; i++) c[i] = c[i].trim();
        return c;
    }

    /** Markdown-Zeile in FTB-Text (&-Farbcodes) umsetzen. */
    static void addText(List<String> out, String l) {
        if (l.matches("^\\|[-| ]+\\|$")) return;            // Trennzeile einer Tabelle
        if (l.startsWith("|")) {                             // Tabellenzeile
            String[] c = cells(l);
            StringBuilder sb = new StringBuilder("• &e" + c[0] + "&r");
            for (int i = 1; i < c.length; i++) sb.append(i == 1 ? ": " : " · ").append(c[i]);
            out.add(fmt(sb.toString())); return;
        }
        boolean warn = l.startsWith("> ");
        if (warn) l = l.substring(2).replace("Vor diesem Kapitel ein Warnhinweis: ", "&lWarnung:&r ");
        if (l.startsWith("- ")) l = "• " + l.substring(2);
        l = fmt(l);
        out.add(warn ? "&c" + l.replace("&r", "&r&c") + "&r" : l);
    }

    static String fmt(String s) {
        s = s.replaceAll("\\*\\*(.+?)\\*\\*", "&e$1&r").replaceAll("(?<![*\\w])\\*([^*]+)\\*(?![*\\w])", "&o$1&r").replaceAll("`([^`]+)`", "$1");
        s = s.replace("️", "").replace("⚙", "&6⚙&r").replace("🔵", "&9(ungeprüft)&r");
        return s.replaceAll("\\s+", " ").trim();
    }

    static String task(Quest q, int n, String t) {
        String id = hex(chapter + ":" + q.code + ":task" + n);
        Matcher m = Pattern.compile("^(\\w+)\\((.*)\\)$").matcher(t);
        if (!m.matches()) throw new RuntimeException(q.code + ": Aufgabe nicht lesbar: " + t);
        String arg = m.group(2).trim();
        switch (m.group(1)) {
            case "item": {
                String[] p = arg.split(",");
                if (q.icon == null) q.icon = p[0].trim();
                return "{\n\t\t\t\t" + (p.length > 1 ? "count: " + p[1].trim() + "L\n\t\t\t\t" : "") + "id: \"" + id
                    + "\"\n\t\t\t\titem: \"" + p[0].trim() + "\"\n\t\t\t\ttype: \"item\"\n\t\t\t}";
            }
            case "or": {
                int s = arg.indexOf(';');
                String title = arg.substring(0, s).trim();
                StringBuilder items = new StringBuilder();
                for (String i : arg.substring(s + 1).split(",")) {
                    i = i.trim(); if (q.icon == null) q.icon = i;
                    items.append(items.length() > 0 ? ", " : "").append("{ Count: 1b, id: \"").append(i).append("\" }");
                }
                return "{\n\t\t\t\tid: \"" + id + "\"\n\t\t\t\titem: { Count: 1b, id: \"itemfilters:or\", tag: { items: [" + items
                    + "] } }\n\t\t\t\ttitle: \"" + esc(title) + "\"\n\t\t\t\ttype: \"item\"\n\t\t\t}";
            }
            case "fluid": {
                String[] p = arg.split(",");
                return "{\n\t\t\t\tamount: " + p[1].trim() + "L\n\t\t\t\tfluid: \"" + p[0].trim() + "\"\n\t\t\t\tid: \"" + id
                    + "\"\n\t\t\t\ttype: \"fluid\"\n\t\t\t}";
            }
            case "dim":
                return "{\n\t\t\t\tdimension: \"" + arg + "\"\n\t\t\t\tid: \"" + id + "\"\n\t\t\t\ttype: \"dimension\"\n\t\t\t}";
            case "check":
                return "{\n\t\t\t\tid: \"" + id + "\"\n\t\t\t\ttitle: \"" + esc(arg) + "\"\n\t\t\t\ttype: \"checkmark\"\n\t\t\t}";
        }
        throw new RuntimeException(q.code + ": unbekannte Aufgabenart " + m.group(1));
    }

    static String depId(String code) { return code.matches("K\\d+") ? hex(HQ + ":" + code) : hex(chapter + ":" + code); }

    static String chapterHead(String file, String title, String icon, String ord) {
        return "{\n\tdefault_hide_dependency_lines: false\n\tdefault_quest_shape: \"\"\n\tfilename: \"" + file + "\"\n\tgroup: \"\"\n"
            + (icon.isEmpty() ? "" : "\ticon: \"" + icon + "\"\n") + "\tid: \"" + hex(file) + "\"\n\torder_index: " + ord
            + "\n\tquest_links: [ ]\n\tquests: [\n";
    }

    static String chapterTail(String title) { return "\t]\n\ttitle: \"" + esc(title) + "\"\n}\n"; }

    static String snbt(List<Quest> qs) {
        StringBuilder sb = new StringBuilder(chapterHead(chapter, chTitle, chIcon, order));
        for (Quest q : qs) {
            sb.append("\t\t{\n");
            if (!q.deps.isEmpty()) {
                sb.append("\t\t\tdependencies: [");
                for (int i = 0; i < q.deps.size(); i++) sb.append(i > 0 ? ", " : "").append('"').append(depId(q.deps.get(i))).append('"');
                sb.append("]\n");
            }
            sb.append("\t\t\tdescription: [\n");
            for (String d : q.desc) sb.append("\t\t\t\t\"").append(esc(d)).append("\"\n");
            sb.append("\t\t\t]\n");
            if (q.gated) sb.append("\t\t\thide_until_deps_complete: true\n");
            else if (!q.deps.isEmpty()) sb.append("\t\t\thide_until_deps_visible: true\n");
            if (q.icon != null) sb.append("\t\t\ticon: \"").append(q.icon).append("\"\n");
            sb.append("\t\t\tid: \"").append(depId(q.code)).append("\"\n");
            if (!q.main) sb.append("\t\t\toptional: true\n\t\t\tshape: \"square\"\n");
            if (q.milestone) sb.append("\t\t\tshape: \"hexagon\"\n\t\t\tsize: 1.5d\n");
            sb.append("\t\t\tsubtitle: \"").append(esc(q.section + (q.main ? "" : " · Nebenquest"))).append("\"\n");
            sb.append("\t\t\ttasks: [");
            for (int i = 0; i < q.tasks.size(); i++) sb.append(i > 0 ? "\n\t\t\t" : "").append(q.tasks.get(i));
            sb.append("]\n");
            sb.append("\t\t\ttitle: \"").append(esc(q.title)).append("\"\n");
            sb.append("\t\t\tx: ").append(q.x).append("d\n\t\t\ty: ").append(q.y).append("d\n\t\t}\n");
        }
        return sb.append(chapterTail(chTitle)).toString();
    }

    /**
     * Hauptquest-Kapitel (Mock): je Zeile "| Kn Name | Progression | Story |" der Kapiteltabelle in
     * 01_PROGRESSION.md eine Klick-Quest. Kn hängt an K(n-1); ein Part je Zeile im Kapitel.
     * Die Story-Spalte bleibt draußen (Planungsnotizen, die Story schreibt der User).
     */
    static void hauptquests(Path src, Path out) throws Exception {
        StringBuilder sb = new StringBuilder(chapterHead(HQ, "Hauptquests", "minecraft:nether_star", "0"));
        String part = "", prev = null; double x = 0, y = -2; int n = 0;
        for (String l : Files.readAllLines(src, StandardCharsets.UTF_8)) {
            if (!l.startsWith("| ")) continue;
            String[] c = cells(l);
            if (c[0].startsWith("**Part")) {
                part = c[0].replace("**", "").replaceAll("\\s*\\(.*\\)", ""); y += 2.5; x = 0; continue;
            }
            Matcher m = Pattern.compile("^(K\\d+) (.+)$").matcher(c[0]);
            if (!m.matches()) continue;
            String k = m.group(1);
            sb.append("\t\t{\n");
            if (prev != null) sb.append("\t\t\tdependencies: [\"").append(hex(HQ + ":" + prev)).append("\"]\n");
            sb.append("\t\t\tdescription: [\n\t\t\t\t\"&7Mock: Kapitel per Klick abschließen. Danach erscheinen die Quests dieses Kapitels in den Mod-Kapiteln.&r\"\n")
              .append("\t\t\t\t\"\"\n\t\t\t\t\"&eFortschritt:&r ").append(esc(fmt(c.length > 1 ? c[1] : ""))).append("\"\n\t\t\t]\n");
            sb.append("\t\t\ticon: \"minecraft:book\"\n\t\t\tid: \"").append(hex(HQ + ":" + k)).append("\"\n");
            sb.append("\t\t\tshape: \"hexagon\"\n\t\t\tsize: 1.25d\n\t\t\tsubtitle: \"").append(esc(part)).append("\"\n");
            sb.append("\t\t\ttasks: [{\n\t\t\t\tid: \"").append(hex(HQ + ":" + k + ":task0"))
              .append("\"\n\t\t\t\ttitle: \"Kapitel abgeschlossen\"\n\t\t\t\ttype: \"checkmark\"\n\t\t\t}]\n");
            sb.append("\t\t\ttitle: \"").append(esc(k + " " + m.group(2))).append("\"\n");
            sb.append("\t\t\tx: ").append(x).append("d\n\t\t\ty: ").append(y).append("d\n\t\t}\n");
            prev = k; x += 1.75; n++;
        }
        write(out, sb.append(chapterTail("Hauptquests")).toString());
        System.out.println(n + " Hauptquests geschrieben nach " + out);
    }

    static String esc(String s) { return s.replace("\\", "\\\\").replace("\"", "\\\""); }

    /** Feste 16-stellige Hex-ID aus einem Namen; oberstes Bit aus, damit sie als positive Long-Zahl gilt. */
    static String hex(String name) {
        try {
            byte[] h = MessageDigest.getInstance("SHA-1").digest(name.getBytes(StandardCharsets.UTF_8));
            long v = 0; for (int i = 0; i < 8; i++) v = (v << 8) | (h[i] & 0xff);
            v &= Long.MAX_VALUE; if (v == 0) v = 1;
            return String.format("%016X", v);
        } catch (Exception e) { throw new RuntimeException(e); }
    }
}
