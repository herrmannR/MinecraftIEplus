// Tooltips für die eigenen Items aus Teil 1 (startup_scripts/teil1_items.js).
// Die Baupläne sind geschriebene Bücher mit Beschreibung und Rezept (server_scripts/starwars/einsiedler_shop.js).
// Stand 2026-10-20, KubeJS 2001. Fassung 2 nach Test 43.

ItemEvents.tooltip(event => {
  event.add('kubejs:galaktischer_strahlenschutz', [
    Text.gray('Gefertigt vom Hellen Elfen.'),
    Text.gray('Bauteil des Calorite-Triebwerks (Rakete T4).')
  ])
  event.add('kubejs:relikt', Text.gray('Gefunden in der Altar-Dimension. Was es kann, weiß vielleicht der Helle Elf.'))
  ;['b1', 'b2', 'droideka'].forEach(t => event.add(`kubejs:steuerkern_${t}`, [
    Text.gray('Das Gehirn des Droiden. Zutat im Droid Fabricator, wird verbraucht.'),
    Text.gray('Rezept im Bauplan des Droiden (beim Einsiedler).')
  ]))
})
