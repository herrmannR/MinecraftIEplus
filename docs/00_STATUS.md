# Minecraft-Modpack „Immersive Engineering+“ (1.20.1) — Projektstatus

> Einstiegspunkt. Nur der aktuelle Stand und das Offene; Erledigtes, Phasenbeschreibungen und Entscheidungslog stehen in `00_STATUS_ARCHIV.md`.
> Letzte Überarbeitung: 2026-10-19 (Doku-Prüfung).

## ▶ Wo wir stehen

Minecraft **1.20.1, Forge 47.4.26** (Wechsel von 1.18.2 am 2026-10-11). Erledigt sind die Grundlagen, die Erzverteilung (umgesetzt und nachgezählt, 2026-10-17) und die erste Fassung der Skripte (Tests 1–31 bestanden). Die Story schreibt der User (`18_STORY.md`, Part 1 im Umriss). Questtexte gibt es für alle großen Mods im Entwurf.

**Als Nächstes (Ziel: Teil 1 fertig, 2026-10-20):** Die Entscheidungen für Teil 1 sind getroffen (F3 am 2026-10-20). Die Skripte für Teil 1 sind geschrieben (`10_KUBEJS.md`, Abschnitt „Teil 1“) und müssen in der Testinstanz getestet werden (Tests 42–57). Danach bleiben für Teil 1 nur Easy-NPC-Dialoge und Questbuch.

### Fahrplan

Die Schritte laufen in dieser Reihenfolge; 1 und 2 gehen parallel. Alle offenen Fragen stehen nur in `20_ENTSCHEIDUNGEN.md` (F, O, P, T); hier steht nur, woran ein Schritt hängt.

| Schritt | Inhalt | Stand | Hängt an |
|---|---|---|---|
| 1 Entscheidungen | Teil 1 entschieden; Teil 2 und 3 offen | 🟢 Teil 1 erledigt (2026-10-20) | User |
| 2 Tests im Spiel | Tests 33–57 (`11_TESTING.md`), Prüfpunkte P1–P15 | 🟡 offen | User spielt |
| 3 Story von Part 1 fertig | `18_STORY.md` bis zur Rückkehr des Meisters; reine Story-Texte (Tagebücher, Schriftrollen, Dialoge) schreibt der User beim Bau der NPCs | 🟡 Handlung steht, Texte offen | User; O4, O6–O9, O15, O25, O34 |
| 4 Skripte und Raketen | Teil 1 geschrieben (2026-10-20): Raketen T1–T4, Rover, eigene Items, Altar-Dimension (Ritual, Amulett, Truhe), Ideenimport-Entfernungen, IE-Crusher, AE2, Airship, Shop und Baupläne, Galaxy in a Cube aus der Overworld. Offen: Antimaterie-Treibstoffe T6/T7, Etrium, Planetenstufen T5–T7, Beskar, Kyber (Teil 2 und 3) | 🟡 Teil 1 ungetestet | Tests 42–57 |
| 5 Balance (frühere Phasen 3–6) | Erträge der Erzverarbeitung, Energie, AE2 zweistufig, Cross-Mod-Rezepte (`07_CROSSMOD_INTEGRATION.md`) | 🔵 nicht begonnen | F10, F19, F20, F24 |
| 6 Questbuch einbauen | FTB Quests aus `questtexte/`, Easy-NPC-Figuren (Droide, Einsiedler, Elf, Figur im Blue-Skies-Haus) | 🟡 Texte im Entwurf | Schritte 3–5 |
| 7 Hauptwelt umstellen | Aufgaben beim Host (H1–H5 unten) | 🔵 | Schritte 4–6; nur, was in `11_TESTING.md` ✅ hat |

### Aufgaben beim Host (Schritt 7)

- H1. Mod-Liste des Hosts abgleichen (Chisels & Bits war nur dort).
- H2. Checkliste für alle Spieler, noch in 1.18.2 (siehe „Wichtig für den Host“).
- H3. Vollständiges Backup beim Host (im Test-Backup fehlte `DIM-1/entities`).
- H4. Alte `immersivepetroleum-server.toml` entfernen; Worldgen-Configs und Tag-Overrides vor dem ersten Start einspielen.
- H5. Questbuch und Story-Figuren einspielen.

(Die Nummern 9–28 und die Blöcke A–G aus früheren Fassungen gelten nicht mehr; sie stehen noch im Archiv.)

### Welche Dokumente gelten

| Dokument | Stand |
|---|---|
| `20_ENTSCHEIDUNGEN.md` | 🟡 **die** Liste aller offenen Fragen (F, O, P, T); Antworten werden von dort in die Fachdokumente übertragen |
| `00_MODBASIS.md` | 🟢 verbindliche Mod-Liste (Rohliste `mods_v5.txt`) |
| `01_PROGRESSION.md` | 🟡 Pfade, Kapiteltabelle, Raketen; offene Fragen in 20 |
| `02_RESSOURCEN.md` | 🟢 Inventur aus den JARs |
| `03_ERZGENERATION.md` | 🟢 Verteilung beschlossen und im Spiel nachgezählt (2026-10-17) |
| `07_CROSSMOD_INTEGRATION.md` | 🟡 Tinkers in den höheren Stufen, Schmelzregeln, Blood-Smeltery |
| `10_KUBEJS.md` | 🟡 Stand der Skripte, was noch fehlt |
| `11_TESTING.md` | 🟢 Testplan; Tests 1–31 und 32a bestanden, 32 entfällt (O22), 33–57 offen |
| `12_CHANGELOG.md` | 🟢 fortlaufend |
| `14_ERZ_MOD_MATRIX.md` | 🟢 Ist und Soll |
| `15_RAUMFAHRT.md` | 🟢 |
| `16_MODLISTE_1.20.1.md` | 🟢 Befunde zu Blue Skies und Welt-Test |
| `17_STAR_WARS_1.20.1.md`, `recherche/` | 🟢 |
| `18_STORY.md` | 🟡 Part 1 im Umriss, Part 2 und 3 folgen; schreibt der User |
| `19_HILFEBUECHER.md` | 🟢 welche Mods ein Buch im Spiel haben; Regel für die Erklärtiefe im Questbuch |
| `meilensteine/` (samt Artifact-Seite) | 🟡 nach der Story umgebaut (2026-10-14): 51 Meilensteine, 9 Pfade, 16 Kapitel in drei Parts |
| `erzatlas/` (samt Artifact-Seite) | 🟢 Erzverteilung |
| `modpfade/` | je Mod eine Seite und `WISSEN.md` |
| `questtexte/` | 🟡 Questtexte je Mod (Skill `questtexte`); alle großen Mods im Entwurf (2026-10-19) |
| `archiv_1182/` | 🔴 Stand 1.18.2 (früher 04–06, 08, 09, 13), gilt nicht mehr |
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
- Offene Fragen stehen nur in `20_ENTSCHEIDUNGEN.md`; Fachdokumente nennen nur die Nummer. Jede Tatsache und jede Tabelle hat genau ein führendes Dokument, andere verweisen darauf.

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
