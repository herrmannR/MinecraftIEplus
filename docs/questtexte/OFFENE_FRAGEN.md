# Offene Fragen aus den Questtexten

> Gesammelt am 2026-10-19 aus den Abschnitten „🔵 Offen vor dem Einbau“ aller Dateien in diesem Ordner. Sortiert danach, wie viele Mods an einer Frage hängen.
> **Antworten:** einfach mit der Nummer (z. B. „F3: erst ab T2“). Claude trägt jede Antwort in das unter **→** genannte Dokument ein, zieht die betroffenen Questtexte nach und hakt die Frage hier ab (✅ mit Datum).

## Teil 1 · Entscheidungen des Users

### Mehrere Mods betroffen

**F1 · Quests vor dem Mond (O31)** — 6 Mods: IE (IE1–IE3), Tinkers (TK1–TK2), Botania (BO1–BO3), Blood Magic (BM1), AE2 (AE1), Ad Astra (RF1)
Das Questbuch gibt es erst auf dem Mond. Werden diese Quests dort nachgereicht (abhakbar), stehen sie nur als Notizen, oder fallen sie weg?
→ `18_STORY.md` (O31), danach alle sechs Questtext-Dateien

**F2 · Was jede Rakete braucht** — 4 Mods: Ad Astra, Mekanism, Botania, Blood Magic
- a) Mekanism-Stufe je Rakete. Vorschlag in den Texten: T1 Basic, T2 Advanced, T3 Elite, T4 Ultimate.
- b) Botania-Items: magische Komponente für T4 (Item aus dem Elfenportal oder Terrasteel?), Rumpf-Material T5 aus Alfheim.
- c) Blood-Magic-Teil für T3 (O20). Es muss aus Altar-Stufe 3 kommen, weil Stufe 4 erst nach dem Tempel geht.
- d) Rezepte, Treibstoffe und Zusatzteile der Raketen T2 bis T7.
→ `meilensteine/`, `15_RAUMFAHRT.md`, `18_STORY.md` (O20); Questtexte `adastra.md`, `mekanism.md`, `botania.md`, `bloodmagic.md`

**F3 · T4-Treibstoff und Cryo Freezer** — Ad Astra, Mekanism
Behältst du den Cryo Freezer (Cryo Fuel) oder fliegt er raus? Wenn er rausfliegt: Woraus wird der T4-Treibstoff gemacht?
→ `15_RAUMFAHRT.md`, `00_STATUS.md` (D.14, C.10); `adastra.md`

**F4 · Würdigkeits-Beweis in K2** — Tinkers, Botania
Mit welchem Item beweist der Spieler, dass er „würdig“ ist: einem Tinkers-Item, einem Botania-Item oder beiden?
→ `18_STORY.md`; `tinkers.md`, `botania.md`

**F5 · Kyber und Star-Wars-Rohstoffe** — Star Wars Planets, Galaxy in a Cube
- a) Endor hat kein Kyber-Erz. Bekommt Endor ein Vorkommen per Datapack, oder wird die Hürde „Kyber von Endor → T6“ geändert?
- b) Wie wird aus dem Kyber-Erz der Kristall von Galaxy in a Cube: als Drop oder über ein Rezept?
- c) Plastoid gibt es erst ab K7 (es braucht HDPE). Ist das gewollt, oder verkauft der Einsiedler Plastoid?
- d) Gas Harvester, Empty Gas Vessel und Durasteel: frei baubar oder nur im Shop?
→ `17_STAR_WARS_1.20.1.md`, `meilensteine/`; `swplanets.md`, `swgc.md`

**F6 · Petroleum vor T1** — IE, Ad Astra
Ist Petroleum vor dem ersten Raumflug Pflicht, oder erst ab T2? Davon hängt ab, ob IE4 auf dem Hauptweg vor dem Mond liegt.
→ `01_PROGRESSION.md`, `00_STATUS.md` (C.10); `ie.md`

### Ein Mod betroffen

**F7 · Blood Magic: Meilensteine neu schneiden**
Die Karte passt nicht zum Mod: Es gibt keine Altar-Stufe 6, und Stufe 4 kommt erst nach dem Tempel. Vorschlag: BM2 = Altar Stufe 3, BM3 = Rituale, BM4 = Tempel, Demon Realm und Stufe 4, BM5 = Endless Realm und Stufe 5, BM6 = Hellforged-Ausbau. Übernehmen?
→ `meilensteine/`; `bloodmagic.md`

**F8 · Blood Magic: Altar-Reparatur (O2)**
Welche Zutaten braucht die Reparatur des Altars?
→ `18_STORY.md` (O2); `bloodmagic.md`

**F9 · Botania: Mead of Kvasir und Corporea**
- a) Wie kommt der Spieler im Pack an den Met? Hängt am Meister in Part 2.
- b) Soll Corporea bei BO7 bleiben, oder kommt es schon nach BO5?
→ `18_STORY.md`, `meilensteine/`; `botania.md`

**F10 · AE2: Verteuerung**
Welche Rezepte ändert KubeJS: Pressen, Prozessoren, Drive, Controller, Housings? Der Storage-Layer soll früh erreichbar bleiben.
→ `01_PROGRESSION.md`, `10_KUBEJS.md`; `ae2.md`

**F11 · Ad Astra: Kleinigkeiten**
- a) Welchen Treibstoff fährt der Rover? Und was passiert mit dem Fuel, das der Lunarian-Händler verkauft?
- b) Bleibt der AE2-Weg über Sky Stone (RFY-01)?
- c) Ab wann erscheinen die MekaSuit-Module (RFX-03)?
→ `15_RAUMFAHRT.md`; `adastra.md`

**F12 · Star Wars Planets: Ausrüstung**
- a) Stormtrooper-Rüstung: neues Rezept oder nur als Beute? Davon hängt die Beskar-Rüstung ab.
- b) Beskar: welcher Ofen, welches Rezept, welches Nugget-Item, welche Kosten je Rüstungsteil?
- c) Der Blaster von Star Wars Planets doppelt den von Galaxy in a Cube: behalten oder entfernen?
- d) Jawas: Welcher Mod stellt sie, und zu welchen Tauschverhältnissen?
- e) Bosse und Kopfgeld-Aufträge auf diesen Welten (O12, Part 3).
→ `17_STAR_WARS_1.20.1.md`, `18_STORY.md` (O12); `swplanets.md`

**F13 · Galaxy in a Cube: Holocrons (O37)**
Wo kommen `swgc:jedi_holocron` und `swgc:sith_holocron` vor, z. B. als Belohnung in der Ausbildung?
→ `18_STORY.md` (O37); `swgc.md`

**F14 · Blue Skies: Figur im Haus und Boss-Beute (O1)**
Was handelt die Figur im Haus? Gibt es Beute von den Bossen, die die Story braucht? Darf man Bosse wiederholen, und welcher Loot Bag fällt dann?
→ `18_STORY.md` (O1); `blue_skies.md`

**F15 · Wesley's Roguelike Dungeons (O35)**
- a) Welche Stufen sind Pflicht für die Vorbereitung auf die Altar-Dimension (Part 1), welche gehören zum Training (Part 2)?
- b) Die „acht Oberwelt-Dungeons“ der Story: Die Texte machen eine Quest je Dungeon-Gruppe. Oder waren die acht Dungeons der Infinite-Dimension (WD5) gemeint?
- c) Goldmenge für WD5-04. Soll WD5-05 eine Kette aus sechs Quests werden?
→ `18_STORY.md` (O35); `rld.md`

**F16 · Alex's Mobs**
- a) Transmutation Table: Hebelt er das Erz-Gating aus? Entfernen, verteuern oder lassen (Befund AM1)?
- b) Steht die ganze Reihe ab dem Mond offen, oder kommen AM4–AM6 erst später (Nether, End)?
→ `01_PROGRESSION.md`; `alexsmobs.md`

**F17 · Immersive Aircraft**
- a) Ab welchem Kapitel ist die Reihe freigeschaltet, und wie lang ist sie? Volle Reihe hat 18 Quests, kurze 6.
- b) Der Gyrodyne fliegt schon ganz früh ohne Treibstoff. Ist das gewollt?
- c) Sollen die Rezepte an IE-Stahl gebunden werden?
→ `18_STORY.md`; `aircraft.md`

## Teil 2 · Im Spiel prüfen

Hier musst du nichts entscheiden, nur nachsehen. Am besten zusammen mit Runde 5 und 6 aus `11_TESTING.md`. → Ergebnisse in `11_TESTING.md` und `modpfade/<mod>/WISSEN.md`

| Nr. | Mod | Was prüfen |
|---|---|---|
| P1 | Mekanism | **Wichtigste Lücke:** Größen der Multiblöcke (Dynamic Tank, Thermal Evaporation, Fission, Boiler, Turbine, Induction Matrix, Teleporter, Fusion, SPS); Zündenergie der Fusion; Eingang des SPS |
| P2 | Botania | Test 40 (`lockAlfheim`) und Test 41 (Rezept des Gaia-Pylons in JEI) |
| P3 | AE2 | Test 36 nach dem Entfernen der Energieerzeuger; Storage Bus an Storage Drawers; Quantum Bridge Card, Magnet Card; Chunkloading der Quantum Bridge auf dem Server |
| P4 | Ad Astra | Automation NASA Workbench; Sauerstoffverbrauch der Giselle-Verzauberungen; Boss-Mobs und Beute der More-Structures-Dungeons |
| P5 | Star Wars Planets | Ölquellen auf Tatooine, Reiten des Bantha, Kälte auf Mandalore, Structure-Task in FTB Quests |
| P6 | Galaxy in a Cube | Lassen sich Machtpunkte per Befehl vergeben? (SW4-01 hängt daran); Befehle an Droiden, Formen der Lichtschwerter, Zerlegen an der Assembly Bench; IDs der bemalten Klonrüstung |
| P7 | Tinkers | Blood-Smeltery: Flüssigkeiten und Rezepte; Platten bei Mighty Smelting; Trait Oxygenated; Fundorte der Ancient Tools |
| P8 | Blue Skies | Zeal Lighter (Währung), Werkzeugrezepte und Sticks in JEI, welcher Schild gegen den Arachnarch genügt, ob das Journal die Progression erklärt |
| P9 | Blood Magic | Demon Realm auf dem Server; Zahl der Steine je Ritual |
| P10 | Alex's Mobs | Ruft der Skreecher den Warden? Rückweg vom Weltrand |
| P11 | Roguelike Dungeons | Rückweg des Sentient Pathfinder, Herkunft der Kreide, Seltenheit des Portalbaums |
| P12 | Immersive Aircraft | Blaze Powder trotz `disableSolidFuel`, Fliegen auf Planeten, welches Item in den Booster-Platz passt |
| P13 | IE | In welchem Eintrag das Seismic Survey Tool steht |

## Teil 3 · Erst beim Einbau ins Questbuch

Kein Handlungsbedarf jetzt: Formatierung, Kontrollhaken statt Prüfaufgaben (Zähmen, Rituale, Strukturen, Tinkers-Material), Patchouli-Buch mit NBT als Aufgabe, Platzhalter-IDs (`kubejs:steuerkern_*`), Mengen wie 16 Certus (AE1-05), weiße Petals oder beliebige Blume (BO1-02), Liste der Rezepte, die der IE-Crusher übernimmt.
