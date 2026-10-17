// Stand 2026-10-17, Minecraft 1.20.1. Quellen: alexsmobs-1.22.9.jar (Namespace alexsmobs) – Animal Dictionary
// (assets/alexsmobs/book/animal_dictionary, Texte en_us), Advancements (Reihenfolge), Rezepte, Capsid-Rezepte, Loot-Tabellen,
// Loot-Modifier, Sprachdatei; Config alexsmobs.toml der Testinstanz. alexsdelight-1.5.jar (Rezepte, Sprachdatei).
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Sparsam gebaut (Skill modpfad-seite-s): nur flache Texturen, Tiere ohne Bild.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Alex's Mobs",
  title: "Alex's Mobs",
  accent: ["#9cc45e", "#4f7a25"],
  lede: "Ein Tier-Mod ohne Maschinen: rund 90 Tierarten in Oberwelt, Nether und End, jede mit eigenem Verhalten, viele mit einem Beutestück, aus dem ein Werkzeug, eine Rüstung oder ein Gericht wird. Einen festen Pfad gibt es nur am Ende: Vom Enderiophage im End über den Capsid, die Void Worm und den Dimensional Carver führt eine Kette bis zum Farseer am Weltrand und zur Transmutation Table. Davor stehen die Tiere nebeneinander; die Seite ordnet sie nach Gegend, so wie der Advancement-Baum des Mods sie verzweigt.",
  mods: [
    ["Alex's Mobs", "1.22.9", "main"],
    ["Alex's Delight", "1.5", "bridge"],
  ],
  phases: [
    {
      t: "Tiere der Oberwelt zähmen",
      sub: "Advancement-Wurzel „Alex's Mobs“ und ihre ersten Zweige. Alles mit Vanilla-Mitteln zu machen; das Animal Dictionary beschreibt jedes Tier und sein Futter.",
      steps: [
        {
          t: "Animal Dictionary",
          items: [
            ["alexsmobs:item/animal_dictionary", "Animal Dictionary", "Book, grüner Farbstoff und eine Tierbeute (Tag mit 17 Teilen, z. B. Crocodile Scute, Hair of Bear, Capsid); formlos"],
          ],
          text: `<p>Das Buch hat einen Eintrag je Tierart, ohne Kapitel und ohne Reihenfolge. Jeder Eintrag nennt Lebensraum, Verhalten, Beute und, wo es eins gibt, das Rezept des passenden Gegenstands. Für die Planung reicht es meist, das Tier im Buch nachzuschlagen.</p>`,
          needs: [["Book", "v"], ["grüner Farbstoff", "v"]],
        },
        {
          t: "Bananen und Akazienblüten",
          items: [
            ["alexsmobs:item/banana", "Banana", "fällt zusätzlich aus Jungle Leaves (Loot-Modifier)"],
            ["alexsmobs:item/acacia_blossom", "Acacia Blossom", "fällt zusätzlich aus Acacia Leaves (Loot-Modifier)"],
            ["alexsmobs:item/banana_peel", "Banana Peel", "lässt ein Capuchin Monkey manchmal fallen, wenn es eine Banane frisst"],
          ],
          text: `<p>Zwei neue Futtermittel aus Vanilla-Laub. Mit Bananen zähmt man Capuchin Monkey (Dschungel) und Gorilla (Dschungel, in Gruppen); Capuchins folgen, bleiben oder streifen umher und kämpfen auf Nah- und Fernkampf. Mit Acacia Blossoms zähmt man Elefanten der Savanne; wilde Elefanten mit Stoßzähnen sind nicht zähmbar, ein Elefant mit Stoßzähnen wird nur zahm, wenn man ihn als Kalb zähmt. Ein gezähmter Elefant trägt einen farbigen Teppich, ein zahmer mit Stoßzähnen stürmt los, wenn man ihn beim Reiten mit Wheat füttert.</p>
<p>Tiger (Bambusdschungel) werden nicht zahm, geben aber für Hühnchen, Schweinefleisch oder anderes frisches Fleisch den Effekt Tiger's Blessing, der sie für einige Minuten friedlich hält. Gezüchtet werden Tiger und zahme Elefanten mit Acacia Blossoms.</p>`,
          needs: [["Jungle Leaves", "v"], ["Acacia Leaves", "v"]],
        },
        {
          t: "Weitere zähmbare Tiere",
          table: { head: ["Tier", "Lebensraum", "zähmen mit"], rows: [
            [null, "Grizzly Bear", "Wälder", "Honig, danach Salmon"],
            [null, "Raccoon", "–", "Egg in der Nähe von Wasser"],
            [null, "Flutter", "Lush Caves", "4–6 Blumen"],
            [null, "Mantis Shrimp", "Riffe warmer Ozeane, Mangrovensumpf", "10–30 Tropical Fish"],
            [null, "Komodo Dragon", "Sparse Jungle", "mehrere Stacks Rotten Flesh; danach mit Sattel reitbar"],
            [null, "Tarantula Hawk", "über Wüsten", "Spider Eye"],
          ] },
          items: [
            ["alexsmobs:block/bird_feeder_filled", "Hummingbird Feeder", "4 Copper Ingot, 1 Glass Bottle, 2 Sunflower; mit Water Bottle und Sugar füllen, hält Kolibris in der Nähe"],
          ],
          text: `<p>Die Lebensräume und das Futter stehen so im Animal Dictionary, der Waschbär-Eintrag nennt keinen Lebensraum. Einem gezähmten Mantis Shrimp gibt man schleichend einen Wassereimer, dann lebt er dauerhaft an Land; gezähmt kann er auch Blöcke abbauen.</p>`,
          needs: [["Copper Ingot", "v", "4, Feeder"], ["Sunflower", "v", "2, Feeder"]],
        },
        {
          t: "Weißkopfseeadler und Falknerei",
          items: [
            ["alexsmobs:item/fish_oil", "Fish Oil", "1 Glass Bottle, 4 Blobfish; formlos – zähmt den Bald Eagle"],
            ["alexsmobs:item/bear_fur", "Hair of Bear", "verliert der Grizzly Bear gelegentlich"],
            ["alexsmobs:item/falconry_glove", "Falconry Glove", "4 Leather, 1 Hair of Bear"],
            ["alexsmobs:item/roadrunner_feather", "Roadrunner Feather", "Beute des Roadrunner (Wüste, Badlands)"],
            ["alexsmobs:item/falconry_hood", "Falconry Hood", "3 Leather, 1 Roadrunner Feather"],
          ],
          text: `<p>Der Bald Eagle lebt in bewaldeten Bergbiomen und wird mit Fish Oil gezähmt; die Blobfische dafür kommen aus den tiefsten Ozeanen. Mit dem Falconry Glove nimmt man den gezähmten Adler auf die Hand und wirft ihn los. Ein Adler mit Falconry Hood lässt sich von Hand lenken; das Advancement „Winning Play“ verlangt einen Abschuss aus 100 Blöcken Entfernung.</p>`,
          needs: [["Blobfish", "m", "4"], ["Leather", "v", "7"], ["Hair of Bear", "m"], ["Roadrunner Feather", "m"]],
        },
      ],
    },
    {
      t: "Beute der Oberwelt: Rüstung und Werkzeuge",
      sub: "Zweige des Advancement-Baums unter den einzelnen Tieren. Jedes Stück braucht die Beute eines bestimmten Tiers, oft aus einem bestimmten Biom.",
      steps: [
        {
          t: "Rüstungsteile",
          items: [
            ["alexsmobs:item/froststalker_helmet", "Froststalker Helmet", "1 Froststalker Horn, 5 Packed Ice; Froststalker halten einen für ihresgleichen"],
            ["alexsmobs:item/moose_headgear", "Antler Headdress", "2 Moose Antler, 1 Eisenbarren, 2 String; Elche werfen alle 7–10 Tage ein Geweih ab"],
            ["alexsmobs:item/frontier_cap", "Frontiersman's Cap", "5 Hair of Bear, 1 Leather Cap, 1 Raccoon Tail; schneller beim Schleichen"],
            ["alexsmobs:item/crocodile_chestplate", "Crocodile Chestplate", "8 Crocodile Scute"],
            ["alexsmobs:item/rocky_chestplate", "Rock Shell Chestplate", "8 Rocky Shell (Rocky Roller, Dripstone Caves); man rollt sich zur Kugel"],
            ["alexsmobs:item/spiked_turtle_shell", "Spiked Turtle Shell", "5 Spiked Scute (bemooste Alligator Snapping Turtle scheren), 1 Turtle Shell"],
            ["alexsmobs:item/emu_leggings", "Outback Leggings", "4 Emu Feather, 3 Kangaroo Hide; weicht wie der Emu manchen Geschossen aus"],
            ["alexsmobs:item/centipede_leggings", "Cave Centipede Leggings", "7 Cave Centipede Leg; an Wänden klettern, mehr Schutz"],
            ["alexsmobs:item/roadrunner_boots", "Roadrunner Boots", "4 Roadrunner Feather, 2 Chiseled Sandstone, 1 Leather Boots; schnell auf Sand"],
            ["alexsmobs:item/flying_fish_boots", "Flying Fish Boots", "2 String, 2 Flying Fish; aus dem Wasser springen"],
          ],
          text: `<p>Jedes Teil kopiert eine Fähigkeit seines Tiers; die Wirkungen stehen so im Animal Dictionary. Die Zutaten sind Beute aus Kämpfen, mit zwei Ausnahmen: Spiked Scutes gibt es nur durch Scheren einer bemoosten Alligator Snapping Turtle (Sümpfe), Moose Antler nur durch Abwurf.</p>`,
          needs: [["Packed Ice", "v", "5"], ["Leather Cap", "v"], ["Turtle Shell", "v"], ["Leather Boots", "v"]],
        },
        {
          t: "Werkzeuge und Waffen",
          items: [
            ["alexsmobs:item/vine_lasso", "Vine Lasso", "4 Vines, 1 Lead, 2 Shed Snake Skin (häutende Anaconda, Sumpf)"],
            ["alexsmobs:item/maraca", "Maraca", "3 Planks, 1 Rattlesnake Rattle, 1 Stick"],
            ["alexsmobs:item/stink_ray", "Stink Ray", "2 Stink in a Bottle, 3 Eisenbarren, 1 Hopper"],
            ["alexsmobs:item/stink_bottle", "Stink in a Bottle", "Skunk-Spray mit einer Glass Bottle auffangen; Munition des Stink Ray"],
            ["alexsmobs:item/pocket_sand", "Pocket of Sand", "3 Sand, 5 Leather, 1 Guster Eye"],
            ["alexsmobs:block/gustmaker_front_off", "Gustmaker", "7 Cut Sandstone, 1 Guster Eye, 1 Redstone Dust; mit Redstone ein kleiner Sandsturm"],
            ["alexsmobs:item/tendon_whip", "Tendon Whip", "3 Dropbear Claw, 3 Elastic Tendon, 1 Stick"],
            ["alexsmobs:item/shark_tooth_arrow", "Shark Tooth Arrow", "1 Shark Tooth, 1 Stick, 1 Kelp; ergibt 6"],
            ["alexsmobs:item/tarantula_hawk_elytra", "Tarantula Hawk Elytra", "2 Tarantula Hawk Wing (je 9 Tattered Tarantula Hawk Wing), 1 Elytra"],
          ],
          text: `<p>Der Guster erscheint an stürmischen Tagen in der Wüste; sein Auge fällt nur gelegentlich. Die Elastic Tendon kommt vom Murmur tief unter der Erde (noch tiefer als Cave Centipedes), die Dropbear Claw aus dem Nether. Die Tendon Whip verbindet also Unterwelt und Nether. Eine Maraca, einer Kakerlake gegeben, startet das Advancement „Mariachi!“.</p>`,
          needs: [["Guster Eye", "m"], ["Hopper", "v"], ["Elytra", "v", "Tarantula Hawk Elytra"]],
        },
        {
          t: "Blattschneiderameisen",
          items: [
            ["alexsmobs:block/leafcutter_anthill_top", "Leafcutter Anthill", "Weltgenerierung (eigenes Feature leafcutter_anthill)"],
            ["alexsmobs:block/leafcutter_ant_chamber_fungus", "Leafcutter Ant Chamber", "unter dem Hügel; ernten gibt Gongylidia"],
            ["alexsmobs:item/gongylidia", "Gongylidia", "Shroomlight in die Nähe der Kammer stellen"],
            ["alexsmobs:item/leafcutter_ant_pupa", "Leafcutter Ant Pupa", "aus der Kammer; auf Erde setzen gründet eine Kolonie"],
          ],
          text: `<p>Tritt man auf einen Ameisenhügel, erscheint die Königin. Ist eine Königin im Hügel, entsteht mit einer Chance je fünf geernteten Blättern eine neue Arbeiterin, solange weniger als 10 Ameisen dort leben. Kammerblöcke werden im Sonnenlicht zu Erde und breiten sich beim Ernten auf benachbarte Erde aus. Mit den Puppen züchtet man Anteater.</p>`,
          needs: [["Shroomlight", "v"]],
        },
      ],
    },
    {
      t: "Meer und Untergrund",
      sub: "Advancement-Zweige „Save the Whales!“, „A Small Price to Pay…“, „We Just Want our Hat Back“, „Sculk Cymbal“. Die Ortungsgeräte bauen aufeinander auf.",
      steps: [
        {
          t: "Pottwal, Ambergris und Echolocator",
          items: [
            ["alexsmobs:item/ambergris", "Ambergris", "Belohnung eines gestrandeten Cachalot Whale, den man unverletzt ins Wasser schiebt"],
            ["alexsmobs:item/cachalot_whale_tooth", "Cachalot Whale Tooth", "verliert der Wal gelegentlich beim Rammen"],
            ["alexsmobs:item/echolocator", "Echolocator", "2 Cachalot Whale Tooth, 4 Eisenbarren, 1 Ambergris; zeigt Höhlen in der Nähe"],
            ["alexsmobs:item/endolocator", "Endolocator", "4 Ender Pearl, 1 Echolocator; zeigt nahe einer Festung das End-Portal"],
          ],
          text: `<p>Pottwale leben in lauwarmen, kalten und tiefen Ozeanen. Bei schweren Gewittern stranden sie an Stränden (Config: <code>beachedCachalotWhales = true</code>, Chance 5, Wartezeit 24000 Ticks). Ambergris lässt sich auch an Fischer-Dorfbewohner verkaufen oder als Brennstoff für 64 Schmelzvorgänge nutzen.</p>`,
          needs: [["Eisenbarren", "v", "4"], ["Ender Pearl", "v", "4, Endolocator"]],
        },
        {
          t: "Riesenkalmar und Grappling Squok",
          items: [
            ["alexsmobs:item/lost_tentacle", "Lost Tentacle", "verliert ein Giant Squid im Kampf mit einem Cachalot Whale"],
            ["alexsmobs:item/squid_grapple", "Grappling Squok", "3 Lost Tentacle, 3 Copper Ingot, 1 Crossbow"],
          ],
          text: `<p>Giant Squid leben nur in den tiefsten Ozeanen und lassen selbst bloß Ink Sacs fallen. Den Tentakel gibt es nur aus dem Kampf mit einem Pottwal. Der Squok schießt bis zu vier Tentakel, die sich an jeder Fläche festhalten und den Spieler hinziehen.</p>`,
          needs: [["Copper Ingot", "v", "3"], ["Crossbow", "v"]],
        },
        {
          t: "Skelewag und der seltenste Fisch",
          items: [
            ["alexsmobs:item/fish_bones", "Fish Bones", "Beute des Skelewag (um gesunkene Schiffe); auch 2 Bone Meal"],
            ["alexsmobs:item/skelewag_sword", "Skelewag Skull", "Beute des Skelewag; Waffe, blockt wie ein Schild"],
            ["alexsmobs:item/pupfish_locator", "Strange Fish Finder", "4 Slimeball, 4 Fish Bones, 1 Echolocator"],
          ],
          text: `<p>Devil's Hole Pupfish leben nur in unterirdischen Grundwasserseen eines einzigen Chunks der Oberwelt. Der Strange Fish Finder sendet einen Ton in Richtung dieses Chunks. Pupfish fressen an bemoosten Blöcken unter Wasser und lösen dabei manchmal Slimeballs.</p>`,
          needs: [["Slimeball", "v", "4"], ["Echolocator", "m"]],
        },
        {
          t: "Haie, Rippenquallen, Skreecher",
          items: [
            ["alexsmobs:item/serrated_shark_tooth", "Serrated Shark Tooth", "verliert der Frilled Shark (tiefe Ozeane) manchmal beim Angriff auf Kalmare"],
            [null, "Shield Of The Deep", "3 Serrated Shark Tooth, 2 Shark Tooth, 3 Prismarine Bricks, 1 Heart of the Sea"],
            ["alexsmobs:item/rainbow_jelly", "Rainbow Jelly", "Beute der Comb Jelly (nachts in gefrorenen Ozeanen); färbt Mobs regenbogenbunt"],
            ["alexsmobs:block/rainbow_glass_blank", "Rainbow Glass", "8 Glas, 1 Rainbow Jelly; ergibt 8, Farbe hängt von der Position ab"],
            ["alexsmobs:item/skreecher_soul", "Skreecher Soul", "Beute des Skreecher (Decke des Deep Dark)"],
            ["alexsmobs:block/skulk_boomer_closed", "Sculk Boomer", "3 Sculk, 3 Skreecher Soul, 3 Bone Block"],
          ],
          text: `<p>Die Shark Tooth für Schild und Pfeile kommt vom Hammerhead Shark aus wärmeren Gewässern. Underminer spuken in verlassenen Minen: Wirft man ein bestimmtes Erz in ihre Nähe, werden sie sichtbar und graben verdeckte Blöcke dieses Erzes frei. Mit Magie getötet, lassen sie manchmal die Ghostly Pickaxe fallen, die bei vollem Inventar bis zu 9 Stacks Abbau in sich aufnimmt.</p>`,
          needs: [["Heart of the Sea", "v"], ["Prismarine Bricks", "v", "3"], ["Sculk", "v", "3"]],
        },
      ],
    },
    {
      t: "Nether",
      sub: "Advancement-Zweige „Nightmare Fuel“, „Fetch Me Their Souls!“, „Straddle My Ol' Saddle“. Hier beginnt die Kette zur Void Worm: die Crimson Mosquito Larva.",
      steps: [
        {
          t: "Crimson Mosquito und Blood Sprayer",
          items: [
            ["alexsmobs:item/mosquito_proboscis", "Crimson Mosquito Proboscis", "Beute der Crimson Mosquito (Crimson Forest)"],
            ["alexsmobs:item/blood_sac", "Blood Sac", "nur von einer vollgesogenen Mücke"],
            ["alexsmobs:item/blood_sprayer", "Blood Sprayer", "2 Blood Sac, 3 Nether Brick, 1 Crimson Mosquito Proboscis; Flächenschaden, Blood Sacs als Munition"],
            ["alexsmobs:item/maggot", "Maggot", "Beute der Fly (jagt Zombies)"],
            ["alexsmobs:item/mosquito_larva", "Crimson Mosquito Larva", "1 Maggot, 1 Crimson Mosquito Proboscis; formlos"],
          ],
          text: `<p>Die Mücke saugt sich an Spielern fest und spuckt das Blut danach zurück. Eine Fliege, die in den Nether gelangt, kann sich in eine Crimson Mosquito verwandeln. Die Larve ist ein Schlüsselteil: Warped Toads (Warped Forest) werden mit mehreren Larven zahm, Stradpoles wachsen mit ihnen zu Straddlern heran, und im Capsid wird aus ihr der Mysterious Worm (Phase End).</p>`,
          needs: [["Nether Brick", "v", "3"], ["Maggot", "m"]],
        },
        {
          t: "Warped Mosco und Hemolymph Blaster",
          items: [
            ["alexsmobs:item/warped_muscle", "Warped Muscle", "Beute des Warped Mosco"],
            ["alexsmobs:item/hemolymph_sac", "Hemolymph Sac", "Beute des Warped Mosco"],
            ["alexsmobs:item/hemolymph_blaster", "Hemolymph Blaster", "3 Hemolymph Sac, 1 Mimicream, 1 Blood Sprayer, 1 Crimson Mosquito Proboscis, 1 Warped Muscle"],
          ],
          text: `<p>Den Warped Mosco gibt es nicht wild: Eine Crimson Mosquito, die an einem pilzigen, mit Warped Fungus bedeckten Wesen saugt, verwandelt sich in ihn (Advancement „Down with the Sickness“). Er greift mit Körperstoß, Schlägen und Blutsaugen an. Für den Blaster braucht es zusätzlich Mimicream aus den End-Städten.</p>`,
          needs: [["Blood Sprayer", "m"], ["Mimicream", "m", "End"], ["Warped Fungus", "v"]],
        },
        {
          t: "Soul Vulture und Soul Heart",
          items: [
            ["alexsmobs:item/soul_heart", "Soul Heart", "manchmal von einer Soul Vulture, die vorher Leben gesaugt hat"],
          ],
          text: `<p>Soul Vultures kreisen über den Skeletten des Soul Sand Valley und saugen bis zu fünfmal Leben ab. Aus dem Soul Heart braut man einen Trank der Seelenraub-Wirkung (Soulsteal). Im End lockt es Spectres: Wer eins hält, dem folgen sie, und mit einer Leine lässt man sich von ihnen ziehen.</p>`,
        },
        {
          t: "Straddler, Straddlite und Laviathan",
          items: [
            ["alexsmobs:item/straddlite", "Straddlite", "selten vom Straddler (Basalt Deltas); 9 = Block of Straddlite"],
            ["alexsmobs:item/straddleboard", "Straddleboard", "4 Straddlite, 3 Netheritebarren; färbbar, schwimmt auf Lava, sinkt in Wasser"],
            ["alexsmobs:item/straddle_saddle", "Straddlite Saddle", "2 Saddle, 2 Straddlite; bis zu vier Mitfahrer"],
            ["alexsmobs:item/straddle_helmet", "Straddlite Tack", "3 Straddlite, 2 String; lenkt den Laviathan"],
          ],
          text: `<p>Laviathans sind friedliche Riesen in den Lavaseen des Nethers. Mit Saddle und Tack reitet und lenkt man sie; so ausgerüstet tauchen sie seltener ab.</p>`,
          needs: [["Netheritebarren", "v", "3, Straddleboard"], ["Saddle", "v", "2"]],
        },
      ],
    },
    {
      t: "End",
      sub: "Advancement-Zweig „Ender Distancing“. Der Capsid aus dem Enderiophage ist das Werkzeug für alle folgenden Umwandlungen.",
      steps: [
        {
          t: "Enderiophage und Capsid",
          items: [
            ["alexsmobs:block/capsid", "Capsid", "Beute des Enderiophage (End Midlands)"],
            ["alexsmobs:item/enderiophage_rocket", "Enderiophage Rocket", "1 Capsid, 2 Eisennugget, 2 End Stone; ergibt 3, ersetzt Feuerwerk beim Elytra-Flug"],
          ],
          table: { head: ["Hineinlegen", "Ergebnis", "Zeit"], rows: [
            ["alexsmobs:item/cosmic_cod", "Cod", "Cosmic Cod", "120 Ticks"],
            ["alexsmobs:item/mysterious_worm", "Crimson Mosquito Larva", "Mysterious Worm", "120 Ticks"],
            ["alexsmobs:item/music_disc_daze", "beliebige Schallplatte", "Music Disc (music_disc_daze)", "120 Ticks"],
            ["alexsmobs:item/dimensional_carver_shards/0", "Dimensional Carver", "Shattered Dimensional Carver", "200 Ticks"],
          ] },
          text: `<p>Der Enderiophage steckt Beute mit Ender Flu an; nach zehn Minuten platzen aus dem Wirt kleine Phagen und töten ihn. Chorus Fruit oder Milch heilen. Der Capsid hält einen Stack; steht ein weiterer Capsid oder ein Inventar darüber, schwebt der Inhalt nach oben, so dass Capsids Gegenstände senkrecht fördern. Ein Eye of Ender auf einem Capsid über einem senkrechten End Rod wird selbst zum Enderiophage.</p>
<p>Die Tabelle zeigt die Capsid-Rezepte (<code>data/alexsmobs/capsid_recipes</code>). Mit Cosmic Cod zähmt man den Cosmaw der äußeren End-Inseln.</p>`,
          needs: [["End Stone", "v", "2"], ["Eisennugget", "v", "2"]],
        },
        {
          t: "Mimicube und Mimicream",
          items: [
            ["alexsmobs:item/mimicream", "Mimicream", "Beute des Mimicube (bewacht End-Städte)"],
          ],
          text: `<p>Der Mimicube kopiert Waffen und Rüstung seines Angreifers. 8 Mimicream und ein beliebiger Gegenstand mit Haltbarkeit ergeben eine Kopie mit fast allen Verzauberungen, aber ohne Haltbarkeit; sie muss repariert werden (Config <code>mimicreamRepair = true</code>, ausgenommen Blood Sprayer und Hemolymph Blaster).</p>`,
        },
      ],
    },
    {
      t: "Void Worm und Weltrand",
      sub: "Advancements „A Soul for a Soul“ bis „Nonequivalent Exchange“, der längste Pfad des Mods. Braucht Capsid, Crimson Mosquito Larva, Netherit und einen Nether Star.",
      steps: [
        {
          t: "Void Worm",
          items: [
            ["alexsmobs:item/mysterious_worm", "Mysterious Worm", "Crimson Mosquito Larva im Capsid; in die Leere des End werfen"],
            ["alexsmobs:item/void_worm_eye", "Void Worm Eye", "Beute der Void Worm"],
            ["alexsmobs:item/void_worm_mandible", "Void Worm Mandible", "Beute der Void Worm, zwei Stück"],
          ],
          text: `<p>Die Void Worm lebt in der Leere unter dem End und wird nur durch den Mysterious Worm herausgelockt (Config: 160 Lebenspunkte, nur im End). Sie schießt bis zu vier zielsuchende Kristalle, beißt und reißt Portale auf, um versteckte Beute zu erreichen. Schaden gehört an den Kopf: Wird ein Körpersegment zerstört, spaltet sich der Wurm in zwei mit halber Gesundheit.</p>`,
          needs: [["Crimson Mosquito Larva", "m"], ["Capsid", "m"]],
        },
        {
          t: "Dimensional Carver",
          items: [
            ["alexsmobs:item/dimensional_carver", "Dimensional Carver", "2 Void Worm Mandible, 1 Void Worm Eye, 2 Netheritebarren"],
            ["alexsmobs:item/void_worm_beak", "Void Worm Beak", "2 Void Worm Mandible; mit Redstone beißt sie Mobs zwischen ihren Kiefern"],
            ["alexsmobs:block/void_worm_effigy", "Void Worm Effigy", "1 Void Worm Beak, 3 Purpur Block, 3 Ender Pearl"],
          ],
          text: `<p>Der Carver gräbt nicht durch Blöcke, sondern durch die Wirklichkeit: Benutzt öffnet er ein Portal zum Spawnpunkt, auf der anderen Seite steht eine Minute lang ein Rückportal. Er hat 20 Benutzungen. Mandibeln reichen nur für eins von beiden, Carver oder Beak. Wozu die Effigy dient, steht nicht im Animal Dictionary (nicht ausgelesen).</p>`,
          needs: [["Netheritebarren", "v", "2"], ["Purpur Block", "v", "3, Effigy"]],
        },
        {
          t: "Farseer am Weltrand",
          items: [
            ["alexsmobs:item/dimensional_carver_shards/0", "Shattered Dimensional Carver", "Dimensional Carver im Capsid (200 Ticks); Portal eine Million Blöcke weit"],
            ["alexsmobs:item/farseer_arm", "Farseer Arm", "Beute des Farseer"],
          ],
          text: `<p>Der Farseer erscheint nur nahe der Weltgrenze (Config: <code>farseerBorderSpawnDistance = 100</code>). Der zerbrochene Carver öffnet ein Portal eine Million Blöcke in eine Richtung; mehrmals in dieselbe Richtung benutzt, erreicht man den Rand. Der Farseer greift mit Klauen und einem Strahl aus dem Auge an, beides geht durch Rüstung und Verzauberungen.</p>`,
          needs: [["Dimensional Carver", "m"], ["Capsid", "m"]],
        },
        {
          t: "Transmutation Table",
          items: [
            [null, "Transmutation Table", "2 Farseer Arm, 1 Nether Star, 3 Obsidian"],
          ],
          text: `<p>Ein Slot nimmt einen stapelbaren Gegenstand; drei Möglichkeiten erscheinen, und der ganze Stack wird gegen Erfahrung in die gewählte umgewandelt (Config: Kosten 3, <code>transmutationBlacklist = ["minecraft:beacon"]</code>). Was oft umgewandelt wird, taucht häufiger als Möglichkeit auf, was oft gewählt wird, seltener. Die Auswahl kommt aus drei Beutetabellen (common: Bruchstein, Erde, Sand …; uncommon: Rohmetalle, Redstone, Capsid …; rare: Diamant, Smaragd, Ender Pearl, Mimicream …).</p>
<p>Wird der Tisch abgebaut, verliert er sein Wissen, nur der Nether Star bleibt, und er explodiert (<code>transmutingTableExplodes = true</code>).</p>`,
          needs: [["Nether Star", "v"], ["Obsidian", "v", "3"]],
        },
      ],
    },
  ],
  solo: [
    { t: "Essen",
      items: [
        ["alexsmobs:item/cooked_kangaroo_meat", "Cooked Kangaroo Meat", "Kangaroo Meat braten, räuchern oder am Lagerfeuer"],
        ["alexsmobs:item/kangaroo_burger", "Kangaroo Burger", "2 Bread, 1 Cooked Kangaroo Meat (Alex's Delight ersetzt das Rezept, siehe Brücken)"],
        ["alexsmobs:item/cooked_moose_ribs", "Cooked Moose Ribs", "Raw Moose Ribs braten"],
        ["alexsmobs:item/cooked_catfish", "Cooked Catfish", "Raw Catfish braten"],
        ["alexsmobs:item/cooked_lobster_tail", "Cooked Lobster Tail", "Lobster Tail braten"],
        ["alexsmobs:item/boiled_emu_egg", "Boiled Emu Egg", "Emu Egg braten"],
        ["alexsmobs:item/sopa_de_macaco", "Sopa De Macaco", "Bowl, Banana Peel, Brown Mushroom, Bone"],
        ["alexsmobs:item/mosquito_repellent_stew", "Mosquito Repellent Stew", "Bowl, 2 Triops Eggs, 1 Stink in a Bottle; Crimson Mosquitoes meiden einen"],
      ] },
    { t: "Kleinkram und Umwege",
      items: [
        ["alexsmobs:item/komodo_spit_bottle", "Komodo Dragon Spit Bottle", "1 Glass Bottle, 4 Komodo Dragon Spit; 3 Spit ergeben auch einen Slimeball"],
        ["alexsmobs:item/chorus_on_a_stick", "Chorus Fruit on a Stick", "Fishing Rod, Chorus Fruit"],
        ["alexsmobs:item/dropbear_claw", "Dropbear Claw", "mit Flint ein Flint and Steel ohne Eisen; Trank „Clinging“"],
        ["alexsmobs:block/bison_fur", "Block of Bison Fur", "9 Bison Fur; 4 Bison Fur ergeben auch Brown Wool"],
        ["alexsmobs:block/banana_slug_slime_block", "Banana Slug Slime Block", "9 Banana Slug Slime"],
        ["alexsmobs:item/kangaroo_hide", "Kangaroo Hide", "2 ergeben Leather"],
        ["alexsmobs:item/ancient_dart", "Ancient Dart", "selten in Truhen des Dschungeltempels (Loot-Modifier)"],
        ["alexsmobs:item/pigshoes", "Ancient Hogshoes", "über Piglin-Tauschhandel (Loot-Modifier); verzauberbar wie Stiefel"],
      ],
      text: `<p>Fünf Banner Patterns entstehen aus Paper und je einem Beutestück (Kangaroo Hide, Emu Feather, Hair of Bear, Shed Snake Skin, Tattered Tarantula Hawk Wing). Orca (Orca's Might, schnellere Angriffe) und Sunbird (leichteres Fliegen mit Elytra) geben Segen, ohne dass man etwas herstellt.</p>` },
  ],
  bridges: [
    { t: "Farmer's Delight", addon: "Alex's Delight", x: true,
      text: `<p>Alex's Delight macht aus Tierbeute Gerichte mit Farmer's-Delight-Zutaten: Messer schneiden Raw Bison, Kangaroo Meat, Raw Moose Ribs, Raw Catfish und Raw Bunfungus in Stücke, der Cooking Pot kocht Suppen und Pasta. Das Addon bringt eigene Fassungen der Beutetabellen von Bison (Raw Bison statt Rindfleisch) und Bunfungus (Raw Bunfungus) und des Kangaroo-Burger-Rezepts mit (formlos: Brot, 2 gekochtes Känguru, Salatzutat, Carrot).</p>
<p>Fehler im Addon: Das Rezept <code>barbecue_on_a_stick</code> verlangt <code>amfd:singular_cooked_moose_rib</code>, ein Item eines nicht installierten Mods; es lässt sich so nicht herstellen.</p>`,
      items: [
        [null, "Bison Burger", "Salatzutat, Tomate, Bison Patty, Beetroot, Brot; formlos"],
        [null, "Kangaroo Stew", "Cooking Pot: gekochtes Känguru, Carrot, Beetroot"],
        [null, "Lobster Pasta", "Cooking Pot: Lobster Tail, Raw Pasta, Tomato Sauce"],
        [null, "Acacia Blossom Soup", "Cooking Pot: Onion, Raw Pasta, Acacia Blossom"],
        [null, "Gongylidia Bruschetta", "Salatzutat, Tomate, Gongylidia, Brot, Fish Oil; ergibt 2"],
        [null, "Maggot Salad", "Maggot und Mixed Salad oder Kohl, Tomate, Zwiebel, Beetroot, Bowl"],
        [null, "Cooked Centipede Leg", "Cave Centipede Leg braten"],
      ] },
    { t: "Kein Bezug zu Technik-Mods",
      text: `<p>Kein Rezept des Mods braucht Teile anderer Mods (nur <code>minecraft</code>, <code>forge</code> und <code>alexsmobs</code>). Die Rezepte nutzen Forge-Tags (<code>#forge:ingots/iron</code>, <code>#forge:ingots/netherite</code>, <code>#forge:rods/wooden</code>, <code>#forge:glass</code>), Eisen aus anderen Quellen gilt also. Die Transmutation Table beginnt mit den Gegenständen ihrer drei Beutetabellen; laut Animal Dictionary kommen umgewandelte Gegenstände als Möglichkeiten hinzu.</p>` },
  ],
  foot: "Quelle: alexsmobs-1.22.9.jar und alexsdelight-1.5.jar der Testinstanz (Minecraft 1.20.1, Forge 47.4.26): Animal Dictionary (englische Texte), Advancements, Rezepte, Capsid-Rezepte, Beutetabellen, Loot-Modifier, Sprachdateien; Config alexsmobs.toml der Instanz. Tiere sind im Code gezeichnet und haben kein Bild. Nicht ausgelesen: Lebenspunkte und Schaden der Tiere (außer Void Worm), Rüstungswerte, Wirkung der Void Worm Effigy, Tränke (nur im Code), genaue Dropchancen, Spawn-Gewichte der einzelnen Tiere (je Tier eine Datei *_spawns.json in config/alexsmobs).",
};
