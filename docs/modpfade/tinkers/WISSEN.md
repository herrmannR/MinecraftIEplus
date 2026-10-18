# Tinkers' Construct – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-14, Minecraft 1.20.1. Alles aus den JARs der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/TYsNjvC9iqYNyAMW8Dy78y). Ausführliche Texte stehen in `data.js`, die Modifier vollständig in `modifiers.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Tinkers' Construct | 3.12.1.231 | `tc=TConstruct` | `tconstruct` | Hauptmod |
| TCIntegrations | 2.0.25.19 | `tci=TCIntegrations` | `tcintegrations` | Addon, Modifier und Materialien für andere Mods |
| Tinkers Levelling Addon | 1.4.3 | `tla=TinkersLevelling` | `tinkerslevellingaddon` | Addon, Modifier Improvable |
| Blood-Smeltery | 1.2.1a | `bsm=Blood-Smeltery` | `bloodsmeltery` | Brücke zu Blood Magic |
| Ad Astra: Giselle Addon | 6.27 | `giselle=Giselle` | `ad_astra_giselle_addon` | Brücke, siehe unten |

## Wo die Quellen liegen

- **Bücher** `assets/tconstruct/book/<buch>/` mit `index.json`, `sections/` und `en_us/`; Bilder unter `book/images/`. Reihenfolge der Bücher = Phasen der Seite: `materials_and_you` → `puny_smelting` → `mighty_smelting` → `fantastic_foundry` → `tinkers_gadgetry` / `encyclopedia`.
- **Titel der Bücher** (für Questtexte): Abschnittsnamen in `book/<buch>/en_us/language.lang`, Eintragsnamen (intern) in `book/<buch>/sections/*.json`; nur Fantastic Foundry und Encyclopedia haben zusätzlich `en_us/<abschnitt>/*.json`. Weiterführende Bücher: Materials and You → Further Reading (Puny Smelting, Fantastic Foundry, Gadgetry), Puny Smelting → Further Reading (Mighty Smelting, Encyclopedia).
- **Strukturen** der Bücher: `assets/tconstruct/book/structures/smeltery.nbt`, `foundry.nbt` (nicht unter `data/`).
- **Rezepte** `data/tconstruct/recipes/` (rund 3060). Typen: `tconstruct:melting`, `ore_melting`, `casting_table`, `casting_basin`, `material`, `material_fluid`, `item_part_builder`, `modifier`, `modifier_salvage`, Legierungen `tconstruct:alloy`. 941 Rezepte hängen an `mantle:tag_filled` (Fremdmetalle, nur aktiv, wenn der Tag im Pack gefüllt ist).
- **Materialien** `data/tconstruct/tinkering/materials/` (Definition, Stats, Traits).
- **Modifier-Rezepte** auswerten mit `tools/ModifierDump.java` (schreibt `tinkers/modifiers.js`). TCIntegrations: `data/tcintegrations/recipes/`, 306 Rezepte mit `forge:mod_loaded`.
- **Levelling Addon** hat nur 2 Rezepte; Mechanik aus Sprachdatei und Tooltip-Texten.

## Progression in Kürze

1. **Holz und Stein** (Materials and You): Pattern (2 Planks + 2 Sticks → 6) → Part Builder, Tinker Station (max. 3 Teile), Crafting Station. Material Stufe 1 ohne Schmelze: Wood, Rock, Flint, Bone, Copper (einziges Metall ohne Schmelze), Bamboo, Cactus. Traveler's Gear: beliebiges Plattenmetall + Cuirass-Material.
2. **Grout und Melter** (Puny Smelting): Grout (Clay + Sand + Gravel → 2) → Seared Brick. Melter 5 Brick + Gauge, Heater 8 Brick (800 °C), Lava-Tank 1000 °C. Gold Cast = 1 Barren Gold. Modifier Worktable. Erz im Melter: 1 Barren + 3 Nuggets.
3. **Smeltery** (Mighty Smelting, entsteht durch Seared Stone über ein Buch): Controller = 360 mB Kupfer im Basin über Seared Bricks; kleinste Form 3×3×2 innen, ~30 Blöcke Bricks, keine Ecken nötig. Legieren. Anvil = 3 Blöcke Legierung (27 Barren) über 4 Seared Blocks → Werkzeuge mit 4 Teilen.
4. **Nether** (Fantastic Foundry): Nether Grout (Magma Cream + Soul Sand/Soil + Gravel) → Scorched Brick. Alloyer (Einzelblock). Foundry: Controller = 1000 mB Molten Obsidian über Scorched Bricks, geschlossener Rahmen mit Ecken, legiert nicht, gibt Nebenprodukte (Kupfer→Gold, Cobalt→Eisen, Eisen→Stahl). Blazing Blood 1500 °C.
5. **Ausbau** (Gadgetry, Encyclopedia): alle Modifier, Slime-Rüstung, Staffs, Ancient Tools (nur Fund), Levelling.

## Schlüsselzahlen

- 1 Barren = 90 mB, Nugget 10 mB, Block 810 mB. Fremderze in der Schmelze: 1⅓ Barren je Erz.
- Brennstoff: Heater 800 °C, Lava 1000 °C, Blazing Blood 1500 °C.
- Legierungen (Ab-Temperatur): Rose Gold 550, Pewter 400*, Bronze 700, Electrum 760, Pig Iron 811, Amethyst Bronze 820, Slimesteel 900, Invar 900*, Constantan 920, Molten Obsidian 1000 | über Lava: Cinderslime 1050, Nicrosil 1100*, Knightslime 1125, Queen's Slime 1150, Manyullyn 1200, Netherite 1250, Hepatizon 1400, Refined Obsidian 1475. (* nur mit Config-Schalter, kein eigener Barren im Pack)
- Smeltery/Foundry innen bis 14×14×64.
- Cobalt Ore: Nether, am häufigsten Höhe 8–32.

## Pack-Bezug

- Aktiv durch IE/Mekanism ohne unser Zutun: Aluminum, Lead, Silver, Constantan, Electrum, Steel, Osmium, Bronze, Refined Obsidian, Refined Glowstone, Necronium (Uran), Treated Wood (Creosote). Nicht aktiv (Barren fehlt): Brass, Plated Slimewood, Platinum, Tungsten, Ironwood, Steeleaf, Fiery.
- Stahl ohne IE: Steel Shards (Skyslimes, Geoden) und Foundry-Nebenprodukt aus Eisenerz. Siehe `CROSSMOD_AUFFAELLIGKEITEN.md` Ü1, Ü2.
- TCIntegrations im Pack wirksam für Botania (Livingwood, Livingrock, Manasteel, Mana Infused String, Modifier aus Terrasteel/Elementium/MythicBotany) und Ad Astra (Desh, Ostrum, Calorite mit Trait Oxygenated). Rezepte für nicht installierte Mods (Create, Twilight Forest, Ars Nouveau …) sind ausgelassen.
- Giselle Addon: 4 Tinkers-Modifier unter `data/ad_astra_giselle_addon/recipes/compat/tconstruct/modifiers/` (`space_breathing`, `space_fire_proof`, `acid_rain_proof`, `gravity_normalizing`); beschrieben auf der Ad-Astra-Seite.
- Blood-Smeltery 1.2.1a teilweise defekt (nur eine von fünf Demonite-Flüssigkeiten registriert), Details in `docs/00_MODBASIS.md`.

## Offen

- Wirkung von Glowball, EFLN, Punji Sticks nicht ausgelesen.
- Trait-Wirkungen der Materialien stehen nicht auf der Seite (nur Namen aus den Materialdaten).

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> tinkers/data.js tconstruct tcintegrations` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Pattern | `tconstruct:pattern` |
| Part Builder | `tconstruct:part_builder` |
| Tinker Station | `tconstruct:tinker_station` |
| Crafting Station | `tconstruct:crafting_station` |
| Part Chest | `tconstruct:part_chest` |
| Tinker's Chest | `tconstruct:tinkers_chest` |
| Materials and You | `tconstruct:materials_and_you` |
| Pickaxe | `tconstruct:pickaxe` |
| Hand Axe | `tconstruct:hand_axe` |
| Mattock | `tconstruct:mattock` |
| Pickadze | `tconstruct:pickadze` |
| Kama | `tconstruct:kama` |
| Sword | `tconstruct:sword` |
| Dagger | `tconstruct:dagger` |
| Crossbow | `tconstruct:crossbow` |
| Fishing Rod | `tconstruct:fishing_rod` |
| Arrow | `tconstruct:arrow` |
| Shuriken | `tconstruct:shuriken` |
| Throwing Axe | `tconstruct:throwing_axe` |
| Flint and Brick | `tconstruct:flint_and_brick` |
| Repair Kit | `tconstruct:repair_kit` |
| Traveler's Goggles | `tconstruct:travelers_helmet` |
| Traveler's Vest | `tconstruct:travelers_chestplate` |
| Traveler's Pants | `tconstruct:travelers_leggings` |
| Traveler's Boots | `tconstruct:travelers_boots` |
| Traveler's Shield | `tconstruct:travelers_shield` |
| Grout | `tconstruct:grout` |
| Seared Brick | `tconstruct:seared_brick` |
| Seared Bricks | `tconstruct:seared_bricks` |
| Seared Stone | `tconstruct:seared_stone_fluid`, `tconstruct:seared_stone` |
| Seared Melter | `tconstruct:seared_melter` |
| Seared Heater | `tconstruct:seared_heater` |
| Seared Fuel Gauge | `tconstruct:seared_fuel_gauge` |
| Seared Fuel Tank | `tconstruct:seared_fuel_tank` |
| Puny Smelting | `tconstruct:puny_smelting` |
| Seared Faucet | `tconstruct:seared_faucet` |
| Seared Casting Table | `tconstruct:seared_table` |
| Seared Casting Basin | `tconstruct:seared_basin` |
| Seared Channel | `tconstruct:seared_channel` |
| Blank Sand Cast | `tconstruct:blank_sand_cast` |
| Ingot Gold Cast | `tconstruct:ingot_cast` |
| Copper Can | `tconstruct:copper_can` |
| Casting Tank | `tconstruct:seared_casting_tank` |
| Cast Chest | `tconstruct:cast_chest` |
| Scorched Stone | `tconstruct:scorched_stone_fluid`, `tconstruct:scorched_stone` |
| Necrotic Bone | `tconstruct:necrotic_bone` |
| Venombone | `tconstruct:venombone` |
| Earthslime | `tconstruct:earth_slime_fluid` |
| Skyslime | `tconstruct:sky_slime_fluid` |
| Honey | `tconstruct:honey_fluid` |
| Venom | `tconstruct:venom_fluid` |
| Modifier Worktable | `tconstruct:modifier_worktable` |
| Modifier Crystal | `tconstruct:modifier_crystal` |
| Smeltery Controller | `tconstruct:smeltery_controller` |
| Seared Drain | `tconstruct:seared_drain` |
| Seared Duct | `tconstruct:seared_duct` |
| Seared Chute | `tconstruct:seared_chute` |
| Seared Ingot Tank | `tconstruct:seared_ingot_tank` |
| Seared Glass | `tconstruct:seared_glass` |
| Seared Ladder | `tconstruct:seared_ladder` |
| Mighty Smelting | `tconstruct:mighty_smelting` |
| Molten Obsidian | `tconstruct:molten_obsidian_fluid` |
| Skyslime Ball | `tconstruct:sky_slime_ball` |
| Ichor Ball | `tconstruct:ichor_slime_ball` |
| Enderslime Ball | `tconstruct:ender_slime_ball` |
| Skyslime Crystal | `tconstruct:sky_slime_crystal` |
| Steel Shard | `tconstruct:steel_shard` |
| Knightmetal Shard | `tconstruct:knightmetal_shard` |
| Skyslime Seeds | `tconstruct:sky_slime_grass_seeds` |
| Magma | `tconstruct:magma_fluid` |
| Tinker's Anvil | `tconstruct:tinkers_anvil`, `tconstruct:scorched_anvil` |
| Sledge Hammer | `tconstruct:sledge_hammer` |
| Vein Hammer | `tconstruct:vein_hammer` |
| Excavator | `tconstruct:excavator` |
| Broad Axe | `tconstruct:broad_axe` |
| Scythe | `tconstruct:scythe` |
| Cleaver | `tconstruct:cleaver` |
| Longbow | `tconstruct:longbow` |
| Javelin | `tconstruct:javelin` |
| Maille | `tconstruct:maille` |
| Plate Shield | `tconstruct:plate_shield` |
| Nether Grout | `tconstruct:nether_grout` |
| Scorched Brick | `tconstruct:scorched_brick` |
| Scorched Bricks | `tconstruct:scorched_bricks` |
| Fantastic Foundry | `tconstruct:fantastic_foundry` |
| Scorched Alloyer | `tconstruct:scorched_alloyer` |
| Scorched Tinker Tank | `tconstruct:scorched_proxy_tank` |
| Foundry Controller | `tconstruct:foundry_controller` |
| Refined Obsidian | `mekanism:block_refined_obsidian` |
| Blazing Bone | `tconstruct:blazing_bone` |
| Blazewood | `tconstruct:blazewood` |
| Enderslime | `tconstruct:ender_slime_fluid` |
| Dragon Scale | `tconstruct:dragon_scale` |
| Slimeskull | `tconstruct:slime_helmet` |
| Slimecage | `tconstruct:slimy_chestplate` |
| Slimeshell | `tconstruct:slime_leggings` |
| Slimeboots | `tconstruct:slime_boots` |
| Slimelytra | `tconstruct:slime_wings` |
| Skyslime Staff | `tconstruct:sky_staff` |
| Earthslime Staff | `tconstruct:earth_staff` |
| Ichor Staff | `tconstruct:ichor_staff` |
| Enderslime Staff | `tconstruct:ender_staff` |
| Tinker's Gadgetry | `tconstruct:tinkers_gadgetry` |
| Melting Pan | `tconstruct:melting_pan` |
| War Pick | `tconstruct:war_pick` |
| Battlesign | `tconstruct:battlesign` |
| Swasher | `tconstruct:swasher` |
| Minotaur Axe | `tconstruct:minotaur_axe` |
| Piggybackpack | `tconstruct:piggy_backpack` |
| Clear Item Frame | `tconstruct:clear_item_frame` |
| Bone Armor Stand | `tconstruct:bone_armor_stand` |
| EFLN | `tconstruct:efln_ball` |
| Glowball | `tconstruct:glow_ball` |
| Punji Sticks | `tconstruct:punji` |
| Skyslime Cake | `tconstruct:sky_cake` |
| Bacon | `tconstruct:bacon` |
| Copper Fluid Cannon | `tconstruct:seared_fluid_cannon` |
| Cobalt Fluid Cannon | `tconstruct:scorched_fluid_cannon` |
| Knightmetal Fluid Cannon | `tconstruct:end_fluid_cannon` |
| Seared Lantern | `tconstruct:seared_lantern` |
| Seared Lamp | `tconstruct:seared_lamp` |
| Clear Glass | `tconstruct:clear_glass` |
| Soul Glass | `tconstruct:soul_glass` |
| Tinted Clear Glass | `tconstruct:clear_tinted_glass` |
| Gold Bars | `tconstruct:gold_bars` |
| Gold Platform | `tconstruct:gold_platform` |
| Congealed Skyslime Block | `tconstruct:sky_congealed_slime` |
| Skyroot Planks | `tconstruct:skyroot_planks` |
| Cheese | `tconstruct:cheese_ingot` |
| Livingwood | `botania:livingwood` |
| Livingrock | `botania:livingrock` |
| Mana Infused String | `botania:mana_string` |

101 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.

Nachgetragen 2026-10-18 (Questtexte, gegen Sprachdateien geprüft):

| Name | ID |
|---|---|
| Pickaxe Head / Gold Cast | `tconstruct:pick_head`, `tconstruct:pick_head_cast` |
| Slimesteel, Rose Gold, Pig Iron, Amethyst Bronze | `tconstruct:slimesteel_ingot`, `tconstruct:rose_gold_ingot`, `tconstruct:pig_iron_ingot`, `tconstruct:amethyst_bronze_ingot` |
| Manyullyn, Hepatizon, Queen's Slime, Knightslime, Cinderslime | `tconstruct:manyullyn_ingot`, `tconstruct:hepatizon_ingot`, `tconstruct:queens_slime_ingot`, `tconstruct:knightslime_ingot`, `tconstruct:cinderslime_ingot` |
| Cobalt | `tconstruct:cobalt_ore`, `tconstruct:raw_cobalt`, `tconstruct:cobalt_ingot` |
| Plate Armor | `tconstruct:plate_helmet`, `tconstruct:plate_chestplate`, `tconstruct:plate_leggings`, `tconstruct:plate_boots` |
| Encyclopedia of Tinkering | `tconstruct:encyclopedia` |
| Blazing Blood (Flüssigkeit) | `tconstruct:blazing_blood` |
| Molten Desh, Ostrum, Calorite (Flüssigkeit) | `tcintegrations:molten_desh`, `tcintegrations:molten_ostrum`, `tcintegrations:molten_calorite` |
| Demon Will, Bloodbrass, Blood-Seared Stone (Flüssigkeit) | `bloodsmeltery:demon_will`, `bloodsmeltery:molten_bloodbrass`, `bloodsmeltery:blood_seared_stone` |
