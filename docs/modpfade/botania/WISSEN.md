# Botania – Wissen

> Nachschlage-Notiz für Claude, Stand 2026-10-14, Minecraft 1.20.1. Alles aus den JARs der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: https://claude.ai/artifact/3tPaBDHNUfvyPoNjbb2TCw). Ausführliche Texte, alle Blumen und Baubles stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| Botania | 456 | `bot=Botania-1.20.1` | `botania` | Hauptmod |
| MythicBotany | 4.0.4 | `myb=MythicBotany` | `mythicbotany` | Addon (Runen der neun Welten, Alfsteel, Alfheim als Dimension) |
| Applied Botanics | 1.5.2 | `apb=applied-botanics` | `appbot` | Brücke zu AE2 |
| TCIntegrations | 2.0.25.19 | `tci=TCIntegrations` | `tcintegrations` | Brücke zu Tinkers |

## Wo die Quellen liegen

- **Lexikon** (Patchouli) `assets/botania/patchouli_books/lexicon/en_us/`: `categories/` (basics, mana, generating_flowers, functional_flowers, devices, tools, baubles, ender, alfhomancy, challenges, misc) und `entries/<kategorie>/`. MythicBotany hängt sich mit `myb/assets/botania/patchouli_books/lexicon/en_us/entries/{alfheim,mythic_botany}` hinein.
- **Rezepte** `data/botania/recipes/<typ>/`: `petal_apothecary` (46), `mana_infusion` (139), `runic_altar` (16), `pure_daisy` (8), `elven_trade` (14), `terra_plate`, `orechid` (16), `orechid_ignem`, `marimorphosis`, `brew` (20), `conversions`. MythicBotany: `mythicbotany_infusion` (`mythicbotany:infuser`), `mythicbotany_rune_rituals`, dazu `botania:runic_altar` für die neun Runen.
- **Strukturen** `data/botania/structures/`: `alfheim_portal`, `terra_plate`, `enchanter`, `gaia_ritual`, `gog_island`. MythicBotany: `andwari_cave`, `elven_houses/` u. a. **Enchanter und Gaia-Ritual liegen als NBT vor, sind aber noch nicht mit `NbtDump` ausgelesen** (siehe Offen).
- Lexikon-Bilder: `assets/botania/textures/gui/entries/`.

## Progression in Kürze

1. **Basics**: Mystical Flowers (16 Farben, 2 Petals je Blume) → Petal Apothecary (6 Cobblestone + 1 Petal; Wasser, Petals, zum Schluss Seeds) → Pure Daisy (4 weiße Petals; Holz → Livingwood, Stein → Livingrock) → Wand of the Forest.
2. **Mana**: Endoflame/Hydroangeas → Mana Spreader (6 Livingwood, 1 Kupfer, 1 Petal) → Mana Pool (5 Livingrock, ~1 000 000 Mana; Diluted 1/100) → Mana Infusion (Manasteel 3000, Mana Pearl 6000, Mana Diamond 10 000, Mana Powder 500) → Manasteel-Ausrüstung, Mana Tablet.
3. **Runen und Terrasteel**: Runic Altar (5 Livingrock + Mana Pearl). Elementrunen 5200 Mana → 2 Stück (Feuer braucht Nether Brick + Nether Wart), Jahreszeiten 8000, Todsünden 12 000 (2 Mana Diamonds). 34 von 45 Apothecary-Rezepten brauchen Runen. Lenses, Sparks, Alchemy/Conjuration Catalyst, Crafty Crate (Autocrafting), Mana Fluxfield (Mana → FE). Terrasteel: Plate auf Schachbrett aus Livingrock + Lapis-Blöcken, Manasteel + Pearl + Diamond + 500 000 Mana.
4. **Alfheim**: Portal 5×5 aus Livingwood + Glimmering Livingwood + Elven Gateway Core (3 Terrasteel Nuggets), ≥2 Pools mit Natura Pylon im 11×11×11-Bereich. Lexikon hineinwerfen. Handel: 2 Manasteel → Elementium, Pearl → Pixie Dust, Diamond → Dragonstone, Livingwood → Dreamwood. MythicBotany: neun Runen (je 16 000 Mana), Asgard-Rune braucht 1 Netherite → Mana-Infuser (Shimmerrock + Goldblock-Schachbrett) → Alfsteel (Elementium + Dragonstone + Pixie Dust + 1 500 000 Mana), Upgrade am Smithing Table mit Template (Hexen/Evoker mit Elementium-Schwert).
5. **Gaia und danach**: Ritual um aktiven Beacon mit Gaia Pylons, Opfer 1 Terrasteel → 6–8 Gaia Spirits. Gaia II mit Gaia Spirit Ingot (Terrasteel + 4 Spirits) → Relikte, Dice of Fate, Ancient Wills. Corporea (braucht Pixie Dust, Dragonstone, Ender Air). MythicBotany: Mimir (Branch of Yggdrasil, Gjallarhorn) → Rune Rituals → Fimbultyr-Tafel (Gaia II) → Mjöllnir, Blood/Mead of Kvasir → Alfheim begehbar (Elementium Ore, Dragonstone Ore).

## Schlüsselzahlen

- Pool ~1 000 000 Mana (hergeleitet: Terrasteel 500 000 = laut Lexikon „etwa ein halber Pool“). Alfsteel 1 500 000.
- Infusion: Manasteel 3000, Mana Pearl 6000, Mana Diamond 10 000, Mana Powder 500. Runen 5200 / 8000 / 12 000 / 16 000 (MythicBotany).
- Thermalily: 30 s Mana je Lavablock, dann 20 s bis 5 min Pause. Hydroangeas verwelkt nach ~3 Tagen. Luminizer 20 Blöcke je Stufe.

## Pack-Bezug

- Mana Fluxfield ist die einzige Mana → Forge-Energy-Brücke; Gegenrichtung fehlt (Ü5).
- Orechid erzeugt nur Vanilla-Erze, keine IE-/Mekanism-/Planetenerze (Ü2, Ü6).
- Nether: Rune of Fire braucht Nether Brick + Nether Wart (Ü7); später Netherite für die Asgard-Rune und Nether Star (Beacon) für Gaia.
- Corporea liegt hinter dem Elfenportal (Ü3), die Crafty Crate ist Botanias Autocrafter (Ü4); Conjuration, Orechid, Alchemy Catalyst siehe Ü6.
- Applied Botanics: Mana als AE2-Speicher (ME Mana Storage Cells 1k–256k, Mana P2P Tunnel, Fluix Mana Pool).
- TCIntegrations: Livingwood, Livingrock, Manasteel, Mana Infused String als Tinkers-Material; Modifier aus Terrasteel, Elementium, Alfsteel.

## Offen

- Bodenmuster der Rune Rituals (MythicBotany) und Aufbau des Mana Enchanters nicht ausgelesen; für den Enchanter und die Gaia-Arena gibt es `enchanter.nbt` und `gaia_ritual.nbt` in `data/botania/structures/`.
- Welches Gaia-Pylon-Rezept gilt (Botania-Original oder MythicBotany über Alfsteel Pylon): in JEI prüfen.
- Funktion des Fluix Mana Pool (Applied Botanics) nicht ausgelesen.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> botania/data.js botania mythicbotany appbot` aus den Sprachschlüsseln.

| Name | ID |
|---|---|
| Lexica Botania | `botania:lexicon` |
| Floral Fertilizer | `botania:fertilizer` |
| Flower Pouch | `botania:flower_bag` |
| Petal Apothecary | `botania:apothecary_default` |
| Pure Daisy | `botania:pure_daisy` |
| Livingwood | `botania:livingwood` |
| Livingrock | `botania:livingrock` |
| Livingwood Twig | `botania:livingwood_twig` |
| Wand of the Forest | `botania:twig_wand` |
| Endoflame | `botania:endoflame` |
| Hydroangeas | `botania:hydroangeas` |
| Mana Spreader | `botania:mana_spreader` |
| Mana Pool | `botania:mana_pool` |
| Diluted Mana Pool | `botania:diluted_pool` |
| Mana Pearl | `botania:mana_pearl` |
| Mana Diamond | `botania:mana_diamond` |
| Mana Powder | `botania:mana_powder` |
| Mana Infused String | `botania:mana_string` |
| Managlass | `botania:mana_glass` |
| Mana Quartz | `botania:quartz_mana` |
| Manaweave Cloth | `botania:manaweave_cloth` |
| Mana Tablet | `botania:mana_tablet` |
| Band of Mana | `botania:mana_ring` |
| Mana Mirror | `botania:mana_mirror` |
| Livingwood Bow | `botania:livingwood_bow` |
| Thermalily | `botania:thermalily` |
| Gourmaryllis | `botania:gourmaryllis` |
| Munchdew | `botania:munchdew` |
| Narslimmus | `botania:narslimmus` |
| Entropinnyum | `botania:entropinnyum` |
| Kekimurus | `botania:kekimurus` |
| Rosa Arcana | `botania:rosa_arcana` |
| Rafflowsia | `botania:rafflowsia` |
| Spectrolus | `botania:spectrolus` |
| Dandelifeon | `botania:dandelifeon` |
| Shulk Me Not | `botania:shulk_me_not` |
| Wither Aconite | `mythicbotany:wither_aconite` |
| Raindeletia | `mythicbotany:raindeletia` |
| Manastar | `botania:manastar` |
| Runic Altar | `botania:runic_altar` |
| Rune of Water | `botania:rune_water` |
| Rune of Fire | `botania:rune_fire` |
| Rune of Earth | `botania:rune_earth` |
| Rune of Air | `botania:rune_air` |
| Rune of Mana | `botania:rune_mana` |
| Orechid | `botania:orechid` |
| Orechid Ignem | `botania:orechid_ignem` |
| Hopperhock | `botania:hopperhock` |
| Rannuncarpus | `botania:rannuncarpus` |
| Agricarnation | `botania:agricarnation` |
| Exoflame | `botania:exoflame` |
| Clayconia | `botania:clayconia` |
| Marimorphosis | `botania:marimorphosis` |
| Bubbell | `botania:bubbell` |
| Solegnolia | `botania:solegnolia` |
| Bergamute | `botania:bergamute` |
| Labellia | `botania:labellia` |
| Pollidisiac | `botania:pollidisiac` |
| Bellethorne | `botania:bellethorn` |
| Dreadthorne | `botania:dreadthorn` |
| Tigerseye | `botania:tigerseye` |
| Heisei Dream | `botania:heisei_dream` |
| Hyacidus | `botania:hyacidus` |
| Jaded Amaranthus | `botania:jaded_amaranthus` |
| Jiyuulia | `botania:jiyuulia` |
| Tangleberrie | `botania:tangleberrie` |
| Vinculotus | `botania:vinculotus` |
| Loonium | `botania:loonium` |
| Medumone | `botania:medumone` |
| Spectranthemum | `botania:spectranthemum` |
| Daffomill | `botania:daffomill` |
| Fallen Kanade | `botania:fallen_kanade` |
| Aquapanthus | `mythicbotany:aquapanthus` |
| Exoblaze | `mythicbotany:exoblaze` |
| Hellebore | `mythicbotany:hellebore` |
| Mana Lens | `botania:lens_normal` |
| Velocity Lens | `botania:lens_speed` |
| Potency Lens | `botania:lens_power` |
| Resistance Lens | `botania:lens_time` |
| Efficiency Lens | `botania:lens_efficiency` |
| Bore Lens | `botania:lens_mine` |
| Damaging Lens | `botania:lens_damage` |
| Phantom Lens | `botania:lens_phantom` |
| Magnetizing Lens | `botania:lens_magnet` |
| Entropic Lens | `botania:lens_explosive` |
| Influence Lens | `botania:lens_influence` |
| Weight Lens | `botania:lens_weight` |
| Bounce Lens | `botania:lens_bounce` |
| Gravity Lens | `botania:lens_gravity` |
| Messenger Lens | `botania:lens_messenger` |
| Spark | `botania:spark` |
| Spark Augment: Dispersive | `botania:spark_upgrade_dispersive` |
| Mana Splitter | `botania:mana_distributor` |
| Mana Prism | `botania:prism` |
| Mana Void | `botania:mana_void` |
| Mana Detector | `botania:mana_detector` |
| Pulse Mana Spreader | `botania:redstone_spreader` |
| Minecart with Mana Pool | `botania:pool_minecart` |
| Mana Pump | `botania:pump` |
| Mana Fluxfield | `botania:mana_fluxfield` |
| Alchemy Catalyst | `botania:alchemy_catalyst` |
| Conjuration Catalyst | `botania:conjuration_catalyst` |
| Mana Pylon | `botania:mana_pylon` |
| Mana Enchanter | `botania:enchanter` |
| Botanical Brewery | `botania:brewery` |
| Incense Plate | `botania:incense_plate` |
| Open Crate | `botania:open_crate` |
| Crafty Crate | `botania:crafty_crate` |
| Hovering Hourglass | `botania:hourglass` |
| Terrestrial Agglomeration Plate | `botania:terra_plate` |
| Terrasteel Ingot | `botania:terrasteel_ingot` |
| Terra Shatterer | `botania:terra_pick` |
| Terra Blade | `botania:terra_sword` |
| Terra Truncator | `botania:terra_axe` |
| Elven Gateway Core | `botania:alfheim_portal` |
| Glimmering Livingwood | `botania:glimmering_livingwood` |
| Natura Pylon | `botania:natura_pylon` |
| Pixie Dust | `botania:pixie_dust` |
| Dragonstone | `botania:dragonstone` |
| Dreamwood | `botania:dreamwood` |
| Elven Quartz | `botania:quartz_elven` |
| Alfglass | `botania:elf_glass` |
| Elven Mana Spreader | `botania:elven_spreader` |
| Wand of the Elven Forest | `botania:dreamwood_wand` |
| Rod of the Bifrost | `botania:rainbow_rod` |
| Luminizer | `botania:light_relay` |
| Crystal Bow | `botania:crystal_bow` |
| Rune of Midgard | `mythicbotany:midgard_rune` |
| Rune of Alfheim | `mythicbotany:alfheim_rune` |
| Rune of Nidavellir | `mythicbotany:nidavellir_rune` |
| Rune of Jötunheim | `mythicbotany:joetunheim_rune` |
| Rune of Muspelheim | `mythicbotany:muspelheim_rune` |
| Rune of Niflheim | `mythicbotany:niflheim_rune` |
| Rune of Asgard | `mythicbotany:asgard_rune` |
| Rune of Vanaheim | `mythicbotany:vanaheim_rune` |
| Rune of Helheim | `mythicbotany:helheim_rune` |
| Mana-Infuser | `mythicbotany:mana_infuser` |
| Alfsteel Ingot | `mythicbotany:alfsteel_ingot` |
| Outlandish Smithing Template | `mythicbotany:inactive_alsteel_template` |
| Alf Shatterer | `mythicbotany:alfsteel_pick` |
| Alf Blade | `mythicbotany:alfsteel_sword` |
| Alf Truncator | `mythicbotany:alfsteel_axe` |
| Alfsteel Pylon | `mythicbotany:alfsteel_pylon` |
| Greatest Band of Mana | `mythicbotany:mana_ring_greatest` |
| Gaia Pylon | `botania:gaia_pylon` |
| Gaia Spirit | `botania:life_essence` |
| Gaia Spirit Ingot | `botania:gaia_ingot` |
| Gaia Mana Spreader | `botania:gaia_spreader` |
| Flügel Tiara | `botania:flight_tiara` |
| Life Aggregator | `botania:spawner_mover` |
| Black Hole Talisman | `botania:black_hole_talisman` |
| Dice of Fate | `botania:dice` |
| Corporea Spark | `botania:corporea_spark` |
| Corporea Index | `botania:corporea_index` |
| Corporea Funnel | `botania:corporea_funnel` |
| Corporea Interceptor | `botania:corporea_interceptor` |
| Corporea Crystal Cube | `botania:corporea_crystal_cube` |
| Corporea Block | `botania:corporea_block` |
| Branch of Yggdrasil | `mythicbotany:yggdrasil_branch` |
| Gjallarhorn | `mythicbotany:gjallar_horn_empty` |
| Water from the Well of Mimir | `mythicbotany:gjallar_horn_full` |
| Rune Holder | `mythicbotany:rune_holder` |
| Central Rune Holder | `mythicbotany:central_rune_holder` |
| Petrunia | `mythicbotany:petrunia` |
| Rune Tablet of Fimbultyr | `mythicbotany:fimbultyr_tablet` |
| Ring of Andwari | `mythicbotany:andwari_ring` |
| Mjöllnir | `mythicbotany:mjoellnir` |
| Blood of Kvasir | `mythicbotany:kvasir_blood` |
| Mead of Kvasir | `mythicbotany:kvasir_mead` |
| Elementium Ore | `mythicbotany:elementium_ore` |
| Dragonstone Ore | `mythicbotany:dragonstone_ore` |
| Gold Ore | `mythicbotany:gold_ore` |
| Dreamcherry | `mythicbotany:dream_cherry` |
| Mana Collector | `mythicbotany:mana_collector` |
| Rod of the Lands | `botania:dirt_rod` |
| Rod of the Highlands | `botania:skydirt_rod` |
| Rod of the Depths | `botania:cobble_rod` |
| Rod of the Seas | `botania:water_rod` |
| Rod of the Hells | `botania:fire_rod` |
| Rod of the Skies | `botania:tornado_rod` |
| Rod of the Terra Firma | `botania:terraform_rod` |
| Rod of the Plentiful Mantle | `botania:divining_rod` |
| Rod of the Shaded Mesa | `botania:gravity_rod` |
| Rod of the Unstable Reservoir | `botania:missile_rod` |
| Rod of the Shifting Crust | `botania:exchange_rod` |
| Rod of the Molten Core | `botania:smelt_rod` |
| Band of Aura | `botania:aura_ring` |
| Ring of Magnetization | `botania:magnet_ring` |
| Sojourner's Sash | `botania:travel_belt` |
| Pyroclast Pendant | `botania:lava_pendant` |
| Cirrus Amulet | `botania:cloud_pendant` |
| Cloak of Virtue | `botania:holy_cloak` |
| Manaseer Monocle | `botania:monocle` |
| The Spectator | `botania:itemfinder` |
| Mana Blaster | `botania:mana_gun` |
| Vitreous Pickaxe | `botania:glass_pickaxe` |
| Horn of the Wild | `botania:horn_grass` |
| Drum of the Wild | `botania:drum_wild` |
| Assembly Halo | `botania:crafting_halo` |
| Manufactory Halo | `botania:auto_crafting_halo` |
| Hand of Ender | `botania:ender_hand` |
| Slime in a Bottle | `botania:slime_bottle` |
| Worldshaper's Sextant | `botania:sextant` |
| Worldshaper's Astrolabe | `botania:astrolabe` |
| Shard of Laputa | `botania:laputa_shard` |
| Pasture Seeds | `botania:grass_seeds` |
| Thorn Chakram | `botania:thorn_chakram` |
| Flare Chakram | `botania:flare_chakram` |
| Starcaller | `botania:star_sword` |
| Thundercaller | `botania:thunder_sword` |
| Soulscribe | `botania:ender_dagger` |
| Spellbinding Cloth | `botania:spell_cloth` |
| Resolute Ivy | `botania:keep_ivy` |
| Spectral Rail | `botania:ghost_rail` |
| Force Relay | `botania:piston_relay` |
| Ender Overseer | `botania:ender_eye_block` |
| Spreader Turntable | `botania:turntable` |
| Cocoon of Caprice | `botania:cocoon` |
| Fel Pumpkin | `botania:fel_pumpkin` |
| Animated Torch | `botania:animated_torch` |
| Abstruse Platform | `botania:abstruse_platform` |
| Spectral Platform | `botania:spectral_platform` |
| Manastorm Charge | `botania:mana_bomb` |
| Starfield Creator | `botania:starfield` |
| Tiny Potato | `botania:tiny_potato` |
| Cacophonium | `botania:cacophonium` |
| Fluix Mana Pool | `appbot:fluix_mana_pool` |
| ME Mana Cell Housing | `appbot:mana_cell_housing` |
| Mana P2P Tunnel | `appbot:mana_p2p_tunnel` |

40 Namen ohne Sprachschlüssel (Sammelbezeichnungen, Bildunterschriften, Vanilla) nicht aufgeführt.
