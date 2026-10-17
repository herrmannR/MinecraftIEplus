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
| 7a | Refined Obsidian nur Mekanism (`crossmod/tinkers_legierungen.js`) | JEI: Rezepte von Refined Obsidian | kein Legierungsrezept der Schmelzerei | ✅ 2026-10-17 (User) |
| 7b | Life Essence nur am Altar (`crossmod/blood_smeltery.js`) | JEI: Rezepte von Life Essence | kein Legierungsrezept der Schmelzerei | ✅ 2026-10-17 (User) |
| 7c | Slates und Runen nur am Altar (`crossmod/blood_smeltery.js`) | JEI: Blank Slate, Blank Rune | kein Rezept am Gießtisch oder im Gießbecken | ✅ 2026-10-17 (User) |

### Runde 2 — Worldgen (neue Welt, Kreativ, Zuschauermodus zum Durchfliegen)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 8 | Overworld-Erze | unter Tage fliegen, JER-Anzeige | kein Zinn, kein IE-Blei, kein IE-Uran; Osmium wenig; Mekanism-Blei sehr selten; wenig Bauxit | ✅ 2026-10-17 nach Korrektur der Config: Uran 10,4, Osmium 16,4, Blei 11, kein Zinn/IE-Blei/IE-Uran. Vorher: 🟡 2026-10-13, ausgezählt mit `tools/ErzZaehler.java` (870 Chunks der Welt `New World (3)`, Vergleich: zwei Welten mit Standardwerten). Blöcke pro Chunk, Standard → jetzt: Zinn 82 → 0 ✅; IE-Blei 11 → 0 ✅; IE-Uran 7,6 → 0 ✅; Mekanism-Blei 42 → 11; Osmium 46 → 24; Mekanism-Uran 37 → 48; Fluorit 46 → 47; Bauxit 1,8–3,3 → 2,6 (wegen der Geländehöhe nicht aussagekräftig). 🔵 Uran ist damit häufiger als Osmium und nicht knapp; Blei liegt etwa beim Diamanten (15). Werte bestätigen oder senken |
| 9 | Kyber-Kristalle | Overworld, mehrere Chunks unter Tage | keine `swgc:kyber_crystal` | ✅ 2026-10-13: 0 Kristalle in 870 Chunks (Standard: 49 in 841 Chunks) |
| 10 | Ölquellen von Ad Astra | Ozean absuchen oder `/locate structure ad_astra:oil_well` | keine gefunden | ✅ 2026-10-17 (User): mit `/locate` keine gefunden |
| 11 | Everbright | Portal bauen, unter Tage | Zinn, Blei, Bauxit in Turquoise Stone; eigene Blue-Skies-Erze weiter vorhanden | ✅ 2026-10-13, ausgezählt (400 Chunks, per `forceload` erzeugt): Zinn 35, Blei 37, Bauxit 33 Blöcke pro Chunk; eigene Erze vorhanden (Falsite 19, Ventium 19, Moonstone 110) |
| 12 | Everdawn | wie oben | Osmium in Lunar Stone | ✅ 2026-10-13, ausgezählt (400 Chunks): Osmium 36 pro Chunk; kein Zinn, Blei oder Bauxit. Horizonite nur 0,03 pro Chunk (biomgebunden, Standard des Mods) |
| 13 | Mond | `/execute in ad_astra:moon run tp ~ 100 ~` | Osmium in Mondgestein; kein Zinn | ✅ 2026-10-13, ausgezählt (400 Chunks): Osmium 67 pro Chunk; kein Zinn. Zum Vergleich Desh 51, Eisen 84 |
| 14 | Mars, Merkur, Venus, Glacio | wie oben mit `ad_astra:mars`, `mercury`, `venus`, `glacio` | Mars: Fluorit. Merkur, Venus: Uran, Blei. Glacio: Osmium, Uran. Sonst keine Mekanism-Erze | ✅ 2026-10-13, ausgezählt (je 400 Chunks): Mars Fluorit 30 (Ostrum 39). Merkur Uran 58, Blei 57. Venus Uran 60, Blei 60 (Calorite 39). Glacio Osmium 77, Uran 25. Keine anderen Mekanism-Erze, auch nicht die normalen Mekanism-Erze auf Glacio |
| 15 | Mengen | je Dimension einschätzen | passt zu „selten“ bzw. „häufig“; sonst Zahlen in `03_ERZGENERATION.md` anpassen | ✅ 2026-10-17: Alle Zielwerte in einer neuen Welt nachgezählt und getroffen (Overworld Uran 10,4, Osmium 16,4; Mond-Osmium 37,7; Merkur-Uran 24,4; Venus-Uran 39,2). Tabelle in `03_ERZGENERATION.md`, Abschnitt „Nachgezählt“ |

### Runde 3 — Raumfahrt und Blue Skies

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 16 | Treibstoff T1 bis T3 | Rakete betanken (Fuel Loader oder Eimer) | T1 nimmt nur Biodiesel, T2 nur entschwefelten Diesel, T3 nur Kerosin | ✅ 2026-10-17 (User): Die Tankregeln greifen, jede Stufe nimmt nur ihren Treibstoff |
| 17 | Verbrauch pro Start | Tankanzeige vor und nach dem Start | Menge notieren | ✅ 2026-10-17 (User): 3 Eimer pro Start auf jeder Stufe T1 bis T3, also 6 für Hin- und Rückflug |
| 18 | Sauerstoff | Mekanism-Sauerstoff (flüssig) in den Oxygen Loader | wird angenommen | ✅ 2026-10-17 (User): flüssiger Sauerstoff klappt |
| 19 | Laden ohne Energizer | Jet Suit oder Etrionic Capacitor in IE Charging Station und an Mekanism Energy Cube | lädt → Energizer kann entfallen | ✅ 2026-10-17 (User): lädt an beiden; Energizer entfernt (Skript) |
| 20 | Dichte Räume | Raum mit Oxygen Distributor; IE-Leitung (Feedthrough Insulator) und Mekanism-Kabel hineinführen | bleibt dicht, oder notieren, was undicht macht | ✅ 2026-10-17 (User): Mit den richtigen Blöcken bleibt der Raum dicht; Strom kommt über den IE Feedthrough Insulator oder einen Energiespeicher in Wand oder Boden hinein |
| 21 | Schutz der Anzüge | Mond, Merkur, Venus mit Space Suit und Netherite Space Suit | notieren, was wo reicht | ✅ 2026-10-17 (User): Glacio braucht keinen Anzug; alle anderen Ad-Astra-Planeten brauchen einen, dort reicht jeder (auch der einfache auf Merkur und Venus) |
| 22 | Werkzeug-Abschwächung | Zinnerz in Everbright mit Tinkers-Spitzhacke und mit Blue-Skies-Werkzeug abbauen | Zeiten notieren | ✅ 2026-10-17 (User): Mit fremdem Werkzeug unpraktisch, dauert ewig. Bleibt so gewollt: In Blue Skies muss man die neuen Werkzeuge benutzen |
| 23 | Everdawn-Zugang | prüfen, ob Everdawn sofort erreichbar ist | ja oder nein notieren | ✅ 2026-10-17 (User): ja, Everdawn ist sofort erreichbar (wie Everbright) |
| 24 | Galaxy in a Cube | Rezepte der Lichtschwerter und Kristalle in JEI ansehen | notieren (für das Rezept Kyber-Erz → Kristall) | ✅ 2026-10-17 (User): JEI zeigt nur die Werkbank-Rezepte (Klon-Rüstung Phase 2, Jedi, Sith, Royal Guard, Vader u. a.). Lichtschwerter, Kristalle, Droiden und bemalte Rüstungen wie die 501st fehlen; der Mod hat kein JEI-Plugin (Assembly Bench und Kyber-Färben im Code, Droiden über `swgc:fabrication`). Ad Astra zeigt alle 7 Raketen-Rezepte; die betankte Variante im Kreativmenü hat keins |

### Runde 4 — Weltkopie (erst nach Runde 1 und 2)

⚠️ Vor jedem Laden einer frischen Kopie der Hauptwelt: `saves/<Welt>/serverconfig/immersivepetroleum-server.toml` umbenennen oder löschen. Die Datei aus 1.18.2 nennt `immersivepetroleum:benzene`; der Server stürzt dann ab und das Spiel hängt (zuletzt 2026-10-17).

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 25 | Retrogen | Weltkopie `3_ Versuch von 1,5` öffnen, bekannte Gegend unter Tage ansehen | Osmium, Uran, Fluorit, Salz, wenig Blei sind nachgeneriert; kein Zinn; Ladezeit notieren | ✅ 2026-10-17: Mekanism meldet „Regenerating ores and salt“ für 821 Chunks rund um den Spawn, alle in 28 Sekunden beim ersten Laden (10:16:36–10:17:04), nur eine „Can't keep up“-Meldung. Auf diese 821 Chunks kommen pro Chunk: Uran 10,4, Osmium 16,6, Blei 10,4, Fluorit 46, Salz 2,1; kein Zinn. Gleiche Werte wie in einer neuen Welt. Retrogen läuft nur in Chunks, die geladen werden; die übrigen rund 48.500 erkundeten Chunks bekommen ihre Erze, sobald jemand hinkommt. Altes IE-Blei und -Uran bleibt in den alten Chunks liegen (wie geplant) |
| 26 | Ölförderung | Pumpjack an der alten Stelle neu formen | fördert aus dem alten Vorkommen | ✅ 2026-10-17 (User): An derselben Stelle liegt weiterhin ein Ölreservoir, der neu gebaute Pumpjack fördert dort; das Vorkommen von Immersive Petroleum übersteht den Wechsel auf 1.20.1 |
| 27 | IE-Config der Weltkopie | `saves/3_ Versuch von 1,5/serverconfig/immersiveengineering-server.toml` | enthält noch die alten Werte; für den Test von Hand ersetzen | ✅ 2026-10-17: unsere IE-Serverconfig in die Weltkopie gelegt (alte Datei als `.1182-alt` daneben) |

### Runde 5 — Story-Technik (für `18_STORY.md`)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 28 | NPC ohne Sauerstoff | Easy NPC auf dem Mars ins Freie stellen, dann in einen abgedichteten Raum mit Oxygen Distributor | draußen nimmt er Schaden, drinnen nicht (sonst braucht es ein Skript) | ✅ 2026-10-17 (User): draußen Schaden, drinnen keiner; die Luft-Regel gilt für Easy NPC ohne Skript |
| 29 | NPC-Dialog mit Abgabe | Easy NPC mit Dialog, der ein Item verlangt und eines übergibt | klappt; notieren, ob ein FTB-Quest dadurch fortschreitet | ✅ 2026-10-17 (User), nach zwei Bedienfehlern: Abgabe, Übergabe und Stage-Quest funktionieren. Ein Knopf mit Bedingung bleibt sichtbar und ist nur klickbar, wenn die Bedingung erfüllt ist. Die Bedingung „Item in der Hand“ prüft Haupt- und Nebenhand, „Item im Inventar“ das ganze Inventar. In der Stage-Aufgabe von FTB Quests gehört der Name ins Feld **Stage**, nicht ins Feld „Tags“ (das ist nur eine Markierung der Quest). |
| 29a | Bedingung Inventar | wie 29, Bedingung „Item im Inventar“, Eisen nur im Inventar | Knopf klickbar, ohne das Eisen in der Hand zu halten | ✅ 2026-10-17 (User) |
| 29b/c | Stage per Befehl und aus dem Dialog | Quest mit Stage-Aufgabe; `/kubejs stages add …`, `/tag … add …`, Befehl im Dialogknopf | Quest wird erfüllt | ✅ 2026-10-17 (User), nach Korrektur des Felds Stage |
| 30 | NPC per Befehl | Figur aus einer gespeicherten Vorlage per Befehl erzeugen (Quest-Belohnung „Befehl“) | Figur erscheint am gewünschten Ort | ✅ 2026-10-17 (User): Import klappt, auch in eine andere Dimension per `/execute in <dimension> run easy_npc preset import …` (der Befehl selbst hat keine Angabe für die Dimension). `easy_npc despawn` lässt die Figur verschwinden; zurück holt sie `easy_npc spawn`, nicht `respawn` |
| 31 | Fracht in der Rakete | Rakete beladen, fliegen, landen | Inhalt kommt an oder nicht | ✅ 2026-10-17 (User): jede Rakete hat 8 Plätze, der Inhalt bleibt beim Flug erhalten |
| 32a | Stage-Brücke | Quest mit Stage-Aufgabe `mars_station`; `/kubejs stages add @s mars_station` | Quest wird erfüllt | ✅ 2026-10-17 (User): der geplante Weg (KubeJS prüft die Station und setzt eine Stage) trägt, FTB XMod Compat ist nicht nötig |
| 32 | Checkliste per KubeJS | eigene FTB-Quests-Aufgabe „Station auf dem Mars“ (Skript folgt) | Aufgabe wird nur mit allen Blöcken im Umkreis erfüllt | ⏳ Skript fehlt, braucht die Blockliste (O22) |

### Runde 6 — Ideenimport (2026-10-17)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 33 | Macht gesperrt | neue Welt, `/gamerule forceObtainment false`; XP sammeln, Zivilisten (`swgc:civilians`) töten | kein Machtfortschritt; notieren, was die Regel genau abschaltet | ⏳ |
| 34 | Machtpunkte per Befehl | Befehle von Galaxy in a Cube suchen (Tab-Vervollständigung) | Punkte hell/dunkel lassen sich gezielt setzen → als Quest-Belohnung „Befehl“ nutzbar | ⏳ |
| 35 | Mob-Stärke | Overworld, Blue Skies, Wesley's-Dungeons, Planeten mit typischer Ausrüstung der Stufe | „schwer, aber fair“; Eindruck je Gebiet notieren | ⏳ |
| 36 | AE2 ohne Generatoren | nach dem Entfernen von Vibration Chamber und Crystal Resonance Generator JEI ansehen | kein Rezept fehlt, das eine der beiden als Zutat braucht | ⏳ |
| 37 | Mekanism-Maschinen grob | Grundmaschinen bis Elite in JEI und kurz im Spiel | keine Rezeptkonflikte, keine fehlenden Eingaben, keine Umgehung der Progression | ⏳ |
| 38 | Star Wars Planets und Galaxy in a Cube | beide Mods, Planeten besuchen | läuft zusammen; Dopplungen notieren (Liste in `17_STAR_WARS_1.20.1.md`) | ⏳ |
| 39 | Blue-Skies-Haus | Struktur mit den Portalen suchen | Name der Struktur und des Guard notieren (für T11 in `18_STORY.md`) | ⏳ |

### Runde 7 — Questtexte Botania (2026-10-17)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 40 | Alfheim-Sperre | Elfenportal öffnen und ohne Mead of Kvasir hineingehen; dann Met trinken (`mythicbotany:kvasir_mead`, Kreativ) und erneut | ohne Met kein Durchgang, mit Met nach Alfheim (`lockAlfheim`); sonst BO5-02/BO6-01 in `questtexte/botania.md` anpassen | ⏳ |
| 41 | Gaia-Pylon-Rezept | `botania:gaia_pylon` in JEI ansehen | nur das Rezept über den Alfsteel Pylon (MythicBotany `replaceGaiaRecipe`); gilt das Botania-Original, liegt Gaia nicht hinter Alfsteel (Ü P1) | ⏳ |

### Noch ohne Testweg

- Blood-Magic-Ritual nur auf dem Merkur (braucht erst ein Skript).
- Blood-Smeltery: `forge:coins`, Hellforged-Flüssigkeiten.
- Nach der Umsetzung (Skripte fehlen noch): IE-Crusher deckt die Rezepte des Mekanism-Crushers ab; Digital Miner entfernt; Plastic Plate entfernt; Beskar nur im starken Ofen, ergibt ein Nugget; Kyber nur über Galaxy in a Cube; Star Manual kommt nicht an; mit T5 erscheint nur Endor auf der Karte; Machtfortschritt nur über Quests.

## Regeln

- Experimente nur in der Testinstanz, nie in der alten 1.18.2-Instanz und nie in der Hauptwelt.
- Nach jedem Fehler: Log sichern (`logs/latest.log`, `logs/kubejs/server.log`), Befund hier und im Changelog eintragen.
- In die Hauptwelt geht nur, was hier ✅ hat.
