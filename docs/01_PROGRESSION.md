# 01 — PROGRESSION

> Stand 2026-10-12, Minecraft 1.20.1. Neu geschrieben beim Neustart der Analyse (Block C); die Fassung für 1.18.2 liegt im Git-Verlauf (Commit `9bf29d8`).

## Zweck

Die spielerische Entwicklung des Modpacks und die Abhängigkeiten zwischen den Mods.

## Leitprinzip

🟢 Die Progression ist keine lineare Leiter. Mehrere Pfade laufen parallel und kreuzen sich an definierten Punkten. Kein einzelner Pfad ersetzt alle anderen. Hauptziel ist die Raumfahrt bis zu den Star-Wars-Planeten.

## Grobe Zeitachse (Orientierung, kein Lock-System)

| Stufe | Schwerpunkt |
|---|---|
| P1 | Tinkers, grundlegende Materialverarbeitung |
| P2 | Immersive Engineering: Stahl, Biodiesel |
| P3 | Botania, Blood Magic, Everbright, erste Mekanism-Maschine, früher AE2-Storage-Layer |
| P4 | Petroleum, Terrasteel, Everdawn, Mekanism-Ausbau, **Rakete T1 (Mond)** |
| P5 | Blutaltar T4, Alfheim, Blue-Skies-Bosse, **Rakete T2 (Mars)** |
| P6 | Gaia und Alfsteel, **Rakete T3 (Merkur, Venus)** |
| P7 | Demon Dungeon auf dem Merkur, Nuklearkette, ME-System |
| P8 | **Rakete T4 (Glacio)** |
| P9 | **Star-Wars-Planeten** (Ziel) |

Die Stufen entsprechen den Spalten der Meilensteinkarte (`docs/meilensteine/`, 🟡 Entwurf mit 23 Meilensteinen).

## Parallele Pfade

### Pfad A — Handwerk / Tinkers
**Vanilla → Schmelzerei → bessere Werkzeuge → Spezialmaterialien**
- eigener Werkzeug- und Kampfpfad
- profitiert von Materialien anderer Pfade: Kobalt (Nether), Hellforged (Blood Magic), Desh, Ostrum, Calorite und Manasteel (über TCIntegrations)
- ⚠️ In Blue Skies sind Tinkers-Werkzeuge abgeschwächt, bis die Bosse besiegt sind (🟢 gewollte Hürde, 2026-10-12).

### Pfad B — Immersive Engineering / Petroleum
**Grundressourcen → IE-Maschinen → Stahl → Biodiesel → Pumpjack, Destillation, Hydrotreater → Diesel, Kerosin**
- industrielle Grundlage, bleibt auch nach Mekanism nötig (Metal Press für alle Raketenplatten)
- liefert die Treibstoffe der Raketenstufen T1 bis T3 und die Basis für T4
- Blei und Aluminium dafür liegen vor allem in Everbright

### Pfad C — Naturmagie / Botania
**Mana → Runen → Manasteel → Terrasteel → Elven Gateway, Elementium → Alfheim → Gaia → Alfsteel**
- weitgehend unabhängig von der Tech-Leiter
- liefert das Magie-Teil der Rakete T4 (🔵 Terrasteel oder Alfsteel)
- 🔵 aus 1.18.2 übernommen und für 1.20.1 nicht geprüft: MythicBotany ändert das Gaia-Rezept (`replaceGaiaRecipe`) und sperrt Alfheim hinter Mead of Kvasir (`lockAlfheim`)

### Pfad D — Blutmagie
**Life Essence → Blood Altar → Stufen T2 bis T4 → Rituale → Demon Dungeon**
- eigener Ressourcenfluss
- 🟡 Das Ritual zum Demon Dungeon gelingt nur auf dem Merkur; im Dungeon liegt ein Pflicht-Item für die Rakete T4 (Planet entschieden am 2026-10-12; 🔵 Item und technische Machbarkeit offen)
- Nebenquelle: Meteor-Rituale liefern Erze, auch Mekanism-Erze und Budding-Certus (🔵 lassen oder anpassen)

### Pfad E — Mekanism / High-Tech
**IE-Stahl → erste Maschinen mit Overworld-Osmium → Sauerstoff → Ausbau mit Zinn und viel Osmium → Chemie → Nuklearkette**
- bewusst später und teurer, nicht universell effizienter als IE
- Osmium: knapp in der Overworld, reichlich in Everdawn und auf dem Mond
- Zinn: nur in Everbright
- Uran: knapp in der Overworld, reichlich auf Merkur und Venus
- 🟢 Flüssiger Sauerstoff für die Raumfahrt kommt zwingend aus Mekanism

### Pfad F — AE2 / Logistik (zweistufig)
1. 🟢 **Früher Storage-Layer** (teuer, aber früh erreichbar): bestehende Kisten und Storage Drawers anbinden, zentral suchen.
2. 🟢 **Endgame-ME-System**: Storage Cells, Autocrafting, P2P, Applied Mekanistics.

Certus gibt es in 1.20.1 nur noch an Budding-Blöcken in Meteoriten, die Inscriber-Pressen ebenfalls. Die Meteoriten-Suche ist das natürliche Gate für beide Stufen.

### Pfad G — Blue Skies
**Gatekeeper → Zeal Lighter (8 Smaragde) → Everbright und Everdawn → Dungeons und vier Bosse**
- ersetzt den Twilight Forest als „Industrial Frontier“: Everbright liefert Zinn (nur dort), Blei und Bauxit, Everdawn Osmium
- Story-Dimension mit Easy-NPC-Figuren (Phase 7b)
- 🔵 Ob Everbright und Everdawn gleich früh erreichbar sind, ist nicht geprüft

Weitere Dimensionen ohne eigenen Pfad: Nether (Kobalt), Alfheim (Pfad C), Demon Dungeon (Pfad D), Wesley's Roguelike Dungeons (Spaß-Dungeons, keine Pflicht).

### Pfad H — Raumfahrt (Hauptziel)

| Stufe | Ziel | Rumpf | Treibstoff (🟢 2026-10-12) | Liefert |
|---|---|---|---|---|
| T1 | Mond | Stahl | Biodiesel (IE) | Desh, Osmium |
| T2 | Mars | Desh | entschwefelter Diesel (Petroleum) | Ostrum, Fluorit |
| T3 | Merkur, Venus | Ostrum | Kerosin (Petroleum) | Calorite, Uran, Blei; Zugang zum Demon Dungeon |
| T4 | Glacio, Star-Wars-Planeten | Calorite | eigener Raketentreibstoff (Kerosin plus Mekanism-Chemie) | Kyber, Beskar |

- 🟢 Energie, Treibstoff und Sauerstoff nur aus IE, Immersive Petroleum und Mekanism. Ad-Astra-Erzeuger, Kabel, Pipes und Water Pump werden entfernt (`15_RAUMFAHRT.md`).
- 🟢 T1 verlangt mindestens eine erste Mekanism-Maschine (über den Sauerstoff).
- 🟢 T4 verlangt Magie- und Uran-Komponenten sowie das Dungeon-Item. 🔵 Welche Teile genau, entscheidet der User später.
- 🔵 „Ad Astra: Rocketed“ (T5 bis T7) und eine Staffelung der Star-Wars-Planeten: später.

## Kreuzungspunkte statt linearer Gates

| Von | Nach | Was übergeben wird | Status |
|---|---|---|---|
| IE | Mekanism, AE2, Raumfahrt | Stahl, Platten, Biodiesel | 🟢 |
| Blue Skies (Everbright) | Mekanism, IE | Zinn, Blei, Bauxit | 🟢 |
| Blue Skies (Everdawn), Mond | Mekanism | Osmium in Menge | 🟢 |
| Mekanism | Raumfahrt | flüssiger Sauerstoff; Chemie für den T4-Treibstoff | 🟢 / 🔵 Rezept |
| Petroleum | Raumfahrt | Diesel (T2), Kerosin (T3, T4) | 🟢 |
| Raumfahrt (Merkur, Venus) | Mekanism | Uran in Menge für die Nuklearkette | 🟢 |
| Raumfahrt (Merkur) | Blood Magic | Ort für das Dungeon-Ritual | 🟡 |
| Blood Magic | Raumfahrt | Dungeon-Item für T4 | 🟡 |
| Botania | Raumfahrt | Magie-Teil für T4 | 🔵 welches |
| Mekanism (Nuklear) | Raumfahrt | Uran-Teil für T4 | 🔵 welches |
| Planeten | Tinkers | Desh, Ostrum, Calorite als Werkzeugmaterial | 🟢 im JAR vorgesehen |
| alle Pfade | AE2 | AE2 verbindet bestehende Produktion, statt sie zu ersetzen | 🟢 |

## Weltstand (Hauptwelt, 2026-10-07, noch 1.18.2)

| Pfad | Erreicht | Was der Wechsel ändert |
|---|---|---|
| A Tinkers | begonnen | Werkzeuge bleiben erhalten (User-Test) |
| B IE | Stahl, Biodiesel-Generator, Crusher, Lichtbogenofen, Pumpjack, Coker | alle Multiblöcke müssen neu geformt werden |
| C Botania | Runenaltar | funktioniert (User-Test) |
| D Blood Magic | nicht begonnen | – |
| E Mekanism | nicht begonnen | Erze kommen per Retrogen |
| F AE2 | nicht begonnen | vorhandenes Certus-Erz verschwindet |
| G Blue Skies | – | Twilight Forest entfällt samt Inhalt |
| H Raumfahrt | – | – |

Neue Gates dürfen bereits erreichten Fortschritt nicht rückwirkend sperren.

## Offen

1. 🔵 Magie- und Uran-Teile der Rakete T4.
2. 🔵 Soll Petroleum weiter Pflicht vor dem ersten Raumflug sein (Entscheidung vom 2026-10-07)? T1 fliegt jetzt mit Biodiesel.
3. 🔵 Ad Astra: Rocketed und Staffelung der Star-Wars-Planeten.
4. 🔵 Cryo Fuel: entfernen oder Zutat des T4-Treibstoffs.
5. 🔵 Meilensteinkarte als Ganzes bestätigen oder korrigieren (Reihenfolge, Pflicht oder optional).
6. 🔵 Kostenrahmen je Meilenstein (Phase 3).
