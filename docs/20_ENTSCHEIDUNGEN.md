# 20 — OFFENE ENTSCHEIDUNGEN UND PRÜFPUNKTE

> Die **einzige** zentrale Liste aller offenen Fragen des Projekts (seit 2026-10-19). Zusammengeführt aus `18_STORY.md` (O-Liste, Technik T1–T11), `01_PROGRESSION.md`, `15_RAUMFAHRT.md`, `00_STATUS.md`, dem Fragenkatalog der Meilensteinkarte und den Abschnitten „Offen vor dem Einbau“ der Questtexte.
>
> **So wird gearbeitet:**
> - Der User antwortet mit der Nummer („F6: erst ab T2“, „O7: R4-X2“).
> - Claude trägt die Antwort in das unter **→** genannte Dokument ein, zieht Questtexte, Meilensteinkarte und Erzatlas nach und verschiebt die Frage hier nach „Erledigt“ (mit Datum).
> - Neue offene Fragen kommen **nur hierher** (nächste freie Nummer). Fachdokumente nennen nur die Nummer, keine eigene Fragenliste.
> - Die Questtext-Dateien behalten ihre Abschnitte „Offen vor dem Einbau“ als Einzelheiten je Mod; führend ist diese Liste.
>
> Nummern: **F** = Entscheidung zu Progression und Pack, **O** = Story (Nummern wie bisher in `18_STORY.md`), **P** = im Spiel prüfen, **T** = Story-Technik (Nummern wie bisher in `18_STORY.md`).

## Teil 1 · Entscheidungen zu Progression und Pack

Beantwortet am 2026-10-20: F2 (bis auf g), F2e, F3, F6, F7, F10, F11, F16–F19, F21–F23, F25; siehe „Erledigt“.

**F2g · Etrium** (Teil 2)
Zutat von Glacio (Ice Shard gibt es auch auf Mond und Mars) oder ein Item vom Meister? Wofür der Etrionic Core?
→ `15_RAUMFAHRT.md`

**F5 · Kyber und Star-Wars-Rohstoffe**
- a) Endor hat ohne Eingriff kein Kyber-Erz (nur Tatooine). Vorkommen per Datapack, oder ändert sich die Hürde „Kyber von Endor → T6“? (Teil 3)
- b) Kyber-Erz → Kristall von Galaxy in a Cube: Drop oder Rezept? (Teil 3)
- c) ✅ Plastoid verkauft der Einsiedler (2026-10-20, siehe O28).
- d) ✅ Gas Harvester, Durasteel und Co. nur im Shop, mit Bauplan (2026-10-20, siehe O28).
→ `17_STAR_WARS_1.20.1.md`, `meilensteine/`; `swplanets.md`, `swgc.md`

**F9 · Botania: Mead of Kvasir und Corporea** (Teil 2)
- a) Wie kommt der Spieler an den Met? Hängt am Meister in Part 2.
- b) Corporea bei BO7 lassen oder schon nach BO5?
→ `18_STORY.md`, `meilensteine/`; `botania.md`

**F12 · Star Wars Planets: Ausrüstung** (Teil 3)
- a) Stormtrooper-Rüstung: neues Rezept oder nur Beute? Davon hängt die Beskar-Rüstung ab.
- b) Beskar: welcher Ofen, welches Rezept, welches Nugget-Item, welche Kosten je Rüstungsteil?
- c) Der Blaster von Star Wars Planets doppelt den von Galaxy in a Cube: behalten oder entfernen?
- d) Jawas: welcher Mod stellt sie, welche Tauschverhältnisse?
→ `17_STAR_WARS_1.20.1.md`; `swplanets.md`

**F28 · Galaxy in a Cube: Fahrzeuge** (Teil 3, erst wenn man auf den Star-Wars-Planeten ist)
AT-RT, AT-ST und Delta-7B (`swgc:atrt`, `swgc:atst`, `swgc:delta7b`) haben im Mod weder Rezept noch Fundort, also nur Kreativmodus (G8). Wie kommen sie ins Pack: eigene Rezepte per KubeJS (Werkbank oder hinter Bauplan wie die Rüstungen) oder Questbelohnung? Vorher Steuerung und Werte auslesen (WISSEN.md „Offen“).
→ `17_STAR_WARS_1.20.1.md`; `modpfade/swgc/WISSEN.md`, `swgc.md`

**F29 · Tusken Raider auf Tatooine** (Teil 2; Wunsch des Users 2026-10-20: sie sollen auf Tatooine spawnen)
Galaxy in a Cube setzt sie nur über einen eigenen Spawner im Code, der nur in der Overworld läuft (Test 54); in der Overworld sind sie jetzt per `galaxy_overworld.js` abgefangen. Auf Tatooine kommen sie also nicht von selbst. Weg: Forge-Biome-Modifier `add_spawns` für `swgc:tusken_raider` in `swplanets:tatooine_desert` und `swplanets:tatooine_rocky_desert` (oder Tag `swplanets:tatooine_like`); vorher prüfen, ob das Wesen eine Spawn-Regel hat und ob Gruppe und Häuptling dann fehlen. Wie häufig, und neben den Pillar-Tusken von Star Wars Planets?
→ `17_STAR_WARS_1.20.1.md`; `modpfade/swgc/WISSEN.md`

**F30 · Kaleidoscope-Mühlstein vervielfacht Erze** (Teil 1; Befund KS1, 2026-10-21)
Mit einem angespannten Esel macht der Millstone aus Iron und Gold Ore 3 Raw, aus Copper Ore 5 Raw Copper, aus Diamond Ore 2 – ohne Strom, gleich nach Eisen. Lassen, abschwächen (z. B. 2× wie der IE-Crusher) oder die Erzrezepte entfernen und in JEI ausblenden?
→ `modpfade/CROSSMOD_AUFFAELLIGKEITEN.md` KS1, Ü2; `questtexte/kueche.md` KU4-06

**F20 · Kostenrahmen je Meilenstein** (Schritt 5, Balance; User macht das später bei Bedarf, 2026-10-21)
→ `01_PROGRESSION.md`

**F24 · Automatisierung teuer freischalten** (Idee des Users; verschoben auf Schritt 5, Balance, 2026-10-20)
Welche Maschinen (IE Excavator, Mekanism-Factories, AE2-Autocrafting), welcher Meilenstein? Für Teil 1 nichts zusätzlich.
→ `01_PROGRESSION.md`

## Teil 2 · Entscheidungen zu Questbuch und Story

Die Story schreibt der User. Diese Fragen braucht es, damit Questbuch und Skripte gebaut werden können.

Beantwortet am 2026-10-20: F1, F4, F8, F14, F15; siehe „Erledigt“.

**F13 · Holocrons und Machtpunkte (O37)** (Teil 2)
Welche Jedi- und Sith-Artefakte, und wie hängen sie an den Machtpunkten?
→ `18_STORY.md`; `swgc.md`

### Story, Part 1

| Nr. | Frage |
|---|---|
| O60 | Rest: Der Tempel liegt laut Story auf dem Merkur, der User schrieb bei der Frage nach dem Erbauer „Mars“. Bleibt es beim Merkur? (Erbauer Exar Kun entschieden 2026-10-25) |
| – | Alle Story-Fragen für Part 1 sind beantwortet (2026-10-21). |

### Story, Part 2 und 3 (später)

| Nr. | Frage |
|---|---|
| O10 | Welche Bosse in Part 3, auf welchen Planeten, warum? |
| O11 | Ablauf der Jedi-Ausbildung; Lichtschwert-Quest in Part 2 oder 3? |
| O12 | Kopfgeldjäger-Quests: welche Figuren, wo, welche Belohnungen? Passt das zur Jedi-Ausbildung? |
| O21 | Was schaltet T7 (Mandalore) frei? |
| O36 | Machtpfade: beide Pfade (hell und dunkel) Pflicht oder einer? Reihenfolge? |
| O38 | Freischaltung der Macht: Machtmessgerät, teures Ritual oder Handel? |

## Teil 3 · Im Spiel prüfen

Hier musst du nichts entscheiden, nur nachsehen. Testwege und Ergebnisse stehen in `11_TESTING.md` (Tests 33–41 erledigt, 2026-10-21); Funde gehen in `11_TESTING.md` und `modpfade/<mod>/WISSEN.md`.

| Nr. | Mod | Was prüfen |
|---|---|---|
| P1 | Mekanism | **Wichtigste Lücke:** Größen der Multiblöcke (Dynamic Tank, Thermal Evaporation, Fission, Boiler, Turbine, Induction Matrix, Teleporter, Fusion, SPS); Zündenergie der Fusion; Eingang des SPS (Test 37 bestanden: Grundmaschinen bis Elite ohne Konflikte) |
| P3 | AE2 | Storage Bus an Storage Drawers; Quantum Bridge Card, Magnet Card; Chunkloading der Quantum Bridge auf dem Server |
| P4 | Ad Astra | Automation NASA Workbench; Sauerstoffverbrauch der Giselle-Verzauberungen; Boss-Mobs und Beute der More-Structures-Dungeons; nimmt Ad Astra Planetenstufen über 4 an? |
| P5 | Star Wars Planets | Ölquellen auf Tatooine, Reiten des Bantha, Kälte auf Mandalore, Structure-Task in FTB Quests; Dopplungen mit Galaxy in a Cube (Test 38: laufen zusammen; genauer für Teil 2) |
| P6 | Galaxy in a Cube | Befehle an Droiden, Lichtschwert-Formen, Zerlegen an der Assembly Bench; IDs der bemalten Klonrüstung |
| P7 | Tinkers | Blood-Smeltery: Flüssigkeiten und Rezepte; Platten bei Mighty Smelting; Trait Oxygenated; Fundorte der Ancient Tools; reicht die Tinkers-Werkbank den Spieler durch (Bauplan-Rezepte)? |
| P8 | Blue Skies | Zeal Lighter (Währung), Werkzeugrezepte und Sticks in JEI, Schild gegen den Arachnarch, erklärt das Journal die Progression? |
| P9 | Blood Magic | Demon Realm auf dem Server; Zahl der Steine je Ritual; Ritual nur im Tempel abfangbar (T7, ehemals E19) |
| P10 | Alex's Mobs | Ruft der Skreecher den Warden? Rückweg vom Weltrand |
| P11 | Roguelike Dungeons | Rückweg des Sentient Pathfinder, Herkunft der Kreide, Seltenheit des Portalbaums |
| P12 | Immersive Aircraft | Blaze Powder trotz `disableSolidFuel`, Fliegen auf Planeten, Item für den Booster-Platz |
| P13 | IE | In welchem Eintrag des Handbuchs das Seismic Survey Tool steht |
| P15 | FTB Quests, Easy NPC | Ist eine Stage-Aufgabe erfüllt, wenn nur ein Party-Mitglied den Tag hat? Öffnet der Shop des Einsiedlers nur unter Bedingung? Globale Bauplan-Freischaltung per Weltwert |
| P16 | Kaleidoscope | Welche drei Gewürze die Gewürzflasche verlangt (JEI „Mixing Seasoning“). Zusammenführung und Handel des Chef: erledigt (Tests 65–72, 2026-10-21) |

### Story-Technik (noch zu klären)

| Nr. | Frage |
|---|---|
| T9 | Bosse und Macht-Fähigkeiten von Galaxy in a Cube (Rezepte sind ausgelesen, `modpfade/swgc/WISSEN.md`). |

## Teil 4 · Erst beim Einbau ins Questbuch

Kein Handlungsbedarf jetzt: Formatierung, Kontrollhaken statt Prüfaufgaben (Zähmen, Rituale, Strukturen, Tinkers-Material), Patchouli-Buch mit NBT als Aufgabe, Platzhalter-IDs (`kubejs:steuerkern_*`), Mengen wie 16 Certus (AE1-05), weiße Petals oder beliebige Blume (BO1-02), Liste der Rezepte, die der IE-Crusher übernimmt.

## Erledigt

| Nr. | Antwort | Datum | Eingetragen in |
|---|---|---|---|
| O62 | Der Meister kennt den Einsiedler („ein alter Bekannter aus meiner Welt“) und meidet ihn aus Schmerz. In Teil 1 steht das nur im Logbuch (Teil 3); Davijaan weiß nichts vom Meister, Vos erwähnt ihn nicht. Auflösung in Teil 2 | 2026-10-25 | `story/texte/logbuch.md`, `18_STORY.md` |
| O63 | „Macht“, „helle/dunkle Seite“ dürfen in Teil 1 überall stehen außer in den Questtexten (ersetzt O9 für die übrigen Texte). Bestehende Texte werden erst angepasst, wenn der User alle Änderungen eingetragen hat | 2026-10-25 | `story/texte/` |
| O61 | Teil 1 hat keine Entscheidungen mit Folgen; Dialoge haben nur Gesprächszweige, die zum selben Ziel führen. Die große Wahl (hell/dunkel, O36) kommt in Teil 2 | 2026-10-21 | `story/texte/dialoge_dd3r8.md` |
| O60 | Der Helm heißt im Spiel „Verbeulter Pilotenhelm“ bzw. „Pilotenhelm des Einsiedlers“ (kein „Klon“, Geheimnis bleibt); IDs bleiben | 2026-10-21 | `18_STORY.md`, `story/texte/tooltips.md` |
| O60 | Den Sith-Tempel hat **Exar Kun** gebaut (Naga Sadow, Darth Momin, Ajunta Pall verworfen) | 2026-10-25 | `18_STORY.md` |
| O59 | Der Meister stellt sich auf Glacio als „Quinlan“ vor (nur Vorname); was er ist, kommt erst im Training | 2026-10-21 | `story/texte/dialoge_vos.md` |
| O58 | Quinlan Vos und Meister Cerina (Vernestra Rwoh) kennen sich nicht; er weiß nur vom „Hellen Elfen“ | 2026-10-21 | `18_STORY.md`, `story/texte/dialoge_cerina.md` |
| O57 | Der Altar im Tempel war intakt und zerbrach beim Sog, der den Meister in die Dimension zog | 2026-10-21 | `18_STORY.md`, `story/texte/logbuch.md` |
| O53 | K5 schließt mit dem Auftrag „Treibstoff für den Mars“: Abgabe von entschwefeltem Diesel und Advanced Control Circuit beim Droiden | 2026-10-21 | `story/ABLAUF.md` |
| O54 | Das Wesley's-Item der Altar-Reparatur ist der Orb of the Deep (`wrd:orb_of_the_deep`) | 2026-10-21 | `story/ABLAUF.md`, F8 |
| O55 | Figuren an Orten, die die Spieler bauen (Mars-Station, Elfenportal, Vos in der Basis), setzt der User von Hand per fertigem Befehl | 2026-10-21 | `story/ABLAUF.md` |
| O56 | Nach der Reparatur steht das komplette Ritual Pathway to the Endless Realm; aktivieren müssen es die Spieler selbst | 2026-10-21 | `story/ABLAUF.md` |
| O47 | „Siegel der Traumwelten“ (Bodhi Bad Dur, nach dem letzten Boss) ersetzt den Dusk Arc in der Altar-Reparatur (ändert F8) | 2026-10-21 | `18_STORY.md` |
| O48 | Altar-Reparatur per Rechtsklick mit den Zutaten; KubeJS ersetzt den kaputten Altar | 2026-10-21 | `18_STORY.md` |
| O49 | Vier Tempelrollen als eigene KubeJS-Items; Text im Patchouli-Logbuch, Rolle bleibt für die Abgabe | 2026-10-21 | `18_STORY.md` |
| O50 | Story-Texte (Logbuch, Rollen, Tagebuch, Dialoge) entwirft Claude, der User überarbeitet; Dialoge baut der User von Hand im Easy-NPC-Editor; Hauptquests in Buch 1 als mehrere Story-Schritte je Kapitel | 2026-10-21 | `18_STORY.md` |
| O51 | Logbuch-Teile und Tagebuch als Patchouli-Buch „Logbuch des Meisters“ (statt geschriebener Bücher, ändert T5) | 2026-10-21 | `18_STORY.md` |
| O52 | Ende Teil 1: Versteck des Hosts auf Glacio, Vos und DD3R8 erscheinen dort per Befehl | 2026-10-21 | `18_STORY.md` |
| O6 | Fünf Teile „Logbuch des Meisters“, vom Droiden entschlüsselt, je als Belohnung am Kapitelende; jeder deutet auf das nächste Ziel | 2026-10-21 | `18_STORY.md` Abschnitt 5 |
| O25 | Einsiedler **Davijaan** (geheim: Odd Ball, CC-2237, Obi-Wans Flügelmann, nach Order 66 zum Mond geflohen). Vertrauen über den kaputten Klonhelm aus der Höhle beim Mond; Reparatur an der Werkbank (Stahlplatten, Isolierglas, Basic Control Circuit, Elektronenröhre) zu `kubejs:klonhelm_repariert` | 2026-10-21 | `18_STORY.md` |
| O34 | Blue-Skies-Haus: Figur ist der Herrscher **Bodhi Bad Dur** im Exil; Start Anfang K3 (Zinn, Osmium); Handel wie der Gatekeeper, echter Gatekeeper abgeschaltet; ab K8 Pflicht („Siegel der Traumwelten“ für den Altar) | 2026-10-21 | `18_STORY.md` Abschnitt 5 |
| O43 | Der Galaktische Strahlenschutz ist das Gehäuse um das Relikt; das Relikt fliegt mit nach Glacio | 2026-10-21 | `18_STORY.md` Abschnitt 5 |
| O45 | Namen: Elf **Meister Cerina** (weiblich), Herrscher **Bodhi Bad Dur**, Einsiedler **Davijaan**, Meister **Quinlan Vos** | 2026-10-21 | `18_STORY.md` |
| O46 | Hinter Meister Cerina steckt die Mirialanerin **Vernestra Rwoh** (Jedi, Lichtpeitsche); Katooni verworfen | 2026-10-21 | `18_STORY.md` |
| O4 | Im Dungeon von dunklen Wesen umzingelt; das Relikt hätte ihn von innen zerstört, er floh ohne es nach Glacio (Heimat der hellen Macht) und schrieb ins Tagebuch, wer unbefleckt von der Macht sei, solle es ihm bringen | 2026-10-21 | `18_STORY.md` |
| O7, O15 | Droide **DD3R8**: Overworld, dann Mars-Station; verschwindet, sobald die Spieler das Relikt haben; wieder da beim Meister auf Glacio (mit der Macht geholt). Danach führen Tagebuch und Elf | 2026-10-21 | `18_STORY.md` |
| O8 | Mars ist der Horchposten, Venus nur wegen der Rohstoffe interessant; Mekanism und AE2 brauchen in Teil 1 keine Story, die Questtexte reichen | 2026-10-21 | `18_STORY.md` |
| O9 | Das Geheimnis legt der Meister im Training offen (Teil 2). Anspielungen nur in den Dialogen der Figuren, die der User schreibt; Questtexte erwähnen Star Wars nicht | 2026-10-21 | `18_STORY.md` |
| O13 | T5 Endor, T6 Tatooine, Hoth, Mustafar, T7 Mandalore | 2026-10-14 | `18_STORY.md`, `15_RAUMFAHRT.md` |
| O32 | Bauplan schaltet beim Kauf frei, bleibt erhalten; Steuerkern je Droide | 2026-10-14 | `18_STORY.md` |
| – | Rumpf T5 aus Etrium | 2026-10-19 | `15_RAUMFAHRT.md`, Meilensteinkarte |
| F2a | Mekanism-Stufe je Rakete: T1 Basic, T2 Advanced, T3 Elite, T4 Ultimate Control Circuit, jeweils im Rezept des Triebwerks | 2026-10-20 | `01_PROGRESSION.md`, `15_RAUMFAHRT.md` |
| F2 (Teil aus anderem Pfad) | T1 Mekanism (Sauerstoff), T2 Ventium-Barren (Blue Skies, Everbright), T3 Imbued Slate (Blood Magic, Altar-Stufe 3, gilt auch für die Venus), T4 Elementium vom Elfen (magische Komponente) | 2026-10-20 | `01_PROGRESSION.md`, `15_RAUMFAHRT.md` |
| F2d | Raketen T2–T4: Ad-Astra-Rezepte plus die Zusätze aus F2/F2a/F2f | 2026-10-20 | `15_RAUMFAHRT.md` |
| F2f | Der Elf übergibt ein Schlüsselbauteil **„Galaktischer Strahlenschutz“** (eigenes KubeJS-Item), das im Rezept der Rakete T4 steckt | 2026-10-20 | `18_STORY.md`, `15_RAUMFAHRT.md` |
| F6 | Petroleum ist vor T1 nicht Pflicht; T1 fliegt mit Biodiesel. Erdöl (IE4) bleibt in K4 als Nebenquest | 2026-10-20 | `01_PROGRESSION.md`, `15_RAUMFAHRT.md` |
| F7 | Blood-Magic-Meilensteine neu: BM2 Altar Stufe 3, BM3 Rituale, BM4 Tempel/Demon Realm/Stufe 4, BM5 Endless Realm/Stufe 5, BM6 Hellforged-Ausbau | 2026-10-20 | `meilensteine/` |
| F10 | AE2 verteuern: Storage-Layer (AE1) bleibt in K3; ME Controller und ME Drive brauchen zusätzlich Advanced Control Circuit und Stahlplatten | 2026-10-20 | `01_PROGRESSION.md`, `10_KUBEJS.md` |
| F17 | Immersive Aircraft: kurze Reihe (6 Quests) ab K4; Gyrodyne bleibt früh; ab dem Airship Rezepte mit IE-Stahl | 2026-10-20 | `questtexte/aircraft.md` |
| F19 | Meilensteinkarte bestätigt; alle vier Blue-Skies-Bosse Pflicht | 2026-10-20 | `meilensteine/` |
| F23 | Die Tinkers-Schmelzerei steht in der Hauptwelt schon. (Die Startquest an der Schmelze ist durch F26 ersetzt: erste Quest ist „Würdig sein“ als Klick-Quest.) | 2026-10-20 | `01_PROGRESSION.md`, `questtexte/tinkers.md` |
| T2 | Easy-NPC-Dialog prüft Abgaben und setzt Stages für FTB Quests (Test 29); Figuren per Befehl (Test 30) | 2026-10-17 | `18_STORY.md` |
| T7, T8, T10, T11 | aufgegangen in P9, F2d, P6, P8 | 2026-10-19 | hier |
| E20 (Status) | Galaxy in a Cube kommt aus allen Nicht-Star-Wars-Welten raus (User, 2026-10-14); Kyber abgeschaltet (Test 9), Ewok-Dörfer und Jawas per Datapack (Test 54: keine Ewok-Dörfer), Tusken Raider per Skript `galaxy_overworld.js` (Test 54 erneut) | 2026-10-20 | `00_STATUS.md` |
| F2e | Kein Uran-Teil für T4. Statt eines Dungeon-Items: Die Spieler finden ein **Relikt** und das **Tagebuch des Meisters** (Story siehe `18_STORY.md`). Das Relikt geht an den Elfen; zusammen mit den Boss-Items und Tech-Teilen (F14) wird daraus der Galaktische Strahlenschutz (F2f) | 2026-10-20 | `18_STORY.md`, `01_PROGRESSION.md` |
| F11 | Rover nur mit Biodiesel; Fuel-Handel der Lunarians bleibt (nutzlos, harmlos); Sky Stone (Giselle) bleibt; MekaSuit-Module in Teil 2; `launchAnywhere` bleibt aus, Immersive Aircraft darf auf Planeten fliegen | 2026-10-20 | `15_RAUMFAHRT.md`, `questtexte/adastra.md` |
| F16 | Transmutation Table bleibt, aber Config `limitTransmutingToLootTables = true` (nur noch Truhenbeute); ganze Alex's-Mobs-Reihe ab dem Mond offen | 2026-10-20 | `config-overrides/`, `questtexte/alexsmobs.md` |
| F18 | Altar-Reparatur braucht Terrasteel; jeder Spieler muss beim Betreten der Altar-Dimension einen Benevolent Goddess’ Charm tragen (Skript prüft) | 2026-10-20 | `18_STORY.md`, `questtexte/botania.md` |
| F21 | Fehler im Blood-Smeltery-Addon (Hellforged-Flüssigkeiten, Münzen) bleiben; erst in Teil 2 wieder ansehen | 2026-10-20 | `00_MODBASIS.md` |
| F22 | Kein automatischer Transport in Teil 1; die Mars-Station muss nur stehen; Material per Rakete (8 Plätze) | 2026-10-20 | `18_STORY.md` (O19) |
| F25 | Mekanism-Erze in Blue Skies bleiben normale Erzblöcke | 2026-10-20 | `03_ERZGENERATION.md` |
| O16 | Der Text des Meisters ist sein Tagebuch, gefunden zusammen mit dem Relikt | 2026-10-20 | `18_STORY.md` |
| O3 | Relikt und Tagebuch des Meisters liegen in der Altar-Dimension | 2026-10-20 | `18_STORY.md` |
| F1 | 🔴 Überholt durch F26 (2026-10-20). Ursprünglich: Hauptquests aus K1–K3 stehen als „Notizen des Roboters“ im Buch und haken sich beim Öffnen selbst ab, wenn das Item da ist; Nebenquests aus K1–K3 normal mit Credits; erste Quest ist die Tinkers-Schmelze (Startgeschenk, Einführung) | 2026-10-20 | `18_STORY.md`, Questtexte |
| F4 | „Würdig sein“: Smeltery Controller (Tinkers), LV-Kondensator (IE), 4 Manasteel-Barren (Botania) | 2026-10-20 | `18_STORY.md`, `questtexte/tinkers.md`, `ie.md`, `botania.md` |
| F8 | Altar-Reparatur: Terrasteel, 4 Imbued Slate, ~~Dusk Arc~~ Siegel der Traumwelten (O47; Alchemist, Strang des Blue-Skies-Hauses), Orb of the Deep aus dem Pflicht-Dungeon von Wesley's (F15, O54). Texte der Schriftrollen schreibt der User | 2026-10-20 | `18_STORY.md`, `questtexte/bloodmagic.md` |
| F14 | Der Elf fertigt den Galaktischen Strahlenschutz aus: Relikt, vier Arcs (`blue_skies:ethereal_arc`, `dusk_arc`, `nature_arc`, `poison_arc`, je sicher im Loot Bag des Bosses), Elite Control Circuit, 4 Elementium. Name und Charakter legt der User fest | 2026-10-20 | `18_STORY.md`, `questtexte/blue_skies.md` |
| F15 | Wesley's in Teil 1: Pflicht sind Stufe 1 (Vorbereitung, Kreide) und ein Oberwelt-Dungeon (liefert das Item für F8); Rest Nebenquest bzw. Training in Teil 2 | 2026-10-20 | `18_STORY.md`, `questtexte/rld.md` |
| O22 | Mars-Station ohne Prüfskript („wir schummeln“): Quest 1 = Checkliste aller Items für die Basis (Item-Aufgaben); Quest 2 = Basis bauen und sich zu dritt dort aufhalten. Sind alle drei da, setzt der User den Tag per Befehl und die Quest ist erfüllt | 2026-10-20 | `18_STORY.md`; Test 32 entfällt |
| O23 | Der Droide erscheint per Befehl in der Mars-Station, sobald die Station-Quest erfüllt ist; in der Basis auf der Erde verschwindet er gleichzeitig | 2026-10-20 | `18_STORY.md` |
| O27 | Credits je Team (eine Party); keine wiederholbaren Aufgaben in Teil 1 | 2026-10-20 | `18_STORY.md` |
| O28, F5c, F5d | Shop des Einsiedlers: Plastoid, Durasteel, Baupläne (Assembly Bench, Droid Fabricator, Gas Harvester), Steuerkerne B-1, B-2, Droideka; nur bei ihm erhältlich. Preise als Entwurf von Claude. **Ergänzt nach Test 43 (User, 2026-10-20):** Baupläne sind öffenbare Bücher mit Beschreibung und Rezept; es gibt auch Baupläne für B-1, B-2 und Droideka, die das Werkbank-Rezept des Steuerkerns freischalten (Steuerkerne nicht mehr direkt im Shop); alle Rezepte stark verteuert | 2026-10-20 | `18_STORY.md`, `17_STAR_WARS_1.20.1.md` |
| O29 | Mondbasis baut der Host von Hand, mit Luft darin; der Einsiedler ist verwundbar | 2026-10-20 | `18_STORY.md` |
| O30 | K4 „Der Mond“ bleibt das Kapitel, das mit der ersten Quest für den Einsiedler endet | 2026-10-20 | `meilensteine/` |
| O44 | Der Meister ist der Jedi Quinlan Vos (Hang zur dunklen Seite); der Einsiedler heißt Odd Ball (Teil von O25) | 2026-10-21 | `18_STORY.md` |
| O33 | Der Meister fliegt in der Rakete mit und erscheint per Befehl in der Basis der Spieler | 2026-10-20 | `18_STORY.md` |
| O17 | Glacio ist ein anderes Sonnensystem; die „andere Galaxie“ bleibt Teil 3 vorbehalten | 2026-10-20 | `18_STORY.md` |
| T1, T6 | Kapsel und Sith-Tempel baut der Host von Hand | 2026-10-20 | `18_STORY.md` |
| T3 | Droide als Easy NPC mit eigenem Skin; den Skin sucht der User aus | 2026-10-20 | `18_STORY.md` |
| T4 | **Geändert:** Das Questbuch gibt der Droide nach der ersten Quest („Würdig sein“). Nach dem Einsiedler erscheinen dort zusätzlich seine Quests und Nebenquests; der User erklärt das in Dialogen | 2026-10-20 | `18_STORY.md` |
| T5 | 🔴 Geändert durch O51 (Patchouli-Buch). Ursprünglich: Tagebuch des Droiden und Tagebuch des Meisters als geschriebene Bücher: per `give` aus dem Dialog bzw. per Datapack in der Truhe der Altar-Dimension | 2026-10-20 | `18_STORY.md` |
| F26 | Questbuch vor dem Mond: a) alle Quests werden ganz normal abgehakt (keine „Notizen“); b) Nebenquests aus K1–K3 sind Aufgaben des **Droiden**, „um uns intelligenter zu machen“: Belohnung nur Kleinigkeiten und XP, **keine Credits** (Credits erst beim Einsiedler); c) erste Quest im Buch ist **„Würdig sein“ als Klick-Quest** (Checkmark): schon im Dialog erfüllt, erklärt das Questsystem. Ersetzt F1 und die Startquest an der Schmelze aus F23 | 2026-10-20 | `18_STORY.md`, Questtexte vor dem Mond |
| F27 | Story-Variante B: Der Altar im Tempel ist **Pathway to the Endless Realm**; nur das Endless Realm ist die Dimension der Story. Edge of the Hidden Realm (Mini-Dungeon, 4 Räume, Sackgassen) bleibt überall nutzbar und hat keine Story. Ritual-Sperre in `altar_dimension.js` angepasst | 2026-10-20 | `18_STORY.md`, `meilensteine/`, `kubejs/` |
| O39 | Die Amulett-Sperre (F18) gilt für **beide** Rituale, also die ganze Dimension `bloodmagic:dungeon` einschließlich Mini-Dungeon. Der Goddess' Charm ist ab BO3 machbar (Rune of Water, Rune of Spring, Mana Diamond), also vor Altar-Stufe 4. Das Skript bleibt unverändert | 2026-10-20 | `18_STORY.md`, `kubejs/` |
| O42 | Nach Funden des Users beim Testen: a) **keine geschenkten Fahrzeuge** in Bauwerken von Ad Astra More Structures: Rover aus „Abandoned Base“, T1-Rakete aus „Rocket Launch T1“ entfernt (Bauwerke bleiben, alle Planeten); b) **Plastoid** wieder mit Rezept: 2 HDPE Pellets → 1 Plastoid hinter dem Bauplan „Plastoid“ (neues Kapitel „Werkstoffe“); der Einsiedler verkauft nur die **ersten 20 Plastoid** (Handel in Easy NPC, ADVANCED mit max. 20 Nutzungen ohne Zurücksetzen; stellt der User im Spiel ein); c) **Mekanism-Erzverarbeitung bis 5×** auch für Silber, Nickel, Aluminium; Desh, Ostrum, Calorite, Kobalt und Blue-Skies-Metalle bewusst nicht (Tor der Raketenstufen bzw. eigener Pfad) | 2026-10-20 | `17_STAR_WARS_1.20.1.md`, `18_STORY.md`, `14_ERZ_MOD_MATRIX.md`, `kubejs/` |
| O41 | Nach Funden des Users beim Testen: **Stahl nur über IE** – Mekanism-Stahlstaub aus Enriched Iron entfernt (Ad Astra schon vorher), Tinkers-Stahlsplitter und Foundry-Nebenprodukt bleiben; **Bioethanol** (Mekanism Generators, ohne Rezept und Zweck) in JEI ausgeblendet; **Cryo Fuel** bekommt eine JEI-Info, weil Ad Astra das Ergebnis des Cryo Freezer nicht als JEI-Ergebnis meldet | 2026-10-20 | `02_RESSOURCEN.md`, `kubejs/` |
| O40 | Relikt und Tagebuch des Meisters erscheinen **automatisch** in der Station, dem größten Raum der Minen des Endless Realm (Truhe mit `bloodmagic:chests/mines/smithy_loot`, gibt es nur dort). Mehrfach in der Dimension ist erlaubt, es sind reine Info-Items. Die Truhe per `/setblock` bleibt als Notweg | 2026-10-20 | `18_STORY.md`, `kubejs/data/` |
| F3 | Treibstoffe: T4 **Kryo-Raketentreibstoff** (eigene Flüssigkeit, IE Refinery: Benzin + Cryo Fuel), T5 **flüssiges D-T-Fusionsgemisch** (Mekanism Generators), T6 **Antimaterie-Treibstoff** (D-T-Gemisch + Antimaterie-Pellet, IE Mixer), T7 Antimaterie-Treibstoff + Life Essence oder Demon Will (Name offen). Ab T4 sparsam (`ad_astra:efficient_fuel`, 1 Eimer pro Start). Cryo Freezer bleibt nur als Zulieferer für T4; Cryo Fuel allein nimmt keine Rakete. Analyse: `recherche/f3_treibstoffe.md` | 2026-10-20 | `15_RAUMFAHRT.md`, `01_PROGRESSION.md` |
