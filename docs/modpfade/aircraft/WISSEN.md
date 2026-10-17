# Immersive Aircraft – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-17, Minecraft 1.20.1. Alles aus den JARs und den Configs der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/BfUwZLQdeo3DugNVASvxYh). Ausführliche Texte stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen. Sparsam gebaut (Skill `modpfad-seite-s`).

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Immersive Aircraft | 1.5.0 | `ia=immersive_aircraft` | `immersive_aircraft` | Hauptmod |
| Immersive Aircraft x Immersive Engineering | 1.2 | `iaie=iaie-` | `iaie` | Brücke (Treibstoff) |

## Wo die Quellen liegen

- **Kein Buch.** Ein einziges Advancement `data/immersive_aircraft/advancements/misc/aircraftery.json`: Kriterium Iron Ingot im Inventar, Belohnung alle Rezepte.
- **Rezepte**: `data/immersive_aircraft/recipes`, 27 Stück, alle Werkbank. `RecipeDump` gibt sie vollständig in 27 Zeilen aus; Filter unnötig.
- **Fahrzeugdaten**: `data/immersive_aircraft/aircraft/<gerät>.json` – `properties` (u. a. `fuel`, `durability`, `mass`) und `inventorySlots` (Typen `weapon`, `upgrade`, `boiler`, `booster`, `banner`, `dye`, `inventory`). Plätze gezählt mit `grep -o '"type": *"[a-z_]*"' | sort | uniq -c`.
- **Upgrade-Werte**: `data/immersive_aircraft/aircraft_upgrades/<upgrade>.json`, Bruchteile (−0.75 = −75 %); Anzeige laut Sprachdatei `immersive_aircraft.upgrade.*`.
- **Tags**: `tags/items/aircraft|upgrades|weapons`, `tags/entity_types/water_animals`. iaie: `data/iaie/tags/fluids/fuel.json` (= `#immersiveengineering:drill_fuel`), `tags/items/fuel_tanks.json` (= `immersiveengineering:metal_barrel`), README im JAR.
- **Config der Instanz**: `config/immersive_aircraft.json` (Munition, Schaden, Absturz, `validDimensions`, `fuelList`), `config/iaie-common.toml` (`disableSolidFuel = true`, `biodieselFuelTick = 20`).
- **Nur im Code**: `immersive_aircraft.entity.VehicleEntity.isValidDimension()` – `validDimensions.getOrDefault(dim, true)`, also nicht eingetragene Dimensionen erlaubt. Booster-Item (`InventoryVehicleEntity`, Slot-Klassen unter `immersive_aircraft/screen/slot`) nicht gefunden.
- **Bilder**: 30 flache Item-Texturen unter `textures/item`, alle Geräte und Teile vorhanden; Entities ohne Bild.

## Progression in Kürze

1. Grundteile (ab Iron Ingot): Hull, Sail, Propeller, Boiler, Engine (Engine = Boiler + Blast Furnace + 2 Piston + 3 Cobblestone).
2. Erste Geräte: Gyrodyne (ohne Engine, Muskelkraft), Airship, Biplane, Quadrocopter.
3. Große Geräte: Cargo Airship (aus Airship), Bamboo Hopper (aus 2 Biplane), Warship (aus Cargo Airship + 2 Engine + Industrial Gears).
4. Upgrades: Antrieb (Sturdy Pipes, Steel Boiler, Eco Engine, Nether Engine, Industrial Gears, Enhanced Propeller), Steuerung (drei Gyroskope), Hull Reinforcement, Improved Landing Gear.
5. Waffen: Rotary Cannon, Heavy Crossbow, Bomb Bay, Telescope.

## Schlüsselzahlen

- Treibstoff-Faktor `fuel`: Quadrocopter 0,5, Warship 0,8, Biplane und Cargo Airship 1,25, Bamboo Hopper 1,5; Airship und Gyrodyne ohne Wert.
- Warship `durability 3.0`, 3 Treibstoffplätze, 6 Upgrades, 2 Waffen.
- Upgrades: Nether Engine +40 % Leistung/+30 % Treibstoff (braucht Netherite Ingot), Eco Engine −20 %/−75 %, Steel Boiler +25 %/+50 %, Sturdy Pipes +10 %, Industrial Gears −20 % Treibstoff, Hull Reinforcement +100 % Haltbarkeit.
- Config: Rotary Cannon Schaden 5, Munition je Gunpowder/Arrow/TNT 100, Absturz-Explosion Radius 2 ohne Blockschaden, Reparatur 2,5 % je Klick.

## Pack-Bezug

- Einzige Brücke ist der Treibstoff über iaie: flüssig, im Metal Barrel, aus `#immersiveengineering:drill_fuel` (Biodiesel; mit Petroleum Diesel, Sulfurized Diesel, Kerosene). Siehe `CROSSMOD_AUFFAELLIGKEITEN.md` I4 und IA1–IA3.
- Rezepte nutzen nur Vanilla-Items und `#minecraft:logs`, keine Forge-Tags – Ansatzpunkt für KubeJS, falls Fluggeräte an IE-Stahl oder Teile gebunden werden sollen (Befund, keine Entscheidung).

## Offen

- Welches Item in den Booster-Platz passt (Sprachdatei: „Boost rockets“).
- Ob Blaze Powder (`fuelList` 1200) trotz `disableSolidFuel` noch brennt – im Spiel prüfen.
- Standardwert von `fuel` für Airship und Gyrodyne, Geschwindigkeiten und Lebenspunkte in Spielwerten (Code).
- Verhalten auf Ad-Astra-Planeten (Schwerkraft, Luft) – Flug ist erlaubt, Wirkung nicht ausgelesen.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> aircraft/data.js immersive_aircraft immersiveengineering`.

| Name | ID |
|---|---|
| Hull | `immersive_aircraft:hull` |
| Sail | `immersive_aircraft:sail` |
| Propeller | `immersive_aircraft:propeller` |
| Boiler | `immersive_aircraft:boiler` |
| Engine | `immersive_aircraft:engine` |
| Gyrodyne | `immersive_aircraft:gyrodyne` |
| Airship | `immersive_aircraft:airship` |
| Biplane | `immersive_aircraft:biplane` |
| Quadrocopter | `immersive_aircraft:quadrocopter` |
| Cargo Airship | `immersive_aircraft:cargo_airship` |
| Bamboo Hopper | `immersive_aircraft:bamboo_hopper` |
| Warship | `immersive_aircraft:warship` |
| Sturdy Pipes | `immersive_aircraft:sturdy_pipes` |
| Steel Boiler | `immersive_aircraft:steel_boiler` |
| Eco Engine | `immersive_aircraft:eco_engine` |
| Nether Engine | `immersive_aircraft:nether_engine` |
| Industrial Gears | `immersive_aircraft:industrial_gears` |
| Enhanced Propeller | `immersive_aircraft:enhanced_propeller` |
| Gyroscope | `immersive_aircraft:gyroscope` |
| Advanced Gyroscope | `immersive_aircraft:gyroscope_dials` |
| Electronic Gyroscope | `immersive_aircraft:gyroscope_hud` |
| Hull Reinforcement | `immersive_aircraft:hull_reinforcement` |
| Improved Landing Gear | `immersive_aircraft:improved_landing_gear` |
| Rotary Cannon | `immersive_aircraft:rotary_cannon` |
| Heavy Crossbow | `immersive_aircraft:heavy_crossbow` |
| Bomb Bay | `immersive_aircraft:bomb_bay` |
| Telescope | `immersive_aircraft:telescope` |
| Metal Barrel | `immersiveengineering:metal_barrel` |

1 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
