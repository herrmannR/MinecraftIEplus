// Star Wars Planets: Rezepte der Items entfernen, die wir nicht nutzen (User, 2026-10-31; docs/17_STAR_WARS_1.20.1.md).
// Grundsatz (2026-10-17): Was Star Wars Planets doppelt zu Galaxy in a Cube hat, fällt bei Star Wars Planets weg.
// - Lichtschwerter: kommen aus Galaxy in a Cube.
// - Blaster, Upgrades, Blaster Upgrader: Blaster kommen aus Galaxy in a Cube.
// - Kyber Crystal: Kyber kommt aus Galaxy in a Cube (hat kein eigenes Rezept; das Erz lässt ihn noch fallen,
//   bis der Weg Kyber-Erz → swgc:kyber_crystal gebaut ist, 17_STAR_WARS Punkt 4).
// Stormtrooper- und Beskar-Rüstung bleiben (Questtexte swplanets). Plastic Plate: progression/ideenimport_entfernt.js.
// Ausgeblendet in client_scripts/jei_ausblenden.js. Stand 2026-10-31, KubeJS 2001. UNGETESTET (Test 109).

const IEPLUS_SWPLANETS_ENTFERNT = [
  'swplanets:light_saber_base', 'swplanets:light_saber_blue', 'swplanets:light_saber_green', 'swplanets:light_saber_violet',
  'swplanets:light_saber_red', 'swplanets:light_saber_kylo_ren', 'swplanets:light_saber_dark_maul', 'swplanets:darksaber',
  'swplanets:blaster', 'swplanets:blaster_upgrader'
]

ServerEvents.recipes(event => {
  IEPLUS_SWPLANETS_ENTFERNT.forEach(id => event.remove({ output: id }))
})
