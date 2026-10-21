// Schutzzonen für Story-Bauten (User, 2026-10-21).
// Zweck: Spieler sollen Story-Strukturen nicht aus Versehen zerstören. Geschützt wird nur gegen
// Aktionen von Spielern (Abbauen, Setzen, Werkzeuge per Rechtsklick), nicht gegen Explosionen,
// Mobs oder Maschinen.
// Spieler im Kreativmodus sind ausgenommen – so kann man selbst weiterbauen.
//
// FREISTELLEN: Stellen in einer Zone, an denen bestimmte Blöcke gesetzt und wieder abgebaut
// werden dürfen (z. B. die Ritualsteine im Tempel, damit das Ritual neu aufgebaut werden kann).
// Statt `pos` geht auch `von`/`bis` für einen Bereich. Blöcke als ID oder Tag ('#mod:tag').

const SCHUTZZONEN = [
  // Beispiel (auskommentiert, Koordinaten folgen vom User):
  // {
  //   name: 'Tempel',
  //   dimension: 'minecraft:overworld',
  //   von: [100, 60, 200],
  //   bis: [140, 90, 240],
  //   freistellen: [
  //     { pos: [120, 64, 220], bloecke: ['bloodmagic:masterritualstone'] },
  //     { von: [118, 64, 218], bis: [122, 64, 222], bloecke: ['bloodmagic:ritualstone',
  //       'bloodmagic:waterritualstone', 'bloodmagic:fireritualstone', 'bloodmagic:earthritualstone',
  //       'bloodmagic:airritualstone', 'bloodmagic:duskritualstone', 'bloodmagic:lightritualstone'] }
  //   ]
  // },
]

// Gegenstände, deren Rechtsklick in einer Zone Blöcke verändert (Entrinden, Pfade, Feuer, Eimer ...).
const VERBOTENE_RECHTSKLICKS = [
  '#minecraft:axes', '#minecraft:shovels', '#minecraft:hoes',
  'minecraft:flint_and_steel', 'minecraft:fire_charge', 'minecraft:bone_meal',
  'minecraft:bucket', 'minecraft:water_bucket', 'minecraft:lava_bucket', 'minecraft:powder_snow_bucket'
]

const MELDUNG = 'Dieser Ort ist geschützt.'

function imBereich(b, von, bis) {
  return b.x >= Math.min(von[0], bis[0]) && b.x <= Math.max(von[0], bis[0]) &&
    b.y >= Math.min(von[1], bis[1]) && b.y <= Math.max(von[1], bis[1]) &&
    b.z >= Math.min(von[2], bis[2]) && b.z <= Math.max(von[2], bis[2])
}

// Zone, in der der Block liegt, oder null.
function zoneVon(block) {
  const dim = String(block.level.dimension)
  for (let i = 0; i < SCHUTZZONEN.length; i++) {
    let z = SCHUTZZONEN[i]
    if (z.dimension == dim && imBereich(block, z.von, z.bis)) return z
  }
  return null
}

function passt(liste, id, hatTag) {
  for (let i = 0; i < liste.length; i++) {
    let e = liste[i]
    if (e.charAt(0) == '#' ? hatTag(e.substring(1)) : e == id) return true
  }
  return false
}

// Darf dieser Block an dieser Stelle der Zone gesetzt/abgebaut werden?
function freigegeben(zone, block) {
  const frei = zone.freistellen || []
  const id = String(block.id)
  for (let i = 0; i < frei.length; i++) {
    let f = frei[i]
    let ort = f.pos ? imBereich(block, f.pos, f.pos) : imBereich(block, f.von, f.bis)
    if (ort && passt(f.bloecke, id, t => block.hasTag(t))) return true
  }
  return false
}

function abweisen(event, player) {
  player.setStatusMessage(Text.of(MELDUNG).gold())
  event.cancel()
}

BlockEvents.broken(event => {
  const player = event.player
  if (!player || player.isCreative()) return
  const zone = zoneVon(event.block)
  if (zone && !freigegeben(zone, event.block)) abweisen(event, player)
})

BlockEvents.placed(event => {
  const entity = event.entity
  if (!entity || !entity.isPlayer() || entity.isCreative()) return
  const zone = zoneVon(event.block)
  if (zone && !freigegeben(zone, event.block)) abweisen(event, entity)
})

BlockEvents.rightClicked(event => {
  const player = event.player
  if (!player || player.isCreative()) return
  const item = event.item
  if (item.isEmpty()) return
  if (!passt(VERBOTENE_RECHTSKLICKS, String(item.id), t => item.hasTag(t))) return
  if (zoneVon(event.block)) abweisen(event, player)
})
