/**
 * Liest Strukturdateien (.nbt) der Mods und gibt je Multiblock die Blockliste und die Ebenen aus.
 *
 * Aufruf: java NbtDump.java <datei.nbt> [weitere ...]
 *
 * Ausgabe je Datei: Name, Größe x×y×z (Breite × Höhe × Tiefe), Buchstabe je Blocksorte mit Anzahl,
 * dann je Höhe y eine Zeile; darin die Reihen (z) durch Leerzeichen getrennt, "." ist Luft.
 * Die Ebenen lassen sich so in das Feld layers eines Bauplans in data.js übernehmen.
 */
import java.io.*; import java.util.*; import java.util.zip.GZIPInputStream;
public class NbtDump {
  static Object read(DataInputStream in, int t) throws IOException {
    switch (t) {
      case 1: return in.readByte(); case 2: return in.readShort(); case 3: return in.readInt(); case 4: return in.readLong();
      case 5: return in.readFloat(); case 6: return in.readDouble();
      case 7: { int n=in.readInt(); byte[] b=new byte[n]; in.readFully(b); return b; }
      case 8: return in.readUTF();
      case 9: { int et=in.readByte(); int n=in.readInt(); List<Object> l=new ArrayList<>(); for(int i=0;i<n;i++) l.add(read(in,et)); return l; }
      case 10: { Map<String,Object> m=new LinkedHashMap<>(); while(true){ int tt=in.readByte(); if(tt==0) break; String k=in.readUTF(); m.put(k, read(in,tt)); } return m; }
      case 11: { int n=in.readInt(); int[] a=new int[n]; for(int i=0;i<n;i++) a[i]=in.readInt(); return a; }
      case 12: { int n=in.readInt(); long[] a=new long[n]; for(int i=0;i<n;i++) a[i]=in.readLong(); return a; }
    } throw new IOException("tag "+t);
  }
  @SuppressWarnings("unchecked")
  public static void main(String[] a) throws Exception {
    for (String f : a) {
      DataInputStream in = new DataInputStream(new BufferedInputStream(new GZIPInputStream(new FileInputStream(f))));
      int t=in.readByte(); in.readUTF(); Map<String,Object> root=(Map<String,Object>)read(in,t);
      List<Object> size=(List<Object>)root.get("size"); int sx=(Integer)size.get(0), sy=(Integer)size.get(1), sz=(Integer)size.get(2);
      List<Object> pal=(List<Object>)root.get("palette"); List<String> names=new ArrayList<>();
      for(Object o:pal){ Map<String,Object> m=(Map<String,Object>)o; names.add((String)m.get("Name")); }
      // merge palette entries by name
      List<String> uniq=new ArrayList<>(new LinkedHashSet<>(names));
      int[][][] g=new int[sy][sz][sx]; for(int[][] p:g) for(int[] r:p) Arrays.fill(r,-1);
      int[] cnt=new int[uniq.size()];
      for(Object o:(List<Object>)root.get("blocks")){ Map<String,Object> m=(Map<String,Object>)o; List<Object> pos=(List<Object>)m.get("pos"); int st=(Integer)m.get("state"); String n=names.get(st); if(n.equals("minecraft:air")) continue; int u=uniq.indexOf(n); g[(Integer)pos.get(1)][(Integer)pos.get(2)][(Integer)pos.get(0)]=u; cnt[u]++; }
      String nm=new File(f).getName().replace(".nbt","");
      StringBuilder sb=new StringBuilder(); sb.append(nm).append(" size=").append(sx).append("x").append(sy).append("x").append(sz).append("\n");
      for(int i=0;i<uniq.size();i++) if(cnt[i]>0) sb.append("  ").append((char)('A'+i)).append(" ").append(uniq.get(i)).append(" x").append(cnt[i]).append("\n");
      for(int y=0;y<sy;y++){ sb.append("  y").append(y).append(":"); for(int z=0;z<sz;z++){ sb.append(" "); for(int x=0;x<sx;x++) sb.append(g[y][z][x]<0?'.':(char)('A'+g[y][z][x])); } sb.append("\n"); }
      System.out.print(sb);
    }
  }
}
