# 02 — RESSOURCEN

> Stand 2026-10-12, Minecraft 1.20.1. Neu aufgenommen beim Neustart der Analyse; die Fassung für 1.18.2 liegt im Git-Verlauf (Commit `9bf29d8`).

## Zweck

Inventar der Erze, Metalle, Flüssigkeiten und magischen Ressourcen sowie die Festlegung, welche Mod für eine Materialfamilie „kanonisch“ ist.

## Datenbasis

- Quelle: die 98 JARs der Testinstanz `Minecraft1201withForge` (`mods_v5.txt`) und deren Configs, gelesen am 2026-10-12.
- 🟢 **Neu aus den JARs gelesen:** Erzblöcke, Worldgen (`data/*/worldgen`, `data/*/forge/biome_modifier`), die Tags `forge:ores`, `forge:ingots`, `forge:raw_materials`, `forge:gems`, alle Fluid-Tags, Rezepttypen.
- 🟡 **Aus der 1.18.2-Fassung übernommen, in 1.20.1 nicht einzeln nachgeprüft:** Listen von Zwischenprodukten und magischen Materialien (in den Abschnitten gekennzeichnet).
- Im Spiel getestet ist davon nichts. Ein Tag-Dump aus dem laufenden Spiel (`kubejs/exported`) fehlt noch (🔵 vor den ersten Tag-Skripten erzeugen).

Rein dekorative Blöcke, Werkzeuge und Utility-Gegenstände zählen nicht als Ressourcenfamilie. Die Soll-Verteilung der Erze steht in `03_ERZGENERATION.md` (beschlossen am 2026-10-12).

---

# Teil 1 — Erze und ihre Generierung (Ist-Zustand, 🟢 aus JAR und Config)

## Overworld

| Erz | Mod | Block-IDs | Generierung (Standard) | Stellschraube |
|---|---|---|---|---|
| Kohle, Eisen, Kupfer, Gold, Redstone, Lapis, Diamant, Smaragd | Vanilla | — | Vanilla | Datapack |
| Bauxit (Aluminium) | IE | `immersiveengineering:ore_aluminum`, `deepslate_ore_aluminum` | 16 × 6, Y 32…112 | IE-Serverconfig |
| Blei | IE | `ore_lead`, `deepslate_ore_lead` | 12 × 8, Y −32…80 | IE-Serverconfig |
| Silber | IE | `ore_silver`, `deepslate_ore_silver` | 10 × 9, Y −48…32 | IE-Serverconfig |
| Nickel | IE | `ore_nickel`, `deepslate_ore_nickel` | 7 × 5, Y −64…24 und 11 × 6, Y −120…−8 | IE-Serverconfig |
| Uran | IE | `ore_uranium`, `deepslate_ore_uranium` | 9 × 4, Y −64…−16 | IE-Serverconfig |
| Zinn | Mekanism | `mekanism:tin_ore`, `deepslate_tin_ore` | small 14 × 4 (Y −20…94), large 12 × 9 (Y −32…72) | `Mekanism/world.toml` |
| Osmium | Mekanism | `osmium_ore`, `deepslate_osmium_ore` | upper 65 × 7 (Y 72…Top−24), middle 6 × 9 (Y −32…56), small 8 × 4 (Boden…64) | `Mekanism/world.toml` |
| Uran | Mekanism | `uranium_ore`, `deepslate_uranium_ore` | small 4 × 4 (Boden…8), buried 7 × 9 | `Mekanism/world.toml` |
| Fluorit | Mekanism | `fluorite_ore`, `deepslate_fluorite_ore` | normal 5 × 5 (Boden…23), buried 3 × 13 (Boden…4) | `Mekanism/world.toml` |
| Blei | Mekanism | `lead_ore`, `deepslate_lead_ore` | 8 × 9, bis Y 64 | `Mekanism/world.toml` |
| Salz | Mekanism | `mekanism:block_salt` | 2 pro Chunk | `Mekanism/world.toml` |
| **Kyber-Kristall** | Galaxy in a Cube | `swgc:kyber_crystal` | in **allen Overworld-Biomen**, 1 Versuch in jedem 16. Chunk, Y 4…112 über dem Weltboden | nur Datapack/KubeJS |
| Certus-Quarz | AE2 | — | **kein Erz mehr**, siehe unten | — |

Schreibweise „Adern pro Chunk × Adergröße“.

- **IE** hängt seine Erze über Biome Modifier an `#minecraft:is_overworld`. Die Werte stehen pro Welt in `saves/<Welt>/serverconfig/immersiveengineering-server.toml`, Abschnitt `[ores.*]`. Das Format ist gegenüber 1.18.2 unverändert (Schlüssel `vein_size`, `attempts_per_chunk`, `retrogen_enable`, `retrogen_key`).
- **Mekanism** hängt seine Erze an das Biom-Tag `#mekanism:spawn_ores` (= `#minecraft:is_overworld`). Die Werte stehen in `config/Mekanism/world.toml`. Auch dieses Format ist unverändert (`shouldGenerate`, `perChunk`, `maxVeinSize`, `enableRegeneration`, `userWorldGenVersion`). Für das Retrogen gibt es im JAR eigene Features (`…_retrogen`).
- **Doppelt erzeugt** werden weiterhin Blei und Uran (IE und Mekanism).
- **AE2:** In 15.4.11 gibt es keinen Certus-Erzblock und keine Erz-Generierung mehr. Certus entsteht an **Budding-Certus-Blöcken**, die nur in Meteoriten vorkommen (Struktur `ae2:meteorite` in `#minecraft:is_overworld`, Abstand 32 Chunks). In `config/ae2/common.json` gibt es unter `worldGen` nur noch `spawnPressesInMeteorites` und `spawnFlawlessOnly`. Die alten Stellschrauben (Cluster-Anzahl) sind entfallen.
- **Galaxy in a Cube** erzeugt außerdem die Struktur `swgc:ewok_village` im Biom `minecraft:forest` und lässt Jawas in Wüsten und Badlands spawnen. Damit ist TODO E20 aus dem JAR beantwortet: **Ja, der Mod erzeugt etwas in der Overworld.** 🔵 Im Spiel nicht geprüft.
- **Tinkers** (Overworld): Erd-Schleim-Geoden, 1 Versuch in jedem 256. Chunk.
- **Wesley's Roguelike Dungeons:** `wrd:deepsand` (warme Ozeane, Ebenen, Wüste) und `wrd:maulstone` (Pilzinseln) als Erz-Features, dazu Dungeon-Eingänge.

## Nether und End

| Erz | Mod | Generierung |
|---|---|---|
| Netherquarz, Nether-Gold, Ancient Debris | Vanilla | Vanilla |
| Kobalt (`tconstruct:cobalt_ore`) | Tinkers | small 5 × 4 (ganze Höhe), large 3 × 6 (Y 8…32) |
| Ichor-Geode (Nether), Ender-Geode (End), Himmels-Geode | Tinkers | selten |

## Blue Skies (Everbright und Everdawn)

| Erz | Block-IDs | Dimension | Adern × Größe | Y |
|---|---|---|---|---|
| Moonstone | `everbright_moonstone_ore`, `everdawn_moonstone_ore` | beide | 20 × 14 | 0…127 |
| Pyrope | `everbright_pyrope_ore`, `everdawn_pyrope_ore` | beide | 17 × 7 | 0…83 |
| Aquite | `everbright_aquite_ore`, `everdawn_aquite_ore` | beide | 15 × 5 | 0…54 |
| Diopside | `everbright_diopside_ore`, `everdawn_diopside_ore` | beide | 1 × 6 | 0…19 |
| Charoite | `everbright_charoite_ore`, `everdawn_charoite_ore` | beide | 1 × 6 | 0…13 |
| Falsite | `falsite_ore` | Everbright, 8 Biome | 20 × 6 | 0…63 |
| Ventium | `ventium_ore` | Everbright, 8 Biome | 20 × 6 | 0…63 |
| Horizonite | `horizonite_ore` | Everdawn, 5 Biome | 10 × 4 | 0…24 |
| Smaragd | `everbright_emerald_ore`, `everdawn_emerald_ore` | je 1 Biom (Brightlands, Unorthodox Valley) | 🔵 nicht ausgelesen | — |

- Alle Höhen gleichverteilt. Die Erze stehen direkt in den Biom-Dateien, sind also per Datapack änderbar.
- Metalle (mit Barren): Falsite, Ventium, Horizonite. Edelsteine: Aquite, Charoite, Diopside, Pyrope, Moonstone.
- **Kein Erz anderer Mods erzeugt sich dort von selbst:** IE und Mekanism zielen auf `is_overworld`, und Blue Skies filtert fremde Features zusätzlich aus (`allowed_mods_for_feature_gen`, Standard leer).
- Gestein zum Einsetzen fremder Erze: `blue_skies:turquoise_stone` (Everbright), `blue_skies:lunar_stone` (Everdawn). **Mekanism-Erzblöcke in diesem Gestein gibt es nicht** (anders als auf den Planeten).

## Planeten (Ad Astra, Star Wars Planets)

Die Werte der Planeten-Erze stehen in `15_RAUMFAHRT.md`, Abschnitt Worldgen. Kurzfassung:

| Erz | Wo | Mod |
|---|---|---|
| Desh | Mond | Ad Astra |
| Ostrum | Mars | Ad Astra |
| Calorite | Venus | Ad Astra |
| Ice Shard | Mond, Mars, Glacio | Ad Astra |
| Cheese | Mond | Ad Astra |
| Eisen, Kohle, Kupfer, Gold, Lapis, Diamant in Planetengestein | je nach Planet | Ad Astra |
| Kyber (Deepslate, Sandstein) | Endor, Hoth, Mustafar, Tatooine | Star Wars Planets |
| Beskar (Sandstein) | Mandalore | Star Wars Planets |
| Osmium, Zinn, Blei, Uran, Fluorit in Planetengestein (16 Blöcke) | Mond, Mars, Merkur, Venus, Glacio | Mekanism: Ad Astra Ores — **Generierung abgeschaltet** |

- „Mekanism: Ad Astra Ores“ hat zwei Biome Modifier: `gen_ores` setzt die eigenen Planeten-Erze in neun Ad-Astra-Biome, `gen_ores_deepslate` setzt zusätzlich die **normalen** Mekanism-Erze in die zwei Glacio-Biome. Beide Biom-Tags sind in der Testinstanz geleert (`kubejs/data/mekanismaaa/tags/worldgen/biome/…`, 🟢 Dateien vorhanden, 🔵 Wirkung nicht getestet).
- Die Mengen dieser Erze kommen aus `Mekanism/world.toml`. Planeten und Overworld teilen sich also dieselben Zahlen (Adern pro Chunk, Größe, Höhe). 🔵 Vermutung: Wer in `world.toml` Zinn abschaltet, schaltet es auch für die Planeten-Features ab. Für die Erzplanung (Block B) heißt das: Eigene Mengen je Planet gehen nur über eigene Features per Datapack/KubeJS.
- Es gibt **zwei verschiedene Kyber**: `swplanets:kyber_crystal_ore` (Erz auf den Star-Wars-Planeten) und `swgc:kyber_crystal` (Kristallblock in der Overworld). Sie teilen kein Tag.

## Sonderdimensionen

| Ressource | Wo | Generierung |
|---|---|---|
| Elementium-Erz | Alfheim (MythicBotany) | 5 × 9, bis 70 über dem Boden |
| Dragonstone-Erz | Alfheim | Ader 4, bis 16 über dem Boden |
| Mythic-Golderz | Alfheim | 2 × 9 und 5 × 9 |
| Demonit (`bloodmagic:rawdemonite`, Tag `forge:raw_materials/hellforged`) | Demon Dungeon (Blood Magic) | Strukturdimension, 🟡 übernommen |

---

# Teil 2 — Metalle und Tags (🟢 aus JAR)

## Wer welches Metall als Item liefert

| Familie | Erz | Rohmaterial | Barren (`forge:ingots/…`) |
|---|---|---|---|
| Kupfer, Eisen, Gold | Vanilla | Vanilla | Vanilla |
| Aluminium | IE | IE | IE |
| Nickel | IE | IE | IE |
| Silber | IE | IE | IE |
| Blei | IE, Mekanism, Mek-AA-Ores | IE, Mekanism | **IE und Mekanism** |
| Uran | IE, Mekanism, Mek-AA-Ores | IE, Mekanism | **IE und Mekanism** |
| Zinn | Mekanism, Mek-AA-Ores | Mekanism | Mekanism |
| Osmium | Mekanism, Mek-AA-Ores | Mekanism | Mekanism |
| Kobalt | Tinkers | Tinkers | Tinkers |
| Stahl | — | — | **IE, Mekanism, Tinkers, Ad Astra** (vier Items) |
| Bronze | — | — | **Mekanism, TCIntegrations** |
| Constantan, Electrum | — | — | IE |
| Desh, Ostrum, Calorite | Ad Astra | Ad Astra | Ad Astra |
| Refined Glowstone, Refined Obsidian | — | — | Mekanism |
| Manasteel, Elementium, Terrasteel | — (Elementium-Erz: MythicBotany) | MythicBotany (`raw_elementium`) | Botania |
| Hellforged | Blood Magic | Blood Magic | Blood Magic |
| Bloodbrass | — | — | Blood-Smeltery |
| Falsite, Ventium, Horizonite | Blue Skies | Blue Skies | Blue Skies (eigene Tags `blue_skies:ingots/…`, in `forge:ingots` eingehängt) |
| Amethyst Bronze, Rose Gold, Pig Iron, Manyullyn, Hepatizon, Slimesteel, Cinderslime, Queen's Slime, Knightslime, Soulsteel, Knightmetal | — | — | Tinkers |

Änderungen gegenüber 1.18.2:

- **Stahl hat ein viertes Item** (`ad_astra:steel_ingot`), dazu ein eigenes Stahl-Rezept in Ad Astra, das den IE-Stahl umgeht (`15_RAUMFAHRT.md`).
- **Bronze:** IE hat kein Bronze-Item (🟢 `forge:ingots/bronze` enthält nur Mekanism und TCIntegrations). Das IE-Legierungsrezept für Bronze gibt es weiterhin (`alloysmelter/bronze`, dazu Brass, Invar, Rose Gold, Manyullyn); es gibt über das Tag eines der beiden fremden Items aus.
- **Beskar und Kyber** haben keine `forge:`-Barren-Tags; Star Wars Planets trägt nur `forge:ores/kyber_crystal` ein. Beskar ist für andere Mods unsichtbar, bis wir Tags setzen.
- TCIntegrations bringt Schmelz-Fluids für Desh, Ostrum, Calorite und Manasteel mit: Die Planeten-Metalle sind als Tinkers-Material vorgesehen.

## Grundbefund (gilt weiter)

🟢 Ein Forge-Tag vereinheitlicht die **Verwendbarkeit als Eingabe**, nicht die Registry-ID der Ausgabe. `immersiveengineering:ingot_lead` und `mekanism:ingot_lead` bleiben verschiedene Items, liegen aber beide in `forge:ingots/lead`.

🟢 **Integrationsregel:** Materialien einzelner Mods werden nicht zu einer globalen Metallpalette zusammengeführt. Rezeptänderungen vereinheitlichen bevorzugt Input-Tags; Output-Items und mod-spezifische Progressionsmaterialien bleiben erhalten.

## Kanonische Quellen

| Familie | Kanonisch | Zielrolle | Status |
|---|---|---|---|
| Kupfer, Eisen, Gold | Vanilla | Basis | 🟢 |
| Aluminium, Nickel, Silber, Constantan, Electrum | IE | IE-Industrie | 🟢 |
| Stahl | IE (Progressionsquelle) | industrielles Gate | 🟢; 🔵 Parallelwege in Mekanism und Ad Astra bereinigen |
| Zinn, Osmium | Mekanism | Mekanism-Technik | 🟢 |
| Blei | **Mekanism** (IE-Bleierz aus; IE nutzt es über `forge:ingots/lead`) | Strom, Chemie, Schutz | 🟢 2026-10-12 |
| Uran | **Mekanism** (IE-Uranerz aus) | Nuklearkette, exklusiv Mekanism | 🟢 2026-10-12 |
| Bronze | 🔵 Mekanism oder TCIntegrations | Übergangslegierung | 🔵 |
| Kobalt und Tinkers-Legierungen | Tinkers | Werkzeuge | 🟢 |
| Desh, Ostrum, Calorite | Ad Astra | Raketenstufen | 🟢 |
| Certus, Fluix, Silicon | AE2 | AE2 | 🟢 |
| Manasteel, Elementium, Terrasteel, Alfsteel | Botania / MythicBotany | Magie | 🟢 |
| Hellforged | Blood Magic | Blood Magic ↔ Tinkers | 🟢 |
| Falsite, Ventium, Horizonite und Blue-Skies-Edelsteine | Blue Skies | Dimensions-Ausrüstung | 🟢; 🔵 Cross-Mod-Rolle offen |
| Kyber, Beskar | Star Wars Planets / Galaxy in a Cube | Star-Wars-Kapitel | 🔵 siehe `17_STAR_WARS_1.20.1.md` |

---

# Teil 3 — Flüssigkeiten (🟢 Fluid-Tags aus JAR)

| Mod | Flüssigkeiten |
|---|---|
| Immersive Engineering | Creosote, Plant Oil, Ethanol, Biodiesel, Redstone Acid, Phenolic Resin, Acetaldehyde, Herbicide, Concrete |
| Immersive Petroleum | Crude Oil (`immersivepetroleum:crudeoil`), Diesel, Diesel (Sulfur), Gasoline, Kerosene, Naphtha, Benzol, Lubricant, Napalm, Petroleum Gas |
| Mekanism | Hydrogen, Oxygen, Chlorine, Hydrogen Chloride, Ethene, Brine, Lithium, Sodium, Superheated Sodium, Steam, Heavy Water, Sulfur Dioxide, Sulfur Trioxide, Sulfuric Acid, Hydrofluoric Acid, Uranium Oxide, Uranium Hexafluoride |
| Mekanism Generators | Bioethanol, Deuterium, Tritium, Fusion Fuel |
| Ad Astra | Oil, Fuel, Cryo Fuel, Oxygen, Hydrogen |
| Tinkers / TCIntegrations / Blood-Smeltery | Schmelz-Fluids (`forge:molten_*`), Schleim, Honig, Suppen |
| Blood Magic | Life Essence (`forge:life`) |
| Engineers Delight | Apfelwein, Melonensaft, Milch, Tomatensauce |
| Sophisticated Core | flüssige Erfahrung |

Gemeinsame Tags, an denen sich Mods treffen:

| Tag | Inhalt | Bedeutung |
|---|---|---|
| `forge:oxygen` | Mekanism, Ad Astra | flüssiger Mekanism-Sauerstoff gilt im Oxygen Loader |
| `forge:hydrogen` | Mekanism, Ad Astra | |
| `forge:crude_oil` | Immersive Petroleum | liegt in `#ad_astra:oil` → Fuel Refinery nimmt IP-Rohöl |
| `forge:diesel` | IP Diesel **und** Diesel (Sulfur) | liegt in `#ad_astra:fuel` |
| `forge:biodiesel` | IE Biodiesel | liegt in `#ad_astra:fuel` |
| `forge:fuel` | Ad Astra Fuel | |
| `ad_astra:tier_1…4_rocket_fuel`, `ad_astra_rocketed:tier_5…7_rocket_fuel` | jeweils `#ad_astra:fuel` | pro Stufe einzeln überschreibbar |
| `immersiveengineering:drill_fuel` | Biodiesel (IE), Diesel, Diesel (Sulfur), Kerosene (IP) | Treibstoff für Bohrer und (über `iaie`) für die Fluggeräte |

Gegenüber 1.18.2 hat Immersive Petroleum deutlich mehr Produkte (Kerosene, Naphtha, Benzol, Petroleum Gas, Hydrotreater als Maschine). Das gibt Spielraum für die gestaffelten Raketentreibstoffe (`15_RAUMFAHRT.md`).

Mekanism-Gase ohne flüssige Form (Fissile Fuel, Nuclear Waste, Plutonium, Polonium, Antimatter u. a.) sind 🟡 aus 1.18.2 übernommen.

---

# Teil 4 — Maschinen und Rezepttypen (🟢 aus JAR, Zahl der Rezepte)

| Mod | Rezepttypen (Auswahl) |
|---|---|
| Immersive Engineering | Crusher 100, Metal Press 96, Arc Furnace 78, Sawmill 72, Cloche 37, Blueprint 36, Hammer-Crushing 30, Mineral Mix 21, Bottling 10, Alloy 8, Fermenter 8, Squeezer 6 |
| Mekanism | Crushing 311, Enriching 251, Injecting 76, Combining 66, Metallurgic Infusing 33, Purifying 28, Dissolution 23, Nucleosynthesizing 20, Rotary 17, Reaction 14, Crystallizing 10, Washing 7, Oxidizing 6 (dazu Sawing 1.804 und Painting 976) |
| Tinkers' Construct | Melting 502, Casting Table 439, Casting Basin 142, Ore Melting 94, Alloy 22, Modifier 116 |
| TCIntegrations | Melting 35, Casting 57, Material 34, Ore Melting 25 |
| Blood Magic | Alchemy Table 128, ARC 96, Soul Forge 89, Array 26, Altar 23, Meteor 6 |
| Blood-Smeltery | Casting 93, Melting 40 (teilweise defekt) |
| Botania | Mana Infusion 139, Petal Apothecary 43, Brew 20, Runic Altar 16, Orechid 16, Elven Trade 14 |
| MythicBotany | Runic Altar 9, Petal Apothecary 6 |
| AE2 | Inscriber 15, Transform 8, Entropy 10 |
| Ad Astra | Compressing 10, Space Station 6 (weitere Typen mit weniger als 5 Rezepten) |
| Engineers Delight | IE-Rezepte: Sawmill 22, Cloche 12, Bottling 7, Metal Press 5 |
| Farmer's Delight | Cutting 105, Cooking 28 |

## Erzquellen an der Worldgen vorbei (🟢 aus JAR)

Diese drei Wege liefern Erze unabhängig davon, was wir in der Worldgen einstellen. Wer ein Erz an eine Dimension binden will, muss sie mitbedenken.

**IE-Mineraladern (Excavator), 21 Mineral-Mixe.** Die für uns wichtigen, alle in der Overworld:

| Ader | Gewicht | Inhalt |
|---|---:|---|
| Cassiterite | 20 | **100 % `#forge:ores/tin`** |
| Galena | 15 | 40 % Blei, 20 % Silber, 40 % Schwefel |
| Uraninite | 10 | 70 % Uran, 30 % Blei |
| Laterite | 20 | 70 % Aluminium, 20 % Eisen |
| Pentlandite | 25 | 35 % Nickel, 35 % Eisen, 30 % Schwefel |
| Auricupride | 30 | 75 % Kupfer, 25 % Gold |
| Chalcopyrite | 20 | 35 % Eisen, 35 % Kupfer, 30 % Schwefel |
| Bituminous Coal | 25 | 80 % Kohle, 20 % Schwefel |
| Cinnabar | 15 | 60 % Redstone, 40 % Schwefel |

Osmium und Fluorit kommen in keiner Ader vor. Einträge für nicht vorhandene Erze (Platin, Wolfram, Titan u. a.) fallen weg. Die Mixe sind Rezepte (`immersiveengineering:mineral_mix`) und per KubeJS änderbar.

**Botania Orechid:** nur Vanilla-Erze (Kohle, Eisen, Kupfer, Gold, Redstone, Lapis, Diamant, Smaragd); Orechid Ignem: Netherquarz, Nether-Gold, Ancient Debris. Keine Mod-Erze.

**Blood-Magic-Meteore** (Ritual; 11 Rezepte im JAR, vier davon für nicht installierte Mods):

| Meteor | Inhalt |
|---|---|
| `mekanism` | Osmium, Zinn, Blei, Uran, Fluorit, Kupfer, Uranblöcke |
| `immersive_engineering` | Aluminium, Kupfer, Blei, Nickel, Silber, Uran |
| `ae2` | **Budding-Certus-Blöcke** (alle vier Stufen), Certus- und Fluix-Blöcke, Sky Stone |
| `iron` | Eisen, Kupfer, Blei, Silber, Zinn, Gold, Lapis, Redstone |
| `diamond`, `nether`, `stone` | Vanilla-Erze |

🔵 Anteile und Kosten der Meteore sind nicht ausgewertet.

---

# Teil 5 — Magische und sonstige Ressourcen (🟡 aus 1.18.2 übernommen)

- **Botania:** Manasteel, Elementium, Terrasteel, Gaia Spirit, Mana Diamond, Mana Pearl, Pixie Dust, Dragonstone, Livingrock, Livingwood; 16 Runen; Quarz-Varianten. Mana ist kein Item.
- **MythicBotany:** Alfsteel, neun nordische Runen, Blood/Mead of Kvasir.
- **Blood Magic:** Life Essence, Demonit → Hellforged, Corrupted Dust, Sulfur.
- **AE2:** Certus (nur noch über Budding-Blöcke), Fluix, Silicon, Sky Stone, Prozessoren; Inscriber-Pressen nur aus Meteoriten.
- **Tinkers:** Schleim-Arten, Schleim-Kristalle; Materialien aus anderen Mods über TCIntegrations.
- **Alex's Mobs:** Tier-Drops als Zutaten (keine Erze). 🔵 Auf Drops prüfen, die Progression abkürzen.
- **Chisels & Bits, Easy NPC, Storage Drawers, Backpacks:** keine Ressourcenfamilie.

---

# Offene Punkte

1. 🔵 Bronze: kanonische Ausgabe (Mekanism oder TCIntegrations). Blei und Uran sind entschieden: nur Mekanism-Erz.
2. 🟡 IE-Mineraladern: Cassiterite entfernen, Galena und Uraninite seltener (🟢 entschieden, Umsetzung in Block D). 🔵 Blood-Magic-Meteore: lassen oder anpassen.
3. 🟢 Certus bleibt AE2-Standard (nur Meteoriten). 🔵 Im Spiel ansehen, wie leicht Meteoriten in der bestehenden Welt zu finden sind.
4. 🟢 Kyber-Kristalle werden aus der Overworld entfernt (Umsetzung in Block D).
5. 🔵 Tag-Dump aus dem Spiel erzeugen; Tags für Beskar und Kyber festlegen.
6. 🔵 Cross-Mod-Rolle der Blue-Skies-Metalle.
