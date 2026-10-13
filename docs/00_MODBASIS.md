# 00 — MODBASIS

> Stand 2026-10-12, Minecraft 1.20.1. Neu geschrieben beim Neustart der Analyse; die Fassung für 1.18.2 liegt im Git-Verlauf (Commit `9bf29d8`).

## Zweck

Verbindliche Mod-Liste des Packs. Die Liste wird nicht stillschweigend verändert.

## Grundregel

🟢 Die Modbasis ist festgelegt. Neue Mods kommen nur nach bewusster Entscheidung dazu; große Gameplay- oder Progressionsmods werden nicht nebenbei ergänzt.

## Technische Basis

- Minecraft **1.20.1**, **Forge 47.4.26**, ATLauncher
- Referenz ist die Testinstanz `…\ATLauncher\instances\Minecraft1201withForge`: **98 Mod-JARs**, Rohliste in `mods_v5.txt` (🟢 2026-10-12 aus `mods/` der Instanz erzeugt). Startet mit allen 98 JARs und lädt eine Welt (🟢 Log vom 2026-10-11, 23:07–23:12).
- Versionen in den Tabellen: 🟢 aus den Dateinamen und `mods.toml` der JARs gelesen (2026-10-12).
- Quelle: **MR** = Modrinth, **CF** = CurseForge, — = vom User installiert, Quelle nicht notiert.
- Die Hauptwelt liegt beim Host; dessen Mod-Liste ist noch nicht abgeglichen (🔵 TODO F21 in `00_STATUS.md`).
- Alte Rohlisten `mods_v3.txt` (Hauptinstanz 1.18.2) und `mods_v4.txt` (Testinstanz 1.18.2) bleiben nur als Vergleich.

## Gameplay- und Content-Mods

### Technik

| Mod | Version | Quelle | Rolle |
|---|---|---|---|
| Immersive Engineering | 10.2.0-183 | MR | industrielle Grundlage: Multiblöcke, Draht, Diesel |
| Immersive Petroleum | 4.3.1-36b | MR | Ölförderung und Destillation |
| Immersive Posts | 4.3.0-15 | MR | Masten für IE-Leitungen |
| More Immersive Wires | 1.1.4 | MR | IE-Drähte für AE2-Netze (ME Glass und Dense Cable); 1.1.4 enthält keinen Mekanism-Draht (🟢 Sprachdatei im JAR, 2026-10-13) |
| Mekanism | 10.4.16.80 | MR | High-Tech, Chemie, Erzvervielfachung |
| Mekanism Generators | 10.4.16.80 | MR | Stromerzeuger bis Kern- und Fusionsreaktor |
| Applied Energistics 2 | 15.4.11 | MR | digitales Lager, Autocrafting (Endgame) |
| AE2 Wireless Terminals (AE2WTLib) | 15.3.3 | MR | kabellose AE2-Terminals |
| Applied Mekanistics | 1.4.3 | MR | Mekanism-Chemikalien in AE2 |
| Applied Botanics | 1.5.2 | MR | Botania-Mana in AE2 |

### Magie

| Mod | Version | Quelle | Rolle |
|---|---|---|---|
| Botania | 456 | MR | Naturmagie, Mana |
| MythicBotany | 4.0.4 | MR | Alfheim, Alfsteel |
| Blood Magic | 3.3.8-50 | MR | Blutmagie, Altar, Rituale |
| Blood-Smeltery | 1.2.1a | MR | Blood Magic ↔ Tinkers-Schmelze (teilweise defekt, siehe „Bekannte Fehler“) |

### Werkzeuge und Materialien

| Mod | Version | Quelle | Rolle |
|---|---|---|---|
| Tinkers' Construct | 3.12.1.231 | MR | modulare Werkzeuge, Schmelze |
| Tinkers Levelling Addon | 1.4.3 | MR | Werkzeuge sammeln Erfahrung |
| TCIntegrations | 2.0.25.19 | MR | Tinkers-Materialien aus anderen Mods |

### Raumfahrt und Star Wars

| Mod | Version | Quelle | Rolle |
|---|---|---|---|
| Ad Astra | 1.15.21 | MR | Raketen, Planeten, Sauerstoff |
| Ad Astra: Giselle Addon | 6.27 | MR | Fuel Loader, Anbindung an Mekanism und Tinkers |
| Ad Astra: More Structures | 1.0.2 | — | Dungeons und Bosse auf den Planeten |
| Mekanism: Ad Astra Ores | 1.1.0 | — | nur die Erzblöcke in Planetengestein; eigene Generierung abgeschaltet |
| Ad Astra: Rocketed | 1.0.5 | — | Raketen T5–T7; 🔵 installiert, Entscheidung offen |
| Star Wars Planets (Ad-Astra-Version) | 1.4.6.1 | MR / CF | Tatooine, Hoth, Endor, Mustafar, Mandalore; Kyber, Beskar |
| Star Wars: Galaxy in a Cube | 1.0.3.1 | MR | Lichtschwerter, Macht, Klone, Droiden |

Details: `15_RAUMFAHRT.md`, `17_STAR_WARS_1.20.1.md`.

### Dimensionen, Dungeons, Kreaturen

| Mod | Version | Quelle | Rolle |
|---|---|---|---|
| Blue Skies | 1.3.31 | MR | Everbright und Everdawn; Ersatz für Twilight Forest |
| Wesley's Roguelike Dungeons | 2.3.6 | MR | Spaß-Dungeons, eigene Dungeon-Dimension |
| Alex's Mobs | 1.22.9 | — | zusätzliche Tiere und Kreaturen |

### Essen

| Mod | Version | Quelle | Rolle |
|---|---|---|---|
| Farmer's Delight | 1.3.4 | MR | Ackerbau und Kochen |
| Nether's Delight | 4.0 | MR | Nether-Zutaten |
| Alex's Delight | 1.5 | — | Gerichte aus Alex's-Mobs-Zutaten |
| Engineers Delight (`tmted`) | B.1.4 | — | Farmer's Delight ↔ IE (Sawmill, Cloche, Abfüller) |

### Lager, Transport, Bauen

| Mod | Version | Quelle | Rolle |
|---|---|---|---|
| Storage Drawers | 12.15.1 | MR | Schubladen-Lager |
| Sophisticated Backpacks | 3.26.9.2194 | MR | einziger Rucksack-Mod |
| Immersive Aircraft | 1.5.0 | MR | Fluggeräte in der Atmosphäre |
| Immersive Aircraft x Immersive Engineering (`iaie`) | 1.2 | — | Fluggeräte tanken flüssigen Treibstoff aus dem IE-Metallfass (`#immersiveengineering:drill_fuel`); feste Brennstoffe sind per Config aus |
| Chisels & Bits | 20.1.20 | — | Blöcke frei formen (war beim Host schon in der Welt) |
| Rechiseled | 1.2.6 | MR | dekorative Blockvarianten |
| Carry On | 2.1.2.7 | MR | Kisten und Tiere tragen |
| GraveStone | 1.0.35 | MR | Grab mit Inventar beim Tod |
| GraveStone Curios Compat | 4.0.2 | CF | Curios-Ausrüstung ins Grab |

### Questbuch und Story

| Mod | Version | Quelle | Rolle |
|---|---|---|---|
| FTB Quests | 2001.4.22 | CF | Questbuch |
| FTB Library | 2001.2.13 | CF | Basis der FTB-Mods |
| FTB Teams | 2001.3.2 | CF | geteilter Quest-Fortschritt |
| Item Filters | 2001.1.0-build.59 | CF | Filter-Items für Quests |
| Easy NPC (+ Bundle, Config UI) | 7.14.0 | — | Story-Figuren mit Dialogen |
| Easy NPC Dialogue Immersion | 0.3.0 | — | Dialoge im Rollenspiel-Stil |

## KubeJS

| Mod | Version | Quelle | Hinweis |
|---|---|---|---|
| KubeJS | 2001.6.5-build.26 | MR | Skript-Syntax anders als 1802 |
| Rhino | 2001.2.3-build.10 | MR | JavaScript-Engine |
| KubeJS Botania | 1.4.0 | CF | |
| KubeJS Immersive Engineering | 2001.5.29-build.23 | — | |
| KubeJS Mekanism | 2001.1.5.1-build.2 | — | |
| KubeJS Blood Magic | 1.0.2 | — | |
| KubeJS Additions | 4.3.4 | — | zusätzliche Ereignisse und Hilfsfunktionen |
| ProbeJS | 6.0.1 | MR | **nur Testinstanz**, nicht ausliefern |

Ein KubeJS-Addon für Tinkers ist nicht installiert. Tinkers-Rezepte werden bei Bedarf als JSON über `event.custom()` geschrieben (🔵 nicht getestet).

## Bibliotheken

Bibliotheken haben keinen eigenen Spielinhalt und bleiben nur, solange der Mod bleibt, der sie braucht.

| Bibliothek | Version | Gebraucht von |
|---|---|---|
| Architectury | 9.2.14 | KubeJS, AE2WTLib, FTB-Mods |
| BaguetteLib | 2.0.7 | GraveStone Curios Compat |
| Botarium | 2.3.4 | Ad Astra |
| Citadel | 2.6.3 | Alex's Mobs |
| Cloth Config | 11.1.136 | AE2WTLib |
| Collective | 8.44 | Stack Refill |
| Curios | 5.14.1 | Botania, AE2WTLib, Giselle Addon |
| Fusion | 1.3.16 | Rechiseled |
| GuideME | 20.1.15 | AE2 |
| LibX | 5.0.14 | MythicBotany |
| Mantle | 1.11.117 | Tinkers' Construct |
| MezzConfig | 0.6.8 | JEI |
| Patchouli | 85 | Botania, Blood Magic |
| Placebo | 8.6.3 | Toast Control |
| Resourceful Config | 2.1.3 | Ad Astra |
| Resourceful Lib | 2.1.29 | Ad Astra |
| Searchables | 1.0.3 | Controlling |
| Sophisticated Core | 1.5.6.2383 | Sophisticated Backpacks |
| Structure Gel API | 2.16.2 | Blue Skies |
| SuperMartijn642 Config Lib | 1.1.8 | Rechiseled |
| SuperMartijn642 Core Lib | 1.1.25 | Rechiseled |

Die Spalte „Gebraucht von“ stammt aus der Installation, nicht aus einer Auswertung aller `mods.toml`.

## Utility und Client

| Mod | Version | Zweck |
|---|---|---|
| AppleSkin | 2.5.1 | Sättigung und Nährwert anzeigen |
| AttributeFix | 21.0.5 | Attribut-Obergrenzen aufheben |
| Clumps | 12.0.0.4 | Erfahrungskugeln zusammenfassen |
| Controlling | 12.0.2 | Suche in der Tastenbelegung |
| Embeddium | 0.3.31 | schnellerer Renderer |
| FerriteCore | 6.0.1 | weniger Arbeitsspeicher |
| ModernFix | 5.27.88 | kürzere Ladezeiten |
| Inventory Sorter | 23.0.11 | Sortieren per Mittelklick |
| Jade | 11.13.3 | Block- und Wesen-Anzeige |
| Meka Jade Upgrade | 1.4 | Mekanism-Angaben in Jade |
| JEI | 15.62.0.219 | Items und Rezepte |
| JEI Multiblocks | 1.0.6 | IE-Multiblöcke in JEI |
| Just Enough Mekanism Multiblocks | 4.27 | Mekanism-Multiblöcke in JEI |
| Just Enough Botania | 0.2.1 | Botania-Abläufe in JEI |
| Just Enough Resources | 1.4.0.247 | Erzverteilung und Drops in JEI |
| JER Integration | 5.5.0 | Daten weiterer Mods für JER |
| JourneyMap | 6.0.7 | Karte und Wegpunkte (liegen in der Instanz, nicht in der Welt) |
| MouseTweaks | 2.25.1 | Items per Mausziehen verschieben |
| Spark | 1.10.53 | Profiler |
| Stack Refill | 5.1 | Stapel in der Hand nachfüllen |
| Toast Control | 8.0.3 | Hinweis-Einblendungen ausblenden |

## Entfallen gegenüber 1.18.2

| Mod | Grund |
|---|---|
| Twilight Forest (+ Twilight Spark Delight) | 4.3.2508 stürzt beim Start im Intel-Grafiktreiber ab (Iris Xe, TF-Issue #2516); kein Treiberwechsel gewünscht. Ersatz: Blue Skies |
| Beyond Earth, Beyond Earth: Giselle Addon | ersetzt durch Ad Astra + Giselle Addon |
| Waystones (+ Balm) | nicht mehr gewünscht; vorhandene Wegsteine verschwinden |
| Bonsai Trees 3 (+ Libnonymous) | zu starke Holzfarm; vorhandene Töpfe verschwinden |
| Traveler's Backpack | nur noch ein Rucksack-Mod; vor dem Wechsel in 1.18.2 leeren |
| Light Overlay | keine 1.20.1-Forge-Version; 🔵 Ersatz offen |
| LazyDFU | in 1.20.1 nicht mehr nötig (ModernFix deckt das ab) |
| Lucent, MaFgLib | nicht mehr installiert; kein Mod im Pack verlangt sie |
| KubeJS Tinkers | nicht installiert (siehe Abschnitt KubeJS) |

In `disabledmods/` der Testinstanz liegen noch: Twilight Forest, Twilight Spark Delight, Waystones, Balm, Traveler's Backpack. Ihre Config-Dateien in `config/` sind Reste und wirkungslos.

## Bewusste Entscheidungen

- 🟢 **Keine „More Mekanism Processing“-Erweiterung.** Erträge werden selbst über KubeJS balanciert.
- 🟢 **Keine zusätzlichen großen Tech-Mods** (Create, Thermal, Ender IO usw.).
- 🟢 **Raumfahrt ist Hauptziel** und die einzige Ausnahme zur Tech-Regel: Ad Astra bringt eigene Maschinen mit; deren Energie-, Treibstoff- und Sauerstofferzeugung wird entfernt oder durch IE, Immersive Petroleum und Mekanism ersetzt (`15_RAUMFAHRT.md`).
- 🟢 **Mekanism: Ad Astra Ores bleibt nur wegen der Erzblöcke.** Die Erzverteilung legen wir selbst fest.
- 🟡 Spätere Endgame-Erweiterungen (z. B. Draconic Evolution) werden separat entschieden (`09_ENDGAME.md`).

## Bekannte Fehler aus dem Start-Log (2026-10-11)

- **`forge:sand` ist leer:** Star Wars Planets trägt `swplanets:mustafar_sand` in das Item-Tag ein (🟢 im JAR bestätigt, 2026-10-12); das Item gibt es nicht, Minecraft verwirft das ganze Tag. Folge: Mekanism meldet „Broken tags“, Rezepte mit `#forge:sand` fehlen. 🔵 Fix per KubeJS (TODO D13).
- **Blood-Smeltery teilweise defekt:** verweist auf vier nicht registrierte Flüssigkeiten (`*_molten_hellforged`); die Schmelzrezepte dazu fehlen, das JEI-Plugin wirft einen Fehler. `forge:coins` ist leer. Im Log vom 23:07 Uhr laden außerdem rund 25 Rezepte nicht (Chiller, Crucible, Melter, Press).
- Fehlermeldungen zu Rezepten für nicht installierte Mods (Thermal, Cyclic u. a.) sind harmlos.

## Offene Punkte

1. 🔵 Mod-Liste des Hosts abgleichen (F21).
2. 🔵 Ersatz für Light Overlay oder ersatzlos streichen.
3. 🔵 Ad Astra: Rocketed behalten? (Entscheidung nach der Progression, C10)
