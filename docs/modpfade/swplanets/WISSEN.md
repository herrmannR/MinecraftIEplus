# Star Wars Planets – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-14, Minecraft 1.20.1. Alles aus dem JAR (Daten und Klassen) und der Config der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/SrPJwSsAAdwZvaUm2MF3iN). Ausführliche Texte stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen; Pack-Planung in `docs/17_STAR_WARS_1.20.1.md`.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Star Wars Planets | 1.4.6.1 (mods.toml nennt 1.4.4) | `swp=swplanets` | `swplanets` | Hauptmod, Addon für Ad Astra |
| Ad Astra | 1.15.21 | `aa=ad_astra-forge` | `ad_astra` | Voraussetzung (Tier 4 Rocket, Öl, Platten) |

## Wo die Quellen liegen

- **Buch „Star Manual“** (Patchouli): `assets/swplanets/patchouli_books/` und `data/swplanets/patchouli_books/`; zwei Kapitel „New Planets!“ und „New Power“.
- **Planeten** im Ad-Astra-Format: `data/swplanets/planets/`; Biome und Erze in `data/swplanets/worldgen/`; Bauwerke `data/swplanets/structures/` (16 NBT); Truhen `data/swplanets/loot_tables/`.
- **Rezepte** `data/swplanets/recipes/` (21, alle `crafting_shaped` bzw. Ofen). **Advancements** `data/swplanets/advancements/` (7).
- **Config** `config/swplanets.jsonc` der Instanz (`lightSabersAttackModifier` 13, `jawaTrade` true, 7 Tausch je Jawa, Blaster-Speicher 10 000, Explosion Radius 2,0).
- **Nur im Code** (`fr/tathan/swplanets/…`): Registrierungen `common/registry/ItemsRegistry`, `BlocksRegistry`, `EntityRegistry`; Jawa-Waren `common/entities/JawaEntity`; Rüstungswerte `common/items/armour/{TrooperArmorMaterial,BeskarArmorMaterial}`; Lichtschwerter `common/items/{JediLightSaber,SithLightSaber}`; Blaster `common/items/Blaster`, `BlasterUpgrade`. Lesen mit `javap` (siehe Skill, `references/quellen-im-jar.md`).

## Progression in Kürze

1. **New Planets!**: Tier 4 Rocket (Ad Astra) → System „Outer Rims“ mit fünf Planeten, alle Stufe 4, alle mit Sauerstoff. Tatooine (Öl, Sandstone Kyber Ore, Jawas, Banthas, Jawa Crawler), Endor (Taiga, Endor Outpost, AT-ST), Mustafar (Blackstone, TIE Fighter), Hoth (Glacio Stone, AT-AT mit fertigen Ad-Astra-Maschinen), Mandalore (nicht im Buch; g 3,0, −160; einzige Beskar-Quelle).
2. **New Power**: Kyber Crystal (nur belegt: Tatooine Desert) → Light Saber Base (2 Eisen + 1 Kyber) → vier Lichtschwerter (Farbstoff + **Beacon** + Base). Darth Maul (rotes Schwert + Beacon), Kylo Ren (3 Bases + Beacon), Dark Saber (2 Beskar, kein Beacon).
3. **Imperium und Mandalore** (nicht im Buch): Plastic Plate (Oil Bucket im Ofen) → Stormtrooper-Rüstung (24 Plastic Plate, zählt als Ad-Astra-Raumanzug) → Blaster (5 Plastic Plate, Flint and Steel, Blaze Rod), Blaster Upgrader (6 Steel Plate); Upgrades nur aus Empire-Truhen. Beskar (Mandalore) → Beskar-Rüstung (je Teil 1 Beskar + Stormtrooper-Teil, **kein** Raumanzug).

## Schlüsselzahlen

- Planeten (Schwerkraft / Temperatur / Solar): Tatooine 9,807 / 25 / 30; Endor 9,807 / 15 / 16; Mustafar 9,807 / 25 / 16; Hoth 9,807 / −10 / 16; Mandalore 3,0 / −160 / 16; Orbits 0 / −270 / 32, ohne Sauerstoff.
- Rüstung (Code): Stormtrooper 2/5/5/2, Beskar 4/9/7/4.
- Erze: Sandstone Kyber Ore Adern bis 9, 5 Versuche/Chunk, Unterkante −80 bis +80; Beskar Ore Adern bis 6, 15 Versuche/Chunk, bis 160 über Unterkante.

## Pack-Bezug

- Hängt an drei fremden Dingen: Tier 4 Rocket und Öl (Ad Astra), Beacon (Nether Star, Vanilla).
- Tags: `swplanets:jawas_trades` (Wrench, Steel Nugget, Steel Rod), `swplanets:light_sabers` (ohne Dark Saber); Stormtrooper-Teile in `ad_astra:space_suit_items`; Tatooine-Biome in der Ölquellen-Liste von Ad Astra; nur die Kyber-Erze in `forge:ores`.
- Kein gemeinsamer Tag für Kyber Crystal, Beskar, Plastic Plate → kein Verdoppeln, kein Tinkers-Material.
- Überschneidung mit Galaxy in a Cube (Kyber, Lichtschwerter, Blaster, Jawas, Kunststoff), nichts gegenseitig verwendbar; siehe `swgc/WISSEN.md`.

## In den Dateien, aber nicht registriert

Star Manual als Item (Advancement-Belohnung verweist darauf), `kyber_crystal_ore_deepslate` (Weltgen-Eintrag für Endor/Hoth/Mustafar/Tatooine), Mustafar Sand (steht in `forge:sand`), Blaster Distance Upgrade, Speeder, Music Disc, Kyber Crystal Cluster, weißes Lichtschwert, Planet Kamino, Textur „pillar_tusken“. Better-Combat-Dateien (`weapon_attributes`) ohne Wirkung, Mod fehlt.

## Offen

- Tauschverhältnisse der Jawas, Schaden/Energie des Blasters, Unterschied Jedi-/Sith-Schwert, Haltbarkeit der Rüstungen, Wirkung der Planetentemperaturen (entscheidet Ad Astra im Code).
- Im Spiel prüfen: ob das Star Manual ankommt, was der Eintrag für das fehlende Deepslate-Erz bewirkt.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> swplanets/data.js swplanets` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Star Manual | `swplanets:star_manual` |
| Tatooine Stone | `swplanets:tatooine_stone` |
| Sandstone Kyber Crystal Ore | `swplanets:kyber_crystal_ore_sandstone` |
| Oil Bucket | `ad_astra:oil_bucket` |
| Wrench | `ad_astra:wrench` |
| Etrionic Capacitor | `ad_astra:etrionic_capacitor` |
| Mustafar Stone | `swplanets:mustafar_stone` |
| Beskar Ore | `swplanets:beskar_ore_sandstone` |
| Kyber Crystal | `swplanets:kyber_crystal` |
| Kyber Crystal Ore | `swplanets:kyber_crystal_ore` |
| Light Saber Base | `swplanets:light_saber_base` |
| Red Light Saber | `swplanets:light_saber_red` |
| Dark Saber | `swplanets:darksaber` |
| Stormtrooper Helmet | `swplanets:stormtrooper_mask` |
| Stormtrooper Chestplate | `swplanets:stormtrooper_chestplate` |
| Stormtrooper Leggings | `swplanets:stormtrooper_leggings` |
| Stormtrooper Boots | `swplanets:stormtrooper_boots` |
| Blaster | `swplanets:blaster`, `swplanets:blaster_zoom` |
| Blaster Upgrader | `swplanets:blaster_upgrader` |
| Blaster Zoom Upgrade | `swplanets:blaster_zoom_upgrade` |
| Blaster Explosion Upgrade | `swplanets:blaster_explosion_upgrade` |
| Beskar | `swplanets:beskar` |
| Beskar Helmet | `swplanets:beskar_armor_helmet` |
| Beskar Chestplate | `swplanets:beskar_armor_chestplate` |
| Beskar Leggings | `swplanets:beskar_armor_leggings` |
| Beskar Boots | `swplanets:beskar_armor_boots` |
| Tatooine Stone Slab | `swplanets:tatooine_stone_slab` |
| Tatooine Stone Stairs | `swplanets:tatooine_stone_stairs` |
| Steel Plate | `ad_astra:steel_plate`, `immersiveengineering:plate_steel` |
| Steel Cable | `ad_astra:steel_cable` |

28 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
