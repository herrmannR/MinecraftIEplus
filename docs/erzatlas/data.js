// Stand 2026-10-12, Minecraft 1.20.1. Soll-Verteilung aus docs/03_ERZGENERATION.md (Zahlen sind Vorschläge, im Spiel noch nicht getestet).
// Fundorte: [Ort, Stufe 0–4, Markierung, Werte, Retrogen]
// Werte: "Adern/Chunk × Adergröße" (aus Configs bzw. den JSON-Features der Mods). Stufe ≈ Erzblöcke pro Chunk:
// 1 < 15 · 2 < 40 · 3 < 100 · 4 ≥ 100
// Verbrauch-Reihenfolge: IE, Mek, Tinkers, Botania, Blood, AE2, Raumfahrt, Sonstige
const GROUPS = [
 ["Vanilla", [
  {k:"coal", n:"Kohle", sub:"minecraft", gen:[["Overworld",4],["Venus",4,null,"20×17"],["Glacio",4,null,"20×17"]], use:[3,2,1,1,2,0,0,1], v:2, note:"<strong>Koks → IE-Stahl</strong>, Mekanism-Carbon"},
  {k:"iron", n:"Eisen", sub:"minecraft", gen:[["Overworld",4],["Mond",4,null,"10×11"],["Mars",4,null,"10×11"],["Merkur",4,null,"20×8"],["Glacio",4,null,"10×11"]], use:[3,3,3,1,2,3,3,3], v:3, space:1, note:"Basis fast aller Maschinen; Stahl für Raketen und Raumanzüge"},
  {k:"copper", n:"Kupfer", sub:"minecraft", gen:[["Overworld",3],["Glacio",4,null,"16×17"]], use:[3,1,2,1,2,1,0,0], v:3, note:"IE-Kabel und Spulen, Tinkers-Legierungen"},
  {k:"gold", n:"Gold", sub:"minecraft", gen:[["Overworld",3],["Nether",3],["Venus",3,null,"4×10"],["Alfheim",2]], use:[2,2,3,2,3,1,0,3], v:3, note:"Brückenmaterial: Electrum, Rose Gold, Blutmagie"},
  {k:"redstone", n:"Redstone", sub:"minecraft", gen:[["Overworld",3]], use:[2,2,1,3,2,3,1,2], v:3, note:"Botania und AE2 zentral"},
  {k:"lapis", n:"Lapis", sub:"minecraft", gen:[["Overworld",3],["Glacio",2,null,"2×9"]], use:[0,1,1,1,2,0,0,0], v:1, note:"Magie-Nebenrolle"},
  {k:"diamond", n:"Diamant", sub:"minecraft", gen:[["Overworld",2],["Mars",2,null,"5×7"],["Venus",3,null,"5×9"]], use:[0,2,2,2,1,0,1,2], v:3, note:"Hoher Vanilla-Tier. Auf Mars und Venus häufiger als in der Overworld"},
  {k:"emerald", n:"Smaragd", sub:"minecraft · Blue Skies", gen:[["Overworld",1,null,"Berge"],["Everbright",1,null,"1 Biom"],["Everdawn",1,null,"1 Biom"]], use:[0,1,1,1,0,0,0,1], v:1, note:"Zeal Lighter beim Gatekeeper kostet 8 Smaragde (Zugang zu Blue Skies)"},
  {k:"nether_quartz", n:"Netherquarz", sub:"minecraft", gen:[["Nether",3]], use:[1,2,2,2,1,1,0,1], v:2, note:"Fluix-Zutat (AE2)"},
  {k:"debris", n:"Ancient Debris", sub:"minecraft", gen:[["Nether",1]], use:[0,1,2,0,2,0,1,0], v:2, note:"Netherite; Netherite Space Suit"}
 ]],
 ["Industriemetalle (IE)", [
  {k:"ie_aluminum", n:"Aluminium", sub:"Bauxit · IE", gen:[["Overworld",2,"down","16 → 5 ×6"],["Everbright",4,"new","18×8"]], use:[2,0,1,0,0,0,0,0], v:2, chg:1, note:"IE-Gerüste und Kabel. Hauptquelle ist Everbright"},
  {k:"mek_lead", n:"Blei", sub:"nur Mekanism-Erz", gen:[["Overworld",1,"down","Mek 8 → 2 ×9",1],["Overworld",3,"off","IE-Erz"],["Everbright",3,"new","10×9"],["Merkur",3,"new","10×9"],["Venus",3,"new","10×9"]], use:[2,2,1,0,1,1,0,0], v:2, chg:1, space:1, note:"In der Overworld sehr selten. IE nutzt Mekanism-Blei über <strong>forge:ingots/lead</strong>. Excavator-Adern Galena und Uraninite seltener"},
  {k:"ie_silver", n:"Silber", sub:"IE", gen:[["Overworld",3,null,"10×9"]], use:[2,0,1,0,1,0,0,0], v:2, note:"Electrum. IE-Standardwert"},
  {k:"ie_nickel", n:"Nickel", sub:"IE", gen:[["Overworld",3,null,"7×5 + tief 11×6"]], use:[2,0,1,0,1,0,0,0], v:2, note:"Constantan. IE-Standardwert"}
 ]],
 ["Mekanism", [
  {k:"mek_tin", n:"Zinn", sub:"Mekanism-Erz", gen:[["Overworld",4,"off"],["Everbright",4,"new","11×9 exklusiv"]], use:[1,2,1,0,1,1,0,0], v:3, chg:1, note:"<strong>Gate</strong> für Bronze und Mekanism-Ausbau: nur in Everbright. Excavator-Ader Cassiterite entfernt"},
  {k:"mek_osmium", n:"Osmium", sub:"Mekanism", gen:[["Overworld",2,"down","65/6/8 → 12/2/3",1],["Everdawn",4,"new","16×9"],["Mond",4,"new","16×9"],["Glacio",4,"new","16×9"]], use:[0,3,1,0,1,1,1,0], v:3, chg:1, space:1, note:"<strong>Engpass</strong>: jede Mekanism-Maschine. Overworld auf Diamant-Niveau, reicht für den Einstieg; Ausbau über Everdawn und den Mond"},
  {k:"mek_uranium", n:"Uran", sub:"nur Mekanism-Erz", gen:[["Overworld",1,"down","4/7 → 1/2 Adern",1],["Overworld",2,"off","IE-Erz"],["Merkur",3,"new","12×8"],["Venus",3,"new","12×8"],["Glacio",3,"new","12×8"]], use:[0,3,1,0,1,0,3,0], v:3, chg:1, space:1, note:"Nuklearkette; <strong>Uran-Erzeugnisse sind Pflicht für die Star-Wars-Planeten</strong>. In der Overworld knapp, reichlich erst auf den T3-Planeten"},
  {k:"mek_fluorite", n:"Fluorit", sub:"Mekanism", gen:[["Overworld",2,null,null,1],["Mars",3,"new","6×8"]], use:[0,2,0,0,1,0,0,0], v:2, chg:1, space:1, note:"Uran-Chemie (UF₆)"},
  {k:"salt", n:"Salz", sub:"Mekanism · Sand/Ton", gen:[["Overworld",2,null,null,1]], use:[0,2,0,0,0,0,0,0], v:1, note:"Brine → Lithium"}
 ]],
 ["Weitere Technik", [
  {k:"cobalt", n:"Kobalt", sub:"Tinkers", gen:[["Nether",3,null,"5×4 + 3×6"]], use:[0,0,3,0,0,0,0,0], v:2, note:"Manyullyn"},
  {k:"certus", n:"Certus-Quarz", sub:"AE2 · kein Erz mehr", gen:[["Meteoriten (Overworld)",2,null,"Budding-Blöcke"]], use:[0,0,0,0,1,3,0,0], v:3, note:"In 1.20.1 wächst Certus nur an Budding-Blöcken in Meteoriten; eine gefundene Stelle liefert dauerhaft. AE2-Standard, nichts geändert"}
 ]],
 ["Blue Skies", [
  {k:"falsite", n:"Falsite", sub:"Blue Skies", gen:[["Everbright",4,null,"20×6"]], use:[0,0,0,0,0,0,0,2], v:1, note:"Ausrüstung der Dimension. Cross-Mod-Rolle offen"},
  {k:"ventium", n:"Ventium", sub:"Blue Skies", gen:[["Everbright",4,null,"20×6"]], use:[0,0,0,0,0,0,0,2], v:1, note:"Ausrüstung der Dimension. Cross-Mod-Rolle offen"},
  {k:"horizonite", n:"Horizonite", sub:"Blue Skies", gen:[["Everdawn",3,null,"10×4"]], use:[0,0,0,0,0,0,0,2], v:1, note:"Ausrüstung der Dimension. Cross-Mod-Rolle offen"},
  {k:"bs_gems", n:"Edelsteine", sub:"Moonstone, Pyrope, Aquite, Diopside, Charoite", gen:[["Everbright",4,null,"20×14 · 17×7 · 15×5"],["Everdawn",4,null,"gleich"]], use:[0,0,0,0,0,0,0,2], v:1, note:"Diopside und Charoite sind selten (1×6, tief)"}
 ]],
 ["Magie", [
  {k:"demonite", n:"Demonit", sub:"Blood Magic", gen:[["Demon Dungeon",2]], use:[0,0,2,0,3,0,0,0], v:3, note:"Hellforged; spätes Blood Magic. Entwurf: Dungeon-Zugang nur auf einem Planeten"},
  {k:"elementium", n:"Elementium-Erz", sub:"MythicBotany", gen:[["Alfheim",3,null,"5×9"]], use:[0,0,1,3,0,0,0,0], v:3, note:"Botania-Hochstufe"},
  {k:"dragonstone", n:"Dragonstone", sub:"MythicBotany", gen:[["Alfheim",2]], use:[0,0,0,3,0,0,0,0], v:3, note:"<strong>Alfsteel</strong> (Endgame-Magie)"},
  {k:"mythic_gold", n:"Mythic-Golderz", sub:"MythicBotany", gen:[["Alfheim",3,null,"2×9 + 5×9"]], use:[0,0,0,1,0,0,0,0], v:1, note:"Liefert Gold"}
 ]],
 ["Raumfahrt", [
  {k:"desh", n:"Desh", sub:"Ad Astra", gen:[["Mond",3,null,"9×9"]], use:[0,0,1,0,0,0,3,0], v:3, space:1, note:"<strong>Rakete T2</strong>, Rover, Raumstation; Tinkers-Material"},
  {k:"ostrum", n:"Ostrum", sub:"Ad Astra", gen:[["Mars",3,null,"8×8"]], use:[0,0,1,0,0,0,3,0], v:3, space:1, note:"<strong>Rakete T3</strong>, Netherite Space Suit"},
  {k:"calorite", n:"Calorite", sub:"Ad Astra", gen:[["Venus",3,null,"8×8"]], use:[0,0,1,0,0,0,3,0], v:3, space:1, note:"<strong>Rakete T4</strong> (Glacio, Star Wars), Jet Suit"},
  {k:"kyber", n:"Kyber", sub:"Star Wars Planets · Galaxy in a Cube", gen:[["Overworld",1,"off","Kristalle (Galaxy in a Cube)"],["Tatooine",3,null,"5×9 Sandstein + Deepslate"],["Endor · Hoth · Mustafar",3,null,"5×9 Deepslate"]], use:[0,0,0,0,0,0,3,0], v:2, chg:1, space:1, note:"Lichtschwerter. Die Kristalle in der Overworld werden entfernt, Kyber gibt es nur auf den Planeten. Rezept vom Erz zum Kristall noch offen"},
  {k:"beskar", n:"Beskar", sub:"Star Wars Planets", gen:[["Mandalore",3,null,"15×6"]], use:[0,0,0,0,0,0,2,0], v:2, space:1, note:"Rüstung. Hat noch keine forge-Tags"},
  {k:"cheese", n:"Käse", sub:"Ad Astra", gen:[["Mond",3,null,"9×8"]], use:[0,0,0,0,0,0,0,1], v:1, space:1, note:"Nahrung"},
  {k:"ice_shard", n:"Eissplitter", sub:"Ad Astra", gen:[["Mond",3,null,"8×10"],["Mars",3,null,"8×10"],["Glacio",4,null,"8×17"]], use:[0,0,0,0,0,0,1,1], v:1, space:1, note:"Cryo Fuel (Entscheidung offen)"}
 ]]
];
