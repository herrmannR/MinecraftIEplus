// Eigene Items für Teil 1 der Story.
// Entscheidungen: docs/20_ENTSCHEIDUNGEN.md (F2f, F2e, O28), docs/18_STORY.md (2026-10-20).
// Baupläne: Schriftrollen (Items) für den Shop, ein gemeinsames Patchouli-Buch mit gesperrten Einträgen (patchouli_books/bauplaene).
// Story-Items (Lese-Items, Helm, Siegel): docs/story/ABLAUF.md, Texte in docs/story/texte/ (2026-10-21).
// Bauplan „Pilotenhelm“ (O71, 2026-10-26): Davijaan gibt ihn beim Helm-Auftrag; die Reparatur ergibt den echten
// 212er-Helm swgc:clone_212th_battalion_helmet, kubejs:klonhelm_repariert entfällt.
// Stand 2026-10-26, KubeJS 2001. Fassung 6 (Bauplan Pilotenhelm), UNGETESTET.

StartupEvents.registry('item', event => {
  // Bauteil der Rakete T4, fertigt Meisterin Cerina (der „Helle Elf“) aus Relikt, Arcs, Elite Control Circuit und Elementium (F14)
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
    // Plastoid aus HDPE Pellets; der Einsiedler verkauft nur die ersten 20 Plastoid (User, 2026-10-20)
    plastoid: 'Plastoid',
    droide_b1: 'Droide B-1',
    droide_b2: 'Droide B-2',
    droide_droideka: 'Droideka',
    // Blaster: ein Bauplan öffnet alle sieben Blaster-Seiten; keine Sperre an der Assembly Bench, deren Blaster-Rezept
    // steht für alle Modelle gleich im Code (User, 2026-10-20)
    blaster: 'Blaster',
    // Rüstungen: schalten die Werkbank-Rezepte des Satzes frei (User, 2026-10-20)
    ruestung_klon: 'Klon-Rüstung (Phase 2)',
    ruestung_jedi: 'Jedi-Gewand',
    ruestung_sith: 'Sith-Gewand',
    ruestung_royal_guard: 'Rüstung der Royal Guard',
    ruestung_vader: 'Vader-Rüstung',
    // Erster Bauplan der Welt, von Davijaan beim Helm-Auftrag (O71); schaltet das Reparaturrezept frei
    pilotenhelm: 'Pilotenhelm'
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

  // ── Story Teil 1 (docs/story/ABLAUF.md) ──
  // Lese-Items: Rechtsklick schaltet ihren Eintrag frei (Chat-Meldung, nichts öffnet sich) im Patchouli-Buch „Logbuch des Meisters“ (server_scripts/story/logbuch.js);
  // das Item bleibt erhalten (B6). Rollen liegen im Tempel auf dem Merkur, das Tagebuch in der Truhe der Minen (meister_truhe).
  const tempelrollen = { 1: 'Das Tor', 2: 'Vom Blut', 3: 'Vom Endlosen', 4: 'Von der Heilung' }
  Object.keys(tempelrollen).forEach(n => {
    event.create('tempelrolle_' + n)
      .displayName('Tempelrolle: ' + tempelrollen[n])
      .texture('kubejs:item/tempelrolle')
      .rarity('uncommon').maxStackSize(1)
  })
  event.create('tagebuch_des_meisters')
    .displayName('Tagebuch des Meisters')
    .texture('minecraft:item/book')
    .rarity('rare').maxStackSize(1)

  // Helm des Einsiedlers (O25, O64: im Spiel „Pilotenhelm“, kein „Klon“ im Namen). Nicht tragbar.
  // Textur aus tools/story_texturen.py (Eisenhelm, umgefärbt). Repariert wird er zu swgc:clone_212th_battalion_helmet (O71).
  event.create('kaputter_klonhelm')
    .displayName('Verbeulter Pilotenhelm')
    .texture('kubejs:item/pilotenhelm_kaputt')
    .maxStackSize(1)

  // Geschenk von Bodhi Bad Dur nach dem letzten Blue-Skies-Boss; Zutat der Altar-Reparatur (O47)
  event.create('siegel_der_traumwelten')
    .displayName('Siegel der Traumwelten')
    .texture('blue_skies:item/materials/moonstone')
    .rarity('epic').glow(true).maxStackSize(1)
})
