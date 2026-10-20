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
| 5 | Platten über IE | JEI: Desh-, Ostrum-, Calorite-Platte | Rezept in der Metal Press | ✅ Etrium geprüft (2026-10-13): Ad Astra 1.15.21 enthält Etrium-Barren, -Platte, -Nugget, -Stab und -Blöcke als Items, aber im JAR kein einziges Rezept, das sie herstellt oder verbraucht. Das ist der Zustand des Mods, nicht unser Eingriff. 🟢 Entschieden (User, 2026-10-19): Etrium wird Rumpfmetall von T5, Legierung im Arc Furnace (`15_RAUMFAHRT.md`, Abschnitt „Etrium“) |
| 6 | Oxygen Loader | JEI: Oxygen Loading | nur das Rezept mit Sauerstoff, keines mit Wasser | ✅ |
| 7 | Excavator | JEI oder Mineral-Übersicht von IE | Cassiterite fehlt; Galena und Uraninite vorhanden | ✅ |
| 7a | Refined Obsidian nur Mekanism (`crossmod/tinkers_legierungen.js`) | JEI: Rezepte von Refined Obsidian | kein Legierungsrezept der Schmelzerei | ✅ 2026-10-17 (User) |
| 7b | Life Essence nur am Altar (`crossmod/blood_smeltery.js`) | JEI: Rezepte von Life Essence | kein Legierungsrezept der Schmelzerei | ✅ 2026-10-17 (User) |
| 7c | Slates und Runen nur am Altar (`crossmod/blood_smeltery.js`) | JEI: Blank Slate, Blank Rune | kein Rezept am Gießtisch oder im Gießbecken | ✅ 2026-10-17 (User) |

### Runde 2 — Worldgen (neue Welt, Kreativ, Zuschauermodus zum Durchfliegen)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 8 | Overworld-Erze | unter Tage fliegen, JER-Anzeige | kein Zinn, kein IE-Blei, kein IE-Uran; Osmium wenig; Mekanism-Blei sehr selten; wenig Bauxit | ✅ 2026-10-17 nach Korrektur der Config: Uran 10,4, Osmium 16,4, Blei 11, kein Zinn/IE-Blei/IE-Uran. Vorher: 🟡 2026-10-13, ausgezählt mit `tools/ErzZaehler.java` (870 Chunks der Welt `New World (3)`, Vergleich: zwei Welten mit Standardwerten). Blöcke pro Chunk, Standard → jetzt: Zinn 82 → 0 ✅; IE-Blei 11 → 0 ✅; IE-Uran 7,6 → 0 ✅; Mekanism-Blei 42 → 11; Osmium 46 → 24; Mekanism-Uran 37 → 48; Fluorit 46 → 47; Bauxit 1,8–3,3 → 2,6 (wegen der Geländehöhe nicht aussagekräftig). Damals war Uran häufiger als Osmium; mit der Korrektur angepasst und vom User bestätigt (2026-10-18). |
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
| 32 | Checkliste per KubeJS | – | – | entfällt (O22, 2026-10-20): Quest-Checkliste mit Items, die Stage setzt der User per Befehl, wenn alle drei in der Station sind |

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

### Runde 8 — Skripte für Teil 1 (2026-10-20)

🟢 Dateien am 2026-10-20 in die Testinstanz kopiert (Sicherungen: `config/alexsmobs.toml.vor-2026-10-20`, `kubejs/jei_ausblenden.js.vor-2026-10-20`). Vor dem Test das Spiel **neu starten** (Startup-Skripte und eigene Items laden nur beim Start). Neue Welt für Test 54, sonst die bisherige Testwelt.

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 42 | Skripte laden | `logs/kubejs/startup.log`, `server.log`, `client.log` | keine Zeile mit `ERROR` zu den neuen Dateien; in `server.log` die Zeile „ie_crusher_uebernimmt.js: … Rezepte“ | ✅ 2026-10-20. Erster Start: alle Skripte geladen (Startup 3/3, Server 12/12, Client 3/3, 0 Fehler). Zwei Fehler gefunden und behoben: 5 von 220 IE-Crusher-Rezepten scheiterten (Listen als Eingabe, Eingabemenge 2; jetzt geteilt bzw. ausgelassen), Steuerkerne ohne Textur (jetzt `minecraft:block/redstone_torch`). Die 86 „Failed to parse recipe“-Warnungen kommen aus den KubeJS-Addons und gab es schon vorher (172 am 2026-10-17). Zweiter Start (10:28): 0 Fehler, 228 IE-Crusher-Rezepte angelegt, 1 ausgelassen; nur noch das bekannte Rezept aus Alex's Delight scheitert, keine fehlenden Texturen ✅ |
| 43 | Eigene Items | JEI nach „Strahlenschutz“, „Relikt“, „Steuerkern“, „Bauplan“ durchsuchen | deutsche Namen, Tooltips; Baupläne zeigen ihr Rezept | 🟡 2026-10-20 (User): Items und Tooltips da. Änderungswünsche umgesetzt (Fassung 2): Baupläne sind jetzt öffenbare Bücher mit Beschreibung und Rezept (`/bauplan <name>`), dazu Baupläne für B-1, B-2 und Droideka (schalten das Rezept des Steuerkerns frei); alle Bauplan-Rezepte und die Droiden stark verteuert; Steuerkerne mit eigener Textur statt Redstone-Fackel. Zweite Runde (User): Rezepte passen; Wunsch nach Rezept-Bildern wie in Mod-Büchern → Fassung 3: Baupläne sind Patchouli-Bücher mit dem Rezept als Bild. Dritte Runde (User): Bücher da, Beschreibung links, aber das Verzeichnis leer. Ursache: Patchouli liest bei Büchern aus `patchouli_books/` auch den Inhalt nur von dort, nicht aus `kubejs/assets`. Kategorien und Einträge verschoben. Wunsch des Users: alles in einem Buch, Abschnitte beim Kauf freischalten → Fassung 4: ein Buch, gesperrte Einträge, Bauplan-Seiten als Ware. Erneut prüfen |
| 44 | Triebwerke | JEI: Steel, Desh, Ostrum, Calorite Engine | je ein Control Circuit der Stufe (Basic, Advanced, Elite, Ultimate); Calorite Engine zusätzlich mit Galaktischem Strahlenschutz | ✅ 2026-10-20 (User) |
| 45 | Tanks | JEI: Desh, Ostrum, Calorite Tank | je 2 Ventium, Imbued Slate bzw. Elementium; Steel Tank unverändert | ✅ 2026-10-20 (User) |
| 46 | Rover-Treibstoff | Rover mit Biodiesel und mit Diesel betanken | nur Biodiesel geht | ✅ 2026-10-20 (User): nur Biodiesel geht |
| 47 | Ritual nur auf dem Merkur (geändert durch F27) | Kreativ: „Pathway to the Endless Realm“ (Altar-Stufe 4, 150 000 LP) in der Overworld aktivieren, dann auf dem Merkur; zusätzlich „Edge of the Hidden Realm“ in der Overworld | Pathway: Overworld Abbruch mit roter Meldung, Merkur startet. Edge of the Hidden Realm: startet überall (Mini-Dungeon ohne Story, F27) | ❌ 2026-10-20 (User): Aktivierung ging nirgends, keine Meldung. Ursache im Log: Das Skript rief `dimension()` als Funktion auf (in KubeJS ein Feld), die Ausnahme brach jede Aktivierung ab. Fassung 2: Dimension robust gelesen, Fehler im Handler lassen das Ritual durch. Zweite Runde (User): Ritual ging überall (getestet mit Edge of the Hidden Realm; das ist nach F27 jetzt so gewollt). Ursache im Log: Rhino meldet bei `const` im `try`-Block „redeclaration of var“, der Handler ließ deshalb alles durch. Fassung 3 mit `var`. Erneut prüfen (Overworld: rote Meldung; Merkur: startet) |
| 48 | Amulett beim Betreten | Überlebensmodus; Weg in die Altar-Dimension (über beide Rituale, O39) ohne Charm, mit Charm nur im Inventar, mit Charm im Curios-Slot | nur mit Charm im Curios-Slot hinein, sonst rote Meldung. Falls man ohne Charm doch hineinkommt: notieren (dann löst Blood Magic das Forge-Ereignis nicht aus, und es braucht einen anderen Weg) | ❌ 2026-10-20 (User): ohne Amulett hinein. Gleiche Ursache wie Test 47 (Log: „redeclaration of var entity“); das Ereignis selbst kommt bei der Blood-Magic-Teleportation an. Fassung 3, erneut prüfen |
| 49 | Truhe des Meisters | im Endless Realm (über Pathway to the Endless Realm, F27) in `bloodmagic:dungeon`: `/setblock ~ ~ ~1 minecraft:chest{LootTable:"ieplus:chests/meister_truhe"}` und öffnen | Relikt und „Tagebuch des Meisters“ (Platzhaltertext) | ⏳ |
| 50 | AE2 | JEI: ME Controller, ME Drive, Vibration Chamber, Crystal Resonance Generator | Controller und Drive mit Advanced Control Circuit und Stahlplatten; die beiden Generatoren nicht in JEI, kein Rezept | ⏳ |
| 51 | Entfernt | JEI: Digital Miner, Plastic Plate; Rakete T3 per `/give` ins Inventar | beide nicht in JEI; kein Star Manual | ⏳ |
| 52 | IE-Crusher | JEI: Rezepte des IE-Crushers, z. B. Osmium-Barren, Bio Fuel aus Pflanzen, Clump → Dirty Dust | vorhanden; keine Meldungen über doppelte Rezepte im Log | ⏳ |
| 53 | Shop-Waren und Baupläne | Werkbank: Credits aus Kupfer, Plastoid, Durasteel; Assembly Bench nach dem Muster legen; `/bauplan assembly_bench`, Rolle in die Luft rechtsklicken, Assembly Bench erneut legen; zweite Rolle derselben Sorte rechtsklicken; Buch öffnen; zweiter Spieler; neu einloggen; `/bauplan droide_b1` lesen, Steuerkern B-1 bauen, B-1 im Droid Fabricator mit und ohne Kern; zum Schluss `/bauplan zuruecksetzen` | keine Credits, kein Plastoid, kein Durasteel; alle Rollen sehen gleich aus; Rechtsklick: Rolle weg, Buch (nur beim ersten Mal), eine Meldung, Eintrag Assembly Bench offen mit Rezeptbild, Rezept geht, auch für den zweiten Spieler und nach dem Neustart; zweite gleiche Rolle bleibt, nur Meldung; nach Zurücksetzen alle Einträge zu und Rezepte gesperrt | ✅ 2026-10-20 (User), Fassung 6 geprüft. Vorher ❌: Chat voller „Diesen Bauplan habt ihr schon“, bis die Seite weggeworfen wird; die Seite verschwand nicht (`shrink` wirkte nur auf eine Kopie). Fassung 5: Seite einen Tick später per `/clear` entfernt, Meldungen nur, wenn wirklich eine Seite entfernt wurde. Fassung 6 (Wunsch des Users): Freischalten per Rechtsklick statt beim Erhalt, alle Rollen gleich, Befehl zum Zurücksetzen. Erneut prüfen (Neustart nötig, neue Textur) |
| 54 | Galaxy in a Cube in der Overworld | neue Welt; `/locate structure swgc:ewok_village`; Wüste absuchen | kein Ewok-Dorf, keine Jawas | ⏳ |
| 55 | Airship und Transmutation | JEI: Airship; `config/alexsmobs.toml` | Airship mit 2 Stahlplatten; `limitTransmutingToLootTables = true` | ⏳ |
| 56 | Kryo-Raketentreibstoff | JEI: Rezepte der IE Refinery; Flüssigkeit „Kryo-Raketentreibstoff“ | 10 Benzin + 10 Cryo Fuel → 10; eigene Flüssigkeit mit Eimer | ⏳ |
| 57 | Treibstoffe T4–T7 | Rakete T4 mit Kryo-Treibstoff und mit Kerosin betanken; Verbrauch beim Start ablesen; T5 mit flüssigem D-T-Gemisch; T6 mit beliebigem Treibstoff; Cryo Fuel in T1–T4 | T4 nur Kryo-Treibstoff, verbraucht 1 Eimer pro Start; T5 nimmt D-T-Gemisch; T6 nimmt nichts; Cryo Fuel nimmt keine Rakete | ⏳ |
| 58 | Truhe in der Station | `/reload`; im Endless Realm durch die Minen bis zu einer Station (großer Raum mit Gleisen, 32 × 41); alle Truhen öffnen. Schneller: `/loot give @s loot bloodmagic:chests/mines/smithy_loot` | genau eine Truhe enthält neben Erz, Werkzeug und Co. das Relikt und „Tagebuch des Meisters“; die anderen Truhen nicht | ✅ 2026-10-20 (User): funktioniert |
| 59 | Stahl, Bioethanol, Cryo Fuel | Neustart; JEI: R auf Stahlstaub; Suche „Bioethanol“; R auf Cryo-Fuel-Eimer | kein Metallurgic-Infuser-Rezept für Stahlstaub mehr (Crusher-Rezept aus Barren bleibt); Bioethanol weder als Eimer noch als Flüssigkeit sichtbar; Cryo Fuel zeigt eine Info-Seite | ✅ 2026-10-20 (User) |

### Noch ohne Testweg

- Blood-Smeltery: `forge:coins`, Hellforged-Flüssigkeiten.
- Nach der Umsetzung (Skripte fehlen noch): Beskar nur im starken Ofen, ergibt ein Nugget; Kyber nur über Galaxy in a Cube; mit T5 erscheint nur Endor auf der Karte; Machtfortschritt nur über Quests; T4-Treibstoff (F3).

## Regeln

- Experimente nur in der Testinstanz, nie in der alten 1.18.2-Instanz und nie in der Hauptwelt.
- Nach jedem Fehler: Log sichern (`logs/latest.log`, `logs/kubejs/server.log`), Befund hier und im Changelog eintragen.
- In die Hauptwelt geht nur, was hier ✅ hat.
