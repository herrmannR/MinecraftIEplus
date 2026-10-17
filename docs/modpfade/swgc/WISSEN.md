# Star Wars: Galaxy in a Cube – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-14, Minecraft 1.20.1. Daten und Klassen des JARs der Testinstanz, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/18k191oT3stvg7zEjZJsHx). Ausführliche Texte stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen; Pack-Planung in `docs/17_STAR_WARS_1.20.1.md`.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Star Wars: Galaxy in a Cube | 1.0.3.1 | `swgc=swgc` | `swgc` | Hauptmod, keine Abhängigkeiten außer Forge |

## Wo die Quellen liegen

- **Kein Buch, keine sichtbaren Advancements.** Reihenfolge der Seite = Abhängigkeiten der Rezepte.
- **Daten**: `data/swgc/recipes/` (35; davon 3 `swgc:fabrication` für den Droid Fabricator), `worldgen/`, `tags/` (Entities `swgc:civilians`, `swgc:innocent`; Items `swgc:blasters`, `swgc:assembly_bench_blasters`; Biome `spawns_jawas`; Damage `takes_extra_stamina`), `loot_tables/`, `structures/` (7, u. a. Ewok Village). `advancements/` enthält nur Rezept-Freischaltungen.
- **Fast alle Mechanik steht im Code** (`che/swgc/…`), gelesen mit `javap -c -p`; Vanilla-Namen hinter SRG-Kürzeln über die Mapping-Dateien der Instanz (`libraries/de/oceanlabs/mcp/mcp_config/…-mappings-merged.txt` + `libraries/net/minecraft/client/…-mappings.txt`). Fundstellen:
  - Assembly Bench: `inventory/AssemblyBenchMenu`, `block/AssemblyBenchBlock`
  - Gas Harvester: `block/entity/GasHarvesterBlockEntity` (Zähler bis 400, Nether/End doppelt)
  - Macht: `force/ForceUser`, `ForceSkill`, `ForceAction`, `LightsaberForm`, `StaminaFunction`; Hooks in `SwgcHooks`; Spielregel `forceObtainment`
  - Kyber färben: `item/lightsaber/kyber/{KyberCrystalItem,RedKyberCrystalItem,KyberColor}`, `client/gui/KyberCrystalScreen`; Vorkommen `levelgen/feature/KyberCrystalFeature`
  - Lichtschwerter: `item/lightsaber/{LightsaberItem,LightsaberHiltItem,LightsaberConnectorItem,LightsaberVariant,DoubleLightsaberItem,DarkSaberItem}`
  - Holocrons `item/HolocronItem`, Credits `item/CreditItem`
  - Mobs: `entity/{Jawa,TuskenRaider,Anzellan}`, Stammes-Spawn `TuskenTribeSpawner`
  - Droid Fabricator: `block/entity/DroidFabricatorBlockEntity`, `crafting/FabricationRecipe`
  - Registrierungen: `platform/ForgeRegisters`, `SwgcComponents`

## Progression in Kürze

1. **Rohstoffe und Werkbank**: Kyber Crystal (Block, Overworld, alle Biome, ~1 Versuch je 16 Chunks, Höhe Unterkante +4 bis +112; abgebaut farblos) → Gas Harvester (2 Block of Iron, 3 Redstone, 2 Kupfer, Glas, Eisen; kein Strom, 20 s je Füllung) + Empty Gas Vessel → Tibanna Vessel → Plastoid (Tibanna + 3 Kohle), Durasteel (4 Eisen + 1 Diamant → 4) → Assembly Bench (Rezepte im Code).
2. **Waffen**: Blaster (Assembly Bench: Diamant + Plastoid + Durasteel; 7 Modelle wählbar; Munition Tibanna Vessel). Lightsaber Hilt (Gold + 2 Eisen) + **farbiger** Kyber → Lightsaber (36 Griffdesigns). Connector → Doppelschwert. Force Pike, Ewok Spear (Werkbank).
3. **Die Macht**: helle Seite durch XP-Gewinn (Chance sinkt, Zufall > 0,984^Punkte), dunkle durch Töten von `swgc:civilians` (1:3) bzw. `swgc:innocent` (1:5). Fähigkeiten nach Summe: Block 0, Telekinesis 1, Jump 15, Push 30, Mind Trick 42; Unlimited Power bei dunkler Seite ≥ 55. Kyber färben: Blau/Grün/Rot ab Macht 1 (Verhältnis hell:dunkel), Violett/Orange/Gelb/Pink ab 30; Weiß nur aus Rot bei hell ≥ 50, dunkel ≤ 10. **Ohne Macht kein Lichtschwert.** Acht Lichtschwert-Formen mit Stamina-Werten.
4. **Truppen und Rüstungen**: Droid Fabricator → B-1 (mit Blaster), B-2, Droideka (Metallblöcke, Redstone, Diamant; kein Strom). Klonrüstung (24 Plastoid, 16 Bemalungen per Assembly Bench), Jedi/Sith-Kleidung (Wolle, Faden), Royal Guard (10 Durasteel), Vader (18 Durasteel, Obsidian).

## Funde für die Questtexte (2026-10-17)

- **Assembly Bench, Verbrauch** (`AssemblyBenchMenu$ResultSlot`, javap): je Zusammenbau 1 Item aus dem Hauptfeld und 1 aus jedem Nebenfeld. Ein Lightsaber im Ergebnisfeld legt Griff und Kristall in die Felder zurück (Zerlegen, 🔵 im Spiel prüfen). Der Name des Items wird übernommen. Rezeptwahl über `tableswitch` 0–3 (Hilt, Lightsaber, Blaster, Connector), sonst Rüstungsvarianten.
- **Droiden-Items**: `swgc:b1`, `swgc:b2`, `swgc:droideka` (Ergebnisse der `swgc:fabrication`-Rezepte; Sprachschlüssel nur als `entity.swgc.*`). Im B-1-Rezept zeigt `"weapon":3` auf die Zutat Blaster. Zeit in Rezept-Einheiten, vermutlich Ticks.
- **Klonrüstung**: `swgc:clone_phase_2_{helmet,chestplate,leggings,boots}`; Bemalungen per Sprachmuster `clone.swgc.<einheit>` („501st Legion %s“), IDs der bemalten Teile nicht ausgelesen.
- Weitere Rüstungsteile: `swgc:royal_guard_{leggings,boots}`, `swgc:vader_{leggings,boots}`, `swgc:jedi_male_{leggings,boots}`, `swgc:sith_male_{helmet,leggings,boots}`, `swgc:jedi_female_*`, `swgc:sith_female_*`.

## Schlüsselzahlen

- Jedi-Ränge (hell ab): 10 / 24 / 42 / 54 / 72; Sith-Ränge (dunkel ab): 8 / 18 / 40 / 55 / 70.
- Fabricator-Zeit: B-1 160, B-2 240, Droideka 200.
- Credits: 2 Kupfer = Copper Credit; 5 Copper = Iron Credit; 3 Iron = Gold Credit. Nur der Anzellan nimmt Credits.
- Jawa-Preise: Lichtschwert zufällig 28–56 Emeralds, Blaster aus Schaden und Magazin.
- Tusken-Stämme alle 6000–18000 Ticks in Biomen mit Wüstendorf.

## Pack-Bezug

- Vollständig ab der ersten Spielstunde erreichbar (Eisen, Kupfer, Redstone, ein paar Diamanten), an keine Stufe eines anderen Mods gebunden.
- Trägt nichts in `forge:`-Tags ein (Durasteel ist kein `forge:ingots`) → kein anderer Mod verarbeitet seine Werkstoffe. Ansatzpunkt für Einbindung: Rezepte von Plastoid, Durasteel, Gas Harvester, Droid Fabricator (`swgc:fabrication`) per KubeJS; Assembly-Bench-Rezepte stehen im Code, nicht in Rezeptdateien (ob KubeJS sie erreicht, ist nicht geprüft).
- Überschneidung mit Star Wars Planets, siehe `swplanets/WISSEN.md`.
- **Kein JEI-Plugin** (JAR ohne JEI-Klassen, geprüft 2026-10-17): Lichtschwerter, Griffe, Blaster und Bemalungen wie die 501st-Rüstung (Assembly Bench, im Code), das Färben der Kyber-Kristalle (eigener Bildschirm) und die Droiden (`swgc:fabrication`) erscheinen nie in JEI. Sichtbar sind nur die 32 Werkbank-Rezepte (u. a. Klon-, Jedi-, Sith-, Royal-Guard- und Vader-Rüstung, Plastoid, Durasteel, Assembly Bench, Droid Fabricator). Für Spieler muss das Questbuch diese Wege erklären.

## Ohne Rezept und ohne Fundort

AT-RT, AT-ST, Delta-7B, Clone, Darksaber, Double-bladed Glaive, Jedi/Sith Holocron (nur Kreativ). Nur von Mobs: Jawa Blaster, Tusken Pike, Ewok Staff. Obese-Wan Carbobi: Klasse vorhanden, nicht registriert.

## Offen

- Werte der Blaster, Lichtschwerter, Rüstungen; Wechsel/Freischaltung der Formen; Kosten der Macht-Fähigkeiten; Form des Kyber-Vorkommens; Drops der Mobs; Preise des Anzellan; Fahrzeuge.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> swgc/data.js swgc` aus den Sprachschlüsseln. Viele Waffen und Rüstungen haben in `data.js` kein Bild und tauchen dort nur mit Namen auf; ihre IDs stehen trotzdem unten, sofern die Sprachdatei sie kennt.

| Name | ID |
|---|---|
| Kyber Crystal | `swgc:kyber_crystal` |
| Gas Harvester | `swgc:gas_harvester` |
| Empty Gas Vessel | `swgc:empty_gas_vessel` |
| Tibanna Vessel | `swgc:tibanna_vessel` |
| Plastoid | `swgc:plastoid` |
| Durasteel Ingot | `swgc:durasteel_ingot` |
| Assembly Bench | `swgc:assembly_bench` |
| Lightsaber Hilt | `swgc:lightsaber_hilt` |
| DC-15A | `swgc:dc15a` |
| DC-15S | `swgc:dc15s` |
| DC-17 | `swgc:dc17` |
| DH-17 | `swgc:dh17` |
| E-5 | `swgc:e5` |
| TL-50 | `swgc:tl50` |
| Amban Sniper Rifle | `swgc:amban_sniper_rifle` |
| Lightsaber | `swgc:lightsaber` |
| Lightsaber Connector | `swgc:lightsaber_connector` |
| Double-bladed Lightsaber | `swgc:double_lightsaber` |
| Force Pike | `swgc:force_pike` |
| Ewok Spear | `swgc:ewok_spear` |
| Jedi Holocron | `swgc:jedi_holocron` |
| Sith Holocron | `swgc:sith_holocron` |
| Block | `tconstruct:fake_storage_block` |
| Blue Kyber Crystal | `swgc:blue_kyber_crystal` |
| Green Kyber Crystal | `swgc:green_kyber_crystal` |
| Red Kyber Crystal | `swgc:red_kyber_crystal` |
| Violet Kyber Crystal | `swgc:violet_kyber_crystal` |
| Orange Kyber Crystal | `swgc:orange_kyber_crystal` |
| Yellow Kyber Crystal | `swgc:yellow_kyber_crystal` |
| Pink Kyber Crystal | `swgc:pink_kyber_crystal` |
| White Kyber Crystal | `swgc:white_kyber_crystal` |
| Droid Fabricator | `swgc:droid_fabricator` |
| Jedi Male Robe | `swgc:jedi_male_2_chestplate`, `swgc:jedi_male_chestplate` |
| Sith Male Mantle | `swgc:sith_male_2_chestplate`, `swgc:sith_male_chestplate` |
| Royal Guard Helmet | `swgc:royal_guard_helmet` |
| Royal Guard Robe | `swgc:royal_guard_chestplate` |
| Vader Helmet | `swgc:vader_helmet` |
| Vader Chestplate | `swgc:vader_chestplate` |
| Copper Credit | `swgc:copper_credit` |
| Iron Credit | `swgc:iron_credit` |
| Gold Credit | `swgc:gold_credit` |
| Darksaber | `swgc:darksaber` |
| Double-bladed Glaive | `swgc:double_bladed_glaive` |
| Jawa Blaster | `swgc:jawa_blaster` |
| Tusken Pike | `swgc:tusken_pike` |
| Ewok Staff | `swgc:ewok_staff` |

49 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
