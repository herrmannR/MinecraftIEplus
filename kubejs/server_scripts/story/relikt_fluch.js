// Fluch des Relikts (O66, docs/story/ABLAUF.md Abschnitt 6).
// 1. Wer kubejs:relikt im Inventar hat, bekommt nach 15 Sekunden starke Blindheit, Langsamkeit und Vergiftung,
//    solange er es trägt (Vergiftung tötet in Minecraft nicht, sie hört bei einem Herz auf). Ohne Relikt beginnt die Zeit neu.
// 2. Das Relikt lässt sich nicht ablegen:
//    - Behälter (Truhen, Fässer, Shulker, Rucksäcke, Ender-Truhe, Maschinen …): Solange ein fremdes Menü offen ist,
//      holt das Skript jedes Relikt aus den Fächern, die nicht zum Spielerinventar gehören, sofort zurück.
//    - Wegwerfen und alles andere, was ein Item-Objekt in die Welt bringt (Q-Taste, Menü schließen mit vollem Inventar):
//      Das Objekt entsteht nicht, das Relikt geht zurück an den Werfer (oder an den nächsten Spieler im Umkreis von 16 Blöcken).
//    - Bündel: Ein Relikt im Bündel wird herausgeholt.
//    - Ausnahme (O80): In den Mana-Diamant-Rahmen (umgebauter Leuchtrahmen) darf es; herausgeschlagen kommt es zurück.
//    - Itemrahmen, Rüstungsständer, Allay und Rechtsklick auf Blöcke (Altäre, Sockel, Töpfe …) mit dem Relikt in der Hand:
//      startup_scripts/relikt_sperre.js (Forge-Ereignisse gehen nur aus startup_scripts).
// 3. Tod (🔵 offen, O66; einfachste sichere Variante, Vorschlag Claude): Das Relikt bleibt beim Träger. Beim Tod nimmt
//    das Skript es aus dem Inventar, bevor Grabstein (gravestone) oder Drops es erfassen, und gibt es beim Wiedereinstieg
//    zurück (Merker im Weltwert, je Spieler-UUID; überlebt auch Abmelden auf dem Todesbildschirm).
// Kreativ- und Zuschauermodus sind ausgenommen (Host baut und testet).
// Das Ende des Fluchs bei Meisterin Cerina regelt die Story (Abgabe/Umbau zum Strahlenschutz), nicht dieses Skript.
// Stand 2026-10-27, KubeJS 2001. Fassung 2: Fassung 1 brachte keine Effekte, ohne Fehler im Log (Test 78/86).
// Verdacht: player.tickCount kam in Rhino nicht an, dann bricht die Sekundenprüfung still ab. Jetzt eigener
// Tick-Zähler, Effekte per /effect, Log-Zeile „relikt_fluch.js: Fluch …“ in logs/kubejs/server.log.
// Fassung 3 (2026-10-27): Wegwerfen ergab ein Doppel, weil catch den Abbruch von event.cancel() schluckte; behoben.

const IEPLUS_RELIKT = 'kubejs:relikt'
const IEPLUS_RELIKT_SEKUNDEN = 15
const IEPLUS_RELIKT_TOD_SCHLUESSEL = 'ieplus_relikt_tod'
// Sekunden mit Relikt je Spieler (nur im Speicher; nach Neustart beginnt die Zeit neu)
const ieplusReliktZeit = {}
// Ticks je Spieler bis zur nächsten Sekundenprüfung (eigener Zähler statt player.tickCount)
const ieplusReliktTicks = {}

function ieplusIstRelikt(stack) {
  return stack && !stack.isEmpty() && String(stack.id) === IEPLUS_RELIKT
}

function ieplusReliktAusgenommen(player) {
  return player.isCreative() || player.isSpectator()
}

function ieplusReliktAnzahl(player) {
  var inv = player.inventory
  var n = 0
  for (var i = 0; i < inv.getContainerSize(); i++) {
    var s = inv.getItem(i)
    if (ieplusIstRelikt(s)) n += s.getCount()
  }
  return n
}

// Relikt zurück ins Inventar. Ist es voll, wandert das Item in der Hand heraus (es fällt normal zu Boden)
// und das Relikt kommt in die Hand.
function ieplusReliktZurueck(player, stack) {
  var kopie = stack.copy()
  if (player.inventory.add(kopie) && kopie.isEmpty()) return
  var hand = player.getMainHandItem()
  if (!hand.isEmpty()) player.drop(hand.copy(), false)
  player.setMainHandItem(kopie)
}

// Bündel im Inventar: Relikte aus dem NBT „Items“ holen
function ieplusReliktAusBuendeln(player) {
  var inv = player.inventory
  for (var i = 0; i < inv.getContainerSize(); i++) {
    var s = inv.getItem(i)
    if (s.isEmpty() || String(s.id) !== 'minecraft:bundle') continue
    var nbt = s.nbt
    if (!nbt || !nbt.contains('Items')) continue
    var liste = nbt.getList('Items', 10)   // 10 = CompoundTag
    for (var k = liste.size() - 1; k >= 0; k--) {
      if (String(liste.getCompound(k).getString('id')) === IEPLUS_RELIKT) {
        liste.remove(k)
        s.setTag(nbt)
        ieplusReliktZurueck(player, Item.of(IEPLUS_RELIKT))
        player.tell(Text.darkPurple('Das Relikt lässt sich nicht verstauen.'))
      }
    }
  }
}

// Fremdes Menü offen: Relikte aus Fächern holen, die nicht zum Spielerinventar gehören
function ieplusReliktAusMenue(player) {
  var menue = player.containerMenu
  if (!menue || menue === player.inventoryMenu) return
  var inv = player.inventory
  var slots = menue.slots
  for (var i = 0; i < slots.size(); i++) {
    var slot = slots.get(i)
    if (slot.container === inv) continue
    var s = slot.getItem()
    if (!ieplusIstRelikt(s)) continue
    var kopie = s.copy()
    slot.set(Item.empty)
    ieplusReliktZurueck(player, kopie)
    player.tell(Text.darkPurple('Das Relikt lässt sich nicht ablegen. Es kehrt zu dir zurück.'))
  }
}

PlayerEvents.tick(event => {
  var player = event.player
  try {
    if (ieplusReliktAusgenommen(player)) return
    // Behälter jeden Tick (sonst könnte ein Trichter das Relikt schon weiterreichen)
    ieplusReliktAusMenue(player)
    var name = String(player.username)
    var t = (ieplusReliktTicks[name] || 0) + 1
    if (t < 20) { ieplusReliktTicks[name] = t; return }
    ieplusReliktTicks[name] = 0
    ieplusReliktAusBuendeln(player)
    if (ieplusReliktAnzahl(player) === 0) {
      delete ieplusReliktZeit[name]
      return
    }
    var sek = (ieplusReliktZeit[name] || 0) + 1
    ieplusReliktZeit[name] = sek
    if (sek === IEPLUS_RELIKT_SEKUNDEN) {
      player.tell(Text.darkPurple('Das Relikt wird schwer. Dunkelheit kriecht dir in die Augen.'))
      console.info('relikt_fluch.js: Fluch beginnt bei ' + name)
    }
    if (sek >= IEPLUS_RELIKT_SEKUNDEN) {
      // 3 Sekunden, jede Sekunde erneuert; Stufe: Blindheit II, Langsamkeit III, Vergiftung II; ohne Partikel
      var server = player.server
      server.runCommandSilent(`effect give ${name} minecraft:blindness 3 1 true`)
      server.runCommandSilent(`effect give ${name} minecraft:slowness 3 2 true`)
      server.runCommandSilent(`effect give ${name} minecraft:poison 3 1 true`)
    }
  } catch (err) {
    console.error('relikt_fluch.js (Tick): ' + err)
  }
})

// Jedes Item-Objekt mit dem Relikt verhindern und das Relikt zurückgeben.
// event.cancel() beendet den Handler über eine Ausnahme (EventExit); darum steht es AUSSERHALB von try/catch,
// sonst schluckt catch den Abbruch, das Objekt bleibt liegen und das Relikt wäre doppelt (Test 86, Fassung 2).
// Zusätzlich wird das Objekt geleert: Ein leeres Item-Objekt verschwindet von selbst, falls es doch in die Welt kommt.
EntityEvents.spawned('minecraft:item', event => {
  var abbrechen = false
  try {
    var entity = event.entity
    var stack = entity.getItem()
    if (!ieplusIstRelikt(stack)) return
    var player = null
    var besitzer = entity.getOwner()
    if (besitzer && besitzer.isPlayer()) player = besitzer
    if (!player) player = event.level.getNearestPlayer(entity, 16)
    if (!player || ieplusReliktAusgenommen(player)) return
    var kopie = stack.copy()
    entity.setItem(Item.empty)
    var ziel = player
    event.server.scheduleInTicks(1, () => {
      ieplusReliktZurueck(ziel, kopie)
      ziel.tell(Text.darkPurple('Das Relikt lässt sich nicht ablegen. Es kehrt zu dir zurück.'))
    })
    abbrechen = true
  } catch (err) {
    console.error('relikt_fluch.js (Item-Objekt): ' + err)
  }
  if (abbrechen) event.cancel()   // beendet den Handler, deshalb zuletzt und außerhalb von try
})

// Tod: Relikt vor den Drops (und vor dem Grabstein) herausnehmen und merken
EntityEvents.death('minecraft:player', event => {
  try {
    var player = event.entity
    if (ieplusReliktAusgenommen(player)) return
    var inv = player.inventory
    var n = 0
    for (var i = 0; i < inv.getContainerSize(); i++) {
      var s = inv.getItem(i)
      if (ieplusIstRelikt(s)) {
        n += s.getCount()
        inv.setItem(i, Item.empty)
      }
    }
    if (n === 0) return
    var daten = event.server.persistentData
    if (!daten.contains(IEPLUS_RELIKT_TOD_SCHLUESSEL)) daten.put(IEPLUS_RELIKT_TOD_SCHLUESSEL, NBT.compoundTag())
    var merker = daten.getCompound(IEPLUS_RELIKT_TOD_SCHLUESSEL)
    var uuid = String(player.uuid)
    merker.putInt(uuid, merker.getInt(uuid) + n)
    daten.put(IEPLUS_RELIKT_TOD_SCHLUESSEL, merker)
    delete ieplusReliktZeit[String(player.username)]
  } catch (err) {
    console.error('relikt_fluch.js (Tod): ' + err)
  }
})

function ieplusReliktNachTod(player, server) {
  var daten = server.persistentData
  if (!daten.contains(IEPLUS_RELIKT_TOD_SCHLUESSEL)) return
  var merker = daten.getCompound(IEPLUS_RELIKT_TOD_SCHLUESSEL)
  var uuid = String(player.uuid)
  if (!merker.contains(uuid)) return
  // Noch tot (Abmelden auf dem Todesbildschirm): beim Wiedereinstieg erneut versuchen
  if (player.isDeadOrDying()) return
  var n = merker.getInt(uuid)
  merker.remove(uuid)
  daten.put(IEPLUS_RELIKT_TOD_SCHLUESSEL, merker)
  for (var i = 0; i < n; i++) ieplusReliktZurueck(player, Item.of(IEPLUS_RELIKT))
  player.tell(Text.darkPurple('Das Relikt liegt wieder in deiner Tasche. Es lässt dich nicht los.'))
}

PlayerEvents.respawned(event => {
  try {
    ieplusReliktNachTod(event.player, event.server)
  } catch (err) {
    console.error('relikt_fluch.js (Wiedereinstieg): ' + err)
  }
})

PlayerEvents.loggedIn(event => {
  try {
    ieplusReliktNachTod(event.player, event.server)
  } catch (err) {
    console.error('relikt_fluch.js (Einloggen): ' + err)
  }
})
