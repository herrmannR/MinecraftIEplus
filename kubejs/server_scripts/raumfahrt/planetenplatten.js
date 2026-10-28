// Desh-, Ostrum- und Calorite-Platten nur noch im IE-Lichtbogenofen aus Planetenmetall + Stahl
// (Balancing B2, „der große Hebel“, User 2026-10-28; docs/21_BALANCING.md Abschnitt 2).
// Entfernt werden alle anderen Wege zu diesen Platten: Metal Press und Engineer's Hammer (beide bringt Ad Astra mit,
// immersiveengineering:metalpress/plate_* und immersiveengineering:crafting/plate_*_hammering); der Compressor ist
// schon in ad_astra_regeln.js entfernt. Kein anderer Mod im Pack stellt diese Platten her (JARs geprüft 2026-10-28).
// Menge: 2 Barren + 1 Stahl → 2 Platten, 10 s; Energie im Rezept 102 400 Flux, mit energyModifier 2.0 also 204 800.
// Stand 2026-10-28, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  ;['desh', 'ostrum', 'calorite'].forEach(m => {
    event.remove({ output: `ad_astra:${m}_plate` })
    event.custom({
      type: 'immersiveengineering:arc_furnace',
      input: { base_ingredient: { tag: `forge:ingots/${m}` }, count: 2 },
      additives: [{ tag: 'forge:ingots/steel' }],
      results: [{ base_ingredient: { item: `ad_astra:${m}_plate` }, count: 2 }],
      time: 200,
      energy: 102400
    }).id(`ieplus:arcfurnace/plate_${m}`)
  })
})
