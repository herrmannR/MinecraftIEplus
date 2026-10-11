# kubejs/data — Datapack-Overrides

KubeJS lädt diesen Ordner als Datapack. JSON erlaubt keine Kommentare, deshalb stehen die Begründungen hier.

| Datei | Wirkung | Entscheidung |
|---|---|---|
| `beyond_earth/tags/worldgen/biome/has_structure/oil_well_biomes.json` | Leert die Biom-Liste der Beyond-Earth-Ölquellen → keine neuen Oil Wells. Meteoriten bleiben. **Nur 1.18.2, mit dem Wechsel auf 1.20.1 hinfällig.** | `15_RAUMFAHRT.md`, Treibstoff nur aus anderen Mods (2026-10-07) |
| `ad_astra/tags/worldgen/biome/has_structure/oil_well.json` | Leert die Biom-Liste der Ad-Astra-Ölquellen → keine neuen Oil Wells in den Ozeanen. Immersive Petroleum bleibt die einzige Ölquelle. 1.20.1; 🔵 noch nicht in der Instanz und nicht getestet. | `15_RAUMFAHRT.md`, Treibstoff nur aus anderen Mods (2026-10-07, übertragen 2026-10-11) |
| `mekanismaaa/tags/worldgen/biome/gen_ores.json`, `gen_ores_deepslate.json` | Leert die Biom-Listen von „Mekanism: Ad Astra Ores“ → der Mod erzeugt keine Erze mehr. Seine Erzblöcke bleiben für unsere eigene Generierung nutzbar. 1.20.1; am 2026-10-11 in die Testinstanz kopiert, 🔵 im Spiel noch nicht getestet. | `16_MODLISTE_1.20.1.md`, Erzverteilung legen wir selbst fest (2026-10-11) |
