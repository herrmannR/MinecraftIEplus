# 10 — KUBEJS

> Stand 2026-10-12, Minecraft 1.20.1, KubeJS 2001. Neu geschrieben beim Neustart der Analyse (Block D); die Fassung für KubeJS 1802 liegt im Git-Verlauf (Commit `9bf29d8`).

## Zweck

Technische Umsetzung der beschlossenen Modpack-Regeln, zusammen mit den Config-Änderungen.

## Installierte Komponenten (Testinstanz)

- KubeJS Forge `2001.6.5-build.26`, Rhino `2001.2.3-build.10`
- KubeJS Botania, Immersive Engineering, Mekanism, Blood Magic, KubeJS Additions
- ProbeJS 6.0.1 (nur Testinstanz, nicht ausliefern)
- Kein KubeJS-Addon für Tinkers.

## Grundregel

KubeJS ist die Implementierungsebene. Designentscheidungen stehen zuerst in den Fachdateien.

## Stand der Umsetzung (2026-10-12)

⚠️ **Alles hier liegt nur im Projektordner und ist im Spiel ungetestet.** In der Testinstanz liegen bisher nur die Beispielskripte von KubeJS und die zwei `mekanismaaa`-Tag-Dateien.

Die fünf Skripte für 1.18.2 (`space_oxygen.js`, `moon_ores.js`, `tf_industrial_ores.js`, `tf_remove_foreign_ores.js`, `debug_print_ore_features.js`) und `kubejs/data/beyond_earth/` sind gelöscht (im Git-Verlauf erhalten).

### Skripte

| Datei | Aufgabe | Entscheidung |
|---|---|---|
| `server_scripts/fixes/tag_fixes.js` | Entfernt `swplanets:mustafar_sand` aus `forge:sand`, damit das Tag wieder lädt. | `00_MODBASIS.md`, Bekannte Fehler |
| `server_scripts/raumfahrt/ad_astra_regeln.js` | Entfernt die Rezepte von Coal Generator, Solar Panel, Compressor, Fuel Refinery, Water Pump, Kabeln, Pipes und Durchführungen; entfernt das Ad-Astra-Stahlrezept, das Öl-zu-Treibstoff-Rezept, das Wasser-Rezept des Oxygen Loader und alle Compressor-Rezepte. Die Platten für Desh, Ostrum und Calorite kommen aus den IE-Rezepten, die Ad Astra selbst mitbringt. | `15_RAUMFAHRT.md` |
| `server_scripts/worldgen/excavator_adern.js` | Entfernt die Excavator-Ader Cassiterite (Zinn). | `03_ERZGENERATION.md` |
| `server_scripts/crossmod/tinkers_legierungen.js` | Entfernt das Legierungsrezept für Refined Obsidian aus der Schmelzerei. In die Testinstanz kopiert (2026-10-12). | `07_CROSSMOD_INTEGRATION.md` |
| `server_scripts/crossmod/blood_smeltery.js` | Entfernt die Life-Essence-Legierung und das Gießen von Blank Slate und Blank Rune. In die Testinstanz kopiert (2026-10-12). | `07_CROSSMOD_INTEGRATION.md` |

### Datapack (`kubejs/data/`)

Erz-Features für Blue Skies und die Planeten, Kyber-Override, Treibstoff-Tags, seltenere Excavator-Adern, abgeschaltete Ölquellen und Mekanism-Planeten-Erze. Tabelle mit Begründungen: `kubejs/data/README.md`.

### Configs (`config-overrides/`)

| Datei | Ziel beim Host | Inhalt |
|---|---|---|
| `config/Mekanism/world.toml` | `config/Mekanism/` | Overworld-Erze, Retrogen |
| `config/blue_skies-common.toml` | `config/` | Freigabe des Namensraums `ieplus` für Erz-Features |
| `serverconfig/immersiveengineering-server.toml` | `saves/<Welt>/serverconfig/` | IE-Erze |

Unter `_original/` liegen die unveränderten Standarddateien zum Vergleich.

### Noch nicht umgesetzt

- 🔵 Blood-Smeltery: `forge:coins` und die fehlenden Hellforged-Flüssigkeiten (Ursache geklärt: Mod-Bug bzw. fehlendes Thermal, siehe `00_MODBASIS.md` „Bekannte Fehler“; Entscheidung über Skript-Workaround offen).
- 🔵 Tinkers in den höheren Stufen (Wege A, C, D, E, F und fehlende Schmelzrezepte, `07_CROSSMOD_INTEGRATION.md`): beschlossen, Rezepte und Werte offen.
- 🔵 Eigener Raketentreibstoff für T4 (Fluid, Rezept, Tag `tier_4_rocket_fuel`); Treibstoff des Rovers.
- 🔵 Energizer und Cryo Freezer (Entscheidung bzw. Test offen).
- 🔵 Rezept vom Kyber-Erz zum Kyber-Kristall; Lichtschwerter von Star Wars Planets entfernen (`17_STAR_WARS_1.20.1.md`).
- 🔵 Blood-Magic-Ritual nur auf dem Merkur (Machbarkeit ungetestet).
- 🔵 Entfernte Blöcke in JEI ausblenden (`client_scripts`).
- 🔵 Alles aus den Phasen 3 bis 6 (Erträge, Energie, AE2-Gates, Cross-Mod-Rezepte).

## Workflow

1. Skripte und Config-Änderungen entstehen im Projektordner: `kubejs/` (Spiegel der KubeJS-Struktur) und `config-overrides/`.
2. Sie werden in die **Testinstanz** `Minecraft1201withForge` kopiert und dort getestet. Schreibzugriffe auf die Instanz vorher mit dem User abstimmen; jede Kopie im Changelog vermerken.
3. Nach Freigabe übernehmen die Spieler sie in ihre Instanzen: `server_scripts` und `kubejs/data` wirken beim Host, `startup_scripts` und `client_scripts` müssen bei allen liegen.

## Syntax (KubeJS 2001)

- Ereignisse heißen `ServerEvents.recipes(event => { … })`, `ServerEvents.tags('item', event => { … })`, `StartupEvents.registry(…)`. Die alte Form `onEvent('recipes', …)` aus 1802 gibt es nicht mehr.
- Die Worldgen-Ereignisse aus 1802 (`worldgen.add`, `worldgen.remove`) werden hier nicht benutzt. Erze entstehen als normale Datapack-Dateien (`configured_feature`, `placed_feature`, Forge-Biome-Modifier); das ist unabhängig von der KubeJS-Version.
- Rezepte fremder Maschinen werden als JSON mit `event.custom({ … })` geschrieben, das Schema jeweils aus dem JAR des Mods kopiert.
- 🔵 Beispiele aus anderen Versionen werden nicht ungeprüft übernommen; nach dem ersten Start `logs/kubejs/server.log` lesen.

## Zielstruktur

KubeJS lädt alle `.js` in `server_scripts/` rekursiv; Unterordner dienen nur der Ordnung.

```text
kubejs/
├── data/               Datapack: Tags, Worldgen, überschriebene Rezepte
├── server_scripts/
│   ├── fixes/          Reparaturen an fremden Mods
│   ├── raumfahrt/      Regeln für Ad Astra und Star Wars
│   ├── worldgen/       Excavator-Adern
│   ├── processing/     Erzverarbeitung, Erträge (Phase 3)
│   ├── progression/    Gates an Meilensteinen (Phase 2, 6)
│   └── crossmod/       Cross-Mod-Rezepte (Phase 6)
├── startup_scripts/    eigene Fluids und Items (z. B. T4-Treibstoff)
└── client_scripts/     JEI-Ausblendungen
```

## Script-Regeln

- Ein Skript hat eine klar definierte Aufgabe; keine monolithische Datei.
- Globale Namen projektweit eindeutig halten oder in Funktionen kapseln (in 1802 ließ ein doppeltes `const` das Laden scheitern; 🔵 für 2001 nicht geprüft).
- Jede Änderung kommentieren und auf die Doku-Entscheidung verweisen.
- Keine finalen Rezeptwerte ohne vorherige Balance-Entscheidung.

## ProbeJS (nur Testinstanz)

ProbeJS 6.0.1 schreibt Typen und Registry-Listen nach `kubejs/probe/` und `.vscode/`. 🔵 Befehl und Ausgabe für Version 6 im Spiel prüfen (in 4.0 war es `/probejs dump`). Nutzen: IDs und Rezept-Schemata direkt aus dem laufenden Spiel lesen statt aus den JARs.
