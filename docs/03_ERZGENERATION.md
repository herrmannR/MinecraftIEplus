# 03 — ERZGENERATION

## Status

🟡 **Ist-Zustand verifiziert (2026-10-07), Soll-Matrix größtenteils beschlossen, Osmium/Zinn und Doppelquellen offen.**

## Zweck

Eine ausgewogene Erzverteilung, die die parallelen Progressionspfade unterstützt, die Identität der Mods erhält und die bestehende Welt nicht entwertet.

## Grundprinzipien

- 🟢 Die Overworld bleibt die wichtigste Quelle für Grundressourcen.
- 🟢 Doppelte Erzregistrierungen werden nicht automatisch zu einem Item vereinheitlicht; Materialfamilien werden über Tags verbunden.
- 🟢 Seltene Industriemetalle bleiben in der Overworld vorhanden, werden aber im Twilight Forest deutlich attraktiver.
- 🟢 Dimensionen eröffnen zusätzliche Ressourcenwege, blockieren die normale Maschinenprogression aber nicht unnötig hart.
- 🟢 Magische Ressourcen werden nicht durch gewöhnliche Erzverteilung trivialisiert.
- 🟢 Die bestehende Welt wird nicht entwertet oder zerstört.

---

# Teil 1 — Ist-Zustand (verifiziert)

## Wo Worldgen konfiguriert wird

| Mod | Ort | Hinweis |
|---|---|---|
| Immersive Engineering | `saves/<Welt>/serverconfig/immersiveengineering-server.toml` → `[ores.*]` | **pro Welt** → muss in der Welt des Hosts geändert werden |
| Mekanism | `config/Mekanism/world.toml` | Instanz des Hosts |
| AE2 | `config/appliedenergistics2/common.json` → `worldGen` | Biome-Blacklist möglich |
| Tinkers | `config/tconstruct-common.toml` → `[worldgen]` | |
| Twilight Forest | im JAR (`legacy_*_ore` Features) | nur per Datapack/KubeJS änderbar |

## Aktuelle Werte (Default, unverändert)

### Immersive Engineering

| Erz | Verteilung | Y | Vein | Versuche/Chunk | Air-Exposure-Verwurf |
|---|---|---|---:|---:|---:|
| Bauxite | Trapez | 32…112 | 6 | 16 | 0 |
| Lead | Trapez | −32…80 | 8 | 12 | 0 |
| Silver | Trapez | −48…32 | 9 | 10 | 0,25 |
| Nickel | Uniform | −64…24 | 5 | 7 | 0 |
| Nickel (deep) | Trapez | −120…−8 | 6 | 11 | 0 |
| Uranium | Trapez | −64…−16 | 4 | 9 | 0,5 |

### Mekanism

| Erz | Teilverteilungen (Versuche/Chunk × max. Vein) |
|---|---|
| Tin | small 14×4 (Y −20…94), large 12×9 (Y −32…72) |
| Osmium | upper 65×7 (Y 72…Top−24), middle 6×9 (Y −32…56), small 8×4 (Boden…64) |
| Uranium | small 4×4 (Boden…8), buried 7×9 |
| Fluorite | normal 5×5 (Boden…23), buried 3×13 |
| Lead | 8 Versuche/Chunk |
| Salt | 2/Chunk (Sand-/Tonbereiche) |

### Andere

- **AE2 Certus:** 20 Cluster × 7 Erze, keine Biome-Blacklist; Meteoriten aktiv (enthalten die Inscriber-Pressen).
- **Tinkers Cobalt:** Nether, 8 Adern; Slime-Islands aktiv.
- **Twilight Forest:** eigene Vanilla-Erzfeatures in allen TF-Biomen: Kohle (Y ≤127, 20), Eisen (Y ≤63, 20), Kupfer (Y 0–96 Trapez, 6), Gold (Y ≤31, 2), Lapis (Y ≤30), Redstone (Y ≤15, 8), Diamant (Y ≤15).

## Dimensionen in der Welt

| Dimension | Mod | Zugang | Eignung als Ressourcenregion |
|---|---|---|---|
| Overworld | Vanilla | sofort | Basis |
| Nether | Vanilla | früh | Cobalt (Tinkers) |
| Twilight Forest | Twilight Forest | früh/mittel (Portal mit Diamant) | 🟢 normale Terrain-Dimension, gut geeignet |
| Alfheim | MythicBotany | spätes Botania (Mead of Kvasir, `lockAlfheim = true`) | Dragonstone, Elementium, Mythic Gold; zu spät für Grundmetalle |
| Demon Dungeon | Blood Magic | fortgeschrittenes Blood Magic | Raum-/Strukturdimension mit Demonite, kein normales Terrain |
| Wesley's Infinite Dungeons | Wesley's Roguelike Dungeons | über Vessel of Vision, mit Timer | Dungeon-Runs, nicht zum Abbauen geeignet |
| Growtown | Bonsai Trees 3 | — | interne Hilfsdimension, nicht spielbar |
| End | Vanilla | spät | — |

## Bekannte Probleme des Ist-Zustands

1. **Doppelte Quellen:** Lead und Uranium werden aktuell von IE **und** Mekanism generiert.
2. 🔵 **Unbekannt:** Ob IE-, Mekanism- und AE2-Erze schon in Twilight-Forest-Biomen spawnen. Die Mods hängen ihre Erze über Biome-Kategorien an; die TF-Biome könnten darunter fallen. → In der Testinstanz prüfen.
3. **Mekanism neu installiert:** Alle bereits erkundeten Chunks der Hauptwelt enthalten keine Mekanism-Erze.

---

# Teil 2 — Soll-Matrix

| Ressource | Overworld | Nether | Twilight Forest | Andere | Rolle | Status |
|---|---|---|---|---|---|---|
| Coal | hoch | – | mittel (TF-default) | | Energie | 🟢 |
| Iron | hoch | – | mittel (TF-default) | | Basis | 🟢 |
| Copper | mittel/hoch | – | mittel (TF-default) | | IE/AE2/Mekanism | 🟢 |
| Gold | mittel | mittel | mittel | Alfheim (Mythic Gold) | Brücke | 🟢 |
| Redstone | mittel | – | mittel | | Technik | 🟢 |
| Lapis | mittel | – | mittel | | Magie | 🟢 |
| Diamond | niedrig | – | niedrig/mittel | | hoher Vanilla-Tier | 🟢 |
| Aluminium | niedrig (IE 5 statt 16 Versuche/Chunk) | – | **hoch** (KubeJS) | | IE/Tinkers | 🟢 |
| Nickel | Standard (🔵 bestätigen) | – | – | | IE/Tinkers | 🟡 |
| Silver | Standard (🔵 bestätigen) | – | – | | IE/Tinkers/Magie | 🟡 |
| Lead | niedrig (IE 4 statt 12 Versuche/Chunk) | – | **hoch** (KubeJS) | | IE/Mekanism — **nur IE-Erz**, Mekanism-Bleierz aus | 🟢 |
| Osmium | **reduziert** (Testwert: upper 20, middle 3, small 4 statt 65/6/8) | – | – | **Mond: hoch** (Beyond Earth, KubeJS) | Mekanism, ab erster Maschine benötigt | 🟢 (2026-10-07) |
| Tin | **keine** (Mekanism aus) | – | **exklusiv, hoch** (KubeJS) | | Mekanism/Bronze — Gate | 🟢 (Option B) |
| Uranium | niedrig, Mekanism ×1,3 (small 5, buried 9) | – | – | | Energie — **nur Mekanism-Erz**, IE-Uranerz aus | 🟢 |
| Fluorite | niedrig (Standard) | – | – | | Mekanism | 🟢 |
| Cobalt | – | Standard (8 Adern) | – | | Tinkers | 🟢 |
| Certus Quartz | **niedrig** (Testwert: 8 Cluster × 6 statt 20 × 7) | – | – | Meteoriten; **Mond: hoch** (KubeJS) | AE2 | 🟢 (2026-10-07) |
| Fluix | nicht natürlich | | | | AE2-Verarbeitung | 🟢 |
| Demonite | – | – | – | Demon Dungeon | Blood Magic | 🟢 |
| Dragonstone, Elementium-Erz, Mythic Gold | – | – | – | Alfheim | MythicBotany | 🟢 |
| Ironwood, Steeleaf, Knightmetal, Fiery | – | – | TF-exklusiv (Strukturen/Bosse) | | TF | 🟢 |

„niedrig/mittel/hoch“ sind relative Zielgrößen. Konkrete Werte (Y-Level, Vein Size, Versuche/Chunk) werden in Phase 1 aus den Ist-Werten oben abgeleitet und in der Testinstanz geprüft.

## Osmium & Zinn — Optionen (🟢 Option B beschlossen, 2026-10-07; präzisiert: im TF nur Zinn, Blei, Aluminium)

Osmium wird ab der **ersten** Mekanism-Maschine gebraucht (Steel Casing, Metallurgic Infuser, Basic Control Circuits). Es muss deshalb ohne Endgame-Dimension erreichbar sein. Alfheim, Demon Dungeon und Wesley's Dungeons eignen sich nicht (zu spät bzw. kein abbaubares Terrain).

| Option | Osmium | Zinn | Wirkung |
|---|---|---|---|
| A | Overworld reduziert, TF hoch | Overworld normal | Mekanism früh möglich, Expeditionen lohnen sich |
| B | Overworld reduziert, TF hoch | **nur TF** | Bronze und Mekanism-Ausbau brauchen TF; stärkere Bindung an Exploration |
| C | **nur TF** | Overworld | Mekanism-Einstieg erst nach TF-Expedition; harter Gate |
| D | eigene neue Dimension (Zusatzmod) | | widerspricht „keine neuen Mods nebenbei“, erhöht Wartungsaufwand |

## Mond als Osmium- und Certus-Quelle (🟢 beschlossen, 2026-10-07)

Der erste Raumflug (Mond) setzt Petroleum **und** eine erste Mekanism-Maschine voraus (siehe `15_RAUMFAHRT.md`). Deshalb:

- Overworld-Osmium wird reduziert, aber nicht abgeschaltet. Es muss für die ersten Mekanism-Maschinen inklusive der Raketen-Voraussetzung reichen.
- Overworld-Certus wird reduziert, nicht abgeschaltet, damit der frühe AE2-Storage-Layer erreichbar bleibt. Meteoriten bleiben unverändert.
- Auf dem Mond werden Osmium und Certus häufig (KubeJS `worldgen.add` mit Mond-Biomfilter).
- Planeten sind neue Dimensionen: kein Retrogen-Problem.
- 🟢 Mond verifiziert: ein Biom `beyond_earth:moon_desert`, Y 0–384, Gestein `beyond_earth:moon_stone` (Tag `#beyond_earth:moon_ore_replaceables`).

**Testwerte (🟡, 2026-10-07, in der Testinstanz):**

| Quelle | Original | Testwert | Datei |
|---|---|---|---|
| Osmium Overworld upper (Y 72…Top−24) | 65 × 7 | **20** × 7 | `config-overrides/config/Mekanism/world.toml` |
| Osmium Overworld middle (Y −32…56) | 6 × 9 | **3** × 9 | dito |
| Osmium Overworld small (Y 0…64) | 8 × 4 | **4** × 4 | dito |
| Certus Overworld | 20 Cluster × 7 | **8** × **6** | `config-overrides/config/appliedenergistics2/common.json` |
| Osmium Mond | – | 16 × 9, Y 0–128 | `kubejs/startup_scripts/worldgen/moon_ores.js` |
| Certus Mond | – | 12 × 7, Y 0–96 | dito |

Auf dem Mond werden die normalen Erzblöcke `mekanism:osmium_ore` und `ae2:quartz_ore` eingesetzt (Optik wie Overworld-Stein). 🔵 Eigene Mond-Erzblöcke wären eine optische Verbesserung.

## Retrogen (🟢 beschlossen: zwingend)

Die Hauptwelt wurde **noch nie mit Mekanism geöffnet**. Alle bisher erkundeten Chunks haben daher keine Mekanism-Erze. Mekanism-Retrogen (Osmium, Uran, Fluorit, Salz) ist deshalb nötig. Es **darf erst laufen, wenn die finalen Configs beim Host liegen**: Wird die Welt vorher mit Mekanism geöffnet, generiert Mekanism mit Default-Werten, inklusive Zinn und Blei in der Overworld.

⚠️ **KubeJS-Erze haben kein Retrogen** (verifiziert: `AddOreProperties.retrogen` existiert, wird in 1802.5.5 aber nicht ausgewertet). Die TF-Erze (Zinn, Blei, Aluminium) entstehen nur in neu generierten TF-Chunks. Das ist vertretbar, weil der TF gerade erst betreten wurde.

- IE: `retrogen_enable` pro Erz + neuer `retrogen_key` → generiert nur die markierten Erze in bereits geladenen Chunks nach.
- Mekanism: `enableRegeneration = true` + `userWorldGenVersion` erhöhen.
- 🔵 Vor der Hauptwelt in der Testinstanz prüfen: Ladezeit, ob bereits abgebaute Bereiche betroffen sind, ob Erze nur in neuen Feldern landen.
- Retrogen läuft beim Host, und nur einmal pro Schlüssel/Version.

## Migrationsregeln für die bestehende Welt

- 🟢 Keine Änderung setzt voraus, dass die Welt neu erzeugt wird.
- 🟢 Senken von Werten wirkt nur auf neue Chunks; bereits generierte Erze bleiben.
- 🟢 Ergänzen von Erzen in alten Chunks nur per Retrogen.
- 🟢 Keine Progressionsstufe darf nur durch einen Welt-Reset erreichbar sein.
- 🟢 Alles zuerst in der Testinstanz.

## Noch offen

🔵 Silber, Nickel: Overworld-Menge bei Standard lassen? (Sie bekommen keine TF-Quelle mehr.) Osmium: entschieden (Overworld reduziert, Mond hoch).
🔵 Konkrete Werte für reduziertes Overworld-Osmium und -Certus
🔵 Spawnen IE-/Mek-/AE2-Erze bereits im TF? (Test läuft: `debug_print_ore_features.js`)
🔵 TF-Erzwerte (count/size/Höhe) in der Testinstanz prüfen
🟢 Umsetzung TF-Erze: KubeJS `worldgen.add` mit Biome-Regex `/^twilightforest:.*/` (API verifiziert)
🟢 Uran: Mekanism ×1,3. Kobalt bleibt Standard.
🔵 Konkrete Zahlenwerte
