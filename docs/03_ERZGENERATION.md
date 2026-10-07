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
| Aluminium | niedrig | – | **hoch** | | IE/Tinkers | 🟢 |
| Nickel | niedrig | – | **hoch** | | IE/Tinkers | 🟢 |
| Silver | niedrig | – | **hoch** | | IE/Tinkers/Magie | 🟢 |
| Lead | niedrig | – | **hoch** | | IE/Mekanism — **nur IE-Erz**, Mekanism-Bleierz aus | 🟢 |
| Osmium | niedrig | – | **hoch** | | Mekanism, ab erster Maschine benötigt | 🟢 (Option B) |
| Tin | **keine** | – | **exklusiv** (mittel/hoch) | | Mekanism/Bronze — Gate | 🟢 (Option B) |
| Uranium | niedrig (ggf. ↑ 🔵) | – | niedrig | | Energie — **nur Mekanism-Erz**, IE-Uranerz aus | 🟢 |
| Fluorite | niedrig | – | niedrig | | Mekanism | 🟢 |
| Cobalt | – | **hoch** | – | | Tinkers | 🟢 |
| Certus Quartz | mittel | – | – | Meteoriten | AE2 | 🟢 |
| Fluix | nicht natürlich | | | | AE2-Verarbeitung | 🟢 |
| Demonite | – | – | – | Demon Dungeon | Blood Magic | 🟢 |
| Dragonstone, Elementium-Erz, Mythic Gold | – | – | – | Alfheim | MythicBotany | 🟢 |
| Ironwood, Steeleaf, Knightmetal, Fiery | – | – | TF-exklusiv (Strukturen/Bosse) | | TF | 🟢 |

„niedrig/mittel/hoch“ sind relative Zielgrößen. Konkrete Werte (Y-Level, Vein Size, Versuche/Chunk) werden in Phase 1 aus den Ist-Werten oben abgeleitet und in der Testinstanz geprüft.

## Osmium & Zinn — Optionen (🟢 Option B beschlossen, 2026-10-07)

Osmium wird ab der **ersten** Mekanism-Maschine gebraucht (Steel Casing, Metallurgic Infuser, Basic Control Circuits). Es muss deshalb ohne Endgame-Dimension erreichbar sein. Alfheim, Demon Dungeon und Wesley's Dungeons eignen sich nicht (zu spät bzw. kein abbaubares Terrain).

| Option | Osmium | Zinn | Wirkung |
|---|---|---|---|
| A | Overworld reduziert, TF hoch | Overworld normal | Mekanism früh möglich, Expeditionen lohnen sich |
| B | Overworld reduziert, TF hoch | **nur TF** | Bronze und Mekanism-Ausbau brauchen TF; stärkere Bindung an Exploration |
| C | **nur TF** | Overworld | Mekanism-Einstieg erst nach TF-Expedition; harter Gate |
| D | eigene neue Dimension (Zusatzmod) | | widerspricht „keine neuen Mods nebenbei“, erhöht Wartungsaufwand |

## Retrogen (🟢 beschlossen: zwingend — in der Hauptwelt wurde seit Mekanism schon viel erkundet)

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

🔵 Uran-Menge nach Wegfall der IE-Quelle erhöhen?
🔵 Zinn exklusiv im TF: bereits generierte Overworld-Zinnadern bleiben bestehen (nur neue Chunks/Retrogen ohne Zinn)
🔵 Retrogen für TF-Erze möglich? (IE/Mek-Retrogen kennt nur ihre eigenen Features; KubeJS-Features haben kein Retrogen)
🔵 Spawnen IE-/Mek-/AE2-Erze bereits im TF? (Test)
🔵 Technische Umsetzung von TF-Industrieerzen (KubeJS 1802 Worldgen mit Biome-Filter oder Datapack) — API-Test
🔵 Konkrete Zahlenwerte
