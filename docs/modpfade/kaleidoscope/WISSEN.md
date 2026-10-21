# Kaleidoscope (Cookery, Tavern, Grilling, End, ImmersiveEating) – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-21, Minecraft 1.20.1. Alles aus den JARs der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/ARtUyrGSeAuncutGR6r6oV). Gilt für die Mods ohne unsere KubeJS-Änderungen; die Zusammenführung mit Farmer's Delight steht in `kubejs/server_scripts/crossmod/kaleidoscope_einheitlich.js` und `docs/12_CHANGELOG.md` (2026-10-20). Sparsam gebaut (Skill `modpfad-seite-s`).

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Kaleidoscope Cookery | 1.6.0 | `kc=kaleidoscopecookery` | `kaleidoscope_cookery` | Hauptmod |
| Kaleidoscope Tavern | 1.2.0 | `kt=kaleidoscopetavern` | `kaleidoscope_tavern` | Addon |
| Kaleidoscope Grilling | 1.1.1 | `kg=kaleidoscope_grilling` | `kaleidoscope_grilling` | Addon |
| Kaleidoscope End | 1.0.14 | `ke=kaleidoscope_end` | `kaleidoscope_end` | Addon |
| Kaleidoscope: ImmersiveEating | 1.5.1 | `ki=kaleidoscope_immersiveEating` | `food` | nur Animationen (`assets/food/geo`, `animations`), keine Daten |

## Wo die Quellen liegen

- **Kein Buch.** Anleitung steckt in den Ponder-Texten (`kaleidoscope_cookery.ponder.*`, `kaleidoscope_tavern.ponder.*` in `lang/en_us.json`) und Tooltips (`tooltip.*`, `tip.*`, `hud.*`, `message.*`). **Ponder ist im Pack nicht installiert** (`modids.txt`), die Szenen erscheinen im Spiel nicht – für Questtexte heißt das: wie „ohne Buch“ führen.
- **Advancements**: Cookery `data/kaleidoscope_cookery/advancements/*.json` (38, Wurzel `root`), Grilling `data/kaleidoscope_grilling/advancements/` (21, Wurzel `human_fireworks`, alle Trigger `impossible` = im Code vergeben), End `data/kaleidoscope_end/advancements/` (10). Tavern hat keine. Titel unter `advancements.<ns>.<name>.title` (Grilling: `advancement.` ohne s).
- **Grilling doppelt**: Ordner im 1.21-Format (`recipe/`, `advancement/`, `loot_table/`, `neoforge/`, Tags `c:`) neben den 1.20.1-Ordnern (`recipes/`, `advancements/`, `loot_tables/`, `forge/`). Nur die 1.20.1-Ordner lesen.
- **Rezepte**: `kc/data/kaleidoscope_cookery/recipes` (580: 199 `pot/`, 86 `millstone/`, 78 `stockpot/`, 29 `bamboo_tray/`, 28 `flex_stockpot/`, 27 `flex_pot/`, 17 `chopping_board/`, 8 `teapot/`, 5 `steamer/`), `kc/data/minecraft/recipes` (32: Mehl→Teig, Öfen, Netherite-Messer), `kt/data/kaleidoscope_tavern/recipes` (156: 25 `barrel/`, 13 `shaker/`, 7 `pressing_tub/`, viel Deko), `kg/data/kaleidoscope_grilling/recipes` (61, davon Create-Rezepte mit Bedingung `modid=create` – Create fehlt), `kg/data/kaleidoscope_cookery/recipes/chopping_board/raw_cow_offal.json` (überschreibt das Cookery-Rezept: Raw Beef → 2 Beef Chunks), `ke/data/kaleidoscope_end/recipes` (46).
- **Feste Spieße**: `kg/data/kaleidoscope_grilling/grilling/skewers.json` (20 rohe Spieße mit Zutatenfolge, 19 gegrillte mit `effect`/`effect_seconds`, `seasoning_effects` für 6 Gewürzzusätze). Eine Zeile je Spieß: `tr -d ' \n\r' < skewers.json | sed 's/},{/}\n{/g'`.
- **Getränke-Effekte**: `kt/data/kaleidoscope_tavern/datamap/drink_effect/*.json` (37 Dateien).
- **Beute über Loot-Modifier** (Typ `kaleidoscope_cookery:addition`, Feld `loot_table_add`): `kc/data/kaleidoscope_cookery/loot_modifiers/` (Oil von 6 Schweine-Mobs mit Messer-Tag; `straw_hat_seed_drop` auf `blocks/grass`), `ke/data/kaleidoscope_end/loot_modifiers/` (Drache, Enderman, Endermite, Shulker, Chorus Plant). Die Zieltabellen liegen unter `data/<ns>/loot_tables/<name>.json`. Grilling-Extrabeute (Cow Offal, Chicken Wing, Squid Tentacle) nur als Tooltip `tooltip.kaleidoscope_grilling.acquisition.*` gelesen.
- **Truhen**: `kc/data/kaleidoscope_cookery/loot_tables/chest/village_chest.json`, `village_hide_chest.json`; Archäologie `ke/data/kaleidoscope_end/loot_tables/archaeology/` (End Stone, Dragon Egg; Purpur fehlt).
- **Worldgen**: Pfefferbaum `kg/.../forge/biome_modifier/add_pepper_tree.json` (`#minecraft:is_forest`), End `ke/.../forge/biome_modifier/*.json` (`#minecraft:is_end`: Dream Berry, Ender Mint, Suspicious End Stone in drei Größen). Wildreben und Teestrauch haben keine Datei (Code); Dorfhäuser `kc/data/kaleidoscope_cookery/structures/village/houses/*_kitchen.nbt` (5).
- **Tags**: `kaleidoscope_cookery:heat_source_blocks_without_lit` (Fire, Soul Fire, Lava, Magma, `#farmersdelight:heat_sources`), `farmersdelight:heat_sources` += Stove, `rice_plantable` (FD Rich Soil Farmland), `pig_oil_source`, `rice_growth_booster`, `millstone_bind_blacklist` (player); Tavern `can_grow_grape|ice_grape|gold_grape`, `cocktail_ingredient_<farbe>`; Grilling `press_stones`.
- **Billig gelesen**: Advancement-Index mit einem kleinen Python-Skript (`py -I`, eine Zeile `name < parent | Titel | Beschreibung | Icon | Trigger`); `RecipeDump` je Ordner, dann `grep -v` auf Maschinenordner und Mengenvarianten (`_count_[0-9]`, `pot/…_[0-9]`, `rice_[0-9]`, Farben, Möbel); Ponder/Tooltips per `grep -E '"(…ponder|tooltip\.|tip\.|jei\.)'` ohne `.maxim`-Zeilen.
- **Achtung Arbeitsordner**: Während der Sitzung waren alle PNGs im Scratchpad-Arbeitsordner plötzlich weg (übrige Dateien da); vor `mkicons.sh` neu entpacken.

## Progression in Kürze

1. Straw Hat (4 Wheat + String) → Gras gibt 12,5 % je Tomato/Chili/Lettuce/Wild Rice/Tea Seed (Grilling: Onion, Canola, Sweet Potato); Reisfeld = Ackerboden unter Wasser.
2. Kitchen Knife (3 Iron + Stick) → Oil von Schweinen/Piglins/Hoglins; Chopping Board (6 Holz-Druckplatten) mit Messer.
3. Stove (8 Cobblestone + Campfire, Flint and Steel) → Wok (7 Iron; Öl, Zutaten, Kitchen Shovel rühren), Stockpot (5 Iron + 2 Brick; Suppenbasis, Deckel), Steamer (Bambus, bis 8 Lagen), Teapot (6 Copper + Bucket), Millstone (Grindstone + 3 Smooth Stone; Tier anspannen).
4. Tavern: Grapevine → Trellis → Sorte nach Boden darunter → Pressing Tub (springen, 125 mB je Frucht) → Barrel (9 Barrel; länger = besser) → Shaker (3 Getränke nach Farbe).
5. Grilling: Grill (5 Iron + 2 Brick + Kohle) → Spieße (Stick in Zweithand); Canola → Powder → Oil Cake → Wooden Oil Press (Amboss) + Big Vat → Öle; Gewürzflasche (8 Zutaten, schütteln).
6. End: Ender Mint, Dream Berry, Messer-Beute von End-Mobs, Abpinseln (Void Conch, Dragon Dust) → Dragon Egg Shell, Smithing Template → Dragon Tooth Knife.

## Schlüsselzahlen

- Millstone: Iron/Gold Ore → 3 Raw, Copper Ore → 5 Raw Copper, Diamond/Emerald Ore → 2, Redstone/Lapis Ore → 7, Nether Gold Ore → 5 Nugget, Quartz Ore → 3, Wheat → 1 Flour, Seeds → 1 Oil, Rice Panicle → 3 Rice Seed, Bone → 5 Bone Meal, Flint → Gunpowder.
- Wok: fest meist 3 Rührschläge, 200 Ticks; Stockpot 300 Ticks, Reis 100 Ticks je Stück; Steamer 1200 Ticks; Teapot 240 s, ≥ 1000 mB; Bamboo Tray trocknen 1800, nässen 900 Ticks; Barrel `unit_time` 2400.
- Suppenbasen: 71 Wasser, 17 Lava, 9 Milch, je 2 Cod/Salmon/Tropical-/Pufferfish-Bucket.

## Pack-Bezug

- Zusammenführung mit Farmer's Delight per KubeJS (Gewinner/Verlierer-Tabelle `ERSETZEN`); Rezepte und Loot als Datapack-Dateien von `tools/kaleidoscope_daten.py`. Auf der Seite stehen die Original-Items (z. B. Chopping Board, Raw Pork Belly), im Pack gelten teils die FD-Gewinner.
- Mühlstein = Erzvervielfachung ohne Strom (CROSSMOD KS1).
- Siehe `CROSSMOD_AUFFAELLIGKEITEN.md` KS1–KS4.

## Offen

- Effekte und Dauer je Gericht/Getränk (außer Spießen), Sättigung, Wachstumszeiten, Handel des Chef, die drei Pflichtgewürze, Herkunft Dragon Egg Powder, Beute des Suspicious Purpur Block, Wildreben-Entstehung (Code).

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> kaleidoscope/data.js kaleidoscope_cookery kaleidoscope_tavern kaleidoscope_grilling kaleidoscope_end`.

| Name | ID |
|---|---|
| Straw Hat | `kaleidoscope_cookery:straw_hat` |
| Flowery Straw Hat | `kaleidoscope_cookery:straw_hat_flower` |
| Tomato Seed | `kaleidoscope_cookery:tomato_seed` |
| Chili Seed | `kaleidoscope_cookery:chili_seed` |
| Lettuce Seed | `kaleidoscope_cookery:lettuce_seed` |
| Wild Rice Seed | `kaleidoscope_cookery:wild_rice` |
| Tea Seed | `kaleidoscope_cookery:tea_seed` |
| Tomato | `kaleidoscope_cookery:tomato_crop`, `kaleidoscope_cookery:tomato` |
| Red Chili | `kaleidoscope_cookery:red_chili` |
| Green Chili | `kaleidoscope_cookery:green_chili` |
| Lettuce | `kaleidoscope_cookery:lettuce_crop`, `kaleidoscope_cookery:lettuce` |
| Rice Panicle | `kaleidoscope_cookery:rice_panicle` |
| Rice Seed | `kaleidoscope_cookery:rice` |
| Fresh Tea Leaves | `kaleidoscope_cookery:fresh_tea_leaves` |
| Caterpillar | `kaleidoscope_cookery:caterpillar` |
| Iron Kitchen Knife | `kaleidoscope_cookery:iron_kitchen_knife` |
| Gold Kitchen Knife | `kaleidoscope_cookery:gold_kitchen_knife` |
| Diamond Kitchen Knife | `kaleidoscope_cookery:diamond_kitchen_knife` |
| Netherite Kitchen Knife | `kaleidoscope_cookery:netherite_kitchen_knife` |
| Oil | `kaleidoscope_cookery:oil` |
| Oil Block | `kaleidoscope_cookery:oil_block` |
| Sickle | `kaleidoscope_cookery:sickle` |
| Farmer's Overalls | `kaleidoscope_cookery:farmer_chest_plate` |
| Farmer's Work Pants | `kaleidoscope_cookery:farmer_leggings` |
| Farmer's Boots | `kaleidoscope_cookery:farmer_boots` |
| Scarecrow | `kaleidoscope_cookery:scarecrow` |
| Stove | `kaleidoscope_cookery:stove` |
| Chopping Board | `kaleidoscope_cookery:chopping_board` |
| Raw Lamb Chops | `kaleidoscope_cookery:raw_lamb_chops` |
| Raw Pork Belly | `kaleidoscope_cookery:raw_pork_belly` |
| Raw Meat Cuts | `kaleidoscope_cookery:raw_cut_small_meats` |
| Raw Cow Offal | `kaleidoscope_cookery:raw_cow_offal` |
| Sashimi | `kaleidoscope_cookery:sashimi` |
| Raw Noodles | `kaleidoscope_cookery:raw_noodles` |
| Wok | `kaleidoscope_cookery:pot` |
| Kitchen Shovel | `kaleidoscope_cookery:kitchen_shovel` |
| Grease Crock | `kaleidoscope_cookery:enamel_basin` |
| Oil Can | `kaleidoscope_cookery:oil_pot` |
| Recipe | `kaleidoscope_cookery:recipe_block` |
| Scramble Egg with Tomatoes | `kaleidoscope_cookery:scramble_egg_with_tomatoes` |
| Egg Fried Rice | `kaleidoscope_cookery:egg_fried_rice` |
| Braised Beef | `kaleidoscope_cookery:braised_beef` |
| Sweet and Sour Pork | `kaleidoscope_cookery:sweet_and_sour_pork` |
| Stir-fried Pork with Peppers | `kaleidoscope_cookery:stir_fried_pork_with_peppers` |
| Fish Flavored Shredded Pork | `kaleidoscope_cookery:fish_flavored_shredded_pork` |
| Dongpo Pork | `kaleidoscope_cookery:dongpo_pork` |
| Crystal Lamb Chop | `kaleidoscope_cookery:crystal_lamb_chop` |
| Blaze Lamb Chop | `kaleidoscope_cookery:blaze_lamb_chop` |
| Frost Lamb Chop | `kaleidoscope_cookery:frost_lamb_chop` |
| Sweet and Sour Ender Pearls | `kaleidoscope_cookery:sweet_and_sour_ender_pearls` |
| Donkey Burger | `kaleidoscope_cookery:donkey_burger` |
| Stockpot | `kaleidoscope_cookery:stockpot` |
| Stockpot Lid | `kaleidoscope_cookery:stockpot_lid` |
| Cooked Rice | `kaleidoscope_cookery:cooked_rice` |
| Borscht | `kaleidoscope_cookery:borscht` |
| Beef Noodle | `kaleidoscope_cookery:beef_noodle` |
| Pork Bone Soup | `kaleidoscope_cookery:pork_bone_soup` |
| Chicken and Mushroom Stew | `kaleidoscope_cookery:chicken_and_mushroom_stew` |
| Mutton and Radish Soup | `kaleidoscope_cookery:lamb_and_radish_soup` |
| Laba Congee | `kaleidoscope_cookery:laba_congee` |
| Buddha Jumps Over the Wall | `kaleidoscope_cookery:buddha_jumps_over_the_wall` |
| Millstone | `kaleidoscope_cookery:millstone` |
| Flour | `kaleidoscope_cookery:flour` |
| Raw Dough | `kaleidoscope_cookery:raw_dough` |
| Steamer | `kaleidoscope_cookery:steamer` |
| Baozi | `kaleidoscope_cookery:baozi` |
| Mantou | `kaleidoscope_cookery:mantou` |
| Qingtuan | `kaleidoscope_cookery:qingtuan` |
| Bamboo Tube Rice | `kaleidoscope_cookery:bamboo_tube_rice` |
| Teapot | `kaleidoscope_cookery:teapot` |
| Dried Tea Leaves | `kaleidoscope_cookery:dried_tea_leaves` |
| Tieguanyin Tea Bag | `kaleidoscope_cookery:tieguanyin_tea_bag` |
| Tieguanyin | `kaleidoscope_cookery:tieguanyin` |
| Empty Teacup | `kaleidoscope_cookery:empty_cup` |
| Bamboo Tray | `kaleidoscope_cookery:bamboo_tray` |
| Shawarma Spit | `kaleidoscope_cookery:shawarma_spit` |
| Plate of Baozi | `kaleidoscope_cookery:baozi_plate` |
| Golden Salad | `kaleidoscope_cookery:golden_salad` |
| Transmutation Lunch Bag | `kaleidoscope_cookery:transmutation_lunch_bag` |
| Dark Cuisine | `kaleidoscope_cookery:dark_cuisine` |
| Grapevine | `kaleidoscope_tavern:grapevine` |
| Trellis | `kaleidoscope_tavern:trellis` |
| Grape | `kaleidoscope_tavern:grape_crop`, `kaleidoscope_tavern:grape` |
| Ice Grape | `kaleidoscope_tavern:ice_grape_crop`, `kaleidoscope_tavern:ice_grape` |
| Gold Grape | `kaleidoscope_tavern:gold_grape_crop`, `kaleidoscope_tavern:gold_grape` |
| Green Grape | `kaleidoscope_tavern:green_grape` |
| Pressing Tub | `kaleidoscope_tavern:pressing_tub` |
| Grape Bucket | `kaleidoscope_tavern:grape_bucket` |
| Barrel | `kaleidoscope_tavern:barrel` |
| Tap | `kaleidoscope_tavern:tap` |
| Empty Bottle | `kaleidoscope_tavern:empty_bottle` |
| Wine | `kaleidoscope_tavern:wine` |
| Vodka | `kaleidoscope_tavern:vodka` |
| Molotov Cocktail | `kaleidoscope_tavern:molotov` |
| Shaker | `kaleidoscope_tavern:shaker` |
| Empty Glassware | `kaleidoscope_tavern:empty_glassware` |
| Mojito | `kaleidoscope_tavern:mojito` |
| Bloody Mary | `kaleidoscope_tavern:bloody_mary` |
| Onion | `kaleidoscope_grilling:onion` |
| Canola Seeds | `kaleidoscope_grilling:canola_seeds` |
| Sweet Potato | `kaleidoscope_grilling:sweet_potato` |
| Pepper Sapling | `kaleidoscope_grilling:pepper_sapling` |
| Sichuan Pepper | `kaleidoscope_grilling:sichuan_pepper` |
| Houttuynia | `kaleidoscope_grilling:houttuynia` |
| Grill | `kaleidoscope_grilling:grill` |
| Raw Beef Skewer | `kaleidoscope_grilling:raw_beef_skewer` |
| Skewer Recipe Book | `kaleidoscope_grilling:skewer_recipe_book` |
| Advanced Kitchen Rack | `kaleidoscope_grilling:advanced_rack` |
| Canola Powder | `kaleidoscope_grilling:canola_powder` |
| Oil Cake | `kaleidoscope_grilling:oil_cake` |
| Wooden Oil Press | `kaleidoscope_grilling:oil_press` |
| Big Vat | `kaleidoscope_grilling:big_vat` |
| Canola Oil Bucket | `kaleidoscope_grilling:canola_oil_bucket` |
| Chili Oil Bucket | `kaleidoscope_grilling:secret_chili_oil_bucket` |
| Magma Chili Oil Bucket | `kaleidoscope_grilling:premium_chili_oil_bucket` |
| Canola Oil Brush | `kaleidoscope_grilling:canola_oil_brush` |
| Green Chili Powder | `kaleidoscope_grilling:green_chili_powder` |
| Red Chili Powder | `kaleidoscope_grilling:red_chili_powder` |
| Onion Powder | `kaleidoscope_grilling:onion_powder` |
| Totem Powder | `kaleidoscope_grilling:totem_powder` |
| Dragon Egg Powder | `kaleidoscope_grilling:dragon_egg_powder` |
| Empty Seasoning Bottle | `kaleidoscope_grilling:empty_seasoning_bottle` |
| Ender Mint | `kaleidoscope_end:ender_mint` |
| Dream Berry | `kaleidoscope_end:dream_berry` |
| End Caterpillar | `kaleidoscope_end:end_caterpillar` |
| Chorus Seed | `kaleidoscope_end:chorus_seed` |
| Optic Nerve | `kaleidoscope_end:optic_nerve` |
| Raw Endermite Meat | `kaleidoscope_end:raw_endermite_meat` |
| Shulker Meat | `kaleidoscope_end:shulker_shell_meat` |
| Raw Ender Dragon Meat | `kaleidoscope_end:raw_ender_dragon_meat` |
| Dragon Tooth | `kaleidoscope_end:dragon_tooth` |
| Suspicious End Stone | `kaleidoscope_end:suspicious_end_stone` |
| Suspicious Purpur Block | `kaleidoscope_end:suspicious_purpur_block` |
| Suspicious Dragon Egg | `kaleidoscope_end:suspicious_dragon_egg` |
| Void Conch | `kaleidoscope_end:void_conch` |
| Dragon Dust | `kaleidoscope_end:dragon_dust` |
| Dragon Egg Liquid | `kaleidoscope_end:dragon_egg_liquid` |
| Dragon Egg Shell | `kaleidoscope_end:dragon_egg_shell` |
| Smithing Template | `kaleidoscope_end:ender_dragon_smithing_template` |
| Dragon Tooth Knife | `kaleidoscope_end:dragon_tooth_knife` |
| End Stove | `kaleidoscope_end:end_stove` |
| Dark Dragon Steak | `kaleidoscope_end:dark_dragon_steak` |
| Dragon Egg Stew | `kaleidoscope_end:dark_dragon_egg_stew` |
| Stuffed Shulker | `kaleidoscope_end:stuffed_shulker` |
| Void Conch Noodle Soup | `kaleidoscope_end:void_conch_noodle_soup` |
| Ender Mint Tea | `kaleidoscope_end:ender_mint_tea` |
| Oak Chair | `kaleidoscope_cookery:chair_oak` |
| Long Bench | `kaleidoscope_cookery:long_bench` |
| Eight Immortals Table | `kaleidoscope_cookery:eight_immortals_table` |
| Fruit Basket | `kaleidoscope_cookery:fruit_basket` |
| Kitchenware Racks | `kaleidoscope_cookery:kitchenware_racks` |
| Trash Can | `kaleidoscope_cookery:trash_can` |
| Red Lantern | `kaleidoscope_cookery:red_lantern` |
| Tea Banner | `kaleidoscope_cookery:tea_banner` |
| Chili Ristra | `kaleidoscope_cookery:chili_ristra` |
| Strung Mushrooms | `kaleidoscope_cookery:strung_mushrooms` |
| White Sofa | `kaleidoscope_tavern:white_sofa` |
| Bar Counter | `kaleidoscope_tavern:bar_counter` |
| Bar Cabinet | `kaleidoscope_tavern:bar_cabinet` |
| Tilted Rack | `kaleidoscope_tavern:tilted_rack` |
| Chalkboard | `kaleidoscope_tavern:chalkboard` |
| Sandwich Board | `kaleidoscope_tavern:sandwich_board` |
| String Lights (Colorless) | `kaleidoscope_tavern:string_lights_colorless` |
| Painting | `kaleidoscope_tavern:painting` |
| Sakura Incense | `kaleidoscope_tavern:sakura_incense` |
| Bell Pendant Lamp | `kaleidoscope_tavern:bell_pendant_lamp` |
| Stepladder | `kaleidoscope_tavern:stepladder` |

2 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
