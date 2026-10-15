# Blue Skies – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-15, Minecraft 1.20.1. Alles aus dem JAR und der Config der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/GAjru1A7JmbqwXNhfBumJt). Ausführliche Texte stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen. Sparsam gebaut (Skill `modpfad-seite-s`).

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Blue Skies | 1.3.31 | `bs=blue_skies` | `blue_skies` | Hauptmod |
| Structure Gel API | 2.16.2 | `sg=structure_gel` | `structure_gel` | Abhängigkeit (Strukturtyp `extended_jigsaw`, `grid_placement`) |

## Wo die Quellen liegen

- **Journal** (das Buch): `data/blue_skies/blue_skies/journal/` – `sections/` (general, everbright, everdawn), `requirements/` (enter_one = Advancement root, enter_everbright/everdawn, defeat_summoner/crusher = `everbright_progression` 1/2, defeat_alchemist/arachnarch = `everdawn_progression` 1/2), `entries/*.json` (section, requirement, icon, lores). **Texte nicht in `lang/en_us.json`**, sondern in `assets/blue_skies/blue_skies/journal_lang/en_us.json`, Schlüssel `blue_skies.<section>.<entry>.lore` (Bosse mit `_pre`/`_post`).
- **Journal-Bilder:** `textures/gui/journal/icons/<mob>.png` (Bosse, Tiere, arcs, stick_variations) – als Bildverweis `blue_skies:gui/journal/icons/<name>` nutzbar. `gui/pages/` hat nur 6 Bilder.
- **Rezepte**: `data/blue_skies/recipes/` flach, 695 Dateien. Werkzeuge (`<material>_<tool>.json`) sind eigener Typ `{"type":"blue_skies:aquite_pickaxe"}` ohne Inhalt → Rezept nur im Code. Rüstung normal geformt (5/8/7/4).
- **Eigene Rezeptordner** `data/blue_skies/blue_skies/`: `alchemy_recipes` (70; Typen `transmute` mit `items`/`tags`, `catylist` mit `catylists`/`inputs`/`results`), `horizonite_forge_fuels` (7, `fuel_amount` 0,05–0,8), `snowcap_mushroom_freezing` (12, Block→Block in der Welt), `snowcap_oven_freezing_recipes` (37, `fuel_amount`, optional `output`), `tool_handle_types` (8 Sticks, Faktoren attack_speed/durability/projectile_damage).
- **Loot**: `loot_tables/chests/` (gatekeeper_house, blinding_dungeon, nature_dungeon, poison_dungeon, bunker, cave_spawner, village/profession), `loot_tables/loot_bags/<boss>/{common,uncommon,rare}.json`; die Boss-Entity-Tabellen sind leer. `gameplay/hero_of_the_village/`.
- **Worldgen**: `worldgen/placed_feature/ore_*.json`, `configured_feature/ore_*.json`, `worldgen/structure/*.json` (Biome), `structure_set/` (Gatekeeper: Raster 33, frequency 0.75, nicht nahe Spawn).
- **Tags**: `forge:ingots` (= blue_skies:ingots/horizonite, falsite, ventium), `forge:raw_materials`, `forge:ores`, `forge:gems` (pyrope, diopside, aquite, charoite), `forge:enchanting_fuels` (= falsite-Nuggets); keine Untertags `forge:ingots/<metall>`. `blue_skies:arcs` (7 Arcs).
- **Config** `config/blue_skies-common.toml`: `zeal_lighter_cost = 8`, `allowed_mods_for_feature_gen` (Testinstanz `["ieplus"]`), `allowed_mobs_for_spawning = []`.
- **Nur im Code** (nicht gelesen): Werkzeugrezepte, Gatekeeper-/Dorfhandel, Werkzeugabschwächung (`PlayerHooks.isNerfableTool`, `SkiesEntityHooks.nerfDamage`, laut `docs/16_MODLISTE_1.20.1.md`), Wahl des Loot Bags, Arc-Stufen, Bosse.

### So wurde billig gelesen

```bash
S=<scratchpad>; J=$S/jars/bs
# Journal-Index: eine Zeile je Eintrag (section requirement datei icon)
cd $J/data/blue_skies/blue_skies/journal/entries; for f in *.json; do c=$(tr -d ' \n' < $f); ... done | sort
# Journaltexte, gekappt: ~32 KB, einmal ganz gelesen
grep '\.lore"' $J/assets/blue_skies/blue_skies/journal_lang/en_us.json | sed 's/\n/ /g' | cut -c1-520
# Rezepte: Holz- und Steinvarianten raus, 695 -> 204 Zeilen
java tools/RecipeDump.java $S/jars bs/data/blue_skies/recipes > $S/rez.txt
bash .claude/skills/modpfad-seite-s/scripts/recipe_filter.sh $S/rez.txt 'bluebright|starlit|frostbright|comet|lunar|dusk|maple|cherry|crystallized|turquoise|taratite|rimestone|cinderstone|umber|brumble|stonecutting|_planks|_door|_trapdoor|_fence|_button|_pressure_plate|_sign|_boat|_bookshelf|_log|_wood|_dye_from|_chest'
# Loot: nur Item-Namen je Tabelle
tr -d ' \n' < f.json | grep -o '"name":"[^"]*"' | sort -u
```
Werkzeug-Icons als Ebenen: `blue_skies:item/tools/handles/handle+/item/tools/heads/<tool>/<material>` (Schwert: `handle_sword`).

## Progression in Kürze

1. Gatekeeper's House (Oberwelt): Blue Journal und Zeal Lighter beim Gatekeeper; Portale aus Turquoise/Lunar Stone Bricks. Danach Holz-/Steinwerkzeuge der Welten (fremde Werkzeuge abgeschwächt).
2. Everbright: Ventium (Eimer, Schere, Tool Box), Falsite (Haltbarkeit über Tool Box, Lapis-Ersatz), Snowcap Oven, Warding Pearl.
3. Everdawn: Horizonite (Auto-Smelt), Horizonite Forge (ohne Brennstoff, Sunstone lädt), Moonstone Shield.
4. Beide Welten: Pyrope → Aquite → Diopside / Charoite; Enchanting Table mit Charoite.
5. Blinding Dungeons (4 Schlüssel, Keystone): Summoner (Everbright), Alchemist (Everdawn) → Summoning Table/Tome, Alchemy Table/Scroll, Ethereal/Dusk Arc. Danach verkauft der Gatekeeper Schlüssel.
6. Nature Dungeon (Snow Covered Pines) → Starlit Crusher; Poison Dungeon (Sunset Maple Forest) → Arachnarch. Nature/Poisonous Arc.

## Schlüsselzahlen

- Erze (placed_feature, count = Versuche je Chunk, Größe aus configured_feature): Moonstone 20, Y0–127; Pyrope 17, Y0–83; Aquite 15×5, Y0–54; Diopside 1×6, Y0–19; Charoite 1×6, Y0–13; Ventium 20×6 und Falsite 20×6, Y0–63 (Everbright); Horizonite 10×4, Y0–24 (Everdawn: crystal_dunes, crystal_dunes_spikes, crystal_roughs, searing_grassland, sunset_maple_forest).
- Snowcap Oven: Snowcap Mushroom 1600, Torch 300, Horizonite Ingot → Iron Ingot (1600).
- Horizonite Forge: Block 0,8, Sunstone Crystal 0,4, Ingot 0,2, Nugget 0,05.
- Rezepte: Tool Box 2 Ventium + 4 Planks; Snowcap Oven 3 Snowcap Mushroom Block + 5 Turquoise Cobblestone + Furnace; Horizonite Forge 5 Horizonite + Furnace + 3 Lunar Cobblestone; Warding Pearl 6 Falsite Nugget + 2 Soul Fragment + Pearl; Zeal Lighter Charoite + Moonstone Shard; Star Emitter Star Flare + Falsite + 3 Slabs; Moonstone Shield 6 Vitreous Moonstone (Crystal-Camel-Drop) + Stick.

## Pack-Bezug

- Alchemy Table: Iron ↔ Ventium (transmute), Iron + Soul Fragment → Falsite, Iron + Blaze Rod → Horizonite; Snowcap Oven/Mushroom: Horizonite → Iron. Eisen-Kreislauf ohne Erz. Siehe CROSSMOD_AUFFAELLIGKEITEN.md, Abschnitt Blue Skies.
- Vanilla-Kompatrezepte: Anvil/Stonecutter mit Ventium-Tags, Enchanting Table/Jukebox mit Charoite, Furnace aus `blue_skies:cobblestone`.
- Fremde Erze nur über `allowed_mods_for_feature_gen`.

## In den Dateien, aber nicht im Spiel

Aquatic Arc, Life Arc, Runic Arc, Aquatic/Life Keystone und Key, Infused Arc Sword: Sprachdatei, Texturen und Tag, aber keine Loot-Tabelle und kein Rezept. Schallplatten `blinding_rage`, `defying_starlight`, `venomous_encounter` (in Loot Bags) ohne Namen in der Sprachdatei.

## Offen

Werkzeugrezepte (Code), Preise des Gatekeepers und der Dorfbewohner, Stärke und Ende der Werkzeugabschwächung, welche Schilde gegen den Arachnarch genügen, wann common/uncommon/rare Loot Bag, ob Catylist-Hilfsstoffe verbraucht werden, Bosswerte.

## IDs der Seite

| Name | ID |
|---|---|
| Blue Journal | `blue_skies:blue_journal` |
| Zeal Lighter | `blue_skies:zeal_lighter` |
| Turquoise Stone Bricks | `blue_skies:turquoise_stonebrick` |
| Lunar Stone Bricks | `blue_skies:lunar_stonebrick` |
| Everbright Portal Block | `blue_skies:everbright_portal` |
| Everdawn Portal Block | `blue_skies:everdawn_portal` |
| Turquoise Stone | `blue_skies:turquoise_stone` |
| Lunar Stone | `blue_skies:lunar_stone` |
| Bluebright Stick | `blue_skies:bluebright_stick` |
| Bluebright Spear | `blue_skies:bluebright_spear` |
| Lunar Stick | `blue_skies:lunar_stick` |
| Frostbright Stick | `blue_skies:frostbright_stick` |
| Maple Stick | `blue_skies:maple_stick` |
| Comet Stick | `blue_skies:comet_stick` |
| Starlit Stick | `blue_skies:starlit_stick` |
| Dusk Stick | `blue_skies:dusk_stick` |
| Stick | `minecraft:stick` |
| Ventium Ore | `blue_skies:ventium_ore` |
| Ventium Ingot | `blue_skies:ventium_ingot` |
| Ventium Bucket | `blue_skies:ventium_bucket` |
| Ventium Shears | `blue_skies:ventium_shears` |
| Tool Box | `blue_skies:tool_box` |
| Falsite Ore | `blue_skies:falsite_ore` |
| Falsite Ingot | `blue_skies:falsite_ingot` |
| Falsite Nugget | `blue_skies:falsite_nugget` |
| Snowcap Mushroom | `blue_skies:snowcap_mushroom` |
| Snowcap Pinhead | `blue_skies:snowcap_pinhead` |
| Snowcap Oven | `blue_skies:snowcap_oven` |
| Pearl | `blue_skies:pearl` |
| Soul Fragment | `blue_skies:soul_fragment` |
| Warding Pearl | `blue_skies:warding_pearl` |
| Horizonite Ore | `blue_skies:horizonite_ore` |
| Horizonite Ingot | `blue_skies:horizonite_ingot` |
| Horizonite Chestplate | `blue_skies:horizonite_chestplate` |
| Horizonite Forge | `blue_skies:horizonite_forge` |
| Sunstone Crystal | `blue_skies:sunstone_crystal` |
| Vitreous Moonstone | `blue_skies:vitreous_moonstone` |
| Moonstone Shield | `blue_skies:moonstone_shield` |
| Pyrope Gemstone | `blue_skies:pyrope_gem` |
| Aquite | `blue_skies:aquite` |
| Aquite Chestplate | `blue_skies:aquite_chestplate` |
| Moonstone Shard | `blue_skies:moonstone_shard` |
| Moonstone | `blue_skies:moonstone` |
| Moonstone Ore | `blue_skies:everbright_moonstone_ore`, `blue_skies:everdawn_moonstone_ore` |
| Pyrope Ore | `blue_skies:everbright_pyrope_ore`, `blue_skies:everdawn_pyrope_ore` |
| Aquite Ore | `blue_skies:everbright_aquite_ore`, `blue_skies:everdawn_aquite_ore` |
| Diopside Ore | `blue_skies:everbright_diopside_ore`, `blue_skies:everdawn_diopside_ore` |
| Charoite Ore | `blue_skies:everbright_charoite_ore`, `blue_skies:everdawn_charoite_ore` |
| Diopside Gemstone | `blue_skies:diopside_gem` |
| Charoite | `blue_skies:charoite` |
| Enchanting Table | `minecraft:enchanting_table` |
| Blinding Dungeon Key | `blue_skies:blinding_key` |
| Blinding Keystone (Everbright) | `blue_skies:bright_blinding_keystone` |
| Summoner Loot Bag | `blue_skies:loot_bag_summoner` |
| Ethereal Arc | `blue_skies:ethereal_arc` |
| Soulbound Spear | `blue_skies:soulbound_spear` |
| Summoning Table | `blue_skies:summoning_table` |
| Summoning Tome | `blue_skies:summoning_tome` |
| Alchemist Loot Bag | `blue_skies:loot_bag_alchemist` |
| Dusk Arc | `blue_skies:dusk_arc` |
| Spike Shield | `blue_skies:spike_shield` |
| Alchemy Table | `blue_skies:alchemy_table` |
| Alchemy Scroll | `blue_skies:alchemy_scroll` |
| Iron Ingot | `minecraft:iron_ingot` |
| Gold Ingot | `minecraft:gold_ingot` |
| End Stone | `minecraft:end_stone` |
| Coal | `minecraft:coal` |
| Nature Dungeon Key | `blue_skies:nature_key` |
| Nature Keystone | `blue_skies:nature_keystone` |
| Nature Arc | `blue_skies:nature_arc` |
| Crushing Hammer | `blue_skies:crushing_hammer` |
| Poison Dungeon Key | `blue_skies:poison_key` |
| Poison Keystone | `blue_skies:poison_keystone` |
| Poisonous Arc | `blue_skies:poison_arc` |
| Venom Sac | `blue_skies:venom_sac` |
| Different Sword | `blue_skies:different_sword` |
| Food Prep Table | `blue_skies:food_prep_table` |
| Trough | `blue_skies:trough` |
| Brewberry | `blue_skies:brewberry` |
| Pine Fruit | `blue_skies:pine_fruit` |
| Crescent Fruit | `blue_skies:crescent_fruit` |
| Scalefruit | `blue_skies:scalefruit` |
| Azulfo Horn | `blue_skies:azulfo_horn` |
| Star Emitter | `blue_skies:star_emitter` |
| Astrolabe | `blue_skies:astrolabe` |
| Bag of Spoils | `blue_skies:bag_of_spoils` |
| Camel Saddle | `blue_skies:camel_saddle` |
| Crystal Flower | `blue_skies:crystal_flower` |
| Cryo Root | `blue_skies:cryo_root` |
| Spider Webbing | `blue_skies:spider_webbing` |

19 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
