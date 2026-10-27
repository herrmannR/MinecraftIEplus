// Logbuch des Meisters (O51, docs/story/ABLAUF.md B5, B6).
// Ein Patchouli-Buch (patchouli_books/logbuch, gebaut mit tools/logbuch_gen.py) mit den Kapiteln Logbuch (Teil 1–5),
// Tempelrollen (1–4) und Tagebuch. Jeder Eintrag hängt an einem Advancement ieplus:logbuch/<eintrag>.
// - Freischaltung gilt für die ganze Welt (Weltwert in server.persistentData), wie bei den Bauplänen:
//   alle Spieler bekommen das Advancement; wer offline war, beim Einloggen.
// - Wer das Buch noch nicht hat, bekommt es beim ersten freigeschalteten Eintrag (oder beim Einloggen danach).
// - Logbuch-Teile schaltet der Befehl frei: aus der Belohnung einer Story-Quest (FTB Quests, Befehl mit erhöhten
//   Rechten) oder aus einem Easy-NPC-Dialog (Teil 1 beim Einschlag).
// - Tempelrollen und Tagebuch sind Lese-Items: Rechtsklick schaltet ihren Eintrag frei (Meldung im Chat), gelesen wird
//   im Logbuch; es öffnet sich nichts. Das Item bleibt.
// Befehle (nur mit Rechten):
//   /logbuch <eintrag>       Eintrag freischalten (teil1 … teil5, rolle_1 … rolle_4, tagebuch)
//   /logbuch buch            Ersatzbuch für den Ausführenden
//   /logbuch zuruecksetzen   alle Einträge sperren, Buch-Merker zurücksetzen
//   /logbuch alles           alle Einträge frei
// Stand 2026-10-27, KubeJS 2001. Fassung 2 (Lese-Items öffnen nichts mehr), Fassung 1 getestet (Tests 73, 74, 77).

const IEPLUS_LOGBUCH_BUCH = 'patchouli:logbuch'

// Titel wie in tools/logbuch_gen.py (Meldung im Chat); Reihenfolge nur für /logbuch alles
const IEPLUS_LOGBUCH = {
  teil1: 'Teil 1: Die dritte Welt',
  teil2: 'Teil 2: Tore aus Stein',
  teil3: 'Teil 3: Der Begleiter schweigt',
  teil4: 'Teil 4: Signal',
  teil5: 'Teil 5: Was im Blut ruft',
  rolle_1: 'Tempelrolle: Das Tor',
  rolle_2: 'Tempelrolle: Vom Blut',
  rolle_3: 'Tempelrolle: Vom Endlosen',
  rolle_4: 'Tempelrolle: Von der Heilung',
  tagebuch: 'Tagebuch des Meisters'
}

// Lese-Items → Eintrag
const IEPLUS_LOGBUCH_ITEMS = {
  'kubejs:tempelrolle_1': 'rolle_1',
  'kubejs:tempelrolle_2': 'rolle_2',
  'kubejs:tempelrolle_3': 'rolle_3',
  'kubejs:tempelrolle_4': 'rolle_4',
  'kubejs:tagebuch_des_meisters': 'tagebuch'
}

function ieplusLogbuchSchluessel(eintrag) { return 'ieplus_logbuch_' + eintrag }

function ieplusLogbuchItem() {
  return Item.of('patchouli:guide_book', { 'patchouli:book': IEPLUS_LOGBUCH_BUCH })
}

// Gibt einem Spieler das Buch, falls er es noch nie bekommen hat (Merker am Spieler)
function ieplusLogbuchBuchGeben(player) {
  if (player.persistentData.getBoolean('ieplus_logbuch_buch')) return
  player.persistentData.putBoolean('ieplus_logbuch_buch', true)
  player.give(ieplusLogbuchItem())
  player.tell(Text.aqua('DD3R8 hat dir das Logbuch des Meisters gegeben.'))
}

function ieplusLogbuchIrgendwasFrei(server) {
  return Object.keys(IEPLUS_LOGBUCH).some(e => server.persistentData.getBoolean(ieplusLogbuchSchluessel(e)))
}

// Gleicht die Advancements eines Spielers (oder @a) an den Weltstand an
function ieplusLogbuchAbgleichen(server, ziel) {
  Object.keys(IEPLUS_LOGBUCH).forEach(e => {
    if (server.persistentData.getBoolean(ieplusLogbuchSchluessel(e))) {
      server.runCommandSilent(`advancement grant ${ziel} until ieplus:logbuch/${e}`)   // until: Stamm „root“ gleich mit
    } else {
      server.runCommandSilent(`advancement revoke ${ziel} only ieplus:logbuch/${e}`)
    }
  })
}

// Schaltet einen Eintrag für die Welt frei. Liefert false, wenn er schon frei war.
function ieplusLogbuchFreischalten(server, eintrag) {
  var daten = server.persistentData
  if (daten.getBoolean(ieplusLogbuchSchluessel(eintrag))) return false
  daten.putBoolean(ieplusLogbuchSchluessel(eintrag), true)
  server.runCommandSilent(`advancement grant @a until ieplus:logbuch/${eintrag}`)
  server.tell(Text.gold('Neu im Logbuch des Meisters: ' + IEPLUS_LOGBUCH[eintrag]))
  server.players.forEach(p => ieplusLogbuchBuchGeben(p))
  return true
}

// Rechtsklick mit Tempelrolle oder Tagebuch: Eintrag freischalten (Meldung an alle) und das Buch nachreichen.
// Es öffnet sich nichts (Wunsch des Users, Test 75); gelesen wird im Logbuch. Das Item bleibt erhalten.
ItemEvents.rightClicked(event => {
  var eintrag = IEPLUS_LOGBUCH_ITEMS[String(event.item.id)]
  if (!eintrag) return
  if (!ieplusLogbuchFreischalten(event.server, eintrag)) {
    event.player.tell(Text.gray(IEPLUS_LOGBUCH[eintrag] + ' steht schon im Logbuch des Meisters.'))
  }
  ieplusLogbuchBuchGeben(event.player)
  event.cancel()   // beendet den Handler (KubeJS 6), deshalb zuletzt
})

// Beim Einloggen: Stand der Welt übernehmen, Buch nachreichen
PlayerEvents.loggedIn(event => {
  ieplusLogbuchAbgleichen(event.server, event.player.username)
  if (ieplusLogbuchIrgendwasFrei(event.server)) ieplusLogbuchBuchGeben(event.player)
})

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event
  var befehl = Commands.literal('logbuch').requires(s => s.hasPermission(2))
  befehl = befehl.then(Commands.literal('buch').executes(ctx => {
    ctx.source.getPlayerOrException().give(ieplusLogbuchItem())
    return 1
  }))
  befehl = befehl.then(Commands.literal('zuruecksetzen').executes(ctx => {
    var server = ctx.source.getServer()
    Object.keys(IEPLUS_LOGBUCH).forEach(e => server.persistentData.remove(ieplusLogbuchSchluessel(e)))
    server.runCommandSilent('advancement revoke @a from ieplus:logbuch/root')
    server.players.forEach(p => p.persistentData.remove('ieplus_logbuch_buch'))
    server.tell(Text.yellow('Logbuch zurückgesetzt: alle Einträge gesperrt.'))
    return 1
  }))
  befehl = befehl.then(Commands.literal('alles').executes(ctx => {
    var server = ctx.source.getServer()
    Object.keys(IEPLUS_LOGBUCH).forEach(e => ieplusLogbuchFreischalten(server, e))
    return 1
  }))
  Object.keys(IEPLUS_LOGBUCH).forEach(e => {
    befehl = befehl.then(Commands.literal(e).executes(ctx => {
      var server = ctx.source.getServer()
      var player = ctx.source.getPlayer()
      if (!ieplusLogbuchFreischalten(server, e) && player) player.tell(Text.gray(IEPLUS_LOGBUCH[e] + ' ist schon frei.'))
      return 1
    }))
  })
  event.register(befehl)
})
