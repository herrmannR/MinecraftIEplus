# Questtexte Botania und MythicBotany

> Stand 2026-10-17, Minecraft 1.20.1. Entwurf für FTB Quests. Botania hat das **Lexica Botania** (`botania:lexicon`, Patchouli); MythicBotany hängt sich mit den Kategorien *Alfheim* und *MythicBotany* hinein, Applied Botanics bringt kein eigenes Kapitel (`../19_HILFEBUECHER.md`). Die Texte nennen deshalb nur Ziel, Fundstelle im Buch und die Abweichungen des Packs. Gegliedert nach den Meilensteinen BO1 bis BO7 der Meilensteinkarte; die Kapitel sind dort Arbeitstitel.
> Quellen: `../modpfade/botania/WISSEN.md`, Meilensteinkarte, `../01_PROGRESSION.md`, `../18_STORY.md` (Abschnitt 5, Funde), `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md`. Kategorie- und Eintragstitel aus `assets/botania/patchouli_books/lexicon/en_us/` und den Sprachdateien der JARs (Botania 456, MythicBotany 4.0.4). Item-IDs gegen die Sprachdateien geprüft. Für Botania gibt es keine KubeJS-Änderungen.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren. Wo eine Quest an die Story gehängt wird (Elf am Portal, Mead of Kvasir vom Meister, Gaia als Prüfung), setzt der User einen Satz davor.
- **Anrede „du“**, Item-, Kategorie- und Eintragsnamen englisch wie im Spiel.
- **Buch:** Kategorie → Eintrag, so wie sie im Lexica Botania heißen. Die Kategorien: *Basics and Mechanics*, *Mana Manipulation*, *Generating Flora*, *Functional Flora*, *Natural Apparatus*, *Mystical Items*, *Trinkets and Accessories*, *Ender Artifacts*, *Alfhomancy*, *Miscellaneous*; MythicBotany: *Alfheim*, *MythicBotany*.
- **Hauptweg** = nötig für spätere Ziele. **Nebenquest** = stellt den Mod in der Breite vor.
- **Pack-Änderungen** mit ⚙️. Sie stehen nicht im Buch.
- 🔵 = noch nicht entschieden oder nicht belegt.
- BO1 bis BO3 liegen vor dem Mond. Laut Story gibt es dort noch kein Questbuch (`../18_STORY.md`, O31 offen). Die Texte sind trotzdem geschrieben, damit sie nachgereicht oder als Notizen genutzt werden können.

---

## BO1 · Blüten und Lebendholz (K1 Ankunft)

### BO1-01 Lexica Botania · Hauptweg
**Aufgabe:** `botania:lexicon`

Botania erklärt sich selbst: Das Lexikon zeigt jede Blume, jedes Gerät und alle Rezepte. Lies es, wann immer eine Quest darauf verweist.
Buch: Basics and Mechanics → Welcome To Botania, Lexica Botania.

### BO1-02 Mystical Flowers · Hauptweg
**Aufgabe:** 4 × `botania:white_petal`

Die bunten Blumen wachsen überall in der Overworld und liefern Petals, den Grundstoff des Mods. Weiße brauchst du gleich für die Pure Daisy.
Buch: Basics and Mechanics → Mystical Flowers.

### BO1-03 Petal Apothecary · Hauptweg
**Aufgabe:** `botania:apothecary_default`

In der Apothecary entstehen alle besonderen Blumen.
Buch: Basics and Mechanics → Petal Apothecary.

### BO1-04 Pure Daisy · Hauptweg
**Aufgabe:** `botania:pure_daisy`, `botania:livingwood_log`, `botania:livingrock`

Die erste besondere Blume: Sie macht aus Holz Livingwood und aus Stein Livingrock, die Baustoffe für fast alles Weitere.
Buch: Basics and Mechanics → Pure Daisy.

### BO1-05 Wand of the Forest · Hauptweg
**Aufgabe:** `botania:twig_wand`

Der Stab verbindet Blumen mit Spreadern und Pools und zeigt dir deren Zustand.
Buch: Basics and Mechanics → Wand of the Forest.

### BO1-06 Flower Pouch · Nebenquest
**Aufgabe:** `botania:flower_bag`

Sammelt Blumen beim Aufheben, damit das Inventar frei bleibt.
Buch: Basics and Mechanics → Flower Pouch.

---

## BO2 · Mana und Manasteel (K2 Würdig sein)

### BO2-01 Erste Mana-Blume · Hauptweg
**Aufgabe:** `botania:endoflame` oder `botania:hydroangeas`

Erzeugende Blumen machen Mana: die Endoflame aus Brennstoff, die Hydroangeas aus Wasser.
Buch: Generating Flora → Generating Flora, Endoflame, Hydroangeas.

### BO2-02 Mana Spreader · Hauptweg
**Aufgabe:** `botania:mana_spreader`

Der Spreader sammelt das Mana der Blumen und schießt es weiter.
Buch: Mana Manipulation → Introduction to Mana, Mana Spreader.

### BO2-03 Mana Pool · Hauptweg
**Aufgabe:** `botania:mana_pool`

Der Pool speichert Mana und ist zugleich die Werkbank für Mana Infusion.
Buch: Mana Manipulation → Mana Pool.

### BO2-04 Manasteel · Hauptweg
**Aufgabe:** `botania:manasteel_ingot`

Eisen in einen gefüllten Pool werfen. Manasteel ist das erste Metall des Mods.
Buch: Mana Manipulation → Mana Pool.
⚙️ Mit TCIntegrations ist Manasteel auch ein Werkzeugmaterial für Tinkers, ebenso Livingwood, Livingrock und Mana Infused String.

### BO2-05 Mana Pearl und Mana Diamond · Hauptweg
**Aufgabe:** `botania:mana_pearl`, `botania:mana_diamond`

Ebenfalls aus dem Pool. Die Mana Pearl brauchst du für den Runic Altar.
Buch: Mana Manipulation → Mana Pool.

### BO2-06 Manasteel-Ausrüstung · Nebenquest
**Aufgabe:** `botania:manasteel_pick`

Werkzeuge und Rüstung, die sich mit Mana aus dem Inventar selbst reparieren.
Buch: Mystical Items → Manasteel Equipment.

### BO2-07 Mana Tablet · Nebenquest
**Aufgabe:** `botania:mana_tablet`

Ein tragbarer Mana-Speicher für Werkzeuge und Geräte.
Buch: Mana Manipulation → Mana Tablet.

---

## BO3 · Runenaltar (K3 Industrie)

### BO3-01 Runic Altar · Hauptweg
**Aufgabe:** `botania:runic_altar`

Am Altar entstehen die Runen. Die meisten besseren Blumen brauchen sie.
Buch: Basics and Mechanics → Runic Altar.

### BO3-02 Elementrunen · Hauptweg
**Aufgabe:** `botania:rune_water`, `botania:rune_fire`, `botania:rune_earth`, `botania:rune_air`

Die vier Grundrunen.
Buch: Basics and Mechanics → Runic Altar.
Hinweis: Die Rune of Fire braucht Zutaten aus dem Nether.

### BO3-03 Rune of Mana und Jahreszeiten · Nebenquest
**Aufgabe:** `botania:rune_mana`, `botania:rune_spring`, `botania:rune_summer`, `botania:rune_autumn`, `botania:rune_winter`

Buch: Basics and Mechanics → Runic Altar.

### BO3-04 Runen der Todsünden · Nebenquest
**Aufgabe:** `botania:rune_lust`, `botania:rune_gluttony`, `botania:rune_greed`, `botania:rune_sloth`, `botania:rune_wrath`, `botania:rune_envy`, `botania:rune_pride`

Die teuersten Runen, mit Mana Diamonds.
Buch: Basics and Mechanics → Runic Altar.

### BO3-05 Bessere Mana-Blumen · Nebenquest
**Aufgabe:** eine von `botania:thermalily`, `botania:gourmaryllis`, `botania:munchdew`, `botania:rosa_arcana`, `botania:entropinnyum`, `botania:kekimurus`, `botania:narslimmus`

Jede erzeugende Blume hat ihren eigenen Brennstoff, von Lava bis Explosionen.
Buch: Generating Flora → Eintrag der Blume.

### BO3-06 Funktionale Blumen · Nebenquest
**Aufgabe:** eine von `botania:hopperhock`, `botania:agricarnation`, `botania:rannuncarpus`, `botania:exoflame`, `botania:clayconia`, `botania:jaded_amaranthus`

Blumen, die mit Mana arbeiten: Items sammeln, Pflanzen wachsen lassen, Blöcke setzen, Öfen heizen.
Buch: Functional Flora → Functional Flora und Eintrag der Blume.

### BO3-07 Lenses und Sparks · Nebenquest
**Aufgabe:** `botania:lens_normal`, `botania:spark`

Lenses verändern den Strahl des Spreaders, Sparks verteilen Mana ohne Strahl.
Buch: Mana Manipulation → Mana Lenses, Sparks, Spark Augments.

### BO3-08 Botanical Brewery · Nebenquest
**Aufgabe:** `botania:brewery`, `botania:brew_flask`

Tränke aus Mana, mit mehreren Schlucken je Flasche.
Buch: Natural Apparatus → Botanical Brewery, Brewing Flasks.

### BO3-09 Crafty Crate · Nebenquest
**Aufgabe:** `botania:crafty_crate`

Botanias Autocrafter: Er baut Rezepte nach, die du ihm vorgibst.
Buch: Natural Apparatus → Open Crate, Crafty Crate.
⚙️ Im Pack gibt es weitere Autocrafter (IE Assembler, Mekanism Formulaic Assemblicator, später AE2); die Crate ist der magische Weg.

### BO3-10 Mana Fluxfield · Nebenquest
**Aufgabe:** `botania:mana_fluxfield`

Wandelt Mana in Strom um.
Buch: Mana Manipulation → Mana Fluxfield.
⚙️ Das Fluxfield ist die einzige Brücke von Botania zur Technik. Der Strom passt in IE- und Mekanism-Netze; den Rückweg von Strom zu Mana gibt es nicht.

### BO3-11 Katalysatoren · Nebenquest
**Aufgabe:** `botania:alchemy_catalyst`, `botania:conjuration_catalyst`

Unter einem Pool verwandelt oder vermehrt ein Katalysator, was du hineinwirfst.
Buch: Natural Apparatus → Alchemising with Mana, Conjuring with Mana.

### BO3-12 Orechid · Nebenquest
**Aufgabe:** `botania:orechid`

Verwandelt Stein in Erz.
Buch: Functional Flora → Orechid.
⚙️ Die Orechid macht nur Vanilla-Erze. Erze von IE, Mekanism, Blue Skies und den Planeten liefert sie nicht.

### BO3-13 Mana Enchanter · Nebenquest
**Aufgabe:** `botania:enchanter`

Verzaubert Items mit Mana, gezielt und ohne Zufall.
Buch: Natural Apparatus → Mana Pylon, Enchanting with Mana.

---

## BO4 · Terrasteel (K6 Der Mars)

### BO4-01 Terrestrial Agglomeration Plate · Hauptweg
**Aufgabe:** `botania:terra_plate`

Die Platte verschmilzt Manasteel, Mana Pearl und Mana Diamond mit viel Mana. Sie braucht einen festen Unterbau.
Buch: Basics and Mechanics → Terrasteel.

### BO4-02 Terrasteel · Hauptweg
**Aufgabe:** `botania:terrasteel_ingot`

Das zweite Metall des Mods und Baustoff des Elfenportals. Plane die Mana-Versorgung vorher: Ein Barren braucht etwa einen halben Pool.
Buch: Basics and Mechanics → Terrasteel.
⚙️ Mit TCIntegrations gibt Terrasteel einen Modifier für Tinkers-Werkzeuge.

### BO4-03 Terra-Ausrüstung · Nebenquest
**Aufgabe:** `botania:terra_sword` oder `botania:terra_pick` oder `botania:terrasteel_helmet`

Buch: Mystical Items → Terra Blade, Terra Shatterer, Terrasteel Armor.

---

## BO5 · Elfenportal (K10 Der Elf)

### BO5-01 Natura Pylon · Hauptweg
**Aufgabe:** `botania:natura_pylon`

Das Portal zieht sein Mana über Natura Pylons aus Pools in der Nähe.
Buch: Alfhomancy → The Portal to Alfheim.

### BO5-02 Portal to Alfheim · Hauptweg
**Aufgabe:** `botania:alfheim_portal`, `botania:glimmering_livingwood`

Rahmen aus Livingwood, in der Mitte der Elven Gateway Core. Mit dem Wand of the Forest öffnest du es.
Buch: Alfhomancy → The Portal to Alfheim, A Message from Elven Garde.
⚙️ Hindurchgehen kannst du noch nicht: MythicBotany lässt nur durch, wer den Mead of Kvasir getrunken hat (BO6-01). Bis dahin dient das Portal dem Handel.

### BO5-03 Elfenhandel · Hauptweg
**Aufgabe:** `botania:elementium_ingot`, `botania:pixie_dust`, `botania:dragonstone`, `botania:dreamwood`

Was du ins Portal wirfst, tauschen die Elfen gegen ihre Stoffe.
Buch: Alfhomancy → Resources of Alfheim.
⚙️ Bis Alfheim betreten werden kann, gibt es diese Stoffe nur über den Handel.

### BO5-04 Elementium-Ausrüstung · Nebenquest
**Aufgabe:** `botania:elementium_pickaxe`

Buch: Mystical Items → Elementium Equipment.

### BO5-05 Elven Mana Spreader · Nebenquest
**Aufgabe:** `botania:elven_spreader`

Schneller und sparsamer als der erste Spreader.
Buch: Mana Manipulation → Elven Mana Spreaders, Elven Mana Lenses.

---

## BO6 · Alfheim betreten (K12 Ausbildung)

### BO6-01 Mead of Kvasir · Hauptweg
**Aufgabe:** `mythicbotany:kvasir_mead`

Der Met öffnet dir das Portal nach Alfheim.
Buch: Alfheim → The Mead of Kvasir.
⚙️ 🔵 Im Buch liegt der Met hinter dem Guardian of Gaia II (Blood of Kvasir). Im Pack kommt Alfheim vor Gaia; wie du den Met bekommst (Quest-Belohnung oder gesperrtes Rezept), ist noch nicht entschieden. Text nach der Entscheidung anpassen.

### BO6-02 Alfheim · Hauptweg
**Aufgabe:** Dimension `mythicbotany:alfheim` betreten

Die Welt der Elfen. Elementium und Dragonstone liegen hier als Erz, dazu viel Gold.
Buch: Alfheim → Alfheim Landscape, Resources of Alfheim.

### BO6-03 Runen der neun Welten · Hauptweg
**Aufgabe:** `mythicbotany:midgard_rune`, `mythicbotany:alfheim_rune`, `mythicbotany:nidavellir_rune`, `mythicbotany:joetunheim_rune`, `mythicbotany:muspelheim_rune`, `mythicbotany:niflheim_rune`, `mythicbotany:asgard_rune`, `mythicbotany:vanaheim_rune`, `mythicbotany:helheim_rune`

Neun neue Runen am Runic Altar.
Buch: MythicBotany → Runes of the Nine Worlds.
Hinweis: Die Rune of Asgard braucht einen Netherite-Barren.
⚙️ Netherite lässt sich im Pack über die Alchemical Reaction Chamber (ARC) von Blood Magic vervielfachen.

### BO6-04 Mana Infuser · Hauptweg
**Aufgabe:** `mythicbotany:mana_infuser`

Die Weiterentwicklung der Terra Plate, mit eigenem Unterbau.
Buch: MythicBotany → The Mana Infuser.

### BO6-05 Alfsteel · Hauptweg
**Aufgabe:** `mythicbotany:alfsteel_ingot`

Elementium, Dragonstone und Pixie Dust im Infuser, mit noch mehr Mana als Terrasteel.
Buch: MythicBotany → The Mana Infuser.

### BO6-06 Alfsteel Pylon · Hauptweg
**Aufgabe:** `mythicbotany:alfsteel_pylon`

Buch: MythicBotany → Alfsteel Pylons.
⚙️ Im Pack braucht der Gaia Pylon den Alfsteel Pylon (BO7-01).

### BO6-07 Alfsteel-Werkzeuge · Nebenquest
**Aufgabe:** `mythicbotany:alfsteel_pick` oder `mythicbotany:alfsteel_sword` oder `mythicbotany:alfsteel_axe`

Upgrade der Terra-Werkzeuge am Smithing Table.
Buch: MythicBotany → Alfsteel Tools.

### BO6-08 Greatest Band of Mana · Nebenquest
**Aufgabe:** `mythicbotany:mana_ring_greatest`

Buch: MythicBotany → Alfsteel Mana Bands, Elemental Rings.

### BO6-09 Blumen von MythicBotany · Nebenquest
**Aufgabe:** eine von `mythicbotany:aquapanthus`, `mythicbotany:exoblaze`, `mythicbotany:hellebore`, `mythicbotany:wither_aconite`, `mythicbotany:raindeletia`

Buch: MythicBotany → Generating Flora, Functional Flora.

---

## BO7 · Gaia (K13 Die Prüfung)

> ⚠️ **Der Guardian of Gaia ist ein schwerer Bosskampf.** Lies den Eintrag im Buch vor dem Ritual ganz. Lass keine Wertsachen in der Arena liegen.

### BO7-01 Beacon und Gaia Pylons · Hauptweg
**Aufgabe:** `minecraft:beacon`, `botania:gaia_pylon`

Das Ritual braucht einen aktiven Beacon mit Gaia Pylons darum.
Buch: Alfhomancy → Ritual of Gaia.
⚙️ Im Pack wird der Gaia Pylon aus dem Alfsteel Pylon gebaut, nicht wie im Buch beschrieben.
Hinweis: Der Beacon braucht einen Nether Star.

### BO7-02 Guardian of Gaia · Hauptweg
**Aufgabe:** `botania:life_essence`

Besiege den Guardian. Er lässt Gaia Spirits fallen.
Buch: Alfhomancy → Ritual of Gaia.

### BO7-03 Gaia Spirit Ingot · Hauptweg
**Aufgabe:** `botania:gaia_ingot`

Grundstoff der stärksten Items und Schlüssel zum zweiten Ritual.
Buch: Alfhomancy → Ritual of Gaia, Ritual of Gaia II.

### BO7-04 Guardian of Gaia II · Nebenquest
**Aufgabe:** `botania:dice`

Die härtere Fassung des Kampfs. Der Dice of Fate verwandelt sich in eins der Relikte.
Buch: Alfhomancy → Ritual of Gaia II, The Relics of the Aesir, The Relics of the Aesir II.

### BO7-05 Gaia-Ausrüstung · Nebenquest
**Aufgabe:** `botania:flight_tiara` oder `botania:gaia_spreader`

Buch: Ender Artifacts → Flügel Tiara; Mana Manipulation → Elven Mana Spreaders.

### Nebenquest-Reihe Corporea

Corporea ist Botanias Lagersystem. Technisch geht es schon ab dem Elfenhandel (BO5), die Karte führt es hier.

| Quest | Aufgabe | Buch: Ender Artifacts → |
|---|---|---|
| BO7-06 Ender Air | `botania:ender_air_bottle` | Extracting Ender Air |
| BO7-07 Corporea Index | `botania:corporea_spark`, `botania:corporea_index` | Basics of Corporea, Corporea Index |
| BO7-08 Corporea ausbauen | `botania:corporea_funnel` oder `botania:corporea_interceptor` oder `botania:corporea_crystal_cube` | Corporea Funnel, Corporea Interceptor, Corporea Crystal Cube |

### Nebenquest-Reihe Mimir und Mjöllnir

Der späte Weg von MythicBotany. Im Buch führt er zum Mead of Kvasir; den hast du im Pack schon (BO6-01).

| Quest | Aufgabe | Buch: MythicBotany → |
|---|---|---|
| BO7-09 Well of Mimir | `mythicbotany:yggdrasil_branch`, `mythicbotany:gjallar_horn_full` | The well of Mimir |
| BO7-10 Rune Rituals | `mythicbotany:central_rune_holder` | Rune Rituals |
| BO7-11 Rune Tablet of Fimbultyr | `mythicbotany:fimbultyr_tablet` | Rune Rituals |
| BO7-12 Mjöllnir | `mythicbotany:mjoellnir` | Mjöllnir |

---

## Nebenquests ohne Meilenstein (Werkzeuge und Trinkets)

Ab dem Runic Altar machbar, ohne feste Stelle im Weg.

| Quest | Aufgabe | Buch |
|---|---|---|
| BOX-01 Band of Mana | `botania:mana_ring` | Trinkets and Accessories → Band of Mana |
| BOX-02 Ring of Magnetization | `botania:magnet_ring` | Trinkets and Accessories → Ring of Magnetization |
| BOX-03 Sojourner's Sash | `botania:travel_belt` | Trinkets and Accessories → Sojourner's Sash |
| BOX-04 Rod of the Lands | `botania:dirt_rod` | Mystical Items → Rod of the Lands |
| BOX-05 Livingwood Bow | `botania:livingwood_bow` | Mystical Items → Livingwood Bow |
| BOX-06 Tiny Potato | `botania:tiny_potato` | Miscellaneous → Tiny Potato |
| BOX-07 Mana im ME-Netz | `appbot:mana_cell_housing` oder `appbot:mana_p2p_tunnel` | kein Eintrag (Applied Botanics) |

⚙️ BOX-07: Applied Botanics lagert Mana in AE2. AE2 ist im Pack Endgame, die Quest gehört deshalb hinter den Meilenstein des ME-Systems.

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | Steht in | Stand |
|---|---|---|
| Alfheim nur mit Mead of Kvasir (MythicBotany `lockAlfheim`); Portal bis dahin nur Handel | BO5-02, BO5-03, BO6-01 | 🟢 Mod-Verhalten (Fund in `18_STORY.md`); 🔵 für 1.20.1 im Spiel prüfen |
| Mead of Kvasir vor Gaia, nicht über Blood of Kvasir | BO6-01, Reihe Mimir | 🔵 offen: Quest-Belohnung oder gesperrtes Rezept (Meilenstein BO6 „Meister · Mead of Kvasir ?“) |
| Gaia Pylon braucht Alfsteel Pylon (MythicBotany `replaceGaiaRecipe`), damit Gaia nach Alfsteel | BO6-06, BO7-01 | 🟢 Config an; 🔵 in JEI prüfen (Ü P1) |
| Mana Fluxfield einzige Brücke Mana → Strom | BO3-10 | 🟢 Fund, keine Änderung |
| Orechid nur Vanilla-Erze, Pack-Erze fehlen | BO3-12 | 🟢 Fund, keine Änderung geplant |
| Werkzeugmaterialien und Modifier über TCIntegrations | BO2-04, BO4-02 | 🟢 Mod installiert |
| Netherite-Vervielfachung über die ARC von Blood Magic | BO6-03 | 🟢 Fund (Ü BM5) |
| Weitere Autocrafter neben der Crafty Crate | BO3-09 | 🟢 |
| Applied Botanics hinter AE2 | BOX-07 | 🟢 AE2 Endgame |

## 🔵 Offen vor dem Einbau

- **O31:** BO1 bis BO3 liegen vor dem Mond. Ob sie im Questbuch nachgereicht werden oder als Notizen stehen, entscheidet der User.
- **Mead of Kvasir:** Weg im Pack festlegen, dann BO6-01 umschreiben. Hängt an der Story (Meister in Part 2).
- **Gaia-Pylon-Rezept** in JEI prüfen (Test 41 in `../11_TESTING.md`). Gilt doch das Botania-Original, liegt Gaia nicht mehr von selbst hinter Alfsteel; dann die ⚙️-Zeilen in BO6-06 und BO7-01 streichen.
- **`lockAlfheim`** in 1.20.1 im Spiel prüfen (Test 40): Kommt man ohne Met wirklich nicht durch das Portal?
- **Botania-Items für Story und Raketen** legt der User fest: Beweis-Item für „Würdig sein“ (K2), Schutz-Item für den Altar im Tempel (Rune oder Terrasteel), magische Komponente der Rakete T4 (Item aus dem Elfenportal oder Terrasteel), Rumpf-Material T5 aus Alfheim. Die betroffenen Quests (BO2, BO3, BO4, BO5-03, BO6-02) bekommen dann eine zusätzliche Aufgabe oder einen Story-Satz.
- **Corporea:** bei BO7 lassen (wie auf der Karte) oder schon nach BO5 anbieten.
- **Aufgabe BO1-02:** Statt weißer Petals ginge auch „eine beliebige Mystical Flower“ über einen Tag; beim Einbau entscheiden.
