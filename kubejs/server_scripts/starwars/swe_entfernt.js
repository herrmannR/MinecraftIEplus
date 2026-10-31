// Star Wars Expansion: alle Rezepte des Mods entfernen (F43, 2026-10-31; docs/20_ENTSCHEIDUNGEN.md).
// Der Mod ist nur wegen seiner Wesen im Pack. Weg sind damit u. a. das Reparation Kit (Schlüssel zur eigenen Galaxiekarte),
// Lichtschwerter und Plastoid (Doppelung zu Galaxy in a Cube), Beskar (Doppelung zu Star Wars Planets), Snow Suit (nur Teil 1)
// und die Ofen-/Werkbankrezepte der Planeten-Rohstoffe. Ausgeblendet in client_scripts/swe_ausblenden.js.
// Die Rettungskapsel in der Overworld schaltet data/star_wars_expansion/worldgen/structure/broken_pod_structure.json ab.
// Stand 2026-10-31, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  event.remove({ mod: 'star_wars_expansion' })
})
