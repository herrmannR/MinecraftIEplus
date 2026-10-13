import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

/**
 * Gibt Rezepte aus den entpackten JARs kompakt aus: Ergebnis, Typ und gezählte Zutaten mit den Namen aus den Sprachdateien.
 *
 * Aufruf: java RecipeDump.java <jars-Ordner> <pfad relativ zum jars-Ordner> [filter]
 *
 * Der Pfad ist eine Rezeptdatei oder ein Ordner (wird rekursiv gelesen), z. B. mek/data/mekanism/recipes/metallurgic_infuser.json
 * oder mek/data/mekanism/recipes/processing. Mit Filter werden nur Dateien ausgegeben, deren Pfad den Text enthält.
 * Crafting-Rezepte erscheinen als "Ergebnis <- 4x A, 2x B"; alle anderen Typen mit ihren Feldern in Kurzform.
 * Bedingungen (conditions) werden mit ausgegeben, damit man sieht, ob ein Rezept im Pack gilt.
 */
public class RecipeDump {
    static Map<String, String> lang = new LinkedHashMap<>();

    public static void main(String[] args) throws Exception {
        File jars = new File(args[0]);
        for (File root : jars.listFiles(File::isDirectory)) {
            File assets = new File(root, "assets");
            if (!assets.isDirectory()) continue;
            for (File ns : assets.listFiles(File::isDirectory)) {
                File l = new File(ns, "lang/en_us.json");
                if (l.isFile()) for (Map.Entry<String, Object> e : obj(parse(Files.readString(l.toPath()))).entrySet()) lang.putIfAbsent(e.getKey(), String.valueOf(e.getValue()));
            }
        }
        Path base = new File(jars, args[1]).toPath();
        List<Path> files;
        try (Stream<Path> s = Files.walk(base)) { files = s.filter(p -> p.toString().endsWith(".json")).sorted().toList(); }
        for (Path p : files) {
            String rel = Files.isDirectory(base) ? base.relativize(p).toString().replace('\\', '/') : p.getFileName().toString();
            if (args.length > 2 && !rel.contains(args[2])) continue;
            Map<String, Object> r = obj(parse(Files.readString(p)));
            System.out.println(rel.replace(".json", "") + ": " + describe(r));
        }
    }

    static String describe(Map<String, Object> r) {
        String type = str(r.get("type")).replace("minecraft:", "");
        String cond = r.get("conditions") != null ? " [Bedingung: " + brief(r.get("conditions")) + "]" : "";
        if (type.equals("forge:conditional")) {
            List<String> parts = new ArrayList<>();
            for (Object o : list(r.get("recipes"))) parts.add("[Bedingung: " + brief(obj(o).get("conditions")) + "] " + describe(obj(obj(o).get("recipe"))));
            return String.join(" | ", parts);
        }
        if (r.get("pattern") != null && r.get("key") != null) {
            Map<String, Integer> n = new LinkedHashMap<>();
            for (Object row : list(r.get("pattern"))) for (char c : str(row).toCharArray()) {
                if (c == ' ') continue;
                Object ing = obj(r.get("key")).get(String.valueOf(c));
                n.merge(ing == null ? "?" + c : ingredient(ing), 1, Integer::sum);
            }
            return result(r.get("result")) + " <- " + counted(n) + (type.equals("crafting_shaped") ? "" : " (" + type + ")") + cond;
        }
        if (r.get("ingredients") instanceof List && type.contains("shapeless")) {
            Map<String, Integer> n = new LinkedHashMap<>();
            for (Object ing : list(r.get("ingredients"))) n.merge(ingredient(ing), 1, Integer::sum);
            return result(r.get("result")) + " <- " + counted(n) + " (formlos)" + cond;
        }
        return "(" + type + ") " + brief(r) + cond;
    }

    static String counted(Map<String, Integer> n) {
        List<String> parts = new ArrayList<>();
        for (Map.Entry<String, Integer> e : n.entrySet()) parts.add(e.getValue() + "x " + e.getKey());
        return String.join(", ", parts);
    }

    static String result(Object res) {
        if (res instanceof String s) return name(s);
        Map<String, Object> m = obj(res);
        String id = str(m.get("item") != null ? m.get("item") : m.get("id"));
        return (m.get("count") != null && num(m.get("count")) != "1" && !num(m.get("count")).equals("1") ? num(m.get("count")) + "x " : "") + name(id);
    }

    static String ingredient(Object in) {
        if (in instanceof List<?> l) {
            List<String> parts = new ArrayList<>();
            for (Object o : l) parts.add(ingredient(o));
            return String.join(" / ", parts);
        }
        Map<String, Object> m = obj(in);
        if (m.get("ingredient") != null) return (m.get("amount") != null ? num(m.get("amount")) + "x " : "") + ingredient(m.get("ingredient"));
        if (m.get("item") != null) return name(str(m.get("item")));
        if (m.get("tag") != null) return "#" + m.get("tag");
        return brief(m);
    }

    /** Beliebiges JSON in einer Zeile, Namen für item/fluid/gas/infuse_type/slurry/pigment aufgelöst, type-Felder weggelassen. */
    static String brief(Object o) {
        if (o instanceof Map<?, ?> raw) {
            Map<String, Object> m = obj(raw);
            List<String> parts = new ArrayList<>();
            for (Map.Entry<String, Object> e : m.entrySet()) {
                String k = e.getKey();
                if (k.equals("type") || k.equals("category") || k.equals("group") || k.equals("show_notification")) continue;
                Object v = e.getValue();
                String val;
                if (v instanceof String s && (k.equals("item") || k.equals("fluid") || k.equals("gas") || k.equals("infuse_type") || k.equals("slurry") || k.equals("pigment") || k.equals("id"))) val = name(s);
                else if (v instanceof String s && k.equals("tag")) val = "#" + s;
                else val = brief(v);
                parts.add(k + "=" + val);
            }
            return "{" + String.join(", ", parts) + "}";
        }
        if (o instanceof List<?> l) {
            List<String> parts = new ArrayList<>();
            for (Object x : l) parts.add(brief(x));
            return "[" + String.join(", ", parts) + "]";
        }
        return o instanceof Number ? num(o) : String.valueOf(o);
    }

    static String name(String id) {
        String key = id.replace(':', '.');
        for (String prefix : new String[]{"item.", "block.", "fluid.", "gas.", "infuse_type.", "slurry.", "pigment.", "fluid_type."}) {
            String n = lang.get(prefix + key);
            if (n != null) return n;
        }
        return id;
    }

    static String num(Object o) { return o instanceof Number n ? (n.doubleValue() == n.longValue() ? String.valueOf(n.longValue()) : String.valueOf(n)) : String.valueOf(o); }
    static String str(Object o) { return o == null ? "" : String.valueOf(o); }
    @SuppressWarnings("unchecked") static Map<String, Object> obj(Object o) { return o instanceof Map ? (Map<String, Object>) o : new LinkedHashMap<>(); }
    @SuppressWarnings("unchecked") static List<Object> list(Object o) { return o instanceof List ? (List<Object>) o : new ArrayList<>(); }

    // --- kleiner JSON-Leser ---
    static int pos; static String src;
    static Object parse(String s) { src = s; pos = 0; return value(); }
    static void ws() { while (pos < src.length() && Character.isWhitespace(src.charAt(pos))) pos++; }
    static Object value() {
        ws();
        char c = src.charAt(pos);
        if (c == '{') {
            Map<String, Object> m = new LinkedHashMap<>(); pos++; ws();
            if (src.charAt(pos) == '}') { pos++; return m; }
            while (true) { ws(); String k = string(); ws(); pos++; m.put(k, value()); ws(); if (src.charAt(pos++) == '}') return m; }
        }
        if (c == '[') {
            List<Object> l = new ArrayList<>(); pos++; ws();
            if (src.charAt(pos) == ']') { pos++; return l; }
            while (true) { l.add(value()); ws(); if (src.charAt(pos++) == ']') return l; }
        }
        if (c == '"') return string();
        int start = pos;
        while (pos < src.length() && ",}] \n\r\t".indexOf(src.charAt(pos)) < 0) pos++;
        String t = src.substring(start, pos);
        if (t.equals("true")) return Boolean.TRUE;
        if (t.equals("false")) return Boolean.FALSE;
        if (t.equals("null")) return null;
        return Double.parseDouble(t);
    }
    static String string() {
        StringBuilder sb = new StringBuilder(); pos++;
        while (src.charAt(pos) != '"') {
            char c = src.charAt(pos++);
            if (c == '\\') {
                char e = src.charAt(pos++);
                switch (e) { case 'n' -> sb.append('\n'); case 't' -> sb.append('\t'); case 'u' -> { sb.append((char) Integer.parseInt(src.substring(pos, pos + 4), 16)); pos += 4; } default -> sb.append(e); }
            } else sb.append(c);
        }
        pos++;
        return sb.toString();
    }
}
