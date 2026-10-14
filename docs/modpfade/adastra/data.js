// Stand 2026-10-14, Minecraft 1.20.1. Quelle: Buch „Astrodux“ (Patchouli), Rezepte, Planetendaten, Tags und Sprachdatei aus
// ad_astra-forge-1.20.1-1.15.21.jar; Ad-Astra-Giselle-Addon 6.27; ad_astra_rocketed 1.0.5; ad_astra_more_structures 1.0.2;
// Zahlenwerte der Maschinen aus config/ad_astra.jsonc der Testinstanz.
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Ad Astra",
  title: "Ad Astra",
  accent: ["#7aa2e8", "#2f5fae"],
  lede: "Von der ersten Stahlplatte bis ins Nachbarsystem: Der Weg durch Ad Astra in der Reihenfolge des Buchs „Astrodux“. Jede Raketenstufe braucht das Metall des Planeten davor. Das Giselle Addon, Rocketed und More Structures stehen dort, wo sie im Spiel dazukommen.",
  mods: [
    ["Ad Astra", "1.15.21", "main"],
    ["Ad Astra: Giselle Addon", "6.27", "addon"],
    ["Ad Astra: More Structures", "1.0.2", "addon"],
    ["Ad Astra: Rocketed", "1.0.5", "addon"],
    ["Mekanism: Ad Astra Ores", "1.1.0", "bridge"],
  ],
  phases: [
    {
      t: "The First Launch",
      sub: "Erstes Kapitel des Astrodux: „How to build your first rocket and safely travel to the moon and back.“ Alles entsteht aus Eisen, Stahl und Vanilla-Material.",
      steps: [
        {
          t: "Astrodux und Coal Generator",
          pics: [["render:model/aa_coal_generator", "Coal Generator"]],
          items: [
            ["ad_astra:item/astrodux", "Astrodux", "4 Blue Dye, 4 Eisen, 1 Book; das Buch des Mods"],
            ["render:model/aa_coal_generator_s", "Coal Generator", "6 Eisen, 2 Block of Coal, 1 Furnace"],
          ],
          text: `<p>Energie ist laut Buch die Grundlage von Ad Astra: Jede Maschine braucht sie. Der <b>Coal Generator</b> ist die einfachste Quelle und verbrennt Holz oder Kohle. Laut Config erzeugt er 20 Energie je Tick.</p>`,
          needs: [["Eisen", "v"], ["Kohle", "v"], ["Furnace", "v"]],
        },
        {
          t: "Compressor und Platten",
          pics: [["render:model/aa_compressor", "Compressor"]],
          items: [
            ["render:model/aa_compressor_s", "Compressor", "6 Eisen, 2 Piston"],
            ["ad_astra:item/iron_plate", "Iron Plate", "1 Eisenbarren; ein Block ergibt 9"],
            ["ad_astra:item/iron_rod", "Iron Rod", "2 Iron Plate ergeben 4"],
            ["ad_astra:item/wrench", "Wrench", "2 Iron Plate + 2 Iron Rod; stellt Kabel, Rohre, Türen und Sensoren um"],
          ],
          text: `<p>Der <b>Compressor</b> presst Barren und Blöcke zu Platten. Platten sind die Währung des Mods: Maschinen, Raumanzug, Tanks, Triebwerke und Raketenteile bestehen aus ihnen. Es gibt sie aus Eisen, Stahl, Desh, Ostrum und Calorite.</p>`,
          needs: [["Eisen", "v"], ["Piston", "v"], ["Strom", "m"]],
        },
        {
          t: "Etrionic Blast Furnace und Stahl",
          pics: [["render:model/aa_etrionic_blast_furnace", "Etrionic Blast Furnace"]],
          items: [
            ["render:model/aa_etrionic_blast_furnace_s", "Etrionic Blast Furnace", "6 Iron Plate, 2 Redstone, 1 Blast Furnace"],
            ["ad_astra:item/steel_ingot", "Steel Ingot", "Alloying: 1 Eisenbarren + 1 Kohle oder Holzkohle"],
            ["ad_astra:item/steel_plate", "Steel Plate", "Compressor: 1 Steel Ingot"],
            ["ad_astra:item/steel_rod", "Steel Rod", "2 Steel Plate ergeben 4"],
          ],
          text: `<p>Ein Hochofen mit Strom und zwei Modi. <b>Blasting</b> schmilzt wie ein Blast Furnace, aber in vier Slots zugleich. <b>Alloying</b> verbindet Stoffe; das einzige Rezept in den Daten ist Stahl aus Eisen und Kohle, eins zu eins. Stahl ist laut Buch das Hauptmaterial der ersten Rakete.</p>`,
          needs: [["Eisen", "v"], ["Kohle", "v"], ["Blast Furnace", "v"], ["Redstone", "v"]],
        },
        {
          t: "NASA Workbench, Raketenteile, Launch Pad",
          pics: [["render:model/aa_nasa_workbench", "NASA Workbench"], ["render:model/aa_launch_pad", "Launch Pad"]],
          items: [
            ["render:model/aa_nasa_workbench_s", "Nasa Workbench", "2 Iron Rod, 3 Steel Plate, 2 Redstone Torch, Crafting Table, Steel Block"],
            ["ad_astra:item/rocket_nose_cone", "Rocket Nose Cone", "Lightning Rod + 4 Steel Plate"],
            ["ad_astra:item/rocket_fin", "Rocket Fin", "6 Steel Plate ergeben 4"],
            ["ad_astra:item/gas_tank", "Gas Tank", "Iron Rod + 4 Iron Plate"],
            ["ad_astra:item/steel_tank", "Steel Tank", "5 Steel Plate, Gas Tank, Steel Rod"],
            ["ad_astra:item/fan", "Fan", "4 Steel Plate + Steel Rod"],
            ["ad_astra:item/engine_frame", "Engine Frame", "8 Steel Rod + Steel Plate"],
            ["ad_astra:item/steel_engine", "Steel Engine", "5 Steel Plate, Engine Frame, Fan"],
            [null, "Tier 1 Rocket", "Nose Cone, 6 Steel Block, 4 Rocket Fin, 2 Steel Tank, 1 Steel Engine"],
            ["render:model/aa_launch_pad_s", "Launch Pad", "5 Steel Plate + 4 Steel Rod"],
          ],
          text: `<p>Raketen entstehen nur an der <b>NASA Workbench</b>. Alle vier Stufen haben denselben Aufbau: Spitze, sechs Blöcke des Stufenmetalls, vier Finnen, zwei Tanks, ein Triebwerk. Sechs Blöcke sind 54 Barren; dazu kommen die Platten der Teile. Die Rakete steht auf einem <b>Launch Pad</b>; ein Redstone-Signal am Pad startet sie von selbst, sobald sie betankt ist.</p>`,
          needs: [["Stahl", "m", "über 54 Barren"], ["Eisen", "v"], ["Lightning Rod", "v", "Kupfer"], ["Redstone Torch", "v"]],
        },
        {
          t: "Treibstoff: Oil und Fuel Refinery",
          pics: [["render:model/aa_fuel_refinery", "Fuel Refinery"]],
          items: [
            ["ad_astra:item/oil_bucket", "Oil", "sprudelt laut Buch in Quellen an der Meeresoberfläche; nicht erneuerbar"],
            ["render:model/aa_fuel_refinery_s", "Fuel Refinery", "6 Steel Plate, 2 Bucket, 1 Furnace"],
            ["ad_astra:item/fuel_bucket", "Fuel", "aus Oil, eins zu eins"],
          ],
          text: `<p>Laut Buch braucht ein Flug zum Mond und zurück mindestens sechs Eimer Öl: drei Eimer Fuel in den Tank, drei weitere im Gepäck für die Rückreise. Die Rakete öffnet man mit Shift-Rechtsklick und legt die Eimer in den Eingang.</p>
<p>Welche Flüssigkeiten als Raketentreibstoff gelten, regelt der Tag <code>ad_astra:fuel</code>, und der ist für alle vier Stufen derselbe: Fuel, Cryo Fuel und, falls vorhanden, alles aus <code>forge:fuel</code>, <code>forge:diesel</code> und <code>forge:biodiesel</code>.</p>`,
          needs: [["Öl", "m", "Ozean"], ["Stahl", "m"], ["Bucket, Furnace", "v"]],
        },
        {
          t: "Space Suit und Oxygen Loader",
          pics: [["render:model/aa_oxygen_loader", "Oxygen Loader"]],
          items: [
            ["ad_astra:item/space_helmet", "Space Helmet", "5 Steel Plate + Glass Pane"],
            ["ad_astra:item/space_suit", "Space Suit", "4 Steel Plate, 2 Gas Tank, Oxygen Gear, Wool"],
            ["ad_astra:item/space_pants", "Space Pants", "5 Steel Plate + 2 Wool"],
            ["ad_astra:item/space_boots", "Space Boots", "2 Steel Plate + 2 Wool"],
            ["ad_astra:item/oxygen_gear", "Oxygen Gear", "3 Steel Rod + 4 Steel Plate"],
            ["render:model/aa_oxygen_loader_s", "Oxygen Loader", "4 Steel Plate, Fan, 2 Gas Tank, Lightning Rod, Block of Redstone"],
          ],
          text: `<p>Ohne Sauerstoff stirbt man auf dem Mond schnell. Der <b>Space Suit</b> versorgt mit Sauerstoff und schützt vor der Kälte. Der <b>Oxygen Loader</b> gewinnt Sauerstoff aus Wasser: 100 mB Wasser ergeben 4 mB Oxygen. Er nimmt außerdem jede Flüssigkeit des Tags <code>ad_astra:oxygen</code> eins zu eins an. Den Sauerstoff füllt man in Anzug, Eimer oder Gas Tank.</p>`,
          needs: [["Stahl", "m"], ["Wool", "v"], ["Glass Pane", "v"], ["Block of Redstone", "v"], ["Wasser", "v"]],
        },
        {
          t: "Gas Tanks und Etrionic Capacitor",
          items: [
            ["ad_astra:item/gas_tank", "Gas Tank", "tragbarer Tank für jede Flüssigkeit; Rechtsklick halten füllt Items im Inventar, Rüstung zuerst"],
            ["ad_astra:item/large_gas_tank", "Large Gas Tank", "Steel Rod, 4 Steel Plate, 2 Gas Tank"],
            ["ad_astra:item/etrionic_capacitor", "Etrionic Capacitor", "2 Redstone, 4 Steel Plate, 3 Diamant; tragbare Batterie mit zwei Verteilmodi"],
          ],
          text: `<p>Beides sind Vorräte zum Mitnehmen. Der <b>Etrionic Capacitor</b> passt in den Energie-Slot von Maschinen und ist Zutat von Energizer und Gravity Normalizer.</p>`,
          needs: [["Stahl", "m"], ["Eisen", "v"], ["Diamant", "v", "3 je Capacitor"]],
        },
        {
          t: "Start und Landung",
          text: `<p>Die Checkliste des Buchs für den ersten Flug: ein Launch Pad und drei Eimer Fuel für die Rückreise im Inventar der Rakete, dazu mehrere volle Gas Tanks, Essen, Soul Torches oder Glowstone (normale Fackeln erlöschen), Waffen und Werkzeug. Laut Config verlässt die Rakete die Welt auf Höhe 600.</p>
<p>Auf dem Mond steht man mit einem <b>Lander</b> da. Mit Shift-Rechtsklick holt man Rakete, Fuel und Launch Pad heraus und baut alles für den Rückflug wieder auf.</p>`,
          needs: [["alles Vorige", "m"]],
        },
        {
          t: "Betanken und Bauen automatisieren",
          addon: "Giselle Addon",
          pics: [["render:model/aag_fuel_loader", "Fuel Loader"], ["render:model/aag_automation_nasa_workbench", "Automation NASA Workbench"], ["render:model/aag_rocket_sensor", "Rocket Sensor"]],
          items: [
            ["render:model/aag_fuel_loader_s", "Fuel Loader", "6 Steel Ingot, 2 Iron Plate, 1 Bucket; laut Tooltip: gibt Fuel an Rover und Raketen in der Nähe"],
            ["render:model/aag_automation_nasa_workbench_s", "Automation NASA Workbench", "4 Steel Plate, 2 Hopper, 2 Redstone, 1 Nasa Workbench; Funktionsweise nicht ausgelesen"],
            ["render:model/aag_rocket_sensor_s", "Rocket Sensor", "6 Steel Ingot, 2 Iron Plate, 1 Observer; gibt den Zustand einer Rakete über einen Comparator aus"],
            ["ad_astra_giselle_addon:item/oxygen_can", "Oxygen Can", "Iron Rod + 5 Iron Plate"],
            ["ad_astra_giselle_addon:item/netherite_oxygen_can", "Netherite Oxygen Can", "Oxygen Can + Netherite Ingot + 5 Ostrum Plate"],
          ],
          text: `<p>Das Addon ergänzt, was der Hauptmod von Hand verlangt: Der <b>Fuel Loader</b> betankt Raketen und Rover in seiner Nähe, die <b>Automation NASA Workbench</b> ist dem Namen nach eine automatisierbare Werkbank, der <b>Rocket Sensor</b> meldet den Zustand einer Rakete per Redstone.</p>`,
          needs: [["Stahl", "m"], ["Eisen", "v"], ["Hopper, Observer", "v"]],
        },
      ],
    },
    {
      t: "The Moon",
      sub: "Zweites Kapitel: „You've discovered a new extraterrestrial metal called Desh, unlocking the ability to fly to mars.“ Der Mond ist Stufe 1; Schwerkraft 1,622, −173 °C, kein Sauerstoff.",
      steps: [
        {
          t: "Der Mond und Desh",
          items: [
            ["ad_astra:block/moon_desh_ore", "Moon Desh Ore", "unter der Oberfläche; ergibt Raw Desh"],
            ["ad_astra:item/desh_ingot", "Desh Ingot", "aus Raw Desh im Ofen oder Etrionic Blast Furnace"],
            ["ad_astra:item/desh_plate", "Desh Plate", "Compressor: 1 Desh Ingot"],
            ["ad_astra:block/moon_ice_shard_ore", "Moon Ice Shard Ore", "ergibt Ice Shards für Cryo Fuel"],
            ["ad_astra:block/moon_cheese_ore", "Moon Cheese Ore", "ergibt Cheese"],
            [null, "Moon Iron Ore", "Eisen in Mondgestein"],
          ],
          text: `<p>Der Mond ist laut Buch eine tote graue Einöde; das Material liegt unter der Oberfläche. <b>Desh</b> ist der Rohstoff für bessere Maschinen, Raumstationen und die Rakete der Stufe 2. Die Umgebung ist feindlich: Wasser gefriert beim Ausschütten, Fackeln und Pflanzen gehen ein.</p>`,
          needs: [["Tier 1 Rocket", "m"], ["Space Suit", "m"], ["Spitzhacke", "v"]],
        },
        {
          t: "Space Station",
          plan: {
            name: "Space Station", size: "Baukosten statt Bauplan",
            key: {
              A: ["Iron Plate", "ad_astra:item/iron_plate"],
              B: ["Steel Ingot", "ad_astra:item/steel_ingot"],
              C: ["Desh Ingot", "ad_astra:item/desh_ingot"],
              D: ["Desh Plate", "ad_astra:item/desh_plate"],
            },
            count: { A: 64, B: 32, C: 32, D: 32 },
            form: "Kosten für eine Station im Orbit von Erde oder Mond. Mars: 32 Steel Ingot, 64 Steel Plate, 32 Ostrum Ingot, 32 Ostrum Plate. Venus und Merkur: 64 Steel Ingot, 64 Steel Plate, 32 Calorite Ingot, 32 Calorite Plate. Glacio: 32 Steel Plate, 32 Desh Ingot, 32 Ostrum Plate, 32 Calorite Plate.",
          },
          items: [
            ["ad_astra:item/zip_gun", "Zip Gun", "2 Steel Plate, Steel Rod, Large Gas Tank; stößt Oxygen oder Hydrogen aus und schiebt den Träger"],
          ],
          text: `<p>Eine <b>Space Station</b> wird nicht gebaut, sondern im Planeten-Menü gegen Material erzeugt. Sie liegt immer im Orbit eines Mondes oder Planeten und lässt sich von dort aus frei erweitern. Im Orbit herrscht Schwerelosigkeit; die <b>Zip Gun</b> hilft beim Manövrieren. Im Orbit liefern Solar Panels am meisten.</p>`,
          needs: [["Iron Plate", "m", "64"], ["Stahl", "m", "32"], ["Desh", "m", "64"]],
        },
        {
          t: "Solar Panel",
          pics: [["render:model/aa_solar_panel", "Solar Panel"]],
          items: [
            ["ad_astra:item/photovoltaic_etrium_cell", "Photovoltaic Etrium Cell", "3 Blue Stained Glass, 2 Desh Plate, 1 Diamant"],
            ["render:model/aa_solar_panel_s", "Solar Panel", "3 Photovoltaic Etrium Cell, 2 Steel Plate, 4 Desh Plate"],
          ],
          text: `<p>Der Nachfolger des Coal Generators braucht keinen Brennstoff. Die Leistung hängt vom Planeten ab; die Planetendaten nennen sie als „solar power“.</p>`,
          table: {
            head: ["Ort", "Solar Power", "im Orbit"],
            rows: [
              [null, "Erde", "16", "32"],
              [null, "Mond", "24", "32"],
              [null, "Mars", "12", "24"],
              [null, "Venus", "8", "48"],
              [null, "Merkur", "64", "72"],
              [null, "Glacio", "14", "36"],
            ],
          },
          needs: [["Desh", "m"], ["Stahl", "m"], ["Diamant", "v", "3 je Panel"], ["Blue Stained Glass", "v"]],
        },
        {
          t: "Oxygen Distributor und Water Pump",
          pics: [["render:model/aa_oxygen_distributor", "Oxygen Distributor"], ["render:model/aa_water_pump", "Water Pump"]],
          items: [
            ["render:model/aa_oxygen_distributor_s", "Oxygen Distributor", "4 Fan, Large Gas Tank, Oxygen Loader, 2 Desh Plate, Oxygen Gear"],
            ["render:model/aa_water_pump_s", "Water Pump", "4 Steel Plate, 3 Desh Plate, Gas Tank, Hopper; laut Config 50 mB je Tick für 20 Energie"],
            ["render:model/aa_vent_s", "Vent", "6 Steel Rod + 2 Steel Plate ergeben 4; lässt Sauerstoff durch"],
          ],
          text: `<p>Der <b>Oxygen Distributor</b> füllt einen vollständig abgedichteten Raum mit Atemluft und regelt die Temperatur. Er arbeitet wie der Oxygen Loader mit Wasser, gibt den Sauerstoff aber an die Umgebung ab. Ein Gerät versorgt bis zu 6000 Blöcke. Die <b>Water Pump</b> über einer unendlichen Wasserquelle hält ihn dauerhaft am Laufen.</p>
<p>Bekommt ein dichter Raum ein Loch, entweicht die Luft schlagartig: Laut Buch werden alle Lebewesen hinausgesogen, und Sauerstoff und Strom des Distributors laufen leer.</p>`,
          needs: [["Desh", "m"], ["Stahl", "m"], ["Wasser", "v"], ["Strom", "m"]],
        },
        {
          t: "Gravity Normalizer",
          pics: [["render:model/aa_gravity_normalizer", "Gravity Normalizer"]],
          items: [
            ["render:model/aa_gravity_normalizer_s", "Gravity Normalizer", "2 Etrionic Capacitor, Block of Diamond, 3 Desh Plate"],
            ["ad_astra:item/ti-69", "TI-69", "3 Glass Pane, 5 Steel Plate, Redstone; zeigt Sauerstoff, Temperatur und Schwerkraft am Ort"],
          ],
          text: `<p>Erzeugt in einem abgedichteten Bereich künstliche Schwerkraft, einstellbar von 0 G bis 2 G. Laut Buch verbraucht er viel Strom; man braucht ihn nur, wo die Schwerkraft stört.</p>`,
          needs: [["Diamant", "v", "15 mit den Capacitors"], ["Desh", "m"], ["Stahl", "m"]],
        },
        {
          t: "Rover",
          items: [
            ["ad_astra:item/wheel", "Wheel", "4 Black Wool + Steel Plate"],
            ["ad_astra:item/desh_engine", "Desh Engine", "5 Desh Plate, Steel Engine, Fan"],
            ["render:model/aa_radio_s", "Radio", "Steel Rod + 6 Steel Plate; spielt Internetradio"],
            [null, "Tier 1 Rover", "Desh Block, Steel Rod, Large Gas Tank, Radio, Desh Engine, 2 Wheel, Desh Plate"],
          ],
          text: `<p>Ein Geländefahrzeug mit zwei Sitzen und 16 Slots Stauraum. Es fährt mit demselben Treibstoff-Tag wie die Raketen und hat das Radio eingebaut.</p>`,
          needs: [["Desh", "m"], ["Stahl", "m"], ["Black Wool", "v"], ["Fuel", "m"]],
        },
        {
          t: "Kabel",
          items: [
            ["ad_astra:item/steel_cable", "Steel Cable", "6 Steel Plate + 3 Kupfer ergeben 16"],
            ["ad_astra:item/desh_cable", "Desh Cable", "6 Desh Plate + 3 Kupfer ergeben 16; höhere Übertragungsrate"],
            [null, "Cable Duct", "4 Steel Plate, 4 Kupfer, Steel Cable ergeben 2; voller Block, der Räume dicht hält"],
          ],
          text: `<p>Kabel übertragen Energie über Strecken und werden mit dem Wrench eingestellt. Weil sie keine vollen Blöcke sind, machen sie einen Raum undicht; dafür gibt es den <b>Cable Duct</b>.</p>`,
          needs: [["Stahl", "m"], ["Desh", "m"], ["Kupfer", "v"]],
        },
        {
          t: "Lunarians und Bauwerke",
          items: [
            ["ad_astra:block/moon_stone", "Lunarian Village", "unterirdische Dörfer; Lunarians handeln mit Planetenmaterial, Raumanzügen und Sauerstoffgerät"],
            [null, "Lunarian Wandering Trader", "auf jedem Mond und Planeten; verkauft Launch Pads, Sauerstoff, Fuel, Soul Torches, Wasser gegen Smaragde"],
            [null, "Moon Dungeon, Lunar Tower", "Bauwerke des Hauptmods in den Lunar Wastelands"],
            [null, "Mobs des Mods", "Corrupted Lunarian, Star Crawler, Martian Raptor, Mogler, Pygro, Pygro Brute, Sulfur Creeper, Glacian Ram, Zombified Mogler, Zombified Pygro; wo sie spawnen, ist nicht ausgelesen"],
          ],
          text: `<p>Die Bewohner des Mondes brauchen laut Buch keinen Sauerstoff. Smaragde findet man in den Bauwerken. Am Ende eines Dungeons liegt ein Globe als Trophäe; laut Buch ist im Überlebensmodus nur der Moon Globe erhältlich.</p>`,
          needs: [["Smaragde", "v"]],
        },
        {
          t: "Dungeons mit Bossen",
          addon: "More Structures",
          text: `<p>Das Addon setzt acht weitere Bauwerke: auf dem Mond den Moon Tower Dungeon (Biom Lunar Wastelands), auf dem Mars den Mars Tower Dungeon, auf der Venus den Venus Tree Dungeon, auf dem Merkur den Mercury Arena Dungeon, auf Glacio den Glacio Tower Dungeon sowie Abandoned Base, Mystical Tree und Rocket Launch T1.</p>
<p>Zu jedem der fünf Himmelskörper gibt es eine Boss-Beutetabelle. Der Mond-Boss lässt Cheese, Raw Desh, Raw Iron und Ice Shards fallen; der Mars-Boss Ice Shards, Diamanten, Raw Ostrum und Raw Iron; der Venus-Boss Raw Calorite, Diamanten, Raw Gold, Kohle und Blaze Rods; der Merkur-Boss Raw Iron, Magma Cream und Blaze Rods; der Glacio-Boss Raw Iron, Ice Shards, Eis, Obsidian, Pfeile und Knochen. Eine Funktion des Addons beschwört einen „Super Lunarian“, einen Corrupted Lunarian mit 60 Lebenspunkten. Welche Mobs die übrigen Bosse sind, steht in den Strukturdateien und ist noch nicht ausgelesen.</p>`,
          needs: [["Rüstung und Waffen", "v"]],
        },
        {
          t: "Tier 2 Rocket",
          items: [
            ["ad_astra:item/desh_tank", "Desh Tank", "5 Desh Plate, Steel Tank, Steel Rod"],
            ["ad_astra:item/desh_engine", "Desh Engine", "5 Desh Plate, Steel Engine, Fan"],
            [null, "Tier 2 Rocket", "Nose Cone, 6 Desh Block, 4 Rocket Fin, 2 Desh Tank, 1 Desh Engine"],
          ],
          text: `<p>Aufbau wie Stufe 1, mit Desh statt Stahl. Tanks und Triebwerk bauen auf den Teilen der Stufe davor auf: Ein Desh Tank enthält einen Steel Tank, eine Desh Engine eine Steel Engine. Das setzt sich bis Stufe 4 fort.</p>`,
          needs: [["Desh", "m", "54 Barren + Platten"], ["Stahl", "m"]],
        },
      ],
    },
    {
      t: "Surviving Mars",
      sub: "Drittes Kapitel: „You've landed on Mars with one goal in mind - to mine as much ostrum as possible to get to Venus and Mercury.“ Mars ist Stufe 2; Schwerkraft 3,72, −65 °C, kein Sauerstoff.",
      steps: [
        {
          t: "Mars und Ostrum",
          items: [
            ["ad_astra:block/mars_ostrum_ore", "Mars Ostrum Ore", "ergibt Raw Ostrum"],
            ["ad_astra:item/ostrum_ingot", "Ostrum Ingot", "für die Netherite-Raumanzüge, bessere Maschinen und die Rakete der Stufe 3"],
            ["ad_astra:block/mars_ice_shard_ore", "Mars Ice Shard Ore", "Ice Shards"],
            [null, "Mars Diamond Ore, Mars Iron Ore", "Diamant und Eisen in Marsgestein"],
            [null, "Mars Temple", "Bauwerk des Hauptmods in Martian Wastelands und Martian Canyon Creek"],
          ],
          text: `<p><b>Ostrum</b> ist das Metall, das extreme Hitze aushält. Auf dem Mars liegen außerdem Diamanten, die der Mod für Capacitors, Solarzellen, Energizer und Gravity Normalizer braucht.</p>`,
          needs: [["Tier 2 Rocket", "m"], ["Space Suit", "m"]],
        },
        {
          t: "Sliding Doors und Fluid Pipes",
          items: [
            ["render:model/aa_airlock_s", "Airlock", "7 Steel Plate + 2 Steel Block; 3×3 große Schiebetür, die Sauerstoff hält"],
            [null, "Iron Sliding Door, Desh Sliding Door", "weitere Schiebetüren; mit dem Wrench verriegelbar"],
            ["ad_astra:item/desh_fluid_pipe", "Desh Fluid Pipe", "6 Desh Plate + 3 Glass ergeben 16"],
            ["ad_astra:item/ostrum_fluid_pipe", "Ostrum Fluid Pipe", "6 Ostrum Plate + 3 Glass ergeben 16"],
            [null, "Fluid Pipe Duct", "4 Desh Plate, 4 Kupfer, Desh Fluid Pipe ergeben 2; dichter Block"],
          ],
          text: `<p>Für Basen auf dem Mars: Türen, die als Schleuse taugen, und Rohre für Flüssigkeiten. Rohre haben vier Modi (none, normal, insert, extract), umgestellt mit dem Wrench.</p>`,
          needs: [["Stahl", "m"], ["Desh", "m"], ["Ostrum", "m"], ["Glass, Kupfer", "v"]],
        },
        {
          t: "Energizer",
          items: [
            [null, "Energizer", "4 Ostrum Plate, 2 Etrionic Capacitor, 2 Ostrum Block, Block of Diamond"],
          ],
          text: `<p>Speichert 2 000 000 Energie und lädt Items, die man per Rechtsklick hineinhält. Er behält seine Ladung beim Abbau. Mit ihm lädt man später den Jet Suit.</p>`,
          needs: [["Ostrum", "m", "22 Barren"], ["Diamant", "v", "15"], ["Stahl", "m"]],
        },
        {
          t: "Cryo Freezer und Cryo Fuel",
          pics: [["render:model/aa_cryo_freezer", "Cryo Freezer"]],
          items: [
            ["render:model/aa_cryo_freezer_s", "Cryo Freezer", "6 Ostrum Plate, 2 Blue Ice, Large Gas Tank"],
            ["ad_astra:item/ice_shard", "Ice Shard", "25 mB Cryo Fuel je Stück"],
            ["ad_astra:item/cryo_fuel_bucket", "Cryo Fuel", "aus Blue Ice 10 mB, Packed Ice 2 mB, Ice 1 mB"],
          ],
          text: `<p><b>Cryo Fuel</b> ist laut Buch so viel ergiebiger als Fuel, dass ein Eimer für einen Start reicht (zwei für Hin- und Rückflug). Es ist der einzige Eintrag im Tag <code>ad_astra:efficient_fuel</code>. Ein Eimer braucht 40 Ice Shards. Ausgeschüttet schadet es wie Lava und lässt Wasser gefrieren.</p>`,
          needs: [["Ostrum", "m"], ["Ice Shards", "m", "40 je Eimer"], ["Blue Ice", "v"]],
        },
        {
          t: "Oxygen Sensor",
          items: [
            ["render:model/aa_oxygen_sensor_s", "Oxygen Sensor", "7 Ostrum Plate, Fan, Block of Redstone"],
          ],
          text: `<p>Gibt ein Redstone-Signal, wenn Sauerstoff da ist. Mit dem Wrench stellt man ihn auf sichere Temperatur oder normale Schwerkraft um.</p>`,
          needs: [["Ostrum", "m"], ["Block of Redstone", "v"]],
        },
        {
          t: "Netherite Space Suit",
          items: [
            ["ad_astra:item/netherite_space_helmet", "Netherite Space Helmet", "4 Ostrum Plate, Netherite Helmet, Glass"],
            ["ad_astra:item/netherite_space_suit", "Netherite Space Suit", "4 Ostrum Plate, 2 Large Gas Tank, Oxygen Gear, Netherite Chestplate"],
            ["ad_astra:item/netherite_space_pants", "Netherite Space Pants", "4 Ostrum Plate, Netherite Leggings, 2 Desh Plate"],
            ["ad_astra:item/netherite_space_boots", "Netherite Space Boots", "Netherite Boots, 2 Desh Plate, 2 Ostrum Plate"],
          ],
          text: `<p>Pflicht für Venus und Merkur: Laut Buch verbrennt man dort ohne ihn oder ohne Feuerresistenz sehr schnell. Der Anzug gibt dauerhafte Feuerresistenz und mehr Schutz. Er braucht eine vollständige Netherite-Rüstung.</p>`,
          needs: [["Netherite-Rüstung", "v", "4 Barren"], ["Ostrum", "m"], ["Desh", "m"]],
        },
        {
          t: "Raumfahrt-Verzauberungen",
          addon: "Giselle Addon",
          table: {
            head: ["Verzauberung", "Buch-Rezept", "Wirkung laut Sprachdatei"],
            rows: [
              [null, "Space Breathing", "7 Moon Stone, Space Suit, Book", "Atmen im All"],
              [null, "Space Fire Proof", "7 Mercury Stone, Ostrum Plate, Book", "kein Feuer am Spieler in Ad-Astra-Dimensionen"],
              [null, "Acid Rain Proof", "7 Venus Stone, Calorite Plate, Book", "kein Schaden durch sauren Regen"],
              [null, "Gravity Normalizing", "7 Mars Stone, Space Boots, Book", "Schwerkraft wie in der Overworld"],
            ],
          },
          text: `<p>Das Addon macht die Schutzwirkungen der Raumanzüge als Verzauberungen verfügbar, sodass sie auf anderer Rüstung sitzen können. Dieselben vier Wirkungen gibt es als Tinkers-Modifier und als MekaSuit-Module (siehe Brücken). Wie die Atemluft dabei genau verbraucht wird, regelt die Config des Addons und ist hier nicht ausgelesen.</p>`,
          needs: [["Gestein des jeweiligen Planeten", "m"], ["Book", "v"]],
        },
        {
          t: "Tier 3 Rocket",
          items: [
            ["ad_astra:item/ostrum_tank", "Ostrum Tank", "5 Ostrum Plate, Desh Tank, Steel Rod"],
            ["ad_astra:item/ostrum_engine", "Ostrum Engine", "5 Ostrum Plate, Desh Engine, Fan"],
            [null, "Tier 3 Rocket", "Nose Cone, 6 Ostrum Block, 4 Rocket Fin, 2 Ostrum Tank, 1 Ostrum Engine"],
          ],
          needs: [["Ostrum", "m", "54 Barren + Platten"], ["Desh", "m"], ["Stahl", "m"]],
        },
      ],
    },
    {
      t: "The Hot Planets",
      sub: "Viertes Kapitel: „Now that you can fly to Venus and Mercury, your new goal is to gather enough Calorite to build the ultimate rocket.“ Beide sind Stufe 3: Venus 464 °C, Merkur 167 °C.",
      steps: [
        {
          t: "Venus, Merkur und Calorite",
          items: [
            ["ad_astra:block/venus_calorite_ore", "Venus Calorite Ore", "ergibt Raw Calorite; in den Daten nur auf der Venus"],
            ["ad_astra:item/calorite_ingot", "Calorite Ingot", "für Jet Suit und die Rakete der Stufe 4"],
            [null, "Venus Coal Ore, Venus Diamond Ore, Venus Gold Ore", "weitere Erze der Venus"],
            [null, "Mercury Iron Ore", "das einzige Erz des Merkur im Hauptmod"],
            [null, "Pygro Village, Pygro Tower, Venus Bullet", "Bauwerke in den Venus Wastelands"],
          ],
          text: `<p>Das Buch nennt Venus und Merkur zusammen als Ziel. In den Worldgen-Daten liegt <b>Calorite</b> aber nur auf der Venus; der Merkur hat im Hauptmod allein Eisen. Das Biom Venus Wastelands hat Niederschlag; der Tag <code>can_survive_in_acid_rain</code> regelt, wen der saure Regen verschont. Der Merkur hat mit 64 die höchste Solarleistung aller Planeten.</p>`,
          needs: [["Tier 3 Rocket", "m"], ["Netherite Space Suit", "m"]],
        },
        {
          t: "Jet Suit",
          items: [
            ["ad_astra:item/jet_suit_helmet", "Jet Suit Helmet", "4 Calorite Plate, Netherite Space Helmet, Tinted Glass"],
            ["ad_astra:item/jet_suit", "Jet Suit", "2 Calorite Plate, 2 Calorite Tank, Netherite Space Suit, 2 Etrionic Capacitor, Calorite Engine"],
            ["ad_astra:item/jet_suit_pants", "Jet Suit Pants", "2 Calorite Block, Netherite Space Pants, 4 Calorite Plate"],
            ["ad_astra:item/jet_suit_boots", "Jet Suit Boots", "Netherite Space Boots, 2 Calorite Plate, 2 Calorite Block"],
          ],
          text: `<p>Der aufgewertete Netherite Space Suit: mehr Schutz, mehr Sauerstoffvorrat und Flug. Zwei Flugmodi, Aufsteigen und ein Schub wie eine Elytra mit Dauerfeuerwerk. Er fliegt mit Energie und wird am Energizer geladen.</p>`,
          needs: [["Calorite", "m"], ["Netherite Space Suit", "m", "kompletter Satz"], ["Etrionic Capacitor", "m"]],
        },
        {
          t: "Tier 4 Rocket und Glacio",
          items: [
            ["ad_astra:item/calorite_tank", "Calorite Tank", "5 Calorite Plate, Ostrum Tank, Steel Rod"],
            ["ad_astra:item/calorite_engine", "Calorite Engine", "5 Calorite Plate, Ostrum Engine, Fan"],
            [null, "Tier 4 Rocket", "Nose Cone, 6 Calorite Block, 4 Rocket Fin, 2 Calorite Tank, 1 Calorite Engine"],
            [null, "Glacio Stone", "Gestein von Glacio; dort Coal, Copper, Iron, Lapis und Ice Shard Ore"],
            [null, "Glacian Fur", "Item des Mods; Herkunft nicht ausgelesen"],
          ],
          text: `<p>Die letzte Rakete des Hauptmods verlässt das Sonnensystem. <b>Glacio</b> im System Proxima Centauri ist Stufe 4: −20 °C, aber mit Sauerstoff, man überlebt dort ohne Raumanzug. Das Buch endet hier: „This is the end of the Ad Astra progression for now.“ Glacio hat kein eigenes Metall.</p>`,
          needs: [["Calorite", "m", "54 Barren + Platten"], ["Ostrum, Desh, Stahl", "m"]],
        },
        {
          t: "Tier 5 bis 7",
          addon: "Rocketed",
          table: {
            head: ["Rakete", "Rezept an der NASA Workbench", "Unterschied zur Stufe 4"],
            rows: [
              [null, "Tier 5 Rocket", "Ice Shard, 6 Calorite Block, 4 Rocket Fin, 2 Calorite Tank, Calorite Engine", "Ice Shard statt Nose Cone"],
              [null, "Tier 6 Rocket", "Echo Shard, 6 Calorite Block, 4 Rocket Fin, 2 Calorite Tank, Calorite Engine", "Echo Shard statt Nose Cone"],
              [null, "Tier 7 Rocket", "Echo Shard, 6 Permafrost Tiles, 4 Rocket Fin, 2 Calorite Tank, Calorite Engine", "Echo Shard und Permafrost Tiles statt Calorite Blocks"],
            ],
          },
          text: `<p>Das Addon fügt nur drei Raketen hinzu, keine Planeten und keine neuen Materialien. Alle drei fliegen mit demselben Treibstoff-Tag wie die Stufen 1 bis 4. Die Rezepte kosten kaum mehr als eine Tier 4 Rocket. Wohin die Stufen 5 bis 7 führen, legen andere Mods über die Stufe ihrer Planeten fest. Die Rezepte stehen unter der Bedingung, dass der Mod <code>cp_tweaks</code> nicht geladen ist; er ist nicht installiert.</p>`,
          needs: [["Calorite", "m"], ["Ice Shard", "m"], ["Echo Shard", "v", "Ancient City"], ["Permafrost Tiles", "m", "Glacio"]],
        },
      ],
    },
  ],
  solo: [
    {
      t: "Deko und Bauen",
      items: [
        ["ad_astra:block/moon_stone", "Planetengestein", "Moon, Mars, Venus, Mercury, Glacio Stone mit Bricks, Stairs, Slabs, Pillars"],
        [null, "Plateblocks, Plating, Panels", "aus Iron, Steel, Desh, Ostrum, Calorite: 8 Platten + Rod ergeben 64 Plateblocks"],
        [null, "Factory Blocks, Encased Blocks", "weitere Metallblöcke je Stufe"],
        [null, "Industrial Lamps", "16 Farben, klein und groß"],
        [null, "Flags", "16 Farben; zeigen das Gesicht des Besitzers oder ein Bild von einer Adresse"],
        [null, "Globes", "Trophäen aus Dungeons; drehen sich mit Redstone"],
        ["ad_astra:item/space_painting", "Space Painting", "14 Motive, aus Dungeon-Truhen"],
        [null, "Aeronos, Strophar, Glacian", "Pilz- und Holzarten der Planeten mit vollen Holzsätzen"],
        ["ad_astra:item/cheese", "Cheese", "aus Moon Cheese Ore; 9 ergeben einen Cheese Block"],
        [null, "Sky Stone", "5 Moon Stone + 4 Mars Stone ergeben 9"],
      ],
    },
    {
      t: "In der Sprachdatei, aber ohne Rezept",
      text: `<p>Diese Namen stehen in der Sprachdatei, kommen aber in keinem Rezept und keiner Erzgenerierung des JARs vor: Etrium (Ingot, Plate, Rod, Block), Etrionic Core, Photovoltaic Vesnium Cell und die Flüssigkeit Hydrogen. Hydrogen steht nur im Tag <code>ad_astra:hydrogen</code> als Treibmittel der Zip Gun. Ob die Items im Spiel erhältlich sind, ist nicht geprüft.</p>`,
    },
  ],
  bridges: [
    {
      t: "Treibstoff aus anderen Mods",
      text: `<p>Der Tag <code>ad_astra:fuel</code> enthält neben Fuel und Cryo Fuel auch <code>forge:fuel</code>, <code>forge:diesel</code> und <code>forge:biodiesel</code>. Biodiesel aus Immersive Engineering und Diesel aus Immersive Petroleum fliegen damit jede Rakete und jeden Rover, ohne Fuel Refinery. Der Tag <code>ad_astra:oil</code> nimmt <code>forge:crude_oil</code> an; Rohöl aus Immersive Petroleum lässt sich also in der Fuel Refinery zu Fuel machen.</p>`,
    },
    {
      t: "Sauerstoff aus Mekanism",
      text: `<p>Der Tag <code>ad_astra:oxygen</code> nimmt <code>forge:oxygen</code> an, und Mekanism trägt dort seine Flüssigkeit Oxygen ein. Der Oxygen Loader wandelt alles aus diesem Tag eins zu eins in Ad-Astra-Oxygen. Verflüssigter Mekanism-Sauerstoff (Rotary Condensentrator) ersetzt damit die Gewinnung aus Wasser, die nur 4 mB je 100 mB bringt.</p>`,
    },
    {
      t: "Stahl und Platten aus anderen Mods",
      text: `<p>Alle Rezepte nehmen Stahl und Platten über Tags: <code>ad_astra:steel_ingots</code> enthält <code>forge:ingots/steel</code>, <code>ad_astra:steel_plates</code> enthält <code>forge:plates/steel</code>, <code>ad_astra:iron_plates</code> enthält <code>forge:plates/iron</code>. Stahl und Platten aus Immersive Engineering oder Mekanism ersetzen damit Etrionic Blast Furnace und Compressor.</p>
<p>Ad Astra bringt selbst Rezepte für Immersive Engineering mit: Desh-, Ostrum- und Calorite-Platten mit dem Hammer und in der Metal Press, Ice Shard Ore und Venus Sandstone im Crusher. Für Mekanism: Ice Shard Ore in der Enrichment Chamber und die Planeten-Hölzer in der Precision Sawmill.</p>`,
    },
    {
      t: "Tinkers' Construct",
      addon: "Giselle Addon",
      x: true,
      table: {
        head: ["Modifier", "Zutaten", "Für"],
        rows: [
          [null, "Space Breathing", "Space Suit + 4 Moon Stone", "Helm, 1 Upgrade-Slot"],
          [null, "Space Fire Proof", "Ostrum Plate + 4 Mercury Stone", "Brustplatte, 1 Upgrade-Slot"],
          [null, "Acid Rain Proof", "Calorite Plate + 4 Venus Stone", "Brustplatte, 1 Upgrade-Slot"],
          [null, "Gravity Normalizing", "Space Boots + 4 Mars Stone", "Stiefel, 1 Upgrade-Slot"],
        ],
      },
    },
    {
      t: "Mekanism",
      addon: "Giselle Addon",
      x: true,
      table: {
        head: ["MekaSuit-Modul", "Zutaten"],
        rows: [
          ["ad_astra_giselle_addon:item/module_space_breathing_unit", "Space Breathing Unit", "4 Infused Alloy, Space Suit, Module Base, 3 HDPE Sheet"],
          ["ad_astra_giselle_addon:item/module_gravity_normalizing_unit", "Gravity Normalizing Unit", "4 Infused Alloy, Space Boots, Module Base, 3 HDPE Sheet"],
          ["ad_astra_giselle_addon:item/module_space_fire_proof_unit", "Space Fire Proof Unit", "4 Reinforced Alloy, Ostrum Plate, Module Base, 3 Polonium Pellet"],
          ["ad_astra_giselle_addon:item/module_acid_rain_proof_unit", "Acid Rain Proof Unit", "4 Reinforced Alloy, Calorite Plate, Module Base, 3 Polonium Pellet"],
        ],
      },
    },
    {
      t: "Applied Energistics 2",
      addon: "Giselle Addon",
      x: true,
      text: `<p>Ad Astras Sky Stone wird im Inscriber und im Mekanism-Crusher zu AE2 Sky Dust und im Ofen zu Smooth Sky Stone. Sky Stone entsteht aus 5 Moon Stone und 4 Mars Stone; AE2-Meteoriten sind dafür nicht nötig.</p>`,
    },
    {
      t: "Mekanism-Erze auf den Planeten",
      addon: "Mekanism: Ad Astra Ores",
      x: true,
      text: `<p>Stellt Erzblöcke in Planetengestein bereit: Osmium und Tin (Mond); Fluorite, Tin, Uranium (Mars); Fluorite, Lead, Uranium (Venus); Lead, Osmium, Uranium (Merkur); alle fünf (Glacio).</p>`,
    },
  ],
  foot: "Quelle: Buch Astrodux, Rezepte, Planetendaten, Tags und Sprachdateien aus den JARs der Testinstanz (Minecraft 1.20.1, Forge 47.4.26); Maschinenwerte aus config/ad_astra.jsonc. Raketen, Rover und Lander sind Entities ohne lesbares Bild. Nicht ausgelesen: die Handelsangebote der Lunarians, die Mobs der More-Structures-Bosse außer dem Super Lunarian, der Treibstoffverbrauch je Raketenstufe (das Buch nennt drei Eimer Fuel oder einen Eimer Cryo Fuel) und die Sauerstoff-Regeln der Giselle-Verzauberungen.",
};
