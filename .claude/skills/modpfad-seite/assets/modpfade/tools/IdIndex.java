import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Übersetzt die Item-Namen einer data.js in Registry-IDs, als Markdown-Tabelle für die WISSEN.md eines Mods.
 *
 * Aufruf: java -Dstdout.encoding=UTF-8 IdIndex.java <jars-Ordner> <mod>/data.js [namespace ...] >> <mod>/WISSEN.md
 * (ohne -Dstdout.encoding schreibt Java unter Windows Umlaute in der Konsolen-Codepage)
 *
 * Gelesen werden die Schlüssel item.<ns>.<id> und block.<ns>.<id> aller assets/<ns>/lang/en_us.json im Arbeitsordner.
 * Mehrere Namen in einem Feld werden an ", " und " / " getrennt (wie bei NameCheck). Werden Namespaces angegeben,
 * stehen nur IDs aus diesen; gibt es dort keine, werden die anderen gezeigt. Namen ohne Treffer werden nur gezählt.
 */
public class IdIndex {
    public static void main(String[] args) throws Exception {
        Map<String, List<String>> ids = new TreeMap<>();
        Pattern entry = Pattern.compile("\"(item|block)\\.([a-z0-9_]+)\\.([a-z0-9_/]+)\"\\s*:\\s*\"((?:[^\"\\\\]|\\\\.)*)\"");
        for (File root : new File(args[0]).listFiles(File::isDirectory)) {
            File assets = new File(root, "assets");
            if (!assets.isDirectory()) continue;
            for (File ns : assets.listFiles(File::isDirectory)) {
                File lang = new File(ns, "lang/en_us.json");
                if (!lang.isFile()) continue;
                Matcher m = entry.matcher(Files.readString(lang.toPath()));
                while (m.find()) {
                    String name = m.group(4).replace("\\u0027", "'").replace("\\\"", "\"").toLowerCase();
                    String id = m.group(2) + ":" + m.group(3);
                    List<String> l = ids.computeIfAbsent(name, k -> new ArrayList<>());
                    if (!l.contains(id)) l.add(id);
                }
            }
        }
        List<String> prefer = new ArrayList<>();
        for (int i = 2; i < args.length; i++) prefer.add(args[i]);

        Pattern row = Pattern.compile("\\[(?:\"[a-z0-9_]+:[^\"]+\"|null|B\\.[a-zA-Z]+), \"([^\"]+)\"");
        Matcher m = row.matcher(Files.readString(Path.of(args[1])));
        Map<String, String> found = new LinkedHashMap<>();
        List<String> missing = new ArrayList<>();
        while (m.find()) {
            for (String piece : m.group(1).split(", | / ")) {
                String name = piece.trim();
                if (found.containsKey(name) || missing.contains(name)) continue;
                List<String> l = ids.get(name.toLowerCase());
                if (l == null) l = ids.get(name.toLowerCase().replaceAll("s$", ""));
                if (l == null) { missing.add(name); continue; }
                List<String> pick = new ArrayList<>();
                for (String id : l) if (prefer.contains(id.substring(0, id.indexOf(':')))) pick.add(id);
                if (pick.isEmpty()) pick = l;
                found.put(name, "`" + String.join("`, `", pick) + "`");
            }
        }
        System.out.println("| Name | ID |");
        System.out.println("|---|---|");
        for (Map.Entry<String, String> e : found.entrySet()) System.out.println("| " + e.getKey() + " | " + e.getValue() + " |");
        if (!missing.isEmpty()) {
            System.out.println();
            System.out.println(missing.size() + " Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.");
        }
    }
}
