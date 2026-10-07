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
