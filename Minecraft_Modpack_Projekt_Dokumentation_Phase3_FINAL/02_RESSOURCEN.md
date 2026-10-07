# 02 — RESSOURCEN

## Zweck

Master-Inventar aller relevanten Ressourcen, Materialien, Erze, Zwischenprodukte, Flüssigkeiten, Gase und magischen Ressourcen.

## Wichtige Regel

Diese Datei darf erst nach einer tatsächlichen Inventur als vollständig betrachtet werden. Vermutete Ressourcen werden nicht als Fakten eingetragen.

## Kategorien

### Vanilla-Grundressourcen

🔵 Zu erfassen:
- Eisen
- Kupfer
- Gold
- Zinn
- Silber
- Blei
- Osmium
- Redstone
- Quarz
- Diamant
- Smaragd
- weitere tatsächlich vorhandene Ressourcen

### Industrielle Materialien

🔵 Zu erfassen:
- Steel
- Constantan
- Electrum
- Bronze
- Brass
- Aluminium
- weitere Legierungen/Materialien der installierten Mods

### Mekanism

🔵 Zu erfassen:
- tatsächliche Erze
- Dusts
- Ingots
- Clumps/Shards/Crystals
- Gase
- Flüssigkeiten
- chemische Zwischenprodukte
- spezielle High-Tech-Materialien

### AE2

🔵 Zu erfassen:
- Certus Quartz
- Fluix
- Silicon
- Engineering/Calculation/Logic-Komponenten
- weitere relevante Ressourcen

### Botania / MythicBotany

🔵 Zu erfassen:
- Mana-bezogene Ressourcen
- Runen
- Terrasteel
- Elementium
- Gaia-/MythicBotany-Materialien
- weitere tatsächlich vorhandene Materialien

### Blood Magic / Blood-Smeltery

🔵 Zu erfassen:
- Life Essence
- Blood Magic-Materialien
- Alchemieprodukte
- Blood-Smeltery-Produkte

### Tinkers Construct

🔵 Zu erfassen:
- Materialdefinitionen
- Legierungen
- Werkzeug-/Waffenmaterialien
- relevante Slurry-/Casting-/Melting-Ressourcen

## Ressourcen-Matrix

Die finale Tabelle wird mindestens folgende Spalten besitzen:

| Ressource | Quelle | Dimension | Worldgen | Verarbeitung | Output | Nebenprodukte | Progression | Cross-Mod | Status |
|---|---|---|---|---|---|---|---|---|---|
| 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 |

## Offene Fragen

🔵 Welche Ressourcen werden mehrfach von verschiedenen Mods erzeugt?  
🔵 Welche Duplikate werden vereinheitlicht?  
🔵 Welche Erze bleiben modexklusiv?  
🔵 Welche Materialien dürfen nur über Verarbeitung entstehen?  
🔵 Welche Materialien werden bewusst als Cross-Mod-Gate verwendet?

---

# Arbeitsprotokoll — Ressourceninventur

## Vorgehensweise

Die Ressourceninventur wird **Mod für Mod** durchgeführt.

Für jede relevante Mod werden mindestens geprüft:

1. Items
2. Blöcke
3. Erze / Ore Blocks
4. Ingots / Nuggets
5. Dusts / Clumps / Shards / Crystals
6. Legierungen
7. Flüssigkeiten
8. Gase
9. Essenzen / Mana / sonstige Ressourcen
10. relevante Zwischenprodukte
11. alternative Quellen / Verarbeitung
12. vorhandene Tags bzw. erkennbare Ore-Dictionary-/Forge-Tag-Beziehungen
13. relevante Dimensions-/Worldgen-Quellen
14. Ressourcen, die von anderen Mods bereitgestellt oder verarbeitet werden

Danach werden Überschneidungen und gemeinsame Materialfamilien zusammengeführt.

## Datenqualität

### 🔵 Vollständige Registry-Inventur — noch nicht möglich

Die bisher vorhandenen Dateien `mods_v1.txt`, `mods_v2.txt` und `mods_v3.txt` enthalten die **Mod-/JAR-Namen und Versionen**, aber nicht den vollständigen Registry-Inhalt der JARs.

Für eine belastbare, versionsgenaue Inventur reicht eine Modliste daher nicht aus.

Insbesondere können wir aus einer Modliste allein nicht sicher ableiten:

- alle registrierten Items
- alle registrierten Blocks
- alle tatsächlichen Ore-Blocks
- alle Fluid-IDs
- alle Gas-IDs
- alle Material-/Alloy-Definitionen
- tatsächliche Rezeptpfade
- Worldgen-Definitionen
- Nebenprodukte
- modversionsspezifische Änderungen

### Benötigte Zuarbeit

**Bitte den vollständigen `mods`-Ordner aus deiner Minecraft-/ATLauncher-Instanz als ZIP hochladen.**

Es müssen nicht die Konfigurationsdateien enthalten sein; für diesen Inventurschritt reicht zunächst:

```text
mods/
├── *.jar
├── ...
└── ...
```

Idealerweise genau die JARs, die aktuell in deiner Instanz verwendet werden.

### Warum die JARs wichtig sind

Wir wollen nicht nur eine allgemeine Liste wie „Mekanism hat Osmium“, sondern eine technisch verwertbare Matrix, beispielsweise:

| Mod | Registry-ID | Anzeigename | Typ | Materialfamilie | Ore/Resource | Quelle | Verarbeitung | Nebenprodukt | Dimension | Progression | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 |

Die Registry-ID ist später für KubeJS besonders wichtig.

## Aktueller Inventurstatus

🟢 Modliste vollständig aus `mods_v3.txt` übernommen.

🔵 Registry-/Content-Inventur aus den tatsächlichen JARs ausstehend.

🔵 Ore-/Worldgen-Inventur aus den tatsächlichen JARs ausstehend.

🔵 Rezept-/Processing-Inventur aus den tatsächlichen JARs ausstehend.

🔵 Cross-Mod-Ressourcenbeziehungen ausstehend.

## Keine vorzeitigen Annahmen

Bis die JARs analysiert wurden, werden vermutete Ressourcen nicht als Bestandteil der finalen Ressourcenmatrix behandelt.

Dies ist absichtlich so: Eine scheinbar kleine falsche Annahme bei einer Ressource kann später Ore Generation, Processing, KubeJS-Rezepte und Progression gleichzeitig verfälschen.

---

# Verifizierte JAR-Inventur — Phase 1

## Methodik

Quelle dieser Phase sind die tatsächlich hochgeladenen JARs aus `mods_v3.zip`.

Ausgewertet wurden insbesondere:

- `assets/*/lang/en_us.json`
- Item-/Block-Model-Registry-Namen
- `data/*/recipes/*.json`
- `data/*/tags/items/*.json`
- `data/*/tags/blocks/*.json`
- `data/*/worldgen/*`

Die hier genannten Registry-IDs sind deshalb **versionsbezogene Befunde aus den gelieferten JARs**.

> Diese Phase erfasst die **ressourcenrelevanten Inhalte**. Rein dekorative Blöcke, Werkzeuge ohne eigene Materialökonomie und Utility-Gegenstände werden nicht als eigenständige Ressourcenfamilien gezählt.

---

# 1. Immersive Engineering

**JAR:** `ImmersiveEngineering-1.18.2-8.4.0-161.jar`

## Erze / Rohstoffe

| Ressource | Registry-ID | Form |
|---|---|---|
| Bauxite / Aluminium | `immersiveengineering:ore_aluminum` | Erz |
| Lead | `immersiveengineering:ore_lead` | Erz |
| Nickel | `immersiveengineering:ore_nickel` | Erz |
| Silver | `immersiveengineering:ore_silver` | Erz |
| Uranium | `immersiveengineering:ore_uranium` | Erz |
| Copper | `immersiveengineering:ore_copper` | Erz |

Zusätzlich existieren Deepslate-Varianten für Aluminium, Lead, Nickel, Silver und Uranium.

## Rohmaterialien

- `immersiveengineering:raw_aluminum`
- `immersiveengineering:raw_lead`
- `immersiveengineering:raw_nickel`
- `immersiveengineering:raw_silver`
- `immersiveengineering:raw_uranium`

## Metalle / Legierungen

- Aluminium
- Copper
- Lead
- Nickel
- Silver
- Uranium
- Steel
- Constantan
- Electrum

Registry-Formen umfassen u. a. Ingots, Nuggets, Dust/Grit, Plates, Rods und Storage Blocks.

## Weitere relevante Materialien

- HOP Graphite
- Coal Coke
- Coke Dust
- Sulfur
- Nitrate / Saltpeter Dust
- Sawdust

## Flüssigkeiten

- `immersiveengineering:creosote`
- `immersiveengineering:plantoil`
- `immersiveengineering:biodiesel`
- `immersiveengineering:redstone_acid`

Zusätzlich existiert in IE eine Uranium-/Constantan-Schmelzfluid-Unterstützung.

## Industrielle Ressourcenrolle

🟢 IE liefert eine sehr wichtige industrielle Grundschicht:

**Erze → Grit/Dust → Metall/Legierung → Komponenten → Maschinen**

Besonders wichtig für unsere spätere Balance:

- Steel
- Nickel
- Constantan
- Electrum
- HOP Graphite
- Biodiesel
- Creosote
- Plant Oil

---

# 2. Immersive Petroleum

**JAR:** `ImmersivePetroleum-1.18.2-4.1.0-21.jar`

## Flüssigkeiten

- `immersivepetroleum:crude_oil` — Crude Oil
- `immersivepetroleum:diesel` — Diesel
- `immersivepetroleum:diesel_sulfur` — Sulfurized Diesel

## Weitere Ressourcen

- `immersivepetroleum:petcoke_dust` — Petcoke Dust
- Lubricant Can als Behälter/Verbrauchsgegenstand

## Bedeutung

🟢 Petroleum bildet eine eigenständige industrielle Flüssigkeits-/Energieökonomie.

Wichtig für spätere Balance:

**Crude Oil → Refinery → Diesel / Nebenprodukte**

und die Verbindung zu IE-Generatoren bzw. Petroleum-Technik.

---

# 3. Mekanism

**JAR:** `Mekanism-1.18.2-10.2.5.465.jar`

## Eigene Erze

- `mekanism:lead_ore`
- `mekanism:osmium_ore`
- `mekanism:tin_ore`
- `mekanism:uranium_ore`
- `mekanism:fluorite_ore`

Jeweils relevante Deepslate-Varianten sind vorhanden.

## Rohmaterialien

- `mekanism:raw_lead`
- `mekanism:raw_osmium`
- `mekanism:raw_tin`
- `mekanism:raw_uranium`

## Metalle

- Lead
- Osmium
- Tin
- Uranium
- Steel
- Bronze

## Hochwertige Spezialmaterialien

- Refined Obsidian
- Refined Glowstone
- Infused Alloy
- Reinforced Alloy
- Atomic Alloy

## Verarbeitungskomponenten

Mekanism registriert für mehrere Metalle eigene Zwischenstufen:

- Dirty Dust
- Clump
- Shard
- Crystal
- Dust

Dies betrifft insbesondere:

- Copper
- Gold
- Iron
- Lead
- Osmium
- Tin
- Uranium

Damit ist Mekanism für unsere Processing-Balance besonders relevant.

## Weitere Ressourcen

- Fluorite
- Salt
- Lithium
- Yellow Cake Uranium
- Enriched Diamond
- Enriched Gold
- Enriched Iron
- Enriched Redstone
- Enriched Tin
- Enriched Refined Obsidian

## Gase

Die JAR registriert u. a.:

- Hydrogen
- Oxygen
- Chlorine
- Hydrogen Chloride
- Ethylene
- Brine
- Lithium
- Sodium
- Steam
- Water Vapor
- Sulfur Dioxide
- Sulfur Trioxide
- Sulfuric Acid
- Uranium Oxide
- Uranium Hexafluoride
- Fissile Fuel
- Nuclear Waste
- Spent Nuclear Waste
- Plutonium
- Polonium
- Antimatter
- Superheated Sodium
- Osmium

## Flüssigkeiten

- Sulfur Dioxide
- Sulfur Trioxide
- Uranium Oxide
- Uranium Hexafluoride

## Kritische Überschneidungen

🟡 Mekanism besitzt eigene:

- Lead
- Uranium
- Steel
- Tin

Diese dürfen **nicht automatisch als neue unabhängige Ressourcen** behandelt werden. Später wird anhand von Forge-Tags/Rezepte geprüft, welche davon wir als gemeinsame Materialfamilie führen.

---

# 4. Mekanism Generators

**JAR:** `MekanismGenerators-1.18.2-10.2.5.465.jar`

Der Generator-Addon bringt vor allem Energieerzeugung und deren technische Infrastruktur.

Ressourcenrelevant:

- Energieerzeuger auf Basis von Mekanism-Ressourcen
- Generator-spezifische Brennstoff-/Energiepfade
- nuklearer Energiepfad in Verbindung mit Mekanism-Gasen und Nuclear Waste

🟡 Die vollständige Brennstoff-/Energiebilanz wird nicht hier, sondern in `05_ENERGIE_FLUESSIGKEITEN.md` finalisiert.

---

# 5. Tinkers Construct

**JAR:** `TConstruct-1.18.2-3.7.2.167.jar`

Tinkers ist eine der größten eigenen Materialsysteme des Packs.

## Eigene Erz-/Rohressourcen

- `tconstruct:cobalt_ore` — Nether Cobalt Ore
- `tconstruct:raw_cobalt`

## Materialfamilien

### Basis-/gemeinsame Metalle

- Aluminum
- Copper
- Iron
- Gold
- Lead
- Silver
- Tin
- Osmium
- Uranium
- Steel
- Bronze
- Brass
- Constantan
- Electrum
- Obsidian

### Tinkers-spezifische Materialien

- Cobalt
- Manyullyn
- Amethyst Bronze
- Hepatizon
- Pig Iron
- Rose Gold
- Knightslime
- Slimesteel
- Soulsteel
- Queen's Slime

## Slime-/magische Materialquellen

- Earthslime
- Skyslime
- Enderslime
- Ichor

Dazu gehören:

- Slime Crystals
- Crystal Clusters
- Congealed Slime
- Slime Blocks
- Slime Fluids

## Flüssigkeiten

Tinkers registriert u. a. Schmelzflüssigkeiten für:

- Aluminum
- Amethyst Bronze
- Brass
- Bronze
- Constantan
- Copper
- Diamond
- Electrum
- Emerald
- Gold
- Iron
- Lead
- Obsidian
- Osmium
- Pig Iron
- Quartz
- Refined Glowstone
- Refined Obsidian
- Rose Gold
- Silver
- Steel
- Tin
- Uranium
- Cobalt
- Hepatizon
- Knightslime
- Manyullyn
- Platinum
- Queen's Slime
- Slimesteel
- Soulsteel

Außerdem:

- Blood
- Blazing Blood
- Slime
- Enderslime

## Materialsystem

Die JAR enthält explizite Materialdefinitionen, darunter:

- Aluminum
- Amethyst Bronze
- Blood
- Brass
- Bronze
- Constantan
- Copper
- Electrum
- Gold
- Iron
- Lead
- Obsidian
- Osmium
- Pig Iron
- Rose Gold
- Silver
- Steel
- Tin
- Uranium

Weitere Spezialmaterialien werden über die Item-/Materialdefinitionen bereitgestellt.

## Bedeutung für unser Pack

🟢 Tinkers ist **kein Erzverarbeitungs-Addon**, sondern ein eigenes Material-/Werkzeugsystem.

🟢 Viele seiner Metalle überschneiden sich mit IE/Mekanism.

Daher müssen wir später zwischen:

1. gemeinsamer Rohstoffquelle,
2. gemeinsamer Metallfamilie,
3. Tinkers-spezifischer Schmelzlogik

unterscheiden.

---

# 6. Tinkers Integrations

## TCIntegrations

**JAR:** `TCIntegrations-1.18.2-2.0.18.5.jar`

Ressourcenrelevant ist vor allem die Verbindung von Tinkers mit Materialien/Tags anderer Mods.

🟡 Die Integrationsrezepte werden in Phase 2 der Processing-Matrix separat ausgewertet.

## Tinkers Levelling Addon

**JAR:** `TinkersLevellingAddon-1.18.2-1.3.0.jar`

Keine eigenständige große Ressourcenfamilie.

Rolle:
- Tool-/Level-Progression.

---

# 7. Botania

**JAR:** `Botania-1.18.2-435.jar`

## Magische Materialien

- Manasteel
- Elementium
- Terrasteel
- Gaia Spirit Ingot
- Mana Diamond
- Mana Pearl
- Pixie Dust
- Mana Powder
- Mana Infused String

## Quartz-Familie

Botania besitzt mehrere eigene Quartz-Varianten:

- Blaze Quartz
- Smokey Quartz
- Elven Quartz
- Lavender Quartz
- Mana Quartz
- Redquartz
- Sunny Quartz

Diese sind **nicht automatisch mit Vanilla Nether Quartz gleichzusetzen**.

## Mana-Ressourcen

- Mana
- Mana Bottle
- Mana Tablet
- Mana Pearl
- Mana Diamond
- Mana Powder
- Mana Infused String

## Runen

Botania besitzt die Rune-Familie:

- Rune of Air
- Rune of Earth
- Rune of Fire
- Rune of Water
- Rune of Mana
- Rune of Spring
- Rune of Summer
- Rune of Autumn
- Rune of Winter
- Rune of Lust
- Rune of Gluttony
- Rune of Greed
- Rune of Sloth
- Rune of Wrath
- Rune of Envy
- Rune of Pride

## Gaia

- Gaia Spirit Ingot
- Gaia-bezogene Ressourcen

## Materialblöcke

- Manasteel Block
- Elementium Block
- Terrasteel Block
- Mana Diamond Block
- Livingrock
- Livingwood

## Bedeutung

🟢 Botania ist eine **eigene magische Ressourcenökonomie**.

Mana wird nicht als normales Item behandelt.

---

# 8. MythicBotany

**JAR:** `MythicBotany-1.18.2-2.1.14.jar`

## Erze

- `mythicbotany:dragonstone_ore`
- `mythicbotany:elementium_ore`
- `mythicbotany:gold_ore`

## Rohmaterial

- `mythicbotany:raw_elementium`

## High-End-Material

- `mythicbotany:alfsteel_ingot`
- `mythicbotany:alfsteel_nugget`

## Runen

- Rune of Alfheim
- Rune of Asgard
- Rune of Helheim
- Rune of Jötunheim
- Rune of Midgard
- Rune of Muspelheim
- Rune of Nidavellir
- Rune of Niflheim
- Rune of Vanaheim

## Spezialressourcen

- Dragonstone
- Blood of Kvasir
- Raw Elementium
- Alfsteel

🟢 MythicBotany bildet damit eine echte High-End-Erweiterung der Botania-Materialprogression.

---

# 9. Blood Magic

**JAR:** `BloodMagic-1.18.2-3.2.6-41.jar`

## Eigene Erz-/Rohressource

- `bloodmagic:dungeon_ore` — Demonite

## Materialien

- Hellforged Ingot
- Corrupted Dust
- Sulfur

## Hauptressource

- `bloodmagic:life_essence_fluid` — Life Essence Fluid

## Behälter

- Life Essence Bucket

## Bedeutung

🟢 Blood Magic besitzt eine eigene Ressourcenökonomie um **Life Essence**.

🟢 Demonite und Hellforged/Corrupted-Materialien sind nicht als normale Tech-Metalle zu behandeln.

---

# 10. Blood-Smeltery

**JAR:** `Blood-Smeltery-1.18.2-1.1.6.jar`

Die Mod erweitert die Verbindung zwischen Blood Magic und Tinkers Construct.

Ressourcenrelevant:

- Blood Magic Materialien in Tinkers-/Smeltery-Kontext
- zusätzliche Schmelz-/Casting-/Tag-Beziehungen

🟡 Die genaue Produktionskette wird in der Processing-Matrix separat ausgewertet.

---

# 11. Applied Energistics 2

**JAR:** `appliedenergistics2-forge-11.7.6.jar`

## Hauptressourcen

### Certus Quartz

- `ae2:quartz_ore`
- `ae2:deepslate_quartz_ore`
- `ae2:certus_quartz_crystal`
- `ae2:charged_certus_quartz_crystal`
- `ae2:certus_quartz_dust`
- `ae2:certus_crystal_seed`

### Fluix

- `ae2:fluix_crystal`
- `ae2:fluix_dust`
- `ae2:fluix_pearl`
- `ae2:fluix_crystal_seed`
- Fluix Block

### Silicon

- `ae2:silicon`
- `ae2:printed_silicon`

### Sky Stone

- `ae2:sky_dust`

### Ender Dust

- `ae2:ender_dust`

## AE2-Komponenten

Ressourcen-/Komponentenrelevant:

- Engineering components
- Calculation components
- Logic components
- Formation Core
- Annihilation Core
- Printed Silicon
- Quartz Fiber
- Fluix Crystal

🟢 AE2 besitzt damit eine klar abgegrenzte eigene Spezialressourcenfamilie.

---

# 12. Applied Mekanistics

**JAR:** `Applied-Mekanistics-1.2.2.jar`

Keine große eigenständige Erzfamilie.

Rolle:

🟢 Verbindung zwischen:

**Mekanism-Gase/Processing ↔ AE2-Automatisierung**

Die wichtigen Ressourcen stammen überwiegend aus Mekanism.

---

# 13. Applied Botanics

**JAR:** `Applied-Botanics-1.0.4.jar`

## Ressourcenrelevant

- Mana
- Fluix Mana Pool
- Mana Cell Housing
- Mana Storage Cells
- Portable Mana Storage Cells
- Mana P2P Tunnel

🟢 Applied Botanics verbindet Botania Mana mit AE2.

Das ist für unser geplantes Cross-Mod-System besonders interessant.

---

# 14. Farmer's Delight

**JAR:** `FarmersDelight-1.18.2-1.2.3.jar`

Keine relevante Metall-/Erzfamilie.

Ressourcenrelevant für die Gesamtwirtschaft:

- Straw
- Organic Compost
- Rich Soil
- tierische Rohstoffe
- Lebensmittel-/Kochzutaten
- Pasta-/Meal-Komponenten

🟡 Die landwirtschaftlichen Ressourcen werden später in einer separaten Food-/Organic-Matrix berücksichtigt.

---

# 15. Nethers Delight

**JAR:** `NethersDelight-1.18.2-2.2.0.jar`

Ressourcenrelevant:

- Magma Gelatin
- Nether-/Hoglin-Rohstoffe
- Rich Soul Soil

Keine zentrale Metallressource.

---

# 16. Twilight Forest

**JAR:** `twilightforest-1.18.2-4.1.1494-universal.jar`

## Eigene Materialressourcen

- Ironwood
- Steeleaf
- Knightmetal
- Fiery Ingot
- Fiery Essence
- Fiery Blood
- Armor Shard / Armor Shard Cluster
- Borer Essence

## Rohressourcen

- Raw Ironwood
- spezielle Dungeon-/Bossressourcen

## Bedeutung

🟡 Twilight Forest besitzt mehrere **dimensionsgebundene Spezialmaterialien**.

Diese werden nicht mit normalen Metallen vereinheitlicht.

Sie können später für optionale/alternative Progressionspfade und Endgame-Gates relevant werden.

---

# 17. Storage Drawers

**JAR:** `StorageDrawers-1.18.2-10.3.0.jar`

Keine eigenständige Rohstoff-/Erzfamilie.

Rolle:
- Speicherung vorhandener Ressourcen.

---

# 18. Traveler's Backpack

**JAR:** `TravelersBackpack-1.18.2-7.1.33.jar`

Keine eigenständige relevante Rohstofffamilie.

Rolle:
- mobile Lagerung
- Flüssigkeitsspeicherung

---

# 19. Sophisticated Backpacks

**JAR:** `sophisticatedbackpacks-1.18.2-3.20.3.1063.jar`

Keine eigenständige Rohstofffamilie.

Rolle:
- Lagerung / Upgrade-System.

---

# 20. Bonsai Trees 3

**JAR:** `bonsaitrees3-3.2.1.jar`

Ressourcenrelevant:

- Holz
- Pflanzen
- automatisierte Baum-/Pflanzenproduktion

🟡 Später relevant für die Organic-/Fuel-Matrix.

---

# 21. Immersive Aircraft

**JAR:** `immersive_aircraft-0.4.2+1.18.2-forge.jar`

Keine zentrale neue Rohstofffamilie.

Rolle:
- Fahrzeuge / Luftfahrt.

---

# 22. More Immersive Wires

**JAR:** `more-immersive-wires-1.18.2-1.1.0.jar`

Keine eigenständige Rohstofffamilie.

Rolle:
- IE-Energie-/Wire-Infrastruktur.

---

# Vorläufige Materialfamilien — wichtiger Befund

Nach der JAR-Inventur existieren bereits deutliche Mehrfachregistrierungen:

| Materialfamilie | IE | Mekanism | Tinkers | Andere |
|---|:---:|:---:|:---:|---|
| Copper | ✓ | ✓ Verarbeitung | ✓ | Vanilla |
| Iron | ✓ | ✓ Verarbeitung | ✓ | Vanilla |
| Gold | ✓ Verarbeitung | ✓ Verarbeitung | ✓ | Vanilla |
| Lead | ✓ | ✓ | ✓ | — |
| Silver | ✓ | — | ✓ | — |
| Tin | — | ✓ | ✓ | — |
| Uranium | ✓ | ✓ | ✓ | — |
| Steel | ✓ | ✓ | ✓ | — |
| Bronze | — | ✓ | ✓ | — |
| Constantan | ✓ | — | ✓ | — |
| Electrum | ✓ | — | ✓ | — |
| Aluminum | ✓ | — | ✓ | — |
| Nickel | ✓ | — | — | — |
| Osmium | — | ✓ | ✓ | — |
| Refined Obsidian | — | ✓ | ✓ | — |
| Refined Glowstone | — | ✓ | ✓ | — |
| Cobalt | — | — | ✓ | — |
| Manyullyn | — | — | ✓ | — |
| Pig Iron | — | — | ✓ | — |
| Rose Gold | — | — | ✓ | — |
| Amethyst Bronze | — | — | ✓ | — |
| Hepatizon | — | — | ✓ | — |
| Slimesteel | — | — | ✓ | — |
| Soulsteel | — | — | ✓ | — |
| Queen's Slime | — | — | ✓ | — |
| Manasteel | — | — | — | Botania |
| Elementium | — | — | — | Botania/MythicBotany |
| Terrasteel | — | — | — | Botania |
| Alfsteel | — | — | — | MythicBotany |
| Certus Quartz | — | — | — | AE2 |
| Fluix | — | — | — | AE2 |
| Silicon | — | — | — | AE2 |
| Demonite | — | — | — | Blood Magic |
| Ironwood | — | — | — | Twilight Forest |
| Steeleaf | — | — | — | Twilight Forest |
| Knightmetal | — | — | — | Twilight Forest |
| Fiery | — | — | — | Twilight Forest |

## Wichtige Schlussfolgerung

🟢 **Wir dürfen die Mod-eigenen Items nicht einfach anhand ihres Namens gleichsetzen.**

Beispiel:

`immersiveengineering:ingot_steel`  
`mekanism:ingot_steel`  
`tconstruct`-Steel-Material

müssen anhand von **Tags und Rezepten** geprüft werden.

Die nächste Phase muss deshalb eine **Tag-/Recipe-Reconciliation** durchführen.

---

# Noch nicht als final bestätigt

Folgende Punkte sind absichtlich noch offen:

🔵 Welche Mod stellt die kanonische Quelle für gemeinsam genutzte Metalle?

🔵 Welche Items sollen über Forge-Tags als austauschbar gelten?

🔵 Welche Erzblöcke sollen in der Welt tatsächlich generiert werden?

🔵 Welche vorhandenen Ore-Generationen werden deaktiviert oder reduziert?

🔵 Welche Processing-Stufen dürfen denselben Input verarbeiten?

🔵 Welche Nebenprodukte sollen bewusst erhalten bleiben?

🔵 Welche Tinkers-Fluids sollen mit IE/Mekanism-Fluidfamilien verbunden werden?

🔵 Welche Blood-Magic-/Botania-Ressourcen werden als Cross-Mod-Gates verwendet?

---

# Nächster Inventurschritt

**Phase 2: Tag- und Rezept-Reconciliation**

Für jede gemeinsame Materialfamilie werden jetzt die tatsächlichen Tags und Rezeptpfade verglichen:

1. Copper
2. Iron
3. Gold
4. Lead
5. Silver
6. Tin
7. Uranium
8. Steel
9. Bronze
10. Constantan
11. Electrum
12. Aluminum
13. Osmium
14. Nickel
15. weitere gefundene Familien

Danach folgt:

**Phase 3: Ore-/Worldgen-Inventur**

Erst anschließend können wir die eigentliche Erzverteilung des Modpacks sinnvoll festlegen.


# 11. Tag- und Rezept-Reconciliation — Phase 2

**Stand:** 2026-10-07  
**Quelle:** direkte Auswertung der JARs aus `mods_v3.zip`  
**Status:** 🟢 technisch verifiziert / 🟡 Designentscheidungen teilweise noch offen

Diese Phase beantwortet zunächst eine technische Frage: **Welche Mods erkennen welche Materialformen über Forge-Tags, und welche Rezeptsysteme greifen auf diese Tags zu?**

Wichtig: Ein Forge-Tag vereinheitlicht die **Verwendbarkeit als Eingabe**, nicht automatisch die Registry-ID des ausgegebenen Items. Deshalb bleiben z. B. `immersiveengineering:ingot_steel` und `mekanism:ingot_steel` technisch unterschiedliche Items, obwohl beide im Tag `forge:ingots/steel` stehen können.

## 11.1 Gemeinsame Materialfamilien — Ergebnis

| Material | primäre Ressource / Ursprung | weitere Mod-Repräsentationen | Forge-Tag-Schnittstelle | vorläufige kanonische Familie |
|---|---|---|---|---|
| Copper | Vanilla + IE-Erz | Mekanism-Dust, Tinkers-Flüssigkeit/Material | `forge:ingots/copper`, `forge:dusts/copper`, `forge:molten_copper` | 🟢 Vanilla Copper |
| Iron | Vanilla | IE/Mekanism/Tinkers Verarbeitung | `forge:ingots/iron` | 🟢 Vanilla Iron |
| Gold | Vanilla | IE/Mekanism/Tinkers Verarbeitung | `forge:ingots/gold` | 🟢 Vanilla Gold |
| Lead | IE + Mekanism | Tinkers nutzt Tag | `forge:ingots/lead`, `raw_materials/lead`, `ores/lead`, `dusts/lead` | 🟢 gemeinsame Lead-Familie, Item-Duplikate erhalten |
| Silver | IE | Tinkers nutzt Tag | `forge:ingots/silver`, `raw_materials/silver`, `ores/silver`, `dusts/silver` | 🟢 IE Silver |
| Tin | Mekanism | Tinkers nutzt Tag; IE nutzt Tin als Alloy-Eingang | `forge:ingots/tin`, `raw_materials/tin`, `ores/tin`, `dusts/tin` | 🟢 Mekanism Tin |
| Uranium | IE + Mekanism | Tinkers nutzt Tag | `forge:ingots/uranium`, `raw_materials/uranium`, `ores/uranium`, `dusts/uranium` | 🟢 gemeinsame Uranium-Familie |
| Steel | IE + Mekanism | Tinkers nutzt Tag | `forge:ingots/steel`, `dusts/steel` | 🟢 gemeinsame Steel-Familie; IE bleibt Progressionsquelle |
| Bronze | Mekanism + TCIntegrations | IE-Alloy + Tinkers-Alloy | `forge:ingots/bronze`, `dusts/bronze` | 🟡 gemeinsame Bronze-Familie; Ausgabeform noch testen |
| Constantan | IE | Tinkers nutzt Tag | `forge:ingots/constantan`, `dusts/constantan` | 🟢 IE Constantan |
| Electrum | IE | Tinkers nutzt Tag | `forge:ingots/electrum`, `dusts/electrum` | 🟢 IE Electrum |
| Aluminum | IE | Tinkers nutzt Tag | `forge:ingots/aluminum`, `raw_materials/aluminum`, `ores/aluminum`, `dusts/aluminum` | 🟢 IE Aluminum |
| Osmium | Mekanism | Tinkers nutzt Tag; IE verarbeitet Osmium-Tags in Rezepten | `forge:ingots/osmium`, `raw_materials/osmium`, `ores/osmium`, `dusts/osmium` | 🟢 Mekanism Osmium |
| Nickel | IE | Tinkers nutzt Tag | `forge:ingots/nickel`, `raw_materials/nickel`, `ores/nickel`, `dusts/nickel` | 🟢 IE Nickel |

### Technischer Kernbefund

Die Mods sind bereits wesentlich stärker tag-basiert integriert als eine reine Betrachtung der Item-IDs vermuten lässt. Insbesondere Tinkers Construct definiert seine Materialrezepte überwiegend gegen Forge-Tags. Dadurch kann ein späteres Balancing die **gemeinsame Materialfamilie** verändern, ohne sämtliche Tinkers-Rezepte einzeln umzuschreiben.

## 11.2 Material für Material

### Copper

**Tag-Befund:** IE liefert u. a. `forge:dusts/copper`; Mekanism ebenfalls. Die gemeinsame `forge:ingots/copper`-Familie basiert auf dem vorhandenen Copper-System. Tinkers arbeitet mit `forge:ingots/copper` und `forge:molten_copper`.

**Verifizierte Verarbeitungssysteme:**
- IE: Crusher, Arc Furnace, Alloy Smelter, Metal Press, Mineral Mix, Hammer Crushing sowie Vanilla Smelting/Blasting.
- Mekanism: Crushing, Enriching, Combining, Purifying, Injecting, Washing, Dissolution und weitere chemische/mehrstufige Verfahren.
- Tinkers: Ore Melting, Melting, Casting und Alloy-System.

**Designentscheidung:** Copper bleibt eine gemeinsame Grundressource. Mekanism darf zusätzliche Verarbeitung liefern, aber nicht automatisch die Standardroute mit maximalem Ertrag werden.

### Iron

Iron ist die sauberste gemeinsame Basis, da Vanilla bereits die zentrale Itemfamilie stellt.

- IE verarbeitet Iron u. a. über Crusher, Arc Furnace und Blast Furnace.
- Mekanism bietet Crushing/Enriching/Purifying/Injecting usw.
- Tinkers greift für Smeltery/Materialrezepte auf die gemeinsame Iron-Familie zu.

**Designentscheidung:** kein künstliches „IE-Iron“ oder „Mekanism-Iron“ einführen. Die vorhandene Vanilla-Familie bleibt kanonisch.

### Gold

Wie Iron bleibt Gold eine gemeinsame Vanilla-Basis. IE, Mekanism und Tinkers erweitern die Verarbeitung.

**Designentscheidung:** kein Item-Unifying per KubeJS nötig; Balancing erfolgt über die Verarbeitungsausbeute und die Zugänglichkeit der jeweiligen Maschinen.

### Lead

Hier existieren **zwei echte Item-Repräsentationen**:
- `immersiveengineering:ingot_lead`
- `mekanism:ingot_lead`

Beide Mods deklarieren `forge:ingots/lead`. Ebenso existieren die jeweiligen Raw-/Ore-/Dust-Familien.

Tinkers verwendet `forge:ingots/lead` und kann damit grundsätzlich beide Tag-Mitglieder verarbeiten.

**Designentscheidung:** Die beiden Registry-Items werden zunächst nicht gelöscht. Die Materialfamilie wird auf Tag-Ebene vereinheitlicht. Eine spätere KubeJS-Regel kann gezielt eine bevorzugte Ausgabe festlegen.

### Silver

Silver ist praktisch eine IE-Ressource:
- IE besitzt Erz, Raw, Ingot und Dust.
- Tinkers besitzt Verarbeitung über Forge-Tags.
- Mekanism liefert für Silver in dieser Modversion keine eigene Ressource.

**Designentscheidung:** IE ist kanonischer Ursprung.

### Tin

Tin ist Mekanism-kernig:
- Mekanism besitzt Erz, Raw, Ingot und Dust.
- Tinkers verarbeitet Tin über seine Material-/Smeltery-Systeme.
- IE benötigt Tin insbesondere als Alloy-Komponente, besitzt aber keine eigene Tin-Erzfamilie.

**Designentscheidung:** Mekanism bleibt Ursprung; IE und Tinkers konsumieren die gemeinsame Tin-Familie.

### Uranium

IE und Mekanism besitzen jeweils eigene Erz-/Raw-/Ingot-/Dust-Repräsentationen und deklarieren dieselben Forge-Materialfamilien.

Zusätzlich besitzt Mekanism eine wesentlich weitergehende Uranium-Chemie:
- Yellow Cake Uranium
- Uranium Oxide
- Uranium Hexafluoride
- Fissile Fuel
- Nuclear Waste / Spent Nuclear Waste
- Plutonium / Polonium

**Designentscheidung:** Uranium wird auf Erz-/Metall-Ebene gemeinsam behandelt, während die nukleare Chemie exklusiv Mekanism bleibt. Dadurch entsteht kein Grund, IE-Nuklearpfade mit Mekanism-Chemie zu duplizieren.

### Steel

Steel ist die wichtigste technische Reconciliation.

IE:
- Blast Furnace: Iron → Steel + Slag
- Arc Furnace: Iron + Coal Coke Dust → Steel + Slag
- Steel ist in `forge:ingots/steel` und `forge:dusts/steel` vertreten.

Mekanism:
- besitzt eigenes `mekanism:ingot_steel` und `mekanism:dust_steel`.
- verwendet `forge:ingots/steel` für Konvertierungsrezepte.

Tinkers:
- Materialrezept `tools/materials/steel/ingot.json` verwendet `forge:ingots/steel`.
- Smeltery-Melting verwendet ebenfalls `forge:ingots/steel` und erzeugt `tconstruct:molten_steel`.

**Designentscheidung:** Steel ist **eine gemeinsame Materialfamilie**, aber IE bleibt die geplante primäre Herstellung im Progressionssystem. Mekanism darf Steel konsumieren und weiterverarbeiten; eine parallele billige Steel-Erzeugung wird bei der finalen Rezeptbereinigung geprüft.

### Bronze

Bronze ist derzeit die komplizierteste Alloy-Familie:
- IE besitzt Alloy Smelter- und Arc Furnace-Rezepte.
- Mekanism besitzt eigene Bronze-Ingot/Dust-Repräsentationen.
- TCIntegrations besitzt `tcintegrations:bronze_ingot` und ergänzt die Forge-Tags.
- Tinkers besitzt `molten_bronze` sowie Alloy-/Casting-/Melting-Rezepte.

IE Alloy Smelter:
- 3 × `forge:ingots/copper`
- 1 × `forge:ingots/tin`
- Ergebnis: 4 × `forge:ingots/bronze` als Tag-Ausgabe.

Tinkers Alloy:
- 270 mB `forge:molten_copper`
- 90 mB `forge:molten_tin`
- Ergebnis: 360 mB `tconstruct:molten_bronze`.

**Wichtig:** Die statische JAR-Analyse beweist die Tag-Kompatibilität, aber nicht zuverlässig, welches konkrete Item eine Tag-basierte Ausgabe im laufenden Forge-Registry-Kontext auswählt. Das muss in der Testwelt geprüft werden.

**Designentscheidung:** Bronze bleibt eine gemeinsame Familie. Die konkrete kanonische Item-Ausgabe wird erst nach einem Test mit allen geladenen Mods festgelegt.

### Constantan

IE ist der Ursprung:
- Alloy Smelter: 1 Copper + 1 Nickel → 2 Constantan.
- Crafting: 1 Copper Dust + 1 Nickel Dust → 2 Constantan Dust.
- Arc Furnace besitzt ebenfalls einen Alloy-Pfad.

Tinkers besitzt `molten_constantan` und verarbeitet `forge:ingots/constantan`.

**Designentscheidung:** IE Constantan bleibt kanonische Ausgabe.

### Electrum

IE ist der Ursprung:
- Alloy Smelter: 1 Gold + 1 Silver → 2 Electrum.
- Dust Crafting: 1 Gold Dust + 1 Silver Dust → 2 Electrum Dust.
- Arc Furnace besitzt ebenfalls einen Alloy-Pfad.

Tinkers verarbeitet `forge:ingots/electrum` und besitzt `molten_electrum`.

**Designentscheidung:** IE Electrum bleibt kanonisch.

### Aluminum

IE besitzt Erz, Raw, Ingot und Dust. Tinkers verarbeitet die gemeinsame Forge-Familie.

**Designentscheidung:** IE Aluminum bleibt kanonisch. Kein Mekanism-Aluminum hinzufügen.

### Osmium

Mekanism besitzt Erz, Raw, Ingot und Dust und eine umfangreiche Verarbeitungskette. Tinkers besitzt entsprechende Smeltery-/Materialunterstützung.

**Designentscheidung:** Mekanism Osmium bleibt kanonischer Ursprung. IE darf Osmium als fremdes Material konsumieren, ohne eine zweite Erzfamilie zu erzeugen.

### Nickel

IE besitzt Erz, Raw, Ingot und Dust. Tinkers verarbeitet die gemeinsame Familie und verwendet Nickel u. a. für Constantan.

**Designentscheidung:** IE Nickel bleibt kanonisch.

## 11.3 Rezept-Duplikation, die für das spätere Balancing relevant ist

Die Analyse zeigt drei verschiedene Arten von „Duplikation“:

1. **Echte Item-Duplikation:** zwei Mods besitzen unterschiedliche Ingot-IDs, z. B. Lead, Uranium, Steel.
2. **Verarbeitungssynchronisation:** mehrere Mods verarbeiten dieselbe Tag-Familie, z. B. Tinkers + IE Steel.
3. **Alternative Produktionsroute:** dasselbe Material kann über unterschiedliche Maschinen entstehen, z. B. Bronze über IE Alloy Smelter oder Tinkers Smeltery.

Nur Fall 1 erfordert überhaupt eine Entscheidung über Registry-Items. Fälle 2 und 3 sind primär Balancingfragen.

## 11.4 Vorläufige Canonical-Ownership-Matrix

| Familie | Canonical Owner | IE | Mekanism | Tinkers | Zielrolle |
|---|---|---:|---:|---:|---|
| Copper | Vanilla | ✓ | ✓ | ✓ | Basis-/Frühindustrie |
| Iron | Vanilla | ✓ | ✓ | ✓ | Basis-/Maschinenbau |
| Gold | Vanilla | ✓ | ✓ | ✓ | Basis + Elektronik/Magie |
| Lead | IE/Mekanism gemeinsam | ✓ | ✓ | ✓ | Strom, Chemie, Schutz |
| Silver | IE | ✓ | – | ✓ | Alloy/Magie/Elektronik |
| Tin | Mekanism | ✓ Konsument | ✓ | ✓ | frühe/chemische Technik |
| Uranium | IE/Mekanism gemeinsam | ✓ | ✓ | ✓ | Nuklear- und High-Tech-Pfad |
| Steel | IE | ✓ | ✓ | ✓ | industrielles Gate |
| Bronze | gemeinsam | ✓ | ✓ | ✓ | Übergangs-/Maschinenlegierung |
| Constantan | IE | ✓ | – | ✓ | IE-Elektronik |
| Electrum | IE | ✓ | – | ✓ | Energie/Elektronik |
| Aluminum | IE | ✓ | – | ✓ | Leichtbau/IE |
| Osmium | Mekanism | ✓ Konsument | ✓ | ✓ | High-Tech-Metall |
| Nickel | IE | ✓ | – | ✓ | Legierungen |

## 11.5 Was noch **nicht** final entschieden wird

- Entfernung oder Ersetzung doppelter Ingot-Items.
- Exakte KubeJS-Unifizierung von Rezeptausgaben.
- Ertragsmultiplikatoren für Mekanism.
- Welche Maschine pro Material die „effiziente“ Route sein soll.
- Erz-/Worldgen-Mengen.
- Energiepreise der jeweiligen Verarbeitung.
- Byproduct-Balance.

Diese Punkte gehören in `03_ERZGENERATION.md`, `04_VERARBEITUNG.md` und `05_ENERGIE_FLUESSIGKEITEN.md` und werden erst nach Abschluss der Ressourcen-Reconciliation festgelegt.

## 11.6 Nächster Reconciliation-Schritt

Als nächstes werden die **sekundären Ressourcenfamilien** auf dieselbe Weise geprüft:

- Certus Quartz / Fluix / Silicon
- Botania Mana-Materialien
- Elementium / Terrasteel / Alfsteel
- Blood Magic Life Essence / Demonite / Hellforged
- Tinkers Cobalt / Manyullyn / Pig Iron / Slime-Materialien
- Twilight Forest Ironwood / Steeleaf / Knightmetal / Fiery
- Petroleum-/IE-Flüssigkeiten und industrielle Nebenprodukte

Danach kann die finale gemeinsame Ressourcenmatrix erstellt werden.

# Phase 2b — Sekundäre Ressourcenfamilien: Tag- und Rezept-Reconciliation

Stand: 2026-10-07

## 1. AE2: Certus Quartz, Fluix und Silicon

### Certus Quartz
- Forge-Gem-Tag `forge:gems/certus_quartz` enthält in AE2 `ae2:certus_quartz_crystal` und `ae2:charged_certus_quartz_crystal`.
- Forge-Dust-Tag `forge:dusts/certus_quartz` wird für die Silicon-Herstellung verwendet.
- AE2 besitzt eigene Ore-/Deepslate-Ore-Registrierungen und eigene Seed-/Crystal-Stufen.
- **Kanonische Quelle:** AE2.
- **Cross-Mod-Regel:** Certus Quartz darf als spezialisierte AE2-Ressource behandelt werden; kein Ersatz durch ein anderes Quarzmaterial.

### Fluix
- `forge:gems/fluix` enthält `ae2:fluix_crystal`.
- Fluix ist ein AE2-eigenes Endprodukt/Komponentenmaterial, nicht mit Nether Quartz oder Certus gleichzusetzen.
- Applied Botanics verwendet Fluix direkt als Brücke in die Mana-Infrastruktur (`fluix_mana_pool`).
- **Kanonische Quelle:** AE2.
- **Cross-Mod-Rolle:** AE2 ↔ Botania.

### Silicon
- `forge:silicon` enthält `ae2:silicon`.
- AE2 erzeugt Silicon aus `forge:dusts/certus_quartz` per Smelting/Blasting.
- Der Inscriber verwendet `forge:silicon` für Printed Silicon.
- **Kanonische Quelle:** AE2.
- **Progressionsbedeutung:** Certus Quartz ist damit nicht nur Speicher-/Kristallressource, sondern auch Bestandteil des AE2-Komponentenpfades.

### Auffälliger Tag-Befund
Blood Magic definiert zusätzlich `forge:gems/certus_quartz` und `forge:ores/certus_quartz` mit `replace:false` und leerer `values`-Liste. Das fügt aktuell keine eigene Ressource hinzu und darf nicht als zweiter Certus-Produzent interpretiert werden.

## 2. Botania: Manasteel, Elementium, Terrasteel

### Manasteel
- Forge-Ingot-/Nugget-/Storage-Tags vorhanden.
- Botania führt eigene interne Tag-Struktur `botania:manasteel_ingots`.
- Manasteel ist eine Mana-veredelte Ressource und kein generisches Metall.
- **Kanonische Quelle:** Botania.
- **Nicht vereinheitlichen** mit Steel oder anderen technischen Metallen.

### Elementium
- Forge-Ingot-/Nugget-/Storage-Tags vorhanden.
- MythicBotany verwendet `botania:elementium_ingots` als Input für Alfsteel.
- **Kanonische Quelle:** Botania; MythicBotany erweitert die Progression.

### Terrasteel
- Forge-Ingot-/Nugget-/Storage-Tags vorhanden.
- MythicBotany enthält eine eigene Infusion-Rezeptdefinition für Terrasteel als Teil seiner Integration.
- **Kanonische Quelle:** Botania; MythicBotany erweitert/integriert.

## 3. MythicBotany: Dragonstone und Alfsteel

### Dragonstone
- MythicBotany fügt `mythicbotany:dragonstone_ore` hinzu.
- Das Erz wird per Smelting/Blasting zu `botania:dragonstone` verarbeitet.
- `botania:dragonstone` liegt im Forge-Gem-Tag `forge:gems/dragonstone`.
- Damit ist Dragonstone ein gutes Beispiel für eine Ressource, deren **Ore-Quelle aus MythicBotany**, deren **kanonisches Endmaterial aber Botania** ist.

### Alfsteel
- `mythicbotany:alfsteel_ingot` und Nugget.
- Die Infusion benötigt:
  - ein Elementium-Ingot aus `botania:elementium_ingots`
  - einen Dragonstone-Gem aus `botania:dragonstone_gems`
  - Pixie Dust
  - 2.000.000 Mana
- **Kanonische Quelle:** MythicBotany.
- **Progressionsrolle:** explizites High-End-Mana-Material und daher kein früher Ersatz für technische Metalle.

## 4. Blood Magic: Demonite / Hellforged

### Demonite
- `bloodmagic:dungeon_ore` ist die Ore-Quelle.
- Smelting/Blasting führt direkt zu `bloodmagic:ingot_hellforged`.
- Demonite ist damit primär ein Erz-/Zwischenbegriff, während Hellforged das eigentliche Metallprodukt ist.

### Hellforged
- Forge-Tags für Dust/Ingots/Storage existieren.
- Blood-Smeltery stellt umfangreiche Smeltery-Casting-Rezepte für Hellforged bereit.
- Blood-Smeltery besitzt außerdem eine Life-Essence-basierte Alloy-Rezeptdefinition.
- **Kanonische Quelle:** Blood Magic.
- **Cross-Mod-Rolle:** Blood Magic ↔ Tinkers/Blood-Smeltery.

## 5. Tinkers-Sondermetalle

Folgende Materialien besitzen eigene Forge-Ingot-/Nugget-/Storage-Tags und eigene Molten-Fluids:
- Manyullyn
- Pig Iron
- Rose Gold
- Amethyst Bronze
- Hepatizon
- Slimesteel
- Soulsteel
- Queen's Slime

Diese Familien sind **keine globalen Metalle**, sondern Tinkers-eigene Legierungen/Materialien. Ihre Stärke liegt in Materialeigenschaften und Tool-Integration.

### Reconciliation-Regel
- In der Ressourcenmatrix jeweils als eigene Familie führen.
- Rohmaterialien/Inputs über Forge-Tags referenzieren.
- Keine globale Vereinheitlichung auf `forge:ingots/*` mit technischen Metallen.
- Smeltery-/Molten-Fluid-Stufen bleiben Tinkers-dominiert.

## 6. Twilight Forest: Ironwood, Steeleaf, Knightmetal und Fiery

### Ironwood
- `twilightforest:raw_ironwood` wird aus Liveroot + Raw Iron + Gold-Nuggets erzeugt.
- Anschließend Smelting/Blasting zu `twilightforest:ironwood_ingot`.
- Forge-Tags für Ore/Ingots/Storage existieren.
- **Kanonische Quelle:** Twilight Forest.

### Steeleaf
- Eigene Ingot-/Storage-Tags.
- Zusätzlich direkte Tinkers-Tool-Materialintegration vorhanden.
- Trotzdem **keine globale Steel-Familie**: Steeleaf ist ein eigenständiges Twilight-Forest-Material.

### Knightmetal
- Eigene Ore-/Ingot-/Storage-Tags.
- Tinkers besitzt Melting/Casting-/Tool-Materialintegration über Forge-Fluid-Tags.
- **Kanonische Quelle:** Twilight Forest; Tinkers ist Integrationsschicht.

### Fiery
- Fiery Ingot/Essence/Blood sind Twilight-Forest-spezifische Boss-/Dimension-Ressourcen.
- Nicht mit normalem Eisen, Steel oder Blood Magic Life Essence vereinheitlichen.

## 7. Gesamtreconciliation der sekundären Familien

| Familie | Kanonische Quelle | Forge-Tag-Schnittstelle | Cross-Mod-Rolle |
|---|---|---|---|
| Certus Quartz | AE2 | gems/dusts/ores | AE2, Silicon |
| Fluix | AE2 | gems/dusts | AE2 ↔ Applied Botanics |
| Silicon | AE2 | silicon | AE2-Komponenten |
| Manasteel | Botania | ingots/nuggets/storage | Botania ↔ TCIntegrations |
| Elementium | Botania | ingots/nuggets/storage | Botania → MythicBotany |
| Terrasteel | Botania | ingots/nuggets/storage | Botania → MythicBotany |
| Dragonstone | MythicBotany/Botania | gems | MythicBotany High-End |
| Alfsteel | MythicBotany | ingot/nugget | High-End Mana |
| Demonite | Blood Magic | ore | Blood Magic |
| Hellforged | Blood Magic | dusts/ingots/storage | Blood Magic ↔ Tinkers |
| Manyullyn | Tinkers | ingots/nuggets/storage + molten | Tinkers |
| Pig Iron | Tinkers | ingots/nuggets/storage + molten | Tinkers |
| Rose Gold | Tinkers | ingots/nuggets/storage + molten | Tinkers |
| Amethyst Bronze | Tinkers | ingots/nuggets/storage + molten | Tinkers |
| Hepatizon | Tinkers | ingots/nuggets/storage + molten | Tinkers |
| Slimesteel | Tinkers | ingots/nuggets/storage + molten | Tinkers |
| Soulsteel | Tinkers | ingots/nuggets/storage + molten | Tinkers ↔ Blood/Magic context |
| Queen's Slime | Tinkers | ingots/nuggets/storage + molten | Tinkers High-End |
| Ironwood | Twilight Forest | ingots/storage | Twilight Forest ↔ Tinkers |
| Steeleaf | Twilight Forest | ingots/storage | Twilight Forest ↔ Tinkers |
| Knightmetal | Twilight Forest | ingots/storage + molten | Twilight Forest ↔ Tinkers |
| Fiery | Twilight Forest | eigene Material-/Itempfade | Twilight Forest Endgame |

## 8. Designentscheidung für spätere KubeJS-Integration

Sekundäre Materialien werden nicht künstlich zu einer globalen Metallpalette zusammengeführt. Stattdessen werden ihre vorhandenen Forge-Tags als Integrationspunkte verwendet. Rezeptänderungen sollen bevorzugt die **Input-Tags** vereinheitlichen, während die **Output-Items und mod-spezifischen Progressionsmaterialien** erhalten bleiben.

# 13. Ore-/Worldgen-Reconciliation — Phase 3

## 13.1 Verifizierter Ist-Zustand

Die JARs wurden auf tatsächliche Worldgen-Definitionen geprüft. Dabei ist wichtig: Nicht jede Mod legt ihre Erzverteilung als JSON im JAR ab. Mekanism und Immersive Engineering registrieren Teile der Worldgen-Logik über Java-Code; deshalb werden dort vorhandene Erzblöcke und Worldgen-Unterstützung verifiziert, die exakten Spawnparameter aber erst in einer laufenden Testinstanz final bestätigt.

### Twilight Forest
Twilight Forest besitzt explizite `configured_feature`-/`placed_feature`-Definitionen für eine eigene Erzverteilung. Verifiziert sind:

| Erz | Höhe | Anzahl/Placement | Bemerkung |
|---|---:|---:|---|
| Kohle | Y 0–127 | 20 | Clustergröße 17 |
| Eisen | Y 0–63 | 20 | Clustergröße 9 |
| Kupfer | Y 0–96 | 6 | Clustergröße 10, trapezförmige Höhenverteilung |
| Gold | Y 0–31 | 2 | Clustergröße 9 |
| Lapis | Y 0–30 | ohne Count-Angabe | Clustergröße 7 |
| Redstone | Y 0–15 | 8 | Clustergröße 8 |
| Diamant | Y 0–15 | ohne Count-Angabe | Clustergröße 8 |

Diese Definitionen verwenden überwiegend Vanilla-Ore-Blöcke. Sie sind damit **keine neuen Materialfamilien**, sondern eine zweite Bezugsquelle für Vanilla-Ressourcen.

Zusätzlich erzeugt Twilight Forest eigene Ressourcen wie Liveroot über die eigene Worldgen-Struktur. Ironwood/Steeleaf/Knightmetal/Fiery werden nicht als normale Erzadern behandelt, sondern sind an Strukturen, Gegner, Bosse bzw. dimensionseigene Progression gekoppelt.

### Tinkers Construct
Tinkers besitzt Worldgen für seine Slime-Islands (Sky/Earth/Blood/Ender/Clay) und Cobalt als Nether-Ressource. Cobalt ist damit bereits dimensionsgebunden und sollte **nicht** in die Overworld-Erzmatrix verschoben werden.

### AE2
AE2 enthält Worldgen-Unterstützung für Meteoriten; Certus Quartz besitzt eine eigene Overworld-Erzfamilie. Meteoriten sind strukturell von normaler Erzverteilung getrennt.

### Blood Magic
Blood Magic besitzt Worldgen-/Dimension-Infrastruktur und eine eigene Dungeon-Ore-Ressource (`bloodmagic:dungeon_ore`). Diese Ressource ist progressionstechnisch nicht wie ein normales Overworld-Erz zu behandeln.

### MythicBotany
MythicBotany bindet eigene Ressourcen an besondere Strukturen/Dimensionen, insbesondere Andwari-Cave-Inhalte. Diese sollen nicht als gewöhnliche Overworld-Erze behandelt werden.

### Immersive Engineering / Mekanism
Beide Mods bringen eigene Erzfamilien mit. Die vollständige Worldgen-Verteilung ist teilweise code-/konfigurationsseitig registriert und nicht vollständig als Data-Pack-JSON im JAR sichtbar. Die tatsächlichen Spawnwerte müssen daher in einer Testwelt mit dem finalen Modstand geprüft werden, bevor KubeJS-Worldgen-Eingriffe erfolgen.

## 13.2 Konsequenz für die Ressourcenmatrix

Die wichtigste Erkenntnis ist: Wir sollten **nicht jedes Erz überall verfügbar machen**. Stattdessen werden drei Klassen unterschieden:

1. **Basisressourcen** — Overworld: Eisen, Kupfer, Kohle, Gold usw.
2. **Industrie-/Technologieressourcen** — überwiegend Overworld, aber gezielt in ihrer Verfügbarkeit begrenzen: Bauxite/Aluminium, Lead, Nickel, Silver, Tin, Osmium, Uranium, Fluorite.
3. **Progressionsressourcen** — dimension-/boss-/strukturgebunden: Cobalt, Demonite, Twilight-Materialien, Dragonstone, Alfsteel-Zutaten usw.

## 13.3 Geplante Twilight-Forest-Strategie

🟡 **Vorschlag zur weiteren Balance:** Twilight Forest wird zu einer echten zweiten Ressourcenregion, nicht lediglich zu einer Dimension mit zusätzlichen Strukturen.

Geeignet für eine kontrollierte Verlagerung bzw. starke Gewichtung in Twilight Forest sind insbesondere:

- Nickel
- Silver
- Lead
- Aluminium/Bauxite
- eventuell Fluorite

Dabei soll **nicht automatisch die gesamte Overworld-Quelle entfernt** werden. Stattdessen können seltene industrielle Erze in der Overworld deutlich seltener werden und in Twilight Forest als alternative/ergänzende Quelle auftreten.

### Warum das sinnvoll ist

- IE bleibt früh spielbar, weil die grundlegenden Metalle weiterhin verfügbar sind.
- Fortschritt zu fortgeschrittener Industrie verlangt Expeditionen.
- Twilight Forest bekommt eine echte wirtschaftliche Bedeutung.
- Mekanism kann nicht sämtliche seltenen Metalle ausschließlich durch Overworld-Mining bereitstellen.
- AE2-/Mekanism-/IE-Progression wird dadurch mit Exploration verbunden.

## 13.4 Noch nicht entscheiden — Kandidatenmatrix

| Ressource | Overworld | Twilight Forest | Nether | End | Empfehlung |
|---|---|---|---|---|---|
| Iron | 🟢 | 🟢 vorhanden | – | – | Basis-Overworld |
| Copper | 🟢 | 🟢 vorhanden | – | – | Basis-Overworld |
| Gold | 🟢 | 🟢 vorhanden | 🟢 Vanilla | – | Basisressource |
| Coal | 🟢 | 🟢 vorhanden | – | – | Basisressource |
| Lead | 🟢 | 🔵 geplant | – | – | Twilight als Verstärkung |
| Silver | 🟢 | 🔵 geplant | – | – | Twilight als Verstärkung |
| Nickel | 🟢 | 🔵 geplant | – | – | Twilight als Verstärkung |
| Aluminum/Bauxite | 🟢 | 🔵 geplant | – | – | Twilight als Verstärkung |
| Tin | 🟢 | 🔵 optional | – | – | eher Overworld/Mekanism |
| Osmium | 🟢 | 🔵 optional | – | – | eher Overworld/Mekanism |
| Uranium | 🟢 | 🔵 optional | – | – | Overworld, später ggf. Twilight-Alternative |
| Fluorite | 🟢 | 🔵 optional | – | – | seltene Industrie-/Nuklearressource |
| Cobalt | – | – | 🟢 | – | Nether-exklusiv |
| Certus Quartz | 🟢 | – | – | 🔵 Meteoriten/Strukturen | AE2-exklusiver Pfad |
| Demonite | – | – | 🔵 | – | Blood-Magic-/Dungeon-Pfad |
| Ironwood | – | 🟢 | – | – | Twilight-exklusiv |
| Steeleaf | – | 🟢 | – | – | Twilight-exklusiv |
| Knightmetal | – | 🟢 | – | – | Twilight-exklusiv |
| Fiery | – | 🟢 | – | – | Twilight-exklusiv |

## 13.5 Entscheidungsregeln für die spätere Worldgen-Anpassung

🟢 Keine Ressourcenverteilung wird geändert, bevor die tatsächliche Verteilung aller relevanten Mods in einer Testinstanz gemessen wurde.

🟢 Die bestehende Welt darf nicht durch nachträgliche Worldgen-Änderungen beschädigt werden. Änderungen gelten primär für neu generierte Chunks.

🟢 Bereits vorhandene Overworld-Erze bleiben als Bestandsressource erhalten.

🟡 Seltene Industrieerze dürfen als Progressionshebel in Twilight Forest stärker konzentriert werden.

🟡 Twilight Forest soll eine **Alternative bzw. Verstärkung**, nicht zwingend ein harter Zwang für jede einzelne Ressource werden.

🔵 Exakte Verteilung, Vein-Größen und Spawnhäufigkeiten der IE-/Mekanism-Erze müssen noch in der Testwelt erfasst werden.
