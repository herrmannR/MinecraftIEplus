# Questtexte Immersive Engineering und Immersive Petroleum

> Stand 2026-10-17, Minecraft 1.20.1. Entwurf für FTB Quests. IE hat das **Engineer's Manual** (`immersiveengineering:manual`), Immersive Petroleum und Immersive Posts hängen sich mit eigenen Kapiteln hinein (`../19_HILFEBUECHER.md`). Die Texte nennen deshalb nur Ziel, Fundstelle im Buch und die Abweichungen des Packs. Gegliedert nach den Meilensteinen IE1 bis IE6 der Meilensteinkarte; die Kapitel sind dort Arbeitstitel.
> Quellen: `../modpfade/ie/WISSEN.md`, Meilensteinkarte, `../01_PROGRESSION.md`, `../03_ERZGENERATION.md`, `../15_RAUMFAHRT.md`, `../11_TESTING.md`, KubeJS-Skripte. Kapitel- und Eintragstitel aus `manual/autoload.json` und `manual/en_us/*.txt` der JARs (IE 10.2.0-183, Petroleum 4.3.1-36b). Item-IDs gegen die Sprachdateien geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren. Wo eine Quest an die Story gehängt wird, setzt der User einen Satz davor.
- **Anrede „du“**, Item-, Kapitel- und Eintragsnamen englisch wie im Spiel.
- **Buch:** Kapitel → Eintrag, so wie sie im Engineer's Manual heißen. Die Kapitel des Buchs: *Overview and Resources*, *Workbenches & Furnaces*, *Construction*, *Power, wires, generators*, *Tools*, *Simple Machines*, *Heavy Machinery*; Petroleum: *Oil Processing*.
- **Hauptweg** = nötig für spätere Ziele. **Nebenquest** = stellt den Mod in der Breite vor.
- **Pack-Änderungen** mit ⚙️. Sie stehen nicht im Buch.
- 🔵 = noch nicht entschieden oder nicht belegt.
- IE1 bis IE3 liegen vor dem Mond. Laut Story gibt es dort noch kein Questbuch (`../18_STORY.md`, O31 offen). Die Texte sind trotzdem geschrieben, damit sie nachgereicht oder als Notizen genutzt werden können.

---

## IE1 · Koks und erster Stahl (K1 Ankunft)

### IE1-01 Engineer's Manual · Hauptweg
**Aufgabe:** `immersiveengineering:manual`

Immersive Engineering erklärt sich selbst: Das Handbuch zeigt jede Maschine, jeden Bauplan und alle Rezepte. Lies es, wann immer eine Quest darauf verweist.
Buch: Overview and Resources → Introduction.

### IE1-02 Engineer's Hammer · Hauptweg
**Aufgabe:** `immersiveengineering:hammer`

Mit dem Hammer formst du Multiblöcke: Steine richtig aufstellen, dann mit dem Hammer auf den markierten Block schlagen. Er macht auch die ersten Platten von Hand.
Buch: Construction → Multiblock Constructions; Overview and Resources → Metal Plates.
Tipp: Der **Multiblock Projector** aus Immersive Petroleum zeigt den Bauplan als Hologramm in der Welt (Buch: Oil Processing → Multiblock Projector).

### IE1-03 Erze · Nebenquest
**Aufgabe:** `immersiveengineering:raw_aluminum` oder `immersiveengineering:raw_silver` oder `immersiveengineering:raw_nickel`

Buch: Overview and Resources → Ores.
⚙️ Das Pack verteilt die Erze anders, als das Buch beschreibt:
- **Blei und Uran** kommen nicht als IE-Erz vor, sondern als Erz von Mekanism. Die Barren passen in jedes IE-Rezept. Blei ist in der Overworld sehr selten und reichlich in Everbright, Uran reichlich auf Merkur und Venus.
- **Bauxit** (Aluminium) ist in der Overworld selten und reichlich in Everbright.
- Silber und Nickel liegen wie gewohnt in der Overworld.

### IE1-04 Coke Oven · Hauptweg
**Aufgabe:** `immersiveengineering:coke_oven`, `immersiveengineering:coal_coke`

Aus Kohle wird Coal Coke, nebenbei fällt Creosote Oil an.
Buch: Workbenches & Furnaces → Coke Oven.

### IE1-05 Treated Wood · Hauptweg
**Aufgabe:** `immersiveengineering:treated_wood_horizontal`

Holz in Creosote getränkt: Baustoff für viele frühe Maschinen.
Buch: Overview and Resources → Treated Wood.

### IE1-06 Alloy Kiln · Nebenquest
**Aufgabe:** `immersiveengineering:alloy_smelter`

Legiert ohne Strom, etwa Electrum und Constantan.
Buch: Workbenches & Furnaces → Alloy Kiln; Overview and Resources → Alloys.
⚙️ Bronze, Constantan, Electrum und Invar lassen sich auch in der Smeltery von Tinkers legieren.

### IE1-07 Erster Stahl · Hauptweg
**Aufgabe:** `immersiveengineering:blast_furnace`, `immersiveengineering:ingot_steel`

Die Crude Blast Furnace macht aus Eisen und Coal Coke Stahl. Für die Blast Bricks brauchst du Zutaten aus dem Nether.
Buch: Workbenches & Furnaces → Crude Blast Furnace.
⚙️ Stahl ist die Grundwährung des Packs: Mekanism, AE2 und die erste Rakete brauchen ihn. Stahl aus Mekanism zählt genauso.

### IE1-08 Werkbank und Baupläne · Hauptweg
**Aufgabe:** `immersiveengineering:workbench`, `immersiveengineering:component_iron`

An der Engineer's Workbench entstehen mit **Blueprints** die Bauteile, die keine normale Werkbank kann: Vacuum Tubes, Light Bulbs, Electronic Components.
Buch: Workbenches & Furnaces → Workbench & Blueprints, Engineer's Blueprints; Overview and Resources → Crafting Components.

---

## IE2 · Strom und Förderbänder (K2 Würdig sein)

### IE2-01 Erster Strom · Hauptweg
**Aufgabe:** `immersiveengineering:dynamo`, `immersiveengineering:windmill` oder `immersiveengineering:watermill`

Windmühle oder Wasserrad treiben den Kinetic Dynamo an.
Buch: Power, wires, generators → Power Generation.
⚙️ Strom im Pack kommt nur aus IE, Immersive Petroleum und Mekanism. Die Generatoren von Ad Astra sind entfernt.

### IE2-02 Kabel · Hauptweg
**Aufgabe:** `immersiveengineering:connector_lv`, `immersiveengineering:wirecoil_copper`

Strom fließt über Drähte zwischen Connectors. LV (Kupfer) trägt 256 Flux je Tick, MV (Electrum) 1024, HV (Stahl und Aluminium) 4096.
Buch: Power, wires, generators → Basic Wiring.
⚙️ Die Kabel von Ad Astra sind entfernt. Raumbasen versorgst du mit IE oder Mekanism. In einen abgedichteten Raum bringt ein **Feedthrough Insulator** (oder ein Energiespeicher in der Wand) den Strom, ohne die Luftdichtung zu brechen.

### IE2-03 Speichern · Nebenquest
**Aufgabe:** `immersiveengineering:capacitor_lv`

⚙️ Für „Würdig sein“ bei DD3R8 brauchst du die nächste Stufe, den MV-Kondensator (O67, B1).

Buch: Power, wires, generators → Accumulators.
⚙️ Der LV Accumulator braucht Blei. Das gibt es in der Overworld kaum, reichlich in Everbright (Mekanism-Bleierz).

### IE2-04 Förderbänder und Rohre · Nebenquest
**Aufgabe:** `immersiveengineering:conveyor_basic`, `immersiveengineering:fluid_pipe`

Buch: Simple Machines → Conveyor Belts, Item Router, Fluid Transport.
⚙️ Die Fluid Pipes und die Water Pump von Ad Astra sind entfernt; IE-Rohre und die Fluid Pump übernehmen.

### IE2-05 Charging Station · Nebenquest
**Aufgabe:** `immersiveengineering:charging_station`

Lädt Werkzeuge und Akkus.
Buch: Simple Machines → Charging Station.
⚙️ Der Energizer von Ad Astra ist entfernt. Jet Suit und Etrionic Capacitor lädst du hier oder an einem Mekanism Energy Cube.

### IE2-06 Garden Cloche · Nebenquest
**Aufgabe:** `immersiveengineering:cloche`

Buch: Simple Machines → Garden Cloche. Pflanzen für den Squeezer und Fermenter (IE3) wachsen hier automatisch.

---

## IE3 · Schwermaschinen und Biodiesel (K3 Industrie)

### IE3-01 Improved Blast Furnace · Hauptweg
**Aufgabe:** `immersiveengineering:advanced_blast_furnace`, `immersiveengineering:blastfurnace_preheater`

Stahl automatisch und schneller.
Buch: Workbenches & Furnaces → Improved Blast Furnace.

### IE3-02 Bauteile für Schwermaschinen · Hauptweg
**Aufgabe:** `immersiveengineering:light_engineering`, `immersiveengineering:heavy_engineering`, `immersiveengineering:steel_scaffolding_standard`

Buch: Construction → Metal Constructions.

### IE3-03 Metal Press · Hauptweg
**Aufgabe:** `immersiveengineering:metal_press`

Presst Platten, Stäbe und Drähte.
Buch: Heavy Machinery → Metal Press.
⚙️ Alle Platten für die Raketen kommen aus dieser Presse, auch Desh, Ostrum und Calorite. Der Compressor von Ad Astra entfällt 🔵 (Skript fehlt).

### IE3-04 Crusher · Hauptweg
**Aufgabe:** `immersiveengineering:crusher`

Mahlt Erz zu zwei Stäuben, dazu Nebenprodukte wie Schwefel.
Buch: Heavy Machinery → Crusher.
⚙️ 🔵 Der Crusher soll alles übernehmen, was der Crusher von Mekanism kann (Liste und Umsetzung offen). Für mehr als die doppelte Ausbeute führt Mekanism weiter (`mekanism.md`, Erzvervielfachung).

### IE3-05 Sawmill · Nebenquest
**Aufgabe:** `immersiveengineering:sawmill`

Buch: Heavy Machinery → Sawmill. Sägemehl passt auch in Mekanism-Rezepte.

### IE3-06 Biodiesel · Hauptweg
**Aufgabe:** `immersiveengineering:squeezer`, `immersiveengineering:fermenter`, `immersiveengineering:refinery`, dann Flüssigkeit `immersiveengineering:biodiesel`

Plant Oil aus dem Squeezer und Ethanol aus dem Fermenter ergeben in der Refinery Biodiesel.
Buch: Heavy Machinery → Squeezer, Fermenter, Refinery.
⚙️ **Biodiesel ist der Treibstoff der Rakete T1.** Die Rakete nimmt nur diesen Treibstoff.

### IE3-07 Diesel Generator · Nebenquest
**Aufgabe:** `immersiveengineering:diesel_generator`

4096 Flux je Tick aus Biodiesel oder Diesel, genug für HV.
Buch: Power, wires, generators → Diesel Generator.

### IE3-08 Mixer und Bottling Machine · Nebenquest
**Aufgabe:** `immersiveengineering:mixer`, `immersiveengineering:bottling_machine`

Buch: Heavy Machinery → Mixer, Bottling Machine. Mit dem Mixer entsteht flüssiger Beton (Construction → Concrete), den der Derrick in IE4 braucht.

---

## IE4 · Erdöl und Destillation (K4 Der Mond)

### IE4-01 Öl finden · Hauptweg
**Aufgabe:** `immersivepetroleum:seismic_survey`, `immersivepetroleum:survey_result`

Das Seismic Survey Tool zeigt, wo unter dir ein Ölvorkommen liegt.
Buch: Oil Processing → Derrick 🔵 (Eintrag prüfen, in dem das Werkzeug beschrieben ist).
⚙️ Immersive Petroleum ist die einzige Ölquelle im Pack; die Ölquellen von Ad Astra sind abgeschaltet.

### IE4-02 Derrick und Pumpjack · Hauptweg
**Aufgabe:** `immersivepetroleum:derrick`, `immersivepetroleum:pumpjack`

Der Derrick bohrt das Vorkommen an, der Pumpjack fördert.
Buch: Oil Processing → Derrick, Pumpjack.

### IE4-03 Oil Tank · Nebenquest
**Aufgabe:** `immersivepetroleum:oiltank`

Fasst 1024 Eimer.
Buch: Oil Processing → Oil Tank.

### IE4-04 Distillation Tower · Hauptweg
**Aufgabe:** `immersivepetroleum:distillation_tower`, dann Flüssigkeit `immersivepetroleum:kerosene`

Zerlegt Rohöl in Lubricant, Diesel (schwefelhaltig), Kerosene und Naphtha, dazu Bitumen.
Buch: Oil Processing → Distillation Tower, Petroleum Products.
⚙️ **Kerosene ist der Treibstoff der Rakete T3** und Grundlage des Treibstoffs T4.

### IE4-05 Lubricant · Nebenquest
**Aufgabe:** Flüssigkeit `immersivepetroleum:lubricant`

Schmiermittel beschleunigt Maschinen wie Pumpjack und Excavator.
Buch: Oil Processing → Lubrication.

---

## IE5 · Entschwefelter Diesel (K5 Erzketten)

### IE5-01 High-Pressure Refinery Unit · Hauptweg
**Aufgabe:** `immersivepetroleum:hydrotreater`, dann Flüssigkeit `immersivepetroleum:diesel`

Entschwefelt den Diesel aus dem Turm; dabei fallen 5 Schwefelstaub je Eimer an.
Buch: Oil Processing → High-Pressure Refinery Unit.
⚙️ **Entschwefelter Diesel ist der Treibstoff der Rakete T2.** Schwefelhaltiger Diesel (Sulfurized Diesel) zählt nicht.
⚙️ Der Schwefel wird für die Schwefelsäure von Mekanism gebraucht.

### IE5-02 Coker · Nebenquest
**Aufgabe:** `immersivepetroleum:coker_unit`, `immersivepetroleum:petcoke`

Der größte Multiblock: macht aus Bitumen Petcoke.
Buch: Oil Processing → Coker.

---

## IE6 · Großindustrie (K6 Der Mars)

### IE6-01 Arc Furnace · Nebenquest
**Aufgabe:** `immersiveengineering:arc_furnace`, `immersiveengineering:graphite_electrode`

Schmilzt Erze mit doppelter Ausbeute, legiert und recycelt. Den Bauplan für die Elektroden findest du nur in Truhen oder bei Dorfbewohnern.
Buch: Heavy Machinery → Arc Furnace; Overview and Resources → Graphite, Villagers.

### IE6-02 Erzadern finden · Nebenquest
**Aufgabe:** `immersiveengineering:survey_tools`, `immersiveengineering:sample_drill`

Mit den Mineral Survey Tools und dem Core Sample Drill findest du heraus, welche Erzader unter einem Chunk liegt.
Buch: Heavy Machinery → Excavator, darin der Verweis auf Mineral Deposits.
⚙️ Die Adern sind angepasst: Cassiterite (Zinn) gibt es nicht, Zinn kommt nur aus Everbright. Galena (Blei) und Uraninite (Uran) sind seltener.

### IE6-03 Excavator · Nebenquest
**Aufgabe:** `immersiveengineering:excavator`, `immersiveengineering:bucket_wheel`

Baut eine Erzader ab, ohne die Welt aufzugraben.
Buch: Heavy Machinery → Excavator.
⚙️ Der Digital Miner von Mekanism ist im Pack entfernt; der Excavator ist der Weg zur automatischen Erzgewinnung.

### IE6-04 Kunststoff · Nebenquest
**Aufgabe:** `immersiveengineering:plate_duroplast`

Buch: Overview and Resources → Resin and Duroplast; Oil Processing → Petroleum Plastics.

### IE6-05 Logic Circuits · Nebenquest
**Aufgabe:** `immersiveengineering:circuit_table`, `immersiveengineering:logic_circuit`

Buch: Power, wires, generators → Logic Circuits.

### IE6-06 Assembler · Nebenquest
**Aufgabe:** `immersiveengineering:assembler` oder `immersiveengineering:auto_workbench`

Autocrafting mit IE.
Buch: Heavy Machinery → Assembler, Automated Workbench.

---

## Nebenquests ohne Meilenstein (Werkzeuge und Ausrüstung)

Kurze Einzelquests, freizuschalten nach Bedarf. Je Quest nur Ziel und Fundstelle.

| Quest | Aufgabe | Buch: Tools → |
|---|---|---|
| IEX-01 Mining Drill | `immersiveengineering:drill` | Mining Drill (fährt mit Diesel oder Biodiesel) |
| IEX-02 Engineer's Toolbox | `immersiveengineering:toolbox` | Engineer's Toolbox |
| IEX-03 Skyhook | `immersiveengineering:skyhook` | Engineer's Skyhook (fährt an Drähten entlang) |
| IEX-04 Revolver | `immersiveengineering:revolver` | Revolver, Revolver Cartridges |
| IEX-05 Railgun | `immersiveengineering:railgun` | Railgun |
| IEX-06 Accumulator Backpack | `immersiveengineering:powerpack` | Accumulator Backpack |

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | Steht in | Stand |
|---|---|---|
| Blei und Uran nur als Mekanism-Erz; IE-Blei- und Uranerz abgeschaltet | IE1-03, IE2-03 | 🟢 Config |
| Bauxit selten, reichlich in Everbright; Zinn nur in Everbright | IE1-03, IE6-02 | 🟢 |
| Excavator: Cassiterite entfernt, Galena und Uraninite seltener | IE6-02 | 🟢 Skript, ungetestet |
| Strom, Kabel, Rohre, Pumpe und Laden über IE oder Mekanism; Ad-Astra-Generatoren, Kabel, Pipes, Water Pump, Energizer entfernt | IE2-01, IE2-02, IE2-04, IE2-05 | 🟢 Energizer im Skript; übrige 🔵 prüfen |
| Feedthrough Insulator bringt Strom in abgedichtete Räume | IE2-02 | 🟢 Test 20 |
| Raketenplatten nur aus der Metal Press, Ad-Astra-Compressor entfällt | IE3-03 | 🟢 entschieden, 🔵 Skript |
| IE-Crusher übernimmt den Mekanism-Crusher | IE3-04 | 🟢 entschieden, 🔵 Rezeptliste und Skript |
| Treibstoff je Rakete: T1 Biodiesel, T2 entschwefelter Diesel, T3 Kerosene | IE3-06, IE4-04, IE5-01 | 🟢 Test 16 |
| Ölquellen von Ad Astra abgeschaltet | IE4-01 | 🟢 entschieden, 🔵 Datei liegt noch nicht in der Testinstanz |
| Digital Miner entfernt | IE6-03 | 🟢 entschieden, 🔵 Skript |
| Bronze, Constantan, Electrum, Invar auch in der Smeltery von Tinkers | IE1-06 | 🟢 |

## 🔵 Offen vor dem Einbau

1. Ob die Quests vor dem Mond (IE1 bis IE3) ins Questbuch kommen (O31 in `../18_STORY.md`).
2. Petroleum vor T1 Pflicht oder erst ab T2 (`../00_STATUS.md`, C.10)? Davon hängt ab, ob IE4 Hauptweg vor dem Mond ist.
3. In welchem Eintrag das Seismic Survey Tool beschrieben ist (IE4-01).
4. Liste der Crusher-Rezepte, die der IE-Crusher übernimmt (IE3-04).
5. Formatierung für FTB Quests erst beim Einbau.
6. 🟢 **Multiblöcke als Aufgabe** (2026-10-26): Gebaute Multiblöcke prüft jetzt die FTB-Aufgabe „Beobachtung“ (`observe(block-id)` in `tools/questbuch/ie.cfg`): Der Spieler sieht den fertigen Multiblock an. Nur IE6-06 (Assembler oder Automated Engineer's Workbench) bleibt ein Kontrollhaken, weil eine Beobachtung nur einen Block prüft. 🔵 Im Spiel prüfen, dass der geformte Block die erwartete ID hat.
7. Werkzeuge und Ausrüstung (IEX-01 bis IEX-06) hängen im Questbuch einzeln an der Werkbank (IE1-08), nicht als Kette. Passt das?
8. `order = 11` hat auch das Botania-Kapitel; Reihenfolge der Mod-Kapitel festlegen.
