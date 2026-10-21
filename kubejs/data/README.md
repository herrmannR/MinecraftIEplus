# kubejs/data — Datapack-Overrides

KubeJS lädt diesen Ordner als Datapack. JSON erlaubt keine Kommentare, deshalb stehen die Begründungen hier.

Stand 2026-10-12, Minecraft 1.20.1. **Nichts davon ist im Spiel getestet.** In der Testinstanz liegen bisher nur die zwei `mekanismaaa`-Dateien.

| Datei | Wirkung | Entscheidung |
|---|---|---|
| `ad_astra/tags/worldgen/biome/has_structure/oil_well.json` | Leert die Biom-Liste der Ad-Astra-Ölquellen → keine neuen Oil Wells in den Ozeanen. Immersive Petroleum bleibt die einzige Ölquelle. | `docs/15_RAUMFAHRT.md` (2026-10-07, übertragen 2026-10-11) |
| `mekanismaaa/tags/worldgen/biome/gen_ores.json`, `gen_ores_deepslate.json` | Leert die Biom-Listen von „Mekanism: Ad Astra Ores“ → der Mod erzeugt selbst keine Erze mehr. Seine Erzblöcke nutzen wir in eigenen Features. | Erzverteilung legen wir selbst fest (2026-10-11) |
| `ieplus/worldgen/configured_feature/*.json`, `placed_feature/*.json` | Zwölf eigene Erz-Features: Everbright (Zinn, Blei, Bauxit), Everdawn (Osmium), Mond (Osmium), Mars (Fluorit), Merkur und Venus (Uran, Blei), Glacio (Osmium, Uran). Werte: `docs/03_ERZGENERATION.md`. | Erzverteilung (2026-10-12) |
| `ieplus/forge/biome_modifier/*.json` | Hängt die Features an die Biome: `#blue_skies:everbright`, `#blue_skies:everdawn` und die Ad-Astra-Biome der Planeten. | wie oben |
| `swgc/forge/biome_modifier/kyber_crystals.json` | Ersetzt den Biome Modifier von Galaxy in a Cube durch `forge:none` → keine Kyber-Kristalle mehr in der Overworld. | Kyber nur auf den Star-Wars-Planeten (2026-10-12) |
| `ad_astra/tags/fluids/tier_1_rocket_fuel.json` … `tier_3_rocket_fuel.json` | Treibstoff je Raketenstufe: T1 Biodiesel, T2 entschwefelter Diesel (`immersivepetroleum:diesel`), T3 Kerosin. T4 bleibt vorerst beim Standard, bis es den eigenen Raketentreibstoff gibt. | `docs/15_RAUMFAHRT.md` (2026-10-12) |
| `immersiveengineering/recipes/mineral/galena.json`, `uraninite.json` | Excavator-Adern mit Blei und Uran seltener: Gewicht 5 statt 15 bzw. 10. Sonst unveränderte Kopien aus dem IE-JAR 10.2.0-183. | Blei in der Overworld sehr selten (2026-10-12) |
| `swplanets/loot_tables/entities/jawa.json` | Jawas lassen keine Steel Cables mehr fallen (ersetzt durch 3 Stahlstäbe); Etrionic Capacitor und Wrench bleiben. | Ad-Astra-Kabel entfallen (2026-10-12); Befund aus Test 4 (2026-10-13) |

## Kaleidoscope ohne Dopplungen (2026-10-20, getestet: Tests 65–72 am 2026-10-21)

| Datei | Wirkung | Entscheidung |
|---|---|---|
| `farmersdelight/loot_tables/blocks/*.json` (10), `farmersdelight/loot_tables/chests/fd_*.json` (14), `farmersdelight/loot_modifiers/add_onion_to_*.json` (2), `nethersdelight/loot_tables/blocks/blackstone_stove.json`, `kaleidoscope_cookery/loot_tables/blocks/{chopping_board,straw_block}.json`, `kaleidoscope_cookery/loot_tables/chest/village_chest.json` | Kopien der Mod-Tabellen, in denen Verlierer-Items durch die Gewinner ersetzt sind (Pflanzen, Truhenbeute, Zwiebel von Zombies und Illagern; FD- und Blackstone-Herd → KC-Herd, KC-Brett → FD-Brett, KC-„Strohballen“ → FD-Reisballen). Nicht von Hand ändern: `python tools/kaleidoscope_daten.py` erzeugt sie aus der Tabelle in `server_scripts/crossmod/kaleidoscope_einheitlich.js`. | User, 2026-10-20 |
| Rezepte in `alexsdelight/`, `farmersdelight/`, `kaleidoscope_cookery/`, `kaleidoscope_end/`, `kaleidoscope_grilling/`, `minecraft/`, `nethersdelight/`, `tconstruct/`, `tmted/` (jeweils `recipes/…`) und `ieplus/recipes/einheitlich/` | Umgestellte Rezepte unter der Original-ID; abgeschaltete Rezepte als Datei mit `"conditions": [{"type": "forge:false"}]`; neue Brett- und Umwandlungsrezepte. Ebenfalls von `tools/kaleidoscope_daten.py` erzeugt, Liste aller Dateien in `tools/kaleidoscope_daten.liste`. | wie oben |

## Was zusätzlich nötig ist, damit die Erz-Features wirken

- `config/blue_skies-common.toml`: `allowed_mods_for_feature_gen = ["ieplus"]` (liegt in `config-overrides/config/`). Blue Skies entfernt sonst alle platzierten Features fremder Namensräume aus seinen Biomen (🟢 im Code von `PurifyBiome` nachgelesen).
- `config/Mekanism/world.toml` und die IE-Serverconfig aus `config-overrides/` für die Overworld-Werte.
- Die Dateien müssen **vor dem ersten Erzeugen** der jeweiligen Chunks da sein; Datapack-Features haben kein Retrogen.

## Teil 1 (2026-10-20, ungetestet)

| Datei | Wirkung | Entscheidung |
|---|---|---|
| `ad_astra/tags/fluids/tier_1_rover_fuel.json` | Der Rover fährt nur mit Biodiesel. | F11 (2026-10-20) |
| `ieplus/loot_tables/chests/meister_truhe.json` | Truhe in der Altar-Dimension: Relikt (`kubejs:relikt`) und Tagebuch des Meisters (Item `kubejs:tagebuch_des_meisters`, Rechtsklick öffnet es im Logbuch; seit 2026-10-21). Kommt automatisch über `smithy_loot` (nächste Zeile); von Hand per `/setblock <x> <y> <z> minecraft:chest{LootTable:"ieplus:chests/meister_truhe"}` in `bloodmagic:dungeon`, im Teil des Endless Realm (über Pathway to the Endless Realm, F27), nicht im Mini-Dungeon. | F2e, O3, T5 (2026-10-20) |
| `bloodmagic/loot_tables/chests/mines/smithy_loot.json` | Kopie der Blood-Magic-Tabelle (JAR 3.3.8-50) mit einem dritten Pool, der `ieplus:chests/meister_truhe` einbindet. Die Tabelle hat nur eine Truhe in der ganzen Dimension: in der Station (`standard/mine_station_1`, Truhe bei 30 2 25), dem größten Raum der Minen. Jede Station liefert also Relikt und Tagebuch zusätzlich zur normalen Beute. Wirkt nur für Truhen, die noch nicht geöffnet wurden. | O40 (2026-10-20) |
| `swplanets/loot_tables/star_manual.json` | Leere Belohnung: Das Star Manual kommt mit der Rakete T3 nicht mehr an. | Ideenimport (2026-10-17) |
| `swgc/tags/worldgen/biome/spawns_jawas.json` | Leer: keine Jawas von Galaxy in a Cube mehr in Wüste und Badlands. | Galaxy in a Cube nur in den Star-Wars-Welten (2026-10-14) |
| `swgc/worldgen/structure/ewok_village.json` | Biom-Liste leer: keine Ewok-Dörfer mehr in der Overworld. | wie oben |
| `ad_astra/tags/fluids/tier_4_rocket_fuel.json` | T4 fliegt nur mit Kryo-Raketentreibstoff (`kubejs:kryo_treibstoff`). | F3 (2026-10-20) |
| `ad_astra/tags/fluids/efficient_fuel.json` | Sparsam (1 Eimer pro Start statt 3): Kryo-Treibstoff und D-T-Fusionsgemisch. Cryo Fuel fliegt raus. | F3 (2026-10-20) |
| `ad_astra_rocketed/tags/fluids/tier_5_rocket_fuel.json` | T5 fliegt mit flüssigem D-T-Fusionsgemisch. | F3 (2026-10-20) |
| `ad_astra_rocketed/tags/fluids/tier_6_rocket_fuel.json`, `tier_7_rocket_fuel.json` | Vorerst leer: T6 und T7 lassen sich nicht betanken, bis es die Antimaterie-Treibstoffe gibt (Teil 2 und 3). | F3 (2026-10-20) |
