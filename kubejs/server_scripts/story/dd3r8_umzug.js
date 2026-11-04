// DD3R8 zieht um (docs/22_TESTABEND.md L2, L3; docs/story/ABLAUF.md ST7-02, ST9-05).
//   /dd3r8 hierher   DD3R8 an die Stelle dessen, der den Befehl ausführt (Host auf dem Mars bei ST7-02, User 2026-11-04;
//                    geht auch bei ST11-03 für die Basis)
//   /dd3r8 glacio    DD3R8 ins Versteck auf Glacio, -347 102 89 (Belohnung von ST9-05; Koordinaten vom User 2026-11-04)
// Der Heimatpunkt (Easy NPC navigation home) zieht jeweils mit, sonst läuft er zurück.
// Ist DD3R8 nicht geladen (anderer Planet), lädt das Skript seinen letzten Platz kurz per forceload und versucht es
// bis zu zehnmal im Abstand von einer Sekunde. Letzter Platz: Weltwert ieplus_dd3r8_ort, anfangs der Platz aus dem Dialog
// „Okayy … danke.“ (-370 80 -20 in der Oberwelt).
// Erkannt wird DD3R8 am Typ easy_npc:doppler und am Namen DD3R8.
// Stand 2026-11-04, KubeJS 2001. Fassung 1, UNGETESTET.

const IEPLUS_DD3R8_TYP = 'easy_npc:doppler'
const IEPLUS_DD3R8_NAME = 'DD3R8'
const IEPLUS_DD3R8_ORT = 'ieplus_dd3r8_ort'
const IEPLUS_DD3R8_START = 'minecraft:overworld -370 80 -20'
const IEPLUS_DD3R8_GLACIO = 'ad_astra:glacio -346.5 102 89.5'

function ieplusDd3r8Dim(level) {
  var s = String(level.dimension)
  var m = s.match(/\/\s*([a-z0-9_.-]+:[a-z0-9_.\/-]+)\s*\]/)
  return m ? m[1] : s
}

// "dim x y z" -> {dim, x, y, z}
function ieplusDd3r8Platz(text) {
  var t = String(text).split(' ')
  return { dim: t[0], x: Number(t[1]), y: Number(t[2]), z: Number(t[3]) }
}

function ieplusDd3r8Finden(server) {
  var levels = server.getAllLevels().iterator()
  while (levels.hasNext()) {
    var es = levels.next().getAllEntities().iterator()
    while (es.hasNext()) {
      var e = es.next()
      if (String(e.getEncodeId()) === IEPLUS_DD3R8_TYP && String(e.getName().getString()) === IEPLUS_DD3R8_NAME) return e
    }
  }
  return null
}

// ziel: "dim x y z"; melden(text) gibt Rückmeldung; versuch zählt die Wartesekunden
function ieplusDd3r8Umzug(server, ziel, melden, versuch) {
  var daten = server.persistentData
  var alt = ieplusDd3r8Platz(daten.contains(IEPLUS_DD3R8_ORT) ? daten.getString(IEPLUS_DD3R8_ORT) : IEPLUS_DD3R8_START)
  var e = ieplusDd3r8Finden(server)
  if (e) {
    var p = ieplusDd3r8Platz(ziel)
    var uuid = String(e.getUUID().toString())
    server.runCommandSilent('execute in ' + p.dim + ' run tp ' + uuid + ' ' + p.x + ' ' + p.y + ' ' + p.z)
    daten.putString(IEPLUS_DD3R8_ORT, ziel)
    server.scheduleInTicks(5, () => {
      server.runCommandSilent('execute in ' + p.dim + ' run easy_npc navigation set home ' + uuid + ' ' +
        Math.floor(p.x) + ' ' + Math.floor(p.y) + ' ' + Math.floor(p.z))
      if (versuch > 0) server.runCommandSilent('execute in ' + alt.dim + ' run forceload remove ' + alt.x + ' ' + alt.z)
    })
    console.info('dd3r8_umzug.js: DD3R8 nach ' + ziel)
    melden(Text.green('DD3R8 ist umgezogen: ' + ziel))
    return
  }
  if (versuch === 0) server.runCommandSilent('execute in ' + alt.dim + ' run forceload add ' + alt.x + ' ' + alt.z)
  if (versuch >= 10) {
    server.runCommandSilent('execute in ' + alt.dim + ' run forceload remove ' + alt.x + ' ' + alt.z)
    console.error('dd3r8_umzug.js: DD3R8 nicht gefunden (zuletzt ' + alt.dim + ' ' + alt.x + ' ' + alt.y + ' ' + alt.z + ')')
    melden(Text.red('DD3R8 nicht gefunden, zuletzt bei ' + alt.dim + ' ' + alt.x + ' ' + alt.y + ' ' + alt.z +
      '. Dort hinfliegen und /dd3r8 hierher am Ziel wiederholen.'))
    return
  }
  server.scheduleInTicks(20, () => ieplusDd3r8Umzug(server, ziel, melden, versuch + 1))
}

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event
  var befehl = Commands.literal('dd3r8').requires(s => s.hasPermission(2))
  befehl = befehl.then(Commands.literal('hierher').executes(ctx => {
    var player = ctx.source.getPlayerOrException()
    var ziel = ieplusDd3r8Dim(player.level()) + ' ' + (Math.floor(player.getX()) + 0.5) + ' ' +
      Math.floor(player.getY()) + ' ' + (Math.floor(player.getZ()) + 0.5)
    ieplusDd3r8Umzug(ctx.source.getServer(), ziel, t => player.tell(t), 0)
    return 1
  }))
  befehl = befehl.then(Commands.literal('glacio').executes(ctx => {
    var player = ctx.source.getPlayer()
    ieplusDd3r8Umzug(ctx.source.getServer(), IEPLUS_DD3R8_GLACIO, t => { if (player) player.tell(t) }, 0)
    return 1
  }))
  event.register(befehl)
})
