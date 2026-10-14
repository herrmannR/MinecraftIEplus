// Stand 2026-10-14, Minecraft 1.20.1. Quelle: swgc-forge-1.20.1-1.0.3.1.jar – Rezepte, Weltgenerierung, Tags, Loot-Tabellen und
// Sprachdatei; der Mod hat kein Buch und keine sichtbaren Advancements. Die Abläufe an der Assembly Bench, die Macht, Händler
// und Mobs stehen nur im Code; sie sind aus den Klassen des JARs gelesen (javap), Vanilla-Namen über die Mapping-Dateien der Instanz.
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Star Wars: Galaxy in a Cube",
  title: "Star Wars: Galaxy in a Cube",
  accent: ["#6fc3e8", "#1f6f96"],
  lede: "Lichtschwerter, Blaster, die Macht, Droiden und Klone, ganz ohne eigene Dimension: Alles spielt in der Overworld und kommt mit Vanilla-Rohstoffen aus. Der Mod hat kein Buch und keine Advancements, die eine Reihenfolge vorgeben. Die Phasen hier folgen deshalb den Abhängigkeiten der Rezepte: erst Rohstoffe und Werkbank, dann Waffen, dann die Macht, dann Truppen.",
  mods: [
    ["Star Wars: Galaxy in a Cube", "1.0.3.1", "main"],
  ],
  phases: [
    {
      t: "Rohstoffe und Werkbank",
      sub: "Kein Buchkapitel. Alles entsteht aus Eisen, Kupfer, Redstone, Glas, Kohle und Diamant; dazu der Kyber Crystal aus Höhlen der Overworld.",
      steps: [
        {
          t: "Kyber Crystal",
          pics: [["render:model/swgc_kyber_crystal", "Kyber Crystal (Block)"]],
          items: [
            ["swgc:block/kyber_crystal", "Kyber Crystal", "Block in der Overworld; lässt sich selbst fallen, mit Pickaxe abbaubar"],
          ],
          text: `<p>Der Kristall ist der einzige Rohstoff des Mods, den man suchen muss. Ein eigenes Weltgen-Merkmal setzt ihn in allen Biomen der Overworld: im Schnitt ein Versuch je 16 Chunks, zwischen 4 und 112 Blöcken über der Unterkante der Welt. Dieselbe Funktion setzt auch Packed Ice und Blue Ice; die genaue Form des Vorkommens ist nicht ausgelesen.</p>
<p>Der abgebaute Kristall ist farblos. Seine Farbe bekommt er erst durch die Macht (Phase „Die Macht“), und erst ein farbiger Kristall lässt sich in ein Lichtschwert einsetzen.</p>`,
          needs: [["Pickaxe", "v"]],
        },
        {
          t: "Gas Harvester und Tibanna Vessel",
          pics: [["render:model/swgc_gas_harvester", "Gas Harvester"]],
          items: [
            ["render:model/swgc_gas_harvester_s", "Gas Harvester", "2 Block of Iron, 3 Redstone Dust, 2 Copper Ingot, 1 Glass, 1 Iron Ingot"],
            ["swgc:item/empty_gas_vessel", "Empty Gas Vessel", "1 Iron Nugget + 1 Glass + 1 Iron Ingot"],
            ["swgc:item/tibanna_vessel", "Tibanna Vessel", "gefüllter Behälter aus dem Gas Harvester"],
          ],
          text: `<p>Der Gas Harvester füllt einen eingesetzten Empty Gas Vessel mit Tibanna-Gas. Er braucht dafür weder Strom noch Brennstoff noch einen bestimmten Standort: Im Code zählt er je Tick eins hoch und ist bei 400 fertig, also nach 20 Sekunden. Im Nether und im End zählt er doppelt so schnell.</p>
<p>Man setzt den leeren Behälter per Rechtsklick ein und nimmt den vollen per Rechtsklick heraus. Tibanna Vessel ist Zutat für Plastoid und die Munition der Blaster.</p>`,
          needs: [["Iron Ingot, Block of Iron", "v"], ["Copper Ingot", "v", "2"], ["Redstone Dust", "v", "3"], ["Glass", "v"]],
        },
        {
          t: "Plastoid und Durasteel",
          items: [
            ["swgc:item/plastoid", "Plastoid", "1 Tibanna Vessel + 3 Kohle (Tag <code>minecraft:coals</code>), formlos"],
            ["swgc:item/durasteel_ingot", "Durasteel Ingot", "4 Iron Ingot + 1 Diamond ergeben 4, formlos"],
          ],
          text: `<p>Die beiden Werkstoffe des Mods, beide an der normalen Werkbank. Plastoid ist der Kunststoff für Klonrüstungen und Blaster, Durasteel das Metall für Blaster und die schweren Rüstungen. Ein Diamant reicht für vier Barren.</p>
<p>Durasteel entsteht ohne Ofen und ohne Maschine. Der Barren steht in keinem Tag.</p>`,
          needs: [["Tibanna Vessel", "m"], ["Coal oder Charcoal", "v", "3 je Plastoid"], ["Iron Ingot", "v"], ["Diamond", "v", "1 je 4 Durasteel"]],
        },
        {
          t: "Assembly Bench",
          pics: [["render:model/swgc_assembly_bench", "Assembly Bench"], ["swgc:gui/container/lightsaber_forge", "Oberfläche der Assembly Bench"]],
          items: [
            ["render:model/swgc_assembly_bench_s", "Assembly Bench", "1 Paper + 3 Iron Ingot + 3 Planks; zwei Blöcke breit"],
          ],
          text: `<p>Die Werkbank für alles, was kein gewöhnliches Rezept hat. Sie hat ein Hauptfeld, zwei Nebenfelder und ein Ergebnisfeld; ihre Rezepte stehen im Code, nicht in Rezeptdateien, und tauchen deshalb voraussichtlich nicht in JEI auf (nicht geprüft). Was im Hauptfeld liegt, bestimmt das Rezept:</p>`,
          table: {
            head: ["Hauptfeld", "Nebenfelder", "Ergebnis"],
            rows: [
              [null, "Gold Ingot", "Iron Ingot in beiden", "Lightsaber Hilt"],
              [null, "Lightsaber Hilt", "ein farbiger Kyber Crystal", "Lightsaber in der Farbe des Kristalls; das Griffdesign ist wählbar"],
              [null, "Diamond", "Plastoid und Durasteel Ingot", "Blaster; das Modell ist wählbar"],
              [null, "Iron Ingot", "keine", "Lightsaber Connector"],
              [null, "Rüstungsteil (Klon, Jedi, Sith)", "keine", "dasselbe Teil in einer anderen Ausführung derselben Gruppe"],
            ],
          },
          needs: [["Paper", "v"], ["Iron Ingot", "v", "3"], ["Planks", "v", "3"]],
        },
      ],
    },
    {
      t: "Waffen",
      sub: "Kein Buchkapitel. Setzt die Assembly Bench voraus; für das Lichtschwert zusätzlich einen farbigen Kristall, also die Macht.",
      steps: [
        {
          t: "Blaster",
          items: [
            [null, "DC-15A", "Assembly Bench: Diamond + Plastoid + Durasteel Ingot"],
            [null, "DC-15S", "wie oben, andere Auswahl"],
            [null, "DC-17", "wie oben, andere Auswahl"],
            [null, "DH-17", "wie oben, andere Auswahl"],
            [null, "E-5", "wie oben, andere Auswahl"],
            [null, "TL-50", "wie oben, andere Auswahl"],
            ["swgc:item/amban_sniper_rifle", "Amban Sniper Rifle", "wie oben, andere Auswahl"],
            ["swgc:item/tibanna_vessel", "Tibanna Vessel", "Munition"],
          ],
          text: `<p>Alle sieben Blaster des Tags <code>swgc:assembly_bench_blasters</code> entstehen aus demselben Rezept; an der Bank wählt man nur das Modell. Der Jawa Blaster gehört nicht dazu, ihn tragen und verkaufen Jawas.</p>
<p>Blaster haben einen Munitionsvorrat und werden mit Tibanna Vessels nachgeladen (Meldungen „No ammo“ und „Ammo full“). Jedes Modell hat im Code eigene Werte für Schaden, Geschwindigkeit, Streuung und Magazingröße; die Zahlen sind nicht ausgelesen.</p>`,
          needs: [["Diamond", "v"], ["Plastoid", "m"], ["Durasteel Ingot", "m"], ["Tibanna Vessel", "m", "Munition"]],
        },
        {
          t: "Lightsaber Hilt und Lightsaber",
          items: [
            ["swgc:item/blueprint_lightsaber_hilt", "Lightsaber Hilt", "Assembly Bench: Gold Ingot + 2 Iron Ingot"],
            ["swgc:item/blueprint_lightsaber", "Lightsaber", "Assembly Bench: Lightsaber Hilt + farbiger Kyber Crystal"],
          ],
          text: `<p>Der Griff kostet nur Gold und Eisen. Zum Schwert wird er mit einem farbigen Kyber Crystal; die Klinge übernimmt dessen Farbe. Beim Zusammenbau wählt man eines von 36 Griffdesigns (im Code 38, zwei davon sind als nicht herstellbar markiert).</p>
<p>Das Lichtschwert wird mit Ausdauer geführt: Angriffe und Blocks kosten Stamina, die sich erholt. Blasterschüsse lassen sich blocken, und das Schwert kann geworfen werden (Entity „Thrown Lightsaber“). Der Schaden des Schwerts ist nicht ausgelesen.</p>`,
          needs: [["Gold Ingot", "v"], ["Iron Ingot", "v", "2"], ["farbiger Kyber Crystal", "m"]],
        },
        {
          t: "Lightsaber Connector und Double-bladed Lightsaber",
          items: [
            ["swgc:item/lightsaber_connector", "Lightsaber Connector", "Assembly Bench: Iron Ingot im Hauptfeld"],
            ["swgc:item/blueprint_double_lightsaber", "Double-bladed Lightsaber", "zwei Lightsaber + Connector"],
          ],
          text: `<p>Der Connector verbindet zwei Lichtschwerter zu einem Doppelschwert. Die Hinweise des Items: „Get 2 Lightsabers“ und „Use Lightsaber while crouching“. Einzelne Griffdesigns sind als nicht verbindbar markiert.</p>`,
          needs: [["Iron Ingot", "v"], ["Lightsaber", "m", "2"]],
        },
        {
          t: "Stangenwaffen",
          items: [
            [null, "Force Pike", "2 Redstone Dust + 1 Lightning Rod + 2 Diamond; Waffe des Royal Guardian"],
            [null, "Ewok Spear", "1 Iron Ingot + 2 String + 2 Bamboo; werfbar"],
          ],
          text: `<p>Die einzigen Waffen des Mods mit gewöhnlichem Werkbank-Rezept.</p>`,
          needs: [["Diamond", "v", "2"], ["Lightning Rod", "v"], ["Bamboo, String", "v"]],
        },
      ],
    },
    {
      t: "Die Macht",
      sub: "Kein Buchkapitel; alles aus dem Code. Voraussetzung ist nur, dass die Spielregel <code>forceObtainment</code> an ist (Standard: an).",
      steps: [
        {
          t: "Helle und dunkle Seite",
          pics: [["swgc:gui/force_icons", "Symbole der Macht-Fähigkeiten"]],
          items: [
            ["swgc:item/jedi_holocron", "Jedi Holocron", "Benutzen gibt 5 Punkte helle Seite; wird verbraucht"],
            ["swgc:item/sith_holocron", "Sith Holocron", "Benutzen gibt 5 Punkte dunkle Seite; wird verbraucht"],
          ],
          text: `<p>Jeder Spieler hat zwei Zähler, helle und dunkle Seite. Ihre Summe ist die Macht-Stärke, die Fähigkeiten freischaltet.</p>
<p><b>Helle Seite:</b> Jedes Mal, wenn der Spieler Erfahrungspunkte erhält, gibt es eine Chance auf einen Punkt. Die Chance sinkt mit dem Stand (im Code: Zufallszahl größer als 0,984 hoch Punktzahl).</p>
<p><b>Dunkle Seite:</b> Wer ein Wesen aus dem Tag <code>swgc:civilians</code> tötet (Villager, Wandering Trader, Iron Golem, Allay, Ewok, Jawa, Anzellan), hat eine Chance von 1 zu 3 auf einen Punkt; bei Tieren aus <code>swgc:innocent</code> (Wolf, Cat, Horse, Fox, Porg und andere) 1 zu 5. Bei Jungtieren ändert sich die Chance.</p>
<p>Die Holocrons zeigen außerdem den Rang an. Für beide gibt es kein Rezept, keine Loot-Tabelle und keinen Händler im Code: ohne Eingriff nur im Kreativmodus.</p>`,
          table: {
            head: ["Rang", "Jedi (helle Seite ab)", "Sith (dunkle Seite ab)"],
            rows: [
              [null, "0", "Force Sensitive", "Minion"],
              [null, "1", "Youngling: 10", "Killer: 8"],
              [null, "2", "Padawan: 24", "Servant: 18"],
              [null, "3", "Knight: 42", "Warrior: 40"],
              [null, "4", "Master: 54", "Lord: 55"],
              [null, "5", "Grandmaster: 72", "Dark Lord: 70"],
            ],
          },
          needs: [["Erfahrungspunkte", "v", "helle Seite"]],
        },
        {
          t: "Macht-Fähigkeiten",
          text: `<p>Fähigkeiten werden über die Taste „Force Actions“ ausgelöst und mit dem Mausrad gewechselt; dazu muss ein Lichtschwert oder Blaster in der Haupthand liegen („Take lightsaber/blaster in main hand“). Freigeschaltet wird nach Macht-Stärke, also der Summe beider Seiten.</p>`,
          table: {
            head: ["Fähigkeit", "ab Macht-Stärke", "Zusatzbedingung"],
            rows: [
              [null, "Block", "0", ""],
              [null, "Telekinesis", "1", ""],
              [null, "Jump", "15", "„Jump while holding … to use“"],
              [null, "Push", "30", ""],
              [null, "Mind Trick", "42", "gibt dem Ziel den Effekt Mind Trick"],
              [null, "Unlimited Power", "0", "dunkle Seite mindestens 55; Machtblitze"],
            ],
          },
        },
        {
          t: "Kyber Crystal färben",
          pics: [["swgc:gui/kyber_crystal", "Oberfläche zur Farbwahl"]],
          items: [
            ["swgc:item/blue_kyber_crystal", "Blue Kyber Crystal", "Macht ab 1; hell zu dunkel mindestens 2 zu 1"],
            ["swgc:item/green_kyber_crystal", "Green Kyber Crystal", "Macht ab 1; hell zu dunkel mindestens 2 zu 1"],
            ["swgc:item/red_kyber_crystal", "Red Kyber Crystal", "Macht ab 1; hell zu dunkel höchstens 1 zu 2"],
            ["swgc:item/violet_kyber_crystal", "Violet Kyber Crystal", "Macht ab 30; Verhältnis zwischen 1 zu 2 und 2 zu 1"],
            ["swgc:item/orange_kyber_crystal", "Orange Kyber Crystal", "Macht ab 30; Verhältnis zwischen 1 zu 2 und 2 zu 1"],
            ["swgc:item/yellow_kyber_crystal", "Yellow Kyber Crystal", "Macht ab 30; jedes Verhältnis"],
            ["swgc:item/pink_kyber_crystal", "Pink Kyber Crystal", "Macht ab 30; jedes Verhältnis"],
            ["swgc:item/white_kyber_crystal", "White Kyber Crystal", "nur durch Reinigen eines roten Kristalls"],
          ],
          text: `<p>Rechtsklick mit einem Kyber Crystal öffnet eine Farbwahl. Welche Farben erlaubt sind, hängt von der Macht-Stärke und vom Verhältnis heller zu dunkler Seite ab; ohne dunkle Punkte gilt das Verhältnis als unbegrenzt hell. Ein Spieler ohne Macht kann also keinen Kristall färben und damit kein Lichtschwert bauen. Auch ein schon gefärbter Kristall lässt sich umfärben.</p>
<p>Den weißen Kristall gibt es nur auf einem Weg: Wer mindestens 50 Punkte helle und höchstens 10 Punkte dunkle Seite hat, hält einen roten Kristall 64 Ticks lang benutzt, und er wird weiß.</p>`,
          needs: [["Kyber Crystal", "m"], ["Macht-Stärke 1 oder 30", "m"]],
        },
        {
          t: "Lichtschwert-Formen",
          text: `<p>Acht Kampfstile mit eigenen Werten; der Tooltip zeigt Angriffs- und Blockkosten in Stamina, Tempo und Erholung. Wie man die Form wechselt und ob Formen freigeschaltet werden müssen, ist nicht ausgelesen.</p>`,
          table: {
            head: ["Form", "Angriff (Stamina)", "Block (Stamina)", "Tempo", "Erholung je Sekunde"],
            rows: [
              [null, "Shii-Cho", "13", "13", "−2,5", "0,15"],
              [null, "Makashi", "9", "15", "−2,2", "0,094"],
              [null, "Soresu", "16", "6", "−2,4", "0,107"],
              [null, "Ataru", "14", "15", "−2,1", "0,125"],
              [null, "Djem So", "12", "15", "−2,4", "0,15"],
              [null, "Niman", "14", "14", "−2,4", "0,125"],
              [null, "Vaapad", "12", "16", "−2,0", "0,107"],
              [null, "Jar'Kai", "11", "11", "−2,3", "0,094"],
            ],
          },
        },
      ],
    },
    {
      t: "Truppen und Rüstungen",
      sub: "Kein Buchkapitel. Setzt Plastoid, Durasteel und für den B-1 einen Blaster voraus.",
      steps: [
        {
          t: "Droid Fabricator",
          pics: [["swgc:gui/container/droid_fabricator", "Oberfläche des Droid Fabricator"]],
          items: [
            ["swgc:item/droid_fabricator", "Droid Fabricator", "5 Block of Iron, 2 Iron Ingot, 1 Redstone Dust, 1 Copper Ingot"],
            [null, "B-1", "3 Block of Iron, 3 Redstone Dust, 2 Block of Copper, 1 Blaster (Tag <code>swgc:blasters</code>); Zeit 160"],
            [null, "B-2", "5 Block of Iron, 6 Redstone Dust, 2 Block of Copper, 3 Diamond; Zeit 240"],
            [null, "Droideka", "4 Block of Iron, 8 Redstone Dust, 3 Block of Copper, 4 Diamond, 1 Plastoid; Zeit 200"],
          ],
          text: `<p>Die einzige Maschine des Mods mit eigenen Rezeptdateien (Typ <code>swgc:fabrication</code>). Sie baut Kampfdroiden aus Metallblöcken; ein Stromanschluss oder Brennstoff kommt in Rezept und Code nicht vor. Der B-1 bekommt den eingelegten Blaster als Waffe.</p>
<p>Das Ergebnis ist ein Item, das den Droiden beim Platzieren mit dem Spieler als Besitzer erzeugt. Eigene Droiden und Klone nehmen Befehle an: Follow, Hold Position, Stand Still, Combat Aid und Eliminate Mobs.</p>`,
          needs: [["Block of Iron", "v", "3–5 je Droide"], ["Block of Copper", "v", "2–3"], ["Redstone Dust", "v"], ["Diamond", "v", "B-2 und Droideka"], ["Blaster", "m", "für den B-1"]],
        },
        {
          t: "Klonrüstung",
          items: [
            ["swgc:item/blueprint_helmet", "Phase 2 Helmet", "5 Plastoid"],
            ["swgc:item/blueprint_chestplate", "Phase 2 Chestplate", "8 Plastoid"],
            ["swgc:item/blueprint_leggings", "Phase 2 Leggings", "7 Plastoid"],
            ["swgc:item/blueprint_boots", "Phase 2 Boots", "4 Plastoid"],
          ],
          text: `<p>Die Grundrüstung aus 24 Plastoid. An der Assembly Bench lässt sich jedes Teil in die Bemalung einer von 16 Einheiten umwandeln, ohne weitere Zutaten: 104th, 13th, 442nd, 497th und 212th Battalion, 187th, 305th, 31st, 501st, 615th und 7th Legion, 332nd Company, 41st Elite Corps, 87th Sentinel Corps, 91st Recon Corps und Coruscant Guard.</p>
<p>Rüstungswerte und Haltbarkeit sind nicht ausgelesen.</p>`,
          needs: [["Plastoid", "m", "24"]],
        },
        {
          t: "Roben und schwere Rüstungen",
          items: [
            [null, "Jedi Male Robe", "6 String + White Wool + Brown Wool; dazu Pants (5 String) und Boots (2 String)"],
            [null, "Sith Male Mantle", "6 String + Gray Wool + Black Wool; dazu Hood (3 String), Leggings (5) und Boots (2)"],
            [null, "Royal Guard Helmet", "2 Durasteel Ingot + 1 Plastoid + 2 Red Wool"],
            [null, "Royal Guard Robe", "3 Plastoid + 3 Durasteel Ingot + 2 Red Wool; Pants: 2 Plastoid + 3 Durasteel + 2 Red Wool; Boots: 1 Plastoid + 2 Durasteel + 1 Red Wool"],
            [null, "Vader Helmet", "4 Durasteel Ingot + 1 Plastoid + 2 Amethyst Shard + 1 Obsidian"],
            [null, "Vader Chestplate", "6 Durasteel Ingot + 1 Redstone Dust + 1 Obsidian + 1 Plastoid; Leggings: 6 Durasteel + 1 Obsidian; Boots: 2 Durasteel + 2 Obsidian"],
          ],
          text: `<p>Jedi- und Sith-Kleidung kostet nur Wolle und Faden. An der Assembly Bench wechselt man zwischen den Ausführungen einer Gruppe: Jedi Male, Jedi Male (zweite Fassung) und Jedi Female; Sith Male, Sith Male (zweite Fassung) und Sith Female. Die Jedi-Sätze haben keinen Helm.</p>
<p>Royal Guard und Vader sind die Rüstungen aus Durasteel. Für beide gibt es Geräusche („Vader inhales“) und eigene Modelle; ihre Werte sind nicht ausgelesen.</p>`,
          needs: [["String, Wool", "v"], ["Durasteel Ingot", "m", "10 für Royal Guard, 18 für Vader"], ["Plastoid", "m"], ["Obsidian, Amethyst Shard", "v", "Vader"]],
        },
      ],
    },
  ],
  solo: [
    {
      t: "Wesen in der Welt",
      text: `<p>Natürlich erscheinen nur drei Gruppen. Jawas über einen Biom-Eintrag, Ewoks über ihr Bauwerk, Tusken Raider über einen eigenen Zeitgeber im Code.</p>`,
      items: [
        [null, "Jawa", "Desert und alle Badlands, Gruppen von 3–6; trägt einen Jawa Blaster"],
        [null, "Ewok, Ewok Shaman", "im Ewok Village (nur Biom Forest); Ewok Spear und Ewok Staff als Waffen"],
        [null, "Tusken Raider", "Overworld, in Biomen mit Wüstendorf; erscheinen als Stamm in Abständen von 6000 bis 18000 Ticks; Tusken Pike als Waffe"],
        [null, "Anzellan", "repariert Fahrzeuge und befehligte Truppen gegen Credits; kein natürliches Vorkommen gelesen"],
        [null, "Porg", "kein natürliches Vorkommen gelesen; nur Spawn Egg"],
        [null, "Emperor's Royal Guardian", "trägt Royal-Guard-Rüstung und Force Pike; nur Spawn Egg"],
        [null, "Obese-Wan Carbobi", "Scherzfigur: Klasse und Name sind im JAR vorhanden, in der Liste der registrierten Mobs steht sie nicht"],
      ],
    },
    {
      t: "Jawa-Handel",
      text: `<p>Jawas sind Händler mit eigener Logik: Sie heben Emeralds und Blaster vom Boden auf und bieten Aufgesammeltes zum Kauf gegen Emeralds an. Der Preis wird aus dem Gegenstand berechnet: bei Blastern aus Schaden und Magazin, bei Lichtschwertern zufällig 28 bis 56, bei Werkzeugen und Rüstungen aus deren Werten. Ein festes Warenangebot haben sie nicht.</p>`,
    },
    {
      t: "Credits",
      items: [
        ["swgc:item/copper_credit", "Copper Credit", "2 Copper Ingot"],
        ["swgc:item/iron_credit", "Iron Credit", "2 Iron Ingot oder 5 Copper Credit"],
        ["swgc:item/gold_credit", "Gold Credit", "2 Gold Ingot oder 3 Iron Credit"],
      ],
      text: `<p>Die Währung des Mods; Rechtsklick zerlegt einen Credit wieder in die kleinere Sorte. Im Code nimmt nur der Anzellan Credits an (Bezahlung für Reparaturen). Jawas rechnen in Emeralds.</p>`,
    },
    {
      t: "Ohne Rezept und ohne Fundort",
      text: `<p>Diese Items sind registriert, haben aber weder Rezept noch Loot-Tabelle noch eine Stelle im Code, die sie ausgibt. Ohne Eingriff gibt es sie nur im Kreativmodus.</p>`,
      items: [
        ["swgc:item/atrt", "AT-RT", "Läufer zum Aufsitzen"],
        ["swgc:item/atst", "AT-ST", "Läufer zum Aufsitzen"],
        ["swgc:item/delta7b", "Delta-7B", "Sternenjäger"],
        [null, "Clone", "befehligter Soldat mit DC-15S; trägt Klonrüstung"],
        [null, "Darksaber", "eigenes Lichtschwert"],
        ["swgc:item/double_bladed_glaive", "Double-bladed Glaive", "Doppelklingen-Waffe"],
        ["swgc:item/jedi_holocron", "Jedi Holocron, Sith Holocron", "je 5 Macht-Punkte"],
      ],
    },
    {
      t: "Nur von Mobs",
      items: [
        [null, "Jawa Blaster", "Waffe der Jawas; im Tag <code>swgc:blasters</code>, aber nicht an der Assembly Bench wählbar"],
        ["swgc:item/tusken_pike", "Tusken Pike", "Waffe der Tusken Raider"],
        [null, "Ewok Staff", "Waffe des Ewok Shaman"],
      ],
      text: `<p>Ob die Mobs ihre Waffen fallen lassen, steht im Code der Mobs (Drop-Chance); der Mod hat keine Loot-Tabellen für Mobs. Nicht im Einzelnen ausgelesen.</p>`,
    },
  ],
  bridges: [
    {
      t: "Keine Verbindung zu anderen Mods",
      text: `<p>Der Mod hat keine Abhängigkeit außer Forge und Minecraft, keine Rezepte für fremde Mods und nutzt in seinen Rezepten nur Vanilla-Items und zwei Vanilla-Tags (Planks, Coals). Er trägt nichts in <code>forge:</code>-Tags ein: Durasteel Ingot ist kein <code>forge:ingots</code>, Plastoid und Kyber Crystal stehen in keinem gemeinsamen Tag.</p>
<p>Daraus folgt für die Planung: Der Mod ist von der ersten Spielstunde an vollständig erreichbar (Eisen, Kupfer, Redstone, ein paar Diamanten) und hängt an keiner Stufe eines anderen Mods. Umgekehrt kann kein anderer Mod seine Werkstoffe verarbeiten.</p>`,
    },
    {
      t: "Überschneidung mit Star Wars Planets",
      x: true,
      text: `<p>Beide Mods bringen eigene, voneinander unabhängige Fassungen derselben Dinge mit: Kyber Crystal (hier ein Block der Overworld, dort ein Erz auf Tatooine), Lichtschwerter (hier Assembly Bench und Macht, dort Werkbank und Beacon), Blaster, einen Darksaber, Jawas und einen Kunststoff (Plastoid hier, Plastic Plate dort). Nichts davon ist gegenseitig verwendbar; die Items haben verschiedene IDs und keine gemeinsamen Tags.</p>`,
    },
  ],
  foot: "Quelle: swgc-forge-1.20.1-1.0.3.1.jar der Testinstanz (Minecraft 1.20.1, Forge 47.4.26): Rezepte, Weltgenerierung, Tags, Sprachdatei; Abläufe aus den Klassen des JARs. Lichtschwerter, Blaster, Rüstungen, Mobs und Fahrzeuge haben 3D-Modelle im Code und deshalb kein lesbares Bild; wo es eine Blaupausen-Textur gibt, steht sie als Ersatz. Nicht ausgelesen: Schaden und Magazin der Blaster, Schaden der Lichtschwerter, Rüstungswerte, Wechsel und Freischaltung der Lichtschwert-Formen, Kosten der Macht-Fähigkeiten, die Form des Kyber-Vorkommens, Drops der Mobs, die Preise des Anzellan, Bedienung der Fahrzeuge und ob JEI die Rezepte der Assembly Bench zeigt.",
};
