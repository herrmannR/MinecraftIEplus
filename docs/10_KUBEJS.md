# 10 — KUBEJS

## Zweck

Technische Umsetzung der beschlossenen Modpack-Regeln (zusammen mit Config-Änderungen).

## Installierte Komponenten

- KubeJS Forge `1802.5.5-build.569`, Rhino `1802.2.1-build.255`
- KubeJS Blood Magic, Botania, Immersive Engineering, Mekanism, Tinkers

## Ist-Zustand (2026-10-07)

🟢 In der Instanz liegen nur die Beispielskripte von KubeJS (`server_scripts/script.js`, `startup_scripts/script.js`, `client_scripts/script.js`). Es gibt keine eigenen Rezept-/Tag-Änderungen, mit denen etwas kollidieren könnte.

## Grundregel

KubeJS ist die Implementierungsebene. Designentscheidungen stehen zuerst in den Fachdateien.

## Workflow

1. Skripte und Config-Änderungen entstehen im Projektordner:
   - `kubejs/` (Spiegel der KubeJS-Struktur)
   - `config-overrides/` (nur die geänderten Config-Dateien, inkl. `serverconfig/` für die Welt)
2. Sie werden in die **Testinstanz** kopiert und dort getestet (Eintrag in `13_TESTINSTANZ_CHANGELOG.md`).
3. Nach Freigabe übernehmen die Spieler sie in ihre Instanzen. Server-Teil beim Host; Startup-/Client-Teil bei allen.

## Syntax-Hinweis

KubeJS 1802 (1.18.2) nutzt die **alte Event-Syntax**: `onEvent('recipes', event => { … })`, `onEvent('item.tags', …)`.
Die Syntax ab 1.19 (`ServerEvents.recipes(…)`) funktioniert hier **nicht**.
Beispiele aus anderen Versionen werden nicht ungeprüft übernommen.

## Zielstruktur

KubeJS lädt alle `.js` in `server_scripts/` rekursiv; Unterordner dienen nur der Ordnung.

```text
kubejs/
├── server_scripts/
│   ├── resources/      Tags, Unifizierung
│   ├── processing/     Erzverarbeitung, Erträge
│   ├── progression/    Gates (Rezeptänderungen an Meilensteinen)
│   ├── energy/
│   ├── crossmod/
│   ├── recipes/        allgemeine Rezeptänderungen
│   └── worldgen/       nur nach API-Test
├── startup_scripts/
└── client_scripts/     JEI-Ausblendungen etc.
```

## Script-Regeln

- Ein Script hat eine klar definierte Aufgabe; keine monolithische Datei.
- Jede Änderung kommentieren und auf die Doku-Entscheidung verweisen.
- Registry-Namen, entfernte Rezepte und neue Rezepte (mit Progressionsstufe) dokumentieren.
- Keine finalen Rezeptwerte ohne vorherige Balance-Entscheidung.

## Offen

🟢 KubeJS-1802-Worldgen-API verifiziert (siehe unten). 🔵 Wirkung im Spiel testen.
🔵 Neuen Tag-Dump erzeugen (`kubejs/exported` ist veraltet).

## ProbeJS (nur Testinstanz)

`probejs-4.0.0-fix4-forge.jar` ist nur in der Testinstanz installiert und wird nicht ausgeliefert.

- Befehl im Spiel: **`/probejs dump`** (weitere: `clear_cache`, `toggle_*`)
- Ausgabe: `kubejs/probe/` (`generated/`, `docs/`, `user/`, `cache/`) + `.vscode/` im Instanzordner
- Nutzen für uns:
  - vollständige, aktuelle Registry-Listen (Items, Blöcke, Fluids, Biome)
  - Event- und Rezept-Typen der installierten KubeJS-Addons (IE, Mekanism, Botania, Blood Magic, Tinkers)

  Dadurch werden IDs und Rezept-Schemata nicht mehr aus JARs abgeleitet, sondern direkt aus dem laufenden Spiel gelesen.
- Ablauf: Testwelt öffnen → `/probejs dump` → Claude liest `kubejs/probe/` aus.

## Verifizierte API-Details (KubeJS 1802.5.5)

- Skripte werden rekursiv geladen (`Files.walk`, Tiefe 10). Unterordner sind also möglich.
- Worldgen-Events: `worldgen.add` (`addOre`, `addLake`, `addSpawn`, `addFeatureJson`) und `worldgen.remove` (`removeOres`, `removeFeatureById`, `printFeatures`, …). Beides sind **Startup-Events**: Änderungen erfordern einen Neustart des Spiels.
- Biome-Filter:
  - `'modid:biome'` (ID)
  - `'/regex/'` (Regex auf die ID)
  - `'^category'` (Biome-Kategorie)
  - Objekte mit `or`, `not`, `id`, `type`, `category`
- `addOre`-Felder: `id`, `biomes`, `addTarget(ruleTest, block)`, `count(…)`, `chance(…)`, `size`, `noSurface`, `squared()`, `uniformHeight(min, max)`, `triangleHeight(min, max)`, `worldgenLayer`.
- **`retrogen` wird nicht ausgewertet.** KubeJS-Erze entstehen nur in neuen Chunks.
