// Stand 2026-10-15, Minecraft 1.20.1. Quelle: AE2-Handbuch im JAR (assets/ae2/ae2guide, v. a. getting-started.md und die
// Item-Seiten), Rezepte und Sprachdateien aus appliedenergistics2-forge-15.4.11.jar, ae2wtlib-15.3.3-forge.jar,
// Applied-Mekanistics-1.4.3.jar, applied-botanics-forge-1.5.2.jar, more-immersive-wires-1.20.1-1.1.4.jar;
// Zahlen aus dem Handbuch und config/ae2/common.json der Testinstanz.
// Die Reihenfolge folgt „Getting Started“ des Handbuchs, danach den Kapiteln „AE2 Mechanics“ und „Items, Blocks, and Machines“.
// Bilder nur aus flachen Texturen (keine gezeichneten 3D-Modelle, Vorgabe des Users); Kabelteile ohne Item-Textur stehen mit null.
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Applied Energistics 2",
  title: "Applied Energistics 2",
  accent: ["#9b7cf0", "#5b3fb0"],
  lede: "Vom Meteoriten über Certus Quartz, Fluix und die Prozessoren aus dem Inscriber zum ersten ME-Lager, dann zu Kanälen, Autocrafting, kabellosem Zugriff, Quantum Bridge und Spatial IO. Die Reihenfolge folgt dem eingebauten Handbuch des Mods („Getting Started“ und die Kapitel danach); Zutaten und Zahlen stammen aus den Rezepten, dem Handbuch und der AE2-Config der Testinstanz.",
  mods: [
    ["Applied Energistics 2", "15.4.11", "main"],
    ["AE2 Wireless Terminals (AE2WTLib)", "15.3.3", "addon"],
    ["Applied Mekanistics", "1.4.3", "bridge"],
    ["Applied Botanics", "1.5.2", "bridge"],
    ["More Immersive Wires", "1.1.4", "bridge"],
  ],
  phases: [
    {
      t: "Meteorit und Certus Quartz",
      sub: "Handbuch „Getting Started“, Abschnitte „Getting The Initial Materials“, „Growing Certus Quartz“ und „A Quick Aside on Fluix“. Voraussetzung: Eisen, Kupfer und ein Meteorit in der Oberwelt.",
      steps: [
        {
          t: "Meteorit finden",
          items: [
            ["ae2:item/meteorite_compass", "Meteorite Compass", "Compass im Charger; zeigt auf den nächsten Mysterious Cube"],
            [null, "Mysterious Cube", "Kern jedes Meteoriten; ohne Silk Touch abgebaut gibt er alle vier Pressen"],
            ["ae2:block/sky_stone_block", "Sky Stone", "Gestein des Meteoriten"],
            ["ae2:block/quartz_cluster", "Certus Quartz Cluster", "ausgewachsen: 4 Certus Quartz Crystal, Fortune erhöht"],
          ],
          text: `<p>AE2 beginnt mit einem <b>Meteoriten</b>. Sie hinterlassen große Krater; laut Handbuch hat man meist schon einen gesehen. Sonst führt der <b>Meteorite Compass</b> zum nächsten Mysterious Cube. Im Meteoriten liegen Certus-Quartz-Cluster und -Knospen, Budding-Certus-Blöcke verschiedener Stufen und in der Mitte der Mysterious Cube.</p>
<p>Abbauen soll man die Cluster und alle Certus-Blöcke. Budding-Blöcke verlieren ohne Silk Touch eine Stufe. <b>Flawless</b> Budding Certus soll man gar nicht abbauen: Es wird selbst mit Silk Touch zu Flawed und lässt sich nicht mehr zurückverwandeln. Der Mysterious Cube gibt beim Abbau die vier Inscriber-Pressen.</p>
<p>Meteoriten erscheinen in Biomen mit dem Tag <code>#ae2:has_meteorites</code>, der alle Oberwelt-Biome umfasst (Strukturabstand 32 Chunks, Mindestabstand 8). In der Config der Testinstanz ist <code>spawnPressesInMeteorites</code> eingeschaltet.</p>`,
          needs: [["Compass", "v", "für den Kompass"], ["Charger oder Fundglück", "m"]],
        },
        {
          t: "Charger und Wooden Crank",
          items: [
            ["ae2:block/charger", "Charger", "5 Eisen, 2 Kupfer"],
            ["ae2:block/crank", "Wooden Crank", "4 Holzstäbe, 1 Kupfer"],
            ["ae2:item/certus_quartz_crystal_charged", "Charged Certus Quartz Crystal", "Certus Quartz Crystal im Charger"],
          ],
          text: `<p>Der <b>Charger</b> lädt Certus Quartz Crystal zu Charged Certus Quartz Crystal auf und macht aus einem Compass den Meteorite Compass, aus einem Buch den Guide. Strom nimmt er oben oder unten an, als AE oder Forge Energy; entnehmen lassen sich nur die Ergebnisse.</p>
<p>Ohne Stromquelle setzt man eine <b>Wooden Crank</b> oben oder unten auf und dreht per Rechtsklick, bis das Item geladen ist.</p>`,
          needs: [["Eisen", "v"], ["Kupfer", "v"], ["Certus Quartz Crystal", "m"]],
        },
        {
          t: "Certus Quartz wachsen lassen",
          items: [
            ["ae2:block/flawless_budding_quartz", "Flawless Budding Certus Quartz", "nur im Meteoriten; zerfällt nie"],
            ["ae2:block/flawed_budding_quartz", "Flawed Budding Certus Quartz", "Chipped + Charged Certus in Wasser"],
            ["ae2:block/chipped_budding_quartz", "Chipped Budding Certus Quartz", "Damaged + Charged Certus in Wasser"],
            ["ae2:block/damaged_budding_quartz", "Damaged Budding Certus Quartz", "Certus Quartz Block + Charged Certus in Wasser"],
            ["ae2:block/growth_accelerator", "Growth Accelerator", "4 Eisen, 2 Fluix ME Glass Cable, 2 Quartz Glass, 1 Fluix Block"],
            ["ae2:item/certus_quartz_dust", "Certus Quartz Dust", "aus unfertigen Knospen oder im Inscriber"],
          ],
          text: `<p>Certus-Knospen wachsen wie Amethyst aus <b>Budding Certus</b>. Eine unfertige Knospe gibt 1 Certus Quartz Dust, ein fertiger Cluster 4 Certus Quartz Crystal. Es gibt vier Stufen: Flawless, Flawed, Chipped und Damaged. Bei jedem Wachstumsschritt kann der Block eine Stufe verlieren und wird am Ende zum gewöhnlichen Certus Quartz Block.</p>
<p>Repariert und neu erzeugt werden Budding-Blöcke, indem man sie (oder einen Certus Quartz Block) zusammen mit Charged Certus Quartz Crystal in Wasser wirft. Flawless zerfällt nie und liefert unbegrenzt, lässt sich aber weder herstellen noch mit der Spitzhacke bewegen, nur mit Spatial IO.</p>
<p>Allein wachsen die Knospen sehr langsam. Der <b>Growth Accelerator</b> neben dem Budding-Block beschleunigt das stark; das Handbuch nennt ihn die erste Priorität. Fehlt Quarz für Energy Acceptor oder Vibration Chamber, reicht eine Wooden Crank am Ende des Accelerators.</p>`,
          needs: [["Certus Quartz Crystal", "m"], ["Wasser", "v"], ["Eisen", "v"], ["Fluix Block", "m"]],
        },
        {
          t: "Fluix",
          items: [
            ["ae2:item/fluix_crystal", "Fluix Crystal", "Charged Certus + Redstone + Nether Quartz in Wasser → 2"],
            ["ae2:item/fluix_dust", "Fluix Dust", "Fluix Crystal im Inscriber"],
            ["ae2:block/fluix_block", "Fluix Block", "4 Fluix Crystal"],
            ["ae2:item/quartz_glass", "Quartz Glass", "5 Quarzstaub + 4 Glas → 4"],
          ],
          text: `<p>Das zweite Grundmaterial ist <b>Fluix</b>. Es entsteht, wenn man Charged Certus Quartz Crystal, Redstone und Nether Quartz zusammen in Wasser wirft (2 Fluix Crystal). Charged Certus mit Fluix Dust in Wasser gibt ebenfalls Fluix Crystal, mit Certus Quartz Dust 2 Certus Quartz Crystal. Das Automatisieren lässt das Handbuch ausdrücklich dem Spieler.</p>
<p><b>Quartz Glass</b> aus Quarzstaub (Certus oder Nether) und Glas steckt in Zellen, Energiespeichern und vielen Geräten.</p>`,
          needs: [["Charged Certus Quartz Crystal", "m"], ["Redstone", "v"], ["Nether Quartz", "v"], ["Glas", "v"]],
        },
      ],
    },
    {
      t: "Inscriber und Prozessoren",
      sub: "Handbuch „Getting Started“, Abschnitt „Inscribing Some Processors“. Voraussetzung: die vier Pressen aus dem Mysterious Cube.",
      steps: [
        {
          t: "Inscriber",
          items: [
            ["ae2:block/inscriber", "Inscriber", "5 Eisen, 2 Sticky Piston, 1 Kupfer"],
            ["ae2:item/silicon", "Silicon", "Certus Quartz Dust im Blast Furnace"],
            ["ae2:item/certus_quartz_wrench", "Certus Quartz Wrench", "5 Certus Quartz Crystal; dreht den Inscriber"],
          ],
          text: `<p>Der <b>Inscriber</b> prägt mit den Pressen Schaltkreise und Prozessoren und zermahlt Items zu Staub: Certus und Fluix zu Dust, Ender Pearl zu Ender Dust, Sky Stone zu Sky Stone Dust. Er arbeitet wie ein Ofen nach Seiten: oben und unten gehen in die oberen und unteren Slots, die Seiten und die Rückseite in den mittleren. Mit dem Wrench lässt er sich drehen, die Größe des Eingangspuffers ist einstellbar, und er kann Ergebnisse in benachbarte Inventare schieben.</p>
<p>Strom nimmt er als AE oder Forge Energy an. <b>Silicon</b> entsteht aus Certus Quartz Dust im Blast Furnace (Tag <code>#forge:dusts/certus_quartz</code>); der Inscriber prägt alles mit dem Tag <code>#forge:silicon</code>.</p>`,
          needs: [["Eisen", "v"], ["Sticky Piston", "v"], ["Kupfer", "v"]],
        },
        {
          t: "Prozessoren",
          items: [
            ["ae2:item/silicon_press", "Inscriber Silicon Press", "prägt Silicon zu Printed Silicon"],
            ["ae2:item/logic_processor_press", "Inscriber Logic Press", "prägt Gold zu Printed Logic Circuit"],
            ["ae2:item/calculation_processor_press", "Inscriber Calculation Press", "prägt Certus Quartz Crystal zu Printed Calculation Circuit"],
            ["ae2:item/engineering_processor_press", "Inscriber Engineering Press", "prägt Diamant zu Printed Engineering Circuit"],
            ["ae2:item/logic_processor", "Logic Processor", "Printed Logic Circuit + Redstone + Printed Silicon"],
            ["ae2:item/calculation_processor", "Calculation Processor", "Printed Calculation Circuit + Redstone + Printed Silicon"],
            ["ae2:item/engineering_processor", "Engineering Processor", "Printed Engineering Circuit + Redstone + Printed Silicon"],
          ],
          text: `<p>Jeder Prozessor entsteht in zwei Schritten. Zuerst prägt eine Presse den Rohstoff zum Schaltkreis: Gold für Logic, Certus Quartz Crystal für Calculation, Diamant für Engineering, Silicon für Printed Silicon. Dann presst der Inscriber Schaltkreis (oben), Redstone (Mitte) und Printed Silicon (unten) zum Prozessor.</p>
<p>Die Pressen verbrauchen sich nicht. Eine Presse mit einem Eisenblock in der Mitte ergibt eine Kopie der Presse. Für das erste ME-System soll man laut Handbuch von jedem Prozessor ein paar herstellen.</p>`,
          table: {
            head: ["Prozessor", "Schaltkreis aus", "braucht man für"],
            rows: [
              ["ae2:item/logic_processor", "Logic Processor", "Gold", "Formation und Annihilation Core, 1k Storage Component, ME Terminal"],
              ["ae2:item/calculation_processor", "Calculation Processor", "Certus Quartz Crystal", "Storage Components ab 4k, Upgrade Cards, Crafting Unit"],
              ["ae2:item/engineering_processor", "Engineering Processor", "Diamant", "ME Drive, ME Controller, P2P, Spatial, Pattern-Terminals"],
            ],
          },
          needs: [["Gold", "v"], ["Diamant", "v"], ["Redstone", "v"], ["Silicon", "m"], ["Eisenblock", "v", "für Pressenkopien"]],
        },
        {
          t: "Formation Core und Annihilation Core",
          items: [
            ["ae2:item/formation_core", "Formation Core", "Certus Quartz + Fluix Dust + Logic Processor → 2"],
            ["ae2:item/annihilation_core", "Annihilation Core", "Nether Quartz + Fluix Dust + Logic Processor → 2"],
          ],
          text: `<p>Die beiden Kerne sind die Bausteine fast aller Geräte, die Dinge ins Netz holen oder hinausgeben. Der Formation Core steckt in Export Bus, Formation Plane und Terminal, der Annihilation Core in Import Bus und Annihilation Plane; Interface, Pattern Provider, Molecular Assembler und Terminal brauchen beide.</p>`,
          needs: [["Certus Quartz Crystal", "m"], ["Nether Quartz", "v"], ["Fluix Dust", "m"], ["Logic Processor", "m"]],
        },
      ],
    },
    {
      t: "Das erste ME-System",
      sub: "Handbuch „Getting Started“, Abschnitte „Matter Energy Tech“ und „Your Very First ME System“, dazu „Energy“ und „Bytes and Types“. Voraussetzung: Prozessoren aller drei Sorten und Strom aus einem anderen Mod.",
      steps: [
        {
          t: "Energie",
          items: [
            ["ae2:block/energy_acceptor", "Energy Acceptor", "4 Eisen, 4 Quartz Glass, 1 Kupfer; Würfel oder flach"],
            ["ae2:block/vibration_chamber", "Vibration Chamber", "Furnace + Energy Acceptor, Kupfer, Fluix, Eisen"],
            [null, "Crystal Resonance Generator", "4 Kupfer, 1 Fluix Block, 1 Charged Certus, 3 Eisen"],
            ["ae2:block/energy_cell", "Energy Cell", "4 Certus, 4 Fluix Dust, 1 Quartz Glass; 200k AE"],
            ["ae2:block/dense_energy_cell", "Dense Energy Cell", "8 Energy Cell + Calculation Processor; 1,6M AE"],
          ],
          text: `<p>AE2 rechnet intern in <b>AE</b>; der <b>Energy Acceptor</b> wandelt Forge Energy um, 2 FE ergeben 1 AE. Das Handbuch sieht Strom aus anderen Mods als Hauptweg vor. Die <b>Vibration Chamber</b> verbrennt Brennstoff und liefert ohne Upgrades 40 AE/t (Config: 10 bis 40), drosselt aber, wenn der Speicher voll ist. Der <b>Crystal Resonance Generator</b> erzeugt laut Config 20 AE/t; im Handbuch hat er keine eigene Seite.</p>
<p>Jedes Kabel und jedes Gerät puffert 25 AE. Eine <b>Energy Cell</b> speichert 200k AE und reicht laut Handbuch meist aus, eine Dense Energy Cell 1,6M AE.</p>`,
          needs: [["Strom aus einem anderen Mod", "x", "FE"], ["Quartz Glass", "m"], ["Kupfer", "v"]],
        },
        {
          t: "Kabel",
          items: [
            [null, "Quartz Fiber", "6 Glas + 3 Quarzstaub → 3; leitet nur Strom"],
            [null, "Fluix ME Glass Cable", "Quartz Fiber + 2 Fluix → 4"],
            [null, "Fluix ME Covered Cable", "Glass Cable + Wolle"],
            [null, "Fluix ME Smart Cable", "Covered Cable + Redstone + Glowstone; zeigt Kanäle"],
            [null, "Fluix ME Dense Covered Cable", "4 Covered Cable; 32 Kanäle"],
            [null, "Fluix ME Dense Smart Cable", "Dense Covered + Redstone + Glowstone"],
          ],
          text: `<p>Normale Kabel tragen 8 Kanäle, dichte (Dense) 32. Alle Kabel lassen sich mit Farbstoff einfärben (8 Kabel + 1 Farbstoff). Verschiedenfarbige Kabel verbinden sich nicht miteinander, Fluix-Kabel mit jeder Farbe; mit den Kanälen hat die Farbe nichts zu tun. Smart Cables zeigen, wie die Kanäle laufen, und das Handbuch empfiehlt sie zum Lernen. Für das erste System reichen Glass, Covered oder Smart Cable, aber keine dichten.</p>`,
          needs: [["Glas", "v"], ["Quarzstaub", "m"], ["Fluix Crystal", "m"], ["Wolle", "v"], ["Redstone, Glowstone", "v"]],
        },
        {
          t: "Speicherzellen",
          items: [
            ["ae2:item/item_cell_housing", "ME Item Cell Housing", "2 Quartz Glass, 3 Redstone, 3 Eisen"],
            ["ae2:item/fluid_cell_housing", "ME Fluid Cell Housing", "2 Quartz Glass, 3 Redstone, 3 Kupfer"],
            ["ae2:item/cell_component_1k", "1k ME Storage Component", "4 Redstone, 4 Certus, 1 Logic Processor"],
            ["ae2:item/cell_component_4k", "4k ME Storage Component", "3× 1k, 4 Redstone, Calculation Processor, Quartz Glass"],
            ["ae2:item/cell_component_16k", "16k ME Storage Component", "3× 4k, 4 Glowstone, Calculation Processor, Quartz Glass"],
            ["ae2:item/cell_component_64k", "64k ME Storage Component", "3× 16k, 4 Glowstone, Calculation Processor, Quartz Glass"],
            ["ae2:item/cell_component_256k", "256k ME Storage Component", "3× 64k, 4 Sky Stone Dust, Calculation Processor, Quartz Glass"],
            ["ae2:item/item_storage_cell_4k", "4k ME Item Storage Cell", "Housing + 4k Component"],
          ],
          text: `<p>ME speichert Items in <b>Storage Cells</b>. Eine Zelle ist ein Housing mit einer Storage Component; jede Stufe fasst viermal so viel und kostet drei der Vorstufe. Item-Zellen fassen bis zu 63 Sorten, Fluid-Zellen bis zu 5. Gezählt wird in Bytes: 8 Items sind 1 Byte, bei Flüssigkeiten 8 Eimer; jede Sorte kostet vorab einen festen Anteil, deshalb fasst eine Zelle mit einer Sorte doppelt so viel wie mit 63.</p>
<p>Das Handbuch empfiehlt für den Anfang 4k-Zellen als Mittelweg aus Platz und Sorten.</p>`,
          table: {
            head: ["Zelle", "Bytes", "Items bei 1 Sorte", "Items bei 63 Sorten"],
            rows: [
              ["ae2:item/item_storage_cell_1k", "1k ME Item Storage Cell", "1.024", "8.128", "4.160"],
              ["ae2:item/item_storage_cell_4k", "4k ME Item Storage Cell", "4.096", "32.512", "16.640"],
              ["ae2:item/item_storage_cell_16k", "16k ME Item Storage Cell", "16.384", "130.048", "66.560"],
              ["ae2:item/item_storage_cell_64k", "64k ME Item Storage Cell", "65.536", "520.192", "266.240"],
              ["ae2:item/item_storage_cell_256k", "256k ME Item Storage Cell", "262.144", "2.080.768", "1.064.960"],
            ],
          },
          needs: [["Redstone", "v"], ["Glowstone", "v", "ab 16k"], ["Sky Stone Dust", "m", "256k"], ["Eisen oder Kupfer", "v", "Housing"]],
        },
        {
          t: "ME Drive, ME Chest und Terminal",
          items: [
            ["ae2:block/drive/drive_front", "ME Drive", "4 Eisen, 2 Engineering Processor, 2 Fluix ME Glass Cable"],
            ["ae2:block/chest/front", "ME Chest", "ME Terminal, 2 Glas, 2 Glass Cable, 2 Eisen, 1 Kupfer"],
            [null, "Illuminated Panel", "3 Quartz Glass, 2 Glowstone, Eisen, Redstone → 3"],
            [null, "ME Terminal", "Illuminated Panel, Formation + Annihilation Core, Logic Processor"],
            [null, "ME Crafting Terminal", "ME Terminal + Crafting Table + Calculation Processor"],
          ],
          text: `<p>Die <b>ME Chest</b> zeigt den Inhalt einer einzelnen Zelle wie eine Truhe; laut Handbuch der Einstieg in das Prinzip. Das eigentliche Netz beginnt mit dem <b>ME Drive</b>, der mehrere Zellen aufnimmt.</p>
<p>Das erste System nach Handbuch: ein Drive, ein Terminal oder Crafting Terminal, ein Energy Acceptor, ein paar Kabel und einige Zellen. Acceptor an den Drive (oder als flache Variante auf ein Kabel), Strom aus einem anderen Mod hinein, Terminal auf ein Kabel in Augenhöhe, Zellen in den Drive. Das Ergebnis ist durchsuchbares Lager ohne Autocrafting.</p>`,
          needs: [["Engineering Processor", "m"], ["Glowstone", "v"], ["Crafting Table", "v"]],
        },
      ],
    },
    {
      t: "Netz ausbauen",
      sub: "Handbuch „Getting Started“, Abschnitte „Expanding your Network“ und „Overcoming Limits“, dazu „Channels“, „Devices“ und die Geräteseiten. Voraussetzung: ein laufendes ME-System.",
      steps: [
        {
          t: "Busse und Interface",
          items: [
            [null, "ME Import Bus", "Annihilation Core, 2 Eisen, Sticky Piston"],
            [null, "ME Export Bus", "Formation Core, 2 Eisen, Piston"],
            [null, "ME Storage Bus", "Interface + Piston + Sticky Piston"],
            ["ae2:block/interface", "ME Interface", "4 Eisen, 2 Glas, Formation + Annihilation Core"],
            [null, "ME Level Emitter", "Redstone Torch + Calculation Processor"],
          ],
          text: `<p>Der <b>Export Bus</b> gibt Items aus dem Netz in das angrenzende Inventar, der <b>Import Bus</b> holt sie herein. Das Beispiel des Handbuchs: Export Bus oben auf einen Ofen, Import Bus unten. Der <b>Storage Bus</b> macht ein angrenzendes Inventar zum Teil des Netzspeichers.</p>
<p>Das <b>Interface</b> ist eine kleine Truhe und ein Tank mit bis zu 9 Sorten, die sich aus dem Netz auf einen eingestellten Bestand auffüllt oder in das Netz leert, bis zu 9 Stapel pro Tick. Block und flache Variante lassen sich im Crafting-Gitter ineinander umwandeln. Der Level Emitter gibt ein Redstone-Signal abhängig von der Menge eines Items im Netz, der Energy Level Emitter abhängig vom gespeicherten Strom.</p>`,
          needs: [["Formation Core, Annihilation Core", "m"], ["Piston, Sticky Piston", "v"], ["Redstone Torch", "v"]],
        },
        {
          t: "Kanäle und ME Controller",
          items: [
            ["ae2:block/controller", "ME Controller", "4 Sky Stone Block, 4 Fluix Crystal, 1 Engineering Processor"],
          ],
          text: `<p>Viele Geräte brauchen einen <b>Kanal</b>. Ohne Controller ist ein Netz „ad hoc“ und trägt höchstens 8 kanalnutzende Geräte; ab dem neunten schalten sie ab. Der <b>ME Controller</b> liefert 32 Kanäle je Seite und verteilt sie über die Kabel. Ein Netz darf nur einen Controller haben, der aber aus mehreren Blöcken bestehen kann: alle verbunden, höchstens 7×7×7 groß, und je Block höchstens zwei Nachbarn auf einer Achse.</p>
<p>Jeder Controller-Block braucht 6 AE/t und speichert 8000 AE. Kanäle kosten 1/128 AE/t je durchlaufenem Knoten. Die Kanalregel ist einstellbar (Befehl <code>/ae2 channelmode</code>, Config <code>channels</code>: doppelt, dreifach, vierfach oder unbegrenzt); in der Testinstanz steht sie auf <code>default</code>.</p>`,
          needs: [["Sky Stone Block", "m", "Sky Stone im Ofen"], ["Fluix Crystal", "m"], ["Engineering Processor", "m"]],
        },
        {
          t: "Upgrade Cards und Cell Workbench",
          items: [
            ["ae2:item/basic_card", "Basic Card", "2 Gold, 3 Eisen, Redstone, Calculation Processor → 2"],
            ["ae2:item/advanced_card", "Advanced Card", "2 Diamant, 3 Eisen, Redstone, Calculation Processor → 2"],
            ["ae2:item/card_capacity", "Capacity Card", "Basic Card + Certus"],
            ["ae2:item/card_redstone", "Redstone Card", "Basic Card + Redstone Torch"],
            ["ae2:item/card_crafting", "Crafting Card", "Basic Card + Crafting Table"],
            ["ae2:item/card_void", "Overflow Destruction Card", "Basic Card + Calculation Processor"],
            ["ae2:item/card_speed", "Acceleration Card", "Advanced Card + Fluix"],
            ["ae2:item/card_fuzzy", "Fuzzy Card", "Advanced Card + Wolle"],
            ["ae2:item/card_inverter", "Inverter Card", "Advanced Card + Redstone Torch"],
            ["ae2:item/card_equal_distribution", "Equal Distribution Card", "Advanced Card + Calculation Processor"],
            ["ae2:item/card_energy", "Energy Card", "Advanced Card + Dense Energy Cell"],
            ["ae2:block/cell_workbench", "Cell Workbench", "2 Wolle, Calculation Processor, 5 Eisen, Truhe"],
          ],
          text: `<p><b>Upgrade Cards</b> ändern das Verhalten von Geräten: Redstone-Steuerung, mehr Filterplätze (Capacity), Geschwindigkeit (Acceleration) und mehr. Sie entstehen aus einer Basic oder Advanced Card. Die Overflow Destruction Card löscht in einer Zelle, was nicht mehr hineinpasst. In der <b>Cell Workbench</b> bekommen Zellen und View Cells Karten und eine Partitionierung, also einen Filter, was sie aufnehmen.</p>`,
          needs: [["Gold, Diamant", "v"], ["Calculation Processor", "m"], ["Wolle", "v"]],
        },
      ],
    },
    {
      t: "Autocrafting",
      sub: "Handbuch, Kapitel „Autocrafting“ und die Seiten zu Pattern Provider, Molecular Assembler und Crafting CPU. Voraussetzung: Controller und genug Kanäle.",
      steps: [
        {
          t: "Patterns und Pattern Encoding Terminal",
          items: [
            ["ae2:item/blank_pattern", "Blank Pattern", "2 Quartz Glass, 3 Glowstone, Certus, 3 Eisen → 2"],
            ["ae2:item/crafting_pattern", "Crafting Pattern", "kodiertes Werkbankrezept"],
            ["ae2:item/processing_pattern", "Processing Pattern", "kodierter Maschinenvorgang"],
            [null, "ME Pattern Encoding Terminal", "ME Crafting Terminal + Engineering Processor"],
          ],
          text: `<p>Eine Autocrafting-Anlage besteht laut Handbuch aus drei Teilen: dem, was den Auftrag sendet, der Crafting CPU und den Patterns samt Pattern Provider. Im <b>Pattern Encoding Terminal</b> schreibt man Rezepte auf Blank Patterns. Neben Werkbank- und Verarbeitungsmustern gibt es Smithing Table Pattern und Stonecutting Pattern. Autocrafting funktioniert auch mit Flüssigkeiten und mit Stoffen, die Addons ins Netz bringen, etwa Mekanism-Gase.</p>`,
          needs: [["Glowstone", "v"], ["Engineering Processor", "m"]],
        },
        {
          t: "Pattern Provider und Molecular Assembler",
          items: [
            ["ae2:block/pattern_provider", "ME Pattern Provider", "4 Eisen, 2 Crafting Table, Formation + Annihilation Core"],
            ["ae2:block/molecular_assembler", "Molecular Assembler", "4 Eisen, 2 Quartz Glass, Crafting Table, beide Cores"],
            [null, "ME Pattern Access Terminal", "Illuminated Panel, Engineering Processor, Pattern Provider"],
          ],
          text: `<p>Der <b>Pattern Provider</b> schiebt die Zutaten seiner Patterns in benachbarte Inventare, immer alle auf einmal, nie halbe Ladungen. Ergebnisse können in ihn zurückgeleitet werden; das spart den Kanal eines Import Bus. Da er die Zutaten direkt aus der CPU schiebt, kann man nichts aus ihm herauspumpen.</p>
<p>Der <b>Molecular Assembler</b> führt Werkbank-, Smithing- und Stonecutting-Patterns aus. Neben einem Pattern Provider bekommt er das passende Pattern gleich mitgeliefert und wirft das Ergebnis aus. Das Pattern Access Terminal zeigt alle Provider im Netz.</p>`,
          needs: [["Formation Core, Annihilation Core", "m"], ["Crafting Table", "v"]],
        },
        {
          t: "Crafting CPU",
          items: [
            [null, "Crafting Unit", "4 Eisen, 2 Calculation Processor, 2 Glass Cable, Logic Processor"],
            [null, "1k Crafting Storage", "Crafting Unit + 1k Component (bis 256k)"],
            [null, "Crafting Co-Processing Unit", "Crafting Unit + Engineering Processor"],
            [null, "Crafting Monitor", "Crafting Unit + ME Storage Monitor"],
          ],
          text: `<p>Die <b>Crafting CPU</b> ist ein Multiblock aus Crafting Units, Crafting Storage, Co-Processing Units und Monitoren. Jede CPU bearbeitet einen Auftrag; für zwei gleichzeitige Aufträge braucht man zwei CPUs. Pflicht ist mindestens ein Crafting Storage, die kleinste CPU ist ein einzelner 1k Crafting Storage. Der Speicher hält die Zutaten des Auftrags; Co-Processing Units sind optional und lassen die Pattern Provider öfter Zutaten senden.</p>`,
          needs: [["Calculation Processor", "m"], ["Storage Components", "m"]],
        },
      ],
    },
    {
      t: "Kabellos und über Entfernung",
      sub: "Handbuch, Seiten „Wireless Access Point“, „Wireless Terminals“, „P2P Tunnels“, „Quantum Bridge“ und „Spatial IO“. AE2WTLib ergänzt die kabellosen Terminals. Voraussetzung: Fluix Pearl und Dense Energy Cell.",
      steps: [
        {
          t: "Kabelloser Zugriff",
          items: [
            ["ae2:item/fluix_pearl", "Fluix Pearl", "Ender Pearl, 4 Fluix Dust, 4 Fluix Crystal"],
            ["ae2:item/wireless_receiver", "Wireless Receiver", "Fluix Pearl, 3 Eisen, Quartz Fiber"],
            [null, "ME Wireless Access Point", "Wireless Receiver, Calculation Processor, Glass Cable"],
            ["ae2:item/wireless_booster", "Wireless Booster", "Fluix Dust, Certus, Ender Dust, 3 Eisen → 2"],
            ["ae2:item/wireless_terminal", "Wireless Terminal", "Wireless Receiver + ME Terminal + Dense Energy Cell"],
            ["ae2:item/wireless_crafting_terminal", "Wireless Crafting Terminal", "Wireless Receiver + Crafting Terminal + Dense Energy Cell"],
          ],
          text: `<p>Der <b>Wireless Access Point</b> braucht einen Kanal und erlaubt Zugriff mit einem Wireless Terminal; an ihm wird das Terminal auch gebunden. Reichweite und Stromverbrauch hängen von der Zahl der Wireless Booster ab. Ein Netz darf beliebig viele Access Points haben.</p>`,
          needs: [["Ender Pearl", "v"], ["Fluix", "m"], ["Dense Energy Cell", "m"]],
        },
        {
          t: "Weitere kabellose Terminals",
          addon: "AE2WTLib",
          items: [
            ["ae2wtlib:item/wireless_pattern_encoding_terminal", "Wireless Pattern Encoding Terminal", "Receiver + Pattern Encoding Terminal + Dense Energy Cell, oder Wireless Crafting Terminal + Engineering Processor"],
            ["ae2wtlib:item/wireless_pattern_access_terminal", "Wireless Pattern Access Terminal", "Receiver + Pattern Access Terminal + Dense Energy Cell"],
            ["ae2wtlib:item/wireless_universal_terminal", "Wireless Universal Terminal", "zwei kabellose Terminals kombiniert"],
            ["ae2wtlib:item/quantum_bridge_card", "Quantum Bridge Card", "2 Fluix Pearl + Wireless Receiver; unbegrenzte Reichweite über Quantum Bridge"],
            ["ae2wtlib:item/magnet_card", "Magnet Card", "Advanced Card, ME Annihilation Plane, Redstone-, Lapis- und 5 Eisenblöcke"],
          ],
          text: `<p>AE2WTLib ergänzt kabellose Fassungen von Pattern Encoding und Pattern Access Terminal. Zwei kabellose Terminals lassen sich zum <b>Wireless Universal Terminal</b> kombinieren. Die Quantum Bridge Card verbindet ein kabelloses Terminal über eine Quantum Bridge ohne Reichweitengrenze; die Magnet Card ist laut Sprachdatei ein Magnet-Upgrade für das Wireless Crafting Terminal.</p>`,
          needs: [["Wireless Receiver", "m"], ["Dense Energy Cell", "m"], ["Fluix Pearl", "m"]],
        },
        {
          t: "P2P Tunnels",
          items: [
            [null, "ME P2P Tunnel", "3 Eisen, Engineering Processor, 3 Fluix"],
            [null, "Item P2P Tunnel", "abstimmen mit Bus, Hopper, Truhe oder Interface"],
            [null, "Fluid P2P Tunnel", "abstimmen mit Eimern"],
            [null, "Energy P2P Tunnel", "abstimmen mit Energy Acceptor oder Energy Cell"],
            [null, "Redstone P2P Tunnel", "abstimmen mit Redstone-Bauteilen"],
            [null, "Light P2P Tunnel", "abstimmen mit Fackel oder Glowstone"],
          ],
          text: `<p><b>P2P Tunnels</b> verbinden zwei Blockseiten über Entfernung wie ein Portal und übertragen jeweils nur eine Art: Items, Flüssigkeiten, Redstone, Strom, Licht oder Kanäle. Sie haben feste Ein- und Ausgänge. Man stellt einen ME P2P Tunnel her und stimmt ihn um, indem man ihn mit einem Item aus der passenden Liste anklickt (Tags <code>ae2:p2p_attunements/*</code>). Der ME P2P Tunnel trägt wie dichte Kabel 32 Kanäle. Energie durch einen P2P Tunnel kostet 2,5 % Abgabe (Config <code>p2pTunnelEnergyTax</code>).</p>`,
          needs: [["Engineering Processor", "m"], ["Fluix", "m"]],
        },
        {
          t: "Quantum Network Bridge",
          items: [
            ["ae2:item/quantum_entangled_singularity", "Quantum Entangled Singularity", "Singularity + Ender Dust in einer Explosion → 2"],
            ["ae2:item/singularity", "Singularity", "Matter Condenser, 256.000 Items oder Eimer"],
            ["ae2:block/condenser", "Matter Condenser", "4 Eisen, 4 Glas, Fluix Dust"],
            [null, "ME Quantum Ring", "4 Eisen, 2 Logic, 1 Engineering Processor, Energy Cell, Dense Smart Cable"],
            [null, "ME Quantum Link Chamber", "4 Quartz Glass, 4 Fluix Pearl"],
          ],
          text: `<p>Acht <b>Quantum Rings</b> um eine <b>Quantum Link Chamber</b> bilden eine Quantum Network Bridge. Die Link Chamber nimmt genau eine Quantum Entangled Singularity auf; das Rezept liefert sie paarweise. So verbunden reicht ein Netz über beliebige Entfernung und auch zwischen Dimensionen. Sie tragen 32 Kanäle, wie ein kabelloses dichtes Kabel. Beide Seiten müssen geladen sein, etwa mit einem Spatial Anchor.</p>
<p>Die Singularity entsteht im <b>Matter Condenser</b>, der alles annimmt, was eine Zelle speichern kann: als Mülleimer, als Hersteller von Matter Balls (256 Items) oder von Singularities (256.000 Items). Für Singularities braucht er mindestens eine 64k Storage Component im oberen Slot.</p>`,
          needs: [["Fluix Pearl", "m"], ["Ender Dust", "m"], ["sehr viele Abfall-Items", "v"]],
        },
        {
          t: "Spatial IO",
          items: [
            ["ae2:item/spatial_pylon", "Spatial Pylon", "4 Quartz Glass, 2 Glass Cable, 2 Fluix Dust, Fluix"],
            [null, "Spatial IO Port", "ME IO Port, Engineering Processor, Glas, Glass Cable, Eisen"],
            ["ae2:item/spatial_cell_component_2", "2³ Spatial Component", "4 Glowstone, 4 Fluix Pearl, Engineering Processor"],
            ["ae2:item/spatial_cell_component_16", "16³ Spatial Component", "4× 2³ + Glowstone + Engineering Processor"],
            ["ae2:item/spatial_cell_component_128", "128³ Spatial Component", "4× 16³ + Glowstone + Engineering Processor"],
            ["ae2:item/spatial_storage_cell_2", "2³ Spatial Storage Cell", "Item Cell Housing + Spatial Component"],
            [null, "Spatial Anchor", "3 Spatial Pylon, 128³ Component, Engineering Processor, Glass Cable, Eisen"],
          ],
          text: `<p><b>Spatial IO</b> schneidet einen Raum aus der Welt aus und fügt ihn woanders wieder ein. Es tauscht den von Pylonen umgrenzten Bereich mit einem gleich großen Bereich in der Spatial-Storage-Dimension. Damit lässt sich Flawless Budding Certus bewegen, ein Raum mit wechselnder Einrichtung bauen oder sogar ein Endportal versetzen. Große Anlagen ziehen kurzzeitig sehr viel Strom; dafür nennt das Handbuch die Dense Energy Cell. Der <b>Spatial Anchor</b> lädt alle Chunks, die sein Netz belegt; ein einzelnes Kabel über eine Chunkgrenze genügt, auch über Quantum Bridges, aber nicht über Dimensionen hinweg.</p>`,
          needs: [["Fluix Pearl", "m"], ["Glowstone", "v"], ["Engineering Processor", "m"]],
        },
      ],
    },
  ],
  solo: [
    {
      t: "Werkzeuge",
      items: [
        ["ae2:item/certus_quartz_pickaxe", "Certus Quartz Pickaxe", "Quarzwerkzeuge auch aus Nether Quartz, alle fünf Sorten"],
        ["ae2:item/fluix_pickaxe", "Fluix Pickaxe", "Quarzwerkzeug + Fluix Block + Fluix Upgrade im Smithing Table"],
        ["ae2:item/fluix_upgrade_smithing_template", "Fluix Upgrade", "Papier + Fluix; anders als Vanilla-Templates frei herstellbar"],
        ["ae2:item/certus_quartz_cutting_knife", "Certus Quartz Cutting Knife", "2 Holzstäbe, Eisen, 2 Certus; schneidet Name Press und Cable Anchor"],
        ["ae2:item/network_tool", "Network Tool", "Illuminated Panel, Truhe, Wrench, Calculation Processor; Wrench mit Netzdiagnose und 9 Kartenplätzen, dreht aber nicht"],
        [null, "Memory Card", "Calculation Processor, 2 Eisen, 2 Gold, Redstone; kopiert Einstellungen und Karten, verknüpft P2P Tunnels"],
        ["ae2:item/entropy_manipulator", "Entropy Manipulator", "Fluix, Energy Cell, Engineering Processor, 2 Eisen; erhitzt und kühlt Blöcke in der Welt"],
        ["ae2:item/charged_staff", "Charged Staff", "Charged Certus + 2 Eisen; 6 Schaden, 300 AE je Schlag"],
        ["ae2:item/matter_cannon", "Matter Cannon", "3 Eisen, Formation Core, 4k Component, Energy Cell; verschießt Matter Balls (2 Schaden) und Nuggets, 1600 AE je Schuss"],
        ["ae2:item/color_applicator", "Color Applicator", "Formation Core, 2 Eisen, 4k Component, Energy Cell"],
        [null, "White Paint Ball", "Farbkugeln, auch als Lumen Paint Ball"],
      ],
    },
    {
      t: "Zellen und Speicher außerhalb des Drives",
      items: [
        [null, "1k Portable Item Cell", "ME Chest, Component, Energy Cell, Housing; tragbare Zelle, auch für Fluids"],
        ["ae2:item/view_cell", "View Cell", "Housing + Certus; Filter für das Terminal"],
        [null, "ME IO Port", "2 ME Drive, Logic Processor, Glas, Glass Cable, Eisen; leert und füllt Zellen"],
        ["ae2:block/sky_stone_tank", "Sky Stone Tank", "8 Sky Stone + Quartz Glass; 16 Eimer, behält den Inhalt nicht"],
        [null, "Sky Stone Chest", "8 Sky Stone"],
      ],
    },
    {
      t: "Weitere Netzteile",
      items: [
        [null, "ME Formation Plane", "Formation Core, 3 Fluix, 2 Eisen; setzt Blöcke oder wirft Items aus"],
        [null, "ME Annihilation Plane", "Annihilation Core, 3 Fluix, 2 Eisen; baut Blöcke ab oder sammelt Items"],
        [null, "ME Storage Monitor", "Level Emitter + Illuminated Panel"],
        [null, "ME Conversion Monitor", "Storage Monitor + Formation + Annihilation Core"],
        [null, "ME Energy Level Emitter", "Redstone Torch, Charged Certus, Calculation Processor"],
        [null, "ME Toggle Bus", "2 Redstone, 2 Glass Cable, Lever; auch invertiert"],
        [null, "Cable Facade", "verkleidet normale und dichte Kabel mit einem Block"],
        [null, "Cable Anchor", "Metallbarren + Cutting Knife → 4"],
      ],
    },
    {
      t: "Bau- und Kleinteile",
      items: [
        ["ae2:block/quartz_block", "Certus Quartz Block", "4 Certus; mit Ziegeln, Säule, Stufen, Mauern"],
        ["ae2:block/smooth_sky_stone_block", "Sky Stone Block", "Sky Stone im Ofen; Zutat des Controllers"],
        ["ae2:item/sky_dust", "Sky Stone Dust", "Sky Stone im Inscriber; im Ofen wieder Sky Stone"],
        ["ae2:item/ender_dust", "Ender Dust", "Ender Pearl im Inscriber"],
        [null, "Vibrant Quartz Glass", "Quartz Glass + 2 Glowstone"],
        [null, "Charged Quartz Fixture", "leuchtet; die Light Detecting Fixture gibt Redstone nach Lichtstärke"],
        [null, "Tiny TNT", "2 Quarzstaub + 2 Gunpowder"],
        [null, "Not So Mysterious Cube", "Nachbau des Mysterious Cube aus Sky Stone, Pressen und Controller"],
        ["ae2:item/matter_ball", "Matter Ball", "aus dem Matter Condenser; Munition der Matter Cannon"],
      ],
    },
  ],
  bridges: [
    {
      t: "Mekanism",
      addon: "Applied Mekanistics",
      x: true,
      text: `<p>Applied Mekanistics bringt Mekanism-Chemikalien ins ME-Netz: eigene Zellen in allen fünf Größen, tragbare Fassungen und einen Chemical P2P Tunnel, der mit Mekanisms Chemical Tanks abgestimmt wird. Das Housing braucht Osmium, liegt also hinter dem ersten Mekanism-Erz. Laut Handbuch funktioniert Autocrafting dann auch mit Mekanism-Gasen.</p>`,
      items: [
        ["appmek:item/chemical_cell_housing", "ME Chemical Cell Housing", "2 Quartz Glass, 3 Redstone, 3 Osmium Ingot"],
        ["appmek:item/chemical_storage_cell_4k", "4k ME Chemical Storage Cell", "Housing + 4k Component (1k bis 256k)"],
        ["appmek:item/portable_chemical_storage_cell_4k", "4k Portable Chemical Cell", "ME Chest, Component, Energy Cell, Housing"],
        [null, "Chemical P2P Tunnel", "abstimmen mit Mekanism Chemical Tank"],
      ],
    },
    {
      t: "Botania",
      addon: "Applied Botanics",
      x: true,
      text: `<p>Applied Botanics lagert Mana im ME-Netz. Das Housing braucht Life Essence und Manasteel, liegt also hinter dem Gaia Guardian. Der Mana P2P Tunnel wird mit Blütenblättern oder Mana Dusts abgestimmt. Der Fluix Mana Pool entsteht aus einem Fabulous Mana Pool und einem ME Interface; was er genau tut, ist nicht ausgelesen.</p>`,
      items: [
        ["appbot:item/mana_cell_housing", "ME Mana Cell Housing", "2 Quartz Glass, 3 Life Essence, 3 Manasteel Ingot"],
        ["appbot:item/mana_storage_cell_4k", "4k ME Mana Storage Cell", "Housing + 4k Component (1k bis 256k)"],
        ["appbot:item/portable_mana_storage_cell_4k", "4k Portable Mana Cell", "ME Chest, Component, Energy Cell, Housing"],
        [null, "Mana P2P Tunnel", "abstimmen mit Blütenblättern oder Mana Dust"],
        [null, "Fluix Mana Pool", "Fabulous Mana Pool + ME Interface"],
      ],
    },
    {
      t: "Immersive Engineering",
      addon: "More Immersive Wires",
      x: true,
      text: `<p>More Immersive Wires überträgt ME-Netze über IE-Drähte: Glass Cable und Dense Cable je mit eigener Spule, Anschluss und Relais. Die Spulen brauchen Aluminiumdraht aus IE. Die Rezepte gelten nur, wenn AE2 geladen ist; im Pack ist das der Fall. Einen Mekanism-Draht enthält die Version nicht.</p>`,
      items: [
        ["more_immersive_wires:item/ae_coil", "ME Glass Cable Coil", "4 Aluminiumdraht, 4 Glass Cable, Holzstab → 4"],
        [null, "ME Glass Cable Connector", "2 Fluix, 4 Deepslate, Glass Cable → 4"],
        [null, "ME Glass Cable Relay", "2 Fluix, 2 Deepslate → 8"],
        ["more_immersive_wires:item/ae_dense_coil", "ME Dense Cable Coil", "4 Aluminiumdraht, 4 Dense Covered Cable, Holzstab → 4"],
        [null, "ME Dense Cable Connector", "2 Fluix Block, 4 Sky Stone, Dense Covered Cable → 4"],
        [null, "ME Dense Cable Relay", "2 Fluix Block, 2 Sky Stone → 8"],
      ],
    },
    {
      t: "Strom und Rohstoffe aus anderen Mods",
      text: `<p>AE2 erzeugt kaum eigenen Strom und rechnet Forge Energy im Verhältnis 2 FE zu 1 AE um; jeder Strom-Mod des Packs kann das Netz versorgen. Inscriber und Charger nehmen FE direkt an. Silicon wird über den Tag <code>#forge:silicon</code> geprägt, Certus über <code>#forge:gems/certus_quartz</code>; Silicon oder Certus anderer Mods würden also ebenfalls passen. Der Cable Anchor nimmt jeden Barren aus <code>#ae2:metal_ingots</code> (Kupfer, Zinn, Eisen, Gold, Messing, Nickel, Aluminium).</p>
<p>Aus den anderen Seiten bekannt: Ad Astra macht Sky Stone aus Moon und Mars Stone, Mekanism bringt eigene Rezepte für AE2-Material mit, und Blood Magic ruft mit Certus Quartz Crystal einen Meteor mit Budding Quartz (siehe dortige Seiten und <code>CROSSMOD_AUFFAELLIGKEITEN.md</code>).</p>`,
      items: [],
    },
  ],
  foot: "Quelle: AE2-Handbuch im JAR (assets/ae2/ae2guide), Rezepte, Tags und Sprachdateien aus den JARs der Testinstanz (Minecraft 1.20.1, Forge 47.4.26), Zahlen aus dem Handbuch und config/ae2/common.json. Bilder nur aus flachen Item- und Blocktexturen; Kabelteile (Terminals, Busse, Kabel, Tunnel) haben keine flache Textur und stehen ohne Bild. Nicht ausgelesen: Reichweite und Verbrauch je Wireless Booster, Brennstoffwerte der Vibration Chamber, die Bedingungen im Spatial IO (Pylonen-Aufbau, Energiebedarf), die Werte der Werkzeuge und der Matter Cannon, die genaue Funktion von Color Applicator, Magnet Card und Fluix Mana Pool. Die Beispielanlagen des Handbuchs (Kapitel „Example Setups“) sind nicht übernommen.",
};
