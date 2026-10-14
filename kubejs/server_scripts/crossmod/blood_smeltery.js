// Blood-Smeltery: Abkürzungen an Blood Magic vorbei entfernen.
// Entscheidung: docs/07_CROSSMOD_INTEGRATION.md, Abschnitt „Blood-Smeltery“ (2026-10-12).
// Stand 2026-10-12, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  // Life Essence entsteht nur am Blutaltar, nicht als Legierung aus Demon Will, Liquid Soul und Blut bzw. Fleischsuppe.
  event.remove({ id: 'bloodsmeltery:smeltery/alloy/life_essence' })
  event.remove({ id: 'bloodsmeltery:smeltery/alloy/life_essence_meat_soup' })

  // Slates und Runen entstehen nur am Blutaltar, nicht am Gießtisch oder im Gießbecken.
  event.remove({ id: 'bloodsmeltery:smeltery/casting/blank_slate' })
  event.remove({ id: 'bloodsmeltery:smeltery/casting/blank_slate_reusable' })
  event.remove({ id: 'bloodsmeltery:smeltery/casting/blank_rune' })

  // Das Einschmelzen von Slates und Runen zu Blood-Seared Stone bleibt (Werkzeugmaterial).
})
