# Immersive Engineering – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-14, Minecraft 1.20.1. Alles aus den JARs der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/5ND4jUMzFawrQBFv1Htzr6). Ausführliche Texte und alle Baupläne stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen; Leistungswerte sind Standardwerte des Mods.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Immersive Engineering | 10.2.0-183 | `ie=ImmersiveEngineering-1.20.1` | `immersiveengineering` | Hauptmod |
| Immersive Petroleum | 4.3.1-36b | `ip=ImmersivePetroleum` | `immersivepetroleum` | Addon, Erdöl |
| Immersive Posts | 4.3.0-15 | `ipo=ImmersivePosts` | `immersiveposts` | Addon, Masten |
| Engineers Delight | B.1.4 | `ied="Engineers Delight"` | `tmted` | Brücke zu Farmer's Delight |
| More Immersive Wires | 1.1.4 | `miw=more-immersive-wires` | `more_immersive_wires` | Brücke zu AE2 |
| Immersive Aircraft x IE | 1.2 | `iaie=iaie-` | `iaie` | Brücke (Immersive Aircraft selbst: 1.5.0) |

## Wo die Quellen liegen

- **Handbuch** `assets/immersiveengineering/manual/`: je Eintrag `<name>.json` (Aufbau) und `en_us/<name>.txt` (Text); Petroleum und Posts haben eigene `manual/`-Ordner und hängen sich ins IE-Handbuch. Kapitel der Seite: General, Early Machines, Energy, Machines, Heavy Machines.
- **Multiblöcke** `data/immersiveengineering/structures/multiblocks/*.nbt` (22, u. a. `coke_oven`, `alloy_smelter` = Alloy Kiln, `blast_furnace`, `improved_blast_furnace`, `metal_press`, `crusher`, `sawmill`, `squeezer`, `fermenter`, `refinery`, `diesel_generator`, `mixer`, `bottling_machine`, `assembler`, `auto_workbench`, `arcfurnace`, `excavator`, `bucket_wheel`, `sheetmetal_tank`, `silo`, `lightning_rod`); Petroleum: `data/immersivepetroleum/structures/multiblocks/` (`derrick`, `pumpjack`, `oiltank`, `distillationtower`, `hydrotreater`, `cokerunit`). Auslesen mit `tools/NbtDump.java`.
- **Rezepte** `data/immersiveengineering/recipes/` (rund 1100). Maschinentypen (Anzahl): `immersiveengineering:crusher` 100, `metal_press` 96, `arc_furnace` 78, `sawmill` 72, `cloche` 37, `blueprint` 36, `hammer_crushing` 30, `mineral_mix` 21 (Mineraladern des Excavators), `bottling_machine` 10, `fermenter` 8, `alloy` 8 (Alloy Kiln), `squeezer` 6, `thermoelectric_source` 6, `fertilizer` 5, `blast_furnace_fuel` 4, `refinery` 3, `mixer` 3, `coke_oven` 3, `blast_furnace` 2, `generator_fuel` 2. 345 Rezepte mit `forge:not`/`forge:tag_empty` (Fremdmetalle). Petroleum: `immersivepetroleum:hydrotreater`, `reservoirs` (Reservoir-Definitionen als Rezept).
- **3D-Modelle** der Maschinen als OBJ unter `assets/immersiveengineering/models/block/…`; gezeichnet über `tools/renders.txt` (Präfix `ie_`, `ip_`).

## Progression in Kürze

1. **Ohne Strom**: Engineer's Hammer (formt Multiblöcke, Platten von Hand) → Erze (Bauxite, Lead, Silver, Nickel, Uranium) und Hanf → **Coke Oven** (27 Coke Bricks; Coal Coke + 500 mB Creosote je Kohle) → Treated Wood (8 Planks + 1 Eimer Creosote) → **Alloy Kiln** (8 Kiln Bricks; Electrum, Constantan, Insulating Glass) → **Crude Blast Furnace** (27 Blast Bricks aus Nether Brick, Brick, Magma Block → erster Nether-Gang; Eisen + Coke = Stahl, nicht automatisierbar) → Engineer's Workbench mit Blueprints (Vacuum Tube, Light Bulb, Electronic Component nur per Blueprint).
2. **Niederspannung**: LV Kupfer 256 Flux/t, MV Electrum 1024, HV Stahl+Aluminium 4096. Kinetic Dynamo mit Windmill oder Water Wheel (braucht 1 Stahl). LV Accumulator braucht Blei + Redstone Acid. Garden Cloche, External Heater, Thermoelectric Generator, Conveyor Belts, Fluid Pipes.
3. **Stahl und Schwermaschinen**: Improved Blast Furnace (27 Stahlplatten in Reinforced Blast Bricks, automatisierbar, Preheater 32 Flux/t) → Engineering Blocks (Light, Heavy, Redstone), Gerüst, Sheetmetal → Metal Press → Crusher (Erzverdopplung) → Sawmill → Squeezer + Fermenter → Refinery (Biodiesel = Plant Oil + Ethanol 1:1, Katalysator Nitrate Dust) → Diesel Generator (4096 Flux/t) und HV → Mixer, Bottling Machine → Assembler, Automated Workbench.
4. **Großindustrie (HV)**: Arc Furnace (Erzverdopplung, Recycling, Legierungen; Electrode-Blueprint nur aus Truhen/Dorfbewohner) → Mineral Deposits und Excavator → Kunststoff (Acetaldehyde mit Silberplatte, + Creosote = Phenolic Resin, Duroplast) → Logic Circuits.
5. **Erdöl (Petroleum)**: Seismic Survey Tool → Derrick (Pipes + flüssiger Beton, dann Wasser) → Pumpjack, Oil Tank (1024 Eimer) → Distillation Tower (4×16×4) → High-Pressure Refinery Unit (Diesel entschwefeln liefert Schwefel) → Coker (9×23×5, größter Multiblock).

## Schlüsselzahlen

- Draht je Connector: LV 256, MV 1024, HV 4096 Flux/t. Diesel Generator 4096 Flux/t. Tesla Coil 256 Flux Grundlast, 6 Blöcke Radius.
- Coke Oven: 500 mB Creosote je Kohle. Sawmill: 6 Planks je Stamm. Squeezer: 8 Koksstaub → HOP Graphite.
- Distillation Tower je 60 mB/t Crude Oil: Lubricant 10, Sulfurized Diesel 30, Kerosene 20, Naphtha 15 mB; Bitumen 7 % je Takt. Refinery Unit: 1500 mB Naphtha + 500 mB Wasser → 2000 mB Petroleum Gas; 5 Schwefelstaub je Eimer Diesel. Coker: 2 Bitumen + 125 mB Wasser → 2 Petcoke.
- Lager: Tank 512 Eimer, Item Silo 41472 Items, Oil Tank 1024 Eimer. Powered Lantern: kein Mob-Spawn im Umkreis 32.

## Pack-Bezug

- Stahlquelle Nr. 1 des Packs; siehe `CROSSMOD_AUFFAELLIGKEITEN.md` Ü1 (Stahl), Ü2 (Erzverdopplung Crusher/Arc Furnace), Ü5 (Strom, Forge Energy), Ü8 (Schwefel: Crusher aus Lapis-/Kohle-/Quarzerz, Refinery Unit).
- Rezepte arbeiten mit Forge-Tags (`forge:ingots/steel`, `forge:dusts/sulfur`) und nehmen fremde Items an.
- Treibstoff-Tag `#immersiveengineering:drill_fuel`: Biodiesel (IE), Diesel, Sulfurized Diesel, Kerosene (Petroleum); Immersive Aircraft tankt daraus.
- More Immersive Wires 1.1.4: nur ME Glass/Dense Cable für AE2 wirksam; **kein Mekanism-Draht** (Mod-Liste war falsch, korrigiert).
- Engineers Delight: Rezepte für Sawmill, Cloche, Crusher (Wheat Flour), Metal Press, Mixer, Squeezer, Bottling Machine.

## Offen

- Treibstoffe des Portable Generator (Petroleum) nicht ausgelesen.
- Upgrade-Namen des Accumulator Backpack außer Charging Antenna nicht einzeln gelesen.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> ie/data.js immersiveengineering immersivepetroleum immersiveposts` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Engineer's Hammer | `immersiveengineering:hammer` |
| Engineer's Manual | `immersiveengineering:manual` |
| Engineer's Wire Cutters | `immersiveengineering:wirecutter` |
| Engineer's Screwdriver | `immersiveengineering:screwdriver` |
| Iron Plate | `immersiveengineering:plate_iron` |
| Bauxite Ore | `immersiveengineering:ore_aluminum` |
| Lead Ore | `immersiveengineering:ore_lead` |
| Silver Ore | `immersiveengineering:ore_silver` |
| Nickel Ore | `immersiveengineering:ore_nickel` |
| Uranium Ore | `immersiveengineering:ore_uranium` |
| Industrial Hemp Seeds | `immersiveengineering:seed` |
| Industrial Hemp Fiber | `immersiveengineering:hemp_fiber` |
| Tough Fabric | `immersiveengineering:hemp_fabric` |
| Coke Oven | `immersiveengineering:coke_oven` |
| Coke Brick | `immersiveengineering:cokebrick` |
| Coal Coke | `immersiveengineering:coal_coke` |
| Treated Wood Planks | `immersiveengineering:treated_wood_horizontal`, `immersiveengineering:treated_wood_vertical`, `immersiveengineering:treated_wood_packaged` |
| Treated Stick | `immersiveengineering:stick_treated` |
| Engineer's Crafting Table | `immersiveengineering:craftingtable` |
| Wooden Storage Crate | `immersiveengineering:crate` |
| Wooden Barrel | `immersiveengineering:wooden_barrel` |
| Wooden Post | `immersiveengineering:treated_post`, `immersiveposts:woodpost` |
| Wooden Wallmount | `immersiveengineering:treated_wallmount` |
| Treated Wood Scaffolding | `immersiveengineering:treated_scaffold` |
| Alloy Kiln | `immersiveengineering:alloy_smelter` |
| Kiln Brick | `immersiveengineering:alloybrick` |
| Insulating Glass | `immersiveengineering:insulating_glass` |
| Crude Blast Furnace | `immersiveengineering:blast_furnace` |
| Blast Brick | `immersiveengineering:blastbrick` |
| Steel Ingot | `immersiveengineering:ingot_steel` |
| Slag | `immersiveengineering:slag` |
| Engineer's Workbench | `immersiveengineering:workbench` |
| Engineer's Blueprint | `immersiveengineering:blueprint` |
| Iron Mechanical Component | `immersiveengineering:component_iron` |
| Steel Mechanical Component | `immersiveengineering:component_steel` |
| Incandescent Light Bulb | `immersiveengineering:light_bulb` |
| Vacuum Tube | `immersiveengineering:electron_tube` |
| Electronic Component | `immersiveengineering:component_electronic` |
| Circuit Backplane | `immersiveengineering:circuit_board` |
| Transformer | `immersiveengineering:transformer` |
| LV Wire Coil | `immersiveengineering:wirecoil_copper` |
| Copper Wire | `immersiveengineering:wire_copper` |
| LV Wire Connector | `immersiveengineering:connector_lv` |
| LV Wire Relay | `immersiveengineering:connector_lv_relay` |
| Engineer's Multimeter | `immersiveengineering:voltmeter` |
| Copper Coil Block | `immersiveengineering:coil_lv` |
| Windmill | `immersiveengineering:windmill` |
| Water Wheel | `immersiveengineering:watermill` |
| Kinetic Dynamo | `immersiveengineering:dynamo` |
| Windmill Blade | `immersiveengineering:windmill_blade` |
| Windmill Sail | `immersiveengineering:windmill_sail` |
| Waterwheel Segment | `immersiveengineering:waterwheel_segment` |
| LV Accumulator | `immersiveengineering:capacitor_lv` |
| Garden Cloche | `immersiveengineering:cloche` |
| Charging Station | `immersiveengineering:charging_station` |
| Floodlight | `immersiveengineering:floodlight` |
| External Heater | `immersiveengineering:furnace_heater` |
| Thermoelectric Generator | `immersiveengineering:thermoelectric_generator` |
| Powered Lantern | `immersiveengineering:electric_lantern` |
| Conveyor Belt | `immersiveengineering:conveyor_basic` |
| Item Router | `immersiveengineering:sorter` |
| Item Batcher | `immersiveengineering:item_batcher` |
| Turntable | `immersiveengineering:turntable` |
| Fluid Pipe | `immersiveengineering:fluid_pipe` |
| Fluid Pump | `immersiveengineering:fluid_pump` |
| Fluid Router | `immersiveengineering:fluid_sorter` |
| Metal Barrel | `immersiveengineering:metal_barrel` |
| Improved Blast Furnace | `immersiveengineering:advanced_blast_furnace` |
| Blast Furnace Preheater | `immersiveengineering:blastfurnace_preheater` |
| Reinforced Blast Brick | `immersiveengineering:blastbrick_reinforced` |
| Light Engineering Block | `immersiveengineering:light_engineering` |
| Heavy Engineering Block | `immersiveengineering:heavy_engineering` |
| Redstone Engineering Block | `immersiveengineering:rs_engineering` |
| Steel Scaffolding | `immersiveengineering:steel_scaffolding_standard`, `immersiveengineering:steel_scaffolding_grate_top`, `immersiveengineering:steel_scaffolding_wooden_top` |
| Generator Block | `immersiveengineering:generator` |
| Radiator Block | `immersiveengineering:radiator` |
| MV Wire Coil | `immersiveengineering:wirecoil_electrum` |
| MV Wire Connector | `immersiveengineering:connector_mv` |
| Metal Press | `immersiveengineering:metal_press` |
| Crusher | `immersiveengineering:crusher` |
| Sawmill | `immersiveengineering:sawmill` |
| Sawblade | `immersiveengineering:sawblade` |
| Sawdust | `immersiveengineering:dust_wood` |
| Industrial Squeezer | `immersiveengineering:squeezer` |
| Industrial Fermenter | `immersiveengineering:fermenter` |
| HOP Graphite Dust | `immersiveengineering:dust_hop_graphite` |
| Refinery | `immersiveengineering:refinery` |
| Nitrate Dust | `immersiveengineering:dust_saltpeter` |
| Diesel Generator | `immersiveengineering:diesel_generator` |
| HV Wire Coil | `immersiveengineering:wirecoil_steel` |
| HV Wire Connector | `immersiveengineering:connector_hv` |
| HV Wire Relay | `immersiveengineering:connector_hv_relay` |
| HV Transformer | `immersiveengineering:transformer_hv` |
| HV Accumulator | `immersiveengineering:capacitor_hv` |
| Mixer | `immersiveengineering:mixer` |
| Bottling Machine | `immersiveengineering:bottling_machine` |
| Assembler | `immersiveengineering:assembler` |
| Automated Engineer's Workbench | `immersiveengineering:auto_workbench` |
| Arc Furnace | `immersiveengineering:arc_furnace` |
| Graphite Electrode | `immersiveengineering:graphite_electrode` |
| HOP Graphite Ingot | `immersiveengineering:ingot_hop_graphite` |
| Bucket Wheel | `immersiveengineering:bucket_wheel` |
| Core Sample Drill | `immersiveengineering:sample_drill` |
| Mineral Survey Tools | `immersiveengineering:survey_tools` |
| Duroplast Sheet | `immersiveengineering:plate_duroplast` |
| Duroplast Block | `immersiveengineering:duroplast` |
| Fiberboard | `immersiveengineering:fiberboard` |
| Engineer's Circuit Table | `immersiveengineering:circuit_table` |
| Logic Circuit | `immersiveengineering:logic_circuit` |
| Logic Unit | `immersiveengineering:logic_unit` |
| Redstone Wire Coil | `immersiveengineering:wirecoil_redstone` |
| Redstone Probe Connector | `immersiveengineering:connector_probe` |
| Redstone Breaker | `immersiveengineering:redstone_breaker` |
| Derrick | `immersivepetroleum:derrick` |
| Seismic Survey Tool | `immersivepetroleum:seismic_survey` |
| Survey Result | `immersivepetroleum:survey_result` |
| Pumpjack | `immersivepetroleum:pumpjack` |
| Oil Tank | `immersivepetroleum:oiltank` |
| Distillation Tower | `immersivepetroleum:distillation_tower` |
| Crude Oil | `immersivepetroleum:fluid_crude_oil` |
| Lubricant | `immersivepetroleum:fluid_lubricant` |
| Bitumen | `immersivepetroleum:bitumen` |
| High-Pressure Refinery Unit | `immersivepetroleum:hydrotreater` |
| Coker | `immersivepetroleum:coker_unit` |
| Diesel | `immersivepetroleum:fluid_diesel` |
| Paraffin Wax | `immersivepetroleum:paraffin_wax` |
| Gasoline | `immersivepetroleum:fluid_gasoline` |
| Petcoke | `immersivepetroleum:petcoke` |
| Mining Drill | `immersiveengineering:drill` |
| Buzzsaw | `immersiveengineering:buzzsaw` |
| Engineer's Toolbox | `immersiveengineering:toolbox_block`, `immersiveengineering:toolbox` |
| Jerrycan | `immersiveengineering:jerrycan` |
| Maintenance Kit | `immersiveengineering:maintenance_kit` |
| Engineer's Skyhook | `immersiveengineering:skyhook` |
| Collapsible Glider | `immersiveengineering:glider` |
| Ear Defenders | `immersiveengineering:earmuffs` |
| Accumulator Backpack | `immersiveengineering:powerpack` |
| Steel Pickaxe | `immersiveengineering:pickaxe_steel` |
| Faraday Chestplate | `immersiveengineering:armor_faraday_chestplate` |
| Fluorescent Tube | `immersiveengineering:fluorescent_tube` |
| Revolver | `immersiveengineering:revolver` |
| Railgun | `immersiveengineering:railgun` |
| Chemical Thrower | `immersiveengineering:chemthrower` |
| Heavy Plated Shield | `immersiveengineering:shield` |
| Gun Turret | `immersiveengineering:turret_gun` |
| Chemthrower Turret | `immersiveengineering:turret_chem` |
| Tesla Coil | `immersiveengineering:tesla_coil` |
| Razor Wire | `immersiveengineering:razor_wire` |
| Gunpowder Barrel | `immersiveengineering:gunpowder_barrel` |
| Electromagnet | `immersiveengineering:electromagnet` |
| Breaker Switch | `immersiveengineering:breaker_switch` |
| Current Transformer | `immersiveengineering:current_transformer` |
| Balloon | `immersiveengineering:balloon` |
| Hemp Rope Coil | `immersiveengineering:wirecoil_structure_rope` |
| Steel Cable Coil | `immersiveengineering:wirecoil_structure_steel` |
| Minecart with Wooden Storage Crate | `immersiveengineering:minecart_woodencrate` |
| Reinforced Storage Crate | `immersiveengineering:reinforced_crate` |
| Industrial Fertilizer | `immersiveengineering:fertilizer` |
| Shader Grabbag | `immersiveengineering:shader_bag` |
| Item Silo | `immersiveengineering:silo` |
| Lightning Rod | `immersiveengineering:lightning_rod` |
| Concrete | `immersiveengineering:concrete` |
| Hempcrete | `immersiveengineering:hempcrete` |
| Clinker Bricks | `immersiveengineering:clinker_brick` |
| Slag Bricks | `immersiveengineering:slag_brick` |
| Slag Glass | `immersiveengineering:slag_glass` |
| Slag Gravel | `immersiveengineering:slag_gravel` |
| Aluminium Scaffolding | `immersiveengineering:alu_scaffolding_standard`, `immersiveengineering:alu_scaffolding_grate_top`, `immersiveengineering:alu_scaffolding_wooden_top` |
| Metal Ladder | `immersiveengineering:metal_ladder_none` |
| Jump Cushion | `immersiveengineering:cushion` |
| Strip Curtain | `immersiveengineering:strip_curtain` |
| Lantern | `immersiveengineering:lantern` |
| Motorboat | `immersivepetroleum:speedboat` |
| Projector | `immersivepetroleum:projector` |
| Lubricant Can | `immersivepetroleum:oil_can` |
| Automatic Lubricator | `immersivepetroleum:auto_lubricator` |
| Portable Generator | `immersivepetroleum:gas_generator` |
| Flarestack | `immersivepetroleum:flarestack` |
| Asphalt Concrete | `immersivepetroleum:asphalt` |
| Molotov | `immersivepetroleum:molotov` |
| Block of Paraffin Wax | `immersivepetroleum:paraffin_wax_block` |
| Extendable Post | `immersiveposts:postbase` |
| Wooden Truss | `immersiveposts:woodpost_truss` |

26 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
