# 15 — RAUMFAHRT

## Zweck

Design der Raumfahrt als **Hauptziel des Packs** auf Minecraft 1.20.1: Ad Astra mit Addons, eingebettet in die bestehenden Pfade.

> Stand 2026-10-11, neu geschrieben für Ad Astra. Die frühere Fassung für Beyond Earth (1.18.2) liegt im Git-Verlauf (Commit `f4b3de5`).
> 🟢 „aus JAR“ = am 2026-10-11 aus den JARs und Configs der Instanz `Minecraft1201withForge` gelesen. Im Spiel getestet ist davon nichts, außer wo es ausdrücklich steht.

## Mods

| Mod | Version | Rolle | Status |
|---|---|---|---|
| Ad Astra | 1.15.21 | Raketen, Planeten, Sauerstoff, Temperatur, Schwerkraft, Rover | 🟢 |
| Ad Astra: Giselle Addon | 6.27 | Fuel Loader, Automation NASA Workbench, Rocket Sensor, Oxygen Can, Schutz-Module für MekaSuit und Tinkers | 🟢 |
| Star Wars Planets (Ad-Astra-Version) | 1.4.6.1 | Tatooine, Hoth, Endor, Mustafar, Mandalore; Kyber, Beskar | 🟢 |
| Ad Astra: More Structures | 1.0.2 | Dungeons und Bosse auf den Ad-Astra-Planeten | 🟢 |
| Mekanism: Ad Astra Ores | 1.1.0 | nur die Erzblöcke in Planetengestein; Generierung abgeschaltet | 🟢 |
| Ad Astra: Rocketed | 1.0.5 | Raketen T5–T7 | 🟢 bleibt (2026-10-13): Star-Wars-Planeten verlangen mindestens T5 und T6; 🔵 Zuordnung und Rezepte offen (`18_STORY.md`) |
| Star Wars: Galaxy in a Cube | 1.0.3.1 | Lichtschwerter, Macht, Klone, Droiden | 🟢 siehe `17_STAR_WARS_1.20.1.md` |

Pflicht-Bibliotheken von Ad Astra: Resourceful Lib, Resourceful Config, Botarium.

## Grundentscheidungen

🟢 **Raumfahrt ist ein Hauptziel des Modpacks** (2026-10-07).

🟢 **Energie, Treibstoff und Sauerstoff kommen ausschließlich aus anderen Mods** (IE, Immersive Petroleum, Mekanism). Eigene Erzeuger von Ad Astra werden entfernt oder ersetzt (2026-10-07, gilt weiter).

🟢 **Sauerstoff zwingend aus Mekanism** (2026-10-11): Wasser → Electrolytic Separator → Sauerstoffgas → Rotary Condensentrator → flüssiger Sauerstoff.

🟢 **Erster Raumflug (Mond)** nach Petroleum; zusätzlich ist mindestens eine erste Mekanism-Maschine Pflicht (2026-10-07).

🟢 **Star-Wars-Planeten** verlangen **Magie-Komponenten** und **Uran-Erzeugnisse** aus der Mekanism-Nuklearkette (2026-10-07).

🟢 **Die Erzverteilung legen wir selbst fest** (2026-10-11). Fremde Erz-Generierung auf den Planeten wird abgeschaltet.

🟢 **Planeten-Metalle** bekommen Mekanisms Mehrfach-Erzverarbeitung, sofern es zum Spiel passt (Balancing in Phase 3).

🟡 **Blood-Magic-Dungeon nur auf dem Merkur** (Entwurf des Users vom 2026-10-11, Planet entschieden am 2026-10-12): Das Ritual zum Dungeon gelingt nur auf dem Merkur. Im Dungeon gibt es ein Pflicht-Item für die T4-Rakete (🔵 welches). Technische Grundlage: Blood Magic meldet Ritual-Aktivierungen als abbrechbares Ereignis (`RitualEvent$RitualActivatedEvent`, im JAR vorhanden); 🔵 ob KubeJS es abfangen kann, ist nicht getestet.

## Planeten (🟢 aus JAR)

Planeten sind in Ad Astra Datapack-Dateien (`data/<mod>/planets/*.json`). Stufe, Sauerstoff, Temperatur und Schwerkraft lassen sich per Override ändern.

| Planet | Raketenstufe | Sauerstoff | Temperatur | Schwerkraft | System |
|---|---|---|---|---|---|
| Erde | 1 | ja | 15 °C | 9,81 | Sonnensystem |
| Mond | 1 | nein | −173 °C | 1,62 | Sonnensystem |
| Mars | 2 | nein | −65 °C | 3,72 | Sonnensystem |
| Merkur | 3 | nein | 167 °C | 3,70 | Sonnensystem |
| Venus | 3 | nein | 464 °C, Säureregen | 8,87 | Sonnensystem |
| Glacio | 4 | **ja** | −20 °C | 3,72 | Proxima Centauri |
| Tatooine | 4 | ja | 25 °C | 9,81 | Outer Rims |
| Endor | 4 | ja | 15 °C | 9,81 | Outer Rims |
| Mustafar | 4 | ja | 25 °C | 9,81 | Outer Rims |
| Hoth (`swplanets:hot`) | 4 | ja | −10 °C | 9,81 | Outer Rims |
| Mandalore | 4 | ja | **−160 °C** | 3,0 | Outer Rims |

- Jeder Planet hat einen eigenen Orbit (gleiche Stufe, kein Sauerstoff, −270 °C). Dort lässt sich eine Raumstation bauen.
- **Kamino gibt es in der Ad-Astra-Version nicht.**
- Alle Star-Wars-Planeten haben Sauerstoff. Auf den meisten braucht man also keinen Raumanzug; Mandalore ist extrem kalt.
- 🟢 Anders als in Beyond Earth ist die Stufe kein fester Code-Wert. Die Star-Wars-Planeten lassen sich einzeln auf andere Stufen legen (z. B. über T4 hinaus, siehe „Ad Astra: Rocketed“).
- Config `ad_astra.jsonc`: `launchAnywhere = false` (Raketen starten nur von Planeten), `disabledPlanets` blendet Planeten aus, `atmosphereLeave = 600`.

## Raketen (🟢 aus JAR)

NASA Workbench: Nose Cone + 6 **Blöcke** des Stufenmetalls + 2 Tanks + 4 Flossen + 1 Triebwerk.

| Stufe | Rumpf (6×) | Tanks (2×) | Triebwerk |
|---|---|---|---|
| T1 | Stahlblock | Steel Tank | Steel Engine |
| T2 | Desh-Block | Desh Tank | Desh Engine |
| T3 | Ostrum-Block | Ostrum Tank | Ostrum Engine |
| T4 | Calorite-Block | Calorite Tank | Calorite Engine |

- **Tanks und Triebwerke bauen aufeinander auf:** Der Desh Tank braucht einen Steel Tank, der Ostrum Tank einen Desh Tank usw.; genauso bei den Triebwerken. Jede höhere Rakete verbraucht also die Bauteile aller Stufen darunter.
- Nose Cone, Flossen, Engine Frame und Fan bestehen bei allen Stufen aus Stahlplatten und Stahlstäben.
- Weitere Bauteile: NASA Workbench (Stahlplatten, Stahlblock, Eisenstäbe, Werkbank, Redstone-Fackeln), Launch Pad (Stahlplatten, Stahlstäbe).
- Rover: Desh-Triebwerk, Desh-Block, Desh-Platte, Large Gas Tank, Radio, Räder.
- Raumstation je Orbit: z. B. Erde/Mond 64 Eisenplatten, 32 Stahl, 32 Desh, 32 Desh-Platten; Mars mit Ostrum, Merkur/Venus/Glacio mit Calorite.

### Materialien und Anbindung an IE

Ad Astra nimmt fremde Materialien über Tags an. 🟢 Aus JAR:

- `ad_astra:steel_ingots`, `steel_blocks`, `steel_plates`, `steel_rods`, `iron_plates`, `iron_rods` enthalten jeweils das `forge:`-Tag. **IE-Stahl, IE-Platten und IE-Stäbe gelten ohne Anpassung.**
- Für Desh, Ostrum und Calorite bringt Ad Astra selbst IE-Rezepte mit: Platten in der Metal Press und mit dem Engineer's Hammer (`data/immersiveengineering/recipes/metalpress/plate_desh.json` usw. im Ad-Astra-JAR; 🟢 im Spiel bestätigt am 2026-10-13). Wenn der Compressor entfällt, ist nichts weiter nötig. (Korrektur: Die frühere Angabe „keine IE-Pressrezepte“ war falsch.)

## Treibstoff (🟢 aus JAR)

**Jede Stufe hat ein eigenes Fluid-Tag**, das standardmäßig auf `#ad_astra:fuel` zeigt:
`ad_astra:tier_1_rocket_fuel`, `tier_2_rocket_fuel`, `tier_3_rocket_fuel`, `tier_4_rocket_fuel`, `tier_1_rover_fuel`.

`#ad_astra:fuel` enthält von Haus aus:

| Fluid | Quelle | In der Instanz vorhanden |
|---|---|---|
| `ad_astra:fuel` | Ad Astra Fuel Refinery (aus Öl, 5 mB → 5 mB) | ja |
| `ad_astra:cryo_fuel` | Ad Astra Cryo Freezer (aus Eis) | ja |
| `#forge:diesel` | Immersive Petroleum: `diesel` **und** `diesel_sulfur` | ja |
| `#forge:biodiesel` | Immersive Engineering: `biodiesel` | ja |
| `#forge:biofuel`, `#forge:fuel` | (Giselle hängt weitere Mods ein) | nein |

- `ad_astra:efficient_fuel` enthält nur Cryo Fuel (sparsamer Treibstoff).
- **IE-Biodiesel und IP-Diesel funktionieren ohne Anpassung in jeder Rakete**, auch der ungereinigte schwefelhaltige Diesel.
- ⚠️ `#ad_astra:oil` enthält `#forge:crude_oil`. Die Fuel Refinery macht also aus **Immersive-Petroleum-Rohöl direkt Raketentreibstoff**, ohne Destillation.
- 🔵 Verbrauch pro Start: In `ad_astra.jsonc` gibt es dafür keinen Schalter. Die Mengen müssen im Spiel abgelesen werden.
- Fuel Loader (Giselle): 8.000 mB, Reichweite 2 Blöcke.

### 🟢 Treibstoff je Raketenstufe (Entscheidung 2026-10-12)

Jede Stufe verlangt einen Schritt mehr in der Industrie.

| Stufe | Treibstoff | Fluid | Herkunft |
|---|---|---|---|
| T1 | Biodiesel | `immersiveengineering:biodiesel` | IE Refinery |
| T2 | entschwefelter Diesel | `immersivepetroleum:diesel` (nicht `diesel_sulfur`) | Immersive Petroleum: Destillation + Hydrotreater |
| T3 | Kerosin | `immersivepetroleum:kerosene` | Immersive Petroleum |
| T4 | eigener Raketentreibstoff | 🔵 neues KubeJS-Fluid | Kerosin plus Mekanism-Chemie; Rezept offen |

Umsetzung (Block D): je Stufe eine Tag-Datei `ad_astra:tier_N_rocket_fuel` mit `replace: true`. 🔵 Zu klären: Rezept und Kosten des T4-Treibstoffs; Treibstoff des Rovers (`tier_1_rover_fuel`, Vorschlag: wie T1); ob Cryo Fuel entfernt wird oder Zutat des T4-Treibstoffs wird (User: später); Treibstoff für T5–T7, falls „Rocketed“ bleibt.

⚠️ Folge: Die Entscheidung vom 2026-10-07 „erster Raumflug nach Petroleum“ passt nicht mehr von selbst, weil T1 mit Biodiesel fliegt. 🔵 Klären, ob Petroleum vor T1 Pflicht bleiben soll (dann über ein Bauteil) oder erst ab T2 gilt.

## Sauerstoff (🟢 aus JAR)

- `ad_astra:oxygen_loading` hat zwei Rezepte: **Wasser** (100 mB → 4 mB Sauerstoff) und **`#ad_astra:oxygen`** (25 mB → 25 mB).
- `#ad_astra:oxygen` enthält `#forge:oxygen`, und Mekanism trägt dort `mekanism:oxygen` ein. **Flüssiger Mekanism-Sauerstoff funktioniert im Oxygen Loader ohne Anpassung.**
- Für die Mekanism-Pflicht muss nur das Wasser-Rezept `ad_astra:oxygen_from_oxygen_loading_water` entfernt werden. 🔵 Skript noch nicht geschrieben.
- Oxygen Distributor versorgt abgedichtete Räume (bis 6.000 Blöcke laut Config). Bricht die Abdichtung, entsteht ein Luftwirbel.
- Giselle: Oxygen Can (500 mB) und Netherite Oxygen Can (1.000 mB) als tragbare Reserve, als Curio tragbar.

### Wesen ohne Sauerstoff

Ad Astra steuert über Entity-Tags, wer wo überlebt: `ad_astra:lives_without_oxygen`, `can_survive_extreme_cold`, `can_survive_extreme_heat`, `can_survive_in_space`, `can_survive_in_acid_rain`.

⚠️ **More Structures überschreibt diese fünf Tags mit `replace: true`.** Eigene Einträge (z. B. für Star-Wars- oder Alex's-Mobs-Wesen) müssen danach geladen werden, sonst gehen sie verloren. 🔵 Ladereihenfolge gegenüber `kubejs/data` prüfen.

## Schutz und Ausrüstung (🟢 Rezepte aus JAR, 🔵 Wirkung nicht getestet)

- Space Suit (Helm, Anzug, Hose, Stiefel): Stahlplatten, Wolle, Gas Tanks, Oxygen Gear.
- Netherite Space Suit: Ostrum-Platten, Netherite-Brustplatte, Large Gas Tanks. 🔵 Vermutlich nötig gegen Hitze (Merkur, Venus).
- Jet Suit: Calorite-Platten, Netherite Space Suit, Calorite-Triebwerk und -Tanks.
- Giselle: vier Schutzarten (Space Breathing, Space Fire Proof, Acid Rain Proof, Gravity Normalizing) als Verzauberungsbuch, als **MekaSuit-Modul** und als **Tinkers-Modifier**.
- Gravity Normalizer (Block): Desh-Platten, Diamantblock, Etrionic Capacitors.

## Regel „Energie/Treibstoff nur aus anderen Mods“ — Umsetzung für Ad Astra

| Ad-Astra-Element | Rezept (aus JAR) | Umgang | Status |
|---|---|---|---|
| Coal Generator | Eisen, Kohleblöcke, Ofen | entfernen | 🔵 |
| Solar Panel | Desh-Platten, Etrium-Zellen | entfernen | 🔵 |
| Etrionic Blast Furnace | macht per `alloying` Stahl aus Eisen + Kohle | Stahl-Rezept entfernen (umgeht IE-Stahl); Maschine 🔵 | 🔵 |
| Compressor | Eisen, Kolben; macht alle Platten | entfernen; Platten über IE Metal Press | 🔵 |
| Fuel Refinery | Öl → Fuel, nimmt auch IP-Rohöl | entfernen (umgeht die Destillation) | 🔵 |
| Cryo Freezer | Eis → Cryo Fuel | 🔵 User: später entscheiden (entfernen oder Zutat für den T4-Treibstoff) | 🔵 |
| Oxygen Loader | Wasser- und Sauerstoff-Rezept | bleibt; Wasser-Rezept entfernen | 🟢 Entscheidung, 🔵 Skript |
| Oxygen Distributor, Gravity Normalizer, Oxygen Sensor | — | bleiben | 🟢 |
| Water Pump | Desh-Platten | **entfernen**; Ersatz: Mekanism Electric Pump, IE Fluid Pump | 🟢 Entscheidung 2026-10-12, 🔵 Skript |
| Energizer | Ostrum, Diamantblock | **entfernen, wenn** sich Ad-Astra-Items (Jet Suit, Etrionic Capacitor) in der IE Charging Station oder am Mekanism Energy Cube laden lassen | 🟡 Entscheidung 2026-10-12 unter Vorbehalt, 🔵 Test |
| Kabel und Fluid Pipes (samt Cable Duct, Fluid Pipe Duct) | Stahl/Desh/Ostrum-Platten | **entfernen**; Strom und Flüssigkeiten laufen über IE und Mekanism | 🟢 Entscheidung 2026-10-12, 🔵 Skript |
| Ölquellen (`oil_well`) in Ozeanen | Struktur in der Overworld | 🟢 abgeschaltet, siehe Worldgen | 🟢 Datei, 🔵 Test |

## Worldgen (🟢 aus JAR)

### Erze von Ad Astra

Alle Planeten reichen von Y −64 bis 320. Adern pro Chunk × Adergröße, Höhenbereich (Dreiecksverteilung):

| Planet | Erz | Adern × Größe | Y |
|---|---|---|---|
| Mond | **Desh** | 9 × 9 | −80…80 |
| Mond | Cheese | 9 × 8 | 6…192 |
| Mond | Ice Shard | 8 × 10 | −32…32 |
| Mond | Iron | 10 × 11 | −24…56 |
| Mars | **Ostrum** | 8 × 8 | −80…80 |
| Mars | Diamond | 5 × 7 | −80…80 |
| Mars | Iron | 10 × 11 | −24…56 |
| Mars | Ice Shard | 8 × 10 | −32…32 |
| Merkur | Iron | 20 × 8 | −80…192 |
| Venus | **Calorite** | 8 × 8 | −80…80 |
| Venus | Coal | 20 × 17 | −80…192 |
| Venus | Gold | 4 × 10 | −64…32 |
| Venus | Diamond | 5 × 9 | −80…80 |
| Glacio | Coal / Copper / Iron / Lapis | 20×17 / 16×17 / 10×11 / 2×9 | (+ Deepslate-Varianten) |
| Glacio | Ice Shard | 8 × 17 | −32…32 |

Die Erze sind normale JSON-Features in den Biom-Dateien und lassen sich per Datapack ändern.

### Erze von Star Wars Planets

| Erz | Wo | Adern × Größe | Y |
|---|---|---|---|
| **Kyber** (Deepslate) | Endor, Hoth, Mustafar, Tatooine | 5 × 9 | bis 80 über dem Weltboden |
| **Kyber** (Sandstein) | Tatooine (Wüste) | 5 × 9 | bis 80 über dem Weltboden |
| **Beskar** (Sandstein) | Mandalore | 15 × 6 | 0…160 über dem Weltboden |

### Mekanism-Erze auf den Planeten

🟢 „Mekanism: Ad Astra Ores“ bringt 16 Erzblöcke in Planetengestein mit. Seine eigene Generierung ist abgeschaltet (`kubejs/data/mekanismaaa/tags/worldgen/biome/gen_ores.json` und `gen_ores_deepslate.json`, in die Testinstanz kopiert am 2026-10-11, 🔵 Wirkung nicht getestet).

| Planet | Vorhandene Blöcke |
|---|---|
| Mond | Osmium, Zinn |
| Mars | Fluorit, Zinn, Uran |
| Merkur | Blei, Osmium, Uran |
| Venus | Fluorit, Blei, Uran |
| Glacio | Fluorit, Blei, Osmium, Zinn, Uran |

🟢 **Entscheidung 2026-10-12:** Mond: Osmium. Mars: Fluorit. Merkur und Venus: Uran und Blei. Glacio: Osmium und Uran. Kein Zinn auf Planeten (Zinn gibt es nur in Everbright). Uran ist damit in der Overworld knapp und ab Raketenstufe T3 reichlich. Certus gibt es auf dem Mond nicht mehr: AE2 hat in 1.20.1 kein Certus-Erz, es bleibt bei den Meteoriten in der Overworld. Zahlenvorschläge und Umsetzung (eigene Features, 🔵 noch nicht angelegt): `03_ERZGENERATION.md`.

### Strukturen

| Quelle | Struktur | Wo |
|---|---|---|
| Ad Astra | Lunarian Village, Moon Dungeon, Lunar Tower | Mond |
| Ad Astra | Mars Temple | Mars |
| Ad Astra | Pygro Village, Pygro Tower, Venus Bullet | Venus |
| Ad Astra | **Oil Well** | **Overworld-Ozeane** |
| More Structures | Tower Dungeon mit Boss | Mond, Mars, Glacio |
| More Structures | Arena Dungeon mit Boss | Merkur |
| More Structures | Tree Dungeon mit Boss | Venus |
| More Structures | Abandoned Base, Mystical Tree, Launch Pad (`rocket_launch_t1`) | alle Ad-Astra-Planeten |
| Star Wars Planets | AT-AT (Hoth), AT-ST und Outpost (Endor), AT-ACT, Häuser, Dorf (Tatooine), Jawa Crawler, TIE Fighter | Star-Wars-Planeten |

- `rocket_launch_t1` ist nur eine Startrampe aus Launch Pads auf den Planeten, **keine Rakete**. Sie verschenkt den ersten Raumflug nicht.
- Die Bosse von More Structures lassen Roh-Desh, Roh-Ostrum bzw. Roh-Calorite fallen; die Truhen ebenfalls. 🔵 Mengen gegen die Erzplanung prüfen.
- **Oil Well:** 🟢 abgeschaltet wie in 1.18.2, weil Immersive Petroleum die einzige Ölquelle bleiben soll. Datei: `kubejs/data/ad_astra/tags/worldgen/biome/has_structure/oil_well.json` (`replace: true`, leere Liste). 🔵 Liegt bisher nur im Projektordner; Wirkung nicht getestet. Gilt nur für neue Chunks und muss **vor dem ersten Start der Hauptwelt mit Ad Astra** beim Host liegen.

## 🟢 Ad Astra: Rocketed bleibt (User, 2026-10-13)

Aus JAR: Der Mod fügt nur drei Raketen T5, T6 und T7 hinzu, jeweils mit eigenem Treibstoff-Tag (`ad_astra_rocketed:tier_5_rocket_fuel` usw.). **Er bringt keine Planeten mit, die diese Stufen verlangen.** Die Standard-Rezepte sind schwach (T5: Ice Shard statt Nose Cone, sonst Calorite; T6: Echo Shard; T7: Echo Shard und Permafrost-Fliesen).

🟢 T4 führt nur noch nach Glacio, T5 nur nach Endor, T6 nach Tatooine, Hoth und Mustafar, T7 nach Mandalore (User, 2026-10-14). Dafür müssen die Stufen in den Planeten-Dateien von Star Wars Planets per Datapack geändert werden. 🔵 Offen: neue Rezepte und flüssige Treibstoffe. Das gehört zu Part 2 der Story (`18_STORY.md`) und wird später besprochen.

## Progression der Raketenstufen (🟡 Stand 2026-10-14; die ganze Karte steht in `docs/meilensteine/`)

| Stufe | Ziel | Kreuzungspunkte (Vorschlag) |
|---|---|---|
| T1 → Mond | erster Raumflug; Desh, Osmium | IE-Stahl, Metal Press, Biodiesel, flüssiger Mekanism-Sauerstoff, **erste Mekanism-Maschine** |
| T2 → Mars | Ostrum, Fluorit | entschwefelter Diesel (Petroleum); Mekanism-Ausbau |
| T3 → Merkur, Venus | Calorite (Venus); Uran und Blei; Hitzeschutz nötig | Kerosin; **Tempel mit dem Blood-Magic-Dungeon nur auf dem Merkur** |
| T4 → Glacio | Fund des Meisters, Ende von Part 1 | Rezept vom Elfen; **magische Komponenten** (🔵 Item aus dem Elfenportal ?); deutlich aufwendigerer Treibstoff; 🔵 ob Uran-Teil und Dungeon-Item Pflicht bleiben |
| T5 → Endor | Kyber | Rumpf aus Alfheim; 🔵 Part 2 |
| T6 → Tatooine, Hoth, Mustafar | Kyber | 🔵 Part 2 |
| T7 → Mandalore | Beskar | 🔵 Part 2 |

🟢 Vier Hürden je Rakete (2026-10-14): Rumpf aus dem Metall des zuletzt erreichten Ortes, neuer Treibstoff, neue Mekanism-Stufe, ein Teil aus einem anderen Pfad; T3 zusätzlich ein Teil aus Blood Magic. Einzelheiten in `01_PROGRESSION.md`.

## Bekannte Fehler und Stolpersteine

- **`forge:sand` ist leer:** Star Wars Planets trägt `swplanets:mustafar_sand` ein, das es nicht gibt. Minecraft verwirft das ganze Tag; Mekanism meldet „Broken tags“. 🔵 Fix per KubeJS schreiben.
- **More Structures ersetzt fünf Ad-Astra-Entity-Tags** (siehe „Wesen ohne Sauerstoff“).
- **Star Wars Planets trägt Tatooine in `ad_astra:has_structure/oil_well_biomes` ein.** Dieses Tag heißt in Ad Astra 1.15 anders (`oil_well`); der Eintrag ist vermutlich wirkungslos. 🔵 nicht getestet.
- Der Abschnitt mit den Maschinenwerten in `ad_astra.jsonc` heißt irreführend `cryoFreezer`, enthält aber die Werte aller Maschinen.

## Auswirkungen auf die bestehende Welt

- Planeten sind neue Dimensionen → kein Retrogen nötig.
- In der **Overworld** erzeugt Ad Astra nur die Oil Wells (abgeschaltet). Erze oder andere Strukturen kommen dort nicht dazu.
- 🔵 Ob Galaxy in a Cube in der Overworld etwas erzeugt, ist offen (siehe `17_STAR_WARS_1.20.1.md`).
- Neue Metalle (Desh, Ostrum, Calorite, Kyber, Beskar) → Erzmatrix (`14_ERZ_MOD_MATRIX.md`), Verarbeitung (`04_VERARBEITUNG.md`), Tags (`02_RESSOURCEN.md`).

## Offene Fragen

1. 🟢 Treibstoff je Stufe entschieden (Biodiesel, Diesel, Kerosin, eigener Raketentreibstoff). 🔵 Offen: T4-Rezept, Cryo Fuel, Rover.
2. 🟢 Blood-Magic-Zugang nur auf dem Merkur. 🔵 Offen: welches Item, wo garantiert zu holen; technische Machbarkeit (Test E19).
3. 🔵 Welche magischen Komponenten genau für T4? Alfsteel entfällt, weil Alfheim erst in Part 2 betreten wird; Kandidaten sind Terrasteel und Items aus dem Elfenportal (Elementium, Pixie Dust, Dreamwood). Bleiben Uran-Teil und Dungeon-Item Pflicht?
4. 🟢 Ad Astra: Rocketed bleibt, Star-Wars-Planeten auf T5 und T6 (2026-10-13). 🔵 Zuordnung der Planeten, Rezepte, Treibstoffe.
5. 🟢 Ad-Astra-Kabel, Fluid Pipes und Water Pump werden entfernt; der Energizer ebenfalls, sofern die Alternative im Test funktioniert. 🔵 Offen: Wie kommen IE-Leitungen und Mekanism-Kabel in abgedichtete Räume, wenn die Ad-Astra-Durchführungen (Cable Duct, Fluid Pipe Duct) entfallen? Im Spiel prüfen (IE Feedthrough Insulator, Ad-Astra-Tags für dichte Blöcke).
6. 🔵 Immersive Aircraft bleibt Atmosphären-Transport; `launchAnywhere` bleibt aus?
7. 🔵 Treibstoffverbrauch pro Start und Schutzwirkung der Anzüge im Spiel ablesen.

## Nächste Schritte

1. Skripte in KubeJS-2001-Syntax: Sand-Fix, Wasser-Sauerstoff-Rezept entfernen, verbotene Maschinen und Rezepte entfernen.
2. Die drei Tag-Overrides im Spiel prüfen (Oil Well, Mekanism-Ad-Astra-Erze).
3. ✅ Erzplanung für Planeten und Blue Skies beschlossen (2026-10-12, `03_ERZGENERATION.md`); Features anlegen und testen steht aus.
4. Treibstoff-Stufen festlegen und als Tags umsetzen.
5. Pfad Raumfahrt in die Meilensteine aufnehmen (`docs/meilensteine/`).

## Quellen

- JARs und Configs der Instanz `Minecraft1201withForge` (Stand 2026-10-11)
- https://modrinth.com/mod/ad-astra
- https://ad-astra.terrarium.wiki/custom-planets.html
