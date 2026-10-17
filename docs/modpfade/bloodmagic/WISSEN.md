# Blood Magic – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-14, Minecraft 1.20.1. Alles aus den JARs und der Config der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/LBPGVvAY4w5kV4Mx6KzBjc). Ausführliche Texte und alle Tabellen (Runen, Sigils, Rituale, Living Armour, Meteore) stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Blood Magic | 3.3.8-50 (JAR `BloodMagic-1.18-1.20.1-3.3.8-50.jar`) | `bm=BloodMagic` | `bloodmagic` | Hauptmod |
| Blood-Smeltery | 1.2.1a | `bsm=Blood-Smeltery` | `bloodsmeltery` | Brücke zu Tinkers |
| KubeJS Blood Magic | 1.0.2 | `kjbm="KubeJS Blood"` | – | keine Spielinhalte; KubeJS-Rezeptschemas für `alchemytable`, `altar`, `arc`, `array`, `soulforge` (Klassen `net/cathienova/kubejsbloodmagic/recipes/*RecipeJS`). Meteor- und Flask-Rezepte deckt es nicht ab. |

Curios ist installiert (Sigils, Tartaric Gems, Tome of Peritia als Curio).

## Wo die Quellen liegen

- **Buch „Sanguine Scientiem“** (Patchouli): `assets/bloodmagic/patchouli_books/guide/en_us/{categories,entries}`, 189 Einträge. Kategorien: altar (+ blood_rune), alchemy_table (+ anointments, potion_flasks), alchemy_array (+ functional_arrays, sigil, living_equipment mit armor_upgrades/armour_downgrades), demon_will (+ will_manipulation, demonic_items, item_routing), rituals (+ ritual_list), dungeons, utility. **Die Progression gibt `utility/getting_started` („Tiers & Getting Started“) vor: Altar-Stufe 1–5 = Phasen der Seite.** Lesbar ausgeben mit `tools/PatchouliDump.java`.
- **Rezepte** `data/bloodmagic/recipes/<typ>/`: `alchemytable` (128, Feld `upgradeLevel` = nötige Orb-Stufe, `syphon` = LP), `altar` (23, `upgradeLevel` 0–4 = Altar-Stufe 1–5, `altarSyphon`), `soulforge` (89, `minimumDrain` = Will im Gem nötig, `drain` = verbraucht), `arc` (96, Feld `tool` = Tag `bloodmagic:arc/{cuttingfluid,explosive,resonator,hydrate,reverter}`), `array` (26), `flask` (110), `meteor` (11, davon 5 mit `forge:mod_loaded`), `downgrade` (9), `path`, `smelting`, Werkbank-Rezepte im Hauptordner. Werkbank-Zutat `{orb_tier: N}` = Blood Orb ab Stufe N.
- **Orb-Stufen** (Klasse `wayoftime.bloodmagic.common.item.BloodMagicItems`): Weak 1 (5 000 LP), Apprentice 2 (25 000), Magician 3 (150 000), Master 4 (1 000 000), Archmage 5 (10 000 000).
- **Ritualkosten** in den Klassen `wayoftime.bloodmagic.ritual.types.Ritual*` (Konstruktor `super(name, crystalLevel, activationCost, langKey)`, Methoden `getRefreshCost()`, `getRefreshTime()`; Standard-Takt in `Ritual` = 20). Alle 32 Rituale haben crystalLevel 0 (Weak Activation Crystal). Ausnahme Geode: Werte in der Config (`["Geode Ritual"]`). Ausgelesen per `javap -c -p` und awk über den Konstruktor.
- **Altar-Aufbau** in `wayoftime.bloodmagic.altar.AltarTier` (enum ONE…SIX, `buildComponents(Consumer)`, kumulativ). Ausgelesen, indem die Klasse mit einer Ersatzklasse `net.minecraft.core.BlockPos(int,int,int)` und Guava (`libraries/com/google/guava/guava/31.0.1-jre`) ausgeführt wurde; Klassenpfad unter Windows mit `cygpath -w`. Ergebnis: Stufe 2 = 8 Runen, 3 = 28 Runen + 8 Säulenblöcke + 4 Glowstone, 4 = 56 Runen + 24 Säulen + 4 Glowstone + 4 Bloodstone, 5 = 108 Runen + dieselben Säulen/Kappen + 4 Hellforged Blocks (Typ BEACON); Stufe 6 (Kristalle) im Code, laut Buch nicht umgesetzt. Welche Blöcke als Glowstone/Bloodstone/Beacon zählen, steht im Code, nicht in Tags.
- **Living Armour**: Upgrades und Kosten je Stufe in `data/bloodmagic/living_armor/*.json` (Felder `levels[].xp`, `levels[].cost`); Namen unter `living_upgrade.bloodmagic.*` der Sprachdatei.
- **Demon Realm**: `data/bloodmagic/dimension/dungeon.json`, Strukturen `data/bloodmagic/structures/` (54), Beute `loot_tables/chests/{simple_dungeon,standard_dungeon,mines}`. Tau Fruit in simple_dungeon-Truhen, Foreman's Key nur in `standard_dungeon/mines_key`, Intricate Hellforged Parts nur in `mines/*`. Keine Erzgenerierung in der Overworld, keine eigenen Mobs.
- **Config** `config/bloodmagic-common.toml`: `sacrificialDaggerConversion = 100` (LP je Schadenspunkt, also 200 je Herz), `sacrificialValues` (LP je Lebenspunkt: Villager und Nutztiere 100, Slime 15, Enderman 10), `defaultSacrificeValue = 25`, `default_upgrade_points = 100`, `evolved_upgrade_points = 300`, `makeDungeonRitualCreativeOnly = false`, `[sigil_cost]`, `["Geode Ritual"]`.
- **3D-Modelle**: OBJ für Altar, Alchemy Table, Hellfire Forge, Incense Altar, Demon Crucible/Crystallizer/Pylon; JSON für ARC, Teleposer, Master Ritual Stone, Spike Trap (`tools/renders.txt`, Präfix `bm_`). Routing Nodes werden im Code gezeichnet.

## Progression in Kürze

1. **Stufe 1**: Blood Altar (4 Stein, Furnace, 3 Gold) + Sacrificial Knife (200 LP/Herz) → Weak Blood Orb (Diamant, 2000 LP) → Blank Slate (Stein, 1000 LP), Soul Snare → Alchemy Table (Arcane Ashes, Reagenzien, Erzverdopplung) → Arrays und Sigils (Divination, Water, Lava) → Hellfire Forge (Petty/Lesser Gem, Sentient Tools) → Incense Altar, Lava Crystal.
2. **Stufe 2** (8 Runen): Blank Rune → Dagger of Sacrifice (Iron Sword, 3000), Apprentice Orb (Redstone-Block, 5000), Reinforced Slate (2000) → Runen Speed/Sacrifice/Self Sacrifice → Sigils mit Reinforced Slate → Alchemy Flask (4000) → Anointments.
3. **Stufe 3** (28 Runen, Glowstone-Säulen): Imbued Slate (5000), Magician's Orb (Gold-Block, 25 000) → Inscription Tools (je 1000), Ritual Diviner, Ritual Stones, Master Ritual Stone, Weak Activation Crystal (Lava Crystal, 10 000) → 14 Rituale mit einfachem Diviner → Living Armour (Binding Reagent) → ARC (2 Imbued Slate, Magician's Orb) → Edge of the Hidden Realm (80 000 LP) → Tau → Saturated Tau → Weak Blood Shard → Item Routing, Common Gem.
4. **Stufe 4** (56 Runen, Bloodstone-Kappen aus Weak Blood Shard): Demonic Slate (15 000), Master Orb (Weak Blood Shard, 40 000) → Dusk-Diviner (2000 je Dusk Tool), Ritual Tinkerer → 18 Dusk-Rituale (u. a. Well of Suffering 40 000, Meteor 250 000, Condor 1 000 000) → Will-Aura, Kristalle, Aspekte, Greater Gem → Teleposer → Pathway to the Endless Realm (150 000) → Mines → Demonite, Hellforged.
5. **Stufe 5** (108 Runen, Hellforged Blocks): Ethereal Slate (30 000), Archmage's Orb (Hellforged Block, 80 000) → Reinforced Runes (Netherite Scrap, Intricate Hellforged Parts) → Hellforged-Werkzeuge der ARC.

## Schlüsselzahlen

- Altar-Fassung 10 000 LP, 10 % davon als Zwischentank für Rohre. Slate Ampoule 500 LP. Bucket of Life 1000 LP.
- Tartaric Gems: Petty 64, Lesser 256, Common 1 024, Greater 4 096 Will. Hellfire-Forge-Schwellen: Basis 0–60, Crucible/Pylon/Routing/Catalysts 400, Crystallizer 500, Common Gem 240, Greater Gem 1 000, Kristallcluster/Resonator/Miner's Key 1 200.
- Aura: höchstens 100 Will je Art und Chunk. Crystallizer: erste Spitze 100 Will, weitere 45; Catalyst senkt auf 25 und beschleunigt zehnfach.
- ARC laut Buch: 2,5 Barren je Raw Ore, 4,5 je Erzblock. Erzketten nur für Eisen, Gold, Kupfer, Netherite Scrap, Demonite.
- Incense-Bonus gedeckelt: 20 / 60 / 120 / 200 / 300 % (ohne Pfad, Holz, Stein, Worn Stone, Obsidian).
- Meteore im Pack: Stein, Diamant, Eisenblock, Glowstone je 1 000 000 LP; Bone (Datei `ice_fire`, gilt über `forge:bones`) 250 000; Infused Alloy (Mekanism), LV Wire Coil (IE), Certus Quartz Crystal (AE2) je 500 000.

## Pack-Bezug

- Keine Strom-Brücke, keine Verarbeitung fremder Erze; einzige Anbindung an IE, Mekanism, AE2 über Meteor-Opfergaben. Rezepte nehmen Forge-Tags (`forge:dusts/sulfur`, `forge:gems/diamond`, `forge:ingots/copper` …).
- Harte Voraussetzungen: Nether (Magma Cream für Inscription Tool: Fire, Ghast Tear für Air Tool und Air Reagent, Nether Wart für Catalysts und Anointments), Netherite Scrap für Reinforced Runes. Kein Strom, keine anderen Mods nötig.
- Blood-Smeltery (siehe auch `tinkers/WISSEN.md`): Bloodbrass (Altar: Kupfer + 1500 LP, Stufe 2), Blood-Seared Stone, Tauonic Thread, Will als Flüssigkeit, Modifier Sentience/Divination/Hemoglowin; nur `molten_hellforged` registriert (Bug, `docs/00_MODBASIS.md`). Im Pack entfernt (`kubejs/server_scripts/crossmod/blood_smeltery.js`, in JEI bestätigt 2026-10-17): Life-Essence-Legierungen `bloodsmeltery:smeltery/alloy/life_essence` und `…/life_essence_meat_soup`, Gussrezepte `bloodsmeltery:smeltery/casting/blank_slate`, `…/blank_slate_reusable`, `…/blank_rune`. LP, Slates und Runen kommen also nur vom Altar.
- Ansatzpunkte für KubeJS: Altar-, Alchemy-Table-, Hellfire-Forge-, ARC- und Array-Rezepte über KubeJS Blood Magic; Altar-Stufen-Gates über die Slates (jede Stufe braucht die Slate der Stufe davor), Orb-Zutaten `{orb_tier}` in Werkbank-Rezepten.

## Offen

- Zahl der Ritual Stones je Ritual (Bauplan zeigt das Buch im Spiel; `gatherComponents` nutzt Schleifen, statisches Zählen unzuverlässig — mit derselben Ersatzklassen-Methode wie bei AltarTier auslesbar).
- Erzgewichte der Meteore im Detail, Wirkung des Bounce Array, Werte der Sentient-Waffen, Kosten je Stufe der Living-Armour-Upgrades, Training von Trick Shot, True Strike, Grave Digger.
- Namensabweichungen Buch ↔ Sprachdatei: „Leadened Pick“ (Buch) = „Weakened Pick“ (Sprachdatei), „Repair“ = „Repairing“, „Penance of the Leaden Soul“ = „Penance of the Leadened Soul“. Auf der Seite gilt die Sprachdatei.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> bloodmagic/data.js bloodmagic bloodsmeltery` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Blood Altar | `bloodmagic:altar` |
| Sacrificial Knife | `bloodmagic:sacrificialdagger` |
| Weak Blood Orb | `bloodmagic:weakbloodorb` |
| Apprentice Blood Orb | `bloodmagic:apprenticebloodorb` |
| Magician's Blood Orb | `bloodmagic:magicianbloodorb` |
| Master Blood Orb | `bloodmagic:masterbloodorb` |
| Archmage's Blood Orb | `bloodmagic:archmagebloodorb` |
| Blank Slate | `bloodmagic:blankslate` |
| Soul Snare | `bloodmagic:soulsnare` |
| Bucket of Life | `bloodmagic:life_essence_bucket` |
| Reinforced Slate | `bloodmagic:reinforcedslate` |
| Imbued Slate | `bloodmagic:infusedslate` |
| Demonic Slate | `bloodmagic:demonslate` |
| Ethereal Slate | `bloodmagic:etherealslate` |
| Alchemy Table | `bloodmagic:alchemytable` |
| Arcane Ashes | `bloodmagic:arcaneashes` |
| Plant Oil | `bloodmagic:plantoil` |
| Saltpeter | `bloodmagic:saltpeter` |
| Sulfur | `bloodmagic:sulfur` |
| Gunpowder | `minecraft:gunpowder` |
| Basic Cutting Fluid | `bloodmagic:basiccuttingfluid` |
| Iron Sand | `bloodmagic:ironsand` |
| Gold Sand | `bloodmagic:goldsand` |
| Divination Sigil | `bloodmagic:divinationsigil` |
| Water Reagent | `bloodmagic:reagentwater` |
| Water Sigil | `bloodmagic:watersigil` |
| Lava Reagent | `bloodmagic:reagentlava` |
| Lava Sigil | `bloodmagic:lavasigil` |
| Hellfire Forge | `bloodmagic:soulforge` |
| Demon Will | `bloodmagic:basemonstersoul`, `bloodmagic:basemonstersoul_corrosive`, `bloodmagic:basemonstersoul_destructive`, `bloodmagic:basemonstersoul_steadfast`, `bloodmagic:basemonstersoul_vengeful` |
| Sentient Sword | `bloodmagic:soulsword` |
| Sentient Pickaxe | `bloodmagic:soulpickaxe` |
| Sentient Axe | `bloodmagic:soulaxe` |
| Sentient Shovel | `bloodmagic:soulshovel` |
| Sentient Scythe | `bloodmagic:soulscythe` |
| Iron Throwing Dagger | `bloodmagic:throwing_dagger` |
| Petty Tartaric Gem | `bloodmagic:soulgempetty` |
| Lesser Tartaric Gem | `bloodmagic:soulgemlesser` |
| Common Tartaric Gem | `bloodmagic:soulgemcommon` |
| Greater Tartaric Gem | `bloodmagic:soulgemgreater` |
| Incense Altar | `bloodmagic:incensealtar` |
| Wooden Path | `bloodmagic:woodbrickpath` |
| Stone Path | `bloodmagic:stonebrickpath` |
| Worn Stone Path | `bloodmagic:wornstonebrickpath` |
| Obsidian Path | `bloodmagic:obsidianbrickpath` |
| Lava Crystal | `bloodmagic:lavacrystal` |
| Blank Rune | `bloodmagic:blankrune` |
| Dagger of Sacrifice | `bloodmagic:daggerofsacrifice` |
| Speed Rune | `bloodmagic:speedrune` |
| Rune of Sacrifice | `bloodmagic:sacrificerune` |
| Rune of Self Sacrifice | `bloodmagic:selfsacrificerune` |
| Rune of Capacity | `bloodmagic:altarcapacityrune` |
| Displacement Rune | `bloodmagic:dislocationrune` |
| Rune of Augmented Capacity | `bloodmagic:bettercapacityrune` |
| Acceleration Rune | `bloodmagic:accelerationrune` |
| Charging Rune | `bloodmagic:chargingrune` |
| Rune of the Orb | `bloodmagic:orbcapacityrune` |
| Seer's Sigil | `bloodmagic:seersigil` |
| Air Sigil | `bloodmagic:airsigil` |
| Sigil of the Fast Miner | `bloodmagic:miningsigil` |
| Sigil of the Green Grove | `bloodmagic:growthsigil` |
| Void Sigil | `bloodmagic:voidsigil` |
| Sigil of Holding | `bloodmagic:sigilofholding` |
| Sigil of Magnetism | `bloodmagic:sigilofmagnetism` |
| Sigil of the Frozen Lake | `bloodmagic:icesigil` |
| Sigil of the Blood Lamp | `bloodmagic:bloodlightsigil` |
| Sigil of Suppression | `bloodmagic:sigilofsuppression` |
| Teleposition Sigil | `bloodmagic:telepositionsigil` |
| Alchemy Flask | `bloodmagic:alchemy_flask` |
| Simple Catalyst | `bloodmagic:simplecatalyst` |
| Small Power Catalyst | `bloodmagic:mundanepowercatalyst` |
| Small Lengthening Catalyst | `bloodmagic:mundanelengtheningcatalyst` |
| Combinational Catalyst | `bloodmagic:combinationalcatalyst` |
| Simple Cycling Catalyst | `bloodmagic:cyclingcatalyst` |
| Weak Filling Agent | `bloodmagic:weakfillingagent` |
| Standard Power Catalyst | `bloodmagic:averagepowercatalyst` |
| Standard Lengthening Catalyst | `bloodmagic:averagelengtheningcatalyst` |
| Slate-infused Vial | `bloodmagic:slate_vial` |
| Honing Oil | `bloodmagic:melee_anointment` |
| Holy Water | `bloodmagic:holy_water_anointment` |
| Fortuna Extract | `bloodmagic:fortune_anointment` |
| Soft Coating | `bloodmagic:silk_touch_anointment` |
| Slow-burning Oil | `bloodmagic:smelting_anointment` |
| Void Essence | `bloodmagic:voiding_anointment` |
| Plunderer's Glint | `bloodmagic:looting_anointment` |
| Miner's Secrets | `bloodmagic:hidden_knowledge_anointment` |
| Repairing Salve | `bloodmagic:weapon_repair_anointment` |
| Archer's Polish | `bloodmagic:bow_velocity_anointment` |
| Iron Tip | `bloodmagic:bow_power_anointment` |
| Dexterity Alkahest | `bloodmagic:quick_draw_anointment` |
| Master Ritual Stone | `bloodmagic:masterritualstone` |
| Inscription Tool: Water | `bloodmagic:waterscribetool` |
| Inscription Tool: Fire | `bloodmagic:firescribetool` |
| Inscription Tool: Earth | `bloodmagic:earthscribetool` |
| Inscription Tool: Air | `bloodmagic:airscribetool` |
| Ritual Diviner | `bloodmagic:ritualdiviner` |
| Ritual Stone | `bloodmagic:ritualstone` |
| Weak Activation Crystal | `bloodmagic:activationcrystalweak` |
| Binding Reagent | `bloodmagic:reagentbinding` |
| Living Helmet | `bloodmagic:livinghelmet` |
| Living Chestplate | `bloodmagic:livingplate` |
| Living Leggings | `bloodmagic:livingleggings` |
| Living Boots | `bloodmagic:livingboots` |
| Living Armour Training Bracelet | `bloodmagic:upgradetrainer` |
| Living Armour Upgrade Tome | `bloodmagic:upgradetome` |
| Elytra | `minecraft:elytra` |
| Alchemical Reaction Chamber | `bloodmagic:alchemicalreactionchamber` |
| Explosive Powder | `bloodmagic:explosivepowder` |
| Crystal Resonator | `bloodmagic:resonator` |
| Primitive Hydration Cell | `bloodmagic:primitive_hydration_cell` |
| Primitive Fuel Cell | `bloodmagic:furnacecell_primitive` |
| Sanguine Reverter | `bloodmagic:sanguinereverter` |
| Corrupted Dust | `bloodmagic:corrupted_dust` |
| Iron Key | `bloodmagic:simplekey` |
| Tau Fruit | `bloodmagic:weak_tau` |
| Saturated Tau | `bloodmagic:strong_tau` |
| Tau Oil | `bloodmagic:tauoil` |
| Weak Blood Shard | `bloodmagic:weakbloodshard` |
| Master Routing Node | `bloodmagic:masterroutingnode` |
| Routing Node | `bloodmagic:itemroutingnode` |
| Input Routing Node | `bloodmagic:inputroutingnode` |
| Output Routing Node | `bloodmagic:outputroutingnode` |
| Node Router | `bloodmagic:noderouter` |
| Filter Parts | `bloodmagic:componentframeparts` |
| Standard Item Filter | `bloodmagic:itemrouterfilterexact` |
| Tag Item Filter | `bloodmagic:itemrouterfilteroredict` |
| Mod Item Filter | `bloodmagic:itemrouterfiltermoditems` |
| Enchantments Item Filter | `bloodmagic:itemrouterfilterenchant` |
| Composite Item Filter | `bloodmagic:itemrouterfiltercomposite` |
| Basic Routing Logic Upgrade | `bloodmagic:mastercore` |
| Basic Routing Speed Upgrade | `bloodmagic:mastercorespeed` |
| Large Bloodstone Brick | `bloodmagic:largebloodstonebrick` |
| Inscription Tool: Dusk | `bloodmagic:duskscribetool` |
| Ritual Diviner [Dusk] | `bloodmagic:ritualdivinerdusk` |
| Ritual Tinkerer | `bloodmagic:ritualtinkerer` |
| Demon Crucible | `bloodmagic:demoncrucible` |
| Demon Crystallizer | `bloodmagic:demoncrystallizer` |
| Demon Pylon | `bloodmagic:demonpylon` |
| Demon Will Aura Gauge | `bloodmagic:demonwillgauge` |
| Demon Will Crystal | `bloodmagic:defaultcrystal` |
| Corrosive Will Crystal | `bloodmagic:corrosivecrystal` |
| Destructive Will Crystal | `bloodmagic:destructivecrystal` |
| Vengeful Will Crystal | `bloodmagic:vengefulcrystal` |
| Steadfast Will Crystal | `bloodmagic:steadfastcrystal` |
| Raw Will Catalyst | `bloodmagic:rawcatalyst` |
| Teleposer | `bloodmagic:teleposer` |
| Teleposition Focus | `bloodmagic:teleposerfocus` |
| Enhanced Teleposition Focus | `bloodmagic:enhancedteleposerfocus` |
| Reinforced Teleposition Focus | `bloodmagic:reinforcedteleposerfocus` |
| Block of Iron | `minecraft:iron_block` |
| Glowstone Dust | `minecraft:glowstone_dust` |
| Bone | `minecraft:bone` |
| Infused Alloy | `mekanism:alloy_infused` |
| LV Wire Coil | `immersiveengineering:wirecoil_copper` |
| Foreman's Key | `bloodmagic:mineentrancekey` |
| Miner's Key | `bloodmagic:minekey` |
| Demonite | `bloodmagic:dungeon_ore` |
| Hellforged Ingot | `bloodmagic:ingot_hellforged` |
| Hellforged Sand | `bloodmagic:sand_hellforged` |
| Hellforged Block | `bloodmagic:dungeon_metal` |
| Intricate Hellforged Parts | `bloodmagic:hellforgedparts` |
| Reinforced Speed Rune | `bloodmagic:speedrune2` |
| Hellforged Resonator | `bloodmagic:hellforged_resonator` |
| Advanced Cutting Fluid | `bloodmagic:advancedcuttingfluid` |
| Hellforged Explosive Cell | `bloodmagic:hellforged_explosive_cell` |
| Ethereal Mimic | `bloodmagic:ethereal_mimic` |
| Shaped Charge | `bloodmagic:shaped_charge` |
| Augmented Shaped Charge | `bloodmagic:aug_shaped_charge` |
| Tunneling Shaped Charge | `bloodmagic:shaped_charge_deep` |
| Deforester Charge | `bloodmagic:deforester_charge` |
| Deforester Charge II | `bloodmagic:deforester_charge_2` |
| Controlled Charge | `bloodmagic:veinmine_charge` |
| Controlled Charge II | `bloodmagic:veinmine_charge_2` |
| Fungal Charge | `bloodmagic:fungal_charge` |
| Fungal Charge II | `bloodmagic:fungal_charge_2` |
| Tome of Peritia | `bloodmagic:experiencebook` |
| Syringe Throwing Dagger | `bloodmagic:throwing_dagger_syringe` |
| Slate Ampoule | `bloodmagic:slate_ampoule` |
| Amethyst Throwing Dagger | `bloodmagic:amethystthrowingdagger` |
| Synthetic Upgrade Point | `bloodmagic:syntheticpoint` |
| Hellforged Record | `bloodmagic:bleedingedge` |
| Demon Stone | `bloodmagic:dungeon_stone` |
| Demon Eye | `bloodmagic:dungeon_eye` |
| Demon Emitter | `bloodmagic:dungeon_emitter` |
| Demon Alternator | `bloodmagic:dungeon_alternator` |
| Demon Spike Trap | `bloodmagic:dungeon_spike_trap` |
| Bloodbrass Ingot | `bloodsmeltery:bloodbrass_ingot` |
| Tauonic Thread | `bloodsmeltery:tauonic_thread` |

66 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
