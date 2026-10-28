# Questtexte Mekanism (Ersatz für das fehlende Buch)

> Stand 2026-10-17, Minecraft 1.20.1. Entwurf für FTB Quests. Mekanism hat kein Buch im Spiel (`../19_HILFEBUECHER.md`), deshalb führen diese Texte Schritt für Schritt. Gegliedert nach den Meilensteinen MK1 bis MK9 der Meilensteinkarte; die Kapitel sind dort Arbeitstitel.
> Quellen: `../modpfade/mekanism/WISSEN.md` und `data.js` (Rezepte, Zahlen aus der Config der Testinstanz), `../03_ERZGENERATION.md`, `../15_RAUMFAHRT.md`, `../01_PROGRESSION.md`. Item-IDs gegen die Sprachdateien der JARs geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren: Die Story schreibt der User. Wo ein Quest später an die Story gehängt wird, kann ein Story-Satz davor stehen.
- **Anrede „du“**, Item-Namen englisch wie im Spiel.
- **Hauptweg** = Quest der Meilensteinkette (Pflicht für spätere Ziele). **Nebenquest** = stellt den Mod in der Breite vor (Ketten von höchstens drei bis vier Quests).
- **Pack-Änderungen** sind mit ⚙️ markiert: Diese Stellen weichen vom Mod ab und müssen im Text stehen, weil kein Wiki sie kennt. Sie gelten erst, wenn die Skripte umgesetzt sind.
- 🔵 = nicht aus den JAR-Daten belegt (vor allem die Bauregeln der Multiblöcke, die nur im Code stehen) oder noch nicht entschieden. Vor dem Einbau im Spiel prüfen.
- Rezepte stehen nur, wo sie für den nächsten Schritt wichtig sind; den Rest zeigt JEI. Ein Satz „Rezept in JEI“ genügt dann.

---

## MK1 · Infuser und Sauerstoff (K3 Industrie)

### MK1-01 Osmium · Hauptweg
**Aufgabe:** `mekanism:raw_osmium` oder `mekanism:ingot_osmium`

Osmium ist das Metall, um das sich in Mekanism alles dreht: Maschinen, Schaltkreise, Tanks und Upgrades brauchen es. In der Overworld ist es selten, ungefähr so häufig wie Diamant, und liegt in allen Höhen. Für den Anfang reichen ein paar Barren. ⚙️ Später gibt es Osmium reichlich in Everdawn und auf dem Mond.

### MK1-02 Metallurgic Infuser · Hauptweg
**Aufgabe:** `mekanism:metallurgic_infuser`

Die erste Maschine von Mekanism. Sie lädt einen Stoff in ein Item: links das Item, rechts der Stoff, etwa Redstone oder Kohle. Ein Redstone-Staub ergibt 10 Einheiten Redstone, eine Kohle 10 Carbon, eine Holzkohle 20.
Rezept: 4 Eisen, 2 Furnace, 2 Redstone, 1 Osmium Ingot.
Die Maschine braucht Strom. Hast du noch keinen, bau zuerst den Heat Generator (nächste Quest).

### MK1-03 Heat Generator · Hauptweg
**Aufgabe:** `mekanismgenerators:heat_generator`

Der einfachste Generator: Er verbrennt Brennstoff wie Kohle oder Holz und liefert 200 Joule je Tick. Steht Lava an einer Seite, kommen je Seite 30 Joule dazu, im Nether 100. Er braucht keinen Stahl.
Mekanism rechnet in Joule, nimmt aber auch Strom von Immersive Engineering an. Ein IE-Generator tut es also auch.

### MK1-04 Die drei Grundstoffe · Hauptweg
**Aufgabe:** `mekanism:alloy_infused`, `mekanism:basic_control_circuit`, `mekanism:ingot_steel` (oder Stahl aus IE)

Mit dem Infuser entstehen die Grundstoffe des Mods:
- **Infused Alloy:** Eisenbarren + 10 Redstone.
- **Basic Control Circuit:** Osmium Ingot + 20 Redstone. Der Schaltkreis steckt in fast jeder Maschine.
- **Stahl:** Eisenbarren + 10 Carbon ergibt Enriched Iron, Enriched Iron + 10 Carbon ergibt Steel Dust, im Ofen geschmolzen ein Steel Ingot.
Stahl aus Immersive Engineering passt in jedes Mekanism-Rezept und umgekehrt.

### MK1-05 Steel Casing · Hauptweg
**Aufgabe:** `mekanism:steel_casing`

Das Gehäuse sitzt in der Mitte fast jedes Maschinenrezepts. Rezept: 4 Stahl, 4 Glass, 1 Osmium Ingot. Bau dir gleich ein paar auf Vorrat.

### MK1-06 Electrolytic Separator · Hauptweg
**Aufgabe:** `mekanism:electrolytic_separator`

Der Separator spaltet Wasser mit Strom in zwei Gase: aus 2 mB Wasser werden 2 mB Hydrogen und 1 mB Oxygen. Er ist die Quelle fast aller Gase in Mekanism.
Zuerst brauchst du einen **Electrolytic Core** (5 Infused Alloy, 2 Osmium Dust, 1 Iron Dust, 1 Gold Dust). Die Stäube macht der Crusher. ⚙️🔵 Im Pack übernimmt der Crusher von Immersive Engineering diese Arbeit; ob der Mekanism-Crusher bleibt, ist noch offen.
Wasser kommt über ein Rohr oder per Eimer hinein. Die beiden Gase verlassen die Maschine an zwei verschiedenen Seiten; links im Fenster stellst du ein, was mit einem Gas geschieht, das du nicht brauchst (behalten oder ablassen).

### MK1-07 Flüssiger Sauerstoff · Hauptweg
**Aufgabe:** `mekanism:rotary_condensentrator`, dann Flüssigkeit `mekanism:oxygen` (Liquid Oxygen), 🔵 Menge nach Bedarf der Rakete T1

Gase lassen sich nicht in Eimer füllen. Der **Rotary Condensentrator** macht aus Gas eine Flüssigkeit und umgekehrt; der Hebel im Fenster bestimmt die Richtung.
Der Weg: Wasser → Electrolytic Separator → Oxygen (Gas) → Pressurized Tube oder Chemical Tank → Rotary Condensentrator → Liquid Oxygen.
⚙️ Raumanzüge und Raumstationen von Ad Astra laufen in diesem Pack nur mit diesem Sauerstoff. Der Oxygen Loader nimmt kein Wasser mehr an.
Tipp: Leitungen für Gase sind die **Pressurized Tubes** (2 Stahl + 1 Glass ergeben 8), für Flüssigkeiten die **Mechanical Pipes** (2 Stahl + 1 Bucket).

---

## MK2 · Grundmaschinen (K4 Der Mond)

### MK2-01 Enrichment Chamber: Erz ×2 · Hauptweg
**Aufgabe:** `mekanism:enrichment_chamber`

Die erste Stufe der Erzverarbeitung: Aus einem Erzblock werden zwei Stäube, aus drei Raw-Stücken vier. Die Stäube schmilzt du im Ofen.
Erzblöcke bringen in jeder Stufe mehr als Raw-Stücke. Wenn du kannst, bau mit Silk Touch ab.
Die Kammer reichert außerdem Stoffe für den Infuser an: Enriched Carbon, Redstone, Diamond, Gold und Tin liefern je 80 Einheiten statt 10.
Mekanism verarbeitet nur Eisen, Gold, Kupfer, Zinn, Osmium, Blei und Uran. Silber, Nickel und Aluminium bleiben bei Immersive Engineering.

### MK2-02 Energy Cube und Universal Cable · Nebenquest
**Aufgabe:** `mekanism:basic_energy_cube`, `mekanism:basic_universal_cable`

Der Energy Cube speichert Strom, der Basic Cube 4 Millionen Joule. Universal Cables leiten ihn (2 Stahl + 1 Redstone ergeben 8).
Jede Seite eines Mekanism-Blocks lässt sich einzeln einstellen: im Fenster des Blocks am Rand („Side Config“) oder mit dem **Configurator**. So legst du fest, wo Strom hineingeht und wo er herauskommt.

### MK2-03 Upgrades · Nebenquest
**Aufgabe:** `mekanism:upgrade_speed` oder `mekanism:upgrade_energy`

Upgrades steckst du in den Upgrade-Slot rechts im Maschinenfenster. **Speed** macht schneller, braucht aber mehr Strom; **Energy** gleicht das aus. Beide aus 2 Glass, 2 Infused Alloy und einem Staub (Osmium bzw. Gold). Weitere: Muffling (leiser), Gas (spart Gas), Filter (Heavy Water aus der Pumpe), Anchor (hält den Chunk geladen).

### MK2-04 Formulaic Assemblicator · Nebenquest
**Aufgabe:** `mekanism:formulaic_assemblicator`, `mekanism:crafting_formula`

Der früheste Autocrafter im Pack. Lege das Rezept ins Raster, schreibe es auf eine **Crafting Formula** (Paper + Basic Control Circuit) und lass die Maschine laufen. Sie craftet, solange Zutaten im Inventar liegen. Mit einer Kiste davor und einem Transporter dahinter ist das eine kleine Fabrik.

### MK2-05 Logistik · Nebenquest
**Aufgabe:** `mekanism:basic_logistical_transporter`, `mekanism:logistical_sorter`

Logistical Transporters bringen Items von Block zu Block. Der **Logistical Sorter** zieht Items aus einer Kiste und schickt sie nach Filtern los. Mit dem Configurator färbst du Transporter ein; ein Item mit Farbe nimmt nur Leitungen derselben Farbe.

### MK2-06 Lagern · Nebenquest
**Aufgabe:** `mekanism:basic_bin`, `mekanism:basic_fluid_tank`, `mekanism:basic_chemical_tank`

Ein **Bin** fasst sehr viel von einem einzigen Item. Der **Fluid Tank** (32 000 mB) lässt sich mitnehmen und wie ein Eimer benutzen. Der **Chemical Tank** (64 000 mB) speichert Gase wie Oxygen und Hydrogen. Alle drei gibt es in vier Stufen; die höhere craftest du aus der niedrigeren.

### MK2-07 Weitere Generatoren · Nebenquest
**Aufgabe:** eines von `mekanismgenerators:solar_generator`, `mekanismgenerators:wind_generator`, `mekanismgenerators:bio_generator`

- **Solar Generator:** bis 50 Joule je Tick bei Tag; der Advanced Solar Generator bis 300.
- **Wind Generator:** 60 bis 480 Joule je Tick, je höher er steht, desto mehr.
- **Bio-Generator:** 350 Joule je Tick aus Bio Fuel, das der Crusher aus Pflanzen macht.
Alle drei kosten viel Osmium.

---

## MK3 · Advanced, Erz ×3 (K5 Erzketten)

### MK3-01 Zinn aus Everbright · Hauptweg
**Aufgabe:** `mekanism:raw_tin` oder `mekanism:ingot_tin`

⚙️ Zinn gibt es in diesem Pack nur in Everbright. Du brauchst es für Bronze (3 Kupfer + 10 Tin im Infuser ergeben 4 Bronze) und für die Pumpen, Jetpacks und Fluidic Plenisher von Mekanism. Everbright liefert auch Blei.

### MK3-02 Die Stufen von Mekanism · Hauptweg
**Aufgabe:** `mekanism:advanced_control_circuit`

Fast alles in Mekanism gibt es in vier Stufen. Jede Stufe hat eine Legierung und einen Schaltkreis:

| Stufe | Legierung | Schaltkreis |
|---|---|---|
| Basic | Redstone | Basic Control Circuit |
| Advanced | Infused Alloy | Basic Circuit + 2 Infused Alloy |
| Elite | Reinforced Alloy (Infused Alloy + 20 Diamond) | Advanced Circuit + 2 Reinforced Alloy |
| Ultimate | Atomic Alloy (Reinforced Alloy + 40 Refined Obsidian) | Elite Circuit + 2 Atomic Alloy |

Energy Cubes, Tanks, Bins und Leitungen der nächsten Stufe craftest du aus der darunter mit Legierung und Schaltkreis. Leitungen kannst du auch an Ort und Stelle aufwerten: Rechtsklick mit der Legierung.

### MK3-03 Purification Chamber: Erz ×3 · Hauptweg
**Aufgabe:** `mekanism:purification_chamber`

Die zweite Stufe der Erzverarbeitung. Die Kammer verarbeitet einen Erzblock mit Oxygen zu drei **Clumps**. Daraus macht der Crusher Dirty Dust, die Enrichment Chamber sauberen Staub, und der Ofen den Barren.
Oxygen kommt per Rohr aus dem Electrolytic Separator. Ohne Separator nimmt die Kammer auch Flint: 10 Einheiten Oxygen je Flint im kleinen Slot.
Die Kammer wird aus einer Enrichment Chamber gebaut, die dabei verbraucht wird.

Kette: Erz → Purification Chamber → Clumps → Crusher → Dirty Dust → Enrichment Chamber → Dust → Ofen → Barren.

### MK3-04 Factories · Hauptweg
**Aufgabe:** `mekanism:basic_tier_installer` oder eine Factory, z. B. `mekanism:basic_enriching_factory`

Eine **Factory** arbeitet mehrere Items gleichzeitig ab. Es gibt sie für neun Maschinen, darunter Enriching, Smelting, Purifying und Injecting. Mit einem **Tier Installer** wertest du eine Maschine dort auf, wo sie steht; Inhalt und Einstellungen bleiben. Jede höhere Stufe braucht einen neuen Installer.
Tipp: Eine Factory sortiert die Items selbst auf ihre Slots, wenn du den Knopf „Auto-Sort“ im Fenster einschaltest.

### MK3-05 Osmium Compressor und Refined Obsidian · Hauptweg
**Aufgabe:** `mekanism:osmium_compressor`, `mekanism:ingot_refined_obsidian`

Der Compressor presst Stäube mit Osmium zu Barren; ein Osmium Ingot ergibt 200 Einheiten.
- **Refined Obsidian:** Obsidian zu Staub mahlen, im Infuser mit 10 Diamond zu Refined Obsidian Dust, im Compressor zum Barren. Er wird für die Ultimate-Stufe gebraucht. ⚙️ Die Smeltery von Tinkers stellt ihn in diesem Pack nicht her.
- **Refined Glowstone:** Glowstone Dust im Compressor.

### MK3-06 Dynamic Tank · Nebenquest
**Aufgabe:** `mekanism:dynamic_valve`

Ein frei groß baubarer Tank für Flüssigkeiten oder Gase. 🔵 Bauregeln (nicht aus den JAR-Daten, im Spiel prüfen): ein hohler Quader von 3 × 3 × 3 bis 18 × 18 × 18. Kanten aus Dynamic Tank, die Flächen aus Dynamic Tank, Structural Glass oder Dynamic Valve. Innen nur Luft. Ein Valve ist der Anschluss für Rohre. Steht er richtig, zeigt Rechtsklick ein Fenster.

---

## MK4 · Elite und Chemie (K7 Horchposten)

### MK4-01 Reinforced Alloy · Hauptweg
**Aufgabe:** `mekanism:alloy_reinforced`, `mekanism:elite_control_circuit`

Im Infuser: Infused Alloy + 20 Diamond. Ein Diamant ergibt 10 Einheiten; in der Enrichment Chamber angereichert (Enriched Diamond) sind es 80. Reichere die Diamanten deshalb immer erst an.

### MK4-02 Chemische Grundausstattung · Hauptweg
**Aufgabe:** `mekanism:chemical_infuser`, `mekanism:chemical_oxidizer`

Ab hier arbeitet Mekanism mit Chemie.
- **Chemical Oxidizer:** macht aus einem Feststoff ein Gas, zum Beispiel aus Sulfur Dust Sulfur Dioxide.
- **Chemical Infuser:** verbindet zwei Gase zu einem dritten.
Gase reisen in Pressurized Tubes und warten in Chemical Tanks. Bau lieber ein paar Tanks zu viel als zu wenig: Eine volle Maschine hält die ganze Kette an.

### MK4-03 Thermal Evaporation Plant: Brine · Hauptweg
**Aufgabe:** `mekanism:thermal_evaporation_controller`, Flüssigkeit `mekanism:brine`

Ein Verdunstungsturm aus Kupfer und Stahl. Er dampft Wasser zu **Brine** ein (10 mB Wasser ergeben 1 mB) und Brine zu **Liquid Lithium** (wieder 10 zu 1). Wärme beschleunigt ihn.
🔵 Bauregeln (im Spiel prüfen): Grundfläche 4 × 4, Höhe 3 bis 18 Blöcke, Wände aus Thermal Evaporation Blocks mit einem hohlen Inneren von 2 × 2. Genau ein Controller in einer Wand, dazu Valves für Ein- und Ausgang. Je höher der Turm, desto schneller. Heizen lässt er sich mit Sonne, Fuelwood Heater oder Resistive Heater.

### MK4-04 Hydrogen Chloride · Hauptweg
**Aufgabe:** `mekanism:chemical_injection_chamber`

Für die nächste Erzstufe brauchst du **Hydrogen Chloride**. Der Weg: Brine in den Electrolytic Separator, heraus kommen Sodium und Chlorine. Chlorine und Hydrogen (aus Wasser, MK1-06) im Chemical Infuser ergeben Hydrogen Chloride.
Ersatzweise nimmt die Injection Chamber Salt direkt, aber nur 2 Einheiten je Salt. Für den Dauerbetrieb lohnt die Kette.

### MK4-05 Chemical Injection Chamber: Erz ×4 · Hauptweg
**Aufgabe:** `mekanism:shard_iron` (oder ein anderer Shard)

Die Injection Chamber verarbeitet einen Erzblock mit Hydrogen Chloride zu vier **Shards**. Gebaut wird sie aus einer Purification Chamber.
Kette: Erz → Injection Chamber → Shards → Purification Chamber → Clumps → Crusher → Dirty Dust → Enrichment Chamber → Dust → Ofen.
Jede Stufe hängt sich vorn an die vorige. Die alten Maschinen bleiben in der Kette.

### MK4-06 Schwefelsäure · Hauptweg
**Aufgabe:** Flüssigkeit `mekanism:sulfuric_acid` oder Gas Sulfuric Acid in einem Chemical Tank

Die fünfte Erzstufe und die Uranverarbeitung brauchen **Sulfuric Acid**.
1. Sulfur Dust in den Chemical Oxidizer: Sulfur Dioxide.
2. Sulfur Dioxide + Oxygen im Chemical Infuser: Sulfur Trioxide.
3. Wasser im Rotary Condensentrator zu Water Vapor.
4. Sulfur Trioxide + Water Vapor im Chemical Infuser: Sulfuric Acid.
Schwefel liefert Immersive Engineering (Crusher, als Nebenprodukt), Immersive Petroleum (beim Entschwefeln von Diesel) oder die Injection Chamber aus Gunpowder. Jeder Schwefelstaub im Pack passt.

### MK4-07 Pressurized Reaction Chamber und HDPE · Hauptweg
**Aufgabe:** `mekanism:pressurized_reaction_chamber`, `mekanism:hdpe_sheet`

Die Reaktionskammer verarbeitet einen Feststoff, eine Flüssigkeit und ein Gas zugleich.
1. 2 Bio Fuel + 10 mB Wasser + 100 Hydrogen ergeben **Substrate**; dabei entstehen 100 **Ethylene**.
2. Substrate + 50 mB Ethylene + 10 Oxygen ergeben ein **HDPE Pellet**.
3. Pellets in der Enrichment Chamber ergeben **HDPE Sheets**, den Kunststoff des Endgames.
Ethylene ist nebenbei der beste Brennstoff des Gas-Burning Generators.

### MK4-08 Nebenquest: Gas-Burning Generator
**Aufgabe:** `mekanismgenerators:gas_burning_generator`

Verbrennt Gase zu Strom. Ethylene aus der Reaktionskammer liefert viel mehr Energie als Hydrogen. Mit einem Kreislauf aus Pflanzenfarm, Crusher und Reaktionskammer hast du eine Stromquelle ohne Kohle.

---

## Nebenquest-Reihe: Erzvervielfachung (ab MK2, je Stufe freigeschaltet)

Kurze Anleitungen, die mit der passenden Maschine erscheinen. Quelle der Zahlen: Rezeptdaten. Aus einem **Erzblock** (in Klammern aus drei Raw-Stücken):

| Quest | Stufe | Neue Maschine | Neue Chemikalie | Ergebnis |
|---|---|---|---|---|
| EV-2 | ×2 | Enrichment Chamber | keine | 2 Dust (4) |
| EV-3 | ×3 | Purification Chamber | Oxygen | 3 Clumps (6) |
| EV-4 | ×4 | Chemical Injection Chamber | Hydrogen Chloride | 4 Shards (8) |
| EV-5 | ×5 | Dissolution Chamber, Chemical Washer, Chemical Crystallizer | Sulfuric Acid, Wasser | 5 Crystals (10) |

### EV-1 Raw Ore zurück zum Erz
**Aufgabe:** `mekanism:combiner`

Ab der dritten Stufe bringt ein Erzblock deutlich mehr als Raw-Stücke. Der **Combiner** macht aus 8 Raw Ore und einem Cobblestone wieder einen Erzblock. Wer ohne Silk Touch abbaut, holt so den Unterschied zurück. Der Combiner braucht Elite-Teile.

### EV-5 Kristalle · Erz ×5
**Aufgabe:** `mekanism:crystal_iron` (oder ein anderer Crystal)

Die letzte Stufe braucht drei neue Maschinen, alle mit Ultimate Control Circuits und Refined Obsidian; der Crystallizer zusätzlich Fluorit.
1. **Chemical Dissolution Chamber:** Erzblock + Sulfuric Acid ergeben 1000 mB Dirty Slurry.
2. **Chemical Washer:** reinigt ihn mit Wasser (5 mB Wasser je mB Slurry) zu Clean Slurry.
3. **Chemical Crystallizer:** je 200 mB Clean Slurry ein Crystal.
Dann zurück in die alte Kette: Crystal → Injection Chamber → Shard → … → Barren.
Der Washer braucht viel Wasser. Eine Electric Pump in einer Wasserquelle oder ein Dynamic Tank lohnt sich.

---

## MK5 · Kernkraft (K9 Der Tempel)

> Vor diesem Kapitel ein Warnhinweis: Radioaktive Stoffe sind gefährlich. Tritt Gas aus einer Leitung, einer zerstörten Maschine oder einem abgebauten Tank aus, verstrahlt es die Umgebung. Strahlenvergiftung macht Schaden und kann töten.

### MK5-01 Uran · Hauptweg
**Aufgabe:** `mekanism:yellow_cake_uranium`

⚙️ Uran ist in der Overworld knapp; reichlich gibt es es auf Merkur und Venus. Aus einem Uranbarren macht die Enrichment Chamber 2 **Yellow Cake Uranium**. Rohes Uran ist ungefährlich, Gefahr droht erst bei den Gasen.

### MK5-02 Schutz · Hauptweg
**Aufgabe:** `mekanism:hazmat_mask`, `mekanism:hazmat_gown`, `mekanism:hazmat_pants`, `mekanism:hazmat_boots`, `mekanism:geiger_counter`

Bevor du mit radioaktiven Gasen arbeitest: Der **Hazmat**-Anzug aus vier Teilen schützt vor Strahlung (Blei plus Farbstoff). Der **Geiger Counter** misst die Strahlung der Umgebung, das **Dosimeter** deine eigene Dosis. Die Dosis sinkt mit der Zeit wieder.
Radioaktiven Abfall lagerst du im **Radioactive Waste Barrel**. Baust du ein volles Fass ab, tritt der Inhalt aus.

### MK5-03 Fissile Fuel · Hauptweg
**Aufgabe:** `mekanism:isotopic_centrifuge`, Gas Fissile Fuel in einem Chemical Tank

1. Yellow Cake im Chemical Oxidizer: **Uranium Oxide**.
2. Fluorit in der Dissolution Chamber mit Sulfuric Acid: **Hydrofluoric Acid**.
3. Uranium Oxide + Hydrofluoric Acid im Chemical Infuser: **Uranium Hexafluoride**.
4. In der **Isotopic Centrifuge**: **Fissile Fuel**.
⚙️ Fluorit liegt in der Overworld und reichlich auf dem Mars. Blei für die Zentrifuge kommt aus Everbright, vom Merkur oder von der Venus.

### MK5-04 Fission Reactor · Hauptweg
**Aufgabe:** `mekanismgenerators:fission_reactor_casing`, `mekanismgenerators:fission_fuel_assembly`, `mekanismgenerators:control_rod_assembly`, `mekanismgenerators:fission_reactor_port`

Der Spaltreaktor verbrennt Fissile Fuel und erhitzt ein Kühlmittel, Wasser oder Sodium. Er erzeugt keinen Strom, sondern Wärme und heißen Dampf; Strom macht erst die Turbine (MK5-05). 1 mB Brennstoff setzt 1 000 000 Joule Wärme frei. Als Abfall entsteht **Nuclear Waste**.
🔵 Bauregeln (im Spiel prüfen): Quader aus Fission Reactor Casing oder Reactor Glass, mindestens 3 × 3 × 4, höchstens 18 × 18 × 18. Innen stehen Säulen aus Fuel Assemblies, jede mit einer Control Rod Assembly obenauf. Ports in der Hülle stellst du mit dem Configurator auf Kühlmittel, Brennstoff oder Abfall um.
**Wichtig:** Fang mit einer niedrigen Brennrate an (Feld „Rate“ im Fenster) und halte die Kühlung immer voll. Läuft ein Tank voll oder fehlt Kühlmittel, steigen Temperatur und Schaden. Mit dem Knopf **SCRAM** schaltest du sofort ab. Mit einem **Logic Adapter** schaltet der Reaktor sich bei Gefahr selbst per Redstone ab. Bei 100 % Schaden explodiert er und verstrahlt die Gegend.

### MK5-05 Boiler und Turbine · Hauptweg
**Aufgabe:** `mekanismgenerators:turbine_valve`, `mekanismgenerators:electromagnetic_coil`

Die **Industrial Turbine** macht aus Dampf Strom. Den Dampf liefert der Reaktor direkt, wenn er mit Wasser gekühlt wird, oder ein **Thermoelectric Boiler**, der Wärme (etwa von Sodium aus dem Reaktor) in Dampf umwandelt.
🔵 Turbine (im Spiel prüfen): quadratische Grundfläche mit ungerader Kantenlänge, 5 × 5 bis 17 × 17, Höhe bis 18. In der Mitte eine Säule aus Turbine Rotors mit je zwei Blades. Auf dem obersten Rotor der Rotational Complex, um ihn herum eine Ebene aus Pressure Dispersers, die bis an die Wände reicht. Darüber die Electromagnetic Coils, die den Complex berühren; eine Coil versorgt vier Blades. Turbine Vents darüber in Wand oder Dach lassen den Dampf ab. Turbine Valves unterhalb der Disperser-Ebene nehmen Dampf an und geben Strom ab.
🔵 Boiler (im Spiel prüfen): hohler Quader aus Boiler Casing, unten Superheating Elements, darüber eine Ebene aus Pressure Dispersers über die volle Fläche, darüber Platz für den Dampf.

### MK5-06 Polonium und Plutonium · Hauptweg
**Aufgabe:** `mekanism:pellet_polonium`

Aus dem Abfall wird der Rohstoff des Endgames.
- **Polonium:** Nuclear Waste im **Solar Neutron Activator** (arbeitet nur bei Sonnenlicht). 10 Waste ergeben 1 Polonium.
- **Plutonium:** Nuclear Waste in der Isotopic Centrifuge, ebenfalls 10 zu 1.
Ein Pellet presst die Pressurized Reaction Chamber aus 1000 Einheiten Gas, 1000 mB Wasser und einem Fluorite Dust. Übrig bleibt Spent Nuclear Waste; lagere ihn im Waste Barrel.
Polonium brauchst du für das QIO-Lager, die MekaSuit, den Fusionsreaktor und das SPS.

### MK5-07 Induction Matrix · Nebenquest
**Aufgabe:** `mekanism:induction_port`, `mekanism:basic_induction_cell`

Der große Stromspeicher. Die **Cells** innen bestimmen die Kapazität (die Basic Cell 8 Milliarden Joule), die **Providers** wie viel Strom je Tick fließt. Die Cells brauchen **Lithium** aus dem Verdunstungsturm (MK4-03) und dem Chemical Crystallizer.
🔵 Bauregeln (im Spiel prüfen): hohler Quader aus Induction Casing, mindestens 3 × 3 × 3, höchstens 18 × 18 × 18. Flächen auch aus Structural Glass. Innen Cells und Providers in beliebiger Mischung. Ein Induction Port wird mit dem Configurator zwischen Ein- und Ausgang umgeschaltet.

---

## MK6 · Ultimate und Teleportation (K10 Der Elf)

### MK6-01 Atomic Alloy · Hauptweg
**Aufgabe:** `mekanism:alloy_atomic`, `mekanism:ultimate_control_circuit`

Im Infuser: Reinforced Alloy + 40 Refined Obsidian. Enriched Refined Obsidian aus der Enrichment Chamber liefert 80 Einheiten statt 10. Die höchste Stufe von Mekanism.

### MK6-02 Teleportation Core · Hauptweg
**Aufgabe:** `mekanism:teleportation_core`

4 Lapis, 2 Atomic Alloy, 2 Gold, 1 Diamant. Der Kern steckt in allem, was Dinge über weite Strecken bewegt.

### MK6-03 Teleporter · Nebenquest
**Aufgabe:** `mekanism:teleporter`, `mekanism:teleporter_frame`

Der Teleporter bringt Spieler zu einem anderen Teleporter, auch in andere Dimensionen. Im Fenster gibst du ihm eine Frequenz; Teleporter mit derselben Frequenz sind verbunden.
🔵 Bauregeln (im Spiel prüfen): ein Rahmen aus Teleporter Frames, 3 Blöcke breit und 4 hoch, mit einer Öffnung von 1 × 2 in der Mitte. Der Teleporter-Block ist Teil des Rahmens. Er braucht Strom, auf weite Strecken und zwischen Dimensionen mehr.
Für unterwegs gibt es den **Portable Teleporter**.

### MK6-04 Quantum Entangloporter · Nebenquest
**Aufgabe:** `mekanism:quantum_entangloporter`

Überträgt Items, Flüssigkeiten, Gase, Strom und Wärme ohne Leitung zwischen zwei Orten, auch zwischen Planeten. Zwei Entangloporter mit derselben Frequenz teilen ihren Inhalt. Die Seiten stellst du ein wie an jeder Mekanism-Maschine.
Damit eine entfernte Basis weiterläuft, wenn niemand dort ist, muss ihr Gebiet geladen bleiben (nächste Quest).

### MK6-05 Dimensional Stabilizer · Nebenquest
**Aufgabe:** `mekanism:dimensional_stabilizer`

Hält die Chunks um sich herum geladen, auch wenn kein Spieler in der Nähe ist. Im Fenster wählst du, welche Chunks. Zusammen mit dem Entangloporter läuft so eine Station auf dem Mars, während du auf der Erde bist.

### MK6-06 Laser · Hauptweg
**Aufgabe:** `mekanism:laser`, `mekanism:laser_amplifier`

Der **Laser** schickt Energie als Strahl. Er baut Blöcke ab und verletzt alles, was im Weg steht. Ein **Laser Amplifier** sammelt den Strahl, speichert die Energie und gibt sie gebündelt oder per Redstone gesteuert weiter. Du brauchst beides für den Fusionsreaktor und das SPS.

---

## MK7 · Fusion (K12 Ausbildung, Part 2)

### MK7-01 Deuterium · Hauptweg
**Aufgabe:** Gas Deuterium in einem Chemical Tank

Eine **Electric Pump** mit **Filter Upgrade** in einem Meer oder großen Wasser fördert **Heavy Water**. Der Electrolytic Separator spaltet es in Deuterium und Oxygen.

### MK7-02 Tritium · Hauptweg
**Aufgabe:** Gas Tritium in einem Chemical Tank

Lithium (MK4-03) im **Solar Neutron Activator**: Tritium. Der Aktivator arbeitet nur bei Tag unter freiem Himmel.

### MK7-03 Hohlraum · Hauptweg
**Aufgabe:** `mekanismgenerators:hohlraum`

Die Zündkapsel des Reaktors: im Infuser aus 4 Gold Dust + 10 Carbon. Fülle sie im Chemical Tank oder an einem Port mit **D-T Fuel**: Deuterium + Tritium im Chemical Infuser.

### MK7-04 Fusionsreaktor · Hauptweg
**Aufgabe:** `mekanismgenerators:fusion_reactor_controller`, `mekanismgenerators:laser_focus_matrix`

Der Fusionsreaktor verbrennt D-T Fuel; 1 mB liefert 10 000 000 Joule.
🔵 Bauregeln (im Spiel prüfen): ein Würfel von 5 × 5 × 5 ohne die zwölf Kanten, aus Fusion Reactor Frames. Der Controller sitzt oben in der Mitte. Ports und Reactor Glass in den Flächen, dazu eine Laser Focus Matrix.
**Zünden:** Der gefüllte Hohlraum kommt in den Controller. Ein Laser Amplifier, der mindestens 🔵 400 Millionen Joule gesammelt hat, feuert auf die Laser Focus Matrix. Danach brennt der Reaktor, solange Deuterium und Tritium nachkommen. Den Strom nimmst du an einem Port ab; mit Wasser gekühlt liefert er stattdessen Dampf für die Turbine.

---

## MK8 · SPS und Antimaterie (K13 Die Prüfung, Part 2)

### MK8-01 Supercritical Phase Shifter · Hauptweg
**Aufgabe:** `mekanism:sps_casing`, `mekanism:sps_port`, `mekanism:supercharged_coil`

Das SPS erzeugt mit riesigen Mengen Strom **Antimatter**. 🔵 Eingangsstoff und Bauregeln stehen nicht in den JAR-Daten. Nach Spielwissen (im Spiel prüfen): Eingang ist Polonium als Gas, 2000 mB je 1 mB Antimatter. Bauform ein Würfel von 7 × 7 × 7 ohne Kanten aus SPS Casing und Reactor Glass, mit SPS Ports. An einen Port, der Strom bekommt, setzt du außen die **Supercharged Coil**.

### MK8-02 Antimatter · Hauptweg
**Aufgabe:** `mekanism:pellet_antimatter`

Im Chemical Crystallizer werden 1000 Antimatter zu einem **Antimatter Pellet**. Plane viel Zeit ein: Das SPS arbeitet langsam und frisst Strom.

### MK8-03 Antiprotonic Nucleosynthesizer · Nebenquest
**Aufgabe:** `mekanism:antiprotonic_nucleosynthesizer`

Wandelt Stoffe mit Antimatter um: Kohle zu Diamant, Diamant zu Smaragd, Zinn zu Eisen, ein Nether Star zum Heart of the Sea und mehr, 20 Rezepte. Alle in JEI.

---

## MK9 · Meka-Ausrüstung und QIO (K15 Star-Wars-Welten, Part 3)

### MK9-01 Modification Station · Nebenquest
**Aufgabe:** `mekanism:modification_station`, `mekanism:module_base`

An der Modification Station setzt du **Module** in MekaSuit und Meka-Tool ein und nimmst sie heraus. Jedes Modul beginnt mit einer Module Base. Leer können die Geräte fast nichts.

### MK9-02 MekaSuit · Hauptweg
**Aufgabe:** `mekanism:mekasuit_helmet`, `mekanism:mekasuit_bodyarmor`, `mekanism:mekasuit_pants`, `mekanism:mekasuit_boots`

Eine Netherite-Rüstung, die mit Strom läuft. Je Teil: 4 HDPE Sheet, Ultimate Control Circuit, das Netherite-Teil, 2 Polonium Pellet, Basic Induction Cell.
Für die Raumfahrt gibt es eigene Module (Giselle Addon): **Space Breathing**, **Space Fire Proof**, **Acid Rain Proof** und **Gravity Normalizing**. 🔵 Ob der Space-Breathing-Unit-Sauerstoff im Pack aus Mekanism kommen muss, prüfen.
Laden kannst du die Rüstung am Chargepad oder in einem Energy Cube.
⚙️ Ohne MekaSuit kommst du nicht nach Mandalore (F37). 🔵 Wie die Sperre technisch aussieht, wird in Teil 3 gebaut.

### MK9-03 Meka-Tool · Nebenquest
**Aufgabe:** `mekanism:meka_tool`

Ein Werkzeug für alles: Spitzhacke, Axt, Schaufel, Schwert. Module geben ihm Silk Touch, Vein Mining, Erzvermehrung, Teleportation und mehr. Gebaut aus einem **Atomic Disassembler** und HDPE, Polonium und einer Induction Cell.

### MK9-04 QIO · Nebenquest
**Aufgabe:** `mekanism:qio_drive_array`, `mekanism:qio_drive_base`, `mekanism:qio_dashboard`

Das digitale Lager von Mekanism, ganz ohne Kabel. Laufwerke stecken im **Drive Array**. Dashboards, Importer und Exporter mit derselben Frequenz greifen darauf zu, egal wo sie stehen. Jedes Teil braucht Polonium.

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | Steht in | Stand |
|---|---|---|
| Sauerstoff für Ad Astra nur aus Mekanism (Wasser-Rezept des Oxygen Loader entfernt) | MK1-07 | 🟢 entschieden, Skript liegt vor |
| IE-Crusher übernimmt den Mekanism-Crusher | MK1-06, MK3-03 | 🟢 entschieden, 🔵 ob der Mekanism-Crusher bleibt. Bleibt er nicht, fehlen Crusher-Schritte in der Erzkette (Clumps → Dirty Dust) und für Bio Fuel; dann die Texte MK3-03, MK4-05, MK4-07 und EV-5 anpassen. |
| Digital Miner entfernt | (nicht erwähnt) | 🟢 entschieden, Skript fehlt |
| Refined Obsidian nicht aus der Smeltery | MK3-05 | 🟢 Skript liegt vor |
| Erzverteilung: Zinn nur Everbright; Osmium knapp, reichlich in Everdawn und auf dem Mond; Uran knapp, reichlich auf Merkur und Venus | MK1-01, MK3-01, MK5-01, MK5-03 | 🟢 |
| Ad-Astra-Pumpen, -Kabel und -Pipes entfernt, Ersatz Mekanism und IE | MK1-07 (Leitungen) | 🟢 |

## 🔵 Offen vor dem Einbau

1. **Multiblock-Bauregeln** (Dynamic Tank, Thermal Evaporation, Fission, Boiler, Turbine, Induction Matrix, Teleporter, Fusion, SPS) stammen aus Spielwissen und stehen nicht in den JAR-Daten. In der Testinstanz nachbauen und Größen bestätigen; das ist die wichtigste Lücke, weil ohne Buch nur das Questbuch sie erklärt.
2. Zündenergie des Fusionsreaktors (400 Mio. J) und Eingang des SPS (Polonium) prüfen.
3. Menge Liquid Oxygen für MK1-07: an den Bedarf der Rakete T1 und des Raumanzugs koppeln.
4. Kapitelzuordnung folgt dem Vorschlag „T1 Basic, T2 Advanced, T3 Elite, T4 Ultimate“; der User legt die Stufen je Rakete noch fest.
5. Formatierung für FTB Quests (Farbcodes, Seitenumbrüche, Bilder) erst beim Einbau.
