# Questtexte Blood Magic

> Stand 2026-10-19, Minecraft 1.20.1. Entwurf für FTB Quests. Blood Magic hat das Buch **Sanguine Scientiem** (Patchouli, `../19_HILFEBUECHER.md`). Die Texte nennen deshalb nur Ziel, Fundstelle im Buch und die Abweichungen des Packs. Gegliedert nach den Meilensteinen BM1 bis BM6 der Meilensteinkarte; die Kapitel sind dort Arbeitstitel. Blood-Smeltery steht bei Tinkers (`tinkers.md`, TK3-07).
> Quellen: `../modpfade/bloodmagic/WISSEN.md`, Meilensteinkarte, `../01_PROGRESSION.md`, `../15_RAUMFAHRT.md`, `../18_STORY.md`, `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md`, `kubejs/server_scripts/crossmod/blood_smeltery.js`. Kategorie- und Eintragstitel aus `assets/bloodmagic/patchouli_books/guide/en_us/` der JAR (Blood Magic 3.3.8-50). Item-IDs aus der ID-Tabelle von `WISSEN.md`, die übrigen gegen die JAR geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren: Die Story schreibt der User. Wo eine Quest an die Story gehängt wird (Tempel, Schriftrollen, Meister), setzt er selbst einen Satz davor.
- **Anrede „du“**, Item-Namen englisch wie im Spiel.
- **Hauptweg** = Quest der Meilensteinkette (Pflicht für spätere Ziele). **Nebenquest** = stellt den Mod in der Breite vor (Ketten von höchstens drei bis vier Quests).
- **Pack-Änderungen** sind mit ⚙️ markiert. Sie gelten erst, wenn die Skripte umgesetzt sind; Stand in der Tabelle am Ende.
- 🔵 = nicht belegt oder noch nicht entschieden. Vor dem Einbau prüfen.
- **Zuschnitt der Meilensteine:** Die Karte nennt bei BM1 bis BM6 Altar-Stufen „aus dem Gedächtnis“. Laut Buch und Rezepten liegen sie anders (Rituale ab Stufe 3, Stufe 4 erst nach dem Demon Realm, Stufe 6 nicht umgesetzt). Die Quests folgen dem Mod; der Vorschlag für die Karte steht unter „Offen vor dem Einbau“.

---

## BM1 · Blutaltar und erste Orbs (K3 Industrie)

### BM1-01 Sanguine Scientiem · Hauptweg
**Aufgabe:** `patchouli:guide_book` (NBT `patchouli:book: "bloodmagic:guide"`)

Blood Magic erklärt sich in seinem eigenen Buch: Altar, Runen, Rituale und alle Rezepte. Du machst es aus einem Buch und einem Glas.
Buch: Utility Blocks & Items → Tiers & Getting Started. Diese Seite gibt die ganze Reihenfolge des Mods vor.

### BM1-02 Blood Altar · Hauptweg
**Aufgabe:** `bloodmagic:altar`, `bloodmagic:sacrificialdagger`

Der Altar sammelt Life Essence (LP), das Blut des Mods. Mit dem Sacrificial Knife gibst du ihm deine eigene Gesundheit.
Buch: Blood Altars → The Blood Altar.

> **Vorsicht:** Jeder Stich kostet ein Herz. Mit wenig Leben stirbst du am eigenen Messer. Iss vorher und stich nicht im Kampf.

### BM1-03 Weak Blood Orb · Hauptweg
**Aufgabe:** `bloodmagic:weakbloodorb`

Der Orb bindet dich an dein Soul Network: Er speichert LP, mit dem Sigils und Rituale später arbeiten. Er entsteht aus einem Diamanten im Altar.
Buch: Blood Altars → Soul Network.

### BM1-04 Blank Slate · Hauptweg
**Aufgabe:** `bloodmagic:blankslate`

Slates sind die Grundzutat jeder Stufe. Jede Slate braucht die vorige und einen stärkeren Altar.
Buch: Blood Altars → Tiers of Slates.
⚙️ Slates und Runen entstehen im Pack nur am Altar, nicht im Gießtisch der Smeltery.

### BM1-05 Alchemy Table und Arcane Ashes · Hauptweg
**Aufgabe:** `bloodmagic:alchemytable`, `bloodmagic:arcaneashes`

Am Alchemy Table machst du Reagenzien, Arcane Ashes und später Tränke. Mit den Ashes zeichnest du Alchemy Arrays auf den Boden, in denen Sigils entstehen.
Buch: Alchemy Table → Alchemy Table; Alchemy Arrays → Alchemy Array Basics, Crafting with Arrays.

### BM1-06 Divination Sigil · Hauptweg
**Aufgabe:** `bloodmagic:divinationsigil`

Das wichtigste Werkzeug des Mods: Es zeigt LP im Netzwerk, Füllstand und Stufe des Altars.
Buch: Alchemy Arrays → Sigils → Divination Sigil.

### BM1-07 Water und Lava Sigil · Nebenquest
**Aufgabe:** `bloodmagic:watersigil`, `bloodmagic:lavasigil`

Wasser und Lava gegen LP, ohne Eimer.
Buch: Alchemy Arrays → Sigils → Water Sigil, Lava Sigil.

### BM1-08 Your First Will · Nebenquest
**Aufgabe:** `bloodmagic:soulsnare`, `bloodmagic:basemonstersoul`

Demon Will ist die zweite Ressource des Mods. Mit der Soul Snare fängst du sie aus Monstern.
Buch: Demon Will → Will Manipulation → Your First Will, Demon Will.

### BM1-09 Hellfire Forge und Petty Tartaric Gem · Nebenquest
**Aufgabe:** `bloodmagic:soulforge`, `bloodmagic:soulgempetty`

Die Hellfire Forge verarbeitet Will; der Gem speichert sie.
Buch: Demon Will → Will Manipulation → Hellfire Forge, Tartaric Gems.

### BM1-10 Sentient Sword · Nebenquest
**Aufgabe:** `bloodmagic:soulsword`

Das Schwert sammelt Will bei jedem Kill und wird mit mehr Will im Gem stärker.
Buch: Demon Will → Demonic Items → Sentient Sword.

### BM1-11 Incense Altar · Nebenquest
**Aufgabe:** `bloodmagic:incensealtar`

Erhöht, was ein Stich mit dem Messer bringt.
Buch: Utility Blocks & Items → Incense Altar.

### BM1-12 Altar Stufe 2 · Hauptweg
**Aufgabe:** 8 × `bloodmagic:blankrune`

Acht Runen um den Altar heben ihn auf Stufe 2. Das Divination Sigil zeigt, ob es geklappt hat.
Buch: Blood Altars → Blood Runes; Utility Blocks & Items → Tiers & Getting Started.

### BM1-13 Apprentice Blood Orb · Hauptweg
**Aufgabe:** `bloodmagic:apprenticebloodorb`, `bloodmagic:reinforcedslate`

Mehr Platz im Netzwerk und die Slate der nächsten Stufe.
Buch: Blood Altars → Soul Network, Tiers of Slates.

### BM1-14 Dagger of Sacrifice · Nebenquest
**Aufgabe:** `bloodmagic:daggerofsacrifice`

Statt dich selbst opferst du Tiere und Monster in der Nähe des Altars.
Buch: Blood Altars → The Blood Altar.

### BM1-15 Bessere Runen · Nebenquest
**Aufgabe:** `bloodmagic:speedrune`, `bloodmagic:sacrificerune`, `bloodmagic:selfsacrificerune`

Ersetze Blank Runes nach und nach: schneller füllen, mehr LP je Opfer.
Buch: Blood Altars → Blood Runes → Speed Rune, Rune of Sacrifice, Rune of Self Sacrifice.

### BM1-16 Alchemy Flask · Nebenquest
**Aufgabe:** `bloodmagic:alchemy_flask`

Eine wiederbefüllbare Trankflasche, die du am Alchemy Table verbesserst.
Buch: Alchemy Table → Potion Crafting.

### BM1-17 Anointments · Nebenquest
**Aufgabe:** eines von `bloodmagic:melee_anointment`, `bloodmagic:fortune_anointment`, `bloodmagic:silk_touch_anointment`

Öle für Werkzeuge und Waffen: Schaden, Glück, Behutsamkeit für eine Weile.
Buch: Alchemy Table → Anointments.

---

## BM2 · Altar Stufe 3 (K5 Erzketten)

### BM2-01 Altar Stufe 3 · Hauptweg
**Aufgabe:** `bloodmagic:infusedslate`

Stufe 3 braucht deutlich mehr Runen, vier Säulen und Glowstone auf den Säulen. Die Imbued Slate geht erst auf diesem Altar.
Buch: Utility Blocks & Items → Tiers & Getting Started; Blood Altars → Tiers of Slates.

### BM2-02 Magician's Blood Orb · Hauptweg
**Aufgabe:** `bloodmagic:magicianbloodorb`

Genug LP-Speicher für die ersten Rituale.
Buch: Blood Altars → Soul Network.

### BM2-03 Lava Crystal · Hauptweg
**Aufgabe:** `bloodmagic:lavacrystal`

Ein Brennstoff, der LP statt Kohle verbrennt. Du brauchst ihn außerdem für den Activation Crystal.
Buch: Utility Blocks & Items → Lava Crystal.

### BM2-04 Sigils mit Reinforced Slate · Nebenquest
**Aufgabe:** eines von `bloodmagic:airsigil`, `bloodmagic:miningsigil`, `bloodmagic:growthsigil`, `bloodmagic:voidsigil`, `bloodmagic:sigilofmagnetism`

Bewegung, Abbau, Wachstum und Aufräumen gegen LP.
Buch: Alchemy Arrays → Sigils.
Für das Air Sigil brauchst du eine Ghast Tear aus dem Nether.

### BM2-05 Sigil of Holding · Nebenquest
**Aufgabe:** `bloodmagic:sigilofholding`

Trägt mehrere Sigils in einem Slot.
Buch: Alchemy Arrays → Sigils → Sigil of Holding.

### BM2-06 Größere Gems · Nebenquest
**Aufgabe:** `bloodmagic:soulgemlesser`, `bloodmagic:soulgemcommon`

Mehr Will im Gem schaltet stärkere Rezepte der Hellfire Forge frei.
Buch: Demon Will → Will Manipulation → Tartaric Gems.

### BM2-07 Sentient Tools · Nebenquest
**Aufgabe:** eines von `bloodmagic:soulpickaxe`, `bloodmagic:soulaxe`, `bloodmagic:soulshovel`, `bloodmagic:soulscythe`

Werkzeuge, die wie das Schwert aus der Will ihre Kraft ziehen.
Buch: Demon Will → Demonic Items → Sentient Tools.

---

## BM3 · Rituale (K7 Horchposten)

> **Vorsicht Nether:** Für die Inscription Tools brauchst du Magma Cream (Fire) und eine Ghast Tear (Air).

### BM3-01 Inscription Tools · Hauptweg
**Aufgabe:** `bloodmagic:waterscribetool`, `bloodmagic:firescribetool`, `bloodmagic:earthscribetool`, `bloodmagic:airscribetool`

Mit den Tools beschriftest du Ritual Stones mit den vier Elementen.
Buch: Rituals → Ritual Stones.

### BM3-02 Master Ritual Stone · Hauptweg
**Aufgabe:** `bloodmagic:masterritualstone`, 16 × `bloodmagic:ritualstone`

Der Master Ritual Stone ist das Herz jedes Rituals, die Ritual Stones bilden das Muster drumherum.
Buch: Rituals → Rituals - Getting Started, Ritual Stones.
🔵 Die Zahl 16 ist ein Platzhalter; wie viele Steine das erste geplante Ritual braucht, ist nicht ausgelesen.

### BM3-03 Ritual Diviner und Weak Activation Crystal · Hauptweg
**Aufgabe:** `bloodmagic:ritualdiviner`, `bloodmagic:activationcrystalweak`

Der Diviner setzt das Muster für dich, der Crystal startet das Ritual.
Buch: Rituals → The Ritual Diviner, Activation Crystals.

### BM3-04 Erstes Ritual · Nebenquest
**Aufgabe:** Abhaken

Starte ein Ritual, zum Beispiel Ritual of the Full Spring, Ritual of the Green Grove oder Ritual of Magnetism.
Buch: Rituals → List of Rituals.

### BM3-05 Alchemical Reaction Chamber · Hauptweg
**Aufgabe:** `bloodmagic:alchemicalreactionchamber`

Die ARC verarbeitet Erze und macht später die Weak Blood Shards. Ohne sie gibt es keine Stufe 4.
Buch: Utility Blocks & Items → Alchemical Reaction Chamber, Ore Processing, ARC Hydration.
ARC-Erzketten gibt es nur für Eisen, Gold, Kupfer, Netherite Scrap und Demonite; Pack-Erze wie Osmium oder Zinn gehen hier nicht.

### BM3-06 Blood-Magic-Teil für die Rakete T3 · Hauptweg
**Aufgabe:** 🔵 offen (O20)

⚙️ Die Rakete T3 braucht ein Teil aus Blood Magic, weil der Tempel auf dem Merkur den Planeten abschirmt. Welches Teil das ist, legt der User fest; der Text folgt dann.

### BM3-07 Living Armour · Nebenquest
**Aufgabe:** `bloodmagic:reagentbinding`, `bloodmagic:livingplate`

Rüstung, die beim Tragen lernt und Upgrades bekommt.
Buch: Alchemy Arrays → Living Equipment → Living Equipment Basics, Living Equipment Upgrades.

### BM3-08 Training Bracelet · Nebenquest
**Aufgabe:** `bloodmagic:upgradetrainer`

Lenkt, welche Upgrades die Rüstung lernt.
Buch: Alchemy Arrays → Living Equipment → Training Bracelet.

### BM3-09 Item Routing · Nebenquest
**Aufgabe:** `bloodmagic:masterroutingnode`, `bloodmagic:itemroutingnode`

Blood Magics eigene Logistik: Knoten verteilen Items zwischen Kisten.
Buch: Demon Will → Item Routing → Routing Nodes, Node Router.

---

## BM4 · Tempel · Demon Dungeon (K9 Der Tempel)

> **Vorsicht Demon Realm:** Fallen, Spike Traps und Ethereal Mimics. Nimm Essen und Heilung mit und merk dir den Rückweg.

### BM4-01 Der Altar im Tempel · Hauptweg
**Aufgabe:** 🔵 offen (O2: Zutaten der Reparatur; Botania-Schutz-Item)

⚙️ Im verlassenen Tempel auf dem Merkur steht ein zerstörter Altar. Du baust ihn neu auf; dazu brauchst du ein Gegengewicht aus Botania. Welche Zutaten das sind, legt der User fest.

### BM4-02 Edge of the Hidden Realm · Hauptweg
**Aufgabe:** Dimension `bloodmagic:dungeon` betreten

Das Ritual öffnet den Weg in den Demon Realm. Es kostet 80 000 LP.
Buch: Rituals → List of Rituals → Edge of the Hidden Realm; Dungeon Delving → The Antechamber.
⚙️ Das Ritual gelingt nur im Tempel auf dem Merkur. Woanders startet es nicht.

### BM4-03 Tau Fruit · Hauptweg
**Aufgabe:** `bloodmagic:weak_tau`

Tau Fruit findest du in den Truhen der Antechamber.
Buch: Dungeon Delving → Tau Fruit, Dungeon Keys.

### BM4-04 Weak Blood Shard · Hauptweg
**Aufgabe:** `bloodmagic:strong_tau`, `bloodmagic:weakbloodshard`

Aus Tau wird Saturated Tau, daraus in der ARC der Weak Blood Shard. Er ist der Schlüssel zu Stufe 4.
Buch: Dungeon Delving → Tau Fruit.

### BM4-05 Fund für die Rakete T4 · Hauptweg
**Aufgabe:** 🔵 offen

⚙️ Im Demon Realm liegt ein Pflicht-Item für die Rakete T4. Welches, legt der User fest.

### BM4-06 Altar Stufe 4 · Hauptweg
**Aufgabe:** 4 × `bloodmagic:largebloodstonebrick`, `bloodmagic:demonslate`

Stufe 4 braucht noch mehr Runen und Bloodstone als Kappen auf den Säulen.
Buch: Utility Blocks & Items → Bloodstone Bricks, Tiers & Getting Started; Blood Altars → Tiers of Slates.

### BM4-07 Master Blood Orb · Hauptweg
**Aufgabe:** `bloodmagic:masterbloodorb`

Eine Million LP Speicher, genug für die großen Rituale.
Buch: Blood Altars → Soul Network.

---

## BM5 · Altar Stufe 5 (K12 Ausbildung, Part 2)

### BM5-01 Dusk-Rituale · Hauptweg
**Aufgabe:** `bloodmagic:duskscribetool`, `bloodmagic:ritualdivinerdusk`

Das fünfte Element schaltet die großen Rituale frei.
Buch: Rituals → Ritual Stones, The Ritual Diviner.

### BM5-02 Well of Suffering · Nebenquest
**Aufgabe:** Abhaken

Das Ritual opfert Mobs in der Nähe des Altars und füllt ihn ohne dein Zutun.
Buch: Rituals → List of Rituals → Well of Suffering.

### BM5-03 Will-Aura · Nebenquest
**Aufgabe:** `bloodmagic:demoncrucible`, `bloodmagic:demonwillgauge`

Die Crucible gibt Will aus Gems in die Luft des Chunks ab.
Buch: Demon Will → Will Manipulation → Demon Will Aura, Demon Will Aura Gauge.

### BM5-04 Will-Kristalle · Nebenquest
**Aufgabe:** `bloodmagic:demoncrystallizer`, `bloodmagic:defaultcrystal`

Aus der Aura wachsen Kristalle; mit Aspekten bekommst du die vier Sorten Will.
Buch: Demon Will → Will Manipulation → Crystallized Will, Demon Will Aspects.

### BM5-05 Teleposer · Nebenquest
**Aufgabe:** `bloodmagic:teleposer`, `bloodmagic:teleposerfocus`

Tauscht Blöcke samt Inhalt über jede Entfernung.
Buch: Utility Blocks & Items → Teleposers.

### BM5-06 Mark of the Falling Tower · Nebenquest
**Aufgabe:** Abhaken

Das Ritual ruft gegen eine Opfergabe einen Erz-Meteor.
Buch: Rituals → List of Rituals → Mark of the Falling Tower.
Im Pack gibt es auch Meteore mit IE-Erzen (LV Wire Coil), Mekanism-Erzen (Infused Alloy) und Certus Quartz (Certus Quartz Crystal).

### BM5-07 Pathway to the Endless Realm · Hauptweg
**Aufgabe:** `bloodmagic:mineentrancekey`

Das zweite Dungeon-Ritual öffnet die tieferen Räume. Den Foreman's Key brauchst du für die Mines.
Buch: Rituals → List of Rituals → Pathway to the Endless Realm; Dungeon Delving → The Endless Realm, Dungeon Keys.
⚙️ 🔵 Ob auch dieses Ritual nur im Tempel gelingt, ist offen.

### BM5-08 Demonite · Hauptweg
**Aufgabe:** `bloodmagic:dungeon_ore`, `bloodmagic:hellforgedparts`

Demonite gibt es nur in den Mines, Intricate Hellforged Parts nur in deren Truhen.
Buch: Dungeon Delving → Demonite.

### BM5-09 Hellforged · Hauptweg
**Aufgabe:** `bloodmagic:ingot_hellforged`, 4 × `bloodmagic:dungeon_metal`

Aus Demonite wird Hellforged, das stärkste Metall des Mods. Es ist auch Werkzeugmaterial in Tinkers.
Buch: Dungeon Delving → Demonite; Utility Blocks & Items → Ore Processing.

### BM5-10 Altar Stufe 5 und Archmage's Blood Orb · Hauptweg
**Aufgabe:** `bloodmagic:etherealslate`, `bloodmagic:archmagebloodorb`

Stufe 5 braucht die meisten Runen und vier Hellforged Blocks. Danach hast du den größten Orb.
Buch: Utility Blocks & Items → Tiers & Getting Started.

---

## BM6 · Hellforged-Ausbau (K14 Endor, Part 3)

Eine Altar-Stufe 6 gibt es im Mod nicht (laut Buch nicht umgesetzt). BM6 ist deshalb der Ausbau mit Hellforged.

### BM6-01 Reinforced Runes · Hauptweg
**Aufgabe:** `bloodmagic:speedrune2`

Die stärkste Form der Runen, aus Netherite Scrap und Intricate Hellforged Parts.
Buch: Blood Altars → Blood Runes.

### BM6-02 Hellforged-Werkzeuge der ARC · Nebenquest
**Aufgabe:** `bloodmagic:hellforged_resonator`, `bloodmagic:hellforged_explosive_cell`, `bloodmagic:advancedcuttingfluid`

Damit holt die ARC am meisten aus jedem Erz, auch aus Ancient Debris.
Buch: Utility Blocks & Items → Alchemical Reaction Chamber, Ore Processing.

### BM6-03 Explosive Charges · Nebenquest
**Aufgabe:** eines von `bloodmagic:shaped_charge`, `bloodmagic:veinmine_charge`, `bloodmagic:deforester_charge`

Sprengladungen, die Flächen, Adern oder Bäume auf einmal abbauen.
Buch: Demon Will → Demonic Items → Explosive Charges.

### BM6-04 Reverence of the Condor · Nebenquest
**Aufgabe:** Abhaken

Fliegen im Umkreis des Rituals, für eine Million LP Startkosten.
Buch: Rituals → List of Rituals → Reverence of the Condor.

---

## ⚙️ Pack-Änderungen in diesem Text

| Änderung | Steht in | Stand |
|---|---|---|
| Life Essence, Blank Slates und Blank Runes nicht über die Smeltery (Blood-Smeltery) | BM1-04 | 🟢 umgesetzt (`crossmod/blood_smeltery.js`), in JEI bestätigt 2026-10-17 |
| Edge of the Hidden Realm nur im Tempel auf dem Merkur | BM4-02 | 🟡 beschlossen; Skript nicht geschrieben, Test E19 offen |
| Pathway to the Endless Realm ebenfalls nur im Tempel? | BM5-07 | 🔵 offen |
| Altar im Tempel neu aufbauen, mit Botania-Schutz-Item | BM4-01 | 🔵 Zutaten offen (O2) |
| Blood-Magic-Teil für die Rakete T3 | BM3-06 | 🟢 beschlossen; 🔵 welches Teil (O20) |
| Pflicht-Item aus dem Demon Realm für die Rakete T4 | BM4-05 | 🟡 beschlossen; 🔵 welches Item |
| Meteore unverändert, auch mit Mekanism- und AE2-Erzen | BM5-06 | 🟢 Entscheidung 2026-10-17, keine Änderung |
| ARC verarbeitet keine Pack-Erze (nur Eisen, Gold, Kupfer, Netherite Scrap, Demonite) | BM3-05 | 🟢 Fund, keine Änderung |

## 🔵 Offen vor dem Einbau

- **Zuschnitt der Meilensteine.** Die Karte nennt BM2 „Altar T3 · Soul Forge“, BM3 „Altar T4 · Rituale“, BM5 „Altar T5“, BM6 „Altar T6“. Im Mod ist es anders: Die Hellfire Forge kommt schon auf Stufe 1, Rituale auf Stufe 3, Stufe 4 braucht Weak Blood Shards aus dem Demon Realm (also erst nach dem Tempel), und Stufe 6 gibt es nicht. Vorschlag, dem die Texte folgen: BM2 = Altar Stufe 3, BM3 = Rituale (Stufe 3), BM4 = Tempel, Demon Realm, Stufe 4, BM5 = Endless Realm und Stufe 5, BM6 = Hellforged-Ausbau. Die Karte ändert der User.
- **Folge für die Rakete T3:** Vor dem Tempel ist höchstens Altar-Stufe 3 erreichbar. Das Teil für T3 (O20) muss also aus Stufe 3 kommen.
- **O31:** BM1 liegt vor dem Mond. Ob die Quests im Questbuch nachgereicht werden oder als Notizen stehen, entscheidet der User.
- **Ritual-Stein-Zahlen** sind nicht ausgelesen (WISSEN „Offen“); BM3-02 hat einen Platzhalter.
- **Aufgabe BM1-01:** Das Buch ist `patchouli:guide_book` mit NBT; beim Einbau prüfen, ob FTB Quests es mit NBT richtig erkennt.
- **Demon Realm auf dem Server** (P11): eigene Dimension, nicht auf dem Server des Hosts geprüft.
- **Abhaken-Quests** (BM3-04, BM5-02, BM5-06, BM6-04): Rituale lassen sich in FTB Quests nicht direkt prüfen. Beim Einbau eine bessere Aufgabe suchen (etwa ein Item, das nur das Ritual liefert).
