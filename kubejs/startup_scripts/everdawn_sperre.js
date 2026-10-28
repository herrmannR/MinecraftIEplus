// Everbright erst nach dem ersten Gespräch mit Bodhi Bad Dur, Everdawn erst nach dem Zinn-Zoll
// (O73, docs/story/ABLAUF.md Abschnitt 6).
// Wer blue_skies:everdawn betreten will, solange der höchste Wert im Objective story_bodhi unter 2 liegt,
// bleibt draußen (die Reise wird abgebrochen) und bekommt eine Meldung. Fehlt das Objective oder jeder Wert, gilt 0.
// Der höchste Wert irgendeines Spielers zählt, damit die Stufe für die ganze Welt gilt (ABLAUF B2, dialogstufen.js).
// Kreativ und Zuschauer ausgenommen. Vorlage: Amulett-Sperre in altar_dimension.js (gleiches Forge-Ereignis;
// Forge-Ereignisse gehen in KubeJS 2001 nur aus startup_scripts). Fehler lassen das Ereignis durch.
// Jede Entscheidung steht in logs/kubejs/startup.log („everdawn_sperre.js: …“).
// Fassung 2 (2026-10-27, User): auch Everbright ist gesperrt, bis zum ersten Gespräch mit Bodhi (story_bodhi ≥ 1, ST3-01).
// Fassung 3 (2026-10-28): Objective story_bodhi mit Spieler-Werten statt #bodhi in story. UNGETESTET (Tests 89, 95).

const IEPLUS_EVERDAWN_OBJECTIVE = 'story_bodhi'
// Dimension → nötiger Mindestwert von story_bodhi und Meldung beim Abweisen
const IEPLUS_BODHI_SPERREN = {
  'blue_skies:everbright': {
    mindestens: 1,
    meldung: 'Das Tor schimmert, bleibt aber verschlossen. Der Herr dieses Hauses kennt dich noch nicht.'
  },
  'blue_skies:everdawn': {
    mindestens: 2,
    meldung: 'Das Tor glüht und weist dich ab. Der Wächter der Traumwelten hat dir den Weg nach Everdawn noch nicht geöffnet.'
  }
}

// "namespace:pfad" aus einem ResourceKey ("ResourceKey[minecraft:dimension / blue_skies:everdawn]")
function ieplusEverdawnDimId(x) {
  if (x === null || x === undefined) return ''
  var s = String(x)
  var m = s.match(/\/\s*([a-z0-9_.-]+:[a-z0-9_.\/-]+)\s*\]/)
  return m ? m[1] : s
}

function ieplusBodhiWert(server) {
  var sb = server.getScoreboard()
  var obj = sb.getObjective(IEPLUS_EVERDAWN_OBJECTIVE)
  if (!obj) return 0
  var hoechst = 0
  var it = sb.getPlayerScores(obj).iterator()
  while (it.hasNext()) {
    var w = it.next().getScore()
    if (w > hoechst) hoechst = w
  }
  return hoechst
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', event => {
  try {
    var entity = event.getEntity()
    if (!entity || !entity.isPlayer()) return
    var ziel = ieplusEverdawnDimId(event.getDimension())
    var sperre = IEPLUS_BODHI_SPERREN[ziel]
    if (!sperre) return
    if (entity.isCreative() || entity.isSpectator()) return
    var wert = ieplusBodhiWert(entity.server)
    console.info('everdawn_sperre.js: Betreten ' + ziel + ' durch ' + entity.username + ', story_bodhi = ' + wert)
    if (wert >= sperre.mindestens) return
    event.setCanceled(true)
    entity.tell(Text.gold(sperre.meldung))
  } catch (err) {
    console.error('everdawn_sperre.js: ' + err)
  }
})
