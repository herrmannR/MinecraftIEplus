# 15 — RAUMFAHRT

## Zweck

Design der Raumfahrt als **Hauptziel des Packs**: Beyond Earth + Star Wars Planets, eingebettet in die bestehenden Pfade.

## Grundentscheidungen

🟢 **Raumfahrt ist ein Hauptziel des Modpacks** (Entscheidung 2026-10-07).

🟢 Mods (geplant, noch nicht installiert):
- **Beyond Earth** (Forge, 1.18.2) — Raketen, Planeten, Sauerstoff, Rover
- **Star Wars Planets** (Beyond-Earth-Addon, 1.18.2) — u. a. Tatooine, Kamino, Endor, Hoth, Mustafar
- **Beyond Earth: Giselle Addon** (1.18.2) — Integration mit Mekanism und IE

🟢 **Energie und Treibstoff kommen ausschließlich aus anderen Mods.** Eigene Energie- und Treibstoffproduktion von Beyond Earth wird deaktiviert (Rezepte entfernt) bzw. ersetzt.

🟢 Ad Astra ist für 1.18.2 Forge keine Option. Star Wars Planets ist gesetzt → Beyond Earth (trotz eingestellter Pflege).

### Entscheidungen 2026-10-07

1. 🟢 **Sauerstoff** kommt aus Mekanism (z. B. Electrolytic Separator), **sofern sich das technisch sinnvoll umsetzen lässt** (🔵 prüfen: nimmt der Oxygen Loader Mekanism-Sauerstoff an, ggf. über Giselle Addon?). Sonst bleibt der Beyond-Earth-Oxygen-Loader mit Mekanism-Energie.
   - 🟢 **Umsetzung 2026-10-11 (🔵 Test offen):** Mekanism ist für Sauerstoff zwingend. Die Wasser-Rezepte von Oxygen Loader und Oxygen Bubble Distributor sind entfernt; beide nehmen nur noch **flüssigen Mekanism-Sauerstoff** (`mekanism:oxygen`, Tag `forge:oxygen`). Kette: Wasser → Electrolytic Separator → Sauerstoffgas → Rotary Condensentrator → flüssiger Sauerstoff. Vorläufige Werte: 1 mB → 5 Sauerstoff (Loader) bzw. 4 (Distributor). Skript: `kubejs/server_scripts/crossmod/space_oxygen.js`.
   - Technische Grundlage: Die Rezepttypen `beyond_earth:oxygen_loader` und `beyond_earth:oxygen_bubble_distributor` akzeptieren beliebige Fluids per `name` oder `tag` (`FluidIngredient`); der Eingangstank hat keinen Filter.
   - Bekannte Lücken: Mekanism-Rezept `gas_conversion/flint_to_oxygen` (Sauerstoff aus Feuerstein, bleibt ein Mekanism-Weg; 🔵 behalten oder entfernen?). Das Giselle-MekaSuit-Atemmodul füllt die Oxygen Can laut Beschreibung bei Regen/im Wasser selbst auf (erst im Mekanism-Endgame, wird hingenommen).
   - 🔵 Optional: Mekanism-Bauteil ins Rezept des Oxygen Tanks (z. B. Basic Chemical Tank oder HDPE).
   - JAR-Befund 2026-10-08 (Ausgangslage): Oxygen Loader und Bubble Distributor haben nur das Rezept „aus Wasser“. Mekanism-Sauerstoff wird nicht angenommen. Mekanism-Anbindung nur über das Giselle-MekaSuit-Atemmodul oder ein eigenes Rezept (🔵 prüfen, ob der Recipe-Type andere Fluids erlaubt).
2. 🟢 **Erster Raumflug (Mond)** nach Petroleum; zusätzlich ist mindestens eine erste Mekanism-Maschine Pflicht (im Raketen- oder Launchpad-Rezept bzw. über Komponenten).
3. 🟢 **Mond = Hauptquelle für Osmium und Certus.** In der Overworld beides reduziert (siehe `03_ERZGENERATION.md`).
4. 🟢 **Treibstoff-Tiers:** IE bleibt auch später nötig, Mekanism wird auf jeden Fall gebraucht. **Star-Wars-Planeten** benötigen zwingend **Magie-Komponenten** und **Uran-Erzeugnisse** (Mekanism-Nuklearkette).
5. 🟢 **Planeten-Metalle** bekommen Mekanisms Mehrfach-Erzverarbeitung, sofern es zum Spiel passt (Balancing in Phase 3).

## Bekannte Fakten (Webrecherche, 🔵 noch gegen die JARs zu prüfen)

- Beyond Earth wird nicht mehr weiterentwickelt (Nachfolger: Ad Astra / Stellaris, nicht für 1.18.2). Bugs der 1.18.2-Version bleiben → gründlicher Test in der Testinstanz nötig.
- Star Wars Planets gibt es in zwei Linien: für **Beyond Earth** (1.18.x, Forge) und für **Ad Astra**. Wir brauchen die Beyond-Earth-Version; die passende Beyond-Earth-Version muss abgeglichen werden.
- Giselle Addon:
  - IE: Metal-Press-Form „Compressing“ (Barren → Compressed-Platten), Arc-Furnace-Recycling zurück zu Barren
  - IE-Biodiesel als Treibstoff für Fuel Loader, Rover und Raketen
  - Mekanism: Crushing-Rezepte für Planetengestein, Oxygen Loader kann Mekanism-Items (z. B. Scuba Tank) mit Sauerstoff füllen

## Regel „Energie/Treibstoff nur aus anderen Mods“ — Umsetzungsentwurf

| Beyond-Earth-Element | Umgang | Ersatzquelle | Status |
|---|---|---|---|
| Fuel Refinery (Öl → Fuel) | Rezept entfernen oder Fuel nur über andere Mods erzeugen | IE Petroleum (Diesel/Destillation), IE Biodiesel | 🔵 |
| Eigener Generator (Kohle) | Rezept entfernen | IE / Mekanism Generators | 🔵 |
| Solar Panel | Rezept entfernen | Mekanism Solar | 🔵 |
| Compressor | Rezept entfernen | IE Metal Press + Giselle-Compressing-Mold | 🔵 |
| Oxygen Loader / Oxygen Bubble Distributor | bleiben; Wasser-Rezept ersetzt | flüssiger Mekanism-Sauerstoff (Electrolytic Separator + Rotary Condensentrator) | 🟢 Skript, 🔵 Test |
| Fuel Loader | bleibt (nur Befüllung, keine Produktion) | — | 🔵 |
| Eigener Stahl | per Tags mit IE-Stahl vereinheitlichen | IE Steel | 🔵 |

🟢 Geklärt (2026-10-08): Raketen akzeptieren den Tag `beyond_earth:vehicle_fuel`; Giselle hängt Diesel und Biodiesel bereits ein (siehe „Progressionsweg der Mods“).

## Progressionsvorschlag (🔵 Entwurf, in Phase 2 festzulegen)

Pfad H — Raumfahrt, kreuzt die Pfade B, C, D und E:

| Stufe | Ziel | Kreuzungspunkte (Vorschlag) |
|---|---|---|
| Rakete T1 → Mond | erster Raumflug; **Osmium + Certus in Menge**, Desh | 🟢 IE Steel, Metal Press (Compressing), Diesel aus IE Petroleum, **erste Mekanism-Maschine** |
| Rakete T2 → Mars | Ostrum (Triebwerk braucht Desh-Platte vom Mond) | IE-Treibstoff, durch Mekanism veredelt (z. B. Chemical Infuser/Oxidizer); Mekanism-Ausbau mit Mond-Osmium |
| Rakete T3 → Merkur/Venus | Calorite (Venus) | Mekanism-Chemie + weiterhin IE-Komponenten (Refinery, Arc Furnace) |
| Rakete T4 → Glacio / Star-Wars-Planeten | Star-Wars-Inhalte (Beskar, Kyber), Prestige | 🟢 **Magie** (Botania/MythicBotany, Blood Magic) **+ Uran-Erzeugnisse** (z. B. Polonium/Plutonium aus der Mekanism-Nuklearkette) |

🔵 Treibstoff-Idee (Entwurf): T1 = IE-Diesel; ab T2 ein eigener KubeJS-Treibstoff, hergestellt in IE und Mekanism im Wechsel (z. B. Diesel → Mekanism-Veredelung → IE Mixer/Refinery). 🟢 JAR-Befund: Beyond Earth unterscheidet **keine** Treibstoffe pro Tier (ein Fluid-Tag für alle Raketen). Ein eigener KubeJS-Treibstoff würde für alle Tiers gleichermaßen gelten. Das Gating muss daher über die Rezepte von Rakete, Triebwerk und Tanks laufen (z. B. T2+-Triebwerk mit Mekanism-Bauteil).

🟢 JAR-Befund: Alle Star-Wars-Planeten verlangen T4, genau wie Glacio. Magie-/Uran-Pflicht für Star Wars lässt sich nur über T4-Bauteile durchsetzen und gilt dann auch für Glacio. Wenn Glacio früher erreichbar sein soll, wäre ein Eingriff in die Planetenauswahl nötig (nicht per KubeJS-Rezept lösbar).

## Installierter Stand (🟢 verifiziert 2026-10-07, Testinstanz startet)

- `Beyond-Earth-1.18.2-6.2.jar`, `StarWarsPlanets-1.15.jar`, `Beyond-Earth-Giselle-Addon-1.18.2-2.20.jar`
- **Nicht** Beyond Earth 7.0-SNAPSHOT (inkompatibel mit beiden Addons) und **nicht** Beyond Planets Core / Planeteer Machines (siehe `00_MODBASIS.md`).
- Dimensionen: Mond, Mars, Merkur, Venus, Glacio (je + Orbit); Tatooine, Kamino, Endor, Hoth (`hot`), Mustafar, Mandalore (je + Orbit).

## Progressionsweg der Mods (🟢 aus JARs verifiziert 2026-10-08)

Stand **ohne** unsere Anpassungen. Quelle: Rezepte in den JARs und `javap` der Planetenauswahl (`PlanetSelectionGuiWindow.checkTier`, SWP `PlanetSelectionGuiEvents`).

### Raketen-Tier → Ziele

| Rakete | Ziele | Erze |
|---|---|---|
| T1 | Mond (+ Orbit) | Desh, Cheese, Ice Shard, Iron *(+ unser Osmium/Certus)* |
| T2 | Mars (+ Orbit) | Ostrum, Diamond, Iron, Ice Shard |
| T3 | Merkur **und** Venus (+ Orbits) | Merkur: Iron · Venus: Calorite, Coal, Gold, Diamond |
| T4 | Glacio **und alle 6 Star-Wars-Planeten** | Glacio: Vanilla-Erze · Kyber (Tatooine, Kamino, Endor, Mustafar), Beskar (Mandalore) |

Star Wars Planets prüft für alle sechs Planeten fest `checkTier(4)`. Eine Abstufung innerhalb der Star-Wars-Planeten gibt es nicht.

### Stufe 0 — Overworld-Vorbereitung (nur Eisen/Stahl)

- Stahl: IE-Stahl über `#forge:ingots/steel`; **Beyond Earth erlaubt zusätzlich Stahl aus Eisen im Blast Furnace** (`steel_ingot_blasting`).
- Eisenplatten: BE-Hammer, IE Metal Press (Platte), Thermal.
- **Compressed Steel** (zentrales Bauteil): BE-Compressor oder IE Metal Press mit Giselle-Form `mold_compressing` (IE-Bauplan „Molds“, 3 Stahlplatten + Wirecutter).
- Raumanzug: Oxygen Mask (Eisenhelm + Platten + Glas), Space Suit (2 Oxygen Tanks + Oxygen Gear + Stahl + Platten), Space Pants, Space Boots (Wolle + Platten).
- Sauerstoff: Oxygen Loader, Oxygen Bubble Distributor (Loader + Engine Fan), Water Pump. **Einziges Sauerstoff-Rezept: aus Wasser** (`oxygen_loading/from_water`, `oxygen_bubble_distributing/from_water`).
- Infrastruktur: NASA Workbench (4 Compressed Steel, Werkbank, Stahl, Hebel, Redstone-Fackel), Rocket Launch Pad (Stahl + Platten), Fuel Loader (Giselle: Stahl, Platten, Eimer).

**Treibstoff:** Raketen und Rover nehmen den Fluid-Tag `beyond_earth:vehicle_fuel`. Giselle hängt dort `#forge:diesel`, `#forge:biodiesel`, `#forge:biofuel` und `thermal:refined_fuel` ein. → IE-Biodiesel und IP-Diesel funktionieren ohne Anpassung. **Es gibt keine Treibstoff-Tiers** (ein Tag für alle Raketen).

### Raketen-Rezepte (NASA Workbench)

Aufbau jeder Rakete: Nose Cone + 6 Rumpf + 2 Tanks + 4 Flossen + 1 Triebwerk.

| | Rumpf (6×) | Tanks (2×) | Triebwerk |
|---|---|---|---|
| T1 | Compressed Steel | Steel Tank | Steel Engine |
| T2 | Compressed Desh | Desh Tank | Desh Engine |
| T3 | Compressed Ostrum | Ostrum Tank | Ostrum Engine |
| T4 | Compressed Calorite | Calorite Tank | Calorite Engine |

- Nose Cone, Rocket Fin, Engine Frame und Engine Fan bestehen bei allen Tiers aus Stahl (Fin zusätzlich Compressed Steel).
- Tanks: 4 Barren des Tier-Metalls + 4 Stahl. Triebwerke: 2 Barren Tier-Metall + Stahl + Eisenplatte + Engine Fan + Engine Frame + Redstone + Platte.
- **Alle Triebwerke ab T2 brauchen eine Desh-Platte** → der Mond bleibt dauerhaft relevant.
- ⚠️ Auffälligkeit: In T2–T4 liegt je Flossenseite ein **Eimer** statt der zweiten Flosse. Vermutlich ein Fehler im Mod; 🔵 in der Testinstanz prüfen.

### Weitere Inhalte

- **Raumstation** (Orbit): 6 Desh-Barren, 16 Stahl, 12 Eisenplatten, 4 Desh-Platten.
- **Rover**: Stahl, Eisenplatte, Ofen, Eimer, Truhe, Lapis, 2 Wheels (Stahl, Slime, schwarzer Farbstoff). Nutzt denselben Treibstoff.
- **Netherite-Raumanzug**: Anzugteile + Netherite im Schmiedetisch.
- **Gefahren**: Merkur/Venus setzen in Brand, Venus hat Säureregen (`death.attack.venus.acid`). 🔵 Schutzwirkung des Netherite-Anzugs in der Testinstanz prüfen.
- **Giselle-Schutz**:
  - Mekanism-MekaSuit-Module: Space Breathing (Space Suit + Infused Alloy + HDPE), Gravity Normalizing (Space Boots + Infused Alloy + HDPE), Space Fire Proof (Compressed Ostrum + Reinforced Alloy + **Polonium-Pellets**), Venus Acid Proof (Compressed Calorite + Reinforced Alloy + **Polonium-Pellets**).
  - Entsprechende Verzauberungsbücher (Anzugteil bzw. Compressed Ostrum/Calorite + Planetengestein) und PneumaticCraft-Upgrades.
  - Oxygen Can (Eisenplatten + Eisenstab) als Sauerstoffquelle für das Atemmodul; Gravity Normalizer (Block).
- **Star-Wars-Belohnungen**:
  - Lichtschwert: Light Saber Base (Kyber + Eisen), dann je Farbe ein **Beacon** (→ Nether Star/Wither).
  - Darksaber: 2 Beskar + Stock.
  - Stormtrooper-Rüstung aus Plastic Plates; diese entstehen nur durch Schmelzen von `beyond_earth:oil_bucket`. Da die Ölquellen abgeschaltet sind, fehlt dafür eine Quelle (🔵 Alternative per KubeJS).
  - Speeder: kein Rezept.
- Giselle-Kompatibilität außerdem: Mekanism Enriching (Ice-Shard-Erz → 4 Ice Shards), Crushing/Inscriber für Sky Stone, Thermal Press/Pulverizer/Refinery, IF Laser Drill (Desh/Ostrum/Calorite/Cheese/Öl).

### Abkürzungen, die mit unseren Regeln kollidieren

| Element | Konflikt | Status |
|---|---|---|
| Stahl im Blast Furnace (`steel_ingot_blasting`) | umgeht IE-Stahl | 🔵 entfernen |
| Compressor (+ Giselle Advanced Compressor) | ersetzt durch IE Metal Press + Compressing Mold | 🔵 entfernen |
| Coal Generator, Solar Panel | eigene Energie | 🔵 entfernen |
| Fuel Refinery (+ Thermal-Refinery-Rezept Öl → Fuel) | eigener Treibstoff | 🔵 entfernen |
| Giselle Electric Blast Furnace | 🔵 prüfen, was sie verarbeitet | 🔵 |

## Worldgen aus den JARs (🟢 verifiziert)

**Planeten-Erze (Beyond Earth, fest im Code):**

Werte per `javap` aus `OreGeneration` ausgelesen (2026-10-08): Adern/Chunk × Adergröße, Höhenbereich. Mond beginnt bei Y 0, alle anderen Planeten bei Y −64. Teile der Höhenbereiche liegen unter dem Weltboden und fallen weg.

| Planet | Erz | Adern × Größe | Y |
|---|---|---|---|
| Mond | **Desh** | 7 × 9 | −80…80 (effektiv 0…80, ~3,5 Adern) |
| Mond | Cheese | 20 × 10 | −80…192 |
| Mond | Ice Shard | 8 × 10 | −32…32 (effektiv 0…32) |
| Mond | Iron | 10 × 11 | −24…56 |
| Mond | *Osmium (unser KubeJS)* | 16 × 9 | 0…128 |
| Mond | *Certus (unser KubeJS)* | 12 × 7 | 0…96 |
| Mars | **Ostrum** | 6 × 8 | −80…80 |
| Mars | Diamond | 7 × 7 | −80…80 |
| Mars | Iron | 10 × 11 | −24…56 |
| Mars | Ice Shard | 8 × 10 | −32…32 |
| Merkur | Iron | 20 × 8 | −80…192 |
| Venus | **Calorite** | 6 × 8 | −80…80 |
| Venus | Coal | 20 × 17 | −80…192 |
| Venus | Gold | 4 × 10 | −64…32 |
| Venus | Diamond | 7 × 9 | −80…80 |
| Glacio | Coal / Copper / Iron / Lapis | 20×17 / 16×17 / 10×12 / 2×9 | (+ Deepslate-Varianten) |
| Glacio | Ice Shard | 8 × 10 | −32…32 |
| Tatooine | **Kyber** (Sandstein) | 8 × 5 | −80…100 |
| Kamino, Endor, Mustafar | **Kyber** (nur in Deepslate) | 8 × 5 | −80…100 |
| Mandalore | **Beskar** (Sandstein) | 8 × 5 | −1…160 |
| Hoth | – (keine Erze) | | |

Star Wars Planets: Strukturen AT-AT, AT-ST, AT-ACT, Tatooine-Häuser. Das Addon trägt außerdem `swplanets:kamino_ocean` in die Ölquellen-Biome von Beyond Earth ein; unser Override (`replace: true`) schaltet auch diese ab.

Grafische Übersicht aller Erze: `docs/erzatlas/` (Live-Seite siehe dortige README).

**Overworld-Strukturen von Beyond Earth** (betreffen neue Overworld-Chunks):
- **Meteor**: Wald, Dschungel, Taiga, Wüste, Ebenen, Savanne. 🟢 Bleibt (2026-10-07).
- **Oil Well**: Ozeane, Tiefsee, Sumpf. 🟢 **Abgeschaltet** (2026-10-07), weil sie eine kostenlose Ölquelle wären. Immersive Petroleum bleibt die einzige Ölquelle. Umsetzung: `kubejs/data/beyond_earth/tags/worldgen/biome/has_structure/oil_well_biomes.json` (`replace: true`, leere Liste). 🔵 Wirkung in der Testinstanz prüfen. Das gilt nur für neue Chunks; in der Hauptwelt muss die Datei **vor dem ersten Start mit Beyond Earth** beim Host liegen.

**Fehler im Addon:** Die Loot-Tabelle `swplanets:chests/empire_chests` ist kaputt (`minecraft:steak` gibt es nicht) → Imperiums-Truhen bleiben leer. Lässt sich per Datapack/KubeJS-Override reparieren.

## Auswirkungen auf die bestehende Welt

- Planeten sind neue Dimensionen → kein Retrogen nötig.
- 🔵 Prüfen, ob Beyond Earth oder Star Wars Planets Erze/Strukturen in der **Overworld** generieren (dann Retrogen-/Worldgen-Frage).
- Neue Metalle (Desh, Ostrum, Calorite, ggf. Star-Wars-Materialien) → Erzmatrix (`14_ERZ_MOD_MATRIX.md`), Verarbeitung (`04_VERARBEITUNG.md`), Tags (`02_RESSOURCEN.md`).

## Offene Fragen

1. 🔵 Wie verhält sich Immersive Aircraft dazu (bleibt Atmosphären-Transport)?
2. 🔵 Welche Magie-Komponenten genau für Star-Wars-Planeten (z. B. Terrasteel, Gaia Spirit, Alfsteel, Blood-Orb-Tier)?
3. 🟢 Sauerstoff/Treibstoff-Tiers aus JARs geklärt (2026-10-08): keine Treibstoff-Tiers, Sauerstoff im Original nur aus Wasser → Gating über Rezepte. Sauerstoff ist seit 2026-10-11 auf Mekanism umgestellt (siehe Entscheidung 1).
4. 🔵 Eimer statt Flosse in den T2–T4-Rezepten: Fehler oder Absicht? Ggf. per KubeJS korrigieren.
5. 🔵 Quelle für `beyond_earth:oil_bucket` (Plastic Plates/Stormtrooper-Rüstung), seit die Ölquellen abgeschaltet sind.

## Nächste Schritte

1. Passende Versionen von Beyond Earth, Star Wars Planets und Giselle Addon für 1.18.2 heraussuchen und abgleichen.
2. In der Testinstanz installieren, Start und Log prüfen.
3. Inhalte aus den JARs erfassen (Rezepte, Fluids, Tags, Worldgen).
4. Pfad H in die Phase-2-Meilensteine aufnehmen.

## Quellen

- https://www.curseforge.com/minecraft/mc-mods/Beyond-Earth
- https://www.curseforge.com/minecraft/mc-mods/space-bosstools-giselle-addon
- https://metamods.net/en/mods/star-wars-planets-be
