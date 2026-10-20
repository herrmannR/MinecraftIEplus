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

## Stand der Umsetzung (2026-10-19)

🟢 Alles unten Aufgeführte liegt in der Testinstanz und ist mit den Tests 1–27 in `11_TESTING.md` bestätigt. (Die Kopfzeilen „UNGETESTET“ in den Skripten sind älter.)

Die fünf Skripte für 1.18.2 (`space_oxygen.js`, `moon_ores.js`, `tf_industrial_ores.js`, `tf_remove_foreign_ores.js`, `debug_print_ore_features.js`) und `kubejs/data/beyond_earth/` sind gelöscht (im Git-Verlauf erhalten).

### Skripte

| Datei | Aufgabe | Entscheidung |
|---|---|---|
| `server_scripts/fixes/tag_fixes.js` | Entfernt `swplanets:mustafar_sand` aus `forge:sand`, damit das Tag wieder lädt. | `00_MODBASIS.md`, Bekannte Fehler |
| `server_scripts/raumfahrt/ad_astra_regeln.js` | Entfernt die Rezepte von Coal Generator, Solar Panel, Compressor, Fuel Refinery, Water Pump, Energizer (2026-10-17), Kabeln, Pipes und Durchführungen; entfernt das Ad-Astra-Stahlrezept, das Öl-zu-Treibstoff-Rezept, das Wasser-Rezept des Oxygen Loader und alle Compressor-Rezepte. Die Platten für Desh, Ostrum und Calorite kommen aus den IE-Rezepten, die Ad Astra selbst mitbringt. | `15_RAUMFAHRT.md` |
| `server_scripts/worldgen/excavator_adern.js` | Entfernt die Excavator-Ader Cassiterite (Zinn). | `03_ERZGENERATION.md` |
| `server_scripts/crossmod/tinkers_legierungen.js` | Entfernt das Legierungsrezept für Refined Obsidian aus der Schmelzerei. ✅ In JEI bestätigt (2026-10-17). | `07_CROSSMOD_INTEGRATION.md` |
| `server_scripts/crossmod/blood_smeltery.js` | Entfernt die Life-Essence-Legierung und das Gießen von Blank Slate und Blank Rune. ✅ In JEI bestätigt (2026-10-17). | `07_CROSSMOD_INTEGRATION.md` |
| `client_scripts/jei_ausblenden.js` | Blendet alle entfernten Items in JEI aus (Regel: was ein Skript entfernt, kommt auch hierher). | User, 2026-10-13 |

#### Teil 1 (2026-10-20, 🔵 ungetestet, Tests 42–57 in `11_TESTING.md`)

| Datei | Aufgabe | Entscheidung |
|---|---|---|
| `startup_scripts/teil1_items.js` | Eigene Items: Galaktischer Strahlenschutz, Relikt, Steuerkerne B-1/B-2/Droideka (eigene Texturen in `kubejs/assets/kubejs/textures/item/`), sechs Bauplan-Seiten `kubejs:bauplan_<name>` (Texturen aus Galaxy in a Cube). | F2f, F2e, O28 |
| `startup_scripts/altar_dimension.js` | Dungeon-Rituale von Blood Magic nur auf dem Merkur; in die Altar-Dimension nur mit getragenem Benevolent Goddess' Charm (Curios). Forge-Ereignisse, deshalb in `startup_scripts`. | Pfad D, F18 |
| `server_scripts/raumfahrt/raketen_t1_t4.js` | Triebwerke T1–T4 mit Control Circuit der Stufe; Tanks T2–T4 mit Ventium, Imbued Slate, Elementium; Calorite-Triebwerk mit Galaktischem Strahlenschutz. | F2, F2a, F2f |
| `server_scripts/progression/ae2_verteuerung.js` | ME Controller und ME Drive mit Advanced Control Circuit und Stahlplatten. | F10 |
| `server_scripts/progression/aircraft_stahl.js` | Airship mit IE-Stahlplatten. | F17 |
| `server_scripts/progression/ideenimport_entfernt.js` | Entfernt Digital Miner, Vibration Chamber, Crystal Resonance Generator, Plastic Plate. | Ideenimport |
| `server_scripts/crossmod/ie_crusher_uebernimmt.js` | Legt für jedes Rezept des Mekanism-Crushers ein gleiches im IE-Crusher an (wenn der IE-Crusher die Eingabe noch nicht kennt). | Ideenimport |
| `server_scripts/starwars/einsiedler_shop.js` | Credits nicht mehr aus Metall; Plastoid und Durasteel nur im Shop; Droiden mit Steuerkern und Stahlblöcken. Baupläne: Der Einsiedler verkauft Schriftrollen (alle gleich, eigene Textur); Rechtsklick liest die Rolle: sie verschwindet, das Rezept für die Welt freigeschaltet (Weltwert) und alle Spieler bekommen das Advancement `ieplus:bauplan/<name>` (`kubejs/data/ieplus/advancements/bauplan/`, versteckt), das den Eintrag im Patchouli-Buch „Baupläne des Einsiedlers“ (`patchouli_books/bauplaene/`, gehört in den Ordner `patchouli_books/` der Instanz) entsperrt; Offline-Spieler beim Einloggen. Der erste Kauf der Welt gibt das Buch dazu. Befehle `/bauplan <name>`, `/bauplan buch`, `/bauplan zuruecksetzen` (alles wieder sperren). Dazu eine Blaster-Rolle: Sie öffnet alle sieben Blaster-Seiten (Modelle der Assembly Bench); an der Bench wird nichts gesperrt, deren Blaster-Rezept ist für alle Modelle gleich und steht im Code (User, 2026-10-20). Fünf Rüstungs-Rollen (Klon Phase 2, Jedi, Sith, Royal Guard, Vader): deren Werkbank-Rezepte sind bis zum Bauplan gesperrt, Kosten unverändert. Das Buch hat drei Kapitel: Maschinen, Waffen (Blaster, Droiden), Rüstung. Rezepte stark verteuert (Test 43). | O28, F5c/d, Test 43 |
| `client_scripts/tooltips_teil1.js` | Tooltips der eigenen Items. | – |
| `client_scripts/jei_infos.js` | Info-Seiten in JEI (Cryo Fuel: Herkunft aus dem Cryo Freezer). | O41 |
| `server_scripts/progression/stahl_nur_ie.js` | Entfernt den Mekanism-Stahlweg (Enriched Iron → Stahlstaub). | O41 |
| `startup_scripts/treibstoffe.js`, `server_scripts/raumfahrt/treibstoffe.js` | Kryo-Raketentreibstoff für T4 (eigene Flüssigkeit), IE Refinery: 10 Benzin + 10 Cryo Fuel → 10. | F3 |
| `config-overrides/config/alexsmobs.toml` | `limitTransmutingToLootTables = true`. | F16 |

### Datapack (`kubejs/data/`)

Erz-Features für Blue Skies und die Planeten, Kyber-Override, Treibstoff-Tags, seltenere Excavator-Adern, abgeschaltete Ölquellen und Mekanism-Planeten-Erze. Tabelle mit Begründungen: `kubejs/data/README.md`.

### Configs (`config-overrides/`)

| Datei | Ziel beim Host | Inhalt |
|---|---|---|
| `config/Mekanism/world.toml` | `config/Mekanism/` | Overworld-Erze, Retrogen |
| `config/blue_skies-common.toml` | `config/` | Freigabe des Namensraums `ieplus` für Erz-Features |
| `serverconfig/immersiveengineering-server.toml` | `saves/<Welt>/serverconfig/` | IE-Erze |
| `config/alexsmobs.toml` | `config/` | Transmutation Table nur noch Truhenbeute (F16) |

Unter `_original/` liegen die unveränderten Standarddateien zum Vergleich.

### Noch nicht umgesetzt

- 🔵 Antimaterie-Treibstoffe für T6 und T7 (F3, Teil 2 und 3).
- 🔵 Tinkers in den höheren Stufen (Wege A, C, D, E, F und fehlende Schmelzrezepte, `07_CROSSMOD_INTEGRATION.md`): beschlossen, Rezepte und Werte offen.
- 🔵 Rezept vom Kyber-Erz zum Kyber-Kristall; Lichtschwerter von Star Wars Planets entfernen (`17_STAR_WARS_1.20.1.md`).
- 🔵 Etrium-Rezepte (`15_RAUMFAHRT.md`), Planetenstufen T5–T7 (Teil 2 und 3).
- 🔵 Aus dem Ideenimport noch offen: Beskar, Kyber (Teil 3, F5, F12). Der Mekanism-Crusher bleibt vorerst neben dem IE-Crusher.
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
