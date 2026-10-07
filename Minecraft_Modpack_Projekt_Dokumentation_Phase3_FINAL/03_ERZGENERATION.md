# 03 — ERZGENERATION

## Status

🟢 **Phase 3 — finalisiert.**

Dieses Dokument legt die **inhaltliche Erz-/Worldgen-Matrix** des Modpacks fest. Konkrete technische Parameter wie Y-Level, Vein Sizes, Spawn-Chancen und KubeJS-Implementierung werden erst in der späteren Ausarbeitung festgelegt.

## Zweck

Eine einheitliche und ausgewogene Erzverteilung für die bestehende Welt, die die parallelen Progressionspfade unterstützt und gleichzeitig die Identität der einzelnen Mods erhält.

## Grundprinzipien

- Der Overworld bleibt die wichtigste Quelle für grundlegende Ressourcen.
- Doppelte Erzregistrierungen werden nicht automatisch zu einem einzigen Item vereinheitlicht; gemeinsame Materialfamilien werden bei Bedarf über Tags verbunden.
- Seltene Industriemetalle bleiben im Overworld vorhanden, werden aber durch den Twilight Forest deutlich attraktiver.
- Dimensionen sollen zusätzliche Ressourcenwege eröffnen, aber die normale Maschinenprogression nicht unnötig hart blockieren.
- Magische Ressourcen werden nicht durch gewöhnliche Erzverteilung trivialisiert.
- Die bestehende Welt darf durch die Änderungen nicht entwertet oder zerstört werden.

## Finale Erz-/Worldgen-Matrix

| Ressource | Overworld | Nether | Twilight Forest | Rolle |
|---|---|---|---|---|
| Coal | hoch | – | mittel | grundlegende Energie |
| Iron | hoch | – | mittel | Basismaterial |
| Copper | mittel/hoch | – | mittel | IE / AE2 / Mekanism |
| Gold | mittel | mittel | mittel | universelle Brücke |
| Redstone | mittel | – | mittel | Technik |
| Lapis | mittel | – | mittel | Magie / Verzauberung |
| Diamond | niedrig | – | niedrig/mittel | hoher Vanilla-Tier |
| Aluminium | niedrig | – | **hoch** | IE / Tinkers |
| Nickel | niedrig | – | **hoch** | IE / Tinkers |
| Silver | niedrig | – | **hoch** | IE / Tinkers / Magie |
| Lead | niedrig | – | **hoch** | IE / Mekanism |
| Tin | sehr niedrig / keine gezielte Verteilung | – | – | Mekanism |
| Osmium | – | – | – | Mekanism |
| Uranium | sehr niedrig | – | niedrig | Energie |
| Cobalt | – | **hoch** | – | Tinkers |
| Certus Quartz | **mittel** | – | – | AE2 |
| Fluix | nicht natürlich | – | – | AE2-Verarbeitung |
| Fluorite | niedrig | – | niedrig | Mekanism |
| Demonite | – | – | – | Blood Magic |
| Dragonstone | – | – | – | MythicBotany |
| Elementium Ore | – | – | – | MythicBotany |
| Mythic Gold Ore | – | – | – | MythicBotany |

## Rollen der Dimensionen

### Overworld — Basis und Einstieg

Die Overworld stellt die grundlegenden Ressourcen für den frühen und mittleren Fortschritt bereit:

- Coal
- Iron
- Copper
- Gold
- Redstone
- Lapis
- Diamond
- Certus Quartz
- seltene Mengen der industriellen Metalle Aluminium, Nickel, Silver und Lead
- sehr selten Uranium und Fluorite

Dadurch können IE, Tinkers, Botania und der frühe AE2-Einstieg parallel begonnen werden.

### Nether — spezialisierte Ressource

Der Nether erhält **Cobalt als starke/exklusive Tinkers-Ressource**. Er wird dadurch zu einem wichtigen Erkundungsziel für fortgeschrittene Tinkers-Materialien, ohne die grundlegende Maschinenprogression davon abhängig zu machen.

### Twilight Forest — Industrial Frontier

Der Twilight Forest wird zum bevorzugten Erkundungsgebiet für seltene industrielle Metalle:

- Aluminium
- Nickel
- Silver
- Lead
- kleinere Mengen Uranium und Fluorite

Twilight Forest soll damit einen starken Ressourcenvorteil bieten, aber keine Pflichtstation für gewöhnliche Maschinenprogression werden.

## Ressourcen ohne normale Worldgen-Rolle

### Mekanism

- Tin bleibt eine charakteristische Mekanism-Ressource.
- Osmium bleibt eine charakteristische Mekanism-Ressource.
- Beide werden nicht künstlich über den Twilight Forest verteilt.

### AE2

- Certus Quartz bleibt im Overworld zugänglich.
- Fluix wird nicht natürlich generiert.
- Fluix entsteht über die AE2-eigene Verarbeitung/Progression.

Damit kann AE2 früh begonnen werden, während die spätere Automatisierung weiterhin eine eigene Progressionsstufe bildet.

### Botania / MythicBotany

Botania-Ressourcen und MythicBotany-Hochstufen bleiben überwiegend an Mana-, Runen- und magische Verarbeitung gebunden. Sie werden nicht durch zusätzliche gewöhnliche Erzvorkommen entwertet.

### Blood Magic

Demonite bleibt an Blood Magic bzw. dessen eigene Progression gebunden und erhält keine gewöhnliche Overworld-/Nether-/Twilight-Verteilung.

### Twilight-Spezialmaterialien

Ironwood, Steeleaf, Knightmetal, Fiery-Materialien und vergleichbare Twilight-Ressourcen bleiben dimensionseigen und werden nicht zu allgemeinen Overworld-Erzen gemacht.

## Migrationsregel für die bestehende Welt

Die bestehende Welt ist ein fester Ausgangspunkt des Projekts.

- Keine Worldgen-Änderung darf voraussetzen, dass die bestehende Welt neu erzeugt wird.
- Änderungen an der Overworld-Erzgeneration wirken grundsätzlich nur auf neu generierte Chunks.
- Bereits gefundene oder abgebaute Ressourcen werden nicht durch eine nachträgliche Worldgen-Änderung regeneriert.
- Es darf keine Progressionsstufe ausschließlich dadurch erreichbar werden, dass die bestehende Welt zurückgesetzt wird.
- Neue Worldgen-Regeln werden zuerst in einer separaten Creative-/Testwelt geprüft.

## Bewusst noch offen

Folgende Werte gehören **nicht** zur finalisierten Phase 3 und werden erst in der späteren technischen Ausarbeitung bestimmt:

- genaue Y-Level
- Vein Size / Clustergröße
- Anzahl der Vorkommen pro Chunk
- Spawn-Chance bzw. Dichte
- konkrete Biomeinschränkungen
- genaue Gewichtung zwischen Overworld und Twilight Forest
- konkrete KubeJS-Worldgen-Konfiguration

Diese Punkte dürfen die hier festgelegte Matrix nicht ohne erneute Progressionsentscheidung verändern.
