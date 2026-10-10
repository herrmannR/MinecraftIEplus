// Raumfahrt: Sauerstoff kommt ausschließlich aus Mekanism.
// Entscheidung: docs/15_RAUMFAHRT.md (Entscheidungen 2026-10-07, Punkt 1; Umsetzung 2026-10-11)
//
// Kette: Wasser -> Electrolytic Separator -> Sauerstoffgas
//        -> Rotary Condensentrator -> flüssiger Sauerstoff (mekanism:oxygen, Tag forge:oxygen)
//        -> Oxygen Loader / Oxygen Bubble Distributor
//
// Entfernt:  beyond_earth:oxygen_loading/from_water              (5 mB Wasser -> 5 Sauerstoff)
//            beyond_earth:oxygen_bubble_distributing/from_water  (1 mB Wasser -> 4 Sauerstoff)
// Neu:       1 mB flüssiger Sauerstoff -> 5 Sauerstoff (Loader) bzw. 4 Sauerstoff (Distributor)
// Werte sind vorläufig (Balancing in Phase 3).

onEvent('recipes', event => {
  event.remove({ id: 'beyond_earth:oxygen_loading/from_water' })
  event.remove({ id: 'beyond_earth:oxygen_bubble_distributing/from_water' })

  event.custom({
    type: 'beyond_earth:oxygen_loader',
    input: { tag: 'forge:oxygen', amount: 1 },
    oxygen: 5
  }).id('ieplus:oxygen_loading/from_mekanism_oxygen')

  event.custom({
    type: 'beyond_earth:oxygen_bubble_distributor',
    input: { tag: 'forge:oxygen', amount: 1 },
    oxygen: 4
  }).id('ieplus:oxygen_bubble_distributing/from_mekanism_oxygen')
})
