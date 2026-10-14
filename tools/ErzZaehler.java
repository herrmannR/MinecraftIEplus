import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.stream.*;
import java.util.zip.*;

/**
 * Zählt Erzblöcke in einer gespeicherten Welt (Minecraft 1.18+), getrennt nach Dimension.
 * Liest die Region-Dateien direkt; die Welt darf dabei nicht im Spiel geöffnet sein.
 *
 * Aufruf:  java tools/ErzZaehler.java "<Pfad zur Welt>" [Filter-Regex]
 * Standard-Filter: alles mit "ore", dazu Kyber, Budding-Certus, Salz.
 * Gezählt werden nur fertig erzeugte Chunks (Status "full").
 */
public class ErzZaehler {
    static final String STANDARD = "(_ore$|:ore_|_ore_|kyber|budding|block_salt|ancient_debris)";

    public static void main(String[] args) throws Exception {
        if (args.length < 1) { System.out.println("Aufruf: java ErzZaehler.java <Weltordner> [Filter-Regex]"); return; }
        Path welt = Paths.get(args[0]);
        java.util.regex.Pattern filter = java.util.regex.Pattern.compile(args.length > 1 ? args[1] : STANDARD);
        Map<String, Path> dims = new TreeMap<>();
        if (Files.isDirectory(welt.resolve("region"))) dims.put("minecraft:overworld", welt.resolve("region"));
        if (Files.isDirectory(welt.resolve("DIM-1/region"))) dims.put("minecraft:the_nether", welt.resolve("DIM-1/region"));
        if (Files.isDirectory(welt.resolve("DIM1/region"))) dims.put("minecraft:the_end", welt.resolve("DIM1/region"));
        Path d = welt.resolve("dimensions");
        if (Files.isDirectory(d)) try (Stream<Path> s = Files.walk(d, 3)) {
            for (Path p : s.filter(x -> x.getFileName().toString().equals("region")).collect(Collectors.toList()))
                dims.put(p.getParent().getParent().getFileName() + ":" + p.getParent().getFileName(), p);
        }
        for (var e : dims.entrySet()) auswerten(e.getKey(), e.getValue(), filter);
    }

    static void auswerten(String dim, Path region, java.util.regex.Pattern filter) throws Exception {
        Map<String, long[]> zahl = new TreeMap<>();   // Block -> {Anzahl, Summe Y, min Y, max Y}
        int chunks = 0;
        List<Path> dateien;
        try (Stream<Path> s = Files.list(region)) { dateien = s.filter(p -> p.toString().endsWith(".mca")).collect(Collectors.toList()); }
        for (Path f : dateien) {
            byte[] b = Files.readAllBytes(f);
            if (b.length < 8192) continue;
            for (int i = 0; i < 1024; i++) {
                int off = ((b[i * 4] & 0xFF) << 16 | (b[i * 4 + 1] & 0xFF) << 8 | (b[i * 4 + 2] & 0xFF)) * 4096;
                if (off == 0 || off + 5 > b.length) continue;
                int len = (b[off] & 0xFF) << 24 | (b[off + 1] & 0xFF) << 16 | (b[off + 2] & 0xFF) << 8 | (b[off + 3] & 0xFF);
                int art = b[off + 4];
                if (len <= 1 || off + 4 + len > b.length) continue;
                InputStream in = new ByteArrayInputStream(b, off + 5, len - 1);
                if (art == 2) in = new InflaterInputStream(in); else if (art == 1) in = new GZIPInputStream(in); else if (art != 3) continue;
                Map<String, Object> c;
                try (DataInputStream dis = new DataInputStream(new BufferedInputStream(in))) { c = wurzel(dis); } catch (Exception ex) { continue; }
                Object status = c.get("Status");
                if (status == null || !status.toString().endsWith("full")) continue;
                chunks++;
                Object secs = c.get("sections");
                if (!(secs instanceof List<?> liste)) continue;
                for (Object so : liste) {
                    if (!(so instanceof Map<?, ?> sec)) continue;
                    if (!(sec.get("block_states") instanceof Map<?, ?> bs)) continue;
                    if (!(bs.get("palette") instanceof List<?> pal)) continue;
                    int[] treffer = new int[pal.size()]; String[] namen = new String[pal.size()]; boolean etwas = false;
                    for (int k = 0; k < pal.size(); k++) {
                        String name = String.valueOf(((Map<?, ?>) pal.get(k)).get("Name"));
                        if (filter.matcher(name).find()) { namen[k] = name; etwas = true; }
                    }
                    if (!etwas) continue;
                    int sy = ((Number) sec.get("Y")).intValue();
                    if (!(bs.get("data") instanceof long[] daten)) {          // ganze Sektion aus einem Block
                        if (namen[0] != null) merken(zahl, namen[0], 4096, sy * 16 + 8);
                        continue;
                    }
                    int bits = Math.max(4, 32 - Integer.numberOfLeadingZeros(pal.size() - 1));
                    int proLong = 64 / bits; long maske = (1L << bits) - 1;
                    for (int idx = 0; idx < 4096; idx++) {
                        int p = (int) ((daten[idx / proLong] >>> ((idx % proLong) * bits)) & maske);
                        if (p < namen.length && namen[p] != null) merken(zahl, namen[p], 1, sy * 16 + (idx >> 8));
                    }
                }
            }
        }
        System.out.printf("%n=== %s: %d fertige Chunks ===%n", dim, chunks);
        if (chunks == 0) return;
        System.out.printf("%-48s %9s %10s %6s %6s %6s%n", "Block", "Anzahl", "pro Chunk", "Y min", "Y Ø", "Y max");
        for (var e : zahl.entrySet()) {
            long[] v = e.getValue();
            System.out.printf(Locale.GERMANY, "%-48s %9d %10.2f %6d %6d %6d%n", e.getKey(), v[0], v[0] / (double) chunks, v[2], v[1] / v[0], v[3]);
        }
        if (zahl.isEmpty()) System.out.println("(keine passenden Blöcke)");
    }

    static void merken(Map<String, long[]> zahl, String name, int n, int y) {
        long[] v = zahl.computeIfAbsent(name, k -> new long[]{0, 0, Integer.MAX_VALUE, Integer.MIN_VALUE});
        v[0] += n; v[1] += (long) y * n; v[2] = Math.min(v[2], y); v[3] = Math.max(v[3], y);
    }

    // --- minimaler NBT-Leser ---
    @SuppressWarnings("unchecked")
    static Map<String, Object> wurzel(DataInputStream in) throws IOException {
        if (in.readByte() != 10) throw new IOException("kein Compound");
        in.readUTF();
        return (Map<String, Object>) lies(in, 10);
    }

    static Object lies(DataInputStream in, int typ) throws IOException {
        switch (typ) {
            case 1: return in.readByte();
            case 2: return in.readShort();
            case 3: return in.readInt();
            case 4: return in.readLong();
            case 5: return in.readFloat();
            case 6: return in.readDouble();
            case 7: { byte[] a = new byte[in.readInt()]; in.readFully(a); return a; }
            case 8: return in.readUTF();
            case 9: { int t = in.readByte(); int n = in.readInt(); List<Object> l = new ArrayList<>(Math.max(n, 0)); for (int i = 0; i < n; i++) l.add(lies(in, t)); return l; }
            case 10: { Map<String, Object> m = new HashMap<>(); for (int t; (t = in.readByte()) != 0; ) { String k = in.readUTF(); m.put(k, lies(in, t)); } return m; }
            case 11: { int[] a = new int[in.readInt()]; for (int i = 0; i < a.length; i++) a[i] = in.readInt(); return a; }
            case 12: { long[] a = new long[in.readInt()]; for (int i = 0; i < a.length; i++) a[i] = in.readLong(); return a; }
            default: throw new IOException("unbekannter NBT-Typ " + typ);
        }
    }
}
