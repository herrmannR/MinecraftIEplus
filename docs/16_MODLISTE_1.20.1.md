# 16 — MODLISTE 1.20.1

## Zweck

Mod-Liste des Packs nach dem Wechsel von 1.18.2 auf 1.20.1. Grundlage ist `mods_v3.txt` (Hauptinstanz 1.18.2, 71 JARs). 🟢 Der Wechsel ist beschlossen (2026-10-11, siehe `12_CHANGELOG.md`).

- Minecraft **1.20.1**, **Forge 47.4.26**
- Stand der Versionen: 2026-10-11, jeweils neueste Datei für 1.20.1 + Forge
- Quelle **MR** = Modrinth (per API abgefragt), **CF** = CurseForge (per cfwidget abgefragt)
- 🔵 = nicht per Abfrage bestätigt, beim Installieren prüfen
- Die Beschreibungen stammen aus dem Gedächtnis, nicht aus den 1.20.1-JARs.

## Reihenfolge

1. **Stufe 1** installieren (Abschnitte A bis D), Instanz ohne Welt starten, Log prüfen.
2. Kopie der Host-Welt laden, Forge-Warnung zu fehlenden Registry-Einträgen sichern.
3. Erst danach **Stufe 2** (Abschnitt E, Raumfahrt).

⚠️ Wer einen Mod streicht, dessen Blöcke oder Items schon in der Welt sind, verliert diese beim Laden. Das zeigt die Forge-Warnung aus Schritt 2.

## A. Gameplay-Mods

| Mod | Was er macht | Version | Datei | Quelle | Hinweis |
|---|---|---|---|---|---|
| Applied Energistics 2 | Digitales Lager- und Automatisierungsnetz mit Autocrafting. | 15.4.11 | `appliedenergistics2-forge-15.4.11.jar` | MR | braucht neu **GuideME** |
| AE2 Wireless Terminals (AE2WTLib) | Kabellose Crafting- und Muster-Terminals für das AE2-Netz. | 15.3.3 | `ae2wtlib-15.3.3-forge.jar` | MR | |
| Applied Mekanistics | Lässt AE2 Mekanism-Chemikalien (Gase usw.) lagern und transportieren. | 1.4.3 | `Applied-Mekanistics-1.4.3.jar` | MR | |
| Applied Botanics | Lässt AE2 Botania-Mana lagern und transportieren. | 1.5.2 | `applied-botanics-forge-1.5.2.jar` | MR | |
| Blood Magic | Blutmagie mit Altar, Ritualen und Lebensessenz als Ressource. | 3.3.8-50 | `BloodMagic-1.18-1.20.1-3.3.8-50.jar` | MR | |
| Blood-Smeltery | Verbindet Blood Magic mit der Tinkers-Schmelze (Materialien und Modifier). | 1.2.1a | `Blood-Smeltery-1.20.1-1.2.1a.jar` | MR | |
| Botania | Naturmagie rund um Blumen und Mana. | 456 | `Botania-1.20.1-456-FORGE.jar` | MR | |
| Farmer's Delight | Erweitert Ackerbau und Kochen um neue Pflanzen, Gerichte und Küchengeräte. | 1.3.4 | `FarmersDelight-1.20.1-1.3.4.jar` | MR | |
| Immersive Aircraft | Baubare Fluggeräte (Luftschiff, Doppeldecker, Gyrokopter). | 1.5.0 | `immersive_aircraft-1.5.0+1.20.1-forge.jar` | MR | |
| Immersive Engineering | Industrietechnik mit großen Multiblock-Maschinen, Drähten und Dieselstrom. | 10.2.0-183 | `ImmersiveEngineering-1.20.1-10.2.0-183.jar` | MR | |
| Immersive Petroleum | Ölförderung und Destillation zu Diesel, Benzin und Schmiermittel für IE. | 4.3.1-36b | `ImmersivePetroleum-1.20.1-4.3.1-36b.jar` | MR | |
| Immersive Posts | Zusätzliche Masten und Pfosten in vielen Metallen für IE-Leitungen. | 4.3.0-15 | `ImmersivePosts-1.20.1-4.3.0-15.jar` | MR | |
| Mekanism | High-Tech mit Erzvervielfachung, Chemie und universellen Leitungen. | 10.4.16.80 | `Mekanism-1.20.1-10.4.16.80.jar` | MR | ⚠️ Welt nicht ohne fertige Worldgen-Config öffnen |
| Mekanism Generators | Stromerzeuger für Mekanism bis hin zu Kern- und Fusionsreaktor. | 10.4.16.80 | `MekanismGenerators-1.20.1-10.4.16.80.jar` | MR | |
| More Immersive Wires | Weitere IE-Drahtarten, u. a. für AE2- und Mekanism-Netze. | 1.1.4 | `more-immersive-wires-1.20.1-1.1.4.jar` | MR | |
| MythicBotany | Botania-Erweiterung mit Alfheim-Dimension, Alfsteel und nordischer Mythologie. | 4.0.4 | `MythicBotany-1.20.1-4.0.4.jar` | MR | |
| Nether's Delight | Farmer's-Delight-Erweiterung mit Nether-Zutaten und Hoglin-Gerichten. | 4.0 | `nethersdelight-1.20.1-4.0.jar` | MR | |
| Sophisticated Backpacks | Aufrüstbare Rucksäcke mit Upgrades wie Magnet, Filter und Stapel-Erweiterung. | 3.26.9.2194 | `sophisticatedbackpacks-1.20.1-3.26.9.2194.jar` | MR | |
| Storage Drawers | Schubladen-Lager, die große Mengen eines Items sichtbar speichern. | 12.15.1 | `StorageDrawers-forge-1.20.1-12.15.1.jar` | MR | |
| Tinkers' Construct | Selbst zusammengesetzte, modifizierbare Werkzeuge und eine Schmelze für Metalle. | 3.12.1.231 | `TConstruct-1.20.1-3.12.1.231.jar` | MR | als Beta markiert |
| Tinkers Levelling Addon | Tinkers-Werkzeuge sammeln Erfahrung und schalten dadurch Modifier-Plätze frei. | 1.4.3 | `TinkersLevellingAddon-1.20.1-1.4.3.jar` | MR | |
| TCIntegrations | Tinkers-Materialien und -Modifier aus anderen Mods (z. B. Botania, Mekanism). | 2.0.25.19 | `TCIntegrations-1.20.1-2.0.25.19.jar` | MR | |
| Blue Skies | Zwei Dimensionen (Everbright, Everdawn) mit Bossen und Dungeons in fester Reihenfolge; Ersatz für Twilight Forest. | 1.3.31 | `blue_skies-1.20.1-1.3.31.jar` | MR | braucht Structure Gel API; startet in der Testinstanz (2026-10-11) |
| Wesley's Roguelike Dungeons | Dungeon-Crawler mit 18 Themen, eigenen Gegnern und Bossen sowie einer eigenen Dungeon-Dimension mit Zeitlimit. | 2.3.6 | `Wesley's Roguelike Dungeons 1.20.1-2.3.6.jar` | MR | 🟢 bleibt (2026-10-11); zufällige Overworld-Dungeons sind per Config aus |

## B. KubeJS

| Mod | Was er macht | Version | Datei | Quelle | Hinweis |
|---|---|---|---|---|---|
| KubeJS | Rezepte, Tags, Worldgen und eigene Inhalte per JavaScript anpassen. | 2001.6.5-build.26 | `kubejs-forge-2001.6.5-build.26.jar` | MR | Skript-Syntax anders als 1802 |
| Rhino | JavaScript-Engine, auf der KubeJS läuft. | 2001.2.3-build.10 | `rhino-forge-2001.2.3-build.10.jar` | MR | |
| KubeJS Botania | Komfort-Funktionen für Botania-Rezepte in KubeJS. | 1.4.0 | `kubejs_botania-1.4.0-forge.jar` | CF | |
| KubeJS Mekanism | Komfort-Funktionen für Mekanism-Rezepte in KubeJS. | — | — | — | 🔵 weder auf MR noch in der CF-Abfrage eine 1.20.1-Datei |
| KubeJS Immersive Engineering | Komfort-Funktionen für IE-Rezepte in KubeJS. | — | — | — | 🔵 wie oben |
| KubeJS Tinkers | Komfort-Funktionen für Tinkers-Rezepte in KubeJS. | — | — | — | 🔵 nicht gefunden |
| KubeJS Blood Magic | Komfort-Funktionen für Blood-Magic-Rezepte in KubeJS. | — | — | — | 🔵 nicht gefunden |

Die vier fehlenden Addons liefern nur Komfort-Funktionen für Rezepte. 🔵 Annahme: Die Rezepte lassen sich stattdessen als JSON über `event.custom()` schreiben. Für Stufe 1 werden sie nicht gebraucht.

## C. Bibliotheken

Bibliotheken haben keinen eigenen Spielinhalt. Sie bleiben nur, solange der Mod bleibt, der sie braucht.

| Mod | Was er macht | Version | Datei | Quelle | Gebraucht von |
|---|---|---|---|---|---|
| Architectury | Gemeinsame Programmierbasis für Mods, die auf mehreren Loadern laufen. | 9.2.14 | `architectury-9.2.14-forge.jar` | MR | KubeJS, AE2WTLib |
| Structure Gel API | Programmierbasis für die Strukturen von Blue Skies. | 2.16.2 | `structure_gel-1.20.1-2.16.2.jar` | MR | Blue Skies |
| Cloth Config | Stellt Einstellungsmenüs für andere Mods bereit. | 11.1.136 | `cloth-config-11.1.136-forge.jar` | MR | AE2WTLib |
| Collective | Programmierbasis der Mods von Serilum. | 8.44 | `collective-1.20.1-8.44.jar` | MR | Stack Refill |
| Curios | Zusätzliche Ausrüstungsplätze für Ringe, Gürtel, Amulette usw. | 5.14.1 | `curios-forge-5.14.1+1.20.1.jar` | MR | Botania, AE2WTLib |
| Fusion | Ermöglicht verbundene Texturen für Blöcke. | 1.3.16 | `fusion-1.3.16-forge-mc1.20.1.jar` | MR | Rechiseled |
| **GuideME** (neu) | Zeigt Handbücher im Spiel an. | 🔵 | 🔵 | MR | AE2 |
| LibX | Programmierbasis der Mods von MelanX/noeppi_noeppi. | 5.0.14 | `LibX-1.20.1-5.0.14.jar` | MR | MythicBotany (als Alpha markiert) |
| Lucent | Bibliothek für dynamisches Licht (z. B. leuchtende Items in der Hand). | 1.5.5 | `lucent-1.20.1-1.5.5.jar` | MR | 🔵 prüfen, wer es braucht |
| MaFgLib | Forge-Portierung von MaLiLib, der Basis für die Client-Mods von masa. | 0.1.14 | `MaFgLib-0.1.14-mc1.20.1.jar` | MR | 🔵 im Pack ist kein Mod erkennbar, der es braucht |
| Mantle | Programmierbasis von Tinkers' Construct, liefert auch dessen Bücher. | 1.11.117 | `Mantle-1.20.1-1.11.117.jar` | MR | Tinkers (als Beta markiert) |
| **MezzConfig** (neu) | Konfigurationsbasis für JEI. | 🔵 | 🔵 | MR | JEI 15.62 🔵 |
| Patchouli | Zeigt Handbücher anderer Mods im Spiel an. | 85 | `Patchouli-1.20.1-85-FORGE.jar` | MR | Botania, Blood Magic |
| Placebo | Programmierbasis der Mods von Shadows_of_Fire. | 8.6.3 | `Placebo-1.20.1-8.6.3.jar` | MR | Toast Control |
| **Searchables** (neu) | Stellt Suchfelder mit Filter-Syntax bereit. | 🔵 | 🔵 | MR | Controlling |
| Sophisticated Core | Programmierbasis der Sophisticated-Mods. | 1.5.6.2383 | `sophisticatedcore-1.20.1-1.5.6.2383.jar` | MR | Sophisticated Backpacks |
| SuperMartijn642 Config Lib | Konfigurationsbasis der Mods von SuperMartijn642. | 1.1.8 | `supermartijn642configlib-1.1.8-forge-mc1.20.jar` | MR | Rechiseled |
| SuperMartijn642 Core Lib | Programmierbasis der Mods von SuperMartijn642. | 1.1.25 | `supermartijn642corelib-1.1.25-forge-mc1.20.1.jar` | MR | Rechiseled |

Der ATLauncher lädt Pflicht-Abhängigkeiten beim Installieren über Modrinth/CurseForge in der Regel selbst mit; die drei neuen Bibliotheken kommen so automatisch.

## D. Utility / Client

| Mod | Was er macht | Version | Datei | Quelle | Hinweis |
|---|---|---|---|---|---|
| AppleSkin | Zeigt Sättigung und den Nährwert von Essen in der Hungerleiste an. | 2.5.1 | `appleskin-forge-mc1.20.1-2.5.1.jar` | MR | |
| AttributeFix | Hebt die Obergrenzen für Attribute wie Rüstung und Schaden auf. | 21.0.5 | `AttributeFix-Forge-1.20.1-21.0.5.jar` | MR | |
| Carry On | Truhen, Maschinen und Tiere mit leeren Händen samt Inhalt tragen. | 2.1.2.7 | `carryon-forge-1.20.1-2.1.2.7.jar` | MR | |
| Clumps | Fasst Erfahrungskugeln zusammen, um Ruckeln zu vermeiden. | 12.0.0.4 | `Clumps-forge-1.20.1-12.0.0.4.jar` | MR | |
| Controlling | Suchfeld und Konfliktanzeige im Tastenbelegungs-Menü. | 12.0.2 | `Controlling-forge-1.20.1-12.0.2.jar` | MR | braucht neu Searchables |
| Inventory Sorter | Sortiert Inventare und Kisten per Mittelklick. | 23.0.11 | `inventorysorter-1.20.1-23.0.11.jar` | CF | |
| Jade | Zeigt beim Anschauen an, welcher Block oder welches Wesen das ist, samt Zustand. | 11.13.3 | `Jade-1.20.1-Forge-11.13.3.jar` | MR | |
| JEI | Zeigt alle Items und ihre Rezepte an. | 15.62.0.219 | `jei-1.20.1-forge-15.62.0.219.jar` | MR | als Beta markiert |
| JEI Multiblocks | Zeigt den Aufbau der IE-Multiblöcke in JEI. | 1.0.6 | `jeimultiblocks-1.20.1-1.0.6.jar` | MR | |
| JER Integration | Liefert Just Enough Resources die Erz- und Drop-Daten weiterer Mods. | 5.5.0 | `jerintegration-5.5.0.jar` | CF | |
| JourneyMap | Minimap und Weltkarte mit Wegpunkten. | 6.0.7 | `journeymap-forge-1.20.1-6.0.7.jar` | MR | Wegpunkte liegen in der Instanz, nicht in der Welt |
| Just Enough Botania | Zeigt Botania-Abläufe ohne eigenes Rezept in JEI. | 0.2.1 | `Just-Enough-Botania-1.20.1-v0.2.1.jar` | MR | |
| Just Enough Mekanism Multiblocks | Zeigt Aufbau und Materialbedarf der Mekanism-Multiblöcke in JEI. | 4.25 | `JustEnoughMekanismMultiblocks-1.20.1-4.25.jar` | MR | |
| Just Enough Resources | Zeigt in JEI Erzverteilung nach Höhe, Mob-Drops und Truhen-Beute. | 1.4.0.247 | `JustEnoughResources-1.20.1-1.4.0.247.jar` | MR | als Beta markiert |
| MouseTweaks | Schnelleres Verschieben von Items mit Mausziehen und Mausrad. | 2.25.1 | `MouseTweaks-forge-mc1.20.1-2.25.1.jar` | MR | |
| Rechiseled | Meißel für viele dekorative Blockvarianten mit verbundenen Texturen. | 1.2.6 | `rechiseled-1.2.6-forge-mc1.20.1.jar` | MR | |
| Spark | Profiler, der Ursachen für Ruckeln und Speicherprobleme findet. | 1.10.53 | `spark-1.10.53-forge.jar` | MR | |
| Stack Refill | Füllt einen aufgebrauchten Stapel in der Hand automatisch aus dem Inventar nach. | 5.1 | `stackrefill-1.20.1-5.1.jar` | MR | |
| Toast Control | Blendet Hinweis-Einblendungen (Rezepte, Fortschritte, Tutorial) aus. | 8.0.3 | `ToastControl-1.20.1-8.0.3.jar` | MR | |

### Entfällt

| Mod | Was er macht | Grund |
|---|---|---|
| Twilight Forest | Eigene Wald-Dimension mit Bossen und Dungeons. | 4.3.2508 stürzt beim Start im Intel-Grafiktreiber ab (Iris Xe, Treiber 32.0.101.7088, beim Laden der TF-Shader; TF-Issue #2516). Kein Treiberwechsel gewünscht → ersetzt durch Blue Skies (2026-10-11) |
| Waystones (+ Balm) | Wegsteine zum Teleportieren. | nicht mehr gewünscht (2026-10-11); vorhandene Wegsteine verschwinden beim Laden der Welt |
| Bonsai Trees 3 (+ Libnonymous) | Bonsai-Töpfe, die automatisch Holz liefern. | zu starke Holzfarm (2026-10-11); vorhandene Töpfe verschwinden beim Laden der Welt |
| Traveler's Backpack | Rucksack mit Tanks, Werkbank und Schlafsack. | nur noch ein Rucksack-Mod, Sophisticated Backpacks bleibt (2026-10-11); vorhandene Traveler's-Rucksäcke samt Inhalt verschwinden → vor dem Wechsel in 1.18.2 leeren |
| Light Overlay | Markiert Stellen, an denen Monster spawnen können. | keine 1.20.1-Forge-Version (MR und CF geprüft). 🔵 Ersatz offen |
| LazyDFU | Verkürzt den Spielstart, indem die Datenumwandlung verzögert wird. | 🔵 in 1.20.1 nicht mehr nötig (aus dem Gedächtnis); ModernFix deckt das ab |

### Beschlossene Zusätze aus `00_MODBASIS.md`

| Mod | Was er macht | Version | Datei | Quelle | Hinweis |
|---|---|---|---|---|---|
| GraveStone | Hinterlässt beim Tod ein Grab mit dem gesamten Inventar. | 1.0.35 | `gravestone-forge-1.20.1-1.0.35.jar` | MR | |
| GraveStone Curios Compat | Legt auch die Curios-Ausrüstung ins Grab. | 4.0.2 | `gravestonecurioscompat-1.20.1-Forge-4.0.2.jar` | CF | braucht BaguetteLib 2.0.7 |
| FTB Quests | Questbuch, das durch die Progression führt. | 2001.4.22 | `ftb-quests-forge-2001.4.22.jar` | CF | |
| FTB Library | Programmierbasis der FTB-Mods. | 2001.2.13 | `ftb-library-forge-2001.2.13.jar` | CF | |
| FTB Teams | Teams, damit Quest-Fortschritt geteilt wird. | 2001.3.2 | `ftb-teams-forge-2001.3.2.jar` | CF | |
| Item Filters | Filter-Items, mit denen Quests Gruppen von Items akzeptieren. | 2001.1.0-build.59 | `item-filters-forge-2001.1.0-build.59.jar` | CF | |
| ProbeJS (nur Testinstanz, nicht ausliefern) | Erzeugt Autovervollständigung für KubeJS-Skripte im Editor. | 6.0.1 | `probejs-6.0.1-forge.jar` | MR | |

### Empfohlen (nicht beschlossen)

| Mod | Was er macht | Version |
|---|---|---|
| FerriteCore | Senkt den Arbeitsspeicher-Verbrauch. | 6.0.1 |
| ModernFix | Verkürzt Ladezeiten und senkt den Speicherverbrauch. | 5.27.88 |
| Embeddium | Schnellerer Renderer für mehr FPS. | 0.3.31 |
| Oculus | Shader-Unterstützung, baut auf Embeddium auf. | 1.8.0 |

## E. Stufe 2 — Raumfahrt

Erst installieren, wenn die Welt-Kopie mit Stufe 1 sauber lädt.

| Mod | Was er macht | Version | Datei | Quelle | Hinweis |
|---|---|---|---|---|---|
| Ad Astra | Raketen, Planeten, Raumstationen und Sauerstoffversorgung. | 1.15.21 | `ad_astra-forge-1.20.1-1.15.21.jar` | MR | |
| Resourceful Lib | Programmierbasis der Terrarium-Mods. | 2.1.29 | `resourcefullib-forge-1.20.1-2.1.29.jar` | MR | Pflicht für Ad Astra |
| Resourceful Config | Konfigurationsbasis der Terrarium-Mods. | 2.1.3 | `resourcefulconfig-forge-1.20.1-2.1.3.jar` | MR | Pflicht für Ad Astra |
| Botarium | Bibliothek für Energie- und Flüssigkeitstransfer. | 2.3.4 | `botarium-forge-1.20.1-2.3.4.jar` | MR | Pflicht für Ad Astra |
| Ad Astra: Giselle Addon | Fuel Loader, automatisierbare NASA Workbench und Anbindung an Mekanism und Tinkers. | 6.27 | `Ad-Astra-Giselle-Addon-forge-1.20.1-6.27.jar` | MR | |
| Star Wars Planets (Ad Astra) | Star-Wars-Planeten wie Tatooine, Hoth und Endor mit Strukturen, Kyber- und Beskar-Erz, Rüstungen und Blastern. | 1.4.6.1 | `swplanets-forge-1.20.1-1.4.6.1.jar` | MR / CF | gebaut gegen Ad Astra 1.15.18; 🔵 mit 1.15.21 testen. Lichtschwerter werden per KubeJS entfernt |
| Star Wars: Galaxy in a Cube | Lichtschwerter mit Kampfformen und Macht, dazu Klone, Droiden, Blaster und Fahrzeuge. | 1.0.3.1 | `swgc-forge-1.20.1-1.0.3.1.jar` | MR | 🟢 neu (2026-10-11); keine Abhängigkeiten gelistet; 🔵 Zusammenspiel mit Star Wars Planets testen |

Rollenverteilung der beiden Star-Wars-Mods, verworfene Alternativen und offene Arbeit: `17_STAR_WARS_1.20.1.md`.

## F. Nachträge vom 2026-10-11 (abends)

Stand der Instanz: 98 JARs, startet und lädt eine Welt (Log 22:54 Uhr; Chisels & Bits und Embeddium kamen danach dazu, 🔵 Start damit noch nicht im Log geprüft).

| Mod | Was er macht | Datei | Status |
|---|---|---|---|
| Star Wars: Galaxy in a Cube | Lichtschwerter, Macht, Klone, Droiden, Fahrzeuge. | `swgc-forge-1.20.1-1.0.3.1.jar` | 🟢 siehe `17_STAR_WARS_1.20.1.md` |
| Ad Astra: More Structures | Dungeons und Bosse auf Mond, Mars, Merkur, Venus und Glacio. | `ad_astra_more_structures-1.20.1-forge.jar` (1.0.2) | 🟢 im Pack; 🔵 Struktur `rocket_launch_t1` prüfen (verschenkt sie den ersten Raumflug?) |
| Ad Astra: Rocketed | Zusätzliche Raketenstufen über T4 hinaus. | `ad_astra_rocketed-forge-1.20.1-1.0.5.jar` | 🔵 installiert, Entscheidung offen bis die Progression aktualisiert ist |
| Mekanism: Ad Astra Ores | 16 Mekanism-Erzblöcke in Planetengestein (Mond, Mars, Merkur, Venus, Glacio) samt eigener Generierung. | `mekanism-ad-astra-ores-forge-1.20.1-1.1.0.jar` | 🟢 bleibt **nur wegen der Blöcke und Texturen**; seine Generierung wird abgeschaltet (siehe unten) |
| Chisels & Bits | Blöcke in kleine Stücke zerlegen und frei formen. | `chisels-and-bits-forge-20.1.20.jar` | 🟢 im Pack (war beim Host schon in der Welt) |
| Embeddium | Schnellerer Renderer für mehr FPS. | `embeddium-0.3.31+mc1.20.1.jar` | 🟢 im Pack |
| FerriteCore | Senkt den Arbeitsspeicher-Verbrauch. | `ferritecore-6.0.1-forge.jar` | 🟢 im Pack |
| ModernFix | Verkürzt Ladezeiten und senkt den Speicherverbrauch. | `modernfix-forge-5.27.88+mc1.20.1.jar` | 🟢 im Pack |
| Easy NPC (+ Bundle, Config UI) | Eigene Figuren mit Dialogen, Handel und Aktionen. | `easy_npc-forge-1.20.1-7.14.0.jar` u. a. | 🟢 im Pack, für Story-Figuren; Umsetzung im Questbuch-Schritt (Phase 7b in `00_STATUS.md`) |
| Easy NPC Dialogue Immersion | Zeigt Easy-NPC-Dialoge im Rollenspiel-Stil. | `easy-npc-dialogue-immersion-forge-1.20.1-0.3.0.jar` | 🟢 wie oben |
| BaguetteLib | Bibliothek mit zusätzlichen Ereignissen. | `baguettelib-1.20.1-Forge-2.0.7.jar` | Pflicht für GraveStone Curios Compat |

### Mekanism: Ad Astra Ores — Generierung abgeschaltet

🟢 Entscheidung 2026-10-11: Die Erzverteilung legen wir selbst fest. Der Mod bleibt, weil er fertige Erzblöcke mit Planetengestein-Textur mitbringt (löst den Backlog-Punkt „eigene Erz-Texturen für fremdes Gestein“ für die Planeten).

- Der Mod hängt seine Erze über zwei Biom-Tags ein: `mekanismaaa:gen_ores` und `mekanismaaa:gen_ores_deepslate`.
- Beide Tags werden geleert: `kubejs/data/mekanismaaa/tags/worldgen/biome/gen_ores.json` und `gen_ores_deepslate.json` (`replace: true`, leere Liste). 🔵 Wirkung im Spiel noch nicht getestet.
- Vorhandene Blöcke: Mond (Osmium, Zinn), Mars (Fluorit, Zinn, Uran), Merkur (Blei, Osmium, Uran), Venus (Fluorit, Blei, Uran), Glacio (alle fünf).

### Befunde aus dem Start-Log

- **`forge:sand` ist leer:** Star Wars Planets trägt `swplanets:mustafar_sand` ein, das es nicht gibt; Minecraft verwirft das ganze Tag. Folge: Mekanism meldet „Broken tags“, die Rezepte `sand_to_gravel` und `sand_to_dirt` fehlen, ebenso jedes andere Rezept mit `#forge:sand`. 🔵 Fix per KubeJS noch nicht geschrieben.
- **Blood-Smeltery teilweise defekt:** verweist auf vier nicht registrierte Flüssigkeiten (`*_molten_hellforged`); die Schmelzrezepte dazu fehlen, das JEI-Plugin wirft einen Fehler. Die übrigen Fehlermeldungen betreffen Rezepte für nicht installierte Mods (Thermal, Cyclic) und sind harmlos.

## Stand der Testinstanz `Minecraft1201withForge` (2026-10-11)

- Startet mit Blue Skies, ohne Twilight Forest und ohne Waystones.
- 🟢 Neu fest im Pack (Entscheidung 2026-10-11), nicht aus `mods_v3.txt`: Alex's Mobs 1.22.9, Alex's Delight 1.5, Citadel 2.6.3 (Bibliothek für Alex's Mobs), Engineers Delight B.1.4, iaie 1.2, Meka Jade Upgrade 1.4, KubeJS Additions 4.3.4. ModernFix 5.27.88 ist ebenfalls installiert.
- Die KubeJS-Addons für Blood Magic (1.0.2), IE (2001.5.29) und Mekanism (2001.1.5.1) liegen in der Instanz; es gibt sie also doch für 1.20.1 (Abschnitt B ist insoweit überholt).

### Blue Skies — Befunde aus JAR und Config

- **Fremde Erze:** Blue Skies filtert Features anderer Mods in seinen Dimensionen. Freigabe über `allowed_mods_for_feature_gen` in `config/blue_skies-common.toml`.
- **Gestein:** `blue_skies:turquoise_stone` (Everbright), `blue_skies:lunar_stone` (Everdawn). Die eigenen Erze sind normale JSON-Features.
- **Werkzeug-Abschwächung:** im Code vorhanden (`PlayerHooks.isNerfableTool`, `SkiesEntityHooks.nerfDamage`), an den Boss-Fortschritt gekoppelt, **kein Config-Schalter**. 🟢 Im Spiel getestet (User, 2026-10-11): Tinkers-Werkzeuge sind in Everbright abgeschwächt. 🔵 **Entscheidung offen (später):** als gewollte Hürde hinnehmen oder gegensteuern.
- **Bosse:** Summoner, Alchemist, Starlit Crusher, Arachnarch; Zugang über den Gatekeeper.

### Geplante Rollen der Dimensionen (🔵 Entwurf, 2026-10-11)

- Blue Skies: Story-Dimension und Hauptquelle der Mekanism-Erze (übernimmt die Rolle von Twilight Forest aus Phase 1).
- Wesley's Roguelike Dungeons: Spaß-Dungeons.
- Blood-Magic-Dungeon: Zugang nur auf einem Ad-Astra-Planeten (Venus oder Merkur, 🔵 offen), dort ein Pflicht-Item für die T4-Rakete.

## Welt-Test mit Kopie der Hauptwelt (2026-10-11)

Kopie aus `welten_backups/WeltVorClaude.zip` (Welt `3_ Versuch von 1,5`) in der Testinstanz geladen.

**Funktioniert (User-Test):** Inventar, Botania, Tinkers, IE-Masten und -Kabel.

**Kaputt — alle bereits gebauten IE-/IP-Multiblöcke:** 1.20.1 kennt die alten Block-Entity-Typen `…_dummy`/`…_master` nicht mehr und überspringt sie (Log: `Skipping BlockEntity with id …`). Die Blöcke bleiben als leere Hülle stehen, der Inhalt ist weg.

| Übersprungen | Anzahl Master | Betroffen |
|---|---|---|
| `immersiveengineering:sheetmetaltank_*` | 5 | Tanks samt Flüssigkeit |
| `immersiveengineering:cokeoven_*` | 3 | Coke Ovens |
| `immersiveengineering:arcfurnace_*` | 1 | Lichtbogenofen |
| `immersiveengineering:dieselgenerator_*` | 1 | Dieselgenerator |
| `immersiveengineering:metalpress_*` | 1 | Metal Press |
| `immersivepetroleum:cokerunit_*` | 1 | Coker |

- Kleine Multiblöcke ließen sich im Test durch Abbauen einzelner Blöcke neu formen; Pumpjack und Coker nicht.
- 🟢 **Folge für die echte Umstellung:** Vor dem Wechsel in 1.18.2 alle IE-/IP-Multiblöcke leeren und mit dem Hammer zerlegen, nach dem Wechsel neu formen.
- Die Ölvorkommen (`data/ImmersivePetroleum-ReservoirRegions/`) sind als Dateien unverändert vorhanden. 🔵 Ob 1.20.1 sie korrekt liest, ist nicht geprüft.
- **Absturz beim ersten Laden:** `serverconfig/immersivepetroleum-server.toml` aus 1.18.2 nennt `immersivepetroleum:benzene`, das es nicht mehr gibt. Datei vor dem ersten Start aus dem Weltordner entfernen.
- **Fremder Mod beim Host:** Die Welt enthält 22 Einträge von Chisels & Bits. 🔵 Mod-Liste des Hosts abgleichen.
- **Backup unvollständig:** `DIM-1/entities` fehlt im Download (`___All_Errors.txt`).

## Auffälligkeiten für die Durchsicht

- **MaFgLib:** Im Pack ist kein Mod erkennbar, der es braucht. 🔵 Kandidat zum Streichen.
- **Lucent:** 🔵 unklar, welcher Mod es verlangt.
- **Rechiseled** ist der einzige Grund für drei Bibliotheken (Fusion, SuperMartijn642 Config Lib, Core Lib).
- **Stack Refill** ist der einzige Grund für Collective, **Toast Control** der einzige für Placebo.

## Offene Punkte

1. 🟢 Erledigt: FTB-Versionen eingetragen; Bonsai Trees 3 entfällt.
2. 🔵 Ersatz für Light Overlay (oder ersatzlos streichen).
3. 🔵 KubeJS-Addons für Mekanism, IE, Tinkers, Blood Magic: klären, ob es 1.20.1-Dateien gibt und ob wir sie brauchen.
4. 🔵 Lucent und MaFgLib: nur mitnehmen, wenn ein Mod sie verlangt.
5. 🔵 Star Wars: offene Tests und Entscheidungen stehen in `17_STAR_WARS_1.20.1.md`.

## Welt-Migrationstest 1.18.2 → 1.20.1 (2026-10-11)

Getestet in der Instanz `Minecraft1201withForge` mit der Weltkopie `3_ Versuch von 1,5`. Belege: `logs/latest.log` und `logs/2026-10-11-5.log.gz` dieser Instanz.

**Ergebnis: Die Welt lädt, aber alle großen IE-Multiblöcke sind kaputt.**

- IE 10 (1.20.1) hat das Multiblock-System neu gebaut. Die alten Block-Entities gibt es nicht mehr; Minecraft verwirft sie beim Laden („Skipping BlockEntity“). Betroffen:

  | Maschine | verworfene Block-Entities |
  |---|---:|
  | Coker (Immersive Petroleum) | 612 |
  | Blechtank | 190 |
  | Koksofen | 81 |
  | Lichtbogenofen | 77 |
  | Dieselgenerator | 38 |
  | Metallpresse | 7 |

  Die Blöcke bleiben stehen, aber Inhalt und Zusammenhalt der Maschinen sind weg.
- 10 Waystones wurden ebenfalls verworfen.
- Beim Laden wurden rund 1.200 unbekannte IDs entfernt. Der größte Teil ist Twilight Forest (424 Blöcke, 539 Items, 80 Kreaturen); dazu Waystones, Tinkers, AE2 (u. a. Certus-Erz), Immersive Petroleum (14 Blöcke, 12 Flüssigkeiten) und Chisels & Bits (Mod fehlt in 1.20.1).
- Ein erster Ladeversuch stürzte ab: Die alte Immersive-Petroleum-Serverconfig der Welt nennt `immersivepetroleum:benzene`, das es in 1.20.1 nicht mehr gibt (`crash-2026-10-11_21.58.36-server.txt`).

🔵 Noch nicht geprüft: Zustand des Twilight Forest, der Waystones, der Tinkers-Werkzeuge und der Ölförderung nach dem Laden.
