// Mekanism-Erzverarbeitung (bis 5×) auch für Silber, Nickel und Aluminium aus IE (User, 2026-10-20, O42).
// Hier: Zwischenstufen als Items (Clump, Shard, Crystal, Dirty Dust) und die Slurries (dirty, clean).
// Rezepte: server_scripts/crossmod/mekanism_erze.js. Texturen: eingefärbte Blei-Texturen von Mekanism
// (kubejs/assets/kubejs/textures/item/<stufe>_<metall>.png).
// Stand 2026-10-20, KubeJS 2001 + KubeJS Mekanism. UNGETESTET.

const IEPLUS_ERZE = {
  silver: { name: 'Silver', farbe: 0xC6D3D6 },
  nickel: { name: 'Nickel', farbe: 0xB4BA9A },
  aluminum: { name: 'Aluminum', farbe: 0xDCE4E6 }
}

StartupEvents.registry('item', event => {
  const stufen = { clump: 'Clump', shard: 'Shard', crystal: 'Crystal', dirty_dust: 'Dirty Dust' }
  Object.keys(IEPLUS_ERZE).forEach(m => {
    Object.keys(stufen).forEach(s => {
      event.create(`${s}_${m}`)
        .displayName(`${IEPLUS_ERZE[m].name} ${stufen[s]}`)
        .texture(`kubejs:item/${s}_${m}`)
    })
  })
})

StartupEvents.registry('mekanism:slurry', event => { // check:ok (Registry von KubeJS Mekanism)
  Object.keys(IEPLUS_ERZE).forEach(m => {
    event.create(`dirty_${m}`, 'dirty').displayName(`Dirty ${IEPLUS_ERZE[m].name} Slurry`).color(IEPLUS_ERZE[m].farbe).ore(`forge:ores/${m}`)
    event.create(`clean_${m}`, 'clean').displayName(`Clean ${IEPLUS_ERZE[m].name} Slurry`).color(IEPLUS_ERZE[m].farbe).ore(`forge:ores/${m}`)
  })
})
