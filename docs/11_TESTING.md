# 11 — TESTING

> Stand 2026-10-12, Minecraft 1.20.1. Neu geschrieben beim Neustart der Analyse (Block E); die Fassung für 1.18.2 liegt im Git-Verlauf (Commit `9bf29d8`).

## Zweck

Was im Spiel geprüft werden muss, bevor etwas in die Hauptwelt geht, und was dabei herauskam.

## Testumgebung

- Testinstanz `…\ATLauncher\instances\Minecraft1201withForge` (98 JARs).
- 🟢 Am 2026-10-12 kopiert: `kubejs/data/`, `kubejs/server_scripts/`, `config/Mekanism/world.toml`, `config/blue_skies-common.toml`, `defaultconfigs/immersiveengineering-server.toml`. Sicherungen der zwei ersetzten Configs liegen daneben (`….vor-2026-10-12`).
- ⚠️ Mekanism-Retrogen ist in der Instanz jetzt eingeschaltet. Wer eine **vorhandene** Testwelt öffnet (auch die Weltkopie `3_ Versuch von 1,5`), löst dort Retrogen aus. Für Test 1 bis 8 deshalb eine **neue Welt** anlegen (Kreativmodus, Cheats an).
- Die IE-Erzwerte gelten nur für neu angelegte Welten (Datei in `defaultconfigs/`).

## Testplan

Ergebnis jeweils hier eintragen: ✅ bestanden, ❌ Fehler (mit Beschreibung), ⏳ offen.

### Runde 1 — Start und Skripte (neue Welt)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 1 | Spiel startet, neue Welt lädt | starten, Welt anlegen | kein Absturz | ⏳ |
| 2 | KubeJS-Skripte laden | `logs/kubejs/server.log` öffnen | keine Zeile mit `ERROR` zu `tag_fixes`, `ad_astra_regeln`, `excavator_adern` | ⏳ |
| 3 | `forge:sand` repariert | JEI: Verwendung von Sand ansehen; Log nach „Broken tags“ durchsuchen | Mekanism-Rezepte Sand → Kies vorhanden, keine Meldung | ⏳ |
| 4 | Ad-Astra-Rezepte entfernt | JEI: Coal Generator, Solar Panel, Compressor, Fuel Refinery, Water Pump, Kabel, Pipes | kein Herstellungsrezept | ⏳ |
| 5 | Platten über IE | JEI: Desh-, Ostrum-, Calorite-Platte | Rezept in der Metal Press | ⏳ |
| 6 | Oxygen Loader | JEI: Oxygen Loading | nur das Rezept mit Sauerstoff, keines mit Wasser | ⏳ |
| 7 | Excavator | JEI oder Mineral-Übersicht von IE | Cassiterite fehlt; Galena und Uraninite vorhanden | ⏳ |

### Runde 2 — Worldgen (neue Welt, Kreativ, Zuschauermodus zum Durchfliegen)

| Nr. | Test | Wie | Erwartet | Ergebnis |
|---|---|---|---|---|
| 8 | Overworld-Erze | unter Tage fliegen, JER-Anzeige | kein Zinn, kein IE-Blei, kein IE-Uran; Osmium wenig; Mekanism-Blei sehr selten; wenig Bauxit | ⏳ |
| 9 | Kyber-Kristalle | Overworld, mehrere Chunks unter Tage | keine `swgc:kyber_crystal` | ⏳ |
| 10 | Ölquellen von Ad Astra | Ozean absuchen oder `/locate structure ad_astra:oil_well` | keine gefunden | ⏳ |
| 11 | Everbright | Portal bauen, unter Tage | Zinn, Blei, Bauxit in Turquoise Stone; eigene Blue-Skies-Erze weiter vorhanden | ⏳ |
| 12 | Everdawn | wie oben | Osmium in Lunar Stone | ⏳ |
| 13 | Mond | `/execute in ad_astra:moon run tp ~ 100 ~` | Osmium in Mondgestein; kein Zinn | ⏳ |
| 14 | Mars, Merkur, Venus, Glacio | wie oben mit `ad_astra:mars`, `mercury`, `venus`, `glacio` | Mars: Fluorit. Merkur, Venus: Uran, Blei. Glacio: Osmium, Uran. Sonst keine Mekanism-Erze | ⏳ |
| 15 | Mengen | je Dimension einschätzen | passt zu „selten“ bzw. „häufig“; sonst Zahlen in `03_ERZGENERATION.md` anpassen | ⏳ |

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

### Noch ohne Testweg

- Blood-Magic-Ritual nur auf dem Merkur (braucht erst ein Skript).
- Blood-Smeltery: `forge:coins`, Hellforged-Flüssigkeiten.
- Zusammenspiel Star Wars Planets und Galaxy in a Cube (Liste in `17_STAR_WARS_1.20.1.md`).

## Regeln

- Experimente nur in der Testinstanz, nie in der alten 1.18.2-Instanz und nie in der Hauptwelt.
- Nach jedem Fehler: Log sichern (`logs/latest.log`, `logs/kubejs/server.log`), Befund hier und im Changelog eintragen.
- In die Hauptwelt geht nur, was hier ✅ hat.
