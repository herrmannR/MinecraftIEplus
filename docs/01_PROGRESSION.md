# 01 — PROGRESSION

> Stand 2026-10-12, Minecraft 1.20.1. Neu geschrieben beim Neustart der Analyse (Block C); die Fassung für 1.18.2 liegt im Git-Verlauf (Commit `9bf29d8`).

## Zweck

Die spielerische Entwicklung des Modpacks und die Abhängigkeiten zwischen den Mods.

## Leitprinzip

🟢 Die Progression ist keine lineare Leiter. Mehrere Pfade laufen parallel und kreuzen sich an definierten Punkten. Kein einzelner Pfad ersetzt alle anderen. Hauptziel ist die Raumfahrt bis zu den Star-Wars-Planeten.

## Kapitel (Orientierung, kein Lock-System)

Die Karte (`meilensteine/`, Artifact-Seite) ist am 2026-10-14 feiner aufgeteilt worden: 16 Kapitel, 51 Meilensteine mit Kürzeln je Pfad (TK, IE, BO, BM, MK, AE, BS, RF, SW), je Mod mehrere Stufen nach den Modpfad-Seiten. Jede Zeile wird ein Kapitel im Questbuch; die Kapitelnamen sind Arbeitstitel.

| Kapitel | Progression | Story |
|---|---|---|
| **Part 1 · Finden des Meisters** | | |
| K1 Ankunft | Tinkers: Werkzeuge und Melter · IE: Koks und erster Stahl · Botania: Blüten und Lebendholz | Einschlag der Kapsel |
| K2 Würdig sein | Smeltery · IE: Strom und Förderbänder · Mana und Manasteel | Droide, „Würdig sein“ (SW1), Questbuch |
| K3 Industrie | IE: Schwermaschinen und Biodiesel · Runenaltar · Blutaltar · Mekanism: Infuser und Sauerstoff · AE2: Storage-Layer · Everbright | – |
| K4 Der Mond | Erdöl und Destillation · Mekanism-Grundmaschinen · Everdawn · **Rakete T1** | erstes großes Ziel; Einsiedler (SW2): Questbuch, Credits und Shop; Mond abgeschirmt, Hinweis auf den Mars |
| K5 Erzketten | Alloyer und Foundry · entschwefelter Diesel · Altar T3 und Soul Forge · Mekanism Advanced · Bosse in Everbright | offen |
| K6 Der Mars | IE-Großindustrie · Terrasteel · Bosse in Everdawn · **Rakete T2** | Signale von der Erde zu schwach |
| K7 Horchposten | Planetenmetalle gießen · Altar T4 und Rituale · Mekanism Elite und Chemie | Mars-Station (SW3), der Droide zieht auf den Mars |
| K8 Hitze | **Rakete T3** | der zerstörte Tempel |
| K9 Der Tempel | Tempel und Dungeon (BM4) · Kernkraft · ME-System | Meister entkommen, Droide fällt aus, Text des Meisters |
| K10 Der Elf | Elfenportal (BO5) · Mekanism Ultimate und Teleportation | Elf; Boss-Items und Tech-Erzeugnisse |
| K11 Glacio | **Rakete T4** (RF4) | Barriere, Meister gefunden und in die Overworld zurückgebracht; Ende von Part 1 |
| **Part 2 · Ausbildung zum Jedi und Vorbereitung T5** (wird später besprochen) | | |
| K12 Ausbildung | Altar T5 · Alfheim betreten · Fusion | Ausbildung beim Meister (SW4) |
| K13 Die Prüfung | Gaia · SPS und Antimaterie · AE2-Quantenbrücke · **Rakete T5** | Gaia als Prüfung; Rakete T5 fertig, Ende von Part 2 |
| **Part 3 · Rückkehr in die weit, weit entfernte Galaxis** (wird später besprochen) | | |
| K14 Endor | Altar T6 · **Rakete T6** | Ankunft auf Endor, Basis des Meisters; sonst offen |
| K15 Star-Wars-Welten | Meka-Ausrüstung und QIO | Bosse, Kopfgeldjagd, Lichtschwerter (SW5) |
| K16 Mandalore | **Rakete T7** | offen |

Vorschlag für die Mekanism-Stufe je Rakete (der User legt fest): T1 Basic, T2 Advanced, T3 Elite, T4 Ultimate, T5 Fusion, T6 SPS und Antimaterie, T7 offen.

## Parallele Pfade

### Pfad A — Handwerk / Tinkers
**Vanilla → Schmelzerei → bessere Werkzeuge → Spezialmaterialien**
- eigener Werkzeug- und Kampfpfad
- profitiert von Materialien anderer Pfade: Kobalt (Nether), Hellforged (Blood Magic), Desh, Ostrum, Calorite und Manasteel (über TCIntegrations)
- 🟢 Tinkers wird in die höheren Stufen eingebunden (2026-10-12): seltene Flüssigkeiten als Zutat, aufgewertete Planeten-Metalle, eigene Materialien, Modifier gegen späte Items, Gießen als Pflichtschritt. Einzelheiten und offene Punkte: `07_CROSSMOD_INTEGRATION.md`.
- ⚠️ In Blue Skies sind Tinkers-Werkzeuge abgeschwächt, bis die Bosse besiegt sind (🟢 gewollte Hürde, 2026-10-12).

### Pfad B — Immersive Engineering / Petroleum
**Grundressourcen → IE-Maschinen → Stahl → Biodiesel → Pumpjack, Destillation, Hydrotreater → Diesel, Kerosin**
- industrielle Grundlage, bleibt auch nach Mekanism nötig (Metal Press für alle Raketenplatten)
- liefert die Treibstoffe der Raketenstufen T1 bis T3 und die Basis für T4
- Blei und Aluminium dafür liegen vor allem in Everbright

### Pfad C — Naturmagie / Botania
**Mana → Runen → Manasteel → Terrasteel → Elfenportal, Elementium → (Part 2:) Alfheim → Gaia → Alfsteel**
- 🟢 Story (2026-10-13): Mana ist die „lebendige Macht“, das helle Gegenstück zu Blood Magic. Das Elfenportal wird in Part 1 nur gebaut und für den Handel genutzt; betreten wird Alfheim erst in Part 2, Gaia ist dort eine Prüfung des Meisters.
- liefert ein Schutz-Item für den Altar im Tempel (🔵 Rune oder Terrasteel) und die magischen Komponenten der Rakete T4 (🔵 Item aus dem Elfenportal oder Terrasteel; Alfsteel entfällt für T4)
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
| T4 | Glacio | Calorite | eigener Raketentreibstoff (Kerosin plus Mekanism-Chemie), deutlich aufwendiger | Fund des Meisters |
| T5 | Endor | 🔵 Material aus Alfheim | 🔵 | Kyber |
| T6 | Tatooine, Hoth, Mustafar | 🔵 (Kyber von Endor ?) | 🔵 | Kyber |
| T7 | Mandalore | 🔵 | 🔵 | Beskar |

🟢 **Vier Hürden je Rakete** (User, 2026-10-14): (1) Rumpf aus dem Metall des zuletzt erreichten Ortes, (2) neuer Treibstoff, (3) neue Mekanism-Stufe (Schaltkreise, Legierungen), (4) ein Teil aus einem anderen Pfad. T3 braucht ein Teil aus Blood Magic (der Tempel schirmt den Planeten ab). 🔵 Welche Mekanism-Stufe und welche Botania-Items zu welcher Rakete gehören, legt der User fest.

Erzprüfung (2026-10-14): Bis T4 liegt jedes Rumpf-Metall auf dem Planeten davor; Zinn (Everbright, P3), Osmium (Everdawn, Mond), Fluorit (Overworld, Mars) und Uran (Merkur, Venus) sind rechtzeitig da. Glacio hat kein eigenes Metall, daher kommt der Rumpf von T5 aus Alfheim. Kyber liegt auf Endor und steht damit für T6 bereit; Beskar (nur Mandalore) wird für keine weitere Stufe gebraucht.

- 🟢 Energie, Treibstoff und Sauerstoff nur aus IE, Immersive Petroleum und Mekanism. Ad-Astra-Erzeuger, Kabel, Pipes und Water Pump werden entfernt (`15_RAUMFAHRT.md`).
- 🟢 T1 verlangt mindestens eine erste Mekanism-Maschine (über den Sauerstoff).
- 🟢 T4 (2026-10-13): Das Rezept gibt der Elf, nachdem er Boss-Items aus Blue Skies und Erzeugnisse der Tech-Mods erhalten hat. Die Rakete braucht magische Komponenten. 🔵 Welche Items genau; ob Uran-Teil und Dungeon-Item Pflicht bleiben.
- 🟢 „Ad Astra: Rocketed“ bleibt: T5 nur Endor, T6 die übrigen Star-Wars-Welten außer Mandalore, T7 Mandalore (2026-10-14). 🔵 Rezepte und flüssige Treibstoffe in Part 2 und 3.

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
| Botania | Raumfahrt | magische Komponenten für T4 (Item aus dem Elfenportal ?) | 🔵 welches |
| Botania | Blood Magic | Schutz-Item für den Altar im Tempel | 🔵 welches |
| Blue Skies (Bosse) | Botania (Elf), Raumfahrt | Boss-Items, damit der Elf den Meister ortet | 🔵 welche |
| Story (Droide) | alle Pfade | erste Quest „Würdig sein“: Items aus Botania, IE und weiteren Mods | 🔵 welche |
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

0. Der vollständige Fragenkatalog steht auf der Meilensteinkarte und in `18_STORY.md`.
1. 🔵 Magische Komponenten der Rakete T4; ob Uran-Teil und Dungeon-Item Pflicht bleiben.
2. 🔵 Soll Petroleum weiter Pflicht vor dem ersten Raumflug sein (Entscheidung vom 2026-10-07)? T1 fliegt jetzt mit Biodiesel.
3. 🟡 Ad Astra: Rocketed bleibt (User, 2026-10-13): Die Star-Wars-Planeten verlangen mindestens T5 und T6; T4 führt nur noch nach Glacio. 🔵 Offen: welcher Planet auf welcher Stufe, Rezepte und Treibstoffe (Part 2 und 3).
4. 🔵 Cryo Fuel: entfernen oder Zutat des T4-Treibstoffs.
5. 🔵 Meilensteinkarte als Ganzes bestätigen oder korrigieren (Reihenfolge, Pflicht oder optional).
6. 🔵 Kostenrahmen je Meilenstein (Phase 3).
