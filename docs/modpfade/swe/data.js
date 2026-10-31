// Stand 2026-10-31, Minecraft 1.20.1. Quelle: StarWarsExpansionv3.1.0.jar (MCreator, Namespace star_wars_expansion) der TestModsInstance –
// Rezepte, Advancements, Dimensionen, Weltgenerierung, Strukturdateien (Inhalt per Durchsicht der NBT-Strings), Tags, Sprachdatei.
// Händler, Reisen, Droiden-Items und Wirkungen stehen nur im Code; gelesen mit javap, Vanilla-Namen über die Mapping-Dateien der Instanz.
// Kein Buch. Reihenfolge = Advancement-Baum (Wurzel „A Galaxy Far Far Away...“ mit dem Reparation Kit) und Abhängigkeiten der Tauschgeschäfte.
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Star Wars Expansion",
  title: "Star Wars Expansion",
  accent: ["#e8c25f", "#8a6a12"],
  lede: "Ein Abenteuer-Mod mit eigenen Planeten: Man repariert eine abgestürzte Rettungskapsel in der Overworld, fliegt mit ihr über eine eigene Galaxiekarte nach Tatooine, Endor, Hoth und Naboo und findet dort Erze, Siedlungen, Händler und viele Wesen aus Star Wars. Fast alles, was über die Grundstoffe hinausgeht, kauft man bei sechs Händlerberufen gegen Galactic Credits und Barren. Der Mod hat kein Buch; die Reihenfolge hier folgt seinem Advancement-Baum und dem, was man für welchen Kauf braucht.",
  mods: [
    ["Star Wars Expansion", "3.1.0", "main"],
    ["GeckoLib", "4.8.4", "bridge"],
    ["Player Animator", "1.0.2-rc1", "bridge"],
  ],
  phases: [
    {
      t: "Start in der Overworld",
      sub: "Advancement „A Galaxy Far Far Away...“ (Reparation Kit im Inventar). Braucht nur Eisen und eine Ebene (Biom Plains).",
      steps: [
        {
          t: "Reparation Kit",
          items: [
            ["star_wars_expansion:item/medpack", "Reparation Kit", "8 Iron Ingot + 1 Block of Iron, formlos"],
          ],
          text: `<p>Das erste Ziel des Mods und die Wurzel seines Advancement-Baums. Das Kit hat genau einen Zweck: Es repariert eine kaputte Rettungskapsel.</p>`,
          needs: [["Iron Ingot", "v", "8"], ["Block of Iron", "v", "1"]],
        },
        {
          t: "Kaputte Rettungskapsel finden und reparieren",
          items: [
            ["star_wars_expansion:item/escapepod", "Escape Pod", "Fahrzeug; entsteht aus der reparierten Kapsel"],
          ],
          text: `<p>In der Overworld steht im Biom <b>Plains</b> die Struktur <code>broken_pod_structure</code> (Abstand 40 Chunks, mindestens 16 dazwischen). Sie besteht aus einem Wesen „Escape Pod“ in kaputter Form (<code>broken_escape_pod</code>). Wer es mit dem Reparation Kit in der Hand anklickt, verbraucht das Kit, hört einen Ambossklang, und an der Stelle steht eine flugfähige Escape Pod.</p>
<p>Dieselbe Struktur gibt es noch einmal auf Tatooine. Eine Escape Pod als Item gibt es außerdem beim Spaceship Trader (Phase „Händler“).</p>`,
          needs: [["Reparation Kit", "m"]],
        },
        {
          t: "Galaxiekarte und Reise",
          items: [
            ["star_wars_expansion:item/tatooine_small", "Tatooine", "Knopf der Karte, führt nach star_wars_expansion:tatooine"],
            ["star_wars_expansion:item/endor_small", "Endor", "Knopf der Karte"],
            ["star_wars_expansion:item/hoth_small", "Hoth", "Knopf der Karte"],
            ["star_wars_expansion:item/naboo_small", "Naboo", "Knopf der Karte"],
            ["star_wars_expansion:item/kashyyyk_small", "Kashyyyk", "Knopf ohne Ziel"],
          ],
          text: `<p>Sitzt man in einem Raumschiff, öffnet die Taste <b>Z</b> („Open Space Travel“) die Karte. Sechs Knöpfe: Tatooine, Endor, Kashyyyk, Hoth, Earth und Naboo. Jeder Knopf außer Kashyyyk bringt den Spieler sofort in die Dimension; Earth führt zurück in die Overworld. Kashyyyk antwortet nur mit „You cannot travel to this planet at the moment.“, eine Dimension dazu gibt es nicht.</p>
<p>Die Reise kostet nichts und braucht keinen Treibstoff. Je Planet gibt es ein Advancement (Ankunft per Dimensionswechsel).</p>`,
          table: {
            head: ["Planet", "Biom", "Advancement"],
            rows: [
              ["star_wars_expansion:block/tatooine_sand", "Tatooine Desert", "Does this place have two suns?"],
              ["star_wars_expansion:block/endor_wood", "Endor Forest", "It's a Trap!"],
              ["star_wars_expansion:block/hoth_snow", "Hoth Plains", "Welcome to Hoth"],
              ["star_wars_expansion:block/orange_petals", "Naboo Forest", "Meesa Think We Lost!"],
            ],
          },
          needs: [["Escape Pod oder anderes Raumschiff", "m"]],
        },
      ],
    },
    {
      t: "Tatooine: Rohstoffe",
      sub: "Advancement „Does this place have two suns?“. Alle Erze des Mods außer Aurodium liegen nur im Biom Tatooine Desert.",
      steps: [
        {
          t: "Erze von Tatooine",
          items: [
            ["star_wars_expansion:block/doonium_ore", "Doonium Ore", "Ofen → Doonium Ingot"],
            ["star_wars_expansion:block/quadanium_ore", "Quadanium Ore", "Ofen → Quadanium Ingot"],
            ["star_wars_expansion:block/rubber_block", "Rubber Ore", "Ofen → Rubber"],
            ["star_wars_expansion:block/copper_sandstone_ore", "Copper Ore", "Ofen → Copper Ingot (Vanilla)"],
          ],
          text: `<p>Vier Erze, alle über Biom-Modifier nur in <code>tatooine_desert</code>. Jedes wird im Ofen geschmolzen (200 Ticks); einen Hochofen-Weg gibt es nicht. Das Kupfererz in Sandstein gibt Vanilla-Kupfer.</p>`,
          needs: [["Pickaxe", "v"], ["Ofen", "v"]],
        },
        {
          t: "Werkstoffe",
          items: [
            ["star_wars_expansion:item/plastoid", "Plastoid", "1 Rubber + 1 Iron Ingot, formlos"],
            ["star_wars_expansion:item/circuit", "Electronic Board", "1 Quadanium Ingot + 1 Rubber + 2 Copper Ingot → 2"],
            ["star_wars_expansion:item/computer_tip", "Computer Tip", "2 Doonium Ingot → 8"],
          ],
          text: `<p>Die drei Zwischenstoffe des Mods. <b>Plastoid</b> zahlt man für Klonrüstung. <b>Electronic Board</b> ist neben Quadanium die Währung für Fahrzeuge und Droiden. <b>Computer Tip</b> ist das Futter der Droiden (siehe „Droiden als Begleiter“).</p>`,
          needs: [["Rubber, Quadanium Ingot, Doonium Ingot", "m"], ["Iron Ingot, Copper Ingot", "v"]],
        },
        {
          t: "Bantha und Krykna",
          items: [
            ["star_wars_expansion:item/raw_bantha_meat", "Raw Bantha Meat", "Ofen → Cooked Bantha Meat"],
            ["star_wars_expansion:item/banhta_horn", "Bantha Horn", "trägt der Bantha; Handel beim Butcher"],
            ["star_wars_expansion:item/bantha_leather", "Bantha Leather", "→ 4 Leather; Snow Suit; Herkunft nicht gefunden"],
            ["star_wars_expansion:item/krykna_leg", "Krykna Leg", "von der Krykna"],
            ["star_wars_expansion:item/krykna_string", "Krykna String", "→ 2 String"],
          ],
          text: `<p>Die beiden Wesen, die auf Tatooine von selbst spawnen: der Bantha (Gewicht 1, einzeln) und die Spinne Krykna (1–2). Der Bantha lässt Raw Bantha Meat fallen; das Bantha Horn setzt ihm der Code als Ausrüstung ein. Für <b>Bantha Leather</b> fand sich keine Quelle (kein Drop im Code, kein Handel, keine Struktur), obwohl Rezepte es verlangen. Krykna String wird zu zwei Faden. Advancement „That's Some Fine Bantha Meat!“ für Raw Bantha Meat.</p>`,
        },
      ],
    },
    {
      t: "Tatooine: Siedlungen und Händler",
      sub: "Advancement „No Money, No Deal!“ (Galactic Credit im Inventar). Die Händlerberufe gibt es nur über ihre Arbeitsblöcke, und die stehen in den Strukturen von Tatooine.",
      steps: [
        {
          t: "Strukturen",
          items: [
            [null, "Tatooine Village", "Siedlung mit Händlerblöcken, Moisture Vaporator, Truhe"],
            [null, "Jawa Sandcrawler", "Jawas, Droiden (Astromech, Gonk, Protocol), Workspace Bench"],
            [null, "Hutt Palace", "Hutt, Bib Fortuna, Gamorreans, Skiff Guards, Cantina Band, Truhe"],
            [null, "Pirate Ship", "Piraten, Truhen und Fässer mit Barren und Credits"],
            [null, "Jedi Temple", "Holocron, Jedi Knight Statue, Truhe mit Saber Emitter und Saber Handle"],
            [null, "Tusken Campment", "Tusken, Moisture Vaporator"],
          ],
          text: `<p>Sechs Strukturen in <code>tatooine_desert</code>. Die Bewohner stehen als fertige Wesen in den Strukturdateien; sie spawnen nicht von selbst nach.</p>
<p>Truhen haben keine eigenen Loot-Tabellen; ihr Inhalt steht fest in der Struktur. Im Jedi Temple liegen unter anderem Saber Emitter, Saber Handle, Doonium Ingot und Electronic Board. Im Pirate Ship liegen unter anderem Aurodium, Doonium und Quadanium Ingot, Galactic Credits und Essen.</p>`,
          table: {
            head: ["Struktur", "Abstand (Chunks)", "Mindestabstand"],
            rows: [
              [null, "Tatooine Village", "64", "16"],
              [null, "Jawa Sandcrawler", "32", "8"],
              [null, "Hutt Palace", "73", "23"],
              [null, "Pirate Ship", "66", "15"],
              [null, "Jedi Temple", "75", "60"],
              [null, "Tusken Campment", "27", "9"],
            ],
          },
        },
        {
          t: "Galactic Credits",
          items: [
            ["star_wars_expansion:item/space_credits_silver", "Galactic Credit", "Silber; Lohn der Händler"],
            ["star_wars_expansion:item/space_credits_gold", "Galactic Credit", "Gold; für Waffen und Rüstung"],
          ],
          text: `<p>Beide Münzen heißen im Spiel gleich. Man bekommt sie nur im Handel (vor allem beim Miner Trader gegen Vanilla-Rohstoffe), in Truhen der Strukturen und in der Hand der Gamorreans (ob sie fallen, ist nicht ausgelesen). Ein Rezept gibt es nicht.</p>`,
        },
        {
          t: "Händler",
          items: [
            ["star_wars_expansion:block/crate", "Modern Crate", "Arbeitsblock (vier Varianten)"],
            ["star_wars_expansion:block/panel", "Control Panel", "Arbeitsblock"],
            ["star_wars_expansion:block/bench", "Workspace Bench", "Arbeitsblock"],
          ],
          text: `<p>Sechs eigene Dorfbewohner-Berufe: Butcher, Weaponsmith, Lumberjack, Spaceship, Droid und Miner Trader. Ihre Arbeitsblöcke sind die vier Modern Crates, das Control Panel und die Workspace Bench; welcher Block zu welchem Beruf gehört, ist nicht ausgelesen. Keiner dieser Blöcke hat ein Rezept, man findet sie in den Siedlungen von Tatooine und kann sie abbauen. Ein Dorfbewohner in der Overworld nimmt den Beruf an, wenn man ihm einen solchen Block hinstellt (die Blöcke stehen im Tag <code>acquirable_job_site</code>).</p>
<p>Die Tabelle zeigt alle Angebote nach Stufe des Händlers (aus dem Code).</p>`,
          table: {
            head: ["Händler · Stufe", "Preis", "Ware"],
            rows: [
              [null, "Miner 1", "10 Iron Ingot", "10 Galactic Credit"],
              [null, "Miner 1", "10 Gold Ingot", "15 Galactic Credit"],
              [null, "Miner 2", "10 Emerald", "10 Galactic Credit"],
              [null, "Miner 2", "10 Diamond", "32 Galactic Credit"],
              [null, "Miner 3", "32 Quartz", "8 Galactic Credit"],
              [null, "Miner 3", "1 Netherite Ingot", "2 Galactic Credit (Gold)"],
              [null, "Butcher 1", "15 Raw Bantha Meat", "5 Galactic Credit"],
              [null, "Butcher 1", "5 Bantha Horn / 10 Galactic Credit", "5 Galactic Credit / Bantha Milk Bucket"],
              [null, "Butcher 2", "5 Krykna Leg, 5 Krykna String, 5 Arges Frog Leg", "je 5 Galactic Credit"],
              [null, "Butcher 3", "2 Galactic Credit", "Meiloorun, Jogan, 5 Carrot, 5 Potato"],
              [null, "Lumberjack 1", "2 Galactic Credit", "1 Log (6 Holzarten), auch umgekehrt"],
              [null, "Weaponsmith 1", "24 Doonium Ingot + 2 Galactic Credit (Gold)", "Doonium Chesplate, Doonium Leggins"],
              [null, "Weaponsmith 2", "20–35 Doonium Ingot + 10 Galactic Credit (Gold)", "Vibroblade, Vibro-Axe, Blaster E-11, DL-44, Westar-34, EE-3"],
              [null, "Weaponsmith 2", "15 Doonium Ingot + 48 Galactic Credit", "Stun Baton"],
              [null, "Weaponsmith 3", "5 / 7 / 8 Plastoid", "Clone Trooper Helmet / Chestplate / Leggings"],
              [null, "Weaponsmith 4", "20 Bantha Leather + 15 Krykna String", "Brown, Gray, Black Jedi Clothes"],
              [null, "Weaponsmith 5", "5 Doonium Ingot + 5 Galactic Credit (Gold)", "Stabilizer Mask, Interface Band"],
              [null, "Spaceship 1", "16 Quadanium Ingot + 16 Electronic Board", "Escape Pod"],
              [null, "Spaceship 1", "32 Quadanium Ingot + 16 Electronic Board", "Landspeeder"],
              [null, "Spaceship 1", "64 Quadanium Ingot + 32 Electronic Board", "X-Wing"],
              [null, "Spaceship 2", "48 Quadanium Ingot + 20 Electronic Board", "Speeder Bike"],
              [null, "Spaceship 2", "64 Quadanium Ingot + 32 Electronic Board", "TIE-Fighter"],
              [null, "Butcher 3", "64 Quadanium Ingot + 64 Electronic Board", "AT-ST"],
              [null, "Butcher 3", "32 Quadanium Ingot + 1 Electronic Board", "Snowspeeder"],
              [null, "Droid 1", "48 Galactic Credit + 5 Electronic Board", "R2-D2, R4-P17, R2-KT, C-3PO, TC-14, I-82"],
              [null, "Droid 2", "32 Galactic Credit + 5 Electronic Board", "GNK"],
              [null, "Droid 2", "16 Galactic Credit + 51 Electronic Board", "MSE-6"],
            ],
          },
          needs: [["Iron, Gold, Diamond, Emerald, Quartz, Netherite", "v", "Credits beim Miner"], ["Doonium, Quadanium, Plastoid, Electronic Board", "m"]],
        },
      ],
    },
    {
      t: "Die anderen Planeten",
      sub: "Advancements „Welcome to Hoth“, „It's a Trap!“, „Meesa Think We Lost!“. Jeder Planet hat ein Biom, eigene Steine, Wesen und Bauten.",
      steps: [
        {
          t: "Hoth",
          items: [
            ["star_wars_expansion:block/hoth_stone", "Hoth Stone", "Stein; ein zweiter Block gleichen Namens ist das Aurodium-Erz"],
            ["star_wars_expansion:item/aurodium_ingot", "Aurodium Ingot", "in Truhen des Pirate Ship; kein Ofenrezept"],
            ["star_wars_expansion:item/snowsuithat", "Snow Hood", "5 Bantha Leather oder 5 Tauntaun Leather"],
            ["star_wars_expansion:item/snowsuit_chestplate", "Snow Suit", "8 Leather (Bantha oder Tauntaun)"],
            ["star_wars_expansion:item/snowsuit_leggins", "Snow Leggins", "7 Leather (Bantha oder Tauntaun)"],
            ["star_wars_expansion:item/tauntaun_leather", "Tauntaun Leather", "Beute des Tauntaun"],
          ],
          text: `<p>Schneeebene mit Hoth Snow und Hoth Stone. Es spawnen Tauntaun (reitbar: Rechtsklick mit Sattel macht daraus ein Tauntaun mit Sattel) und Wampa. Die Struktur Hoth Base (Abstand 40) enthält Computer Station, Control Station, Kolto Tank, einen Snowspeeder und einen Snow Suit.</p>
<p>Das Aurodium-Erz (<code>aurodium_ore</code>) heißt im Spiel ebenfalls „Hoth Stone“; ein Rezept für den Barren gibt es nicht, und wofür der Barren gut ist, steht weder in einem Rezept noch in einem Handel. Advancement „Hotter than a tauntaun“ für den vollständigen Snow Suit. Ob Hoth ohne Anzug schadet, ist nicht ausgelesen (die Prozedur <code>HothFrozen</code> ist leer).</p>`,
          needs: [["Bantha Leather oder Tauntaun Leather", "m"]],
        },
        {
          t: "Endor",
          items: [
            ["star_wars_expansion:block/endor_wood", "Redwood Log", "Holz der Riesenbäume; ohne Bretter-Rezept"],
            ["star_wars_expansion:block/hardened_mud", "Hardened Mud", "Untergrund"],
            ["star_wars_expansion:item/raw_porg", "Raw Porg", "Beute des Porg"],
          ],
          text: `<p>Wald aus Redwood-Bäumen in drei Größen und Ewok-Bäumen (Abstand 20) mit Ewoks. Es spawnen Porgs (zu zweit). Für Redwood Log gibt es kein Rezept, also auch keine Bretter.</p>`,
        },
        {
          t: "Naboo",
          items: [
            ["star_wars_expansion:block/naboo_stone", "Naboo Stone", "Stein"],
            ["star_wars_expansion:block/blue_petals", "Blue Petals", "Pflanze"],
            ["star_wars_expansion:block/orange_petals", "Orange Petals", "Pflanze"],
            ["star_wars_expansion:item/ancient_sith_mask_item", "Ancient Sith Lord Mask", "Beute des Ancient Sith Lord"],
          ],
          text: `<p>Wald mit Blüten, drei Baumarten und Shaaks (spawnen einzeln). Bauten: Naboo Palace (Abstand 100, mit Galaxy Map und Speeder Bike), Naboo Temple (35) und die Sith Ruins (113, Mindestabstand 83). In den Sith Ruins steht der <b>Ancient Sith Lord</b>, der Bossgegner des Mods; er lässt seine Maske fallen („Tear life from enemies with every hit.“). Advancement „Trust only in the force“.</p>`,
        },
      ],
    },
    {
      t: "Ausrüstung",
      sub: "Advancement „Always two there are“ (alle fünf Kyber-Farben). Was nicht im Handel steht, kommt aus Rezepten oder Strukturen.",
      steps: [
        {
          t: "Lichtschwerter",
          items: [
            ["star_wars_expansion:item/lightsaber_emitter", "Saber Emitter", "Truhe im Jedi Temple"],
            ["star_wars_expansion:item/saber_handle", "Saber Handle", "Truhe im Jedi Temple"],
            ["star_wars_expansion:item/kyber_crystal_blue", "Blue Kyber Crystal", "Herkunft im Überleben nicht gefunden"],
            ["star_wars_expansion:item/lightsaber_blue", "Blue Lightsaber", "Saber Emitter / Kyber Crystal / Saber Handle, senkrecht"],
            ["star_wars_expansion:item/lightsaber_red", "Red Double Lightsaber", "2 Lightsaber derselben Farbe, senkrecht"],
          ],
          text: `<p>Fünf Farben: Blue, Green, Purple, Red, Yellow. Ein Schwert entsteht aus Emitter, Kristall und Griff übereinander; zwei gleiche Schwerter ergeben ein Doppelschwert. Rechtsklick schaltet die Klinge ein und aus.</p>
<p>Die <b>Kyber-Kristalle</b> haben kein Rezept, keine Loot-Tabelle, keinen Handel und liegen in keiner Strukturdatei. Im Code tauchen sie nur als Bild der Laserprojektile auf. Ob sie im Überleben überhaupt erreichbar sind, ist offen; das Advancement „Always two there are“ verlangt alle fünf.</p>`,
          needs: [["Saber Emitter, Saber Handle", "m", "Jedi Temple"], ["Kyber Crystal", "m", "Herkunft offen"]],
        },
        {
          t: "Beskar",
          items: [
            ["star_wars_expansion:item/beskar_ingot", "Beskar Ingot", "2 Netherite Ingot + 2 Doonium Ingot, formlos"],
            ["star_wars_expansion:item/beskar_helmet_item", "Beskar Helmet", "Schmiedetisch: Netherite Upgrade + Clone Trooper Helmet + Beskar Ingot"],
            ["star_wars_expansion:item/beskar_chestplate_item", "Beskar Chestplate", "ebenso aus Clone Trooper Chestplate"],
            ["star_wars_expansion:item/beskar_leggins_item", "Beskar Leggings", "ebenso aus Clone Trooper Leggings"],
          ],
          text: `<p>Die teuerste Rüstung des Mods. Man kauft erst Klonrüstung beim Weaponsmith (Plastoid) und wertet sie am Schmiedetisch mit der Netherite-Schmiedevorlage und je einem Beskar-Barren auf. Ein Barren kostet zwei Netherite-Barren; der ganze Satz also sechs Netherite.</p>`,
          needs: [["Netherite Ingot", "v", "2 je Barren"], ["Netherite Upgrade", "v"], ["Doonium Ingot", "m"], ["Clone Trooper Rüstung", "m", "Weaponsmith"]],
        },
        {
          t: "Kleidung und Masken",
          items: [
            ["star_wars_expansion:item/jedi_clothes_item", "Brown Jedi Clothes", "Weaponsmith; Doppelsprung"],
            ["star_wars_expansion:item/grand_master_jedi_clothes_item", "Grand Master Jedi Clothes", "Doppelsprung; Herkunft nicht gefunden"],
            ["star_wars_expansion:item/sith_clothes_item", "Sith Clothes", "Doppelsprung; Herkunft nicht gefunden"],
            ["star_wars_expansion:item/stabilizer_mask_item", "Stabilizer Mask", "Weaponsmith; Eile (Haste) beim Tragen"],
            ["star_wars_expansion:item/band", "Interface Band", "Weaponsmith; Nachtsicht beim Tragen"],
          ],
          text: `<p>Die Jedi-Gewänder (Brown, Gray, Black, Grand Master) und Sith Clothes erlauben mit der Taste „Double Jump“ einen zweiten Sprung in der Luft. Die beiden Helme des Weaponsmith geben beim Tragen dauerhaft einen Effekt.</p>`,
        },
      ],
    },
  ],
  solo: [
    {
      t: "Droiden als Begleiter",
      text: `<p>Die Droiden-Items setzen per Rechtsklick auf einen Block ein Wesen ab und werden verbraucht: R2-D2 → Astromech Droid Blue, C-3PO → Protocol Droid Gold, GNK → Gonk und so weiter. Die Droiden sind zähmbare Tiere (<code>TamableAnimal</code>), ihr Futter ist der Computer Tip. Battle Droid B1 und BB-8 haben ebenfalls Items, aber keinen Handel und kein Rezept.</p>
<p>Alle Droiden sind als Kategorie <code>MONSTER</code> eingetragen. Easy NPC kann sie deshalb als Doppler-Modell zeigen (im Spiel bestätigt, 2026-10-31).</p>`,
      items: [
        ["star_wars_expansion:item/astromech_item", "R2-D2", "→ Astromech Droid Blue"],
        ["star_wars_expansion:item/astromech_red_item", "R4-P17", "→ Astromech Droid Red"],
        ["star_wars_expansion:item/astromech_pink_item", "R2-KT", "→ Astromech Droid Pink"],
        ["star_wars_expansion:item/protocol_item", "C-3PO", "→ Protocol Droid Gold"],
        ["star_wars_expansion:item/protocol_white_item", "TC-14", "→ Protocol Droid White"],
        ["star_wars_expansion:item/protocol_pink_item", "I-82", "→ Protocol Droid Pink"],
        ["star_wars_expansion:item/gonk_item", "GNK", "→ Gonk"],
        ["star_wars_expansion:item/mouse_item", "MSE-6", "→ Mouse Droid"],
        ["star_wars_expansion:item/t3m4_item", "T3-M4", "→ T3-M4"],
        ["star_wars_expansion:item/viper_item", "11-3K", "→ Viper Droid"],
        ["star_wars_expansion:item/bb8", "BB-8", "→ Ball Droid"],
        ["star_wars_expansion:item/battle_droid_item", "Battle Droid B1", "→ Battle Droid"],
      ],
    },
    {
      t: "Fahrzeuge",
      text: `<p>Alle Fahrzeuge setzt man mit ihrem Item ab. X-Wing und TIE-Fighter fliegen und schießen (Tasten „Spaceship Move“ und „Spaceship Shoot“); jedes Raumschiff öffnet mit Z die Galaxiekarte. Werte und Steuerung sind nicht ausgelesen.</p>`,
      items: [
        ["star_wars_expansion:item/escapepod", "Escape Pod", "Spaceship Trader oder reparierte Kapsel"],
        ["star_wars_expansion:item/xwing", "X-Wing", "Spaceship Trader"],
        ["star_wars_expansion:item/tie_fighter", "TIE-Fighter", "Spaceship Trader"],
        ["star_wars_expansion:item/speeder", "Landspeeder", "Spaceship Trader"],
        ["star_wars_expansion:item/speederbike", "Speeder Bike", "Spaceship Trader"],
        ["star_wars_expansion:item/snowspeeder", "Snowspeeder", "Handel (im Code beim Butcher Trader eingetragen)"],
        ["star_wars_expansion:item/atst", "AT-ST", "Handel (im Code beim Butcher Trader eingetragen)"],
        ["star_wars_expansion:item/tatooine_item", "Tatooine Planet Anchor", "Rechtsklick: Reise nach Tatooine; Herkunft nicht gefunden"],
      ],
    },
    {
      t: "Waffen",
      items: [
        ["star_wars_expansion:item/blaster", "Blaster E-11", "Weaponsmith"],
        ["star_wars_expansion:item/dl44", "DL-44", "Weaponsmith"],
        ["star_wars_expansion:item/westar", "Westar-34", "Weaponsmith"],
        ["star_wars_expansion:item/ee3", "EE-3", "Weaponsmith"],
        ["star_wars_expansion:item/vibroblade", "Vibroblade", "Weaponsmith"],
        ["star_wars_expansion:item/vibro_axe", "Vibro-Axe", "Weaponsmith; tragen auch die Skiff Guards"],
        ["star_wars_expansion:item/stun_baton", "Stun Baton", "Weaponsmith"],
        ["star_wars_expansion:item/thermal_detonator", "Thermal Detonator", "Wurfgranate; Herkunft nicht gefunden"],
        ["star_wars_expansion:item/tusken_stick", "Gaderffii Stick", "tragen die Tusken"],
        ["star_wars_expansion:item/orb_staff", "Gungan Atlatl", "tragen die Gungan Soldiers, mit Gungan Shield"],
        ["star_wars_expansion:item/force_pike", "Force Pike", "Herkunft nicht gefunden"],
        ["star_wars_expansion:item/magnaguard_staff", "Magnaguard Staff", "Herkunft nicht gefunden"],
      ],
    },
    {
      t: "Rüstungen ohne Weg im Überleben",
      text: `<p>Diese Teile haben Sprachdatei, Textur und Item, aber weder Rezept noch Handel noch einen Fundort in den Strukturdateien. Sie sind vermutlich nur im Kreativmodus zu haben; geprüft ist nur, dass keine der gelesenen Quellen sie nennt.</p>`,
      items: [
        ["star_wars_expansion:item/stormtrooper_helmet_item", "Stormtrooper Helmet", "auch Chestplate, Leggings"],
        ["star_wars_expansion:item/clone_helmet_item_501", "Clone Trooper 501st Helmet", "auch 212st und 41st, je drei Teile"],
        ["star_wars_expansion:item/vader_helmet", "Fallen Sith Helmet", "auch Chestplate, Leggings"],
        ["star_wars_expansion:item/royal_guard_helmet", "Naboo Royal Guard Helmet", "auch Chestplate, Leggings"],
        ["star_wars_expansion:item/temple_guard_mask", "Jedi Temple Guard Mask", "auch Robes, Leggins"],
        ["star_wars_expansion:item/revan_mask", "Ancient Mandalorian Mask", "mit Begleittext"],
        ["star_wars_expansion:item/energy_shield", "Energy Shield", "Schild"],
        ["star_wars_expansion:item/skiff_guard_helmet", "Skiff Guard Helmet", "tragen die Skiff Guards (Satz)"],
      ],
    },
    {
      t: "Essen",
      items: [
        ["star_wars_expansion:item/cooked_bantha_meat", "Cooked Bantha Meat", "Ofen"],
        ["star_wars_expansion:item/cooked_porg", "Cooked Porg", "kein Rezept gefunden"],
        ["star_wars_expansion:item/shaak_beef", "Raw Shaak Beef", "kein Rezept, kein Handel"],
        ["star_wars_expansion:item/blue_milk", "Bantha Milk Bucket", "Butcher"],
        ["star_wars_expansion:item/meiloorun", "Meiloorun", "Butcher"],
        ["star_wars_expansion:item/jogan", "Jogan", "Butcher"],
        ["star_wars_expansion:item/arges_leg", "Arges Frog Leg", "Arges Frog"],
      ],
    },
    {
      t: "Wesen",
      text: `<p>62 Wesen. Von selbst spawnen nur sechs: Bantha und Krykna (Tatooine), Tauntaun und Wampa (Hoth), Porg (Endor) und Shaak (Naboo). Alle übrigen stehen fest in Strukturen oder haben nur ein Spawn-Ei: Rodians, Twi'Leks, Ithorians, Humans, Gamorreans, Hutt, Bib Fortuna, Cantina Band, Jawas, Tusken, Piraten (vier Arten), Skiff Guards, Ewoks, Wookie, Gungan und Gungan Soldier, Brain Walker, Arges Frog, Galaxy Map, die Droiden und der Ancient Sith Lord. Bib Fortuna schickt jeden weg („We only cater to bounty hunters here“); die Cantina Band spielt auf Rechtsklick die Musik der Platte „Cantina Music“.</p>
<p>In die Overworld bringt der Mod von sich aus nur die kaputte Rettungskapsel (Plains). Händler entstehen dort nur, wenn jemand ihre Arbeitsblöcke aufstellt.</p>`,
      items: [
        ["star_wars_expansion:item/cantina_disc", "Cantina Music", "Platte; Beute der Cantina Band"],
      ],
    },
    {
      t: "Baublöcke",
      items: [
        ["star_wars_expansion:block/tatooine_stone", "Tatooine Sandstone", "mit Slab, Stairs, Wall; Tatooine"],
        ["star_wars_expansion:block/metal_block", "Metal Block", "mit Slab, Stairs, Trapdoor; Grid Metal Block"],
        ["star_wars_expansion:block/imperial_block", "Imperial Wall Block", "mit Slab, Slim Imperial Block, Imperial Lantern"],
        ["star_wars_expansion:block/modern_pillar", "Modern Pillar", "mit Slab, Stairs, Lantern, Bookshelf, Chair"],
        ["star_wars_expansion:block/korriban_stone", "Korriban Stone", "mit Korriban Rune Block"],
        ["star_wars_expansion:block/carbonite", "Carbonite", "Deko"],
        ["star_wars_expansion:block/cantina_light", "Cantina Light", "Licht"],
        ["star_wars_expansion:block/holocron_block", "Holocron", "animierter Block; Jedi Temple"],
        ["star_wars_expansion:block/water_vaporizer_block", "Moisture Vaporator", "Deko; Tatooine"],
        ["star_wars_expansion:block/koltotank", "Kolto Tank", "Deko; Hoth Base"],
      ],
      text: `<p>Keiner dieser Blöcke hat ein Rezept. Sie stehen in den Strukturen und lassen sich dort abbauen (Loot-Tabellen: der Block selbst).</p>`,
    },
  ],
  bridges: [
    {
      t: "Star Wars Planets",
      x: true,
      text: `<p>Tatooine, Endor und Hoth gibt es im Pack schon über Star Wars Planets, dort über Ad-Astra-Raketen erreichbar. Star Wars Expansion bringt dieselben Planeten ein zweites Mal als eigene Dimensionen, mit eigener Reise ohne Rakete und ohne Treibstoff. Beide Mods haben auch Beskar und Stormtrooper-Rüstung.</p>`,
    },
    {
      t: "Star Wars: Galaxy in a Cube",
      x: true,
      text: `<p>Doppelt zu Galaxy in a Cube: Lichtschwerter (dort mit Macht und Kyber-Färben), Plastoid (eigenes Item mit anderem Rezept: hier Rubber + Eisen), Klonrüstung, Jawas, Tusken, Ewoks, Blaster, Force Pike. Die Wesen von Galaxy in a Cube stehen in Kategorie <code>MISC</code> und fehlen deshalb im Easy-NPC-Doppler; die von Star Wars Expansion nicht.</p>`,
    },
    {
      t: "Vanilla und Netherite",
      text: `<p>Der Miner Trader tauscht Vanilla-Rohstoffe in Credits (10 Eisen → 10 Credits, 10 Diamanten → 32). Beskar verlangt Netherite und die Schmiedevorlage. Das Tatooine-Kupfererz gibt Vanilla-Kupfer. Sonst trägt der Mod nichts in <code>forge:</code>-Tags ein; seine Barren verarbeitet kein anderer Mod.</p>`,
    },
    {
      t: "Easy NPC",
      x: true,
      text: `<p>Für Story-Figuren ist der Mod vor allem ein Modell-Lieferant: Droiden, Rodians, Twi'Leks, Wookie, Hutt und Co. sind als Easy-NPC-Doppler wählbar, weil sie als <code>MONSTER</code> oder <code>CREATURE</code> eingetragen sind.</p>`,
    },
  ],
  foot: "Quelle: StarWarsExpansionv3.1.0.jar der TestModsInstance (Minecraft 1.20.1, Forge 47.4.28): Rezepte, Advancements, Dimensionen, Weltgenerierung, Strukturdateien, Tags, Sprachdatei; Händler, Reise, Droiden-Items und Effekte aus den Klassen (javap). Der Mod braucht GeckoLib und Player Animator, obwohl mods.toml beide als optional führt (ohne Player Animator stürzt das Spiel beim Laden ab, 2026-10-31). Wesen, Fahrzeuge und Waffen haben 3D-Modelle; gezeigt sind die flachen Item-Texturen. Nicht ausgelesen: Werte von Waffen, Rüstungen und Fahrzeugen; Beute der Wesen im Einzelnen; welcher Arbeitsblock zu welchem Beruf gehört; ob Kyber-Kristalle, Planet Anchor, Thermal Detonator und die übrigen Teile ohne Rezept im Überleben irgendwo erreichbar sind; was Holocron und Galaxy Map im Spiel tun.",
};
