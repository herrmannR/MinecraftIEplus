# Minecraft-Modpack „Immersive Engineering+“ (1.20.1) — Projektstatus

> Einstiegspunkt. Nur der aktuelle Stand und das Offene; Erledigtes, Phasenbeschreibungen und Entscheidungslog stehen in `00_STATUS_ARCHIV.md`.
> Letzte Überarbeitung: 2026-10-15 (gekürzt).

## ▶ Wo wir stehen

Minecraft **1.20.1, Forge 47.4.26** (Wechsel von 1.18.2 am 2026-10-11). Block A (Grundlagen) ist erledigt, Block B (Erzverteilung) entschieden, Block C (Progression) teilweise. Eine erste Fassung der Skripte und Overrides (Block D) liegt seit 2026-10-12 in der Testinstanz, im Spiel ungetestet (Testplan: `11_TESTING.md`). Die Story (Block G) schreibt der User, Stand in `18_STORY.md`.

**Nächste Schritte:** Meilensteinkarte bestätigen, die zurückgestellten Fragen aus Block C klären, Tests aus Block E im Spiel.

### Welche Dokumente gelten

| Dokument | Stand |
|---|---|
| `00_MODBASIS.md` | 🟢 verbindliche Mod-Liste (Rohliste `mods_v5.txt`) |
| `02_RESSOURCEN.md` | 🟢 Inventur aus den JARs |
| `14_ERZ_MOD_MATRIX.md` | 🟢 Ist und Soll |
| `15_RAUMFAHRT.md` | 🟢 |
| `16_MODLISTE_1.20.1.md` | 🟢 Befunde zu Blue Skies und Welt-Test |
| `17_STAR_WARS_1.20.1.md`, `recherche/` | 🟢 |
| `12_CHANGELOG.md` | 🟢 fortlaufend |
| `03_ERZGENERATION.md` | 🟢 Verteilung beschlossen und im Spiel nachgezählt (2026-10-17) |
| `erzatlas/` (samt Artifact-Seite) | 🟢 Soll-Verteilung |
| `10_KUBEJS.md` | 🟡 |
| `11_TESTING.md` | 🟢 Testplan; Tests 1–31 und 32a bestanden, 32 (Skript fehlt) und 33–41 offen |
| `01_PROGRESSION.md` | 🟡 vier Fragen offen |
| `meilensteine/` (samt Artifact-Seite) | 🟡 nach der Story umgebaut (2026-10-14): 50 Meilensteine, 9 Pfade, 16 Kapitel in zwei Parts, Fragenkatalog |
| `18_STORY.md` | 🟡 Part 1 im Umriss, Part 2 und 3 folgen; schreibt der User |
| `modpfade/` | je Mod eine Seite und `WISSEN.md` |
| `19_HILFEBUECHER.md` | 🟢 welche Mods ein Buch im Spiel haben; Regel für die Erklärtiefe im Questbuch |
| `questtexte/` | 🟡 Questtexte je Mod (Skill `questtexte`); Entwürfe für Mekanism, IE und Botania; Multiblock-Bauregeln (Mekanism) und Tests 40–41 (Botania) 🔵 offen |
| `04`–`09` | 🔴 Stand 1.18.2, mit Warnhinweis |
| `13_TESTINSTANZ_CHANGELOG.md` | gilt nur für die 1.18.2-Testinstanz |

### Offene Punkte (Nummern wie im Archiv)

**B. Worldgen** — 🟢 abgeschlossen: umgesetzt, nachgezählt, Retrogen geprüft (2026-10-17)

**C. Progression** — 🟡
- 9. 🔵 Fragenkatalog der Meilensteinkarte.
- 10. 🔵 Zurückgestellt: magische Komponenten und Uran-Teil für T4; Zuordnung der Star-Wars-Planeten zu T5/T6; Cryo Fuel. Neu: Petroleum vor dem ersten Raumflug Pflicht, obwohl T1 mit Biodiesel fliegt?
- 11. 🟢 Blue-Skies-Werkzeugabschwächung gemessen (2026-10-17): fremdes Werkzeug dauert ewig, bleibt so gewollt.
- 🔵 Neu (Test 23, 2026-10-17): Everdawn ist sofort erreichbar, Osmium in Menge gibt es also schon vor dem Mond (Karte: Everdawn bei K4). So lassen, Portal per Skript sperren oder Osmium dort senken?

**D. Skripte und Fixes** — 🟡 erste Fassung, ungetestet
- 13. 🔵 `forge:coins` und fehlende Hellforged-Flüssigkeiten (Blood-Smeltery).
- 14. 🔵 T4-Treibstoff, Cryo Freezer. (Energizer entfernt, 2026-10-17, ungetestet.)
- 🔵 Umsetzen (entschieden 2026-10-17, Ideenimport): Star Manual raus; Plastic Plate raus, Plastoid mit HDPE; Kyber von Star Wars Planets durch das von Galaxy in a Cube ersetzen; Beskar nur im starken Ofen, 1 Nugget (Ofen offen); Digital Miner raus; AE2-Energieerzeuger raus; IE-Crusher übernimmt den Mekanism-Crusher. Erst wenn die Story von Part 1 steht.

**E. Tests** — 🟡 Runde 1 bis 4 bestanden (2026-10-17); offen Runde 5 und 6 in `11_TESTING.md`
- 19. Blood-Magic-Ritual per KubeJS abfangen (Dungeon nur auf dem Merkur).
- 20. Galaxy in a Cube in der Overworld im Spiel bestätigen und entscheiden, ob es bleibt.

**F. Umstellung der Hauptwelt**
- 21. Mod-Liste des Hosts abgleichen (Chisels & Bits war nur dort).
- 22. Checkliste für alle Spieler, noch in 1.18.2 (siehe „Wichtig für den Host“).
- 23. Vollständiges Backup beim Host (im Test-Backup fehlte `DIM-1/entities`).
- 24. Alte `immersivepetroleum-server.toml` entfernen; Worldgen-Configs und Tag-Overrides vor dem ersten Start einspielen.
- 25. Questbuch und Story-Figuren.

**G. Story und Questbuch** — 🟡
- 26. 🔵 Entscheidungen des Users: O1 bis O23 in `18_STORY.md` und Fragenkatalog der Meilensteinkarte. Als Nächstes: Checkliste der Mars-Station (O22), Anreise des Droiden (O23), Mekanism-Stufen und Botania-Items je Rakete.
- 28. 🔵 Runde 5 und 6 in `11_TESTING.md` im Spiel testen.
- 🔵 Aus dem Ideenimport (2026-10-17): O34 bis O38 in `18_STORY.md` (Blue-Skies-Haus, Roguelike-Stufen, Machtpfade, Artefakte, Freischaltung der Macht); Texte der vier Schriftrollen; Zutaten der Altar-Reparatur.

### Backlog

- 🔵 Mekanism-Erze in Blue-Skies-Gestein (`turquoise_stone`, `lunar_stone`) gibt es nicht als Block: normale Erzblöcke einsetzen oder eigene KubeJS-Blöcke mit zusammengesetzter Textur, Original-Drops und Tags. (Planeten sind durch „Mekanism: Ad Astra Ores“ gelöst.)

### Arbeitsplan

| Phase | Inhalt | Block | Status |
|---|---|---|---|
| 0 | Grundlagen | A | 🟢 |
| 1 | Worldgen (zeitkritisch) | B | 🟢 abgeschlossen (2026-10-17) |
| 2 | Progressions-Meilensteine | C | 🟡 Entwurf, Fragen offen |
| 3–6 | Erträge, Energie, AE2 zweistufig, Cross-Mod-Rezepte | — | 🔵 |
| 7 | KubeJS und Configs, Test in der Testinstanz | D, E | 🔵 |
| 7b | Questbuch (FTB Quests) und Story-Figuren (Easy NPC) | G | 🟡 |
| 8 | Übernahme in die Hauptwelt | F | 🔵 |

## Projektziel

Das Forge-Modpack „Immersive Engineering+“ (ATLauncher) wird auf 1.20.1 zu einem kohärenten, progressiven Modpack ausgebaut; die vorhandene Welt wird mitgenommen. Mods ergänzen sich über Ressourcen, Verarbeitung, Energie, Magie und Automatisierung. Hauptziel der Progression ist die Raumfahrt.

## Umgebung

| Was | Wo | Zugriff |
|---|---|---|
| Projekt, Doku, Skript-Quellen | `C:\Users\richa\Projekte\MinecraftIEplus` (Git) | frei |
| **Testinstanz 1.20.1** | `…\ATLauncher\instances\Minecraft1201withForge` | Mods pflegt der User; Schreibzugriffe vorher abstimmen |
| Alte Spielinstanz 1.18.2 | `…\ATLauncher\instances\ImmersiveEngineering` | **nur lesen** |
| **Hauptwelt** | beim Host, LAN, noch 1.18.2 | kein Zugriff |
| Kopie der Hauptwelt | `welten_backups/WeltVorClaude.zip` (nicht in Git); in der Testinstanz als `saves\3_ Versuch von 1,5` | Test |

**LAN-Betrieb:** Worldgen, Server-Skripte (`server_scripts`, `kubejs/data`) und Server-Configs wirken nur beim Host. IE-Server-Configs liegen pro Welt in `saves/<Welt>/serverconfig/`. Alle Spieler brauchen identische Mods; Startup- und Client-Skripte müssen bei allen liegen.

## Arbeitsregeln

- Die bestehende Welt ist reale Ausgangslage; keine Progressionsänderung ohne Prüfung der Auswirkungen auf sie.
- Fakten nur, wenn verifiziert (JAR, Config, Log oder Test); Vermutungen als 🔵 markieren oder erfragen.
- Designentscheidungen stehen in der Doku; KubeJS und Configs setzen sie um, nur für Entschiedenes.
- Experimente nur in der Testinstanz. Änderungen im CHANGELOG.
- Erledigtes aus diesem Dokument ins Archiv verschieben, damit es kurz bleibt.

Status: 🟢 entschieden/verifiziert · 🟡 geplant · 🔵 offen · 🔴 blockiert/überholt

## ⚠️ Wichtig für den Host

1. **Die Hauptwelt nicht in 1.20.1 öffnen, bevor die finalen Worldgen-Configs und Tag-Overrides eingespielt sind.** Sonst erzeugen Mekanism, Ad Astra und Galaxy in a Cube Standardwerte; Retrogen nimmt nichts zurück.
2. **Vor dem Wechsel, noch in 1.18.2:** IE- und IP-Multiblöcke leeren und zerlegen; Traveler's-Rucksäcke und Bonsai-Töpfe leeren; Wichtiges aus dem Twilight Forest holen.
3. Alte `serverconfig/immersivepetroleum-server.toml` aus dem Weltordner entfernen (sonst Absturz).

Stand der Hauptwelt (2026-10-07): IE mit Stahl, Biodiesel, Crusher, Lichtbogenofen, Pumpjack, Coker; Botania Rune Altar; Tinkers begonnen; AE2 nicht begonnen; **nie mit Mekanism geöffnet** → Retrogen nötig.

## Festgelegte Designrichtung

- 🟢 Core-Technik: IE, Immersive Petroleum, Mekanism (+ Generators), AE2, Applied Mekanistics. IE ist die industrielle Grundlage, Mekanism High-Tech und Chemie.
- 🟢 Magie: Botania, MythicBotany, Blood Magic. Werkzeuge: Tinkers' Construct (+ Levelling, TCIntegrations, Blood-Smeltery); jedes Metall einschmelzbar, Legierungen bleiben bei ihrer Maschine.
- 🟢 AE2 ist Endgame, außer einem frühen, teuren Storage-Layer. (Hinweis 2026-10-15: Von sich aus ist AE2 frühes Midgame, ohne Stahl; siehe Crossmod AE1. Die Entscheidung braucht also KubeJS-Eingriffe.)
- 🟢 Kein „More Mekanism Processing“, keine weiteren großen Basistech-Mods.
- 🟢 Raumfahrt ist Hauptziel (Ad Astra, Giselle Addon, Rocketed, Star Wars Planets, Galaxy in a Cube). Energie, Treibstoff, Sauerstoff nur aus IE, IP, Mekanism; Sauerstoff aus Mekanism. Treibstoff: T1 Biodiesel, T2 entschwefelter Diesel, T3 Kerosin, T4 eigener. Star-Wars-Planeten ab T5/T6.
- 🟢 Blue Skies ersetzt Twilight Forest; Werkzeugabschwächung ist gewollt.
- 🟢 Erzverteilung legen wir selbst fest (`03_ERZGENERATION.md`); Retrogen eingeplant.
- 🟡 Blood-Magic-Dungeon nur auf dem Merkur, liefert ein Pflicht-Item für T4.
- 🟢 Wesley's Roguelike Dungeons bleibt; Easy NPC für Story-Figuren; Nebenquests (Ketten von höchstens 3–4) stellen die Mods in der Breite vor.
