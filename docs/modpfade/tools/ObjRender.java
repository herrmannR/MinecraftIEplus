import javax.imageio.ImageIO;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Zeichnet OBJ-Modelle aus den Mod-JARs als Bild (Parallelprojektion, schräg von oben), für Blöcke ohne flache Textur.
 *
 * Aufruf: java ObjRender.java <jars-Ordner> <liste.txt> [nur-dieser-name]
 *
 * Die Liste hat je Zeile: name  gier  neigung  modell.obj[,weiteres.obj]  [platzhalter=namespace:pfad ...]
 * Modellpfade sind relativ zu <jars-Ordner>. Gier und Neigung in Grad (0 90 = Draufsicht).
 * Ergebnis: <jars-Ordner>/_render/assets/render/textures/model/<name>.png (groß) und <name>_s.png (64 px für Slots),
 * in data.js als "render:model/<name>" bzw. "render:model/<name>_s" verwendbar.
 */
public class ObjRender {
    static final int BIG = 280, SMALL = 64, SS = 3;
    static File[] roots;

    static class Tri { double[][] p = new double[3][]; double[][] t = new double[3][]; BufferedImage tex; }

    public static void main(String[] args) throws Exception {
        File jars = new File(args[0]);
        roots = jars.listFiles(File::isDirectory);
        File out = new File(jars, "_render/assets/render/textures/model");
        out.mkdirs();
        for (String line : Files.readAllLines(new File(args[1]).toPath(), StandardCharsets.UTF_8)) {
            line = line.trim();
            if (line.isEmpty() || line.startsWith("#")) continue;
            String[] f = line.split("\\s+");
            if (args.length > 2 && !args[2].equals(f[0])) continue;
            Map<String, String> placeholders = new HashMap<>();
            for (int i = 4; i < f.length; i++) placeholders.put(f[i].substring(0, f[i].indexOf('=')), f[i].substring(f[i].indexOf('=') + 1));
            List<Tri> tris = new ArrayList<>();
            for (String model : f[3].split(",")) load(new File(jars, model), placeholders, tris);
            if (tris.isEmpty()) { System.err.println("LEER: " + f[0]); continue; }
            BufferedImage big = render(tris, Double.parseDouble(f[1]), Double.parseDouble(f[2]), BIG);
            ImageIO.write(big, "png", new File(out, f[0] + ".png"));
            ImageIO.write(render(tris, Double.parseDouble(f[1]), Double.parseDouble(f[2]), SMALL), "png", new File(out, f[0] + "_s.png"));
            System.out.println(f[0] + ": " + tris.size() + " Dreiecke");
        }
    }

    static void load(File obj, Map<String, String> placeholders, List<Tri> tris) throws Exception {
        if (!obj.isFile()) { System.err.println("FEHLT: " + obj); return; }
        List<double[]> v = new ArrayList<>(), vt = new ArrayList<>();
        Map<String, BufferedImage> mats = new HashMap<>();
        BufferedImage cur = null;
        for (String line : Files.readAllLines(obj.toPath(), StandardCharsets.ISO_8859_1)) {
            String[] s = line.trim().split("\\s+");
            switch (s[0]) {
                case "mtllib" -> loadMtl(new File(obj.getParentFile(), s[1]), placeholders, mats);
                case "usemtl" -> cur = mats.get(s[1]);
                case "v" -> v.add(new double[]{Double.parseDouble(s[1]), Double.parseDouble(s[2]), Double.parseDouble(s[3])});
                case "vt" -> vt.add(new double[]{Double.parseDouble(s[1]), Double.parseDouble(s[2])});
                case "f" -> {
                    double[][] p = new double[s.length - 1][], t = new double[s.length - 1][];
                    for (int i = 1; i < s.length; i++) {
                        String[] idx = s[i].split("/");
                        int vi = Integer.parseInt(idx[0]);
                        p[i - 1] = v.get(vi > 0 ? vi - 1 : v.size() + vi);
                        if (idx.length > 1 && !idx[1].isEmpty()) {
                            int ti = Integer.parseInt(idx[1]);
                            int tIdx = ti > 0 ? ti - 1 : vt.size() + ti;
                            t[i - 1] = tIdx >= 0 && tIdx < vt.size() ? vt.get(tIdx) : new double[]{0, 0};
                        } else t[i - 1] = new double[]{0, 0};
                    }
                    for (int i = 1; i + 1 < p.length; i++) {
                        Tri tri = new Tri();
                        tri.p[0] = p[0]; tri.p[1] = p[i]; tri.p[2] = p[i + 1];
                        tri.t[0] = t[0]; tri.t[1] = t[i]; tri.t[2] = t[i + 1];
                        tri.tex = cur;
                        tris.add(tri);
                    }
                }
                default -> { }
            }
        }
    }

    static void loadMtl(File mtl, Map<String, String> placeholders, Map<String, BufferedImage> mats) throws Exception {
        if (!mtl.isFile()) return;
        String name = null;
        for (String line : Files.readAllLines(mtl.toPath(), StandardCharsets.ISO_8859_1)) {
            String[] s = line.trim().split("\\s+");
            if (s[0].equals("newmtl")) name = s[1];
            else if (s[0].equals("map_Kd") && name != null) {
                String ref = s[1].startsWith("#") ? placeholders.get(s[1].substring(1)) : s[1];
                BufferedImage img = ref == null ? null : texture(ref);
                if (img == null) System.err.println("  Textur fehlt: " + s[1] + " in " + mtl.getName());
                mats.put(name, img);
            }
        }
    }

    static int mix(int c, int glass, int alpha) { return (c * alpha + glass * (255 - alpha)) / 255; }

    static BufferedImage texture(String ref) throws Exception {
        String ns = ref.contains(":") ? ref.substring(0, ref.indexOf(':')) : "minecraft";
        String path = ref.substring(ref.indexOf(':') + 1);
        for (File root : roots) {
            File f = new File(root, "assets/" + ns + "/textures/" + path + ".png");
            if (f.isFile()) {
                BufferedImage img = ImageIO.read(f);
                // animierte Texturen sind Streifen aus quadratischen Bildern
                if (img.getHeight() > img.getWidth() && img.getHeight() % img.getWidth() == 0) img = img.getSubimage(0, 0, img.getWidth(), img.getWidth());
                return img;
            }
        }
        return null;
    }

    static BufferedImage render(List<Tri> tris, double yawDeg, double pitchDeg, int size) {
        double yaw = Math.toRadians(yawDeg), pitch = Math.toRadians(pitchDeg);
        double cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
        // Bildkoordinaten: x nach rechts, y nach oben, z zum Betrachter
        double[][][] q = new double[tris.size()][3][3];
        double minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
        for (int i = 0; i < tris.size(); i++) for (int k = 0; k < 3; k++) {
            double[] p = tris.get(i).p[k];
            double x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy;
            double y = p[1] * cp - z * sp, d = p[1] * sp + z * cp;
            q[i][k] = new double[]{x, y, d};
            minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        }
        int n = size * SS;
        double scale = (n - 2.0 * SS) / Math.max(maxX - minX, maxY - minY);
        int w = (int) Math.ceil((maxX - minX) * scale) + 2 * SS, h = (int) Math.ceil((maxY - minY) * scale) + 2 * SS;
        int[] rgb = new int[w * h];
        double[] depth = new double[w * h];
        java.util.Arrays.fill(depth, -1e18);
        for (int i = 0; i < tris.size(); i++) {
            Tri tri = tris.get(i);
            double[] a = tri.p[0], b = tri.p[1], c = tri.p[2];
            double nx = (b[1] - a[1]) * (c[2] - a[2]) - (b[2] - a[2]) * (c[1] - a[1]);
            double ny = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]);
            double nz = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
            double len = Math.sqrt(nx * nx + ny * ny + nz * nz);
            if (len < 1e-12) continue;
            nx /= len; ny /= len; nz /= len;
            // Helligkeit wie bei Minecraft-Blöcken: oben hell, Seiten abgestuft, unten dunkel
            double shade = nx * nx * 0.62 + ny * ny * (ny > 0 ? 1.0 : 0.5) + nz * nz * 0.82;
            double[] x = new double[3], y = new double[3];
            for (int k = 0; k < 3; k++) { x[k] = (q[i][k][0] - minX) * scale + SS; y[k] = (maxY - q[i][k][1]) * scale + SS; }
            double area = (x[1] - x[0]) * (y[2] - y[0]) - (x[2] - x[0]) * (y[1] - y[0]);
            if (Math.abs(area) < 1e-9) continue;
            int x0 = Math.max(0, (int) Math.floor(Math.min(x[0], Math.min(x[1], x[2])))), x1 = Math.min(w - 1, (int) Math.ceil(Math.max(x[0], Math.max(x[1], x[2]))));
            int y0 = Math.max(0, (int) Math.floor(Math.min(y[0], Math.min(y[1], y[2])))), y1 = Math.min(h - 1, (int) Math.ceil(Math.max(y[0], Math.max(y[1], y[2]))));
            for (int py = y0; py <= y1; py++) for (int px = x0; px <= x1; px++) {
                double fx = px + 0.5, fy = py + 0.5;
                double w0 = ((x[1] - fx) * (y[2] - fy) - (x[2] - fx) * (y[1] - fy)) / area;
                double w1 = ((x[2] - fx) * (y[0] - fy) - (x[0] - fx) * (y[2] - fy)) / area;
                double w2 = 1 - w0 - w1;
                if (w0 < -1e-6 || w1 < -1e-6 || w2 < -1e-6) continue;
                double d = w0 * q[i][0][2] + w1 * q[i][1][2] + w2 * q[i][2][2];
                if (d <= depth[py * w + px]) continue;
                int color = 0xFF9A9A9A;
                if (tri.tex != null) {
                    double u = w0 * tri.t[0][0] + w1 * tri.t[1][0] + w2 * tri.t[2][0];
                    double v = w0 * tri.t[0][1] + w1 * tri.t[1][1] + w2 * tri.t[2][1];
                    u -= Math.floor(u); v -= Math.floor(v);
                    int tx = Math.min(tri.tex.getWidth() - 1, (int) (u * tri.tex.getWidth()));
                    int ty = Math.min(tri.tex.getHeight() - 1, (int) ((1 - v) * tri.tex.getHeight()));
                    color = tri.tex.getRGB(tx, ty);
                    int alpha = color >>> 24;
                    if (alpha < 16) continue;
                    // halbtransparente Flächen (Glas) als helle, deckende Scheibe zeichnen
                    if (alpha < 250) color = 0xFF000000 | mix((color >> 16) & 255, 205, alpha) << 16 | mix((color >> 8) & 255, 225, alpha) << 8 | mix(color & 255, 235, alpha);
                }
                int r = (int) (((color >> 16) & 255) * shade), g = (int) (((color >> 8) & 255) * shade), bl = (int) ((color & 255) * shade);
                rgb[py * w + px] = 0xFF000000 | r << 16 | g << 8 | bl;
                depth[py * w + px] = d;
            }
        }
        BufferedImage full = new BufferedImage(w, h, BufferedImage.TYPE_INT_ARGB);
        full.setRGB(0, 0, w, h, rgb, 0, w);
        BufferedImage small = new BufferedImage(Math.max(1, w / SS), Math.max(1, h / SS), BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2 = small.createGraphics();
        g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
        g2.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
        g2.drawImage(full, 0, 0, small.getWidth(), small.getHeight(), null);
        g2.dispose();
        return small;
    }
}
