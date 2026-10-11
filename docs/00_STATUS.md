# Minecraft-Modpack (Wechsel 1.18.2 → 1.20.1) — Projektstatus

> Zentrale Übersicht und Einstiegspunkt für das gesamte Modpack-Projekt.
> Letzte Überarbeitung: 2026-10-11 (Wechsel auf 1.20.1 beschlossen, Übergabe für den Neustart der Analyse).

## ▶ Übergabe: Neustart der Analyse (Stand 2026-10-11)

Nach dem Versionswechsel und den Mod-Änderungen wird die gesamte Analyse **von vorne** begonnen (Entscheidung des Users, 2026-10-11). Es wurden bewusst **noch keine Skripte** für 1.20.1 geschrieben.

### Welche Dokumente gelten

| Dokument | Stand |
|---|---|
| `16_MODLISTE_1.20.1.md` | 🟢 aktuell: Mod-Liste, Testinstanz, Welt-Test, Befunde zu Blue Skies |
| `15_RAUMFAHRT.md` | 🟢 aktuell: Ad Astra und Addons aus den JARs gelesen |
| `17_STAR_WARS_1.20.1.md`, `recherche/` | 🟢 aktuell (aus einer parallelen Sitzung) |
| `12_CHANGELOG.md` | 🟢 fortlaufend |
| `00_STATUS.md` (dieses Dokument) | 🟡 Übergabe aktuell; alles ab „Projektziel“ ist noch 1.18.2 |
| `00_MODBASIS.md`, `01`–`11`, `14` | 🔴 Stand 1.18.2, mit Warnhinweis versehen |
| `13_TESTINSTANZ_CHANGELOG.md` | gilt nur für die 1.18.2-Testinstanz |
| `erzatlas/`, `meilensteine/` (samt Artifact-Seiten) | 🔴 Stand 1.18.2 (Twilight Forest, Beyond Earth) |

### TODO-Liste für den Neustart

**A. Grundlagen neu aufnehmen**
1. `00_MODBASIS.md` auf 1.20.1 umschreiben (Quelle: `16_MODLISTE_1.20.1.md`); danach beide zusammenführen.
2. In `16_MODLISTE_1.20.1.md` die zwei Abschnitte zum Welt-Test zusammenführen (einer stammt aus einer parallelen Sitzung).
3. Inventur der 1.20.1-JARs: Erze, Metalle, Tags, Flüssigkeiten, Maschinen (`02_RESSOURCEN.md`, `14_ERZ_MOD_MATRIX.md`). Neu dabei: Ad Astra, Blue Skies, Star Wars Planets, Galaxy in a Cube, Alex's Mobs, Chisels & Bits, Easy NPC.
4. Dieses Dokument ab „Projektziel“ auf 1.20.1 bringen (Umgebung, Weltstand, Designrichtung, Arbeitsplan).

**B. Worldgen neu planen (ersetzt Phase 1)**
5. Erzverteilung neu festlegen: Mekanism-Erze hauptsächlich in **Blue Skies** (Freigabe über `allowed_mods_for_feature_gen`), Planeten-Erze selbst bestimmen (Blöcke aus „Mekanism: Ad Astra Ores“).
6. Alte Beschlüsse neu bewerten: „Zinn nur im Twilight Forest“, „Osmium Overworld selten“, „Mond = Hauptquelle für Osmium und Certus“, „Lead/Uranium nur Mekanism-Erz“.
7. `Mekanism/world.toml` und die IE-Serverconfig gegen die 1.20.1-Formate neu aufsetzen; Retrogen für 1.20.1 prüfen.
8. Erzatlas und `03_ERZGENERATION.md` neu aufbauen.

**C. Progression**
9. Meilensteinkarte neu aufbauen: Twilight Forest → Blue Skies, Beyond Earth → Ad Astra, dazu Star Wars, Blood-Magic-Dungeon auf einem Planeten, Wesley's.
10. Offene Entscheidungen aus `15_RAUMFAHRT.md` klären: Treibstoff je Raketenstufe, Planet für den Blood-Magic-Zugang, Magie- und Uran-Komponenten für T4, Ad Astra: Rocketed, Umgang mit Ad-Astra-Maschinen.
11. Blue Skies: Entscheidung zur Werkzeug-Abschwächung (Tinkers-Werkzeuge sind betroffen, getestet).

**D. Skripte und Fixes (erst nach A–C)**
12. KubeJS-2001-Syntax: alle bisherigen Skripte neu schreiben oder löschen. Hinfällig sind `space_oxygen.js`, `moon_ores.js`, `tf_industrial_ores.js`, `tf_remove_foreign_ores.js`, `debug_print_ore_features.js` und der Beyond-Earth-Ölquellen-Tag.
13. Bekannte Fehler beheben: `forge:sand` leer (Star Wars Planets), `forge:coins` leer und fehlende Hellforged-Flüssigkeiten (Blood-Smeltery).
14. Regel „Energie/Treibstoff/Sauerstoff nur aus anderen Mods“ für Ad Astra umsetzen (Tabelle in `15_RAUMFAHRT.md`).
15. Drei Tag-Overrides im Spiel prüfen: `mekanismaaa/…/gen_ores*.json` (in der Testinstanz) und `ad_astra/…/oil_well.json` (nur im Projektordner).

**E. Tests, die noch fehlen**
16. Ölförderung: Pumpe an alter Stelle neu formen, findet sie das Vorkommen?
17. Mekanism-Erze in Blue Skies und auf den Planeten erzeugen lassen.
18. Treibstoffverbrauch pro Raketenstart und Schutzwirkung der Raumanzüge ablesen.
19. Blood Magic: Ritual-Ereignis per KubeJS abfangen (Dungeon-Zugang nur auf einem Planeten).
20. Galaxy in a Cube: erzeugt der Mod etwas in der Overworld?

**F. Umstellung der Hauptwelt (ersetzt Phase 8)**
21. Mod-Liste des Hosts abgleichen (Chisels & Bits war nur dort).
22. Checkliste für alle Spieler vor dem Wechsel, noch in 1.18.2: IE-/IP-Multiblöcke leeren und zerlegen; Traveler's-Rucksäcke und Bonsai-Töpfe leeren; wichtige Dinge aus dem Twilight Forest holen.
23. Vollständiges Backup beim Host (im Test-Backup fehlte `DIM-1/entities`).
24. Alte `serverconfig/immersivepetroleum-server.toml` aus dem Weltordner entfernen; Worldgen-Configs und Tag-Overrides **vor dem ersten Start** einspielen.
25. Questbuch und Story-Figuren (Phase 7b).

## 🟢 Versionswechsel auf 1.20.1 beschlossen (2026-10-11)

Das Pack wechselt auf **Minecraft 1.20.1, Forge 47.4.26**; die bestehende Welt wird mitgenommen. **Dieses Dokument ab „Projektziel“ und die Dokumente 00–14 beschreiben noch den Stand 1.18.2.**

- Raumfahrt: Ad Astra + Giselle Addon + Star Wars Planets (Ad-Astra-Version) statt Beyond Earth.
- Twilight Forest entfällt (Absturz im Intel-Grafiktreiber), Ersatz ist Blue Skies.
- Waystones entfällt. Wesley's Roguelike Dungeons bleibt.
- Phase 1 (Worldgen) muss für 1.20.1 wiederholt werden: Die Skripte für Twilight Forest und Beyond Earth sind hinfällig.
- Testinstanz für 1.20.1: `…\ATLauncher\instances\Minecraft1201withForge`.
- Vor der Umstellung der Hauptwelt: alle IE-/IP-Multiblöcke in 1.18.2 leeren und zerlegen.

Mod-Liste, Testergebnisse und offene Punkte: `16_MODLISTE_1.20.1.md`. Begründung: `12_CHANGELOG.md`.

## Projektziel

Ein bestehendes Minecraft-1.18.2-Forge-Modpack („Immersive Engineering+“, ATLauncher) soll zu einem kohärenten, progressiven Modpack ausgebaut werden. Die vorhandene Welt bleibt erhalten. Mods sollen nicht isoliert nebeneinanderstehen, sondern sich über Ressourcen, Verarbeitung, Energie, Magie und Automatisierung gegenseitig ergänzen.

## Umgebung

| Was | Wo | Zugriff |
|---|---|---|
| Projekt / Doku / Skript-Quellen | `C:\Users\richa\Projekte\MinecraftIEplus` (Git) | frei |
| Eigene Spielinstanz | `…\ATLauncher\instances\ImmersiveEngineering` | **nur lesen** |
| Testinstanz | `…\ATLauncher\instances\TestIEInstance` | frei, jede Änderung in `13_TESTINSTANZ_CHANGELOG.md` |
| **Hauptwelt** | beim Mitspieler (Host), Spiel über **LAN** | kein Zugriff; Übernahme durch die Spieler |

### Konsequenzen aus LAN-Betrieb

- Der **Host** erzeugt die Welt: Worldgen, Server-Skripte (KubeJS `server_scripts`) und Server-Configs wirken nur über die Instanz des Hosts.
- IE-Server-Configs liegen **pro Welt** in `saves/<Welt>/serverconfig/` — sie müssen in die Welt des Hosts übernommen werden, nicht nur in `config/`.
- Mekanism-Worldgen liegt in `config/Mekanism/world.toml` der Host-Instanz.
- Alle Spieler brauchen identische Mods; Client-/Startup-Skripte (KubeJS `startup_scripts`, `client_scripts`, `assets`) müssen bei **allen** Spielern liegen.
- `saves/WasIchBauenWill` in den lokalen Instanzen ist eine **Testwelt**, nicht die Hauptwelt.

## Arbeitsregeln

- Die bestehende Welt wird als reale Ausgangslage berücksichtigt.
- Keine Progressionsänderung ohne Prüfung der Auswirkungen auf die bestehende Welt.
- Fakten nur, wenn verifiziert (JAR, Config, Log oder Test). Vermutungen werden als 🔵 markiert oder erfragt.
- KubeJS und Configs sind die Implementierungsebene; die Designentscheidungen liegen in dieser Dokumentation.
- Experimente nur in der Testinstanz.
- Änderungen werden im CHANGELOG dokumentiert; Änderungen an der Testinstanz zusätzlich in `13_TESTINSTANZ_CHANGELOG.md`.

## Statussystem

- 🟢 DECIDED — verbindlich beschlossen / verifiziert
- 🟡 PLANNED — vorgesehen, aber noch nicht vollständig spezifiziert
- 🔵 OPEN — noch zu entscheiden / zu verifizieren
- 🔴 BLOCKED — kann erst nach einer anderen Entscheidung bearbeitet werden

## ⚠️ Wichtig für den Host

**Die Hauptwelt nicht mit Mekanism öffnen, bevor die finalen Worldgen-Configs eingespielt sind.** Sonst generiert Mekanism in allen neu betretenen Chunks mit Default-Werten, inklusive Zinn und Blei in der Overworld. Retrogen kann das nicht rückgängig machen.

## Stand der Hauptwelt (2026-10-07)

- Botania: Rune Altar vorhanden.
- Immersive Engineering: Steel, Biodiesel-Generator, Crusher, Arc Furnace (Lichtbogenofen), Pumpjack/Ölförderung gerade gebaut.
- Tinkers Construct: begonnen.
- Twilight Forest: gerade erstmals betreten.
- Applied Energistics 2: noch nicht begonnen.
- **Mekanism, Mekanism Generators, Blood Magic, Blood-Smeltery und deren Integrationsmods wurden gerade erst hinzugefügt. Die Hauptwelt wurde noch nie mit Mekanism geöffnet.** Alle erkundeten Chunks haben keine Mekanism-Erze (→ Retrogen, siehe `03_ERZGENERATION.md`).

## Festgelegte Designrichtung

🟢 Core-Technik: Immersive Engineering, Immersive Petroleum, Mekanism, Mekanism Generators, Applied Energistics 2, Applied Mekanistics.

🟢 Magie: Botania, MythicBotany, Blood Magic.

🟢 Werkzeuge/Materialien: Tinkers Construct, Tinkers Levelling Addon, Blood-Smeltery.

🟢 Mekanism übernimmt die High-Tech-/Chemie-/Verarbeitungsrolle, ersetzt aber nicht automatisch jede andere Verarbeitung.

🟢 Immersive Engineering bleibt die industrielle Grundlage.

🟢 **AE2 ist Endgame.** Einzige Ausnahme: ein früher, teurer Storage-Layer, mit dem bestehende Kisten/Drawers angebunden und durchsucht werden können.

🟢 Keine Erweiterung „More Mekanism Processing“; Erträge werden gezielt selbst gebalanced.

🟢 Keine weiteren großen Basistech-Mods. Spätere Erweiterungen sind Endgame-orientiert und werden separat entschieden.

🟢 **Raumfahrt ist Hauptziel des Packs** (Beyond Earth + Star Wars Planets + Giselle Addon). Energie und Treibstoff dafür kommen ausschließlich aus anderen Mods (IE, Immersive Petroleum, Mekanism). Details: `15_RAUMFAHRT.md`.

---

# Arbeitsplan

Leitidee: **erst das Zeitkritische und Strukturelle entscheiden, dann balancieren, dann implementieren.**

| Phase | Inhalt | Status |
|---|---|---|
| 0 | Grundlagen: Projekt/Git, Doku verifiziert & korrigiert, Testinstanz | 🟢 |
| 1 | **Worldgen** (zeitkritisch) | 🟢 in der Testinstanz abgeschlossen (2026-10-08); Übernahme in Phase 8 |
| 2 | Progressions-Meilensteine (Gates & Kreuzungspunkte) | 🔵 |
| 3 | Verarbeitung & Erträge | 🔵 |
| 4 | Energie & Flüssigkeiten | 🔵 |
| 5 | AE2 zweistufig (früher Storage-Layer / Endgame-ME) | 🔵 |
| 6 | Cross-Mod-Rezepte | 🔵 |
| 7 | KubeJS-/Config-Umsetzung & Test in der Testinstanz | 🔵 |
| 7b | **Questbuch & Story:** FTB Quests entlang der Meilensteinkarte, Story-Figuren mit Easy NPC (+ Dialogue Immersion) | 🔵 |
| 8 | Übernahme in die Hauptwelt (Host) | 🔵 |

### Phase 1 — Worldgen ⏰
Jeder neu erkundete Chunk bekommt die aktuelle Default-Verteilung. Deshalb zuerst:
1. In der Testinstanz prüfen, ob IE-/Mekanism-/AE2-Erze bereits in Twilight-Forest-Biomen spawnen.
2. Zielverteilung festlegen (Osmium, Zinn, doppelte Lead-/Uranium-Generierung, TF-Industrieerze).
3. Umsetzung bevorzugt über Configs (IE serverconfig, `Mekanism/world.toml`, AE2, Tinkers); KubeJS-Worldgen nur für das, was Configs nicht können (z. B. Erze gezielt in TF-Biomen), nach API-Test.
4. **Retrogen** für bereits erkundete Chunks einplanen (🟢 gewünscht), vor allem für Mekanism-Erze.

### Phase 2 — Meilensteine
Statt zuerst alle Erträge zu balancieren, werden 10–15 Schlüssel-Meilensteine definiert (z. B. erste Mekanism-Maschine, erster Raumflug, Metallurgic Infuser, fortgeschrittene IE-Multiblöcke, Terrasteel, Blood-Altar-Tiers, AE2-Storage-Layer, ME Drive, Alfheim, Alfsteel, Fusion/SPS) — jeweils mit benötigten Pfaden und Kreuzungspunkten, abgeglichen mit dem Weltstand.

### Phase 3–6
Erträge pro Material und Pfad → Energie-Rollen → AE2-Gates → Cross-Mod-Rezepte nur an den Kreuzungspunkten aus Phase 2.

### Phase 7 — Umsetzung
Skripte/Configs entstehen im Projektordner (`kubejs/`, `config-overrides/`), werden in die Testinstanz kopiert und dort getestet.

### Phase 7b — Questbuch & Story
- FTB Quests (+ Library, Teams, Item Filters) führt durch die Progression; Kapitelgerüst ist die Meilensteinkarte (`docs/meilensteine/`).
- 🟢 **Easy NPC** (Kern, Bundle, Config UI) und **Easy NPC Dialogue Immersion** sind im Pack (Entscheidung 2026-10-11). Damit entstehen Story-Figuren mit Dialogen, z. B. in Blue Skies oder auf den Planeten.
- 🔵 Offen: welche Figuren, wo sie stehen, ob Dialoge Quests auslösen oder abschließen können (Anbindung Easy NPC ↔ FTB Quests prüfen).
- Star-Wars-Kapitel: siehe `17_STAR_WARS_1.20.1.md`.

### Phase 8 — Übernahme
Backup der Hauptwelt beim Host → Configs/Skripte bei allen Spielern einspielen (Server-Teil beim Host) → Retrogen → Changelog für die Mitspieler.

---

# Entscheidungslog / offene Punkte

| Bereich | Status | Datei |
|---|---|---|
| Modbasis | 🟢 | `00_MODBASIS.md` |
| Progression | 🟡 Pfade festgelegt, Meilensteine offen | `01_PROGRESSION.md` |
| Ressourcen | 🟢 Inventur + Tag-Reconciliation verifiziert | `02_RESSOURCEN.md` |
| Erzgeneration | 🟡 Ist-Zustand verifiziert, Soll teilweise offen | `03_ERZGENERATION.md` |
| Verarbeitung | 🔵 | `04_VERARBEITUNG.md` |
| Energie/Flüssigkeiten | 🔵 | `05_ENERGIE_FLUESSIGKEITEN.md` |
| Magie | 🟡 Grundrollen festgelegt | `06_MAGIE.md` |
| Cross-Mod-Integration | 🟡 Prinzip festgelegt | `07_CROSSMOD_INTEGRATION.md` |
| AE2/Automation | 🟡 Rolle festgelegt, Gates offen | `08_AE2_AUTOMATION.md` |
| Endgame | 🔵 | `09_ENDGAME.md` |
| Raumfahrt | 🟡 Hauptziel beschlossen, Mods noch nicht installiert | `15_RAUMFAHRT.md` |
| KubeJS | 🟡 leer, Struktur geplant | `10_KUBEJS.md` |
| Testing | 🟢 Testinstanz vorhanden | `11_TESTING.md` |
| Changelog | 🟢 | `12_CHANGELOG.md`, `13_TESTINSTANZ_CHANGELOG.md` |
| Erz × Mod Matrix | 🟢 Ist + Soll | `14_ERZ_MOD_MATRIX.md` |

## Offene Fragen an das Team

🟢 Osmium/Zinn: Option B (Osmium OW selten + TF hoch, Zinn nur TF).
🟢 Lead nur Mekanism-Erz (umgestellt 2026-10-08, vorher IE-Erz), Uranium nur Mekanism-Erz.
🟢 Retrogen zwingend (Hauptwelt bereits weit erkundet).
🔵 Uran-Menge erhöhen? Kobalt-Menge erhöhen?

Übersicht aller Erze × Mods: `14_ERZ_MOD_MATRIX.md`.

## Backlog (zurückgestellt)

### 🔵 Eigene Erz-Texturen für fremdes Gestein
Erze, die per KubeJS in anderes Gestein gesetzt werden, zeigen die Overworld-Steintextur. Sie werden gesammelt und später gemeinsam umgesetzt: eigene KubeJS-Blöcke mit zusammengesetzter Textur, dazu Original-Drops (Loot-Table) und Original-Tags (`forge:ores/…`).

| Erz | Gestein | Quelle |
|---|---|---|
| Osmium | Mondgestein (`beyond_earth:moon_stone`) | `moon_ores.js` |
| Certus-Quarz | Mondgestein | `moon_ores.js` |

Erkenntnis aus der Vorarbeit: Der KubeJS-1802-Block-Builder hat `noDrops()`, `tagBoth()`, `requiresTool()` und `textureAll()`. Damit lassen sich die Drops über eine eigene Loot-Table regeln.
