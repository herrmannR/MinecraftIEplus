# Questtexte Wesley's Roguelike Dungeons

> Stand 2026-10-17, Minecraft 1.20.1. Entwurf für FTB Quests. Der Mod hat **kein Buch** (`../19_HILFEBUECHER.md`); die Texte führen deshalb Schritt für Schritt. Wesley's hat keinen eigenen Pfad auf der Meilensteinkarte. Gegliedert nach den fünf Stufen der Nebenquest-Reihe aus `../18_STORY.md` (Vorbereitung, Oberwelt-Dungeons, End, Nether, Endboss). Kürzel **WD**.
> Quellen: `../modpfade/rld/WISSEN.md`, `../modpfade/rld/data.js` (Phasen 1 bis 5), `../18_STORY.md`, `../01_PROGRESSION.md`. Trophäen-IDs aus der Sprachdatei des JARs (2.3.6). Item-IDs gegen die Sprachdatei geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren. Die Reihe dient in Part 1 der Vorbereitung auf die Altar-Dimension und in Part 2 dem allgemeinen Training; wo der User sie an die Story hängt, setzt er einen Satz davor.
- **Anrede „du“**, Item- und Mob-Namen englisch wie im Spiel.
- **Pflicht in Teil 1** (F15, 2026-10-20): Stufe 1 (WD1-01 bis WD1-03, mit Kreide) und ein Oberwelt-Dungeon bis zur Bone Chest (WD2-01, WD2-02; liefert den Orb of the Deep für die Altar-Reparatur). Diese Quests sind Hauptweg, alle anderen Nebenquests. Alle Nebenquests geben Credits (User, 2026-10-17).
- **Kapitel** (Vorschlag 2026-10-26): WD1 und WD2 mit K8 Hitze (Rückkehr zur Erde, Vorbereitung auf die Altar-Dimension; der Orb wird in K9 gebraucht), WD3 und WD4 mit K10 Der Elf (Nebenquests nach dem Pflicht-Dungeon), WD5 mit K12 Ausbildung (Training in Teil 2, fällt im Questbuch für Teil 1 weg).
- **Pack-Änderungen** mit ⚙️. Für Wesley's gibt es bisher keine; der Mod läuft mit seiner Standard-Config.
- 🔵 = noch nicht entschieden oder nicht belegt.
- Viele Quests lassen sich am einfachsten über die **Trophäe** prüfen: Jeder Boss lässt seine Trophäe fallen, und sie ist ein Item mit eigener ID.

> **Achtung, Verlust von Items:** In der Dimension Wesley's Infinite Dungeons (Stufe 5) kannst du Gegenstände dauerhaft verlieren. Die Oberwelt-Dungeons sind lang und verwinkelt; nimm Essen, Fackeln und Ersatzausrüstung mit.

---

## WD1 · Vorbereitung (K8 Hitze)

### WD1-01 Vessel of Vision · Hauptweg
**Aufgabe:** `wrd:magic_cauldron`

Dungeons entstehen in diesem Pack nicht von selbst. Erst die Vessel of Vision erschafft einen.
Rezept: 6 Iron Ingot, 1 Blaze Powder, 1 Ender Pearl, 1 Cauldron. Für Blaze Powder brauchst du einen Ausflug in den Nether.
So geht's: Der erste Rechtsklick aktiviert die Vessel. Der zweite sucht 5000 bis 10000 Blöcke entfernt einen Ort und baut dort den Dungeon. Findet sie nichts, versuch es an einem anderen Ort noch einmal.

### WD1-02 Sentient Pathfinder · Hauptweg
**Aufgabe:** `wrd:dungeon_locator_item`

Der Dungeon liegt tausende Blöcke weit weg. Der Pathfinder bringt dich hin.
Rezept: Eye of Ender, Soul Lantern, Iron Ingot (formlos, ergibt 2).
So geht's: Pathfinder auf einen Block setzen, mit der benutzten Vessel rechtsklicken (er merkt sich den Ort), noch einmal rechtsklicken. Nach dem Countdown teleportiert er alle Spieler in seiner Nähe zum Dungeon.
🔵 Wie der Rückweg funktioniert, ist nicht ausgelesen; im Spiel prüfen. Bis dahin: Nimm einen zweiten Pathfinder mit oder merk dir die Koordinaten.

### WD1-03 Key Bag und Kreide · Hauptweg
**Aufgabe:** `wrd:key_bag`, `wrd:chalk_marker_red`

Jede Truhe im Dungeon braucht ihren eigenen Schlüssel, und die Stockwerke sind Labyrinthe.
Der **Key Bag** (1 Lead, 3 Leather, 1 Iron Ingot) nimmt alle Schlüssel und Kreidemarker auf; Schlösser erkennen den Schlüssel auch im Beutel.
Mit **Kreide** im Beutel setzt Shift-Rechtsklick eine Markierung auf den Boden. Die Taste R wechselt die Farbe (rot, blau, grün). Markiere so, woher du kommst.
🔵 Woher die Kreide kommt (Rezept oder Truhen), ist nicht ausgelesen.

### WD1-04 Biom-Vessels · Nebenquest
**Aufgabe:** `wrd:magic_cauldron_desert`, `wrd:magic_cauldron_jungle`, `wrd:magic_cauldron_ice`

Welcher Dungeon entsteht, entscheidet das Biom am Zielort. Mit den drei Varianten suchst du gezielt eine Gruppe; sie suchen 8000 bis 16000 Blöcke weit.
- **Sandy** (Sand statt Ender Pearl): heißes Biom → Wüsten-Dungeon
- **Lush** (Wheat Seeds): feuchtwarmes Biom → Dschungel-Dungeon
- **Snowy** (Snowball): kaltes Biom → Eis-Dungeon
Die normale Vessel bringt in gemäßigten Biomen je zur Hälfte einen normalen oder einen besonderen Dungeon.

---

## WD2 · Die Dungeons der Oberwelt (K8 Hitze)

Jeder Dungeon hat ein oberes Stockwerk ohne Boss und darunter tiefere Stockwerke mit Miniboss und Boss. Ziel jedes Dungeons ist die **Ancient Bone Chest** im Schatzraum.
Ablauf in jedem Dungeon:
1. Truhen öffnen, Schlüssel sammeln. Rätselräume geben 5 bis 8 Schlüssel auf einmal.
2. Im Minibossraum erscheint ein Corrupted-Gegner. Er lässt den **Bone Chest Key** und 2 bis 4 **Bleeding Corruption** fallen.
3. Der Boss lässt Boss Room Key, Treasure Room Key, zwei Diamond Chest Keys und seine Trophäe fallen.
4. Die Bone Chest gibt **Orb of the Deep** (1–2), **All Seeing Eye** (1–4), Bleeding Corruption und einen Trialstone.

> **Vorsicht:** Die Bosse kämpfen in mehreren Phasen. Geh nicht mit Eisenausrüstung hinein.

### WD2-01 Erster Dungeon · Hauptweg
**Aufgabe:** `wrd:keystrongholdchest_bonechest`

Besiege den ersten Miniboss. Sein Bone Chest Key öffnet die Ancient Bone Chest.
Die Schlüsselfarben: Der gewöhnliche Stronghold Chest Key ist häufig, Iron, Library, Dungeon, Golden, Redstone, Treasure und Diamond werden immer seltener. Jede Truhenart hat ihren Schlüssel.

### WD2-02 Ancient Bone Chest · Hauptweg
**Aufgabe:** `wrd:orb_of_the_deep`, `wrd:all_seeing_eye`, `wrd:bleeding_corruption`

Öffne die Bone Chest im Schatzraum. Bewahre alles auf: Orbs of the Deep, das All Seeing Eye und Bleeding Corruption brauchst du für das End und das Portal.

### WD2-03 Normaler Dungeon: Catacombs oder Necropolis · Nebenquest
**Aufgabe:** eine von `wrd:trophy_um` (Undead Mage), `wrd:trophy_ne` (Necromancer)

Gemäßigtes Biom, normale Vessel. Oben das Prison, darunter die Catacombs mit dem **Undead Mage**, ganz unten die Necropolis mit dem **Necromancer**.

### WD2-04 Besonderer Dungeon: Crypt oder Cursed Sepulchres · Nebenquest
**Aufgabe:** eine von `wrd:trophy_sk` (The Sad King), `wrd:trophy_tas` (The Overseer)

Ebenfalls gemäßigtes Biom; die normale Vessel bringt ihn in der Hälfte der Fälle. Oben die Illager Archives, darunter die Crypt mit **The Sad King**, ganz unten die Cursed Sepulchres mit **The Overseer**.

### WD2-05 Wüsten-Dungeon: Mines oder Tomb · Nebenquest
**Aufgabe:** eine von `wrd:trophy_am` (Ancient Mummy), `wrd:trophy_kw` (The Host)

Sandy Vessel. Oben das Maze, darunter die Mines mit der **Ancient Mummy**, ganz unten das Tomb mit **The Host** und seinen Wraiths. Dessen Trophäe heißt King Wraith Trophy.

### WD2-06 Dschungel-Dungeon: Ruins oder Labyrinth · Nebenquest
**Aufgabe:** eine von `wrd:trophy_ag` (Ancient Golem), `wrd:trophy_agu` (Ancient Guardian Golem)

Lush Vessel. Oben der Temple, darunter die Ruins mit dem **Ancient Golem**, ganz unten das Labyrinth mit dem **Ancient Guardian Golem**. Beide Trophäen heißen im Spiel „Ancient Guardian Trophy“.

### WD2-07 Eis-Dungeon: Frosthold oder Tomb of Ice · Nebenquest
**Aufgabe:** eine von `wrd:trophy_hoi` (Heart of Ice), `wrd:trophy_im` (Ice Mage)

Snowy Vessel. Oben der Glacier, darunter Frosthold mit dem **Heart of Ice**, ganz unten das Tomb of Ice mit dem **Ice Mage**.

### WD2-08 Acht Orbs of the Deep · Nebenquest
**Aufgabe:** 8 × `wrd:orb_of_the_deep`

Für das Portal (WD5) brauchst du acht Orbs. Jede Bone Chest gibt einen oder zwei, also brauchst du vier bis acht Dungeons. Sammle dabei Bleeding Corruption: 8 für das Heart of the Deceiver, dazu 2 je Lauf in der Dungeon-Dimension.

---

## WD3 · Der Purpur-Palast im End (K8 Hitze)

> **Vorsicht:** Drei Gegner hintereinander, dazu das End selbst. Nimm Ender Pearls und Slow Falling mit.

### WD3-01 All Seeing Eye · Nebenquest
**Aufgabe:** Kontrollhaken (Purpur-Palast betreten) 🔵

Das All Seeing Eye aus der Bone Chest funktioniert nur im End. Rechtsklick teleportiert dich zum Purpur-Palast (Koordinaten 1000 / 800 / 50) und baut beim ersten Mal seinen Eingang.
In den Truhen liegt der **Purpur Stronghold Chest Key**. Er öffnet die verschlossenen Purpur- und Endstone-Truhen mit verzauberter Diamantausrüstung.
Voraussetzung: Zugang zum End.

### WD3-02 Heart of Ender · Nebenquest
**Aufgabe:** `wrd:ender_heart`

Ein Spawner im Palast ruft den **Ender King**, den **Ender Super Enforcer** und das **Heart Of Ender**. Nur das Heart Of Ender ist Pflicht: Es lässt das Ender Heart fallen. Der Ender King gibt die Acid Wand.

### WD3-03 Heart of the Deceiver · Nebenquest
**Aufgabe:** `wrd:heart_of_the_deceiver`

Der Schlüssel zum Portal: 8 Bleeding Corruption um 1 Ender Heart in der Werkbank.

---

## WD4 · Der Nether (K8 Hitze)

### WD4-01 Quartz Vessel of Vision · Nebenquest
**Aufgabe:** `wrd:magic_cauldron_nether`

Die Nether-Variante der Vessel (Nether Quartz statt Ender Pearl) funktioniert nur im Nether und sucht 1500 bis 3000 Blöcke entfernt.

### WD4-02 Nether-Dungeon · Nebenquest
**Aufgabe:** eine von `wrd:trophy_dp` (Doom Pillar), `wrd:trophy_db` (Doom Golem)

> **Vorsicht:** Feuer und Lava. Fire Resistance mitnehmen.

Oben die Magma Chambers, darunter The Forge mit dem **Doom Pillar**, ganz unten das Fiery Tomb mit dem **Doom Golem**. Der Miniboss ist hier ein Corrupted Blaze. Truhen hier brauchen auch den Bastion Stronghold Chest Key.

---

## WD5 · Wesley's Infinite Dungeons (K12 Ausbildung)

### WD5-01 Der Portalbaum · Nebenquest
**Aufgabe:** Dimension `wrd:wesleys_infinite_dungeons` betreten

Das Portal steckt in einem riesigen hohlen Baum, der von selbst in der Welt wächst (selten; nicht in Ozeanen, an Stränden oder in Plains). Innen liegen acht **Orb Holder** im Ring um den **Heart Holder**.
So geht's: Jeden Orb Holder mit einem Orb of the Deep rechtsklicken, dann den Heart Holder mit dem Heart of the Deceiver. Das Portal öffnet sich.
🔵 Der Baum ist sehr selten. Prüfen, ob er im Pack in vertretbarer Entfernung zu finden ist, oder ihn als Struktur setzen.

> **Achtung:** Beim Betreten warnt der Mod, dass Gegenstände in den Dungeons dauerhaft verloren gehen können. Lass Wertvolles zu Hause.

### WD5-02 Orb of Corruption · Nebenquest
**Aufgabe:** `wrd:orb_of_corruption`

Jeder Lauf kostet einen Orb of Corruption: 2 Bleeding Corruption und 1 Ender Pearl, formlos. Ein Trialstone aus der Bone Chest gibt einen freien Lauf.
So startest du: Dungeon am Selector nahe dem Artefakt-Altar wählen, Schwierigkeit an den Difficulty Selectors wählen, dann mit dem Orb in der Hand den Totempfahl (Dungeon Totempole Top) rechtsklicken.

### WD5-03 Der erste Lauf · Nebenquest
**Aufgabe:** `wrd:trophy_ks` (King Snake)

Der erste Dungeon, der **Snake Temple**, verlangt keine Erfahrungsstufe. Sein Boss ist die **King Snake**.
Wichtig im Lauf:
- **Zeit:** Der Lauf hat einen Zähler. Time Dust (+150 / +540 / +1500) am **Time Rock** verlängert ihn. Läuft er ab, bricht der Dungeon zusammen: Schaden und Verlust der Dungeon-Gegenstände.
- **Gold:** Goldhaufen, Schätze und Edelsteine wirft du in den **Gold Grinder**. Nur was dort landet, zählt für die Belohnung.
- **Ausgang:** Das Exit Portal nimmt dir Gold, Edelsteine, Time Dust und die farbigen Schlüssel ab und rechnet den Dungeon-Wert in Belohnung um: Rohmetalle, Smaragde, Diamanten, bei hohem Wert Netherite Scrap, Ancient Debris oder ein neuer Orb of Corruption.

### WD5-04 Gold Grinder · Nebenquest
**Aufgabe:** Kontrollhaken (10 000 Gold in einem Lauf) 🔵 Menge

Ein Lauf lohnt sich erst mit viel Gold im Grinder. Werte: Goldhaufen 10 / 50 / 500, Ring 250, Vase 750, Scepter 1500, Necklace 2000, Crown 2500; Edelsteine Blue 3, Green 9, Red 27. Der Golden Skull of Ancients zählt 18 500 Gold und 250 Edelsteine.
Shops im Dungeon verkaufen Time Dust und Artefakte. Die **Sacrificial Statue** verhängt einen Fluch; wer ihn übersteht, bekommt Gold, Edelsteine und Time Dust.

### WD5-05 Die Dungeons der Tiefe · Nebenquest
**Aufgabe:** eine von `wrd:trophy_aqg`, `wrd:trophy_cs`, `wrd:trophy_gm`, `wrd:trophy_tm`, `wrd:trophy_tc`, `wrd:trophy_be` 🔵 als Kette aufteilen

Jeder weitere Dungeon verlangt eine höhere Erfahrungsstufe:

| Dungeon | Stufe | Boss | Trophäe |
|---|---|---|---|
| Aquatic Shrine | 10 | Aquaguard | `wrd:trophy_aqg` |
| Gemstone Grotto | 30 | Crystal Spider | `wrd:trophy_cs` |
| Temple of Ra | 40 | Giant Mummy | `wrd:trophy_gm` |
| The Maw | 50 | Face of The Maw | `wrd:trophy_tm` |
| Arctic Cenotaph | 60 | The Corpse | `wrd:trophy_tc` |
| Palace of The Dead | 70 | The Beyond | `wrd:trophy_be` |

Die Schwierigkeit wählst du getrennt: Easy frei, Medium ab Stufe 5, Hard ab 30, Extreme ab 60. Höhere Schwierigkeit heißt bessere Belohnung.
**Artefakte** aus Dungeon und Shop opferst du vor dem Start am Altar; sie verändern den nächsten Lauf (mehr Zeit, mehr Gold, mehr Fallen …).

### WD5-06 The Great Creator · Nebenquest
**Aufgabe:** `wrd:trophy_fb`

> **Vorsicht:** Endkampf des Mods. Erst **The Fallen**, dann **The Great Creator** in fünf Phasen, ab Phase 2 mit einem Corrupted Greatsword.

Die **City of Gold** verlangt Erfahrungsstufe 80. Wer The Great Creator besiegt, bekommt seine Trophäe und eine Truhe voller Diamantblöcke.

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | Steht in | Stand |
|---|---|---|
| Keine. Natürliche Dungeons sind schon in der Standard-Config aus; Dungeons entstehen nur über die Vessel. | WD1-01 | 🟢 Standard-Config |
| Belohnungs-Tags `forge:ok_loot` bis `super_loot` an die Pack-Progression hängen (Befund, keine Entscheidung) | WD5-03 | 🔵 |

## 🔵 Offen vor dem Einbau

1. ~~O35~~ entschieden (F15): Stufe 1 und ein Oberwelt-Dungeon Pflicht. 🟢 Kapitel (F31, 2026-10-28): WD1 bis WD4 mit K8, WD5 mit K12 (Teil 2). Ob WD3 und WD4 schon in Teil 1 als Nebenquests erscheinen oder mit WD5 ins Training gehören, entscheidet der User. Die Kill-Aufgabe fehlt nicht: Bosse werden über ihre Trophäen geprüft.
2. Die Story nennt für Stufe 2 „die acht Oberwelt-Dungeons, je eine Quest“. Der Mod hat in der Oberwelt fünf Dungeon-Gruppen (normal, besonders, Wüste, Dschungel, Eis) und dazu die Nether-Gruppe. Die Texte machen eine Quest je Gruppe; mit WD2-01, WD2-02 und WD2-08 sind es acht Quests. Gemeint waren vielleicht die acht Dungeons der Infinite-Dimension (WD5).
3. Rückweg des Sentient Pathfinder (WD1-02) und Herkunft der Kreide (WD1-03) im Spiel prüfen.
4. Prüfbare Aufgabe für den Purpur-Palast (WD3-01): FTB Quests kann keine Struktur prüfen; Kontrollhaken oder `wrd:pur_pur_key`.
5. Seltenheit des Portalbaums (WD5-01); notfalls als Struktur setzen.
6. Goldmenge für WD5-04 und ob WD5-05 eine Kette aus sechs Quests wird.
7. Formatierung für FTB Quests erst beim Einbau.
