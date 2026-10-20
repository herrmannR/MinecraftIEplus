// Immersive Aircraft (F17, 2026-10-20): ab dem Airship mit IE-Stahl.
// Cargo Airship und Warship brauchen das Airship bzw. das Cargo Airship, der Stahl steckt dort also mit drin.
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  event.remove({ id: 'immersive_aircraft:airship' })
  event.shaped('immersive_aircraft:airship', ['SSS', 'PSP', 'HHE'], {
    S: 'immersive_aircraft:sail', P: '#forge:plates/steel', H: 'immersive_aircraft:hull', E: 'immersive_aircraft:engine'
  }).id('ieplus:aircraft/airship')
})
