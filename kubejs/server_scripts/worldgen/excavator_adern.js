// Excavator-Adern von Immersive Engineering an die Erzverteilung anpassen.
// Entscheidung: docs/03_ERZGENERATION.md (2026-10-12).
// Stand 2026-10-12, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  // Zinn gibt es nur in Everbright (Blue Skies). Die Ader Cassiterite lieferte 100 % Zinnerz in der Overworld.
  event.remove({ id: 'immersiveengineering:mineral/cassiterite' })

  // Galena und Uraninite (Blei, Uran) sind seltener gemacht: Gewicht 5 statt 15 bzw. 10.
  // Das steht als Datei in kubejs/data/immersiveengineering/recipes/mineral/.
})
