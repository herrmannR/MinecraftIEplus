# 02 — RESSOURCEN

> ⚠️ **Stand 1.18.2, noch nicht auf 1.20.1 geprüft.** Seit 2026-10-11 gilt Minecraft 1.20.1 mit geänderter Mod-Liste (`16_MODLISTE_1.20.1.md`). Dieses Dokument wird beim Neustart der Analyse überarbeitet; Einstieg und TODO-Liste: `00_STATUS.md`.

## Zweck

Master-Inventar aller relevanten Ressourcen, Materialien, Erze, Zwischenprodukte, Flüssigkeiten, Gase und magischen Ressourcen — sowie die Festlegung, welche Mod für eine Materialfamilie „kanonisch“ ist.

## Datenbasis

- Quelle: die JARs in `mods/` der Instanz (identisch mit `mods_v3.txt`).
- Ausgewertet: `assets/*/lang`, Item-/Block-Modelle und Blockstates, `data/*/recipes`, `data/*/tags`, `data/*/worldgen`.
- Registry-IDs sind versionsbezogene Befunde aus diesen JARs.
- 🟢 Stichproben am 2026-10-07 erneut gegen die JARs geprüft (Erzblöcke, Ingots, Lead-Tags, Bronze-Rezept, Blood-Magic-Certus-Tag).
- 🔵 Der KubeJS-Tag-Dump `kubejs/exported/tags` ist veraltet (19.03.2026, vor Mekanism/Blood Magic) und wird in der Testinstanz neu erzeugt, bevor Tag-Skripte geschrieben werden.

Rein dekorative Blöcke, Werkzeuge ohne eigene Materialökonomie und Utility-Gegenstände werden nicht als Ressourcenfamilien gezählt. Worldgen-Daten stehen in `03_ERZGENERATION.md`.

---

# Teil 1 — Inventur pro Mod

## Immersive Engineering (`ImmersiveEngineering-1.18.2-8.4.0-161.jar`)

**Erze** (jeweils + Deepslate-Variante):
`immersiveengineering:ore_aluminum` (Bauxite), `ore_lead`, `ore_nickel`, `ore_silver`, `ore_uranium`

> ❗ Korrektur: IE besitzt **kein** Kupfererz. Kupfer stammt ausschließlich aus Vanilla.

**Raw:** `raw_aluminum`, `raw_lead`, `raw_nickel`, `raw_silver`, `raw_uranium` (+ Raw-Blöcke)

**Metalle/Legierungen:** Aluminium, Copper (Verarbeitung), Lead, Nickel, Silver, Uranium, Steel, Constantan, Electrum — als Ingots, Nuggets, Dust, Plates, Rods, Storage Blocks.

**Weitere Materialien:** HOP Graphite, Coal Coke, Coke Dust, Sulfur, Saltpeter/Nitrate Dust, Sawdust, Slag.

**Flüssigkeiten:** `immersiveengineering:creosote`, `plantoil`, `biodiesel`, `redstone_acid`

**Rolle:** 🟢 industrielle Grundschicht: Erz → Grit/Dust → Metall/Legierung → Komponenten → Maschinen.

## Immersive Petroleum (`ImmersivePetroleum-1.18.2-4.1.0-21.jar`)

**Flüssigkeiten:** `immersivepetroleum:crude_oil`, `diesel`, `diesel_sulfur`
**Weitere:** `petcoke_dust`, `paraffin_wax` (im Tag `forge:wax`), Lubricant
**Rolle:** 🟢 eigene Flüssigkeits-/Energieökonomie: Crude Oil → Destillation → Diesel/Nebenprodukte.

## Mekanism (`Mekanism-1.18.2-10.2.5.465.jar`)

**Erze** (jeweils + Deepslate): `mekanism:lead_ore`, `osmium_ore`, `tin_ore`, `uranium_ore`, `fluorite_ore`
**Raw:** `raw_lead`, `raw_osmium`, `raw_tin`, `raw_uranium`
**Ingots:** Bronze, Lead, Osmium, Steel, Tin, Uranium, Refined Glowstone, Refined Obsidian
**Legierungen:** Infused, Reinforced, Atomic Alloy
**Verarbeitungsstufen** (Dirty Dust, Clump, Shard, Crystal, Dust) für Copper, Gold, Iron, Lead, Osmium, Tin, Uranium.
**Weitere:** Fluorite, Salt, Lithium, Yellow Cake Uranium, Enriched Carbon/Diamond/Gold/Iron/Redstone/Tin/Refined Obsidian.
**Gase:** Hydrogen, Oxygen, Chlorine, Hydrogen Chloride, Ethylene, Brine, Lithium, Sodium, Steam, Water Vapor, Sulfur Dioxide/Trioxide, Sulfuric Acid, Uranium Oxide/Hexafluoride, Fissile Fuel, Nuclear Waste, Spent Nuclear Waste, Plutonium, Polonium, Antimatter, Superheated Sodium, Osmium.

**Mekanism Generators:** Energieerzeugung inkl. nuklearem Pfad (Details in `05_ENERGIE_FLUESSIGKEITEN.md`).

## Tinkers Construct (`TConstruct-1.18.2-3.7.2.167.jar`)

**Erz:** `tconstruct:cobalt_ore` (Nether), `raw_cobalt`
**Nutzt gemeinsame Metalle** über Forge-Tags: Aluminum, Copper, Iron, Gold, Lead, Silver, Tin, Osmium, Uranium, Steel, Bronze, Brass, Constantan, Electrum, Obsidian.
**Eigene Materialien:** Cobalt, Manyullyn, Amethyst Bronze, Hepatizon, Pig Iron, Rose Gold, Knightslime, Slimesteel, Soulsteel, Queen's Slime.
**Slime-Ressourcen:** Earth-/Sky-/Ender-Slime, Ichor; Slime Crystals, Congealed Slime, Slime-Fluids.
**Molten Fluids** für alle oben genannten Metalle sowie Diamond, Emerald, Quartz, Refined Glowstone/Obsidian, Platinum, Blood, Blazing Blood.
**Rolle:** 🟢 eigenes Material-/Werkzeugsystem, kein Erzverarbeitungs-Addon.

**TCIntegrations:** bringt u. a. eigenes Bronze (`tcintegrations:bronze_ingot`, Nugget, Block) und verbindet Tinkers mit Materialien anderer Mods (Details folgen in `04_VERARBEITUNG.md`).
**Tinkers Levelling Addon:** keine Ressourcen, nur Tool-Progression.

## Botania (`Botania-1.18.2-435.jar`)

**Materialien:** Manasteel, Elementium, Terrasteel, Gaia Spirit/Ingot, Mana Diamond, Mana Pearl, Pixie Dust, Mana Powder, Mana Infused String, Dragonstone, Livingrock, Livingwood.
**Quartz-Varianten:** Blaze, Smokey, Elven, Lavender, Mana, Red, Sunny Quartz — nicht gleich Vanilla Nether Quartz.
**Runen:** Air, Earth, Fire, Water, Mana, Spring, Summer, Autumn, Winter, Lust, Gluttony, Greed, Sloth, Wrath, Envy, Pride.
**Rolle:** 🟢 eigene magische Ökonomie; Mana ist kein Item.

## MythicBotany (`MythicBotany-1.18.2-2.1.14.jar`)

**Erze:** `mythicbotany:dragonstone_ore`, `elementium_ore`, `gold_ore` — generiert in der Dimension **Alfheim** (`mythicbotany:alfheim`).
**Raw:** `raw_elementium`
**High-End:** `alfsteel_ingot`, `alfsteel_nugget`
**Runen:** Alfheim, Asgard, Helheim, Jötunheim, Midgard, Muspelheim, Nidavellir, Niflheim, Vanaheim.
**Weitere:** Blood of Kvasir, Mead of Kvasir.
**Rolle:** 🟢 High-End-Erweiterung der Botania-Progression.

## Blood Magic (`BloodMagic-1.18.2-3.2.6-41.jar`)

**Erz:** `bloodmagic:dungeon_ore` (Demonite) — im **Demon Dungeon** (`bloodmagic:dungeon`).
**Materialien:** Hellforged Ingot, Corrupted Dust, Sulfur.
**Hauptressource:** `bloodmagic:life_essence_fluid`.
**Rolle:** 🟢 eigene Ökonomie um Life Essence; Demonite/Hellforged sind keine normalen Tech-Metalle.

**Blood-Smeltery:** verbindet Blood Magic mit der Tinkers-Smeltery (Hellforged-Casting, Life-Essence-Alloy).

## Applied Energistics 2 (`appliedenergistics2-forge-11.7.6.jar`)

**Certus:** `ae2:quartz_ore`, `deepslate_quartz_ore`, `certus_quartz_crystal`, `charged_certus_quartz_crystal`, `certus_quartz_dust`, `certus_crystal_seed`
**Fluix:** `fluix_crystal`, `fluix_dust`, `fluix_pearl`, `fluix_crystal_seed`, Fluix Block
**Weitere:** `silicon`, `printed_silicon`, `sky_dust`, `ender_dust`; Engineering/Calculation/Logic-Komponenten, Formation/Annihilation Core, Quartz Fiber.
**Inscriber-Pressen:** nur aus Meteoriten.

**Applied Mekanistics:** Brücke Mekanism-Gase ↔ AE2, keine eigenen Erze.
**Applied Botanics:** Mana ↔ AE2 (Fluix Mana Pool, Mana Cells, Mana P2P).

## Twilight Forest (`twilightforest-1.18.2-4.1.1494-universal.jar`)

**Materialien:** Ironwood (Raw Ironwood aus Liveroot + Raw Iron + Gold-Nuggets), Steeleaf, Knightmetal (Armor Shards), Fiery Ingot/Essence/Blood, Borer Essence.
**Rolle:** dimensionsgebundene Spezialmaterialien, nicht mit normalen Metallen vereinheitlichen.

## Sonstige

| Mod | Ressourcenrelevanz |
|---|---|
| Farmer's Delight | Straw, Organic Compost, Rich Soil, Nahrung (spätere Food-/Organic-Matrix) |
| Nethers Delight | Magma Gelatin, Hoglin-Rohstoffe, Rich Soul Soil |
| Bonsai Trees 3 | automatisierte Holz-/Pflanzenproduktion (Organic-/Fuel-Matrix) |
| Storage Drawers, Backpacks | nur Lagerung |
| Immersive Aircraft, More Immersive Wires, Immersive Posts | keine eigene Ressourcenfamilie |
| Wesley's Roguelike Dungeons | Loot, eigene Dungeon-Dimension (siehe `03_ERZGENERATION.md`) |

---

# Teil 2 — Gemeinsame Materialfamilien (Tag-/Rezept-Reconciliation)

## Grundbefund

🟢 Ein Forge-Tag vereinheitlicht die **Verwendbarkeit als Eingabe**, nicht die Registry-ID der Ausgabe. `immersiveengineering:ingot_lead` und `mekanism:ingot_lead` bleiben verschiedene Items, liegen aber beide in `forge:ingots/lead` (verifiziert).

🟢 Tinkers definiert seine Materialrezepte überwiegend gegen Forge-Tags. Balancing kann deshalb über die gemeinsamen Familien laufen, ohne jedes Tinkers-Rezept umzuschreiben.

## Kanonische Quellen (Canonical Ownership)

| Familie | Kanonisch | IE | Mekanism | Tinkers | Zielrolle |
|---|---|:-:|:-:|:-:|---|
| Copper | Vanilla | Verarbeitung | ✓ | ✓ | Basis/Frühindustrie |
| Iron | Vanilla | ✓ | ✓ | ✓ | Basis/Maschinenbau |
| Gold | Vanilla | ✓ | ✓ | ✓ | Basis + Elektronik/Magie |
| Lead | IE + Mekanism (doppelt) | ✓ | ✓ | ✓ | Strom, Chemie, Schutz |
| Silver | IE | ✓ | – | ✓ | Alloy/Magie/Elektronik |
| Tin | Mekanism | Konsument | ✓ | ✓ | frühe/chemische Technik |
| Uranium | IE + Mekanism (doppelt) | ✓ | ✓ | ✓ | Nuklear/High-Tech |
| Steel | IE (Progressionsquelle) | ✓ | ✓ | ✓ | industrielles Gate |
| Bronze | gemeinsam (IE, Mekanism, TCIntegrations, Tinkers) | ✓ | ✓ | ✓ | Übergangslegierung |
| Constantan | IE | ✓ | – | ✓ | IE-Elektronik |
| Electrum | IE | ✓ | – | ✓ | Energie/Elektronik |
| Aluminum | IE | ✓ | – | ✓ | Leichtbau |
| Osmium | Mekanism | Konsument | ✓ | ✓ | High-Tech-Metall |
| Nickel | IE | ✓ | – | ✓ | Legierungen |

## Wichtige Einzelbefunde

**Steel** — IE: Blast Furnace (Iron → Steel + Slag), Arc Furnace (Iron + Coke Dust). Mekanism hat eigenes `ingot_steel`/`dust_steel`. Tinkers schmilzt `forge:ingots/steel` zu `tconstruct:molten_steel`.
→ 🟢 eine gemeinsame Familie, IE bleibt primäre Herstellung. 🔵 Billige Parallelwege (Mekanism) bei der Rezeptbereinigung prüfen.

**Bronze** — IE Alloy Smelter: 3 `forge:ingots/copper` + 1 `forge:ingots/tin` → 4 × `forge:ingots/bronze` (Ausgabe über Tag, verifiziert). Tinkers: 270 mB Copper + 90 mB Tin → 360 mB `molten_bronze`. Dazu Mekanism- und TCIntegrations-Bronze.
→ 🔵 Welches Item ein Tag-Output konkret liefert, wird in der Testinstanz geprüft; danach eine kanonische Ausgabe festlegen.

**Uranium** — auf Erz/Metall-Ebene gemeinsam; die gesamte Nuklearchemie (Yellow Cake, UF₆, Fissile Fuel, Waste, Plutonium, Polonium) bleibt 🟢 exklusiv Mekanism.

**Constantan / Electrum** — IE Alloy Smelter 1+1 → 2 (Copper+Nickel bzw. Gold+Silver), Dust-Crafting analog. 🟢 IE kanonisch.

**Blood Magic Certus-Tags** — Blood Magic definiert `forge:gems/certus_quartz` und `forge:ores/certus_quartz` mit leerer Werteliste (verifiziert). Kein zweiter Certus-Produzent.

## Arten von Duplikation

1. **Echte Item-Duplikation** (Lead, Uranium, Steel, Bronze) → Entscheidung über bevorzugte Ausgabe nötig.
2. **Verarbeitungssynchronisation** (mehrere Mods verarbeiten dieselbe Tag-Familie) → Balancing.
3. **Alternative Produktionsrouten** (Bronze über IE oder Tinkers) → Balancing.

---

# Teil 3 — Sekundäre Familien

| Familie | Kanonisch | Tag-Schnittstelle | Cross-Mod-Rolle |
|---|---|---|---|
| Certus Quartz | AE2 | gems/dusts/ores | AE2, Silicon |
| Fluix | AE2 | gems/dusts | AE2 ↔ Applied Botanics |
| Silicon | AE2 (`forge:silicon`, aus Certus Dust geschmolzen) | silicon | AE2-Komponenten |
| Manasteel | Botania | ingots/nuggets/storage | nicht mit Steel vereinheitlichen |
| Elementium | Botania | ingots/nuggets/storage | → Alfsteel |
| Terrasteel | Botania | ingots/nuggets/storage | → MythicBotany |
| Dragonstone | Erz MythicBotany → `botania:dragonstone` | gems | → Alfsteel |
| Alfsteel | MythicBotany | ingot/nugget | Elementium + Dragonstone + Pixie Dust + 2.000.000 Mana |
| Demonite → Hellforged | Blood Magic | dusts/ingots/storage | Blood Magic ↔ Tinkers |
| Manyullyn, Pig Iron, Rose Gold, Amethyst Bronze, Hepatizon, Slimesteel, Soulsteel, Queen's Slime | Tinkers | ingots/nuggets/storage + molten | nur Tinkers |
| Ironwood, Steeleaf, Knightmetal | Twilight Forest | ingots/storage (+ molten) | TF ↔ Tinkers |
| Fiery | Twilight Forest | eigene Itempfade | TF-Endgame |

🟢 **Integrationsregel:** Sekundäre Materialien werden nicht zu einer globalen Metallpalette zusammengeführt. Rezeptänderungen vereinheitlichen bevorzugt **Input-Tags**; Output-Items und mod-spezifische Progressionsmaterialien bleiben erhalten.

---

# Offene Punkte

🔵 Bevorzugte Ausgabe für Lead, Uranium, Steel, Bronze (Test in der Testinstanz).
🔵 Welche Tinkers-Fluids mit IE-/Mekanism-Fluidfamilien verbunden werden.
🔵 Welche Blood-Magic-/Botania-Ressourcen als Cross-Mod-Gates dienen (→ Phase 2).
🔵 Neuer Tag-Dump in der Testinstanz.
