// Raketen T1 bis T4: vier Hürden je Stufe (docs/01_PROGRESSION.md, Pfad H).
// - Mekanism-Stufe im Triebwerk (F2a): T1 Basic, T2 Advanced, T3 Elite, T4 Ultimate Control Circuit
// - Teil aus einem anderen Pfad im Tank (F2): T2 Ventium (Blue Skies), T3 Imbued Slate (Blood Magic), T4 Elementium (Botania)
//   (T1: Mekanism über den flüssigen Sauerstoff, braucht hier nichts)
// - T4-Triebwerk zusätzlich mit dem Galaktischen Strahlenschutz vom Hellen Elfen (F2f)
// Triebwerke und Tanks bauen in Ad Astra aufeinander auf; die Zusätze der unteren Stufen stecken also in den oberen mit drin.
// Rumpf und Treibstoff regeln Ad Astra selbst bzw. kubejs/data/ad_astra/tags/fluids.
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  const stufen = [
    { metall: 'steel',    vorher: 'ad_astra:engine_frame',  tankVorher: 'ad_astra:gas_tank',    kreis: 'mekanism:basic_control_circuit',    pfad: null },
    { metall: 'desh',     vorher: 'ad_astra:steel_engine',  tankVorher: 'ad_astra:steel_tank',  kreis: 'mekanism:advanced_control_circuit', pfad: 'blue_skies:ventium_ingot' },
    { metall: 'ostrum',   vorher: 'ad_astra:desh_engine',   tankVorher: 'ad_astra:desh_tank',   kreis: 'mekanism:elite_control_circuit',    pfad: 'bloodmagic:infusedslate' },
    { metall: 'calorite', vorher: 'ad_astra:ostrum_engine', tankVorher: 'ad_astra:ostrum_tank', kreis: 'mekanism:ultimate_control_circuit', pfad: 'botania:elementium_ingot' }
  ]

  stufen.forEach(s => {
    const platten = `#ad_astra:${s.metall}_plates`

    // Triebwerk: ein Platte oben wird zum Schaltkreis
    event.remove({ id: `ad_astra:${s.metall}_engine` })
    if (s.metall === 'calorite') {
      event.shaped(`ad_astra:${s.metall}_engine`, ['#C#', '#E#', 'SF '], {
        '#': platten, C: s.kreis, E: s.vorher, F: 'ad_astra:fan', S: 'kubejs:galaktischer_strahlenschutz'
      }).id(`ieplus:raketen/${s.metall}_engine`)
    } else {
      event.shaped(`ad_astra:${s.metall}_engine`, ['#C#', '#E#', ' F '], {
        '#': platten, C: s.kreis, E: s.vorher, F: 'ad_astra:fan'
      }).id(`ieplus:raketen/${s.metall}_engine`)
    }

    // Tank: die zwei freien Plätze rechts bekommen das Teil aus dem anderen Pfad (2 je Tank, 4 je Rakete)
    if (s.pfad) {
      event.remove({ id: `ad_astra:${s.metall}_tank` })
      event.shaped(`ad_astra:${s.metall}_tank`, ['##P', '#T|', '##P'], {
        '#': platten, P: s.pfad, T: s.tankVorher, '|': 'ad_astra:steel_rod'
      }).id(`ieplus:raketen/${s.metall}_tank`)
    }
  })
})
