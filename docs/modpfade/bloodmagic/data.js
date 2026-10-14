// Stand 2026-10-14, Minecraft 1.20.1. Quelle: Buch „Sanguine Scientiem“ (Patchouli, assets/bloodmagic/patchouli_books/guide), Rezepte,
// Loot-Tabellen, Tags und Sprachdatei aus BloodMagic-1.18-1.20.1-3.3.8-50.jar; Ritualkosten und Altar-Aufbau aus den Klassen des JARs
// (wayoftime.bloodmagic.ritual.types.*, wayoftime.bloodmagic.altar.AltarTier); Zahlen aus config/bloodmagic-common.toml der Testinstanz.
// Brücke Blood-Smeltery-1.20.1-1.2.1a.jar. Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen).
// Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
// Baupläne: Ebenen von unten nach oben, je Ebene Reihen von hinten nach vorn. Altar in der Mitte (A).
const RUNE = ["Blood Rune (Blank Rune oder jede Upgrade-Rune)", "bloodmagic:block/blankrune"];
const ALTAR = ["Blood Altar", "render:model/bm_altar_s"];
const PILLAR = ["beliebiger fester Block", "minecraft:block/stone_bricks"];
const PAGE = {
  pageTitle: "Modpfad Blood Magic",
  title: "Blood Magic",
  accent: ["#e0605a", "#a32a2a"],
  lede: "Vom ersten Herz am Blood Altar bis zum Archmage's Blood Orb: Der Weg durch Blood Magic in den fünf Altar-Stufen, die das Buch des Mods im Eintrag „Tiers & Getting Started“ vorgibt. Jede Stufe braucht einen größeren Altar, und jeder Altar braucht Material, das erst die Stufe davor freischaltet. Daneben laufen drei Stränge mit: Alchemie, Demon Will und Rituale.",
  mods: [
    ["Blood Magic", "3.3.8-50", "main"],
    ["Blood-Smeltery", "1.2.1a", "bridge"],
  ],
  phases: [
    {
      t: "Stufe 1: Altar, Orb, Alchemie",
      sub: "Buch „Tiers & Getting Started“, Abschnitte Tier-1. Alles entsteht aus Stein, Gold, Glas und dem eigenen Blut; Strom, Erze aus anderen Mods oder der Nether werden nicht gebraucht.",
      steps: [
        {
          t: "Blood Altar und Sacrificial Knife",
          pics: [["render:model/bm_altar", "Blood Altar"]],
          items: [
            ["render:model/bm_altar_s", "Blood Altar", "4 Stein, 1 Furnace, 3 Gold"],
            ["bloodmagic:item/sacrificialdagger", "Sacrificial Knife", "5 Glas, 1 Gold, 1 Eisen; ein Herz ergibt 200 LP im Altar"],
            ["bloodmagic:item/sanguine_scientiem_guide_book", "Sanguine Scientiem", "das Buch des Mods: Book + Glass"],
          ],
          text: `<p>Der <b>Blood Altar</b> ist laut Buch der zentrale Block des Mods. Er wandelt Blut in <b>Life Essence</b> (gemessen in LP) und verwandelt damit Items, die man hineinlegt. Er fasst anfangs 10 000 LP; 10 % davon gehen in einen unsichtbaren Zwischentank, über den Rohre Life Essence entnehmen oder einspeisen.</p>
<p>Das Blut kommt zuerst vom Spieler selbst: Der <b>Sacrificial Knife</b> nimmt ein Herz und gibt 200 LP in einen Altar in der Nähe. Ein Rezept verbraucht LP Schritt für Schritt; fehlt Life Essence, geht der Fortschritt langsam verloren. Liegt ein Stapel im Altar, kostet er das Vielfache.</p>`,
          needs: [["Stein", "v"], ["Gold", "v"], ["Glas", "v"], ["Furnace", "v"], ["Eisen", "v"], ["eigene Gesundheit", "v"]],
        },
        {
          t: "Weak Blood Orb und Soul Network",
          items: [
            ["bloodmagic:item/weakbloodorb", "Weak Blood Orb", "Diamant + 2000 LP im Altar der Stufe 1"],
          ],
          text: `<p>Jeder Spieler hat ein <b>Soul Network</b>: einen eigenen LP-Speicher, aus dem Sigils, Rituale und gebundene Geräte zehren. Gefüllt wird es über einen <b>Blood Orb</b>, entweder per Rechtsklick (ein Herz ergibt 200 LP) oder, indem der Orb im Altar liegt und Life Essence aufsaugt. Fehlt LP, nehmen manche Geräte stattdessen Gesundheit; ein leergelaufenes Ritual verursacht Übelkeit, bis das Netz wieder gefüllt ist.</p>
<p>Für jede Altar-Stufe gibt es einen eigenen Orb. Seine Stufe bestimmt auch, welche Rezepte am Alchemy Table und an der Werkbank möglich sind: Viele Rezepte verlangen einen Orb ab einer bestimmten Stufe als Zutat.</p>`,
          table: {
            head: ["Blood Orb", "Fassung", "Rezept im Altar", "Altar ab"],
            rows: [
              ["bloodmagic:item/weakbloodorb", "Weak Blood Orb", "5 000 LP", "Diamant, 2 000 LP", "Stufe 1"],
              ["bloodmagic:item/apprenticebloodorb", "Apprentice Blood Orb", "25 000 LP", "Block of Redstone, 5 000 LP", "Stufe 2"],
              ["bloodmagic:item/magicianbloodorb", "Magician's Blood Orb", "150 000 LP", "Block of Gold, 25 000 LP", "Stufe 3"],
              ["bloodmagic:item/masterbloodorb", "Master Blood Orb", "1 000 000 LP", "Weak Blood Shard, 40 000 LP", "Stufe 4"],
              ["bloodmagic:item/archmagebloodorb", "Archmage's Blood Orb", "10 000 000 LP", "Hellforged Block, 80 000 LP", "Stufe 5"],
            ],
          },
          needs: [["Diamant", "v"], ["2000 LP", "m"]],
        },
        {
          t: "Slates und Soul Snare",
          items: [
            ["bloodmagic:item/blankslate", "Blank Slate", "Stein + 1000 LP"],
            ["bloodmagic:item/soulsnare", "Soul Snare", "String + 500 LP; Wurfgeschoss für die erste Demon Will"],
            ["bloodmagic:item/lifebucket", "Bucket of Life", "Bucket + 1000 LP; Life Essence als Eimer"],
          ],
          text: `<p>Die Hauptaufgabe des Altars sind laut Buch die <b>Slates</b>. Jede Stufe braucht die vorige Slate und einen stärkeren Altar; fast jedes wichtige Rezept des Mods enthält eine von ihnen. Die Tabelle ist damit zugleich der Fahrplan des Mods.</p>`,
          table: {
            head: ["Slate", "aus", "LP", "Altar ab"],
            rows: [
              ["bloodmagic:item/blankslate", "Blank Slate", "Stein", "1 000", "Stufe 1"],
              ["bloodmagic:item/reinforcedslate", "Reinforced Slate", "Blank Slate", "2 000", "Stufe 2"],
              ["bloodmagic:item/infusedslate", "Imbued Slate", "Reinforced Slate", "5 000", "Stufe 3"],
              ["bloodmagic:item/demonslate", "Demonic Slate", "Imbued Slate", "15 000", "Stufe 4"],
              ["bloodmagic:item/etherealslate", "Ethereal Slate", "Demonic Slate", "30 000", "Stufe 5"],
            ],
          },
          needs: [["Stein", "v"], ["String", "v"], ["LP", "m"]],
        },
        {
          t: "Alchemy Table",
          pics: [["render:model/bm_alchemy_table", "Alchemy Table"]],
          items: [
            ["render:model/bm_alchemy_table_s", "Alchemy Table", "3 Stein, 2 Planks, 1 Eisen, 2 Gold, 1 Blank Slate"],
            ["bloodmagic:item/arcaneashes", "Arcane Ashes", "Redstone, weißer Farbstoff, Schwarzpulver, Kohle; 500 LP"],
            ["bloodmagic:item/plantoil", "Plant Oil", "2 Weizen oder Kartoffeln, 3 Karotten oder Rote Bete, je mit Bone Meal"],
            ["bloodmagic:item/saltpeter", "Saltpeter", "2 Plant Oil + Kohlestaub ergeben 3"],
            ["bloodmagic:item/sulfur", "Sulfur", "Lava Bucket + Cobblestone ergeben 4"],
            ["minecraft:item/gunpowder", "Gunpowder", "Sulfur, Saltpeter, Kohle ergeben 3"],
            ["bloodmagic:item/basiccuttingfluid", "Basic Cutting Fluid", "Plant Oil, Redstone, Schwarzpulver, Zucker, Kohlestaub, Wasserflasche"],
            ["bloodmagic:item/ironsand", "Iron Sand, Gold Sand", "Erz + Cutting Fluid ergeben 2 Sand: Erzverdopplung"],
          ],
          text: `<p>Der <b>Alchemy Table</b> craftet mit LP aus dem Soul Network. Rechts liegt ein Blood Orb; sein Besitzer zahlt, und seine Stufe legt fest, welche Rezepte gehen. Jede Seite der Oberfläche lässt sich für Hopper und Rohre freigeben.</p>
<p>Auf Stufe 1 entstehen hier die <b>Arcane Ashes</b> für Alchemy Arrays, die Reagenzien der ersten Sigils, Grundstoffe wie Schwarzpulver, Leder aus Rotten Flesh, String aus Wolle, und die einfache <b>Erzverdopplung</b> mit Cutting Fluid. Die Erzketten von Blood Magic gibt es nur für Eisen, Gold, Kupfer, Netherite Scrap und Demonite.</p>`,
          needs: [["Stein, Planks", "v"], ["Gold, Eisen", "v"], ["Blank Slate", "m"], ["Weak Blood Orb", "m"], ["Redstone, Kohle, Schwarzpulver", "v"]],
        },
        {
          t: "Alchemy Arrays und die ersten Sigils",
          pics: [["bloodmagic:item/arcaneashes", "Arcane Ashes"]],
          items: [
            ["bloodmagic:item/divinationsigil", "Divination Sigil", "Array: Redstone, dann Blank Slate; zeigt LP im Netz, Stufe und Füllstand des Altars"],
            ["bloodmagic:item/reagentwater", "Water Reagent", "Zucker + 2 Water Bucket; 300 LP"],
            ["bloodmagic:item/watersigil", "Water Sigil", "Array: Water Reagent, dann Blank Slate"],
            ["bloodmagic:item/reagentlava", "Lava Reagent", "Lava Bucket, Redstone, Cobblestone, Block of Coal; 1000 LP"],
            ["bloodmagic:item/lavasigil", "Lava Sigil", "Array: Lava Reagent, dann Blank Slate"],
          ],
          text: `<p>Mit <b>Arcane Ashes</b> (20 Anwendungen) zeichnet man einen Kreis auf den Boden. Das erste Item, das man hineinlegt, ist die Basis, das zweite der Katalysator; passt beides zu einem Rezept, wird der Kreis aktiv. Arrays craften entweder ein Item, meist ein <b>Sigil</b> aus Reagenz und Slate, oder sie wirken selbst.</p>
<p>Die Sigils der Stufe 1 sind Divination, Water und Lava. Sie zahlen aus dem Soul Network: laut Config 100 LP je Wasserquelle, 1000 LP je Lavaquelle. Water und Lava Sigil füllen am Alchemy Table außerdem Eimer, ohne verbraucht zu werden.</p>`,
          table: {
            head: ["Wirkendes Array", "Basis", "Katalysator", "Wirkung laut Buch"],
            rows: [
              [null, "New Dawn", "Kohle", "Kohle", "springt zum nächsten Sonnenaufgang"],
              [null, "True Twilight", "Lapis", "Lapis", "springt zum nächsten Sonnenuntergang"],
              [null, "Speed Array", "Feder", "Redstone", "schleudert Spieler, Mobs, Items waagerecht"],
              [null, "Updraft Array", "Feder", "Glowstone Dust", "schleudert nach oben"],
              [null, "Spike Array", "Cobblestone", "Eisen", "ein Herz Schaden für alles, was hineintritt"],
              [null, "Bounce Array", "Slimeball", "Redstone", "nur in den Rezeptdaten, nicht im Buch; Wirkung nicht ausgelesen"],
            ],
          },
          needs: [["Arcane Ashes", "m"], ["Blank Slate", "m"], ["Redstone, Zucker, Wasser, Lava", "v"]],
        },
        {
          t: "Demon Will: Hellfire Forge, Tartaric Gems, Sentient Tools",
          pics: [["render:model/bm_hellfire_forge", "Hellfire Forge"]],
          items: [
            ["bloodmagic:item/basemonstersoul", "Demon Will", "fällt von Monstern, die mit Soul Snare markiert oder mit Sentient-Waffen getötet werden"],
            ["render:model/bm_hellfire_forge_s", "Hellfire Forge", "2 Eisen, 4 Stein, Blank Slate, Block of Iron"],
            ["bloodmagic:item/soulsword_deactivated", "Sentient Sword", "Petty Tartaric Gem + Iron Sword"],
            ["bloodmagic:item/soulpickaxe", "Sentient Pickaxe, Sentient Axe, Sentient Shovel, Sentient Scythe", "Petty Tartaric Gem + Eisenwerkzeug"],
            ["bloodmagic:item/throwing_dagger", "Iron Throwing Dagger", "2 Eisen + String ergeben 16; 10 Schaden"],
          ],
          text: `<p><b>Demon Will</b> ist der zweite Rohstoff des Mods. Die erste gewinnt man mit Soul Snares: Ein getroffenes Monster leuchtet weiß und lässt beim Tod Will fallen, Looting erhöht die Menge. Die <b>Hellfire Forge</b> craftet mit Will aus einem Tartaric Gem: Jedes Rezept verlangt einen Mindestvorrat im Gem und verbraucht einen Teil davon.</p>
<p>Die <b>Sentient Tools</b> kosten keine Will, werden aber mit Will im Inventar stärker; laut Buch überholen sie mit vollem Gem Netherite-Werkzeug. Sie reparieren sich am Amboss mit Crystallized Will und lassen sich gut verzaubern. Das Schwert ist der bessere Weg zu Will als die Snares.</p>`,
          table: {
            head: ["Tartaric Gem", "fasst", "Rezept an der Hellfire Forge", "Will nötig / verbraucht"],
            rows: [
              ["bloodmagic:item/soulgempetty", "Petty Tartaric Gem", "64", "Redstone, Gold, Glas, Lapis", "1 / 1"],
              ["bloodmagic:item/soulgemlesser", "Lesser Tartaric Gem", "256", "Petty Gem, Diamant, Block of Redstone, Block of Lapis", "60 / 20"],
              ["bloodmagic:item/soulgemcommon", "Common Tartaric Gem", "1 024", "Lesser Gem, Diamant, Block of Gold, Imbued Slate (Stufe 3)", "240 / 50"],
              ["bloodmagic:item/soulgemgreater", "Greater Tartaric Gem", "4 096", "Common Gem, Demonic Slate, Weak Blood Shard, Demon Will Crystal (Stufe 4)", "1 000 / 100"],
            ],
          },
          needs: [["Soul Snare", "m"], ["Eisen, Stein", "v"], ["Eisenwerkzeuge", "v"], ["Redstone, Gold, Glas, Lapis", "v"], ["Monster", "v"]],
        },
        {
          t: "Incense Altar und Lava Crystal",
          pics: [["render:model/bm_incense_altar", "Incense Altar"]],
          items: [
            ["render:model/bm_incense_altar_s", "Incense Altar", "4 Stein, Charcoal, 2 Cobblestone, Weak Blood Orb"],
            ["bloodmagic:block/woodbrickpath", "Wooden Path, Stone Path, Worn Stone Path, Obsidian Path", "je 4 Blöcke + Orb der Stufe 2, 3, 4 bzw. 5"],
            ["bloodmagic:item/lavacrystal", "Lava Crystal", "2 Glas, 3 Lava Bucket, Weak Blood Orb, 2 Obsidian, Diamant"],
          ],
          text: `<p>Der <b>Incense Altar</b> verstärkt die Selbstopferung. Steht man in seiner Nähe, lädt er das Messer auf; dann opfert ein langer Klick 90 % der Gesundheit auf einmal, mit einem Bonus je nach <b>Tranquility</b> der Umgebung. Sie entsteht aus Pflanzen, Feldfrüchten, Bäumen, Erde, Wasser, Feuer und Lava in Ringen aus Path-Blöcken; jede Art zählt mit ihrer Quadratwurzel, Vielfalt lohnt also. Der Bonus ist gedeckelt: ohne Pfad 20 %, Holz 60 %, Stein 120 %, Worn Stone 200 %, Obsidian 300 %.</p>
<p>Der <b>Lava Crystal</b> zündet Blöcke an (100 LP) und ist im Ofen ein ewiger Brennstoff: 50 LP je 10 Sekunden. Er ist zugleich die Zutat des Weak Activation Crystal für Rituale.</p>`,
          needs: [["Weak Blood Orb", "m"], ["Stein, Cobblestone, Charcoal", "v"], ["Lava, Obsidian, Diamant", "v"]],
        },
      ],
    },
    {
      t: "Stufe 2: Runen und Opfer",
      sub: "Buch „Tier Two“ und „Potioncrafting (Tier-2)“. Der Altar bekommt acht Runen; Mobs werden zur Blutquelle, die ersten Upgrade-Runen und das Trank-System kommen dazu.",
      steps: [
        {
          t: "Blank Rune und Altar der Stufe 2",
          plan: {
            name: "Blood Altar, Stufe 2", size: "3×2×3",
            key: { A: ALTAR, R: RUNE },
            layers: ["RRR R.R RRR", "... .A. ..."],
            form: "Acht Runen im Ring eine Ebene unter dem Altar. Die vier mittleren Runen dürfen Upgrade-Runen sein, die Ecken erst ab Stufe 3. Die Stufe zeigt das Divination Sigil.",
          },
          items: [
            ["bloodmagic:block/blankrune", "Blank Rune", "7 Stein, Blank Slate, Weak Blood Orb"],
          ],
          text: `<p>Runen sind die Upgrades des Altars. Die <b>Blank Rune</b> wirkt nicht selbst, sie zählt nur für die Stufe. Jede andere Rune zählt ebenso, bringt aber zusätzlich ihre Wirkung.</p>`,
          needs: [["Stein", "v", "56 für 8 Runen"], ["Blank Slate", "m", "8"], ["Weak Blood Orb", "m"]],
        },
        {
          t: "Dagger of Sacrifice, Apprentice Orb, Reinforced Slate",
          items: [
            ["bloodmagic:item/daggerofsacrifice", "Dagger of Sacrifice", "Iron Sword + 3000 LP"],
            ["bloodmagic:item/apprenticebloodorb", "Apprentice Blood Orb", "Block of Redstone + 5000 LP; 25 000 LP Fassung"],
            ["bloodmagic:item/reinforcedslate", "Reinforced Slate", "Blank Slate + 2000 LP"],
          ],
          text: `<p>Der <b>Dagger of Sacrifice</b> tötet jeden Mob, der höchstens zwei Blöcke vom Altar entfernt steht, und gibt dafür LP. Wie viel, steht in der Config (<code>sacrificialValues</code>, LP je Lebenspunkt): Villager, Kuh, Huhn, Pferd, Schaf, Wolf, Ozelot, Schwein und Kaninchen 100, Slime 15, Enderman 10, alle übrigen 25. Ab hier ist man nicht mehr auf das eigene Blut angewiesen.</p>`,
          needs: [["Iron Sword", "v"], ["Block of Redstone", "v"], ["Mobs", "v"]],
        },
        {
          t: "Blood Runes",
          text: `<p>Alle Runen des Mods. Die Wirkungen stammen aus dem Buch, die Rezepte aus den Rezeptdaten; „ab“ ist die Stufe, auf der alle Zutaten erreichbar sind. Jede Rune gibt es ab Stufe 5 als <b>Reinforced</b>-Fassung mit doppelter Wirkung (Schritt „Reinforced Runes“).</p>`,
          table: {
            head: ["Rune", "Wirkung je Rune", "Rezept", "ab"],
            rows: [
              ["bloodmagic:block/blankrune", "Blank Rune", "keine; zählt für die Stufe", "7 Stein, Blank Slate, Weak Blood Orb", "1"],
              ["bloodmagic:block/speedrune", "Speed Rune", "Craften +20 %", "4 Stein, 2 Blank Slate, 2 Zucker, Blank Rune", "1"],
              ["bloodmagic:block/sacrificerune", "Rune of Sacrifice", "LP aus Mobs +10 %", "4 Stein, Reinforced Slate, 2 Gold, Blank Rune, Apprentice Orb", "2"],
              ["bloodmagic:block/selfsacrificerune", "Rune of Self Sacrifice", "LP aus eigenem Blut +10 %", "4 Stein, Reinforced Slate, 2 Glowstone Dust, Blank Rune, Apprentice Orb", "2"],
              ["bloodmagic:block/altarcapacityrune", "Rune of Capacity", "Fassung +20 % (additiv)", "4 Stein, 3 Bucket, Blank Rune, Imbued Slate", "3"],
              ["bloodmagic:block/dislocationrune", "Displacement Rune", "Durchfluss zu externen Tanks +20 % (multiplikativ)", "4 Stein, 3 Water Bucket, Blank Rune, Imbued Slate", "3"],
              ["bloodmagic:block/bettercapacityrune", "Rune of Augmented Capacity", "Fassung +7,5 % (multiplikativ, nach den normalen)", "4 Obsidian, Demonic Slate, 2 Bucket, Rune of Capacity, Master Orb", "4"],
              ["bloodmagic:block/accelerationrune", "Acceleration Rune", "Takt von Charging und Displacement 1 Tick kürzer (Standard 20)", "4 Bucket, Demonic Slate, 2 Gold, Speed Rune, Master Orb", "4"],
              ["bloodmagic:block/chargingrune", "Charging Rune", "Vorrat von 1000 LP, der beim nächsten Rezept auf einmal fließt", "4 Redstone, Demonic Slate, 2 Glowstone Dust, Blank Rune, Master Orb", "4"],
              ["bloodmagic:block/orbcapacityrune", "Rune of the Orb", "Fassung des eingelegten Orbs +2 %", "4 Stein, 2 Blood Orb, 2 Blank Rune, Master Orb", "4"],
            ],
          },
          needs: [["Blank Rune", "m"], ["Slates", "m"], ["Stein, Gold, Glowstone, Zucker, Buckets", "v"]],
        },
        {
          t: "Sigils",
          text: `<p>Alle Sigils mit Reagenz und Slate. Reagenzien entstehen am Alchemy Table und brauchen einen Orb der angegebenen Stufe; das Sigil selbst entsteht im Array aus Reagenz und Slate. Die Slate legt fest, ab welcher Altar-Stufe es geht. Die LP-Kosten stehen in der Config (<code>[sigil_cost]</code>). Mehrere Sigils passen in den Sigil of Holding, viele auch als Curio an den Körper.</p>`,
          table: {
            head: ["Sigil", "Reagenz (Orb-Stufe)", "Slate", "Kosten"],
            rows: [
              ["bloodmagic:item/divinationsigil", "Divination Sigil", "kein Reagenz, Redstone", "Blank", "–"],
              ["bloodmagic:item/watersigil", "Water Sigil", "Zucker, 2 Water Bucket (1)", "Blank", "100 je Quelle"],
              ["bloodmagic:item/lavasigil", "Lava Sigil", "Lava Bucket, Redstone, Cobblestone, Block of Coal (1)", "Blank", "1000 je Quelle"],
              ["bloodmagic:item/seersigil", "Seer's Sigil", "Glowstone Dust, 2 Glas, Divination Sigil (1)", "Reinforced", "–"],
              ["bloodmagic:item/airsigil", "Air Sigil", "Ghast Tear, 2 Federn (2)", "Reinforced", "50 je Stoß"],
              ["bloodmagic:item/miningsigil_deactivated", "Sigil of the Fast Miner", "Eisen-Spitzhacke, -Axt, -Schaufel, Schwarzpulver (2)", "Reinforced", "100 je 5 s"],
              ["bloodmagic:item/growthsigil_deactivated", "Sigil of the Green Grove", "2 Setzlinge, Zuckerrohr, Zucker (2)", "Reinforced", "150"],
              ["bloodmagic:item/voidsigil", "Void Sigil", "Bucket, 2 String, Schwarzpulver (2)", "Reinforced", "50 je Block"],
              ["bloodmagic:item/sigilofholding", "Sigil of Holding", "Truhe, Leder, 2 String (2)", "Imbued", "–"],
              ["bloodmagic:item/sigilofmagnetism_deactivated", "Sigil of Magnetism", "String, 2 Gold, Block of Iron (3)", "Imbued", "50 je 5 s"],
              ["bloodmagic:item/icesigil_deactivated", "Sigil of the Frozen Lake", "Packed Ice, Snow Block, Snowball, Water Bucket (3)", "Imbued", "100"],
              ["bloodmagic:item/bloodlightsigil", "Sigil of the Blood Lamp", "Glowstone Dust, Fackel, 2 Redstone (3)", "Imbued", "10 je Licht"],
              ["bloodmagic:item/sigilofsuppression_deactivated", "Sigil of Suppression", "Teleposer, Void Sigil, Gold, Bucket (4)", "Demonic", "400"],
              ["bloodmagic:item/telepositionsigil", "Teleposition Sigil", "Teleposer, Gold, Ender Pearl, Chorus Fruit (4)", "Demonic", "1000 je Sprung"],
            ],
          },
          needs: [["Reagenzien", "m", "Alchemy Table"], ["Slates", "m"], ["Arcane Ashes", "m"]],
        },
        {
          t: "Alchemy Flasks",
          items: [
            ["bloodmagic:item/potionflask_underlay+potionflask_outline+potionflask_overlay", "Alchemy Flask", "Glass Bottle + 4000 LP; acht Schlucke"],
            ["bloodmagic:item/simplecatalyst", "Simple Catalyst", "Zucker, Redstone, Glowstone, Schwarzpulver, Nether Wart ergeben 2; Orb-Stufe 2"],
            ["bloodmagic:item/mundanepowercatalyst", "Small Power Catalyst, Small Lengthening Catalyst", "mit Saturated Tau bzw. Tau Fruit; Orb-Stufe 4"],
            ["bloodmagic:item/combinationalcatalyst", "Combinational Catalyst", "macht aus zwei Wirkungen eine dritte, etwa Suspended + Levitation zu Flight"],
            ["bloodmagic:item/cyclingcatalyst", "Simple Cycling Catalyst, Weak Filling Agent", "Reihenfolge ändern, Flask auffüllen"],
            ["bloodmagic:item/averagepowercatalyst", "Standard Power Catalyst, Standard Lengthening Catalyst", "mit Hellforged Sand; bis Stufe III bzw. 21:20 Minuten je Schluck"],
          ],
          text: `<p>Das Trank-System von Blood Magic läuft am Alchemy Table. Eine <b>Alchemy Flask</b> fasst acht Schlucke und kann mehrere Wirkungen zugleich tragen: Man braut die fertige Flask einfach noch einmal mit der nächsten Zutat. <b>Catalysts</b> verlängern oder verstärken die oberste Wirkung, ähnlich Redstone und Glowstone bei normalen Tränken. Splash- und Lingering-Fassungen gibt es auch; leere Flasks füllt man mit Wasser wieder auf.</p>
<p>In den Daten stehen 110 Flask-Rezepte. Neben den Vanilla-Wirkungen bringt der Mod eigene: Bounce, Flight, Gravity, Grounded, Hard Cloak, Heavy Heart, Obsidian Cloak, Passive, Spectral Sight und Suspended.</p>`,
          needs: [["Glass Bottle", "v"], ["Simple Catalyst", "m"], ["Tau", "m", "für die besseren Catalysts"], ["Hellforged Sand", "m", "Standard-Catalysts"]],
        },
        {
          t: "Anointments",
          items: [
            ["bloodmagic:item/alchemic_vial", "Slate-infused Vial", "Blank Slate + 5 Glas ergeben 8"],
          ],
          text: `<p><b>Anointments</b> sind laut Buch Tränke für Werkzeuge, Waffen und Sprengladungen. Man trägt sie mit Rechtsklick auf das Item in der anderen Hand auf oder am Smithing Table; sie nutzen sich mit jeder Benutzung ab statt nach Zeit. Jede gibt es in fünf Fassungen: Grundstufe (Orb-Stufe 1), L (viermal länger, mit Tau Oil), II (stärker, mit Saturated Tau), XL und III (mit Hellforged Sand, Orb-Stufe 4).</p>`,
          table: {
            head: ["Anointment", "Wirkung laut Buch", "für"],
            rows: [
              ["bloodmagic:item/alchemic_liquid+alchemic_vial+alchemic_ribbon", "Honing Oil", "+3 Nahkampfschaden", "Werkzeuge, Schwerter"],
              [null, "Holy Water", "+5 Schaden gegen Untote", "Werkzeuge, Schwerter"],
              [null, "Fortuna Extract", "mehr Ertrag, stapelt mit Fortune", "Werkzeuge, Schwerter, Charges"],
              [null, "Soft Coating", "Silk Touch", "Werkzeuge, Schwerter, Charges"],
              [null, "Slow-burning Oil", "schmilzt abgebaute Blöcke", "Werkzeuge, Schwerter, Charges"],
              [null, "Void Essence", "löscht einfache Blöcke wie Stein, Erde, Netherrack", "Werkzeuge, Schwerter, Charges"],
              [null, "Plunderer's Glint", "mehr Mob-Drops, stapelt mit Looting", "Werkzeuge, Schwerter"],
              [null, "Miner's Secrets", "+2 Erfahrung je Erzblock", "Werkzeuge, Schwerter"],
              [null, "Repairing Salve", "repariert bei Benutzung um 1 Punkt", "Werkzeuge, Schwerter"],
              [null, "Archer's Polish", "Pfeile +50 % schneller und stärker", "Bögen, Armbrüste"],
              [null, "Iron Tip", "Pfeilschaden +25 %", "Bögen, Armbrüste"],
              [null, "Dexterity Alkahest", "Spannzeit −33 %", "Bögen, Armbrüste"],
            ],
          },
          needs: [["Slate-infused Vial", "m"], ["Nether Wart", "v"], ["Tau", "m", "höhere Fassungen"]],
        },
      ],
    },
    {
      t: "Stufe 3: Rituale, Living Armour, ARC",
      sub: "Buch „Tier Three“ und „Dungeoneering (Tier-3)“. Mit dem Magician's Orb kommen Rituale, die lernende Rüstung, die Erzverarbeitung im ARC und der erste Weg ins Demon Realm.",
      steps: [
        {
          t: "Altar der Stufe 3, Imbued Slate, Magician's Orb",
          plan: {
            name: "Blood Altar, Stufe 3", size: "7×4×7",
            key: { A: ALTAR, R: RUNE, P: PILLAR, G: ["Glowstone (laut Buch auch Froglight)", "minecraft:block/glowstone"] },
            layers: [".RRRRR. R.....R R.....R R.....R R.....R R.....R .RRRRR.", "P.....P ....... ..RRR.. ..R.R.. ..RRR.. ....... P.....P", "P.....P ....... ....... ...A... ....... ....... P.....P", "G.....G ....... ....... ....... ....... ....... G.....G"],
            form: "28 Runen: der Ring der Stufe 2 und je fünf Runen eine Ebene tiefer und zwei Blöcke weiter außen. In den Ecken Säulen aus zwei beliebigen festen Blöcken mit Glowstone obenauf. Ab dieser Stufe dürfen alle Runen Upgrade-Runen sein.",
          },
          items: [
            ["bloodmagic:item/infusedslate", "Imbued Slate", "Reinforced Slate + 5000 LP"],
            ["bloodmagic:item/magicianbloodorb", "Magician's Blood Orb", "Block of Gold + 25 000 LP; 150 000 LP Fassung"],
          ],
          text: `<p>Die Stufe 3 ist der große Sprung: Erst sie macht Rituale möglich, und ihr Orb öffnet am Alchemy Table und an der Werkbank die Rezepte der Stufe 3. Die Altar-Stufe kontrolliert man mit dem Divination Sigil.</p>`,
          needs: [["Runen", "m", "28"], ["Glowstone", "v", "4 Blöcke"], ["Block of Gold", "v"], ["Reinforced Slate", "m"]],
        },
        {
          t: "Ritual Stones, Ritual Diviner, Activation Crystal",
          pics: [["render:model/bm_master_ritual_stone", "Master Ritual Stone"]],
          items: [
            ["bloodmagic:item/waterscribetool", "Inscription Tool: Water, Inscription Tool: Fire, Inscription Tool: Earth, Inscription Tool: Air", "Block of Lapis, Magma Cream, Obsidian bzw. Ghast Tear; je 1000 LP"],
            ["bloodmagic:item/ritualdiviner", "Ritual Diviner", "4 Diamant, Stick, die vier Inscription Tools; setzt Rituale von selbst"],
            ["bloodmagic:block/ritualstone", "Ritual Stone", "4 Obsidian, 4 Reinforced Slate, Apprentice Orb ergeben 4"],
            ["render:model/bm_master_ritual_stone_s", "Master Ritual Stone", "4 Obsidian, 4 Ritual Stone, Magician's Orb"],
            ["bloodmagic:item/activationcrystalweak", "Weak Activation Crystal", "Lava Crystal + 10 000 LP"],
          ],
          text: `<p>Ein <b>Ritual</b> ist ein Muster aus Ritual Stones um einen <b>Master Ritual Stone</b>, jeder Stein mit einem Element bemalt. Der <b>Ritual Diviner</b> baut das gewählte Muster aus den mitgeführten Steinen selbst auf; dann startet ein gebundener <b>Activation Crystal</b> das Ritual. Es zahlt einmal beim Start und danach laufend aus dem Netz des Kristall-Besitzers, und jedes Ritual hört auf ein Redstone-Signal.</p>
<p>Alle Rituale des Mods brauchen nur den Weak Activation Crystal; der Awakened Activation Crystal steht im Buch unter „Not Yet Implemented“. Der einfache Diviner kennt nur einen Teil der Rituale, die übrigen kommen mit dem Diviner [Dusk] auf Stufe 4.</p>`,
          needs: [["Obsidian", "v", "viel"], ["Reinforced Slate", "m"], ["Diamant", "v", "4"], ["Lapis, Magma Cream, Ghast Tear", "v"], ["Lava Crystal", "m"]],
        },
        {
          t: "Rituale mit dem einfachen Diviner",
          text: `<p>Die Wirkung steht in der Sprachdatei, die Kosten in den Klassen der Rituale. „Laufend“ ist der Grundbetrag je Takt; viele Rituale werden mit Demon Will im Chunk billiger oder stärker, und ein größerer Wirkbereich (Ritual Tinkerer) kostet mehr.</p>`,
          table: {
            head: ["Ritual", "Start (LP)", "laufend", "Wirkung"],
            rows: [
              [null, "Ritual of the Full Spring", "500", "25 LP je Tick", "erzeugt Wasser am Master Ritual Stone"],
              [null, "Call of the Zephyr", "1 000", "1 LP je Tick", "sammelt Items ein und legt sie in die Truhe"],
              [null, "Ritual of Magnetism", "5 000", "50 LP je 40 Ticks", "holt Erze aus dem Boden, Radius 3; mit Eisen-, Gold-, Diamantblock darunter 7, 15, 31"],
              [null, "Domain of The Filler", "5 000", "50 LP je 5 Ticks", "setzt Blöcke aus der Truhe in die Welt"],
              [null, "Ritual of the Green Grove", "5 000", "20 LP", "lässt Pflanzen wachsen"],
              [null, "Ritual of the High Jump", "5 000", "je nach Höhe", "schleudert Wesen in die Luft"],
              [null, "The Sinner's Burden", "5 000", "1 LP je Tick", "mehr Schwerkraft, kein Springen"],
              [null, "Serenade of the Nether", "10 000", "500 LP je Tick", "erzeugt Lava"],
              [null, "Crash of The Timberman", "20 000", "10 LP je Tick", "fällt Bäume, Drops in die Truhe"],
              [null, "Gathering of the Forsaken Souls", "40 000", "2 LP je 25 Ticks", "trägt Will Catalysts auf Kristalle auf"],
              [null, "Ritual of the Geode's Bounty", "50 000 (Config)", "50 LP (Config)", "beschleunigt Budding-Blöcke und erntet die Kristalle"],
              [null, "Edge of the Hidden Realm", "80 000", "–", "ruft eine Inversion Pillar: Zugang zum Antechamber"],
              [null, "Ritual of the Satiated Stomach", "100 000", "100 LP je 20 Ticks", "füllt die Sättigung aus Essen in der Truhe"],
              [null, "Pathway to the Endless Realm", "150 000", "–", "Zugang zum eigentlichen Demon Realm (Stufe 4, siehe dort)"],
            ],
          },
          needs: [["Ritual Stones", "m"], ["LP im Netz", "m"]],
        },
        {
          t: "Living Armour",
          items: [
            ["bloodmagic:item/reagentbinding", "Binding Reagent", "Glowstone Dust, Redstone, Schwarzpulver, Gold Nugget; Orb-Stufe 3"],
            ["bloodmagic:item/livingplate", "Living Helmet, Living Chestplate, Living Leggings, Living Boots", "Array: Binding Reagent, dann das Eisen-Rüstungsteil"],
            ["bloodmagic:item/upgradetrainer", "Living Armour Training Bracelet", "Array: Binding Reagent, dann Diamant"],
            ["bloodmagic:item/upgradetome", "Living Armour Upgrade Tome", "entsteht beim Entfernen von Upgrades; einige werden gecraftet"],
          ],
          text: `<p>Die <b>Living Armour</b> beginnt laut Buch auf Eisen-Niveau, hat die Haltbarkeit von Diamant und lernt durch Benutzung: Wer viel läuft, bekommt Quick Feet, wer viel abbaut, Dwarven Might. Die Upgrades kosten Punkte; laut Config hat die Rüstung 100, nach dem Ritual of Living Evolution 300. Repariert wird sie am Amboss mit Binding Reagent. Laut Buch braucht man mindestens einen Common Tartaric Gem für die nötige Will.</p>
<p>Die Upgrade-Dateien (<code>data/bloodmagic/living_armor</code>) enthalten drei weitere Upgrades, die das Buch nicht nennt: Trick Shot, True Strike und Grave Digger; wie sie trainiert werden, ist nicht ausgelesen.</p>
<p>Mit dem <b>Training Bracelet</b> legt man fest, was gelernt werden darf. Auf Stufe 4 lassen sich Upgrades als Tomes abnehmen und neu verteilen, und <b>Downgrades</b> geben Punkte gegen einen Nachteil zurück: Battle Hungry, Concrete Shoes, Crippled Arm, Diseased, Dulled Blade, Weakened Pick (im Buch „Leadened Pick“), Limp Leg, Quenched, Storm Trooper.</p>`,
          table: {
            head: ["Upgrade", "Wirkung laut Buch", "trainiert durch", "max."],
            rows: [
              [null, "Quick Feet", "Laufgeschwindigkeit bis 150 %", "Laufen", "10"],
              [null, "Strong Legs", "Sprung bis +7,5 Blöcke, 83 % weniger Fallschaden", "Springen", "10"],
              [null, "Soft Fall", "Fallschaden bis zur Immunität", "Fallschaden", "5"],
              [null, "Dwarven Might", "schneller beim Abbau gleicher Blöcke, später Haste", "Abbauen", "10"],
              [null, "Fierce Strike", "mehr Nahkampfschaden", "Nahkampf", "10"],
              [null, "Charging Strike", "Sprintangriffe bis +50 %", "Schaden im Sprint", "5"],
              [null, "Tough", "Schutz vor allem außer Geschossen", "Schaden nehmen", "10"],
              [null, "Pin Cushion", "Schutz vor Pfeilen", "beschossen werden", "10"],
              [null, "Healthy", "bis 50 halbe Herzen mehr", "Heilung", "10"],
              [null, "Body Builder", "Rückstoßschutz und Gesundheit", "Essen", "5"],
              [null, "Gift of Ignis", "Feuerresistenz", "brennen", "5"],
              [null, "Poison Resistance", "heilt Gift", "vergiftet werden", "5"],
              [null, "Experienced", "bis 150 % Erfahrung von Mobs", "Erfahrung sammeln", "10"],
              [null, "Tough Palms", "Selbstopfer bis +150 %", "Sacrificial Knife", "10"],
              [null, "Gilded", "Piglins friedlich wie mit Goldrüstung", "Piglin direkt Gold geben", "1"],
              [null, "Repairing", "repariert alle 100 Ticks ein Rüstungsteil", "Brustplatte reparieren", "1"],
              [null, "Brilliance", "bis +5 Rüstung, +8 Härte", "gecraftet: 5 Diamant + Binding Reagent", "5"],
              [null, "Elytra", "eingebaute Elytra", "gecraftet: Array mit Elytra", "–"],
              [null, "Socketed", "Curios-Plätze für Blood-Magic-Items", "gecraftet: Paper, Soul Snare, Eisenstaub, Gold", "–"],
            ],
          },
          needs: [["Eisenrüstung", "v"], ["Binding Reagent", "m"], ["Arcane Ashes", "m"], ["Magician's Orb", "m"]],
        },
        {
          t: "Alchemical Reaction Chamber und Erzverarbeitung",
          pics: [["render:model/bm_arc", "Alchemical Reaction Chamber"]],
          items: [
            ["render:model/bm_arc_s", "Alchemical Reaction Chamber", "3 Stein, 2 Imbued Slate, Magician's Orb, 2 Block of Iron, Furnace"],
            ["bloodmagic:item/explosivepowder", "Explosive Powder", "2 Schwarzpulver + Kohlestaub; Werkzeug für Fragmente"],
            ["bloodmagic:item/resonator", "Crystal Resonator", "Stein, Kupfer, Demon Will Crystal; braucht 1200 Will im Gem"],
            ["bloodmagic:item/primitive_hydration_cell", "Primitive Hydration Cell", "6 Cobblestone, Blank Slate, Water Bucket, Magician's Orb"],
            ["bloodmagic:item/furnacecell_primitive", "Primitive Fuel Cell", "6 Cobblestone, Blank Slate, Block of Coal, Magician's Orb; 128 Ofenvorgänge"],
            ["bloodmagic:item/sanguinereverter", "Sanguine Reverter", "Shears, Stein, Imbued Slate, Eisen; macht Orbs, Netherite und Reinforced Runes rückgängig"],
            ["bloodmagic:item/corrupted_dust", "Corrupted Dust", "9 Tiny Corrupted Dust; steigert am Alchemy Table den Ertrag weiter"],
          ],
          text: `<p>Die <b>ARC</b> verarbeitet ein Item mit einem eingelegten <b>Werkzeug</b>, das sich abnutzt (Unbreaking und Mending helfen). Sie ist Ofen, Erz-Verdreifacher, Waschanlage und die einzige Quelle für Weak Blood Shards. Laut Buch bringt sie 2,5 Barren je Raw Ore oder 4,5 je Erzblock. Werkzeuge kommen von oben, Eingaben von der Seite, Ergebnisse unten heraus.</p>`,
          table: {
            head: ["Werkzeug", "Eingang", "Ergebnis laut Buch"],
            rows: [
              ["bloodmagic:item/basiccuttingfluid", "Cutting Fluid", "Erzblock / Raw Ore / Gravel", "3 Sand / im Schnitt 1,5 Sand / 1 Sand"],
              ["bloodmagic:item/explosivepowder", "Explosive Powder", "Erzblock / Raw Ore / Netherrack", "im Schnitt 4,5 Fragmente / 2,25 Fragmente / Sulfur + 50 mB Lava"],
              ["bloodmagic:item/resonator", "Crystal Resonator", "Fragment", "Gravel und Tiny Corrupted Dust"],
              ["bloodmagic:item/primitive_hydration_cell", "Hydration Cell + Wasser", "Sand, Terrakotta, Erde, Wolle, Cobblestone, Kupfer, Betonpulver", "Clay, Mud, entfärbt, Moos, Patina, Beton"],
              ["bloodmagic:item/sanguinereverter", "Sanguine Reverter", "Saturated Tau / Orb / Netherite / Reinforced Rune", "Weak Blood Shard / Eingangszutat zurück"],
            ],
          },
          needs: [["Imbued Slate", "m", "2"], ["Block of Iron", "v", "2"], ["Magician's Orb", "m"], ["Schwarzpulver, Kohle", "v"]],
        },
        {
          t: "Edge of the Hidden Realm, Tau, Weak Blood Shard",
          items: [
            ["bloodmagic:item/simplekey", "Iron Key", "an der Hellfire Forge: Block of Redstone, 2 Eisen, Imbued Slate; auch in Truhen"],
            ["bloodmagic:item/weak_tau", "Tau Fruit", "aus Truhen der Simple Dungeon, danach anbaubar"],
            ["bloodmagic:item/strong_tau", "Saturated Tau", "reift, wenn ein Mob auf der Pflanze steht; oder ARC mit Life Essence"],
            ["bloodmagic:item/tauoil", "Tau Oil", "3 Tau Fruit + Bone Meal; Orb-Stufe 3"],
            ["bloodmagic:item/weakbloodshard", "Weak Blood Shard", "ARC: Saturated Tau mit Sanguine Reverter, 20 % Chance auf einen zweiten"],
          ],
          text: `<p>Das Ritual <b>Edge of the Hidden Realm</b> ruft eine Inversion Pillar. Ein Rechtsklick bringt in das <b>Antechamber</b>: eine Truhe mit Grundbeute und manchmal Iron Keys, Türen mit Dungeon Seals, die ein Key öffnet, und eine Säule zurück. Die Räume dahinter enthalten Beute, Monster, Fallen und manchmal Rituale.</p>
<p>Wichtigster Fund ist die <b>Tau Fruit</b>. Wächst sie mit einem Mob darauf, saugt sie ihm Leben ab und wird zur <b>Saturated Tau</b>. In der ARC wird daraus der <b>Weak Blood Shard</b>, den Stufe 4 (Bloodstone, Master Orb) und der Greater Tartaric Gem brauchen. Tau Oil verlängert Anointments und ergibt bessere Cutting Fluid.</p>`,
          needs: [["Ritual Stones", "m"], ["80 000 LP", "m"], ["Keys", "m"], ["ARC mit Sanguine Reverter", "m"], ["Mobs", "v"]],
        },
        {
          t: "Item Routing",
          items: [
            [null, "Master Routing Node", "Block of Iron, Diamant, Imbued Slate; Hellfire Forge, 400 Will nötig"],
            [null, "Routing Node, Input Routing Node, Output Routing Node", "Stein, Glas, Redstone, Glowstone; Input mit Gold, Output mit Eisen"],
            ["bloodmagic:item/noderouter", "Node Router", "Stick, Reinforced Slate, 2 Lapis; verbindet Nodes bis 16 Blöcke"],
            ["bloodmagic:item/componentframeparts", "Filter Parts", "Glas, Stein, Blank Slate ergeben 2; Orb-Stufe 3"],
            ["bloodmagic:item/itemrouterfilterexact", "Standard Item Filter, Tag Item Filter, Mod Item Filter, Enchantments Item Filter, Composite Item Filter", "Filter Parts + je eigene Zutat"],
            ["bloodmagic:item/mastercore", "Basic Routing Logic Upgrade, Basic Routing Speed Upgrade", "mehr Items je Takt bzw. kürzerer Takt"],
          ],
          text: `<p>Das Logistiksystem des Mods: Items fliegen zwischen Nodes, gesteuert von genau einem <b>Master Routing Node</b>. Input Nodes ziehen aus angrenzenden Inventaren, Output Nodes legen hinein; jede Seite bekommt einen <b>Filter</b> und eine Priorität. Grundleistung 16 Items je Sekunde; jedes Logic Upgrade +8 (bis 16 Stück, also 144), jedes Speed Upgrade einen Tick weniger (bis 19).</p>`,
          needs: [["Imbued Slate", "m"], ["Common Tartaric Gem", "m", "400 Will"], ["Eisen, Gold, Glas, Redstone, Glowstone", "v"]],
        },
      ],
    },
    {
      t: "Stufe 4: Dusk, Will-Aura, Demon Realm",
      sub: "Buch „Tier Four“, „Better Armour“, „Aspected Will“ und „The Demon Realm (Tier-4)“. Bloodstone aus Weak Blood Shards hebt den Altar an; der Diviner [Dusk] schaltet die übrigen Rituale frei, die Will-Aura die Aspekte, das Endless Realm das Demonite.",
      steps: [
        {
          t: "Altar der Stufe 4, Demonic Slate, Master Orb",
          plan: {
            name: "Blood Altar, Stufe 4", size: "11×6×11",
            key: { A: ALTAR, R: RUNE, P: PILLAR, G: ["Glowstone", "minecraft:block/glowstone"], B: ["Large Bloodstone Brick oder Bloodstone Brick", "bloodmagic:block/largebloodstonebrick"] },
            layers: [
              "..RRRRRRR.. ........... R.........R R.........R R.........R R.........R R.........R R.........R R.........R ........... ..RRRRRRR..",
              "P.........P ........... ...RRRRR... ..R.....R.. ..R.....R.. ..R.....R.. ..R.....R.. ..R.....R.. ...RRRRR... ........... P.........P",
              "P.........P ........... ..P.....P.. ........... ....RRR.... ....R.R.... ....RRR.... ........... ..P.....P.. ........... P.........P",
              "P.........P ........... ..P.....P.. ........... ........... .....A..... ........... ........... ..P.....P.. ........... P.........P",
              "P.........P ........... ..G.....G.. ........... ........... ........... ........... ........... ..G.....G.. ........... P.........P",
              "B.........B ........... ........... ........... ........... ........... ........... ........... ........... ........... B.........B",
            ],
            form: "56 Runen: dazu je sieben Runen eine Ebene unter dem Ring der Stufe 3 und zwei Blöcke weiter außen. In den neuen Ecken Säulen aus vier festen Blöcken mit Bloodstone obenauf.",
          },
          items: [
            ["bloodmagic:block/largebloodstonebrick", "Large Bloodstone Brick", "Stein + Weak Blood Shard ergeben 8; 4 Stück ergeben 4 Bloodstone Brick"],
            ["bloodmagic:item/demonslate", "Demonic Slate", "Imbued Slate + 15 000 LP"],
            ["bloodmagic:item/masterbloodorb", "Master Blood Orb", "Weak Blood Shard + 40 000 LP; 1 000 000 LP Fassung"],
          ],
          text: `<p>Die Kappen der Stufe 4 gibt es nur über Weak Blood Shards, also über das Antechamber, Tau und die ARC. Mit dem Master Orb gehen die Runen der Stufe 4 und die übrigen Werkbank-Rezepte.</p>`,
          needs: [["Runen", "m", "56"], ["Weak Blood Shard", "m"], ["Imbued Slate", "m"], ["feste Blöcke, Glowstone", "v"]],
        },
        {
          t: "Ritual Diviner [Dusk], Ritual Tinkerer, Greater Tartaric Gem",
          items: [
            ["bloodmagic:item/duskscribetool", "Inscription Tool: Dusk", "Block of Coal + 2000 LP"],
            ["bloodmagic:item/ritualdivinerdusk", "Ritual Diviner [Dusk]", "Ritual Diviner, 2 Demonic Slate, 2 Inscription Tool: Dusk"],
            ["bloodmagic:item/ritualtinkerer", "Ritual Tinkerer", "2 Glas, Master Orb, 2 Gold, 2 Demonic Slate"],
            ["bloodmagic:item/soulgemgreater", "Greater Tartaric Gem", "4096 Will; Common Gem, Demonic Slate, Weak Blood Shard, Demon Will Crystal"],
          ],
          text: `<p>Der <b>Ritual Tinkerer</b> hat drei Modi: Er zeigt, was ein Ritual tut, legt fest, welche Will-Aspekte es aus der Aura verbraucht (Kristalle in der Hotbar), und verändert den Wirkbereich. Größere Bereiche kosten entsprechend mehr LP.</p>`,
          needs: [["Demonic Slate", "m"], ["Master Orb", "m"], ["Block of Coal", "v"]],
        },
        {
          t: "Rituale mit dem Diviner [Dusk]",
          table: {
            head: ["Ritual", "Start (LP)", "laufend", "Wirkung"],
            rows: [
              [null, "Ritual of Speed", "1 000", "5 LP je Tick", "schleudert Wesen in Richtung des Rituals"],
              [null, "Ritual of the Crusher", "5 000", "7 LP", "baut Blöcke im Bereich ab, Items in die Truhe"],
              [null, "Yawning of the Void", "5 000", "10 LP", "zerstört Blöcke in einem großen Bereich"],
              [null, "Ritual of the Shepherd", "10 000", "2 LP", "Jungtiere wachsen schneller"],
              [null, "Penance of the Leadened Soul", "10 000", "10 LP je Tick", "setzt Downgrades auf die Living Armour"],
              [null, "Rhythm of the Beating Anvil", "15 000", "10 LP je 4 Ticks", "Autocrafting nach Item Filter; mit Will auch Alchemy Table und Hellfire Forge"],
              [null, "Dawn of the New Moon", "20 000", "10 LP je Tick", "hebt eine Kugel aus dem Boden in die Luft"],
              [null, "Focus of the Ellipsoid", "20 000", "10 LP je Tick", "baut eine hohle Kugel aus Blöcken der Truhe"],
              [null, "Reap of the Harvest Moon", "20 000", "20 LP je 5 Ticks", "erntet Pflanzen"],
              [null, "Resonance of the Faceted Crystal", "20 000", "1000 LP je 20 Ticks", "teilt einen Raw-Kristall in die vier Aspekte"],
              [null, "Ritual of the Feathered Knife", "25 000", "20 LP", "nimmt Spielern im Bereich Blut für den Altar"],
              [null, "Ritual of Regeneration", "25 000", "100 LP je 50 Ticks", "Regeneration für Verletzte im Bereich"],
              [null, "Sound of the Cleansing Soul", "25 000", "–", "nimmt alle Upgrades als Tomes von der Living Armour"],
              [null, "Crack of the Fractured Crystal", "40 000", "50 LP je 25 Ticks", "bricht Kristallcluster im Bereich ab"],
              [null, "Well of Suffering", "40 000", "2 LP je 25 Ticks", "verletzt Mobs und gibt das Blut in einen Altar"],
              [null, "Ritual of Living Evolution", "50 000", "–", "hebt die Punkte der Living Armour auf 300"],
              [null, "Mark of the Falling Tower", "250 000", "–", "ruft gegen eine Opfergabe einen Meteor (eigener Schritt)"],
              [null, "Reverence of the Condor", "1 000 000", "5 LP je 10 Ticks", "Flug im Bereich"],
            ],
          },
          text: `<p>Laut Buch wird das LP mit diesen Ritualen automatisch: Well of Suffering und Feathered Knife speisen einen Altar, in dem ein Orb liegt. Die Kosten stammen aus den Klassen der Rituale; „–“ heißt, es wird nur der Start bezahlt.</p>`,
          needs: [["Ritual Diviner [Dusk]", "m"], ["Ritual Stones, Dusk-Steine", "m"], ["LP im Netz", "m"]],
        },
        {
          t: "Will-Aura, Kristalle und Aspekte",
          pics: [["render:model/bm_demon_crucible", "Demon Crucible"], ["render:model/bm_demon_crystallizer", "Demon Crystallizer"], ["render:model/bm_demon_pylon", "Demon Pylon"]],
          items: [
            ["render:model/bm_demon_crucible_s", "Demon Crucible", "Cauldron, Stein, Lapis, Diamant; 400 Will nötig"],
            ["render:model/bm_demon_crystallizer_s", "Demon Crystallizer", "Hellfire Forge, Stein, Lapis, Glas; 500 Will nötig"],
            ["render:model/bm_demon_pylon_s", "Demon Pylon", "Will Crystal, Stein, Lapis, Block of Iron; zieht Will aus Nachbar-Chunks"],
            ["bloodmagic:item/demonwillgauge", "Demon Will Aura Gauge", "Gold, Redstone, Glas, Will Crystal; zeigt die Aura des Chunks"],
            ["bloodmagic:item/defaultcrystal", "Demon Will Crystal, Corrosive Will Crystal, Destructive Will Crystal, Vengeful Will Crystal, Steadfast Will Crystal", "Raw und die vier Aspekte"],
            ["bloodmagic:item/rawcatalyst", "Raw Will Catalyst", "Nether Wart, Tau Oil, Sulfur, Kartoffel; die anderen Aspekte mit Pumpkin Seeds, Beetroot, Melon Seeds, Wheat Seeds"],
          ],
          text: `<p>Im <b>Demon Crucible</b> verbrennt man Will und gibt sie an die <b>Aura</b> des Chunks ab, höchstens 100 je Art. Aus der Aura zehren Rituale, und der <b>Demon Crystallizer</b> lässt daraus Kristalle wachsen: die erste Spitze kostet 100 Will, jede weitere 45, bis zu sieben. Das Ritual Resonance of the Faceted Crystal spaltet einen Raw-Kristall in die vier <b>Aspekte</b> Steadfast, Destructive, Vengeful und Corrosive.</p>
<p>Aspekte verändern die Sentient-Waffen (Raw mehr Schaden, Corrosive Gift oder Wither, Vengeful Tempo, Steadfast Absorption, Destructive den meisten Schaden bei weniger Tempo) und viele Rituale. Crucible und Crystallizer gehen schon mit einem Common Gem; die Aspekte brauchen das Dusk-Ritual. <b>Will Catalysts</b> beschleunigen Kristallcluster zehnfach und senken die Kosten je Spitze auf 25.</p>`,
          needs: [["Common Tartaric Gem", "m", "400–500 Will"], ["Tau Oil", "m", "Catalysts"], ["Lapis, Diamant, Cauldron", "v"], ["Greater Gem", "m", "Kristallcluster, 1200 Will"]],
        },
        {
          t: "Teleposer",
          pics: [["render:model/bm_teleposer", "Teleposer"]],
          items: [
            ["bloodmagic:item/teleposerfocus", "Teleposition Focus", "Ender Pearl + 2000 LP; tauscht 1×1×1"],
            ["render:model/bm_teleposer_s", "Teleposer", "6 Gold, 2 Ender Pearl, Teleposition Focus"],
            ["bloodmagic:item/enhancedteleposerfocus", "Enhanced Teleposition Focus", "Focus + 10 000 LP; 3×3×3"],
            ["bloodmagic:item/reinforcedteleposerfocus", "Reinforced Teleposition Focus", "Enhanced Focus + Weak Blood Shard; 5×5×5"],
          ],
          text: `<p>Zwei <b>Teleposer</b> tauschen auf ein starkes Redstone-Signal alles über sich aus: Blöcke, Items, Mobs, Spieler. Laut Buch kostet das 1 LP je zwei Blöcke Entfernung, höchstens 1000 LP je Block oder Wesen und 10 000 LP insgesamt. Teleposer lassen sich einseitig, beidseitig oder im Ring verketten. Sie sind Zutat der Reagenzien für Suppression und Teleposition Sigil.</p>`,
          needs: [["Ender Pearl", "v"], ["Gold", "v"], ["Weak Blood Shard", "m", "Reinforced"]],
        },
        {
          t: "Mark of the Falling Tower: Meteore",
          text: `<p>Das Ritual verbraucht eine Opfergabe, die man auf den Master Ritual Stone wirft, und ruft einen <b>Meteor</b> aus Erzen, der auf das Ritual stürzt. Jede Opfergabe ist ein eigenes Rezept mit eigenen LP-Kosten. Die Rezepte für Create, Mystical Agriculture und Thermal stehen unter der Bedingung, dass der Mod geladen ist, und gelten im Pack nicht.</p>`,
          table: {
            head: ["Opfergabe", "LP", "Meteor"],
            rows: [
              ["minecraft:block/stone", "Stein", "1 000 000", "großer Steinmeteor mit Kohle, Eisen, Apatit"],
              ["minecraft:item/diamond", "Diamant", "1 000 000", "Kern aus Diamanterz, Hülle aus Cobblestone mit Diamant-, Smaragd- und den Erzen der Tags für Saphir, Rubin, Zinnober"],
              ["minecraft:block/iron_block", "Block of Iron", "1 000 000", "Eisenerz mit Gold, Kupfer, Zinn, Silber, Blei, Lapis, Redstone"],
              ["minecraft:item/glowstone_dust", "Glowstone Dust", "1 000 000", "Netherrack mit Glowstone, Quarz- und Nether-Golderz; Kern aus Blackstone mit Ancient Debris und Gilded Blackstone"],
              ["minecraft:item/bone", "Bone", "250 000", "Stein mit Kupfer und Silber; Datei <code>ice_fire</code>, gilt über <code>forge:bones</code> auch für Vanilla-Knochen"],
              ["mekanism:item/alloy_infused", "Infused Alloy", "500 000", "Mekanism: Kern aus Uranblöcken, Stein mit Osmium, Kupfer, Zinn, Blei, Uran, Fluorit (Tag <code>forge:alloys/advanced</code>)"],
              ["immersiveengineering:item/wirecoil_copper", "LV Wire Coil", "500 000", "IE: Stein mit Kupfer, Blei, Nickel, Aluminium, Silber, Uran"],
              [null, "Certus Quartz Crystal", "500 000", "AE2: Sky Stone mit Budding Certus Quartz, Certus-, Quarz- und Fluix-Blöcken"],
            ],
          },
          needs: [["Ritual Diviner [Dusk]", "m"], ["250 000 LP Start", "m"], ["Opfergabe", "v"]],
        },
        {
          t: "Pathway to the Endless Realm, die Mines und Demonite",
          items: [
            ["bloodmagic:item/mineentrancekey", "Foreman's Key", "nicht craftbar; Truhe hinter einer Spatial Distortion"],
            ["bloodmagic:item/minekey", "Miner's Key", "Hellfire Forge: Kupfer, Will Crystal, Hellforged Ingot, Imbued Slate"],
            ["bloodmagic:block/dungeon/dungeon_ore", "Demonite", "Erzblock, nur in den Mines; ohne Silk Touch Raw Demonite"],
            ["bloodmagic:item/ingot_hellforged", "Hellforged Ingot", "Demonite im Ofen"],
            ["bloodmagic:item/sand_hellforged", "Hellforged Sand", "ARC mit Cutting Fluid"],
            ["bloodmagic:block/dungeon/dungeon_metal", "Hellforged Block", "9 Hellforged Ingot"],
            ["bloodmagic:item/hellforgedparts", "Intricate Hellforged Parts", "nur aus Truhen der Mines"],
          ],
          text: `<p>Das Ritual <b>Pathway to the Endless Realm</b> (150 000 LP; das Buch ordnet es Stufe 4 zu, gebaut wird es mit dem einfachen Diviner) führt in das eigentliche Demon Realm: härtere Gegner, bessere Beute. Kündigt eine Chat-Meldung eine <b>Spatial Distortion</b> an, liegt im Raum eine besondere Tür: entweder der Eingang zu den <b>Mines</b> oder ein Raum mit dem Foreman's Key, der sich mit einem Iron Key öffnen lässt.</p>
<p>In den Mines liegt <b>Demonite</b>, der Rohstoff für Altar-Stufe 5, den Archmage's Orb und die stärksten Tränke. Nur dort gibt es auch die <b>Intricate Hellforged Parts</b> für Reinforced Runes. Laut Config ist das Dungeon-Ritual im Survival erlaubt (<code>makeDungeonRitualCreativeOnly = false</code>).</p>`,
          needs: [["150 000 LP", "m"], ["Iron Keys", "m"], ["Rüstung und Waffen", "v"], ["Spitzhacke", "v"]],
        },
      ],
    },
    {
      t: "Stufe 5: Hellforged",
      sub: "Buch „Tier Five“: „This is the top tier.“ Hellforged Blocks an den Ecken des Altars, der Archmage's Orb und die Reinforced Runes.",
      steps: [
        {
          t: "Altar der Stufe 5, Ethereal Slate, Archmage's Orb",
          plan: {
            name: "Blood Altar, Stufe 5", size: "17×7×17",
            key: { R: RUNE, P: PILLAR, G: ["Glowstone", "minecraft:block/glowstone"], B: ["Bloodstone", "bloodmagic:block/largebloodstonebrick"], H: ["Hellforged Block", "bloodmagic:block/dungeon/dungeon_metal"] },
            count: { R: 108, P: 24, G: 4, B: 4, H: 4 },
            form: "Alles der Stufe 4 und dazu je 13 Runen eine Ebene unter dem äußersten Ring, drei Blöcke weiter außen; an jedem Ende eine Lücke, in den vier Ecken je ein Hellforged Block. Positionen aus der Klasse AltarTier des JARs.",
          },
          items: [
            ["bloodmagic:item/etherealslate", "Ethereal Slate", "Demonic Slate + 30 000 LP"],
            ["bloodmagic:item/archmagebloodorb", "Archmage's Blood Orb", "Hellforged Block + 80 000 LP; 10 000 000 LP Fassung"],
          ],
          text: `<p>Die höchste Stufe. Laut Buch steht ab hier alles offen, was Blood Magic bietet; eine Stufe 6 gibt es nicht. In der Klasse steht zwar noch eine sechste Stufe mit Kristallen, das Buch sagt aber ausdrücklich, dass sie nicht umgesetzt ist.</p>`,
          needs: [["Runen", "m", "108"], ["Hellforged Block", "m", "4 + 1 für den Orb"], ["Demonic Slate", "m"]],
        },
        {
          t: "Reinforced Runes und Hellforged-Werkzeuge",
          items: [
            ["bloodmagic:block/speedrune2", "Reinforced Speed Rune", "4 Netherite Scrap, Intricate Hellforged Parts, 2 Large Bloodstone Brick, Speed Rune, Ethereal Slate"],
            ["bloodmagic:item/hellforged_resonator", "Hellforged Resonator", "Amethyst, Gold, Will Crystal, Hellforged Ingot; 16-fache Haltbarkeit, doppelte Bonus-Ausbeute"],
            ["bloodmagic:item/advancedcuttingfluid", "Advanced Cutting Fluid", "Tau Oil, Hellforged Sand, Glow Berries, Saltpeter, Sulfur, Wasserflasche"],
            ["bloodmagic:item/hellforged_explosive_cell", "Hellforged Explosive Cell", "Schwarzpulver, Sulfur, Redstone, Quarz, Hellforged Sand, Kohlestaub"],
            [null, "Ethereal Mimic", "8 Demon Stone + Ethereal Slate ergeben 8; nimmt das Aussehen eines Blocks an, ohne fest zu sein"],
          ],
          text: `<p>Jede Rune gibt es als <b>Reinforced</b>-Fassung mit doppelter Wirkung, gebaut aus Netherite Scrap und Intricate Hellforged Parts. Laut Buch ist das „wie zwei Blood Altars in einem“: Man braucht weniger Plätze für dieselbe Leistung. Die ARC macht das Rezept mit dem Sanguine Reverter rückgängig.</p>
<p>Hellforged Sand verbessert die Werkzeuge der ARC: Advanced Cutting Fluid hält sechzehnmal so lange, arbeitet doppelt so schnell und verdoppelt die Chance auf Bonus-Ergebnisse.</p>`,
          needs: [["Netherite Scrap", "v", "4 je Rune"], ["Intricate Hellforged Parts", "m"], ["Ethereal Slate", "m"], ["Hellforged Sand", "m"]],
        },
      ],
    },
  ],
  solo: [
    {
      t: "Sprengladungen",
      text: `<p>Wurfladungen aus der Hellfire Forge, die nach kurzer Zeit zünden und die Blöcke wie mit einer Spitzhacke abbauen, auch Obsidian. Die einfachen brauchen 10 Will im Gem, die verbesserten (mit Block of Copper) 80. Mit Anointments geben sie Fortune, Silk Touch, Schmelzen oder Löschen von Abfallblöcken.</p>`,
      items: [
        [null, "Shaped Charge", "Würfel 5×5×5; Cobblestone, Charcoal, Sand, Stein ergeben 8"],
        [null, "Augmented Shaped Charge", "Würfel 7×7×7"],
        [null, "Tunneling Shaped Charge", "Tunnel 5×5×20"],
        [null, "Deforester Charge, Deforester Charge II", "Bäume: zwei Stacks Stämme bzw. 8×64"],
        [null, "Controlled Charge, Controlled Charge II", "nur Blöcke wie der getroffene: drei bzw. acht Stacks"],
        [null, "Fungal Charge, Fungal Charge II", "Riesenpilze in Overworld und Nether"],
      ],
    },
    {
      t: "Geräte und Hilfsmittel",
      items: [
        ["bloodmagic:item/experiencebook", "Tome of Peritia", "speichert Erfahrungslevel; 2 String, Block of Lapis, 2 Imbued Slate, Enchanted Book, 2 Gold, Magician's Orb"],
        ["bloodmagic:item/throwing_dagger_syringe", "Syringe Throwing Dagger", "Stein + Glas ergeben 8; getötete Mobs lassen Slate Ampoules fallen"],
        ["bloodmagic:item/slate_ampoule", "Slate Ampoule", "am Altar zerdrückt 500 LP, unabhängig von Runen"],
        ["bloodmagic:item/amethystthrowingdagger", "Amethyst Throwing Dagger", "2 Kupfer + Amethyst ergeben 16; in der ARC mit Lingering Flask zu Tipped Amethyst Throwing Dagger"],
        ["bloodmagic:item/syntheticpoint", "Synthetic Upgrade Point", "4 Eisen-Nuggets, 4 rohes Fleisch oder Fisch, Redstone ergeben 2; Punkte für Downgrades"],
        ["bloodmagic:item/bleedingedge", "Hellforged Record", "Schallplatte; aus Truhen der Mines oder Block of Raw Demonite + 10 000 LP"],
      ],
    },
    {
      t: "Blöcke des Demon Realm",
      items: [
        ["bloodmagic:block/dungeon/dungeon_stone", "Demon Stone", "8 Stein + Demon Will Crystal ergeben 64; mit Aspekt-Kristallen farbig"],
        ["bloodmagic:block/dungeon/dungeon_eye", "Demon Eye", "Leuchtblock: 4 Glowstone Dust + Demon Stone"],
        [null, "Demon Emitter, Demon Alternator", "dauerhaftes bzw. taktendes Redstone-Signal"],
        ["render:model/bm_spike_trap_s", "Demon Spike Trap", "fährt bei Redstone Klingen aus"],
      ],
    },
    {
      t: "Am Alchemy Table nebenbei",
      text: `<p>Grass Block aus Dirt, Bone Meal und Seeds; Bread; 2 Clay Ball aus 2 Sand und Wasser; Cobweb aus 3 String; Nether Wart aus Nether Wart Block; 9 Gold Nugget aus Gilded Blackstone; Flint aus Kies und Flint; Coal Sand. Mit Corrupted Dust wird aus Fragmenten von Eisen, Gold, Kupfer und Netherite Scrap mehr Gravel.</p>`,
    },
    {
      t: "Im Buch als nicht umgesetzt geführt",
      text: `<p>Der Eintrag „Not Yet Implemented“ nennt Inhalte früherer Versionen, die es nicht gibt, darunter Bound Armour und Waffen, den Grand Tartaric Gem, Ritual Diviner (Dawn), Awakened Activation Crystal, Sigil of the Phantom Bridge, Sigil of Compression, Sigil of Ender Severance und mehrere Rituale (Gate of the Fold, Ritual of Containment, Interdiction). Ihre Texturen und Sprachschlüssel liegen teils noch im JAR.</p>`,
    },
  ],
  bridges: [
    {
      t: "Tinkers' Construct",
      addon: "Blood-Smeltery",
      x: true,
      items: [
        [null, "Bloodbrass Ingot", "Altar: Kupferbarren + 1500 LP (Stufe 2); Smeltery: Life Essence + Kupfer bei 1000 °C"],
        [null, "Blood-Seared Stone", "Werkzeugmaterial aus Blank Slate und Blank Rune; flüssig aus Runen, Slates, Sigils und Ritual Stones"],
        [null, "Tauonic Thread", "Alchemy Table: Tau Oil, String, Binding Reagent; Bindungsmaterial"],
        [null, "Sentience, Divination, Hemoglowin", "Modifier aus Tartaric Gem, Divination bzw. Seer's Sigil, Sigil of the Blood Lamp"],
      ],
      text: `<p>Blood-Smeltery verbindet die Smeltery mit Blood Magic: Demon Will in fünf Arten als Flüssigkeit (ein Will Crystal ergibt 5000 mB), Demonite und Hellforged schmelzen bei 666 °C, Vexe geben in der Smeltery Will, und Life Essence lässt sich aus Will, Liquid Soul und Blut oder Meat Soup legieren. In Version 1.2.1a wird nur die Grund-Flüssigkeit von Demonite registriert, nicht die vier Aspekt-Fassungen; die Rezepte für Thermal und Cyclic gelten nicht, weil die Mods fehlen (Details in <code>00_MODBASIS.md</code>).</p>`,
    },
    {
      t: "Immersive Engineering, Mekanism, AE2",
      text: `<p>Blood Magic verbindet sich mit diesen Mods nur über den Meteor-Ritus: LV Wire Coil, Infused Alloy und Certus Quartz rufen Meteore mit Erzen dieser Mods (Schritt „Mark of the Falling Tower“). Die Rezepte des Mods nehmen Forge-Tags an, etwa <code>forge:dusts/sulfur</code>, <code>forge:gems/diamond</code>, <code>forge:ingots/copper</code>; Schwefel aus IE oder Mekanism passt also in Catalysts und Cutting Fluid.</p>`,
    },
    {
      t: "Was fehlt",
      text: `<p>Blood Magic hat keine Verbindung zu Strom: kein Forge Energy, kein Weg von LP zu Strom oder zurück. Seine Erzketten (Alchemy Table, ARC) kennen nur Eisen, Gold, Kupfer, Netherite Scrap und Demonite; Erze von IE, Mekanism oder den Planeten verarbeiten sie nicht. Plant Oil von Blood Magic ist ein Item, Plant Oil von IE eine Flüssigkeit; beide haben nichts miteinander zu tun. Demonite gibt es nur im Demon Realm, nicht in der Welt.</p>`,
    },
  ],
  foot: "Quelle: Buch Sanguine Scientiem, Rezepte, Loot-Tabellen, Tags und Sprachdatei aus BloodMagic-1.18-1.20.1-3.3.8-50.jar der Testinstanz (Minecraft 1.20.1, Forge 47.4.26); Ritualkosten aus den Ritual-Klassen, Altar-Aufbau aus der Klasse AltarTier (beides mit javap bzw. durch Ausführen der Klasse gelesen); Sigil-Kosten, Opferwerte und Rüstungspunkte aus config/bloodmagic-common.toml. Nicht ausgelesen: die Zahl der Ritual Stones je Ritual (Bauplan zeigt das Buch im Spiel), die genauen Erzgewichte der Meteore, die Wirkung des Bounce Array, die Werte der Sentient-Waffen und die Kosten der einzelnen Living-Armour-Stufen.",
};
