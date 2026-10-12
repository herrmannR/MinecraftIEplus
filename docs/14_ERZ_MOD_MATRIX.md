# 14 — ERZ × MOD MATRIX

> Stand 2026-10-12, Minecraft 1.20.1. Spalte „Erzeugt (Ist)“: Standardwerte der Mods (🟢 aus JAR und Config). Spalte „Soll“: Entscheidungen des Users vom 2026-10-12; Werte und Begründung in `03_ERZGENERATION.md`. Die Fassung für 1.18.2 mit Soll-Werten und Rezeptzählung liegt im Git-Verlauf (Commit `9bf29d8`).

## Legende

| Zeichen | Bedeutung |
|---|---|
| ⛏ | wird von dieser Mod **erzeugt** (Worldgen) |
| ⚙ | wird nur **verarbeitet** |
| 🔧 | wird in Bauteilen, Maschinen oder Werkzeugen **verwendet** |
| ●/●●/●●● | Wert in dieser Mod: Nebenrolle / wichtig / zentral |
| OW / NE / BS / PL | Overworld / Nether / Blue Skies / Planeten |
| EX | zusätzlich über IE-Excavator (Mineralader) |
| MT | zusätzlich über Blood-Magic-Meteor |

Die Bewertung ●–●●● ist 🟡 aus der 1.18.2-Matrix übernommen (dort mit Rezeptzählung belegt) und für 1.20.1 nicht neu gezählt. Neu bewertet sind nur die neuen Zeilen.

## Matrix: Wo entsteht das Erz, wer braucht es

| Erz | Erzeugt (Ist) | Nebenquellen | IE (+IP) | Mekanism | Tinkers | Magie (Botania, Blood Magic) | AE2 | Raumfahrt (Ad Astra, SW) | Soll |
|---|---|---|---|---|---|---|---|---|---|
| **Kohle** | ⛏ Vanilla OW; Venus, Glacio | EX | 🔧●●● Koks → Stahl | 🔧●● | 🔧● | 🔧●● | – | – | unverändert |
| **Eisen** | ⛏ Vanilla OW; Mond, Mars, Merkur, Glacio | EX, MT | 🔧●●● | 🔧●●● | 🔧●●● | 🔧●● | 🔧●●● | 🔧●●● Stahl, Platten | unverändert |
| **Kupfer** | ⛏ Vanilla OW; Glacio | EX, MT | 🔧●●● | 🔧● | 🔧●● | 🔧●● | 🔧● | – | unverändert |
| **Gold** | ⛏ Vanilla OW/NE; Venus; Alfheim | EX, MT | 🔧●● Electrum | 🔧●● | 🔧●●● | 🔧●●● | 🔧● | – | unverändert |
| **Redstone** | ⛏ Vanilla OW | EX, MT | 🔧●● | 🔧●● | 🔧● | 🔧●●● | 🔧●●● | 🔧● | unverändert |
| **Lapis** | ⛏ Vanilla OW; Glacio | MT | – | 🔧● | 🔧● | 🔧●● | – | – | unverändert |
| **Diamant** | ⛏ Vanilla OW; Mars, Venus | MT | – | 🔧●● | 🔧●● | 🔧●● | – | 🔧● | unverändert |
| **Smaragd** | ⛏ Vanilla OW; Blue Skies (2 Biome) | MT | – | 🔧● | 🔧● | 🔧● | – | – | unverändert |
| **Netherquarz** | ⛏ Vanilla NE | EX, MT | 🔧● | 🔧●● | 🔧●● | 🔧●● | 🔧● | – | unverändert |
| **Ancient Debris** | ⛏ Vanilla NE | EX, MT | – | 🔧● | 🔧●● | 🔧●● | – | 🔧● Netherite-Anzug | unverändert |
| **Aluminium** | ⛏ IE OW 16×6 | EX, MT | 🔧●● | – | ⚙ | – | – | – | OW selten (5×6); **Everbright hoch** |
| **Nickel** | ⛏ IE OW 7×5 + 11×6 | EX, MT | 🔧●● Constantan | – | 🔧● | 🔧● | – | – | unverändert |
| **Silber** | ⛏ IE OW 10×9 | EX, MT | 🔧●● Electrum | – | 🔧● | 🔧● | – | – | unverändert |
| **Blei** | ⛏ IE OW 12×8 **und** Mekanism OW 8×9 | EX, MT | 🔧●● | 🔧●● | 🔧● | 🔧● | 🔧● | – | **nur Mekanism-Erz**; OW sehr selten (2×9); **Everbright hoch**; Merkur, Venus; Galena/Uraninite seltener |
| **Uran** | ⛏ IE OW 9×4 **und** Mekanism OW 4×4 + 7×9 | EX, MT | ⚙ | 🔧●●● Nuklearkette | 🔧● | 🔧● | – | 🔧 Pflicht für Star-Wars-Planeten (Entscheidung 2026-10-07) | **nur Mekanism-Erz**; OW ×1,3; **Merkur, Venus hoch**; Glacio |
| **Zinn** | ⛏ Mekanism OW 14×4 + 12×9 | **EX (Cassiterite 100 %)**, MT | 🔧● Bronze | 🔧●● | 🔧● Bronze | 🔧● | 🔧● | – | **nur Everbright**; OW aus; Cassiterite entfernt |
| **Osmium** | ⛏ Mekanism OW 65×7 + 6×9 + 8×4 | MT | ⚙ | 🔧●●● jede Maschine | 🔧● | 🔧● | 🔧● | 🔧● über Mekanism-Pflicht | OW wenig (20/3/4); **Everdawn, Mond hoch**; Glacio |
| **Fluorit** | ⛏ Mekanism OW 5×5 + 3×13 | MT | ⚙ | 🔧●● Uran-Chemie | – | 🔧● | – | – | OW Standard; Mars |
| **Salz** | ⛏ Mekanism OW 2/Chunk | – | – | 🔧●● Brine, Lithium | – | – | – | – | unverändert |
| **Kobalt** | ⛏ Tinkers NE 5×4 + 3×6 | – | ⚙ | – | 🔧●●● Manyullyn | – | – | – | unverändert |
| **Certus-Quarz** | **kein Erz**; Budding-Blöcke in AE2-Meteoriten (OW) | **MT (Budding-Blöcke)** | – | ⚙ | – | 🔧● | 🔧●●● | – | unverändert (nur Meteoriten) |
| **Desh** | ⛏ Ad Astra Mond 9×9 | Boss- und Truhen-Beute (More Structures) | – | – | 🔧 Material | – | – | 🔧●●● Rakete T2 | unverändert |
| **Ostrum** | ⛏ Ad Astra Mars 8×8 | wie Desh | – | – | 🔧 Material | – | – | 🔧●●● Rakete T3 | unverändert |
| **Calorite** | ⛏ Ad Astra Venus 8×8 | wie Desh | – | – | 🔧 Material | – | – | 🔧●●● Rakete T4 | unverändert |
| **Ice Shard** | ⛏ Ad Astra Mond, Mars, Glacio | – | – | – | – | – | – | 🔧●● Cryo Fuel | unverändert |
| **Kyber (Erz)** | ⛏ SW Planets: Endor, Hoth, Mustafar, Tatooine 5×9 | – | – | – | – | – | – | 🔧●●● Star Wars | unverändert |
| **Kyber (Kristall)** | ⛏ Galaxy in a Cube **OW**, jeder 16. Chunk | – | – | – | – | – | – | 🔧●●● Lichtschwerter | **aus der Overworld entfernt** |
| **Beskar** | ⛏ SW Planets: Mandalore 15×6 | – | – | – | – | – | – | 🔧●● Rüstung | unverändert |
| **Falsite, Ventium** | ⛏ Blue Skies Everbright 20×6 | – | – | – | – | – | – | – | unverändert |
| **Horizonite** | ⛏ Blue Skies Everdawn 10×4 | – | – | – | – | – | – | – | unverändert |
| **Aquite, Pyrope, Moonstone, Diopside, Charoite** | ⛏ Blue Skies, beide Dimensionen | – | – | – | – | – | – | – | unverändert |
| **Demonit** | ⛏ Blood Magic Demon Dungeon | – | – | – | 🔧●● | 🔧●●● | – | – | unverändert |
| **Dragonstone, Elementium-Erz, Mythic-Gold** | ⛏ MythicBotany Alfheim | – | – | – | 🔧● | 🔧●●● | – | – | unverändert |

Vorhandene, aber **nicht erzeugte** Erzblöcke: Osmium, Zinn, Blei, Uran und Fluorit in Planetengestein („Mekanism: Ad Astra Ores“, Generierung abgeschaltet). Genutzt werden laut Soll: Mond Osmium; Mars Fluorit; Merkur und Venus Uran und Blei; Glacio Osmium und Uran. Alle vorhandenen Blöcke:

| Planet | Blöcke |
|---|---|
| Mond | Osmium, Zinn |
| Mars | Fluorit, Zinn, Uran |
| Merkur | Blei, Osmium, Uran |
| Venus | Fluorit, Blei, Uran |
| Glacio | Fluorit, Blei, Osmium, Zinn, Uran |

Für Blue Skies gibt es keine fertigen Mekanism-Erzblöcke in `turquoise_stone` oder `lunar_stone`.

## Was sich gegenüber 1.18.2 geändert hat

1. **Twilight Forest entfällt.** Damit entfallen die Beschlüsse „Zinn nur im Twilight Forest“ und „Blei und Aluminium im Twilight Forest häufig“.
2. **Certus ist kein Erz mehr.** Der Beschluss „Mond = Hauptquelle für Certus“ ist nicht mehr umsetzbar wie geplant; es gibt nichts, was man als Ader setzen könnte außer Budding-Blöcken.
3. **Neue Planeten-Metalle** Desh, Ostrum, Calorite als Gate der Raketenstufen (Beyond Earth hatte dieselben Namen, aber andere Blöcke und Werte).
4. **Blue Skies bringt acht eigene Erze** und lässt fremde Erze nur nach Freigabe zu.
5. **Kyber gibt es doppelt**, einmal davon in der Overworld.
6. Die Configs von IE und Mekanism haben dasselbe Format wie in 1.18.2; die Standardwerte sind gleich geblieben.

## Offen

- Zahlenwerte im Spiel prüfen (`03_ERZGENERATION.md`).
- Blood-Magic-Meteore und Laterite-Ader: anpassen oder lassen.
- Rezeptzählung für 1.20.1 neu erstellen, wenn sie für das Balancing gebraucht wird (Phase 3).
