# Questtexte je Mod

Beschreibende Texte für FTB Quests, je Mod eine Datei. Erstellt mit dem Skill `questtexte` (`.claude/skills/questtexte/SKILL.md`). Reine Sachtexte; die Story schreibt der User.

Erklärtiefe nach `../19_HILFEBUECHER.md`: **ohne Buch** führen die Texte Schritt für Schritt, **mit Buch** nennen sie Ziel und Fundstelle im Buch und erklären nur, was das Pack ändert.

| Mod | Datei | Art | Stand |
|---|---|---|---|
| Mekanism + Generators | `mekanism.md` | ohne Buch, voll | 🟡 Entwurf 2026-10-17; Multiblock-Bauregeln 🔵 im Spiel prüfen |
| Immersive Engineering + Petroleum | `ie.md` | mit Buch (Engineer's Manual), kurz | 🟡 Entwurf 2026-10-17; O31 und Petroleum vor T1 offen |
| Botania + MythicBotany | `botania.md` | mit Buch (Lexica Botania), kurz | 🟡 Entwurf 2026-10-17; Weg zum Mead of Kvasir und Gaia-Pylon-Rezept offen |
| Star Wars: Galaxy in a Cube | `swgc.md` | ohne Buch, voll; mit Rezeptanhang (Assembly Bench, Droid Fabricator, Kyber färben) | 🟡 Entwurf 2026-10-17; hängt an den Bauplan-, Steuerkern- und Macht-Entscheidungen |
| Ad Astra + Giselle Addon, More Structures, Rocketed | `adastra.md` | mit Buch (Astrodux), kurz; Addons ohne Buch knapp erklärt | 🟡 Entwurf 2026-10-17; Rezepte und Treibstoffe T4–T7, Cryo Freezer, Boss-Mobs offen |
| Wesley's Roguelike Dungeons | `rld.md` | ohne Buch, voll; Nebenquest-Reihe in fünf Stufen (WD1–WD5) | 🟡 Entwurf 2026-10-17; hängt an O35 (welche Stufen Pflicht) |
| Immersive Aircraft + iaie | `aircraft.md` | ohne Buch, voll; Nebenquest-Reihe (IA1–IA5) | 🟡 Entwurf 2026-10-17; Freischaltung und Umfang der Reihe offen |
| Alex's Mobs + Alex's Delight | `alexsmobs.md` | mit Buch (Animal Dictionary, ein Eintrag je Tier), kurz; sieben Nebenquest-Reihen (AM1–AM7) | 🟡 Entwurf 2026-10-18; Transmutation Table gegen Erz-Gating offen |
| Applied Energistics 2 + Wireless Terminals, Applied Mekanistics, Applied Botanics, More Immersive Wires | `ae2.md` | mit Buch (Guide), kurz; Addons ohne Buch knapp erklärt | 🟡 Entwurf 2026-10-18; Verteuerung (Storage-Layer, Endgame) und Entfernen der Energieerzeuger offen |
| Tinkers' Construct + TCIntegrations, Tinkers Levelling Addon, Blood-Smeltery | `tinkers.md` | mit Buch (sechs Tinkers-Bücher), kurz; Addons ohne Buch knapp erklärt; Nebenquest-Reihe Ausbau (TKA) | 🟡 Entwurf 2026-10-18; Würdigkeits-Item, Wege A/C–F und Blood-Smeltery offen |
| Star Wars Planets | `swplanets.md` | wie ohne Buch (Star Manual fliegt raus), kurz; schließt an RF5-01 bis RF7-01 in `adastra.md` an | 🟡 Entwurf 2026-10-19; Kyber auf Endor, Stormtrooper-Rezept, Beskar-Ofen und Blaster offen |
| Blue Skies | `blue_skies.md` | halbes Buch (Blue Journal): Weg zu den Bossen voll, sonst kurz mit Fundstelle; Nebenquest-Reihe BSN | 🟡 Entwurf 2026-10-19; Handel der Figur im Haus und Boss-Beute (O1) offen |
| Blood Magic | `bloodmagic.md` | mit Buch (Sanguine Scientiem), kurz | 🟡 Entwurf 2026-10-19; Zuschnitt BM1–BM6 nach Altar-Stufen (Vorschlag), Teil für T3 (O20), Altar-Reparatur (O2), Fund für T4, Ritual-Sperre (E19) offen |
| Küche: Farmer's Delight + Nether's Delight, Engineer's Delight; Kaleidoscope Cookery + Tavern, Grilling, End | `kueche.md` | ohne Buch (Ponder fehlt im Pack), voll; nur Nebenquests KU1–KU9; Aufgaben mit den Gewinner-Items der Zusammenführung | 🟡 Entwurf 2026-10-21; Mühlstein-Erze (F30), Tests 66–72 offen |

**Ins Questbuch:** `tools/QuestbuchGen.java` baut aus einer Datei hier und einer Steuerdatei `tools/questbuch/<mod>.cfg` (Aufgaben mit „oder“, Flüssigkeiten, Gase, abweichende Abhängigkeiten) ein FTB-Quests-Kapitel nach `config-overrides/config/ftbquests/quests/chapters/`. Aufruf steht oben in der Steuerdatei. Die Quest-IDs entstehen aus den Questcodes (MK1-01 …) und bleiben beim Neubauen gleich; Codes deshalb nicht umbenennen. Testkapitel (2026-10-20, je Mod alle Meilensteine in einem Kapitel, ohne Belohnungen): Mekanism, Botania, dazu die Mock-Tabs **Buch 1: Die Suche nach dem Meister**, **Buch 2**, **Buch 3** (`--hauptquests`, Titel in `tools/questbuch/hauptquests.cfg`; je Kapitel aus `../01_PROGRESSION.md` eine Klick-Quest „Kapitel n: Name“). Ein Abschnitt „(Kn …)“ in den Questtexten bekommt eine Marke „Kapitel n: <Mod>“ (Zahnrad) über seiner Spalte mit der Aufgabe „Stage `kapitel_kn`“; die Stage setzt die Mock-Hauptquest Kn als Belohnung (später der NPC-Dialog). Der Abschnitt wird mit der Stage sichtbar, abschließen lässt er sich nur der Reihe nach. Eine Quest ohne Aufgabe gilt in FTB Quests nie als erledigt, deshalb die Stage; die endgültige Gliederung folgt den Story-Kapiteln.

Alle großen Mods haben einen Entwurf. Die offenen Fragen aller Dateien stehen gesammelt in `../20_ENTSCHEIDUNGEN.md` (führend); die Abschnitte „Offen vor dem Einbau“ je Datei bleiben als Einzelheiten.

**Im Spiel verschoben?** Das Spiel schreibt beim Beenden alle Kapitel neu. Vor dem nächsten Neubau das Kapitel aus der Instanz als viertes Argument mitgeben (`java tools/QuestbuchGen.java <md> <cfg> <out.snbt> <instanz>/config/ftbquests/quests/chapters/<mod>.snbt`); die Positionen landen in `tools/questbuch/<mod>.pos` und gelten bei jedem weiteren Lauf. Für die Bücher gilt `tools/questbuch/hauptquests.pos` (`K1 = x, y`).
