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

🔵 KubeJS-1802-Worldgen-API (Erze gezielt in TF-Biomen) in der Testinstanz verifizieren.
🔵 Neuen Tag-Dump erzeugen (`kubejs/exported` ist veraltet).
