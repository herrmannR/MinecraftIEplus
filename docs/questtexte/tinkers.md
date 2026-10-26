# Questtexte Tinkers' Construct

> Stand 2026-10-18, Minecraft 1.20.1. Entwurf für FTB Quests. Tinkers hat sechs eigene Bücher (`../19_HILFEBUECHER.md`): *Materials and You*, *Puny Smelting*, *Mighty Smelting*, *Fantastic Foundry*, *Tinkers' Gadgetry* und die *Encyclopedia of Tinkering*. Die Texte nennen deshalb nur Ziel, Fundstelle im Buch und die Abweichungen des Packs. Die Addons TCIntegrations, Tinkers Levelling Addon und Blood-Smeltery haben kein Buch; sie werden knapp erklärt. Gegliedert nach den Meilensteinen TK1 bis TK4 der Meilensteinkarte, dazu eine Nebenquest-Reihe „Ausbau“.
> Quellen: `../modpfade/tinkers/WISSEN.md`, Meilensteinkarte, `../01_PROGRESSION.md`, `../07_CROSSMOD_INTEGRATION.md` (Tinkers in den höheren Stufen), `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md` (T1–T7), `kubejs/server_scripts/crossmod/tinkers_legierungen.js` und `blood_smeltery.js`. Abschnittsnamen aus `assets/tconstruct/book/<buch>/en_us/language.lang`, Einträge aus `book/<buch>/sections/*.json` (TConstruct 3.12.1.231). Item-IDs gegen die Sprachdateien geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren. Wo eine Quest an die Story gehängt wird (Würdigkeits-Beweis beim Droiden), setzt der User einen Satz davor.
- **Anrede „du“**, Item-, Buch- und Abschnittsnamen englisch wie im Spiel.
- **Buch:** Buch → Abschnitt → Eintrag. Die Abschnittsnamen stehen so im Spiel. Die Einträge sind nach ihren internen Namen benannt (z. B. *Controller*, *Structure*, *Alloying*); die Überschrift im Buch kann leicht abweichen.
- **Die Bücher bauen aufeinander auf:** *Materials and You* → Further Reading zeigt, wie die nächsten Bücher entstehen. Jede Quest, die ein neues Buch braucht, verlangt es als Aufgabe.
- **Hauptweg** = nötig für spätere Ziele. **Nebenquest** = stellt den Mod in der Breite vor.
- **Pack-Änderungen** mit ⚙️. Sie stehen nicht im Buch.
- 🔵 = noch nicht entschieden oder nicht belegt.
- TK1 und TK2 liegen vor dem Mond. Laut Story gibt es dort noch kein Questbuch (`../18_STORY.md`, O31 offen). Die Texte sind trotzdem geschrieben, damit sie nachgereicht oder als Notizen genutzt werden können.
- 🟢 Würdigkeits-Beweis in K2 (O67, O78): Vorschlaghammer ganz aus Kobalt (TK2-06); Kobalt deshalb schon in TK2-04.

---

## TK1 · Werkzeuge und Melter (K1 Ankunft)

### TK1-01 Materials and You · Hauptweg
**Aufgabe:** `tconstruct:materials_and_you`

Tinkers baut Werkzeuge aus Teilen, und jedes Teil kann aus einem anderen Material sein. Das erste Buch erklärt Werkbänke, Werkzeuge und Materialien der ersten Stufe.
Buch: Materials and You → Introduction.

### TK1-02 Pattern und Part Builder · Hauptweg
**Aufgabe:** `tconstruct:pattern`, `tconstruct:part_builder`

Aus Patterns schneidet der Part Builder Werkzeugteile aus Holz, Stein, Flint, Knochen oder Kupfer.
Buch: Materials and You → Introduction → Pattern, Part Builder.

### TK1-03 Tinker Station · Hauptweg
**Aufgabe:** `tconstruct:tinker_station`

Hier setzt du die Teile zu Werkzeugen zusammen, reparierst und tauschst Teile.
Buch: Materials and You → Introduction → Tinker Station; Tools → Repairing, Part Swapping.

### TK1-04 Das erste Werkzeug · Hauptweg
**Aufgabe:** `tconstruct:pickaxe`, `tconstruct:hand_axe`, `tconstruct:sword`

Bau eine Pickaxe, eine Hand Axe oder ein Sword. Kupfer ist das einzige Metall, das ohne Schmelze geht.
Buch: Materials and You → Tools; Tier 1 General Materials.
Gut zu wissen: In den Welten von Blue Skies sind Tinkers-Werkzeuge abgeschwächt, bis die Bosse dort besiegt sind. Das ist gewollt; Blue Skies bringt eigene Werkzeuge mit.

### TK1-05 Fernkampf · Nebenquest
**Aufgabe:** `tconstruct:crossbow`, `tconstruct:arrow`, `tconstruct:shuriken`, `tconstruct:throwing_axe`

Bogen, Armbrust und Wurfwaffen aus Teilen, wie die Werkzeuge.
Buch: Materials and You → Tools (Ranged); Tier 1 Ranged Materials; Basic Ammo Materials.

### TK1-06 Traveler's Gear · Nebenquest
**Aufgabe:** `tconstruct:travelers_helmet`, `tconstruct:travelers_chestplate`, `tconstruct:travelers_leggings`, `tconstruct:travelers_boots`

Leichte Rüstung mit viel Platz für Modifier, ohne seltene Zutaten.
Buch: Materials and You → Basic Armor.

### TK1-07 Ordnung in der Werkstatt · Nebenquest
**Aufgabe:** `tconstruct:crafting_station`, `tconstruct:part_chest`

Die Crafting Station behält ihren Inhalt, die Part Chest nimmt Teile und Patterns auf.
Buch: Materials and You → Introduction → Storage.

### TK1-08 Puny Smelting und Seared Bricks · Hauptweg
**Aufgabe:** `tconstruct:puny_smelting`, `tconstruct:grout`, `tconstruct:seared_brick`

Für Metallteile musst du schmelzen. Grout wird im Ofen zu Seared Brick, dem Baustoff aller frühen Schmelzgeräte. Das zweite Buch erklärt den Weg.
Buch: Materials and You → Further Reading; Puny Smelting → Introduction.

### TK1-09 Seared Melter mit Heater · Hauptweg
**Aufgabe:** `tconstruct:seared_melter`, `tconstruct:seared_heater`

Der Melter schmilzt Erze und Barren, der Heater darunter liefert die Hitze.
Buch: Puny Smelting → Melter.

### TK1-10 Faucet und Casting Table · Hauptweg
**Aufgabe:** `tconstruct:seared_faucet`, `tconstruct:seared_table`, `tconstruct:seared_basin`

Mit dem Faucet läuft das flüssige Metall auf den Casting Table (Barren, Teile) oder ins Casting Basin (Blöcke).
Buch: Puny Smelting → Moving Fluids → Faucets, Channels; Casting → Casting.

### TK1-11 Gießen in Formen · Hauptweg
**Aufgabe:** `tconstruct:ingot_cast`, `tconstruct:pick_head`

Formen aus Sand halten einen Guss, Formen aus Gold halten ewig. Gieß damit das erste Werkzeugteil aus Metall.
Buch: Puny Smelting → Casting → Sand Cast, Gold Cast; Tier 2 General Materials.

### TK1-12 Erze schmelzen · Nebenquest
**Aufgabe:** Kontrollhaken

Ein Erz im Melter gibt mehr als im Ofen. Das gilt auch für die Erze von IE und Mekanism.
Buch: Puny Smelting → Melter.
Im Pack: IE und Mekanism verdoppeln Erze ebenfalls. Für mehr als die doppelte Ausbeute führt Mekanism weiter (`mekanism.md`, Erzvervielfachung).

### TK1-13 Modifier Worktable · Nebenquest
**Aufgabe:** `tconstruct:modifier_worktable`

Werkzeuge bekommen in der Tinker Station Modifier aus Items. Am Worktable entfernst und sortierst du sie wieder.
Buch: Puny Smelting → Modifier Worktable; Upgrades; Slotless Modifier.

### TK1-14 Fremdmetalle · Nebenquest
**Aufgabe:** `tconstruct:pick_head` (Kontrollhaken: Teil aus Silver, Lead oder Aluminum) 🔵

Die Metalle von IE und Mekanism sind auch Tinkers-Materialien: Aluminum, Lead, Silver, Steel, Osmium, Bronze, Constantan, Electrum und Uran (als Necronium). Treated Wood aus Creosote zählt als Holz.
Buch: Puny Smelting → Tier 2 General Materials (zeigt nur, was im Spiel geladen ist).

---

## TK2 · Smeltery (K2 Würdig sein)

### TK2-01 Mighty Smelting · Hauptweg
**Aufgabe:** `tconstruct:mighty_smelting`

Das dritte Buch erklärt die Smeltery, das Legieren und die großen Werkzeuge.
Buch: Puny Smelting → Further Reading.

### TK2-02 Smeltery · Hauptweg
**Aufgabe:** `tconstruct:smeltery_controller`, `tconstruct:seared_drain`

Die Smeltery schmilzt viele Dinge gleichzeitig und hält mehrere Flüssigkeiten. Sie ist ein Bau aus Seared Bricks mit Controller, Drain und Tank.
Buch: Mighty Smelting → Smeltery → Controller, Structure, Seared Drain.

### TK2-03 Legieren · Hauptweg
**Aufgabe:** `tconstruct:slimesteel_ingot`, `tconstruct:rose_gold_ingot`, `tconstruct:pig_iron_ingot`, `tconstruct:amethyst_bronze_ingot`

Liegen die richtigen Metalle zusammen in der Smeltery, entsteht eine Legierung. Sie öffnen die Materialien der dritten Stufe.
Buch: Mighty Smelting → Smeltery → Alloying; Tier 3 General Materials.
Im Pack: Bronze, Constantan und Electrum kannst du auch hier legieren, nicht nur bei IE und Mekanism.

### TK2-04 Kobalt · Hauptweg
**Aufgabe:** `tconstruct:raw_cobalt`, `tconstruct:cobalt_ingot`

> **Vorsicht Nether:** Für Kobalt musst du in den Nether. Es liegt tief, am häufigsten auf Höhe 8 bis 32.

Kobalt ist das Metall des Nethers und Zutat der starken Legierungen. Die Smeltery schmilzt es mit Lava.
Buch: Tinkers' Gadgetry → Exploration → Cobalt Ore.
⚙️ Im Pack schon in K2 (User, 2026-10-26, O78): Der Vorschlaghammer aus Kobalt ist Teil von „Würdig sein“. (Früher TK3-01.)

### TK2-05 Tinker's Anvil · Hauptweg
**Aufgabe:** `tconstruct:tinkers_anvil`

Werkzeuge mit vier Teilen brauchen den Anvil statt der Tinker Station.
Buch: Mighty Smelting → Introduction → Tinker's Anvil.
Im Pack: Der Anvil nimmt auch Blöcke aus Bronze, Electrum, Constantan, Refined Obsidian und Refined Glowstone. Bronze aus dem Metallurgic Infuser von Mekanism ist ein früher Weg dorthin.

### TK2-06 Vorschlaghammer aus Kobalt · Hauptweg
**Aufgabe:** `tconstruct:sledge_hammer`

Bau am Anvil einen Vorschlaghammer, bei dem jedes Teil aus Kobalt ist: zwei Hammerköpfe, ein schwerer Griff und eine große Platte. DD3R8 nimmt ihn als Beweis eures handwerklichen Geschicks.
Buch: Mighty Smelting → Broad Tools → Sledge Hammer.
⚙️ Die Quest erkennt nur den Hammer; dass alle Teile aus Kobalt sind, prüft ein Skript bei der Abgabe an DD3R8 (O67).

### TK2-07 Slime-Inseln und Geoden · Nebenquest
**Aufgabe:** `tconstruct:sky_slime_ball`, `tconstruct:steel_shard`

In der Welt schweben Slime-Inseln, im Boden liegen Slime-Geoden. Ihr Slime ist Zutat vieler Legierungen. Steel Shards aus Skyslime-Inseln und Geoden sind Stahl ohne IE.
Buch: Tinkers' Gadgetry → Exploration (Buch erst in der Reihe „Ausbau“, TKA-01).

### TK2-09 Große Werkzeuge · Nebenquest
**Aufgabe:** `tconstruct:vein_hammer`, `tconstruct:excavator`, `tconstruct:broad_axe`, `tconstruct:scythe`, `tconstruct:cleaver`, `tconstruct:longbow`

Werkzeuge für Flächen, Adern und ganze Bäume.
Buch: Mighty Smelting → Broad Tools.

### TK2-10 Plate Armor · Nebenquest
**Aufgabe:** `tconstruct:plate_helmet`, `tconstruct:plate_chestplate`, `tconstruct:plate_leggings`, `tconstruct:plate_boots`

Schwere Rüstung aus Plating und Maille. Das Metall bestimmt die Schutzart.
Buch: Mighty Smelting → Mighty Armor (Materialien); Fantastic Foundry → Fantastic Armor (die Teile). 🔵 Prüfen, ob das Mighty-Smelting-Buch die Teile schon selbst zeigt.

### TK2-11 Entity Melting · Nebenquest
**Aufgabe:** Kontrollhaken

Lebewesen in einer laufenden Smeltery geben Flüssigkeiten ab, Dorfbewohner etwa Smaragd.
Buch: Mighty Smelting → Entity Melting.

---

## TK3 · Alloyer und Foundry (K5 Erzketten)

> **Vorsicht Nether:** Für Nether Grout und Blazing Blood musst du in den Nether. (Kobalt kommt seit O78 schon in TK2-04.)

### TK3-02 Fantastic Foundry · Hauptweg
**Aufgabe:** `tconstruct:fantastic_foundry`, `tconstruct:nether_grout`, `tconstruct:scorched_brick`

Das vierte Buch. Aus Nether Grout werden Scorched Bricks, der Baustoff von Alloyer und Foundry.
Buch: Materials and You → Further Reading; Fantastic Foundry → Introduction.

### TK3-03 Scorched Alloyer · Nebenquest
**Aufgabe:** `tconstruct:scorched_alloyer`

Ein einzelner Block, der Legierungen ohne Smeltery herstellt.
Buch: Fantastic Foundry → Alloyer.

### TK3-04 Foundry · Hauptweg
**Aufgabe:** `tconstruct:foundry_controller`

Die Foundry legiert nicht, gibt aber beim Erzschmelzen ein zweites Metall dazu: Kupfer gibt Gold, Kobalt gibt Eisen, Eisen gibt Stahl.
Buch: Fantastic Foundry → Foundry → Controller, Structure, Byproducts.

### TK3-05 Blazing Blood · Hauptweg
**Aufgabe:** Flüssigkeit `tconstruct:blazing_blood`

Der heißeste Brennstoff. Er braucht die Legierungen der vierten Stufe.
Buch: Fantastic Foundry → Blazing Blood.
⚙️ 🔵 Blazing Blood soll im Pack auch Zutat in Rezepten anderer Mods werden (Weg A); welche Rezepte, ist offen.

### TK3-06 Legierungen der vierten Stufe · Nebenquest
**Aufgabe:** `tconstruct:manyullyn_ingot`, `tconstruct:hepatizon_ingot`, `tconstruct:queens_slime_ingot`

Die stärksten Metalle des Mods, nur mit Blazing Blood als Brennstoff.
Buch: Fantastic Foundry → Tier 4 General Materials; Fantastic Armor.
⚙️ Refined Obsidian kannst du hier nicht legieren. Es entsteht nur über Mekanism. Fertige Barren lassen sich trotzdem einschmelzen und gießen.
⚙️ 🔵 Auch Manyullyn und Queen's Slime sollen Zutat anderer Mods werden (Weg A, offen).

### TK3-07 Blood-Smeltery · Nebenquest (nach Blutaltar, BM1)
**Aufgabe:** Flüssigkeit `bloodsmeltery:demon_will`, `bloodsmeltery:molten_bloodbrass`

Das Addon verbindet Smeltery und Blood Magic: Demon Will wird flüssig, daraus entstehen Bloodbrass und Blood-Seared Stone als Werkzeugmaterial. Kein Buch.
⚙️ Life Essence entsteht nur am Blutaltar, nicht als Legierung in der Smeltery. Blank Slates und Runen werden nicht gegossen, sondern am Altar gemacht. Einschmelzen von Slates und Runen zu Blood-Seared Stone geht weiter.
🔵 Das Addon ist in Version 1.2.1a teilweise defekt (nur eine von fünf Demonite-Flüssigkeiten). Vor dem Einbau im Spiel prüfen, was davon geht.

---

## TK4 · Planetenmetalle gießen (K7 Horchposten)

TCIntegrations hat kein Buch. Desh, Ostrum und Calorite erscheinen aber in den Materiallisten der Tinkers-Bücher, sobald sie geladen sind.

### TK4-01 Desh und Ostrum schmelzen · Hauptweg
**Aufgabe:** Flüssigkeit `tcintegrations:molten_desh`, Flüssigkeit `tcintegrations:molten_ostrum`

Die Metalle von Mond und Mars lassen sich in der Smeltery schmelzen und gießen.
⚙️ 🔵 Im Mod liegen sie nur auf Eisen-Niveau. Das Pack hebt Stufe und Werte an (Weg C); die Werte sind offen.

### TK4-02 Werkzeug aus dem All · Nebenquest
**Aufgabe:** `tconstruct:pick_head` (Kontrollhaken: Teil aus Desh oder Ostrum) 🔵

Werkzeugteile aus Desh, Ostrum und später Calorite tragen den Trait Oxygenated.
🔵 Was Oxygenated genau tut, steht noch nicht in den Quellen.

### TK4-03 Calorite · Nebenquest (nach Rakete T3)
**Aufgabe:** Flüssigkeit `tcintegrations:molten_calorite`, `ad_astra:calorite_ingot`

Das Metall der Venus, wie Desh und Ostrum gieß- und verbaubar.

### TK4-04 Raumfahrt-Modifier · Nebenquest
**Aufgabe:** Kontrollhaken (Tinkers-Rüstung mit einem Raumfahrt-Modifier)

Das Giselle Addon bringt Space Breathing, Space Fire Proof, Acid Rain Proof und Gravity Normalizing als Tinkers-Modifier. Beschrieben in `adastra.md`, RFX-02; hier nur als Verweis, damit die Quest nicht doppelt steht.

⚙️ 🔵 Weitere geplante Wege ohne eigene Quest, bis sie entschieden sind: eigene Tinkers-Materialien für Metalle ohne Material (Weg D, z. B. Terrasteel, Hellforged, Blue-Skies- und Star-Wars-Metalle), Modifier an späte Items (Weg E), einzelne Raketenteile nur gegossen (Weg F). Kommt einer davon, gehört er als Quest hierher.

---

## Nebenquest-Reihe: Ausbau (ab TK2)

Stellt die späten Teile des Mods vor. Die Quests hängen jeweils am genannten Meilenstein.

| Quest | Ab | Thema |
|---|---|---|
| TKA-01 | TK2 | Tinkers' Gadgetry |
| TKA-02 | TK2 | Encyclopedia of Tinkering |
| TKA-03 | TK2 | Werkzeuge leveln |
| TKA-04 | TK3 | Slime-Rüstung |
| TKA-05 | TK3 | Staffs |
| TKA-06 | TK2 | Ancient Tools |
| TKA-07 | TK2 | Gadgets |

### TKA-01 Tinkers' Gadgetry · Nebenquest
**Aufgabe:** `tconstruct:tinkers_gadgetry`

Das Buch über Erkundung, Slime-Inseln, Gadgets und die Slime-Ausrüstung.
Buch: Materials and You → Further Reading; Tinkers' Gadgetry → Introduction, Exploration.

### TKA-02 Encyclopedia of Tinkering · Nebenquest
**Aufgabe:** `tconstruct:encyclopedia`

Das Nachschlagewerk: alle Werkzeuge, Modifier und Flüssigkeiten in einem Band.
Buch: Puny Smelting → Further Reading.

### TKA-03 Werkzeuge leveln · Nebenquest
**Aufgabe:** Kontrollhaken

Jedes Werkzeug und jedes Rüstungsteil sammelt durch Benutzung Erfahrung (Modifier Improvable). Jede Stufe gibt einen zusätzlichen Modifier-Slot oder einen festen Bonus. Mit gehaltener Alt-Taste zeigt der Tooltip den Stand. Das kommt aus dem Tinkers Levelling Addon und steht in keinem Buch.

### TKA-04 Slime-Rüstung · Nebenquest
**Aufgabe:** `tconstruct:slime_helmet`, `tconstruct:slimy_chestplate`, `tconstruct:slime_leggings`, `tconstruct:slime_boots`, `tconstruct:slime_wings`

Rüstung aus Slime und Mob-Teilen, mit besonderen Fähigkeiten statt hoher Rüstungswerte.
Buch: Tinkers' Gadgetry → Slimy Armor; Slimesuit Materials.

### TKA-05 Staffs · Nebenquest
**Aufgabe:** `tconstruct:sky_staff`, `tconstruct:earth_staff`, `tconstruct:ichor_staff`, `tconstruct:ender_staff`

Stäbe aus Slime-Kristallen und Slimewood, gebaut für Interaktions-Abilities. Der Earthslime Staff braucht Kobalt.
Buch: Tinkers' Gadgetry → Staffs.

### TKA-06 Ancient Tools · Nebenquest
**Aufgabe:** `tconstruct:melting_pan`, `tconstruct:war_pick`, `tconstruct:battlesign`, `tconstruct:swasher`, `tconstruct:minotaur_axe`

Diese Werkzeuge kannst du nicht bauen, nur finden. Eins reicht.
Buch: Tinkers' Gadgetry → Ancient Tools.
🔵 Die Fundorte stammen aus dem Buch und setzen teils andere Mods voraus (Piratenorte, Labyrinthe). Prüfen, welche im Pack erreichbar sind; sonst die Quest auf die übrigen beschränken.

### TKA-07 Gadgets · Nebenquest
**Aufgabe:** `tconstruct:piggy_backpack`, `tconstruct:seared_fluid_cannon`, `tconstruct:clear_item_frame`

Kleinkram: Mobs auf dem Rücken tragen (passt zum Entity Melting), Flüssigkeiten verschießen, bessere Rahmen.
Buch: Tinkers' Gadgetry → Gadgets; Puny Smelting → Moving Fluids → Fluid Cannon.

---

## ⚙️ Pack-Änderungen in diesem Text

| Änderung | Wo im Text | Stand |
|---|---|---|
| Refined Obsidian nicht in der Smeltery legierbar, nur Mekanism | TK3-06 | 🟢 umgesetzt (`crossmod/tinkers_legierungen.js`), ungetestet |
| Life Essence nicht als Legierung; Slates und Runen nicht gießbar | TK3-07 | 🟢 umgesetzt (`crossmod/blood_smeltery.js`), ungetestet |
| Seltene Tinkers-Flüssigkeiten als Zutat anderer Mods (Weg A) | TK3-05, TK3-06 | 🔵 welche Rezepte |
| Desh, Ostrum, Calorite aufgewertet (Weg C) | TK4-01 | 🔵 Werte |
| Eigene Materialien, Modifier an späte Items, Gießen als Pflichtschritt (Wege D, E, F) | TK4, Schluss | 🔵 noch ohne Quest |

Keine Pack-Änderung, aber nicht im Buch: Fremdmetalle von IE und Mekanism (TK1-14), Anvil aus Bronze und Co. (TK2-05), Legieren von Bronze, Constantan, Electrum (TK2-03), Blue-Skies-Abschwächung (TK1-04).

## 🔵 Offen vor dem Einbau

1. Ob die Quests vor dem Mond (TK1, TK2) ins Questbuch kommen (O31 in `../18_STORY.md`).
2. 🟢 Erledigt: Würdigkeits-Beweis ist der Kobalthammer (TK2-06, O67, O78).
3. Aufgaben mit Material-Bedingung (TK1-12, TK1-14, TK4-02): FTB Quests prüft das Material eines Teils nur über NBT; einfacher als Kontrollhaken. Entscheiden beim Einbau.
4. Eintragstitel im Buch: hier nach internen Namen, im Spiel gegenlesen.
5. TK2-10: Ob Mighty Smelting die Plate-Teile zeigt oder erst Fantastic Foundry.
6. Blood-Smeltery 1.2.1a: welche Flüssigkeiten und Rezepte im Spiel gehen.
7. Trait Oxygenated (TK4-02): Wirkung nicht ausgelesen.
8. Ancient Tools: welche Fundorte im Pack existieren.
