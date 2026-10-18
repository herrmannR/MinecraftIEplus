# Alex's Mobs – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-17, Minecraft 1.20.1. Alles aus den JARs und der Config der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/Tf1bokH9S871MVquTbiiAJ). Ausführliche Texte stehen in `data.js`. Sparsam gebaut (Skill `modpfad-seite-s`).

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Alex's Mobs | 1.22.9 | `am=alexsmobs-1.22.9` | `alexsmobs` | Hauptmod |
| Alex's Delight | 1.5 | `ad=alexsdelight` | `alexsdelight` | Brücke zu Farmer's Delight |
| Citadel | 2.6.3 | – | `citadel` | Bibliothek (Buchformat, Modelle), nicht gelesen |

## Wo die Quellen liegen

- **Buch** „Animal Dictionary“ (Citadel-Format): `assets/alexsmobs/book/animal_dictionary/<tier>.json` (91 Dateien, alle mit `parent: root.json`, also flach, keine Kapitel; Felder `text`, `title`, `recipes`, `entity_renders`), Texte in `…/animal_dictionary/en_us/<tier>.txt` (zusammen 93 KB, Zeilenumbruch-Marker `<NEWLINE>`). Kein Fortschritt im Buch → Reihenfolge der Seite aus dem **Advancement-Baum** (`data/alexsmobs/advancements/alexsmobs/`, 106 ohne Rezept-Advancements).
- **Rezepte**: `data/alexsmobs/recipes/` flach, 84 Dateien; eigene Typen `alexsmobs:bison_upgrade`, `alexsmobs:mimicream_repair` (ohne Inhalt, Logik im Code). Nur Zutaten aus `minecraft`, `forge`, `alexsmobs`.
- **Capsid-Rezepte**: `data/alexsmobs/capsid_recipes/` (4: cod → cosmic_cod, #music_discs → music_disc_daze, mosquito_larva → mysterious_worm je 120 Ticks; dimensional_carver → shattered_dimensional_carver 200 Ticks).
- **Loot**: `loot_tables/entities/<tier>.json`, `gameplay/` (anteater/platypus/pupfish/seal/sugar_glider-Belohnungen, trader_elephant_chest, transmutation_table_common/uncommon/rare). Manche Beute steht nicht in Tabellen, sondern im Code (Ambergris, Lost Tentacle, Cachalot Whale Tooth, Shark Tooth, Serrated Shark Tooth, Spiked Scute, Shed Snake Skin, Banana Peel, Hair of Bear, Moose Antler).
- **Loot-Modifier** `data/alexsmobs/loot_modifiers/`: banana_drop (jungle_leaves), blossom_drop (acacia_leaves), ancient_dart (Dschungeltempel-Truhen), pigshoes (piglin_bartering).
- **Worldgen**: nur `leafcutter_anthill` (configured/placed_feature); Spawns über `forge/biome_modifier/am_mob_spawns.json`, `am_leafcutter_ant_spawns.json`, `forge/structure_modifier/am_mob_spawns.json`.
- **Tags**: `alexsmobs:animal_dictionary_ingredient` (17 Beutestücke).
- **Config** der Instanz: `config/alexsmobs.toml` (u. a. `voidWormMaxHealth = 160.0`, `voidWormSpawnDimensions = ["minecraft:the_end"]`, `transmutingExperienceCost = 3`, `transmutationBlacklist = ["minecraft:beacon"]`, `transmutingTableExplodes = true`, `limitTransmutingToLootTables = false`, `farseerBorderSpawnDistance = 100`, `beachedCachalotWhales = true`, `beachedCachalotWhaleSpawnChance = 5`, `…SpawnDelay = 24000`, `mimicreamRepair = true`, `mimicreamBlacklist = [blood_sprayer, hemolymph_blaster]`); je Tier `config/alexsmobs/<tier>_spawns.json` (nicht gelesen).
- **Nur im Code** (nicht gelesen): Zähmen, Segen, Tränke, Capsid-Förderung, Transmutation-Gewichte, Void-Worm-KI, Effigy-Funktion.

### So wurde billig gelesen

```bash
S=<scratchpad>; J=$S/jars/am
# Buch-Index: eine Zeile je Tier mit Rezept-Verweisen (3 KB)
cd $J/assets/alexsmobs/book/animal_dictionary; for f in *.json; do c=$(tr -d ' \n\r' < $f); ... grep -o '"recipe":"[^"]*"' ...; done
# Advancement-Baum mit Titel und Beschreibung aus der Sprachdatei (106 Zeilen, ~12 KB) – das war das Gerüst der Seite
find . -name "*.json" | grep -v recipes | while read f; do ... parent, title, desc ...; done
# Buchtexte: EIN awk-Lauf macht alle 91 Texte zu einer Datei mit einem Satz je Zeile "<tier>| <satz>", danach nur grep
awk 'FNR==1{...printf "%s: ", f} {gsub(/<NEWLINE>/,""); printf "%s ", $0}' en_us/*.txt | sed 's/\([.!?]\) /\1\n/g' > saetze.txt
grep -i -E "found|spawn|..." s2.txt | awk -F'|' '!s[$1]++'      # Lebensraum je Tier
grep -E "^(tier1|tier2)\|" s2.txt | grep -i -E "drop|craft|tame|feed|bless"   # Beute/Zähmen
# Rezepte: nur 84, ganz gelesen (recipe_filter.sh ändert nichts)
java tools/RecipeDump.java $S/jars am/data/alexsmobs/recipes > rez.txt
# Loot: Item-Namen je Tabelle
tr -d ' \n\r' < f.json | grep -o '"name":"[^"]*"' | sort -u
```
Nicht machen: eine Schleife über 91 Textdateien je Suchbegriff (Windows-Prozessstarts, lief > 2 min in den Timeout).

Bilder: Item-Texturen flach unter `textures/item/`; `dimensional_carver_shards` ist ein Ordner mit Einzelbildern (`…/dimensional_carver_shards/0`); Shield of the Deep hat nur `textures/armor/` → `null`; Transmutation Table hat keine flache Textur → `null`; Hummingbird Feeder = `block/bird_feeder_filled`, Sculk Boomer = `block/skulk_boomer_closed`.

## Progression in Kürze

1. **Oberwelt zähmen**: Banana (Jungle Leaves), Acacia Blossom (Acacia Leaves) → Capuchin, Gorilla, Elefant; Fish Oil → Bald Eagle, Falconry Glove (Hair of Bear) + Hood (Roadrunner Feather).
2. **Beute → Ausrüstung**: Helm/Brust/Beine/Stiefel aus Tierbeute; Werkzeuge Vine Lasso, Maraca, Stink Ray, Pocket of Sand, Gustmaker, Tendon Whip, Shark Tooth Arrow, Tarantula Hawk Elytra; Blattschneiderameisen (Gongylidia, Pupa).
3. **Meer/Untergrund**: gestrandeter Pottwal → Ambergris → Echolocator → Endolocator / Strange Fish Finder (Fish Bones vom Skelewag); Lost Tentacle → Grappling Squok; Shield Of The Deep; Rainbow Glass; Sculk Boomer.
4. **Nether**: Crimson Mosquito → Blood Sprayer; Maggot + Proboscis → **Crimson Mosquito Larva** (Tor zur Void Worm); Warped Mosco (verwandelte Mücke) → Hemolymph Blaster (braucht Mimicream aus dem End); Soul Heart; Straddlite → Straddleboard (Netherit), Saddle, Tack (Laviathan).
5. **End**: Enderiophage → **Capsid** (Tor für alle Umwandlungen), Enderiophage Rocket, Cosmic Cod → Cosmaw; Mimicube → Mimicream.
6. **Void Worm und Weltrand**: Larva im Capsid → Mysterious Worm, in die End-Leere werfen → Void Worm (160 HP) → Eye + 2 Mandible → Dimensional Carver (2 Netherit; Portal zum Spawn, 20 Benutzungen) → im Capsid Shattered Carver (Portal 1 Mio. Blöcke) → Farseer am Weltrand → 2 Farseer Arm + Nether Star + 3 Obsidian = **Transmutation Table**.

## Schlüsselzahlen

- Void Worm 160 HP, nur End; Dimensional Carver 20 Benutzungen (Buch).
- Transmutation: 3 Erfahrung (Config), Gewichte +3/−4 (`transmutingWeightAddStep/RemoveStep`), Tisch explodiert beim Abbau, nur Nether Star bleibt.
- Ambergris: Brennstoff für 64 Items (Buch).
- Capsid: 1 Stack, fördert nach oben; Capsid-Rezepte 120/200 Ticks.

## Pack-Bezug

- Keine Rezepte mit Fremdteilen; Forge-Tags `#forge:ingots/iron`, `#forge:ingots/netherite`, `#forge:nuggets/iron`, `#forge:rods/wooden`, `#forge:glass`, `#forge:string`, `#forge:dyes/green`.
- Netherit an zwei Stellen (Dimensional Carver 2, Straddleboard 3), Nether Star in der Transmutation Table – Ansatzpunkte, wenn der Weg ans Pack-Gating gebunden werden soll.
- Transmutation Table wandelt u. a. in Diamant, Smaragd, Rohmetalle (Beutetabellen `transmutation_table_*`) – möglicher Umweg an Erz-Gating vorbei; Befund, keine Entscheidung.
- Alex's Delight: `barbecue_on_a_stick` verlangt `amfd:singular_cooked_moose_rib` (nicht installierter Mod) → Rezept kaputt. Ersetzt `alexsmobs:recipes/kangaroo_burger` und Loot `entities/bison`, `entities/bunfungus`.

## Offen

- Spawn-Gewichte und Biome je Tier (`config/alexsmobs/*_spawns.json`), Lebenspunkte/Schaden, Rüstungswerte, Tränke, Effigy-Funktion, genaue Dropchancen der im Code vergebenen Beute.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> alexsmobs/data.js alexsmobs alexsdelight` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Animal Dictionary | `alexsmobs:animal_dictionary` |
| Banana | `alexsmobs:banana` |
| Acacia Blossom | `alexsmobs:acacia_blossom` |
| Banana Peel | `alexsmobs:banana_peel` |
| Hummingbird Feeder | `alexsmobs:hummingbird_feeder` |
| Fish Oil | `alexsmobs:fish_oil` |
| Hair of Bear | `alexsmobs:bear_fur` |
| Falconry Glove | `alexsmobs:falconry_glove` |
| Roadrunner Feather | `alexsmobs:roadrunner_feather` |
| Falconry Hood | `alexsmobs:falconry_hood` |
| Froststalker Helmet | `alexsmobs:froststalker_helmet` |
| Antler Headdress | `alexsmobs:moose_headgear` |
| Frontiersman's Cap | `alexsmobs:frontier_cap` |
| Crocodile Chestplate | `alexsmobs:crocodile_chestplate` |
| Rock Shell Chestplate | `alexsmobs:rocky_chestplate` |
| Spiked Turtle Shell | `alexsmobs:spiked_turtle_shell` |
| Outback Leggings | `alexsmobs:emu_leggings` |
| Cave Centipede Leggings | `alexsmobs:centipede_leggings` |
| Roadrunner Boots | `alexsmobs:roadrunner_boots` |
| Flying Fish Boots | `alexsmobs:flying_fish_boots` |
| Vine Lasso | `alexsmobs:vine_lasso` |
| Maraca | `alexsmobs:maraca` |
| Stink Ray | `alexsmobs:stink_ray_hand`, `alexsmobs:stink_ray_inventory`, `alexsmobs:stink_ray_empty_hand`, `alexsmobs:stink_empty_inventory`, `alexsmobs:stink_ray` |
| Stink in a Bottle | `alexsmobs:stink_bottle` |
| Pocket of Sand | `alexsmobs:pocket_sand` |
| Gustmaker | `alexsmobs:gustmaker` |
| Tendon Whip | `alexsmobs:tendon_whip` |
| Shark Tooth Arrow | `alexsmobs:shark_tooth_arrow` |
| Tarantula Hawk Elytra | `alexsmobs:tarantula_hawk_elytra` |
| Leafcutter Anthill | `alexsmobs:leafcutter_anthill` |
| Leafcutter Ant Chamber | `alexsmobs:leafcutter_ant_chamber` |
| Gongylidia | `alexsmobs:gongylidia` |
| Leafcutter Ant Pupa | `alexsmobs:leafcutter_ant_pupa` |
| Ambergris | `alexsmobs:ambergris` |
| Cachalot Whale Tooth | `alexsmobs:cachalot_whale_tooth` |
| Echolocator | `alexsmobs:echolocator` |
| Endolocator | `alexsmobs:endolocator` |
| Lost Tentacle | `alexsmobs:lost_tentacle` |
| Grappling Squok | `alexsmobs:squid_grapple` |
| Fish Bones | `alexsmobs:fish_bones` |
| Skelewag Skull | `alexsmobs:skelewag_sword_inventory`, `alexsmobs:skelewag_sword_hand`, `alexsmobs:skelewag_sword` |
| Strange Fish Finder | `alexsmobs:pupfish_locator` |
| Serrated Shark Tooth | `alexsmobs:serrated_shark_tooth` |
| Shield Of The Deep | `alexsmobs:shield_of_the_deep` |
| Rainbow Jelly | `alexsmobs:rainbow_jelly` |
| Rainbow Glass | `alexsmobs:rainbow_glass` |
| Skreecher Soul | `alexsmobs:skreecher_soul` |
| Sculk Boomer | `alexsmobs:sculk_boomer` |
| Crimson Mosquito Proboscis | `alexsmobs:mosquito_proboscis` |
| Blood Sac | `alexsmobs:blood_sac` |
| Blood Sprayer | `alexsmobs:blood_sprayer` |
| Maggot | `alexsmobs:maggot` |
| Crimson Mosquito Larva | `alexsmobs:mosquito_larva` |
| Warped Muscle | `alexsmobs:warped_muscle` |
| Hemolymph Sac | `alexsmobs:hemolymph_sac` |
| Hemolymph Blaster | `alexsmobs:hemolymph_blaster` |
| Soul Heart | `alexsmobs:soul_heart` |
| Straddlite | `alexsmobs:straddlite` |
| Straddleboard | `alexsmobs:straddleboard` |
| Straddlite Saddle | `alexsmobs:straddle_saddle` |
| Straddlite Tack | `alexsmobs:straddle_helmet` |
| Capsid | `alexsmobs:capsid` |
| Enderiophage Rocket | `alexsmobs:enderiophage_rocket` |
| Dimensional Carver | `alexsmobs:dimensional_carver` |
| Mimicream | `alexsmobs:mimicream` |
| Mysterious Worm | `alexsmobs:mysterious_worm` |
| Void Worm Eye | `alexsmobs:void_worm_eye` |
| Void Worm Mandible | `alexsmobs:void_worm_mandible` |
| Void Worm Beak | `alexsmobs:void_worm_beak` |
| Void Worm Effigy | `alexsmobs:void_worm_effigy` |
| Shattered Dimensional Carver | `alexsmobs:shattered_dimensional_carver` |
| Farseer Arm | `alexsmobs:farseer_arm` |
| Transmutation Table | `alexsmobs:transmutation_table` |
| Cosmic Cod | `alexsmobs:cosmic_cod` |
| Ghostly Pickaxe | `alexsmobs:ghostly_pickaxe` |
| Cooked Kangaroo Meat | `alexsmobs:cooked_kangaroo_meat` |
| Kangaroo Burger | `alexsmobs:kangaroo_burger` |
| Cooked Moose Ribs | `alexsmobs:cooked_moose_ribs` |
| Cooked Catfish | `alexsmobs:cooked_catfish` |
| Cooked Lobster Tail | `alexsmobs:cooked_lobster_tail` |
| Boiled Emu Egg | `alexsmobs:boiled_emu_egg` |
| Sopa De Macaco | `alexsmobs:sopa_de_macaco` |
| Mosquito Repellent Stew | `alexsmobs:mosquito_repellent_stew` |
| Komodo Dragon Spit Bottle | `alexsmobs:komodo_spit_bottle` |
| Chorus Fruit on a Stick | `alexsmobs:chorus_on_a_stick` |
| Dropbear Claw | `alexsmobs:dropbear_claw` |
| Block of Bison Fur | `alexsmobs:bison_fur_block` |
| Banana Slug Slime Block | `alexsmobs:banana_slug_slime_block` |
| Kangaroo Hide | `alexsmobs:kangaroo_hide` |
| Ancient Dart | `alexsmobs:ancient_dart` |
| Ancient Hogshoes | `alexsmobs:pigshoes` |
| Bison Burger | `alexsdelight:bison_burger` |
| Kangaroo Stew | `alexsdelight:kangaroo_stew` |
| Lobster Pasta | `alexsdelight:lobster_pasta` |
| Acacia Blossom Soup | `alexsdelight:acacia_blossom_soup` |
| Gongylidia Bruschetta | `alexsdelight:gongylidia_bruschetta` |
| Maggot Salad | `alexsdelight:maggot_salad` |
| Cooked Centipede Leg | `alexsdelight:cooked_centipede_leg` |

8 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
