// Tooltips für die eigenen Items aus Teil 1 (startup_scripts/teil1_items.js).
// Die Baupläne zeigen ihr Rezept im Tooltip, weil die Rezepte in JEI nicht erscheinen sollen (docs/18_STORY.md, Baupläne).
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

ItemEvents.tooltip(event => {
  event.add('kubejs:galaktischer_strahlenschutz', [
    Text.gray('Gefertigt vom Hellen Elfen.'),
    Text.gray('Bauteil des Calorite-Triebwerks (Rakete T4).')
  ])
  event.add('kubejs:relikt', Text.gray('Gefunden in der Altar-Dimension. Was es kann, weiß vielleicht der Helle Elf.'))
  ;['b1', 'b2', 'droideka'].forEach(t => event.add(`kubejs:steuerkern_${t}`, Text.gray('Zutat im Droid Fabricator, wird verbraucht. Nur beim Einsiedler.')))

  const plan = (id, zeilen) => event.add(id, [Text.gold('Beim ersten Erhalt für alle freigeschaltet.')].concat(zeilen.map(z => Text.gray(z))))
  plan('kubejs:bauplan_assembly_bench', ['Werkbank:', ' _ P _   P = Papier', ' E E E   E = Eisenbarren', ' H H H   H = Holzbretter'])
  plan('kubejs:bauplan_droid_fabricator', ['Werkbank:', ' e R e   e = Eisenbarren, R = Redstone', ' B K B   B = Eisenblock, K = Kupferbarren', ' B B B'])
  plan('kubejs:bauplan_gas_harvester', ['Gas Harvester:', ' B R B   B = Eisenblock, R = Redstone', ' K G K   K = Kupferbarren, G = Glas', ' R e R   e = Eisenbarren',
    'Empty Gas Vessel:', ' Eisennugget / Glas / Eisenbarren (untereinander)'])
})
