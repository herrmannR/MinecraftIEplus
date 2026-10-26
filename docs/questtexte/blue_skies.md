# Questtexte Blue Skies (halbes Buch)

> Stand 2026-10-19, Minecraft 1.20.1. Entwurf für FTB Quests. Blue Skies hat das Blue Journal, aber ob es die Progression erklärt, ist nicht geprüft (`../19_HILFEBUECHER.md`). Deshalb gilt es als **halbes Buch**: Der Weg zu den vier Bossen (Portale, Werkzeuge, Dungeons, Kämpfe) ist ausgeschrieben, alles daneben verweist auf das Journal. Gegliedert nach den Meilensteinen BS1 bis BS4 der Meilensteinkarte; die Kapitel sind dort Arbeitstitel.
> Quellen: `../modpfade/blue_skies/WISSEN.md` und `data.js` (Journal, Rezepte, Loot, Weltgenerierung, Config der Testinstanz), `../03_ERZGENERATION.md`, `../01_PROGRESSION.md`, `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md`, Journal-Index aus `data/blue_skies/blue_skies/journal/entries/` im JAR. Alle IDs gegen die Sprachdateien der JARs geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren: Die Story schreibt der User. Der Strang um das Blue-Skies-Haus (Easy-NPC-Figur statt Guard, Nebenquests, Boss-Reihe, Alchemy Table, `../18_STORY.md`) wird dort vorangestellt; diese Texte beschreiben nur, was der Spieler tun muss.
- **Anrede „du“**, Item-Namen englisch wie im Spiel.
- **Hauptweg** = Quest der Meilensteinkette (Pflicht für spätere Ziele). **Nebenquest** = stellt den Mod in der Breite vor (Ketten von höchstens drei bis vier Quests).
- **Buch:** Das Journal heißt im Spiel *Blue Journal*, Teile General, Everbright, Everdawn. Einträge öffnen sich erst, wenn ihre Bedingung erfüllt ist (Welt betreten, Boss besiegt). Verweise stehen als „Buch: Blue Journal → Teil → Eintrag“; die Eintragsnamen sind die internen Namen aus dem JAR, im Spiel heißen sie wie das Item oder der Mob.
- **Pack-Änderungen** sind mit ⚙️ markiert und am Ende in einer Tabelle gesammelt.
- 🔵 = nicht aus den Daten belegt (vor allem was nur im Code steht: Werkzeugrezepte, Preise, Bossverhalten) oder noch nicht entschieden. Vor dem Einbau im Spiel prüfen.
- Aufgaben „Dimension betreten“ und „Mob besiegen“ sind FTB-Quests-Aufgaben (Dimension- bzw. Kill-Task); die ID steht jeweils dabei.
- BS1 und BS2 liegen in K3 und K4, also vor oder am Mond. Ob es vor dem Mond schon ein Questbuch gibt, ist offen (O31).

---

## BS1 · Everbright (K3 Industrie)

### BS1-01 Gatekeeper's House · Hauptweg
**Aufgabe:** `blue_skies:blue_journal`

In der Oberwelt stehen Häuser mit zwei Portalen, eines aus Turquoise Stone Bricks, eines aus Lunar Stone Bricks. Du findest sie in Ebenen, Savannen, Bergen und Schnee, nie nahe beim Spawn; im Raster liegt etwa alle 33 Chunks eines. Im Haus bekommst du das Blue Journal. Es ist das Buch des Mods: Seine Einträge kommen dazu, sobald du die Welten betrittst und die Bosse besiegst. Nimm es mit, es erklärt Tiere, Pflanzen und Rohstoffe der Welten.
⚙️ Im Pack steht im Haus eine eigene Figur statt des Händlers aus dem Mod. Von ihr bekommst du Journal und Zeal Lighter. 🔵 Handel der Figur noch nicht gebaut.

### BS1-02 Zeal Lighter · Hauptweg
**Aufgabe:** `blue_skies:zeal_lighter`

Der Zeal Lighter entzündet die Portale nach Everbright und Everdawn, so wie Feuerzeug und Feuerstein das Netherportal. Er kostet 8 🔵 (Währung im Spiel prüfen, laut Meilensteinkarte Smaragde). Später kannst du ihn selbst bauen: 1 Charoite + 1 Moonstone Shard, formlos.

### BS1-03 Durch das Portal nach Everbright · Hauptweg
**Aufgabe:** Dimension `blue_skies:everbright` betreten

Das Portal mit dem Rahmen aus Turquoise Stone Bricks führt nach Everbright: immer Tag, kalt, viel Schnee. Entzünde es mit dem Zeal Lighter. Weitere Portale baust du aus Turquoise Stone Bricks, die du in Everbright aus Turquoise Stone herstellst (4 Stein ergeben 4 Ziegel).
Everbright ist die leichtere Welt; hier fängst du an.
⚙️ Everdawn ist im Pack anfangs gesperrt: Das Portal dorthin lässt dich erst durch, wenn der Wegzoll von 32 Raw Tin aus Everbright bezahlt ist (Buch 1).
Buch: Blue Journal → Everbright → Everbright Portal.

> ⚠️ **Deine Werkzeuge taugen hier nicht.** Werkzeuge und Waffen von außerhalb, auch die aus Tinkers' Construct, arbeiten in Everbright und Everdawn deutlich schlechter (Tooltip: „It seems this tool doesn't work as well here.“). Ein Erz mit einer Tinkers-Spitzhacke abzubauen dauert ewig. Rechne damit, dass du in den Welten neu anfängst.

### BS1-04 Neu anfangen: Holz und Stein · Hauptweg
**Aufgabe:** `blue_skies:turquoise_stone_pickaxe`

Bau dir Werkzeuge aus dem Material der Welt: erst aus Bluebright-Holz, dann aus Turquoise Cobblestone. Die Sticks der Welten haben eigene Werte; welcher Stick im Werkzeug steckt, ändert Tempo, Haltbarkeit und Wurfschaden ein wenig. 🔵 Die Werkzeugrezepte stehen nur im Code; in JEI nachsehen, welche Sticks sie annehmen.
Ein Speer (1 Moonstone Shard + 2 Sticks) ist billig, fliegt wie ein Dreizack und hilft später gegen die Bosse.
Buch: Blue Journal → General → Stick Variations, Spears.

### BS1-05 Ventium und Tool Box · Hauptweg
**Aufgabe:** `blue_skies:ventium_ingot`, `blue_skies:tool_box`

Ventium ist das Eisen von Everbright. Das Erz liegt bis Y 63, Raw Ventium schmilzt im Ofen. Daraus entstehen Ventium Bucket, Ventium Shears, Anvil und Stonecutter.
Die Tool Box (2 Ventium Ingot + 4 Planks) verbessert Werkzeuge der Welten: Falsite erhöht ihre Haltbarkeit, und ein anderer Stick lässt sich in ein fertiges Werkzeug einsetzen.
Buch: Blue Journal → Everbright → Ventium; General → Tool Box.

### BS1-06 Zinn, Blei und Bauxit · Hauptweg
**Aufgabe:** `mekanism:raw_tin`, `mekanism:raw_lead`, `immersiveengineering:raw_aluminum`

⚙️ Im Pack liegen in Everbright drei Industriemetalle, die anderswo fehlen oder selten sind: **Zinn** gibt es nur hier, **Blei** und **Bauxit** reichlich, in der Overworld nur sehr selten. Alle drei stecken im Turquoise Stone. Zinn brauchst du für Bronze und den Ausbau von Mekanism, Blei und Aluminium für Immersive Engineering. Leg außerdem 32 Raw Tin für den Wegzoll nach Everdawn beiseite (Buch 1).
Abbauen kannst du sie mit den Werkzeugen der Welt, am besten ab Pyrope oder Aquite (BS1-10).

### BS1-07 Falsite · Nebenquest
**Aufgabe:** `blue_skies:falsite_ingot`

Ein magisches Metall aus Everbright, bis Y 63. Hauptsächlich für die Tool Box: Es verlängert die Haltbarkeit der Werkzeuge. Falsite Nuggets ersetzen außerdem Lapis Lazuli am Zaubertisch.
Buch: Blue Journal → Everbright → Falsite.

### BS1-08 Snowcap Oven · Nebenquest
**Aufgabe:** `blue_skies:snowcap_oven`

Ein Ofen, der mit Kälte kocht. Er brennt mit Snowcap Mushrooms (4 Snowcap Pinheads ergeben einen Pilzblock) und macht nebenbei aus Horizonite Eisen.
Buch: Blue Journal → Everbright → Snowcap Mushroom, Snowcap Oven.

### BS1-09 Warding Pearl · Nebenquest
**Aufgabe:** `blue_skies:warding_pearl`

In den Welten hält Licht keine Monster ab. Die Warding Pearl verhindert das Spawnen in großem Umkreis, etwa um deinen Stützpunkt. Rezept: 6 Falsite Nugget + 2 Soul Fragment + 1 Pearl. Die Pearl steckt in einem Seclam in der Tiefsee, die Soul Fragments lassen vor allem die Frost Spirits fallen.
Buch: Blue Journal → Everbright → Warding Pearl, Seclam, Soul Fragment.

### BS1-10 Pyrope, Aquite und Moonstone · Hauptweg
**Aufgabe:** `blue_skies:aquite_pickaxe`

Diese Erze liegen in beiden Welten. **Pyrope** (bis Y 83) gibt sehr schnelle, aber kurzlebige Werkzeuge, die Diopside und Charoite nicht abbauen. **Aquite** (bis Y 54) entspricht dem Eisen der Oberwelt, für Werkzeug und Rüstung. **Moonstone** (bis Y 127) ist eine Lichtquelle, die auch unter Wasser leuchtet. Mit Aquite-Werkzeug und -Rüstung bist du für Everdawn gerüstet.
Buch: Blue Journal → General → Pyrope, Aquite, Moonstone.

---

## BS2 · Everdawn (K4 Der Mond)

### BS2-01 Durch das Portal nach Everdawn · Hauptweg
**Aufgabe:** Dimension `blue_skies:everdawn` betreten

Das zweite Portal mit dem Rahmen aus Lunar Stone Bricks führt nach Everdawn: ewiger Sonnenaufgang, heiß und feucht, mit Spinnen, Käfern und Echsen. Die Gegner sind härter als in Everbright. Nimm Werkzeuge aus Everbright mit; deine Oberwelt-Werkzeuge sind hier ebenso abgeschwächt.
⚙️ Durch das Portal kommst du erst, wenn der Wegzoll von 32 Raw Tin bezahlt ist; vorher schickt es dich zurück (Buch 1).
Buch: Blue Journal → Everdawn → Everdawn Portal.

### BS2-02 Osmium · Hauptweg
**Aufgabe:** `mekanism:raw_osmium`

⚙️ Im Pack liegt Osmium in Everdawn reichlich, im Lunar Stone in allen Höhen. In der Overworld ist es selten. Mit diesem Vorrat lohnt sich der Ausbau von Mekanism, schon bevor der Mond erreichbar ist. 32 Raw Osmium sind die zweite Abgabe in Buch 1.

### BS2-03 Horizonite · Hauptweg
**Aufgabe:** `blue_skies:horizonite_pickaxe`

Ein sehr heißes Metall, tief unten (bis Y 24) in den heißen Biomen: Crystal Dunes, Crystal Roughs, Searing Grassland, Sunset Maple Forest. Werkzeuge daraus schmelzen abgebaute Erze sofort. Rüstung ebenfalls möglich.
Buch: Blue Journal → Everdawn → Horizonite.

### BS2-04 Horizonite Forge · Nebenquest
**Aufgabe:** `blue_skies:horizonite_forge`

Ein Ofen ohne Brennstoff: Er lädt sich langsam selbst auf, schneller mit Horizonite oder Sunstone Crystals. Rezept: 5 Horizonite Ingot + 1 Furnace + 3 Lunar Cobblestone. Mehrere Forges nebeneinander sind praktisch.
Buch: Blue Journal → Everdawn → Horizonite Forge, Sunstone Crystal.

### BS2-05 Moonstone Shield · Hauptweg
**Aufgabe:** `blue_skies:moonstone_shield`

In Everdawn brauchst du einen Schild: Gift der Venom Spider, Atem der Emberbacks und später die Pfeile des Alchemist und die Sprünge des Arachnarch fängst du damit ab. Der Moonstone Shield hält mehr aus als der Holzschild. Rezept: 6 Vitreous Moonstone + 1 Stick; Vitreous Moonstone lässt das Crystal Camel fallen.
Buch: Blue Journal → Everdawn → Moonstone Shield, Crystal Camel.

### BS2-06 Diopside oder Charoite · Hauptweg
**Aufgabe:** `blue_skies:diopside_gem` oder `blue_skies:charoite`

Die beiden besten Materialien der Welten liegen ganz unten, in beiden Welten: Diopside bis Y 19, Charoite bis Y 13, je eine kleine Ader pro Chunk. Pyrope baut sie nicht ab, nimm Aquite oder Horizonite.
**Diopside**: schwere, langsame Werkzeuge mit sehr hohem Schaden. **Charoite**: ausgewogen wie Diamant; Charoite-Werkzeuge bauen alles in den Welten ab. Für die Dungeons willst du eines davon als Waffe und Rüstung.
Buch: Blue Journal → General → Diopside, Charoite.

### BS2-07 Verzaubern ohne Oberwelt · Nebenquest
**Aufgabe:** `minecraft:enchanting_table`

Mit Material der Welten kannst du verzaubern: Enchanting Table aus 1 Book + 2 Charoite + 4 Obsidian (Obsidian gibt es in Everdawn), Falsite Nuggets statt Lapis. Aquite lässt sich besonders gut verzaubern.
Buch: Blue Journal → General → Enchanting.

---

## BS3 · Die Blinding-Bosse (K5 Erzketten)

> ⚠️ **Bosskämpfe.** Geh nicht ohne Waffe aus Diopside oder Charoite, Rüstung, Schild, Speere und Essen. Beide Bosse teleportieren sich weg, wenn du zu nahe kommst. Wer stirbt, lässt seine Sachen im obersten Stockwerk eines Turms voller Illager liegen.

### BS3-01 Blinding Dungeon · Hauptweg
**Aufgabe:** 4 × `blue_skies:blinding_key`

In jeder Welt steht ein hoher Turm, bewohnt von Illagern. In Everbright findest du ihn in Calming Skies, Brisk Meadow, Brightlands und Snow Covered Pines. Die Schlüssel liegen in den Kisten der Bibliotheks-, Gefängnis- und Studierzimmer. Mit vier Schlüsseln öffnest du den Keystone im obersten Stockwerk und kommst zum Boss.
Hast du einen Keystone benutzt, kannst du weitere Blinding-Schlüssel kaufen.
Buch: Blue Journal → General → Blinding Dungeon.
⚙️ 🔵 Ob die Figur im Haus die Schlüssel verkauft, wie es der Händler des Mods tut, ist offen.

### BS3-02 Summoner · Hauptweg
**Aufgabe:** Mob `blue_skies:summoner` besiegen

Der Boss des Turms in Everbright (Keystone `blue_skies:bright_blinding_keystone`). Er kämpft nicht selbst, sondern ruft Golems aus Dungeonstein, erst Fernkämpfer, dann Nahkämpfer. Treffen kannst du ihn nur, während er zaubert.
Beute ist ein Summoner Loot Bag mit dem Ethereal Arc, dem Soulbound Spear, der Summoning Table und manchmal dem Summoning Tome. Sein Sieg öffnet in Everbright den Weg zum Nature Dungeon.
Buch: Blue Journal → Everbright → Summoner.
⚙️ Behalte die Beute; ein Teil davon wird später gebraucht (🔵 welche Items, O1).

### BS3-03 Alchemist · Hauptweg
**Aufgabe:** Mob `blue_skies:alchemist` besiegen

Der Boss des Turms in Everdawn (Keystone `blue_skies:dawn_blinding_keystone`). Er kämpft selbst: Pfeilbündel (mit dem Schild abwehren), Steinstacheln aus dem Boden und Trankwolken in den Ecken des Raums. Auch er teleportiert sich weg, außer beim Zaubern.
Beute ist ein Alchemist Loot Bag mit dem Dusk Arc, dem Spike Shield, der Alchemy Table und manchmal der Alchemy Scroll. Sein Sieg öffnet in Everdawn den Weg zum Poison Dungeon.
Buch: Blue Journal → Everdawn → Alchemist.
⚙️ Behalte die Beute (🔵 welche Items, O1).

### BS3-04 Alchemy Table · Nebenquest
**Aufgabe:** `blue_skies:alchemy_table`

Die Alchemy Table wandelt Stoffe um. Sie tauscht innerhalb einer Gruppe (Iron Ingot gegen Ventium Ingot, Stein der Oberwelt gegen Stein der Welten) und wandelt mit einem Hilfsstoff um: Iron Ingot mit Soul Fragment zu Falsite, mit Blaze Rod zu Horizonite. Zusammen mit dem Snowcap Oven kannst du damit Eisen und die Metalle der Welten in beide Richtungen tauschen.
Buch: Blue Journal → Everdawn → Alchemy Table.

### BS3-05 Arcs tragen · Nebenquest
**Aufgabe:** `blue_skies:ethereal_arc`, `blue_skies:dusk_arc`

Arcs sind Artefakte der Dungeon-Wächter und kommen in eigene Felder im Inventar. Der Ethereal Arc macht schneller, der Dusk Arc unsichtbar beim Schleichen. Jeder Arc hat vier Stufen (Common bis Empowered); welche du bekommst, entscheidet der Loot Bag.
Buch: Blue Journal → General → Arcs.

---

## BS4 · Nature- und Poison-Boss (K6 Der Mars)

> ⚠️ **Zweite Boss-Stufe.** Beide Dungeons sind lang und voller Gegner, die Bosse brauchen eine bestimmte Taktik. Für den Starlit Crusher brauchst du eine Axt und Speere, für den Arachnarch einen starken Schild.

### BS4-01 Nature Dungeon · Hauptweg
**Aufgabe:** `blue_skies:nature_key`

Eine grüne Pyramide in den Snow Covered Pines von Everbright. Ihre Wächter, die Stonelets, nehmen wie die Frost Spirits mehr Schaden von Pickaxes; weiter oben spucken Spewters Samenbomben. Die Schlüssel liegen in den Kisten, der Nature Keystone am Ende.
Buch: Blue Journal → Everbright → Nature Dungeon, Stonelet (offen nach dem Summoner).

### BS4-02 Starlit Crusher · Hauptweg
**Aufgabe:** Mob `blue_skies:starlit_crusher` besiegen

Der Starlit Crusher versteckt sich hinter vier Holzwänden und lässt Wurzeln, Spewters und hölzerne Schneeeulen wachsen. Eine Wand fällst du nur mit der Axt (andere Waffen: „maybe an axe would work?“). Danach schlägt er auf den Boden und ist für Speere verwundbar.
Beute: Nature Arc (zusätzliche Herzen), Falsite, Cryo Root, seltener der Crushing Hammer und Diopside.
Buch: Blue Journal → Everbright → Starlit Crusher.
⚙️ Behalte die Beute (🔵 welche Items, O1).

### BS4-03 Poison Dungeon · Hauptweg
**Aufgabe:** `blue_skies:poison_key`

Ein mit Netzen überzogener Baum im Sunset Maple Forest von Everdawn, innen ein Spinnennest voller Venom Spiders und Cave Spiders. Jedes Stockwerk hat einen Schlüssel; der Poison Keystone liegt am Ende der Tunnel. Nimm Milch oder Mittel gegen Gift mit (schwarze Brewberries heilen Gift).
Buch: Blue Journal → Everdawn → Poison Dungeon (offen nach dem Alchemist).

### BS4-04 Arachnarch · Hauptweg
**Aufgabe:** Mob `blue_skies:arachnarch` besiegen

Der Arachnarch hängt sich an die Decke und ist dort kaum zu verwunden. Halte durch, bis er herunterkommt, und wehre seine Sprünge mit dem Schild ab. Nicht jeder Schild hält ihn aus (Tooltip: „It seems this shield isn't strong enough!“); der Spike Shield des Alchemist ist stärker als der Moonstone Shield. 🔵 Welcher Schild genügt, steht nur im Code.
Beute: Poisonous Arc (mehr Schaden, wenn du vergiftet bist), Horizonite, seltener Venom Sac, Diopside und das Different Sword.
Buch: Blue Journal → Everdawn → Arachnarch.
⚙️ Behalte die Beute (🔵 welche Items, O1).

### BS4-05 Alle vier Arcs · Nebenquest
**Aufgabe:** `blue_skies:ethereal_arc`, `blue_skies:dusk_arc`, `blue_skies:nature_arc`, `blue_skies:poison_arc`

Jeder Boss trägt einen Arc. Wer alle vier besitzt, kann sie zusammen tragen: schneller, unsichtbar, mehr Herzen, mehr Schaden unter Gift.
🔵 Ob man einen Boss erneut bekämpfen kann (für einen besseren Arc) oder einen neuen Dungeon suchen muss, im Spiel prüfen.
Buch: Blue Journal → General → Arcs.

---

## Nebenquest-Reihe BSN · Leben in den Welten (K3 Industrie)

Ohne Bezug zum Hauptweg; zeigt, wie man sich in den Welten einrichtet. Frei ab BS1-03.

| Quest | Aufgabe | Text | Buch |
|---|---|---|---|
| BSN-01 Food Prep Table | `blue_skies:food_prep_table` | Macht aus drei bis fünf verschiedenen Zutaten bessere Gerichte. | General → Food Prep Table |
| BSN-02 Reittiere | Mob `blue_skies:reindeer` oder `blue_skies:crystal_camel` zähmen 🔵 (Task-Art im Spiel prüfen) | Reindeer mit Pine Fruit, Crystal Camel mit Scalefruit zähmen; Sattel bzw. Camel Saddle drauf. | Everbright → Reindeer; Everdawn → Crystal Camel |
| BSN-03 Star Emitter und Astrolabe | `blue_skies:star_emitter`, `blue_skies:astrolabe` | Das Astrolabe (vom Stargazer im Dorf) springt zurück zu deinem Star Emitter. Praktisch als Heimweg. | General → Star Emitter, Astrolabe |

---

## ⚙️ Pack-Änderungen in diesem Text

| Änderung | Wo im Text | Stand |
|---|---|---|
| Zinn (nur hier), Blei und Bauxit in Everbright | BS1-06 | 🟡 Features in `kubejs/data/ieplus/` angelegt, Mengen im Test bestätigt (`03_ERZGENERATION.md`) |
| Osmium reichlich in Everdawn | BS2-02 | 🟡 wie oben; Everdawn bleibt früh erreichbar (User, 2026-10-19) |
| Everdawn erst nach dem Zinn-Zoll (32 Raw Tin), zweite Abgabe 32 Raw Osmium (Buch 1) | BS1-03, BS1-06, BS2-01, BS2-02 | 🟢 beschlossen (O72, O73, 2026-10-26); Sperr-Skript noch nicht gebaut |
| Freigabe `allowed_mods_for_feature_gen = ["ieplus"]` (ohne sie keine fremden Erze) | Voraussetzung für BS1-06, BS2-02 | 🟢 in der Config der Testinstanz |
| Figur im Blue-Skies-Haus statt des Händlers (Guard) | BS1-01, BS1-02, BS3-01 | 🟢 beschlossen (2026-10-17), nicht gebaut; Handel mit Journal, Zeal Lighter und Blinding-Schlüsseln muss die Figur übernehmen 🔵 |
| Boss-Beute wird später gebraucht | BS3-02, BS3-03, BS4-02, BS4-04 | 🔵 welche Items, O1 |
| Werkzeugabschwächung bleibt wie im Mod | Warnung bei BS1-03, BS2-01 | 🟢 gewollt (2026-10-12), keine Änderung nötig |

## 🔵 Offen vor dem Einbau

- **Zeal Lighter:** Preis 8 aus der Config, Währung nur im Code (Smaragde laut Meilensteinkarte).
- **Werkzeugrezepte** und welche Sticks sie annehmen (BS1-04): nur im Code, in JEI ansehen.
- **Werkzeugabschwächung:** Stärke und wann sie endet (Meilensteinkarte: nach den Bossen). Deshalb steht im Text kein Ende.
- **Arachnarch:** welcher Schild genügt (BS4-04).
- **Bosse wiederholen** (BS4-05) und welcher Loot Bag (common/uncommon/rare) fällt.
- **BSN-02:** ob FTB Quests das Zähmen direkt prüfen kann; sonst Sattel oder Camel Saddle als Aufgabe.
- 🟢 **Kill-Aufgaben** (2026-10-26): BS3-02, BS3-03, BS4-02 und BS4-04 prüfen jetzt das Besiegen des Bosses (`kill(…)` in `tools/questbuch/blue_skies.cfg`). Nur BSN-02 (Zähmen) bleibt ein Kontrollhaken.
- **Reihe BSN:** ohne Kapitel im Entwurf; eingebaut mit K3 Industrie (Vorschlag, 2026-10-26: Everbright ist ab K3 offen, die Reihe beginnt nach BS1-03).
- **Journal:** ob es die Progression wirklich nicht erklärt. Wenn doch, lassen sich BS1–BS4 auf „mit Buch“ kürzen.
