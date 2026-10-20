// Info-Seiten in JEI für Items und Flüssigkeiten, deren Rezept JEI nicht findet.
// Stand 2026-10-20, KubeJS 2001. Getestet (Test 59, 2026-10-20).

JEIEvents.information(event => {
  // Cryo Fuel: Ad Astra zeigt das Ergebnis des Cryo Freezer in JEI nur als Füllbalken,
  // deshalb findet JEI über Cryo Fuel (R) kein Rezept. Über Eis (U) oder den Cryo Freezer ist es sichtbar.
  const cryo = [
    'Entsteht im Cryo Freezer (Ad Astra) aus Eis, Packeis, Blaueis oder Ice Shards; braucht Strom.',
    'Allein nimmt es keine Rakete. Zutat für den Kryo-Raketentreibstoff (Rakete T4): IE Refinery, Benzin + Cryo Fuel.'
  ]
  event.addItem('ad_astra:cryo_fuel_bucket', cryo)
  event.addFluid('ad_astra:cryo_fuel', cryo)
})
