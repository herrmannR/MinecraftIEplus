import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.MessageDigest;
import java.util.*;
import java.util.regex.*;

/**
 * Baut ein FTB-Quests-Kapitel (SNBT, FTB Quests 2001.4.x für 1.20.1) aus einer Questtext-Datei
 * (docs/questtexte/<mod>.md) und einer kleinen Steuerdatei (tools/questbuch/<mod>.cfg).
 *
 * Aufruf:  java tools/QuestbuchGen.java <questtexte.md> <steuer.cfg> <ausgabe.snbt>
 *
 * Aus der md-Datei: "## Abschnitt" = eine Zeile im Kapitel, "### CODE Titel · Hauptweg|Nebenquest" = Quest,
 * "**Aufgabe:**"-Zeile = Aufgaben (Item-IDs in Backticks), der Rest = Beschreibung.
 * Die IDs werden aus Kapitelname und Questcode abgeleitet und bleiben beim Neubauen gleich
 * (sonst verlieren Spieler ihren Fortschritt). Questcodes deshalb nie umbenennen.
 *
 * Steuerdatei:
 *   chapter = <dateiname>      title = <Kapiteltitel>      icon = <item-id>      order = <zahl>
 *   <CODE> tasks = item(id[,anzahl]); or(Titel; id, id, ...); fluid(id, mB); check(Titel)
 *   <CODE> deps  = CODE, CODE        (ersetzt die Standard-Abhängigkeit)
 *   <CODE> icon  = <item-id>
 * Standard-Abhängigkeit: Hauptweg-Quest hängt an der vorigen Hauptweg-Quest, Nebenquest an der
 * letzten Hauptweg-Quest davor. Aufgaben mit "oder", "eines von", "Flüssigkeit" oder "Gas"
 * müssen in der Steuerdatei stehen, sonst bricht der Lauf ab.
 */
public class QuestbuchGen {
    static class Quest {
        String code, title, section, kind; boolean main;
        List<String> desc = new ArrayList<>();
        String aufgabe;
        List<String> tasks = new ArrayList<>(); // fertige SNBT-Blöcke
        List<String> deps = new ArrayList<>();
        String icon; double x, y; boolean milestone;
    }

    static String chapter, chTitle = "", chIcon = "", order = "1";
    static Map<String, String> cfgTasks = new HashMap<>(), cfgDeps = new HashMap<>(), cfgIcon = new HashMap<>();

    public static void main(String[] a) throws Exception {
        if (a.length < 3) { System.out.println("Aufruf: java QuestbuchGen.java <md> <cfg> <out.snbt>"); return; }
        readCfg(Paths.get(a[1]));
        List<Quest> qs = parse(Files.readAllLines(Paths.get(a[0]), StandardCharsets.UTF_8));
        Map<String, Quest> byCode = new LinkedHashMap<>();
        for (Quest q : qs) byCode.put(q.code, q);

        // Querverweise wie "(MK4-03)" durch den Questtitel ersetzen
        Pattern ref = Pattern.compile("\\b([A-Z]{2,3}\\d?-\\d{1,2})\\b");
        for (Quest q : qs) for (int i = 0; i < q.desc.size(); i++) {
            Matcher m = ref.matcher(q.desc.get(i)); StringBuffer sb = new StringBuffer();
            while (m.find()) {
                Quest t = byCode.get(m.group(1));
                m.appendReplacement(sb, Matcher.quoteReplacement(t == null ? m.group(1) : "Quest „" + t.title + "“"));
            }
            m.appendTail(sb); q.desc.set(i, sb.toString());
        }

        // Aufgaben
        for (Quest q : qs) {
            String c = cfgTasks.get(q.code);
            if (c == null) {
                if (q.aufgabe == null) throw new RuntimeException(q.code + ": keine Aufgabe");
                if (q.aufgabe.matches(".*(oder|eines von|Flüssigkeit|Gas ).*"))
                    throw new RuntimeException(q.code + ": Aufgabe braucht Eintrag in der Steuerdatei: " + q.aufgabe);
                Matcher m = Pattern.compile("`([a-z0-9_]+:[a-z0-9_/]+)`").matcher(q.aufgabe);
                StringBuilder sb = new StringBuilder();
                while (m.find()) sb.append(sb.length() > 0 ? "; " : "").append("item(").append(m.group(1)).append(")");
                c = sb.toString();
            }
            int n = 0;
            for (String t : c.split(";(?![^()]*\\))")) {
                t = t.trim(); if (t.isEmpty()) continue;
                q.tasks.add(task(q, n++, t));
            }
            if (cfgIcon.containsKey(q.code)) q.icon = cfgIcon.get(q.code);
        }

        // Abhängigkeiten
        Quest lastMain = null;
        for (Quest q : qs) {
            if (cfgDeps.containsKey(q.code)) {
                for (String d : cfgDeps.get(q.code).split(",")) {
                    d = d.trim(); if (d.isEmpty()) continue;
                    if (!byCode.containsKey(d)) throw new RuntimeException(q.code + ": unbekannte Abhängigkeit " + d);
                    q.deps.add(d);
                }
            } else if (lastMain != null) q.deps.add(lastMain.code);
            if (q.main) lastMain = q;
        }

        // Layout: je Abschnitt eine Zeile; Hauptweg oben, Nebenquests darunter
        String sec = null; double y = -3, mainX = 0, sideX = 0; Quest prevMain = null;
        Map<String, Double> secRow = new LinkedHashMap<>();
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

        Files.createDirectories(Paths.get(a[2]).toAbsolutePath().getParent());
        Files.write(Paths.get(a[2]), snbt(qs).getBytes(StandardCharsets.UTF_8));
        System.out.println(qs.size() + " Quests geschrieben nach " + a[2]);
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
        String section = null; List<String> intro = new ArrayList<>(); Quest cur = null;
        Pattern qh = Pattern.compile("^### (\\S+) (.+?)$");
        for (String raw : lines) {
            String l = raw.replaceAll("\\s+$", "");
            if (l.startsWith("## ")) {
                if (l.contains("Pack-Änderungen") || l.contains("Offen vor dem Einbau") || l.contains("Hinweise zur Verwendung")) { section = null; cur = null; continue; }
                section = l.substring(3).replaceAll("\\s*\\(.*\\)\\s*$", "").replace("Nebenquest-Reihe: ", "");
                intro = new ArrayList<>(); cur = null; continue;
            }
            if (section == null) continue;
            if (l.equals("---")) { cur = null; continue; }
            Matcher m = qh.matcher(l);
            if (l.startsWith("### ") && m.matches()) {
                cur = new Quest(); cur.code = m.group(1); cur.section = section;
                String t = m.group(2);
                if (t.startsWith("Nebenquest: ")) { cur.main = false; t = t.substring(12); }
                else if (t.endsWith(" · Hauptweg")) { cur.main = true; t = t.substring(0, t.length() - 11); }
                else if (t.endsWith(" · Nebenquest")) { cur.main = false; t = t.substring(0, t.length() - 13); }
                else cur.main = false;
                cur.title = t.trim();
                if (!intro.isEmpty()) { cur.desc.addAll(intro); cur.desc.add(""); intro = new ArrayList<>(); }
                qs.add(cur); continue;
            }
            if (cur == null) { // Einleitung des Abschnitts, geht an die erste Quest
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

    /** Markdown-Zeile in FTB-Text (&-Farbcodes) umsetzen. */
    static void addText(List<String> out, String l) {
        if (l.matches("^\\|[-| ]+\\|$")) return;            // Trennzeile einer Tabelle
        if (l.startsWith("|")) {                             // Tabellenzeile
            String[] c = l.substring(1, l.length() - 1).split("\\|");
            StringBuilder sb = new StringBuilder("• &e" + c[0].trim() + "&r");
            for (int i = 1; i < c.length; i++) sb.append(i == 1 ? ": " : " · ").append(c[i].trim());
            out.add(fmt(sb.toString())); return;
        }
        boolean warn = l.startsWith("> ");
        if (warn) l = l.substring(2).replace("Vor diesem Kapitel ein Warnhinweis: ", "&lWarnung:&r&c ");
        if (l.startsWith("- ")) l = "• " + l.substring(2);
        l = fmt(l);
        out.add(warn ? "&c" + l + "&r" : l);
    }

    static String fmt(String s) {
        s = s.replaceAll("\\*\\*(.+?)\\*\\*", "&e$1&r").replaceAll("`([^`]+)`", "$1");
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
                return "{\n\t\t\t\tid: \"" + id + "\"\n\t\t\t\titem: \"" + p[0].trim() + "\"\n"
                    + (p.length > 1 ? "\t\t\t\tcount: " + p[1].trim() + "L\n" : "") + "\t\t\t\ttype: \"item\"\n\t\t\t}";
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
            case "check":
                return "{\n\t\t\t\tid: \"" + id + "\"\n\t\t\t\ttitle: \"" + esc(arg) + "\"\n\t\t\t\ttype: \"checkmark\"\n\t\t\t}";
        }
        throw new RuntimeException(q.code + ": unbekannte Aufgabenart " + m.group(1));
    }

    static String snbt(List<Quest> qs) {
        Map<String, String> ids = new HashMap<>();
        for (Quest q : qs) ids.put(q.code, hex(chapter + ":" + q.code));
        StringBuilder sb = new StringBuilder();
        sb.append("{\n\tdefault_hide_dependency_lines: false\n\tdefault_quest_shape: \"\"\n");
        sb.append("\tfilename: \"").append(chapter).append("\"\n\tgroup: \"\"\n");
        if (!chIcon.isEmpty()) sb.append("\ticon: \"").append(chIcon).append("\"\n");
        sb.append("\tid: \"").append(hex(chapter)).append("\"\n\torder_index: ").append(order).append("\n\tquest_links: [ ]\n\tquests: [\n");
        for (Quest q : qs) {
            sb.append("\t\t{\n");
            if (!q.deps.isEmpty()) {
                sb.append("\t\t\tdependencies: [");
                for (int i = 0; i < q.deps.size(); i++) sb.append(i > 0 ? ", " : "").append('"').append(ids.get(q.deps.get(i))).append('"');
                sb.append("]\n");
            }
            sb.append("\t\t\tdescription: [\n");
            for (String d : q.desc) sb.append("\t\t\t\t\"").append(esc(d)).append("\"\n");
            sb.append("\t\t\t]\n");
            if (q.icon != null) sb.append("\t\t\ticon: \"").append(q.icon).append("\"\n");
            sb.append("\t\t\tid: \"").append(ids.get(q.code)).append("\"\n");
            if (!q.main) sb.append("\t\t\toptional: true\n\t\t\tshape: \"square\"\n");
            if (q.milestone) sb.append("\t\t\tshape: \"hexagon\"\n\t\t\tsize: 1.5d\n");
            sb.append("\t\t\tsubtitle: \"").append(esc(q.section + (q.main ? "" : " · Nebenquest"))).append("\"\n");
            sb.append("\t\t\ttasks: [");
            for (int i = 0; i < q.tasks.size(); i++) sb.append(i > 0 ? "\n\t\t\t" : "").append(q.tasks.get(i));
            sb.append("]\n");
            sb.append("\t\t\ttitle: \"").append(esc(q.title)).append("\"\n");
            sb.append("\t\t\tx: ").append(q.x).append("d\n\t\t\ty: ").append(q.y).append("d\n\t\t}\n");
        }
        sb.append("\t]\n\ttitle: \"").append(esc(chTitle)).append("\"\n}\n");
        return sb.toString();
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
