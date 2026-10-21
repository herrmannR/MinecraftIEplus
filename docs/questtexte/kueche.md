# Questtexte Küche: Farmer's Delight und Kaleidoscope

> Stand 2026-10-21, Minecraft 1.20.1. Entwurf für FTB Quests. Beide Küchen-Mods stehen in einer Datei, weil das Pack sie zu einer Küche zusammengeführt hat (`kubejs/server_scripts/crossmod/kaleidoscope_einheitlich.js`, 2026-10-20). Eingeschlossen: Farmer's Delight, Nether's Delight, Engineer's Delight, Kaleidoscope Cookery, Tavern, Grilling und End. Alex's Delight hat seine Reihe in `alexsmobs.md` (AM7).
> Keiner der Mods hat ein Buch (`../19_HILFEBUECHER.md`: „nur Nebenquests“). Kaleidoscope bringt Ponder-Szenen mit, die im Pack aber nicht erscheinen, weil der Mod Ponder fehlt. Die Texte führen deshalb Schritt für Schritt. Kein eigener Pfad auf der Meilensteinkarte. Kürzel **KU**.
> Quellen: `../modpfade/farmersdelight/WISSEN.md` und `data.js`, `../modpfade/kaleidoscope/WISSEN.md` und `data.js`, `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md` (FD1–FD4, KS1–KS4), `../12_CHANGELOG.md` (2026-10-20, Zuordnung der Dopplungen), `../11_TESTING.md` (Tests 66–72), `config-overrides/config/farmersdelight-common.toml`. Item-IDs gegen die Sprachdateien geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren.
- **Anrede „du“**, Item-Namen englisch wie im Spiel.
- **Alle Quests sind Nebenquests**; Kochen wird für kein Ziel gebraucht. Alle Nebenquests geben Credits (User, 2026-10-17).
- **Aufgaben nennen die Gewinner-Items des Packs** ⚙️: Wo beide Mods dasselbe Ding hatten, gibt es im Pack nur noch eins (Tabelle am Ende). Die Verlierer sind in JEI ausgeblendet; Altbestand wandelst du in der Werkbank 1:1 um.
- Rezepte stehen in JEI. Die Texte nennen sie nur, wo sie für den nächsten Schritt zählen.
- **Pack-Änderungen** mit ⚙️. 🔵 = noch nicht entschieden, nicht belegt oder im Spiel zu prüfen.
- Einordnung: Fast alles geht ab Eisen; die Reihen KU8 (Nether) und KU9 (End) folgen dem Fortschritt. Da es vor dem Mond kein Questbuch gibt, stehen KU1–KU7 praktisch gleich offen.

---

## KU1 · Messer und Feld

### KU1-01 Das erste Messer · Nebenquest
**Aufgabe:** `farmersdelight:flint_knife`, `kaleidoscope_cookery:iron_kitchen_knife` (eins davon)

Das Messer ist dein wichtigstes Küchenwerkzeug.
- **Flint Knife**: 1 Flint + 1 Stick, der Einstieg.
- **Iron Kitchen Knife**: 3 Iron Ingot + 1 Stick. Danach Gold, Diamond und am Smithing Table Netherite.

Mit dem Messer schneidest du Stroh von Gras, Weizen und Reis. Tötest du Tiere damit, lassen sie Extrabeute fallen: Kühe Leather, Schweine Ham, Spinnen String. Schweine, Piglins und Hoglins geben zusätzlich **Oil**, Kühe Raw Cow Offal, Hühner Chicken Wing, Tintenfische Squid Tentacle.
⚙️ Im Pack gibt es nur die Küchenmesser von Kaleidoscope (Eisen bis Netherite) und das Flint Knife von Farmer's Delight. Alte FD-Messer schneiden weiter.

### KU1-02 Straw Hat · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:straw_hat`

4 Wheat + 1 String. Mit dem Strohhut auf dem Kopf gibt abgebautes Gras neue Saaten, je 12,5 %: Tomato Seed, Chili Seed, Lettuce Seed, Wild Rice Seed, Tea Seed. Dazu kommen Onion, Canola Seeds und Sweet Potato (Grilling) und selten Vanilla-Samen.
Trag den Hut, solange du Saatgut sammelst.

### KU1-03 Wildpflanzen · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:tomato`, `farmersdelight:cabbage`, `kaleidoscope_grilling:onion` (zwei davon)

Wildpflanzen von Farmer's Delight wachsen in der Oberwelt: Wild Cabbage und Sea Beet an Stränden, Wild Carrot und Wild Onion in gemäßigten Gebieten, Wild Potato im Kalten, Tomato Shrub im Heißen, Wild Rice an nassen Stellen. Abbauen gibt Feldfrüchte und Saatgut.
⚙️ Wilde Tomaten, wilder Reis und wilde Zwiebeln geben im Pack die Kaleidoscope-Items (Tomato, Rice Seed, Onion). Wilder Kohl gibt FD-Kohl (Kohl und Salat bleiben getrennt). 🟢 Test 70.

### KU1-04 Sense und Arbeitskleidung · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:sickle`, `kaleidoscope_cookery:farmer_chest_plate`

- **Sickle**: 3 Flint + 1 String + 2 Stick. Erntet reife Felder mit Rechtsklick und entfernt Unkraut.
- **Farmer's Overalls**, Work Pants und Boots: Leder mit etwas Eisen. Das ganze Set macht dich im Wasser deutlich schneller, praktisch im Reisfeld.

---

## KU2 · Anbau

### KU2-01 Stroh, Canvas und Rope · Nebenquest
**Aufgabe:** `farmersdelight:straw`, `farmersdelight:rope`

Stroh schneidest du mit dem Messer von Gras, Weizen oder Reis. Aus 4 Straw wird Canvas, aus 2 Straw 4 Rope. Rope brauchst du gleich für die Tomaten.

### KU2-02 Rich Soil · Nebenquest
**Aufgabe:** `farmersdelight:organic_compost`, `farmersdelight:rich_soil`

**Organic Compost**: 1 Dirt + 2 Straw + 2 Rotten Flesh + 4 Bone Meal (oder 4 Tree Bark + 2 Bone Meal). Gesetzt zerfällt er mit der Zeit zu **Rich Soil**.
Auf Rich Soil wachsen Pflanzen schneller (Config `richSoilBoostChance` = 0,2). Darauf gedeihen auch Pilzkolonien.

### KU2-03 Reisfeld · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:rice_panicle`

Reis wächst im Wasser. Mach mit der Hacke Ackerboden **unter Wasser** – das ist das Reisfeld. Pflanze Rice Seed hinein. Fische im Reisfeld (Cod, Salmon, Tropical Fish, Pufferfish, Tadpole, Axolotl) lassen den Reis schneller wachsen. Reis wächst auch auf Rich Soil Farmland.
Reif gibt er Rice Panicles. Neun davon pressen sich zu einem Rice Bale; am Mühlstein wird eine Rispe zu 3 Rice Seed (KU4-05).
⚙️ Reis ist im Pack der von Kaleidoscope; den Ballen liefert Farmer's Delight (`farmersdelight:rice_bale`).

### KU2-04 Tomaten, Chili, Salat, Tee · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:red_chili`, `kaleidoscope_cookery:lettuce`, `kaleidoscope_cookery:fresh_tea_leaves`

Die Saaten vom Strohhut wachsen auf normalem Ackerboden.
- **Chili** gibt Red Chili, mit 20 % zusätzlich Green Chili.
- **Lettuce** lässt mit 10 % eine Caterpillar fallen (Zutat, und Futter für Küken).
- **Tea Seed** wird ein Teestrauch; reif gibt er Fresh Tea Leaves.
- **Tomaten** klettern an Rope höher.

---

## KU3 · Herd und Brett

### KU3-01 Stove · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:stove`

8 Cobblestone + 1 Campfire (oder Soul Campfire). Mit Flint and Steel anzünden. Der Herd ist die Hitzequelle für alle Kochgeräte beider Mods. Wärme geben auch Campfire, Feuer, Lava und Magma Block.
Der Herd ist außerdem der Arbeitsplatz des Kochs im Dorf (KU5-02).
⚙️ Im Pack gibt es nur noch diesen Herd; der FD-Herd und der Blackstone Stove von Nether's Delight entfallen. Ein gesetzter alter Herd gibt beim Abbauen einen Kaleidoscope-Herd. Ohne Anzünden meldet der Wok „Missing heat source“ (Test 69).

### KU3-02 Cutting Board · Nebenquest
**Aufgabe:** `farmersdelight:cutting_board`

4 Planks + 2 Stick. Leg ein Item auf das Brett und klick mit dem passenden Werkzeug darauf:
- **Messer**: Fleisch und Fisch in Stücke (Bacon, Mutton Chops, Chicken Cuts, Cod und Salmon Slice), Teig in Nudeln, Kuchen in Stücke, Gemüse in Würfel und Scheiben.
- **Axt**: Stämme entrinden (Tree Bark).
- **Hacke**: Holzmöbel zerlegen.
Die Config gibt 10 % Glücksbonus.
⚙️ Im Pack gibt es nur das Brett von Farmer's Delight; es hat die Rezepte des Kaleidoscope-Bretts übernommen. Raw Beef gibt dort 1 Minced Beef und 1 Beef Chunks. 🟢 Test 68.

### KU3-03 Fleischteile · Nebenquest
**Aufgabe:** `farmersdelight:bacon`, `farmersdelight:chicken_cuts`, `farmersdelight:mutton_chops`

Schneide Raw Porkchop, Raw Chicken und Raw Mutton am Brett. Diese Teile brauchen Wok, Spieß und Kochtopf.
⚙️ Kaleidoscope hatte eigene Teile (Raw Pork Belly, Raw Meat Cuts, Raw Lamb Chops); im Pack gelten die von Farmer's Delight.

---

## KU4 · Kochgeräte

### KU4-01 Cooking Pot · Nebenquest
**Aufgabe:** `farmersdelight:cooking_pot`

5 Iron Ingot + 2 Brick + 1 Wooden Shovel + 1 Water Bucket. Stell ihn auf eine Hitzequelle, leg bis zu sechs Zutaten hinein und warte. Die meisten Mahlzeiten brauchen eine Bowl als Behälter; sie kommt ins eigene Fach.
Probier: Beef Stew, Fried Rice, Pasta with Meatballs, Tomato Sauce.

### KU4-02 Wok · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:pot`, `kaleidoscope_cookery:kitchen_shovel`

**Wok**: 7 Iron Ingot. **Kitchen Shovel**: 1 Iron Ingot + 1 Iron Nugget + 1 Stick.
So brätst du:
1. Wok auf den angezündeten Herd stellen.
2. **Öl** hinein (Oil vom Messer, KU1-01).
3. Zutaten hineinlegen, genau nach Rezept.
4. Mit der Kitchen Shovel rühren, bis genug Rührschläge erreicht sind (meist 3).
5. Kurz warten, dann mit einer Bowl aufnehmen.
Falsche Zutaten oder zu langes Warten ergeben **Suspicious Stir-Fry**. Nimmst du falsche Zutaten wieder heraus, verbrennst du dich.
Ein **Recipe** (4 Paper) merkt sich den Inhalt eines Woks und füllt ihn später mit einem Klick aus dem Inventar.

### KU4-03 Erste Wok-Gerichte · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:scramble_egg_with_tomatoes`, `kaleidoscope_cookery:egg_fried_rice`, `kaleidoscope_cookery:sweet_and_sour_pork` (zwei davon)

- Scramble Egg with Tomatoes: 3 Eier + 3 Tomaten.
- Egg Fried Rice: 2 Eier + Cooked Rice.
- Sweet and Sour Pork: 3 Schweinefleisch + 3 Sugar.
Fünf Wok-Gerichte gibt es zusätzlich als Reisschale mit Cooked Rice („… on Rice“, Rezept in JEI).

### KU4-04 Stockpot · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:stockpot`, `kaleidoscope_cookery:stockpot_lid`

**Stockpot**: 5 Iron Ingot + 2 Brick. **Lid**: 3 Iron Ingot + 1 Brick (taugt auch als Schild).
So kochst du Suppe:
1. Topf auf die Hitzequelle.
2. Erst die **Suppenbasis**: meist Wasser, für manche Gerichte Lava, Milch oder ein Fischeimer.
3. Zutaten in der richtigen Reihenfolge dazu.
4. Deckel drauf, warten, Deckel ab, mit der Schale schöpfen.
Den Deckel zwischendurch zu öffnen hält das Kochen an. Falsche Schritte ergeben Suspicious Stew.
Im Stockpot kochst du auch Reis (Rice Seed + Wasser zu Cooked Rice), Dumplings und Zongzi.

### KU4-05 Borscht · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:borscht`

Wasser als Basis, dann 2 Rindfleisch und 4 Tomaten. Das Gericht schaltet bei Kaleidoscope das Ziel „Apprentice Chef“ frei.

### KU4-06 Millstone · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:millstone`, `kaleidoscope_cookery:flour`

**Millstone**: Grindstone + 3 Smooth Stone + 1 Holzzaun + 1 Stick.
Der Mühlstein dreht sich nur mit einem **Zugtier**: Stell einen Esel (oder ein anderes Tier) daneben, es wird angespannt. Spieler gehen nicht.
Items legst du per Rechtsklick ein oder lässt sie von oben hineinfallen. Nach einer Umdrehung kommt das Ergebnis aus der Öffnung.
- Wheat → Flour; Flour + Water Bucket → Raw Dough.
- Samen → Oil.
- Rice Panicle → 3 Rice Seed.
- Chili, Onion, Canola → Pulver für den Grill (KU7).
🔵 Der Mühlstein vervielfacht auch Vanilla-Erzblöcke (Iron Ore zu 3 Raw Iron, Copper Ore zu 5); ob das im Pack bleibt, ist nicht entschieden (F30 in `../20_ENTSCHEIDUNGEN.md`). Bis dahin nennt der Text es nicht als Weg.

### KU4-07 Teig und Nudeln · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:raw_dough`, `kaleidoscope_cookery:raw_noodles`

Raw Dough ziehst du mit gehaltenem Rechtsklick zu Nudeln, oder du schneidest ihn am Brett zu 3 Raw Noodles. Mit Fleisch und Gemüse wird Teig zu **Stuffed Dough**, der Grundlage für Baozi, Dumplings und Meat Pie.
⚙️ Im Pack gibt es nur diesen Teig, dieses Mehl (auch der IE-Crusher macht es, Engineer's Delight) und diese Nudeln; FD-Pasta ist ersetzt.

### KU4-08 Steamer · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:steamer`, `kaleidoscope_cookery:baozi`

**Steamer**: 3 Bamboo Trapdoor + 3 Block of Bamboo. Stapel bis zu 8 Dampfgarer auf einer Hitzequelle. Zutaten von oben einlegen, Deckel per Rechtsklick schließen, warten (1200 Ticks = 1 Minute), Lage für Lage abnehmen.
Baozi aus Stuffed Dough, Mantou aus Teig, Qingtuan aus Slimeball.

### KU4-09 Teapot · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:teapot`, `kaleidoscope_cookery:tieguanyin`

**Teapot**: 6 Copper Ingot + 1 Bucket.
1. Fresh Tea Leaves trocknen: im Ofen, am Lagerfeuer oder auf dem **Bamboo Tray** (4 String + 1 Bamboo Trapdoor, trocknet bei klarem Himmel).
2. Teebeutel: 8 Dried Tea Leaves + eine Zutat, z. B. Iron Nugget für Tieguanyin.
3. Kanne auf die Hitzequelle, mindestens 1000 mB Wasser (für Butter Tea Milch), Beutel dazu, 240 Sekunden warten.
Im Stockpot ergeben Teebeutel mit Milch **Clay Pot Milk Tea**, der alle schädlichen Effekte entfernt.

---

## KU5 · Festessen und Dorf

### KU5-01 Ein Festessen · Nebenquest
**Aufgabe:** `farmersdelight:roast_chicken_block`, `farmersdelight:honey_glazed_ham_block`, `farmersdelight:shepherds_pie_block`, `farmersdelight:stuffed_pumpkin_block` (eins davon)

Festessen stellst du als Block auf und teilst sie in Portionen. Stuffed Pumpkin kochst du im Cooking Pot, die anderen setzt du aus ihren Zutaten zusammen (Rezepte in JEI).
Mahlzeiten aus dem Cooking Pot geben **Nourishment** (Hunger sinkt nicht) oder **Comfort** (natürliche Heilung, egal wie hungrig).

### KU5-02 Der Koch · Nebenquest
**Aufgabe:** Checkmark

Stell einen Stove neben einen arbeitslosen Dorfbewohner: Er wird **Chef**. In neuen Dörfern stehen eigene Küchenhäuser mit Truhen voller Zutaten und Suppen.
🟢 Test 72: Seine Angebote nennen nur Kaleidoscope-Items (laut Code u. a. Tomate, Chili, Salat, Reis, Spiegelei, Küchenmesser, Kochschaufel, Suppen); Preise nicht ausgelesen.

### KU5-03 Lunch Bag · Nebenquest
**Aufgabe:** `kaleidoscope_cookery:transmutation_lunch_bag`

6 Leather + 1 Amethyst Shard. Die Tasche nimmt Essen und Tränke auf und isst per Rechtsklick, bis dein Hunger voll ist.

---

## KU6 · Taverne

### KU6-01 Reben und Trellis · Nebenquest
**Aufgabe:** `kaleidoscope_tavern:grapevine`, `kaleidoscope_tavern:trellis`

Wilde Reben hängen an Eichen; mit der Hand abbauen. 3 Grapevine ergeben 8 Trellis.
So wachsen Trauben:
1. Trellis einen Block über den Boden setzen, Rebe darauf pflanzen.
2. Sie wächst hoch und dann seitlich über weitere Gerüste.
3. Trauben hängen dort, wo unter dem Gerüst Luft ist.
Der **Boden unter dem Gerüst** bestimmt die Sorte: Erde und Gras → Grape, Eis und Schnee → Ice Grape, Netherrack und Magma → Gold Grape. Green Grape fällt zufällig beim Ernten. Mit der Schere erntest du 2–3 statt 1–2.

### KU6-02 Pressing Tub · Nebenquest
**Aufgabe:** `kaleidoscope_tavern:pressing_tub`, `kaleidoscope_tavern:grape_bucket`

1 Barrel ergibt 2 Pressing Tubs. Leg Trauben oder Beeren hinein und **spring darauf**. Jedes Stück gibt 125 mB Saft. An einer Wand wird die Kelter schräg und taugt nur noch als Ablage.

### KU6-03 Barrel und Tap · Nebenquest
**Aufgabe:** `kaleidoscope_tavern:barrel`, `kaleidoscope_tavern:tap`, `kaleidoscope_tavern:wine`

**Barrel**: 9 Vanilla-Barrel. **Tap**: Lever + Hopper.
1. Deckel öffnen, Saft (oder Wasser) und Zutat hinein, Deckel schließen.
2. Warten. Je länger, desto besser der Wein. Rechtsklick zeigt den Stand.
3. Glasflasche unter den Zapfhahn, abfüllen.
Wine aus reinem Grape Juice, Vodka aus Wasser + Potato. Jedes Getränk gibt einen Effekt.

### KU6-04 Cocktail · Nebenquest
**Aufgabe:** `kaleidoscope_tavern:shaker`, `kaleidoscope_tavern:mojito`, `kaleidoscope_tavern:bloody_mary` (Shaker und eins davon)

**Shaker**: 1 Iron Ingot + 1 Bucket. Er mischt drei Getränke nach **Farbe**: weiß (Vodka, Whiskey, Rum), rot (Plum Wine, Sweet Berry Wine, Red Queen), hellviolett (Wine, Champagne …) usw. Mojito = 2 weiß + 1 grün, Bloody Mary = 3 rot. Gläser: Empty Glassware aus 3 Glass Pane.

---

## KU7 · Grill

### KU7-01 Grill · Nebenquest
**Aufgabe:** `kaleidoscope_grilling:grill`

5 Iron Ingot + 2 Brick + 1 Kohle. Mit Flint and Steel anzünden; danach brennt er ohne Brennstoff.

### KU7-02 Der erste Spieß · Nebenquest
**Aufgabe:** `kaleidoscope_grilling:grilled_beef_skewer`

Spieße baust du ohne Werkbank: **Stick in die Zweithand**, dann die Zutaten der Reihe nach anklicken. Für den Beef Skewer: Beef Chunks, Red Chili, Beef Chunks. Leg ihn auf den Grill und **wende** ihn.
Jeder der 20 festen Spieße gibt beim Essen einen Effekt (Beef: Strength 10 s). Eigene Mischungen werden zum Secret Mix Skewer.
Das **Skewer Recipe Book** merkt sich einen Spieß und baut ihn schnell nach.

### KU7-03 Canola-Öl · Nebenquest
**Aufgabe:** `kaleidoscope_grilling:canola_oil_bucket`

Kette: Canola Seeds → Mühlstein → Canola Powder → 8 Powder + 1 Wheat → Oil Cake → Wooden Oil Press → Canola Oil.
- **Wooden Oil Press**: 4 Logs + Iron Ingot + 2 Fences + Hopper. Sie nimmt genau 4 Oil Cakes.
- **Big Vat**: 7 Brick + 1 Bucket, direkt daneben; es fängt das Öl auf.
- Schlag die Presse mit einem **Anvil** (früh geht auch Stein, aber viel langsamer).
Mit dem Oil Brush bestreichst du Spieße; sie bleiben dann länger warm. Chili Oil: Canola Oil Bucket + 3 Red Chili Powder.

### KU7-04 Gewürzflasche · Nebenquest
**Aufgabe:** `kaleidoscope_grilling:special_seasoning`

Stell die Empty Seasoning Bottle (6 Glass + Holzknopf) ab, füll bis zu acht Zutaten hinein, nimm sie auf und schüttle sie 4 Sekunden. Drei Pflichtgewürze bilden die Basis 🔵 (welche, zeigt JEI unter „Mixing Seasoning“). Redstone, Gunpowder, Houttuynia Powder u. a. geben Zusatz-Buffs.

---

## KU8 · Nether (Nether's Delight)

### KU8-01 Machete und Hoglin · Nebenquest
**Aufgabe:** `nethersdelight:iron_machete`, `nethersdelight:hoglin_loin`

Iron Machete: 2 Iron Ingot + 1 Stick. Hoglins geben mit Messer oder Machete Hoglin Hide und Hoglin Loin. Hoglin Hide wird am Brett zu 4 Leather.

### KU8-02 Propelplant · Nebenquest
**Aufgabe:** `nethersdelight:propelplant_cane`

Wächst im Crimson Forest. Am Brett gibt sie Gunpowder, im IE-Crusher 2 – eine erneuerbare Quelle für Schießpulver.

### KU8-03 Soul Compost · Nebenquest
**Aufgabe:** `nethersdelight:soul_compost`, `nethersdelight:rich_soul_soil`

1 Soul Soil + 2 Twisting Vines + 4 Warped Roots + 2 Bone Meal. Zerfällt wie Organic Compost zu Rich Soul Soil, auf dem Fungus-Kolonien wachsen.

### KU8-04 Stuffed Hoglin · Nebenquest
**Aufgabe:** `nethersdelight:stuffed_hoglin`

Das Festessen des Nethers: Raw Stuffed Hoglin (2 Hoglin Loin, 2 Ham, Hoglin Hide, Nether Salad …) mit 2 Nether Salad im Cooking Pot. Zerteilen geht nur mit einem Messer.

---

## KU9 · End (Kaleidoscope End)

### KU9-01 Ender Mint und Dream Berry · Nebenquest
**Aufgabe:** `kaleidoscope_end:ender_mint`, `kaleidoscope_end:dream_berry`

Beide wachsen im End, Dream Berries auf den äußeren Inseln. Dream Berries geben den Effekt Dream: Du läufst durch die Luft.

### KU9-02 Abpinseln · Nebenquest
**Aufgabe:** `kaleidoscope_end:void_conch`, `kaleidoscope_end:dragon_dust`

Mit dem Brush legst du Suspicious End Stone frei (Void Conch, manchmal Diamond oder Enchanted Book). Das **Drachenei** gibt beim Abpinseln Dragon Dust und Dragon Egg Liquid – das geht erst nach dem Enderdrachen.

### KU9-03 Dragon Tooth Knife · Nebenquest
**Aufgabe:** `kaleidoscope_end:dragon_tooth_knife`

1. Smithing Template: 7 Obsidian + Netherite Upgrade + Dragon Dust.
2. Am Smithing Table: Netherite Kitchen Knife + Dragon Dust.
Das Messer ist besonders scharf gegen End-Kreaturen. Tötest du damit End-Mobs, lassen sie Zutaten fallen (Optic Nerve, Shulker Meat, Raw Endermite Meat).

### KU9-04 Dragon Egg Stew · Nebenquest
**Aufgabe:** `kaleidoscope_end:dark_dragon_egg_stew`

Dragon Egg Shell (3 Obsidian + Dragon Dust) als Gefäß. Im Stockpot: 3 Ender Mint, 2 Eier, Drachenfleisch (Ender Dragon mit dem Küchenmesser).

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | Wo im Text | Stand |
|---|---|---|
| Gewinner Kaleidoscope: Tomato, Tomato Seed, Rice, Rice Panicle, Cooked Rice, Fried Egg, Raw Dough, Flour (auch Engineer's Delight), Raw Noodles statt Pasta, Onion (Grilling) | KU1-03, KU2-03, KU2-04, KU4-07 | 🟢 umgesetzt 2026-10-20, getestet 2026-10-21 (Tests 66–71) |
| Gewinner Farmer's Delight: Mutton Chops, Dumplings, Bacon, Chicken Cuts, Cod/Salmon Slice statt Sashimi, Rice Bale | KU2-03, KU3-03 | 🟢 dito |
| Geräte: Stove von Kaleidoscope (FD- und Blackstone-Herd entfallen), Cutting Board von Farmer's Delight (mit den Brett-Rezepten von Kaleidoscope), Küchenmesser von Kaleidoscope, Flint Knife von FD | KU1-01, KU3-01, KU3-02 | 🟢 dito |
| Wildpflanzen und Truhen geben die Gewinner (Loot-Overrides) | KU1-03 | 🟢 Test 70 |
| Altbestand 1:1 in der Werkbank, alter FD-Herd gibt Kaleidoscope-Herd | Hinweise, KU3-01 | 🟢 Test 71 |
| FD-Config: Dorfhandel der Bauern und des Händlers mit FD-Items aus, FD-Pflanzen auf Dorffeldern aus | KU5-02 | 🟢 `config-overrides/config/farmersdelight-common.toml` |
| Mühlstein vervielfacht Erze (Befund KS1) | KU4-06 | 🔵 nicht entschieden (F30) |

## 🔵 Offen vor dem Einbau

- **Mühlstein-Erze (KS1):** Iron Ore zu 3 Raw Iron mit einem Esel ist billiger als alle frühen Erzwege. Bleibt das, kann KU4-06 eine eigene Quest dazu bekommen; sonst die Rezepte entfernen und in JEI ausblenden.
- **Koch-Handel** (KU5-02): FTB Quests prüft keinen Berufswechsel, deshalb Checkmark.
- **Pflichtgewürze** der Gewürzflasche (KU7-04) in JEI nachsehen.
- **Rich Soil**: Zerfallszeit und was ihn beschleunigt, nicht ausgelesen (KU2-02).
- **Ponder fehlt:** Wer die Anleitungsszenen von Kaleidoscope im Spiel will, braucht den Mod Ponder; sonst ersetzen diese Texte sie.
