import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.stream.Stream;

/**
 * Liest alle Modifier-Rezepte von Tinkers' Construct und TCIntegrations aus den entpackten JARs
 * und schreibt sie als Tabellenzeilen nach tinkers/modifiers.js.
 *
 * Aufruf: java ModifierDump.java <jars-Ordner> <modids.txt> <ausgabe.js>
 *
 * modids.txt enthält je Zeile eine Mod-ID des Packs. Rezepte mit der Bedingung forge:mod_loaded für
 * einen fehlenden Mod und Rezepte mit Items aus fehlenden Mods werden ausgelassen.
 */
public class ModifierDump {
    static Map<String, String> lang = new LinkedHashMap<>();
    static Set<String> mods = new HashSet<>();
    static List<String> skipped = new ArrayList<>();

    public static void main(String[] args) throws Exception {
        File jars = new File(args[0]);
        mods.addAll(Files.readAllLines(Path.of(args[1])));
        mods.add("minecraft"); mods.add("forge");
        for (File root : jars.listFiles(File::isDirectory)) {
            File assets = new File(root, "assets");
            if (!assets.isDirectory()) continue;
            for (File ns : assets.listFiles(File::isDirectory)) {
                File l = new File(ns, "lang/en_us.json");
                if (l.isFile()) for (Map.Entry<String, Object> e : obj(parse(Files.readString(l.toPath()))).entrySet()) lang.putIfAbsent(e.getKey(), String.valueOf(e.getValue()));
            }
        }
        // Kategorie -> Schlüssel (Modifier|Werkzeuge|Stufe|Slots) -> Zeile
        Map<String, Map<String, String[]>> cats = new LinkedHashMap<>();
        for (String c : new String[]{"upgrade", "ability", "defense", "slotless", "compat"}) cats.put(c, new TreeMap<>());
        scan(new File(jars, "tc/data/tconstruct/recipes/tools/modifiers"), cats, null);
        scan(new File(jars, "tci/data/tcintegrations/recipes/tools/modifiers/compat"), cats, "compat");

        StringBuilder out = new StringBuilder("// Erzeugt von tools/ModifierDump.java aus den Rezept-JSONs der JARs. Nicht von Hand ändern.\n");
        out.append("// Zeile: [Bild, Modifier, Slot, Zutaten, Für, Stufe]\nconst MODIFIERS = {\n");
        for (Map.Entry<String, Map<String, String[]>> c : cats.entrySet()) {
            out.append("  ").append(c.getKey()).append(": [\n");
            for (String[] r : c.getValue().values()) {
                out.append("    [");
                for (int i = 0; i < r.length; i++) out.append(i > 0 ? ", " : "").append(r[i] == null ? "null" : "\"" + r[i].replace("\\", "\\\\").replace("\"", "\\\"") + "\"");
                out.append("],\n");
            }
            out.append("  ],\n");
            System.out.println(c.getKey() + ": " + c.getValue().size() + " Zeilen");
        }
        out.append("};\n");
        Files.writeString(Path.of(args[2]), out.toString(), StandardCharsets.UTF_8);
        System.out.println("ausgelassen: " + skipped.size());
        for (String s : skipped) System.out.println("  " + s);
    }

    static void scan(File dir, Map<String, Map<String, String[]>> cats, String forceCat) throws Exception {
        List<Path> files;
        try (Stream<Path> s = Files.walk(dir.toPath())) { files = s.filter(p -> p.toString().endsWith(".json")).sorted().toList(); }
        for (Path p : files) {
            String rel = dir.toPath().relativize(p).toString().replace('\\', '/');
            String cat = forceCat != null ? forceCat : rel.contains("/") ? rel.substring(0, rel.indexOf('/')) : "";
            if (!cats.containsKey(cat) || rel.contains("/embellishment/")) continue;
            Map<String, Object> r = obj(parse(Files.readString(p)));
            String type = str(r.get("type"));
            String reason = unavailable(r);
            if (reason != null) { skipped.add(rel + " (" + reason + ")"); continue; }
            String result, ingredients, slots = slots(r.get("slots")), level = level(r.get("level"), r.get("max_level"));
            switch (type) {
                case "tconstruct:modifier", "tconstruct:swappable_modifier" -> ingredients = counted(list(r.get("inputs")), false);
                case "tconstruct:multilevel_modifier" -> { ingredients = counted(list(r.get("inputs")), true); String[] ls = levels(list(r.get("levels"))); slots = ls[0]; level = ls[1]; }
                case "tconstruct:incremental_modifier" -> ingredients = perLevel(r);
                case "tconstruct:multilevel_incremental_modifier" -> { ingredients = perLevel(r); String[] ls = levels(list(r.get("levels"))); slots = ls[0]; level = ls[1]; }
                case "tconstruct:overslime_modifier", "tconstruct:crafting_overslime_modifier" -> {
                    String key = "overslime|" + rel;
                    cats.get(cat).put(key, new String[]{"tconstruct:item/slot/slotless", "Overslime auffüllen", "–", ingredient(r.get("ingredient")) + " (+" + num(r.get("restore_amount")) + ")", tools(r.get("tools")), "–"});
                    continue;
                }
                default -> { skipped.add(rel + " (Typ " + type + ")"); continue; }
            }
            Object res = r.get("result");
            String id = res instanceof Map ? str(obj(res).get("name")) : str(res);
            String variant = res instanceof Map && obj(res).get("value") != null ? " (" + str(obj(res).get("value")).replaceAll("^[a-z_]+:", "") + ")" : "";
            if (res instanceof Map && obj(res).get("level") != null && level.equals("1")) level = num(obj(res).get("level"));
            result = lang.getOrDefault("modifier." + id.replace(':', '.'), id) + variant;
            String tools = tools(r.get("tools"));
            String icon = "tconstruct:item/slot/" + (slots.contains("Ability") ? "ability" : slots.contains("Defense") ? "defense" : slots.contains("Upgrade") ? "upgrade" : "slotless");
            String key = result + "|" + tools + "|" + level + "|" + slots;
            String[] old = cats.get(cat).get(key);
            if (old != null) { if (!old[3].contains(ingredients)) old[3] += " <i>oder</i> " + ingredients; }
            else cats.get(cat).put(key, new String[]{icon, result, slots, ingredients, tools, level});
        }
    }

    /** Grund, warum ein Rezept im Pack nicht gilt, sonst null. */
    static String unavailable(Object node) {
        if (node instanceof Map<?, ?> m) {
            if ("forge:mod_loaded".equals(m.get("type")) && !mods.contains(String.valueOf(m.get("modid")))) return "Mod " + m.get("modid") + " fehlt";
            Object item = m.get("item");
            if (item instanceof String s && s.contains(":") && !mods.contains(s.substring(0, s.indexOf(':')))) return "Item " + s + " fehlt";
            for (Object v : m.values()) { String r = unavailable(v); if (r != null) return r; }
        } else if (node instanceof List<?> l) {
            for (Object v : l) { String r = unavailable(v); if (r != null) return r; }
        }
        return null;
    }

    static String counted(List<Object> inputs, boolean amountNeeded) {
        Map<String, Integer> n = new LinkedHashMap<>();
        for (Object in : inputs) {
            int c = amountNeeded && in instanceof Map && obj(in).get("amount_needed") != null ? ((Number) obj(in).get("amount_needed")).intValue() : 1;
            n.merge(ingredient(in), c, Integer::sum);
        }
        List<String> parts = new ArrayList<>();
        for (Map.Entry<String, Integer> e : n.entrySet()) parts.add(e.getValue() + "× " + e.getKey());
        return String.join(", ", parts);
    }

    static String perLevel(Map<String, Object> r) {
        double needed = ((Number) r.get("needed_per_level")).doubleValue();
        double per = r.get("amount_per_item") == null ? 1 : ((Number) r.get("amount_per_item")).doubleValue();
        return (int) Math.ceil(needed / per) + "× " + ingredient(r.get("input")) + " je Stufe";
    }

    static String ingredient(Object in) {
        if (in instanceof List<?> l) {
            List<String> parts = new ArrayList<>();
            for (Object o : l) parts.add(ingredient(o));
            return String.join(" / ", parts);
        }
        Map<String, Object> m = obj(in);
        if (m.get("ingredient") != null) return ingredient(m.get("ingredient"));
        if (m.get("item") != null) return name(str(m.get("item")));
        if (m.get("tag") != null && m.get("type") == null) return "<code>#" + m.get("tag") + "</code>";
        String type = str(m.get("type"));
        switch (type) {
            case "forge:difference": return ingredient(m.get("base")) + " (ohne " + ingredient(m.get("subtracted")) + ")";
            case "forge:intersection": { List<String> parts = new ArrayList<>(); for (Object o : list(m.get("children"))) parts.add(ingredient(o)); return String.join(" ∩ ", parts); }
            case "forge:compound": return ingredient(m.get("children"));
            case "tconstruct:no_container": return m.get("match") != null ? ingredient(m.get("match")) : "<code>#" + m.get("tag") + "</code> (leer)";
            case "mantle:fluid_container": return "Behälter mit " + (m.get("fluid") != null ? name(str(m.get("fluid"))) : "<code>#" + m.get("tag") + "</code>");
            case "tconstruct:material": return (m.get("item") != null ? name(str(m.get("item"))) : "Bauteil") + (m.get("material") != null ? " aus " + str(m.get("material")).replaceAll("^[a-z_]+:", "") : "");
            case "forge:partial_nbt", "forge:nbt": return name(str(m.get("item") != null ? m.get("item") : list(m.get("items")).get(0)));
            default: return m.get("tag") != null ? "<code>#" + m.get("tag") + "</code>" : "<code>" + type + "</code>";
        }
    }

    static String name(String id) {
        String key = id.replace(':', '.');
        String n = lang.get("item." + key);
        if (n == null) n = lang.get("block." + key);
        if (n == null) n = lang.get("fluid." + key);
        return n != null ? n : "<code>" + id + "</code>";
    }

    static String slots(Object slots) {
        if (!(slots instanceof Map)) return "–";
        List<String> parts = new ArrayList<>();
        for (Map.Entry<String, Object> e : obj(slots).entrySet()) parts.add(num(e.getValue()) + " " + switch (e.getKey()) { case "upgrades" -> "Upgrade"; case "abilities" -> "Ability"; case "defense" -> "Defense"; case "souls" -> "Soul"; default -> e.getKey(); });
        return String.join(", ", parts);
    }

    static String level(Object level, Object maxLevel) {
        if (level instanceof Map) {
            Map<String, Object> m = obj(level);
            if (m.get("min") != null && m.get("max") != null) return num(m.get("min")) + "–" + num(m.get("max"));
            if (m.get("max") != null) return "bis " + num(m.get("max"));
            if (m.get("min") != null) return "ab " + num(m.get("min"));
        }
        if (level != null) return num(level);
        return maxLevel != null ? "bis " + num(maxLevel) : "beliebig";
    }

    /** [Slots je Stufe, Stufenbereich] für mehrstufige Rezepte. */
    static String[] levels(List<Object> levels) {
        List<String> parts = new ArrayList<>();
        String last = "1";
        for (Object o : levels) {
            Map<String, Object> m = obj(o);
            String lv = level(m.get("level"), null);
            parts.add("Stufe " + lv + ": " + (m.get("slots") == null ? "kein Slot" : slots(m.get("slots"))));
            last = lv.replaceAll(".*[–\\s]", "");
        }
        return new String[]{String.join("; ", parts), "bis " + last};
    }

    static String tools(Object tools) {
        if (tools == null) return "alle";
        List<String> parts = new ArrayList<>();
        for (Object o : tools instanceof List ? list(tools) : List.of(tools)) {
            Map<String, Object> m = obj(o);
            parts.add(m.get("tag") != null ? str(m.get("tag")).replace("tconstruct:modifiable/", "").replace("tconstruct:", "") : m.get("item") != null ? name(str(m.get("item"))) : ingredient(o));
        }
        return String.join(", ", parts);
    }

    static String num(Object o) { return o instanceof Number n ? (n.doubleValue() == n.intValue() ? String.valueOf(n.intValue()) : String.valueOf(n)) : String.valueOf(o); }
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
