// Raketentreibstoffe T4 bis T7 (F3, 2026-10-20; docs/15_RAUMFAHRT.md, „Treibstoff je Raketenstufe“).
// Die Stufen selbst stehen als Tags in kubejs/data (ad_astra/tags/fluids, ad_astra_rocketed/tags/fluids).
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

ServerEvents.tags('fluid', event => {
  // Hilfstag für das Refinery-Rezept: Cryo Fuel aus dem Cryo Freezer (bleibt nur als Zulieferer für T4)
  event.add('ieplus:cryo_fuel', 'ad_astra:cryo_fuel')
})

ServerEvents.recipes(event => {
  // T4: 10 Benzin + 20 Cryo Fuel → 10 Kryo-Raketentreibstoff, 480 Flux je Durchgang (B5 a, 2026-10-28: groß).
  // Je Start 3 Eimer (efficient_fuel ist leer): 3000 Benzin, 6000 Cryo Fuel (= 240 Ice Shards), ~290 000 Flux mit energyModifier 2.0
  event.custom({
    type: 'immersiveengineering:refinery',
    energy: 480,
    input0: { amount: 10, tag: 'forge:gasoline' },
    input1: { amount: 20, tag: 'ieplus:cryo_fuel' },
    result: { amount: 10, fluid: 'kubejs:kryo_treibstoff' }
  }).id('ieplus:refinery/kryo_treibstoff')
})
