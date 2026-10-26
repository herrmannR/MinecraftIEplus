# Questtexte Star Wars Planets (die Star-Wars-Welten)

> Stand 2026-10-19, Minecraft 1.20.1. Entwurf für FTB Quests. Star Wars Planets bringt eigentlich ein Buch mit (Star Manual, Patchouli), das kommt im Pack aber raus (User, 2026-10-17; `../17_STAR_WARS_1.20.1.md`). Das Item ist ohnehin nicht registriert. Die Texte führen deshalb wie bei einem Mod ohne Buch, bleiben aber kurz: Vom Mod bleiben im Pack vor allem die Planeten, ihre Bauwerke und zwei Erze.
> Gegliedert nach den Raketen-Meilensteinen RF5 bis RF7 der Meilensteinkarte. Bau der Raketen und das erste Betreten jedes Planeten stehen schon in `adastra.md` (RF5-01, RF6-01, RF7-01); die Nummern hier schließen daran an. Die Lichtschwerter kommen aus Galaxy in a Cube (`swgc.md`, SW5).
> Quellen: `../modpfade/swplanets/WISSEN.md` und `data.js`, `../17_STAR_WARS_1.20.1.md`, `../15_RAUMFAHRT.md`, `../03_ERZGENERATION.md`, `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md` (S1–S10), `../meilensteine/data.js`, `kubejs/data/swplanets/loot_tables/entities/jawa.json`. IDs, Bauwerke und Biome gegen die JAR geprüft (2026-10-19).

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren: Die Story schreibt der User. Bosse, Kopfgeldjagd und Easy-NPC-Aufträge auf diesen Welten (Part 3, O12) sind noch nicht festgelegt und fehlen hier; diese Datei deckt nur ab, was der Mod selbst mitbringt.
- **Anrede „du“**, Item-Namen englisch wie im Spiel.
- **Hauptweg** = nötig für spätere Ziele. **Nebenquest** = stellt den Mod in der Breite vor.
- **Pack-Änderungen** sind mit ⚙️ markiert. Grundsatz des Packs: Was Star Wars Planets doppelt zu Galaxy in a Cube hat, fliegt bei Star Wars Planets raus (Lichtschwerter, Kyber, Kunststoff). Die Texte sind so geschrieben, dass sie nach der Umsetzung stimmen; den Stand nennt die Tabelle am Ende.
- 🔵 = nicht aus den JAR-Daten belegt oder noch nicht entschieden. Vor dem Einbau im Spiel prüfen.
- Aufgaben vom Typ „Bauwerk finden“ setzen den Structure-Task von FTB Quests voraus (🔵 prüfen, ob die Version im Pack ihn hat; sonst als Checkmark-Quest).
- **Ins Questbuch** (2026-10-26): noch kein Kapitel. Alle Abschnitte liegen ab K13 (Teil 2/3); Teil 1 wird nur bis K11 gebaut. IDs am 2026-10-26 erneut gegen die JAR geprüft, alle vorhanden. Beim Einbau beachten: Biom- und Bauwerk-Aufgaben kann `tools/QuestbuchGen.java` noch nicht erzeugen.
- **Nicht als Bedingung verwenden:** die Advancements des Mods `craft_saber` („May the force be with you!“, ohne Rezept unerreichbar) und „A hyperspace pro!“ (verlangt laut Datei Kamino, den es nicht gibt).

---

## RF5 · Endor (K13 Die Prüfung)

Endor ist die erste Star-Wars-Welt und mit der Rakete T5 die einzige erreichbare. Sauerstoff ist da, normale Schwerkraft, 15 °C. Im Orbit dagegen gibt es keinen Sauerstoff.

### RF5-02 Taiga of Endor · Nebenquest
**Aufgabe:** Biom `swplanets:endor_taiga` betreten

Endor ist ein einziger dichter Wald mit großen Bäumen, die als eigene Bauwerke gesetzt werden. Gelände, Regen und Tiere sind wie in einer Taiga der Overworld: Schafe, Schweine, Kühe, Wölfe, Füchse, nachts die üblichen Monster. Eigene Blöcke hat Endor nicht.
Tipp: Zwischen den Riesenbäumen verliert man schnell die Orientierung. Setz dir an der Landestelle eine Markierung, bevor du losläufst.

### RF5-03 Endor Outpost · Nebenquest
**Aufgabe:** Bauwerk `swplanets:endor_outpost` finden

Ein Außenposten des Imperiums mit drei Truhen. Darin liegen Teile der Stormtrooper-Rüstung und Stahl aus Ad Astra.
> ⚠️ Im Outpost steht ein Skeleton-Spawner. Licht setzen oder den Spawner abbauen, bevor du die Truhen leerst.

### RF5-04 AT-ST · Nebenquest
**Aufgabe:** Bauwerk `swplanets:at_st` finden

Ein abgestellter Läufer des Imperiums zwischen den Bäumen, mit einer Truhe.

### RF5-05 Kyber auf Endor · Hauptweg 🔵
**Aufgabe:** `swgc:kyber_crystal`

Kyber ist der Grund, warum du hier bist: Die Rakete T6 braucht ihn, und später die Lichtschwerter (`swgc.md`, SW5).
⚙️ Kyber gibt es nur auf den Star-Wars-Welten und er ist bewusst selten. Das Erz von Star Wars Planets liefert im Pack den Kyber Crystal von Galaxy in a Cube, nicht mehr den eigenen.
🔵 Belegt ist im Mod nur das Kyber-Erz auf Tatooine. Das Vorkommen für Endor, Hoth und Mustafar verweist auf einen Block, den es nicht gibt (S3). Ohne Eingriff liegt auf Endor also kein Kyber, und die Kette „Kyber von Endor → T6“ bricht. Vorkommen auf Endor per Datapack anlegen oder den Text ändern.

---

## RF6 · Tatooine, Hoth, Mustafar (K15 Star-Wars-Welten)

Die Rakete T6 öffnet die drei übrigen Welten des Systems „Outer Rims“. Alle haben Sauerstoff und normale Schwerkraft.

### RF6-02 Tatooine · Nebenquest
**Aufgabe:** `swplanets:tatooine_stone`

Tatooine ist Wüste: Tatooine Desert und eine felsige Wüste, kein Regen. Die Sonne ist hier fast doppelt so stark wie auf der Erde, Solarmodule liefern deutlich mehr. Nachts kommen Husks, Zombies, Skelette, Spinnen und Endermen.
Aus Tatooine Stone baust du an der Werkbank Slabs und Stairs.

### RF6-03 Öl auf Tatooine · Nebenquest 🔵
**Aufgabe:** `ad_astra:oil_bucket`

Auf Tatooine stehen Ölquellen von Ad Astra. Damit hast du Öl für Treibstoff gleich vor Ort und musst es nicht von der Erde mitbringen.
🔵 Der Mod trägt Tatooine in eine Biomliste ein, die in dieser Ad-Astra-Version anders heißt; vermutlich entstehen dort keine Ölquellen (`../15_RAUMFAHRT.md`). Im Spiel prüfen, sonst Quest streichen.

### RF6-04 Kyber-Erz · Hauptweg
**Aufgabe:** `swplanets:kyber_crystal_ore_sandstone`

Das Sandstone Kyber Crystal Ore liegt nur im Tatooine Desert, im Sandstein unter der Oberfläche, in kleinen Adern.
⚙️ Aus dem Erz wird der Kyber Crystal von Galaxy in a Cube, nicht der des Mods. 🔵 Weg offen: anderer Drop oder Rezept Erz → Kristall.

### RF6-05 Bantha · Nebenquest
**Aufgabe:** Bantha mit Wheat zähmen und reiten (Checkmark) 🔵

Banthas sind friedliche Tiere im Tatooine Desert. Gib einem Bantha Wheat, dann kannst du ihn reiten. Ein Bantha lässt 1–3 Beef fallen.
🔵 Ob es einen Sattel braucht und wie man lenkt, im Spiel prüfen.

### RF6-06 Jawa Crawler · Nebenquest
**Aufgabe:** Bauwerk `swplanets:jawa_crawler` finden

Der Jawa Crawler ist ein riesiges Fahrzeug im Tatooine Desert mit vielen Truhen: Steel Plate, Steel Cable, Cooked Beef, Teile der Stormtrooper-Rüstung. Darin leben Jawas in Gruppen von 3 bis 10.

### RF6-07 Handel mit Jawas · Nebenquest 🔵
**Aufgabe:** `ad_astra:wrench` (oder `ad_astra:steel_nugget`, `ad_astra:steel_rod`) abgeben

Jawas sind friedlich und mögen Mechanisches. Sie tauschen Wrench, Steel Nugget oder Steel Rod gegen Teile aus Ad Astra, etwa Steel Cable, Desh Cable, Solar Panel, Gas Tank oder Photovoltaic Vesnium Cell. Jeder Jawa handelt höchstens 7-mal.
⚙️ Getötete Jawas lassen im Pack Wrench, Steel Rod oder einen Etrionic Capacitor fallen. Lass sie trotzdem leben, der Handel lohnt mehr.
🔵 Welche Ware gegen was getauscht wird, ist nicht ausgelesen. Und Galaxy in a Cube hat eigene Jawas mit eigenem Handel; welche bleiben, ist offen (`../17_STAR_WARS_1.20.1.md`, Punkt 8).

### RF6-08 Hoth und der AT-AT · Nebenquest
**Aufgabe:** Bauwerk `swplanets:at_at` finden

Hoth ist eine Eiswüste aus Glacio Stone, −10 °C. Hier liegen verlassene AT-ATs. In ihrem Bauch stehen fertige Maschinen aus Ad Astra: Oxygen Distributor, Oxygen Loader, Energizer, Sliding Doors. Du kannst sie abbauen und mitnehmen. Dazu zwei Truhen.
Die Dimension heißt im Spiel `swplanets:hot`, der Planet in der Auswahl Hoth.

### RF6-09 Mustafar · Nebenquest
**Aufgabe:** Bauwerk `swplanets:tie_fighter` finden

> ⚠️ Mustafar besteht aus Blackstone-Hügeln und viel offener Lava. Feuerschutz mitnehmen und nicht blind graben.

Auf Mustafar steht ein abgestürzter TIE Fighter mit einer Truhe. Sonst gibt es hier weder Tiere noch eigene Erze.

### RF6-10 Stormtrooper-Rüstung · Nebenquest 🔵
**Aufgabe:** `swplanets:stormtrooper_mask`, `swplanets:stormtrooper_chestplate`, `swplanets:stormtrooper_leggings`, `swplanets:stormtrooper_boots`

Die Stormtrooper-Rüstung zählt für Ad Astra als Raumanzug. Rüstungswerte: Helm 2, Brust 5, Hose 5, Stiefel 2, also schwächer als Eisen. Sie ist die Grundlage der Beskar-Rüstung (RF7-04).
Die Teile liegen in den Truhen der Imperiums-Bauwerke (Endor Outpost, AT-ST, AT-AT, TIE Fighter) und der Jawa Crawler.
⚙️ 🔵 Das Rezept des Mods (Plastic Plate aus Öl) entfällt, weil Plastic Plate rausfliegt. Ob die Rüstung ein neues Rezept bekommt oder es sie nur als Beute gibt, ist offen. Solange gilt: nur Beute.

---

## RF7 · Mandalore (K16 Mandalore)

> ⚠️ Mandalore: −160 °C und Schwerkraft 3,0 statt 9,8. Du springst sehr hoch und fällst langsam. 🔵 Ob die Kälte einen besonderen Anzug verlangt, entscheidet Ad Astra; im Spiel prüfen und dann hier ergänzen.

### RF7-02 Mandalore · Nebenquest
**Aufgabe:** Biom `swplanets:mandalore_vestige` betreten

Mandalore ist eine leere Welt aus Smooth Sandstone. Keine Tiere, keine Monster, keine Bauwerke. Sie hat nur einen Zweck: Beskar.

### RF7-03 Beskar · Hauptweg 🔵
**Aufgabe:** `swplanets:beskar_ore_sandstone`, dann Beskar-Nugget 🔵 (ID offen)

Beskar Ore gibt es nur hier, im Sandstein von ganz unten bis etwa 160 Blöcke darüber, in kleinen Adern.
⚙️ Beskar ist im Pack extrem teuer: Das Erz lässt sich nur in einem sehr leistungsfähigen Ofen schmelzen und gibt dann ein einziges Nugget. 🔵 Welcher Ofen, welches Rezept und die ID des Nuggets (es gibt keins im Mod) sind offen. Dafür muss auch der Drop des Erzes geändert werden: Im Mod fällt sofort fertiges Beskar heraus.

### RF7-04 Beskar-Rüstung · Nebenquest 🔵
**Aufgabe:** `swplanets:beskar_armor_helmet`, `swplanets:beskar_armor_chestplate`, `swplanets:beskar_armor_leggings`, `swplanets:beskar_armor_boots`

Die Beskar-Rüstung ist eine aufgewertete Stormtrooper-Rüstung: je Teil das Stormtrooper-Teil und Beskar an der Werkbank. Rüstungswerte: Helm 4, Brust 9, Hose 7, Stiefel 4, mehr als Diamant.
Achtung: Anders als die Stormtrooper-Rüstung zählt sie **nicht** als Raumanzug. Auf Welten ohne Sauerstoff brauchst du weiter deinen Anzug.
⚙️ 🔵 Wie viel Beskar ein Teil nach der Verteuerung kostet (im Mod 1 Beskar je Teil), ist offen.
Beskar wird für keine weitere Stufe gebraucht; die Rüstung ist die Belohnung für den Weg hierher.

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | Wo im Text | Stand |
|---|---|---|
| Star Manual raus (Advancement-Belohnung entfernen) | Kopf | 🟢 entschieden 2026-10-17, nicht umgesetzt |
| Planetenstufen per Datapack: Endor 5, Tatooine/Hoth/Mustafar 6, Mandalore 7 | RF5, RF6, RF7 | 🟢 entschieden, nicht umgesetzt; 🔵 ob Ad Astra Stufen über 4 annimmt |
| Kyber-Erz liefert den Kyber Crystal von Galaxy in a Cube, Kyber deutlich seltener | RF5-05, RF6-04 | 🟢 entschieden 2026-10-17; 🔵 Weg (Drop oder Rezept) offen |
| Kyber-Vorkommen auf Endor anlegen (fehlt im Mod) | RF5-05 | 🔵 nicht entschieden |
| Plastic Plate raus → Stormtrooper-Rüstung ohne Rezept | RF6-10 | 🟢 entschieden; 🔵 neues Rezept oder nur Beute offen |
| Blaster, Blaster Upgrader und Upgrades von Star Wars Planets (Dopplung zu Galaxy in a Cube, Blaster braucht Plastic Plate) | nicht im Text | 🔵 nicht entschieden; daher keine Quest |
| Lichtschwerter und Light Saber Base von Star Wars Planets raus | nicht im Text | 🟢 entschieden, Skript-Entwurf in `17_STAR_WARS_1.20.1.md` |
| Beskar nur im starken Ofen, ein Nugget; Drop des Erzes ändern; eigenes Nugget-Item | RF7-03, RF7-04 | 🟢 entschieden 2026-10-17; 🔵 Ofen, Rezept, Item offen |
| Jawa-Beute überschrieben (Wrench, Steel Rod, Etrionic Capacitor) | RF6-07 | 🟡 angelegt (`kubejs/data/swplanets/loot_tables/entities/jawa.json`), ungetestet |
| `forge:sand`-Fix (Mustafar Sand) | nicht im Text | 🟡 angelegt (`fixes/tag_fixes.js`) |

## 🔵 Offen vor dem Einbau

1. **Kyber auf Endor:** Im Mod gibt es dort kein Erz (S3). Ohne Datapack-Vorkommen stimmt RF5-05 nicht, und die geplante Hürde „Kyber von Endor → T6“ (Meilensteinkarte RF5/RF6) ist nicht erreichbar.
2. **Weg Kyber-Erz → Kristall von Galaxy in a Cube** (Drop oder Rezept).
3. **Stormtrooper-Rüstung:** neues Rezept oder nur Beute; davon hängt die Beskar-Rüstung ab.
4. **Beskar:** Ofen, Rezept, Nugget-Item, Kosten je Rüstungsteil.
5. **Blaster von Star Wars Planets:** behalten oder entfernen (Dopplung). Bleibt er, kommen Quests für Blaster, Blaster Upgrader und die Upgrades aus den Imperiums-Truhen dazu.
6. **Jawas:** welche der beiden Mods sie stellt; Tauschverhältnisse.
7. **Im Spiel prüfen:** Ölquellen auf Tatooine, Reiten des Bantha, Kälte auf Mandalore, Structure-Task in FTB Quests.
8. **Story-Anschluss:** Bosse und Kopfgeld-Aufträge auf diesen Welten (O12, Part 3) fehlen noch.
