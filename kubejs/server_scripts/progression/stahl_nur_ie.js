// Stahl nur über IE (Hochofen, Lichtbogenofen); User, 2026-10-20.
// Ad Astra (Etrionic Blast Furnace) ist schon in raumfahrt/ad_astra_regeln.js entfernt.
// Tinkers (Stahlsplitter, Nebenprodukt der Foundry) bleibt bewusst.
// Stand 2026-10-20, KubeJS 2001. Getestet (Test 59, 2026-10-20).

ServerEvents.recipes(event => {
  // Mekanism: Enriched Iron + 10 Carbon → Stahlstaub im Metallurgic Infuser.
  // Stahlstaub aus dem Crusher (aus Stahlbarren) und sein Schmelzrezept bleiben, das ist kein neuer Stahl.
  event.remove({ id: 'mekanism:processing/steel/enriched_iron_to_dust' })
})
