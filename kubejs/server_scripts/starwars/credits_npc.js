// Credits nicht wechseln, wenn man damit eine Figur anklickt (Fehler aus Test 115, User 2026-11-03).
// Galaxy in a Cube (swgc 1.0.3.1, JAR geprüft: che/swgc/item/CreditItem.use) wechselt einen Credit per Rechtsklick
// in die nächstkleinere Stufe: Gold → 3 Iron, Iron → 5 Copper (was nicht ins Inventar passt, fällt auf den Boden).
// Klickt man damit eine Easy-NPC-Figur an, öffnet sich der Dialog, und der Rechtsklick läuft danach trotzdem als
// Item-Benutzung weiter: Es fiel Kleingeld heraus, der Credit blieb in der Hand (Vervielfältigung).
// Abhilfe: Wer mit einem Credit ein Wesen anklickt, für den wird die Item-Benutzung der nächsten paar Ticks abgebrochen.
// Wechseln in die Luft geht weiter wie vorher.
// Stand 2026-11-03, KubeJS 2001. Fassung 1, UNGETESTET. Log-Zeile „credits_npc.js: Wechseln unterdrückt …“
// in logs/kubejs/server.log.

const IEPLUS_CREDITS = ['swgc:gold_credit', 'swgc:iron_credit', 'swgc:copper_credit']
// so viele Ticks nach dem Anklicken eines Wesens gilt ein Rechtsklick mit Credit als Teil desselben Klicks
const IEPLUS_CREDITS_SPERRE = 5
// eigener Tick-Zähler (player.tickCount kommt in Rhino nicht an, siehe kobalthammer.js)
var ieplusCreditsTick = 0
// Spieler-UUID → Tick, an dem er zuletzt mit einem Credit ein Wesen angeklickt hat
const ieplusCreditsGeklickt = {}

function ieplusIstCredit(stack) {
  return stack && !stack.isEmpty() && IEPLUS_CREDITS.indexOf(String(stack.id)) >= 0
}

ServerEvents.tick(event => {
  ieplusCreditsTick++
})

ItemEvents.entityInteracted(event => {
  try {
    if (!ieplusIstCredit(event.item)) return
    ieplusCreditsGeklickt[String(event.player.uuid)] = ieplusCreditsTick
  } catch (err) {
    console.error('credits_npc.js: ' + err)
  }
})

ItemEvents.rightClicked(event => {
  var sperren = false
  try {
    if (!ieplusIstCredit(event.item)) return
    var t = ieplusCreditsGeklickt[String(event.player.uuid)]
    sperren = t !== undefined && ieplusCreditsTick - t <= IEPLUS_CREDITS_SPERRE
    if (sperren) {
      console.info('credits_npc.js: Wechseln unterdrückt für ' + event.player.username + ' (' + event.item.id + ')')
      // der Client hat den Credit schon vorab abgezogen; Inventar neu schicken, damit er sichtbar bleibt
      event.player.inventoryMenu.broadcastFullState()
    }
  } catch (err) {
    console.error('credits_npc.js: ' + err)
  }
  // außerhalb von try: event.cancel() beendet den Handler (KubeJS 6), catch würde den Abbruch schlucken (Test 87)
  if (sperren) event.cancel()
})
