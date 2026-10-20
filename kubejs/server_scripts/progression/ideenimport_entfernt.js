// Entfernungen aus dem Ideenimport (User, 2026-10-17; docs/20_ENTSCHEIDUNGEN.md).
// Alles hier Entfernte steht auch in client_scripts/jei_ausblenden.js.
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  // Digital Miner: zu stark, Dopplung zum IE-Excavator
  event.remove({ output: 'mekanism:digital_miner' })
  // AE2 erzeugt keine Energie
  event.remove({ output: 'ae2:vibration_chamber' })
  event.remove({ output: 'ae2:crystal_resonance_generator' })
  // Kunststoff aus Star Wars Planets: Star-Wars-Kunststoff ist Plastoid (Galaxy in a Cube).
  // Folge: Stormtrooper-Rüstung und der Blaster von Star Wars Planets sind bis zur Entscheidung F12 nicht herstellbar.
  event.remove({ output: 'swplanets:plastic_plate' })
})
