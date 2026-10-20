// Der IE-Crusher übernimmt den Mekanism-Crusher (User, 2026-10-17): Für jedes Rezept des Mekanism-Crushers
// (Typ mekanism:crushing, auch die Schritte der Erzverarbeitung und Bio Fuel) entsteht ein gleiches Rezept im IE-Crusher,
// sofern der IE-Crusher dieselbe Eingabe nicht schon verarbeitet.
// Der IE-Crusher nimmt nur ein einzelnes Ingredient ohne Menge: Listen werden in Einzelrezepte geteilt,
// Rezepte mit Eingabemenge über 1 entfallen (2026-10-20 nur prismarine/shard_from_brick_slabs).
// Der Mekanism-Crusher bleibt vorerst (ob er entfällt, ist nicht entschieden).
// Stand 2026-10-20, KubeJS 2001. Erster Lauf (Test 42): 215 von 220 Rezepten geladen, Fehler behoben.

ServerEvents.recipes(event => {
  const vorhanden = new Set()
  event.forEachRecipe({ type: 'immersiveengineering:crusher' }, r => {
    const j = JSON.parse(String(r.json))
    vorhanden.add(JSON.stringify(j.input))
  })

  let neu = 0
  let ausgelassen = 0
  event.forEachRecipe({ type: 'mekanism:crushing' }, r => {
    const j = JSON.parse(String(r.json))
    if (!j.input || !j.output) return
    const zutat = j.input.ingredient !== undefined ? j.input.ingredient : j.input
    const menge = j.input.amount !== undefined ? j.input.amount : 1
    if (menge > 1) { ausgelassen++; return }

    const basisId = 'ieplus:crusher_von_mekanism/' + String(r.getId()).replace(':', '/')
    const einzeln = Array.isArray(zutat) ? zutat : [zutat]
    einzeln.forEach((z, i) => {
      if (vorhanden.has(JSON.stringify(z))) return
      event.custom({
        type: 'immersiveengineering:crusher',
        energy: 3200,
        input: z,
        result: j.output,
        secondaries: []
      }).id(einzeln.length > 1 ? `${basisId}_${i}` : basisId)
      neu++
    })
  })
  console.info(`ie_crusher_uebernimmt.js: ${neu} Rezepte für den IE-Crusher angelegt, ${ausgelassen} mit Eingabemenge über 1 ausgelassen`)
})
