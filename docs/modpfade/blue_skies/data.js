// Stand 2026-10-15, Minecraft 1.20.1. Quelle: blue_skies-1.20.1-1.3.31.jar (Namespace blue_skies), Abhängigkeit structure_gel-1.20.1-2.16.2.jar.
// Gelesen: Journal des Mods (data/blue_skies/blue_skies/journal, Texte in assets/blue_skies/blue_skies/journal_lang/en_us.json),
// Advancements, Rezepte samt eigener Rezeptordner (alchemy_recipes, horizonite_forge_fuels, snowcap_*), Loot-Tabellen (Kisten, Loot Bags),
// Tags, Weltgenerierung, Sprachdatei, Config blue_skies-common.toml der Testinstanz. Die Werkzeugrezepte und die Gatekeeper-Handel stehen nur im Code.
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const T = (head, kind) => `blue_skies:item/tools/handles/${kind === "sword" ? "handle_sword" : "handle"}+/item/tools/heads/${kind}/${head}`;
const PAGE = {
  pageTitle: "Modpfad Blue Skies",
  title: "Blue Skies",
  accent: ["#5cc8d8", "#1f7d8a"],
  lede: "Zwei eigene Dimensionen statt einer Technikkette: Vom Gatekeeper-Haus in der Oberwelt geht es durch Portale in das kalte, ewig helle Everbright und das heiße Everdawn bei ewigem Sonnenaufgang. Dort beginnt man wieder bei Holz und Stein, weil fremde Werkzeuge schwächer werden, arbeitet sich über eigene Metalle und Edelsteine hoch und besiegt in vier Dungeons die vier Bosse, die Arcs, Zauber und die Alchemy Table hinterlassen. Das Journal des Mods gibt die Reihenfolge vor: Seine Einträge öffnen sich beim Betreten der Welten und nach jedem Boss.",
  mods: [
    ["Blue Skies", "1.3.31", "main"],
    ["Structure Gel API", "2.16.2", "addon"],
  ],
  phases: [
    {
      t: "Gatekeeper und Portale",
      sub: "Journal, Teil „General“ und die Portal-Einträge beider Welten. Spielt in der Oberwelt; man braucht nur das, was im Haus des Gatekeepers liegt oder was er verkauft.",
      steps: [
        {
          t: "Gatekeeper's House",
          pics: [["blue_skies:gui/journal/icons/arcs", "Journal-Bild „Arcs“"]],
          items: [
            ["blue_skies:item/misc/blue_journal", "Blue Journal", "beim Gatekeeper zu kaufen; das Buch des Mods"],
            ["blue_skies:item/misc/zeal_lighter", "Zeal Lighter", "beim Gatekeeper zu kaufen, oder 1 Charoite + 1 Moonstone Shard, formlos"],
            ["blue_skies:block/stone/turquoise_stonebrick", "Turquoise Stone Bricks", "im Haus verbaut; Rahmen des Everbright-Portals"],
            ["blue_skies:block/stone/lunar_stonebrick", "Lunar Stone Bricks", "im Haus verbaut; Rahmen des Everdawn-Portals"],
          ],
          text: `<p>Das Haus des Gatekeepers ist eine Oberwelt-Struktur in drei Varianten (Ebene, Berg, Schnee); die Ebenen-Variante steht in Biomen mit Ebenen-Dorf und in Savannen, im Raster alle 33 Chunks, nicht nahe beim Spawn. Laut JEI-Hinweis des Mods stehen beide Portale schon im Haus, und die Steinziegel für eigene Portale findet man dort. Die Kisten enthalten Brot und Kleinkram, dazu je nach Variante einen Ventium Ingot, Snowcap Pinheads oder einen Moonstone Shard.</p>
<p>Der Gatekeeper verkauft das Blue Journal und den Zeal Lighter, der die Portale entzündet. Den Preis legt die Config fest (<code>zeal_lighter_cost = 8</code>); in welcher Währung, steht nur im Code und ist nicht ausgelesen. Später verkauft er auch Dungeon-Schlüssel (Schritt 11).</p>
<p>Das Journal hat drei Teile: General, Everbright, Everdawn. Ein Eintrag öffnet sich erst, wenn seine Bedingung erfüllt ist: die Welt betreten, den Blinding-Boss oder den zweiten Boss der Welt besiegt.</p>`,
          needs: [["Gatekeeper's House", "m", "Oberwelt"], ["Bezahlung beim Gatekeeper", "m", "nicht ausgelesen"]],
        },
        {
          t: "Everbright- und Everdawn-Portal",
          items: [
            ["blue_skies:item/misc/everbright_portal", "Everbright Portal Block", "Rahmen aus Turquoise Stone Bricks, mit Zeal Lighter entzündet"],
            ["blue_skies:item/misc/everdawn_portal", "Everdawn Portal Block", "Rahmen aus Lunar Stone Bricks, mit Zeal Lighter entzündet"],
            ["blue_skies:block/stone/turquoise_stone", "Turquoise Stone", "Gestein des Everbright; 4 ergeben 4 Turquoise Stone Bricks"],
            ["blue_skies:block/stone/lunar_stone", "Lunar Stone", "Gestein des Everdawn; 4 ergeben 4 Lunar Stone Bricks"],
          ],
          text: `<p><b>Everbright:</b> immer Tag, aber kalt, viel Schnee, große Tiere mit dichtem Fell und geisterhafte Gegner, die bei Schneefall häufiger werden. <b>Everdawn:</b> immer Sonnenaufgang, heiß und feucht; Insekten werden bei Regen zahlreicher, die Tiere sind meist Echsen.</p>
<p>Wer in beiden Welten war, bekommt „Now You're Thinking with Portals!“. Steinziegel lassen sich danach aus dem Gestein der Welten selbst herstellen, so dass man weitere Portale bauen kann.</p>`,
          needs: [["Turquoise Stone Bricks", "m"], ["Lunar Stone Bricks", "m"], ["Zeal Lighter", "m"]],
        },
        {
          t: "Neu anfangen: Holz, Stein und Sticks",
          items: [
            [T("bluebright", "pickaxe"), "Bluebright Wood Pickaxe", "Rezept im Code; Holzwerkzeug des Everbright"],
            [T("turquoise_stone", "pickaxe"), "Turquoise Stone Pickaxe", "Rezept im Code; Steinwerkzeug des Everbright"],
            [T("lunar_stone", "pickaxe"), "Lunar Stone Pickaxe", "Rezept im Code; Steinwerkzeug des Everdawn"],
            ["blue_skies:item/materials/bluebright_stick", "Bluebright Stick", "2 Bluebright Planks ergeben 4"],
            ["blue_skies:item/tools/spears/bluebright_spear", "Bluebright Spear", "1 Moonstone Shard + 2 Bluebright Stick"],
          ],
          text: `<p>Werkzeuge und Waffen von außerhalb arbeiten in den Welten schlechter; der Tooltip sagt dann „It seems this tool doesn't work as well here.“ Im Code hängt die Abschwächung am Boss-Fortschritt, einen Config-Schalter gibt es nicht (Projektbefund, im Spiel mit Tinkers-Werkzeugen bestätigt). Deshalb beginnt man mit Holz- und Steinwerkzeugen der Welten.</p>
<p>Jede Holzart der Welten gibt eigene Sticks, und der Stick im Werkzeug ändert dessen Werte (Journal „Stick Variations“). Die Faktoren stehen in <code>tool_handle_types</code>. Die Werkzeugrezepte sind ein eigener Rezepttyp, der nur im Code steht; welche Sticks sie annehmen, ist nicht ausgelesen. Später tauscht die Tool Box den Stick eines fertigen Werkzeugs (Schritt 4).</p>
<p>Speere sind laut Journal billig, wirken wie eine Mischung aus Dreizack und Bogen und funktionieren unter Wasser; Loyalty und Piercing lassen sich darauf verzaubern.</p>`,
          table: { head: ["Stick", "Angriffstempo", "Haltbarkeit", "Wurfschaden"], rows: [
            ["blue_skies:item/materials/bluebright_stick", "Bluebright Stick", "×1,00", "×1,00", "×1,00"],
            ["blue_skies:item/materials/lunar_stick", "Lunar Stick", "×1,00", "×1,00", "×1,00"],
            ["blue_skies:item/materials/frostbright_stick", "Frostbright Stick", "×1,05", "×1,10", "×0,90"],
            ["blue_skies:item/materials/maple_stick", "Maple Stick", "×1,05", "×1,10", "×0,90"],
            ["blue_skies:item/materials/comet_stick", "Comet Stick", "×1,05", "×1,20", "×0,90"],
            ["blue_skies:item/materials/starlit_stick", "Starlit Stick", "×0,95", "×0,90", "×1,10"],
            ["blue_skies:item/materials/dusk_stick", "Dusk Stick", "×0,95", "×0,90", "×1,10"],
            ["minecraft:item/stick", "Stick", "×1,00", "×1,00", "×1,00"],
          ] },
          needs: [["Holz der Welten", "m"], ["Turquoise Cobblestone, Lunar Cobblestone", "m"], ["Moonstone Shard", "m", "für Speere"]],
        },
      ],
    },
    {
      t: "Everbright: Ventium, Falsite, Snowcap",
      sub: "Journal, Teil „Everbright“, offen ab dem Betreten. Die Metalle liegen in den Biomen außerhalb der Berge.",
      steps: [
        {
          t: "Ventium und Tool Box",
          items: [
            ["blue_skies:block/ores/ventium_ore", "Ventium Ore", "Everbright, bis Y 63"],
            ["blue_skies:item/materials/ventium_ingot", "Ventium Ingot", "Raw Ventium oder Erz im Ofen (200 Ticks) oder Hochofen"],
            ["blue_skies:item/tools/ventium_bucket", "Ventium Bucket", "3 Ventium Ingot"],
            ["blue_skies:item/tools/ventium_shears", "Ventium Shears", "2 Ventium Ingot"],
            [null, "Tool Box", "2 Ventium Ingot + 4 Planks"],
          ],
          text: `<p>Ventium ist laut Journal das Eisen des Everbright: Eimer, Schere und die Tool Box entstehen daraus. Den Ventium Bucket gibt es mit Wasser, Lava, Milch und als Fischeimer für die Fische der Welten. Über Tags ersetzt Ventium Eisen auch in Vanilla-Rezepten des Mods: Anvil (3 Ventium-Blöcke + 4 Ventium Ingot), Stonecutter und Camel Saddle.</p>
<p>Die <b>Tool Box</b> verbessert Werkzeuge: Falsite erhöht die Haltbarkeit fast aller Werkzeuge der beiden Welten (der Tooltip zählt „Falsite uses“), und jeder Stick der Welten lässt sich in ein fertiges Werkzeug einsetzen.</p>`,
          needs: [["Raw Ventium", "m"], ["Planks", "v"]],
        },
        {
          t: "Falsite",
          items: [
            ["blue_skies:block/ores/falsite_ore", "Falsite Ore", "Everbright, bis Y 63"],
            ["blue_skies:item/materials/falsite_ingot", "Falsite Ingot", "Raw Falsite oder Erz im Ofen"],
            ["blue_skies:item/materials/falsite_nugget", "Falsite Nugget", "1 Ingot ergibt 9"],
          ],
          text: `<p>Falsite ist ein magisches Metall. Sein Hauptzweck ist die Tool Box; dazu ersetzt das Nugget Lapis Lazuli im Zaubertisch (Tag <code>forge:enchanting_fuels</code>). Laut Journal braucht man zum Verzaubern allein mit Material der Welten Charoite, Obsidian aus dem Everdawn und Falsite (Schritt 10).</p>`,
          needs: [["Raw Falsite", "m"]],
        },
        {
          t: "Snowcap Oven",
          items: [
            ["blue_skies:block/plants/snowcap_mushroom", "Snowcap Mushroom", "Brennstoff, kühlt die Umgebung"],
            ["blue_skies:block/plants/snowcap_pinhead", "Snowcap Pinhead", "4 ergeben 1 Snowcap Mushroom Block"],
            ["blue_skies:block/crafting/snowcap_oven_front", "Snowcap Oven", "3 Snowcap Mushroom Block + 5 Turquoise Cobblestone + 1 Furnace"],
          ],
          text: `<p>Der Snowcap Mushroom saugt Wärme auf. In der Welt kühlt er Blöcke ab: Lava und Magma erstarren, Feuer, Lagerfeuer und Laternen gehen aus, und ein Horizonite-Block wird zu einem Iron Block. Im Ofen brennt er wie Kohle.</p>
<p>Der Snowcap Oven kocht, indem er heißen Dingen die Wärme entzieht; dabei bleibt manchmal das gefrorene Nebenprodukt des Brennstoffs übrig. Er verbrennt Snowcap-Pilze (1600), Fackeln (300), Blaze-Teile, Lava- und Wassereimer und Laternen. Aus Horizonite wird dabei Eisen: Horizonite Ingot ergibt Iron Ingot (Wert 1600), Werkzeuge und Rüstung werden zu ihrem Eisen-Gegenstück, Raw Horizonite zu Raw Iron; ein Lavaeimer wird zu Obsidian, ein Wassereimer zu Eis.</p>`,
          needs: [["Snowcap Pinhead", "m", "12"], ["Turquoise Cobblestone", "m", "5"], ["Furnace", "v"]],
        },
        {
          t: "Warding Pearl",
          pics: [["blue_skies:gui/journal/icons/seclam", "Journal-Bild Seclam"]],
          items: [
            ["blue_skies:item/misc/pearl", "Pearl", "aus dem Maul eines Seclam in der Tiefsee"],
            ["blue_skies:item/misc/soul_fragment", "Soul Fragment", "von den Geistern des Everbright"],
            ["blue_skies:item/misc/warding_pearl", "Warding Pearl", "6 Falsite Nugget + 2 Soul Fragment + 1 Pearl"],
          ],
          text: `<p>In den Welten verhindert Licht (auch Moonstone) das Spawnen von Monstern nicht. Die Warding Pearl tut es in großem Umkreis. Die Pearl holt man aus einem Seclam: einige Male schlagen, bis er sich öffnet, dann schnell zugreifen. Soul Fragments lassen vor allem die Frost Spirits fallen; Pickaxes treffen deren Eispanzer besser als Schwerter.</p>`,
          needs: [["Falsite Nugget", "m", "6"], ["Soul Fragment", "m", "2"], ["Pearl", "m"]],
        },
      ],
    },
    {
      t: "Everdawn: Horizonite und Sunstone",
      sub: "Journal, Teil „Everdawn“, offen ab dem Betreten. Horizonite liegt tief in den heißen Biomen.",
      steps: [
        {
          t: "Horizonite",
          items: [
            ["blue_skies:block/ores/horizonite_ore", "Horizonite Ore", "Everdawn, bis Y 24"],
            ["blue_skies:item/materials/horizonite_ingot", "Horizonite Ingot", "Raw Horizonite oder Erz im Ofen"],
            [T("horizonite", "pickaxe"), "Horizonite Pickaxe", "Rezept im Code"],
            ["blue_skies:item/armor/horizonite_chestplate", "Horizonite Chestplate", "8 Horizonite Ingot"],
          ],
          text: `<p>Horizonite ist ein sehr heißes Metall aus Crystal Dunes, Crystal Roughs, Searing Grassland und Sunset Maple Forest. Werkzeuge daraus schmelzen abgebaute Erze sofort (Fähigkeit „Auto-Smelt“). Horizonite-Werkzeuge und -Rüstung lassen sich im Ofen zu Horizonite Nuggets einschmelzen; im Snowcap Oven werden sie zu Eisen.</p>`,
          needs: [["Raw Horizonite", "m"]],
        },
        {
          t: "Horizonite Forge",
          items: [
            ["blue_skies:block/crafting/horizonite_forge_front", "Horizonite Forge", "5 Horizonite Ingot + 1 Furnace + 3 Lunar Cobblestone"],
            ["blue_skies:block/misc/sunstone_crystal", "Sunstone Crystal", "Sunset Maple Forest, Searing Grassland; Brennstoff"],
          ],
          text: `<p>Die Forge schmilzt ohne Brennstoff, muss aber nachladen, und sie lädt nur, solange nichts darin gart. Sofort aufladen kann man sie mit allem aus Horizonite oder mit Sunstone. Die Ladewerte stehen in <code>horizonite_forge_fuels</code>: Horizonite Block 0,8, Sunstone Crystal 0,4, Horizonite Ingot 0,2, Horizonite Nugget 0,05 (Sunstone-Block und Raw Horizonite ebenfalls). Das Journal rät zu mehreren Forges.</p>
<p>Sunstone Crystals brennen auch in jedem normalen Ofen; 4 ergeben einen Block of Sunstone.</p>`,
          needs: [["Horizonite Ingot", "m", "5"], ["Lunar Cobblestone", "m", "3"], ["Furnace", "v"]],
        },
        {
          t: "Moonstone Shield",
          pics: [["blue_skies:gui/journal/icons/crystal_camel", "Journal-Bild Crystal Camel"]],
          items: [
            [null, "Vitreous Moonstone", "Drop des Crystal Camel"],
            ["blue_skies:item/tools/shields/moonstone", "Moonstone Shield", "6 Vitreous Moonstone + 1 Stick"],
          ],
          text: `<p>Der Moonstone Shield hält mehr aus als der Holzschild und ist durchsichtig. Schilde sind im Everdawn wichtig: Venom Spider, Emberback und die Pfeilbündel des Alchemist werden damit abgefangen, und laut Journal stoppen die Schilde des Everdawn den Diophyde Prowler. Gegen den Arachnarch reicht nicht jeder Schild (Tooltip „It seems this shield isn't strong enough!“); welcher genügt, steht nur im Code.</p>`,
          needs: [["Vitreous Moonstone", "m", "6"], ["Stick", "v"]],
        },
      ],
    },
    {
      t: "Erze beider Welten und Ausrüstung",
      sub: "Journal, Teil „General“. Fünf Erze kommen in beiden Welten vor, jeweils im Gestein der Welt.",
      steps: [
        {
          t: "Pyrope, Aquite und Moonstone",
          items: [
            ["blue_skies:item/materials/pyrope_gem", "Pyrope Gemstone", "aus Pyrope Ore"],
            [T("pyrope", "pickaxe"), "Pyrope Pickaxe", "Rezept im Code"],
            ["blue_skies:item/materials/aquite", "Aquite", "Raw Aquite oder Erz im Ofen"],
            ["blue_skies:item/armor/aquite_chestplate", "Aquite Chestplate", "8 Aquite"],
            ["blue_skies:item/materials/moonstone_shard", "Moonstone Shard", "aus Moonstone Ore; 4 ergeben 2 Moonstone"],
            ["blue_skies:item/materials/moonstone", "Moonstone", "9 ergeben einen Block of Moonstone"],
          ],
          text: `<p><b>Pyrope</b>-Werkzeuge sind leicht und sehr schnell, aber wenig haltbar, und sie bauen Diopside und Charoite nicht ab. <b>Aquite</b> entspricht bei Werkzeug und Rüstung dem Eisen der Oberwelt und lässt sich gut verzaubern. <b>Moonstone</b> ist eine reine Lichtquelle, die auch unter Wasser leuchtet; es gibt größere Leuchtblöcke und eine Kristallform in Höhlen.</p>
<p>Rüstung braucht bei allen Materialien 5 (Helm), 8 (Brust), 7 (Beine) und 4 (Stiefel) Einheiten.</p>`,
          table: { head: ["Erz", "Welt", "Höhe", "Versuche je Chunk, Adergröße"], rows: [
            ["blue_skies:block/ores/everbright_moonstone_ore", "Moonstone Ore", "beide", "Y 0–127", "20"],
            ["blue_skies:block/ores/everbright_pyrope_ore", "Pyrope Ore", "beide", "Y 0–83", "17"],
            ["blue_skies:block/ores/everbright_aquite_ore", "Aquite Ore", "beide", "Y 0–54", "15, 5"],
            ["blue_skies:block/ores/everbright_diopside_ore", "Diopside Ore", "beide", "Y 0–19", "1, 6"],
            ["blue_skies:block/ores/everbright_charoite_ore", "Charoite Ore", "beide", "Y 0–13", "1, 6"],
            ["blue_skies:block/ores/ventium_ore", "Ventium Ore", "Everbright", "Y 0–63", "20, 6"],
            ["blue_skies:block/ores/falsite_ore", "Falsite Ore", "Everbright", "Y 0–63", "20, 6"],
            ["blue_skies:block/ores/horizonite_ore", "Horizonite Ore", "Everdawn", "Y 0–24", "10, 4"],
          ] },
          needs: [["Pyrope Ore, Aquite Ore, Moonstone Ore", "m"]],
        },
        {
          t: "Diopside oder Charoite",
          items: [
            ["blue_skies:item/materials/diopside_gem", "Diopside Gemstone", "aus Diopside Ore, sehr tief"],
            [T("diopside", "sword"), "Diopside Sword", "Rezept im Code"],
            ["blue_skies:item/materials/charoite", "Charoite", "Raw Charoite oder Erz im Ofen"],
            [T("charoite", "pickaxe"), "Charoite Pickaxe", "Rezept im Code"],
            ["minecraft:block/enchanting_table_top", "Enchanting Table", "zusätzlich: 1 Book + 2 Charoite + 4 Obsidian"],
          ],
          text: `<p>Die beiden obersten Materialien sind Gegenstücke. <b>Diopside</b>: sehr haltbar und stark, Werkzeuge schwer und langsam, aber mit sehr hohem Schaden. <b>Charoite</b>: ausgewogen wie Diamant, Werkzeuge schneller und schwächer, die Rüstung fängt leichte Treffer besser ab. Charoite-Werkzeuge bauen alles ab, was die Welten bieten.</p>
<p>Charoite ersetzt Diamant auch in den Vanilla-Rezepten des Mods: Enchanting Table und Jukebox. Mit Falsite Nuggets als Lapis-Ersatz kann man dann ganz ohne Oberwelt verzaubern. Charoite steckt außerdem im Zeal Lighter.</p>`,
          needs: [["Diopside Ore oder Charoite Ore", "m", "unter Y 19 bzw. 13"], ["Obsidian", "v", "Everdawn"]],
        },
      ],
    },
    {
      t: "Blinding Dungeons",
      sub: "Journal „Blinding Dungeon“ (General) und die Boss-Einträge; je ein Turm in jeder Welt, bewohnt von Illagern.",
      steps: [
        {
          t: "Blinding Dungeon Keys",
          items: [
            ["blue_skies:item/misc/blinding_key", "Blinding Dungeon Key", "aus den Kisten des Turms"],
            ["blue_skies:block/dungeon/blinding_keystone", "Blinding Keystone (Everbright)", "oberstes Stockwerk; braucht 4 Schlüssel"],
          ],
          text: `<p>Der Blinding Dungeon ist ein hoher Turm. Im Everbright steht er in Calming Skies, Brisk Meadow, Brightlands und Snow Covered Pines. Die Schlüssel liegen in Bibliotheks-, Gefängnis- und Studierzimmer-Kisten; mit vier Schlüsseln öffnet man den Keystone im obersten Stockwerk und kommt zum Boss. Wer den Keystone benutzt hat, kann danach Blinding-Schlüssel beim Gatekeeper kaufen (Toast „The Gatekeeper is now selling Blinding keys.“).</p>
<p>Die Kisten geben außerdem Aquite, Pyrope, Diopside und eine Aquite Axe.</p>`,
          needs: [["Blinding Dungeon Key", "m", "4"]],
        },
        {
          t: "Summoner",
          pics: [["blue_skies:gui/journal/icons/summoner", "Journal-Bild Summoner"]],
          items: [
            ["blue_skies:item/misc/loot_bag_summoner", "Summoner Loot Bag", "Beute des Bosses"],
            ["blue_skies:item/arcs/ethereal_arc", "Ethereal Arc", "Arc: schneller laufen"],
            ["blue_skies:item/tools/spears/soulbound_spear", "Soulbound Spear", "Speer, der zurückkehrt"],
            ["blue_skies:block/villager/summoning_table_front", "Summoning Table", "stellt den Modus des Summoning Tome um"],
            ["blue_skies:item/misc/summoning_tome", "Summoning Tome", "seltener; Fluctuant Sphere oder Artificial Golem"],
          ],
          text: `<p>Der Summoner (Everbright) lässt Golems aus Dungeonstein für sich kämpfen, erst Fernkämpfer, dann Nahkämpfer, und teleportiert sich weg, wenn man ihm nahe kommt. Nur während er zaubert, kann man ihn treffen. Sein Sieg schaltet im Journal die zweite Stufe des Everbright frei.</p>
<p>Der Loot Bag enthält immer mögliche Teile wie den Ethereal Arc, den Soulbound Spear (eingebaute Loyalty), die Summoning Table und Soul Fragments; der Summoning Tome steht nur in den Fassungen „uncommon“ und „rare“. Der Tome verschießt eine Fluctuant Sphere mit Flächenschaden; an der Summoning Table umgestellt ruft er einen Artificial Golem (nur einer zugleich).</p>`,
          needs: [["Zugang zum Keystone", "m"]],
        },
        {
          t: "Alchemist und Alchemy Table",
          pics: [["blue_skies:gui/journal/icons/alchemist", "Journal-Bild Alchemist"]],
          items: [
            ["blue_skies:item/misc/loot_bag_alchemist", "Alchemist Loot Bag", "Beute des Bosses"],
            ["blue_skies:item/arcs/dusk_arc", "Dusk Arc", "Arc: unsichtbar beim Schleichen"],
            ["blue_skies:item/tools/shields/spike", "Spike Shield", "stärker als der Moonstone Shield, mit Nahkampfschaden"],
            ["blue_skies:block/villager/alchemy_table_front", "Alchemy Table", "wandelt Stoffe um"],
            ["blue_skies:item/misc/alchemy_scroll", "Alchemy Scroll", "seltener; Decaying Spikes"],
          ],
          text: `<p>Der Alchemist (Everdawn) kämpft selbst: Pfeilbündel (mit dem Schild abwehren), Steinstacheln und Trankwolken in den Ecken. Auch er teleportiert sich weg, außer beim Zaubern.</p>
<p>Die <b>Alchemy Table</b> kennt zwei Rezeptarten. „Transmute“ tauscht innerhalb einer Gruppe: Iron Ingot gegen Ventium Ingot, Stein der Oberwelt gegen die Steine der Welten, Erde, Holz, Kohle und Holzkohle, Farben und vieles mehr. „Catylist“ wandelt einen Stoff mit einem Hilfsstoff um, etwa Iron Ingot mit Soul Fragment zu Falsite, Iron Ingot mit Blaze Rod zu Horizonite, Stone mit Chorus Fruit zu End Stone, Turquoise Stone mit Nature Arc zu Nature Stone, Netherite Ingot mit einem Trank zu Gold („Finally.“). Ob der Hilfsstoff verbraucht wird, ist nicht ausgelesen.</p>`,
          table: { head: ["Rezept", "Art", "Eingang", "Hilfsstoff → Ergebnis"], rows: [
            ["minecraft:item/iron_ingot", "Iron Ingot", "Transmute", "Iron Ingot ↔ Ventium Ingot", "–"],
            ["blue_skies:item/materials/falsite_ingot", "Falsite Ingot", "Catylist", "Iron Ingot", "Soul Fragment → Falsite Ingot"],
            ["blue_skies:item/materials/horizonite_ingot", "Horizonite Ingot", "Catylist", "Iron Ingot", "Blaze Rod → Horizonite Ingot"],
            ["minecraft:item/gold_ingot", "Gold Ingot", "Catylist", "Netherite Ingot", "Potion → Gold Ingot"],
            ["minecraft:block/end_stone", "End Stone", "Catylist", "Stone", "Chorus Fruit → End Stone"],
            ["minecraft:item/coal", "Coal", "Transmute", "Tag minecraft:coals", "–"],
          ] },
          needs: [["Zugang zum Keystone", "m"]],
        },
      ],
    },
    {
      t: "Nature und Poison Dungeon",
      sub: "Journal-Einträge, offen nach dem jeweiligen Blinding-Boss. Je ein Dungeon in jeder Welt mit einem zweiten Boss.",
      steps: [
        {
          t: "Nature Dungeon und Starlit Crusher",
          pics: [["blue_skies:gui/journal/icons/starlit_crusher", "Journal-Bild Starlit Crusher"]],
          items: [
            ["blue_skies:item/misc/nature_key", "Nature Dungeon Key", "aus den Kisten des Dungeons"],
            ["blue_skies:block/dungeon/nature_keystone", "Nature Keystone", "am Ende des Dungeons"],
            ["blue_skies:item/arcs/nature_arc", "Nature Arc", "Arc: zusätzliche Herzen"],
            ["blue_skies:item/misc/crushing_hammer", "Crushing Hammer", "seltener; Bodenschlag"],
          ],
          text: `<p>Der Nature Dungeon ist eine grüne Pyramide in den Snow Covered Pines. Seine Wächter, die Stonelets, nehmen wie die Frost Spirits mehr Schaden von Pickaxes; oben spucken Spewters Samenbomben. Die Kisten enthalten Brewberries, Starlit Spear, Edelsteine und die Schlüssel.</p>
<p>Der Starlit Crusher schützt sich mit vier Holzwänden und lässt Wurzeln, Spewters und hölzerne Schneeeulen wachsen. Eine Wand fällt man mit der Axt (für andere Waffen sagt der Tooltip „maybe an axe would work?“); danach schlägt er auf den Boden und ist für Wurfwaffen wie Speere verwundbar. Sein Loot Bag: Nature Arc, Comet Sapling, Falsite, Cryo Root, in den selteneren Fassungen der Crushing Hammer und Diopside.</p>`,
          needs: [["Nature Dungeon Key", "m"], ["Axt und Speere", "m"]],
        },
        {
          t: "Poison Dungeon und Arachnarch",
          pics: [["blue_skies:gui/journal/icons/arachnarch", "Journal-Bild Arachnarch"]],
          items: [
            ["blue_skies:item/misc/poison_key", "Poison Dungeon Key", "ein Schlüssel je Stockwerk"],
            ["blue_skies:block/dungeon/poison_keystone", "Poison Keystone", "am Ende der Tunnel"],
            ["blue_skies:item/arcs/poison_arc", "Poisonous Arc", "Arc: mehr Schaden, wenn vergiftet"],
            ["blue_skies:item/misc/venom_sac", "Venom Sac", "seltener; verschießt Gift"],
            ["blue_skies:item/tools/different_sword", "Different Sword", "seltener; schnelle Klinge"],
          ],
          text: `<p>Der Poison Dungeon ist ein mit Netzen überzogener Baum im Sunset Maple Forest, innen ein Spinnennest voller Venom Spiders und Cave Spiders. Jedes Stockwerk hat einen Schlüssel. Die Kisten geben Horizonite, Moonstone Shield, Camel Saddle und Spider Webbing.</p>
<p>Der Arachnarch hängt sich an die Decke und ist dort kaum verwundbar; man hält ihn hin, bis er herunterkommt, und wehrt am Boden seine Sprünge mit dem Schild ab. Sein Loot Bag: Poisonous Arc, Horizonite, in den selteneren Fassungen Venom Sac, Diopside und Different Sword. Das Different Sword tötet schnell, aber wartet man zu lange, heilt das Ziel mehr, als man ihm abgezogen hat.</p>`,
          needs: [["Poison Dungeon Key", "m"], ["Schild", "m"]],
        },
        {
          t: "Arcs",
          items: [
            ["blue_skies:item/arcs/ethereal_arc", "Ethereal Arc", "Summoner"],
            ["blue_skies:item/arcs/dusk_arc", "Dusk Arc", "Alchemist"],
            ["blue_skies:item/arcs/nature_arc", "Nature Arc", "Starlit Crusher"],
            ["blue_skies:item/arcs/poison_arc", "Poisonous Arc", "Arachnarch"],
          ],
          text: `<p>Arcs sind laut Journal Artefakte, die nur die Wächter der Dungeons tragen. Man trägt sie in eigenen Feldern (Fenster <code>arc_inventory</code>). Jeder Arc hat vier Seltenheitsstufen (Common, Uncommon, Rare, Empowered), und seine Wirkung wächst mit der Stufe.</p>
<p>Im JAR gibt es außerdem Aquatic Arc, Life Arc und Runic Arc sowie Aquatic und Life Keystone; in keiner Loot-Tabelle oder keinem Rezept kommen sie vor. Ebenso die Infused Arc Sword, obwohl ein Advancement sie „from a dungeon“ verlangt.</p>`,
          table: { head: ["Arc", "Common", "Uncommon", "Rare", "Empowered"], rows: [
            ["blue_skies:item/arcs/ethereal_arc", "Ethereal Arc", "+10 % Tempo", "+15 %", "+20 %", "+25 %"],
            ["blue_skies:item/arcs/dusk_arc", "Dusk Arc", "unsichtbar beim Schleichen, mit Rauch", "weniger Rauch", "ohne Rauch", "auch Rüstung unsichtbar"],
            ["blue_skies:item/arcs/nature_arc", "Nature Arc", "+1 Herz", "+2", "+3", "+4"],
            ["blue_skies:item/arcs/poison_arc", "Poisonous Arc", "+1 Schaden, wenn vergiftet", "+2", "+3", "+4"],
          ] },
          needs: [["Loot Bags der vier Bosse", "m"]],
        },
      ],
    },
  ],
  solo: [
    { t: "Essen und Tiere",
      items: [
        ["blue_skies:block/misc/food_prep_table_side", "Food Prep Table", "3 Steinstufen + 4 Logs; 3 bis 5 Zutaten je Gericht"],
        [null, "Trough", "5 Wooden Slabs; Jungtiere fressen daraus und wachsen schneller"],
        ["blue_skies:block/plants/brewberry_bush", "Brewberry", "Busch; auf Comet Grass pinke (Regeneration), auf Mycelium schwarze Beeren (heilt Gift)"],
        ["blue_skies:item/food/pine_fruit", "Pine Fruit", "Everbright; zähmt Reindeer, füttert Stardust Ram"],
        ["blue_skies:item/food/crescent_fruit", "Crescent Fruit", "Everdawn; wächst unter blühenden Blättern nach, zähmt Cosmic Fox"],
        ["blue_skies:item/food/scalefruit", "Scalefruit", "zähmt das Crystal Camel"],
        ["blue_skies:item/materials/azulfo_horn", "Azulfo Horn", "ergibt 3 Bone Meal"],
      ],
      text: `<p>Die Food Prep Table macht aus vielen verschiedenen Zutaten bessere Gerichte; Fleisch gibt mehr Portionen, Blumen geben ihre Trankwirkung weiter. Reittiere: Reindeer (Pine Fruit, Sattel), Crystal Camel (Scalefruit, Camel Saddle, Truhe möglich), Crogre (Bug Guts, Sattel, läuft über Wasser). Arbeitet ein Dorfbewohner an der Trough, wird er Wrangler.</p>` },
    { t: "Dörfer und Reisen",
      items: [
        ["blue_skies:block/villager/star_emitter_side", "Star Emitter", "1 Star Flare + 1 Falsite Ingot + 3 Wooden Slabs"],
        ["blue_skies:item/tools/astrolabe", "Astrolabe", "vom Stargazer im Dorf; teleportiert zum Star Emitter"],
        ["blue_skies:item/misc/bag_of_spoils", "Bag of Spoils", "5 Fox Pelt + 1 String; Taschendiebstahl bei Dorfbewohnern"],
        ["blue_skies:item/misc/camel_saddle", "Camel Saddle", "5 Leather + 1 Iron oder Ventium Ingot + 2 Fox Pelt"],
      ],
      text: `<p>Beide Welten haben Dörfer (Everbright: Brightlands, Calming Skies, Slushlands; Everdawn: Crystal Dunes, Shaded Woodlands, Sunset Maple Forest) mit eigenen Berufen wie Stargazer, Wrangler, Shoveler und Nightwatcher. Das Astrolabe springt über eine mittlere Strecke zurück zu einem Star Emitter und lädt danach je nach Entfernung nach.</p>` },
    { t: "Besondere Pflanzen und Blöcke",
      items: [
        ["blue_skies:block/plants/crystal_flower", "Crystal Flower", "wird mit Bone Meal zum Kristallbaum"],
        ["blue_skies:item/food/cryo_root", "Cryo Root", "aus Bunker- und Höhlenkisten"],
        ["blue_skies:block/misc/spider_webbing_full", "Spider Webbing", "Netz, das an Ecken und Wänden haftet"],
      ],
      text: `<p>Der Kristallbaum des Everdawn brennt nicht und gibt keine Sticks; seine Logs werden zu Mauern. Der Baneful Mushroom besprüht alles, was auf ihn tritt, mit Gift. Dazu kommen Baustoffe wie Taratite, Rimestone, Cinderstone, Umber, Brumble, Crystal Sand und Midnight Sand mit Glas und Sandstein. In den Slushlands steht ein Frozen Bunker mit eigener Kiste.</p>` },
    { t: "Kreaturen",
      items: [
        ["blue_skies:gui/journal/icons/azulfo", "Azulfo", "größtes Tier des Everbright; die Herde wehrt sich"],
        ["blue_skies:gui/journal/icons/armored_frost_spirit", "Armored Frost Spirit", "häufigster Gegner; Soul Fragments"],
        ["blue_skies:gui/journal/icons/polargeist", "Polargeist", "schneller Geisterbär"],
        ["blue_skies:gui/journal/icons/diophyde_prowler", "Diophyde Prowler", "umkreist seine Beute"],
        ["blue_skies:gui/journal/icons/shade_monitor", "Shade Monitor", "häufigstes Tier des Everdawn"],
        ["blue_skies:gui/journal/icons/emberback", "Emberback", "Käfer mit heißem Atem"],
        ["blue_skies:gui/journal/icons/nyctofly", "Nyctofly", "Fluginsekt, sieht sehr weit"],
        ["blue_skies:gui/journal/icons/venom_spider", "Venom Spider", "beißt oder spuckt Gift"],
      ] },
    { t: "Rüstungsbesatz und Musik",
      items: [
        ["blue_skies:item/banished_armor_trim_smithing_template", "Banished Armor Trim", "Summoner Loot Bag"],
        ["blue_skies:item/thwarted_armor_trim_smithing_template", "Thwarted Armor Trim", "Alchemist Loot Bag"],
        ["blue_skies:item/regrowth_armor_trim_smithing_template", "Regrowth Armor Trim", "Starlit Crusher Loot Bag"],
        ["blue_skies:item/toxic_armor_trim_smithing_template", "Toxic Armor Trim", "Arachnarch Loot Bag"],
      ],
      text: `<p>Die Loot Bags enthalten außerdem Schallplatten: <code>blinding_rage</code> (Summoner und Alchemist), <code>defying_starlight</code> (Starlit Crusher), <code>venomous_encounter</code> (Arachnarch). Die Sprachdatei hat für sie keinen Namen.</p>` },
  ],
  bridges: [
    { t: "Eisen, Gold und andere Metalle",
      text: `<p>Blue Skies verbindet seine Metalle von sich aus mit Eisen: Die Alchemy Table tauscht Iron Ingot gegen Ventium Ingot und macht aus Eisen Falsite (mit Soul Fragment) oder Horizonite (mit Blaze Rod). Der Snowcap Oven und der Snowcap Mushroom machen umgekehrt aus Horizonite Eisen. Damit ist Eisen nach dem Alchemist in beide Richtungen umwandelbar.</p>
<p>Ventium, Falsite und Horizonite stehen in <code>forge:ingots</code>, die Raw-Formen in <code>forge:raw_materials</code>, alle Erze in <code>forge:ores</code>, Pyrope, Diopside, Aquite und Charoite in <code>forge:gems</code>. Eigene Untertags wie <code>forge:ingots/ventium</code> setzt der Mod nicht; Maschinen anderer Mods, die nach solchen Untertags suchen, erkennen die Metalle also nicht von selbst.</p>` },
    { t: "Erze anderer Mods",
      text: `<p>Blue Skies filtert Weltgenerierung anderer Mods in seinen Dimensionen. Freigeben kann man Mods über <code>allowed_mods_for_feature_gen</code> in <code>blue_skies-common.toml</code> (ab Werk leer). In der Testinstanz steht dort <code>["ieplus"]</code>, also nur die eigenen Features des Packs. Mekanism-, IE- oder Tinkers-Erze erscheinen ohne solche Features nicht.</p>
<p>Die Werkzeugabschwächung trifft auch Werkzeuge anderer Mods (bestätigt für Tinkers). Wer in den Welten mit Werkzeugen anderer Mods abbauen will, ist auf den Boss-Fortschritt angewiesen.</p>` },
    { t: "Vanilla-Rezepte mit Blue-Skies-Material",
      text: `<p>Furnace aus 8 Cobblestone der Welten, Anvil und Stonecutter aus Ventium, Enchanting Table und Jukebox mit Charoite, Cake mit Ventium Milk Bucket, Camel Saddle mit Ventium oder Eisen. So lässt sich die Grundausstattung ganz in den Welten bauen.</p>` },
  ],
  foot: "Quellen: blue_skies-1.20.1-1.3.31.jar – Journal (data/blue_skies/blue_skies/journal, Texte in assets/blue_skies/blue_skies/journal_lang/en_us.json), Advancements, Rezepte, alchemy_recipes, horizonite_forge_fuels, snowcap_mushroom_freezing, snowcap_oven_freezing_recipes, tool_handle_types, Loot-Tabellen (Kisten, Loot Bags), Tags, Weltgenerierung, Sprachdatei; Config blue_skies-common.toml der Testinstanz. Werkzeugabschwächung: Projektbefund (docs/16_MODLISTE_1.20.1.md). Nicht ausgelesen, weil nur im Code: Werkzeugrezepte, Handel und Preise des Gatekeepers und der Dorfbewohner, Stärke der Werkzeugabschwächung, welche Schilde gegen den Arachnarch genügen, wann welcher Loot Bag (common, uncommon, rare) fällt, ob Catylist-Hilfsstoffe verbraucht werden, Bossleben und -schaden.",
};
