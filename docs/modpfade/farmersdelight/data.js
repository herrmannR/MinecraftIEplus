// Stand 2026-10-17, Minecraft 1.20.1. Quelle: Advancements (Baum „main“), Rezepte, Loot-Modifier, Loot-Tabellen, Biome-Modifier,
// Tags und Sprachdateien aus FarmersDelight-1.20.1-1.3.4.jar, nethersdelight-1.20.1-4.0.jar und Engineers Delight 1.20.1 B.1.4.jar;
// Zahlenwerte aus config/farmersdelight-common.toml der Testinstanz. Keiner der drei Mods hat ein Buch.
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Farmer's Delight",
  title: "Farmer's Delight",
  accent: ["#c6b24a", "#7a6a14"],
  lede: "Ackerbau und Kochen: Wildpflanzen sammeln, mit dem Messer Stroh und Fleischstücke gewinnen, auf Rich Soil anbauen und im Cooking Pot Mahlzeiten kochen, bis zu Festessen, die man aufstellt und teilt. Nether's Delight trägt dasselbe in den Nether (Machete, Hoglin, Strider, Soul Compost), Engineer's Delight verlegt Teile der Küche in die Maschinen von Immersive Engineering. Die Reihenfolge folgt dem Advancement-Baum von Farmer's Delight; die Mods haben kein Buch.",
  mods: [
    ["Farmer's Delight", "1.3.4", "main"],
    ["Nether's Delight", "4.0", "addon"],
    ["Engineer's Delight", "B.1.4", "bridge"],
  ],
  phases: [
    {
      t: "Messer und Wildpflanzen",
      sub: "Advancements „Hunt and Gather“ und „Crops of the Wild“. Das Messer ist das erste Werkzeug; die vier neuen Feldfrüchte findet man wild oder in Truhen.",
      steps: [
        {
          t: "Messer",
          items: [
            ["farmersdelight:item/flint_knife", "Flint Knife", "1 Flint + 1 Stick"],
            ["farmersdelight:item/iron_knife", "Iron Knife", "1 Iron Ingot + 1 Stick"],
            ["farmersdelight:item/golden_knife", "Golden Knife", "1 Gold Ingot + 1 Stick"],
            ["farmersdelight:item/diamond_knife", "Diamond Knife", "1 Diamond + 1 Stick"],
            ["farmersdelight:item/netherite_knife", "Netherite Knife", "Diamond Knife + Netherite Ingot am Smithing Table"],
          ],
          text: `<p>„A lightweight melee weapon, with fast swings and gentle damage.“ Mit dem Messer erntet man Stroh von Gräsern, Weizen und Reis, und Tiere geben ihre Nebenbeute sicher: Leather von Kühen und Pferden, Feather von Hühnern, String von Spinnen, Rabbit Hide, Shulker Shell und Ham von Schweinen (50 %) und Hoglins.</p>`,
          needs: [["Flint", "v"], ["Iron Ingot", "v"], ["Diamond", "v"], ["Netherite Ingot", "v"]],
        },
        {
          t: "Wildpflanzen",
          items: [
            ["farmersdelight:block/wild_cabbages", "Wild Cabbage", "Strände; Messer: Cabbage Seeds"],
            ["farmersdelight:block/wild_beetroots", "Sea Beet", "Strände; Messer: Beetroot Seeds"],
            ["farmersdelight:block/wild_carrots", "Wild Carrot", "Oberwelt (gemäßigt); Messer: Carrot"],
            ["farmersdelight:block/wild_onions", "Wild Onion", "Oberwelt (gemäßigt); Messer: Onion"],
            ["farmersdelight:block/wild_potatoes", "Wild Potato", "kalte Gebiete; Messer: Potato"],
            ["farmersdelight:block/wild_tomatoes", "Tomato Shrub", "heiße Gebiete; Messer: Tomato Seeds"],
            ["farmersdelight:block/wild_rice_top", "Wild Rice", "nasse Gebiete; Messer: Rice"],
          ],
          text: `<p>Die Biome stehen in den Biome-Modifiern (<code>#minecraft:is_beach</code>, <code>#forge:is_hot/overworld</code>, <code>#forge:is_wet/overworld</code> usw.), die Klimabeschreibung in der JEI-Info. Auf dem Cutting Board geben die Wildpflanzen ihr Saatgut, oft mit Farbstoff dazu. Onions lassen Zombies und Illager mit 2 % fallen; Truhen in Dörfern, Schiffswracks, Außenposten und weiteren Strukturen bekommen eigene Beute.</p>`,
          needs: [["Messer", "m"]],
        },
      ],
    },
    {
      t: "Anbau",
      sub: "Advancements „Grasping at Straws“, „Advanced Composting“, „Plant Food“, „Dipping Your Roots“, „Tall-mato“ und „Fungus Among Us“.",
      steps: [
        {
          t: "Stroh, Canvas und Rope",
          items: [
            ["farmersdelight:item/straw", "Straw", "Messer auf Gras, Weizen oder Reis"],
            ["farmersdelight:item/canvas", "Canvas", "4 Straw"],
            ["farmersdelight:item/rope", "Rope", "2 Straw → 4 Rope"],
            ["farmersdelight:item/tree_bark", "Tree Bark", "Stamm mit der Axt auf dem Cutting Board"],
          ],
          text: `<p>Stroh ist der Grundstoff für Canvas (Basket, Tatami, Painting, Scaffolding), Rope (Rope Fence, Safety Net) und Organic Compost. Tree Bark entsteht beim Entrinden von 20 Holzarten auf dem Cutting Board und ersetzt Rotten Flesh im Kompost oder wird zu Paper.</p>`,
          needs: [["Messer", "m"], ["Axt", "v"]],
        },
        {
          t: "Organic Compost und Rich Soil",
          items: [
            ["farmersdelight:block/organic_compost_stage0", "Organic Compost", "1 Dirt + 2 Straw + 2 Rotten Flesh + 4 Bone Meal (oder 4 Tree Bark + 2 Bone Meal)"],
            ["farmersdelight:block/rich_soil", "Rich Soil", "zerfällt aus Organic Compost"],
          ],
          text: `<p>„It composts better with sun, water and mushrooms!“ Organic Compost zerfällt langsam zu Rich Soil, „an upgrade for your farms“. Die Config der Testinstanz setzt <code>richSoilBoostChance = 0.2</code>.</p>`,
          needs: [["Straw", "m"], ["Rotten Flesh", "v"], ["Bone Meal", "v"], ["Dirt", "v"]],
        },
        {
          t: "Reis, Tomaten und Pilzkolonien",
          items: [
            ["farmersdelight:item/rice", "Rice", "in flaches Wasser pflanzen"],
            ["farmersdelight:item/tomato", "Tomato", "Rope über der Pflanze lässt sie höher wachsen"],
            ["farmersdelight:block/red_mushroom_colony_stage3", "Red Mushroom Colony", "Pilzbiome; braucht sehr reichen Boden"],
            ["farmersdelight:block/brown_mushroom_colony_stage3", "Brown Mushroom Colony", "Pilzbiome; Messer: 5 Pilze"],
          ],
          text: `<p>Reis wächst in einer flachen Wasserpfütze und gibt Rice Panicle, die das Messer in Rice und Straw teilt. Tomaten ranken an Rope empor. Eine ausgewachsene Pilzkolonie schert man mit der Schere ab; „To grow them like this, you'll need a very rich soil...“</p>`,
          needs: [["Rope", "m"], ["Rich Soil", "m"]],
        },
      ],
    },
    {
      t: "Küche",
      sub: "Advancements „Watch Your Fingers“, „Bonfire Lit“, „Portable Cooking“ und „Dinner's Served!“.",
      steps: [
        {
          t: "Cutting Board",
          items: [["farmersdelight:block/cutting_board", "Cutting Board", "4 Planks + 2 Stick"]],
          text: `<p>„With a tool in hand, use a Cutting Board to break down an item.“ Mit dem Messer zerlegt es Fleisch und Fisch (Minced Beef, Raw Bacon, Mutton Chops; Huhn und Fisch geben dazu Bone Meal), Pies und Kuchen in Stücke, Teig in Raw Pasta, Blumen in je zwei Farbstoffe. Mit der Axt entrindet es Stämme, mit der Hacke zerlegt es Holzmöbel und Boote („salvaging“, 33 Rezepte), mit der Schaufel Clay und Gravel. Die Config gibt 10 % Glücksbonus (<code>cuttingBoardFortuneBonus</code>).</p>`,
          needs: [["Planks", "v"], ["Messer", "m"]],
        },
        {
          t: "Wärme: Campfire, Stove, Skillet",
          items: [
            ["farmersdelight:block/stove_front", "Stove", "1 Campfire + 4 Bricks + 3 Iron Ingot"],
            ["farmersdelight:block/skillet_top", "Skillet", "4 Iron Ingot + 1 Brick"],
          ],
          text: `<p>Wärmequellen laut Tag <code>farmersdelight:heat_sources</code>: Stove, Magma Block, Lava Cauldron, dazu Lava, Campfires und Feuer. Der Skillet kocht unterwegs („Stand near heat, then hold food in your other hand!“) und lässt sich schleichend als Block abstellen.</p>`,
          needs: [["Campfire", "v"], ["Bricks", "v"], ["Iron Ingot", "v"]],
        },
        {
          t: "Cooking Pot",
          items: [["farmersdelight:item/cooking_pot", "Cooking Pot", "5 Iron Ingot + 2 Brick + 1 Wooden Shovel + 1 Water Bucket"]],
          text: `<p>Der Kochtopf braucht Wärme von unten („Needs heat from below“) und kocht aus mehreren Zutaten eine Mahlzeit; serviert wird in einem Behälter, meist einer Bowl („Served on“). 28 Kochrezepte in Farmer's Delight, darunter Tomato Sauce, Cooked Rice, Beef Stew, Fried Rice, Pasta with Meatballs, Hot Cocoa und Apple Cider.</p>`,
          needs: [["Iron Ingot", "v", "5"], ["Brick", "v", "2"], ["Wärmequelle", "v"]],
        },
      ],
    },
    {
      t: "Mahlzeiten und Festessen",
      sub: "Advancements „Nourishing!“, „A Glorious Feast“ und „Master Chef“ („Eat a course of every meal available!“).",
      steps: [
        {
          t: "Mahlzeiten und Effekte",
          items: [
            ["farmersdelight:item/beef_stew", "Beef Stew", "Cooking Pot"],
            ["farmersdelight:item/hamburger", "Hamburger", "Bread, Beef Patty, Salat, Tomato, Onion"],
            ["farmersdelight:item/steak_and_potatoes", "Steak and Potatoes", "Baked Potato, Steak, Onion, Cooked Rice"],
            ["farmersdelight:item/dog_food", "Dog Food", "für gezähmte Wölfe"],
            ["farmersdelight:item/horse_feed", "Horse Feed", "für Reittiere"],
          ],
          text: `<p>Zwei eigene Effekte: <b>Nourishment</b> („Prevents the food meter from decreasing, except when healing with saturation“) und <b>Comfort</b> („Provides natural regeneration, regardless of how hungry you are“). Milk Bottle entfernt einen Effekt, Hot Cocoa einen schädlichen.</p>`,
          needs: [["Cooking Pot", "m"], ["Feldfrüchte", "m"]],
        },
        {
          t: "Festessen",
          items: [
            ["farmersdelight:item/roast_chicken_block", "Roast Chicken", "Cooked Chicken, Onion, Egg, Bread, 2 Carrot, 2 Baked Potato, Bowl"],
            ["farmersdelight:item/honey_glazed_ham_block", "Honey Glazed Ham", "Smoked Ham, Honey Bottle, 4 Sweet Berries, 2 Cooked Rice, Bowl"],
            ["farmersdelight:item/shepherds_pie_block", "Shepherd's Pie", "3 Cooked Mutton, 2 Baked Potato, 2 Onion, Milch, Bowl"],
            ["farmersdelight:item/stuffed_pumpkin_block", "Stuffed Pumpkin", "Cooking Pot, im Pumpkin serviert"],
            ["farmersdelight:item/rice_roll_medley_block", "Rice Roll Medley", "Kelp Roll Slice, Salmon Roll, Cod Roll, Bowl"],
            ["farmersdelight:item/gleaming_salad_block", "Gleaming Salad", "Golden Carrot, Glow Berries, Cabbage u. a."],
          ],
          text: `<p>„Some meals are big enough to be placed down and shared with friends!“ Festessen stellt man als Block auf und teilt sie in Portionen.</p>`,
          needs: [["Cooking Pot", "m"], ["Smoked Ham", "m"], ["Cooked Rice", "m"]],
        },
      ],
    },
    {
      t: "Nether",
      sub: "Nether's Delight hat keine eigenen Advancements. Es setzt Farmer's Delight im Nether fort: neue Werkzeuge, Fleisch von Hoglin und Strider, eine Nether-Pflanze und ein Kompost für Soul Soil.",
      steps: [
        {
          t: "Machete und Hoglin",
          addon: "Nether's Delight",
          items: [
            ["nethersdelight:item/iron_machete", "Iron Machete", "2 Iron Ingot + 1 Stick (auch Golden, Diamond, Netherite)"],
            ["nethersdelight:item/hoglin_hide", "Hoglin Hide", "Hoglin mit Messer oder Machete; Cutting Board: 4 Leather"],
            ["nethersdelight:item/hoglin_loin", "Hoglin Loin", "Hoglin; gebraten Hoglin Sirloin"],
            ["nethersdelight:item/hoglin_trophy", "Hoglin Trophy", "4 Planks, 1 Hoglin Hide, 1 Wool, 3 Gold Nugget"],
          ],
          text: `<p>Die Machete erntet dieselbe Nebenbeute wie das Messer (Leather, Feather, String, Ham …). Hoglin Hide gibt es nur mit Messer oder Machete (Tag <code>nethersdelight:tools/hunting_tools</code>). Hoglins geben außerdem 1–3 Hoglin Loin.</p>`,
          needs: [["Iron Ingot", "v"], ["Messer", "m"]],
        },
        {
          t: "Strider und Propelplant",
          addon: "Nether's Delight",
          items: [
            ["nethersdelight:item/strider_slice", "Strider Slice", "Strider (1–2); Messer: 2 Ground Strider"],
            ["nethersdelight:item/propelplant_cane", "Propelplant Cane", "wächst im Crimson Forest; Messer: Gunpowder"],
            ["nethersdelight:item/propelpearl", "Propelpearl", "Piglin-Tausch"],
            ["nethersdelight:item/nether_skewer", "Nether Skewer", "Propelpearl, Strider-Fleisch, Blaze Rod"],
          ],
          text: `<p>Die Propelplant ist die einzige Weltgenerierung des Addons (Biome-Modifier nur für <code>minecraft:crimson_forest</code>). Sie liefert auf dem Cutting Board Gunpowder; die Propelpearl kommt aus dem Piglin-Tausch und steckt in Propelplant Torch, Nether Skewer und Magma Gelatin.</p>`,
          needs: [["Messer", "m"], ["Gold Ingot", "v", "Piglin-Tausch"]],
        },
        {
          t: "Soul Compost und Nether-Öfen",
          addon: "Nether's Delight",
          items: [
            ["nethersdelight:block/soul_compost_0", "Soul Compost", "1 Soul Soil + 2 Twisting Vines + 4 Warped Roots + 2 Bone Meal"],
            ["nethersdelight:block/rich_soul_soil", "Rich Soul Soil", "zerfällt aus Soul Compost"],
            ["nethersdelight:block/crimson_fungus_colony_stage3", "Crimson Fungus Colony, Warped Fungus Colony", "Messer: 5 Fungus"],
            ["nethersdelight:block/blackstone_stove_front", "Blackstone Stove", "3 Nether Brick + 4 Polished Blackstone Bricks + Campfire"],
            ["nethersdelight:block/blackstone_furnace_front", "Blackstone Furnace", "8 Blackstone"],
            ["nethersdelight:block/blackstone_blast_furnace_front", "Blackstone Blast Furnace", "Blackstone Furnace + 5 Iron Ingot + 3 Polished Blackstone"],
            ["nethersdelight:block/nether_brick_smoker_front", "Nether Brick Smoker", "Blackstone Furnace + 4 Nether Bricks"],
          ],
          text: `<p>Soul Compost ist das Nether-Gegenstück zum Organic Compost: Er zerfällt „only in the nether“ und schneller neben Lava und Flammen. Die Blackstone-Öfen sind Nether-Fassungen von Furnace, Blast Furnace, Smoker und Stove; das Addon ändert dazu das Furnace-Rezept so, dass Blackstone nicht mehr zählt.</p>`,
          needs: [["Soul Soil", "v"], ["Twisting Vines", "v"], ["Warped Roots", "v"], ["Blackstone", "v"]],
        },
        {
          t: "Stuffed Hoglin",
          addon: "Nether's Delight",
          items: [
            ["nethersdelight:item/raw_stuffed_hoglin", "Raw Stuffed Hoglin", "2 Hoglin Loin, 2 Ham, Hoglin Hide, Nether Salad, Fungus und Roots"],
            ["nethersdelight:item/stuffed_hoglin", "Stuffed Hoglin", "Cooking Pot: Raw Stuffed Hoglin + 2 Nether Salad"],
            ["nethersdelight:item/plate_of_stuffed_hoglin_roast", "Plate of Stuffed Hoglin Roast", "Portion vom Festessen"],
          ],
          text: `<p>Das Festessen des Nethers; es lässt sich nur mit einem Messer zerteilen („You need a Knife to cut this.“). Weitere Gerichte: Grilled Strider, Strider Moss Stew, Magma Gelatin, Warped Moldy Meat.</p>`,
          needs: [["Hoglin Loin", "a", "2"], ["Ham", "m", "2"], ["Cooking Pot", "m"]],
        },
      ],
    },
  ],
  solo: [
    {
      t: "Lagerung und Deko",
      items: [
        ["farmersdelight:block/wooden_basket_side", "Basket", "4 Stick + 3 Canvas"],
        [null, "Oak Cabinet", "Schrank, je Holzart"],
        ["farmersdelight:item/full_tatami_mat", "Full Tatami Mat", "aus Tatami Block (2 Canvas + 2 Straw)"],
        ["farmersdelight:block/rope_fence", "Rope Fence", "4 Rope + 2 Stick"],
        [null, "Safety Net", "4 Rope"],
      ],
      text: `<p>Kisten (Crates, Bags, Bales) packen je neun Feldfrüchte, Reis oder Stroh; die Config schaltet auch Kisten für Vanilla-Feldfrüchte ein. Canvas Signs gibt es in allen Farben.</p>`,
    },
  ],
  bridges: [
    {
      t: "Immersive Engineering", addon: "Engineer's Delight", x: true,
      text: `<p>Engineer's Delight bringt Rezepte für sieben IE-Maschinen. <b>Crusher</b>: Wheat zu 2 Wheat Flour (Hay Bale zu 18), Rice Bale zu 9 Rice + 9 Straw, Propelplant Cane zu 2 Gunpowder. <b>Bottling Machine</b>: Wheat Flour + Wasser zu Wheat Dough, Organic Compost + Wasser zu Rich Soil, Soul Compost + Lava zu Rich Soul Soil, dazu Flaschen mit Milk, Apple Cider, Melon Juice und Bottle of Wodka (aus Ethanol). <b>Squeezer</b>: Tomato zu Tomato Sauce, Melon zu Melon Juice. <b>Mixer</b>: Apple + Sugar + Ethanol zu Apple Cider. <b>Metal Press</b>: Wheat Dough mit Wire Mold zu 2 Raw Pasta, Pies und Kuchen mit Unpacking Mold zu Stücken.</p>
<p><b>Garden Cloche</b> auf Rich Soil: 12 Pflanzen (Weizen, Karotten, Kartoffeln, Rüben, Melonen, Kürbisse, Sweet Berries, Industrial Hemp, Cabbage, Onion, Rice, Tomato), meist mit 3 Stück Ernte (Melone und Kürbis 2); die Rezepte von Farmer's Delight auf Dirt geben 2. <b>Sawmill</b>: Engineer's Delight ersetzt die IE-Rezepte für 11 Holzarten, sodass beim Entrinden Tree Bark abfällt (bei Bamboo Straw), und zerlegt Cabinets.</p>`,
      items: [
        ["tmted:item/wheat_flour", "Wheat Flour", "Crusher: Wheat"],
        ["tmted:item/wodka_bottle", "Bottle of Wodka", "Bottling Machine: Ethanol"],
      ],
    },
    {
      t: "Immersive Engineering", addon: "Farmer's Delight", x: true,
      text: `<p>Farmer's Delight selbst bringt 16 IE-Rezepte mit (Bedingung: IE geladen): Cloche für Cabbage, Onion, Rice und Tomato auf Dirt, Crusher für Rice Panicle und alle Wildpflanzen, Squeezer macht Plant Oil aus Cabbage Seeds (80) und Tomato Seeds (60), der Fermenter Ethanol aus Tomaten (80), die Metal Press Kürbisse zu Scheiben.</p>`,
    },
    {
      t: "Mekanism und Alex's Mobs", x: true,
      text: `<p>Mekanism bringt eigene Rezepte für Farmer's Delight mit (siehe Mekanism-Seite). Alex's Delight kocht im Cooking Pot von Farmer's Delight (siehe Alex's-Mobs-Seite).</p>`,
    },
  ],
  foot: "Quellen: FarmersDelight-1.20.1-1.3.4.jar, nethersdelight-1.20.1-4.0.jar, Engineers Delight 1.20.1 B.1.4.jar (Rezepte, Advancements, Loot-Modifier, Loot-Tabellen, Biome-Modifier, Tags, Sprachdateien), config/farmersdelight-common.toml der Testinstanz. Farmer's Delight bringt zusätzlich Rezepte für Create und Silent Gear mit, die im Pack nicht installiert sind. Nicht ausgelesen: welche Mahlzeit welchen Effekt wie lange gibt, Sättigungswerte, Wachstumszeiten, wie schnell Kompost zerfällt, woher Hoglin Ear und Mimicarnation kommen, die Handelsangebote der Bauern.",
};
