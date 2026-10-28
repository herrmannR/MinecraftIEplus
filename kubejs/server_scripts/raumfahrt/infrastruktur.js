// Raumfahrt-Infrastruktur gestaffelt teurer (Balancing B2, User 2026-10-28; docs/21_BALANCING.md Abschnitt 2).
// Vorlage: Rezepte aus ad_astra-forge 1.15.21 (data/ad_astra/recipes/). Erde- und Mond-Station bleiben unverändert.
// Oxygen Distributor: ein Rezept für alle (ein zweites, billigeres würde das teure überflüssig machen).
// Stand 2026-10-28, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  const BLECH = 'immersiveengineering:sheetmetal_steel'
  const STAHLBLOCK = '#forge:storage_blocks/steel'
  const GEHAEUSE = 'mekanism:steel_casing'

  const ersetze = (id, ergebnis, muster, schluessel) => {
    event.remove({ id: `ad_astra:${id}` })
    event.shaped(ergebnis, muster, schluessel).id(`ieplus:raumfahrt/${id}`)
  }

  // NASA Workbench: Stahlstäbe, Steel Casing, Heavy Engineering Blocks
  ersetze('nasa_workbench', 'ad_astra:nasa_workbench', ['|X|', 'TCT', 'HBH'], {
    '|': 'ad_astra:steel_rod', X: GEHAEUSE, T: 'minecraft:redstone_torch', C: 'minecraft:crafting_table',
    H: 'immersiveengineering:heavy_engineering', B: STAHLBLOCK
  })

  // Launch Pad: Stahlblock in der Mitte, Stahl-Blech außen
  ersetze('launch_pad', 'ad_astra:launch_pad', ['S|S', '|B|', 'S|S'], {
    S: BLECH, '|': '#ad_astra:steel_rods', B: STAHLBLOCK
  })

  // Oxygen Distributor: unten Steel Casing und Infused Alloy statt Desh-Platten
  ersetze('oxygen_distributor', 'ad_astra:oxygen_distributor', ['FGF', 'FLF', 'XOA'], {
    F: 'ad_astra:fan', G: 'ad_astra:large_gas_tank', L: 'ad_astra:oxygen_loader', O: 'ad_astra:oxygen_gear',
    X: GEHAEUSE, A: 'mekanism:alloy_infused'
  })

  // Oxygen Loader: zusätzlich Steel Casing und Steel Mechanical Component
  ersetze('oxygen_loader', 'ad_astra:oxygen_loader', ['XF#', 'G|G', '#RK'], {
    '#': '#ad_astra:steel_plates', F: 'ad_astra:fan', G: 'ad_astra:gas_tank', '|': 'minecraft:lightning_rod',
    R: 'minecraft:redstone_block', X: GEHAEUSE, K: 'immersiveengineering:component_steel'
  })

  // Gravity Normalizer: Reinforced Alloy und Heavy Engineering Block
  ersetze('gravity_normalizer', 'ad_astra:gravity_normalizer', ['EDE', 'AHA', '###'], {
    E: 'ad_astra:etrionic_capacitor', D: 'minecraft:diamond_block', '#': '#ad_astra:desh_plates',
    A: 'mekanism:alloy_reinforced', H: 'immersiveengineering:heavy_engineering'
  })

  // Rover: Light Engineering Block oben; Räder mit HDPE Sheets statt Wolle
  ersetze('tier_1_rover', 'ad_astra:tier_1_rover', ['DL|', 'GR#', 'WPW'], {
    D: '#ad_astra:desh_blocks', L: 'immersiveengineering:light_engineering', '|': '#ad_astra:steel_rods',
    G: 'ad_astra:large_gas_tank', R: 'ad_astra:radio', '#': 'ad_astra:desh_engine', W: 'ad_astra:wheel', P: '#ad_astra:desh_plates'
  })
  ersetze('wheel', 'ad_astra:wheel', [' H ', 'H#H', ' H '], {
    H: 'mekanism:hdpe_sheet', '#': '#ad_astra:steel_plates'
  })

  // Raumanzug: Stahl-Blech statt Stahlplatten
  ersetze('space_helmet', 'ad_astra:space_helmet', ['###', '#P#'], { '#': BLECH, P: 'minecraft:glass_pane' })
  ersetze('space_suit', 'ad_astra:space_suit', ['# #', 'TOT', '#W#'], {
    '#': BLECH, T: 'ad_astra:gas_tank', O: 'ad_astra:oxygen_gear', W: '#minecraft:wool'
  })
  ersetze('space_pants', 'ad_astra:space_pants', ['###', 'W W', '# #'], { '#': BLECH, W: '#minecraft:wool' })
  ersetze('space_boots', 'ad_astra:space_boots', ['W W', '# #'], { '#': BLECH, W: '#minecraft:wool' })

  // Anzug ab dem Mars (Netherite Space Suit): Steel Casing im freien Platz
  ersetze('netherite_space_suit', 'ad_astra:netherite_space_suit', ['#X#', 'TOT', '#N#'], {
    '#': '#ad_astra:ostrum_plates', X: GEHAEUSE, T: 'ad_astra:large_gas_tank', O: 'ad_astra:oxygen_gear',
    N: 'minecraft:netherite_chestplate'
  })

  // Raumstationen: ab dem Mars Stahlblöcke statt Barren und die Legierung der Stufe (je 4 Zutaten wie im Original)
  const station = (planet, zutaten) => {
    event.remove({ id: `ad_astra:space_station/${planet}_orbit_space_station` })
    event.custom({
      type: 'ad_astra:space_station_recipe',
      dimension: `ad_astra:${planet}_orbit`,
      ingredients: zutaten.map(z => ({ count: z[0], ingredient: z[1].startsWith('#') ? { tag: z[1].substring(1) } : { item: z[1] } })),
      structure: 'ad_astra:space_station'   // check:ok (Struktur, kein Item)
    }).id(`ieplus:space_station/${planet}_orbit`)
  }
  station('mars', [[16, '#forge:storage_blocks/steel'], [32, 'mekanism:alloy_infused'], [32, '#ad_astra:ostrum_ingots'], [32, '#ad_astra:ostrum_plates']])
  station('mercury', [[32, '#forge:storage_blocks/steel'], [32, 'mekanism:alloy_reinforced'], [32, '#ad_astra:calorite_ingots'], [32, '#ad_astra:calorite_plates']])
  station('venus', [[32, '#forge:storage_blocks/steel'], [32, 'mekanism:alloy_reinforced'], [32, '#ad_astra:calorite_ingots'], [32, '#ad_astra:calorite_plates']])
  station('glacio', [[16, '#forge:storage_blocks/steel'], [16, 'mekanism:alloy_atomic'], [32, '#ad_astra:ostrum_plates'], [32, '#ad_astra:calorite_plates']])
})
