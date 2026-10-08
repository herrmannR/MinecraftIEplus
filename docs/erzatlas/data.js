// Fundorte: [Ort, Stufe 0–4, Markierung, Werte, Retrogen]
// Werte: "Adern/Chunk × Adergröße" (aus Configs bzw. Bytecode der Mods). Stufe ≈ Erzblöcke pro Chunk:
// 1 < 15 · 2 < 40 · 3 < 100 · 4 ≥ 100 (bei Höhenbereichen, die unter den Weltboden reichen, anteilig gerechnet)
// Verbrauch-Reihenfolge: IE, Mek, Tinkers, Botania, Blood, AE2, Raumfahrt, Sonstige
const GROUPS = [
 ["Vanilla", [
  {k:"coal", n:"Kohle", sub:"minecraft", gen:[["Overworld",4],["Twilight",4],["Venus",4,null,"20×17"],["Glacio",4,null,"20×17"]], use:[3,2,1,1,2,0,0,1], v:2, note:"<strong>Koks → IE-Stahl</strong>, Mekanism-Carbon"},
  {k:"iron", n:"Eisen", sub:"minecraft", gen:[["Overworld",4],["Twilight",4],["Mond",3,null,"10×11"],["Mars",4,null,"10×11"],["Merkur",4,null,"20×8"],["Glacio",4,null,"10×12"]], use:[3,3,3,1,2,3,2,3], v:3, note:"Basis fast aller Maschinen"},
  {k:"copper", n:"Kupfer", sub:"minecraft", gen:[["Overworld",3],["Twilight",3],["Glacio",4,null,"16×17"]], use:[3,1,2,1,2,1,0,0], v:3, note:"IE-Kabel und Spulen, Tinkers-Legierungen"},
  {k:"gold", n:"Gold", sub:"minecraft", gen:[["Overworld",3],["Nether",3],["Twilight",2],["Venus",3,null,"4×10"]], use:[2,2,3,2,3,1,1,3], v:3, note:"Brückenmaterial: Electrum, Rose Gold, Blutmagie"},
  {k:"redstone", n:"Redstone", sub:"minecraft", gen:[["Overworld",3],["Twilight",3]], use:[2,2,1,3,2,3,0,2], v:3, note:"Botania und AE2 zentral"},
  {k:"lapis", n:"Lapis", sub:"minecraft", gen:[["Overworld",3],["Twilight",3],["Glacio",2,null,"2×9"]], use:[0,1,1,1,2,0,0,0], v:1, note:"Magie-Nebenrolle"},
  {k:"diamond", n:"Diamant", sub:"minecraft", gen:[["Overworld",2],["Twilight",2],["Mars",3,null,"7×7"],["Venus",3,null,"7×9"]], use:[0,2,2,2,1,0,1,2], v:3, note:"Hoher Vanilla-Tier; Diamond Engine (Raumfahrt). Auf Mars/Venus deutlich häufiger als in der Overworld"},
  {k:"emerald", n:"Smaragd", sub:"minecraft", gen:[["Overworld",1,null,"Berge"]], use:[0,1,1,1,0,0,0,0], v:1, note:"Kaum Verwendung"},
  {k:"nether_quartz", n:"Netherquarz", sub:"minecraft", gen:[["Nether",3]], use:[1,2,2,2,1,1,0,1], v:2, note:"Fluix-Zutat (AE2)"},
  {k:"debris", n:"Ancient Debris", sub:"minecraft", gen:[["Nether",1]], use:[0,1,2,0,2,0,0,0], v:2, note:"Netherite"}
 ]],
 ["Industriemetalle (IE)", [
  {k:"ie_aluminum", n:"Aluminium", sub:"Bauxit · IE", gen:[["Overworld",2,"down","16 → 5 ×6"],["Twilight",4,"new","18×8"]], use:[2,0,1,0,0,0,0,0], v:2, chg:1, note:"IE-Gerüste und Kabel"},
  {k:"mek_lead", n:"Blei", sub:"nur Mekanism-Erz", gen:[["Overworld",2,"down","Mek 8 → 4 ×9",1],["Overworld",3,"off","IE-Erz"],["Twilight",4,"new","12×9"]], use:[2,2,1,0,1,1,0,0], v:2, chg:1, note:"Mekanism-Erz wegen der Optik (2026-10-08). IE nutzt es über <strong>forge:ingots/lead</strong>"},
  {k:"ie_silver", n:"Silber", sub:"IE", gen:[["Overworld",3,null,"10×9"]], use:[2,0,1,0,1,0,0,0], v:2, note:"Electrum. IE-Standardwert, bleibt vorerst"},
  {k:"ie_nickel", n:"Nickel", sub:"IE", gen:[["Overworld",3,null,"7×5 + tief 11×6"]], use:[2,0,1,0,1,0,0,0], v:2, note:"Constantan. IE-Standardwert, bleibt vorerst"}
 ]],
 ["Mekanism", [
  {k:"mek_osmium", n:"Osmium", sub:"Mekanism", gen:[["Overworld",2,"down","65/6/8 → 20/3/4",1],["Mond",4,"new","16×9"]], use:[0,3,1,0,1,1,0,0], v:3, chg:1, space:1, note:"<strong>Engpass</strong>: jede Mekanism-Maschine. Overworld reicht für den Einstieg, Ausbau über den Mond"},
  {k:"mek_tin", n:"Zinn", sub:"Mekanism-Erz", gen:[["Overworld",4,"off"],["Twilight",4,"new","11×9 exklusiv"]], use:[1,2,1,0,1,1,0,0], v:3, chg:1, note:"<strong>Gate</strong> für Bronze und Mekanism-Ausbau"},
  {k:"mek_uranium", n:"Uran", sub:"nur Mekanism-Erz", gen:[["Overworld",2,"up","×1,3 (5 + 9)",1],["Overworld",2,"off","IE-Erz"]], use:[0,3,1,0,1,0,3,0], v:3, chg:1, space:1, note:"Nuklearkette; <strong>Uran-Erzeugnisse sind Pflicht für Star-Wars-Planeten</strong>"},
  {k:"mek_fluorite", n:"Fluorit", sub:"Mekanism", gen:[["Overworld",2,null,null,1]], use:[0,2,0,0,1,0,0,0], v:2, note:"Uran-Chemie (UF₆)"},
  {k:"salt", n:"Salz", sub:"Mekanism · Sand/Ton", gen:[["Overworld",2,null,null,1]], use:[0,2,0,0,0,0,0,0], v:1, note:"Brine → Lithium"}
 ]],
 ["Weitere Technik", [
  {k:"cobalt", n:"Kobalt", sub:"Tinkers", gen:[["Nether",3]], use:[0,0,3,0,0,0,0,0], v:2, note:"Manyullyn"},
  {k:"certus", n:"Certus-Quarz", sub:"AE2", gen:[["Overworld",2,"down","20×7 → 8×6"],["Meteoriten",2],["Mond",3,"new","12×7"]], use:[0,0,0,0,1,3,0,0], v:3, chg:1, space:1, note:"AE2-Basis. Overworld + Meteoriten für den frühen Storage-Layer, Mond für das ME-System"}
 ]],
 ["Magie", [
  {k:"demonite", n:"Demonit", sub:"Blood Magic", gen:[["Demon Dungeon",2]], use:[0,0,2,0,3,0,0,0], v:3, note:"Hellforged; spätes Blood Magic"},
  {k:"elementium", n:"Elementium-Erz", sub:"MythicBotany", gen:[["Alfheim",3]], use:[0,0,1,3,0,0,0,0], v:3, note:"Botania-Hochstufe"},
  {k:"dragonstone", n:"Dragonstone", sub:"MythicBotany", gen:[["Alfheim",2]], use:[0,0,0,3,0,0,0,0], v:3, note:"<strong>Alfsteel</strong> (Endgame-Magie)"},
  {k:"mythic_gold", n:"Mythic-Golderz", sub:"MythicBotany", gen:[["Alfheim",2]], use:[0,0,0,1,0,0,0,0], v:1, note:"Liefert Gold"}
 ]],
 ["Raumfahrt", [
  {k:"desh", n:"Desh", sub:"Beyond Earth", gen:[["Mond",2,"new","7×9, Y ≤ 80"]], use:[0,0,1,0,0,0,3,0], v:3, chg:1, space:1, note:"<strong>Rakete T2</strong>, Motoren, Tanks; Tinkers-Gießen. Nur die Hälfte der Adern landet über dem Mond-Boden (Y 0)"},
  {k:"ostrum", n:"Ostrum", sub:"Beyond Earth", gen:[["Mars",3,"new","6×8"]], use:[0,0,1,0,0,0,3,0], v:3, chg:1, space:1, note:"<strong>Rakete T3</strong>, Diamond Engine/Tank"},
  {k:"calorite", n:"Calorite", sub:"Beyond Earth", gen:[["Venus",3,"new","6×8"]], use:[0,0,1,0,0,0,3,0], v:3, chg:1, space:1, note:"<strong>Rakete T4</strong> (Glacio, Star Wars)"},
  {k:"kyber", n:"Kyber-Kristall", sub:"Star Wars Planets", gen:[["Tatooine",2,"new","8×5 Sandstein"],["Kamino · Endor · Mustafar",2,"new","8×5 Deepslate"]], use:[0,0,0,0,0,0,2,0], v:2, chg:1, space:1, note:"Lichtschwerter"},
  {k:"beskar", n:"Beskar", sub:"Star Wars Planets", gen:[["Mandalore",3,"new","8×5"]], use:[0,0,0,0,0,0,2,0], v:2, chg:1, space:1, note:"Darksaber"},
  {k:"cheese", n:"Käse", sub:"Beyond Earth", gen:[["Mond",4,"new","20×10"]], use:[0,0,0,0,0,0,0,1], v:1, chg:1, space:1, note:"Nahrung"},
  {k:"ice_shard", n:"Eissplitter", sub:"Beyond Earth", gen:[["Mond",2,"new","8×10, Y ≤ 32"],["Mars",3,"new","8×10"],["Glacio",3,"new","8×10"]], use:[0,0,0,0,0,0,1,1], v:1, chg:1, space:1, note:"Packeis"}
 ]]
];
