// Mekanism-Generatoren teurer, aber nicht später erreichbar (B5 e, User 2026-10-28; docs/21_BALANCING.md 3e).
// Damit bleiben die IE-Generatoren länger die Hauptquelle. Es kommen nur IE-Teile dazu, die es ab K1/K3 gibt
// (Stahl, Engineering-Blöcke, Windmühlenflügel); keine Zutat aus einer späteren Stufe.
// Vorlage: Rezepte aus MekanismGenerators 10.4.16 (data/mekanismgenerators/recipes/generator/).
// Wind behält den Typ mekanism:mek_data, damit die Energie des Energy Tablet übernommen wird.
// Heat und Bio Generator bleiben unverändert. Stand 2026-10-28, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  const STAHL = { tag: 'forge:ingots/steel' }

  // Solar Generator: Eisen → Light Engineering Block, Osmium → Stahl
  event.remove({ id: 'mekanismgenerators:generator/solar' })
  event.custom({
    type: 'minecraft:crafting_shaped',
    pattern: ['###', 'ALA', 'SES'],
    key: {
      '#': { item: 'mekanismgenerators:solar_panel' },
      A: { tag: 'mekanism:alloys/infused' },
      L: { item: 'immersiveengineering:light_engineering' },
      S: STAHL,
      E: { item: 'mekanism:energy_tablet' }
    },
    result: { item: 'mekanismgenerators:solar_generator' }
  }).id('ieplus:mekanismgenerators/solar_generator')

  // Advanced Solar Generator: drei Eisen → Stahl, Heavy Engineering Block, Stahl
  event.remove({ id: 'mekanismgenerators:generator/advanced_solar' })
  event.custom({
    type: 'minecraft:crafting_shaped',
    pattern: ['PAP', 'PAP', 'SHS'],
    key: {
      P: { item: 'mekanismgenerators:solar_generator' },
      A: { tag: 'mekanism:alloys/infused' },
      H: { item: 'immersiveengineering:heavy_engineering' },
      S: STAHL
    },
    result: { item: 'mekanismgenerators:advanced_solar_generator' }
  }).id('ieplus:mekanismgenerators/advanced_solar_generator')

  // Wind Generator: oben ein IE-Windmühlenflügel, seitlich Stahl statt Osmium
  event.remove({ id: 'mekanismgenerators:generator/wind' })
  event.custom({
    type: 'mekanism:mek_data',
    pattern: [' B ', 'SAS', 'ECE'],
    key: {
      B: { item: 'immersiveengineering:windmill_blade' },
      S: STAHL,
      A: { tag: 'mekanism:alloys/infused' },
      E: { item: 'mekanism:energy_tablet' },
      C: { tag: 'forge:circuits/basic' }
    },
    result: { item: 'mekanismgenerators:wind_generator' }
  }).id('ieplus:mekanismgenerators/wind_generator')

  // Gas-Burning Generator: die vier Osmium-Ecken → Heavy Engineering Blocks
  event.remove({ id: 'mekanismgenerators:generator/gas_burning' })
  event.custom({
    type: 'minecraft:crafting_shaped',
    pattern: ['HAH', 'XCX', 'HAH'],
    key: {
      H: { item: 'immersiveengineering:heavy_engineering' },
      A: { tag: 'mekanism:alloys/infused' },
      X: { item: 'mekanism:steel_casing' },
      C: { item: 'mekanism:electrolytic_core' }
    },
    result: { item: 'mekanismgenerators:gas_burning_generator' }
  }).id('ieplus:mekanismgenerators/gas_burning_generator')
})
