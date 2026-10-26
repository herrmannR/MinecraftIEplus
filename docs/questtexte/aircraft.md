# Questtexte Immersive Aircraft

> Stand 2026-10-17, Minecraft 1.20.1. Entwurf für FTB Quests. Der Mod hat **kein Buch** (`../19_HILFEBUECHER.md`); die Texte führen deshalb Schritt für Schritt. Immersive Aircraft hat keinen eigenen Pfad auf der Meilensteinkarte; laut `../18_STORY.md` ist es eine Nebenquest-Reihe („verschiedene Fluggeräte bauen“). Kürzel **IA**. Die Brücke Immersive Aircraft x Immersive Engineering (iaie) ist eingeschlossen.
> Quellen: `../modpfade/aircraft/WISSEN.md`, `../modpfade/aircraft/data.js`, `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md` (I4, IA1–IA4), `../18_STORY.md`. Item-IDs gegen die Sprachdatei geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren.
- **Anrede „du“**, Item-Namen englisch wie im Spiel.
- **Alle Quests sind Nebenquests**; Fliegen wird für kein Ziel gebraucht. **Kurze Reihe** nach F17 (2026-10-20): IA1-01, IA1-02, IA1-04, IA2-01, IA4-01, IA4-03; der Rest steht im letzten Abschnitt (Teil 2, Vorschlag). Alle Nebenquests geben Credits (User, 2026-10-17).
- Alle Rezepte stehen in JEI und schalten sich mit dem ersten Eisenbarren frei. Die Texte nennen sie trotzdem kurz, weil kein Buch sie erklärt.
- **Pack-Änderungen** mit ⚙️. 🔵 = noch nicht entschieden oder nicht belegt.
- Einordnung: Die Geräte mit Engine fliegen nur mit flüssigem Treibstoff aus IE (Biodiesel, ab IE3). Die Reihe passt deshalb frühestens nach IE3; sie erscheint ab K4 (F17), die Luftschiffe mit K5 (Vorschlag 2026-10-26, damit die Ketten kurz bleiben).

---

## IA1 · Erste Fluggeräte (K4 Der Mond)

Die kurze Reihe des Packs (F17): sechs Quests in zwei Abschnitten. Der Gyrodyne fliegt ohne Treibstoff und lässt sich schon früh bauen; die Quests erscheinen ab dem Mond.

### IA1-01 Hull, Sail und Propeller · Nebenquest
**Aufgabe:** `immersive_aircraft:hull`, `immersive_aircraft:sail`, `immersive_aircraft:propeller`

Aus diesen drei Teilen bestehen alle Fluggeräte.
- **Hull** (Rumpf): 6 Holzstämme + 3 Iron Ingot
- **Sail** (Segel): 6 White Carpet + 3 String
- **Propeller**: 5 Iron Ingot

### IA1-02 Gyrodyne · Nebenquest
**Aufgabe:** `immersive_aircraft:gyrodyne`

Der Gyrodyne fliegt mit Muskelkraft und braucht weder Engine noch Treibstoff. Steig ein und treib den Rotor an, bis „Minimum rotor speed reached, ready for takeoff!“ erscheint. Das kostet Hunger: Mit leerem Magen hebst du nicht ab.
Er ist langsam, aber das einfachste Fluggerät im Pack.

### IA1-04 Treibstoff im Metal Barrel · Nebenquest
**Aufgabe:** `immersiveengineering:metal_barrel`, dann Flüssigkeit `immersiveengineering:biodiesel`

Fluggeräte mit Engine tanken flüssigen Treibstoff, nicht Kohle.
So geht's: Fülle ein IE **Metal Barrel** mit Treibstoff und lege das Fass in den Treibstoffplatz des Fluggeräts.
Geeignet sind Biodiesel aus der IE Refinery und von Immersive Petroleum Diesel, Sulfurized Diesel und Kerosene. Gasoline geht nicht.
⚙️ Fester Brennstoff ist abgeschaltet (Config von iaie: `disableSolidFuel = true`). 🔵 Ob Blaze Powder trotzdem noch brennt, im Spiel prüfen.

---

## IA2 · Luftschiffe (K5 Erzketten)

### IA2-01 Airship · Nebenquest
**Aufgabe:** `immersive_aircraft:airship`

Das erste Fluggerät mit Engine. Langsam, aber leicht zu steuern. Drei Upgrade-Plätze und ein Inventarplatz.
⚙️ Im Pack mit IE-Stahl: 4 Sail + 2 Steel Plate + 2 Hull + 1 Engine (Rezept in JEI).
Die **Engine** baust du so:
- **Boiler**: 7 Copper Ingot + 1 Furnace
- **Engine**: Boiler + Blast Furnace + 2 Piston + 3 Cobblestone

### IA4-01 Cargo Airship · Nebenquest
**Aufgabe:** `immersive_aircraft:cargo_airship`

Airship + 1 Hull + 4 Chest; der Stahl steckt im Airship schon drin. Langsam und durstig, trägt aber fünf Inventarplätze, also ein ganzes Lager.

### IA4-03 Warship · Nebenquest
**Aufgabe:** `immersive_aircraft:warship`

Cargo Airship + 2 Engine + Industrial Gears (3 Iron + 3 Copper Ingot + 1 Lever). Die fliegende Festung: dreifache Haltbarkeit, drei Treibstoffplätze, zwei Waffen, sechs Upgrades. Langsam, aber mit 0,8 überraschend sparsam.

---

## Weitere Fluggeräte und Upgrades (K12 Ausbildung)

Nicht in der kurzen Reihe (F17). Vorschlag: als Nebenquests in Teil 2; ob sie überhaupt ins Questbuch kommen, ist offen. Die Codes bleiben, damit sich nichts verschiebt.

### IA1-03 Boiler und Engine · Nebenquest
**Aufgabe:** `immersive_aircraft:boiler`, `immersive_aircraft:engine`

Alle anderen Fluggeräte brauchen eine Engine.
- **Boiler**: 7 Copper Ingot + 1 Furnace
- **Engine**: Boiler + Blast Furnace + 2 Piston + 3 Cobblestone

### IA2-02 Biplane · Nebenquest
**Aufgabe:** `immersive_aircraft:biplane`

3 Hull + 1 Engine + 1 Propeller. Schnell und zuverlässig, braucht aber eine Startbahn. Vier Upgrade-Plätze und ein Platz für eine Waffe.

### IA2-03 Quadrocopter · Nebenquest
**Aufgabe:** `immersive_aircraft:quadrocopter`

4 Propeller + 4 Bamboo + 1 Engine. Sparsam (halber Verbrauch), aber laut Mod nur zum Bauen gut: ideal an hohen Gebäuden.

### IA3-01 Bessere Steuerung · Nebenquest
**Aufgabe:** `immersive_aircraft:gyroscope`

Upgrades legst du in die Upgrade-Plätze des Fluggeräts. Werte als Änderung von Leistung und Verbrauch.
Das **Gyroscope** (2 Redstone Comparator + 1 Compass) hebt den Einfluss des Windes ganz auf und stabilisiert das Fluggerät. Advanced Gyroscope und Electronic Gyroscope bauen darauf auf und fügen ein Armaturenbrett hinzu.

### IA3-02 Mehr Leistung · Nebenquest
**Aufgabe:** eine von `immersive_aircraft:sturdy_pipes`, `immersive_aircraft:steel_boiler`, `immersive_aircraft:enhanced_propeller`

| Upgrade | Rezept | Leistung | Verbrauch |
|---|---|---|---|
| Sturdy Pipes | 3 Copper + 2 Iron Ingot | +10 % | – |
| Steel Boiler | Boiler + Blast Furnace + 7 Iron Ingot | +25 % | +50 % |
| Enhanced Propeller | Propeller + 4 Copper Ingot | – | – (−75 % Luftreibung) |

### IA3-03 Weniger Verbrauch · Nebenquest
**Aufgabe:** eine von `immersive_aircraft:eco_engine`, `immersive_aircraft:industrial_gears`

- **Eco Engine** (Engine + 3 Gold Ingot + 3 Brick + 2 Slimeball): −20 % Leistung, −75 % Verbrauch.
- **Industrial Gears** (3 Iron + 3 Copper Ingot + 1 Lever): −20 % Verbrauch. Du brauchst sie auch für Warship und Rotary Cannon.

### IA3-04 Nether Engine · Nebenquest
**Aufgabe:** `immersive_aircraft:nether_engine`

Das stärkste Antriebsteil: +40 % Leistung, +30 % Verbrauch. Rezept: Engine + 1 Netherite Ingot + 2 Blaze Rod + 2 Magma Cream + 3 Nether Brick.

### IA3-05 Haltbarkeit und Landung · Nebenquest
**Aufgabe:** `immersive_aircraft:hull_reinforcement`, `immersive_aircraft:improved_landing_gear`

- **Hull Reinforcement** (3 Hull + 6 Iron Ingot): doppelte Haltbarkeit.
- **Improved Landing Gear** (3 Iron Ingot + 4 Coal): +50 % Startgeschwindigkeit.
Schäden reparierst du, indem du das Fluggerät anklickst (2,5 % je Klick, kostet Hunger).

### IA4-02 Bamboo Hopper · Nebenquest
**Aufgabe:** `immersive_aircraft:bamboo_hopper`

2 Biplane + 1 Hull + 1 Engine + 5 Block of Bamboo. Drei Sitze und Schwimmer: Er landet auch auf dem Wasser. Zwei Waffen, vier Upgrades, aber hoher Verbrauch.

### IA5-01 Rotary Cannon · Nebenquest
**Aufgabe:** `immersive_aircraft:rotary_cannon`

Waffen kommen in die Waffenplätze (Biplane, Bamboo Hopper, Warship). Keine Waffe zerstört Blöcke.
Dispenser + Industrial Gears + Copper Ingot. Feuert schnell und verbraucht Gunpowder (100 Schuss je Stück, Schaden 5).
Tipp: Propelplant Cane aus dem Crimson Forest gibt im IE-Crusher 2 Gunpowder, eine nachwachsende Quelle.

### IA5-02 Heavy Crossbow und Bomb Bay · Nebenquest
**Aufgabe:** `immersive_aircraft:heavy_crossbow`, `immersive_aircraft:bomb_bay`

- **Heavy Crossbow** (Crossbow + Tripwire Hook + Holzstamm): schießt Pfeile, auch Spectral und Tipped Arrows.
- **Bomb Bay** (TNT + 4 Iron Ingot): wirft TNT ab; viel Schaden, aber keine zerstörten Blöcke. Mit einem Egg wirft sie ein Huhn ab.

### IA5-03 Telescope · Nebenquest
**Aufgabe:** `immersive_aircraft:telescope`

Spyglass + Copper Ingot. Ein Fernrohr fürs Cockpit.

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | Steht in | Stand |
|---|---|---|
| Kein fester Brennstoff; Treibstoff nur flüssig im Metal Barrel (Biodiesel, Diesel, Kerosene) | IA1-04 | 🟢 Config von iaie in der Testinstanz |
| Waffen zerstören keine Blöcke, Abstürze töten nicht | IA5, IA3-05 | 🟢 Config der Testinstanz |
| Ab dem Airship mit IE-Stahl (F17): Airship aus 4 Sail + 2 Steel Plate + 2 Hull + 1 Engine; Cargo Airship und Warship erben den Stahl | IA2-01 | 🟡 `kubejs/server_scripts/progression/aircraft_stahl.js`, ungetestet |

## 🔵 Offen vor dem Einbau

1. ~~Umfang und Start~~ entschieden (F17): sechs Quests ab K4. **Offen:** IA1 mit K4, IA2 (Luftschiffe) mit K5 ist ein Vorschlag; die übrigen zwölf Quests stehen mit K12 (Teil 2) im letzten Abschnitt, ob sie bleiben, entscheidet der User.
2. ~~Gyrodyne früh~~ gewollt (F17).
3. ~~IE-Stahl~~ entschieden (F17), im Text bei IA2-01 nachgezogen. Skript ungetestet.
4. Blaze Powder trotz `disableSolidFuel` (IA1-04) und Verhalten auf Ad-Astra-Planeten (Fliegen ist dort erlaubt; Rover-Konkurrenz, `../15_RAUMFAHRT.md` Frage 6) im Spiel prüfen.
5. Welches Item in den Booster-Platz passt (nicht ausgelesen; deshalb keine Quest).
6. Formatierung für FTB Quests erst beim Einbau.
