// Eigene Items für Teil 1 der Story.
// Entscheidungen: docs/20_ENTSCHEIDUNGEN.md (F2f, F2e, O28, F5c/d), docs/18_STORY.md (2026-10-20).
// Namen auf Deutsch, Texturen vorerst von Vanilla geliehen.
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

StartupEvents.registry('item', event => {
  // Bauteil der Rakete T4, fertigt der Helle Elf aus Relikt, Arcs, Elite Control Circuit und Elementium (F14)
  event.create('galaktischer_strahlenschutz')
    .displayName('Galaktischer Strahlenschutz')
    .texture('minecraft:item/heart_of_the_sea')
    .rarity('epic').glow(true).maxStackSize(1)

  // Liegt mit dem Tagebuch des Meisters in der Altar-Dimension (loot_tables/chests/meister_truhe)
  event.create('relikt')
    .displayName('Relikt')
    .texture('minecraft:item/echo_shard')
    .rarity('epic').glow(true).maxStackSize(1)

  // Steuerkerne: zusätzliche Zutat im Droid Fabricator, nur im Shop des Einsiedlers (O28)
  event.create('steuerkern_b1').displayName('Steuerkern B-1').texture('minecraft:block/redstone_torch').rarity('uncommon')
  event.create('steuerkern_b2').displayName('Steuerkern B-2').texture('minecraft:block/redstone_torch').rarity('uncommon')
  event.create('steuerkern_droideka').displayName('Steuerkern Droideka').texture('minecraft:block/redstone_torch').rarity('rare')

  // Baupläne: schalten beim ersten Erhalt ein Rezept für die ganze Welt frei (server_scripts/starwars/einsiedler_shop.js)
  event.create('bauplan_assembly_bench').displayName('Bauplan: Assembly Bench').texture('minecraft:item/paper').rarity('uncommon').maxStackSize(1)
  event.create('bauplan_droid_fabricator').displayName('Bauplan: Droid Fabricator').texture('minecraft:item/paper').rarity('uncommon').maxStackSize(1)
  event.create('bauplan_gas_harvester').displayName('Bauplan: Gas Harvester').texture('minecraft:item/paper').rarity('uncommon').maxStackSize(1)
})
