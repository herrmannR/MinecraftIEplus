# 13 — TESTINSTANZ-CHANGELOG

Protokoll **jeder** Änderung in `C:\Users\richa\AppData\Roaming\ATLauncher\instances\TestIEInstance`.

Format pro Eintrag:

```text
## YYYY-MM-DD — Kurztitel
- Datei(en): <Pfad relativ zur Instanz>
- Änderung: …
- Zweck / Bezug: <Doku-Datei / Entscheidung>
- Rückgängig: <wie>
```

---

## 2026-10-07 — Testinstanz übernommen

- Kopie der Instanz `ImmersiveEngineering` durch den Nutzer angelegt.
- Mods identisch zur Hauptinstanz (verifiziert).
- Noch keine Änderungen durch Claude.

## 2026-10-07 — Kandidaten-Mods installiert (durch den Nutzer)

- Datei(en): `mods/gravestone-1.18.2-1.0.2.jar`, `mods/gravestonecurioscompat-1.18.x-1.20.x-Forge-2.1.0.jar`, `mods/polymorph-forge-1.18.2-0.51.jar`, `mods/probejs-4.0.0-fix4-forge.jar`
- Änderung: 4 Mods hinzugefügt (71 → 75 JARs), Liste in `docs/mods_v4.txt`
- Zweck / Bezug: `00_MODBASIS.md`, Abschnitt „Kandidaten in der Testinstanz“
- Rückgängig: die 4 JARs aus `mods/` entfernen
- Teststatus: Start/Funktion noch nicht geprüft

## 2026-10-07 — Phase 1: Worldgen-Testkonfiguration (durch Claude)

- **Datei:** `config/Mekanism/world.toml`
  - Änderung:
    - `enableRegeneration` false → true
    - `userWorldGenVersion` 0 → 1
    - `tin.shouldGenerate` → false
    - `lead.shouldGenerate` → false
    - `uranium.small.perChunk` 4 → 5
    - `uranium.buried.perChunk` 7 → 9
  - Quelle: `config-overrides/config/Mekanism/world.toml`
  - Rückgängig: Original liegt in `config-overrides/_original/config/Mekanism/world.toml`
- **Datei (neu):** `defaultconfigs/immersiveengineering-server.toml` (gilt nur für **neu erstellte** Welten)
  - Änderung:
    - `ores.uranium.vein_size` 4 → 0 (aus)
    - `ores.bauxite.attempts_per_chunk` 16 → 5
    - `ores.lead.attempts_per_chunk` 12 → 4
  - Quelle: `config-overrides/serverconfig/immersiveengineering-server.toml`
  - Rückgängig: Datei löschen
- **Dateien (neu):** `kubejs/startup_scripts/worldgen/tf_industrial_ores.js`, `kubejs/startup_scripts/worldgen/debug_print_ore_features.js`
  - Änderung: Zinn, Blei und Aluminium in allen TF-Biomen (Testwerte). Debug-Ausgabe der Erz-Features pro Biom ins Log.
  - Rückgängig: Ordner `kubejs/startup_scripts/worldgen/` löschen
- Zweck / Bezug: `03_ERZGENERATION.md` (Phase 1)
- Teststatus: noch nicht gestartet

## 2026-10-07 — Raumfahrt- und Quest-Mods installiert (durch den Nutzer)

- Datei(en): `mods/` + Beyond Earth 6.2, Star Wars Planets 1.15, Giselle Addon 2.20, FTB Quests/Library/Teams, Item Filters; − Polymorph 0.51
- Änderung: 75 → 81 JARs, Liste in `docs/mods_v4.txt`
- Verlauf: Polymorph 0.51 brach wegen der JEI-Version das Laden ab. Beyond Earth 7.0-SNAPSHOT ist inkompatibel mit beiden Addons (`NoClassDefFoundError`). Lösung: Polymorph entfernt, Beyond Earth 6.2 statt 7.0. Beyond Planets Core und Planeteer Machines wurden wieder entfernt.
- Teststatus: 🟢 Start + Welt `WasIchBauenWill_Kopie` geladen, sauber beendet (Log 22:50–22:54)
- Rückgängig: die JARs aus `mods/` entfernen

## 2026-10-07 — Beyond-Earth-Ölquellen abgeschaltet (durch Claude)

- Datei(en): `kubejs/data/beyond_earth/tags/worldgen/biome/has_structure/oil_well_biomes.json` (neu, Kopie aus dem Projektordner)
- Änderung: Biom-Tag der Oil Wells mit `replace: true` geleert
- Zweck / Bezug: `15_RAUMFAHRT.md`, Treibstoff nur aus anderen Mods
- Rückgängig: Datei löschen
- Teststatus: 🔵 noch nicht geprüft

## 2026-10-07 — Osmium/Certus: Overworld reduziert, Mond-Erze (durch Claude)

- Datei(en): `config/Mekanism/world.toml` (Osmium upper/middle/small perChunk 65/6/8 → 20/3/4), `config/appliedenergistics2/common.json` (Certus 20 × 7 → 8 × 6), `kubejs/startup_scripts/worldgen/moon_ores.js` (neu)
- Zweck / Bezug: `03_ERZGENERATION.md`, Abschnitt „Mond als Osmium- und Certus-Quelle“
- Rückgängig: Originale in `config-overrides/_original/` zurückkopieren, Skript löschen
- Teststatus: Ölquellen-Override 🟢 (`/locate beyond_earth:oil_well` findet nichts, Meteor wird gefunden); Mond-Erze 🔵 noch nicht geprüft

## 2026-10-08 — Mekanism-Zinn/-Blei wirklich aus, Mekanism-Erze aus dem TF entfernt (durch Claude)

- Testergebnis vorher: Der Mond ist ok (Osmium, Certus und Desh gefunden, Mengen ausreichend). Im TF: viel Zinn und Blei, wenig Bauxit, **aber auch Uran und Osmium**.
- Ursache 1: In `config/Mekanism/world.toml` stand bei Zinn und Blei noch `shouldGenerate = true`. Die frühere Doku hatte „aus“ behauptet. → Jetzt `false`.
- Ursache 2: Mekanism setzt seine Erze in alle Biome, auch in die des TF (`printFeatures`). → Neues Skript `kubejs/startup_scripts/worldgen/tf_remove_foreign_ores.js` entfernt dort Osmium, Uran, Fluorit und Salz.
- Rückgängig: `world.toml` aus `config-overrides/_original/`, Skript löschen
- Teststatus: 🔵 Neustart + neue Welt nötig

## 2026-10-08 — Blei: Mekanism-Erz statt IE-Erz (durch Claude, Wunsch des Nutzers)

- Datei(en): `config/Mekanism/world.toml` (Blei wieder an, normal 8 → 4 Adern), `defaultconfigs/immersiveengineering-server.toml` (IE-Blei `vein_size = 0`), `kubejs/startup_scripts/worldgen/tf_industrial_ores.js` (TF-Blei = `mekanism:lead_ore`), `tf_remove_foreign_ores.js` (+ `mekanism:ore_lead_normal` im TF entfernt)
- Hinweis: Neue Welten bekommen die IE-Config über `defaultconfigs/`; bestehende Testwelten behalten ihre eigene `serverconfig`.
- Rückgängig: Originale aus `config-overrides/_original/`, Skripte per Git
- Teststatus: 🔵 Neustart + neue Welt nötig

## 2026-10-08 — Absturz behoben, Bauxit im TF erhöht (durch Claude)

- Absturz beim Laden: `TypeError: redeclaration of const TF_BIOMES`. Die Konstante stand in `tf_industrial_ores.js` und im neuen `tf_remove_foreign_ores.js`, und KubeJS lädt alle Startup-Skripte in einen gemeinsamen Scope. → Im Entfernungs-Skript umbenannt in `TF_REMOVE_BIOMES`.
- Bauxit im TF: 14 → 18 Adern × 8 (`tf_industrial_ores.js`)
- Teststatus: 🔵 Neustart nötig

## 2026-10-08 — TF: Certus entfernt, Zinn reduziert (durch Claude)

- Test: Absturz behoben, Overworld passt. Im TF lag noch Certus, Zinn war etwas zu viel.
- `tf_remove_mekanism_ores.js` → umbenannt in **`tf_remove_foreign_ores.js`**. Es entfernt jetzt zusätzlich `ae2:quartz_ore` aus den TF-Biomen; AE2 generiert Certus in allen Biomen außer Nether/End/Kategorie NONE. Alte Datei in der Testinstanz gelöscht.
- `tf_industrial_ores.js`: Zinn 14 → 11 Adern × 9
- Teststatus: 🔵 Neustart + neue Welt nötig

## 2026-10-08 — Worldgen-Test abgeschlossen

- 🟢 Mond: Osmium, Certus und Desh vorhanden, Mengen passen.
- 🟢 Twilight Forest: Zinn (reduziert), Mekanism-Blei, Bauxit. Kein Certus, Uran oder Osmium.
- 🟢 Overworld: kein Zinn, Mekanism-Blei, Osmium und Certus reduziert.
- 🟢 Keine Beyond-Earth-Ölquellen, Meteoriten vorhanden.
- Vor der Auslieferung entfernen: `kubejs/startup_scripts/worldgen/debug_print_ore_features.js` (nur Testinstanz).
