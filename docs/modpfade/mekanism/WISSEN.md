# Mekanism – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-14, Minecraft 1.20.1. Alles aus den JARs und der Config der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/NDtR89BAXYtyGRHu4tsHMd). Ausführliche Texte, alle Module und Generatoren stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Mekanism | 10.4.16.80 | `mek=Mekanism-1.20.1` | `mekanism` | Hauptmod |
| Mekanism Generators | 10.4.16.80 | `mekgen=MekanismGenerators` | `mekanismgenerators` | Addon (Generatoren, Fission, Turbine, Fusion) |
| Applied Mekanistics | 1.4.3 | `apm=Applied-Mekanistics` | `appmek` | Brücke zu AE2 |
| Mekanism: Ad Astra Ores | 1.1.0 | `maao=mekanism-ad-astra` | `mekanismaaa` | Brücke zu Ad Astra |
| Ad Astra: Giselle Addon | 6.27 | `giselle=Giselle` | `ad_astra_giselle_addon` | Brücke (MekaSuit-Module fürs All) |

## Wo die Quellen liegen

- **Kein Buch, keine Strukturdateien.** Reihenfolge = Advancement-Baum `data/mekanism/advancements/*.json` (Feld `parent`, 93 Dateien), Titel/Beschreibung in der Sprachdatei. Erklärtexte: Schlüssel `description.mekanism.<block>` und `info.mekanism.jei.*` in `assets/mekanism/lang/en_us.json`.
- **Rezepte** `data/mekanism/recipes/` (rund 4200, davon viele nur für nicht installierte Mods: `forge:mod_loaded`). Maschinenrezepte in Unterordnern: `enriching`, `crushing`, `metallurgic_infusing`, `combining`, `injecting`, `oxidizing`, `chemical_infusing`, `reaction`, `separator`, `evaporating`, `crystallizing`, `rotary`, `sawing`, `nucleosynthesizing`, `energy_conversion`, `infusion_conversion`, `gas_conversion`, `factory`, `tier_installer`, `control_circuit`, `transmitter`, `upgrade`, `induction`, `compat/`. Erzketten je Metall unter `processing/<metall>/` (Unterordner `dust`, `clump`, `shard`, `crystal`, `slurry`, `dirty_dust`, `ingot`, `ore`).
- **Zahlen** aus `config/Mekanism/` der Instanz: `generators.toml`, `machine-storage.toml`, `machine-usage.toml`, `tiers.toml`, `general.toml`, `world.toml` (Erzverteilung, vom Pack geändert, Override in `config-overrides/config/Mekanism/world.toml`).
- **Bilder** aus JSON-Blockmodellen gezeichnet (`tools/renders.txt`, Präfix `mek_`, `mekgen_`). Energy Cube, Dynamic Tank, Leitungen u. a. werden im Code gezeichnet und haben kein Bild.
- **Multiblock-Bauregeln stehen nur im Code** (Dynamic Tank, Thermal Evaporation, Boiler, Turbine, Induction Matrix, Fission, Fusion, SPS).

## Progression in Kürze

1. **Einstieg**: Erze (Osmium fast überall, Tin, Lead, Uranium, Fluorite, Salt). Metallurgic Infuser (4 Eisen, 2 Furnace, 2 Redstone, 1 Osmium Ingot) → Infused Alloy, Basic Control Circuit (Osmium + 20 Redstone), Stahl (Eisen + 2× 10 Carbon, schmelzen). Heat Generator (kein Stahl). Steel Casing (4 Stahl, 4 Glass, 1 Osmium), Energy Tablet.
2. **Basic**: Enrichment Chamber (2× Erz), Crusher, Energized Smelter, Precision Sawmill, Formulaic Assemblicator (Autocrafting, früh), Electric Pump, Energy Cube, Leitungen (je 2 Stahl + Zutat → 8), Tanks, Bin, Generatoren (Wind, Solar, Bio, Gas-Burning), Upgrades.
3. **Stufen**: Basic (Redstone) → Advanced (Infused Alloy) → Elite (Reinforced Alloy: + 20 Diamond) → Ultimate (Atomic Alloy: + 40 Refined Obsidian). Osmium Compressor → Refined Obsidian, Refined Glowstone. Combiner (8 Raw Ore + Cobblestone → Erzblock). Factories für 9 Maschinenarten.
4. **Chemie und Erz**: Electrolytic Separator (Wasser → H₂ + O₂; Brine → Sodium + Chlorine). 3× Purification Chamber (Oxygen oder Flint), 4× Chemical Injection Chamber (Hydrogen Chloride oder Salt), Thermal Evaporation (Wasser → Brine → Lithium, je 10:1), Schwefelsäure (Sulfur → SO₂ → SO₃ → + Water Vapor), 5× Dissolution + Washer + Crystallizer (braucht Ultimate Circuits, Refined Obsidian, Fluorite). Pressurized Reaction Chamber → Substrate, Ethylene, HDPE.
5. **Kernkraft**: Yellow Cake → Uranium Oxide → + Hydrofluoric Acid → Uranium Hexafluoride → Isotopic Centrifuge → Fissile Fuel. Fission Reactor (Blei in Mengen), Boiler + Turbine, Strahlung/Hazmat, Plutonium und Polonium aus Nuclear Waste (10:1), Induction Matrix (Lithium).
6. **Endgame**: Teleportation Core (Atomic Alloy), Teleporter, Quantum Entangloporter; Robit, Digital Miner (32 Blöcke Radius); Laser; QIO (Polonium); SPS → Antimatter → Nucleosynthesizer (20 Rezepte); MekaSuit (Netherite-Rüstung + HDPE + Polonium + Induction Cell), Meka-Tool; Fusion Reactor (D-T Fuel, Zündung per Laser).

## Schlüsselzahlen (Config der Testinstanz)

- Heat Generator 200 J/t (+30 je Lava-Seite, +100 im Nether); Wind 60–480 J/t; Solar 50, Advanced Solar 300 J/t Spitze; Bio-Generator 350 J/t.
- Energy Cube 4 / 16 / 64 / 256 Mio. J; Basic Induction Cell 8 Mrd. J, Ultimate 4 Bio. J. Redstone → 10 000 J je Staub.
- Fluid Tank 32 000–256 000 mB; Chemical Tank 64 000–8 192 000 mB.
- Fission: 1 mB Brennstoff = 1 000 000 J Wärme. Fusion: 1 mB = 10 000 000 J. Turbine: 1 Coil je 4 Blades. Hohlraum bis 10 Einheiten Gas.
- Infuse Types: Redstone/Coal/Tin 10 je Item, Charcoal 20, angereichert 80. Osmium Ingot im Compressor 200.
- Erzstufen aus 1 Erzblock: 2 Dust / 3 Clumps / 4 Shards / 5 Crystals; aus 3 Raw Ore: 4 / 6 / 8 / 10.

## Pack-Bezug

- Stahl ohne Koksofen, Hochofen und Nether (Ü1). Erzvervielfachung bis 5× nur für Eisen, Gold, Kupfer, Zinn, Osmium, Blei, Uran; Silber, Nickel, Aluminium fehlen (Ü2). QIO hinter Fission (Ü3). Formulaic Assemblicator ist der früheste Autocrafter (Ü4). Generatoren vor jeder Kernkraft (Ü5). Nucleosynthesizer, Digital Miner (Ü6). Kein Nether nötig (Ü7). Schwefel-Kette (Ü8).
- Durchgehend Forge-Tags: IE-Stahl, Blei, Uran, Schwefel, Sägemehl passen. 53 Rezepte für AE2-Material, 12 für Farmer's Delight.
- Applied Mekanistics: ME Chemical Storage Cells 1k–256k, Chemical P2P Tunnel.
- Mekanism: Ad Astra Ores: Mond Osmium/Tin; Mars Fluorite/Tin/Uranium; Venus Fluorite/Lead/Uranium; Merkur Lead/Osmium/Uranium; Glacio alle fünf.
- Giselle Addon: MekaSuit-Module Space Breathing, Space Fire Proof, Acid Rain Proof, Gravity Normalizing; 3 Crusher-Rezepte.

## Offen

- Bauregeln aller Multiblöcke und Eingangsstoff des SPS (nur im Code).
- Ohne Bild (im Code gezeichnet): Energy Cube, Dynamic Tank, Nutritional Liquifier, Personal Chest, Turbine Rotor, Wind Generator, alle Leitungen.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> mekanism/data.js mekanism mekanismgenerators` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Osmium Ore | `mekanism:osmium_ore` |
| Tin Ore | `mekanism:tin_ore` |
| Lead Ore | `mekanism:lead_ore` |
| Uranium Ore | `mekanism:uranium_ore` |
| Fluorite Ore | `mekanism:fluorite_ore` |
| Salt | `mekanism:salt` |
| Metallurgic Infuser | `mekanism:metallurgic_infuser` |
| Infused Alloy | `mekanism:alloy_infused` |
| Basic Control Circuit | `mekanism:basic_control_circuit` |
| Enriched Iron | `mekanism:enriched_iron` |
| Steel Dust | `mekanism:dust_steel` |
| Bronze Ingot | `mekanism:ingot_bronze` |
| Heat Generator | `mekanismgenerators:heat_generator` |
| Steel Casing | `mekanism:steel_casing` |
| Energy Tablet | `mekanism:energy_tablet` |
| Enrichment Chamber | `mekanism:enrichment_chamber` |
| Crusher | `mekanism:crusher` |
| Energized Smelter | `mekanism:energized_smelter` |
| Precision Sawmill | `mekanism:precision_sawmill` |
| Formulaic Assemblicator | `mekanism:formulaic_assemblicator` |
| Crafting Formula | `mekanism:crafting_formula` |
| Sawdust | `mekanism:sawdust` |
| Electric Pump | `mekanism:electric_pump` |
| Fluidic Plenisher | `mekanism:fluidic_plenisher` |
| Fuelwood Heater | `mekanism:fuelwood_heater` |
| Resistive Heater | `mekanism:resistive_heater` |
| Basic Energy Cube | `mekanism:basic_energy_cube` |
| Basic Universal Cable | `mekanism:basic_universal_cable` |
| Chargepad | `mekanism:chargepad` |
| Basic Mechanical Pipe | `mekanism:basic_mechanical_pipe` |
| Basic Pressurized Tube | `mekanism:basic_pressurized_tube` |
| Basic Logistical Transporter | `mekanism:basic_logistical_transporter` |
| Basic Thermodynamic Conductor | `mekanism:basic_thermodynamic_conductor` |
| Restrictive Transporter | `mekanism:restrictive_transporter` |
| Diversion Transporter | `mekanism:diversion_transporter` |
| Logistical Sorter | `mekanism:logistical_sorter` |
| Configurator | `mekanism:configurator` |
| Configuration Card | `mekanism:configuration_card` |
| Network Reader | `mekanism:network_reader` |
| Basic Fluid Tank | `mekanism:basic_fluid_tank` |
| Basic Chemical Tank | `mekanism:basic_chemical_tank` |
| Basic Bin | `mekanism:basic_bin` |
| Personal Barrel | `mekanism:personal_barrel` |
| Personal Chest | `mekanism:personal_chest` |
| Dynamic Tank | `mekanism:dynamic_tank` |
| Dynamic Valve | `mekanism:dynamic_valve` |
| Structural Glass | `mekanism:structural_glass` |
| Solar Generator | `mekanismgenerators:solar_generator` |
| Advanced Solar Generator | `mekanismgenerators:advanced_solar_generator` |
| Gas-Burning Generator | `mekanismgenerators:gas_burning_generator` |
| Bio-Generator | `mekanismgenerators:bio_generator` |
| Wind Generator | `mekanismgenerators:wind_generator` |
| Solar Panel | `mekanismgenerators:solar_panel` |
| Bio Fuel | `mekanism:bio_fuel` |
| Speed Upgrade | `mekanism:upgrade_speed` |
| Energy Upgrade | `mekanism:upgrade_energy` |
| Gas Upgrade | `mekanism:upgrade_gas` |
| Muffling Upgrade | `mekanism:upgrade_muffling` |
| Filter Upgrade | `mekanism:upgrade_filter` |
| Anchor Upgrade | `mekanism:upgrade_anchor` |
| Stone Generator Upgrade | `mekanism:upgrade_stone_generator` |
| Osmium Compressor | `mekanism:osmium_compressor` |
| Refined Obsidian Dust | `mekanism:dust_refined_obsidian` |
| Refined Obsidian Ingot | `mekanism:ingot_refined_obsidian` |
| Refined Glowstone Ingot | `mekanism:ingot_refined_glowstone` |
| Combiner | `mekanism:combiner` |
| Basic Enriching Factory | `mekanism:basic_enriching_factory` |
| Basic Tier Installer | `mekanism:basic_tier_installer` |
| Electrolytic Separator | `mekanism:electrolytic_separator` |
| Rotary Condensentrator | `mekanism:rotary_condensentrator` |
| Electrolytic Core | `mekanism:electrolytic_core` |
| Chemical Oxidizer | `mekanism:chemical_oxidizer` |
| Chemical Infuser | `mekanism:chemical_infuser` |
| Purification Chamber | `mekanism:purification_chamber` |
| Iron Clump | `mekanism:clump_iron` |
| Chemical Injection Chamber | `mekanism:chemical_injection_chamber` |
| Iron Shard | `mekanism:shard_iron` |
| Thermal Evaporation Block | `mekanism:thermal_evaporation_block` |
| Thermal Evaporation Controller | `mekanism:thermal_evaporation_controller` |
| Thermal Evaporation Valve | `mekanism:thermal_evaporation_valve` |
| Lithium Dust | `mekanism:dust_lithium` |
| Chemical Dissolution Chamber | `mekanism:chemical_dissolution_chamber` |
| Chemical Washer | `mekanism:chemical_washer` |
| Chemical Crystallizer | `mekanism:chemical_crystallizer` |
| Iron Crystal | `mekanism:crystal_iron` |
| Pressurized Reaction Chamber | `mekanism:pressurized_reaction_chamber` |
| Substrate | `mekanism:substrate` |
| HDPE Pellet | `mekanism:hdpe_pellet` |
| HDPE Sheet | `mekanism:hdpe_sheet` |
| Isotopic Centrifuge | `mekanism:isotopic_centrifuge` |
| Yellow Cake Uranium | `mekanism:yellow_cake_uranium` |
| Fluorite | `mekanism:fluorite_gem` |
| Fission Fuel Assembly | `mekanismgenerators:fission_fuel_assembly` |
| Control Rod Assembly | `mekanismgenerators:control_rod_assembly` |
| Fission Reactor Casing | `mekanismgenerators:fission_reactor_casing` |
| Fission Reactor Port | `mekanismgenerators:fission_reactor_port` |
| Fission Reactor Logic Adapter | `mekanismgenerators:fission_reactor_logic_adapter` |
| Reactor Glass | `mekanismgenerators:reactor_glass` |
| Boiler Casing | `mekanism:boiler_casing` |
| Boiler Valve | `mekanism:boiler_valve` |
| Superheating Element | `mekanism:superheating_element` |
| Pressure Disperser | `mekanism:pressure_disperser` |
| Turbine Casing | `mekanismgenerators:turbine_casing` |
| Turbine Rotor | `mekanismgenerators:turbine_rotor` |
| Turbine Blade | `mekanismgenerators:turbine_blade` |
| Rotational Complex | `mekanismgenerators:rotational_complex` |
| Electromagnetic Coil | `mekanismgenerators:electromagnetic_coil` |
| Saturating Condenser | `mekanismgenerators:saturating_condenser` |
| Turbine Vent | `mekanismgenerators:turbine_vent` |
| Turbine Valve | `mekanismgenerators:turbine_valve` |
| Hazmat Gown | `mekanism:hazmat_gown` |
| Geiger Counter | `mekanism:geiger_counter` |
| Dosimeter | `mekanism:dosimeter` |
| Radioactive Waste Barrel | `mekanism:radioactive_waste_barrel` |
| Solar Neutron Activator | `mekanism:solar_neutron_activator` |
| Plutonium Pellet | `mekanism:pellet_plutonium` |
| Polonium Pellet | `mekanism:pellet_polonium` |
| Reprocessed Fissile Fragment | `mekanism:reprocessed_fissile_fragment` |
| Induction Casing | `mekanism:induction_casing` |
| Induction Port | `mekanism:induction_port` |
| Basic Induction Cell | `mekanism:basic_induction_cell` |
| Basic Induction Provider | `mekanism:basic_induction_provider` |
| Quantum Entangloporter | `mekanism:quantum_entangloporter` |
| Teleportation Core | `mekanism:teleportation_core` |
| Teleporter | `mekanism:teleporter` |
| Teleporter Frame | `mekanism:teleporter_frame` |
| Portable Teleporter | `mekanism:portable_teleporter` |
| Digital Miner | `mekanism:digital_miner` |
| Robit | `mekanism:robit` |
| Dimensional Stabilizer | `mekanism:dimensional_stabilizer` |
| Laser | `mekanism:laser` |
| Laser Amplifier | `mekanism:laser_amplifier` |
| Laser Tractor Beam | `mekanism:laser_tractor_beam` |
| QIO Drive Array | `mekanism:qio_drive_array` |
| QIO Dashboard | `mekanism:qio_dashboard` |
| QIO Drive | `mekanism:qio_drive_base` |
| Hyper-Dense QIO Drive | `mekanism:qio_drive_hyper_dense` |
| Time-Dilating QIO Drive | `mekanism:qio_drive_time_dilating` |
| Supermassive QIO Drive | `mekanism:qio_drive_supermassive` |
| Portable QIO Dashboard | `mekanism:portable_qio_dashboard` |
| QIO Importer | `mekanism:qio_importer` |
| QIO Exporter | `mekanism:qio_exporter` |
| QIO Redstone Adapter | `mekanism:qio_redstone_adapter` |
| Supercharged Coil | `mekanism:supercharged_coil` |
| Antiprotonic Nucleosynthesizer | `mekanism:antiprotonic_nucleosynthesizer` |
| SPS Casing | `mekanism:sps_casing` |
| SPS Port | `mekanism:sps_port` |
| Antimatter Pellet | `mekanism:pellet_antimatter` |
| Modification Station | `mekanism:modification_station` |
| Atomic Disassembler | `mekanism:atomic_disassembler` |
| MekaSuit Helmet | `mekanism:mekasuit_helmet` |
| Meka-Tool | `mekanism:meka_tool` |
| Module Base | `mekanism:module_base` |
| Fusion Reactor Controller | `mekanismgenerators:fusion_reactor_controller` |
| Laser Focus Matrix | `mekanismgenerators:laser_focus_matrix` |
| Fusion Reactor Frame | `mekanismgenerators:fusion_reactor_frame` |
| Fusion Reactor Port | `mekanismgenerators:fusion_reactor_port` |
| Hohlraum | `mekanismgenerators:hohlraum` |
| Jetpack | `mekanism:jetpack` |
| Armored Jetpack | `mekanism:jetpack_armored` |
| Scuba Mask | `mekanism:scuba_mask` |
| Scuba Tank | `mekanism:scuba_tank` |
| Free Runners | `mekanism:free_runners` |
| Electric Bow | `mekanism:electric_bow` |
| Flamethrower | `mekanism:flamethrower` |
| Canteen | `mekanism:canteen` |
| HDPE Reinforced Elytra | `mekanism:hdpe_elytra` |
| Seismic Reader | `mekanism:seismic_reader` |
| Dictionary | `mekanism:dictionary` |
| Gauge Dropper | `mekanism:gauge_dropper` |
| Nutritional Liquifier | `mekanism:nutritional_liquifier` |
| Oredictionificator | `mekanism:oredictionificator` |
| Seismic Vibrator | `mekanism:seismic_vibrator` |
| Painting Machine | `mekanism:painting_machine` |
| Pigment Extractor | `mekanism:pigment_extractor` |
| Pigment Mixer | `mekanism:pigment_mixer` |
| Industrial Alarm | `mekanism:industrial_alarm` |
| Security Desk | `mekanism:security_desk` |
| Cardboard Box | `mekanism:cardboard_box` |
| 1k ME Chemical Storage Cell | `appmek:chemical_storage_cell_1k` |
| ME Chemical Cell Housing | `appmek:chemical_cell_housing` |
| Chemical P2P Tunnel | `appmek:chemical_p2p_tunnel` |

40 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
