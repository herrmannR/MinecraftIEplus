// Stand 2026-10-21, Minecraft 1.20.1. Quelle: Advancements, Rezepte, Loot-Modifier, Loot-Tabellen, Biome-Modifier, Tags,
// Spieß-Daten (grilling/skewers.json) und Sprachdateien (Ponder-Texte, Tooltips) aus kaleidoscopecookery-1.6.0-forge+mc1.20.1.jar,
// kaleidoscopetavern-1.2.0-forge+mc1.20.1.jar, kaleidoscope_grilling-1.1.1-forge1.20.1.jar, kaleidoscope_end-1.0.14-forge+mc1.20.1.jar
// und kaleidoscope_immersiveEating-forge1.20.1-1.5.1.jar. Kein Buch; die Ponder-Szenen brauchen den Mod Ponder, der im Pack fehlt.
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Kaleidoscope",
  title: "Kaleidoscope",
  accent: ["#e0855a", "#a24a22"],
  lede: "Chinesisch geprägte Küche mit Geräten, die man von Hand bedient: Mit dem Strohhut findet man im Gras neue Saaten, mit dem Küchenmesser Öl und Fleischteile, auf dem Herd stehen Wok, Suppentopf, Dampfgarer und Teekanne, ein angespannter Esel dreht den Mühlstein. Tavern ergänzt Weinreben, Kelter, Fass und Shaker, Grilling Grill, Spieße, Ölpresse und Gewürzflaschen, End Zutaten und Gerichte aus dem End bis zum Dragon Tooth Knife. Kein Buch; die Reihenfolge folgt den Advancement-Bäumen von Cookery, Grilling und End, Tavern hat keine Advancements.",
  mods: [
    ["Kaleidoscope Cookery", "1.6.0", "main"],
    ["Kaleidoscope Tavern", "1.2.0", "addon"],
    ["Kaleidoscope Grilling", "1.1.1", "addon"],
    ["Kaleidoscope End", "1.0.14", "addon"],
    ["Kaleidoscope: ImmersiveEating", "1.5.1", "addon"],
  ],
  phases: [
    {
      t: "Feld und Messer",
      sub: "Advancements „Become the Pirate King!“, „Seed Project“, „Even a Kung Fu Master Would Fear the Kitchen Knife“ und „Intensive Farming“. Alles beginnt mit einem Strohhut aus Weizen.",
      steps: [
        {
          t: "Straw Hat und neue Saaten",
          items: [
            ["kaleidoscope_cookery:item/straw_hat", "Straw Hat", "4 Wheat + 1 String"],
            ["kaleidoscope_cookery:item/straw_hat_flower", "Flowery Straw Hat", "Straw Hat + 8 Blumen"],
            ["kaleidoscope_cookery:item/tomato_seed", "Tomato Seed", "Gras, 12,5 %"],
            ["kaleidoscope_cookery:item/chili_seed", "Chili Seed", "Gras, 12,5 %"],
            ["kaleidoscope_cookery:item/lettuce_seed", "Lettuce Seed", "Gras, 12,5 %"],
            ["kaleidoscope_cookery:item/wild_rice", "Wild Rice Seed", "Gras, 12,5 %"],
            ["kaleidoscope_cookery:item/tea_seed", "Tea Seed", "Gras, 12,5 %"],
          ],
          text: `<p>„When worn, breaking grass drops seeds from this mod.“ Mit dem Hut auf dem Kopf gibt jedes abgebaute Gras mit je 12,5 % eine der fünf Saaten, mit 2 % auch Beetroot-, Pumpkin- und Melon Seeds (Loot-Modifier <code>straw_hat_seed_drop</code>). Grilling hängt drei weitere Pflanzen an denselben Weg: Onion, Canola Seeds und Sweet Potato „May drop when breaking grass while wearing a Kaleidoscope Cookery straw hat“.</p>
<p>Aus geernteten Tomaten und Chilis macht man in der Werkbank wieder Saatgut (1 Tomato zu 1 Tomato Seed, Green oder Red Chili zu 1 Chili Seed).</p>`,
          needs: [["Wheat", "v", "4"], ["String", "v"], ["Gras", "v"]],
        },
        {
          t: "Feldfrüchte und Reisfeld",
          items: [
            ["kaleidoscope_cookery:item/tomato", "Tomato", "reif: Tomato + Tomato Seed"],
            ["kaleidoscope_cookery:item/red_chili", "Red Chili", "reif; 20 % zusätzlich Green Chili"],
            ["kaleidoscope_cookery:item/green_chili", "Green Chili", "Nebenernte der Chili"],
            ["kaleidoscope_cookery:item/lettuce", "Lettuce", "reif; 10 % Caterpillar"],
            ["kaleidoscope_cookery:item/rice_panicle", "Rice Panicle", "reifer Reis"],
            ["kaleidoscope_cookery:item/rice", "Rice Seed", "Mühlstein: Rice Panicle zu 3"],
            ["kaleidoscope_cookery:item/fresh_tea_leaves", "Fresh Tea Leaves", "Teestrauch, reif"],
            ["kaleidoscope_cookery:item/caterpillar", "Caterpillar", "beim Salat-Ernten"],
          ],
          text: `<p>Reis braucht ein Reisfeld: „Use a hoe to make farmland under water to create paddy fields for rice.“ Fische im Reisfeld (Cod, Salmon, Tropical Fish, Pufferfish, Tadpole, Axolotl) lassen ihn schneller wachsen. Die Ernte sind Rice Panicles; neun davon ergeben einen Straw Bale. Der Teestrauch (Tea Seed) gibt reif Fresh Tea Leaves, die man im Ofen, am Lagerfeuer oder auf dem Bamboo Tray trocknet.</p>
<p>Die Raupe ist Zutat (Fried Caterpillar, Raupen-Spieß) und Futter: an ein Küken verfüttert gibt sie das Advancement „High-Quality Protein“.</p>`,
          needs: [["Saaten", "m"], ["Hoe", "v"], ["Water", "v"]],
        },
        {
          t: "Kitchen Knife und Öl",
          items: [
            ["kaleidoscope_cookery:item/iron_kitchen_knife", "Iron Kitchen Knife", "3 Iron Ingot + 1 Stick"],
            ["kaleidoscope_cookery:item/gold_kitchen_knife", "Gold Kitchen Knife", "3 Gold Ingot + 1 Stick"],
            ["kaleidoscope_cookery:item/diamond_kitchen_knife", "Diamond Kitchen Knife", "3 Diamond + 1 Stick"],
            ["kaleidoscope_cookery:item/netherite_kitchen_knife", "Netherite Kitchen Knife", "Smithing Table: + Netherite Ingot"],
            ["kaleidoscope_cookery:item/oil", "Oil", "Messer an Schwein, Piglin, Hoglin"],
            ["kaleidoscope_cookery:block/oil_block", "Oil Block", "9 Oil"],
          ],
          text: `<p>Das Küchenmesser ist Waffe und Werkzeug. Tötet man damit Pig, Piglin, Piglin Brute, Hoglin, Zombified Piglin oder Zoglin, fällt zusätzlich Oil. Öl ist der Einstieg in den Wok; eine zweite Quelle ist der Mühlstein (Samen zu Oil). Mit Grilling geben auch Kühe (Raw Cow Offal), Hühner (Chicken Wing) und Tintenfische (Squid Tentacle) Extrabeute, wenn man sie mit dem Messer tötet.</p>`,
          needs: [["Iron Ingot", "v", "3"], ["Stick", "v"]],
        },
        {
          t: "Sickle, Farmer-Kleidung und Scarecrow",
          items: [
            ["kaleidoscope_cookery:item/sickle", "Sickle", "3 Flint + 1 String + 2 Stick"],
            ["kaleidoscope_cookery:item/farmer_chest_plate", "Farmer's Overalls", "2 Iron Ingot + 6 Leather"],
            ["kaleidoscope_cookery:item/farmer_leggings", "Farmer's Work Pants", "1 Iron Ingot + 6 Leather"],
            ["kaleidoscope_cookery:item/farmer_boots", "Farmer's Boots", "2 Iron Ingot + 2 Leather"],
            ["kaleidoscope_cookery:item/scarecrow", "Scarecrow", "Straw Hat + Straw Bale + Pumpkin + 2 Stick"],
          ],
          text: `<p>Die Sichel erntet Felder mit Rechtsklick und entfernt Unkraut. Das vollständige Farmer-Set „greatly increase[s] movement speed in water“. Die Vogelscheuche „protect[s] surrounding farmland“; sie trägt Schädel, Laternen oder Werkzeuge.</p>`,
          needs: [["Leather", "v"], ["Iron Ingot", "v"], ["Straw Bale", "m"]],
        },
      ],
    },
    {
      t: "Herd und Brett",
      sub: "Advancements „Heat Up the Wok“ und „Chop! Chop! Chop!“. Alle Kochgeräte stehen auf einer Hitzequelle.",
      steps: [
        {
          t: "Stove",
          pics: [["kaleidoscope_cookery:block/stove_front_lit", "Stove, angezündet"]],
          items: [
            ["kaleidoscope_cookery:block/stove_front", "Stove", "8 Cobblestone + 1 Campfire oder Soul Campfire"],
          ],
          text: `<p>„Heat source for cookware lit with flint and steel.“ Neben dem Herd gelten Fire, Soul Fire, Lava, Magma Block und alles im Tag <code>farmersdelight:heat_sources</code> als Hitzequelle; der Herd selbst steht auch in diesem Farmer's-Delight-Tag. Der Herd ist außerdem der Arbeitsplatz des Kochs (Chef) im Dorf.</p>`,
          needs: [["Cobblestone", "v", "8"], ["Campfire", "v"], ["Flint and Steel", "v"]],
        },
        {
          t: "Chopping Board",
          items: [
            ["kaleidoscope_cookery:block/chopping_board", "Chopping Board", "6 Holz-Druckplatten"],
            ["kaleidoscope_cookery:item/raw_lamb_chops", "Raw Lamb Chops", "Raw Mutton zu 3"],
            ["kaleidoscope_cookery:item/raw_pork_belly", "Raw Pork Belly", "Raw Porkchop zu 3"],
            ["kaleidoscope_cookery:item/raw_cut_small_meats", "Raw Meat Cuts", "Raw Chicken oder Rabbit zu 3 + Bone"],
            ["kaleidoscope_cookery:item/raw_cow_offal", "Raw Cow Offal", "Raw Beef zu 3"],
            ["kaleidoscope_cookery:item/sashimi", "Sashimi", "Raw Cod, Salmon, Tropical Fish zu 3"],
            ["kaleidoscope_cookery:item/raw_noodles", "Raw Noodles", "Teig zu 3"],
          ],
          text: `<p>„Use with kitchen knife to cut meat.“ Das Brett braucht vier Messerschnitte je Stück und gibt meist drei Teile. Gekochtes Fleisch lässt sich ebenso zerteilen (Cooked Lamb Chops, Cooked Pork Belly, Cooked Meat Cuts, Cooked Cow Offal); gebratener Kabeljau und Lachs geben 3 Bone. Grilling ergänzt Carrot Dice, Potato Slice, Raw Mantou Slice, Minced Houttuynia und Raw Sweet Potato Sheet und ändert das Rindfleisch-Rezept: Raw Beef gibt dann 2 Beef Chunks statt Innereien.</p>`,
          needs: [["Kitchen Knife", "m"], ["Wooden Pressure Plate", "v", "6"]],
        },
      ],
    },
    {
      t: "Die Kochgeräte",
      sub: "Advancements „First Steps of Stir-Frying“, „First Steps of Soup Making“, „996“ und „First Steps of Steaming“. Die Bedienung steht in den Ponder-Texten und Tooltips.",
      steps: [
        {
          t: "Wok und Kitchen Shovel",
          pics: [["kaleidoscope_cookery:item/pot_has_oil", "Wok mit Öl"]],
          items: [
            ["kaleidoscope_cookery:item/pot_no_oil", "Wok", "7 Iron Ingot"],
            ["kaleidoscope_cookery:item/kitchen_shovel_no_oil", "Kitchen Shovel", "1 Iron Ingot + 1 Iron Nugget + 1 Stick"],
            ["kaleidoscope_cookery:item/enamel_basin", "Grease Crock", "Stone Button + Heavy Weighted Pressure Plate + Bucket"],
            ["kaleidoscope_cookery:block/oil_pot_with_oil", "Oil Can", "Heavy Weighted Pressure Plate + Bucket + Stick"],
            ["kaleidoscope_cookery:item/recipe_item_no_recipe", "Recipe", "4 Paper"],
          ],
          text: `<p>Ablauf laut Ponder: Wok auf die Hitzequelle, Öl hinein (Oil, Oil Can oder eine gefettete Kitchen Shovel aus der Grease Crock), Zutaten dazu, dann mit der Kitchen Shovel rühren; nach genug Rührschlägen (meist 3) und etwas Zeit ist das Gericht fertig und wird mit einer Schale (meist Bowl) aufgenommen. „Cooking will fail if you use the wrong ingredients or take too long“ – das Ergebnis ist dann Suspicious Stir-Fry. Wer falsche Zutaten wieder herausnimmt, verbrennt sich.</p>
<p>Es gibt feste Rezepte (genaue Mengen, 27 Gerichte) und „Flex Recipes“ mit weniger festen Zutaten. Daneben brät der Wok rohes Fleisch, Eier und Kartoffeln (1 bis 4 Stück). Ein Recipe speichert den Inhalt eines Woks oder Suppentopfs und füllt ihn später mit einem Klick aus dem Inventar.</p>`,
          table: {
            head: ["Gericht", "Hauptzutaten (fest)"],
            rows: [
              ["kaleidoscope_cookery:item/scramble_egg_with_tomatoes", "Scramble Egg with Tomatoes", "3 Eier + 3 Tomaten"],
              ["kaleidoscope_cookery:item/egg_fried_rice", "Egg Fried Rice", "2 Eier + Cooked Rice"],
              ["kaleidoscope_cookery:item/braised_beef", "Braised Beef", "3 Rindfleisch + 3 Red Chili"],
              ["kaleidoscope_cookery:item/sweet_and_sour_pork", "Sweet and Sour Pork", "3 Schwein + 3 Sugar"],
              ["kaleidoscope_cookery:item/stir_fried_pork_with_peppers", "Stir-fried Pork with Peppers", "3 Schwein + 3 Green Chili"],
              ["kaleidoscope_cookery:item/fish_flavored_shredded_pork", "Fish Flavored Shredded Pork", "2 Schwein + 2 Pilze + 2 Chili"],
              ["kaleidoscope_cookery:item/dongpo_pork", "Dongpo Pork", "6 Schwein + 2 Bamboo"],
              ["kaleidoscope_cookery:item/crystal_lamb_chop", "Crystal Lamb Chop", "3 Hammel + 3 Amethyst Shard"],
              ["kaleidoscope_cookery:item/blaze_lamb_chop", "Blaze Lamb Chop", "3 Hammel + 3 Blaze Powder"],
              ["kaleidoscope_cookery:item/frost_lamb_chop", "Frost Lamb Chop", "3 Hammel + 3 Blue Ice"],
              ["kaleidoscope_cookery:item/sweet_and_sour_ender_pearls", "Sweet and Sour Ender Pearls", "2 Ender Pearl + Eye of Ender"],
              ["kaleidoscope_cookery:item/donkey_burger", "Donkey Burger", "2 Teig + 2 Raw Meat Cuts + 2 Chili"],
            ],
          },
          needs: [["Iron Ingot", "v", "7"], ["Oil", "m"], ["Bowl", "v"]],
        },
        {
          t: "Stockpot",
          pics: [["kaleidoscope_cookery:block/stockpot", "Stockpot"]],
          items: [
            ["kaleidoscope_cookery:block/stockpot", "Stockpot", "5 Iron Ingot + 2 Brick"],
            [null, "Stockpot Lid", "3 Iron Ingot + 1 Brick; auch Schild"],
            ["kaleidoscope_cookery:item/cooked_rice", "Cooked Rice", "Reis + Wasser"],
            ["kaleidoscope_cookery:item/borscht", "Borscht", "Ziel „Apprentice Chef“"],
          ],
          text: `<p>Ablauf laut Ponder: Topf auf die Hitzequelle, erst die Suppenbasis, dann die Zutaten, Deckel drauf, warten, Deckel ab und mit der Schale schöpfen. „Opening lid pauses cooking. Wrong steps result in suspicious stew.“ Die Basis entscheidet das Gericht: Water (71 Rezepte), Lava (17, etwa Hot Dry Noodles, Numbing Spicy Chicken, Shengjian Mantou), Milk (9, etwa Clay Pot Milk Tea), dazu Fischeimer (Cod, Salmon, Tropical Fish, Pufferfish) für Seafood Miso Soup und Pufferfish Soup. Wer bei Lava-Basis falsche Zutaten herausnimmt, verbrennt sich.</p>
<p>Der Topf kocht Reis (1 bis 9 Rice zu Cooked Rice), Dumpling, Cooked Zongzi und Tea Egg ohne Schale, Pot Soups in einen Flower Pot. Cooked Rice macht aus fünf Wok-Gerichten ein „… on Rice“.</p>`,
          table: {
            head: ["Suppe", "Zutaten (Basis Wasser)"],
            rows: [
              ["kaleidoscope_cookery:item/borscht", "Borscht", "2 Rindfleisch + 4 Tomaten"],
              ["kaleidoscope_cookery:item/beef_noodle", "Beef Noodle", "4 Rindfleisch + 3 Raw Noodles"],
              ["kaleidoscope_cookery:item/pork_bone_soup", "Pork Bone Soup", "7 Bone"],
              ["kaleidoscope_cookery:item/chicken_and_mushroom_stew", "Chicken and Mushroom Stew", "2 Huhn + 3 Pilze"],
              ["kaleidoscope_cookery:item/lamb_and_radish_soup", "Mutton and Radish Soup", "2 Hammel + 3 Carrot"],
              ["kaleidoscope_cookery:item/laba_congee", "Laba Congee", "6 Samen + 3 Sugar"],
              ["kaleidoscope_cookery:item/buddha_jumps_over_the_wall", "Buddha Jumps Over the Wall", "Eier, Phantom Membrane, Lettuce …; im Flower Pot"],
            ],
          },
          needs: [["Iron Ingot", "v", "8"], ["Brick", "v", "3"], ["Water Bucket", "v"]],
        },
        {
          t: "Millstone",
          pics: [["kaleidoscope_cookery:item/millstone", "Millstone"]],
          items: [
            ["kaleidoscope_cookery:item/millstone", "Millstone", "Grindstone + 3 Smooth Stone + Holzzaun + Stick"],
            ["kaleidoscope_cookery:item/flour", "Flour", "Wheat"],
            ["kaleidoscope_cookery:item/raw_dough_0", "Raw Dough", "Flour + Water Bucket"],
            ["kaleidoscope_cookery:item/oil", "Oil", "Samen (#forge:seeds)"],
          ],
          text: `<p>„Certain animals placed above the millstone will be harnessed to drive it“; das Advancement „996“ nennt den Esel. Spieler lassen sich nicht anspannen. Zutaten legt man per Rechtsklick ein oder lässt sie von oben hineinfallen; nach einer vollen Umdrehung kommt das Ergebnis aus der Öffnung.</p>
<p>Neben Mehl, Öl, Reis aus Rispen und Farbstoffen aus Blumen <b>verdoppelt und verdreifacht der Mühlstein Erze</b>: Iron und Gold Ore zu 3 Raw, Copper Ore zu 5 Raw Copper, Diamond- und Emerald Ore zu 2, Redstone- und Lapis Ore zu 7, Nether Gold Ore zu 5 Gold Nugget, Nether Quartz Ore zu 3. Dazu Stein zu poliertem Stein, Wolle zu 3 String, Flint zu Gunpowder, Bone zu 5 Bone Meal.</p>
<p>Teig (Raw Dough) zieht man mit gehaltenem Rechtsklick zu Nudeln („La La La La La La Noodles“) oder schneidet ihn auf dem Brett zu 3 Raw Noodles. Mit Fleisch und Gemüse wird er zu Stuffed Dough, der Grundlage für Baozi, Dumpling, Samsa, Meat Pie und Shengjian Mantou.</p>`,
          needs: [["Grindstone", "v"], ["Smooth Stone", "v", "3"], ["Donkey", "v", "oder anderes Tier"]],
        },
        {
          t: "Steamer",
          items: [
            ["kaleidoscope_cookery:item/steamer_no_items", "Steamer", "3 Bamboo Trapdoor + 3 Block of Bamboo"],
            ["kaleidoscope_cookery:item/baozi", "Baozi", "Stuffed Dough, 1200 Ticks"],
            ["kaleidoscope_cookery:item/mantou", "Mantou", "Teig"],
            ["kaleidoscope_cookery:item/qingtuan", "Qingtuan", "Slimeball"],
            ["kaleidoscope_cookery:item/bamboo_tube_rice", "Bamboo Tube Rice", "Bamboo + Reis + Fleisch"],
          ],
          text: `<p>Dampfgarer stapelt man auf der Hitzequelle; „a single heat source can only provide heat for up to 8 steamers“. Zutaten von oben einlegen, Deckel per Rechtsklick schließen, nach dem Garen Lage für Lage abnehmen. Gefüllte Dampfgarer gibt es auch aus der Werkbank (Steamer + 4 Raw Dough bzw. 4 Stuffed Dough). Ein Baozi, schleichend nach einem Wolf geworfen, heilt ihn.</p>`,
          needs: [["Bamboo", "v"], ["Raw Dough", "m"]],
        },
        {
          t: "Teapot und Tee",
          items: [
            ["kaleidoscope_cookery:item/teapot", "Teapot", "6 Copper Ingot + 1 Bucket"],
            ["kaleidoscope_cookery:item/dried_tea_leaves", "Dried Tea Leaves", "Fresh Tea Leaves trocknen"],
            ["kaleidoscope_cookery:item/tieguanyin_tea_bag", "Tieguanyin Tea Bag", "8 Dried Tea Leaves + Iron Nugget"],
            ["kaleidoscope_cookery:item/tieguanyin", "Tieguanyin", "Teapot, Wasser"],
            ["kaleidoscope_cookery:item/empty_cup", "Empty Teacup", "Flower Pot"],
          ],
          text: `<p>Die Teekanne braucht eine Hitzequelle, mindestens 1000 mB Flüssigkeit (Wasser, für Butter Tea Milch) und einen Teebeutel; ein Aufguss dauert 240 Sekunden. Sechs Beutel unterscheiden sich in der Zutat zu den 8 Dried Tea Leaves: Wheat Seeds (Wheat Aroma Oolong Tea), Nautilus Shell (Biluochun), Oil (Butter Tea), Dragon's Breath (Dong Ding Oolong Tea), Pink Petals (Sakura Fubuki), Iron Nugget (Tieguanyin). Flower Tea entsteht aus Blüten. Im Stockpot ergeben Teebeutel mit Milch Clay Pot Milk Tea, der alle schädlichen Effekte entfernt.</p>`,
          needs: [["Copper Ingot", "v", "6"], ["Tea Seed", "m"]],
        },
        {
          t: "Bamboo Tray und Shawarma Spit",
          items: [
            ["kaleidoscope_cookery:block/bamboo_tray", "Bamboo Tray", "4 String + 1 Bamboo Trapdoor"],
            ["kaleidoscope_cookery:item/shawarma_spit", "Shawarma Spit", "4 Chain + 2 Campfire"],
          ],
          text: `<p>Das Bambustablett trocknet bei klarem Himmel (1800 Ticks: Tee, Kelp, Mud zu Clay, Rotten Flesh zu Leather, Wet Sponge) und befeuchtet bei Regen (900 Ticks: Concrete Powder zu Concrete, Copper zu Oxidized Copper, Dirt zu Mud).</p>
<p>Der Drehspieß hat zwei Lagen mit je bis zu 8 gleichen Lebensmitteln, die man im Ofen braten könnte. Ein Redstone-Signal schaltet ihn ein. Wer das Essen mit bloßer Hand vom laufenden Spieß nimmt, verbrennt sich; sicher geht es mit dem Küchenmesser oder nach dem Abschalten.</p>`,
          needs: [["Bamboo", "v"], ["Chain", "v", "4"], ["Redstone", "v"]],
        },
      ],
    },
    {
      t: "Gerichte und Dorf",
      sub: "Advancements „Apprentice Chef“, „Dark Cuisine“ und „Lunch Bag!“. Was man mit den Geräten kocht, und wo der Koch wohnt.",
      steps: [
        {
          t: "Platten, Effekte und Lunch Bag",
          items: [
            ["kaleidoscope_cookery:item/baozi_plate", "Plate of Baozi", "5 Baozi + Bowl, aufstellbar"],
            ["kaleidoscope_cookery:item/golden_salad", "Golden Salad", "2 Golden Apple, 2 Golden Carrot, 2 Glistering Melon Slice"],
            ["kaleidoscope_cookery:item/transmutation_lunch_bag_no_items", "Transmutation Lunch Bag", "6 Leather + Amethyst Shard"],
            ["kaleidoscope_cookery:item/dark_cuisine", "Dark Cuisine", "misslungenes Gericht"],
          ],
          text: `<p>Viele Gerichte lassen sich als Platte aufstellen (Baozi, Qingtuan, Zongzi, Sticky Candy, Sticky Rice Cake, Shengjian Mantou, Obstplatten). Gerichte haben eine Qualität (Poor bis Superb) und geben eigene Effekte, darunter Flatulence (Aufsteigen in die Luft, Advancements bis 3000 Blöcke), Warmth, Tundra Strider, Satiation Shield, Vigor, Projectile Dodge und Instant Smelting. Welcher Effekt zu welchem Gericht gehört, ist nicht ausgelesen.</p>
<p>Der Lunch Bag „Stores food and potions“ und isst per Rechtsklick, bis der Hunger voll ist.</p>`,
          needs: [["Bowl", "v"], ["Leather", "v", "6"]],
        },
        {
          t: "Chef und Dorfküchen",
          items: [
            ["kaleidoscope_cookery:block/stove_front_lit", "Stove", "Arbeitsplatz des Chef"],
          ],
          text: `<p>Cookery fügt den Dorfberuf Chef hinzu (Arbeitsplatz: Stove) und fünf Dorfhäuser (<code>plains/desert/savanna/snowy/taiga_kitchen</code>). Die Dorftruhe enthält Tomaten, Chilis, Oil, Saaten, Reis, Straw Bale, Recipe, Iron Kitchen Knife und Straw Hat, eine versteckte Truhe fertige Suppen. Die Handelsangebote des Kochs stehen im Code und sind nicht ausgelesen.</p>`,
        },
      ],
    },
    {
      t: "Taverne",
      sub: "Kaleidoscope Tavern, ohne Advancements; Reihenfolge nach den Ponder-Texten. Vom Weinstock über die Kelter ins Fass.",
      steps: [
        {
          t: "Grapevine und Trellis",
          addon: "Kaleidoscope Tavern",
          items: [
            ["kaleidoscope_tavern:item/grapevine", "Grapevine", "wild an Eichen"],
            ["kaleidoscope_tavern:block/plant/trellis", "Trellis", "3 Grapevine zu 8"],
            ["kaleidoscope_tavern:item/grape", "Grape", "Boden unter dem Gerüst: Dirt, Gras"],
            ["kaleidoscope_tavern:item/ice_grape", "Ice Grape", "Ice oder Snow Block"],
            ["kaleidoscope_tavern:item/gold_grape", "Gold Grape", "Netherrack oder Magma Block"],
            ["kaleidoscope_tavern:item/green_grape", "Green Grape", "Zufall beim Ernten"],
          ],
          text: `<p>Wilde Reben hängen an Bäumen („Found under oak trees in the wild“); Knochenmehl auf einen Setzling nahe Blumen kann ebenfalls Reben erzeugen. Abbauen mit der Hand. Unter Blöcken gepflanzt wachsen sie nur nach unten, ohne Trauben; die Schere stoppt das.</p>
<p>Für Trauben setzt man die Rebe auf ein Trellis einen Block über dem Boden; sie wächst nach oben und dann seitlich über weitere Gerüste. Trauben hängen dort, wo unter dem Gerüst Luft ist. Der Block unter dem Gerüst bestimmt die Sorte. Ernte mit der Hand 1–2, mit der Schere 2–3 Trauben.</p>`,
          needs: [["Grapevine", "a"], ["Shears", "v"]],
        },
        {
          t: "Pressing Tub",
          addon: "Kaleidoscope Tavern",
          items: [
            ["kaleidoscope_tavern:block/brew/pressing_tub", "Pressing Tub", "1 Barrel zu 2"],
            ["kaleidoscope_tavern:item/grape_bucket", "Grape Bucket", "Grape Juice"],
          ],
          text: `<p>Man legt pressbare Früchte hinein und springt darauf; jedes Stück gibt 125 mB Saft (Grape, Ice Grape, Gold Grape, Green Grape, Sweet Berries, Glow Berries). Nicht pressbare Items verstreut das Springen. An einer Wand wird die Kelter schräg und dient nur noch als Ablage.</p>`,
          needs: [["Barrel", "v"], ["Trauben", "a"]],
        },
        {
          t: "Barrel und Tap",
          addon: "Kaleidoscope Tavern",
          items: [
            ["kaleidoscope_tavern:item/barrel", "Barrel", "9 Barrel"],
            ["kaleidoscope_tavern:item/tap", "Tap", "Lever + Hopper"],
            ["kaleidoscope_tavern:item/empty_bottle", "Empty Bottle", "Glass Bottle"],
            ["kaleidoscope_tavern:item/wine", "Wine", "Grape Juice"],
            ["kaleidoscope_tavern:item/vodka", "Vodka", "Wasser + Potato"],
            ["kaleidoscope_tavern:item/molotov", "Molotov Cocktail", "Lava"],
          ],
          text: `<p>Deckel auf, Flüssigkeit und Zutat hinein, Deckel zu, warten: „The longer it brews, the higher the quality of the wine.“ Rechtsklick zeigt den Fortschritt, unter dem Zapfhahn füllt man in eine Glasflasche ab. 25 Getränke; die Grundflüssigkeit entscheidet: Grape Juice (Wine, Champagne, Brandy, Carignan, Sakura Wine), Ice Grape Juice (Ice Wine, Sherry, Mother Snow …), Gold Grape Juice (Honey Wine, Miner's Star, Sunset Glow, Madame Shexiang), Wasser (Vodka, Whiskey, Rum), Lava (Molotov Cocktail). Jedes Getränk gibt einen Effekt (37 Einträge), etwa Slightly Tipsy, Long Reach, Tomb Raider, Zenith.</p>`,
          needs: [["Barrel", "v", "9"], ["Saft", "a"], ["Glass Bottle", "v"]],
        },
        {
          t: "Shaker und Cocktails",
          addon: "Kaleidoscope Tavern",
          items: [
            ["kaleidoscope_tavern:item/shaker", "Shaker", "1 Iron Ingot + 1 Bucket"],
            ["kaleidoscope_tavern:item/empty_glassware", "Empty Glassware", "3 Glass Pane"],
            ["kaleidoscope_tavern:item/mojito", "Mojito", "2 weiß + 1 grün"],
            ["kaleidoscope_tavern:item/bloody_mary", "Bloody Mary", "3 rot"],
          ],
          text: `<p>Der Shaker mischt drei Getränke zu einem Cocktail; die Rezepte verlangen Farben statt fester Getränke (Tags <code>cocktail_ingredient_*</code>): weiß Vodka, Whiskey, Rum, Potion; rot Plum Wine, Sweet Berry Wine, Red Queen; hellviolett Wine, Champagne, Sakura Wine, Brandy, Carignan; gold Honey Wine, Miner's Star u. a.; blau Ice Wine, Sherry u. a.; gelb Glowflower Brew, Luminous Bride; grün die zwei Weißweine. 12 Cocktails, dazu Signature und Mystery Cocktail.</p>`,
          needs: [["Iron Ingot", "v"], ["Getränke", "a"]],
        },
      ],
    },
    {
      t: "Grill und Spieße",
      sub: "Kaleidoscope Grilling, Advancements ab „Human Fireworks“. Neue Pflanzen, Öle und Gewürze rund um den Grill.",
      steps: [
        {
          t: "Neue Pflanzen",
          addon: "Kaleidoscope Grilling",
          items: [
            ["kaleidoscope_grilling:item/onion", "Onion", "Gras mit Strohhut"],
            ["kaleidoscope_grilling:item/canola_seeds", "Canola Seeds", "Gras mit Strohhut"],
            ["kaleidoscope_grilling:item/sweet_potato", "Sweet Potato", "Gras mit Strohhut"],
            ["kaleidoscope_grilling:block/pepper_sapling", "Pepper Sapling", "Pfefferbaum in Wäldern"],
            ["kaleidoscope_grilling:item/sichuan_pepper", "Sichuan Pepper", "vom Pfefferbaum"],
            ["kaleidoscope_grilling:item/houttuynia", "Houttuynia", "Netherfestungen und ihre Truhen"],
          ],
          text: `<p>Der Pfefferbaum wächst in allen Wald-Biomen (<code>#minecraft:is_forest</code>); Sichuan Pepper gibt es auch in Dörfern. Pepper Log zerfällt in der Werkbank zu 4 Oak Planks. Houttuynia trägt man für das Advancement „Nether Taste“ im Nether herum.</p>`,
          needs: [["Straw Hat", "m"]],
        },
        {
          t: "Grill und Skewer",
          addon: "Kaleidoscope Grilling",
          items: [
            ["kaleidoscope_grilling:block/grill", "Grill", "5 Iron Ingot + 2 Brick + Kohle"],
            ["kaleidoscope_grilling:item/raw_beef_skewer", "Raw Beef Skewer", "Beef Chunks + Red Chili + Beef Chunks"],
            ["kaleidoscope_grilling:item/skewer_recipe_book", "Skewer Recipe Book", "Recipe + roher Spieß"],
            ["kaleidoscope_grilling:item/advanced_rack", "Advanced Kitchen Rack", "Kitchenware Racks + 3 Iron Ingot + 3 Holzstufen"],
          ],
          text: `<p>„An unlimited-charcoal grill. Use a flint and steel to light it.“ Spieße baut man ohne Werkbank: Stick in die Zweithand, Zutaten der Reihe nach anklicken. 20 feste Spieße stehen in <code>grilling/skewers.json</code>, jeder mit Effekt beim Essen, etwa Beef (Strength 10 s), Pork Belly (Vigor 30 s), Squid Tentacle (Water Breathing 30 s), Mushroom (Night Vision 30 s), Golden (Golden Apple, Totem of Undying, Golden Carrot: Invincible 10 s). Eigene Mischungen ergeben einen Secret Mix Skewer; doppelte Zutaten senken den Nährwert. Auf dem Grill muss man die Spieße wenden.</p>
<p>Das Rezeptbuch speichert einen Spieß und baut ihn mit Stick in der Zweithand schnell nach. Heiß gegessen („Eat It Hot!“) halten Öl-bestrichene Spieße die „smoky warmth“.</p>`,
          needs: [["Iron Ingot", "v", "5"], ["Brick", "v", "2"], ["Stick", "v"]],
        },
        {
          t: "Ölpresse und Öle",
          addon: "Kaleidoscope Grilling",
          items: [
            ["kaleidoscope_grilling:item/canola_powder", "Canola Powder", "Mühlstein: Canola Seeds"],
            ["kaleidoscope_grilling:item/oil_cake", "Oil Cake", "8 Canola Powder + 1 Wheat"],
            ["kaleidoscope_grilling:block/oil_press", "Wooden Oil Press", "4 Logs + Iron Ingot + 2 Fences + Hopper"],
            ["kaleidoscope_grilling:block/big_vat", "Big Vat", "7 Brick + 1 Bucket"],
            ["kaleidoscope_grilling:item/canola_oil_bucket", "Canola Oil Bucket", "aus der Presse"],
            ["kaleidoscope_grilling:item/secret_chili_oil_bucket", "Chili Oil Bucket", "Canola Oil Bucket + 3 Red Chili Powder"],
            ["kaleidoscope_grilling:item/premium_chili_oil_bucket", "Magma Chili Oil Bucket", "Chili Oil + Lava + Redstone + Houttuynia Powder"],
            ["kaleidoscope_grilling:item/canola_oil_brush", "Canola Oil Brush", "Spieße bestreichen"],
          ],
          text: `<p>Die Presse nimmt genau 4 Oil Cakes und wird mit einem Amboss (+4 Fortschritt) geschlagen, früh auch mit Stein (+1; Stone, Cobblestone, Deepslate, Blackstone). Daneben muss ein Big Vat stehen, das das Öl auffängt; als Rest fällt Oil Residue. Die drei Öle halten die Wärme unterschiedlich lange („short time“, „longer“, „very long time“).</p>`,
          needs: [["Canola Seeds", "a"], ["Wheat", "v"], ["Anvil", "v"], ["Brick", "v", "7"]],
        },
        {
          t: "Gewürzflasche",
          addon: "Kaleidoscope Grilling",
          items: [
            ["kaleidoscope_grilling:item/green_chili_powder", "Green Chili Powder", "Mühlstein"],
            [null, "Red Chili Powder", "Mühlstein"],
            ["kaleidoscope_grilling:item/onion_powder", "Onion Powder", "Mühlstein"],
            ["kaleidoscope_grilling:item/totem_powder", "Totem Powder", "Mühlstein: Totem of Undying"],
            ["kaleidoscope_grilling:item/dragon_egg_powder", "Dragon Egg Powder", "nicht ausgelesen"],
            [null, "Empty Seasoning Bottle", "6 Glass + Holzknopf"],
          ],
          text: `<p>„Place it down, add seasonings, then pick it up and shake“: Die Flasche fasst bis zu acht Zutaten und wird 4 Sekunden geschüttelt. Drei Pflichtgewürze bilden die Basis („Three Flavors Base“; welche, zeigt JEI unter „Mixing Seasoning“, nicht ausgelesen). Zusätze geben Buffs: Redstone Tempo, Gunpowder Stärke, Houttuynia Powder Dauer, Totem Powder Totem-Wirkung, Dragon Egg Powder Vitality, Sichuan Pepper Taubheit. Mit Totem Powder droht Heavy Metal Poisoning.</p>`,
          needs: [["Chili", "m"], ["Onion", "a"], ["Glass", "v", "6"]],
        },
      ],
    },
    {
      t: "End",
      sub: "Kaleidoscope End, Advancements ab „Kaleidoscope: End“. Zutaten aus dem End und der Weg zum Dragon Tooth Knife.",
      steps: [
        {
          t: "Pflanzen und Beute im End",
          addon: "Kaleidoscope End",
          items: [
            ["kaleidoscope_end:item/ender_mint", "Ender Mint", "End-Biome"],
            ["kaleidoscope_end:item/dream_berry", "Dream Berry", "äußere End-Inseln"],
            ["kaleidoscope_end:item/end_caterpillar", "End Caterpillar", "Chorus Plant, 1 %"],
            ["kaleidoscope_end:item/chorus_seed", "Chorus Seed", "Brett: Chorus Fruit zu 2"],
            ["kaleidoscope_end:item/optic_nerve", "Optic Nerve", "Messer: Enderman"],
            ["kaleidoscope_end:item/raw_endermite_meat", "Raw Endermite Meat", "Messer: Endermite"],
            ["kaleidoscope_end:item/shulker_shell_meat", "Shulker Meat", "Messer: Shulker"],
            ["kaleidoscope_end:item/raw_ender_dragon_meat", "Raw Ender Dragon Meat", "Messer: Ender Dragon"],
            ["kaleidoscope_end:item/dragon_tooth", "Dragon Tooth", "Messer: Ender Dragon"],
          ],
          text: `<p>Ender Mint und Dream Berry wachsen in allen End-Biomen (<code>#minecraft:is_end</code>). Dream Berries geben den Effekt Dream („Walk through the air“). Wer End-Mobs mit dem Küchenmesser tötet, bekommt Fleisch und Teile für die End-Gerichte; der Drache gibt Fleisch und einen Zahn.</p>`,
          needs: [["Kitchen Knife", "m"], ["End", "v"]],
        },
        {
          t: "Abpinseln",
          addon: "Kaleidoscope End",
          items: [
            ["kaleidoscope_end:block/suspicious_end_stone_0", "Suspicious End Stone", "im End-Stein, drei Größen"],
            ["kaleidoscope_end:block/suspicious_purpur_block_0", "Suspicious Purpur Block", "Beute nicht ausgelesen"],
            [null, "Suspicious Dragon Egg", "Dragon Egg abpinseln"],
            ["kaleidoscope_end:item/void_conch", "Void Conch", "aus Suspicious End Stone"],
            ["kaleidoscope_end:item/dragon_dust", "Dragon Dust", "aus dem Drachenei"],
            ["kaleidoscope_end:item/dragon_egg_liquid", "Dragon Egg Liquid", "aus dem Drachenei"],
          ],
          text: `<p>Mit dem Pinsel (Brush) gibt Suspicious End Stone Diamond, Void Conch, Enchanted Book oder Gold Ingot (Archäologie-Tabelle), das Drachenei Dragon Egg Liquid und Dragon Dust. Die Void Conch führt zu Void Conch Noodle Soup und dem Effekt Void Erosion („Boundary of Death“).</p>`,
          needs: [["Brush", "v"], ["Dragon Egg", "v"]],
        },
        {
          t: "Dragon Egg Shell und Dragon Tooth Knife",
          addon: "Kaleidoscope End",
          items: [
            ["kaleidoscope_end:item/dragon_egg_shell", "Dragon Egg Shell", "3 Obsidian + Dragon Dust"],
            ["kaleidoscope_end:item/ender_dragon_smithing_template", "Smithing Template", "7 Obsidian + Netherite Upgrade + Dragon Dust"],
            ["kaleidoscope_end:item/dragon_tooth_knife", "Dragon Tooth Knife", "Netherite Kitchen Knife + Dragon Dust"],
            ["kaleidoscope_end:block/end_stove_front_lit", "End Stove", "8 End Stone Bricks + Campfire"],
          ],
          text: `<p>Die Eierschale ist Gefäß für die großen Drachengerichte (Dragon Egg Stew, Dragon Egg Custard; Ziel „Feast on Dragons“). Das Messer aus Drachenzahn „displays overwhelming sharpness against End creatures“. Drei Verzauberungen kommen dazu: Void Assault (Zufallsschaden mal Faktor), Void Echo (Flächenschaden), Void Walker (Gehen im Void).</p>`,
          table: {
            head: ["Gericht", "Gerät, Hauptzutaten"],
            rows: [
              ["kaleidoscope_end:item/dark_dragon_steak", "Dark Dragon Steak", "Wok, 6 Rührschläge: Drachenfleisch, 2 Optic Nerve, 3 Ender Mint"],
              ["kaleidoscope_end:item/dark_dragon_egg_stew", "Dragon Egg Stew", "Stockpot, in Dragon Egg Shell"],
              ["kaleidoscope_end:item/stuffed_shulker", "Stuffed Shulker", "Wok, in Shulker Shell"],
              ["kaleidoscope_end:item/void_conch_noodle_soup", "Void Conch Noodle Soup", "Stockpot: Void Conch, Eier, Nudeln"],
              ["kaleidoscope_end:item/ender_mint_tea", "Ender Mint Tea", "Teapot; auch Void Tea, Chorus Flower Tea, Ender Dragon Tea"],
            ],
          },
          needs: [["Obsidian", "v"], ["Dragon Dust", "a"], ["Netherite Kitchen Knife", "m"]],
        },
      ],
    },
  ],
  solo: [
    {
      t: "Küchenmöbel",
      items: [
        [null, "Oak Chair", "Stühle, Tische, Cook's Stools je Holzart"],
        [null, "Long Bench", "3 Oak Planks + 2 Oak Fence + Stick"],
        [null, "Eight Immortals Table", "4 Oak Fence + 5 Oak Planks"],
        ["kaleidoscope_cookery:item/fruit_basket", "Fruit Basket", "8 Stapel wie eine Shulker Box"],
        ["kaleidoscope_cookery:item/kitchenware_racks", "Kitchenware Racks", "hängt Küchengeräte auf"],
        ["kaleidoscope_cookery:block/trash_can", "Trash Can", "8 Iron Ingot + Composter; sitzbar"],
        [null, "Red Lantern", "4 Paper + Chain + 3 Red Dye + Candle"],
        ["kaleidoscope_cookery:item/tea_banner", "Tea Banner", "6 Red Wool + Stick"],
        [null, "Chili Ristra", "6 Red Chili"],
        [null, "Strung Mushrooms", "6 Brown Mushroom"],
      ],
    },
    {
      t: "Tavernen-Einrichtung", addon: "Kaleidoscope Tavern",
      items: [
        [null, "White Sofa", "Sofas und Bar Stools in 16 Farben"],
        ["kaleidoscope_tavern:block/deco/bar_counter", "Bar Counter", "3 Gold Nugget + 6 Planks"],
        [null, "Bar Cabinet", "8 Grapevine; auch Glass Bar und Cellar Cabinet"],
        ["kaleidoscope_tavern:block/deco/tilted_rack", "Tilted Rack", "Flaschenregal; auch Circular Rack, Bottle Holder"],
        ["kaleidoscope_tavern:item/chalkboard", "Chalkboard", "8 Ink Sac + Schild"],
        [null, "Sandwich Board", "Aufsteller mit Blume"],
        [null, "String Lights (Colorless)", "Lichterketten in Farben"],
        [null, "Painting", "Gemälde"],
        ["kaleidoscope_tavern:item/sakura_incense", "Sakura Incense", "acht Räucherstäbchen"],
        ["kaleidoscope_tavern:item/bell_pendant_lamp", "Bell Pendant Lamp", "Hängelampen"],
        ["kaleidoscope_tavern:item/stepladder", "Stepladder", "6 Ladder"],
      ],
    },
    {
      t: "Ess-Animationen", addon: "Kaleidoscope: ImmersiveEating",
      text: `<p>ImmersiveEating (Mod-ID <code>food</code>) bringt nur Animationen und Modelle für das Essen (Ordner <code>geo</code>, <code>animations</code>), keine Items und keine Daten.</p>`,
    },
  ],
  bridges: [
    {
      t: "Farmer's Delight", x: true,
      text: `<p>Kaleidoscope Cookery trägt seinen Stove in den Tag <code>farmersdelight:heat_sources</code> ein und nimmt umgekehrt alles aus diesem Tag als Hitzequelle; Reis lässt sich auch auf Rich Soil Farmland von Farmer's Delight pflanzen. Beide Mods haben eigene Tomaten, Reis, Spiegelei, Teig, Nudeln, Messer, Herd und Schneidebrett; die Rezepte nehmen die Zutaten über Forge-Tags (<code>#forge:crops/tomato</code>, <code>#forge:raw_pork</code>, <code>#forge:dough</code> …) an. Im Pack sind die Dopplungen per KubeJS zusammengeführt (siehe <code>docs/12_CHANGELOG.md</code>, 2026-10-20).</p>`,
    },
    {
      t: "Create (nicht installiert)", addon: "Kaleidoscope Grilling", x: true,
      text: `<p>Grilling bringt Rezepte für Millstone, Crushing Wheels, Mixer und Spout von Create mit (Pulver, Öle, Abfüllen); Create fehlt im Pack, sie gelten nicht. Ebenso ohne Wirkung sind die Tags für Diet, Serene Seasons, Ecliptic Seasons und FTB Ultimine. Tavern trägt Getränke in Curios-Tags ein (Curios ist installiert).</p>`,
    },
    {
      t: "Erze ohne Maschine", x: true,
      text: `<p>Der Mühlstein vervielfacht Erzblöcke ohne Strom und ohne Erzmod: Iron und Gold Ore zu 3 Raw, Copper Ore zu 5 Raw Copper, Diamond zu 2. Er steht damit neben den Erzketten von IE und Mekanism (siehe <code>CROSSMOD_AUFFAELLIGKEITEN.md</code> Ü2). Mod-Erze (Osmium, Silber, Nickel …) hat er nicht.</p>`,
    },
  ],
  foot: "Quellen: kaleidoscopecookery-1.6.0, kaleidoscopetavern-1.2.0, kaleidoscope_grilling-1.1.1, kaleidoscope_end-1.0.14, kaleidoscope_immersiveEating-1.5.1 (Rezepte, Advancements, Loot-Modifier, Loot-Tabellen, Biome-Modifier, Tags, grilling/skewers.json, Sprachdateien mit Ponder-Texten und Tooltips). Grilling bringt seine Daten doppelt mit (Ordner im 1.20.1- und im 1.21-Format); gelesen sind die 1.20.1-Ordner. Die Ponder-Szenen erscheinen im Spiel nicht, weil der Mod Ponder fehlt. Nicht ausgelesen: Effekte und Dauer je Gericht und Getränk (außer Spießen), Sättigung, Wachstumszeiten, Handel des Chef, die drei Pflichtgewürze der Gewürzflasche, Herkunft des Dragon Egg Powder, Beute des Suspicious Purpur Block, wo die Wildreben genau entstehen (im Code).",
};
