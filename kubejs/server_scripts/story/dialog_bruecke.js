// Brücke von Easy-NPC-Dialogen zu KubeJS-Befehlen (2026-11-01).
// Easy NPC führt Dialogbefehle als Figur aus. Vanilla-Befehle (scoreboard, tag, give) kommen an, eigene Befehle wie
// /logbuch dagegen nicht (DD3R8 „Zeig her“: kein Logbuch, kein Fehler im Log). Darum setzt der Dialog nur einen Tag
// ieplus_cmd_<auftrag> am Spieler; dieses Skript sieht ihn, nimmt ihn weg und führt die Befehle mit Serverrechten aus.
// Geprüft wird jeden Tick (nur zwei Tags je Spieler, kostet kaum etwas).
// Stand 2026-11-01, KubeJS 2001. UNGETESTET (Test 112).

const IEPLUS_BRUECKE = {
  // DD3R8, „Zeig her“: erster Teil des Logbuchs (Buch für alle, Meldung)
  ieplus_cmd_logbuch_teil1: ['logbuch teil1'],
  // DD3R8, „Und jetzt?“ nach dem Beweis: Questbuch-Kapitel K1 und K2 für alle
  ieplus_cmd_kapitel_k2: ['kubejs stages add @a kapitel_k1', 'kubejs stages add @a kapitel_k2']
}

PlayerEvents.tick(event => {
  var player = event.player
  var tags = player.getTags()
  if (tags.isEmpty()) return
  Object.keys(IEPLUS_BRUECKE).forEach(tag => {
    if (!tags.contains(tag)) return
    player.removeTag(tag)
    IEPLUS_BRUECKE[tag].forEach(befehl => event.server.runCommandSilent(befehl))
    console.info('dialog_bruecke.js: ' + tag + ' von ' + player.username)
  })
})
