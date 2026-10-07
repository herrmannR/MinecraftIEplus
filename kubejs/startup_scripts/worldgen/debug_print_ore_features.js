// priority: 0
// NUR FÜR DIE TESTINSTANZ – nach Phase 1 entfernen, nicht ausliefern.
// Schreibt die Erz-Features pro Biom ins Log (logs/kubejs/startup.txt bzw. latest.log),
// um zu prüfen, ob IE-/Mekanism-/AE2-Erze bereits in Twilight-Forest-Biomen generieren.

onEvent('worldgen.remove', event => {
  event.printFeatures('underground_ores', 'twilightforest:forest')
  event.printFeatures('underground_ores', 'twilightforest:highlands')
  event.printFeatures('underground_ores', 'minecraft:plains')
})
