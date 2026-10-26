// Relikt nicht ablegbar, Teil Forge-Ereignisse (O66). Der übrige Fluch: server_scripts/story/relikt_fluch.js.
// Mit kubejs:relikt in einer Hand ist gesperrt:
//   - Rechtsklick auf Blöcke (Altäre, Sockel, Töpfe, Regale, Maschinen, die Items aus der Hand nehmen …).
//     Wer eine Truhe öffnen will, nimmt das Relikt vorher aus der Hand (auch darin kommt es nicht).
//   - Rechtsklick auf Itemrahmen, leuchtende Itemrahmen, Rüstungsständer und Allays (Liste IEPLUS_RELIKT_OBJEKTE).
//     Figuren von Easy NPC bleiben erreichbar (Meisterin Cerina).
// Kreativ- und Zuschauermodus sind ausgenommen. Fehler im Handler lassen das Ereignis durch (wie altar_dimension.js).
// Innerhalb der Funktionen nur var (Rhino, siehe altar_dimension.js).
// Stand 2026-10-26, KubeJS 2001. Fassung 1, UNGETESTET.

const IEPLUS_RELIKT_ID = 'kubejs:relikt'
const IEPLUS_RELIKT_OBJEKTE = ['minecraft:item_frame', 'minecraft:glow_item_frame', 'minecraft:armor_stand', 'minecraft:allay']
// Letzte Meldung je Spieler (Millisekunden), damit der Chat nicht vollläuft
const ieplusReliktMeldung = {}

function ieplusReliktInHand(event) {
  var player = event.getEntity()
  if (!player || player.isCreative() || player.isSpectator()) return null
  var stack = event.getItemStack()
  if (!stack || stack.isEmpty() || String(stack.id) !== IEPLUS_RELIKT_ID) return null
  return player
}

function ieplusReliktMelden(player) {
  if (player.level.isClientSide()) return
  var name = String(player.username)
  var jetzt = Date.now()
  if (ieplusReliktMeldung[name] && jetzt - ieplusReliktMeldung[name] < 3000) return
  ieplusReliktMeldung[name] = jetzt
  player.tell(Text.darkPurple('Deine Finger lassen das Relikt nicht los.'))
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerInteractEvent$RightClickBlock', event => {
  try {
    var player = ieplusReliktInHand(event)
    if (!player) return
    event.setCanceled(true)
    ieplusReliktMelden(player)
  } catch (err) {
    console.error('relikt_sperre.js (Block): ' + err)
  }
})

function ieplusReliktObjekt(event) {
  var player = ieplusReliktInHand(event)
  if (!player) return
  var ziel = event.getTarget()
  if (!ziel || IEPLUS_RELIKT_OBJEKTE.indexOf(String(ziel.type)) < 0) return
  event.setCanceled(true)
  ieplusReliktMelden(player)
}

// Itemrahmen, Allay: EntityInteract; Rüstungsständer: EntityInteractSpecific (ArmorStand.interactAt)
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteract', event => {
  try {
    ieplusReliktObjekt(event)
  } catch (err) {
    console.error('relikt_sperre.js (Objekt): ' + err)
  }
})
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteractSpecific', event => {
  try {
    ieplusReliktObjekt(event)
  } catch (err) {
    console.error('relikt_sperre.js (Objekt, genau): ' + err)
  }
})
