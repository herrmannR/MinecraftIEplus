// Behebt Tags, die ein Mod mit einem nicht vorhandenen Eintrag unbrauchbar macht.
// Hintergrund: docs/00_MODBASIS.md, Abschnitt "Bekannte Fehler".
// Stand 2026-10-12, KubeJS 2001. UNGETESTET.

ServerEvents.tags('item', event => {
  // Star Wars Planets trägt swplanets:mustafar_sand ein, das es nicht gibt.
  // Minecraft verwirft deshalb das ganze Tag forge:sand (Mekanism: "Broken tags").
  event.remove('forge:sand', 'swplanets:mustafar_sand') // check:ok – fehlt absichtlich
})
