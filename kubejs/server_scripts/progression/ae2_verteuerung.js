// AE2 zweistufig (F10, 2026-10-20): Der Storage-Layer (AE1, K3) bleibt wie er ist.
// ME Controller und ME Drive brauchen zusätzlich einen Advanced Control Circuit (Mekanism) und IE-Stahlplatten.
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:network/blocks/controller' })
  event.shaped('ae2:controller', ['PbP', 'bcb', 'aCa'], {
    P: '#forge:plates/steel', a: 'ae2:smooth_sky_stone_block', b: 'ae2:fluix_crystal',
    c: 'ae2:engineering_processor', C: 'mekanism:advanced_control_circuit'
  }).id('ieplus:ae2/controller')

  event.remove({ id: 'ae2:network/blocks/storage_drive' })
  event.shaped('ae2:drive', ['PbP', 'cCc', 'PbP'], {
    P: '#forge:plates/steel', b: 'ae2:engineering_processor', c: 'ae2:fluix_glass_cable',
    C: 'mekanism:advanced_control_circuit'
  }).id('ieplus:ae2/drive')
})
