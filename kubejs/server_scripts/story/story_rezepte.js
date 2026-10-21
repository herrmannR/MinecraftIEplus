// Rezepte der Story, Teil 1 (docs/story/ABLAUF.md, docs/18_STORY.md „Einsiedler: Höhle und Klonhelm“).
// Pilotenhelm des Einsiedlers (ST4-04): den verbeulten Helm aus der Höhle an der Werkbank reparieren.
//   S C S    S Stahlplatte, C Basic Control Circuit (Anzeige im Helm)
//   G H G    G Isolierglas (Visier), H verbeulter Helm
//   S T S    T Elektronenröhre (Funk)
// Stand 2026-10-21, KubeJS 2001. Fassung 1, UNGETESTET.

ServerEvents.recipes(event => {
  event.shaped('kubejs:klonhelm_repariert', ['SCS', 'GHG', 'STS'], {
    S: '#forge:plates/steel',
    C: 'mekanism:basic_control_circuit',
    G: 'immersiveengineering:insulating_glass',
    H: 'kubejs:kaputter_klonhelm',
    T: 'immersiveengineering:electron_tube'
  }).id('ieplus:story/pilotenhelm')
})
