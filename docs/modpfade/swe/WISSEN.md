# Star Wars Expansion – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-31, Minecraft 1.20.1. Alles aus dem JAR der **TestModsInstance** gelesen (noch nicht in der Pack-Instanz), zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/97NsKRWxt8zi1fSt2MuFjx). Ausführliche Texte stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Star Wars Expansion (MrFazCraft/FazBrick, MCreator) | 3.1.0 | `swe=StarWarsExpansion` | `star_wars_expansion` | Hauptmod |
| GeckoLib | 4.8.4 | – | `geckolib` | Pflicht (Modelle) |
| Player Animator | 1.0.2-rc1+1.20 (`player-animation-lib-forge-1.0.2-rc1+1.20.jar`) | – | `playeranimator` | **Pflicht**, obwohl `mods.toml` sie als optional führt: ohne sie `NoClassDefFoundError: dev/kosmx/playerAnim/api/layered/IAnimation` beim Laden (2026-10-31) |

## Wo die Quellen liegen

- **Kein Buch.** `data/star_wars_expansion/advancements/` (10): Wurzel `a_galaxy_far_away_advancement` (Reparation Kit), darunter die vier Reise-Advancements (`minecraft:changed_dimension`), darunter bantha, credits, lightsaber (alle 5 Kyber), sith (Maske), tauntaun (Snow Suit).
- **Rezepte** `data/star_wars_expansion/recipes/` (31): Werkbank, 5 smelting (Doonium, Quadanium, Rubber, Kupfer aus `copper_sandstone_ore`, Bantha-Fleisch), 3 `smithing_transform` (Beskar). Keine Bedingungen.
- **Dimensionen** `dimension/{tatooine,endor,hoth,naboo}.json`, je ein Biom (`worldgen/biome/*`). Biom-Modifier (`forge/biome_modifier/`, 22) wirken **nur in den eigenen Biomen**: Erze, Pflanzen, Spawns (Bantha, Krykna, Tauntaun, Wampa, Porg, Shaak).
- **Strukturen** `worldgen/structure/` (16) + `structures/*.nbt` (21). Einzige Overworld-Struktur: `broken_pod_structure` im Biom `plains` (spacing 40, separation 16). Wesen und Truhen-Inhalt stehen fest in den NBT-Dateien (keine Chest-Loot-Tabellen; `loot_tables/blocks/` nur Blöcke). Gelesen per Regex über die entpackten NBT-Strings (`gzip` + `re.findall(rb'[a-z_]+:[a-z0-9_/]+')`).
- **Tags**: `minecraft:point_of_interest_type/acquirable_job_site` (6 Arbeitsblöcke), `items/swords`, `items/axes`, `items/music_discs`. Keine `forge:`-Tags.
- **Nur im Code** (`net/mcreator/starwarsexpansion/…`, javap; SRG → Mojang über `libraries/de/oceanlabs/mcp/mcp_config/1.20.1-…-mappings-merged.txt` + `libraries/net/minecraft/client/1.20.1-…-mappings.txt`, Hilfsskript siehe unten):
  - Wesen und Kategorien: `init/StarWarsExpansionModEntities` (alle Wesen `MONSTER`/`CREATURE`, nur Projektile `MISC` → Easy-NPC-Doppler-tauglich)
  - Händler: `init/StarWarsExpansionModTrades` (Angebote), `init/StarWarsExpansionModVillagerProfessions` (6 Berufe; Arbeitsblöcke `modern_crate`, `_2`, `_3`, `_4`, `control_panel`, `workspace_bench`; Zuordnung Beruf→Block nicht ausgelesen)
  - Reise: `network/PlanetAnchorGUIButtonMessage` (Knopf 0 Tatooine, 1 Endor, 2 Kashyyyk → `TravelDenyProcedureProcedure`, 3 Hoth, 4 Earth, 5 Naboo), `procedures/Travel*`, `SpaceshipAnchorGUIKeyOnKeyPressedProcedure` (Taste Z, nur im Fahrzeug), `TatooinePlanetAnchorRightclickedProcedure`
  - Kapsel: `procedures/BrokenEscapePodRightClickedOnEntityProcedure` (Reparation Kit → `ESCAPE_POD`)
  - Droiden-Items: `procedures/<Name>RightclickedOnBlockProcedure` setzen das Wesen ab; Droiden-Wesen sind `TamableAnimal`, `isFood` = `COMPUTER_TIP`
  - Drops (`m_7472_` dropCustomDeathLoot): Bantha → Raw Bantha Meat, Porg → Raw Porg, Tauntaun → Tauntaun Leather, Ancient Sith Lord → Maske, Cantina Band → Cantina Music; Krykna über `KryknaDropLeg/StringProcedure`. Ausrüstung im Konstruktor (kein sicherer Drop): Skiff Guard (Rüstung, Vibro-Axe), Gungan Soldier (Shield, Atlatl), Tusken (Gaderffii), Gamorrean (Credits), Bantha (Horn)
  - Effekte: Stabilizer Mask → `DIG_SPEED`, Interface Band → `NIGHT_VISION`; Doppelsprung (`DoubleJumpKeyOnKeyPressedProcedure`) für Brown/Gray/Black/Grand Master Jedi Clothes und Sith Clothes
- **Billig gelesen** (Skill modpfad-seite-s): RecipeDump → 31 Zeilen; Sprachdatei mit Python nach Schlüsselart gruppiert; Advancements/Biom-Modifier/Strukturen je eine Zeile per `tr -d ' \n' | grep -o`; Handel mit `javap -c` + `grep -oE` über Item-Felder und `bipush`-Zahlen; Item→Textur aus `models/item/*.json` (`layer0`).

## Progression in Kürze

1. **Overworld**: Reparation Kit (8 Eisen + 1 Eisenblock) → kaputte Rettungskapsel in Plains reparieren → Escape Pod → Taste Z → Galaxiekarte (Tatooine, Endor, Hoth, Naboo, Earth; Kashyyyk gesperrt). Reise kostenlos, ohne Treibstoff.
2. **Tatooine**: Doonium, Quadanium, Rubber, Kupfer (Ofen) → Plastoid (Rubber + Eisen), Electronic Board (Quadanium + Rubber + 2 Kupfer → 2), Computer Tip (2 Doonium → 8). Bantha, Krykna.
3. **Händler** (Arbeitsblöcke nur aus Tatooine-Strukturen): Miner tauscht Vanilla-Rohstoffe in Galactic Credits; Weaponsmith (Doonium + Gold-Credits → Blaster, Vibro-Waffen, Doonium-Rüstung; Plastoid → Klonrüstung; Leder + Faden → Jedi-Gewänder); Spaceship (Quadanium + Electronic Board → Escape Pod, Landspeeder, X-Wing, Speeder Bike, TIE-Fighter); Droid (Credits + Electronic Board → Droiden-Items); Butcher, Lumberjack.
4. **Hoth/Endor/Naboo**: Snow Suit (Leder), Tauntaun, Wampa, Hoth Base; Ewoks, Porgs; Gungans, Sith Ruins mit Ancient Sith Lord (Boss, Maske).
5. **Ausrüstung**: Lichtschwerter (Saber Emitter + Kyber + Saber Handle; Emitter/Handle aus Jedi Temple), Doppelschwerter, Beskar (2 Netherite + 2 Doonium; Schmiedetisch auf Klonrüstung).

## Schlüsselzahlen

- Struktur-Abstände (spacing/separation): Broken Pod 40/16 (Plains und Tatooine), Tatooine Village 64/16, Sandcrawler 32/8, Hutt Palace 73/23, Pirate Ship 66/15, Jedi Temple 75/60, Tusken Campment 27/9, Hoth Base 40/10, Ewok Tree 20/11, Naboo Palace 100/80, Naboo Temple 35/34, Sith Ruins 113/83.
- Händler (Stufe: Preis → Ware): Miner 1: 10 Eisen → 10 Credits, 10 Gold → 15; 2: 10 Smaragd → 10, 10 Diamant → 32; 3: 32 Quarz → 8, 1 Netherite → 2 Gold-Credits. Spaceship 1: 16 Quadanium + 16 Board → Escape Pod; 32+16 → Landspeeder; 64+32 → X-Wing; 2: 48+20 → Speeder Bike; 64+32 → TIE-Fighter. AT-ST (64+64) und Snowspeeder (32+1) stehen im Code beim **Butcher** Trader Stufe 3. Droid 1: 48 Credits + 5 Board → R2-D2, R4-P17, R2-KT, C-3PO, TC-14, I-82; 2: 32+5 → GNK; 16+51 → MSE-6. Max. Nutzungen 10 je Angebot.
- Beskar-Satz: 3 Barren = 6 Netherite + 6 Doonium + 3 Netherite-Schmiedevorlagen.

## Pack-Bezug

- 🟢 **Im Pack abgeschaltet bis auf die Wesen (F43, 2026-10-31):** Kapsel-Struktur leer (`kubejs/data/star_wars_expansion/worldgen/structure/broken_pod_structure.json`), alle Rezepte weg (`server_scripts/starwars/swe_entfernt.js`), alle Items in JEI aus (`client_scripts/swe_ausblenden.js`). Ideen für Teil 2/3: E1–E7 in `17_STAR_WARS_1.20.1.md`, F44.

- **Doppelt zu Star Wars Planets**: Tatooine, Endor, Hoth als eigene Dimensionen mit eigener Reise ohne Ad Astra; Beskar, Stormtrooper-Rüstung. Dagegen stand die frühere Entscheidung in `17_STAR_WARS_1.20.1.md` („❌ weglassen“, nur ein Reisesystem).
- **Doppelt zu Galaxy in a Cube**: Lichtschwerter, Plastoid (eigenes Item), Klonrüstung, Jawas, Tusken, Ewoks, Blaster, Force Pike.
- **Abkürzungen**: Miner Trader macht aus Vanilla-Rohstoffen Credits; Fahrzeuge und Raumschiffe nur gegen Quadanium + Electronic Board. Overworld-Dorfbewohner werden Händler, sobald ein Arbeitsblock dasteht.
- **Easy NPC**: alle Wesen als Doppler wählbar (im Spiel bestätigt 2026-10-31).

## In den Dateien, aber nicht im Spiel erreichbar (soweit gelesen)

Kein Rezept, kein Handel, kein Strukturfund, kein Drop: Kyber Crystals (5), Tatooine Planet Anchor, Thermal Detonator, Force Pike, Magnaguard Staff, Grand Master Jedi Clothes, Sith Clothes, Stormtrooper-/Fallen-Sith-/Naboo-Royal-Guard-/Jedi-Temple-Guard-Rüstung, Klonrüstung 212st/41st/501st, Ancient Mandalorian Mask, Energy Shield, BB-8, Battle Droid B1, Bantha Leather (!), Cooked Porg, Raw Shaak Beef, Aurodium-Verwendung. Baublöcke nur durch Abbau in Strukturen. `HothFrozenProcedure` ist leer.

## Offen

- Zuordnung Arbeitsblock → Beruf (Lambda-Reihenfolge in `StarWarsExpansionModVillagerProfessions`).
- Ob Ausrüstung der Wesen fallen kann (Drop-Chancen nicht gelesen).
- Werte von Waffen, Rüstung, Fahrzeugen; was Holocron-Block und Galaxy Map tun.
- Ob Kyber & Co. doch irgendwo im Überleben vorkommen (z. B. über Code, der nicht nach Item-Feldnamen gesucht wurde).

Hilfsskript SRG → Mojang: `scratchpad/srg.py <merged.txt> <client-mappings.txt> f_… f_…` (Sitzung 2026-10-31; bei Bedarf neu schreiben: tsrg2 obf→srg je Klasse, Client-Mapping named→obf).

## IDs der Seite

| Name | ID |
|---|---|
| Reparation Kit | `star_wars_expansion:reparation_kit` |
| Doonium Ore | `star_wars_expansion:doonium_ore` |
| Quadanium Ore | `star_wars_expansion:quadanium_ore` |
| Rubber Ore | `star_wars_expansion:rubber_ore` |
| Copper Ore | `star_wars_expansion:copper_sandstone_ore` |
| Plastoid | `star_wars_expansion:plastoid` |
| Electronic Board | `star_wars_expansion:electronic_board` |
| Computer Tip | `star_wars_expansion:computer_tip` |
| Raw Bantha Meat | `star_wars_expansion:raw_bantha_meat` |
| Bantha Horn | `star_wars_expansion:banhta_horn` |
| Bantha Leather | `star_wars_expansion:bantha_leather` |
| Krykna Leg | `star_wars_expansion:krykna_leg` |
| Krykna String | `star_wars_expansion:krykna_string` |
| Galactic Credit | `star_wars_expansion:galactic_credit_gold`, `star_wars_expansion:galactic_credit` |
| Modern Crate | `star_wars_expansion:modern_crate_3`, `star_wars_expansion:modern_crate_4`, `star_wars_expansion:modern_crate_2`, `star_wars_expansion:modern_crate` |
| Control Panel | `star_wars_expansion:control_panel` |
| Workspace Bench | `star_wars_expansion:workspace_bench` |
| Hoth Stone | `star_wars_expansion:hoth_stone`, `star_wars_expansion:aurodium_ore` |
| Aurodium Ingot | `star_wars_expansion:aurodium_ingot` |
| Snow Hood | `star_wars_expansion:snow_suit_helmet` |
| Snow Suit | `star_wars_expansion:snow_suit_chestplate` |
| Snow Leggins | `star_wars_expansion:snow_suit_leggings` |
| Tauntaun Leather | `star_wars_expansion:tauntaun_leather` |
| Redwood Log | `star_wars_expansion:redwood_log` |
| Hardened Mud | `star_wars_expansion:hardened_mud` |
| Raw Porg | `star_wars_expansion:raw_porg` |
| Naboo Stone | `star_wars_expansion:naboo_stone` |
| Blue Petals | `star_wars_expansion:blue_petals` |
| Orange Petals | `star_wars_expansion:orange_petals` |
| Saber Emitter | `star_wars_expansion:saber_emitter` |
| Saber Handle | `star_wars_expansion:saber_handle` |
| X-Wing | `star_wars_expansion:x_wing_item` |
| TIE-Fighter | `star_wars_expansion:tie_fighter_item` |
| Landspeeder | `star_wars_expansion:landspeeder_item` |
| Speeder Bike | `star_wars_expansion:speeder_bike_item` |
| Snowspeeder | `star_wars_expansion:snowspeeder_item` |
| AT-ST | `star_wars_expansion:atst_item` |
| Tatooine Planet Anchor | `star_wars_expansion:tatooine_planet_anchor` |
| Blaster E-11 | `star_wars_expansion:blaster_e_11` |
| DL-44 | `star_wars_expansion:dl_44` |
| Westar-34 | `star_wars_expansion:westar_34` |
| EE-3 | `star_wars_expansion:ee_3` |
| Thermal Detonator | `star_wars_expansion:thermal_detonator` |
| Stormtrooper Helmet | `star_wars_expansion:stormtrooper_armor_helmet` |
| Clone Trooper 501st Helmet | `star_wars_expansion:clone_armor_501_helmet` |
| Cooked Bantha Meat | `star_wars_expansion:cooked_bantha_meat` |
| Cooked Porg | `star_wars_expansion:cooked_porg` |
| Raw Shaak Beef | `star_wars_expansion:raw_shaak_beef` |
| Bantha Milk Bucket | `star_wars_expansion:bantha_milk` |
| Meiloorun | `star_wars_expansion:meiloorun` |
| Jogan | `star_wars_expansion:jogan` |
| Arges Frog Leg | `star_wars_expansion:arges_frog_leg` |
| Cantina Music | `star_wars_expansion:cantina_music` |
| Tatooine Sandstone | `star_wars_expansion:tatooine_sandstone` |
| Metal Block | `star_wars_expansion:metal_block` |
| Imperial Wall Block | `star_wars_expansion:imperial_block` |
| Modern Pillar | `star_wars_expansion:modern_pillar` |
| Korriban Stone | `star_wars_expansion:korriban_stone` |
| Carbonite | `star_wars_expansion:carbonite` |
| Cantina Light | `star_wars_expansion:cantina_light` |
| Holocron | `star_wars_expansion:holocron` |
| Moisture Vaporator | `star_wars_expansion:moisture_vaporator` |
| Kolto Tank | `star_wars_expansion:kolto_tank` |

70 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
