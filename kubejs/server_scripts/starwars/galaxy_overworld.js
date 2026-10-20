// Galaxy in a Cube nur in den Star-Wars-Welten (Entscheidung 2026-10-14, Test 54).
// Tusken Raider kommen nicht über Biom-Daten, sondern über einen eigenen Spawner im Code
// (che.swgc.TuskenTribeSpawner): nur Overworld, keine Config. Darum hier beim Betreten der Welt abfangen.
// Das trifft auch Tusken, die schon in gespeicherten Overworld-Chunks stehen.

EntityEvents.spawned('swgc:tusken_raider', event => {
  if (String(event.level.dimension) == 'minecraft:overworld') {
    event.cancel()
  }
})
