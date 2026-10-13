import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.stream.MemoryCacheImageOutputStream;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Base64;
import java.util.Set;
import java.util.TreeSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Sammelt alle Bild-Verweise aus einer data.js und schreibt sie als Data-URIs in eine icons.js.
 *
 * Aufruf: java IconTool.java <data.js> <icons.js> <jars-Ordner>
 *
 * Ein Verweis hat die Form "namespace:pfad", z. B. "tconstruct:item/pattern" oder
 * "tconstruct:book/images/melter". Gesucht wird in jedem Unterordner von <jars-Ordner> unter
 * assets/<namespace>/textures/<pfad>.png, danach unter assets/<namespace>/<pfad>.png.
 * Kleine Texturen bleiben PNG (animierte werden auf das erste Bild beschnitten),
 * große Bilder (Buch-Screenshots) werden vom transparenten Rand befreit und verkleinert.
 */
public class IconTool {
    static final Pattern REF = Pattern.compile("\"([a-z0-9_]+):((?:item|block|book|gui|image|model|models|entity|misc)/[a-z0-9_/.+]+)\"");
    static final int MAX_PICTURE_WIDTH = 520;

    public static void main(String[] args) throws Exception {
        String data = Files.readString(Path.of(args[0]), StandardCharsets.UTF_8);
        File[] roots = new File(args[2]).listFiles(File::isDirectory);
        Set<String> refs = new TreeSet<>();
        Matcher m = REF.matcher(data);
        while (m.find()) refs.add(m.group(1) + ":" + m.group(2));

        StringBuilder out = new StringBuilder("const ICONS = {\n");
        int missing = 0;
        for (String ref : refs) {
            String ns = ref.substring(0, ref.indexOf(':')), path = ref.substring(ref.indexOf(':') + 1);
            // "ordner/a+b+c" legt die Ebenen a, b, c aus demselben Ordner übereinander (Tinkers-Werkzeuge)
            String[] layers = path.split("\\+");
            String dir = layers[0].substring(0, layers[0].lastIndexOf('/') + 1);
            BufferedImage img = null;
            for (int i = 0; i < layers.length; i++) {
                // eine Ebene mit führendem "/" ist ein vollständiger Pfad statt eines Nachbarn der ersten Ebene
                File file = find(roots, ns, i == 0 ? layers[0] : layers[i].startsWith("/") ? layers[i].substring(1) : dir + layers[i]);
                if (file == null) { System.err.println("FEHLT: " + ref + " (" + layers[i] + ")"); continue; }
                BufferedImage layer = ImageIO.read(file);
                if (img == null) {
                    img = new BufferedImage(layer.getWidth(), layer.getHeight(), BufferedImage.TYPE_INT_ARGB);
                }
                Graphics2D g = img.createGraphics();
                g.drawImage(layer, 0, 0, null);
                g.dispose();
            }
            if (img == null) { missing++; continue; }
            out.append("  \"").append(ref).append("\": \"").append(encode(img)).append("\",\n");
        }
        out.append("};\n");
        Files.writeString(Path.of(args[1]), out.toString(), StandardCharsets.UTF_8);
        System.out.println(refs.size() - missing + " Bilder geschrieben, " + missing + " fehlen");
    }

    static File find(File[] roots, String ns, String path) {
        for (File root : roots) {
            File a = new File(root, "assets/" + ns + "/textures/" + path + ".png");
            if (a.isFile()) return a;
            File b = new File(root, "assets/" + ns + "/" + path + ".png");
            if (b.isFile()) return b;
        }
        return null;
    }

    static String encode(BufferedImage img) throws Exception {
        int w = img.getWidth(), h = img.getHeight();
        if (w <= 64 && h <= 64 * 64) {
            // Textur; animierte Texturen sind Streifen aus quadratischen Bildern
            if (h > w && h % w == 0) img = img.getSubimage(0, 0, w, w);
            return "data:image/png;base64," + png(img);
        }
        img = trim(img);
        if (img.getWidth() > MAX_PICTURE_WIDTH) {
            int nh = Math.round(img.getHeight() * (MAX_PICTURE_WIDTH / (float) img.getWidth()));
            BufferedImage scaled = new BufferedImage(MAX_PICTURE_WIDTH, nh, BufferedImage.TYPE_INT_ARGB);
            Graphics2D g = scaled.createGraphics();
            g.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
            g.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
            g.drawImage(img, 0, 0, MAX_PICTURE_WIDTH, nh, null);
            g.dispose();
            img = scaled;
        }
        return hasAlpha(img) ? "data:image/png;base64," + png(img) : "data:image/jpeg;base64," + jpeg(img);
    }

    static BufferedImage trim(BufferedImage img) {
        int w = img.getWidth(), h = img.getHeight(), x0 = w, y0 = h, x1 = -1, y1 = -1;
        for (int y = 0; y < h; y++) for (int x = 0; x < w; x++) {
            if ((img.getRGB(x, y) >>> 24) > 8) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
        }
        return x1 < 0 ? img : img.getSubimage(x0, y0, x1 - x0 + 1, y1 - y0 + 1);
    }

    static boolean hasAlpha(BufferedImage img) {
        for (int y = 0; y < img.getHeight(); y++) for (int x = 0; x < img.getWidth(); x++) {
            if ((img.getRGB(x, y) >>> 24) < 250) return true;
        }
        return false;
    }

    static String png(BufferedImage img) throws Exception {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(img, "png", bos);
        return Base64.getEncoder().encodeToString(bos.toByteArray());
    }

    static String jpeg(BufferedImage img) throws Exception {
        BufferedImage rgb = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_INT_RGB);
        Graphics2D g = rgb.createGraphics();
        g.drawImage(img, 0, 0, Color.BLACK, null);
        g.dispose();
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageWriter writer = ImageIO.getImageWritersByFormatName("jpeg").next();
        ImageWriteParam param = writer.getDefaultWriteParam();
        param.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
        param.setCompressionQuality(0.8f);
        writer.setOutput(new MemoryCacheImageOutputStream(bos));
        writer.write(null, new IIOImage(rgb, null, null), param);
        writer.dispose();
        return Base64.getEncoder().encodeToString(bos.toByteArray());
    }
}
