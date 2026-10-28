# Questtexte Ad Astra mit Giselle Addon, More Structures und Rocketed

> Stand 2026-10-17, überarbeitet 2026-10-26 (Raketen-Hürden F2, Treibstoffe F3, Rover und Sky Stone F11, O76; Einbau ins Questbuch bis K11), Minecraft 1.20.1. Entwurf für FTB Quests. Ad Astra hat das Buch **Astrodux** (`ad_astra:astrodux`, Patchouli, `../19_HILFEBUECHER.md`). Für den Hauptmod nennen die Texte deshalb nur Ziel, Fundstelle im Buch und die Abweichungen des Packs. Die Addons stehen nicht im Buch: Giselle Addon, More Structures und Rocketed werden knapp, aber vollständig erklärt. Gegliedert nach den Meilensteinen RF1 bis RF7 der Meilensteinkarte; die Kapitel sind dort Arbeitstitel.
> Quellen: `../modpfade/adastra/WISSEN.md`, `../modpfade/adastra/data.js` (nur die Addon-Abschnitte), Meilensteinkarte, `../01_PROGRESSION.md`, `../15_RAUMFAHRT.md`, `kubejs/server_scripts/raumfahrt/ad_astra_regeln.js`. Kapitel- und Eintragstitel aus `assets/ad_astra/patchouli_books/astrodux/en_us/` im JAR (Ad Astra 1.15.21). Item-IDs gegen die Sprachdateien geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren. Wo eine Quest an die Story gehängt wird (Horchposten auf dem Mars, Tempel auf dem Merkur, Barriere um Glacio), setzt der User einen Satz davor.
- **Anrede „du“**, Item-, Kapitel- und Eintragsnamen englisch wie im Spiel.
- **Buch:** Kapitel → Eintrag, so wie sie im Astrodux heißen. Die vier Kapitel: *The First Launch*, *The Moon*, *Surviving Mars*, *The Hot Planets*. Jedes Kapitel endet mit dem Eintrag zum nächsten Ziel; die Quests folgen dieser Reihenfolge.
- **Zuschnitt:** Die Inhalte eines Buchkapitels stehen beim Meilenstein der Rakete, für die man sie braucht. Kapitel *The Moon* gehört also zu RF2 (Rakete zum Mars), *Surviving Mars* zu RF3, *The Hot Planets* zu RF4.
- **Hauptweg** = nötig für spätere Ziele. **Nebenquest** = stellt den Mod in der Breite vor.
- **Pack-Änderungen** mit ⚙️. Sie stehen nicht im Buch, und mehrere Einträge des Buchs (*Generating Energy*, *Creating Plates*, *Fuel*, *Solar Panel*, *Cables*, *Fluid Pipes*, *Energizer*) beschreiben Dinge, die es im Pack nicht mehr gibt.
- 🔵 = noch nicht entschieden oder nicht belegt.
- Das Questbuch gibt es schon vor dem Mond (der Droide gibt es nach der ersten Quest, T4 in `../18_STORY.md`). RF1 erscheint mit K4.
- Die vier Hürden je Rakete (Rumpf, Treibstoff, Mekanism-Stufe, Teil aus einem anderen Pfad) stehen in den Quests der Tanks und Triebwerke, so wie sie in `kubejs/server_scripts/raumfahrt/raketen_t1_t4.js` umgesetzt sind (F2, 2026-10-20); Treibstoffe nach F3.
- **Ins Questbuch** (2026-10-26): Kapitel „Ad Astra“, Steuerdatei `tools/questbuch/adastra.cfg`, nur bis K11 (RF1 bis RF4, RFX-01/02, RFY-01). RF5 bis RF7 und RFX-03 fallen mit `bis = K11` weg.

---

## RF1 · Rakete T1 → Mond (K4 Der Mond)

### RF1-01 Astrodux · Hauptweg
**Aufgabe:** `ad_astra:astrodux`

Das Astrodux führt durch die ganze Raumfahrt bis Proxima Centauri. Lies es kapitelweise, aber achte auf die ⚙️-Hinweise in diesen Quests: Einiges im Buch gilt hier nicht.
Buch: The First Launch.
⚙️ Die ersten drei Einträge stimmen im Pack nicht. Coal Generator und Compressor gibt es nicht, und die Etrionic Blast Furnace macht keinen Stahl. Strom, Stahl und Platten kommen aus Immersive Engineering.

### RF1-02 Stahl und Platten aus IE · Hauptweg
**Aufgabe:** `immersiveengineering:ingot_steel`, `immersiveengineering:plate_steel`, `immersiveengineering:plate_iron`

Für Rakete, Anzug und Werkbank brauchst du viel Stahl, Stahlplatten und Eisenplatten. Ad Astra nimmt die Teile aus Immersive Engineering ohne Umweg an.
Buch: The First Launch → Creating Plates, Making Steel (beide nur zur Einordnung).
⚙️ Stahl kommt aus dem IE Blast Furnace, Platten aus der Metal Press oder mit dem Engineer's Hammer. Der Compressor und das Stahl-Rezept der Etrionic Blast Furnace sind entfernt.

### RF1-03 NASA Workbench und Launch Pad · Hauptweg
**Aufgabe:** `ad_astra:nasa_workbench`, `ad_astra:launch_pad`

An der NASA Workbench baust du jede Rakete. Gestartet wird vom Launch Pad.
Buch: The First Launch → Your First Rocket.

### RF1-04 Raketenteile · Hauptweg
**Aufgabe:** `ad_astra:rocket_nose_cone`, 4 × `ad_astra:rocket_fin`, 2 × `ad_astra:steel_tank`, `ad_astra:steel_engine`

Nose Cone, Flossen, Tanks und Triebwerk entstehen in der normalen Werkbank. Dazu kommen sechs Stahlblöcke.
Buch: The First Launch → Your First Rocket.
⚙️ Stahlblöcke aus IE gelten ebenso wie die von Ad Astra. In der Steel Engine sitzt oben in der Mitte ein Basic Control Circuit aus Mekanism statt einer Platte. Jedes höhere Triebwerk baut auf dem davor auf.

### RF1-05 Tier 1 Rocket · Hauptweg
**Aufgabe:** `ad_astra:tier_1_rocket`

Die erste Rakete fliegt zum Mond und in seinen Orbit.
Buch: The First Launch → Your First Rocket, Preparing to Launch.

### RF1-06 Biodiesel tanken · Hauptweg
**Aufgabe:** Flüssigkeit `immersiveengineering:biodiesel`, 6000 mB

Ein Start verbraucht 3 Eimer. Für Hin- und Rückflug brauchst du also 6: drei im Tank, drei im Gepäck.
Buch: The First Launch → Fuel (nur zur Einordnung).
⚙️ Die Rakete T1 fliegt nur mit Biodiesel aus der IE Refinery. Fuel, Oil und die Fuel Refinery gibt es im Pack nicht; Ölquellen von Ad Astra sind abgeschaltet.

### RF1-07 Sauerstoff aus Mekanism · Hauptweg
**Aufgabe:** `ad_astra:oxygen_loader`, Flüssigkeit `mekanism:oxygen`

Der Oxygen Loader füllt Raumanzug und Gas Tanks mit Sauerstoff.
Kette: Wasser → Electrolytic Separator → Oxygen (Gas) → Rotary Condensentrator → Liquid Oxygen → Oxygen Loader.
Buch: The First Launch → Oxygen.
⚙️ Der Oxygen Loader nimmt kein Wasser an, nur flüssigen Sauerstoff aus Mekanism (25 mB ergeben 25 mB). Wie du ihn herstellst, steht im Mekanism-Kapitel in der Quest „Flüssiger Sauerstoff“.

### RF1-08 Space Suit · Hauptweg
**Aufgabe:** `ad_astra:space_helmet`, `ad_astra:space_suit`, `ad_astra:space_pants`, `ad_astra:space_boots`

Ohne Anzug überlebst du auf dem Mond nicht: keine Luft, −173 °C. Fülle den Anzug vor dem Start im Oxygen Loader.
Buch: The First Launch → Oxygen.

### RF1-09 Gas Tank und Etrionic Capacitor · Nebenquest
**Aufgabe:** `ad_astra:gas_tank`, `ad_astra:etrionic_capacitor`

Ein Gas Tank ist Sauerstoff zum Nachfüllen, der Capacitor ein tragbarer Energiespeicher.
Buch: The First Launch → Portable Resources.
⚙️ Den Capacitor lädst du in der IE Charging Station oder am Mekanism Energy Cube. Den Energizer gibt es im Pack nicht.

### RF1-10 Radio · Nebenquest
**Aufgabe:** `ad_astra:radio`

Ein Radio für unterwegs; es gehört auch in den Rover.
Buch: The First Launch → Radio.

### RF1-11 Start zum Mond · Hauptweg
**Aufgabe:** Dimension `ad_astra:moon` betreten

Rakete auf das Launch Pad stellen, einsteigen, betanken, starten. Oben wählst du das Ziel; als Lander kommst du herunter.
Buch: The First Launch → Preparing to Launch, The Moon.

> **Vor dem Start:** Anzug voll Sauerstoff, 3 Eimer Biodiesel im Gepäck für den Rückflug. Wer ohne Treibstoff auf dem Mond steht, kommt nicht zurück.

### Nebenquest-Reihe Giselle Addon: Betanken und Bauen automatisieren

Das Giselle Addon steht nicht im Astrodux. Alle Quests dieser Reihe sind optional.

### RF1-12 Fuel Loader · Nebenquest
**Aufgabe:** `ad_astra_giselle_addon:fuel_loader`

Der Fuel Loader betankt Raketen und Rover, die höchstens 2 Blöcke entfernt stehen. Er fasst 8000 mB, also genug für einen Hin- und Rückflug. Füll ihn per Rohr oder Eimer mit dem Treibstoff der Rakete.
⚙️ Auch hier zählt nur der Treibstoff der jeweiligen Stufe.

### RF1-13 Rocket Sensor · Nebenquest
**Aufgabe:** `ad_astra_giselle_addon:rocket_sensor`

Der Sensor gibt den Zustand einer Rakete in seiner Nähe als Redstone-Signal aus; ein Comparator liest ihn ab. Damit lässt sich zum Beispiel der Fuel Loader schalten.

### RF1-14 Automation NASA Workbench · Nebenquest
**Aufgabe:** `ad_astra_giselle_addon:automation_nasa_workbench`

Eine NASA Workbench, die sich mit Trichtern und Rohren beschicken lässt. 🔵 Wie sie genau arbeitet, ist nicht ausgelesen; Text im Spiel prüfen.

### RF1-15 Oxygen Can · Nebenquest
**Aufgabe:** `ad_astra_giselle_addon:oxygen_can`

Eine Sauerstoff-Reserve mit 500 mB, die du als Curio tragen kannst. Sie füllt den Anzug unterwegs nach. Die Netherite Oxygen Can (1000 mB) kommt mit Ostrum (RF3-09).

---

## RF2 · Rakete T2 → Mars (K6 Der Mars)

### RF2-01 Desh · Hauptweg
**Aufgabe:** `ad_astra:desh_ingot`, `ad_astra:desh_plate`

Desh liegt nur auf dem Mond. Es ist das Metall der Rakete T2 und vieler Maschinen.
Buch: The First Launch → The Moon.
⚙️ Desh-Platten presst du in der IE Metal Press oder schlägst sie mit dem Engineer's Hammer. Auf dem Mond liegt außerdem Osmium in Menge (Erz von Mekanism in Moon Stone).

### RF2-02 Space Station · Nebenquest
**Aufgabe:** Dimension `ad_astra:earth_orbit` betreten

Im Orbit kannst du eine Raumstation errichten. Für Erde und Mond kostet sie 64 Iron Plate, 32 Steel Ingot, 32 Desh Ingot und 32 Desh Plate; wie man sie setzt, zeigt das Buch.
Buch: The Moon → Space Station.

### RF2-03 Oxygen Distributor · Nebenquest
**Aufgabe:** `ad_astra:oxygen_distributor`, `ad_astra:vent`

Der Distributor füllt einen abgedichteten Raum mit Luft, bis 6000 Blöcke. Ist der Raum undicht, bläst die Luft hinaus.
Buch: The Moon → Oxygen Distributor.
⚙️ Die Water Pump gibt es im Pack nicht; Wasser und Sauerstoff kommen über Mekanism. Strom bringst du mit dem IE Feedthrough Insulator oder einem Energiespeicher in Wand oder Boden hinein, ohne die Abdichtung zu brechen.

### RF2-04 Gravity Normalizer · Nebenquest
**Aufgabe:** `ad_astra:gravity_normalizer`

Stellt in seiner Umgebung die Schwerkraft der Overworld her.
Buch: The Moon → Gravity Normalizer.
⚙️ Die Etrionic Capacitors dafür lädst du in der IE Charging Station oder am Mekanism Energy Cube.

### RF2-05 TI-69 · Nebenquest
**Aufgabe:** `ad_astra:ti_69`

Ein Messgerät für unterwegs; was es anzeigt, steht im Buch.
Buch: The Moon → Ti-69.

### RF2-06 Rover · Nebenquest
**Aufgabe:** `ad_astra:tier_1_rover`

Ein Fahrzeug für weite Wege auf Mond und Mars, mit Radio und Stauraum.
Buch: The Moon → Rover.
⚙️ Der Rover fährt nur mit Biodiesel, wie die Rakete T1.

### RF2-07 Lunarians · Nebenquest
**Aufgabe:** Häkchen „Lunarian-Dorf gefunden“

Unter der Mondoberfläche leben Lunarians. Sie handeln gegen Smaragde mit Planetenmaterial und Ausrüstung; ein wandernder Händler taucht auf jedem Planeten auf.
Buch: The Moon → Lunarians.
⚙️ Der Händler verkauft Fuel. Damit fliegt im Pack keine Rakete; kauf es nicht für den Rückflug.

### RF2-08 Moon Tower Dungeon · Nebenquest
**Aufgabe:** `ad_astra:moon_globe`

> **Vorsicht:** Am Ende des Dungeons wartet ein Boss. Gute Rüstung mitnehmen; der Anzug muss den Kampf über Luft haben.

Das Addon More Structures setzt auf jeden Himmelskörper einen Dungeon mit Boss. Der Mond-Turm steht in den Lunar Wastelands. Der Boss lässt Cheese, Raw Desh, Raw Iron und Ice Shards fallen. Als Trophäe liegt dort der Moon Globe, der einzige Globus, den man im Überlebensmodus bekommt.
Buch: Surviving Mars → Trophies (der Globus); den Dungeon kennt das Buch nicht.
🔵 Welcher Mob der Boss ist, ist nicht ausgelesen.

### RF2-09 Desh Tank und Desh Engine · Hauptweg
**Aufgabe:** 2 × `ad_astra:desh_tank`, `ad_astra:desh_engine`

Ab jetzt baut jede Stufe auf der davor auf: In jedem Desh Tank steckt ein Steel Tank, in der Desh Engine eine Steel Engine.
Buch: The Moon → Mars.
⚙️ Jeder Desh Tank braucht zusätzlich 2 Ventium Ingot aus Blue Skies (`blue_skies:ventium_ingot`, Everbright) und einen Steel Rod. In der Desh Engine sitzt ein Advanced Control Circuit aus Mekanism.

### RF2-10 Tier 2 Rocket · Hauptweg
**Aufgabe:** `ad_astra:tier_2_rocket`, Flüssigkeit `immersivepetroleum:diesel` 6000 mB

Wie die erste Rakete, aber mit sechs Desh-Blöcken. Sie fliegt bis zum Mars.
Buch: The Moon → Mars.
⚙️ Die Rakete T2 fliegt nur mit entschwefeltem Diesel aus dem Hydrotreater, nicht mit schwefelhaltigem Diesel und nicht mit Biodiesel. Für Hin- und Rückflug brauchst du 6 Eimer.

### RF2-11 Landung auf dem Mars · Hauptweg
**Aufgabe:** Dimension `ad_astra:mars` betreten

Kalt (−65 °C), ohne Luft. Der Anzug reicht.
Buch: The Moon → Mars.

---

## RF3 · Rakete T3 → Merkur, Venus (K8 Hitze)

### RF3-01 Ostrum · Hauptweg
**Aufgabe:** `ad_astra:ostrum_ingot`, `ad_astra:ostrum_plate`

Ostrum liegt nur auf dem Mars. Es ist das Metall der Rakete T3.
Buch: The Moon → Mars.
⚙️ Platten über die IE Metal Press oder den Engineer's Hammer. Auf dem Mars liegt außerdem Fluorit (Erz von Mekanism in Mars Stone).

### RF3-02 Sliding Doors und Airlock · Nebenquest
**Aufgabe:** `ad_astra:iron_sliding_door`, `ad_astra:airlock`

Schiebetüren halten einen Raum dicht, auch wenn du hindurchgehst. Ideal für eine Basis mit Oxygen Distributor.
Buch: Surviving Mars → Sliding Doors.

### RF3-03 Oxygen Sensor · Nebenquest
**Aufgabe:** `ad_astra:oxygen_sensor`

Gibt ein Redstone-Signal, solange Luft im Raum ist. Mit dem Wrench stellst du ihn auf Temperatur oder Schwerkraft um.
Buch: Surviving Mars → Detection.

### RF3-04 Cryo Freezer · Hauptweg
**Aufgabe:** `ad_astra:cryo_freezer`

Der Freezer macht aus Eis Cryo Fuel; am ergiebigsten sind Ice Shards (25 mB je Stück).
Buch: Surviving Mars → Better Fuel.
⚙️ Cryo Fuel allein fliegt im Pack keine Rakete. Du brauchst es als Zutat für den Treibstoff der Rakete T4 (Quest „Tier 4 Rocket“). Fang früh an, Ice Shards zu sammeln.

### RF3-05 Netherite Space Suit · Hauptweg
**Aufgabe:** `ad_astra:netherite_space_helmet`, `ad_astra:netherite_space_suit`, `ad_astra:netherite_space_pants`, `ad_astra:netherite_space_boots`

Der stärkere Anzug aus Ostrum und einer vollen Netherite-Rüstung. Er schützt besser und gibt dauerhafte Feuerresistenz.
Buch: Surviving Mars → Netherite Space Suit.
Hinweis: Das Buch nennt ihn Pflicht für Venus und Merkur. Im Spiel stimmt das nicht; dort reicht jeder Anzug.
⚙️ Im Pack ist er trotzdem Pflicht vor dem Flug zum Merkur: Die Story-Quest „Die heißeste Welt“ verlangt ihn.

### RF3-06 Mars Tower Dungeon · Nebenquest
**Aufgabe:** Häkchen „Boss im Mars-Turm besiegt“ 🔵

> **Vorsicht:** Boss am Ende des Turms.

Der zweite Dungeon von More Structures. Der Boss lässt Ice Shards, Diamanten, Raw Ostrum und Raw Iron fallen.
🔵 Boss-Mob und eine prüfbare Beute für die Aufgabe nicht ausgelesen.

### RF3-07 Ostrum Tank und Ostrum Engine · Hauptweg
**Aufgabe:** 2 × `ad_astra:ostrum_tank`, `ad_astra:ostrum_engine`

In jedem Ostrum-Teil steckt das Desh-Teil der Stufe davor.
Buch: Surviving Mars → Venus and Mercury.
⚙️ Jeder Ostrum Tank braucht zusätzlich 2 Imbued Slate aus Blood Magic (`bloodmagic:infusedslate`, Blood Altar Stufe 3) und einen Steel Rod. In der Ostrum Engine sitzt ein Elite Control Circuit aus Mekanism.

### RF3-08 Tier 3 Rocket · Hauptweg
**Aufgabe:** `ad_astra:tier_3_rocket`, Flüssigkeit `immersivepetroleum:kerosene` 6000 mB

Sechs Ostrum-Blöcke. Die Rakete erreicht Merkur und Venus.
Buch: Surviving Mars → Venus and Mercury.
⚙️ Die Rakete T3 fliegt nur mit Kerosene aus Immersive Petroleum. Für Hin- und Rückflug brauchst du 6 Eimer.

### RF3-09 Netherite Oxygen Can · Nebenquest
**Aufgabe:** `ad_astra_giselle_addon:netherite_oxygen_can`

Die größere Reserve aus dem Giselle Addon: 1000 mB. Du baust sie aus der Oxygen Can, einem Netherite Ingot und Ostrum-Platten.

---

## RF4 · Rakete T4 → Glacio (K11 Glacio)

> **Vorsicht, heiße Planeten:** Venus hat 464 °C und sauren Regen, Merkur 167 °C. Ohne Anzug brennst du sofort. Jeder Anzug schützt, auch der einfache Space Suit.

### RF4-01 Merkur · Hauptweg
**Aufgabe:** Dimension `ad_astra:mercury` betreten

Der Merkur hat im Hauptmod nur Eisen.
Buch: Surviving Mars → Venus and Mercury.
⚙️ Auf dem Merkur liegen Uran und Blei als Mekanism-Erze. Uran gibt es hier und auf der Venus in Menge, in der Overworld kaum.

### RF4-02 Venus und Calorite · Hauptweg
**Aufgabe:** `ad_astra:calorite_ingot`, `ad_astra:calorite_plate`

Calorite gibt es nur auf der Venus. Es ist das Metall der Rakete T4.
Buch: Surviving Mars → Venus and Mercury.
⚙️ Platten über die IE Metal Press oder den Engineer's Hammer. Auf der Venus liegen außerdem Uran und Blei.

### RF4-03 Jet Suit · Nebenquest
**Aufgabe:** `ad_astra:jet_suit_helmet`, `ad_astra:jet_suit`, `ad_astra:jet_suit_pants`, `ad_astra:jet_suit_boots`

Der beste Anzug: Er fliegt mit Energie. Du baust ihn aus dem Netherite Space Suit und Calorite.
Buch: The Hot Planets → Jet Suit.
⚙️ Laden in der IE Charging Station oder am Mekanism Energy Cube; den Energizer gibt es im Pack nicht.

### RF4-04 Venus- und Merkur-Dungeon · Nebenquest
**Aufgabe:** Häkchen „Bosse von Venus und Merkur besiegt“ 🔵

> **Vorsicht:** Zwei Bosse, dazu Hitze und saurer Regen auf der Venus.

More Structures setzt auf die Venus den Venus Tree Dungeon und auf den Merkur den Mercury Arena Dungeon. Der Venus-Boss lässt Raw Calorite, Diamanten, Raw Gold, Kohle und Blaze Rods fallen, der Merkur-Boss Raw Iron, Magma Cream und Blaze Rods.
🔵 Boss-Mobs nicht ausgelesen.

### RF4-05 Calorite Tank und Calorite Engine · Hauptweg
**Aufgabe:** 2 × `ad_astra:calorite_tank`, `ad_astra:calorite_engine`

In jedem Calorite-Teil steckt das Ostrum-Teil davor, also die Teile aller vier Stufen.
Buch: The Hot Planets → Proxima Centauri.
⚙️ Jeder Calorite Tank braucht zusätzlich 2 Elementium Ingot aus Botania (`botania:elementium_ingot`) und einen Steel Rod. In der Calorite Engine sitzen ein Ultimate Control Circuit aus Mekanism und der **Galaktische Strahlenschutz** (`kubejs:galaktischer_strahlenschutz`). Den Strahlenschutz kann man nicht selbst herstellen; du bekommst ihn im Lauf der Hauptquests.

### RF4-06 Tier 4 Rocket · Hauptweg
**Aufgabe:** `ad_astra:tier_4_rocket`, Flüssigkeit `kubejs:kryo_treibstoff` 2000 mB

Sechs Calorite-Blöcke. Die letzte Rakete des Hauptmods verlässt das Sonnensystem.
Buch: The Hot Planets → Proxima Centauri.
⚙️ Die Rakete T4 fliegt nur mit Kryo-Raketentreibstoff. Den mischt die IE Refinery aus Gasoline (Immersive Petroleum) und Cryo Fuel aus dem Cryo Freezer, 10 mB Gasoline und 20 mB Cryo Fuel zu 10 mB, mit viel Strom. Wie bei jeder Rakete verbraucht ein Start 3 Eimer, für Hin- und Rückflug brauchst du also 6: allein dafür 12 000 mB Cryo Fuel, das sind 480 Ice Shards. Plane eine richtige Anlage aus Cryo Freezer und Refinery.

### RF4-07 Glacio · Hauptweg
**Aufgabe:** Dimension `ad_astra:glacio` betreten

Glacio im System Proxima Centauri ist kalt (−20 °C), hat aber Luft. Hier brauchst du keinen Anzug. Ein eigenes Metall gibt es nicht. Das Astrodux endet hier.
Buch: The Hot Planets → Proxima Centauri.
⚙️ Auf Glacio liegen Osmium und Uran als Mekanism-Erze.

### RF4-08 Glacio Tower Dungeon · Nebenquest
**Aufgabe:** Häkchen „Boss im Glacio-Turm besiegt“ 🔵

> **Vorsicht:** Boss am Ende des Turms.

Der letzte Dungeon von More Structures. Der Boss lässt Raw Iron, Ice Shards, Eis, Obsidian, Pfeile und Knochen fallen.

---

## RF5 bis RF7 · Ad Astra: Rocketed (K13 bis K16)

Rocketed hat kein Buch und bringt nur drei Raketen mit, keine Planeten. Gebaut werden sie an der NASA Workbench wie die Stufen davor. Die Ziele legt das Pack fest.

### RF5-01 Tier 5 Rocket → Endor · Hauptweg (K13 Die Prüfung)
**Aufgabe:** `ad_astra_rocketed:tier_5_rocket`, dann Dimension `swplanets:endor` betreten

Die erste Rakete aus Rocketed führt nur nach Endor.
⚙️ 🔵 Das Rezept des Mods (Ice Shard statt Nose Cone, sonst wie T4) wird ersetzt: Rumpf aus einem Material aus Alfheim, neuer Treibstoff, eine Mekanism-Stufe, ein Teil aus einem anderen Pfad. Alles noch offen. Dass Endor erst mit T5 erreichbar ist, muss per Datapack in den Planeten-Dateien von Star Wars Planets eingestellt werden.

### RF6-01 Tier 6 Rocket → Tatooine, Hoth, Mustafar · Hauptweg (K15 Star-Wars-Welten)
**Aufgabe:** `ad_astra_rocketed:tier_6_rocket`, dann eine der Dimensionen `swplanets:tatooine`, `swplanets:hot` (Hoth), `swplanets:mustafar` betreten

Die zweite Rakete aus Rocketed erreicht alle Star-Wars-Welten außer Mandalore.
⚙️ 🔵 Rezept (Vorschlag: mit Kyber von Endor), Treibstoff und Hürden offen; Planetenstufen per Datapack.

### RF7-01 Tier 7 Rocket → Mandalore · Hauptweg (K16 Mandalore)
**Aufgabe:** `ad_astra_rocketed:tier_7_rocket`, dann Dimension `swplanets:mandalore` betreten

Die dritte Rakete aus Rocketed hat ein einziges Ziel: Mandalore (−160 °C). Dort liegt Beskar.
⚙️ 🔵 Rezept (im Mod: Echo Shard und Permafrost Tiles), Treibstoff und Hürden offen; Planetenstufe per Datapack.

---

## Nebenquest-Reihe RFX · Schutz ohne Raumanzug (Giselle Addon)

Das Giselle Addon macht die vier Schutzwirkungen der Raumanzüge auf anderer Ausrüstung verfügbar: als Verzauberung, als Tinkers-Modifier und als MekaSuit-Modul. Jede Wirkung braucht das Gestein des Planeten, auf dem du sie brauchst. Kein Buch erklärt das; die Quests stehen deshalb ausführlicher.

| Wirkung | Was sie tut | Planetengestein | ab dem |
|---|---|---|---|
| Space Breathing | Atmen ohne Luft | Moon Stone | Mond |
| Gravity Normalizing | Schwerkraft wie in der Overworld | Mars Stone | Mars |
| Space Fire Proof | kein Feuer am Körper auf heißen Planeten | Mercury Stone | Merkur |
| Acid Rain Proof | kein Schaden durch sauren Regen | Venus Stone | Venus |

### RFX-01 Verzauberungsbücher · Nebenquest
**Aufgabe:** Häkchen „Verzauberungsbuch Space Breathing hergestellt“ (Verzauberung `ad_astra_giselle_addon:space_breathing`; die übrigen drei als eigene Quests, sobald der Planet erreicht ist)
**Steuerdatei:** Ein Verzauberungsbuch mit bestimmter Verzauberung kann der Generator nicht prüfen; deshalb Häkchen.

Die Bücher entstehen in der Werkbank: 7 Gestein des Planeten, ein Book und ein Anzug- oder Metallteil (Space Suit, Space Boots, Ostrum Plate oder Calorite Plate). Am Amboss kommt die Verzauberung auf beliebige Rüstung.
🔵 Wie viel Sauerstoff die Verzauberung verbraucht und woher sie ihn nimmt, regelt die Config des Addons; im Spiel prüfen.

### RFX-02 Tinkers-Modifier · Nebenquest
**Aufgabe:** Häkchen „Tinkers-Rüstung mit einem Raumfahrt-Modifier“

Für Tinkers-Rüstung gibt es dieselben vier Wirkungen als Modifier. Jeder kostet einen Upgrade-Slot. Space Breathing kommt auf den Helm, Gravity Normalizing auf die Stiefel, Fire Proof und Acid Rain Proof auf die Brustplatte. Zutaten: das Anzug- oder Metallteil und 4 Gestein des Planeten.

## Nebenquest-Reihe RFX · MekaSuit-Module (K12 Ausbildung, Part 2)

Die MekaSuit-Module kommen erst in Teil 2 (F11).

### RFX-03 MekaSuit-Module · Nebenquest
**Aufgabe:** `ad_astra_giselle_addon:module_space_breathing_unit`, `ad_astra_giselle_addon:module_gravity_normalizing_unit`, `ad_astra_giselle_addon:module_space_fire_proof_unit`, `ad_astra_giselle_addon:module_acid_rain_proof_unit`

Wer den MekaSuit trägt, braucht keinen Raumanzug mehr. Die Module entstehen aus einer Module Base mit Infused Alloy und HDPE Sheets (Atmen, Schwerkraft) oder mit Reinforced Alloy und Polonium Pellets (Hitze, saurer Regen). Sie verbrauchen Strom aus dem Anzug.
🔵 Der MekaSuit steht in `mekanism.md` erst bei MK9 (K15); F11 nennt Teil 2. Freischaltung abgleichen.

## Nebenquest RFY · Sky Stone für AE2 (Giselle Addon)

### RFY-01 Sky Stone · Nebenquest
**Aufgabe:** `ad_astra:sky_stone`

Aus 5 Moon Stone und 4 Mars Stone entsteht Sky Stone. Im Inscriber oder im Crusher wird daraus Sky Dust für AE2; Meteoriten musst du dafür nicht suchen.
⚙️ Der Weg bleibt im Pack.

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | Steht in | Stand |
|---|---|---|
| Coal Generator, Solar Panel, Compressor, Fuel Refinery, Kabel, Fluid Pipes, Ducts, Water Pump, Energizer entfernt; alle Compressor-Rezepte entfernt | RF1-01, RF1-02, RF1-06, RF2-03, RF1-09, RF4-03 | 🟢 Skript `ad_astra_regeln.js`, JEI ausgeblendet |
| Stahl-Rezept der Etrionic Blast Furnace entfernt; Stahl und Platten aus IE | RF1-01, RF1-02 | 🟢 Skript; Block selbst 🔵 |
| Platten von Desh, Ostrum, Calorite nur über IE Metal Press oder Hammer | RF2-01, RF3-01, RF4-02 | 🟢 (Rezepte bringt Ad Astra mit) |
| Treibstoff je Stufe: T1 Biodiesel, T2 entschwefelter Diesel, T3 Kerosene | RF1-06, RF2-10, RF3-08 | 🟢 Tag-Dateien, Test 16 |
| T4: Kryo-Raketentreibstoff (`kubejs:kryo_treibstoff`) aus Gasoline + Cryo Fuel in der IE Refinery (10 + 20 → 10, B5), 3 Eimer je Start wie alle Stufen; Cryo Freezer bleibt nur als Zulieferer | RF3-04, RF4-06 | 🟢 F3, Skript `treibstoffe.js` 🔵 ungetestet |
| Rover nur mit Biodiesel; Fuel der Lunarians bleibt nutzlos | RF2-06, RF2-07 | 🟢 F11, Tag-Datei |
| Oxygen Loader nur mit flüssigem Mekanism-Sauerstoff | RF1-07 | 🟢 Skript, Test bestanden |
| Ölquellen von Ad Astra abgeschaltet | RF1-06 | 🟢 Datei, 🔵 Test |
| Laden über IE Charging Station und Mekanism Energy Cube | RF1-09, RF2-04, RF4-03 | 🟢 Test 19 |
| Strom in abgedichtete Räume über Feedthrough Insulator oder Energiespeicher | RF2-03 | 🟢 Test 20 |
| Mekanism-Erze auf den Planeten: Mond Osmium, Mars Fluorit, Merkur und Venus Uran und Blei, Glacio Osmium und Uran | RF2-01, RF3-01, RF4-01, RF4-02, RF4-07 | 🟢 entschieden, 🔵 Worldgen-Dateien |
| Vier Hürden je Rakete T1–T4: Control Circuit Basic/Advanced/Elite/Ultimate im Triebwerk; je Tank 2 Ventium (T2), Imbued Slate (T3), Elementium (T4); T4-Triebwerk mit Galaktischem Strahlenschutz | RF1-04, RF2-09, RF3-07, RF4-05 | 🟢 F2, Skript `raketen_t1_t4.js` 🔵 ungetestet |
| Hürden T5–T7 | RF5-01 bis RF7-01 | 🔵 offen |
| Rocketed: T5 Endor, T6 Tatooine/Hoth/Mustafar, T7 Mandalore; Planetenstufen per Datapack | RF5-01 bis RF7-01 | 🟢 entschieden, 🔵 Datapack und Rezepte |
| Netherite Space Suit im Spiel nicht nötig für Venus und Merkur (Buch irrt), im Pack aber Pflicht vor dem Merkur | RF3-05, RF4 | 🟢 Test 21; O76 (Hauptweg) |

## 🔵 Offen vor dem Einbau

1. Boss-Mobs und prüfbare Beute der More-Structures-Dungeons (RF2-08, RF3-06, RF4-04, RF4-08); bis dahin Häkchen.
2. Funktionsweise der Automation NASA Workbench (RF1-14) und Sauerstoffverbrauch der Giselle-Verzauberungen (RFX-01) im Spiel prüfen.
3. Hoth heißt intern `swplanets:hot`; beim Einbau der Dimensions-Aufgaben beachten.
4. Rezepte, Treibstoffe und Zusatzteile der Raketen T5 bis T7 (Teil 2/3).
5. 🟢 MekaSuit-Module (RFX-03): Teil 3, mit dem MekaSuit bei MK9 (K15); Pflicht für Mandalore (F37, 2026-10-28).
6. 🟢 RF2-02: feste Dimension Erdorbit (`ad_astra:earth_orbit`), F36, User 2026-10-28.
7. RF4-06: Wie viel Kryo-Treibstoff die Quest verlangt (jetzt 2000 mB für Hin- und Rückflug; Mengen des Rezepts sind ein Entwurf). Braucht man nach Glacio überhaupt einen Rückflug-Vorrat?
