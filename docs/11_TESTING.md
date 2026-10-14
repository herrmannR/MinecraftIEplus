# 11 — TESTING

> Stand 2026-10-12, Minecraft 1.20.1. Neu geschrieben beim Neustart der Analyse (Block E); die Fassung für 1.18.2 liegt im Git-Verlauf (Commit `9bf29d8`).

## Zweck

Was im Spiel geprüft werden muss, bevor etwas in die Hauptwelt geht, und was dabei herauskam.

## Testumgebung

- Testinstanz `…\ATLauncher\instances\Minecraft1201withForge` (98 JARs).
- 🟢 Am 2026-10-12 kopiert: `kubejs/data/`, `kubejs/server_scripts/`, `config/Mekanism/world.toml`, `config/blue_skies-common.toml`, `defaultconfigs/immersiveengineering-server.toml`. Sicherungen der zwei ersetzten Configs liegen daneben (`….vor-2026-10-12`).
- ⚠️ Mekanism-Retrogen ist in der Instanz jetzt eingeschaltet. Wer eine **vorhandene** Testwelt öffnet (auch die Weltkopie `3_ Versuch von 1,5`), löst dort Retrogen aus. Für Test 1 bis 8 deshalb eine **neue Welt** anlegen (Kreativmodus, Cheats an).
- Die IE-Erzwerte gelten nur für neu angelegte Welten (Datei in `defaultconfigs/`). 🟢 Bestätigt am 2026-10-13: Die neue Welt `New World (3)` hat unsere Werte übernommen (Bauxit 5, Blei und Uran aus).

## Testplan

Ergebnis jeweils hier eintragen: ✅ bestanden, ❌ Fehler (mit Beschreibung), ⏳ offen.

### Runde 1 — Start und Skripte (neue Welt)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 1 | Spiel startet, neue Welt lädt | starten, Welt anlegen | kein Absturz | ✅ 2026-10-13: Welt `New World (3)` neu angelegt und geladen, kein Absturz (Log) |
| 2 | KubeJS-Skripte laden | `logs/kubejs/server.log` öffnen | keine Zeile mit `ERROR` zu `tag_fixes`, `ad_astra_regeln`, `excavator_adern` | ✅ 2026-10-13: 6 von 6 Server-Skripten geladen, 0 Fehler, 0 Warnungen (`logs/kubejs/server.log`) |
| 3 | `forge:sand` repariert | JEI: Verwendung von Sand ansehen; Log nach „Broken tags“ durchsuchen | Mekanism-Rezepte Sand → Kies vorhanden, keine Meldung | ✅ |
| 4 | Ad-Astra-Rezepte entfernt | JEI: Coal Generator, Solar Panel, Compressor, Fuel Refinery, Water Pump, Kabel, Pipes | kein Herstellungsrezept | ✅ |
| 5 | Platten über IE | JEI: Desh-, Ostrum-, Calorite-Platte | Rezept in der Metal Press | ✅ Etrium geprüft (2026-10-13): Ad Astra 1.15.21 enthält Etrium-Barren, -Platte, -Nugget, -Stab und -Blöcke als Items, aber im JAR kein einziges Rezept, das sie herstellt oder verbraucht. Das ist der Zustand des Mods, nicht unser Eingriff. 🔵 Entscheiden: in JEI ausblenden oder dem Material eine eigene Rolle geben |
| 6 | Oxygen Loader | JEI: Oxygen Loading | nur das Rezept mit Sauerstoff, keines mit Wasser | ✅ |
| 7 | Excavator | JEI oder Mineral-Übersicht von IE | Cassiterite fehlt; Galena und Uraninite vorhanden | ✅ |

### Runde 2 — Worldgen (neue Welt, Kreativ, Zuschauermodus zum Durchfliegen)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 8 | Overworld-Erze | unter Tage fliegen, JER-Anzeige | kein Zinn, kein IE-Blei, kein IE-Uran; Osmium wenig; Mekanism-Blei sehr selten; wenig Bauxit | 🟡 2026-10-13, ausgezählt mit `tools/ErzZaehler.java` (870 Chunks der Welt `New World (3)`, Vergleich: zwei Welten mit Standardwerten). Blöcke pro Chunk, Standard → jetzt: Zinn 82 → 0 ✅; IE-Blei 11 → 0 ✅; IE-Uran 7,6 → 0 ✅; Mekanism-Blei 42 → 11; Osmium 46 → 24; Mekanism-Uran 37 → 48; Fluorit 46 → 47; Bauxit 1,8–3,3 → 2,6 (wegen der Geländehöhe nicht aussagekräftig). 🔵 Uran ist damit häufiger als Osmium und nicht knapp; Blei liegt etwa beim Diamanten (15). Werte bestätigen oder senken |
| 9 | Kyber-Kristalle | Overworld, mehrere Chunks unter Tage | keine `swgc:kyber_crystal` | ✅ 2026-10-13: 0 Kristalle in 870 Chunks (Standard: 49 in 841 Chunks) |
| 10 | Ölquellen von Ad Astra | Ozean absuchen oder `/locate structure ad_astra:oil_well` | keine gefunden | ⏳ |
| 11 | Everbright | Portal bauen, unter Tage | Zinn, Blei, Bauxit in Turquoise Stone; eigene Blue-Skies-Erze weiter vorhanden | ✅ 2026-10-13, ausgezählt (400 Chunks, per `forceload` erzeugt): Zinn 35, Blei 37, Bauxit 33 Blöcke pro Chunk; eigene Erze vorhanden (Falsite 19, Ventium 19, Moonstone 110) |
| 12 | Everdawn | wie oben | Osmium in Lunar Stone | ✅ 2026-10-13, ausgezählt (400 Chunks): Osmium 36 pro Chunk; kein Zinn, Blei oder Bauxit. Horizonite nur 0,03 pro Chunk (biomgebunden, Standard des Mods) |
| 13 | Mond | `/execute in ad_astra:moon run tp ~ 100 ~` | Osmium in Mondgestein; kein Zinn | ✅ 2026-10-13, ausgezählt (400 Chunks): Osmium 67 pro Chunk; kein Zinn. Zum Vergleich Desh 51, Eisen 84 |
| 14 | Mars, Merkur, Venus, Glacio | wie oben mit `ad_astra:mars`, `mercury`, `venus`, `glacio` | Mars: Fluorit. Merkur, Venus: Uran, Blei. Glacio: Osmium, Uran. Sonst keine Mekanism-Erze | ✅ 2026-10-13, ausgezählt (je 400 Chunks): Mars Fluorit 30 (Ostrum 39). Merkur Uran 58, Blei 57. Venus Uran 60, Blei 60 (Calorite 39). Glacio Osmium 77, Uran 25. Keine anderen Mekanism-Erze, auch nicht die normalen Mekanism-Erze auf Glacio |
| 15 | Mengen | je Dimension einschätzen | passt zu „selten“ bzw. „häufig“; sonst Zahlen in `03_ERZGENERATION.md` anpassen | 🟡 Zahlen liegen vor (Tests 8, 11–14); Bewertung durch den User offen. Overworld-Uran und -Osmium nach der Senkung vom 2026-10-13 noch nicht nachgezählt |

### Runde 3 — Raumfahrt und Blue Skies

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 16 | Treibstoff T1 bis T3 | Rakete betanken (Fuel Loader oder Eimer) | T1 nimmt nur Biodiesel, T2 nur entschwefelten Diesel, T3 nur Kerosin | ⏳ |
| 17 | Verbrauch pro Start | Tankanzeige vor und nach dem Start | Menge notieren | ⏳ |
| 18 | Sauerstoff | Mekanism-Sauerstoff (flüssig) in den Oxygen Loader | wird angenommen | ⏳ |
| 19 | Laden ohne Energizer | Jet Suit oder Etrionic Capacitor in IE Charging Station und an Mekanism Energy Cube | lädt → Energizer kann entfallen | ⏳ |
| 20 | Dichte Räume | Raum mit Oxygen Distributor; IE-Leitung (Feedthrough Insulator) und Mekanism-Kabel hineinführen | bleibt dicht, oder notieren, was undicht macht | ⏳ |
| 21 | Schutz der Anzüge | Mond, Merkur, Venus mit Space Suit und Netherite Space Suit | notieren, was wo reicht | ⏳ |
| 22 | Werkzeug-Abschwächung | Zinnerz in Everbright mit Tinkers-Spitzhacke und mit Blue-Skies-Werkzeug abbauen | Zeiten notieren | ⏳ |
| 23 | Everdawn-Zugang | prüfen, ob Everdawn sofort erreichbar ist | ja oder nein notieren | ⏳ |
| 24 | Galaxy in a Cube | Rezepte der Lichtschwerter und Kristalle in JEI ansehen | notieren (für das Rezept Kyber-Erz → Kristall) | ⏳ |

### Runde 4 — Weltkopie (erst nach Runde 1 und 2)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 25 | Retrogen | Weltkopie `3_ Versuch von 1,5` öffnen, bekannte Gegend unter Tage ansehen | Osmium, Uran, Fluorit, Salz, wenig Blei sind nachgeneriert; kein Zinn; Ladezeit notieren | ⏳ |
| 26 | Ölförderung | Pumpjack an der alten Stelle neu formen | fördert aus dem alten Vorkommen | ⏳ |
| 27 | IE-Config der Weltkopie | `saves/3_ Versuch von 1,5/serverconfig/immersiveengineering-server.toml` | enthält noch die alten Werte; für den Test von Hand ersetzen | ⏳ |

### Runde 5 — Story-Technik (für `18_STORY.md`)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 28 | NPC ohne Sauerstoff | Easy NPC auf dem Mars ins Freie stellen, dann in einen abgedichteten Raum mit Oxygen Distributor | draußen nimmt er Schaden, drinnen nicht (sonst braucht es ein Skript) | ⏳ |
| 29 | NPC-Dialog mit Abgabe | Easy NPC mit Dialog, der ein Item verlangt und eines übergibt | klappt; notieren, ob ein FTB-Quest dadurch fortschreitet | ⏳ |
| 30 | NPC per Befehl | Figur aus einer gespeicherten Vorlage per Befehl erzeugen (Quest-Belohnung „Befehl“) | Figur erscheint am gewünschten Ort | ⏳ |
| 31 | Fracht in der Rakete | Rakete beladen, fliegen, landen | Inhalt kommt an oder nicht | ⏳ |
| 32 | Checkliste per KubeJS | eigene FTB-Quests-Aufgabe „Station auf dem Mars“ (Skript folgt) | Aufgabe wird nur mit allen Blöcken im Umkreis erfüllt | ⏳ |

### Noch ohne Testweg

- Blood-Magic-Ritual nur auf dem Merkur (braucht erst ein Skript).
- Blood-Smeltery: `forge:coins`, Hellforged-Flüssigkeiten.
- Zusammenspiel Star Wars Planets und Galaxy in a Cube (Liste in `17_STAR_WARS_1.20.1.md`).

## Regeln

- Experimente nur in der Testinstanz, nie in der alten 1.18.2-Instanz und nie in der Hauptwelt.
- Nach jedem Fehler: Log sichern (`logs/latest.log`, `logs/kubejs/server.log`), Befund hier und im Changelog eintragen.
- In die Hauptwelt geht nur, was hier ✅ hat.
