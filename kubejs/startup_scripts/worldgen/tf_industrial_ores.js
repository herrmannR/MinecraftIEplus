// priority: 0
// Twilight Forest als "Industrial Frontier": Zinn, Blei und Aluminium stark im TF.
// Entscheidung: docs/03_ERZGENERATION.md (2026-10-07). Werte sind TESTWERTE (Phase 1).
//
// Hinweise (verifiziert gegen KubeJS 1802.5.5):
// - KubeJS-Erze haben KEIN Retrogen -> nur neu generierte TF-Chunks bekommen diese Erze.
// - Biome-Filter: Regex auf Biome-ID, hier alle Biome mit Namespace "twilightforest".
// - TF-Dimension: min_y = -32, Grundblock minecraft:stone.

// String mit "/.../" wird von BiomeFilter als Regex geparst (UtilsJS.parseRegex)
const TF_BIOMES = '/^twilightforest:.*/'

function tfOre(event, id, stoneOre, deepslateOre, count, size) {
  event.addOre(ore => {
    ore.id = id
    ore.biomes = TF_BIOMES
    ore.addTarget('#minecraft:stone_ore_replaceables', stoneOre)
    ore.addTarget('#minecraft:deepslate_ore_replaceables', deepslateOre)
    ore.count(count).squared().uniformHeight(-32, 48)
    ore.size = size
    ore.noSurface = 0.0
    ore.worldgenLayer = 'underground_ores'
  })
}

onEvent('worldgen.add', event => {
  // Zinn: im TF exklusiv (Overworld-Generierung in Mekanism/world.toml abgeschaltet)
  tfOre(event, 'kubejs:tf_tin_ore', 'mekanism:tin_ore', 'mekanism:deepslate_tin_ore', 14, 9)
  // Blei: nur IE-Erz; Overworld reduziert (IE serverconfig), TF stark
  tfOre(event, 'kubejs:tf_lead_ore', 'immersiveengineering:ore_lead', 'immersiveengineering:deepslate_ore_lead', 12, 9)
  // Aluminium (Bauxit): Overworld reduziert (IE serverconfig), TF stark
  tfOre(event, 'kubejs:tf_aluminum_ore', 'immersiveengineering:ore_aluminum', 'immersiveengineering:deepslate_ore_aluminum', 14, 8)
})
