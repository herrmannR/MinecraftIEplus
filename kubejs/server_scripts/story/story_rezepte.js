// Rezepte der Story, Teil 1 (docs/story/ABLAUF.md, docs/18_STORY.md „Einsiedler: Höhle und Klonhelm“).
// Pilotenhelm des Einsiedlers (ST4-04): den verbeulten Helm aus der Höhle an der Werkbank reparieren.
//   S C S    S Stahlplatte, C Basic Control Circuit (Anzeige im Helm)
//   G H G    G Isolierglas (Visier), H verbeulter Helm
//   S T S    T Elektronenröhre (Funk)
// Ergebnis ist der echte 212er-Helm swgc:clone_212th_battalion_helmet (O71); Galaxy in a Cube hat kein eigenes Rezept dafür.
// Gesperrt, bis jemand den Bauplan „Pilotenhelm“ gelesen hat (Weltwert ieplus_bauplan_pilotenhelm, gesetzt von
// server_scripts/starwars/einsiedler_shop.js; dort auch /bauplan zuruecksetzen und /bauplan alles).
// Die Rezept-ID ieplus:story/pilotenhelm steht im Patchouli-Eintrag patchouli_books/bauplaene/en_us/entries/pilotenhelm.json.
// Mana-Diamant-Rahmen: siehe unten.
// Stand 2026-10-27, KubeJS 2001. Fassung 2 (Bauplan-Sperre, 212er-Helm) getestet (Test 78); Mana-Diamant-Rahmen UNGETESTET.

// Weltwert lesen; Werkstation und Autocrafter geben keinen Spieler mit (Test 56), dann über Utils.server
function ieplusStoryBauplanGelesen(grid, name) {
  var player = grid.player
  var server = (player && player.server) ? player.server : Utils.server
  if (!server) return false
  return server.persistentData.getBoolean('ieplus_bauplan_' + name)
}

ServerEvents.recipes(event => {
  event.shaped('swgc:clone_212th_battalion_helmet', ['SCS', 'GHG', 'STS'], {
    S: '#forge:plates/steel',
    C: 'mekanism:basic_control_circuit',
    G: 'immersiveengineering:insulating_glass',
    H: 'kubejs:kaputter_klonhelm',
    T: 'immersiveengineering:electron_tube'
  }).modifyResult((grid, result) => ieplusStoryBauplanGelesen(grid, 'pilotenhelm') ? result : Item.empty)
    .id('ieplus:story/pilotenhelm')

  // Mana-Diamant-Rahmen (Wunsch des Users, 2026-10-27): der Leuchtrahmen, umgebaut. Name und Aussehen in
  // kubejs/assets/minecraft (lang, models/block/glow_item_frame*.json, Texturen aus tools/manarahmen_textur.py).
  // Einziger Rahmen, in den sich das Relikt legen lässt (startup_scripts/relikt_sperre.js).
  event.remove({ output: 'minecraft:glow_item_frame' })
  event.shaped('minecraft:glow_item_frame', ['DDD', 'DLD', 'DDD'], {
    D: 'botania:mana_diamond',
    L: 'minecraft:leather'
  }).id('ieplus:story/mana_rahmen')
})
