# Applied Energistics 2 – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-15, Minecraft 1.20.1. Alles aus den JARs und `config/ae2/common.json` der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/EGPb1ZNHD7gCtHSELecFhN). Ausführliche Texte stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Applied Energistics 2 | 15.4.11 | `ae2=appliedenergistics2` | `ae2` | Hauptmod |
| AE2 Wireless Terminals | 15.3.3 | `wt=ae2wtlib` | `ae2wtlib` | Addon |
| Applied Mekanistics | 1.4.3 | `amek=Applied-Mekanistics` | `appmek` | Brücke Mekanism |
| Applied Botanics | 1.5.2 | `abot=applied-botanics` | `appbot` | Brücke Botania |
| More Immersive Wires | 1.1.4 | `miw=more-immersive-wires` | `more_immersive_wires` | Brücke IE |

## Wo die Quellen liegen

- **Buch**: GuideME-Handbuch als Markdown in `assets/ae2/ae2guide/` (119 Seiten). Frontmatter `navigation:` mit `title`, `parent`, `position`, `item_ids`. Progression steht in `getting-started.md`; Kapitel `ae2-mechanics/`, `items-blocks-machines/` (eine Seite je Item-Gruppe), `example-setups/` (Beispielanlagen, nicht auf der Seite).
- **Billig auslesen** (so wurde die Seite gebaut, ohne Dateien einzeln zu öffnen):
  - Inhaltsverzeichnis: awk über alle `.md`, je Datei Pfad, `parent`, `title`, `position`, `item_ids` in einer Zeile.
  - Seitentext ohne Markup: `awk '/^<GameScene/{s=1} s&&/<\/GameScene>/{s=0;next} !s' <datei> | sed '1,/^---$/d' | grep -v -E '^\s*<|^\s*$'` und `<ItemLink id="x"/>` → `x`.
  - Zahlen: dasselbe mit `grep -E '[0-9]'`.
- **Rezepte**: `data/ae2/recipes/` (487), Ordner `inscriber`, `charger`, `transform` (Wurf in Wasser bzw. Explosion), `network/{blocks,cables,cells,crafting,parts}`, `materials` (Karten, Cores), `tools`, `matter_cannon` (68 Munitionsrezepte), `entropy`, `block_cutter`, `decorative`. RecipeDump-Ausgabe für `network/cables` ist zu 80 % Farbvarianten; beim Filtern `network/cables/<art>_<farbe>$` ausschließen.
- **Rezepttypen**: `ae2:inscriber` (mode `inscribe` = Presse bleibt, `press` = alle drei Slots verbraucht), `ae2:charger`, `ae2:transform` (circumstance `#minecraft:water` oder `explosion`), `ae2:entropy`, `ae2:matter_cannon`; AE2WTLib `ae2wtlib:combine`, `ae2wtlib:upgrade`.
- **Tags**: `data/ae2/tags/items/` – `all_certus_quartz`, `all_fluix`, `all_nether_quartz`, `all_quartz_dust`, `metal_ingots` (Kupfer, Zinn, Eisen, Gold, Messing, Nickel, Aluminium), `p2p_attunements/*` (je Tunnel die Abstimm-Items), `knife`, `quartz_wrench`. Forge-Tags in `data/forge/tags/items/` (silicon, gems, dusts …). Addons: `appmek/tags/items/p2p_attunements/chemical_p2p_tunnel` (Mekanism Chemical Tanks), `appbot/…/mana_p2p_tunnel` (`#botania:petals`, `#botania:mana_dusts`).
- **Worldgen**: `worldgen/structure_set/meteorite.json` (random_spread, spacing 32, separation 8), Biome-Tag `#ae2:has_meteorites` = `#minecraft:is_overworld`.
- **Config**: `config/ae2/common.json` der Instanz: `channels: default`, `spawnPressesInMeteorites: true`, `CrystalResonanceGeneratorRate: 20`, `p2pTunnelEnergyTax: 0.025`, Vibration Chamber 10–40 AE/t.
- **Bilder**: nur flache Texturen (Vorgabe des Users: keine gezeichneten 3D-Modelle). Kabelteile (Terminals, Busse, Kabel, P2P, Monitore) liegen unter `textures/part/` und sind für `mkicons` nicht zulässig → `null`. Drive: `block/drive/drive_front`, ME Chest: `block/chest/front`.

## Progression in Kürze

1. **Meteorit und Certus**: Meteorite Compass (Compass im Charger) → Meteorit mit Mysterious Cube (4 Pressen), Budding Certus. Charger + Wooden Crank. Growth Accelerator ist erste Priorität. Fluix = Charged Certus + Redstone + Nether Quartz in Wasser.
2. **Inscriber und Prozessoren**: Inscriber (Eisen, Sticky Piston, Kupfer). Gold/Certus/Diamant/Silicon → Printed Circuits → Logic/Calculation/Engineering Processor. Presse + Eisenblock = Pressenkopie. Formation und Annihilation Core.
3. **Erstes ME-System**: Energy Acceptor (2 FE = 1 AE), Kabel, Zellen (Housing + Component), ME Drive (2 Engineering Processor), Terminal.
4. **Netz ausbauen**: Busse, Interface, Level Emitter; ab 9 Geräten ME Controller (Sky Stone Block, Fluix, Engineering Processor); Upgrade Cards, Cell Workbench.
5. **Autocrafting**: Blank Pattern, Pattern Encoding Terminal, Pattern Provider, Molecular Assembler, Crafting CPU.
6. **Kabellos und Entfernung**: Fluix Pearl → Wireless Receiver → Access Point, Wireless Terminals (AE2WTLib: Pattern-Terminals, Universal Terminal, Quantum Bridge Card, Magnet Card); P2P Tunnels; Quantum Bridge (Singularity aus Matter Condenser, Explosion mit Ender Dust); Spatial IO.

Tor des ganzen Mods: der **Meteorit** (Pressen und Flawless Budding Certus). Weil eine Presse mit Eisenblock kopiert werden kann, braucht man für die Pressen nur einen Meteoriten (abgeleitet aus den Inscriber-Rezepten).

## Schlüsselzahlen

- Kanäle: 8 je normalem Kabel und ad hoc, 32 je Dense Cable, Controller-Seite, ME P2P und Quantum Bridge. Controller max. 7×7×7, 6 AE/t und 8000 AE Speicher je Block.
- Energie: 2 FE = 1 AE; 25 AE Puffer je Teil; Energy Cell 200k AE, Dense 1,6M AE; Vibration Chamber 40 AE/t; Crystal Resonance Generator 20 AE/t; Kanal 1/128 AE/t je Knoten.
- Zellen: 1k/4k/16k/64k/256k Bytes = 1.024/4.096/16.384/65.536/262.144; 8 Items = 1 Byte; 63 Sorten (Fluid 5); Component = 3× Vorstufe.
- Matter Ball 256 Items, Singularity 256.000 Items (mind. 64k Component im Condenser).
- Charged Staff 6 Schaden, 300 AE; Matter Cannon 1600 AE je Schuss, Matter Ball 2 Schaden, Goldnugget 10; Sky Stone Tank 16 Eimer.

## Pack-Bezug

- Meteoriten nur in der Oberwelt. Sky Stone auch über Ad Astra (5 Moon Stone + 4 Mars Stone, siehe `adastra/WISSEN.md`), Budding Quartz über Blood Magic Mark of the Falling Tower mit Certus (siehe `bloodmagic/WISSEN.md`). Mekanism bringt eigene Rezepte für AE2-Material (Crossmod M7).
- Einhakpunkte für KubeJS (Befund, keine Entscheidung): Pressen (`ae2:inscriber`, Presse + Eisenblock), Prozessor-Rezepte (Gold, Diamant), ME Drive und Controller (Engineering Processor = Diamant), Energy Acceptor (FE-Eingang), Zellen-Housing (Eisen bzw. Kupfer).
- Applied Mekanistics: Housing braucht 3 Osmium Ingot. Applied Botanics: Housing braucht Life Essence (nach Gaia) und Manasteel. More Immersive Wires: Spulen brauchen IE-Aluminiumdraht (`#forge:wires/aluminum`); Rezepte mit Bedingung `mod_loaded ae2`.

## Offen

- Reichweite und Verbrauch je Wireless Booster, Brennstoffwerte der Vibration Chamber, Aufbau und Energiebedarf von Spatial IO: stehen in `items-blocks-machines/wireless_access_point.md`, `vibration_chamber.md`, `ae2-mechanics/spatial-io.md` bzw. in `common.json`, nicht ausgelesen.
- Funktion von Color Applicator, Magnet Card (nur Sprachdatei) und Fluix Mana Pool (Applied Botanics, nur Rezept).
- Beispielanlagen (`example-setups/`) nicht übernommen.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> ae2/data.js ae2 ae2wtlib appmek appbot more_immersive_wires` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Meteorite Compass | `ae2:meteorite_compass` |
| Mysterious Cube | `ae2:mysterious_cube` |
| Sky Stone | `ae2:sky_stone_block` |
| Certus Quartz Cluster | `ae2:quartz_cluster` |
| Charger | `ae2:charger` |
| Wooden Crank | `ae2:crank` |
| Charged Certus Quartz Crystal | `ae2:charged_certus_quartz_crystal` |
| Flawless Budding Certus Quartz | `ae2:flawless_budding_quartz` |
| Flawed Budding Certus Quartz | `ae2:flawed_budding_quartz` |
| Chipped Budding Certus Quartz | `ae2:chipped_budding_quartz` |
| Damaged Budding Certus Quartz | `ae2:damaged_budding_quartz` |
| Growth Accelerator | `ae2:growth_accelerator` |
| Certus Quartz Dust | `ae2:certus_quartz_dust` |
| Fluix Crystal | `ae2:fluix_crystal` |
| Fluix Dust | `ae2:fluix_dust` |
| Fluix Block | `ae2:fluix_block` |
| Quartz Glass | `ae2:quartz_glass` |
| Inscriber | `ae2:inscriber` |
| Silicon | `ae2:silicon` |
| Certus Quartz Wrench | `ae2:certus_quartz_wrench` |
| Inscriber Silicon Press | `ae2:silicon_press` |
| Inscriber Logic Press | `ae2:logic_processor_press` |
| Inscriber Calculation Press | `ae2:calculation_processor_press` |
| Inscriber Engineering Press | `ae2:engineering_processor_press` |
| Logic Processor | `ae2:logic_processor` |
| Calculation Processor | `ae2:calculation_processor` |
| Engineering Processor | `ae2:engineering_processor` |
| Formation Core | `ae2:formation_core` |
| Annihilation Core | `ae2:annihilation_core` |
| Energy Acceptor | `ae2:energy_acceptor`, `ae2:cable_energy_acceptor` |
| Vibration Chamber | `ae2:vibration_chamber` |
| Crystal Resonance Generator | `ae2:crystal_resonance_generator` |
| Energy Cell | `ae2:energy_cell` |
| Dense Energy Cell | `ae2:dense_energy_cell` |
| Quartz Fiber | `ae2:quartz_fiber` |
| Fluix ME Glass Cable | `ae2:fluix_glass_cable` |
| Fluix ME Covered Cable | `ae2:fluix_covered_cable` |
| Fluix ME Smart Cable | `ae2:fluix_smart_cable` |
| Fluix ME Dense Covered Cable | `ae2:fluix_covered_dense_cable` |
| Fluix ME Dense Smart Cable | `ae2:fluix_smart_dense_cable` |
| ME Item Cell Housing | `ae2:item_cell_housing` |
| ME Fluid Cell Housing | `ae2:fluid_cell_housing` |
| 1k ME Storage Component | `ae2:cell_component_1k` |
| 4k ME Storage Component | `ae2:cell_component_4k` |
| 16k ME Storage Component | `ae2:cell_component_16k` |
| 64k ME Storage Component | `ae2:cell_component_64k` |
| 256k ME Storage Component | `ae2:cell_component_256k` |
| 4k ME Item Storage Cell | `ae2:item_storage_cell_4k` |
| 1k ME Item Storage Cell | `ae2:item_storage_cell_1k` |
| 16k ME Item Storage Cell | `ae2:item_storage_cell_16k` |
| 64k ME Item Storage Cell | `ae2:item_storage_cell_64k` |
| 256k ME Item Storage Cell | `ae2:item_storage_cell_256k` |
| ME Drive | `ae2:drive` |
| ME Chest | `ae2:chest` |
| Illuminated Panel | `ae2:semi_dark_monitor` |
| ME Terminal | `ae2:terminal` |
| ME Crafting Terminal | `ae2:crafting_terminal` |
| ME Import Bus | `ae2:import_bus` |
| ME Export Bus | `ae2:export_bus` |
| ME Storage Bus | `ae2:storage_bus` |
| ME Interface | `ae2:interface`, `ae2:cable_interface` |
| ME Level Emitter | `ae2:level_emitter` |
| ME Controller | `ae2:controller` |
| Basic Card | `ae2:basic_card` |
| Advanced Card | `ae2:advanced_card` |
| Capacity Card | `ae2:capacity_card` |
| Redstone Card | `ae2:redstone_card` |
| Crafting Card | `ae2:crafting_card` |
| Overflow Destruction Card | `ae2:void_card` |
| Acceleration Card | `ae2:speed_card` |
| Fuzzy Card | `ae2:fuzzy_card` |
| Inverter Card | `ae2:inverter_card` |
| Equal Distribution Card | `ae2:equal_distribution_card` |
| Energy Card | `ae2:energy_card` |
| Cell Workbench | `ae2:cell_workbench` |
| Blank Pattern | `ae2:blank_pattern` |
| Crafting Pattern | `ae2:crafting_pattern` |
| Processing Pattern | `ae2:processing_pattern` |
| ME Pattern Encoding Terminal | `ae2:pattern_encoding_terminal` |
| ME Pattern Provider | `ae2:pattern_provider`, `ae2:cable_pattern_provider` |
| Molecular Assembler | `ae2:molecular_assembler` |
| ME Pattern Access Terminal | `ae2:pattern_access_terminal` |
| Crafting Unit | `ae2:crafting_unit` |
| 1k Crafting Storage | `ae2:1k_crafting_storage` |
| Crafting Co-Processing Unit | `ae2:crafting_accelerator` |
| Crafting Monitor | `ae2:crafting_monitor` |
| Fluix Pearl | `ae2:fluix_pearl` |
| Wireless Receiver | `ae2:wireless_receiver` |
| ME Wireless Access Point | `ae2:wireless_access_point` |
| Wireless Booster | `ae2:wireless_booster` |
| Wireless Terminal | `ae2:wireless_terminal` |
| Wireless Crafting Terminal | `ae2:wireless_crafting_terminal` |
| Wireless Pattern Encoding Terminal | `ae2wtlib:wireless_pattern_encoding_terminal` |
| Wireless Pattern Access Terminal | `ae2wtlib:wireless_pattern_access_terminal` |
| Wireless Universal Terminal | `ae2wtlib:wireless_universal_terminal` |
| Quantum Bridge Card | `ae2wtlib:quantum_bridge_card` |
| Magnet Card | `ae2wtlib:magnet_card` |
| ME P2P Tunnel | `ae2:me_p2p_tunnel` |
| Item P2P Tunnel | `ae2:item_p2p_tunnel` |
| Fluid P2P Tunnel | `ae2:fluid_p2p_tunnel` |
| Energy P2P Tunnel | `ae2:fe_p2p_tunnel` |
| Redstone P2P Tunnel | `ae2:redstone_p2p_tunnel` |
| Light P2P Tunnel | `ae2:light_p2p_tunnel` |
| Quantum Entangled Singularity | `ae2:quantum_entangled_singularity` |
| Singularity | `ae2:singularity` |
| Matter Condenser | `ae2:condenser` |
| ME Quantum Ring | `ae2:quantum_ring` |
| ME Quantum Link Chamber | `ae2:quantum_link` |
| Spatial Pylon | `ae2:spatial_pylon` |
| Spatial IO Port | `ae2:spatial_io_port` |
| 2³ Spatial Component | `ae2:spatial_cell_component_2` |
| 16³ Spatial Component | `ae2:spatial_cell_component_16` |
| 128³ Spatial Component | `ae2:spatial_cell_component_128` |
| 2³ Spatial Storage Cell | `ae2:spatial_storage_cell_2` |
| Spatial Anchor | `ae2:spatial_anchor` |
| Certus Quartz Pickaxe | `ae2:certus_quartz_pickaxe` |
| Fluix Pickaxe | `ae2:fluix_pickaxe` |
| Fluix Upgrade | `ae2:fluix_upgrade_smithing_template` |
| Certus Quartz Cutting Knife | `ae2:certus_quartz_cutting_knife` |
| Network Tool | `ae2:network_tool` |
| Memory Card | `ae2:memory_card` |
| Entropy Manipulator | `ae2:entropy_manipulator` |
| Charged Staff | `ae2:charged_staff` |
| Matter Cannon | `ae2:matter_cannon` |
| Color Applicator | `ae2:color_applicator` |
| White Paint Ball | `ae2:white_paint_ball` |
| 1k Portable Item Cell | `ae2:portable_item_cell_1k` |
| View Cell | `ae2:view_cell` |
| ME IO Port | `ae2:io_port` |
| Sky Stone Tank | `ae2:sky_stone_tank` |
| Sky Stone Chest | `ae2:sky_stone_chest` |
| ME Formation Plane | `ae2:formation_plane` |
| ME Annihilation Plane | `ae2:annihilation_plane` |
| ME Storage Monitor | `ae2:storage_monitor` |
| ME Conversion Monitor | `ae2:conversion_monitor` |
| ME Energy Level Emitter | `ae2:energy_level_emitter` |
| ME Toggle Bus | `ae2:toggle_bus` |
| Cable Facade | `ae2:facade` |
| Cable Anchor | `ae2:cable_anchor` |
| Certus Quartz Block | `ae2:quartz_block` |
| Sky Stone Block | `ae2:smooth_sky_stone_block` |
| Sky Stone Dust | `ae2:sky_dust` |
| Ender Dust | `ae2:ender_dust` |
| Vibrant Quartz Glass | `ae2:quartz_vibrant_glass` |
| Charged Quartz Fixture | `ae2:quartz_fixture` |
| Tiny TNT | `ae2:tiny_tnt` |
| Not So Mysterious Cube | `ae2:not_so_mysterious_cube` |
| Matter Ball | `ae2:matter_ball` |
| ME Chemical Cell Housing | `appmek:chemical_cell_housing` |
| 4k ME Chemical Storage Cell | `appmek:chemical_storage_cell_4k` |
| 4k Portable Chemical Cell | `appmek:portable_chemical_storage_cell_4k` |
| Chemical P2P Tunnel | `appmek:chemical_p2p_tunnel` |
| ME Mana Cell Housing | `appbot:mana_cell_housing` |
| 4k ME Mana Storage Cell | `appbot:mana_storage_cell_4k` |
| 4k Portable Mana Cell | `appbot:portable_mana_storage_cell_4k` |
| Mana P2P Tunnel | `appbot:mana_p2p_tunnel` |
| Fluix Mana Pool | `appbot:fluix_mana_pool` |
| ME Glass Cable Coil | `more_immersive_wires:ae_coil` |
| ME Glass Cable Connector | `more_immersive_wires:ae_connector` |
| ME Glass Cable Relay | `more_immersive_wires:ae_relay` |
| ME Dense Cable Coil | `more_immersive_wires:ae_dense_coil` |
| ME Dense Cable Connector | `more_immersive_wires:ae_dense_connector` |
| ME Dense Cable Relay | `more_immersive_wires:ae_dense_relay` |
