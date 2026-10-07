// priority: 0
// Mond (Beyond Earth) als Hauptquelle für Osmium und Certus.
// Entscheidung: docs/03_ERZGENERATION.md + docs/15_RAUMFAHRT.md (2026-10-07). Werte sind TESTWERTE (Phase 1).
//
// Verifiziert (Beyond Earth 6.2 JAR + ProbeJS-Dump):
// - Mond hat genau ein Biom: beyond_earth:moon_desert
// - Dimension: min_y = 0, Höhe 384, Grundblock beyond_earth:moon_stone
// - Tag #beyond_earth:moon_ore_replaceables = [beyond_earth:moon_stone] (nutzt Beyond Earth selbst für Mond-Erze)
// Planeten sind neue Dimensionen -> kein Retrogen nötig.

const MOON_BIOME = 'beyond_earth:moon_desert'
const MOON_STONE = '#beyond_earth:moon_ore_replaceables'

function moonOre(event, id, ore, count, size, minY, maxY) {
  event.addOre(o => {
    o.id = id
    o.biomes = MOON_BIOME
    o.addTarget(MOON_STONE, ore)
    o.count(count).squared().uniformHeight(minY, maxY)
    o.size = size
    o.noSurface = 0.0
    o.worldgenLayer = 'underground_ores'
  })
}

onEvent('worldgen.add', event => {
  // Osmium: Mond = Ausbau-Quelle für Mekanism (Overworld nur Einstieg)
  moonOre(event, 'kubejs:moon_osmium_ore', 'mekanism:osmium_ore', 16, 9, 0, 128)
  // Certus: Mond = Hauptquelle für AE2 (Overworld + Meteoriten nur für den frühen Storage-Layer)
  moonOre(event, 'kubejs:moon_certus_ore', 'ae2:quartz_ore', 12, 7, 0, 96)
})
