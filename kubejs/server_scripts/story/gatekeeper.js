// Kein Gatekeeper von Blue Skies (O34): Seinen Handel übernimmt Bodhi Bad Dur, der Wächter der Traumwelten (O72).
// Der Gatekeeper steht in den Gatekeeper-Häusern der Oberwelt (Struktur). Wie die Tusken in
// server_scripts/starwars/galaxy_overworld.js: Er wird beim Betreten der Welt abgefangen, in allen Dimensionen.
// Das trifft auch Gatekeeper, die schon in gespeicherten Chunks stehen. Die Häuser selbst (und ihre Truhen) bleiben.
// Stand 2026-10-26, KubeJS 2001. Fassung 1, UNGETESTET.

EntityEvents.spawned('blue_skies:gatekeeper', event => {
  event.cancel()
})
