// Legierungen in der Tinkers-Schmelzerei an die Rollen der anderen Mods anpassen.
// Entscheidung: docs/07_CROSSMOD_INTEGRATION.md, Abschnitt „Tinkers in den höheren Stufen“ (2026-10-12).
// Stand 2026-10-12, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  // Refined Obsidian entsteht nur über Mekanism. Tinkers legierte es aus Obsidian, Diamant und Osmium (1475 °C).
  // Das Einschmelzen fertiger Barren bleibt möglich.
  event.remove({ id: 'tconstruct:smeltery/alloys/molten_refined_obsidian' })

  // Bronze, Konstantan, Elektrum und Invar bleiben in der Schmelzerei legierbar (frühe Legierungen).
})
