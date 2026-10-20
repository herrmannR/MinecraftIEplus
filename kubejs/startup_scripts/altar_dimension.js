// Altar-Dimension von Blood Magic (Demon Realm, bloodmagic:dungeon).
// 1. Die Rituale zur Dimension gelingen nur auf dem Merkur (Tempel; docs/01_PROGRESSION.md Pfad D, Test E19/P9).
// 2. Hinein kommt nur, wer einen Benevolent Goddess' Charm trägt (F18, User 2026-10-20). Kreativ und Zuschauer ausgenommen.
// Forge-Ereignisse gehen in KubeJS 2001 nur aus startup_scripts.
// Fehler in einem Handler brechen das Ereignis ab (Test 47: Ritual ging nirgends). Deshalb fängt jeder Handler
// seine Fehler selbst ab und lässt das Ereignis im Fehlerfall durch.
// Stand 2026-10-20, KubeJS 2001. Fassung 2 nach Test 47, UNGETESTET.

const IEPLUS_DUNGEON_RITUALE = ['ritualSimpleDungeon', 'ritualStandardDungeon']
const IEPLUS_TEMPEL_DIMENSION = 'ad_astra:mercury'
const IEPLUS_ALTAR_DIMENSION = 'bloodmagic:dungeon'
const IEPLUS_AMULETT = 'botania:goddess_charm'

// Liefert "namespace:pfad" aus einer Level (KubeJS: level.dimension ist ein Feld, keine Funktion),
// einem ResourceKey ("ResourceKey[minecraft:dimension / ad_astra:mercury]") oder einer ResourceLocation.
function ieplusDimId(x) {
  if (x === null || x === undefined) return ''
  const quelle = (x.dimension !== undefined && typeof x.dimension !== 'function') ? x.dimension : x
  const s = String(quelle)
  const m = s.match(/\/\s*([a-z0-9_.-]+:[a-z0-9_.\/-]+)\s*\]/)
  return m ? m[1] : s
}

ForgeEvents.onEvent('wayoftime.bloodmagic.event.RitualEvent$RitualActivatedEvent', event => {
  try {
    const name = String(event.getRitual().getName())
    if (!IEPLUS_DUNGEON_RITUALE.includes(name)) return
    const dim = ieplusDimId(event.getRitualStone().getWorldObj())
    if (dim === IEPLUS_TEMPEL_DIMENSION) return
    event.setCanceled(true)
    const player = event.getPlayer()
    if (player) player.tell(Text.red('Das Ritual findet hier keinen Halt. Nur im Tempel auf dem Merkur öffnet sich der Weg.'))
  } catch (err) {
    console.error('altar_dimension.js (Ritual): ' + err)
  }
})

function ieplusTraegtAmulett(player) {
  try {
    const CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')
    const handler = CuriosApi.getCuriosInventory(player).resolve()
    if (handler.isPresent()) {
      return handler.get().findFirstCurio(Item.of(IEPLUS_AMULETT).getItem()).isPresent()
    }
  } catch (err) {
    console.warn('altar_dimension.js: Curios nicht abfragbar, prüfe nur das Inventar: ' + err)
  }
  // Rückfall, damit niemand wegen eines Fehlers für immer draußen bleibt
  return player.inventory.find(IEPLUS_AMULETT) >= 0
}

ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', event => {
  try {
    const entity = event.getEntity()
    if (!entity || !entity.isPlayer()) return
    if (ieplusDimId(event.getDimension()) !== IEPLUS_ALTAR_DIMENSION) return
    if (entity.isCreative() || entity.isSpectator()) return
    if (ieplusTraegtAmulett(entity)) return
    event.setCanceled(true)
    entity.tell(Text.red('Eine dunkle Kraft stößt dich zurück. Ohne den Schutz der Göttin (Benevolent Goddess\' Charm) kommst du nicht hinein.'))
  } catch (err) {
    console.error('altar_dimension.js (Betreten): ' + err)
  }
})
