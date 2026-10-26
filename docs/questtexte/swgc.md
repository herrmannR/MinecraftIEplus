# Questtexte Star Wars: Galaxy in a Cube (Ersatz für das fehlende Buch)

> Stand 2026-10-17, überarbeitet 2026-10-26 (Shop, Baupläne und Rezepte nach O28, O42, Test 43; Einbau ins Questbuch bis K11), Minecraft 1.20.1. Entwurf für FTB Quests. Galaxy in a Cube hat kein Buch und kein JEI-Plugin (`../19_HILFEBUECHER.md`, `../modpfade/swgc/WISSEN.md`): Assembly Bench, Droid Fabricator und das Färben der Kyber-Kristalle erscheinen nie in JEI. Diese Texte führen deshalb Schritt für Schritt und enthalten alle Rezepte dieser Wege (Anhang am Ende).
> Gegliedert nach den Star-Wars-Meilensteinen SW2 bis SW5 der Meilensteinkarte (SW1 hat kein Questbuch). Die Kapitel sind dort Arbeitstitel.
> Quellen: `../modpfade/swgc/WISSEN.md` und `data.js`, `../17_STAR_WARS_1.20.1.md`, `../18_STORY.md` (nur Entscheidungen), `../03_ERZGENERATION.md`, `../meilensteine/data.js`. Rezepte des Droid Fabricator aus den Rezeptdateien der JAR, Verbrauch an der Assembly Bench aus `AssemblyBenchMenu$ResultSlot` (javap), IDs gegen die Sprachdatei und die Rezeptdateien geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren: Die Story schreibt der User. Wo ein Quest an den Einsiedler, den Droiden oder den Meister gehängt wird, setzt der User einen Satz davor.
- **Anrede „du“**, Item-Namen englisch wie im Spiel.
- **Hauptweg** = nötig für spätere Ziele. **Nebenquest** = stellt den Mod in der Breite vor.
- **Pack-Änderungen** sind mit ⚙️ markiert. Galaxy in a Cube wird im Pack stark umgebaut (aus allen Nicht-Star-Wars-Dimensionen entfernt, Baupläne aus dem Shop, Macht über Quests). Die Texte sind so geschrieben, dass sie nach der Umsetzung stimmen; den Stand nennt die Tabelle am Ende.
- 🔵 = nicht aus den JAR-Daten belegt oder noch nicht entschieden. Vor dem Einbau im Spiel prüfen.
- Eigene Items aus KubeJS (`kubejs/startup_scripts/teil1_items.js`): Baupläne `kubejs:bauplan_<name>`, Steuerkerne `kubejs:steuerkern_b1`, `_b2`, `_droideka`. Rezepte nach `kubejs/server_scripts/starwars/einsiedler_shop.js` (Fassung 11).
- **Ins Questbuch** (2026-10-26): Kapitel „Galaxy in a Cube“, Steuerdatei `tools/questbuch/swgc.cfg`, nur bis K11 (SW2, SW3). SW4 und SW5 fallen mit `bis = K11` weg; der Anhang hat keine Quests (Überschriften mit `####`, damit der Generator sie nicht als Quests liest).

---

## SW2 · Shop des Einsiedlers (K4 Der Mond)

⚙️ Alles aus diesem Kapitel beginnt im Shop des Einsiedlers auf dem Mond: Credits, Durasteel, die ersten Plastoid und die **Baupläne**. Ein Bauplan ist eine Schriftrolle. Ein Rechtsklick liest sie: Die Rolle verschwindet, und das Rezept ist für die ganze Welt freigeschaltet, für alle Spieler. Rezept und Beschreibung stehen danach im Buch „Baupläne des Einsiedlers“. Ohne Bauplan liefert die Werkbank nichts.

### SW2-01 Credits · Hauptweg
**Aufgabe:** `swgc:copper_credit`

Credits sind die Währung des Shops. Es gibt drei Sorten: 5 Copper Credit sind ein Iron Credit, 3 Iron Credit ein Gold Credit. Ein Rechtsklick zerlegt einen Credit in die kleinere Sorte, kleine Sorten tauschst du an der Werkbank in die größere.
⚙️ Credits gibt es nur als Belohnung für Quests. Aus Kupfer, Eisen oder Gold lassen sie sich nicht herstellen.

### SW2-05 Assembly Bench · Hauptweg
**Aufgabe:** `swgc:assembly_bench`

Die Werkbank für Blaster, Lichtschwerter und Rüstungsbemalungen. Ihre Rezepte stehen im Code und erscheinen **nicht in JEI**; die Quests dieses Kapitels nennen sie.
⚙️ Kauf den Bauplan „Assembly Bench“ und lies ihn. Danach baust du sie an der Werkbank: 1 Advanced Control Circuit (Mekanism), 2 Desh Plate, 1 Engineer's Workbench (IE) und 3 Block of Steel. Der Block ist zwei Felder breit.

So funktioniert die Bank: links ein **Hauptfeld**, darunter zwei **Nebenfelder**, rechts das **Ergebnis**. Was im Hauptfeld liegt, bestimmt das Rezept. Gibt es mehrere Ausführungen (Blaster-Modelle, Griffdesigns, Bemalungen), wählst du sie in der Liste der Oberfläche. Jeder Zusammenbau verbraucht genau ein Item aus jedem belegten Feld.

### SW2-04 Durasteel Ingot · Hauptweg
**Aufgabe:** `swgc:durasteel_ingot`

Das Metall von Galaxy in a Cube, für Droid Fabricator, Blaster, die Steuerkerne der Droiden und die schweren Rüstungen. Es steht in keinem Tag; kein anderer Mod verarbeitet es.
⚙️ Durasteel gibt es nur im Shop. Ein Rezept hat es im Pack nicht.

### SW2-06 Droid Fabricator · Hauptweg
**Aufgabe:** `swgc:droid_fabricator`

Die Maschine baut Kampfdroiden aus Metallblöcken. Sie braucht keinen Strom und keinen Brennstoff. Die Droiden-Rezepte erscheinen **nicht in JEI**; sie stehen in den Droiden-Quests.
⚙️ Kauf den Bauplan „Droid Fabricator“ und lies ihn. Danach baust du ihn an der Werkbank: 2 Steel Plate, 1 Advanced Control Circuit, 2 Durasteel Ingot, 1 Steel Casing (Mekanism) und 3 Block of Steel.
⚙️ Jeder Droide braucht im Fabricator zusätzlich seinen **Steuerkern**, der dabei verbraucht wird. Das Werkbank-Rezept des Kerns schaltet der Bauplan des Droiden frei.

### SW2-07 B-2 · Nebenquest
**Aufgabe:** `swgc:b2`

Der B-2 ist der erste Droide, den du ohne Plastoid und ohne Blaster bauen kannst. Leg die Zutaten in den Droid Fabricator und warte, bis er fertig ist.
Zutaten: 5 Block of Steel, 6 Redstone Dust, 2 Block of Copper, 3 Diamond und 1 Steuerkern B-2. Zeit 240 (🔵 vermutlich Ticks, also 12 Sekunden).
⚙️ Den Steuerkern B-2 (`kubejs:steuerkern_b2`) baust du nach dem Bauplan „Droide B-2“ an der Werkbank: 4 Durasteel Ingot, 4 Advanced Control Circuit, 1 Block of Diamond.
Das Ergebnis ist ein Item. Beim Platzieren entsteht der Droide mit dir als Besitzer. Eigene Droiden nehmen Befehle an: Follow, Hold Position, Stand Still, Combat Aid und Eliminate Mobs. 🔵 Wie man die Befehle gibt, im Spiel prüfen.

### SW2-02 Gas Harvester · Nebenquest
**Aufgabe:** `swgc:gas_harvester`, `swgc:empty_gas_vessel`

Der Gas Harvester füllt einen Empty Gas Vessel mit Tibanna-Gas. Er braucht keinen Strom, keinen Brennstoff und keinen besonderen Standort. Tibanna ist die Munition der Blaster.
⚙️ Beide Rezepte schaltet der Bauplan „Gas Harvester“ frei.
Rezept Gas Harvester: 4 Block of Steel, 1 Advanced Control Circuit, 2 Desh Plate, 1 Basic Fluid Tank (Mekanism), 1 Redstone Engineering Block (IE).
Rezept Empty Gas Vessel: 1 Desh Plate, 3 Steel Plate, 1 Glass.

### SW2-03 Tibanna Vessel · Nebenquest
**Aufgabe:** `swgc:tibanna_vessel`

Setz einen leeren Behälter per Rechtsklick in den Gas Harvester. Nach 20 Sekunden ist er voll, im Nether und im End nach 10. Per Rechtsklick nimmst du ihn wieder heraus.
Mit Tibanna Vessels lädst du Blaster nach. Ein zweiter Harvester lohnt sich, wenn du viel schießt.

---

## SW3 · Plastoid, Blaster und Truppen (K7 Horchposten)

⚙️ Plastoid machst du ab hier selbst aus HDPE Pellets von Mekanism. Damit beginnen Blaster, B-1, Droideka und die Rüstungen.

### SW3-01 Plastoid · Hauptweg
**Aufgabe:** `swgc:plastoid`

Der Kunststoff von Galaxy in a Cube, für Blaster, den Steuerkern B-1, Droideka und die Rüstungen.
⚙️ Der Einsiedler verkauft nur die ersten 20 Plastoid. Danach baust du es selbst: Mit dem Bauplan „Plastoid“ ergeben 2 HDPE Pellets an der Werkbank 1 Plastoid. HDPE Pellets kommen aus der Pressurized Reaction Chamber (Mekanism-Quest „Pressurized Reaction Chamber und HDPE“).

### SW3-02 Blaster · Hauptweg
**Aufgabe:** eines von `swgc:dc15a`, `swgc:dc15s`, `swgc:dc17`, `swgc:dh17`, `swgc:e5`, `swgc:tl50`, `swgc:amban_sniper_rifle`

An der Assembly Bench: **Diamond** ins Hauptfeld, **Plastoid** und **Durasteel Ingot** in die Nebenfelder. Dann wählst du eines von sieben Modellen: DC-15A, DC-15S, DC-17, DH-17, E-5, TL-50 oder Amban Sniper Rifle.
Ein Blaster hat ein Magazin. Nachladen geht mit Tibanna Vessels („No ammo“, „Ammo full“). Jedes Modell hat eigene Werte für Schaden, Tempo, Streuung und Magazin (🔵 Zahlen nicht ausgelesen).
⚙️ Der Bauplan „Blaster“ aus dem Shop erklärt alle sieben Modelle im Buch. Gesperrt ist an der Bank nichts; du brauchst nur die Assembly Bench.

### SW3-03 B-1 · Hauptweg
**Aufgabe:** `swgc:b1`

Der einfache Kampfdroide. Er bekommt den Blaster, den du in den Fabricator legst, als Waffe.
Zutaten: 3 Block of Steel, 3 Redstone Dust, 2 Block of Copper, 1 Blaster (jedes der sieben Modelle) und 1 Steuerkern B-1. Zeit 160 (🔵 vermutlich 8 Sekunden).
⚙️ Den Steuerkern B-1 (`kubejs:steuerkern_b1`) baust du nach dem Bauplan „Droide B-1“ an der Werkbank: 4 Plastoid, 4 Basic Control Circuit, 1 Block of Redstone.

### SW3-04 Droideka · Nebenquest
**Aufgabe:** `swgc:droideka`

Der schwere Droide mit eigenem Schild. 🔵 Kampfwerte nicht ausgelesen.
Zutaten: 4 Block of Steel, 8 Redstone Dust, 3 Block of Copper, 4 Diamond, 1 Plastoid und 1 Steuerkern Droideka. Zeit 200 (🔵 vermutlich 10 Sekunden).
⚙️ Den Steuerkern Droideka (`kubejs:steuerkern_droideka`) baust du nach dem Bauplan „Droideka“ an der Werkbank: 4 Durasteel Ingot, 4 Elite Control Circuit, 1 Netherite Ingot.

### SW3-05 Klonrüstung · Nebenquest
**Aufgabe:** `swgc:clone_phase_2_helmet`, `swgc:clone_phase_2_chestplate`, `swgc:clone_phase_2_leggings`, `swgc:clone_phase_2_boots`

Die Rüstung Clone Phase 2, ganz aus Plastoid an der Werkbank: Helm 5, Brust 8, Hose 7, Stiefel 4, zusammen 24 Plastoid. 🔵 Rüstungswerte nicht ausgelesen.
⚙️ Die Rezepte schaltet der Bauplan „Klon-Rüstung (Phase 2)“ frei.

### SW3-06 Bemalung einer Einheit · Nebenquest
**Aufgabe:** ein bemaltes Teil der Klonrüstung, eines von `swgc:clone_<einheit>_helmet`, `_chestplate`, `_leggings`, `_boots` (15 Einheiten, ohne die 212th)
**Steuerdatei:** Oder-Aufgabe mit 60 IDs in `tools/questbuch/swgc.cfg`. Die 212th fehlt absichtlich: Den 212er-Helm bekommt man in der Story (O71), er würde die Quest sonst ohne Bemalen erfüllen.

Leg ein Teil der Klonrüstung ins Hauptfeld der Assembly Bench und lass die Nebenfelder leer. In der Liste wählst du eine von 16 Einheiten, ohne weitere Zutaten: 104th, 13th, 442nd, 497th und 212th Battalion, 187th, 305th, 31st, 501st, 615th und 7th Legion, 332nd Company, 41st Elite Corps, 87th Sentinel Corps, 91st Recon Corps, Coruscant Guard. Umbemalen geht beliebig oft. Für diese Quest zählt jede Einheit außer der 212th.

### SW3-07 Royal Guard · Nebenquest
**Aufgabe:** `swgc:royal_guard_helmet`, `swgc:royal_guard_chestplate`, `swgc:royal_guard_leggings`, `swgc:royal_guard_boots`

Die rote Rüstung Royal Guard, an der Werkbank aus Durasteel, Plastoid und Red Wool (zusammen 10 Durasteel).
⚙️ Die Rezepte schaltet der Bauplan „Rüstung der Royal Guard“ frei.
Dazu passt die Force Pike: 2 Redstone Dust, 1 Lightning Rod, 2 Diamond.

### SW3-08 Vader · Nebenquest
**Aufgabe:** `swgc:vader_helmet`, `swgc:vader_chestplate`, `swgc:vader_leggings`, `swgc:vader_boots`

Die schwerste Rüstung des Mods: zusammen 18 Durasteel, dazu Obsidian, Plastoid, Redstone Dust und 2 Amethyst Shard für den Helm. Mit Atemgeräusch.
⚙️ Die Rezepte schaltet der Bauplan „Vader-Rüstung“ frei.

---

## SW4 · Die Macht (K12 Ausbildung, Part 2)

### SW4-01 Helle und dunkle Seite · Hauptweg
**Aufgabe:** Checkmark (⚙️ die Quest vergibt Machtpunkte per Befehl, 🔵 T10)

Jeder Spieler hat zwei Zähler: helle und dunkle Seite. Ihre Summe ist deine **Macht-Stärke**; sie schaltet Fähigkeiten frei und entscheidet, welche Farbe dein Kyber-Kristall annehmen kann.
⚙️ Im Pack wächst die Macht nicht von selbst. Punkte gibt es nur über Quests der Ausbildung.

Ränge der hellen Seite (ab Punkten): Youngling 10, Padawan 24, Knight 42, Master 54, Grandmaster 72.
Ränge der dunklen Seite: Killer 8, Servant 18, Warrior 40, Lord 55, Dark Lord 70.

### SW4-02 Macht-Fähigkeiten · Hauptweg
**Aufgabe:** Checkmark

Fähigkeiten löst du mit der Taste „Force Actions“ aus und wechselst sie mit dem Mausrad. Dazu muss ein Lichtschwert oder ein Blaster in deiner Haupthand liegen.

| Fähigkeit | ab Macht-Stärke |
|---|---|
| Block | 0 |
| Telekinesis | 1 |
| Jump (beim Springen halten) | 15 |
| Push | 30 |
| Mind Trick | 42 |
| Unlimited Power (Machtblitze) | dunkle Seite ab 55 |

🔵 Ob Fähigkeiten Ausdauer oder Abklingzeit kosten, ist nicht ausgelesen.

### SW4-03 Jedi- und Sith-Kleidung · Nebenquest
**Aufgabe:** `swgc:jedi_male_chestplate`, `swgc:sith_male_chestplate` (eins davon)

Roben aus Faden und Wolle, an der Werkbank (Rezepte in JEI). Jedi: Robe, Pants, Boots, ohne Helm. Sith: Hood, Mantle, Leggings, Boots.
An der Assembly Bench wechselst du die Ausführung, ohne weitere Zutaten: Jedi Male, eine zweite Fassung und Jedi Female; bei den Sith ebenso.

---

## SW5 · Lichtschwerter (K15 Star-Wars-Welten, Part 3)

> ⚠️ Ohne Macht kein Lichtschwert: Erst mit Macht-Stärke 1 lässt sich ein Kristall färben, und nur ein farbiger Kristall passt in einen Griff.

### SW5-01 Kyber Crystal · Hauptweg
**Aufgabe:** `swgc:kyber_crystal`

Das Herz jedes Lichtschwerts. Der abgebaute Kristall ist farblos.
⚙️ Kyber gibt es nur auf den Star-Wars-Welten, in der Overworld ist er entfernt, und er ist bewusst selten. Du gewinnst ihn aus dem Kyber-Erz der Planeten (zuerst Endor). 🔵 Wie aus dem Erz der Kristall wird (Drop oder Rezept), ist noch offen.

### SW5-02 Kristall färben · Hauptweg
**Aufgabe:** `swgc:blue_kyber_crystal`, `swgc:green_kyber_crystal`, `swgc:red_kyber_crystal`, `swgc:violet_kyber_crystal`, `swgc:orange_kyber_crystal`, `swgc:yellow_kyber_crystal`, `swgc:pink_kyber_crystal` (eins davon)

Rechtsklick mit dem Kristall öffnet eine Farbwahl. Welche Farben gehen, hängt von deiner Macht ab:

| Farbe | Macht-Stärke | Verhältnis hell : dunkel |
|---|---|---|
| Blue, Green | ab 1 | mindestens 2 : 1 |
| Red | ab 1 | höchstens 1 : 2 |
| Violet, Orange | ab 30 | zwischen 1 : 2 und 2 : 1 |
| Yellow, Pink | ab 30 | beliebig |

Ohne dunkle Punkte zählst du als ganz hell. Ein gefärbter Kristall lässt sich später umfärben.

### SW5-03 Lightsaber Hilt · Hauptweg
**Aufgabe:** `swgc:lightsaber_hilt`

An der Assembly Bench: **Gold Ingot** ins Hauptfeld, je ein **Iron Ingot** in beide Nebenfelder.

### SW5-04 Lightsaber · Hauptweg
**Aufgabe:** `swgc:lightsaber`

An der Assembly Bench: **Lightsaber Hilt** ins Hauptfeld, den **farbigen Kyber Crystal** in ein Nebenfeld, das andere bleibt leer. Die Klinge übernimmt die Farbe des Kristalls. In der Liste wählst du eines von 36 Griffdesigns.
Das Schwert kämpft mit Ausdauer: Schläge und Blocks kosten Stamina, die sich erholt. Blasterschüsse kannst du blocken, und das Schwert lässt sich werfen.

### SW5-05 Lichtschwert-Formen · Nebenquest
**Aufgabe:** Checkmark

Acht Kampfstile mit eigenen Kosten; der Tooltip zeigt sie an. Wenig Blockkosten hat Soresu (6), wenig Angriffskosten Makashi (9). Am schnellsten erholt sich die Ausdauer bei Shii-Cho und Djem So.

| Form | Angriff | Block | Erholung je s |
|---|---|---|---|
| Shii-Cho | 13 | 13 | 0,15 |
| Makashi | 9 | 15 | 0,094 |
| Soresu | 16 | 6 | 0,107 |
| Ataru | 14 | 15 | 0,125 |
| Djem So | 12 | 15 | 0,15 |
| Niman | 14 | 14 | 0,125 |
| Vaapad | 12 | 16 | 0,107 |
| Jar'Kai | 11 | 11 | 0,094 |

🔵 Wie man die Form wechselt und ob Formen freigeschaltet werden, im Spiel prüfen.

### SW5-06 Double-bladed Lightsaber · Nebenquest
**Aufgabe:** `swgc:lightsaber_connector`, `swgc:double_lightsaber`

Den Connector baust du an der Assembly Bench: **Iron Ingot** ins Hauptfeld, Nebenfelder leer. Dann brauchst du zwei Lichtschwerter: Halt den Connector, nimm die Schwerter dazu und benutze ein Lichtschwert im Schleichen. 🔵 Genaue Handhabung im Spiel prüfen. Einige Griffdesigns lassen sich nicht verbinden.

### SW5-07 White Kyber Crystal · Nebenquest
**Aufgabe:** `swgc:white_kyber_crystal`

Den weißen Kristall gibt es nur auf einem Weg: Du reinigst einen roten. Dafür brauchst du mindestens 50 Punkte helle und höchstens 10 Punkte dunkle Seite. Halt den roten Kristall gedrückt (Benutzen, gut 3 Sekunden), dann wird er weiß.

### SW5-08 Ewok Spear · Nebenquest
**Aufgabe:** `swgc:ewok_spear`

Ein werfbarer Speer aus 1 Iron Ingot, 2 String und 2 Bamboo, an der Werkbank (Rezept in JEI). 🔵 Wo im Pack Ewoks, Jawas und Tusken Raider erscheinen (Planeten, Strukturen), ist noch offen.

---

## Anhang: Rezepte ohne JEI

Diese Wege zeigt JEI nie. Für das Questbuch als eigene Info-Quest oder in den Text der jeweiligen Quest.

#### Assembly Bench

Jeder Zusammenbau verbraucht ein Item je belegtem Feld.

| Hauptfeld | Nebenfelder | Ergebnis | Wahl in der Liste |
|---|---|---|---|
| Gold Ingot | Iron Ingot + Iron Ingot | Lightsaber Hilt | – |
| Lightsaber Hilt | farbiger Kyber Crystal + leer | Lightsaber in Kristallfarbe | 36 Griffdesigns |
| Diamond | Plastoid + Durasteel Ingot | Blaster | DC-15A, DC-15S, DC-17, DH-17, E-5, TL-50, Amban Sniper Rifle |
| Iron Ingot | leer + leer | Lightsaber Connector | – |
| Teil der Klonrüstung | leer + leer | dasselbe Teil, andere Bemalung | 16 Einheiten |
| Teil der Jedi- oder Sith-Kleidung | leer + leer | dasselbe Teil, andere Ausführung | Male, Male (zweite Fassung), Female |

Der Name eines Items bleibt beim Umbau erhalten. 🔵 Im Code legt ein Lichtschwert im Ergebnisfeld Griff und Kristall zurück in die Felder (Zerlegen); im Spiel prüfen.

#### Droid Fabricator

Rezepttyp `swgc:fabrication`, kein Strom.

| Droide | Zutaten | Zeit |
|---|---|---|
| B-1 (`swgc:b1`) | 3 Block of Steel, 3 Redstone Dust, 2 Block of Copper, 1 Blaster (Tag `swgc:blasters`, wird seine Waffe), Steuerkern B-1 | 160 |
| B-2 (`swgc:b2`) | 5 Block of Steel, 6 Redstone Dust, 2 Block of Copper, 3 Diamond, Steuerkern B-2 | 240 |
| Droideka (`swgc:droideka`) | 4 Block of Steel, 8 Redstone Dust, 3 Block of Copper, 4 Diamond, 1 Plastoid, Steuerkern Droideka | 200 |

⚙️ Im Pack Stahl- statt Eisenblöcke und je ein Steuerkern des Typs (Test 43). 🔵 Zeiteinheit vermutlich Ticks.

#### Kyber färben

Eigener Bildschirm per Rechtsklick, Tabelle in SW5-02. Weiß nur durch Reinigen eines roten Kristalls (SW5-07).

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | wo im Text | Stand |
|---|---|---|
| Galaxy in a Cube aus allen Nicht-Star-Wars-Dimensionen entfernt (Kyber, Jawas, Tusken, Ewok-Dörfer) | SW5-01, SW5-08 | 🟢 entschieden; Kyber-Override 🟡 angelegt, ungetestet; Mobs und Strukturen offen |
| Credits nur als Quest-Belohnung, Herstellungsrezepte aus Metall weg | SW2-01 | 🟢 Skript `einsiedler_shop.js` |
| Baupläne (Schriftrollen) aus dem Shop schalten Rezepte für die ganze Welt frei: Assembly Bench, Droid Fabricator, Gas Harvester mit Empty Gas Vessel, Plastoid, Steuerkerne, Rüstungen; Blaster nur Buchseite; alle Rezepte verteuert | SW2, SW3 | 🟢 O28, Test 43; Skript `einsiedler_shop.js` 🔵 ungetestet |
| Durasteel nur im Shop, ohne Rezept | SW2-04 | 🟢 O28, Skript |
| Steuerkern je Droidentyp als Zutat im Fabricator, Rezept per Bauplan; Stahl- statt Eisenblöcke | SW2-07, SW3-03, SW3-04, Anhang | 🟢 Skript |
| Plastoid: die ersten 20 im Shop, danach 2 HDPE Pellets → 1 Plastoid hinter dem Bauplan | SW3 (Einleitung), SW3-01 | 🟢 O42, Skript; Handelsgrenze stellt der User in Easy NPC ein |
| Macht wächst nicht von selbst, Punkte über Quests | SW4-01 | 🟢 entschieden; Technik offen (T10, Tests 33/34) |
| Kyber nur auf Star-Wars-Welten, selten, aus dem Kyber-Erz von Star Wars Planets | SW5-01 | 🟢 entschieden; Weg (Drop oder Rezept) offen |

## 🔵 Offen vor dem Einbau

- **Preise und Handel** im Shop: stellt der User in Easy NPC ein (Plastoid nur 20-mal). Die Quests nennen keine Preise.
- **Bauplan „Pilotenhelm“** (O71, Kapitel „Erinnerungsstücke“): baut eine andere Session; im Kapitel dieses Mods kommt er nicht vor, er gehört zur Story.
- **Reihenfolge SW2:** Die Quests folgen dem Gedanken „Assembly Bench als erster Kauf“ (Kommentar im Shop-Skript). Gas Harvester und Tibanna sind Nebenquest, weil Plastoid kein Tibanna mehr braucht; Tibanna ist nur noch Blaster-Munition.
- **SW3-06:** Die 212th zählt nicht (Story-Helm, O71). Soll stattdessen nur ein bestimmtes Teil (z. B. Helm) zählen?
- **Machtpunkte als Belohnung** (T10): Lassen sie sich per Befehl vergeben? Davon hängen SW4-01 und alle Farbbedingungen ab (Teil 2).
- **Holocrons** (`swgc:jedi_holocron`, `swgc:sith_holocron`, je 5 Punkte) wären eine Belohnung für die Ausbildung; Einordnung offen (O37).
- Befehle an Droiden geben, Formwechsel der Lichtschwerter, Doppelschwert-Handhabung, Zerlegen an der Assembly Bench: im Spiel prüfen.
- Zeiteinheit des Droid Fabricator (vermutlich Ticks).
- Werte von Blastern, Lichtschwertern und Rüstungen sind nicht ausgelesen; die Texte nennen deshalb keine Zahlen.
