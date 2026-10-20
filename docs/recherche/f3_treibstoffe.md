# F3 · Treibstoffe und Flüssigkeiten im Pack

> Analyse für F3 (`../20_ENTSCHEIDUNGEN.md`), 2026-10-20. Alle Flüssigkeiten aus den Sprachdateien und Bucket-Modellen der 98 JARs der Testinstanz; Herstellungswege aus den Rezeptdateien (IE 10.2.0, Immersive Petroleum 4.3.1, Ad Astra 1.15.21, Mekanism 10.4.16 mit Generators, Tinkers 3.12.1 mit TCIntegrations und Blood-Smeltery, Blood Magic 3.3.8). Nichts davon im Spiel getestet.
> Entschieden ist erst T1 Biodiesel, T2 entschwefelter Diesel, T3 Kerosin (2026-10-12) und Rover Biodiesel (F11). Offen: T4 bis T7, Cryo Freezer.

## Wichtige Funde für die Entscheidung

1. **Sparsamer Treibstoff:** Ad Astra verbraucht pro Start 3000 mB, aber nur **1000 mB**, wenn der Treibstoff im Tag `ad_astra:efficient_fuel` steht (Klasse `Rocket`, im Bytecode gelesen). Von Haus aus steht dort nur Cryo Fuel. Teure Treibstoffe der oberen Stufen können wir dort eintragen; dann reicht ein Drittel der Menge.
2. **Rocketed (T5–T7)** nimmt nur Flüssigkeiten (Tags `ad_astra_rocketed:tier_5_rocket_fuel` usw.). Mekanism-Gase gehen nur, wenn es sie auch als Flüssigkeit gibt (Rotary Condensentrator).
3. **Mekanism hat einige Gase als Flüssigkeit**, darunter **flüssiges D-T-Fusionsgemisch** (`mekanismgenerators:fusion_fuel`). Dafür braucht man **keinen Fusionsreaktor**, nur Deuterium und Tritium. **Antimaterie, Polonium, Plutonium und Spaltstoff gibt es nur als Gas** und damit nicht direkt als Raketentreibstoff.
4. **Ad Astras eigene Flüssigkeiten:** „Fuel“ entsteht nur in der Fuel Refinery, die wir entfernt haben; „Oil“ hat keine Quelle mehr (Ölquellen abgeschaltet); „Hydrogen“ hat gar kein Rezept. Bleibt einzig **Cryo Fuel** aus dem Cryo Freezer.
5. Mekanism Generators **Bioethanol** hat kein Herstellungsrezept (nur Eimer). Tinkers' **Fiery Liquid** braucht Twilight Forest, nicht im Pack.

## Stufenskala

Wie fortgeschritten eine Flüssigkeit ist, gemessen an der höchsten Maschine oder Zutat in ihrer Kette, umgerechnet auf die Kapitel der Meilensteinkarte:

| Stufe | Bedeutung | etwa ab |
|---|---|---|
| 0 | Natur, Vanilla | K1 |
| 1 | IE-Grundlage (Koksofen, Squeezer, Fermenter, Refinery, Mixer), Tinkers-Schmelze, Blutaltar | K1–K3 |
| 2 | Petroleum (Pumpjack, Destillation), Mekanism Basic (Separator, Rotary, Chemical Infuser, Oxidizer) | K3–K5 |
| 3 | zweite Verarbeitungsstufe von Petroleum (Hydrotreater-Cracking, Benzol), Mekanism Advanced (Thermal Evaporation), Nether-Mobs | K5–K7 |
| 4 | Mekanism Elite (Solar Neutron Activator), Filter Upgrade mit Zinn (Everbright) | K7–K10 |
| 5 | Mekanism Ultimate und Nuklear (Dissolution Chamber, Isotopic Centrifuge, Fission) | K9–K12 |
| 6 | Supercritical Phase Shifter (Antimaterie) | K13 |

## Alle Flüssigkeiten

### Immersive Engineering

| Flüssigkeit | ID | Herstellung | Stufe |
|---|---|---|---|
| Kreosot | `immersiveengineering:creosote` | Koksofen (Kohle → Koks + 500 mB) | 1 |
| Pflanzenöl | `immersiveengineering:plantoil` | Squeezer aus Samen (Hanf 120 mB) | 1 |
| Ethanol | `immersiveengineering:ethanol` | Fermenter aus Zuckerrohr, Kartoffeln, Äpfeln u. a. | 1 |
| **Biodiesel** (T1) | `immersiveengineering:biodiesel` | Refinery: Pflanzenöl + Ethanol, Katalysator Salpeterstaub | 1 |
| Redstone-Säure | `immersiveengineering:redstone_acid` | Mixer: Wasser + Redstone-Staub | 1 |
| Herbizid | `immersiveengineering:herbicide` | Mixer: Ethanol + Schwefel- und Kupferstaub | 1 |
| Flüssiger Beton | `immersiveengineering:concrete` | Mixer | 1 |
| Acetaldehyd | `immersiveengineering:acetaldehyde` | Refinery: Ethanol an Silberplatte, oder Petroleum-Gas an Konstantanplatte | 1 bzw. 3 |
| Phenolharz | `immersiveengineering:phenolic_resin` | Refinery: Acetaldehyd + Kreosot | 1–3 |
| Geschmolzenes Uran, Konstantan | `immersiveengineering:molten_*` | nur Darstellung, kein eigenes Rezept | – |

### Immersive Petroleum

| Flüssigkeit | ID | Herstellung | Stufe |
|---|---|---|---|
| Rohöl | `immersivepetroleum:crudeoil` | Pumpjack aus Reservoirs (nicht im End) | 2 |
| Schwefelhaltiger Diesel | `immersivepetroleum:diesel_sulfur` | Destillation: 60 Rohöl → 15 Naphtha + 20 Kerosin + 30 Diesel + 10 Schmieröl; auch Coker aus Bitumen | 2 |
| **Entschwefelter Diesel** (T2) | `immersivepetroleum:diesel` | Hydrotreater: Diesel + Wasser → Diesel + Schwefelstaub | 2 |
| **Kerosin** (T3) | `immersivepetroleum:kerosene` | Destillation von Rohöl | 2 |
| Naphtha | `immersivepetroleum:naphtha` | Destillation von Rohöl | 2 |
| Schmieröl | `immersivepetroleum:lubricant` | Destillation von Rohöl | 2 |
| Benzol | `immersivepetroleum:benzol` | Destillation von **Kerosin** (10 → 5 Benzol + 5 Diesel), also zweiter Durchgang | 3 |
| Petroleum-Gas | `immersivepetroleum:petroleum_gas` | Hydrotreater: Naphtha-Cracking (1500 → 2000), 192 000 FE | 3 |
| **Benzin** | `immersivepetroleum:gasoline` | Refinery: Naphtha + Benzol | 3 |
| Napalm | `immersivepetroleum:napalm` | Mixer: Benzin + 3 Aluminiumstaub | 3 |

### Ad Astra

| Flüssigkeit | ID | Herstellung | Stufe |
|---|---|---|---|
| Fuel | `ad_astra:fuel` | nur Fuel Refinery (entfernt); Lunarians verkaufen es | – |
| **Cryo Fuel** | `ad_astra:cryo_fuel` | Cryo Freezer aus Eis: Eis 1 mB, Packeis 2, Blaues Eis 10, **Ice Shard 25 mB** (Mond, Mars, Glacio); steht als einziger in `efficient_fuel` | 2 (mit Mond) |
| Oil | `ad_astra:oil` | keine Quelle mehr | – |
| Hydrogen | `ad_astra:hydrogen` | kein Rezept | – |
| Oxygen | `ad_astra:oxygen` | Oxygen Loader aus flüssigem Mekanism-Sauerstoff | 2 |

### Mekanism und Mekanism Generators (als Flüssigkeit vorhanden)

Gase werden im Rotary Condensentrator (Basic) flüssig. Die Stufe richtet sich nach dem Gas.

| Flüssigkeit | ID | Kette | Stufe |
|---|---|---|---|
| Flüssiger Wasserstoff | `mekanism:hydrogen` | Electrolytic Separator: Wasser → H₂ + O₂ | 2 |
| Flüssiger Sauerstoff | `mekanism:oxygen` | wie oben (Pflicht für T1) | 2 |
| Dampf | `mekanism:steam` | Thermoelectric Boiler (🔵 Kette nicht im Rezept nachgelesen) | 2 |
| Sole | `mekanism:brine` | Thermal Evaporation (Advanced) oder Oxidizer aus Salz | 2–3 |
| Chlor, Natrium | `mekanism:chlorine`, `sodium` | Separator aus Sole | 2–3 |
| Chlorwasserstoff | `mekanism:hydrogen_chloride` | Chemical Infuser: H₂ + Cl₂; oder aus Salz | 2 |
| Schwefeldioxid, -trioxid, Schwefelsäure | `mekanism:sulfur_dioxide`, `sulfur_trioxide`, `sulfuric_acid` | Oxidizer aus Schwefel, Chemical Infuser mit O₂ und Wasserdampf | 2 |
| Ethylen | `mekanism:ethene` | Pressurized Reaction Chamber: Bio Fuel + Wasser + H₂ | 2 |
| Flüssiges Lithium | `mekanism:lithium` | Thermal Evaporation (Advanced): Wasser → Sole → Lithium | 3 |
| Schweres Wasser | `mekanism:heavy_water` | Electric Pump mit Filter Upgrade (braucht **Zinnstaub**, also Everbright) | 4 |
| Deuterium | `mekanismgenerators:deuterium` | Separator aus schwerem Wasser | 4 |
| Tritium | `mekanismgenerators:tritium` | Solar Neutron Activator (**Elite**): Lithium → Tritium | 4 |
| **D-T-Fusionsgemisch** | `mekanismgenerators:fusion_fuel` | Chemical Infuser: Deuterium + Tritium; **flüssig im Rotary Condensentrator, ohne Fusionsreaktor** | 4 |
| Überhitztes Natrium | `mekanism:superheated_sodium` | Fission Reactor mit Natrium als Kühlmittel (🔵 aus Spielwissen, kein Rezept) | 5 |
| Flusssäure | `mekanism:hydrofluoric_acid` | Chemical Dissolution Chamber (**Ultimate**): Fluorit + Schwefelsäure | 5 |
| Uranoxid, Uranhexafluorid | `mekanism:uranium_oxide`, `uranium_hexafluoride` | Uran-Kette mit Flusssäure | 5 |
| Bioethanol | `mekanismgenerators:bioethanol` | **kein Rezept** | – |

Nur als Gas (nicht als Treibstoff nutzbar, aber als Zutat in einem eigenen Treibstoff): Spaltstoff (Isotopic Centrifuge, Ultimate), Atommüll, Polonium, Plutonium (Fission, Stufe 5), **Antimaterie** (SPS, Stufe 6).

### Tinkers' Construct, TCIntegrations, Blood-Smeltery

Die rund 70 geschmolzenen Metalle (Eisen bis Netherite, Bronze, Stahl, Osmium, Uran usw.) sind Stufe 1–2 und taugen nicht als Treibstoff. Interessant als Zutat oder Thema:

| Flüssigkeit | ID | Herkunft | Stufe |
|---|---|---|---|
| Blazing Blood | `tconstruct:blazing_blood` | Lohen in der Schmelze (Nether); bester Schmelzbrennstoff | 3 |
| Liquid Soul | `tconstruct:liquid_soul` | Seelenglas einschmelzen (Seelensand) oder Wither | 3 |
| Ichor | `tconstruct:ichor` | Ichor-Schleim (Nether) | 3 |
| Venom | `tconstruct:venom` | Spinnen, Spinnenaugen | 1 |
| Molten Ender | `tconstruct:molten_ender` | Enderperlen | 2 |
| Magma | `tconstruct:magma` | Magmacreme | 3 |
| Queen's Slime, Manyullyn, Hepatizon, Cinderslime | `tconstruct:molten_*` | Legierungen mit Kobalt, Ichor u. a. | 3–4 |
| Desh, Ostrum, Calorite (geschmolzen) | `tcintegrations:molten_desh` usw. | Planetenmetalle (TCIntegrations) | 2–4 |
| Manasteel (geschmolzen) | `tcintegrations:molten_manasteel` | Botania | 2 |
| Demon Will (5 Sorten) | `bloodsmeltery:*_will` | Will-Kristalle einschmelzen (Blood Magic, Altar 3–4) | 3–4 |
| Fiery Liquid | `tconstruct:fiery_liquid` | braucht Twilight Forest, **nicht im Pack** | – |

### Blood Magic und Sonstige

| Flüssigkeit | ID | Herkunft | Stufe |
|---|---|---|---|
| Life Essence | `bloodmagic:life_essence_fluid` | Blutaltar (Opfer) | 1 |
| Doubt | `bloodmagic:doubt_fluid` | ARC (Rezept `arc/strengthen_tau`, 🔵 Rolle nicht genauer geprüft) | 3 |
| Apfelsaft, Melonensaft, Tomatensoße, Milch | `tmted:*` | Engineer's Delight, Essen | 1 |
| Poison, Icewater | `wrd:*` | Wesley's Dungeons, nur Dekoration | – |
| Erfahrung | `sophisticatedcore:experience` | Rucksack-Upgrade | 1 |
| Wasser, Lava, Honig, Milch, Pulverschnee | Vanilla | Natur | 0 |

## Bewertung als Raketentreibstoff

Für eine Stufe passt eine Flüssigkeit, wenn sie (a) zu dem Kapitel erreichbar ist, in dem die Rakete gebaut wird, (b) einen Schritt mehr verlangt als die Stufe davor und (c) zur Story passt.

| Kandidat | Stufe | Kapitel | Passt zu | Anmerkung |
|---|---|---|---|---|
| Benzin | 3 | K5–K7 | T3/T4 | nur ein Schritt über Kerosin; allein zu schwach für T4 |
| Kerosin + flüssiger Wasserstoff (eigene Mischung) | 2–3 | K5 | – | Vorschlag vom 2026-10-20; im Rückblick zu einfach für T4, weil beide Teile vor T3 da sind |
| Cryo Fuel | 2 | K4 | – | billig, aber thematisch „Kälte“; als Zutat interessant |
| **Benzin + Cryo Fuel (eigene Mischung)** | 3, dazu Ice Shards von den Planeten | K7–K10 | **T4** | braucht die ganze Petroleum-Anlage (zweite Destillation, Cracking, Refinery) und Rohstoff von den Planeten |
| Tritium (flüssig) | 4 | K7–K10 | T4 | rein Mekanism, wenig Vielfalt |
| **D-T-Fusionsgemisch (flüssig)** | 4 | K10–K12 | **T5** | gibt es schon als Flüssigkeit, kein eigenes Fluid nötig; passt zum Meilenstein Fusion (MK7) |
| **D-T + Antimaterie (eigene Mischung)** | 6 | K13–K14 | **T6** | Antimaterie nur als Gas, deshalb eigene Flüssigkeit; passt zu SPS und Antimaterie (MK8) |
| **Antimaterie-Treibstoff + Magie (eigene Mischung)** | 6 + Magie | K15–K16 | **T7** | z. B. mit Life Essence oder Demon Will (Blood-Smeltery) als „dunkler“ Antrieb nach Mandalore |

## Vorschlag

| Stufe | Treibstoff | Herstellung | Sparsam (1 Eimer/Start)? |
|---|---|---|---|
| T1 | Biodiesel | entschieden | nein (3 Eimer) |
| T2 | entschwefelter Diesel | entschieden | nein |
| T3 | Kerosin | entschieden | nein |
| **T4** | **Kryo-Raketentreibstoff** (eigene Flüssigkeit `kubejs:kryo_treibstoff`) | IE Refinery: 10 Benzin + 10 Cryo Fuel → 10 Kryo-Treibstoff. Cryo Fuel aus dem Cryo Freezer mit Ice Shards von Mond, Mars oder Glacio | ja: 1 Eimer statt 3 |
| **T5** | **Flüssiges D-T-Fusionsgemisch** (`mekanismgenerators:fusion_fuel`, kein eigenes Fluid) | Mekanism: Deuterium (schweres Wasser, Filter Upgrade) + Tritium (Solar Neutron Activator) im Chemical Infuser, dann Rotary Condensentrator | ja |
| **T6** | **Antimaterie-Treibstoff** (eigene Flüssigkeit) | IE Mixer: 1000 mB D-T-Gemisch + 1 Antimaterie-Pellet | ja |
| **T7** | **Mandalore-Treibstoff** (eigene Flüssigkeit; Name offen) | IE Refinery: Antimaterie-Treibstoff + Life Essence (oder Demon Will), Katalysator ein Beskar-Teil? | ja |

**Cryo Freezer:** bleibt, aber nur als Lieferant für den T4-Treibstoff. Cryo Fuel selbst kommt aus `#ad_astra:fuel` raus, damit es keine Rakete direkt nimmt. In `efficient_fuel` stehen dann statt Cryo Fuel unsere Treibstoffe ab T4.

Warum so:
- **T4** ist „deutlich komplizierter“ (Story) und verbindet Petroleum mit den Planeten. Die Cryo-Zutat passt zum „galaktischen“ Sprung nach Glacio, und der Cryo Freezer bekommt einen Sinn, statt entfernt zu werden.
- **T5** fällt mit dem Meilenstein Fusion (K12) zusammen und braucht keinen eigenen Code.
- **T6 und T7** steigern das mit Antimaterie (K13) und einer magischen Zutat. T7 ist Teil 3 und kann später noch geändert werden.
- Ab T4 sparsam, damit die teuren Treibstoffe nicht zur Fleißarbeit werden: ein Eimer pro Start, sechs Eimer weniger je Hin- und Rückflug.

Offen für die Entscheidung:
- Mengenverhältnis der Mischungen (Vorschlag oben ist ein Entwurf).
- Ob T4 mit **Benzin** (ganze Petroleum-Kette) oder mit **Kerosin** gemischt wird (einfacher).
- Zutat und Name des T7-Treibstoffs.
