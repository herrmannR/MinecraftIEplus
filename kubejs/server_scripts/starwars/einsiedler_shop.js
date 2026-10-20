// Waren aus der Star-Wars-Galaxis gibt es nur beim Einsiedler auf dem Mond (O28, F5c/d, 2026-10-20; docs/18_STORY.md).
// - Credits nur als Quest-Belohnung und im Shop: die Rezepte aus Kupfer, Eisen und Gold entfallen; Umtausch zwischen den Stufen bleibt.
// - Plastoid, Durasteel: nur im Shop.
// - Baupläne (User, 2026-10-20): Der Einsiedler verkauft Bauplan-Seiten (kubejs:bauplan_<name>). Beim Erhalt wird die Seite
//   verbraucht („ins Buch eingeklebt“), das Rezept ist für die ganze Welt freigeschaltet (Weltwert in server.persistentData)
//   und alle Spieler bekommen das Advancement ieplus:bauplan/<name>, das den Eintrag im Buch „Baupläne des Einsiedlers“
//   (Patchouli, patchouli_books/bauplaene) entsperrt. Wer offline war, bekommt es beim Einloggen.
//   Wer bei der ersten Freischaltung der Welt kauft, bekommt das Buch dazu (gedacht: Assembly Bench als erster Kauf).
//   Ohne Freischaltung liefert die Werkbank nichts; Autocrafter (ohne Spieler) nie.
// - Droiden: Jeder Droide braucht im Droid Fabricator zusätzlich seinen Steuerkern (wird verbraucht).
//   Das Werkbank-Rezept des Kerns schaltet der Bauplan des Droiden frei.
// - Alle Rezepte stark verteuert (User, Test 43, 2026-10-20).
// - Befehle für den Host: /bauplan buch gibt ein Buch (Ersatz); /bauplan <name> gibt eine Bauplan-Seite.
// Rezept-IDs ieplus:bauplan/<ergebnis> werden in den Patchouli-Einträgen verwendet; beim Ändern dort mitziehen.
// Stand 2026-10-20, KubeJS 2001. Fassung 4 (ein Buch), UNGETESTET.

const IEPLUS_ADV = 'mekanism:advanced_control_circuit'
const IEPLUS_BAUPLAN_BUCH = 'patchouli:bauplaene'

// Ein Eintrag je Bauplan (Name = Item kubejs:bauplan_<name>, Advancement ieplus:bauplan/<name>, Eintrag im Buch).
const IEPLUS_BAUPLAENE = {
  assembly_bench: { titel: 'Assembly Bench', rezepte: [
    { ergebnis: 'swgc:assembly_bench', muster: [' C ', 'DWD', 'SSS'],
      zutaten: { C: IEPLUS_ADV, D: 'ad_astra:desh_plate', W: 'immersiveengineering:workbench', S: '#forge:storage_blocks/steel' } }] },
  droid_fabricator: { titel: 'Droid Fabricator', rezepte: [
    { ergebnis: 'swgc:droid_fabricator', muster: ['PCP', 'DFD', 'SSS'],
      zutaten: { P: '#forge:plates/steel', C: IEPLUS_ADV, D: 'swgc:durasteel_ingot', F: 'mekanism:steel_casing', S: '#forge:storage_blocks/steel' } }] },
  gas_harvester: { titel: 'Gas Harvester', rezepte: [
    { ergebnis: 'swgc:gas_harvester', muster: ['SCS', 'DTD', 'SRS'],
      zutaten: { S: '#forge:storage_blocks/steel', C: IEPLUS_ADV, D: 'ad_astra:desh_plate', T: 'mekanism:basic_fluid_tank', R: 'immersiveengineering:rs_engineering' } },
    { ergebnis: 'swgc:empty_gas_vessel', muster: [' D ', 'PGP', ' P '],
      zutaten: { D: 'ad_astra:desh_plate', P: '#forge:plates/steel', G: 'minecraft:glass' } }] },
  droide_b1: { titel: 'Droide B-1', rezepte: [
    { ergebnis: 'kubejs:steuerkern_b1', muster: ['PCP', 'CRC', 'PCP'],
      zutaten: { P: 'swgc:plastoid', C: 'mekanism:basic_control_circuit', R: 'minecraft:redstone_block' } }] },
  droide_b2: { titel: 'Droide B-2', rezepte: [
    { ergebnis: 'kubejs:steuerkern_b2', muster: ['DCD', 'CXC', 'DCD'],
      zutaten: { D: 'swgc:durasteel_ingot', C: IEPLUS_ADV, X: 'minecraft:diamond_block' } }] },
  droide_droideka: { titel: 'Droideka', rezepte: [
    { ergebnis: 'kubejs:steuerkern_droideka', muster: ['DCD', 'CXC', 'DCD'],
      zutaten: { D: 'swgc:durasteel_ingot', C: 'mekanism:elite_control_circuit', X: 'minecraft:netherite_ingot' } }] }
}

function ieplusSchluessel(name) { return 'ieplus_bauplan_' + name }

function ieplusFreigeschaltet(grid, name) {
  var player = grid.player
  if (!player || !player.server) return false
  return player.server.persistentData.getBoolean(ieplusSchluessel(name))
}

function ieplusBauplanBuch() {
  return Item.of('patchouli:guide_book', { 'patchouli:book': IEPLUS_BAUPLAN_BUCH })
}

// Gibt allen Spielern (oder einem) das Advancement der freigeschalteten Baupläne; entsperrt die Einträge im Buch
function ieplusEintraegeGeben(server, ziel) {
  Object.keys(IEPLUS_BAUPLAENE).forEach(name => {
    if (server.persistentData.getBoolean(ieplusSchluessel(name))) {
      server.runCommandSilent(`advancement grant ${ziel} until ieplus:bauplan/${name}`)   // until: Stamm „root“ gleich mit
    }
  })
}

ServerEvents.recipes(event => {
  // Credits
  ;['swgc:copper_credit', 'swgc:iron_credit', 'swgc:gold_credit'].forEach(id => event.remove({ id: id }))
  // Shop-Waren
  event.remove({ output: 'swgc:plastoid' })
  event.remove({ output: 'swgc:durasteel_ingot' })

  // Droiden mit Steuerkern; Eisenblöcke werden Stahlblöcke (verteuert, Test 43). "weapon" zeigt weiter auf die Blaster-Zutat.
  const stahl = { tag: 'forge:storage_blocks/steel' }
  const droiden = {
    b1: { kern: 'kubejs:steuerkern_b1', time: 160, weapon: 3, zutaten: [
      { count: 3, ingredient: stahl }, { count: 3, ingredient: { item: 'minecraft:redstone' } },
      { count: 2, ingredient: { item: 'minecraft:copper_block' } }, { ingredient: { tag: 'swgc:blasters' } }] },
    b2: { kern: 'kubejs:steuerkern_b2', time: 240, zutaten: [
      { count: 5, ingredient: stahl }, { count: 6, ingredient: { item: 'minecraft:redstone' } },
      { count: 2, ingredient: { item: 'minecraft:copper_block' } }, { count: 3, ingredient: { item: 'minecraft:diamond' } }] },
    droideka: { kern: 'kubejs:steuerkern_droideka', time: 200, zutaten: [
      { count: 4, ingredient: stahl }, { count: 8, ingredient: { item: 'minecraft:redstone' } },
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

  // Rezepte hinter Bauplänen
  ;['swgc:assembly_bench', 'swgc:droid_fabricator', 'swgc:gas_harvester', 'swgc:empty_gas_vessel'].forEach(id => event.remove({ id: id }))
  Object.keys(IEPLUS_BAUPLAENE).forEach(name => {
    IEPLUS_BAUPLAENE[name].rezepte.forEach(r => {
      event.shaped(r.ergebnis, r.muster, r.zutaten)
        .modifyResult((grid, result) => ieplusFreigeschaltet(grid, name) ? result : Item.empty)
        .id('ieplus:bauplan/' + r.ergebnis.replace(':', '_'))
    })
  })
})

// Kauf einer Bauplan-Seite
PlayerEvents.inventoryChanged(event => {
  var id = String(event.item.id)
  if (id.indexOf('kubejs:bauplan_') !== 0) return
  var name = id.substring('kubejs:bauplan_'.length)
  var b = IEPLUS_BAUPLAENE[name]
  if (!b) return
  var server = event.server
  var daten = server.persistentData
  var ersterKauf = !daten.getBoolean('ieplus_bauplan_buch_gegeben')

  event.item.shrink(event.item.count)   // Seite wird ins Buch eingeklebt
  if (ersterKauf) {
    daten.putBoolean('ieplus_bauplan_buch_gegeben', true)
    event.player.give(ieplusBauplanBuch())
    event.player.tell(Text.aqua('Der Einsiedler drückt dir ein Buch in die Hand: „Baupläne des Einsiedlers“.'))
  }
  if (!daten.getBoolean(ieplusSchluessel(name))) {
    daten.putBoolean(ieplusSchluessel(name), true)
    server.tell(Text.gold('Neuer Bauplan im Buch: ' + b.titel + '. Das Rezept ist jetzt für alle herstellbar.'))
  } else {
    event.player.tell(Text.gray('Diesen Bauplan habt ihr schon.'))
  }
  ieplusEintraegeGeben(server, '@a')
})

// Wer offline war, bekommt die Einträge beim Einloggen
PlayerEvents.loggedIn(event => {
  ieplusEintraegeGeben(event.server, event.player.username)
})

// /bauplan buch: Ersatzbuch; /bauplan <name>: Bauplan-Seite (zum Testen oder für das Handelsfenster von Easy NPC)
ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event
  var befehl = Commands.literal('bauplan').requires(s => s.hasPermission(2))
  befehl = befehl.then(Commands.literal('buch').executes(ctx => {
    var player = ctx.source.getPlayerOrException()
    player.give(ieplusBauplanBuch())
    return 1
  }))
  Object.keys(IEPLUS_BAUPLAENE).forEach(name => {
    befehl = befehl.then(Commands.literal(name).executes(ctx => {
      var player = ctx.source.getPlayerOrException()
      player.give('kubejs:bauplan_' + name)
      return 1
    }))
  })
  event.register(befehl)
})
