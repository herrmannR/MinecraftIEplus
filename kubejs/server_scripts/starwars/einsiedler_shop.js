// Waren aus der Star-Wars-Galaxis gibt es nur beim Einsiedler auf dem Mond (O28, F5c/d, 2026-10-20; docs/18_STORY.md).
// - Credits nur als Quest-Belohnung und im Shop: die Rezepte aus Kupfer, Eisen und Gold entfallen; Umtausch zwischen den Stufen bleibt.
// - Plastoid, Durasteel: nur im Shop.
// - Steuerkerne: nur im Shop; jeder Droide braucht im Droid Fabricator zusätzlich seinen Kern (wird verbraucht).
// - Baupläne: Wer einen Bauplan zum ersten Mal ins Inventar bekommt, schaltet das Rezept für die ganze Welt frei
//   (Weltwert in server.persistentData, gilt auch für Mitspieler, die gerade nicht online sind).
//   Ohne Freischaltung liefert die Werkbank nichts; Autocrafter (ohne Spieler) liefern nie etwas.
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

const IEPLUS_BAUPLAENE = {
  'kubejs:bauplan_assembly_bench': { schluessel: 'ieplus_bauplan_assembly_bench', name: 'Assembly Bench' },
  'kubejs:bauplan_droid_fabricator': { schluessel: 'ieplus_bauplan_droid_fabricator', name: 'Droid Fabricator' },
  'kubejs:bauplan_gas_harvester': { schluessel: 'ieplus_bauplan_gas_harvester', name: 'Gas Harvester und Empty Gas Vessel' }
}

function ieplusFreigeschaltet(grid, schluessel) {
  const player = grid.player
  if (!player || !player.server) return false
  return player.server.persistentData.getBoolean(schluessel)
}

ServerEvents.recipes(event => {
  // Credits
  ;['swgc:copper_credit', 'swgc:iron_credit', 'swgc:gold_credit'].forEach(id => event.remove({ id: id }))
  // Shop-Waren
  event.remove({ output: 'swgc:plastoid' })
  event.remove({ output: 'swgc:durasteel_ingot' })

  // Droiden mit Steuerkern (Originalrezepte aus swgc 1.0.3.1, ergänzt um den Kern; "weapon" zeigt weiter auf die Blaster-Zutat)
  const droiden = {
    b1: { kern: 'kubejs:steuerkern_b1', time: 160, weapon: 3, zutaten: [
      { count: 3, ingredient: { item: 'minecraft:iron_block' } }, { count: 3, ingredient: { item: 'minecraft:redstone' } },
      { count: 2, ingredient: { item: 'minecraft:copper_block' } }, { ingredient: { tag: 'swgc:blasters' } }] },
    b2: { kern: 'kubejs:steuerkern_b2', time: 240, zutaten: [
      { count: 5, ingredient: { item: 'minecraft:iron_block' } }, { count: 6, ingredient: { item: 'minecraft:redstone' } },
      { count: 2, ingredient: { item: 'minecraft:copper_block' } }, { count: 3, ingredient: { item: 'minecraft:diamond' } }] },
    droideka: { kern: 'kubejs:steuerkern_droideka', time: 200, zutaten: [
      { count: 4, ingredient: { item: 'minecraft:iron_block' } }, { count: 8, ingredient: { item: 'minecraft:redstone' } },
      { count: 3, ingredient: { item: 'minecraft:copper_block' } }, { count: 4, ingredient: { item: 'minecraft:diamond' } },
      { ingredient: { item: 'swgc:plastoid' } }] }
  }
  Object.keys(droiden).forEach(id => {
    const d = droiden[id]
    event.remove({ id: `swgc:${id}` })
    const json = { type: 'swgc:fabrication', ingredients: d.zutaten.concat([{ ingredient: { item: d.kern } }]), result: { item: `swgc:${id}` }, time: d.time }
    if (d.weapon !== undefined) json.weapon = d.weapon
    event.custom(json).id(`ieplus:swgc/${id}`)
  })

  // Rezepte hinter Bauplänen (Originalmuster aus swgc 1.0.3.1)
  event.remove({ id: 'swgc:assembly_bench' })
  event.shaped('swgc:assembly_bench', [' P ', '___', '|||'], { P: 'minecraft:paper', _: 'minecraft:iron_ingot', '|': '#minecraft:planks' })
    .modifyResult((grid, result) => ieplusFreigeschaltet(grid, 'ieplus_bauplan_assembly_bench') ? result : Item.empty)
    .id('ieplus:swgc/assembly_bench')

  event.remove({ id: 'swgc:droid_fabricator' })
  event.shaped('swgc:droid_fabricator', ['i*i', 'ICI', 'III'], { i: 'minecraft:iron_ingot', '*': 'minecraft:redstone', C: 'minecraft:copper_ingot', I: 'minecraft:iron_block' })
    .modifyResult((grid, result) => ieplusFreigeschaltet(grid, 'ieplus_bauplan_droid_fabricator') ? result : Item.empty)
    .id('ieplus:swgc/droid_fabricator')

  event.remove({ id: 'swgc:gas_harvester' })
  event.shaped('swgc:gas_harvester', ['IRI', 'CGC', 'RiR'], { I: 'minecraft:iron_block', R: 'minecraft:redstone', C: 'minecraft:copper_ingot', G: 'minecraft:glass', i: 'minecraft:iron_ingot' })
    .modifyResult((grid, result) => ieplusFreigeschaltet(grid, 'ieplus_bauplan_gas_harvester') ? result : Item.empty)
    .id('ieplus:swgc/gas_harvester')

  event.remove({ id: 'swgc:empty_gas_vessel' })
  event.shaped('swgc:empty_gas_vessel', ['N', 'G', 'I'], { N: 'minecraft:iron_nugget', G: 'minecraft:glass', I: 'minecraft:iron_ingot' })
    .modifyResult((grid, result) => ieplusFreigeschaltet(grid, 'ieplus_bauplan_gas_harvester') ? result : Item.empty)
    .id('ieplus:swgc/empty_gas_vessel')
})

// Freischaltung beim ersten Erhalt eines Bauplans
PlayerEvents.inventoryChanged(event => {
  const eintrag = IEPLUS_BAUPLAENE[String(event.item.id)]
  if (!eintrag) return
  const daten = event.server.persistentData
  if (daten.getBoolean(eintrag.schluessel)) return
  daten.putBoolean(eintrag.schluessel, true)
  event.server.tell(Text.gold(`Bauplan gelesen: ${eintrag.name} ist jetzt für alle herstellbar.`))
})
