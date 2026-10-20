// Eigene Raketentreibstoffe (F3, 2026-10-20; docs/recherche/f3_treibstoffe.md).
// T4: Kryo-Raketentreibstoff aus Benzin und Cryo Fuel (Rezept: server_scripts/raumfahrt/treibstoffe.js).
// T6 und T7 (Antimaterie-Treibstoffe) kommen mit Teil 2 und 3.
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

StartupEvents.registry('fluid', event => {
  event.create('kryo_treibstoff')
    .displayName('Kryo-Raketentreibstoff')
    .thinTexture(0x7FDBFF)
    .bucketColor(0x7FDBFF)
})
