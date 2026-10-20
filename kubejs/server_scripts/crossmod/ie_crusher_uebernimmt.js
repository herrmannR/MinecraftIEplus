// Der IE-Crusher übernimmt den Mekanism-Crusher (User, 2026-10-17): Für jedes Rezept des Mekanism-Crushers
// (Typ mekanism:crushing, auch die Schritte der Erzverarbeitung und Bio Fuel) entsteht ein gleiches Rezept im IE-Crusher,
// sofern der IE-Crusher dieselbe Eingabe nicht schon verarbeitet.
// Der Mekanism-Crusher bleibt vorerst (ob er entfällt, ist nicht entschieden).
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  const vorhanden = new Set()
  event.forEachRecipe({ type: 'immersiveengineering:crusher' }, r => {
    const j = JSON.parse(String(r.json))
    vorhanden.add(JSON.stringify(j.input))
  })

  let neu = 0
  event.forEachRecipe({ type: 'mekanism:crushing' }, r => {
    const j = JSON.parse(String(r.json))
    if (!j.input || !j.output) return
    const zutat = j.input.ingredient !== undefined ? j.input.ingredient : j.input
    const menge = j.input.amount !== undefined ? j.input.amount : 1
    if (vorhanden.has(JSON.stringify(zutat))) return

    event.custom({
      type: 'immersiveengineering:crusher',
      energy: 3200,
      input: menge > 1 ? { base_ingredient: zutat, count: menge } : zutat,
      result: j.output,
      secondaries: []
    }).id('ieplus:crusher_von_mekanism/' + String(r.getId()).replace(':', '/'))
    neu++
  })
  console.info(`ie_crusher_uebernimmt.js: ${neu} Rezepte für den IE-Crusher angelegt`)
})
