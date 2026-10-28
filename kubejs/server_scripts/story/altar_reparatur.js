// Altar im Sith-Tempel auf dem Merkur reparieren (O48, O56, O57, O65; ST9-04, docs/story/ABLAUF.md Abschnitt 6).
// Der Altar zerbrach beim Sog, der den Meister in die Dimension zog (O57). Rechtsklick auf den kaputten Altar mit allen
// Zutaten im Inventar: Zutaten weg, an seiner Stelle steht das heile Ritual Pathway to the Endless Realm (Vorlage
// ieplus:altar_heil), Stage story_st9_04 für den Spieler. Aktivieren müssen die Spieler das Ritual selbst (O56:
// Aktivierungskristall, LP). Nur einmal je Welt (Weltwert ieplus_altar_repariert); danach greift das Skript nicht mehr ein.
// Fehlen Zutaten, sagt eine Meldung, welche. Ohne eingetragene Koordinaten ist das Skript stumm (Hinweis im Log).
// Dass das Ritual nur auf dem Merkur gelingt, regelt startup_scripts/altar_dimension.js.
//
// ┌─ PLATZHALTER (Host) ── erst ausfüllen, wenn der Tempel steht ─────────────────────────────────────────────────┐
// │ 1. IEPLUS_ALTAR_BEREICH: Ecken des kaputten Altars (zwei gegenüberliegende Ecken, x y z, ganze Zahlen).       │
// │    Rechtsklick auf irgendeinen Block in diesem Quader löst die Reparatur aus. F3 zeigt die Blockkoordinaten   │
// │    unter „Targeted Block“.                                                                                       │
// │ 2. Heiles Ritual als Vorlage speichern: Ritual Pathway to the Endless Realm vollständig bauen (am besten an     │
// │    der echten Stelle, dann Strukturblock „Save“ mit Namen ieplus:altar_heil, Luft mitspeichern, danach den      │
// │    kaputten Altar darüber bauen). Die Datei landet in saves/<Welt>/generated/ieplus/structures/altar_heil.nbt; │
// │    nach kubejs/data/ieplus/structures/altar_heil.nbt kopieren (ins Projekt und auf den Host).                   │
// │ 3. IEPLUS_ALTAR_URSPRUNG: Ecke, an die die Vorlage gesetzt wird (x y z; die Ecke mit den kleinsten Werten,       │
// │    wie beim Strukturblock „relative Position“ + Position des Strukturblocks).                                   │
// │ Danach /reload und Test 91 (docs/11_TESTING.md).                                                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
// Stand 2026-10-26, KubeJS 2001. Fassung 1, UNGETESTET.

const IEPLUS_ALTAR_BEREICH = null        // PLATZHALTER, z. B. { von: [100, 64, -20], bis: [104, 66, -16] }
const IEPLUS_ALTAR_URSPRUNG = null       // PLATZHALTER, z. B. [96, 63, -24]
const IEPLUS_ALTAR_VORLAGE = 'ieplus:altar_heil'   // check:ok (Strukturdatei liefert der Host)
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
let ieplusAltarHinweisGeloggt = false

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
  if (IEPLUS_ALTAR_BEREICH === null || IEPLUS_ALTAR_URSPRUNG === null) {
    if (!ieplusAltarHinweisGeloggt) {
      ieplusAltarHinweisGeloggt = true
      console.warn('altar_reparatur.js: Koordinaten des Altars fehlen noch (Platzhalter oben im Skript)')
    }
    return
  }
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
  var u = IEPLUS_ALTAR_URSPRUNG
  server.runCommandSilent('execute in ' + IEPLUS_ALTAR_DIM + ' run place template ' + IEPLUS_ALTAR_VORLAGE + ' ' + u[0] + ' ' + u[1] + ' ' + u[2])
  server.runCommandSilent('tag ' + player.username + ' add ' + IEPLUS_ALTAR_STAGE)
  server.runCommandSilent('execute in ' + IEPLUS_ALTAR_DIM + ' run playsound minecraft:block.respawn_anchor.charge block @a ' + u[0] + ' ' + u[1] + ' ' + u[2] + ' 2 0.6')
  server.tell(Text.darkPurple('Die Bruchstücke fügen sich zusammen. Der Altar steht wieder, still und wartend.'))
  console.info('altar_reparatur.js: Altar repariert von ' + player.username)
  event.cancel()
})
