# 10 — KUBEJS

## Zweck

Technische Implementierung der beschlossenen Modpack-Regeln.

## Installierte KubeJS-Komponenten

- KubeJS Forge
- KubeJS Blood Magic
- KubeJS Immersive Engineering
- KubeJS Mekanism
- KubeJS Tinkers
- KubeJS Botania

## Grundregel

KubeJS ist die Implementierungsebene. Designentscheidungen werden zuerst in den Fachdateien dokumentiert.

## Konzeptionelle Struktur

```text
kubejs/
├── server_scripts/
│   ├── progression/
│   ├── resources/
│   ├── processing/
│   ├── energy/
│   ├── crossmod/
│   ├── recipes/
│   └── worldgen/
├── startup_scripts/
└── client_scripts/
```

> Die konkrete API-/Event-Struktur muss für die tatsächlich installierte KubeJS-Version 1802.5.5-build.569 und die Addons verifiziert werden. Die Ordnerstruktur oben ist eine organisatorische Zielstruktur, keine Behauptung über automatisch unterstützte Ordner.

## Script-Regeln

- Ein Script hat eine klar definierte Aufgabe.
- Keine riesige monolithische Datei.
- Änderungen kommentieren.
- Registry Names dokumentieren.
- Entfernte Rezepte dokumentieren.
- Neue Rezepte mit Progressionsstufe versehen.
- Keine finalen Rezeptwerte ohne vorherige Balanceentscheidung.

## Geplante Bereiche

### progression/
Gates, Unlocks, Progressionslogik.

### resources/
Resource-/Tag-basierte Anpassungen.

### processing/
Erzverarbeitung und Erträge.

### energy/
Energie-/Verbrauchsanpassungen.

### crossmod/
Cross-Mod-Rezepte.

### recipes/
Allgemeine Rezeptänderungen.

### worldgen/
Nur nach Verifikation der tatsächlich verfügbaren KubeJS-Worldgen-API.

## Testregel

Jedes Script wird zuerst in der Testwelt aktiviert.

## Versionssicherheit

Vor Implementierung müssen die exakten APIs der installierten Versionen geprüft werden. Keine Annahme aus einer anderen Minecraft-/KubeJS-Version übernehmen.
