# Wesley's Roguelike Dungeons – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-15, Minecraft 1.20.1. Daten und Klassen des JARs der Testinstanz plus deren Config, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/JoCxMWugDJXsXTJxFFyrwN). Ausführliche Texte stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Wesley's Roguelike Dungeons | 2.3.6 | `rld="Wesley's Roguelike"` | `wrd` | Hauptmod (MCreator), keine Abhängigkeiten außer Forge |

Der JAR-Name enthält Leerzeichen und Apostroph; das Kürzel in Anführungszeichen übergeben.

## Wo die Quellen liegen

- **Kein Buch.** Reihenfolge = Advancement-Baum `data/wrd/advancements/` (82 Dateien; die meisten mit Trigger `impossible`, vom Code vergeben). Wurzel `wesleys_roguelike_dungeons` (Eisenbarren), dann `cauldron` → `dungeon_found` → `key_found` → `ad_bone_chest` → `ad_all_seeing_eye` → `ad_hidden_palace` → `ad_heart_of_ender` → `ad_heart_of_the_deceiver` → `ad_portal` → `ad_corrupted_orb` → `ad_start_run` → `ad_select` → je Dungeon. Titel und Beschreibungen in der Sprachdatei unter `advancements.<id>.title/descr`.
- **Daten**: `recipes/` (153, fast nur Deko), `loot_tables/` (29 + `chests/` 2), `tags/` (Items `castingtomes`, `damagetomes`, `specialtomes`; Blöcke `artefacts`, `id_breakable_blocks` u. a.; `forge:ok_loot|good_loot|better_loot|super_loot`), `structures/` (4527 .nbt), `worldgen/` (Deep Sand, Maulstone, Portalbaum `deeplands_portal`, Dungeon-Features), `dimension/wesleys_infinite_dungeons`, Biom `mysterious_place`.
- **Config** `config/wesleys-roguelike-dungeons-config.toml` = Standardwerte (aus `net/mcreator/wrd/ModConfig` gelesen): Size 1, Difficulty 1, ModifierChance 1, AllowModifiers true, SlowerDungeonCounter 100, AllowVesselofVision true, **AllowNaturalDungeons false**, DungeonRarity 250, NetherDungeonRarity 300 (je 1.000.000 Chunks).
- **Mechanik im Code** (`net/mcreator/wrd/procedures/`, 3755 Klassen; Dump mit `javap -p -c -constants` dauert rund 3 Minuten, 54 MB). Hilfsskript im Scratchpad: Strings, `WrdMod*`-Felder und Konstanten je Klasse herausziehen. Fundstellen:
  - Vessel: `MagicCauldronRightClickedInAir` (aktivieren), `MagicCauldronActiveRightClickedInAir`, `MagicCauldron{Desert,Jungle,Ice}Activated`, `NetherCauldronActivated` (Suche, 20 Versuche)
  - Dungeon-Gruppe nach Biom: `TheDungeonsP` (Grundtemperatur ×100: >110 Wüste, 81–110 Dschungel, <10 Eis, sonst 50 % Normal / 50 % Besonders; Nether eigen), dann `NormalDungeon`, `DesertDungeon`, `JungleDungeon`, `ColdDungeon`, `NetherDungeon` (je 50/50 oberes Stockwerk); tiefer: `WayLower{Normal,Desert,Jungle,Cold,Nether,Special}`, `LowerStartroomIdentifier`
  - Pathfinder: `DungeonLocator{ItemRightClickedOnBlock,RightClickedOnEntity,OnEntityTickUpdate}`
  - Miniboss: `MinibossSpawnerUpdateTick`; Drops `CorruptedZombieEntityDies` (von allen sechs Corrupted-Mobs aufgerufen)
  - Bossdrops: `UndeadMageDeath` (gemeinsam für fast alle Oberwelt-Bosse), `AncientGolemStage3Death`, `GiantKingDeath`, `TheOverseerDeath`
  - Schlösser: `InsertKeyOpen` (Boss Room Key), `InsertKeyOpenTreasure`, `InsertKeyOpenbars` (Secret Room Key), `Unlock*Chest`, `UnlockBoneChest`
  - End-Palast: `AllSeeingEyeRightclicked` (nur im End, TP nach 1000/800/50, Struktur `purpur_palace_start`), `HeartOfEnderSpawnerUpdateTick`, `EnderKingEntityDies` (Acid Wand); Ender Heart in `entity/HeartOfEnderEntity.dropCustomDeathLoot`
  - Portal: `StonebrickorbOnBlockRightClicked`, `PortalActivatorOffOnBlockRightClicked` (sucht ±12 Blöcke nach ungefüllten Orb Holdern), `WrdPortalCornerUpdateTick` (TP in Dimension); Feature `world/features/DeeplandsPortalFeature` (400/1.000.000 Chunks, Bedingung `DungeonGenerationCondition`: nicht Ozean, Strand, Plains; **keine** Config-Abfrage)
  - Dimension: `WesleysInfiniteDungeonsPlayerEntersDimension`, `DungeonEntranceOnBlockRightClicked` (Orb of Corruption, Artefakt-Opfer, City of Gold = `IDDungeonType` 7 → `FinalBossPlacer`), `DiffSelect*`, `DungeonSelectorGreatTempleOnBlockRightClicked` (Stufen), `InfiniteDungeonTimeStatueOnBlockRightClicked`, `InfiniteDungeonCoinDepositRightClick` (Gold Grinder), `SacrificialStatueOnBlockRightClicked` + `CurseOfSacrificesOnEffectActiveTick`, `ShopItemPlacerBlockAdded`, `ArtefactSpawnerBlockAdded`, `InfiniteDungeonExitPortalEntityCollidesInTheBlock` (entfernt Dungeon-Items), `InfDungeonEndPlayer` (Zeit abgelaufen), `InfDungeonEnd` (Belohnung nach `DungeonValue`), `FinalBossPhase5EntityDies` (`final_chest`)
  - Spellbook: `MagicSpellbookCreate`; Tränke `recipes/brewing/*`
  - Variablen des Laufs: `network/WrdModVariables$MapVariables` (`IDTimer`, `DungeonValue`, `IDdifficulty`, `IDDungeonType`, Artefakt-Schalter `IDDoubleTime`, `IDExtraGoldDrop`, `IDExtraTraps`, `IDExtraArenas`, `IDExtraSpawners`, `IDMoreGemShops`, `IDFoolsGold`, `IDpillagers`, `IDLockKey`, `IDExtraMods`)

## Progression in Kürze

1. **Vessel of Vision**: 6 Eisen, Blaze Powder, Ender Pearl, Kessel (Varianten: Sand / Wheat Seeds / Snowball / Quartz). Rechtsklick aktivieren, Rechtsklick sucht Ort (normal 5000–10000, Biomvarianten 8000–16000, Nether 1500–3000 Blöcke). Sentient Pathfinder (Eye of Ender, Soul Lantern, Eisen → 2) teleportiert hin.
2. **Oberwelt-Dungeons**: 6 Gruppen × 3 Stockwerke (siehe Tabelle unten). Schlüssel aus Truhen; Corrupted-Miniboss → Bone Chest Key + 2–4 Bleeding Corruption; Boss → Boss Room Key, Treasure Room Key, 2 Diamond Chest Keys, Trophäe. Ancient Bone Chest → 1–2 Orb of the Deep, 1–4 All Seeing Eye, Bleeding Corruption, Trialstone, Corrupted-Ausrüstung.
3. **Purpur-Palast (End)**: All Seeing Eye im End → Palast; Heart Of Ender → Ender Heart.
4. **Portal**: Heart Of The Deceiver (8 Bleeding Corruption + Ender Heart); Portalbaum in der Welt, 8 Orb Holder mit Orbs füllen, Heart Holder mit Heart → Portal.
5. **Infinite Dungeons**: je Lauf ein Orb of Corruption (2 Bleeding Corruption + Ender Pearl); Schwierigkeit (Medium 5, Hard 30, Extreme 60) und Dungeon wählen (Stufen 0/10/30/40/50/60/70/80); Zeit über Time Dust; Gold/Edelsteine im Gold Grinder → Dungeon-Wert → Belohnung aus `forge:*_loot`. City of Gold → The Fallen → The Great Creator → `final_chest` (64× Diamantblock).

| Gruppe | Oben | Mit Boss | Tief |
|---|---|---|---|
| Normal | Prison | Catacombs (Undead Mage) | Necropolis (Necromancer) |
| Wüste | Maze | Mines (Ancient Mummy) | Tomb (The Host) |
| Dschungel | Temple | Ruins (Ancient Golem) | Labyrinth (Ancient Guardian Golem) |
| Eis | Glacier | Frosthold (Heart of Ice) | Tomb of Ice (Ice Mage) |
| Nether | Magma Chambers | The Forge (Doom Pillar) | Fiery Tomb (Doom Golem) |
| Besonders | Illager Archives | Crypt (The Sad King) | Cursed Sepulchres (The Overseer) |

Oben ist eines der beiden ersten Stockwerke (50/50); unter dem bosslosen folgt das Boss-Stockwerk oder gleich das tiefe.

## Schlüsselzahlen

- Goldwerte (Tooltips + Gold Grinder): Small/Medium/Large Gold Pile 10/50/500, Ring 250, Vase 750, Scepter 1500, Necklace 2000, Crown 2500; Gems Blue 3, Green 9, Red 27; Golden Skull 18500 Gold + 250 Gems.
- Time Dust am Time Rock: +150 / +540 / +1500.
- Shop-Preise: 0, 25, 50, 100, 500, 999.
- Corrupted-Tier: Haltbarkeit 2532 (Hoe 2533), Stufe 5, Verzauberbarkeit 22 (Schwert 2). Greatknight-Rüstung: Rüstung 2/6/5/2 (Helm/Brust/Beine/Schuhe), Haltbarkeit 275/400/375/325, Härte 4, Rückstoß 0,1; Krone/Kapuze 242, Verzauberbarkeit 28.
- Zahlen in `InfDungeonEnd` neben `DungeonValue`: 400, 1800, 4000, 30000 sowie die Paare 64000/640, 32000/640, 16000/320, 8000/160, 4000/80 und 40 (Zuordnung zu Mengen nicht ausgelesen).

## Pack-Bezug

- `forge:ok_loot`, `good_loot`, `better_loot`, `super_loot`: nur dieser Mod füllt sie (alle 98 JARs geprüft). Ansatzpunkt, um Belohnungen der Dungeon-Läufe an die Pack-Progression zu hängen (Befund, keine Entscheidung).
- Weltgenerierung: Deep Sand (ersetzt `minecraft:sand`; warm_ocean, lukewarm_ocean, plains, desert; 1/Chunk, Größe 64, Y 0–128), Maulstone (mushroom_fields; 8/Chunk, Größe 30, Y 0–64), Portalbaum (400/1.000.000 Chunks). Natürliche Dungeons per Config aus.
- Keine `forge:`-Material-Tags, keine Rezepte für andere Mods. `minecraft:swords` (11 Waffen), `minecraft:music_discs` (8), `minecraft:water` (Poison, Icewater).
- Belohnungen und Truhen geben Vanilla-Werte frei: Diamantausrüstung, Diamantblöcke, Ancient Debris, Netherite Scrap, Totem of Undying.

## In den Dateien, aber nicht im Spiel

- Sprachdatei hat 13 Item-Schlüssel ohne Registrierung (u. a. `dirty_skeleton`, `necromancer_stage_1`, `undead_mage`).
- Ohne Fundort: `wesleys_infinite_dungeons` (Portal Igniter), `poison_bucket`, `icewater_bucket`, `corrupted_great_sceptre` (Name „E“), 15 Geschoss-Items.
- Namensdoppel: `ice_sword` und `ancient_cutlass` heißen beide „Ancient Cutlass“. `trophy_ag` und `trophy_agu` heißen beide „Ancient Guardian Trophy“ (ag gehört zum Ancient Golem).

## Offen

- Schaden der Waffen und Stäbe, Wirkung der Artefakte, Spellbook-Kombinationen, Verzauberungen und Tränke (Klassen in `item/`, `potion/`, `enchantment/`).
- Staffel der Belohnung nach Dungeon-Wert (`InfDungeonEnd`).
- Wo der erste Boss Room Key eines Dungeons liegt (nur Bosse geben ihn im Code aus).
- Rückweg des Sentient Pathfinder; ob die Vessel verbraucht wird; welche der zwei Stufenangaben bei der Schwierigkeit gilt; wovon Shop-Preise abgezogen werden.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> rld/data.js wrd` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Vessel Of Vision | `wrd:magic_cauldron_active`, `wrd:magic_cauldron` |
| Sandy Vessel Of Vision | `wrd:magic_cauldron_desert`, `wrd:magic_cauldron_desert_active` |
| Lush Vessel Of Vision | `wrd:magic_cauldron_jungle_active`, `wrd:magic_cauldron_jungle` |
| Snowy Vessel Of Vision | `wrd:magic_cauldron_ice_active`, `wrd:magic_cauldron_ice` |
| Quartz Vessel Of Vision | `wrd:magic_cauldron_nether`, `wrd:magic_cauldron_nether_activated` |
| Sentient Pathfinder | `wrd:dungeon_locator_item` |
| Stronghold Chest | `wrd:closed_lost_treasure_chest`, `wrd:end_stronghold_chest`, `wrd:chest_stronghold_normal` |
| Boss Room Lock | `wrd:golden_bricks_keyhole` |
| Stronghold Chest Key | `wrd:keystrongholdchestnormal` |
| Iron Stronghold Chest Key | `wrd:keystrongholdchest_iron` |
| Library Stronghold Chest Key | `wrd:keystrongholdchest_library` |
| Dungeon Stronghold Chest Key | `wrd:keystrongholdchest_dungeon` |
| Golden Stronghold Chest Key | `wrd:keystrongholdchest_gold` |
| Stronghold Treasure Chest Key | `wrd:keystrongholdchest_treasure` |
| Redstone Stronghold Chest Key | `wrd:keystrongholdchest_redstone` |
| Diamond Stronghold Chest Key | `wrd:keystrongholdchest_diamond` |
| Bastion Stronghold Chest Key | `wrd:keystrongholdchest_bastion` |
| Key Bag | `wrd:key_bag` |
| Red Chalk Marker | `wrd:chalk_marker_red` |
| Blue Chalk Marker | `wrd:chalk_marker_blue` |
| Green Chalk Marker | `wrd:chalk_marker_green` |
| Bone Chest Key | `wrd:keystrongholdchest_bonechest` |
| Bleeding Corruption | `wrd:bleeding_corruption` |
| Undead Mage Trophy | `wrd:trophy_um` |
| Boss Room Key | `wrd:key_placeholder` |
| Treasure Room Key | `wrd:treasure_room_key` |
| Secret Room Key | `wrd:secret_room_key` |
| Treasure Room Lock | `wrd:golden_bricks_keyhole_treasure` |
| Doom Pillar | `wrd:doompillar` |
| Ancient Bone Chest | `wrd:bone_chest` |
| Orb Of The Deep | `wrd:orb_of_the_deep` |
| All Seeing Eye | `wrd:all_seeing_eye` |
| Trialstone | `wrd:trial_stone` |
| Corrupted Greatknight Chestplate | `wrd:corrupted_greatarmor_chestplate` |
| Spellbook Special Tome | `wrd:spellbook_special_tome_chaos`, `wrd:spellbook_special_tome_inferno`, `wrd:spellbook_special_tome_nuke`, `wrd:spellbook_special_tome_melting`, `wrd:spellbook_special_tome_flash_freeze` |
| Purpur Stronghold Chest Key | `wrd:pur_pur_key` |
| Ender Heart | `wrd:ender_heart` |
| Acid Wand | `wrd:acid_wand` |
| Heart Of The Deceiver | `wrd:heart_of_the_deceiver` |
| Portal Ring Orb Holder | `wrd:stonebrickorb` |
| Portal Ring Heart Holder | `wrd:portal_activator_off` |
| Dungeon Totempole Top | `wrd:dungeon_entrance` |
| Orb of Corruption | `wrd:orb_of_corruption` |
| Time Rock | `wrd:infinite_dungeon_time_statue` |
| Small Time Dust | `wrd:small_time_dust` |
| Medium Time Dust | `wrd:medium_time_dust` |
| Large Time Dust | `wrd:large_time_dust` |
| Gold Grinder | `wrd:infinite_dungeon_coin_deposit` |
| Golden Skull of Ancients | `wrd:golden_skull` |
| Small Gold Pile | `wrd:small_coin_pile` |
| Medium Gold Pile | `wrd:medium_coin_pile` |
| Large Gold Pile | `wrd:large_coin_pile` |
| Golden Ring | `wrd:golden_ring` |
| Golden Vase | `wrd:golden_vase_b`, `wrd:golden_vase` |
| Golden Scepter | `wrd:golden_staff`, `wrd:golden_scepter_b` |
| Golden Necklace | `wrd:golden_necklace`, `wrd:golden_necklace_b` |
| Golden Crown | `wrd:golden_crown`, `wrd:golden_crown_b` |
| Blue Gems | `wrd:blue_gems` |
| Green Gems | `wrd:green_gems` |
| Red Gems | `wrd:red_gems` |
| Sacrificial Statue | `wrd:sacrificial_statue`, `wrd:sacrificial_statue_active` |
| Protective Amulet | `wrd:protective_amulet` |
| The Great Creator Trophy | `wrd:trophy_fb` |
| Corrupted Greatsword | `wrd:corrupted_greatsword` |
| Corrupted Greataxe | `wrd:corrupted_greataxe` |
| Corrupted Great Pickaxe | `wrd:corrupted_pickaxe` |
| Corrupted Great Shovel | `wrd:corrupted_shovel` |
| Corrupted Great Hoe | `wrd:corrupted_hoe` |
| Corrupted Greatwand | `wrd:corrupted_great_wand` |
| Corrupted Great Scepter | `wrd:corrupted_great_scepter` |
| Ancient Cutlass | `wrd:ice_sword`, `wrd:ancient_cutlass` |
| Sharpened Pickaxe | `wrd:sharpened_pickaxe` |
| Bone Sword | `wrd:bone_sword` |
| Weaponised Torch | `wrd:weaponised_torch` |
| Bamboo Mace | `wrd:bamboo_mace` |
| Coral Sword | `wrd:coral_sword` |
| Stun Baton | `wrd:stun_baton` |
| Ceremony Knife | `wrd:ceremony_knife` |
| Bone Crusher | `wrd:bone_crusher` |
| Ancient Club | `wrd:ancien_club` |
| Emerald Wand | `wrd:emerald_wand` |
| Wand Of The Pharao | `wrd:pharao_wand` |
| Ice Wand | `wrd:ice_wand` |
| Blood Wand | `wrd:blood_wand` |
| Blowpipe | `wrd:blowdart` |
| Death Tome | `wrd:death_tome` |
| Throwable Spear | `wrd:spear` |
| Throwable Ice Spear | `wrd:frostguard_spear`, `wrd:ice_spear` |
| Throwable Bomb | `wrd:throwable_bomb` |
| Throwable Fire Bomb | `wrd:throwable_firebomb` |
| Throwable Ice Bomb | `wrd:throwable_ice_bomb` |
| Throwable Icicle | `wrd:throwable_icicle` |
| Magic Spellbook Enchanter | `wrd:magic_spellbook_enchanter` |
| Magic Spellbook | `wrd:magic_spellbook` |
| Unwritten Magic Spellbook | `wrd:magic_spellbook_item` |
| Spellbook Casting Tome | `wrd:spellbook_casting_tomespray`, `wrd:spellbook_casting_tomebounce`, `wrd:spellbook_casting_tomeinhabit`, `wrd:spellbook_casting_tomepuddle`, `wrd:spellbook_casting_tomeaoi` |
| Spellbook Damage Tome | `wrd:spellbook_damage_tome_poison`, `wrd:spellbook_damage_tome_raw`, `wrd:spellbook_damage_tome_fire`, `wrd:spellbook_damage_tome_ice`, `wrd:spellbook_damage_tome_water` |
| Corrupted Greatknight Helmet | `wrd:corrupted_greatarmor_helmet_helmet` |
| Corrupted Greatknight Leggings | `wrd:corrupted_greatarmor_leggings` |
| Corrupted Greatknight Boots | `wrd:corrupted_greatarmor_boots` |
| Corrupted Greatknight Crown | `wrd:corrupted_great_crown_helmet` |
| Corrupted Greatknight Hood | `wrd:corrupted_great_hood_helmet` |
| Relic Of Souls | `wrd:relic_of_souls` |
| Heart Of Fire | `wrd:heart_of_fire` |
| Skull Of Flame | `wrd:skull_of_flame` |
| Cursed Skull | `wrd:cursed_skull` |
| Special Fish Eggs | `wrd:special_fish_eggs` |
| Poison Bucket | `wrd:poison_bucket` |
| Icewater Bucket | `wrd:icewater_bucket` |
| Deep Sand | `wrd:deepsand` |
| Maulstone | `wrd:maulstone` |

31 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
