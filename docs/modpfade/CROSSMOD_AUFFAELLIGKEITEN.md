# Auffälligkeiten für die Crossmod-Planung

> Stand 2026-10-14, Minecraft 1.20.1. Gesammelt beim Erstellen der Modpfad-Seiten für Tinkers' Construct, Immersive Engineering, Botania, Mekanism, Ad Astra, Star Wars Planets und Star Wars: Galaxy in a Cube. Wird mit jeder weiteren Seite fortgeschrieben.

## Zweck

Merkliste. Hier steht, was die Mods **von sich aus** tun und was davon den geplanten Progressionsweg berührt: Abkürzungen, Überschneidungen, fehlende Verbindungen, harte Voraussetzungen. Es sind Befunde, keine Entscheidungen. Entschieden wird in `01_PROGRESSION.md` und `07_CROSSMOD_INTEGRATION.md`.

Jeder Befund ist aus den JARs oder der Config der Testinstanz belegt (🟢). Was nur vermutet oder noch nicht nachgelesen ist, steht getrennt unter „Zu prüfen“ (🔵). Status aller Punkte: offen, solange nichts anderes dabeisteht.

## Übergreifend

### Ü1 Stahl hat fünf Quellen

| Quelle | Rezept | Voraussetzung |
|---|---|---|
| IE Crude Blast Furnace | Eisen + Coal Coke | Coke Oven, Blast Bricks (Nether Brick, Magma Block) |
| IE Arc Furnace | Eisen + Koksstaub | Hochspannung, Elektroden |
| Mekanism Metallurgic Infuser | Eisen + 2× 10 Carbon (zwei Kohle), dann schmelzen | 4 Eisen, 2 Furnace, 2 Redstone, 1 Osmium |
| Tinkers | Steel Shards (Skyslimes, Geoden), Nebenprodukt von Eisenerz in der Foundry | Slime-Inseln bzw. Foundry |
| Ad Astra Alloying | 1 Eisen + 1 Kohle oder Holzkohle | Etrionic Blast Furnace (A4) |

🟢 Der Mekanism-Weg braucht weder Koksofen noch Hochofen noch Nether und ist mit einem Barren Osmium erreichbar. Alle Mods nehmen Stahl über `forge:ingots/steel` voneinander an. Wer die IE-Stahlkette als Tor will, muss den Mekanism-Weg anfassen.

### Ü2 Erzvervielfachung im Vergleich

| Verfahren | Aus 1 Erzblock | Aus Raw Ore |
|---|---|---|
| Ofen | 1 Barren | 1 |
| Tinkers Melter / Smeltery | 1 Barren + 3 Nuggets (1⅓) | – |
| IE Hammer am Crafting Table | 1 Staub | 1 Staub |
| IE Crusher | 2 Staub | 1 Staub + 33 % auf einen zweiten |
| IE Arc Furnace | 2 Barren | 1 Barren + 50 % auf einen zweiten |
| Mekanism Enrichment Chamber | 2 Staub | 4 aus 3 (1⅓) |
| Mekanism Purification Chamber | 3 Clumps | 2 je Stück |
| Mekanism Chemical Injection Chamber | 4 Shards | 8 aus 3 (2⅔) |
| Mekanism Dissolution, Washer, Crystallizer | 5 Crystals | 10 aus 3 (3⅓) |
| Blood Magic Alchemy Table (Cutting Fluid) | 2 Sand | – |
| Blood Magic ARC (Cutting Fluid) | 3 Sand | im Schnitt 1,5 |
| Blood Magic ARC (Explosive, Resonator, Cutting Fluid) | laut Buch 4,5 Barren | laut Buch 2,5 Barren |

🟢 Mekanism schlägt alle anderen ab der dritten Stufe deutlich. Erzblöcke bringen überall mehr als Raw Ore; der Mekanism Combiner macht aus 8 Raw Ore + Cobblestone wieder einen Erzblock.

🟢 Blood Magic verarbeitet nur Eisen, Gold, Kupfer, Ancient Debris (Netherite Scrap) und Demonite. Ancient Debris ergibt in der ARC 2 Netherite Scrap Sand statt 1 Scrap im Ofen; mit Explosive, Resonator und Corrupted Dust noch mehr. Das ist die einzige Netherite-Vervielfachung im Pack, die bisher aufgefallen ist.

🟢 Mekanism hat Verarbeitungsketten nur für Eisen, Gold, Kupfer, Zinn, Osmium, Blei, Uran. Für Silber, Nickel und Aluminium (IE) gibt es keine; die bleiben bei IE (Crusher, Arc Furnace) und Tinkers.

### Ü3 Drei Lagersysteme

🟢 AE2 (laut Projektentscheidung Endgame), Mekanism QIO (braucht Polonium, liegt also hinter dem Fission Reactor) und Botania Corporea (braucht Pixie Dust, Dragonstone, Ender Air, also hinter dem Elfenportal). Dazu Storage Drawers, Mekanism Bins, IE Silo. Keines der drei großen Systeme ist früh; welches wann die Rolle übernimmt, ist nicht festgelegt.

### Ü4 Fünf Autocrafter

🟢 IE Assembler und Automated Engineer's Workbench, Mekanism Formulaic Assemblicator (Stufe Basic, früh), Botania Crafty Crate, Blood Magic Rhythm of the Beating Anvil (Ritual, Altar-Stufe 4), später AE2. Blood Magic hat außerdem ein eigenes Item-Routing (Routing Nodes, ab Altar-Stufe 3). Der Mekanism-Assemblicator ist am frühesten und am billigsten (Stahl, Basic Control Circuits).

### Ü5 Strom

🟢 IE liefert Forge Energy; Mekanism rechnet in Joule, und sein Chargepad lädt laut Beschreibung aufladbare Items aus jedem Mod. Botania gibt über das Mana Fluxfield Mana als Forge Energy ab; den Rückweg gibt es nicht.

🟢 Früheste Stromquellen je Mod: IE Windmill (kein Stahl) und Water Wheel (braucht 1 Stahlbarren); Mekanism Heat Generator (Eisen, Kupfer, 1 Osmium, kein Stahl). Mekanism Generators hat mit Bio-, Gas-Burning-, Solar- und Wind-Generator vier weitere Quellen vor jeder Kernkraft. Das berührt die Projektregel, dass Energie für die Raumfahrt nur aus IE, Petroleum und Mekanism kommt: Innerhalb von Mekanism ist nichts festgelegt.

### Ü6 Erneuerbare und umgewandelte Rohstoffe

🟢 Stellen, an denen ein Mod Rohstoffe erzeugt oder ineinander umwandelt und damit Knappheit aushebelt:

- Botania Conjuration Catalyst vermehrt Redstone, Glowstone, Quarz, Kohle, Netherrack, Soul Sand, Kies.
- Botania Orechid macht Stein zu Erz (nur Vanilla-Erze), Orechid Ignem Netherrack zu Quarz, Nether Gold und Ancient Debris.
- Botania Alchemy Catalyst tauscht Holzarten, Setzlinge und weitere Stoffe.
- Mekanism Nucleosynthesizer macht mit Antimatter Kohle zu Diamant, Diamant zu Smaragd, Zinn zu Eisen, ein Ei zum Dragon Egg, einen Nether Star zum Heart of the Sea (20 Rezepte).
- Mekanism Infuser macht mit Biomass Clay zu Slimeballs und Sand zu Dirt.
- Tinkers Entity Melting: Dorfbewohner geben flüssigen Smaragd, Blazes Blazing Blood.
- IE Excavator fördert Erze aus Mineraladern, unabhängig von der Erzverteilung in der Welt (`03_ERZGENERATION.md` regelt nur die Welt).
- Mekanism Digital Miner baut gefiltert im Umkreis von 32 Blöcken ab.
- Blood Magic Mark of the Falling Tower ruft gegen eine Opfergabe Erz-Meteore: mit LV Wire Coil IE-Erze (Kupfer, Blei, Nickel, Aluminium, Silber, Uran), mit Infused Alloy Mekanism-Erze samt Uranblock-Kern, mit Certus Quartz Crystal AE2 Budding Quartz, mit Eisenblock, Diamant, Glowstone, Stein und Knochen Vanilla-Erze. Kosten 250 000 bis 1 000 000 LP, Start 250 000 LP.
- Blood Magic Ritual of Magnetism holt Erze aus dem Boden (Radius bis 31 mit Diamantblock), Yawning of the Void und Ritual of the Crusher bauen Flächen ab, Serenade of the Nether und Lava Sigil erzeugen Lava gegen LP, der Alchemy Table macht 4 Sulfur aus Lava Bucket und Cobblestone.

### Ü7 Nether als Voraussetzung

🟢 IE Blast Brick braucht Nether Brick und Magma Block, also den Nether vor dem ersten IE-Stahl. Botania braucht für die Rune of Fire Nether Brick und Nether Wart. Tinkers braucht den Nether erst für Cobalt und die Foundry. Blood Magic braucht ihn für die Rituale (Altar-Stufe 3): Inscription Tool: Fire aus Magma Cream, Inscription Tool: Air aus Ghast Tear; Nether Wart steckt in Catalysts und Anointments. Mekanism braucht ihn gar nicht.

### Ü8 Schwefel

🟢 Quellen: IE Crusher (Nebenprodukt bei Lapis-, Kohle-, Quarzerz), IE aus Blaze Rods, Immersive Petroleum (5 Schwefelstaub je Eimer entschwefeltem Diesel), Mekanism (Kohlevergasung in der Reaktionskammer, Gunpowder in der Injection Chamber), Blood Magic (Alchemy Table: Lava Bucket + Cobblestone ergeben 4; ARC: Netherrack). Verbraucher: Mekanism Schwefelsäure (fünfte Erzstufe, Uranverarbeitung), IE Dünger und Schwarzpulver, Blood Magic Will Catalysts, Cutting Fluid und Schwarzpulver. Alle über `forge:dusts/sulfur` austauschbar.

## Tinkers' Construct

- **T1** 🟢 Tinkers schaltet Materialien frei, sobald ein Barren-Tag gefüllt ist. Ohne unser Zutun aktiv: Aluminum, Lead, Silver, Constantan, Electrum, Steel (IE), Osmium, Bronze (Mekanism), Necronium (Uran), Treated Wood (IE-Creosote). Invar, Pewter und Nicrosil hängen an der Tinkers-Config.
- **T2** 🟢 Der Tinker's Anvil (Tor zu den großen Werkzeugen) nimmt neben Tinkers-Legierungen auch Blöcke aus Bronze, Electrum, Constantan, Refined Obsidian und Refined Glowstone. Bronze aus dem Mekanism-Infuser ist damit ein früher Weg zum Anvil.
- **T3** 🟢 Die Smeltery legiert Electrum, Constantan und Bronze selbst und umgeht damit den IE Alloy Kiln. Sie stellt auch Refined Obsidian her (Obsidian, Diamant, Osmium bei 1475 °C, braucht Blazing Blood) und umgeht so den Mekanism Osmium Compressor.
- **T4** 🟢 TCIntegrations: Werkzeugmaterialien aus Botania (Livingwood, Livingrock, Manasteel, Mana Infused String) und Ad Astra (Desh, Ostrum, Calorite). Modifier aus Terrasteel, Elementium und Alfsteel (Terra, Elemental, Terrestrial, Great Fairy, Alf, Alfheim), aus Alex's-Mobs-Drops (sieben Stück), aus Refined Glowstone (Glow Up) und aus dem IE Engineer's Multimeter (MultiVision).
- **T5** 🟢 Knightmetal und die Minotaur Axe verweisen laut Buch auf den Twilight Forest, der im Pack fehlt. Knightmetal gibt es nur über Enderslimes im End.
- **T6** 🟢 Das Tinkers Levelling Addon gibt Werkzeugen durch Benutzung zusätzliche Modifier-Slots. Die Slot-Grenze als Balancing-Hebel fällt damit weg.
- **T7** 🟢 Blood-Smeltery (Tinkers ↔ Blood Magic) ist in 1.2.1a teilweise defekt, siehe `00_MODBASIS.md`.
- **T8** 🟢 Nicht verfügbar, weil der Barren fehlt: Brass, Plated Slimewood (Zink), Platinum, Tungsten, Ironwood, Steeleaf, Fiery.

## Immersive Engineering

- **I1** 🟢 More Immersive Wires 1.1.4 enthält nur AE2-Drähte (ME Glass und Dense Cable). Einen Mekanism-Draht gibt es nicht. In `00_MODBASIS.md` korrigiert.
- **I2** 🟢 Das Water Wheel braucht einen Stahlbarren, die Windmill nicht. Der LV-Akku braucht Blei, der MV-Akku Nickel und Stahl, der HV-Akku Aluminium und HOP-Graphit.
- **I3** 🟢 Fast alle Schwermaschinen brauchen Stahl in Mengen (Gerüst, Blech, Engineering Blocks). Stahl aus Mekanism zählt dafür (Ü1).
- **I4** 🟢 Der Tag `immersiveengineering:drill_fuel` enthält Biodiesel (IE) sowie Diesel, Sulfurized Diesel und Kerosene (Petroleum). Immersive Aircraft tankt genau diesen Tag. Gasoline gehört nicht dazu. Das passt zur Treibstoffstaffel der Raumfahrt (T1 Biodiesel, T2 entschwefelter Diesel, T3 Kerosin) und ist dort noch nicht verknüpft.
- **I5** 🟢 Petcoke aus dem Coker ist Brennstoff im Hochofen und ersetzt Coal Coke.
- **I6** 🟢 Duroplast ersetzt Terracotta in den Isolatoren der Connectors; es entsteht aus Ethanol und Creosote oder, mit Petroleum, aus Naphtha ohne Landwirtschaft.
- **I7** 🟢 Engineers Delight gibt Sawmill, Cloche, Crusher, Metal Press, Mixer, Squeezer und Bottling Machine Rezepte für Farmer's Delight.
- **I8** 🟢 Creosote aus dem Koksofen ist Zutat für das Tinkers-Material Treated Wood.
- **I9** 🟢 Der Thermoelectric Generator nimmt einen Uranblock als Wärmequelle; sonst hat Uran in IE laut Handbuch kaum eine Verwendung.

## Botania

- **B1** 🟢 Die Orechid erzeugt nur Vanilla-Erze. Erze von IE, Mekanism, Blue Skies oder den Planeten stehen nicht in ihrer Liste.
- **B2** 🟢 MythicBotany: Alfheim wird erst nach dem Guardian of Gaia II begehbar (Fimbultyr-Tafel, Blood of Kvasir). Vorher gibt es Elementium, Dragonstone und Pixie Dust nur über den Portalhandel. In Alfheim liegen sie als Erz, dazu viel Gold.
- **B3** 🟢 Der Mana-Infuser (Voraussetzung für Alfsteel) braucht die Rune of Asgard und damit einen Netherite-Barren.
- **B4** 🟢 Das Ritual of Gaia braucht einen aktiven Beacon, also einen Nether Star.
- **B5** 🟢 Der Mana Spreader braucht einen Kupferbarren (Vanilla-Item).
- **B6** 🟢 Applied Botanics lagert Mana im ME-Netz (Zellen, P2P, Fluix Mana Pool).
- **B7** 🟢 Das Mana Fluxfield ist die einzige Verbindung von Botania zur Technik (Ü5).
- **B8** 🟢 Der Loonium beschwört Dungeon-Beute, bewacht von starken Monstern. Das berührt den Wert der Dungeons (Roguelike Dungeons, Ad Astra: More Structures).

## Mekanism

- **M1** 🟢 Osmium steckt im Metallurgic Infuser, im Steel Casing, in jedem Chemical Tank, in den Upgrades und im Basic Control Circuit. Wo Osmium vorkommt, entscheidet, wann Mekanism beginnt (laut Projektplan künftig vor allem in Blue Skies).
- **M2** 🟢 Die erste Maschine (Metallurgic Infuser) braucht nur Eisen, Redstone, zwei Öfen und einen Barren Osmium; der erste Generator (Heat Generator) Eisen, Kupfer, Planks, einen Ofen und einen Barren Osmium. Mekanism ist damit von sich aus früher erreichbar als die IE-Stahlkette.
- **M3** 🟢 Bronze entsteht im Infuser (3 Kupfer + Zinn ergeben 4) und in der Tinkers-Smeltery (3 Kupfer + 1 Zinn ergeben 4).
- **M4** 🟢 QIO, MekaSuit, Meka-Tool, alle Module, SPS und Fusion Reactor brauchen Polonium oder Plutonium und liegen hinter dem Fission Reactor.
- **M5** 🟢 Der MekaSuit braucht je Teil ein Netherite-Rüstungsteil. Das Giselle Addon bringt vier Module für den Weltraum mit (Space Breathing, Space Fire Proof, Acid Rain Proof, Gravity Normalizing). Der MekaSuit kann damit den Ad-Astra-Raumanzug ersetzen.
- **M6** 🟢 Mekanism: Ad Astra Ores stellt Erzblöcke in Planetengestein bereit: Osmium und Zinn auf dem Mond; Fluorit, Zinn, Uran auf dem Mars; Fluorit, Blei, Uran auf der Venus; Blei, Osmium, Uran auf dem Merkur; alle fünf auf Glacio. Die Generierung ist laut `00_MODBASIS.md` abgeschaltet.
- **M7** 🟢 Applied Mekanistics lagert Chemikalien im ME-Netz. Mekanism bringt 53 Rezepte für AE2-Material und 12 für Farmer's Delight mit.
- **M8** 🟢 Mekanism hat kein Buch und keine Strukturdateien. Wer die Multiblöcke im Questbuch erklären will, braucht eine andere Quelle (im Pack: Just Enough Mekanism Multiblocks zeigt sie in JEI).
- **M9** 🟢 Redstone lässt sich in Mekanism-Maschinen direkt als Strom einlegen (ein Staub 10 000 Joule).

## Ad Astra

- **A1** 🟢 Der Tag `ad_astra:fuel` gilt für alle Raketenstufen (auch Rocketed T5–T7) und für den Rover und enthält `forge:fuel`, `forge:diesel` und `forge:biodiesel`. Biodiesel aus IE und Diesel aus Immersive Petroleum fliegen damit jede Rakete ohne Fuel Refinery. Eine Staffelung des Treibstoffs nach Stufe gibt es von Haus aus nicht; die Tags dafür existieren aber (`ad_astra:tier_1_rocket_fuel` bis `tier_4_rocket_fuel`, `tier_1_rover_fuel`), sie enthalten nur alle `#ad_astra:fuel`.
- **A2** 🟢 Der Tag `ad_astra:oxygen` nimmt `forge:oxygen` an; Mekanism trägt dort seine Flüssigkeit Oxygen ein. Der Oxygen Loader wandelt sie eins zu eins um. Das beantwortet P2 im Kern: Mekanism-Sauerstoff kommt ohne Addon in Ad-Astra-Tanks. Die eigene Gewinnung aus Wasser (100 mB Wasser ergeben 4 mB Oxygen) besteht daneben weiter.
- **A3** 🟢 Stahl und Platten nimmt Ad Astra über `forge:ingots/steel`, `forge:plates/steel` und `forge:plates/iron` an. Stahl und Platten aus IE oder Mekanism umgehen Etrionic Blast Furnace und Compressor vollständig.
- **A4** 🟢 Ad Astra macht Stahl aus 1 Eisenbarren + 1 Kohle oder Holzkohle (Alloying). Das ist eine fünfte Stahlquelle neben Ü1 und die billigste.
- **A5** 🟢 Harte Kette der Metalle: Desh nur auf dem Mond, Ostrum nur auf dem Mars, Calorite nur auf der Venus. Merkur hat nur Eisen, Glacio kein eigenes Metall. Jede Raketenstufe braucht das Metall des Planeten davor.
- **A6** 🟢 Venus und Merkur verlangen den Netherite Space Suit und damit eine vollständige Netherite-Rüstung. Der MekaSuit mit den Giselle-Modulen ist die Alternative (M5); das Giselle Addon bringt dieselben Fähigkeiten auch als Tinkers-Modifier.
- **A7** 🟢 Rocketed fügt nur drei Raketen hinzu, keine Planeten. Die Rezepte kosten kaum mehr als die Tier 4 Rocket (Ice Shard oder Echo Shard statt Nose Cone) und stehen unter der Bedingung, dass `cp_tweaks` fehlt. Soll T5–T7 ein echter Schritt sein, müssen die Rezepte neu.
- **A8** 🟢 Ad Astra bringt eigene Stromquellen (Coal Generator, Solar Panel), Kabel, Rohre, Water Pump und Energizer mit. Das berührt die Projektregel aus Ü5.
- **A9** 🟢 Sky Stone entsteht aus 5 Moon Stone + 4 Mars Stone und wird im Inscriber oder Mekanism-Crusher zu AE2 Sky Dust. AE2-Meteoriten sind damit nicht mehr die einzige Quelle.
- **A10** 🟢 Ölquellen sind ein Bauwerk von Ad Astra mit eigener Biomliste; Star Wars Planets trägt Tatooine dort ein (S4).

## Star Wars Planets

- **S1** 🟢 Alle fünf Planeten stehen von Haus aus auf Stufe 4 und haben Sauerstoff. Die Einstufung auf T5 und T6 laut `00_MODBASIS.md` ist eine Änderung des Packs; innerhalb des Mods gibt es keine Reihenfolge der Planeten.
- **S2** 🟢 Jedes Lichtschwert außer dem Dark Saber kostet einen Beacon, also einen Nether Star. Der Wither ist die eigentliche Hürde, nicht der Kristall.
- **S3** 🟢 Belegt ist nur ein Kyber-Vorkommen: Sandstein-Erz im Tatooine Desert. Das zweite (Deepslate, für Endor, Hoth, Mustafar und Tatooine) verweist auf einen Block, den es im Code nicht gibt. Der registrierte Block Kyber Crystal Ore (verlangt Netherite-Werkzeug) wird von keiner Weltgenerierung gesetzt. Für die Erzplanung heißt das: Kyber gibt es ohne Eingriff nur auf Tatooine und in Truhen der Jawa Crawler.
- **S4** 🟢 Plastic Plate entsteht aus einem Oil Bucket von Ad Astra im Ofen. Öl aus Immersive Petroleum wird nicht angenommen (festes Item, kein Tag). Tatooine hat Ölquellen.
- **S5** 🟢 Beskar gibt es nur auf Mandalore (Schwerkraft 3,0, Temperatur −160). Die Beskar-Rüstung ist eine Aufwertung der Stormtrooper-Rüstung mit je einem Beskar; die Stormtrooper-Rüstung zählt als Ad-Astra-Raumanzug, die Beskar-Rüstung nicht.
- **S6** 🟢 Kyber Crystal, Beskar und Plastic Plate stehen in keinem Material-Tag. Kein anderer Mod kann sie von sich aus verarbeiten oder vervielfachen.
- **S7** 🟢 Der AT-AT auf Hoth enthält fertige Ad-Astra-Maschinen (Oxygen Distributor, Oxygen Loader, Energizer). Wer diese Maschinen im Pack entfernt oder verteuert, sollte das Bauwerk bedenken.
- **S8** 🟢 Jawas handeln und droppen Ad-Astra-Teile (Wrench, Steel Cable, Desh Cable, Solar Panel, Gas Tank, Etrionic Capacitor, Photovoltaic Vesnium Cell). Das Projekt überschreibt die Jawa-Beute bereits (`kubejs/data/swplanets`); der Handel steht im Code und in der Config (`jawaTrade`).
- **S9** 🟢 Mehrere Dinge stehen in Sprachdatei und Texturen, sind aber nicht registriert: Speeder, Music Disc, Mustafar Sand, Kyber Crystal Cluster, Blaster Distance Upgrade, Planet Kamino. Der Eintrag `swplanets:mustafar_sand` in `forge:sand` zeigt ins Leere. Auch das Buch-Item `swplanets:star_manual` ist nicht registriert; ob die Buch-Belohnung ankommt, im Spiel prüfen (P8).
- **S10** 🟢 Die Dateien für Better Combat (zweihändige Lichtschwerter) bleiben ohne Wirkung; Better Combat ist nicht installiert.

## Star Wars: Galaxy in a Cube

- **G1** 🟢 Der Mod hängt an keinem anderen Mod und an keiner Stufe: Alles entsteht aus Eisen, Kupfer, Redstone, Glas, Kohle, Gold und wenigen Diamanten in der Overworld. Blaster und Kampfdroiden sind von sich aus in den ersten Spielstunden erreichbar, das Lichtschwert, sobald die Macht da ist (G5).
- **G2** 🟢 Beide Star-Wars-Mods bringen eigene, nicht austauschbare Fassungen mit: Kyber Crystal, Lichtschwerter, Blaster, Darksaber, Jawas, Kunststoff (Plastoid hier, Plastic Plate dort). Zwei Items heißen in JEI gleich („Kyber Crystal“). Für den Progressionsweg muss entschieden werden, welcher Mod was liefert.
- **G3** 🟢 Durasteel Ingot (4 Eisen + 1 Diamant ergeben 4, formlos an der Werkbank) steht in keinem Tag und ist kein Stahl im Sinn von Ü1.
- **G4** 🟢 Tibanna-Gas kommt aus dem Gas Harvester ohne Strom, Standort oder Kosten: 20 Sekunden je Behälter, im Nether und End 10. Es ist Zutat für Plastoid und Blaster-Munition.
- **G5** 🟢 Lichtschwerter setzen die Macht voraus: Ein Kristall lässt sich erst ab Macht-Stärke 1 färben. Helle Punkte kommen über Erfahrungspunkte, dunkle über das Töten von Dorfbewohnern, Händlern und zahmen Tieren. Die Spielregel `forceObtainment` schaltet das ab.
- **G6** 🟢 Die Rezepte der Assembly Bench (Hilt, Lightsaber, Blaster, Connector) stehen im Code, nicht in Rezeptdateien. KubeJS kann sie nicht wie gewöhnliche Rezepte ändern oder entfernen; steuerbar sind nur die Zutaten davor (Durasteel, Plastoid, Assembly Bench).
- **G7** 🟢 Der Droid Fabricator hat eigene Rezeptdateien (Typ `swgc:fabrication`) und ist damit anpassbar. Droiden kosten nur Eisen- und Kupferblöcke, Redstone und Diamanten.
- **G8** 🟢 Ohne Rezept und ohne Fundort, also nur im Kreativmodus: AT-RT, AT-ST, Delta-7B, Clone, Darksaber, Double-bladed Glaive, Jedi und Sith Holocron. Wer sie im Pack haben will, braucht eigene Rezepte oder Questbelohnungen.
- **G9** 🟢 Kyber Crystal erscheint in allen Overworld-Biomen (ein Versuch je 16 Chunks). Jawas erscheinen in Desert und Badlands, Tusken Raider in Biomen mit Wüstendorf, Ewok-Dörfer im Forest. Das sind Eingriffe in die Overworld, die mit Erzplanung und Dimensionen des Packs abzustimmen sind.

## Blood Magic

- **BM1** 🟢 Blood Magic hängt an keinem anderen Mod und braucht keinen Strom. Die erste Stufe kostet nur Stein, Gold, Glas, einen Diamanten und Gesundheit. LP kommt ausschließlich aus Lebewesen (Spieler, Mobs über Dagger of Sacrifice und Well of Suffering); einen Weg von Strom zu LP oder zurück gibt es nicht.
- **BM2** 🟢 Die Altar-Stufen sind eine harte Kette über die Slates: Jede Slate braucht die vorige und einen höheren Altar. Stufe 4 braucht Weak Blood Shards (Antechamber → Tau → ARC), Stufe 5 Demonite aus den Mines des Demon Realm. Beides liegt in der eigenen Dungeon-Dimension; laut Config darf jeder Spieler sie öffnen (`makeDungeonRitualCreativeOnly = false`). Das ist ein Punkt für den Server beim Host.
- **BM3** 🟢 Rituale (ab Altar-Stufe 3) brauchen den Nether: Magma Cream und Ghast Tear für die Inscription Tools (Ü7). Reinforced Runes (Stufe 5) brauchen Netherite Scrap. Einen Nether Star braucht der Mod nicht.
- **BM4** 🟢 Die Meteore sind die einzige Brücke zu IE, Mekanism und AE2 und zugleich eine Erzquelle unabhängig von der Weltgenerierung (Ü6). Mit Infused Alloy entsteht ein Meteor mit Uranblock-Kern, Osmium, Uran und Fluorit; mit LV Wire Coil einer mit allen IE-Erzen. Die Rezepte für Create, Mystical Agriculture und Thermal gelten nicht.
- **BM5** 🟢 Netherite-Vervielfachung über die ARC (Ü2): Ancient Debris ergibt mit Cutting Fluid 2 Netherite Scrap Sand. Das berührt jede Stelle des Packs, an der Netherite als Tor dient (Ad Astra Netherite Space Suit, MekaSuit, Botania Asgard-Rune).
- **BM6** 🟢 Flug: Reverence of the Condor (Ritual, 1 000 000 LP Start) gibt Flug im Bereich, die Flask-Wirkung Flight kurzzeitig überall, die Living Armour bekommt eine eingebaute Elytra. Wo Flug im Pack ein späterer Meilenstein sein soll, ist das zu bedenken.
- **BM7** 🟢 Blood Magic bringt mit Item Routing, Teleposern und dem Autocrafting-Ritual eigene Logistik mit (Ü4). Teleposer tauschen Blöcke samt Inhalt über beliebige Entfernung; laut Buch kostet das höchstens 1000 LP je Block und 10 000 LP insgesamt.
- **BM8** 🟢 KubeJS Blood Magic ist installiert und kennt Rezeptschemas für Altar, Alchemy Table, Hellfire Forge, ARC und Arrays. Meteore und Flasks gehen damit nicht, nur als Datapack-Rezept.
- **BM9** 🟢 Plant Oil von Blood Magic ist ein Item (Alchemy Table aus Feldfrüchten), Plant Oil von IE eine Flüssigkeit. In JEI heißen beide gleich.

## Zu prüfen

- **P1** 🔵 Botania Gaia Pylon: Botania hat ein Rezept ohne Alfsteel, MythicBotany eines über den Alfsteel Pylon. Welches im Pack gilt, in JEI nachsehen. Davon hängt ab, ob das Ritual of Gaia vor oder nach Alfsteel liegt.
- **P2** 🟢 Geklärt mit der Ad-Astra-Seite: Mekanism-Oxygen (flüssig) wird über `forge:oxygen` vom Oxygen Loader angenommen (A2). Offen bleibt nur, wie das Giselle Addon Anzüge und Oxygen Cans füllt.
- **P3** 🔵 Immersive Engineering enthält eine Textur für eine Terrasteel-Patrone. Ob das Item in dieser Version registriert ist, ist nicht geprüft.
- **P4** 🔵 Eingangsstoff und Energiebedarf des Mekanism SPS (Antimatter) stehen nur im Code.
- **P5** 🔵 Treibstoffe des Portable Generator und des Motorboat aus Immersive Petroleum sind nicht ausgelesen.
- **P6** 🔵 Was der Fluix Mana Pool aus Applied Botanics genau tut, ist nicht ausgelesen.
- **P7** 🔵 Ob Mekanism-Leitungen und -Maschinen IE-Strom (Forge Energy) direkt annehmen und umgekehrt, ist nicht aus den Dateien belegt; im Spiel prüfen.
- **P8** 🔵 Star Wars Planets: Kommt das Star Manual beim ersten Besitz einer Tier 3 Rocket an, obwohl das Item nicht registriert ist? Und lädt die Welt das Deepslate-Vorkommen des Kyber-Kristalls ohne Fehler (S3, S9)?
- **P9** 🔵 Galaxy in a Cube: Zeigt JEI die Rezepte der Assembly Bench? Schaden und Magazin der Blaster, Schaden der Lichtschwerter und alle Rüstungswerte stehen nur im Code und sind nicht ausgelesen.
- **P10** 🔵 Ad Astra: Handelsangebote der Lunarians, Mobs der More-Structures-Dungeons und die Sauerstoffregeln des Giselle Addon sind nicht ausgelesen.
- **P11** 🔵 Blood Magic: Ob die Demon-Realm-Dimension auf dem Server des Hosts ohne Probleme läuft (eigene Dimension, prozedurale Räume), ist nicht geprüft. Ebenso nicht ausgelesen: Ritual-Stein-Zahlen, Erzgewichte der Meteore, Werte der Sentient-Waffen.

## Quellen

Die Belege stehen auf den Modpfad-Seiten (`docs/modpfade/<mod>/data.js`) und stammen aus den JARs der Testinstanz: Rezepte, Bücher, Sprachdateien, Tags, bei Mekanism zusätzlich aus `config/Mekanism` und bei IE aus `defaultconfigs/immersiveengineering-server.toml`. Bei den beiden Star-Wars-Mods stammen Registrierungen und Abläufe aus den Klassen der JARs.
