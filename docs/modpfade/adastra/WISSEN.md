# Ad Astra – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-14, Minecraft 1.20.1. Alles aus den JARs und der Config der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/LDzmRVfRoZREd6nfYoCyQm). Ausführliche Texte stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen; die Pack-Planung zur Raumfahrt steht in `docs/15_RAUMFAHRT.md`.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Ad Astra | 1.15.21 | `aa=ad_astra-forge` | `ad_astra` | Hauptmod |
| Ad Astra: Giselle Addon | 6.27 | `giselle=Giselle` | `ad_astra_giselle_addon` | Addon (Automatisierung, Verzauberungen, Brücken zu Tinkers/Mekanism/AE2) |
| Ad Astra: More Structures | 1.0.2 | `ams=ad_astra_more` | `ad_astra_more_structures` | Addon (8 Bauwerke, Boss-Beute) |
| Ad Astra: Rocketed | 1.0.5 | `aar=ad_astra_rocketed` | `ad_astra_rocketed` | Addon (Raketen Tier 5–7) |
| Mekanism: Ad Astra Ores | 1.1.0 | `maao=mekanism-ad-astra` | `mekanismaaa` | Brücke |

## Wo die Quellen liegen

- **Buch „Astrodux“** (Patchouli): `assets/ad_astra/patchouli_books/astrodux/en_us/{categories,entries}`; Kapitel `the_first_launch`, `the_moon`, `surviving_mars`, `the_hot_planets` = Phasen der Seite.
- **Planeten** `data/ad_astra/planets/<planet>.json` und `<planet>_orbit.json` (Stufe, Schwerkraft, Temperatur, Sauerstoff, Solar Power). Erze in `data/ad_astra/worldgen/`.
- **Rezepte** `data/ad_astra/recipes/<typ>/`: `nasa_workbench` (Raketen), `compressing`, `alloying` (nur Stahl), `refining` (Oil → Fuel), `cryo_freezing`, `oxygen_loading`, `space_station`, `blasting`, `smelting`. Fremdrezepte für IE, Mekanism, Create, Thermal unter `data/{immersiveengineering,mekanism,create,thermal}/recipes/`. Rocketed: `aar/data/ad_astra_rocketed/recipes/` (3, Bedingung `cp_tweaks` nicht geladen). Giselle: `recipes/crafting/` und `recipes/compat/{tconstruct,mekanism,…}/`.
- **Tags** `data/ad_astra/tags/fluids/`: `fuel`, `efficient_fuel`, `oxygen`, `oil`, `hydrogen`, `zip_gun_propellants` (oxygen + hydrogen) und je Stufe `tier_1_rocket_fuel` bis `tier_4_rocket_fuel`, `tier_1_rover_fuel`, die alle nur `#ad_astra:fuel` enthalten. **Ansatzpunkt, um Treibstoff je Raketenstufe zu staffeln.** Items: `steel_ingots`, `steel_plates`, `iron_plates`, `heat_resistant_armor` (= Netherite Space Suit), `freeze_resistant_armor` (= Space Suit), `destroyed_in_space`.
- **Strukturen** `data/ad_astra/structures/` (56); More Structures `ams/data/ad_astra_more_structures/structures/*.nbt` (Mobs der Bosse stehen darin, nicht ausgelesen).
- **Zahlen** aus `config/ad_astra.jsonc` der Instanz; Giselle: `config/ad_astra_giselle_addon.ver2.jsonc`.

## Progression in Kürze

1. **The First Launch**: Astrodux → Coal Generator (20 Energie/t) → Compressor (Platten) → Etrionic Blast Furnace (Stahl = 1 Eisen + 1 Kohle) → NASA Workbench → Tier 1 Rocket (Nose Cone, 6 Steel Block, 4 Fin, 2 Steel Tank, Steel Engine), Launch Pad → Oil (Quellen an der Meeresoberfläche) + Fuel Refinery → Space Suit, Oxygen Loader (100 mB Wasser → 4 mB Oxygen) → Gas Tank, Etrionic Capacitor (3 Diamant). Giselle: Fuel Loader, Automation NASA Workbench, Rocket Sensor, Oxygen Can.
2. **The Moon** (Stufe 1; g 1,622, −173 °C, kein O₂): Desh Ore, Ice Shard Ore, Cheese Ore. Space Station (Erde/Mond: 64 Iron Plate, 32 Steel Ingot, 32 Desh Ingot, 32 Desh Plate). Solar Panel (Desh + Diamant). Oxygen Distributor (bis 6000 Blöcke), Water Pump, Gravity Normalizer, Rover, Kabel (Steel/Desh, Cable Duct hält dicht). Lunarians. More Structures: Dungeons + Bosse. Tier 2 Rocket (Desh).
3. **Surviving Mars** (Stufe 2; g 3,72, −65 °C): Ostrum, Diamant. Sliding Doors, Fluid Pipes, Energizer (2 000 000 Energie), Cryo Freezer (Cryo Fuel; 1 Eimer = 40 Ice Shards, reicht für einen Start), Oxygen Sensor, Netherite Space Suit (volle Netherite-Rüstung, Pflicht für Venus/Merkur). Giselle-Verzauberungen. Tier 3 Rocket (Ostrum).
4. **The Hot Planets** (Stufe 3; Venus 464 °C, saurer Regen; Merkur 167 °C): Calorite nur auf der Venus, Merkur hat im Hauptmod nur Eisen. Jet Suit (Calorite, fliegt mit Energie). Tier 4 Rocket → Glacio (Stufe 4, Proxima Centauri, −20 °C, mit Sauerstoff, kein eigenes Metall). Buch endet hier. Rocketed: Tier 5–7 (Ice Shard / Echo Shard / Permafrost Tiles), keine eigenen Ziele.

## Schlüsselzahlen

- Raketen: 6 Blöcke Stufenmetall = 54 Barren + Platten; Tanks/Triebwerke enthalten die Teile der Vorstufe. Rakete verlässt die Welt auf Höhe 600 (Config).
- Treibstoff laut Buch: Mond hin und zurück 6 Eimer Öl (3 Fuel im Tank, 3 im Gepäck) oder 2 Eimer Cryo Fuel.
- Cryo Fuel: Ice Shard 25 mB, Blue Ice 10, Packed Ice 2, Ice 1 mB.
- Solar Power (Boden / Orbit): Erde 16/32, Mond 24/32, Mars 12/24, Venus 8/48, Merkur 64/72, Glacio 14/36.
- Water Pump 50 mB/t für 20 Energie. Energizer 2 000 000.
- Space Station Mars: 32 Steel Ingot, 64 Steel Plate, 32 Ostrum Ingot, 32 Ostrum Plate; Venus/Merkur: 64 Steel Ingot, 64 Steel Plate, 32 Calorite Ingot, 32 Calorite Plate; Glacio: 32 Steel Plate, 32 Desh Ingot, 32 Ostrum Plate, 32 Calorite Plate.

## Pack-Bezug

- Treibstoff-Tag `ad_astra:fuel` = Fuel, Cryo Fuel, `forge:fuel`, `forge:diesel`, `forge:biodiesel` → IE-Biodiesel und Petroleum-Diesel fliegen jede Rakete ohne Fuel Refinery. `ad_astra:oil` nimmt `forge:crude_oil` (Petroleum-Rohöl).
- `ad_astra:oxygen` nimmt `forge:oxygen` (Mekanism-Oxygen, 1:1 statt 4:100 aus Wasser).
- Stahl/Platten über Tags (`forge:ingots/steel`, `forge:plates/steel`, `forge:plates/iron`) → IE/Mekanism ersetzen Etrionic Blast Furnace und Compressor (Ü1).
- Mitgebrachte Fremdrezepte: IE (Desh/Ostrum/Calorite-Platten per Hammer und Metal Press; Ice Shard Ore, Venus Sandstone im Crusher), Mekanism (Ice Shard Ore in der Enrichment Chamber, Planetenhölzer in der Sawmill).
- Giselle: die vier Schutzwirkungen als Verzauberung, Tinkers-Modifier (Upgrade-Slot) und MekaSuit-Modul; Sky Stone (5 Moon + 4 Mars Stone) → AE2 Sky Dust.
- Mekanism-Erze auf den Planeten: siehe `mekanism/WISSEN.md`.

## Offen

- Handelsangebote der Lunarians, Mobs der More-Structures-Bosse (außer Super Lunarian, 60 HP), Spawnorte der Mobs, Herkunft von Glacian Fur.
- Treibstoffverbrauch je Raketenstufe, Sauerstoffregeln der Giselle-Verzauberungen, Funktionsweise der Automation NASA Workbench.
- In der Sprachdatei ohne Rezept: Etrium (Ingot, Plate, Rod, Block), Etrionic Core, Photovoltaic Vesnium Cell, Flüssigkeit Hydrogen.
- Raketen, Rover, Lander sind Entities ohne lesbares Bild.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> adastra/data.js ad_astra ad_astra_giselle_addon ad_astra_rocketed` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Coal Generator | `ad_astra:coal_generator` |
| Astrodux | `ad_astra:astrodux` |
| Compressor | `ad_astra:compressor` |
| Iron Plate | `ad_astra:iron_plate` |
| Iron Rod | `ad_astra:iron_rod` |
| Wrench | `ad_astra:wrench` |
| Etrionic Blast Furnace | `ad_astra:etrionic_blast_furnace` |
| Steel Ingot | `ad_astra:steel_ingot` |
| Steel Plate | `ad_astra:steel_plate` |
| Steel Rod | `ad_astra:steel_rod` |
| NASA Workbench | `ad_astra:nasa_workbench` |
| Launch Pad | `ad_astra:launch_pad` |
| Nasa Workbench | `ad_astra:nasa_workbench` |
| Rocket Nose Cone | `ad_astra:rocket_nose_cone` |
| Rocket Fin | `ad_astra:rocket_fin` |
| Gas Tank | `ad_astra:gas_tank` |
| Steel Tank | `ad_astra:steel_tank` |
| Fan | `ad_astra:fan` |
| Engine Frame | `ad_astra:engine_frame` |
| Steel Engine | `ad_astra:steel_engine` |
| Tier 1 Rocket | `ad_astra:tier_1_rocket` |
| Fuel Refinery | `ad_astra:fuel_refinery` |
| Oil | `ad_astra:oil` |
| Fuel | `ad_astra:fuel` |
| Oxygen Loader | `ad_astra:oxygen_loader` |
| Space Helmet | `ad_astra:space_helmet` |
| Space Suit | `ad_astra:space_suit` |
| Space Pants | `ad_astra:space_pants` |
| Space Boots | `ad_astra:space_boots` |
| Oxygen Gear | `ad_astra:oxygen_gear` |
| Large Gas Tank | `ad_astra:large_gas_tank` |
| Etrionic Capacitor | `ad_astra:etrionic_capacitor` |
| Fuel Loader | `ad_astra_giselle_addon:fuel_loader` |
| Automation NASA Workbench | `ad_astra_giselle_addon:automation_nasa_workbench` |
| Rocket Sensor | `ad_astra_giselle_addon:rocket_sensor` |
| Oxygen Can | `ad_astra_giselle_addon:oxygen_can` |
| Netherite Oxygen Can | `ad_astra_giselle_addon:netherite_oxygen_can` |
| Moon Desh Ore | `ad_astra:moon_desh_ore` |
| Desh Ingot | `ad_astra:desh_ingot` |
| Desh Plate | `ad_astra:desh_plate` |
| Moon Ice Shard Ore | `ad_astra:moon_ice_shard_ore` |
| Moon Cheese Ore | `ad_astra:moon_cheese_ore` |
| Moon Iron Ore | `ad_astra:moon_iron_ore` |
| Zip Gun | `ad_astra:zip_gun` |
| Solar Panel | `ad_astra:solar_panel` |
| Photovoltaic Etrium Cell | `ad_astra:photovoltaic_etrium_cell` |
| Oxygen Distributor | `ad_astra:oxygen_distributor` |
| Water Pump | `ad_astra:water_pump` |
| Vent | `ad_astra:vent` |
| Gravity Normalizer | `ad_astra:gravity_normalizer` |
| TI-69 | `ad_astra:ti_69` |
| Wheel | `ad_astra:wheel` |
| Desh Engine | `ad_astra:desh_engine` |
| Radio | `ad_astra:radio` |
| Tier 1 Rover | `ad_astra:tier_1_rover` |
| Steel Cable | `ad_astra:steel_cable` |
| Desh Cable | `ad_astra:desh_cable` |
| Cable Duct | `ad_astra:cable_duct` |
| Desh Tank | `ad_astra:desh_tank` |
| Tier 2 Rocket | `ad_astra:tier_2_rocket` |
| Mars Ostrum Ore | `ad_astra:mars_ostrum_ore` |
| Ostrum Ingot | `ad_astra:ostrum_ingot` |
| Mars Ice Shard Ore | `ad_astra:mars_ice_shard_ore` |
| Mars Diamond Ore | `ad_astra:mars_diamond_ore` |
| Mars Iron Ore | `ad_astra:mars_iron_ore` |
| Airlock | `ad_astra:airlock` |
| Iron Sliding Door | `ad_astra:iron_sliding_door` |
| Desh Sliding Door | `ad_astra:desh_sliding_door` |
| Desh Fluid Pipe | `ad_astra:desh_fluid_pipe` |
| Ostrum Fluid Pipe | `ad_astra:ostrum_fluid_pipe` |
| Fluid Pipe Duct | `ad_astra:fluid_pipe_duct` |
| Energizer | `ad_astra:energizer` |
| Cryo Freezer | `ad_astra:cryo_freezer` |
| Ice Shard | `ad_astra:ice_shard` |
| Cryo Fuel | `ad_astra:cryo_fuel` |
| Oxygen Sensor | `ad_astra:oxygen_sensor` |
| Netherite Space Helmet | `ad_astra:netherite_space_helmet` |
| Netherite Space Suit | `ad_astra:netherite_space_suit` |
| Netherite Space Pants | `ad_astra:netherite_space_pants` |
| Netherite Space Boots | `ad_astra:netherite_space_boots` |
| Ostrum Tank | `ad_astra:ostrum_tank` |
| Ostrum Engine | `ad_astra:ostrum_engine` |
| Tier 3 Rocket | `ad_astra:tier_3_rocket` |
| Venus Calorite Ore | `ad_astra:venus_calorite_ore` |
| Calorite Ingot | `ad_astra:calorite_ingot` |
| Venus Coal Ore | `ad_astra:venus_coal_ore` |
| Venus Diamond Ore | `ad_astra:venus_diamond_ore` |
| Venus Gold Ore | `ad_astra:venus_gold_ore` |
| Mercury Iron Ore | `ad_astra:mercury_iron_ore` |
| Jet Suit Helmet | `ad_astra:jet_suit_helmet` |
| Jet Suit | `ad_astra:jet_suit` |
| Jet Suit Pants | `ad_astra:jet_suit_pants` |
| Jet Suit Boots | `ad_astra:jet_suit_boots` |
| Calorite Tank | `ad_astra:calorite_tank` |
| Calorite Engine | `ad_astra:calorite_engine` |
| Tier 4 Rocket | `ad_astra:tier_4_rocket` |
| Glacio Stone | `ad_astra:glacio_stone` |
| Glacian Fur | `ad_astra:glacian_fur` |
| Tier 5 Rocket | `ad_astra_rocketed:tier_5_rocket` |
| Tier 6 Rocket | `ad_astra_rocketed:tier_6_rocket` |
| Tier 7 Rocket | `ad_astra_rocketed:tier_7_rocket` |
| Space Painting | `ad_astra:space_painting` |
| Cheese | `ad_astra:cheese` |
| Sky Stone | `ad_astra:sky_stone` |

35 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
