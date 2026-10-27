// Kobalthammer für die Abgabe „Würdig sein“ (O67, docs/story/ABLAUF.md Abschnitt 6).
// Solange ein Vorschlaghammer von Tinkers (tconstruct:sledge_hammer) mit allen Teilen aus Kobalt im Inventar ist,
// trägt der Spieler den Tag ieplus_kobalthammer; sonst wird er entfernt. Das Questbuch prüft den Tag.
// Material im NBT (TConstruct 3.12.1, JAR geprüft 2026-10-26): ToolStack.TAG_MATERIALS = "tic_materials",
// eine Liste von Strings „mod:material“ oder „mod:material#variante“, je Teil einer. Der Vorschlaghammer hat vier Teile
// (Hammer Head, Tough Handle, 2 × Large Plate; data/tconstruct/tinkering/tool_definitions/sledge_hammer.json).
// Geprüft wird einmal je Sekunde und Spieler.
// Stand 2026-10-27, KubeJS 2001. Fassung 2: Fassung 1 setzte den Tag nie, ohne Fehler im Log (Test 85).
// Verdacht wie beim Relikt-Fluch (Test 86): player.tickCount kommt in Rhino nicht an, die Sekundenprüfung lief nie.
// Jetzt eigener Tick-Zähler; Tag per /tag-Befehl; Log-Zeilen in logs/kubejs/server.log:
// „kobalthammer.js: Tag gesetzt/entfernt …“ und, wenn ein Vorschlaghammer abgelehnt wird, seine Materialien.

const IEPLUS_KOBALT_TAG = 'ieplus_kobalthammer'
const IEPLUS_KOBALT_WERKZEUG = 'tconstruct:sledge_hammer'
const IEPLUS_KOBALT_MATERIAL = 'tconstruct:cobalt'
const IEPLUS_KOBALT_TEILE = 4
// Ticks je Spieler bis zur nächsten Prüfung (eigener Zähler statt player.tickCount)
const ieplusKobaltTicks = {}
// zuletzt geloggte Ablehnung je Spieler, damit das Log nicht jede Sekunde dieselbe Zeile bekommt
const ieplusKobaltGeloggt = {}

// Materialien des Werkzeugs als JS-Liste von Strings ohne „#variante“; [] wenn keine da sind
function ieplusKobaltMaterialien(stack) {
  var nbt = stack.nbt
  if (!nbt || !nbt.contains('tic_materials')) return []
  var liste = nbt.getList('tic_materials', 8)   // 8 = StringTag
  var out = []
  for (var i = 0; i < liste.size(); i++) out.push(String(liste.getString(i)).split('#')[0])
  return out
}

function ieplusIstSledge(stack) {
  return stack && !stack.isEmpty() && String(stack.id) === IEPLUS_KOBALT_WERKZEUG
}

function ieplusIstKobalthammer(materialien) {
  if (materialien.length < IEPLUS_KOBALT_TEILE) return false
  for (var i = 0; i < materialien.length; i++) {
    if (materialien[i] !== IEPLUS_KOBALT_MATERIAL) return false
  }
  return true
}

// gibt { hat: true/false, abgelehnt: '…' } zurück; abgelehnt nennt die Materialien eines abgelehnten Hammers
function ieplusKobaltPruefe(player) {
  var inv = player.inventory
  var abgelehnt = ''
  for (var i = 0; i < inv.getContainerSize(); i++) {
    var s = inv.getItem(i)
    if (!ieplusIstSledge(s)) continue
    var m = ieplusKobaltMaterialien(s)
    if (ieplusIstKobalthammer(m)) return { hat: true, abgelehnt: '' }
    abgelehnt = '[' + m.join(', ') + ']'
  }
  return { hat: false, abgelehnt: abgelehnt }
}

PlayerEvents.tick(event => {
  var player = event.player
  var name = String(player.username)
  var t = (ieplusKobaltTicks[name] || 0) + 1
  if (t < 20) { ieplusKobaltTicks[name] = t; return }
  ieplusKobaltTicks[name] = 0
  try {
    var r = ieplusKobaltPruefe(player)
    var hatTag = player.getTags().contains(IEPLUS_KOBALT_TAG)
    if (r.hat && !hatTag) {
      player.server.runCommandSilent('tag ' + name + ' add ' + IEPLUS_KOBALT_TAG)
      console.info('kobalthammer.js: Tag gesetzt bei ' + name)
    } else if (!r.hat && hatTag) {
      player.server.runCommandSilent('tag ' + name + ' remove ' + IEPLUS_KOBALT_TAG)
      console.info('kobalthammer.js: Tag entfernt bei ' + name)
    }
    if (r.abgelehnt && !r.hat && ieplusKobaltGeloggt[name] !== r.abgelehnt) {
      ieplusKobaltGeloggt[name] = r.abgelehnt
      console.info('kobalthammer.js: Vorschlaghammer bei ' + name + ' nicht ganz aus Kobalt: ' + r.abgelehnt)
    }
  } catch (err) {
    console.error('kobalthammer.js: ' + err)
  }
})
