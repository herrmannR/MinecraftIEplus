// Altar-Dimension von Blood Magic (Demon Realm, bloodmagic:dungeon).
// 1. Die Rituale zur Dimension gelingen nur auf dem Merkur (Tempel; docs/01_PROGRESSION.md Pfad D, Test E19/P9).
// 2. Hinein kommt nur, wer einen Benevolent Goddess' Charm trägt (F18, User 2026-10-20). Kreativ und Zuschauer ausgenommen.
// Forge-Ereignisse gehen in KubeJS 2001 nur aus startup_scripts.
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

const IEPLUS_DUNGEON_RITUALE = ['ritualSimpleDungeon', 'ritualStandardDungeon']
const IEPLUS_TEMPEL_DIMENSION = 'ad_astra:mercury'
const IEPLUS_ALTAR_DIMENSION = 'bloodmagic:dungeon'
const IEPLUS_AMULETT = 'botania:goddess_charm'

ForgeEvents.onEvent('wayoftime.bloodmagic.event.RitualEvent$RitualActivatedEvent', event => {
  const name = String(event.getRitual().getName())
  if (!IEPLUS_DUNGEON_RITUALE.includes(name)) return
  const dim = String(event.getRitualStone().getWorldObj().dimension().location())
  if (dim === IEPLUS_TEMPEL_DIMENSION) return
  event.setCanceled(true)
  const player = event.getPlayer()
  if (player) player.tell(Text.red('Das Ritual findet hier keinen Halt. Nur im Tempel auf dem Merkur öffnet sich der Weg.'))
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
  const entity = event.getEntity()
  if (!entity || !entity.isPlayer()) return
  if (String(event.getDimension().location()) !== IEPLUS_ALTAR_DIMENSION) return
  if (entity.isCreative() || entity.isSpectator()) return
  if (ieplusTraegtAmulett(entity)) return
  event.setCanceled(true)
  entity.tell(Text.red('Eine dunkle Kraft stößt dich zurück. Ohne den Schutz der Göttin (Benevolent Goddess\' Charm) kommst du nicht hinein.'))
})
