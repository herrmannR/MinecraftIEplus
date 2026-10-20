// Mekanism-Erzverarbeitung (bis 5×) auch für Silber, Nickel und Aluminium aus IE (User, 2026-10-20, O42).
// Items und Slurries: startup_scripts/mekanism_erze.js. Vorlage: die Blei-Rezepte von Mekanism 10.4.16
// (data/mekanism/recipes/processing/lead/), gleiche Mengen. Endprodukt ist der IE-Staub; den schmilzt der Ofen.
// Desh, Ostrum, Calorite, Kobalt und die Blue-Skies-Metalle bekommen bewusst nichts (Tor bzw. eigener Pfad).
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

ServerEvents.tags('item', event => {
  ;['silver', 'nickel', 'aluminum'].forEach(m => {
    event.add(`mekanism:clumps/${m}`, `kubejs:clump_${m}`)
    event.add(`mekanism:shards/${m}`, `kubejs:shard_${m}`)
    event.add(`mekanism:crystals/${m}`, `kubejs:crystal_${m}`)
    event.add(`mekanism:dirty_dusts/${m}`, `kubejs:dirty_dust_${m}`)
  })
})

ServerEvents.recipes(event => {
  ;['silver', 'nickel', 'aluminum'].forEach(m => {
    const id = s => `ieplus:mekanism_erze/${m}/${s}`
    const erz = { tag: `forge:ores/${m}` }
    const roh = { tag: `forge:raw_materials/${m}` }
    const rohblock = { tag: `forge:storage_blocks/raw_${m}` }
    const staub = `immersiveengineering:dust_${m}`
    const gas = (g, n) => ({ amount: n, gas: `mekanism:${g}` })

    // 2×: Enrichment Chamber
    event.custom({ type: 'mekanism:enriching', input: { ingredient: erz }, output: { count: 2, item: staub } }).id(id('dust_from_ore'))
    event.custom({ type: 'mekanism:enriching', input: { amount: 3, ingredient: roh }, output: { count: 4, item: staub } }).id(id('dust_from_raw_ore'))
    event.custom({ type: 'mekanism:enriching', input: { ingredient: rohblock }, output: { count: 12, item: staub } }).id(id('dust_from_raw_block'))
    event.custom({ type: 'mekanism:enriching', input: { ingredient: { tag: `mekanism:dirty_dusts/${m}` } }, output: { item: staub } }).id(id('dust_from_dirty_dust'))
    event.custom({ type: 'mekanism:crushing', input: { ingredient: { tag: `forge:ingots/${m}` } }, output: { item: staub } }).id(id('dust_from_ingot'))

    // 3×: Purification Chamber (Sauerstoff)
    event.custom({ type: 'mekanism:purifying', chemicalInput: gas('oxygen', 1), itemInput: { ingredient: erz }, output: { count: 3, item: `kubejs:clump_${m}` } }).id(id('clump_from_ore'))
    event.custom({ type: 'mekanism:purifying', chemicalInput: gas('oxygen', 1), itemInput: { ingredient: roh }, output: { count: 2, item: `kubejs:clump_${m}` } }).id(id('clump_from_raw_ore'))
    event.custom({ type: 'mekanism:purifying', chemicalInput: gas('oxygen', 2), itemInput: { ingredient: rohblock }, output: { count: 18, item: `kubejs:clump_${m}` } }).id(id('clump_from_raw_block'))
    event.custom({ type: 'mekanism:purifying', chemicalInput: gas('oxygen', 1), itemInput: { ingredient: { tag: `mekanism:shards/${m}` } }, output: { item: `kubejs:clump_${m}` } }).id(id('clump_from_shard'))
    event.custom({ type: 'mekanism:crushing', input: { ingredient: { tag: `mekanism:clumps/${m}` } }, output: { item: `kubejs:dirty_dust_${m}` } }).id(id('dirty_dust_from_clump'))

    // 4×: Chemical Injection Chamber (Chlorwasserstoff)
    event.custom({ type: 'mekanism:injecting', chemicalInput: gas('hydrogen_chloride', 1), itemInput: { ingredient: erz }, output: { count: 4, item: `kubejs:shard_${m}` } }).id(id('shard_from_ore'))
    event.custom({ type: 'mekanism:injecting', chemicalInput: gas('hydrogen_chloride', 1), itemInput: { amount: 3, ingredient: roh }, output: { count: 8, item: `kubejs:shard_${m}` } }).id(id('shard_from_raw_ore'))
    event.custom({ type: 'mekanism:injecting', chemicalInput: gas('hydrogen_chloride', 2), itemInput: { ingredient: rohblock }, output: { count: 24, item: `kubejs:shard_${m}` } }).id(id('shard_from_raw_block'))
    event.custom({ type: 'mekanism:injecting', chemicalInput: gas('hydrogen_chloride', 1), itemInput: { ingredient: { tag: `mekanism:crystals/${m}` } }, output: { item: `kubejs:shard_${m}` } }).id(id('shard_from_crystal'))

    // 5×: Dissolution Chamber, Chemical Washer, Chemical Crystallizer
    const schmutzig = `kubejs:dirty_${m}`
    const sauber = `kubejs:clean_${m}`
    event.custom({ type: 'mekanism:dissolution', gasInput: gas('sulfuric_acid', 1), itemInput: { ingredient: erz }, output: { amount: 1000, chemicalType: 'slurry', slurry: schmutzig } }).id(id('slurry_from_ore'))
    event.custom({ type: 'mekanism:dissolution', gasInput: gas('sulfuric_acid', 1), itemInput: { amount: 3, ingredient: roh }, output: { amount: 2000, chemicalType: 'slurry', slurry: schmutzig } }).id(id('slurry_from_raw_ore'))
    event.custom({ type: 'mekanism:dissolution', gasInput: gas('sulfuric_acid', 2), itemInput: { ingredient: rohblock }, output: { amount: 6000, chemicalType: 'slurry', slurry: schmutzig } }).id(id('slurry_from_raw_block'))
    event.custom({ type: 'mekanism:washing', fluidInput: { amount: 5, tag: 'minecraft:water' }, slurryInput: { amount: 1, slurry: schmutzig }, output: { amount: 1, slurry: sauber } }).id(id('slurry_clean'))
    event.custom({ type: 'mekanism:crystallizing', chemicalType: 'slurry', input: { amount: 200, slurry: sauber }, output: { item: `kubejs:crystal_${m}` } }).id(id('crystal_from_slurry'))
  })
})
