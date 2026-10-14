// Stand 2026-10-14, Minecraft 1.20.1. Quelle: Buch „Star Manual“ (Patchouli), Rezepte, Planetendaten, Weltgenerierung, Loot-Tabellen,
// Tags, Advancements und Sprachdatei aus swplanets-forge-1.20.1-1.4.6.1.jar (mods.toml nennt 1.4.4); Registrierungen und
// Rüstungswerte aus den Klassen des JARs; Zahlenwerte aus config/swplanets.jsonc der Testinstanz.
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Star Wars Planets",
  title: "Star Wars Planets",
  accent: ["#e8c95a", "#8a6d0c"],
  lede: "Ein Addon für Ad Astra: ein zweites Sonnensystem mit fünf Planeten, dazu Lichtschwerter, Blaster und zwei Rüstungen. Der Mod ist klein und hat kaum eigene Stufen; sein Buch „Star Manual“ hat zwei Kapitel, die hier die ersten beiden Phasen bilden. Was das Buch nicht nennt, steht in der dritten Phase in der Reihenfolge der Advancements.",
  mods: [
    ["Star Wars Planets", "1.4.6.1", "main"],
    ["Ad Astra", "1.15.21", "bridge"],
  ],
  phases: [
    {
      t: "New Planets!",
      sub: "Erstes Kapitel des Star Manual. Setzt die Tier 4 Rocket aus Ad Astra voraus; alle fünf Planeten haben in den Planetendaten Stufe 4.",
      steps: [
        {
          t: "Star Manual und der Flug ins neue System",
          items: [
            ["swplanets:item/star_manual", "Star Manual", "Patchouli-Buch; Belohnung des Advancements für den Besitz einer Tier 3 Rocket"],
            [null, "Outer Rims", "Name des Sonnensystems; die Schaltfläche in der Planetenauswahl heißt „The Galaxy“"],
          ],
          text: `<p>Das Buch beginnt mit: „Now, you have a very nice Tier 4 Rocket and you can go anywhere you want!“ In der Planetenauswahl von Ad Astra erscheint neben dem Sonnensystem ein zweites System mit fünf Planeten, jeder mit eigenem Orbit. Alle fünf sind auf Stufe 4 gesetzt, es gibt innerhalb des Mods also keine Reihenfolge der Planeten.</p>
<p>Das Buch soll über ein verstecktes Advancement kommen, sobald eine Tier 3 Rocket im Inventar liegt. Die Loot-Tabelle dazu nennt das Item <code>swplanets:star_manual</code>, das im Code des Mods nicht registriert ist. Ob die Belohnung im Spiel ankommt, ist nicht ausgelesen; das Buch selbst ist als Patchouli-Buch vorhanden.</p>
<p>Die Sprachdatei kennt einen sechsten Planeten, Kamino, mit Orbit und Biom. Es gibt dazu weder Planetendaten noch eine Dimension.</p>`,
          table: {
            head: ["Planet", "Stufe", "Sauerstoff", "Schwerkraft", "Temperatur", "Solarleistung", "Grundgestein"],
            rows: [
              [null, "Tatooine", "4", "ja", "9,807", "25", "30", "Sandstone"],
              [null, "Endor", "4", "ja", "9,807", "15", "16", "Gelände der Overworld"],
              [null, "Mustafar", "4", "ja", "9,807", "25", "16", "Blackstone"],
              [null, "Hoth", "4", "ja", "9,807", "−10", "16", "Glacio Stone (Ad Astra)"],
              [null, "Mandalore", "4", "ja", "3,0", "−160", "16", "Smooth Sandstone"],
              [null, "Orbits der fünf Planeten", "4", "nein", "0", "−270", "32", "wie Ad-Astra-Orbit"],
            ],
          },
          needs: [["Tier 4 Rocket", "x", "Ad Astra"], ["Treibstoff und Launch Pad", "x", "Ad Astra"]],
        },
        {
          t: "Tatooine",
          pics: [["swplanets:gui/background/tatooine", "Buchbild Tatooine"]],
          items: [
            ["swplanets:block/tatooine_stone", "Tatooine Stone", "Gestein der Felsformationen; Slab und Stairs daraus"],
            ["swplanets:block/kyber_crystal_ore_sandstone", "Sandstone Kyber Crystal Ore", "nur im Biom Tatooine Desert"],
            ["ad_astra:item/oil_bucket", "Oil Bucket", "Ölquellen von Ad Astra entstehen in beiden Tatooine-Biomen"],
            [null, "Tatooine Houses", "Bauwerk mit 9 Truhen der Vanilla-Tabelle Wüstendorf und 2 der Wüstenpyramide"],
            [null, "Tatooine Village", "Bauwerk aus Häusern und Wegen"],
            [null, "Jawa Crawler", "Bauwerk mit 24 Truhen und Jawas"],
            [null, "AT-ACT", "Bauwerk ohne Truhen (Strukturname <code>at_act</code>)"],
          ],
          text: `<p>Laut Buch „just desert“, mit Dörfern der Bewohner. Zwei Biome: Tatooine Desert und ein felsiges Wüstenbiom (<code>tatooine_rocky_desert</code>, ohne Namen in der Sprachdatei). Kein Niederschlag, Solarleistung 30 statt 16. Nachts erscheinen Spider, Zombie, Skeleton, Husk und Enderman; im Tatooine Desert leben Banthas.</p>
<p>Alle Bauwerke stehen nur im Tatooine Desert; auch Vanilla-Wüstendörfer sind dort zugelassen. Tatooine ist der einzige Planet des Mods mit Öl und mit dem Sandstein-Erz des Kyber-Kristalls.</p>`,
          needs: [["Tier 4 Rocket", "x", "Ad Astra"]],
        },
        {
          t: "Jawa und Bantha",
          items: [
            [null, "Bantha", "friedlich; lässt 1–3 Beef fallen"],
            [null, "Jawa", "friedlich; erscheint in Jawa Crawlers in Gruppen von 3–10"],
            ["ad_astra:item/wrench", "Wrench", "eines der drei Items, die der Tag <code>jawas_trades</code> nennt"],
            ["ad_astra:item/etrionic_capacitor", "Etrionic Capacitor", "möglicher Drop des Jawa, neben Wrench und Steel Cable"],
          ],
          text: `<p>Buch: „The Bantha is a passive mob that live in the desert. You can mount them by giving them wheat.“ Und: „Jawas are passive creatures that lives in big structures named 'Jawa Crawlers'. They are attracted by mechanical items and you can trade items with them!“</p>
<p>Der Tag <code>swplanets:jawas_trades</code> enthält Wrench, Steel Nugget und Steel Rod aus Ad Astra. Im Code des Jawa stehen als Waren Wrench, Steel Cable, Desh Cable, Solar Panel, Gas Tank, Iron Plate und Photovoltaic Vesnium Cell, alle aus Ad Astra. Welche Ware gegen welches Item getauscht wird, ist nicht ausgelesen. Die Config erlaubt den Handel (<code>jawaTrade: true</code>) und begrenzt ihn auf 7 Tauschvorgänge je Jawa.</p>
<p>Die Truhen im Jawa Crawler enthalten Dark Oak Wood und Dirt, einen Wurf auf einen Blaster, drei bis acht Würfe auf Steel Plate, Steel Cable, Cooked Beef und Teile der Stormtrooper-Rüstung sowie einen Wurf auf Kyber Crystal.</p>`,
          needs: [["Wheat", "v", "für den Bantha"], ["Wrench, Steel Nugget oder Steel Rod", "x", "Ad Astra, für den Handel"]],
        },
        {
          t: "Endor",
          pics: [["swplanets:gui/background/endor", "Buchbild Endor"]],
          items: [
            [null, "Endor Outpost", "Bauwerk mit 3 Truhen (Empire-Tabelle) und einem Skeleton-Spawner"],
            [null, "AT-ST", "Bauwerk mit 1 Truhe (Empire-Tabelle)"],
            [null, "Endor Trees", "große und kleine Bäume als Bauwerke, sehr dicht gesetzt"],
          ],
          text: `<p>Buch: „Forest, forest, and... forest!“ Endor hat ein einziges Biom, Taiga of Endor, und benutzt die Geländeform der Overworld. Es regnet, und die Tiere und Monster sind die der Vanilla-Taiga: Sheep, Pig, Chicken, Cow, Wolf, Rabbit, Fox, dazu Spider, Zombie, Skeleton, Creeper und Enderman.</p>
<p>Eigene Blöcke oder Erze hat Endor nicht. Das Deepslate-Erz des Kyber-Kristalls ist für Endor vorgesehen, siehe Schritt „Kyber Crystal“.</p>`,
          needs: [["Tier 4 Rocket", "x", "Ad Astra"]],
        },
        {
          t: "Mustafar",
          pics: [["swplanets:gui/background/mustafar", "Buchbild Mustafar"]],
          items: [
            ["swplanets:block/mustafar_stone", "Mustafar Stone", "Block des Mods; kein Rezept, kein Vorkommen in den Weltdaten gelesen"],
            [null, "TIE Fighter", "Bauwerk mit 1 Truhe (Empire-Tabelle); Strukturname <code>tie_fighter</code>"],
          ],
          text: `<p>Buch: „It's just very hot sand, lava (also very hot) and... that's it!“ Ein Biom, Mustafar Hills, Grundgestein Blackstone, Meeresspiegel auf Höhe 69. In der Biom-Datei sind keine Mobs eingetragen.</p>
<p>Mustafar Sand steht in der Sprachdatei, hat eine Textur und ist im Tag <code>forge:sand</code> eingetragen, ist im Code aber nicht als Block oder Item registriert.</p>`,
          needs: [["Tier 4 Rocket", "x", "Ad Astra"]],
        },
        {
          t: "Hoth",
          pics: [["swplanets:gui/background/hoth", "Buchbild Hoth"]],
          items: [
            [null, "AT-AT", "Bauwerk mit 2 Truhen (Empire-Tabelle); darin verbaut Oxygen Distributor, Oxygen Loader, Energizer, Sliding Doors und Steel Block aus Ad Astra"],
          ],
          text: `<p>Im Buch heißt der Planet „Hot“ („Gotcha! Actually, it's freezing here... fortunately, you can find some abandoned AT-ATs“), in der Planetenauswahl Hoth. Zwei Biome (Desert of Hot und <code>hoth_frozen_desert</code>), Grundgestein ist Glacio Stone aus Ad Astra, Temperatur −10. In den Biom-Dateien sind keine Mobs eingetragen.</p>
<p>Der AT-AT ist die einzige Stelle des Mods, an der fertige Ad-Astra-Maschinen in der Welt stehen.</p>`,
          needs: [["Tier 4 Rocket", "x", "Ad Astra"]],
        },
        {
          t: "Mandalore",
          items: [
            ["swplanets:block/beskar_ore_sandstone", "Beskar Ore", "nur hier, im Biom <code>mandalore_vestige</code>"],
          ],
          text: `<p>Mandalore steht nicht im Buch. Ein Biom, Grundgestein Smooth Sandstone, Schwerkraft 3,0 statt 9,807, Temperatur −160, kein Niederschlag, keine Mobs in der Biom-Datei, keine Bauwerke. Der Planet ist die einzige Quelle für Beskar.</p>
<p>Ob die Temperatur von −160 einen Schutzanzug verlangt, entscheidet Ad Astra im Code; das ist nicht ausgelesen.</p>`,
          needs: [["Tier 4 Rocket", "x", "Ad Astra"]],
        },
      ],
    },
    {
      t: "New Power",
      sub: "Zweites Kapitel des Star Manual: der Kyber-Kristall und die Lichtschwerter. Setzt einen der Planeten und einen Beacon voraus.",
      steps: [
        {
          t: "Kyber Crystal",
          items: [
            ["swplanets:item/kyber_crystal", "Kyber Crystal", "Drop beider Erze, je 1; außerdem in Truhen der Jawa Crawler"],
            ["swplanets:block/kyber_crystal_ore_sandstone", "Sandstone Kyber Crystal Ore", "Tatooine Desert, in Sandstone und Smooth Sandstone; Adern bis 9, 5 Versuche je Chunk"],
            ["swplanets:block/kyber_crystal_ore", "Kyber Crystal Ore", "registrierter Block, verlangt ein Netherite-Werkzeug; keine Weltgenerierung gelesen, die ihn setzt"],
          ],
          text: `<p>Buch: „While you are mining, you may find a mysterious ore...“ Der Tooltip nennt den Kristall „an inexhaustible source of energy“; eine Verwendung als Energiequelle gibt es in den Rezepten nicht, er dient nur als Zutat der Light Saber Base.</p>
<p>Zwei Erzvorkommen sind eingetragen. Das Sandstein-Erz entsteht nur im Tatooine Desert, von der Unterkante der Welt minus 80 bis plus 80 Blöcke (Dreiecksverteilung). Das zweite Vorkommen gilt für Endor, Hoth, Mustafar und Tatooine und soll in Deepslate den Block <code>swplanets:kyber_crystal_ore_deepslate</code> setzen. Diesen Block gibt es weder im Code noch als Blockzustand oder in der Sprachdatei. Was das im Spiel bewirkt, ist nicht ausgelesen; belegt ist damit nur das Vorkommen auf Tatooine.</p>
<p>Die Truhen der Empire-Tabelle haben einen Eintrag für Kyber Crystal mit null Würfen, geben also keinen.</p>`,
          needs: [["Pickaxe", "v"], ["Tatooine", "m"]],
        },
        {
          t: "Light Saber Base",
          pics: [["render:model/swp_light_saber_base", "Light Saber Base"]],
          items: [
            ["render:model/swp_light_saber_base_s", "Light Saber Base", "2 Iron Ingot + 1 Kyber Crystal"],
          ],
          text: `<p>Buch: „With the crystal you find, you can create one of the most powerful weapons in the universe! But before that, you need to choose your side...“ Die Base ist der Griff und Zutat aller Lichtschwerter.</p>`,
          needs: [["Iron Ingot", "v", "2"], ["Kyber Crystal", "m", "1"]],
        },
        {
          t: "Jedi oder Sith: die Lichtschwerter",
          pics: [["render:model/swp_light_saber_green", "Green Light Saber"], ["render:model/swp_light_saber_red", "Red Light Saber"]],
          items: [
            ["render:model/swp_light_saber_green_s", "Green Light Saber", "Green Dye + Beacon + Light Saber Base"],
            ["render:model/swp_light_saber_blue_s", "Blue Light Saber", "Blue Dye + Beacon + Light Saber Base"],
            ["render:model/swp_light_saber_violet_s", "Violet Light Saber", "Purple Dye + Beacon + Light Saber Base"],
            ["render:model/swp_light_saber_red_s", "Red Light Saber", "Red Dye + Beacon + Light Saber Base"],
          ],
          text: `<p>Das Buch zeigt zwei Rezepte: das grüne Schwert unter „Become a Jedi...“ und das rote unter „Or a Sith“. Blau und Violett haben dasselbe Rezept mit anderer Farbe. Jedes Schwert kostet einen Beacon, also einen Nether Star: Der Wither ist die eigentliche Hürde dieses Kapitels.</p>
<p>Die Config setzt den Angriffswert der Lichtschwerter auf 13 (<code>lightSabersAttackModifier</code>). Im Code gibt es zwei Klassen, Jedi- und Sith-Schwert; worin sie sich unterscheiden, ist nicht ausgelesen. Das erste Lichtschwert gibt das Advancement „May the force be with you!“.</p>`,
          needs: [["Light Saber Base", "m"], ["Beacon", "v", "1 je Schwert"], ["Dye", "v"]],
        },
        {
          t: "Besondere Lichtschwerter",
          pics: [["render:model/swp_light_saber_dark_maul", "Darth Maul's lightsaber"], ["render:model/swp_light_saber_kylo_ren", "Kylo Ren's lightsaber"], ["render:model/swp_darksaber", "Dark Saber"]],
          items: [
            ["render:model/swp_light_saber_dark_maul_s", "Darth Maul's lightsaber", "Red Light Saber + Beacon + Red Dye"],
            ["render:model/swp_light_saber_kylo_ren_s", "Kylo Ren's lightsaber", "Red Dye + Beacon + 3 Light Saber Base"],
            ["render:model/swp_darksaber_s", "Dark Saber", "2 Beskar + Light Saber Base; kein Beacon"],
          ],
          text: `<p>Diese drei stehen nicht im Buch. Das Doppelschwert braucht ein fertiges rotes Schwert und einen zweiten Beacon, das Schwert mit Parierstange drei Griffe und einen Beacon. Der Dark Saber ist das einzige Schwert ohne Beacon; er braucht dafür Beskar von Mandalore.</p>
<p>Der Tag <code>swplanets:light_sabers</code> nennt die vier farbigen Schwerter und die beiden roten Sonderformen, nicht den Dark Saber.</p>`,
          needs: [["Light Saber Base", "m"], ["Beacon", "v"], ["Beskar", "m", "für den Dark Saber"]],
        },
      ],
    },
    {
      t: "Imperium und Mandalore",
      sub: "Nicht im Buch. Reihenfolge nach Rezepten und den Advancements „Another way!“ und „This is the way!“. Setzt Öl und für die zweite Rüstung Mandalore voraus.",
      steps: [
        {
          t: "Plastic Plate und Stormtrooper-Rüstung",
          items: [
            ["swplanets:item/plastic_plate", "Plastic Plate", "ein Oil Bucket von Ad Astra im Ofen, 200 Ticks"],
            ["swplanets:item/stormtrooper_mask", "Stormtrooper Helmet", "5 Plastic Plate + Black Dye"],
            ["swplanets:item/stormtrooper_chestplate", "Stormtrooper Chestplate", "8 Plastic Plate"],
            ["swplanets:item/stormtrooper_leggings", "Stormtrooper Leggings", "7 Plastic Plate"],
            ["swplanets:item/stormtrooper_boots", "Stormtrooper Boots", "4 Plastic Plate"],
          ],
          text: `<p>Plastik entsteht, indem man einen Eimer Öl im Ofen schmilzt. Eine ganze Rüstung kostet 24 Plastic Plate, also 24 Eimer Öl. Die Teile liegen auch in den Truhen der Empire-Bauwerke und der Jawa Crawler.</p>
<p>Die vier Teile sind im Tag <code>ad_astra:space_suit_items</code> eingetragen, zählen für Ad Astra also als Raumanzug. Rüstungswerte im Code: Helm 2, Brust 5, Hose 5, Stiefel 2.</p>`,
          needs: [["Oil Bucket", "x", "Ad Astra, 24 für die Rüstung"], ["Black Dye", "v"]],
        },
        {
          t: "Blaster und Blaster Upgrader",
          pics: [["render:model/swp_blaster", "Blaster"], ["render:model/swp_blaster_upgrader", "Blaster Upgrader"]],
          items: [
            ["render:model/swp_blaster_s", "Blaster", "5 Plastic Plate + Flint and Steel + Blaze Rod"],
            ["render:model/swp_blaster_upgrader_s", "Blaster Upgrader", "6 Steel Plate (Tag <code>ad_astra:steel_plates</code>) + 2 Smithing Table + Blaster"],
            ["swplanets:item/blaster_zoom_upgrade", "Blaster Zoom Upgrade", "kein Rezept; nur aus Truhen der Empire-Tabelle"],
            ["swplanets:item/blaster_explosion_upgrade", "Blaster Explosion Upgrade", "kein Rezept; nur aus Truhen der Empire-Tabelle"],
          ],
          text: `<p>Der Blaster ist die Fernwaffe des Mods. Er hat einen Energiespeicher (Config: höchstens 10 000) und verschießt Laser; der Tooltip nennt Lebensdauer des Lasers und Zoom. Wie er geladen wird und wie viel ein Schuss kostet, ist nicht ausgelesen.</p>
<p>Der Blaster Upgrader ist ein Block mit eigener Oberfläche, in dem man Upgrades einsetzt; er verbraucht beim Bau einen Blaster. Das Explosion Upgrade lässt den Laser explodieren (Config: Radius 2,0, ohne Feuer). Beide Upgrades gibt es nur als Beute aus AT-AT, AT-ST, Endor Outpost und TIE Fighter: Jede dieser Truhen enthält genau eines der beiden.</p>
<p>Ein Blaster Distance Upgrade steht in der Sprachdatei und hat eine Textur, ist im Code aber nicht registriert.</p>`,
          needs: [["Plastic Plate", "m", "5"], ["Blaze Rod", "v"], ["Steel Plate", "x", "Ad Astra oder jede Platte im Tag"], ["Smithing Table", "v", "2"]],
        },
        {
          t: "Beskar und Beskar-Rüstung",
          items: [
            ["swplanets:block/beskar_ore_sandstone", "Beskar Ore", "Mandalore, in Sandstone und Smooth Sandstone; Adern bis 6, 15 Versuche je Chunk"],
            ["swplanets:item/beskar", "Beskar", "Drop des Erzes, je 1; kein Schmelzen nötig"],
            ["swplanets:item/beskar_armor_helmet", "Beskar Helmet", "1 Beskar + Stormtrooper Helmet"],
            ["swplanets:item/beskar_armor_chestplate", "Beskar Chestplate", "1 Beskar + Stormtrooper Chestplate"],
            ["swplanets:item/beskar_armor_leggings", "Beskar Leggings", "1 Beskar + Stormtrooper Leggings"],
            ["swplanets:item/beskar_armor_boots", "Beskar Boots", "1 Beskar + Stormtrooper Boots"],
          ],
          text: `<p>Beskar gibt es nur auf Mandalore, von der Unterkante der Welt bis 160 Blöcke darüber. Das erste Stück gibt das Advancement „Another way!“.</p>
<p>Die Beskar-Rüstung ist eine Aufwertung der Stormtrooper-Rüstung: je Teil ein Beskar, formlos an der Werkbank. Rüstungswerte im Code: Helm 4, Brust 9, Hose 7, Stiefel 4. Wer alle vier Teile besitzt, erhält „This is the way!“. Anders als die Stormtrooper-Teile steht die Beskar-Rüstung nicht im Tag <code>ad_astra:space_suit_items</code>.</p>
<p>Beskar ist außerdem die Zutat des Dark Saber (Schritt „Besondere Lichtschwerter“).</p>`,
          needs: [["Beskar", "m", "4 für die Rüstung"], ["Stormtrooper-Rüstung", "m"], ["Mandalore", "m"]],
        },
      ],
    },
  ],
  solo: [
    {
      t: "Bauen",
      items: [
        ["swplanets:block/tatooine_stone", "Tatooine Stone", "Gestein von Tatooine"],
        [null, "Tatooine Stone Slab", "6 aus 3 Tatooine Stone"],
        [null, "Tatooine Stone Stairs", "4 aus 6 Tatooine Stone"],
        ["swplanets:block/mustafar_stone", "Mustafar Stone", "registrierter Block ohne Rezept"],
      ],
    },
    {
      t: "Advancements",
      text: `<p>„A new galaxy“ (ein Planet des Mods betreten) → „Ho! It's shiny!“ (Kyber Crystal) → „May the force be with you!“ (ein Lichtschwert) → „A hyperspace pro!“. Daneben „Another way!“ (Beskar) → „This is the way!“ (volle Beskar-Rüstung).</p>
<p>„A hyperspace pro!“ verlangt laut Beschreibung alle Planeten. In der Datei genügt einer von fünf Dimensionswechseln, und die Liste nennt Kamino statt Mandalore.</p>`,
    },
    {
      t: "In den Dateien, aber nicht im Spiel",
      text: `<p>Diese Einträge stehen in Sprachdatei, Texturen oder Modellen, sind im Code des Mods aber nicht registriert: Speeder (Item und Entity), Music Disc „John Williams - Star Wars Opening“, Kyber Crystal Cluster, Mustafar Sand, Blaster Distance Upgrade, ein weißes Lichtschwert, der Planet Kamino sowie eine Textur „pillar_tusken“ für einen weiteren Mob.</p>`,
    },
  ],
  bridges: [
    {
      t: "Ad Astra",
      x: true,
      text: `<p>Der Mod ist ein Addon für Ad Astra und hängt an fünf Stellen daran: Die Planeten sind Ad-Astra-Planeten der Stufe 4. Plastic Plate entsteht aus dem Oil Bucket. Der Blaster Upgrader braucht Platten aus dem Tag <code>ad_astra:steel_plates</code>. Die Stormtrooper-Rüstung zählt als Raumanzug. Jawas handeln und droppen ausschließlich Ad-Astra-Teile (Wrench, Kabel, Solar Panel, Gas Tank, Etrionic Capacitor).</p>
<p>Umgekehrt trägt der Mod die beiden Tatooine-Biome in die Biomliste der Ölquellen von Ad Astra ein. Hoth besteht aus Glacio Stone, ohne die Erze von Glacio: Die Erzvorkommen von Ad Astra sind für die Biome dieses Mods nicht eingetragen.</p>`,
      items: [
        ["ad_astra:item/oil_bucket", "Oil Bucket", "Rohstoff für Plastic Plate"],
        ["ad_astra:item/steel_plate", "Steel Plate", "6 für den Blaster Upgrader"],
        ["ad_astra:item/steel_cable", "Steel Cable", "Beute aus Jawa Crawlers und von Jawas"],
      ],
    },
    {
      t: "Better Combat (nicht installiert)",
      x: true,
      text: `<p>Der Ordner <code>weapon_attributes</code> gibt den Lichtschwertern Angriffsmuster für Better Combat: zweihändig geführt, Reichweite 2, Kategorie „claymore“. Dateien gibt es für das rote, blaue, grüne und violette Schwert. Better Combat ist im Pack nicht installiert; die Dateien bleiben ohne Wirkung.</p>`,
    },
    {
      t: "Was fehlt",
      text: `<p>Kyber Crystal und Beskar stehen in keinem gemeinsamen Tag für Edelsteine oder Barren; nur die beiden Kyber-Erze sind in <code>forge:ores</code> eingetragen. Andere Mods können mit beiden Rohstoffen von sich aus nichts anfangen: kein Verdoppeln in Maschinen, kein Werkzeugmaterial. Für Plastic Plate gibt es keinen Tag.</p>
<p>Der Mod bringt keine Maschinen, keine Energiequelle und keine Stufe oberhalb der Tier 4 Rocket mit. Sein Fortschritt hängt an drei fremden Dingen: Rakete und Öl aus Ad Astra, Beacon aus Vanilla.</p>`,
    },
  ],
  foot: "Quelle: Buch Star Manual, Rezepte, Planetendaten, Weltgenerierung, Strukturdateien, Loot-Tabellen, Tags, Advancements und Sprachdatei aus swplanets-forge-1.20.1-1.4.6.1.jar der Testinstanz (Minecraft 1.20.1, Forge 47.4.26); Registrierungen, Rüstungswerte und Jawa-Waren aus den Klassen des JARs; Config-Werte aus config/swplanets.jsonc. Mobs und Bauwerke haben kein lesbares Bild. Nicht ausgelesen: die Tauschverhältnisse der Jawas, Schaden und Energieverbrauch des Blasters, der Unterschied zwischen Jedi- und Sith-Schwert, Haltbarkeit der Rüstungen, die Wirkung der Planetentemperaturen und was der Eintrag für das nicht vorhandene Deepslate-Erz im Spiel bewirkt.",
};
