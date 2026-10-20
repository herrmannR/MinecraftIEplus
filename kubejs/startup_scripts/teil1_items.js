// Eigene Items für Teil 1 der Story.
// Entscheidungen: docs/20_ENTSCHEIDUNGEN.md (F2f, F2e, O28), docs/18_STORY.md (2026-10-20).
// Baupläne: Schriftrollen (Items) für den Shop, ein gemeinsames Patchouli-Buch mit gesperrten Einträgen (patchouli_books/bauplaene).
// Stand 2026-10-20, KubeJS 2001. Fassung 4 (Schriftrollen), UNGETESTET.

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

  // Baupläne: Schriftrollen, Ware des Einsiedlers (O28, Test 43). Alle sehen gleich aus (kubejs/assets/kubejs/textures/item/bauplan_rolle.png).
  // Rechtsklick liest die Rolle: Sie verschwindet, Rezept und Eintrag im Buch „Baupläne des Einsiedlers“ werden frei
  // (server_scripts/starwars/einsiedler_shop.js).
  const rollen = {
    assembly_bench: 'Assembly Bench',
    droid_fabricator: 'Droid Fabricator',
    gas_harvester: 'Gas Harvester',
    droide_b1: 'Droide B-1',
    droide_b2: 'Droide B-2',
    droide_droideka: 'Droideka',
    // Blaster: nur Buchseite, keine Sperre an der Assembly Bench (User, 2026-10-20)
    blaster_dc15a: 'Blaster DC-15A',
    blaster_dc15s: 'Blaster DC-15S',
    blaster_dc17: 'Blaster DC-17',
    blaster_dh17: 'Blaster DH-17',
    blaster_e5: 'Blaster E-5',
    blaster_tl50: 'Blaster TL-50',
    blaster_amban_sniper_rifle: 'Amban-Gewehr'
  }
  Object.keys(rollen).forEach(name => {
    event.create('bauplan_' + name)
      .displayName('Bauplan: ' + rollen[name])
      .texture('kubejs:item/bauplan_rolle')
      .rarity('uncommon')
  })

  // Steuerkerne: Gehirn eines Droiden, zusätzliche Zutat im Droid Fabricator (wird verbraucht).
  // Werkbank-Rezept erst nach dem Bauplan des Droiden. Texturen: assets/kubejs/textures/item/steuerkern_*.png
  event.create('steuerkern_b1').displayName('Steuerkern B-1').rarity('uncommon')
  event.create('steuerkern_b2').displayName('Steuerkern B-2').rarity('uncommon')
  event.create('steuerkern_droideka').displayName('Steuerkern Droideka').rarity('rare')
})
