# Archiv: Projektstatus bis 2026-10-15

> Vollständige Fassung von `00_STATUS.md` vor der Kürzung am 2026-10-15 (erledigte Punkte, Phasenbeschreibungen, Entscheidungslog). Nur bei Bedarf lesen; der aktuelle Stand steht in `00_STATUS.md`.

---


## ▶ Wo wir stehen

Am 2026-10-11 wurde der Wechsel von 1.18.2 auf **Minecraft 1.20.1, Forge 47.4.26** beschlossen; die gesamte Analyse beginnt von vorne. Am 2026-10-12 wurde **Block A (Grundlagen)** aus den JARs der Testinstanz neu aufgenommen. Am selben Tag hat der User die **Erzverteilung (Block B)** entschieden; Configs und Erzatlas sind angepasst. Ebenfalls am 2026-10-12 wurde **Block C (Progression)** begonnen: Treibstoffe, Dungeon-Planet und Ad-Astra-Maschinen sind entschieden, die Meilensteinkarte liegt als Entwurf für 1.20.1 vor. **Nächste Schritte:** Entwurf der Meilensteinkarte bestätigen, die vier zurückgestellten Fragen klären (siehe Block C), dann die Tests aus Block E im Spiel. Eine erste Fassung der Skripte und Overrides (**Block D**) liegt im Projektordner; sie ist seit dem 2026-10-12 in die Testinstanz kopiert, aber im Spiel noch ungetestet (Testplan: `11_TESTING.md`).

### Welche Dokumente gelten

| Dokument | Stand |
|---|---|
| `00_STATUS.md` (dieses Dokument) | 🟢 1.20.1 |
| `00_MODBASIS.md` | 🟢 1.20.1, verbindliche Mod-Liste (Rohliste `mods_v5.txt`) |
| `02_RESSOURCEN.md` | 🟢 1.20.1, Inventur aus den JARs |
| `14_ERZ_MOD_MATRIX.md` | 🟢 1.20.1, Ist und Soll |
| `15_RAUMFAHRT.md` | 🟢 1.20.1 |
| `16_MODLISTE_1.20.1.md` | 🟢 Befunde zu Blue Skies und Welt-Test (die Mod-Liste steht jetzt in `00_MODBASIS.md`) |
| `17_STAR_WARS_1.20.1.md`, `recherche/` | 🟢 1.20.1 (aus einer parallelen Sitzung) |
| `12_CHANGELOG.md` | 🟢 fortlaufend |
| `03_ERZGENERATION.md` | 🟡 1.20.1: Verteilung beschlossen, Zahlen sind ungetestete Vorschläge |
| `erzatlas/` (samt Artifact-Seite) | 🟢 1.20.1, Soll-Verteilung |
| `10_KUBEJS.md` | 🟡 1.20.1 |
| `11_TESTING.md` | 🟢 1.20.1, Testplan; alle Ergebnisse offen |
| `04`–`09` | 🔴 Stand 1.18.2, mit Warnhinweis versehen |
| `13_TESTINSTANZ_CHANGELOG.md` | gilt nur für die 1.18.2-Testinstanz |
| `01_PROGRESSION.md` | 🟡 1.20.1, vier Fragen offen |
| `meilensteine/` (samt Artifact-Seite) | 🟡 1.20.1, am 2026-10-14 nach der Story umgebaut: 50 Meilensteine, 9 Pfade, 16 Kapitel in zwei Parts, Fragenkatalog (feiner aufgeteilt am 2026-10-14) |
| `18_STORY.md` | 🟡 begonnen am 2026-10-13: Part 1 (Finden des Meisters) im Umriss, Part 2 (Ausbildung, Vorbereitung T5) und Part 3 (Star-Wars-Welten ab Endor) folgen; die Story schreibt der User |

### TODO-Liste für den Neustart

**A. Grundlagen neu aufnehmen** — 🟢 erledigt (2026-10-12)
1. ✅ `00_MODBASIS.md` auf 1.20.1 umgeschrieben und mit `16_MODLISTE_1.20.1.md` zusammengeführt.
2. ✅ Die zwei Abschnitte zum Welt-Test in `16_MODLISTE_1.20.1.md` zusammengeführt.
3. ✅ Inventur der 1.20.1-JARs: Erze, Metalle, Tags, Flüssigkeiten, Maschinen (`02_RESSOURCEN.md`, `14_ERZ_MOD_MATRIX.md`).
4. ✅ Dieses Dokument auf 1.20.1 gebracht.

**B. Worldgen neu planen (ersetzt Phase 1)** — 🟡 entschieden (2026-10-12), Umsetzung und Test offen
5. ✅ Erzverteilung festgelegt (`03_ERZGENERATION.md`): Zinn nur Everbright; Blei und Aluminium dort häufig, in der Overworld selten; Osmium in der Overworld wenig, in Everdawn und auf dem Mond viel; Uran auf Merkur und Venus; Fluorit auf dem Mars.
6. ✅ Alte Beschlüsse neu bewertet: Blei und Uran bleiben nur Mekanism-Erz; Certus bleibt AE2-Standard (nur Meteoriten); Kyber-Kristalle aus der Overworld entfernen; Excavator-Ader Cassiterite entfernen.
7. ✅ `config-overrides/config/Mekanism/world.toml` und `config-overrides/serverconfig/immersiveengineering-server.toml` auf Basis der 1.20.1-Standarddateien neu aufgesetzt; alte AE2-Config entfernt. 🔵 Retrogen und Werte im Spiel prüfen (E17).
8. ✅ Erzatlas und `03_ERZGENERATION.md` neu aufgebaut. 🔵 Offen: eigene Erz-Features für Blue Skies und die Planeten, Kyber-Override, Excavator-Adern (alles Block D).

**C. Progression** — 🟡 teilweise entschieden (2026-10-12)
9. 🟡 Meilensteinkarte als Entwurf für 1.20.1 neu aufgebaut und am 2026-10-14 nach der Story umgebaut (28 Meilensteine, 12 Stufen, neue Spalte „Star Wars · Story“); `01_PROGRESSION.md` nachgezogen. 🔵 Der Fragenkatalog auf der Karte ist offen.
10. Entscheidungen aus `15_RAUMFAHRT.md`:
    - ✅ Treibstoff: T1 Biodiesel, T2 entschwefelter Diesel, T3 Kerosin, T4 eigener Raketentreibstoff.
    - ✅ Blood-Magic-Dungeon nur auf dem **Merkur**.
    - ✅ Ad-Astra-Kabel, Fluid Pipes und Water Pump entfernen; Energizer entfernen, wenn die Alternative (IE Charging Station oder Mekanism Energy Cube) im Test funktioniert.
    - 🟢 Ad Astra: Rocketed bleibt; Star-Wars-Planeten verlangen mindestens T5 und T6 (2026-10-13).
    - 🔵 Zurückgestellt: magische Komponenten und Uran-Teil für T4; Zuordnung der Star-Wars-Planeten zu T5 und T6; Cryo Fuel.
    - 🔵 Neu: Soll Petroleum vor dem ersten Raumflug Pflicht bleiben, obwohl T1 mit Biodiesel fliegt?
11. ✅ Blue Skies: Die Werkzeug-Abschwächung wird als gewollte Hürde hingenommen. 🔵 Im Spiel messen, wie stark sie das Abbauen bremst.

**D. Skripte und Fixes** — 🟡 erste Fassung (2026-10-12), in die Testinstanz kopiert, ungetestet
12. ✅ Alte 1.18.2-Skripte und `kubejs/data/beyond_earth/` gelöscht. Neu in KubeJS-2001-Syntax: drei Server-Skripte und das Datapack mit zwölf Erz-Features (`10_KUBEJS.md`, `kubejs/data/README.md`).
13. 🟡 `forge:sand` per Skript repariert (ungetestet). 🔵 Offen: `forge:coins` und die fehlenden Hellforged-Flüssigkeiten (Blood-Smeltery).
14. 🟡 Regel „Energie/Treibstoff/Sauerstoff nur aus anderen Mods“ für Ad Astra umgesetzt, soweit entschieden (Rezepte entfernt, Platten über die IE Metal Press, Treibstoff-Tags T1 bis T3). 🔵 Offen: T4-Treibstoff, Energizer, Cryo Freezer.
15. ✅ Alles in die Testinstanz kopiert (2026-10-12, mit Zustimmung des Users). 🔵 Im Spiel prüfen: Testplan in `11_TESTING.md`.

**E. Tests, die noch fehlen** — 🔵 Testplan mit 27 Punkten steht in `11_TESTING.md`; die Tests macht der User im Spiel
16. Ölförderung: Pumpe an alter Stelle neu formen, findet sie das Vorkommen?
17. Mekanism-Erze in Blue Skies und auf den Planeten erzeugen lassen.
18. Treibstoffverbrauch pro Raketenstart und Schutzwirkung der Raumanzüge ablesen. Dazu: Laden sich Jet Suit und Etrionic Capacitor ohne Energizer? Bleiben Räume dicht, wenn IE-Leitungen oder Mekanism-Kabel hineinführen?
19. Blood Magic: Ritual-Ereignis per KubeJS abfangen (Dungeon-Zugang nur auf einem Planeten).
20. 🟡 Galaxy in a Cube in der Overworld: aus dem JAR beantwortet (Kyber-Kristalle in allen Overworld-Biomen, Ewok-Dörfer im Wald, Jawas in Wüsten). Offen: im Spiel bestätigen und entscheiden, ob das bleibt.

**F. Umstellung der Hauptwelt (ersetzt Phase 8)**
21. Mod-Liste des Hosts abgleichen (Chisels & Bits war nur dort).
22. Checkliste für alle Spieler vor dem Wechsel, noch in 1.18.2: IE-/IP-Multiblöcke leeren und zerlegen; Traveler's-Rucksäcke und Bonsai-Töpfe leeren; wichtige Dinge aus dem Twilight Forest holen.
23. Vollständiges Backup beim Host (im Test-Backup fehlte `DIM-1/entities`).
24. Alte `serverconfig/immersivepetroleum-server.toml` aus dem Weltordner entfernen; Worldgen-Configs und Tag-Overrides **vor dem ersten Start** einspielen.
25. Questbuch und Story-Figuren (Phase 7b).

**G. Story und Questbuch** — 🟡 begonnen (2026-10-13); Story schreibt der User, Stand in `18_STORY.md`
26. 🔵 Entscheidungen des Users: offene Stellen O1 bis O23 in `18_STORY.md` und Fragenkatalog der Meilensteinkarte. Als Nächstes: Checkliste der Mars-Station (O22), Anreise des Droiden (O23), Mekanism-Stufen und Botania-Items je Rakete.
27. ✅ Aus den JARs geklärt am 2026-10-14; Ergebnisse in `18_STORY.md` („Ergebnisse aus den JARs“). Neu daraus: Das „Star Manual“ von Star Wars Planets verrät das Geheimnis schon bei Rakete T3 → Belohnung entfernen oder verlegen (Block D). Ursprüngliche Fragen:
    - FTB Quests: eigene Aufgabe per KubeJS (Checkliste „Blöcke im Umkreis auf dem Mars“); Questbuch erst nach der ersten Quest ausgeben.
    - Easy NPC: Items übergeben und Abgaben prüfen; Quests auslösen oder abschließen; Figur per Befehl erzeugen (Elf am Portal, Droide auf dem Mars); verfügbares Aussehen für den Droiden.
    - Ad Astra: Welche Lebewesen nehmen ohne Sauerstoff Schaden (Ausnahme-Tag)? Können Raketen Fracht mitnehmen?
    - Ad Astra: Rocketed: Treibstoff-Tags T5 bis T7 (Flüssigkeit nötig?); Stufen der Star-Wars-Planeten per Datapack (T5 Endor, T6 Tatooine/Hoth/Mustafar, T7 Mandalore).
    - MythicBotany: Sperrt `lockAlfheim` in 1.20.1 den Zutritt hinter dem Mead of Kvasir?
    - Blood Magic: Ritual per KubeJS auf den Tempel beschränken (schon Test E19).
28. 🔵 Im Spiel testen: Runde 5 in `11_TESTING.md`.

## Projektziel

Das Forge-Modpack „Immersive Engineering+“ (ATLauncher) wird auf Minecraft 1.20.1 zu einem kohärenten, progressiven Modpack ausgebaut. Die vorhandene Welt wird mitgenommen. Mods sollen nicht isoliert nebeneinanderstehen, sondern sich über Ressourcen, Verarbeitung, Energie, Magie und Automatisierung ergänzen. Hauptziel der Progression ist die Raumfahrt.

## Umgebung

| Was | Wo | Zugriff |
|---|---|---|
| Projekt, Doku, Skript-Quellen | `C:\Users\richa\Projekte\MinecraftIEplus` (Git) | frei |
| **Testinstanz 1.20.1** | `…\ATLauncher\instances\Minecraft1201withForge` | Mods pflegt der User; Schreibzugriffe vorher abstimmen |
| Alte Spielinstanz 1.18.2 | `…\ATLauncher\instances\ImmersiveEngineering` | **nur lesen** |
| Alte Testinstanz 1.18.2 | `…\ATLauncher\instances\TestIEInstance` | nicht mehr in Gebrauch |
| **Hauptwelt** | beim Mitspieler (Host), Spiel über **LAN**, noch in 1.18.2 | kein Zugriff; Übernahme durch die Spieler |
| Kopie der Hauptwelt | `welten_backups/WeltVorClaude.zip` (nicht in Git); entpackt in der Testinstanz als `saves\3_ Versuch von 1,5` | Test |

### Konsequenzen aus dem LAN-Betrieb

- Der **Host** erzeugt die Welt: Worldgen, Server-Skripte (KubeJS `server_scripts`, `kubejs/data`) und Server-Configs wirken nur über die Instanz des Hosts.
- IE-Server-Configs liegen **pro Welt** in `saves/<Welt>/serverconfig/` und müssen in die Welt des Hosts.
- Mekanism-Worldgen liegt in `config/Mekanism/world.toml` der Host-Instanz, die Blue-Skies-Freigabe in `config/blue_skies-common.toml`.
- Alle Spieler brauchen identische Mods; Startup- und Client-Skripte müssen bei **allen** Spielern liegen.

## Arbeitsregeln

- Die bestehende Welt wird als reale Ausgangslage berücksichtigt.
- Keine Progressionsänderung ohne Prüfung der Auswirkungen auf die bestehende Welt.
- Fakten nur, wenn verifiziert (JAR, Config, Log oder Test). Vermutungen werden als 🔵 markiert oder erfragt.
- KubeJS und Configs sind die Implementierungsebene; die Designentscheidungen liegen in dieser Dokumentation.
- Experimente nur in der Testinstanz.
- Änderungen werden im CHANGELOG dokumentiert.
- Reihenfolge: erst Analyse und Entscheidungen (A–C), dann Skripte (D). Skripte nur für das, was entschieden ist.

## Statussystem

- 🟢 DECIDED — verbindlich beschlossen oder verifiziert
- 🟡 PLANNED — vorgesehen, aber noch nicht vollständig spezifiziert
- 🔵 OPEN — noch zu entscheiden oder zu verifizieren
- 🔴 BLOCKED / überholt — kann erst nach einer anderen Entscheidung bearbeitet werden bzw. gilt nicht mehr

## ⚠️ Wichtig für den Host

1. **Die Hauptwelt nicht in 1.20.1 öffnen, bevor die finalen Worldgen-Configs und Tag-Overrides eingespielt sind.** Sonst erzeugen Mekanism, Ad Astra (Ölquellen) und Galaxy in a Cube in allen neu betretenen Chunks ihre Standardwerte. Retrogen kann zu viel Erzeugtes nicht zurücknehmen.
2. **Vor dem Wechsel, noch in 1.18.2:** alle IE- und IP-Multiblöcke leeren und zerlegen; Traveler's-Rucksäcke und Bonsai-Töpfe leeren; Wichtiges aus dem Twilight Forest holen.
3. Alte `serverconfig/immersivepetroleum-server.toml` aus dem Weltordner entfernen (sonst Absturz beim Laden).

## Stand der Hauptwelt (2026-10-07, noch 1.18.2)

- Botania: Rune Altar vorhanden.
- Immersive Engineering: Stahl, Biodiesel-Generator, Crusher, Lichtbogenofen, Pumpjack und Coker.
- Tinkers Construct: begonnen. Twilight Forest: gerade erstmals betreten (entfällt). AE2: nicht begonnen.
- **Die Hauptwelt wurde noch nie mit Mekanism geöffnet.** Alle erkundeten Chunks haben keine Mekanism-Erze → Retrogen.
- Was der Wechsel mit der Welt macht (kaputte Multiblöcke, entfernte Inhalte): `16_MODLISTE_1.20.1.md`.

## Festgelegte Designrichtung

🟢 Core-Technik: Immersive Engineering, Immersive Petroleum, Mekanism, Mekanism Generators, Applied Energistics 2, Applied Mekanistics.

🟢 Magie: Botania, MythicBotany, Blood Magic.

🟢 Werkzeuge und Materialien: Tinkers' Construct, Tinkers Levelling Addon, TCIntegrations, Blood-Smeltery.

🟢 Immersive Engineering bleibt die industrielle Grundlage. Mekanism übernimmt die High-Tech-, Chemie- und Verarbeitungsrolle, ersetzt aber nicht automatisch jede andere Verarbeitung.

🟢 **AE2 ist Endgame.** Einzige Ausnahme: ein früher, teurer Storage-Layer, mit dem bestehende Kisten und Drawers angebunden und durchsucht werden können.

🟢 Keine Erweiterung „More Mekanism Processing“; Erträge werden gezielt selbst balanciert. Keine weiteren großen Basistech-Mods.

🟢 **Raumfahrt ist Hauptziel des Packs** (Ad Astra, Giselle Addon, Star Wars Planets, Galaxy in a Cube). Energie, Treibstoff und Sauerstoff dafür kommen ausschließlich aus IE, Immersive Petroleum und Mekanism; Sauerstoff zwingend aus Mekanism (`15_RAUMFAHRT.md`).

🟢 **Blue Skies ersetzt Twilight Forest** als Story-Dimension und soll Hauptquelle der Mekanism-Erze werden (🔵 Verteilung in Block B).

🟢 **Die Erzverteilung legen wir selbst fest.** Fremde Erz-Generierung auf den Planeten wird abgeschaltet. Osmium muss erreichbar bleiben; Retrogen ist eingeplant.

🟢 Wesley's Roguelike Dungeons bleibt als Spaß-Dungeon. Easy NPC liefert Story-Figuren für das Questbuch.

🟡 Der Blood-Magic-Dungeon ist nur auf dem Merkur zugänglich und liefert ein Pflicht-Item für die T4-Rakete (Planet entschieden 2026-10-12; Machbarkeit ungetestet).

🟢 Treibstoff je Raketenstufe: Biodiesel, entschwefelter Diesel, Kerosin, eigener Raketentreibstoff (2026-10-12).

🟢 Die Werkzeug-Abschwächung in Blue Skies ist eine gewollte Hürde (2026-10-12).

🟢 Tinkers wird in die höheren Stufen eingebunden; jedes Metall soll sich einschmelzen lassen, die Herstellung von Legierungen bleibt bei der zugehörigen Maschine (2026-10-12, `07_CROSSMOD_INTEGRATION.md`; Rezepte und Werte offen).

---

# Arbeitsplan

Leitidee: **erst das Zeitkritische und Strukturelle entscheiden, dann balancieren, dann implementieren.**

| Phase | Inhalt | Block | Status |
|---|---|---|---|
| 0 | Grundlagen: Mod-Basis, Inventur, Testinstanz | A | 🟢 (2026-10-12) |
| 1 | **Worldgen** (zeitkritisch) | B | 🟡 entschieden (2026-10-12); Umsetzung in D, Test in E |
| 2 | Progressions-Meilensteine (Gates und Kreuzungspunkte) | C | 🟡 Entwurf liegt vor, vier Fragen offen |
| 3 | Verarbeitung und Erträge | — | 🔵 |
| 4 | Energie und Flüssigkeiten | — | 🔵 |
| 5 | AE2 zweistufig (früher Storage-Layer, Endgame-ME) | — | 🔵 |
| 6 | Cross-Mod-Rezepte | — | 🔵 |
| 7 | KubeJS- und Config-Umsetzung, Test in der Testinstanz | D, E | 🔵 |
| 7b | **Questbuch und Story:** FTB Quests entlang der Meilensteinkarte, Story-Figuren mit Easy NPC | F25 | 🔵 |
| 8 | Übernahme in die Hauptwelt (Host) | F | 🔵 |

### Phase 1 — Worldgen ⏰

Jeder neu erkundete Chunk bekommt die dann gültige Verteilung. Deshalb zuerst:
1. Zielverteilung je Dimension festlegen: Overworld, Blue Skies (Everbright, Everdawn), Planeten.
2. Umsetzung bevorzugt über Configs (`Mekanism/world.toml`, IE-Serverconfig, `blue_skies-common.toml`); Datapack oder KubeJS nur für das, was Configs nicht können (Erze in Blue-Skies- und Planetengestein, Kyber in der Overworld).
3. Nebenquellen angleichen: IE-Mineraladern, Blood-Magic-Meteore.
4. **Retrogen** für die bereits erkundete Overworld einplanen und im Spiel prüfen.

### Phase 2 — Meilensteine

Schlüssel-Meilensteine mit Pfaden und Kreuzungspunkten, abgeglichen mit dem Weltstand; Kapitelgerüst für das Questbuch. Stand: `docs/meilensteine/` (🟡 Entwurf für 1.20.1, 28 Meilensteine in zwei Story-Parts) und `01_PROGRESSION.md`.

### Phase 3–6

Erträge pro Material und Pfad → Energie-Rollen → AE2-Gates → Cross-Mod-Rezepte nur an den Kreuzungspunkten aus Phase 2.

### Phase 7 — Umsetzung

Skripte und Configs entstehen im Projektordner (`kubejs/`, `config-overrides/`), werden in die Testinstanz kopiert und dort getestet. Die Configs in `config-overrides/` sind seit 2026-10-12 auf 1.20.1. Die Reste aus 1.18.2 in `kubejs/` sind gelöscht.

### Phase 7b — Questbuch und Story

- FTB Quests (+ Library, Teams, Item Filters) führt durch die Progression; Kapitelgerüst ist die Meilensteinkarte.
- 🟢 Neben der Story schaltet das Questbuch laufend Nebenquests frei, die Maschinen und Ziele der Mods vorstellen, damit die Spieler das Pack in der Breite erleben und nicht nur der Story nach rushen. Sie werden mit jedem Story-Kapitel zum passenden Zeitpunkt freigeschaltet, sind kurze Ketten von höchstens drei bis vier Quests und dürfen später auch für die Story gebraucht werden (User, 2026-10-14; `18_STORY.md`).
- 🟢 Easy NPC (Kern, Bundle, Config UI) und Easy NPC Dialogue Immersion sind im Pack. Damit entstehen Story-Figuren mit Dialogen, z. B. in Blue Skies oder auf den Planeten.
- 🔵 Offen: welche Figuren, wo sie stehen, ob Dialoge Quests auslösen oder abschließen können.
- Star-Wars-Kapitel: `17_STAR_WARS_1.20.1.md`.

### Phase 8 — Übernahme

Checkliste in 1.18.2 abarbeiten → vollständiges Backup beim Host → Mods, Configs und Skripte bei allen Spielern einspielen (Server-Teil beim Host) → erster Start in 1.20.1 → Retrogen → Changelog für die Mitspieler.

---

# Entscheidungslog / offene Punkte

| Bereich | Status | Datei |
|---|---|---|
| Modbasis | 🟢 1.20.1 | `00_MODBASIS.md` |
| Ressourcen | 🟢 Inventur 1.20.1; kanonische Ausgabe für Bronze offen | `02_RESSOURCEN.md` |
| Erz × Mod Matrix | 🟢 Ist und Soll 1.20.1 | `14_ERZ_MOD_MATRIX.md` |
| Erzgeneration | 🟡 Verteilung beschlossen, Werte ungetestet | `03_ERZGENERATION.md` |
| Raumfahrt | 🟡 Treibstoff, Dungeon-Planet und Maschinen entschieden; T4-Teile, Rocketed, Cryo Fuel offen | `15_RAUMFAHRT.md` |
| Star Wars | 🟡 | `17_STAR_WARS_1.20.1.md` |
| Progression | 🟡 1.20.1, Meilensteinkarte als Entwurf | `01_PROGRESSION.md`, `meilensteine/` |
| Verarbeitung, Energie, Magie, Cross-Mod, AE2, Endgame | 🔴 Stand 1.18.2 | `04`–`09` |
| KubeJS | 🟡 1.20.1, erste Fassung ungetestet | `10_KUBEJS.md` |
| Testing | 🟡 Testplan für 1.20.1, Ergebnisse offen | `11_TESTING.md` |
| Changelog | 🟢 | `12_CHANGELOG.md` |

## Entscheidungen zur Erzverteilung (User, 2026-10-12)

🟢 Zinn nur in Everbright; Overworld aus; Excavator-Ader Cassiterite entfernt.
🟢 Blei: Overworld sehr selten, Everbright häufig, dazu Merkur und Venus. Nur Mekanism-Erz.
🟢 Aluminium: Overworld selten, Everbright häufig. Silber und Nickel bleiben IE-Standard.
🟢 Osmium: Overworld wenig, Everdawn und Mond viel, dazu Glacio.
🟢 Uran: nur Mekanism-Erz, Overworld ×1,3; reichlich auf Merkur und Venus, dazu Glacio. Fluorit zusätzlich auf dem Mars.
🟢 Certus: AE2-Standard, nur Meteoriten.
🟢 Kyber-Kristalle (Galaxy in a Cube) werden aus der Overworld entfernt.

🔵 Noch offen: Laterite-Ader (Aluminium im Excavator), Blood-Magic-Meteore, alle Zahlenwerte im Spiel.

## Backlog (zurückgestellt)

### 🔵 Eigene Erz-Texturen für fremdes Gestein

Für die Planeten ist das durch „Mekanism: Ad Astra Ores“ gelöst (fertige Blöcke). Offen bleibt es für **Blue Skies**: Mekanism-Erze in `turquoise_stone` und `lunar_stone` gibt es nicht als Block. Entweder die normalen Erzblöcke einsetzen (Overworld-Steintextur) oder eigene KubeJS-Blöcke mit zusammengesetzter Textur, Original-Drops und Original-Tags bauen.
