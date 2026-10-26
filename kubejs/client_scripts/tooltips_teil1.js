// Tooltips für die eigenen Items aus Teil 1 (startup_scripts/teil1_items.js).
// Die Baupläne sind geschriebene Bücher mit Beschreibung und Rezept (server_scripts/starwars/einsiedler_shop.js).
// Texte der Story-Items: docs/story/texte/tooltips.md (Entwurf, User überarbeitet).
// Stand 2026-10-26, KubeJS 2001. Fassung 4 (Tooltip am 212er-Helm statt kubejs:klonhelm_repariert, O71).

ItemEvents.tooltip(event => {
  event.add('kubejs:galaktischer_strahlenschutz', [
    Text.gray('Gefertigt von Meisterin Cerina. Darin schläft das Relikt.'),
    Text.gray('Bauteil des Calorite-Triebwerks (Rakete T4).')
  ])
  event.add('kubejs:relikt', [
    Text.gray('Warm, obwohl es kalt sein müsste.'),
    Text.gray('Es ruft. Nur nicht dich.')
  ])
  ;['b1', 'b2', 'droideka'].forEach(t => event.add(`kubejs:steuerkern_${t}`, [
    Text.gray('Das Gehirn des Droiden. Zutat im Droid Fabricator, wird verbraucht.'),
    Text.gray('Rezept im Bauplan des Droiden (beim Einsiedler).')
  ]))

  // Story Teil 1
  event.add('kubejs:kaputter_klonhelm', [
    Text.gray('Visier gesprungen, Funk tot.'),
    Text.gray('Davijaan will ihn zurück, aber heil.')
  ])
  // Der reparierte Helm ist der echte 212er-Helm (O71); den gibt es nur über die Reparatur
  event.add('swgc:clone_212th_battalion_helmet', [
    Text.gray('Der Funk rauscht wieder.'),
    Text.gray('Bring ihn Davijaan auf dem Mond.')
  ])
  event.add('kubejs:siegel_der_traumwelten', [
    Text.gray('Licht und Dämmerung zugleich.'),
    Text.gray('Geschenk von Bodhi Bad Dur.')
  ])
  ;[1, 2, 3, 4].forEach(n => event.add(`kubejs:tempelrolle_${n}`, Text.gray('Alt und brüchig. Rechtsklick zum Lesen.')))
  event.add('kubejs:tagebuch_des_meisters', [
    Text.gray('Eilig geschrieben, die letzten Seiten zittrig.'),
    Text.gray('Rechtsklick zum Lesen.')
  ])
})
