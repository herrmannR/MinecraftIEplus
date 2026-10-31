// Dialogstufen der Story-Figuren (docs/story/ABLAUF.md B2).
// Je Figur ein Objective <figur>. Die Easy-NPC-Bedingung „Scoreboard“ liest den Score des Spielers,
// der gerade spricht; darum setzen Dialoge und Quests den Wert immer mit @a.
// - Beim Serverstart werden die Objectives angelegt (schon vorhandene bleiben, wie sie sind).
// - Beim Einloggen bekommt der Spieler je Figur den höchsten Wert, den irgendwer hat. So holt jemand,
//   der beim Setzen offline war, den Stand nach. Werte steigen nur, nie zurück.
// - Übernahme des alten Schemas: Ein Wert #<figur> im Objective story zählt beim Abgleich mit.
// UNGETESTET (Test 106).

const IEPLUS_DIALOG_FIGUREN = ['dd3r8', 'zwerg', 'bodhi', 'davijaan', 'cerina', 'vos']

// höchster Wert im Objective (alle Einträge, auch offline gespeicherte Spieler); -1, wenn keiner da ist
function ieplusDialogHoechsterWert(sb, objName) {
  var obj = sb.getObjective(objName)
  if (!obj) return -1
  var hoechst = -1
  var it = sb.getPlayerScores(obj).iterator()
  while (it.hasNext()) {
    var w = it.next().getScore()
    if (w > hoechst) hoechst = w
  }
  return hoechst
}

function ieplusDialogAltWert(sb, figur) {
  var obj = sb.getObjective('story')
  if (!obj || !sb.hasPlayerScore('#' + figur, obj)) return -1
  return sb.getOrCreatePlayerScore('#' + figur, obj).getScore()
}

ServerEvents.loaded(event => {
  IEPLUS_DIALOG_FIGUREN.forEach(f => event.server.runCommandSilent('scoreboard objectives add ' + f + ' dummy'))
  console.info('dialogstufen.js: Objectives <figur> angelegt')
})

PlayerEvents.loggedIn(event => {
  try {
    var player = event.player
    var server = event.server
    var sb = server.getScoreboard()
    IEPLUS_DIALOG_FIGUREN.forEach(f => {
      var name = f
      var ziel = Math.max(ieplusDialogHoechsterWert(sb, name), ieplusDialogAltWert(sb, f))
      if (ziel < 0) return
      var obj = sb.getObjective(name)
      var eigen = (obj && sb.hasPlayerScore(player.username, obj)) ? sb.getOrCreatePlayerScore(player.username, obj).getScore() : -1
      if (eigen >= ziel) return
      server.runCommandSilent('scoreboard players set ' + player.username + ' ' + name + ' ' + ziel)
      console.info('dialogstufen.js: ' + player.username + ' ' + name + ' ' + eigen + ' -> ' + ziel)
    })
  } catch (err) {
    console.error('dialogstufen.js: ' + err)
  }
})
