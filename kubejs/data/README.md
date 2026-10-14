# kubejs/data — Datapack-Overrides

KubeJS lädt diesen Ordner als Datapack. JSON erlaubt keine Kommentare, deshalb stehen die Begründungen hier.

Stand 2026-10-12, Minecraft 1.20.1. **Nichts davon ist im Spiel getestet.** In der Testinstanz liegen bisher nur die zwei `mekanismaaa`-Dateien.

| Datei | Wirkung | Entscheidung |
|---|---|---|
| `ad_astra/tags/worldgen/biome/has_structure/oil_well.json` | Leert die Biom-Liste der Ad-Astra-Ölquellen → keine neuen Oil Wells in den Ozeanen. Immersive Petroleum bleibt die einzige Ölquelle. | `docs/15_RAUMFAHRT.md` (2026-10-07, übertragen 2026-10-11) |
| `mekanismaaa/tags/worldgen/biome/gen_ores.json`, `gen_ores_deepslate.json` | Leert die Biom-Listen von „Mekanism: Ad Astra Ores“ → der Mod erzeugt selbst keine Erze mehr. Seine Erzblöcke nutzen wir in eigenen Features. | Erzverteilung legen wir selbst fest (2026-10-11) |
| `ieplus/worldgen/configured_feature/*.json`, `placed_feature/*.json` | Zwölf eigene Erz-Features: Everbright (Zinn, Blei, Bauxit), Everdawn (Osmium), Mond (Osmium), Mars (Fluorit), Merkur und Venus (Uran, Blei), Glacio (Osmium, Uran). Werte: `docs/03_ERZGENERATION.md`. | Erzverteilung (2026-10-12) |
| `ieplus/forge/biome_modifier/*.json` | Hängt die Features an die Biome: `#blue_skies:everbright`, `#blue_skies:everdawn` und die Ad-Astra-Biome der Planeten. | wie oben |
| `swgc/forge/biome_modifier/kyber_crystals.json` | Ersetzt den Biome Modifier von Galaxy in a Cube durch `forge:none` → keine Kyber-Kristalle mehr in der Overworld. | Kyber nur auf den Star-Wars-Planeten (2026-10-12) |
| `ad_astra/tags/fluids/tier_1_rocket_fuel.json` … `tier_3_rocket_fuel.json` | Treibstoff je Raketenstufe: T1 Biodiesel, T2 entschwefelter Diesel (`immersivepetroleum:diesel`), T3 Kerosin. T4 bleibt vorerst beim Standard, bis es den eigenen Raketentreibstoff gibt. | `docs/15_RAUMFAHRT.md` (2026-10-12) |
| `immersiveengineering/recipes/mineral/galena.json`, `uraninite.json` | Excavator-Adern mit Blei und Uran seltener: Gewicht 5 statt 15 bzw. 10. Sonst unveränderte Kopien aus dem IE-JAR 10.2.0-183. | Blei in der Overworld sehr selten (2026-10-12) |
| `swplanets/loot_tables/entities/jawa.json` | Jawas lassen keine Steel Cables mehr fallen (ersetzt durch 3 Stahlstäbe); Etrionic Capacitor und Wrench bleiben. | Ad-Astra-Kabel entfallen (2026-10-12); Befund aus Test 4 (2026-10-13) |

## Was zusätzlich nötig ist, damit die Erz-Features wirken

- `config/blue_skies-common.toml`: `allowed_mods_for_feature_gen = ["ieplus"]` (liegt in `config-overrides/config/`). Blue Skies entfernt sonst alle platzierten Features fremder Namensräume aus seinen Biomen (🟢 im Code von `PurifyBiome` nachgelesen).
- `config/Mekanism/world.toml` und die IE-Serverconfig aus `config-overrides/` für die Overworld-Werte.
- Die Dateien müssen **vor dem ersten Erzeugen** der jeweiligen Chunks da sein; Datapack-Features haben kein Retrogen.
