# Auffälligkeiten für die Crossmod-Planung

> Stand 2026-10-13, Minecraft 1.20.1. Gesammelt beim Erstellen der Modpfad-Seiten für Tinkers' Construct, Immersive Engineering, Botania und Mekanism. Wird mit jeder weiteren Seite fortgeschrieben.

## Zweck

Merkliste. Hier steht, was die Mods **von sich aus** tun und was davon den geplanten Progressionsweg berührt: Abkürzungen, Überschneidungen, fehlende Verbindungen, harte Voraussetzungen. Es sind Befunde, keine Entscheidungen. Entschieden wird in `01_PROGRESSION.md` und `07_CROSSMOD_INTEGRATION.md`.

Jeder Befund ist aus den JARs oder der Config der Testinstanz belegt (🟢). Was nur vermutet oder noch nicht nachgelesen ist, steht getrennt unter „Zu prüfen“ (🔵). Status aller Punkte: offen, solange nichts anderes dabeisteht.

## Übergreifend

### Ü1 Stahl hat vier Quellen

| Quelle | Rezept | Voraussetzung |
|---|---|---|
| IE Crude Blast Furnace | Eisen + Coal Coke | Coke Oven, Blast Bricks (Nether Brick, Magma Block) |
| IE Arc Furnace | Eisen + Koksstaub | Hochspannung, Elektroden |
| Mekanism Metallurgic Infuser | Eisen + 2× 10 Carbon (zwei Kohle), dann schmelzen | 4 Eisen, 2 Furnace, 2 Redstone, 1 Osmium |
| Tinkers | Steel Shards (Skyslimes, Geoden), Nebenprodukt von Eisenerz in der Foundry | Slime-Inseln bzw. Foundry |

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

🟢 Mekanism schlägt alle anderen ab der dritten Stufe deutlich. Erzblöcke bringen überall mehr als Raw Ore; der Mekanism Combiner macht aus 8 Raw Ore + Cobblestone wieder einen Erzblock.

🟢 Mekanism hat Verarbeitungsketten nur für Eisen, Gold, Kupfer, Zinn, Osmium, Blei, Uran. Für Silber, Nickel und Aluminium (IE) gibt es keine; die bleiben bei IE (Crusher, Arc Furnace) und Tinkers.

### Ü3 Drei Lagersysteme

🟢 AE2 (laut Projektentscheidung Endgame), Mekanism QIO (braucht Polonium, liegt also hinter dem Fission Reactor) und Botania Corporea (braucht Pixie Dust, Dragonstone, Ender Air, also hinter dem Elfenportal). Dazu Storage Drawers, Mekanism Bins, IE Silo. Keines der drei großen Systeme ist früh; welches wann die Rolle übernimmt, ist nicht festgelegt.

### Ü4 Vier Autocrafter

🟢 IE Assembler und Automated Engineer's Workbench, Mekanism Formulaic Assemblicator (Stufe Basic, früh), Botania Crafty Crate, später AE2. Der Mekanism-Assemblicator ist am frühesten und am billigsten (Stahl, Basic Control Circuits).

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

### Ü7 Nether als Voraussetzung

🟢 IE Blast Brick braucht Nether Brick und Magma Block, also den Nether vor dem ersten IE-Stahl. Botania braucht für die Rune of Fire Nether Brick und Nether Wart. Tinkers braucht den Nether erst für Cobalt und die Foundry. Mekanism braucht ihn gar nicht.

### Ü8 Schwefel

🟢 Quellen: IE Crusher (Nebenprodukt bei Lapis-, Kohle-, Quarzerz), IE aus Blaze Rods, Immersive Petroleum (5 Schwefelstaub je Eimer entschwefeltem Diesel), Mekanism (Kohlevergasung in der Reaktionskammer, Gunpowder in der Injection Chamber). Verbraucher: Mekanism Schwefelsäure (fünfte Erzstufe, Uranverarbeitung), IE Dünger und Schwarzpulver. Alle über `forge:dusts/sulfur` austauschbar.

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

## Zu prüfen

- **P1** 🔵 Botania Gaia Pylon: Botania hat ein Rezept ohne Alfsteel, MythicBotany eines über den Alfsteel Pylon. Welches im Pack gilt, in JEI nachsehen. Davon hängt ab, ob das Ritual of Gaia vor oder nach Alfsteel liegt.
- **P2** 🔵 Sauerstoff für die Raumfahrt soll laut Projektentscheidung nur aus Mekanism kommen. Ob das Giselle Addon Mekanism-Oxygen direkt in Ad-Astra-Tanks und -Anzüge bringt, ist noch nicht aus dem JAR ausgelesen (Ad-Astra-Seite).
- **P3** 🔵 Immersive Engineering enthält eine Textur für eine Terrasteel-Patrone. Ob das Item in dieser Version registriert ist, ist nicht geprüft.
- **P4** 🔵 Eingangsstoff und Energiebedarf des Mekanism SPS (Antimatter) stehen nur im Code.
- **P5** 🔵 Treibstoffe des Portable Generator und des Motorboat aus Immersive Petroleum sind nicht ausgelesen.
- **P6** 🔵 Was der Fluix Mana Pool aus Applied Botanics genau tut, ist nicht ausgelesen.
- **P7** 🔵 Ob Mekanism-Leitungen und -Maschinen IE-Strom (Forge Energy) direkt annehmen und umgekehrt, ist nicht aus den Dateien belegt; im Spiel prüfen.

## Quellen

Die Belege stehen auf den Modpfad-Seiten (`docs/modpfade/<mod>/data.js`) und stammen aus den JARs der Testinstanz: Rezepte, Bücher, Sprachdateien, Tags, bei Mekanism zusätzlich aus `config/Mekanism` und bei IE aus `defaultconfigs/immersiveengineering-server.toml`.
