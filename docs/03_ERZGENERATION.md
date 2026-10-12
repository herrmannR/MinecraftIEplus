# 03 — ERZGENERATION

> Stand 2026-10-12, Minecraft 1.20.1. Neu aufgebaut beim Neustart der Analyse (Block B); die Fassung für 1.18.2 liegt im Git-Verlauf (Commit `9bf29d8`).

## Status

🟡 **Verteilung beschlossen (User, 2026-10-12). Die Zahlenwerte sind Vorschläge. Configs, Erz-Features und Overrides liegen im Projektordner (`config-overrides/`, `kubejs/`), sind aber im Spiel noch nicht getestet und noch nicht in der Testinstanz.**

Der Ist-Zustand (Standardwerte aller Mods) steht in `02_RESSOURCEN.md`, Teil 1.

## Grundprinzipien

- 🟢 Die Overworld bleibt die Quelle der Grundressourcen (Vanilla-Erze, Silber, Nickel).
- 🟢 Industriemetalle für den Mekanism-Ausbau liegen hauptsächlich in **Blue Skies**; die Overworld hat davon nur wenig oder nichts.
- 🟢 Die Planeten liefern ihre eigenen Metalle und reichlich Uran; so trägt die Raumfahrt die Nuklearkette.
- 🟢 Doppelte Erzregistrierungen werden nicht zu einem Item vereinheitlicht; Materialfamilien werden über Tags verbunden.
- 🟢 Die Erzverteilung legen wir selbst fest; fremde Erz-Generierung auf den Planeten ist abgeschaltet.
- 🟢 Die bestehende Welt wird nicht entwertet; keine Progressionsstufe darf nur durch einen Welt-Reset erreichbar sein.

---

# Teil 1 — Soll-Verteilung (🟢 Entscheidungen vom 2026-10-12)

| Erz | Overworld | Blue Skies | Planeten | Nebenquellen | Erzblock |
|---|---|---|---|---|---|
| Kohle, Eisen, Kupfer, Gold, Redstone, Lapis, Diamant, Smaragd | Vanilla | eigener Smaragd | Ad-Astra-Standard | unverändert | Vanilla / Ad Astra |
| **Zinn** | **keines** | **Everbright: hoch** | keines | Excavator-Ader **Cassiterite entfernt** | Mekanism |
| **Blei** | **sehr selten** | **Everbright: hoch** | Merkur, Venus | Excavator: Galena und Uraninite seltener | **nur Mekanism** (IE-Bleierz aus) |
| **Aluminium (Bauxit)** | **selten** | **Everbright: hoch** | – | Excavator-Ader Laterite 🔵 | IE |
| **Osmium** | **wenig** | **Everdawn: hoch** | **Mond: hoch**, Glacio | – | Mekanism |
| **Uran** | niedrig (×1,3 gegenüber Standard) | – | **Merkur, Venus: hoch**, Glacio | Excavator: Uraninite seltener | **nur Mekanism** (IE-Uranerz aus) |
| **Fluorit** | Standard | – | Mars | – | Mekanism |
| Salz | Standard | – | – | – | Mekanism |
| Silber, Nickel | IE-Standard | – | – | unverändert | IE |
| Kobalt | – (Nether: Standard) | – | – | – | Tinkers |
| **Certus-Quarz** | nur AE2-Meteoriten (Standard) | – | – | Blood-Magic-Meteor 🔵 | kein Erz |
| **Kyber-Kristall** (Galaxy in a Cube) | **entfernt** | – | – | – | – |
| Kyber-Erz, Beskar | – | – | Star-Wars-Planeten (Standard) | – | Star Wars Planets |
| Desh / Ostrum / Calorite | – | – | Mond / Mars / Venus (Standard) | Boss-Beute 🔵 | Ad Astra |
| Blue-Skies-Erze | – | Standard | – | – | Blue Skies |
| Elementium, Dragonstone, Mythic-Gold | – | – | – (Alfheim: Standard) | – | MythicBotany |

**Was daraus für die Progression folgt:**

- Bronze und der Mekanism-Ausbau brauchen Zinn und damit **Everbright**. Das ersetzt das frühere Gate „Zinn nur im Twilight Forest“.
- Osmium für die ersten Mekanism-Maschinen (und damit für die erste Rakete) gibt es knapp in der Overworld; für den Ausbau lohnen sich Everdawn und der Mond.
- Uran ist in der Overworld knapp und auf Merkur und Venus (Raketenstufe T3) reichlich. Das passt zur Regel, dass die Star-Wars-Planeten Uran-Erzeugnisse verlangen.
- Certus bleibt an das Finden eines Meteoriten gebunden; er wächst dort nach. Passt zu „AE2 ist Endgame, früher Storage-Layer teuer“.
- Kyber gibt es nur auf den Star-Wars-Planeten; Lichtschwerter bleiben an die Raumfahrt gebunden. 🔵 Dafür braucht es ein Rezept vom Kyber-Erz (Star Wars Planets) zum Kristall von Galaxy in a Cube, siehe `17_STAR_WARS_1.20.1.md`, Punkt 4.

## Ersetzte Beschlüsse aus 1.18.2

| Alter Beschluss | Neu |
|---|---|
| Zinn nur im Twilight Forest | Zinn nur in Everbright |
| Blei und Aluminium: Overworld selten, Twilight Forest häufig | Blei: Overworld sehr selten, Everbright häufig. Aluminium: Overworld selten, Everbright häufig |
| Osmium: Overworld reduziert, Mond häufig | bleibt, dazu Everdawn häufig |
| Mond = Hauptquelle für Certus; Overworld-Certus reduziert | entfällt (kein Certus-Erz mehr); nur Meteoriten |
| Blei und Uran nur als Mekanism-Erz | bleibt |
| Uran ×1,3 | bleibt |

---

# Teil 2 — Zahlenwerte (🟡 Vorschlag, im Spiel zu prüfen)

Schreibweise „Adern pro Chunk × Adergröße“.

## Overworld — über Configs (🟢 Dateien im Projektordner angelegt)

**`config-overrides/config/Mekanism/world.toml`** (Basis: Standarddatei der 1.20.1-Testinstanz, Kopie unter `_original/`):

| Erz | Standard | Soll |
|---|---|---|
| Zinn | 14 × 4 und 12 × 9 | `shouldGenerate = false` |
| Osmium upper (Y 72…Top−24) | 65 × 7 | **20** × 7 |
| Osmium middle (Y −32…56) | 6 × 9 | **3** × 9 |
| Osmium small (Boden…64) | 8 × 4 | **4** × 4 |
| Blei | 8 × 9 | **2** × 9 |
| Uran small | 4 × 4 | **5** × 4 |
| Uran buried | 7 × 9 | **9** × 9 |
| Fluorit, Salz | — | unverändert |
| Retrogen | `enableRegeneration = false`, `userWorldGenVersion = 0` | **`true`**, **`1`** |

Die Osmium- und Uranwerte sind die Testwerte aus 1.18.2. Blei war dort 4 („niedrig“); „sehr selten“ ist hier mit 2 angesetzt.

**`config-overrides/serverconfig/immersiveengineering-server.toml`** (Basis: Standarddatei einer neuen 1.20.1-Welt):

| Erz | Standard | Soll |
|---|---|---|
| Bauxit | 16 × 6 | **5** × 6 |
| Blei | 12 × 8 | `vein_size = 0` (aus) |
| Uran | 9 × 4 | `vein_size = 0` (aus) |
| Silber, Nickel | — | unverändert |

`vein_size = 0` schaltet ein Erz laut Kommentar in der 1.20.1-Config ab (🟢 gelesen, 🔵 nicht im Spiel geprüft).

## Blue Skies — eigene Features (🟡 angelegt in `kubejs/data/ieplus/`, ungetestet)

Configs reichen hier nicht: Die Mekanism- und IE-Features zielen auf die Overworld und ersetzen nur Overworld-Gestein. Deshalb gibt es eigene Erz-Features als Datapack-JSON im Namensraum `ieplus` (`configured_feature`, `placed_feature`), je einen Forge-Biome-Modifier für `#blue_skies:everbright` und `#blue_skies:everdawn` und die Freigabe `allowed_mods_for_feature_gen = ["ieplus"]` in `config-overrides/config/blue_skies-common.toml`.

| Dimension | Erz | Vorschlag | Y (gleichverteilt) | Ersetzt | Herkunft des Werts |
|---|---|---|---|---|---|
| Everbright | Zinn (`mekanism:tin_ore`) | 11 × 9 | 0…96 | `blue_skies:turquoise_stone` | Twilight-Forest-Wert nach Test (2026-10-08) |
| Everbright | Blei (`mekanism:lead_ore`) | 10 × 9 | 0…80 | `turquoise_stone` | 🔵 neu angesetzt |
| Everbright | Bauxit (`immersiveengineering:ore_aluminum`) | 18 × 8 | 32…112 | `turquoise_stone` | Twilight-Forest-Wert nach Test (2026-10-08) |
| Everdawn | Osmium (`mekanism:osmium_ore`) | 16 × 9 | 0…128 | `blue_skies:lunar_stone` | früherer Mond-Wert |

- Zum Vergleich: Die eigenen Blue-Skies-Metalle Falsite und Ventium liegen bei 20 × 6.
- 🔵 Die Erzblöcke zeigen Overworld-Steintextur im Blue-Skies-Gestein (Backlog „eigene Erz-Texturen“ in `00_STATUS.md`).
- 🟢 Blue Skies filtert nach dem Namensraum des platzierten Features (im Code von `PurifyBiome` nachgelesen, 2026-10-12): Alles, was nicht freigegeben ist, wird aus den Biomen entfernt. Die Freigabe von `ieplus` genügt also.
- 🔵 Zu prüfen: Sind Everbright und Everdawn gleich früh erreichbar?

## Planeten — eigene Features mit den Blöcken aus „Mekanism: Ad Astra Ores“ (🟡 angelegt in `kubejs/data/ieplus/`, ungetestet)

Die Generierung des Mods bleibt abgeschaltet (`kubejs/data/mekanismaaa/tags/worldgen/biome/gen_ores*.json`), weil sie alle Erze auf alle Planeten setzt und ihre Mengen aus `Mekanism/world.toml` nimmt. Eigene Features je Planet:

| Planet (Stufe) | Erz | Block | Vorschlag | Y (Trapez) |
|---|---|---|---|---|
| Mond (T1) | Osmium | `mekanismaaa:moon_osmium_ore` | 16 × 9 | −32…96 |
| Mars (T2) | Fluorit | `mekanismaaa:mars_fluorite_ore` | 6 × 8 | −64…32 |
| Merkur (T3) | Uran | `mekanismaaa:mercury_uranium_ore` | 12 × 8 | −64…64 |
| Merkur (T3) | Blei | `mekanismaaa:mercury_lead_ore` | 10 × 9 | −32…80 |
| Venus (T3) | Uran | `mekanismaaa:venus_uranium_ore` | 12 × 8 | −64…64 |
| Venus (T3) | Blei | `mekanismaaa:venus_lead_ore` | 10 × 9 | −32…80 |
| Glacio (T4) | Osmium | `mekanismaaa:glacio_osmium_ore` | 16 × 9 | −32…96 |
| Glacio (T4) | Uran | `mekanismaaa:glacio_uranium_ore` | 12 × 8 | −64…64 |

Ungenutzt bleiben die Zinn-Blöcke (Mond, Mars, Glacio), Uran auf dem Mars, Osmium auf Merkur, Fluorit auf Venus und Glacio, Blei auf Glacio. Zum Vergleich: Desh, Ostrum und Calorite liegen bei 8–9 × 8–9.

## Kyber-Kristalle aus der Overworld entfernen (🟡 angelegt, ungetestet)

Galaxy in a Cube hängt `swgc:kyber_crystal` über den Biome Modifier `swgc:kyber_crystals` an alle Overworld-Biome. Ein Override dieser Datei im Datapack ersetzt ihn durch `forge:none` (`kubejs/data/swgc/forge/biome_modifier/kyber_crystals.json`). 🔵 Wirkung testen. **Muss vor dem ersten Start der Hauptwelt in 1.20.1 beim Host liegen**, sonst entstehen Kristalle in jedem neu erzeugten Chunk.

## Excavator-Adern (🟡 angelegt, ungetestet)

| Ader | Standard-Gewicht | Soll |
|---|---:|---|
| Cassiterite (100 % Zinn) | 20 | **entfernen** |
| Galena (40 % Blei, 20 % Silber) | 15 | 5 |
| Uraninite (70 % Uran, 30 % Blei) | 10 | 5 |
| Laterite (70 % Aluminium) | 20 | 🔵 passend zu „Aluminium selten“ senken? |

Umsetzung: Cassiterite wird per Skript entfernt (`kubejs/server_scripts/worldgen/excavator_adern.js`); Galena und Uraninite sind als überschriebene Rezeptdateien abgelegt (`kubejs/data/immersiveengineering/recipes/mineral/`). Bereits vom Seismic Survey gefundene oder angezapfte Adern in der bestehenden Welt: 🔵 Verhalten prüfen.

---

# Teil 3 — Retrogen und bestehende Welt

Die Hauptwelt wurde **noch nie mit Mekanism geöffnet**; alle erkundeten Overworld-Chunks haben keine Mekanism-Erze.

- **Mekanism:** `enableRegeneration = true` und `userWorldGenVersion = 1` sind in der Projekt-Config gesetzt. Nachgeneriert werden damit Osmium, Uran, Fluorit, Salz und das seltene Blei, kein Zinn. Die Retrogen-Features sind in 1.20.1 vorhanden (🟢 im JAR: `…_retrogen`). 🔵 Im Spiel prüfen: Ladezeit, Verhalten in bereits abgebauten Bereichen.
- **IE:** Kein Retrogen nötig. Vorhandenes IE-Blei- und IE-Uranerz bleibt in alten Chunks stehen; weniger Bauxit gilt nur für neue Chunks.
- **Blue Skies und Planeten** sind neue Dimensionen: kein Retrogen-Problem, solange die Features vor dem ersten Betreten da sind.
- **Datapack-Features haben kein Retrogen.** Alles, was über `kubejs/data` kommt, wirkt nur in neu erzeugten Chunks.
- Retrogen läuft beim Host und nur einmal pro Version.

⚠️ **Reihenfolge beim Host:** Erst alle Configs und Overrides einspielen, dann die Welt zum ersten Mal in 1.20.1 öffnen. Sonst erzeugt Mekanism in neuen Chunks Zinn und viel Blei, Galaxy in a Cube Kyber-Kristalle und Ad Astra Ölquellen; das lässt sich nicht zurücknehmen.

## Migrationsregeln

- 🟢 Senken von Werten wirkt nur auf neue Chunks; bereits erzeugte Erze bleiben.
- 🟢 Ergänzen von Erzen in alten Chunks nur per Retrogen.
- 🟢 Alles zuerst in der Testinstanz.

---

# Offen

1. 🔵 Alle Zahlenwerte im Spiel prüfen (Testplan E17 in `00_STATUS.md`).
2. 🔵 Blue Skies: Filter und Freigabe klären; Erreichbarkeit von Everdawn gegenüber Everbright.
3. 🔵 Laterite-Ader: Aluminium auch im Excavator seltener?
4. 🔵 Blood-Magic-Meteore „mekanism“ (Osmium, Zinn, Blei, Uran) und „ae2“ (Budding-Certus): lassen, verteuern oder anpassen? Vorschlag: lassen, weil spät und teuer; in Block C mit der Blood-Magic-Progression entscheiden.
5. 🔵 Beute der Bosse aus „Ad Astra: More Structures“ (Roh-Desh, -Ostrum, -Calorite) gegen die Erzmengen prüfen.
6. 🔵 Eigene Erz-Texturen für Blue-Skies-Gestein (Backlog).
7. 🔵 Erzatlas neu aufbauen (`docs/erzatlas/`).
