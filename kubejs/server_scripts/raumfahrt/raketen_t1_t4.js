// Raketen T1 bis T4: Hürden je Stufe (docs/01_PROGRESSION.md, Pfad H; Balancing B2: docs/21_BALANCING.md Abschnitt 2).
// - Mekanism-Stufe im Triebwerk (F2a): T1 Basic, T2 Advanced, T3 Elite, T4 Ultimate Control Circuit
// - Teil aus einem anderen Pfad im Tank (F2): T2 Ventium (Blue Skies), T3 Imbued Slate (Blood Magic), T4 Elementium (Botania)
// - T4-Triebwerk zusätzlich mit dem Galaktischen Strahlenschutz vom Hellen Elfen (F2f)
// - B2 (2026-10-28): je Stufe die nächste Mekanism-Legierung, IE-Blöcke und -Spulen, ab T3 Kunststoff und AE2,
//   ab T4 Tinkers. T1 bleibt wie bisher.
// Die NASA Workbench hat 14 feste Plätze; die Zusätze für den Rumpf (Stahlblock, Engineering-Block) stecken
// deshalb im Tank (2 Tanks je Rakete, also 2 Stahlblöcke je Rakete).
// Triebwerke und Tanks bauen in Ad Astra aufeinander auf; die Zusätze der unteren Stufen stecken in den oberen mit drin.
// Treibstoff regelt kubejs/data/ad_astra/tags/fluids. Stand 2026-10-28, KubeJS 2001. B2-Teil UNGETESTET.

ServerEvents.recipes(event => {
  const STAHLBLOCK = '#forge:storage_blocks/steel'
  const STAB = 'ad_astra:steel_rod'

  // ── Triebwerke ──────────────────────────────────────────────────────────────
  const triebwerke = {
    // T1: wie bisher
    steel: [['#C#', '#E#', ' F '], {
      '#': '#ad_astra:steel_plates', C: 'mekanism:basic_control_circuit', E: 'ad_astra:engine_frame', F: 'ad_astra:fan'
    }],
    // T2: + Heavy Engineering Block, Infused Alloy
    desh: [['#C#', 'HEA', '#F#'], {
      '#': '#ad_astra:desh_plates', C: 'mekanism:advanced_control_circuit', E: 'ad_astra:steel_engine', F: 'ad_astra:fan',
      H: 'immersiveengineering:heavy_engineering', A: 'mekanism:alloy_infused'
    }],
    // T3: Reinforced Alloy, HV-Drahtspule, AE2 Logic Processor (B3)
    ostrum: [['ACA', 'LEW', '#F#'], {
      '#': '#ad_astra:ostrum_plates', C: 'mekanism:elite_control_circuit', E: 'ad_astra:desh_engine', F: 'ad_astra:fan',
      A: 'mekanism:alloy_reinforced', L: 'ae2:logic_processor', W: 'immersiveengineering:wirecoil_steel'
    }],
    // T4: Atomic Alloy, AE2 Calculation Processor, Galaktischer Strahlenschutz
    calorite: [['ACA', 'PES', '#F#'], {
      '#': '#ad_astra:calorite_plates', C: 'mekanism:ultimate_control_circuit', E: 'ad_astra:ostrum_engine', F: 'ad_astra:fan',
      A: 'mekanism:alloy_atomic', P: 'ae2:calculation_processor', S: 'kubejs:galaktischer_strahlenschutz'
    }]
  }
  Object.keys(triebwerke).forEach(m => {
    event.remove({ id: `ad_astra:${m}_engine` })
    event.shaped(`ad_astra:${m}_engine`, triebwerke[m][0], triebwerke[m][1]).id(`ieplus:raketen/${m}_engine`)
  })

  // ── Tanks (T1 bleibt das Ad-Astra-Rezept) ───────────────────────────────────
  const tanks = {
    // T2: Stahl-Blech, Electrum-Drahtspule, Stahlblock (Rumpf)
    desh: [['#BP', 'ST|', '#WP'], {
      '#': '#ad_astra:desh_plates', P: 'blue_skies:ventium_ingot', T: 'ad_astra:steel_tank', '|': STAB,
      B: STAHLBLOCK, S: 'immersiveengineering:sheetmetal_steel', W: 'immersiveengineering:wirecoil_electrum'
    }],
    // T3: HDPE Sheets, Stahlblock und Redstone Engineering Block (Rumpf)
    ostrum: [['#BP', 'HTH', '#RP'], {
      '#': '#ad_astra:ostrum_plates', P: 'bloodmagic:infusedslate', T: 'ad_astra:desh_tank',
      B: STAHLBLOCK, H: 'mekanism:hdpe_sheet', R: 'immersiveengineering:rs_engineering'
    }],
    // T4: Innenhülle aus Hepatizon oder Manyullyn, Stahlblock und Light Engineering Block (Rumpf)
    calorite: [['#BP', 'MTM', '#LP'], {
      '#': '#ad_astra:calorite_plates', P: 'botania:elementium_ingot', T: 'ad_astra:ostrum_tank',
      B: STAHLBLOCK, M: ['tconstruct:hepatizon_ingot', 'tconstruct:manyullyn_ingot'], L: 'immersiveengineering:light_engineering'
    }]
  }
  Object.keys(tanks).forEach(m => {
    event.remove({ id: `ad_astra:${m}_tank` })
    event.shaped(`ad_astra:${m}_tank`, tanks[m][0], tanks[m][1]).id(`ieplus:raketen/${m}_tank`)
  })

  // ── Flossen (alle Stufen): Stahl-Blech statt Stahlplatten ──────────────────
  event.remove({ id: 'ad_astra:rocket_fin' })
  event.shaped('4x ad_astra:rocket_fin', [' # ', '###', '# #'], {
    '#': 'immersiveengineering:sheetmetal_steel'
  }).id('ieplus:raketen/rocket_fin')
})
