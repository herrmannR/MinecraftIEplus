// Everdawn erst nach dem Zinn-Zoll bei Bodhi Bad Dur (O73, docs/story/ABLAUF.md Abschnitt 6).
// Wer blue_skies:everdawn betreten will, solange der Scoreboard-Wert #bodhi im Objective story unter 2 liegt,
// bleibt draußen (die Reise wird abgebrochen) und bekommt eine Meldung. Fehlt das Objective oder der Wert, gilt 0.
// Kreativ und Zuschauer ausgenommen. Vorlage: Amulett-Sperre in altar_dimension.js (gleiches Forge-Ereignis;
// Forge-Ereignisse gehen in KubeJS 2001 nur aus startup_scripts). Fehler lassen das Ereignis durch.
// Jede Entscheidung steht in logs/kubejs/startup.log („everdawn_sperre.js: …“).
// Stand 2026-10-26, KubeJS 2001. Fassung 1, UNGETESTET.

const IEPLUS_EVERDAWN = 'blue_skies:everdawn'
const IEPLUS_EVERDAWN_OBJECTIVE = 'story'
const IEPLUS_EVERDAWN_NAME = '#bodhi'
const IEPLUS_EVERDAWN_MINDESTENS = 2

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
  if (!sb.hasPlayerScore(IEPLUS_EVERDAWN_NAME, obj)) return 0
  return sb.getOrCreatePlayerScore(IEPLUS_EVERDAWN_NAME, obj).getScore()
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', event => {
  try {
    var entity = event.getEntity()
    if (!entity || !entity.isPlayer()) return
    if (ieplusEverdawnDimId(event.getDimension()) !== IEPLUS_EVERDAWN) return
    if (entity.isCreative() || entity.isSpectator()) return
    var wert = ieplusBodhiWert(entity.server)
    console.info('everdawn_sperre.js: Betreten ' + entity.username + ', #bodhi = ' + wert)
    if (wert >= IEPLUS_EVERDAWN_MINDESTENS) return
    event.setCanceled(true)
    entity.tell(Text.gold('Das Tor glüht und weist dich ab. Der Wächter der Traumwelten hat dir den Weg nach Everdawn noch nicht geöffnet.'))
  } catch (err) {
    console.error('everdawn_sperre.js: ' + err)
  }
})
