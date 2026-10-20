// Eigene Items für Teil 1 der Story.
// Entscheidungen: docs/20_ENTSCHEIDUNGEN.md (F2f, F2e, O28), docs/18_STORY.md (2026-10-20).
// Baupläne: Bauplan-Seiten (Items) für den Shop, ein gemeinsames Patchouli-Buch mit gesperrten Einträgen (patchouli_books/bauplaene).
// Stand 2026-10-20, KubeJS 2001. Fassung 3 (ein Buch, Bauplan-Seiten), UNGETESTET.

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

  // Bauplan-Seiten: Ware des Einsiedlers (O28, Test 43). Beim Erhalt werden sie ins Buch „Baupläne des Einsiedlers“
  // eingeklebt (verbraucht) und schalten Rezept und Bucheintrag frei (server_scripts/starwars/einsiedler_shop.js).
  const seiten = {
    assembly_bench: ['Assembly Bench', 'blueprint_lightsaber_hilt'],
    droid_fabricator: ['Droid Fabricator', 'blueprint_durasteel_ingot'],
    gas_harvester: ['Gas Harvester', 'blueprint_iron_ingot'],
    droide_b1: ['Droide B-1', 'blueprint_helmet'],
    droide_b2: ['Droide B-2', 'blueprint_chestplate'],
    droide_droideka: ['Droideka', 'blueprint_diamond']
  }
  Object.keys(seiten).forEach(name => {
    event.create('bauplan_' + name)
      .displayName('Bauplan-Seite: ' + seiten[name][0])
      .texture('swgc:item/' + seiten[name][1])
      .rarity('uncommon')
  })

  // Steuerkerne: Gehirn eines Droiden, zusätzliche Zutat im Droid Fabricator (wird verbraucht).
  // Werkbank-Rezept erst nach dem Bauplan des Droiden. Texturen: assets/kubejs/textures/item/steuerkern_*.png
  event.create('steuerkern_b1').displayName('Steuerkern B-1').rarity('uncommon')
  event.create('steuerkern_b2').displayName('Steuerkern B-2').rarity('uncommon')
  event.create('steuerkern_droideka').displayName('Steuerkern Droideka').rarity('rare')
})
