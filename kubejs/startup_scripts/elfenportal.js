// Meisterin Cerina rufen (O75, ST10-03; docs/story/ABLAUF.md Abschnitt 6).
// Wird eine Rune des Frühlings (botania:rune_spring) in ein offenes Portal to Alfheim geworfen, verschwindet sie,
// Meisterin Cerina erscheint vor dem Portal (easy_npc preset import) und #cerina im Objective story wird 1.
// Nur einmal je Welt (Weltwert ieplus_cerina_gerufen). Ersetzt für die Elfe das Hinstellen von Hand (O55).
//
// Technik (Botania 1.20.1-456, JAR geprüft 2026-10-26): AlfheimPortalBlockEntity.commonTick feuert jeden Tick das
// Forge-Ereignis vazkii.botania.api.recipe.ElvenPortalUpdateEvent (Portal, AABB der Öffnung, offen ja/nein),
// und zwar BEVOR das Portal die Item-Objekte in der Öffnung verschluckt. Hier wird die Rune herausgefischt.
// Forge-Ereignisse gehen in KubeJS 2001 nur aus startup_scripts. Fehler lassen das Ereignis durch.
//
// ┌─ PLATZHALTER (Host) ──────────────────────────────────────────────────────────────────────────────────────┐
// │ IEPLUS_CERINA_PRESET: Name des exportierten Presets von Cerina, so wie ihn die Tab-Vervollständigung von     │
// │   /easy_npc preset import <quelle> … anbietet. IEPLUS_CERINA_QUELLE: custom, data, default oder world        │
// │   (wo das Preset liegt; Easy NPC 7.14). Solange der Platzhalter steht, bleibt die Rune liegen (Botania        │
// │   verschluckt sie dann) und im Chat der Operatoren und in logs/kubejs/startup.log steht ein Hinweis.          │
// └────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
// Stand 2026-10-26, KubeJS 2001. Fassung 1, UNGETESTET.

const IEPLUS_CERINA_QUELLE = 'custom'                  // PLATZHALTER prüfen
const IEPLUS_CERINA_PRESET = 'PLATZHALTER_CERINA'      // PLATZHALTER: Preset-Name eintragen
const IEPLUS_CERINA_RUNE = 'botania:rune_spring'
const IEPLUS_CERINA_SCHLUESSEL = 'ieplus_cerina_gerufen'

function ieplusCerinaDimId(level) {
  var s = String(level.dimension)
  var m = s.match(/\/\s*([a-z0-9_.-]+:[a-z0-9_.\/-]+)\s*\]/)
  return m ? m[1] : s
}

// Stelle vor dem Portal: zwei Blöcke vor dem Kern (unten Mitte des Rahmens), auf der Seite des Werfers
function ieplusCerinaStelle(portal, werfer) {
  var pos = portal.getBlockPos()
  var zustand = String(portal.getBlockState()).toLowerCase()
  var x = pos.x + 0.5
  var y = pos.y
  var z = pos.z + 0.5
  if (zustand.indexOf('on_x') >= 0) {
    // Rahmen läuft entlang X, davor liegt Z
    var sz = (werfer && werfer.z < z) ? -1 : 1
    z += 2 * sz
  } else {
    var sx = (werfer && werfer.x < x) ? -1 : 1
    x += 2 * sx
  }
  return [x, y, z]
}

ForgeEvents.onEvent('vazkii.botania.api.recipe.ElvenPortalUpdateEvent', event => {
  try {
    if (!event.isOpen()) return
    var portal = event.getPortalTile()
    var level = portal.getLevel()
    if (!level || level.isClientSide()) return
    var server = level.getServer()
    if (server.persistentData.getBoolean(IEPLUS_CERINA_SCHLUESSEL)) return
    var ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity')
    var items = level.getEntitiesOfClass(ItemEntity, event.getAabb())
    for (var i = 0; i < items.size(); i++) {
      var e = items.get(i)
      var stack = e.getItem()
      if (stack.isEmpty() || String(stack.id) !== IEPLUS_CERINA_RUNE) continue
      var werfer = e.getOwner()
      if (IEPLUS_CERINA_PRESET.indexOf('PLATZHALTER') === 0) {
        console.error('elfenportal.js: Preset von Cerina fehlt (IEPLUS_CERINA_PRESET), Rune nicht verwendet')
        server.runCommandSilent('tellraw @a[gamemode=creative] {"text":"elfenportal.js: Preset von Cerina fehlt (Platzhalter).","color":"red"}')
        return
      }
      stack.shrink(1)
      if (stack.isEmpty()) e.discard()
      server.persistentData.putBoolean(IEPLUS_CERINA_SCHLUESSEL, true)
      var p = ieplusCerinaStelle(portal, werfer)
      var dim = ieplusCerinaDimId(level)
      server.runCommandSilent('execute in ' + dim + ' run easy_npc preset import ' + IEPLUS_CERINA_QUELLE + ' ' +
        IEPLUS_CERINA_PRESET + ' ' + p[0] + ' ' + p[1] + ' ' + p[2])
      server.runCommandSilent('scoreboard objectives add story dummy')
      server.runCommandSilent('scoreboard players set #cerina story 1')
      server.tell(Text.green('Die Rune zerfällt zu Blütenstaub. Aus dem Licht des Portals tritt eine Gestalt.'))
      console.info('elfenportal.js: Cerina gerufen in ' + dim + ' bei ' + p.join(' '))
      return
    }
  } catch (err) {
    console.error('elfenportal.js: ' + err)
  }
})
