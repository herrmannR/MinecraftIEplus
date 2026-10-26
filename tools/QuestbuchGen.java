import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.security.MessageDigest;
import java.util.*;
import java.util.regex.*;

/**
 * Baut FTB-Quests-Kapitel (SNBT, FTB Quests 2001.4.x für 1.20.1).
 *
 * Mod-Kapitel:   java tools/QuestbuchGen.java <questtexte.md> <steuer.cfg> <ausgabe.snbt>
 * Hauptquests:   java tools/QuestbuchGen.java --hauptquests docs/01_PROGRESSION.md tools/questbuch/hauptquests.cfg <chapters-ordner>
 *
 * Mod-Kapitel aus docs/questtexte/<mod>.md:
 *   "## Abschnitt (Kn Name)"                  = eine Zeile im Kapitel; Kn schaltet sie frei (s. u.)
 *   "### CODE Titel · Hauptweg|Nebenquest"    = Quest; "**Aufgabe:**"-Zeile = Aufgaben, Rest = Text
 *   "### Nebenquest-Reihe Name" + Tabelle mit Spalten "Quest | Aufgabe | …" = je Zeile eine Nebenquest
 *   Tabelle mit "Quest | Aufgabe | …" direkt unter "## …" ebenso.
 * Aufgaben aus der Zeile: Item-IDs in Backticks; "4 × `id`" = Anzahl; "oder"/"eine von" = eine Aufgabe
 * mit Smart Filter (FTB Filter System, braucht FTB XMod Compat); "Dimension `id` betreten" = Dimensions-Aufgabe. Zeilen mit
 * "Flüssigkeit" oder "Gas " müssen in der Steuerdatei stehen, sonst bricht der Lauf ab.
 * Story-Quests (docs/story/texte/questtexte_story.md, Buch 1): Steht in der Aufgabe "Dialog", "Stage (" oder
 * "Nur der Host", wird daraus die Stage-Aufgabe story_<code> (ST3-05 -> story_st3_05), bei "Dimension ..." zusätzlich
 * die Dimension. Den Tag setzt der Easy-NPC-Dialog (tag @initiator add story_st3_05). Häkchen „Titel“ = Kontrollhaken.
 * Zeilen "**Steuerdatei:** ..." sind Notizen und kommen nicht in den Questtext.
 *
 * Steuerdatei tools/questbuch/<mod>.cfg:
 *   chapter = <dateiname>      title = <Kapiteltitel>      icon = <item-id>      order = <zahl>
 *   bis = K11                  (optional) nur Abschnitte bis zu diesem Kapitel; spätere fallen weg
 *   <CODE> tasks = item(id[,anzahl]); or(Titel; id, id, ...); fluid(id, mB); dim(id); check(Titel); stage(name)
 *   <CODE> rewards = stage(name); command(/befehl …); item(id[,anzahl]); xp(menge)
 *             (alle als Team-Belohnung, automatisch abgeholt; Befehle mit erhöhten Rechten und ohne Chat-Ausgabe)
 *   <CODE> deps  = CODE, CODE        (ersetzt die Standard-Abhängigkeit)
 *   <CODE> icon  = <item-id>
 * Standard-Abhängigkeit: Hauptweg-Quest an der vorigen Hauptweg-Quest, Nebenquest einer Reihe an der
 * vorigen der Reihe, sonst Nebenquest an der letzten Hauptweg-Quest davor.
 *
 * Freischaltung: Ein Abschnitt mit "(Kn …)" bekommt am Zeilenanfang eine Marke mit der Aufgabe
 * "Stage kapitel_kn"; sie ist unsichtbar, bis die Stage gesetzt ist (Belohnung der Mock-Hauptquest Kn,
 * später der NPC-Dialog). Die erste Quest des Abschnitts hängt an Marke und Vorgänger; alle Quests werden
 * sichtbar, sobald ihre Voraussetzungen sichtbar sind. So zeigt sich ein Abschnitt mit seinem Kn,
 * abschließen geht aber nur der Reihe nach.
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
        List<String> rewards = new ArrayList<>(); // fertige SNBT-Blöcke
        String icon; double x, y; boolean milestone, gated, marker;
    }

    static final String HQ = "hauptquests";
    static String chapter, chTitle = "", chIcon = "", order = "1";
    static int bis = Integer.MAX_VALUE;
    static Map<String, String> cfgTasks = new HashMap<>(), cfgDeps = new HashMap<>(), cfgIcon = new HashMap<>(), cfgRewards = new HashMap<>(), kNames = new HashMap<>();

    public static void main(String[] a) throws Exception {
        if (a.length == 4 && a[0].equals("--hauptquests")) { hauptquests(Paths.get(a[1]), Paths.get(a[2]), Paths.get(a[3])); return; }
        if (a.length < 3) { System.out.println("Aufruf: java QuestbuchGen.java <md> <cfg> <out.snbt> | --hauptquests <01_PROGRESSION.md> <hauptquests.cfg> <chapters-ordner>"); return; }
        readCfg(Paths.get(a[1]));
        List<Quest> qs = parse(Files.readAllLines(Paths.get(a[0]), StandardCharsets.UTF_8));
        int vorher = qs.size();
        qs.removeIf(q -> q.kGate != null && Integer.parseInt(q.kGate.substring(1)) > bis);
        if (qs.size() < vorher) System.out.println((vorher - qs.size()) + " Quests nach K" + bis + " ausgelassen");
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
            if (cfgRewards.containsKey(q.code)) {
                int r = 0;
                for (String t : cfgRewards.get(q.code).split(";(?![^()]*\\))")) {
                    t = t.trim(); if (t.isEmpty()) continue;
                    q.rewards.add(reward(q, r++, t));
                }
            }
        }
        for (String c : cfgRewards.keySet()) if (!byCode.containsKey(c)) throw new RuntimeException("Belohnung für unbekannte Quest " + c);

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

        // Freischaltung über die Story-Kapitel. FTB koppelt Sichtbarkeit und Voraussetzungen, und eine
        // Quest ohne Aufgabe wird nie als erledigt gespeichert. Deshalb je Abschnitt eine Marke am
        // Zeilenanfang mit der Aufgabe "Stage kapitel_kn", unsichtbar bis erledigt (invisible), ohne
        // Voraussetzung. Die Stage setzt die Hauptquest Kn (Mock) bzw. später der NPC-Dialog.
        // Die erste Quest des Abschnitts hängt an Marke UND Vorgänger und wird mit der Marke sichtbar
        // (hide_until_deps_visible); abschließen geht erst mit dem Vorgänger.
        sec = null;
        List<Quest> all = new ArrayList<>();
        for (Quest q : qs) {
            if (!q.section.equals(sec)) {
                sec = q.section;
                if (q.kGate != null) {
                    Quest mk = new Quest(); mk.code = "M-" + q.kGate; mk.section = q.section; mk.main = true;
                    mk.title = "Kapitel " + q.kGate.substring(1) + ": " + chTitle; mk.marker = true; mk.icon = "minecraft:book";
                    mk.x = -1.75; mk.y = q.y;
                    mk.tasks.add("{\n\t\t\t\tid: \"" + hex(chapter + ":" + mk.code + ":task0") + "\"\n\t\t\t\tstage: \"" + stage(q.kGate)
                        + "\"\n\t\t\t\ttype: \"gamestage\"\n\t\t\t}");
                    mk.desc.add("Freigeschaltet mit " + kapitel(kNames.get(q.kGate)) + ".");
                    all.add(mk); q.deps.add(mk.code);
                }
            }
            all.add(q);
        }
        qs = all;

        // Anordnung horizontal: oben je Abschnitt eine Spalte, Marke darüber, Hauptweg nach unten,
        // Nebenquests in der Spalte rechts daneben (Layout oben ist zeilenweise gerechnet, hier gedreht)
        for (Quest q : qs) { double t = q.x; q.x = q.y; q.y = t; }

        // Im Spiel verschobene Positionen behalten (tools/questbuch/<kapitel>.pos)
        Map<String, Quest> byCode2 = new HashMap<>();
        for (Quest q : qs) byCode2.put(q.code, q);
        Path pos = Paths.get(a[1]).toAbsolutePath().getParent().resolve(chapter + ".pos");
        applyPositions(pos, a.length > 3 ? Paths.get(a[3]) : null, new ArrayList<>(byCode2.keySet()), c -> depId(c),
            (c, xy) -> { Quest q = byCode2.get(c); if (q != null) { q.x = xy[0]; q.y = xy[1]; } });

        write(Paths.get(a[2]), snbt(qs));
        System.out.println(qs.size() + " Quests geschrieben nach " + a[2]);
    }

    /**
     * Positionsdatei "CODE = x, y" lesen und anwenden. Ist ingame angegeben (ein Kapitel aus der Instanz,
     * in dem im Spiel Quests verschoben wurden), werden dessen Positionen vorher übernommen und in die
     * Positionsdatei geschrieben. Quests ohne Eintrag behalten das gerechnete Layout.
     */
    static void applyPositions(Path pos, Path ingame, List<String> codes, java.util.function.Function<String, String> idOf,
                               java.util.function.BiConsumer<String, double[]> set) throws Exception {
        Map<String, double[]> p = new LinkedHashMap<>();
        if (Files.exists(pos)) for (String l : Files.readAllLines(pos, StandardCharsets.UTF_8)) {
            l = l.trim(); if (l.isEmpty() || l.startsWith("#")) continue;
            String[] kv = l.split("=", 2), xy = kv[1].split(",");
            p.put(kv[0].trim(), new double[] { Double.parseDouble(xy[0].trim()), Double.parseDouble(xy[1].trim()) });
        }
        if (ingame != null) {
            Map<String, double[]> byId = new HashMap<>();
            String t = new String(Files.readAllBytes(ingame), StandardCharsets.UTF_8);
            Matcher m = Pattern.compile("\\n\\t\\t\\{(.*?)\\n\\t\\t\\}", Pattern.DOTALL).matcher(t);
            while (m.find()) {
                String b = m.group(1);
                Matcher id = Pattern.compile("\\n\\t\\t\\tid: \"(\\w+)\"").matcher(b);
                Matcher x = Pattern.compile("\\n\\t\\t\\tx: ([-\\d.]+)d").matcher(b);
                Matcher y = Pattern.compile("\\n\\t\\t\\ty: ([-\\d.]+)d").matcher(b);
                if (id.find() && x.find() && y.find())
                    byId.put(id.group(1), new double[] { Double.parseDouble(x.group(1)), Double.parseDouble(y.group(1)) });
            }
            int n = 0;
            for (String c : codes) { double[] xy = byId.get(idOf.apply(c)); if (xy != null) { p.put(c, xy); n++; } }
            StringBuilder sb = new StringBuilder("# Positionen aus dem Spiel (übernommen aus " + ingame.getFileName() + "); CODE = x, y\n");
            for (Map.Entry<String, double[]> e : p.entrySet())
                sb.append(e.getKey()).append(" = ").append(e.getValue()[0]).append(", ").append(e.getValue()[1]).append("\n");
            write(pos, sb.toString());
            System.out.println(n + " Positionen aus " + ingame + " übernommen nach " + pos);
        }
        for (Map.Entry<String, double[]> e : p.entrySet()) set.accept(e.getKey(), e.getValue());
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
        if (a.matches(".*(Dialog|Stage \\(|Nur der Host).*"))
            return (d.find() ? "dim(" + d.group(1) + "); " : "") + "stage(" + storyStage(q.code) + ")";
        Matcher h = Pattern.compile("Häkchen „([^“]+)“").matcher(a);
        if (h.find()) return "check(" + h.group(1) + ")";
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
                case "bis": bis = Integer.parseInt(v.replaceAll("\\D", "")); break;
                default: throw new RuntimeException("Unbekannter Schlüssel " + k);
            } else switch (kp[1]) {
                case "tasks": cfgTasks.put(kp[0], v); break;
                case "deps": cfgDeps.put(kp[0], v); break;
                case "icon": cfgIcon.put(kp[0], v); break;
                case "rewards": cfgRewards.put(kp[0], v); break;
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
                kGate = null;
                if (k.find()) { kGate = k.group(1); kNames.put(kGate, k.group(0).replaceAll("[()]", "")); }
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
            if (l.startsWith("**Steuerdatei:**")) continue;
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
                // Smart Filter von FTB Filter System: "or(item(a)item(b)…)"; FTB Quests erkennt ihn nur
                // mit FTB XMod Compat (Item Filters wird von FTB Quests 2001.4 nicht erkannt)
                StringBuilder f = new StringBuilder("or(");
                for (String i : arg.substring(s + 1).split(",")) {
                    i = i.trim(); if (q.icon == null) q.icon = i;
                    f.append("item(").append(i).append(")");
                }
                f.append(")");
                return "{\n\t\t\t\tid: \"" + id + "\"\n\t\t\t\titem: { Count: 1b, id: \"ftbfiltersystem:smart_filter\", tag: { \"ftbfiltersystem:filter\": \""
                    + f + "\" } }\n\t\t\t\ttitle: \"" + esc(title) + "\"\n\t\t\t\ttype: \"item\"\n\t\t\t}";
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
            case "stage":
                return "{\n\t\t\t\tid: \"" + id + "\"\n\t\t\t\tstage: \"" + arg + "\"\n\t\t\t\ttype: \"gamestage\"\n\t\t\t}";
        }
        throw new RuntimeException(q.code + ": unbekannte Aufgabenart " + m.group(1));
    }

    /** Stage einer Story-Quest, die der Dialog setzt: ST3-05 -> story_st3_05. */
    static String storyStage(String code) { return "story_" + code.toLowerCase().replace("-", "_"); }

    /** Belohnung aus der Steuerdatei; alle für das Team, automatisch abgeholt. */
    static String reward(Quest q, int n, String t) {
        String id = hex(chapter + ":" + q.code + ":reward" + n);
        Matcher m = Pattern.compile("^(\\w+)\\((.*)\\)$").matcher(t);
        if (!m.matches()) throw new RuntimeException(q.code + ": Belohnung nicht lesbar: " + t);
        String arg = m.group(2).trim();
        String head = "{\n\t\t\t\tauto: \"enabled\"\n\t\t\t\t", team = "\t\t\t\tteam_reward: true\n";
        switch (m.group(1)) {
            case "stage":
                return head + "id: \"" + id + "\"\n\t\t\t\tstage: \"" + arg + "\"\n" + team + "\t\t\t\ttype: \"gamestage\"\n\t\t\t}";
            case "command":
                return head + "command: \"" + esc(arg) + "\"\n\t\t\t\televate_perms: true\n\t\t\t\tid: \"" + id
                    + "\"\n\t\t\t\tsilent: true\n" + team + "\t\t\t\ttype: \"command\"\n\t\t\t}";
            case "item": {
                String[] p = arg.split(",");
                return head + (p.length > 1 ? "count: " + p[1].trim() + "\n\t\t\t\t" : "") + "id: \"" + id + "\"\n\t\t\t\titem: \"" + p[0].trim()
                    + "\"\n" + team + "\t\t\t\ttype: \"item\"\n\t\t\t}";
            }
            case "xp":
                return head + "id: \"" + id + "\"\n" + team + "\t\t\t\ttype: \"xp\"\n\t\t\t\txp: " + arg + "\n\t\t\t}";
        }
        throw new RuntimeException(q.code + ": unbekannte Belohnungsart " + m.group(1));
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
            if (q.marker) sb.append("\t\t\tinvisible: true\n");
            else if (q.gated) sb.append("\t\t\thide_until_deps_complete: true\n");
            else if (!q.deps.isEmpty()) sb.append("\t\t\thide_until_deps_visible: true\n");
            if (q.icon != null) sb.append("\t\t\ticon: \"").append(q.icon).append("\"\n");
            sb.append("\t\t\tid: \"").append(depId(q.code)).append("\"\n");
            if (!q.main) sb.append("\t\t\toptional: true\n\t\t\tshape: \"square\"\n");
            if (!q.rewards.isEmpty()) {
                sb.append("\t\t\trewards: [");
                for (int i = 0; i < q.rewards.size(); i++) sb.append(i > 0 ? "\n\t\t\t" : "").append(q.rewards.get(i));
                sb.append("]\n");
            }
            if (q.milestone) sb.append("\t\t\tshape: \"hexagon\"\n\t\t\tsize: 1.5d\n");
            if (q.marker) sb.append("\t\t\tshape: \"gear\"\n");
            sb.append("\t\t\tsubtitle: \"").append(esc(q.section + (q.main ? "" : " · Nebenquest"))).append("\"\n");
            sb.append("\t\t\ttasks: [");
            for (int i = 0; i < q.tasks.size(); i++) sb.append(i > 0 ? "\n\t\t\t" : "").append(q.tasks.get(i));
            sb.append("]\n");
            sb.append("\t\t\ttitle: \"").append(esc(q.title)).append("\"\n");
            sb.append("\t\t\tx: ").append(q.x).append("d\n\t\t\ty: ").append(q.y).append("d\n\t\t}\n");
        }
        return sb.append(chapterTail(chTitle)).toString();
    }

    /** "Kapitel 3: Industrie" aus "K3 Industrie". */
    static String kapitel(String kName) {
        Matcher m = Pattern.compile("^K(\\d+)\\s*(.*)$").matcher(kName);
        return m.matches() ? "Kapitel " + m.group(1) + (m.group(2).isEmpty() ? "" : ": " + m.group(2)) : kName;
    }

    /**
     * Hauptquest-Bücher (Mock): je Part der Kapiteltabelle in 01_PROGRESSION.md ein Tab (Titel aus der
     * Steuerdatei, "buch1 = Buch 1: …"), je Zeile "| Kn Name | Progression | Story |" eine Klick-Quest
     * "Kapitel n: Name". Kn hängt an K(n-1), auch über die Buchgrenze. Die Story-Spalte bleibt draußen
     * (Planungsnotizen, die Story schreibt der User).
     */
    static void hauptquests(Path src, Path cfg, Path outDir) throws Exception {
        Map<String, String> titles = new HashMap<>();
        // im Spiel verschobene Positionen (tools/questbuch/hauptquests.pos, CODE = x, y mit CODE = K1 …)
        Map<String, double[]> hqPos = new HashMap<>();
        applyPositions(cfg.toAbsolutePath().getParent().resolve(HQ + ".pos"), null, List.of(), c -> c, hqPos::put);
        for (String l : Files.readAllLines(cfg, StandardCharsets.UTF_8)) {
            l = l.trim(); if (l.isEmpty() || l.startsWith("#")) continue;
            int eq = l.indexOf('='); titles.put(l.substring(0, eq).trim(), l.substring(eq + 1).trim());
        }
        // ueberspringen = buch1: dieses Buch kommt nicht als Mock, sondern aus den Story-Questtexten (buch1.cfg);
        // vorgaenger = buch1:ST11-04: daran hängt die erste Quest des nächsten Buchs
        Set<String> skip = new HashSet<>(Arrays.asList(titles.getOrDefault("ueberspringen", "").split("\\s*,\\s*")));
        String vorgaenger = titles.get("vorgaenger");
        StringBuilder sb = null; String file = null, prev = null; double x = 0, y = 0; int n = 0, book = 0; boolean firstInBook = false;
        for (String l : Files.readAllLines(src, StandardCharsets.UTF_8)) {
            if (!l.startsWith("| ")) continue;
            String[] c = cells(l);
            if (c[0].startsWith("**Part")) {
                if (sb != null && !skip.contains(file)) write(outDir.resolve(file + ".snbt"), sb.append(chapterTail(titles.get(file))).toString());
                book++; file = "buch" + book; x = 0; firstInBook = true;
                if (skip.contains(file)) { sb = new StringBuilder(); prev = null; continue; }
                if (!titles.containsKey(file)) throw new RuntimeException("Titel für " + file + " fehlt in " + cfg);
                sb = new StringBuilder(chapterHead(file, titles.get(file), "minecraft:written_book", String.valueOf(book - 1)));
                continue;
            }
            Matcher m = Pattern.compile("^(K\\d+) (.+)$").matcher(c[0]);
            if (!m.matches() || sb == null) continue;
            String k = m.group(1);
            if (skip.contains(file)) continue;
            sb.append("\t\t{\n");
            String depHex = prev != null ? hex(HQ + ":" + prev) : (vorgaenger != null && book > 1 ? hex(vorgaenger) : null);
            if (depHex != null) sb.append("\t\t\tdependencies: [\"").append(depHex).append("\"]\n");
            // erste Quest eines späteren Buchs: unsichtbar, bis das vorige Buch fertig ist; der Tab bleibt so verborgen
            if (depHex != null && firstInBook) sb.append("\t\t\thide_until_deps_complete: true\n");
            firstInBook = false;
            sb.append("\t\t\tdescription: [\n\t\t\t\t\"&7Mock: Kapitel per Klick abschließen. Die Belohnung setzt die Stage, mit der die Quests dieses Kapitels in den Mod-Kapiteln erscheinen.&r\"\n")
              .append("\t\t\t\t\"\"\n\t\t\t\t\"&eFortschritt:&r ").append(esc(fmt(c.length > 1 ? c[1] : ""))).append("\"\n\t\t\t]\n");
            sb.append("\t\t\ticon: \"minecraft:book\"\n\t\t\tid: \"").append(hex(HQ + ":" + k)).append("\"\n");
            sb.append("\t\t\tshape: \"hexagon\"\n\t\t\tsize: 1.25d\n");
            sb.append("\t\t\ttasks: [{\n\t\t\t\tid: \"").append(hex(HQ + ":" + k + ":task0"))
              .append("\"\n\t\t\t\ttitle: \"Kapitel abgeschlossen\"\n\t\t\t\ttype: \"checkmark\"\n\t\t\t}]\n");
            // setzt die Stage, an der die Marken der Mod-Kapitel hängen (später setzt sie der NPC-Dialog)
            sb.append("\t\t\trewards: [{\n\t\t\t\tauto: \"enabled\"\n\t\t\t\tid: \"").append(hex(HQ + ":" + k + ":reward0"))
              .append("\"\n\t\t\t\tstage: \"").append(stage(k)).append("\"\n\t\t\t\ttype: \"gamestage\"\n\t\t\t}]\n");
            sb.append("\t\t\ttitle: \"").append(esc(kapitel(k + " " + m.group(2)))).append("\"\n");
            double[] xy = hqPos.getOrDefault(k, new double[] { x, y });
            sb.append("\t\t\tx: ").append(xy[0]).append("d\n\t\t\ty: ").append(xy[1]).append("d\n\t\t}\n");
            prev = k; x += 1.75; n++;
        }
        if (sb != null && !skip.contains(file)) write(outDir.resolve(file + ".snbt"), sb.append(chapterTail(titles.get(file))).toString());
        System.out.println(n + " Hauptquests in " + book + " Büchern geschrieben nach " + outDir);
    }

    /** Stage, die ein Story-Kapitel freischaltet (Hauptquest-Belohnung, später NPC-Dialog). */
    static String stage(String k) { return "kapitel_" + k.toLowerCase(); }

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
