// Altar im Sith-Tempel auf dem Merkur reparieren (O48, O56, O57, O65; ST9-04, docs/story/ABLAUF.md Abschnitt 6).
// Der Altar zerbrach beim Sog, der den Meister in die Dimension zog (O57). Rechtsklick auf den kaputten Altar mit allen
// Zutaten im Inventar: Zutaten weg, an seiner Stelle steht das heile Ritual Pathway to the Endless Realm (Meister-
// und Runensteine, siehe unten), Stage story_st9_04 für den Spieler. Aktivieren müssen die Spieler das Ritual selbst (O56:
// Aktivierungskristall, LP). Nur einmal je Welt (Weltwert ieplus_altar_repariert); danach greift das Skript nicht mehr ein.
// Fehlen Zutaten, sagt eine Meldung, welche.
// Dass das Ritual nur auf dem Merkur gelingt, regelt startup_scripts/altar_dimension.js.
//
// Koordinaten vom User (2026-11-01, Welt „3. Versuch von 1,5“): Sith-Tempel auf dem Merkur -438 103 208 bis -473 126 269.
// Mitte unten des kaputten Altars steht ein Spawner (-456 108 254). Rechtsklick darauf mit allen Zutaten setzt das heile Ritual
// Pathway to the Endless Realm (bloodmagic standardDungeonRitual): Meisterstein an die Stelle des Spawners, die Runensteine nach
// dem Muster aus dem JAR (RitualStandardDungeon.gatherComponents, Blood Magic 3.3.8, ausgelesen 2026-11-01). Andere Blöcke des
// kaputten Altars bleiben stehen; das Ritual prüft nur seine eigenen Plätze. Die Ausrichtung sucht der Meisterstein beim Aktivieren selbst.
// Fassung 2 (2026-11-01): Ritual per setblock statt Strukturvorlage ieplus:altar_heil (die entfällt). UNGETESTET (Test 91).

const IEPLUS_ALTAR_MITTE = [-456, 108, 254]   // Spawner = späterer Meisterstein
const IEPLUS_ALTAR_BEREICH = { von: IEPLUS_ALTAR_MITTE, bis: IEPLUS_ALTAR_MITTE }
// Runensteine relativ zum Meisterstein: [dx, dy, dz, Art]
const IEPLUS_ALTAR_RUNEN = [
  [0, 0, 1, 'FIRE'], [-1, 0, 0, 'FIRE'], [0, 0, -1, 'WATER'], [1, 0, 0, 'WATER'], [-1, 0, 1, 'DUSK'], [1, 0, -1, 'DUSK'],
  [2, 0, 2, 'WATER'], [2, 0, 1, 'WATER'], [1, 0, 2, 'WATER'], [-2, 0, -2, 'FIRE'], [-2, 0, -1, 'FIRE'], [-1, 0, -2, 'FIRE'],
  [-3, 0, 3, 'AIR'], [-2, 0, 3, 'AIR'], [-1, 0, 3, 'AIR'], [-3, 0, 2, 'AIR'], [-3, 0, 1, 'AIR'], [3, 0, -3, 'EARTH'],
  [2, 0, -3, 'EARTH'], [1, 0, -3, 'EARTH'], [3, 0, -2, 'EARTH'], [3, 0, -1, 'EARTH'], [3, 0, 3, 'DUSK'], [3, 0, 4, 'DUSK'],
  [4, 0, 3, 'DUSK'], [2, 0, 4, 'DUSK'], [4, 0, 2, 'DUSK'], [-3, 0, -3, 'DUSK'], [-3, 0, -4, 'DUSK'], [-4, 0, -3, 'DUSK'],
  [-2, 0, -4, 'DUSK'], [-4, 0, -2, 'DUSK'], [3, 4, 3, 'EARTH'], [3, 4, -3, 'EARTH'], [-3, 4, -3, 'EARTH'], [-3, 4, 3, 'EARTH'],
  [2, 4, 3, 'DUSK'], [3, 4, 2, 'DUSK'], [2, 4, -3, 'DUSK'], [-3, 4, 2, 'DUSK'], [-2, 4, 3, 'DUSK'], [3, 4, -2, 'DUSK'],
  [-2, 4, -3, 'DUSK'], [-3, 4, -2, 'DUSK'], [2, 4, 4, 'DUSK'], [4, 4, 2, 'DUSK'], [2, 4, -4, 'DUSK'], [-4, 4, 2, 'DUSK'],
  [-2, 4, 4, 'DUSK'], [4, 4, -2, 'DUSK'], [-2, 4, -4, 'DUSK'], [-4, 4, -2, 'DUSK'], [1, 4, 4, 'AIR'], [4, 4, 1, 'AIR'],
  [1, 4, -4, 'AIR'], [-4, 4, 1, 'AIR'], [-1, 4, 4, 'AIR'], [4, 4, -1, 'AIR'], [-1, 4, -4, 'AIR'], [-4, 4, -1, 'AIR'],
  [4, 4, 0, 'AIR'], [-4, 4, 0, 'AIR'], [0, 4, 4, 'AIR'], [0, 4, -4, 'AIR'], [0, 2, 0, 'EARTH'], [0, 3, 0, 'DUSK'],
  [0, 4, 0, 'DUSK'], [0, 5, 0, 'DUSK'], [0, 6, 0, 'AIR']
]
const IEPLUS_ALTAR_STEIN = {
  BLANK: 'bloodmagic:ritualstone', WATER: 'bloodmagic:waterritualstone', FIRE: 'bloodmagic:fireritualstone',
  EARTH: 'bloodmagic:earthritualstone', AIR: 'bloodmagic:airritualstone', DUSK: 'bloodmagic:duskritualstone'
}
const IEPLUS_ALTAR_DIM = 'ad_astra:mercury'
const IEPLUS_ALTAR_SCHLUESSEL = 'ieplus_altar_repariert'
const IEPLUS_ALTAR_STAGE = 'story_st9_04'
// Zutaten (F8, O47, O54; B1/B4 2026-10-28: Block statt Barren, Demonic statt Imbued Slate).
const IEPLUS_ALTAR_ZUTATEN = [
  { id: 'botania:terrasteel_block', anzahl: 1, name: 'Terrasteel-Block' },
  { id: 'bloodmagic:demonslate', anzahl: 4, name: 'Demonic Slate' },
  { id: 'kubejs:siegel_der_traumwelten', anzahl: 1, name: 'Siegel der Traumwelten' },
  { id: 'wrd:orb_of_the_deep', anzahl: 1, name: 'Orb of the Deep' }
]

function ieplusAltarDimId(level) {
  var s = String(level.dimension)
  var m = s.match(/\/\s*([a-z0-9_.-]+:[a-z0-9_.\/-]+)\s*\]/)
  return m ? m[1] : s
}

function ieplusImAltar(pos) {
  var v = IEPLUS_ALTAR_BEREICH.von
  var b = IEPLUS_ALTAR_BEREICH.bis
  return pos.x >= Math.min(v[0], b[0]) && pos.x <= Math.max(v[0], b[0]) &&
    pos.y >= Math.min(v[1], b[1]) && pos.y <= Math.max(v[1], b[1]) &&
    pos.z >= Math.min(v[2], b[2]) && pos.z <= Math.max(v[2], b[2])
}

function ieplusAltarZaehle(player, id) {
  var inv = player.inventory
  var n = 0
  for (var i = 0; i < inv.getContainerSize(); i++) {
    var s = inv.getItem(i)
    if (!s.isEmpty() && String(s.id) === id) n += s.getCount()
  }
  return n
}

function ieplusAltarEntferne(player, id, anzahl) {
  var inv = player.inventory
  var rest = anzahl
  for (var i = 0; i < inv.getContainerSize() && rest > 0; i++) {
    var s = inv.getItem(i)
    if (s.isEmpty() || String(s.id) !== id) continue
    var weg = Math.min(rest, s.getCount())
    s.shrink(weg)
    rest -= weg
  }
}

BlockEvents.rightClicked(event => {
  if (String(event.hand) !== 'MAIN_HAND') return
  var server = event.server
  if (server.persistentData.getBoolean(IEPLUS_ALTAR_SCHLUESSEL)) return
  if (ieplusAltarDimId(event.level) !== IEPLUS_ALTAR_DIM) return
  if (!ieplusImAltar(event.block.pos)) return
  var player = event.player

  var fehlt = []
  IEPLUS_ALTAR_ZUTATEN.forEach(z => {
    var hat = ieplusAltarZaehle(player, z.id)
    if (hat < z.anzahl) fehlt.push((z.anzahl - hat) + ' × ' + z.name)
  })
  if (fehlt.length > 0) {
    player.tell(Text.darkRed('Der Altar ist zerbrochen. Um ihn zu heilen, fehlt noch: ' + fehlt.join(', ') + '.'))
    event.cancel()   // beendet den Handler, deshalb zuletzt
    return
  }

  IEPLUS_ALTAR_ZUTATEN.forEach(z => ieplusAltarEntferne(player, z.id, z.anzahl))
  server.persistentData.putBoolean(IEPLUS_ALTAR_SCHLUESSEL, true)
  var u = IEPLUS_ALTAR_MITTE
  var vor = 'execute in ' + IEPLUS_ALTAR_DIM + ' run setblock '
  server.runCommandSilent(vor + u[0] + ' ' + u[1] + ' ' + u[2] + ' bloodmagic:masterritualstone replace')
  IEPLUS_ALTAR_RUNEN.forEach(r => {
    server.runCommandSilent(vor + (u[0] + r[0]) + ' ' + (u[1] + r[1]) + ' ' + (u[2] + r[2]) + ' ' + IEPLUS_ALTAR_STEIN[r[3]] + ' replace')
  })
  server.runCommandSilent('tag ' + player.username + ' add ' + IEPLUS_ALTAR_STAGE)
  server.runCommandSilent('execute in ' + IEPLUS_ALTAR_DIM + ' run playsound minecraft:block.respawn_anchor.charge block @a ' + u[0] + ' ' + u[1] + ' ' + u[2] + ' 2 0.6')
  server.tell(Text.darkPurple('Die Bruchstücke fügen sich zusammen. Der Altar steht wieder, still und wartend.'))
  console.info('altar_reparatur.js: Altar repariert von ' + player.username)
  event.cancel()
})
