# 21 — BALANCING

> Vorschläge, um Story-Abgaben, Ad-Astra-Rezepte und Energie teurer zu machen.
> Stand: 2026-10-25 (übernommen am 2026-10-28). Alles hier ist **🔵 Vorschlag**, außer was mit 🟢 markiert ist. Was der User übernimmt, wandert als Entscheidung nach `20_ENTSCHEIDUNGEN.md` und in die Fachdokumente; erst dann folgen Skripte. Offene Fragen: **B5, B7** in `20_ENTSCHEIDUNGEN.md`. **Entschieden am 2026-10-28:** B1 (Abschnitt 1 ganz), B2 (Abschnitt 2 ganz, mit Hebel), B3 (Processor in T3), B4 (Demonic Slate), B6 (Solar/Wind auf Planeten erlaubt).

## Grundsätze

- Story-Abgaben verlangen Items, die zur Progression passen, aber **immer eine Stufe teurer** als das Minimum (z. B. Block statt Barren).
- Raumfahrt: **T1 bleibt nah am heutigen Aufwand**, ab **T2 wird es richtig teuer**.
- Verteuert wird nicht nur über Stahl, sondern über mehrere Mods: IE (Blöcke, Spulen, Bleche), Mekanism (Legierungen, Kunststoff), AE2 (Prozessoren), Tinkers (Legierungen).
- Engine Frame, Fan, Flossen und Nose Cone sind für alle Stufen gleich. Die Verteuerung ab T2 gehört deshalb in die **stufeneigenen Teile** (Triebwerk, Tank, Rumpf).
- Neue Gates dürfen bereits erreichten Fortschritt nicht rückwirkend sperren (`01_PROGRESSION.md`).

## 1. Story-Abgaben (Teil 1) — 🟢 übernommen (B1, 2026-10-28), eingebaut

| Quest | Heute | Vorschlag | Bezug |
|---|---|---|---|
| „Würdig sein“ (Droide) | 4 Manasteel-Barren | **1 Manasteel-Block** | F4 |
| | LV-Kondensator | **MV-Kondensator** (laut JAR: Nickel- und Eisenplatte, 2 Stahl, Treated Wood, 1 Eimer Redstone Acid aus dem Mixer; B7) | F4 |
| | Smeltery Controller | schon erledigt durch O67: Vorschlaghammer ganz aus Kobalt, Manastahlblock | F4, O67 |
| Mondflug | flüssiger Sauerstoff (Menge offen) | **ein voller Basic Chemical Tank** Sauerstoff | `18_STORY.md` |
| Mars-Station, Checkliste | Items offen | **2 Oxygen Distributors, 1 Gravity Normalizer, 1 Advanced Energy Cube** | O22 |
| Altar-Reparatur (Merkur) | Terrasteel | **1 Terrasteel-Block** | F8 |
| | 4 Imbued Slate | **4 Demonic Slate** (B4; Altar-Stufe 4 über Edge of the Hidden Realm vor dem Tempel) | F8 |
| | Dusk Arc, Item aus Wesley's | bleibt (Unikate) | F8, F15 |
| Elf: Galaktischer Strahlenschutz | 4 Elementium-Barren | **1 Elementium-Block** | F14 |
| | Elite Control Circuit | **Ultimate Control Circuit** (das Calorite-Triebwerk verlangt schon einen Ultimate; der Elf wäre sonst billiger als die Rakete) | F14 |
| | Relikt, 4 Arcs | bleibt | F14, F2e |

**Folgen:** Elf und T4-Rakete teilen sich Elementium und Ultimate Circuits; die Altar-Reparatur hängt stark an Mana. Teil 1 wird spürbar länger.

## 2. Ad-Astra-Rezepte — 🟢 übernommen samt Hebel (B2, 2026-10-28), Skripte offen

Grundlage: `kubejs/server_scripts/raumfahrt/raketen_t1_t4.js` (Control Circuit je Stufe im Triebwerk, Pfad-Teil im Tank). IE-Stahl gilt über die Forge-Tags; der Ad-Astra-Stahl ist entfernt (O41). Jeder Stahl kommt also aus Hochofen oder Lichtbogenofen.

**Leitidee:** Jede Stufe verlangt die nächste Mekanism-Legierung (Infused → Reinforced → Atomic), passend zu den Control Circuits. IE liefert Blöcke und Spulen, ab T3 kommen Kunststoff und AE2 dazu, ab T4 Tinkers-Legierungen.

### T1 · Stahl (moderat)

- Flossen: Stahlplatten → **Stahl-Blech** (IE Sheetmetal)
- Launch Pad: **Stahlblock** in der Mitte
- Sonst wie heute; der Mondflug behält seinen Aufwand.

### T2 · Desh (der große Sprung)

- Rumpf: 6 Desh-Blöcke **+ 2 Stahlblöcke**
- Desh-Triebwerk: zusätzlich **Heavy Engineering Block** (IE) und **Infused Alloy** (Mekanism)
- Desh-Tank: Platten → **Stahl-Blech**, dazu eine **Electrum-Drahtspule** (IE)
- Raumanzug ab dem Mars: **Oxygen Gear mit Mekanism Steel Casing**

### T3 · Ostrum

- Rumpf: + 2 Stahlblöcke + **Redstone Engineering Block** (IE)
- Ostrum-Triebwerk: **Reinforced Alloy**, **HV-Drahtspule** (IE), **AE2 Logic Processor**
- Ostrum-Tank: **HDPE Sheets** (Mekanism-Kunststoff aus Ethylen; zieht die Erdöl-Chemie von Immersive Petroleum in die Raumfahrt)
- 🟢 Processor bleibt in T3 (B3): Prozessoren gibt es ab AE1 (Stufe 3), T3 ist Stufe 8.

### T4 · Calorite

- Rumpf: + 2 Stahlblöcke + **Light Engineering Blocks** (IE)
- Calorite-Triebwerk: **Atomic Alloy**, **AE2 Calculation Processor**, Galaktischer Strahlenschutz (wie bisher)
- Calorite-Tank: Innenhülle aus **Hepatizon oder Manyullyn** (Tinkers; braucht Kobalt aus dem Nether)

### Infrastruktur (gestaffelt)

| Teil | Vorschlag |
|---|---|
| NASA Workbench | Eisenstäbe → Stahlstäbe; zusätzlich Heavy Engineering Blocks und ein Mekanism Steel Casing |
| Launch Pad | Stahlblock in der Mitte, Stahl-Blech außen |
| Oxygen Distributor | einfache Version wie heute; für die Mars-Station mit **Steel Casing + Infused Alloy** (🔵 zwei Rezepte oder eines für alle) |
| Oxygen Loader | zusätzlich Steel Casing und Steel Mechanical Component |
| Gravity Normalizer | **Reinforced Alloy + Heavy Engineering Block** |
| Raumstationen | Erde/Mond moderat; Mars, Merkur/Venus, Glacio mit **Stahlblöcken statt Barren** und der Legierung ihrer Stufe |
| Rover | zusätzlich **HDPE Sheets** (Reifen) und ein **Light Engineering Block** |
| Raumanzug | Stahlplatten → Stahl-Blech |

### Optional: der große Hebel

Desh-, Ostrum- und Calorite-**Platten** nicht mehr aus der Metal Press, sondern im **Lichtbogenofen aus Planetenmetall + Stahl**. Dann frisst jede Stufe Stahl und Strom, ohne dass Stahl im Namen steht. Die Ad-Astra-eigenen Metal-Press-Rezepte (`immersiveengineering:metalpress/plate_desh` usw.) müssen dafür entfernt werden, ebenso die Hammer-Rezepte `immersiveengineering:crafting/plate_*_hammering` (beide bringt Ad Astra mit). Der Ad-Astra-Compressor ist schon entfernt. 🟢 übernommen (B2). Planetenmetall läuft nicht durch die Mekanism-Vervielfältigung (O42, `crossmod/mekanism_erze.js`) und hat auch sonst keine Erzverdopplung im Pack.

### Folgen

- Mit diesen Mengen reicht der einfache Hochofen ab T2 nicht mehr: **Improved Blast Furnace oder Lichtbogenofen** werden Pflicht. Passt zu K3 „Industrie“ und K6 „IE-Großindustrie“.
- 🔵 Genaue Stückzahlen je Rakete erst nach Abgleich mit den Rezepten im Ad-Astra-JAR.

## 3. Energie

### Lage heute

Energie kommt nur aus IE, Immersive Petroleum und Mekanism (`15_RAUMFAHRT.md`); AE2 und Ad Astra erzeugen keinen Strom mehr. Am Anfang ist Strom knapp (Wasserrad, Windmühle). Sobald Diesel- oder Mekanism-Generatoren laufen, ist Strom meist kein Engpass mehr: Kaum ein Rezept verlangt viel Energie auf einmal, und die Maschinen der Story-Abschnitte laufen nebenher.

### Vorschläge

**a) Stromhungrige Schritte in die Progression**
- Ab T2 Stahl überwiegend über den **Lichtbogenofen** (siehe Abschnitt 2) und die Planetenmetall-Platten dort (optionaler Hebel).
- Treibstoffe: Der T4-**Kryo-Treibstoff** (F3) braucht Elektrolyse (Electrolytic Separator) und Kühlung, beides frisst viel Strom. Mengen so wählen, dass ein Tankvorgang eine echte Anlage braucht.
- **Mekanism-Legierungen** (Abschnitt 2) kommen aus dem Metallurgic Infuser; Reinforced und Atomic laufen über mehrere stromhungrige Maschinen.

**b) Energie als Quest-Abgabe**
- 🟢 **Nur bei der Mars-Station** (User, 2026-10-25): Die Checkliste (O22) verlangt Energie, z. B. einen voll geladenen Advanced Energy Cube. Keine weiteren Energie-Abgaben in anderen Quests.
- 🔵 Prüfen, ob FTB Quests eine Energie-Aufgabe (Forge Energy) mitbringt; sonst bleibt es beim geladenen Cube als Item-Aufgabe.

**c) Stationen auf Planeten brauchen eigenen Strom**
- Oxygen Distributor und Gravity Normalizer verbrauchen Strom. Die Mars-Station muss **ihr eigenes Netz** haben: Dieselgenerator mit Nachschub von der Erde oder Mekanism-Generatoren vor Ort. Das macht Logistik zum Teil der Story („dauerhaft besetzt“).
- 🟢 Mekanism-Solar und -Wind auf Planeten sind erlaubt (B6). Noch im Spiel prüfen, ob sie dort laufen.

**d) Verbrauch per Config anheben** — 🟢 **übernommen** (User, 2026-10-25), als Config gebaut (Abschnitt 4, ungetestet)
- Ein maßvoller Aufschlag auf die großen Verbraucher macht Strom dauerhaft zum Thema. Keine der beiden Mods hat **einen** globalen Schalter; der Aufschlag wird je Maschine gesetzt.
- Höhe (Vorschlag, so gebaut): **×2** auf die Kernmaschinen des Fortschritts (Lichtbogenofen, Raffinerie, Legierungen, Chemie), **×1,5** auf Alltagsmaschinen, alles andere **×1**. Generatoren bleiben unverändert.

**Immersive Engineering** — `saves/<Welt>/serverconfig/immersiveengineering-server.toml` (pro Welt, wirkt nur beim Host). Schlüssel und Standard aus `config-overrides/_original/serverconfig/` (IE 10.2.0-183). `energyModifier` multipliziert die Energie jedes Rezepts dieser Maschine (Bereich 0,001–1000).

| Abschnitt | Schlüssel | Standard | Wert |
|---|---|---|---|
| `[machines.arc_furnace]` | `energyModifier` | 1.0 | **2.0** |
| `[machines.refinery]` | `energyModifier` | 1.0 | **2.0** |
| `[machines.crusher]` | `energyModifier` | 1.0 | 1.5 |
| `[machines.metal_press]` | `energyModifier` | 1.0 | 1.5 |
| `[machines.mixer]` | `energyModifier` | 1.0 | 1.5 |
| `[machines.fermenter]` | `energyModifier` | 1.0 | 1.5 |
| `[machines.squeezer]` | `energyModifier` | 1.0 | 1.5 |
| `[machines.excavator]` | `consumption` (Flux/Tick) | 4096 | 6144 |
| `[machines.bottling_machine]`, `[machines.sawmill]`, `[machines.auto_workbench]` | `energyModifier` | 1.0 | 1.0 |

Nicht anfassen: `dynamo_output`, `thermoelectric_output`, `dieselGen_output` (Erzeuger) und die `timeModifier` (Tempo bleibt).

**Mekanism** — `config/Mekanism/machine-usage.toml`, Abschnitt `[usage]` (Server-Config, liegt in der Instanz unter `config/Mekanism/` wie `world.toml`). Werte in **Joule pro Arbeitstick**; 1 FE = 2,5 J (`feConversionRate`). Standards mit der von Mekanism 10.4.16 in der Testinstanz erzeugten Datei abgeglichen (2026-10-28, stimmen).

| Schlüssel | Standard (J/t) | Wert | Grund |
|---|---|---|---|
| `metallurgicInfuser` | 50 | **100** | Legierungen je Raketenstufe |
| `chemicalInjectionChamber` | 400 | **800** | 4× Erzverarbeitung |
| `chemicalDissolutionChamber` | 400 | **800** | 5× Erzverarbeitung |
| `chemicalCrystallizer` | 400 | **800** | 5× Erzverarbeitung |
| `chemicalWasher` | 200 | **400** | 5× Erzverarbeitung |
| `purificationChamber` | 200 | **400** | 3× Erzverarbeitung |
| `chemicalInfuser` | 200 | **400** | Chemie |
| `oxidationChamber` | 200 | **400** | Chemie |
| `pressurizedReactionBase` | 5 | **10** | HDPE, Substrat |
| `isotopicCentrifuge` | 200 | **400** | Nuklearkette |
| `enrichmentChamber` | 50 | 75 | Alltag (×1,5) |
| `crusher` | 50 | 75 | Alltag |
| `osmiumCompressor` | 100 | 150 | Alltag |
| `combiner` | 50 | 75 | Alltag |
| `rotaryCondensentrator` | 50 | 75 | Sauerstoff, Treibstoffe |
| `digitalMiner` | 1000 | 1500 | Alltag |
| `energizedSmelter`, `precisionSawmill`, `electricPump`, `chargePad`, `laser`, `antiprotonicNucleosynthesizer` u. a. | — | unverändert | kein Fortschritts-Engpass bzw. ohnehin teuer |

Nicht anfassen:
- `feConversionRate` in `general.toml`: würde jeden Energieaustausch mit IE verzerren.
- `HydrogenEnergyDensity` in `general.toml`: steuert auch den Verbrauch des Electrolytic Separator, **aber zugleich** Wasserstoff- und Ethylen-Ertrag und den Gas-Burning Generator. Den Separator also nicht darüber verteuern.
- `generators.toml` (Solar, Wind, Gas, Turbine, Fusion): gehört zu Hebel e, nicht zum Multiplikator.

**e) Billige Erzeuger nicht zu früh**
- Mekanism-Generatoren (Gas-Burning, Wind, Solar) erst ab einer bestimmten Stufe oder teurer, damit IE (Diesel, Thermoelectric) länger die Hauptquelle bleibt.
- Die großen Lösungen (Fission, Turbine, Fusion) bleiben die Belohnung für Teil 2 (Fusion für T5, F3).

**f) AE2 als Dauerverbraucher**
- Da AE2 keinen eigenen Strom mehr erzeugt (Test 36), zieht ein großes Netz spürbar Energie. Das ist ohne weitere Änderung ein laufender Verbraucher.

### Folgen

- Mehr Strombedarf bremst das Midgame. Gegengewicht: Die Nebenquests geben **Generator-Upgrades oder Kondensatoren** als Belohnung.
- In der LAN-Welt wirken Configs nur beim Host; Werte müssen dort eingespielt werden (H4).

## 4. Config-Dateien: Energie-Multiplikator

> Gebaut am 2026-10-25 nach Abschnitt 3d, im Repo abgelegt am 2026-10-28. **UNGETESTET** (Tests 97–99 in `11_TESTING.md`).

| Datei im Repo | Ins Spiel | Änderung |
|---|---|---|
| `config-overrides/serverconfig/immersiveengineering-server.toml` | `saves/<Welt>/serverconfig/` (Testwelt; Hauptwelt beim Host, H4) | 8 Zeilen (Tabelle IE oben); Erz-Einstellungen der bisherigen Override-Datei unverändert |
| `config-overrides/config/Mekanism/machine-usage.toml` (neu; Original in `_original/config/Mekanism/`) | `config/Mekanism/` der Instanz | 16 Werte (Tabelle Mekanism oben), im Kommentar mit `IEplus: Standard …` markiert |

Nur bei geschlossenem Spiel kopieren (sonst überschreibt Mekanism die Datei beim Beenden).
