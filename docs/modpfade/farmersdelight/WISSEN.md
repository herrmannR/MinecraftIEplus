# Farmer's Delight (+ Nether's Delight, Engineer's Delight) – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-17, Minecraft 1.20.1. Alles aus den JARs und der Config der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/Rj7tWAhmGLAmje66fHT9sX). Ausführliche Texte stehen in `data.js`. Gilt für die Mods ohne unsere KubeJS-Änderungen. Sparsam gebaut (Skill `modpfad-seite-s`).

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Farmer's Delight | 1.3.4 | `fd=FarmersDelight` | `farmersdelight` | Hauptmod |
| Nether's Delight | 4.0 | `nd=nethersdelight` | `nethersdelight` | Addon |
| Engineer's Delight | B.1.4 | `ed="Engineers Delight"` | `tmted` | Brücke zu IE |

## Wo die Quellen liegen

- **Kein Buch.** Advancement-Baum `data/farmersdelight/advancements/main/*.json` (21 Einträge, Wurzel `root`), Titel/Beschreibung unter `advancements.farmersdelight.<name>.title|description` in der Sprachdatei. Nether's Delight hat nur Rezept-Advancements, Engineer's Delight eines (`a_little_woozy`).
- **Rezepte**: `fd/data/farmersdelight/recipes` (333: 72 `cutting/`, 33 `salvaging/`, 28 `cooking/`, 29 `integration/` für Create, IE, Silent Gear), `nd/data/nethersdelight/recipes` (29) + `nd/data/farmersdelight/recipes` (Stuffed Hoglin) + `nd/data/minecraft/recipes` (Furnace, Netherite Machete), `ed/data/tmted/recipes` (47, IE-Maschinen) + `ed/data/immersiveengineering/recipes` (11 Sawmill-Rezepte, ersetzen IE-eigene).
- Billig gelesen: `RecipeDump` je Ordner in eine Datei; FD ohne `cutting|salvaging|integration` durch `recipe_filter.sh` mit Ausschluss `'_cabinet:|canvas_sign:|_crate:|_bag:|_bale:'` → 141 Zeilen; `cutting/` getrennt ohne Holz-Einträge (`_log|_wood|_stem|_hyphae|_door|…`).
- **Messer-Beute**: `data/*/loot_modifiers/*.json` (Typ `farmersdelight:add_item`, Tag `farmersdelight:tools/knives`, `nethersdelight:tools/machetes`, `nethersdelight:tools/hunting_tools`). Kurzliste mit `grep -o '"item":…|"chance":…|"type":…'`.
- **Weltgenerierung**: `data/farmersdelight/forge/biome_modifier/*.json` (`allowed_biomes`), `data/nethersdelight/forge/biome_modifier/propelplant_patch.json` (Crimson Forest). Klimatexte in `jei.farmersdelight.info.wild_*`.
- **Tags**: `farmersdelight:heat_sources` (Stove, Magma Block, Lava Cauldron, `#tray_heat_sources` = Lava, Campfires, Fire).
- **Config der Instanz**: `config/farmersdelight-common.toml` (`richSoilBoostChance 0.2`, `cuttingBoardFortuneBonus 0.1`, Truhenbeute und Dorfhandel an).

## Progression in Kürze

1. Messer (Flint → Netherite) und Wildpflanzen (7 Arten, Biome per Tag).
2. Anbau: Straw → Canvas/Rope; Organic Compost → Rich Soil; Reis im Wasser, Tomaten an Rope, Pilzkolonien auf reichem Boden.
3. Küche: Cutting Board, Wärme (Campfire/Stove/Skillet), Cooking Pot (5 Iron Ingot, 2 Brick, Wooden Shovel, Water Bucket).
4. Mahlzeiten (Effekte Nourishment, Comfort) und 6 Festessen; Ziel „Master Chef“.
5. Nether (ND): Machete, Hoglin Hide/Loin, Strider, Propelplant (Gunpowder), Soul Compost → Rich Soul Soil, Blackstone-Öfen, Stuffed Hoglin.

## Schlüsselzahlen

- Cooking Pot: 5 Iron Ingot; Stove: 3 Iron Ingot + 4 Bricks + Campfire; Skillet: 4 Iron Ingot + Brick.
- Engineer's Delight: Crusher Wheat → 2 Wheat Flour (1600 FE), Hay Bale → 18; Cloche auf Rich Soil meist 3 Ernte (FD-eigene Cloche-Rezepte auf Dirt: 2).
- FD-IE-Integration: Squeezer Cabbage Seeds 80 mB / Tomato Seeds 60 mB Plant Oil; Fermenter Tomato 80 mB Ethanol.

## Pack-Bezug

- Rezepte nutzen Forge-Tags (`#forge:ingots/iron`, `#forge:crops/*`, `#forge:milk`, `#forge:raw_*`) – Mekanism (12 Rezepte) und Alex's Delight (eigener Ordner `recipes/cooking`) docken an.
- Engineer's Delight überschreibt die IE-Sawmill-Rezepte für 11 Holzarten (Tree Bark statt nur Sägemehl) – bei KubeJS-Änderungen am Sawmill beachten.
- Siehe `CROSSMOD_AUFFAELLIGKEITEN.md` I7 und FD1–FD4.

## Offen

- Effekte und Dauer je Mahlzeit, Sättigung, Wachstumszeiten, Zerfallsgeschwindigkeit des Komposts, Herkunft von Hoglin Ear und Mimicarnation, Handelsangebote.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> farmersdelight/data.js farmersdelight nethersdelight tmted`.

| Name | ID |
|---|---|
| Flint Knife | `farmersdelight:flint_knife` |
| Iron Knife | `farmersdelight:iron_knife` |
| Golden Knife | `farmersdelight:golden_knife` |
| Diamond Knife | `farmersdelight:diamond_knife` |
| Netherite Knife | `farmersdelight:netherite_knife` |
| Wild Cabbage | `farmersdelight:wild_cabbages` |
| Sea Beet | `farmersdelight:wild_beetroots` |
| Wild Carrot | `farmersdelight:wild_carrots` |
| Wild Onion | `farmersdelight:wild_onions` |
| Wild Potato | `farmersdelight:wild_potatoes` |
| Tomato Shrub | `farmersdelight:wild_tomatoes` |
| Wild Rice | `farmersdelight:wild_rice` |
| Straw | `farmersdelight:straw` |
| Canvas | `farmersdelight:canvas` |
| Rope | `farmersdelight:rope` |
| Tree Bark | `farmersdelight:tree_bark` |
| Organic Compost | `farmersdelight:organic_compost` |
| Rich Soil | `farmersdelight:rich_soil` |
| Rice | `farmersdelight:rice` |
| Tomato | `farmersdelight:tomato` |
| Red Mushroom Colony | `farmersdelight:red_mushroom_colony` |
| Brown Mushroom Colony | `farmersdelight:brown_mushroom_colony` |
| Cutting Board | `farmersdelight:cutting_board` |
| Stove | `farmersdelight:stove` |
| Skillet | `farmersdelight:skillet` |
| Cooking Pot | `farmersdelight:cooking_pot` |
| Beef Stew | `farmersdelight:beef_stew` |
| Hamburger | `farmersdelight:hamburger` |
| Steak and Potatoes | `farmersdelight:steak_and_potatoes` |
| Dog Food | `farmersdelight:dog_food` |
| Horse Feed | `farmersdelight:horse_feed` |
| Roast Chicken | `farmersdelight:roast_chicken_block` |
| Honey Glazed Ham | `farmersdelight:honey_glazed_ham_block` |
| Shepherd's Pie | `farmersdelight:shepherds_pie_block` |
| Stuffed Pumpkin | `farmersdelight:stuffed_pumpkin_block` |
| Rice Roll Medley | `farmersdelight:rice_roll_medley_block` |
| Gleaming Salad | `farmersdelight:gleaming_salad_block` |
| Iron Machete | `nethersdelight:iron_machete` |
| Hoglin Hide | `nethersdelight:hoglin_hide` |
| Hoglin Loin | `nethersdelight:hoglin_loin` |
| Hoglin Trophy | `nethersdelight:hoglin_trophy` |
| Strider Slice | `nethersdelight:strider_slice` |
| Propelplant Cane | `nethersdelight:propelplant_cane` |
| Propelpearl | `nethersdelight:propelpearl` |
| Nether Skewer | `nethersdelight:nether_skewer` |
| Soul Compost | `nethersdelight:soul_compost` |
| Rich Soul Soil | `nethersdelight:rich_soul_soil` |
| Crimson Fungus Colony | `nethersdelight:crimson_fungus_colony` |
| Warped Fungus Colony | `nethersdelight:warped_fungus_colony` |
| Blackstone Stove | `nethersdelight:blackstone_stove` |
| Blackstone Furnace | `nethersdelight:blackstone_furnace` |
| Blackstone Blast Furnace | `nethersdelight:blackstone_blast_furnace` |
| Nether Brick Smoker | `nethersdelight:nether_brick_smoker` |
| Raw Stuffed Hoglin | `nethersdelight:raw_stuffed_hoglin` |
| Stuffed Hoglin | `nethersdelight:stuffed_hoglin` |
| Plate of Stuffed Hoglin Roast | `nethersdelight:plate_of_stuffed_hoglin_roast` |
| Basket | `farmersdelight:wooden_basket` |
| Oak Cabinet | `farmersdelight:oak_cabinet` |
| Full Tatami Mat | `farmersdelight:full_tatami_mat` |
| Rope Fence | `farmersdelight:rope_fence` |
| Safety Net | `farmersdelight:safety_net` |
| Wheat Flour | `tmted:wheat_flour` |
| Bottle of Wodka | `tmted:bottle_of_wodka` |
