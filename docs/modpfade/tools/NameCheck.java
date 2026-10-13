import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Prüft, ob die Item- und Maschinennamen einer data.js so in den Sprachdateien der Mods stehen.
 *
 * Aufruf: java NameCheck.java <jars-Ordner> <mod>/data.js [weitere data.js ...]
 *
 * Geprüft wird das Namensfeld jeder Item-Zeile ["bild", "Name", ...]. Mehrere Namen in einem Feld
 * werden an ", " und " / " getrennt. Gemeldet wird jeder Teil, der in keiner assets/<ns>/lang/en_us.json
 * als Wert vorkommt. Sammelbezeichnungen ("Manasteel Tools") sind dann bewusst zu prüfen.
 */
public class NameCheck {
    public static void main(String[] args) throws Exception {
        Set<String> names = new HashSet<>();
        Pattern entry = Pattern.compile("\"[^\"]+\"\\s*:\\s*\"((?:[^\"\\\\]|\\\\.)*)\"");
        for (File root : new File(args[0]).listFiles(File::isDirectory)) {
            File assets = new File(root, "assets");
            if (!assets.isDirectory()) continue;
            for (File ns : assets.listFiles(File::isDirectory)) {
                File lang = new File(ns, "lang/en_us.json");
                if (!lang.isFile()) continue;
                Matcher m = entry.matcher(Files.readString(lang.toPath()));
                while (m.find()) names.add(m.group(1).replace("\\u0027", "'").replace("\\\"", "\"").toLowerCase());
            }
        }
        Pattern row = Pattern.compile("\\[(?:\"[a-z0-9_]+:[^\"]+\"|null|B\\.[a-zA-Z]+), \"([^\"]+)\"");
        for (int i = 1; i < args.length; i++) {
            Matcher m = row.matcher(Files.readString(Path.of(args[i])));
            Set<String> missing = new TreeSet<>();
            int count = 0;
            while (m.find()) {
                for (String piece : m.group(1).split(", | / ")) {
                    count++;
                    String p = piece.trim().toLowerCase();
                    if (!names.contains(p) && !names.contains(p.replaceAll("s$", ""))) missing.add(piece.trim());
                }
            }
            System.out.println("== " + args[i] + ": " + count + " Namen, nicht gefunden " + missing.size());
            for (String s : missing) System.out.println("  " + s);
        }
    }
}
