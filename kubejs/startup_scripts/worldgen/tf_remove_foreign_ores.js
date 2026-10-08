// priority: 0
// Twilight Forest: nur Zinn, Blei und Aluminium als Zusatzerze, kein Certus (Entscheidung docs/03_ERZGENERATION.md, 2026-10-07).
// Mekanism setzt seine Erze in ALLE Biome, also auch in den TF (verifiziert per printFeatures, 2026-10-08).
// Hier werden sie aus den TF-Biomen entfernt. Mekanism-Zinn ist global per Config aus (Mekanism/world.toml).
//
// API (verifiziert gegen KubeJS 1802.5.5 per javap): removeFeatureById(BiomeFilter, Decoration, ResourceLocation[])

// Eigener Name: KubeJS 1802 lädt alle Startup-Skripte in einen gemeinsamen Scope (TF_BIOMES gibt es schon in tf_industrial_ores.js)
const TF_REMOVE_BIOMES = '/^twilightforest:.*/'

onEvent('worldgen.remove', event => {
  event.removeFeatureById(TF_REMOVE_BIOMES, 'underground_ores', [
    'mekanism:ore_osmium_upper',
    'mekanism:ore_osmium_middle',
    'mekanism:ore_osmium_small',
    'mekanism:ore_uranium_small',
    'mekanism:ore_uranium_buried',
    'mekanism:ore_fluorite_normal',
    'mekanism:ore_fluorite_buried',
    'mekanism:salt',
    // Blei: im TF über unser KubeJS-Erz (tf_industrial_ores.js) statt Mekanisms eigenem Feature
    'mekanism:ore_lead_normal',
    // Certus: AE2 setzt es in alle Biome außer Nether/End/Kategorie NONE, also in einige TF-Biome (javap InitBiomeModifications, 2026-10-08)
    'ae2:quartz_ore'
  ])
})
