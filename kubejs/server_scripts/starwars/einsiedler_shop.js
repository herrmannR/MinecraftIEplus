// Waren aus der Star-Wars-Galaxis gibt es nur beim Einsiedler auf dem Mond (O28, F5c/d, 2026-10-20; docs/18_STORY.md).
// - Credits nur als Quest-Belohnung und im Shop: die Rezepte aus Kupfer, Eisen und Gold entfallen; Umtausch zwischen den Stufen bleibt.
// - Durasteel: nur im Shop. Plastoid: der Shop verkauft nur die ersten 20 (Handel in Easy NPC begrenzt), danach
//   Werkbank-Rezept aus 2 HDPE Pellets (Mekanism) hinter dem Bauplan „Plastoid“ (User, 2026-10-20).
// - Baupläne (User, 2026-10-20): Der Einsiedler verkauft Schriftrollen (kubejs:bauplan_<name>, alle gleich aussehend).
//   Rechtsklick liest die Rolle: Sie verschwindet, das Rezept ist für die ganze Welt freigeschaltet (Weltwert in
//   server.persistentData) und alle Spieler bekommen das Advancement ieplus:bauplan/<name>, das den Eintrag im Buch
//   „Baupläne des Einsiedlers“ (Patchouli, patchouli_books/bauplaene) entsperrt. Wer offline war, bekommt es beim Einloggen.
//   Ist der Bauplan schon im Buch, bleibt die Rolle und es kommt nur eine Meldung.
//   Wer als Erster in der Welt eine Rolle liest, bekommt das Buch dazu (gedacht: Assembly Bench als erster Kauf).
//   Ohne Freischaltung liefert die Werkbank nichts; danach auch die Tinkers-Werkstation und Autocrafter (Weltwert, Test 56).
// - Droiden: Jeder Droide braucht im Droid Fabricator zusätzlich seinen Steuerkern (wird verbraucht).
//   Das Werkbank-Rezept des Kerns schaltet der Bauplan des Droiden frei.
// - Alle Rezepte stark verteuert (User, Test 43, 2026-10-20).
// - Befehle für den Host (nur mit Rechten):
//   /bauplan <name>          eine Schriftrolle (zum Testen oder für das Handelsfenster von Easy NPC)
//   /bauplan buch            Ersatzbuch
//   /bauplan zuruecksetzen   alle Baupläne der Welt wieder sperren, Bucheinträge bei allen Spielern zurücknehmen,
//                            das Buch wird beim nächsten Lesen einer Rolle erneut verteilt
//   /bauplan alles           Gegenteil: alle Baupläne frei, alle Einträge offen, Buch an den Ausführenden
// Rezept-IDs ieplus:bauplan/<ergebnis> werden in den Patchouli-Einträgen verwendet; beim Ändern dort mitziehen.
// - Buch in drei Kapiteln (User, 2026-10-20): Maschinen (Assembly Bench, Droid Fabricator, Gas Harvester), Waffen (Blaster,
//   Droiden), Rüstung (Klon, Jedi, Sith, Royal Guard, Vader; deren Werkbank-Rezepte sind bis zum Bauplan gesperrt).
// Stand 2026-10-20, KubeJS 2001. Fassung 10 (Bauplan Plastoid; Fassung 9: Tinkers-Werkstation, Test 60), UNGETESTET.

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
  plastoid: { titel: 'Plastoid', rezepte: [
    { ergebnis: 'swgc:plastoid', muster: ['HH'], zutaten: { H: 'mekanism:hdpe_pellet' } }] },
  droide_b1: { titel: 'Droide B-1', rezepte: [
    { ergebnis: 'kubejs:steuerkern_b1', muster: ['PCP', 'CRC', 'PCP'],
      zutaten: { P: 'swgc:plastoid', C: 'mekanism:basic_control_circuit', R: 'minecraft:redstone_block' } }] },
  droide_b2: { titel: 'Droide B-2', rezepte: [
    { ergebnis: 'kubejs:steuerkern_b2', muster: ['DCD', 'CXC', 'DCD'],
      zutaten: { D: 'swgc:durasteel_ingot', C: IEPLUS_ADV, X: 'minecraft:diamond_block' } }] },
  droide_droideka: { titel: 'Droideka', rezepte: [
    { ergebnis: 'kubejs:steuerkern_droideka', muster: ['DCD', 'CXC', 'DCD'],
      zutaten: { D: 'swgc:durasteel_ingot', C: 'mekanism:elite_control_circuit', X: 'minecraft:netherite_ingot' } }] },
  // Blaster: nur Buchseite mit Anleitung, keine Sperre an der Assembly Bench (User, 2026-10-20).
  // Die Bench liest ihre Blaster-Liste nur beim Start (static in AssemblyBenchMenu), eine Sperre zur Laufzeit ginge nur über Umwege.
  // Ein Bauplan für alle sieben Modelle (die Bench hat nur ein Blaster-Rezept für alle; User, 2026-10-20).
  blaster: { titel: 'Blaster', rezepte: [] },
  // Rüstungen: Originalrezepte aus swgc 1.0.3.1, gesperrt bis zum Bauplan (User, 2026-10-20). Kosten unverändert.
  ruestung_klon: { titel: 'Klon-Rüstung (Phase 2)', rezepte: [
    { ergebnis: 'swgc:clone_phase_2_helmet', muster: ['XXX', 'X X'], zutaten: { X: 'swgc:plastoid' } },
    { ergebnis: 'swgc:clone_phase_2_chestplate', muster: ['X X', 'XXX', 'XXX'], zutaten: { X: 'swgc:plastoid' } },
    { ergebnis: 'swgc:clone_phase_2_leggings', muster: ['XXX', 'X X', 'X X'], zutaten: { X: 'swgc:plastoid' } },
    { ergebnis: 'swgc:clone_phase_2_boots', muster: ['X X', 'X X'], zutaten: { X: 'swgc:plastoid' } }] },
  ruestung_jedi: { titel: 'Jedi-Gewand', rezepte: [
    { ergebnis: 'swgc:jedi_male_chestplate', muster: ['X X', 'XYX', 'XZX'], zutaten: { X: 'minecraft:string', Y: 'minecraft:white_wool', Z: 'minecraft:brown_wool' } },
    { ergebnis: 'swgc:jedi_male_leggings', muster: ['YXZ', 'X X', 'X X'], zutaten: { X: 'minecraft:string', Y: 'minecraft:white_wool', Z: 'minecraft:brown_wool' } },
    { ergebnis: 'swgc:jedi_male_boots', muster: ['X X', 'Y Z'], zutaten: { X: 'minecraft:string', Y: 'minecraft:white_wool', Z: 'minecraft:brown_wool' } }] },
  ruestung_sith: { titel: 'Sith-Gewand', rezepte: [
    { ergebnis: 'swgc:sith_male_helmet', muster: ['YXZ', 'X X'], zutaten: { X: 'minecraft:string', Y: 'minecraft:gray_wool', Z: 'minecraft:black_wool' } },
    { ergebnis: 'swgc:sith_male_chestplate', muster: ['X X', 'XYX', 'XZX'], zutaten: { X: 'minecraft:string', Y: 'minecraft:gray_wool', Z: 'minecraft:black_wool' } },
    { ergebnis: 'swgc:sith_male_leggings', muster: ['YXZ', 'X X', 'X X'], zutaten: { X: 'minecraft:string', Y: 'minecraft:gray_wool', Z: 'minecraft:black_wool' } },
    { ergebnis: 'swgc:sith_male_boots', muster: ['X X', 'Y Z'], zutaten: { X: 'minecraft:string', Y: 'minecraft:gray_wool', Z: 'minecraft:black_wool' } }] },
  ruestung_royal_guard: { titel: 'Rüstung der Royal Guard', rezepte: [
    { ergebnis: 'swgc:royal_guard_helmet', muster: ['DPD', 'W W'], zutaten: { D: 'swgc:durasteel_ingot', P: 'swgc:plastoid', W: 'minecraft:red_wool' } },
    { ergebnis: 'swgc:royal_guard_chestplate', muster: ['P P', 'DPD', 'WDW'], zutaten: { D: 'swgc:durasteel_ingot', P: 'swgc:plastoid', W: 'minecraft:red_wool' } },
    { ergebnis: 'swgc:royal_guard_leggings', muster: ['PDP', 'D D', 'W W'], zutaten: { D: 'swgc:durasteel_ingot', P: 'swgc:plastoid', W: 'minecraft:red_wool' } },
    { ergebnis: 'swgc:royal_guard_boots', muster: ['W P', 'D D'], zutaten: { D: 'swgc:durasteel_ingot', P: 'swgc:plastoid', W: 'minecraft:red_wool' } }] },
  ruestung_vader: { titel: 'Vader-Rüstung', rezepte: [
    { ergebnis: 'swgc:vader_helmet', muster: ['DPD', 'AOA', 'D D'], zutaten: { A: 'minecraft:amethyst_shard', D: 'swgc:durasteel_ingot', O: 'minecraft:obsidian', P: 'swgc:plastoid' } },
    { ergebnis: 'swgc:vader_chestplate', muster: ['DRD', 'DOD', 'DPD'], zutaten: { D: 'swgc:durasteel_ingot', O: 'minecraft:obsidian', P: 'swgc:plastoid', R: 'minecraft:redstone' } },
    { ergebnis: 'swgc:vader_leggings', muster: ['DOD', 'D D', 'D D'], zutaten: { D: 'swgc:durasteel_ingot', O: 'minecraft:obsidian' } },
    { ergebnis: 'swgc:vader_boots', muster: ['O O', 'D D'], zutaten: { D: 'swgc:durasteel_ingot', O: 'minecraft:obsidian' } }] }
}

function ieplusSchluessel(name) { return 'ieplus_bauplan_' + name }

// Die Freischaltung gilt für die ganze Welt; der Spieler wird nur gebraucht, um an den Server zu kommen.
// Die Tinkers-Werkstation (und Autocrafter) geben keinen Spieler mit (Test 56), dann über Utils.server.
function ieplusFreigeschaltet(grid, name) {
  var player = grid.player
  var server = (player && player.server) ? player.server : Utils.server
  if (!server) return false
  return server.persistentData.getBoolean(ieplusSchluessel(name))
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

// Gleicht die Bucheinträge eines Spielers (oder @a) an den Weltstand an: frei = vergeben, gesperrt = zurückgenommen
function ieplusEintraegeAbgleichen(server, ziel) {
  Object.keys(IEPLUS_BAUPLAENE).forEach(name => {
    if (!server.persistentData.getBoolean(ieplusSchluessel(name))) {
      server.runCommandSilent(`advancement revoke ${ziel} only ieplus:bauplan/${name}`)
    }
  })
  ieplusEintraegeGeben(server, ziel)
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

  // Rezepte hinter Bauplänen: Originalrezept entfernen (bei swgc gleicht die Rezept-ID der Item-ID), gesperrtes Rezept anlegen
  Object.keys(IEPLUS_BAUPLAENE).forEach(name => {
    IEPLUS_BAUPLAENE[name].rezepte.forEach(r => {
      if (r.ergebnis.indexOf('swgc:') === 0) event.remove({ id: r.ergebnis })
      event.shaped(r.ergebnis, r.muster, r.zutaten)
        .modifyResult((grid, result) => ieplusFreigeschaltet(grid, name) ? result : Item.empty)
        .id('ieplus:bauplan/' + r.ergebnis.replace(':', '_'))
    })
  })
})

// Rechtsklick mit einer Schriftrolle: Bauplan lesen
ItemEvents.rightClicked(event => {
  var id = String(event.item.id)
  if (id.indexOf('kubejs:bauplan_') !== 0) return
  var name = id.substring('kubejs:bauplan_'.length)
  var b = IEPLUS_BAUPLAENE[name]
  if (!b) return
  var server = event.server
  var player = event.player
  var daten = server.persistentData

  if (daten.getBoolean(ieplusSchluessel(name))) {
    player.tell(Text.gray('Den Bauplan „' + b.titel + '“ habt ihr schon im Buch.'))
    event.cancel()   // beendet den Handler (KubeJS 6), deshalb immer zuletzt
    return
  }
  event.item.shrink(1)
  daten.putBoolean(ieplusSchluessel(name), true)
  server.tell(Text.gold('Neuer Bauplan im Buch: ' + b.titel + (b.rezepte.length > 0 ? '. Das Rezept ist jetzt für alle herstellbar.' : '.')))
  if (!daten.getBoolean('ieplus_bauplan_buch_gegeben')) {
    daten.putBoolean('ieplus_bauplan_buch_gegeben', true)
    player.give(ieplusBauplanBuch())
    player.tell(Text.aqua('Der Einsiedler drückt dir ein Buch in die Hand: „Baupläne des Einsiedlers“.'))
  }
  ieplusEintraegeGeben(server, '@a')
  event.cancel()
})

// Beim Einloggen den Stand der Welt übernehmen (wer offline war, oder nach einem Zurücksetzen)
PlayerEvents.loggedIn(event => {
  ieplusEintraegeAbgleichen(event.server, event.player.username)
})

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event
  var befehl = Commands.literal('bauplan').requires(s => s.hasPermission(2))
  befehl = befehl.then(Commands.literal('buch').executes(ctx => {
    var player = ctx.source.getPlayerOrException()
    player.give(ieplusBauplanBuch())
    return 1
  }))
  befehl = befehl.then(Commands.literal('zuruecksetzen').executes(ctx => {
    var server = ctx.source.getServer()
    var daten = server.persistentData
    Object.keys(IEPLUS_BAUPLAENE).forEach(name => daten.remove(ieplusSchluessel(name)))
    daten.remove('ieplus_bauplan_buch_gegeben')
    server.runCommandSilent('advancement revoke @a from ieplus:bauplan/root')
    server.tell(Text.yellow('Alle Baupläne zurückgesetzt: Rezepte gesperrt, Bucheinträge geschlossen.'))
    return 1
  }))
  // Gegenteil von zuruecksetzen: alles frei, alle Einträge offen; wer den Befehl ausführt, bekommt ein Buch
  befehl = befehl.then(Commands.literal('alles').executes(ctx => {
    var server = ctx.source.getServer()
    var daten = server.persistentData
    Object.keys(IEPLUS_BAUPLAENE).forEach(name => daten.putBoolean(ieplusSchluessel(name), true))
    daten.putBoolean('ieplus_bauplan_buch_gegeben', true)
    ieplusEintraegeGeben(server, '@a')
    var player = ctx.source.getPlayer()
    if (player) player.give(ieplusBauplanBuch())
    server.tell(Text.yellow('Alle Baupläne freigeschaltet: Rezepte frei, Bucheinträge offen.'))
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
