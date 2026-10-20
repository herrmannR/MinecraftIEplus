// Altar-Dimension von Blood Magic (Demon Realm, bloodmagic:dungeon).
// 1. Pathway to the Endless Realm gelingt nur auf dem Merkur (Tempel; docs/01_PROGRESSION.md Pfad D, Test E19/P9).
//    Edge of the Hidden Realm (Mini-Dungeon, Tau Fruit für Altar-Stufe 4) bleibt überall erlaubt (Story-Variante B, User 2026-10-20).
// 2. Hinein kommt nur, wer einen Benevolent Goddess' Charm trägt (F18, User 2026-10-20). Kreativ und Zuschauer ausgenommen.
// Forge-Ereignisse gehen in KubeJS 2001 nur aus startup_scripts.
// Fehler in einem Handler brechen das Ereignis ab (Test 47: Ritual ging nirgends). Deshalb fängt jeder Handler
// seine Fehler selbst ab und lässt das Ereignis im Fehlerfall durch.
// Innerhalb der Funktionen nur var: Rhino meldet bei const in try-Blöcken „redeclaration of var“ (Test 47/48, 2026-10-20).
// Amulett-Prüfung ohne Rückfall aufs Inventar: Der Rückfall ließ bei Fehlern jeden mit Charm im Inventar hinein (Test 48, Runde 3).
// findFirstCurio gibt es mit Item und mit Predicate; die Item-Fassung wird ausdrücklich gewählt.
// Jede Entscheidung beim Betreten steht in logs/kubejs/startup.log („altar_dimension.js: Betreten …“).
// Stand 2026-10-20, KubeJS 2001. Fassung 4 nach Test 48 (Ritual-Teil mit Fassung 3 bestanden, Test 47).
// Blood Magic bringt Spieler per /execute in … run tp hinein (TileInversionPillar.teleportPlayerToLocation);
// ServerPlayer.teleportTo ruft dabei ForgeHooks.onTravelToDimension, das Ereignis kommt also an (Forge 47.4.26, JAR geprüft).

const IEPLUS_DUNGEON_RITUALE = ['ritualStandardDungeon']
const IEPLUS_TEMPEL_DIMENSION = 'ad_astra:mercury'
const IEPLUS_ALTAR_DIMENSION = 'bloodmagic:dungeon'
const IEPLUS_AMULETT = 'botania:goddess_charm'

// Liefert "namespace:pfad" aus einer Level (KubeJS: level.dimension ist ein Feld, keine Funktion),
// einem ResourceKey ("ResourceKey[minecraft:dimension / ad_astra:mercury]") oder einer ResourceLocation.
function ieplusDimId(x) {
  if (x === null || x === undefined) return ''
  var quelle = (x.dimension !== undefined && typeof x.dimension !== 'function') ? x.dimension : x
  var s = String(quelle)
  var m = s.match(/\/\s*([a-z0-9_.-]+:[a-z0-9_.\/-]+)\s*\]/)
  return m ? m[1] : s
}

ForgeEvents.onEvent('wayoftime.bloodmagic.event.RitualEvent$RitualActivatedEvent', event => {
  try {
    var name = String(event.getRitual().getName())
    if (!IEPLUS_DUNGEON_RITUALE.includes(name)) return
    var dim = ieplusDimId(event.getRitualStone().getWorldObj())
    if (dim === IEPLUS_TEMPEL_DIMENSION) return
    event.setCanceled(true)
    var player = event.getPlayer()
    if (player) player.tell(Text.red('Das Ritual findet hier keinen Halt. Nur im Tempel auf dem Merkur öffnet sich der Weg.'))
  } catch (err) {
    console.error('altar_dimension.js (Ritual): ' + err)
  }
})

function ieplusTraegtAmulett(player) {
  // Liefert true, false oder null (Abfrage gescheitert)
  try {
    var CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')
    var handler = CuriosApi.getCuriosInventory(player).resolve()
    if (!handler.isPresent()) return false
    var item = Item.of(IEPLUS_AMULETT).getItem()
    return handler.get()['findFirstCurio(net.minecraft.world.item.Item)'](item).isPresent()
  } catch (err) {
    console.error('altar_dimension.js: Curios nicht abfragbar: ' + err)
    return null
  }
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', event => {
  try {
    var entity = event.getEntity()
    if (!entity || !entity.isPlayer()) return
    console.info('altar_dimension.js: Reise ' + entity.username + ' nach ' + ieplusDimId(event.getDimension()) + ', kreativ: ' + entity.isCreative())
    if (ieplusDimId(event.getDimension()) !== IEPLUS_ALTAR_DIMENSION) return
    if (entity.isCreative() || entity.isSpectator()) return
    var amulett = ieplusTraegtAmulett(entity)
    console.info('altar_dimension.js: Betreten ' + entity.username + ', Amulett im Curios-Slot: ' + amulett)
    if (amulett === true) return
    // Auch bei gescheiterter Abfrage (null) bleibt man draußen; Kreativmodus kommt immer hinein.
    event.setCanceled(true)
    entity.tell(Text.red('Eine dunkle Kraft stößt dich zurück. Ohne den Schutz der Göttin (Benevolent Goddess\' Charm) kommst du nicht hinein.'))
  } catch (err) {
    console.error('altar_dimension.js (Betreten): ' + err)
  }
})
