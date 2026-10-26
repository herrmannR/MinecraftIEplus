// Kobalthammer für die Abgabe „Würdig sein“ (O67, docs/story/ABLAUF.md Abschnitt 6).
// Solange ein Vorschlaghammer von Tinkers (tconstruct:sledge_hammer) mit allen Teilen aus Kobalt im Inventar ist,
// trägt der Spieler den Tag ieplus_kobalthammer; sonst wird er entfernt. Das Questbuch prüft den Tag.
// Material im NBT (TConstruct 3.12.1, JAR geprüft 2026-10-26): ToolStack.TAG_MATERIALS = "tic_materials",
// eine Liste von Strings „mod:material“ oder „mod:material#variante“, je Teil einer. Der Vorschlaghammer hat vier Teile
// (Hammer Head, Tough Handle, 2 × Large Plate; data/tconstruct/tinkering/tool_definitions/sledge_hammer.json).
// Geprüft wird einmal je Sekunde und Spieler.
// Stand 2026-10-26, KubeJS 2001. Fassung 1, UNGETESTET.

const IEPLUS_KOBALT_TAG = 'ieplus_kobalthammer'
const IEPLUS_KOBALT_WERKZEUG = 'tconstruct:sledge_hammer'
const IEPLUS_KOBALT_MATERIAL = 'tconstruct:cobalt'
const IEPLUS_KOBALT_TEILE = 4

function ieplusIstKobalthammer(stack) {
  if (stack.isEmpty() || String(stack.id) !== IEPLUS_KOBALT_WERKZEUG) return false
  var nbt = stack.nbt
  if (!nbt || !nbt.contains('tic_materials')) return false
  var liste = nbt.getList('tic_materials', 8)   // 8 = StringTag
  if (liste.size() < IEPLUS_KOBALT_TEILE) return false
  for (var i = 0; i < liste.size(); i++) {
    var material = String(liste.getString(i)).split('#')[0]
    if (material !== IEPLUS_KOBALT_MATERIAL) return false
  }
  return true
}

function ieplusHatKobalthammer(player) {
  var inv = player.inventory
  for (var i = 0; i < inv.getContainerSize(); i++) {
    if (ieplusIstKobalthammer(inv.getItem(i))) return true
  }
  return false
}

PlayerEvents.tick(event => {
  var player = event.player
  if (player.tickCount % 20 !== 0) return
  try {
    var hat = ieplusHatKobalthammer(player)
    var tags = player.getTags()
    if (hat && !tags.contains(IEPLUS_KOBALT_TAG)) {
      player.addTag(IEPLUS_KOBALT_TAG)
    } else if (!hat && tags.contains(IEPLUS_KOBALT_TAG)) {
      player.removeTag(IEPLUS_KOBALT_TAG)
    }
  } catch (err) {
    console.error('kobalthammer.js: ' + err)
  }
})
