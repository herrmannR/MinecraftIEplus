import java.io.File;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Gibt ein Patchouli-Buch lesbar aus: Kategorien nach sortnum, darin die Einträge nach sortnum und Name,
 * je Seite Typ, Text (Formatierung entfernt) und die übrigen Felder (Rezepte, Multiblöcke, Items).
 *
 * Aufruf: java -Dstdout.encoding=UTF-8 PatchouliDump.java <buch>/en_us > buch.txt
 *   <buch>/en_us ist der Ordner mit categories/ und entries/,
 *   z. B. bm/assets/bloodmagic/patchouli_books/guide/en_us
 *
 * Ohne Bibliotheken: enthält einen kleinen JSON-Leser.
 */
public class PatchouliDump {
    public static void main(String[] args) throws Exception {
        File root = new File(args[0]);
        Map<String, Map<String, Object>> cats = new LinkedHashMap<>();
        File catDir = new File(root, "categories");
        List<File> catFiles = new ArrayList<>();
        collect(catDir, catFiles);
        for (File f : catFiles) {
            String id = rel(catDir, f);
            cats.put(id, obj(Files.readString(f.toPath())));
        }
        File entDir = new File(root, "entries");
        List<File> entFiles = new ArrayList<>();
        collect(entDir, entFiles);
        Map<String, List<Object[]>> byCat = new LinkedHashMap<>();
        for (File f : entFiles) {
            Map<String, Object> e = obj(Files.readString(f.toPath()));
            String cat = String.valueOf(e.get("category"));
            cat = cat.contains(":") ? cat.substring(cat.indexOf(':') + 1) : cat;
            byCat.computeIfAbsent(cat, k -> new ArrayList<>()).add(new Object[]{rel(entDir, f), e});
        }
        List<String> order = new ArrayList<>(cats.keySet());
        for (String c : byCat.keySet()) if (!order.contains(c)) order.add(c);
        order.sort((a, b) -> Double.compare(num(cats.get(a), "sortnum"), num(cats.get(b), "sortnum")));
        for (String c : order) {
            Map<String, Object> cat = cats.get(c);
            System.out.println("\n######## KATEGORIE " + c + (cat != null ? " – " + cat.get("name") + " [sortnum " + cat.get("sortnum") + ", parent " + cat.get("parent") + "]" : ""));
            if (cat != null && cat.get("description") != null) System.out.println(clean(String.valueOf(cat.get("description"))));
            List<Object[]> list = byCat.getOrDefault(c, new ArrayList<>());
            list.sort((a, b) -> {
                @SuppressWarnings("unchecked") Map<String, Object> ea = (Map<String, Object>) a[1], eb = (Map<String, Object>) b[1];
                int s = Double.compare(num(ea, "sortnum"), num(eb, "sortnum"));
                return s != 0 ? s : String.valueOf(ea.get("name")).compareTo(String.valueOf(eb.get("name")));
            });
            for (Object[] o : list) {
                @SuppressWarnings("unchecked") Map<String, Object> e = (Map<String, Object>) o[1];
                System.out.println("\n### " + e.get("name") + "  (" + o[0] + ", sortnum " + e.get("sortnum")
                        + (e.get("advancement") != null ? ", advancement " + e.get("advancement") : "")
                        + (e.get("icon") != null ? ", icon " + e.get("icon") : "") + ")");
                Object pages = e.get("pages");
                if (!(pages instanceof List)) continue;
                int n = 0;
                for (Object p : (List<?>) pages) {
                    n++;
                    if (!(p instanceof Map)) continue;
                    @SuppressWarnings("unchecked") Map<String, Object> pg = (Map<String, Object>) p;
                    StringBuilder extra = new StringBuilder();
                    for (Map.Entry<String, Object> en : pg.entrySet()) {
                        String k = en.getKey();
                        if (k.equals("type") || k.equals("text") || k.equals("title")) continue;
                        extra.append(" ").append(k).append("=").append(short_(en.getValue()));
                    }
                    System.out.println("  [" + n + "] " + pg.get("type") + (pg.get("title") != null ? " „" + clean(String.valueOf(pg.get("title"))) + "“" : "") + extra);
                    if (pg.get("text") != null) System.out.println("      " + clean(String.valueOf(pg.get("text"))).replace("\n", "\n      "));
                }
            }
        }
    }

    static String short_(Object v) {
        String s = v instanceof String ? (String) v : String.valueOf(v);
        return s.length() > 400 ? s.substring(0, 400) + "…" : s;
    }

    static double num(Map<String, Object> m, String k) {
        if (m == null || !(m.get(k) instanceof Number)) return 9999;
        return ((Number) m.get(k)).doubleValue();
    }

    static String clean(String t) {
        t = t.replace("$(br2)", "\n\n").replace("$(br)", "\n").replace("$(li)", "\n • ");
        t = t.replaceAll("\\$\\(l:[^)]*\\)", "").replaceAll("\\$\\([^)]*\\)", "");
        return t;
    }

    static void collect(File d, List<File> out) {
        File[] fs = d.listFiles();
        if (fs == null) return;
        for (File f : fs) if (f.isDirectory()) collect(f, out); else if (f.getName().endsWith(".json")) out.add(f);
    }

    static String rel(File base, File f) {
        String r = base.toPath().relativize(f.toPath()).toString().replace('\\', '/');
        return r.substring(0, r.length() - 5);
    }

    // --- kleiner JSON-Leser ---
    static String src; static int pos;

    @SuppressWarnings("unchecked")
    static Map<String, Object> obj(String s) {
        src = s; pos = 0;
        Object o = val();
        return o instanceof Map ? (Map<String, Object>) o : new LinkedHashMap<>();
    }

    static void ws() {
        while (pos < src.length()) {
            char c = src.charAt(pos);
            if (Character.isWhitespace(c)) pos++;
            else if (c == '/' && pos + 1 < src.length() && src.charAt(pos + 1) == '/') { while (pos < src.length() && src.charAt(pos) != '\n') pos++; }
            else break;
        }
    }

    static Object val() {
        ws();
        char c = src.charAt(pos);
        if (c == '{') {
            pos++; Map<String, Object> m = new LinkedHashMap<>();
            ws(); if (src.charAt(pos) == '}') { pos++; return m; }
            while (true) {
                ws(); String k = str(); ws(); pos++; // ':'
                m.put(k, val()); ws();
                char d = src.charAt(pos++);
                if (d == '}') return m;
            }
        }
        if (c == '[') {
            pos++; List<Object> l = new ArrayList<>();
            ws(); if (src.charAt(pos) == ']') { pos++; return l; }
            while (true) {
                l.add(val()); ws();
                char d = src.charAt(pos++);
                if (d == ']') return l;
            }
        }
        if (c == '"') return str();
        int st = pos;
        while (pos < src.length() && ",}] \n\r\t".indexOf(src.charAt(pos)) < 0) pos++;
        String w = src.substring(st, pos);
        if (w.equals("true")) return Boolean.TRUE;
        if (w.equals("false")) return Boolean.FALSE;
        if (w.equals("null")) return null;
        try { return Double.parseDouble(w); } catch (NumberFormatException e) { return w; }
    }

    static String str() {
        StringBuilder b = new StringBuilder();
        pos++; // "
        while (true) {
            char c = src.charAt(pos++);
            if (c == '"') return b.toString();
            if (c == '\\') {
                char n = src.charAt(pos++);
                switch (n) {
                    case 'n': b.append('\n'); break;
                    case 't': b.append('\t'); break;
                    case 'u': b.append((char) Integer.parseInt(src.substring(pos, pos + 4), 16)); pos += 4; break;
                    default: b.append(n);
                }
            } else b.append(c);
        }
    }
}
