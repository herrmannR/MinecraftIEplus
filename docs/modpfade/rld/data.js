// Stand 2026-10-15, Minecraft 1.20.1. Quelle: Wesley's Roguelike Dungeons 1.20.1-2.3.6.jar (MCreator-Mod, Namespace wrd) –
// Advancements (Reihenfolge), Rezepte, Loot-Tabellen, Tags, Weltgenerierung, Strukturdateien und Sprachdatei. Der Mod hat kein Buch.
// Die Abläufe (Vessel of Vision, Schlüssel, Portal, Dungeon-Dimension) stehen nur im Code und sind aus den Klassen des JARs gelesen
// (javap), Vanilla-Namen über die Mapping-Dateien der Instanz. Config: wesleys-roguelike-dungeons-config.toml der Testinstanz (= Standardwerte).
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Wesley's Roguelike Dungeons",
  title: "Wesley's Roguelike Dungeons",
  accent: ["#b48ade", "#6a3f96"],
  lede: "Ein Dungeon-Mod ohne Technik und ohne Erze, aber mit langem Weg: Mit der Vessel of Vision ruft man Dungeons in die Oberwelt, kämpft sich durch drei Stockwerke zu Miniboss und Boss und öffnet die Ancient Bone Chest. Deren Orbs of the Deep wecken ein Portal in einem hohlen Baum, das Heart of the Deceiver aus dem Purpur-Palast im End schaltet es frei. Dahinter liegt die Dimension Wesley's Infinite Dungeons mit acht Dungeons auf Zeit, Gold und Edelsteinen, Shop und Opferstatue, und am Ende The Great Creator. Der Mod hat kein Buch; die Reihenfolge folgt dem Advancement-Baum, die Abläufe sind aus dem Code gelesen.",
  mods: [
    ["Wesley's Roguelike Dungeons", "2.3.6", "main"],
  ],
  phases: [
    {
      t: "Vessel of Vision",
      sub: "Advancements „May it guide you“ und „And so it begins“. Braucht nur Eisen, Blaze Powder und eine Ender Pearl, also einen Ausflug in den Nether.",
      steps: [
        {
          t: "Vessel of Vision",
          items: [
            ["wrd:item/vesselofvision", "Vessel Of Vision", "6 Iron Ingot, 1 Blaze Powder, 1 Ender Pearl, 1 Cauldron; Dungeon irgendwo in der Oberwelt"],
            ["wrd:item/vesselofvision_desert", "Sandy Vessel Of Vision", "Sand statt Ender Pearl; sucht ein heißes Biom"],
            ["wrd:item/vesselofvision_jungle", "Lush Vessel Of Vision", "Wheat Seeds statt Ender Pearl; sucht ein feuchtwarmes Biom"],
            ["wrd:item/vesselofvision_snowy", "Snowy Vessel Of Vision", "Snowball statt Ender Pearl; sucht ein kaltes Biom"],
            ["wrd:item/vesselofvision_nether", "Quartz Vessel Of Vision", "Nether Quartz statt Ender Pearl; Dungeon im Nether"],
          ],
          text: `<p>Die Vessel ist der eigentliche Startpunkt: Ab Werk entstehen Dungeons nicht von selbst in der Welt (<code>CFAllowNaturalDungeons = false</code>), sondern nur, wenn ein Spieler eine Vessel benutzt (<code>CFAllowVesselofVision = true</code>). Der erste Rechtsklick aktiviert sie („A new dungeon has Formed...“), der zweite sucht einen Ort und baut dort den Dungeon. Ob das Werkzeug danach verbraucht ist, ist nicht ausgelesen.</p>
<p>Der Code würfelt bis zu 20 Orte. Die normale Vessel sucht 5000 bis 10000 Blöcke entfernt und meidet Ozean und Strand. Die drei Biom-Varianten suchen 8000 bis 16000 Blöcke entfernt nach einer Grundtemperatur des Bioms: Sandy über 1,10, Lush zwischen 0,81 und 1,10, Snowy unter 0,10. Die Nether-Vessel sucht 1500 bis 3000 Blöcke entfernt im Nether. Findet sie nichts: „The vessel sees no dungeons, search for new lands and try again“.</p>
<p>Welcher Dungeon entsteht, entscheidet nicht die Vessel, sondern das Biom am Zielort (nächster Schritt). Die Varianten sind also Werkzeuge, um gezielt an eine bestimmte Dungeon-Gruppe zu kommen.</p>`,
          needs: [["Iron Ingot", "v", "6"], ["Blaze Powder", "v"], ["Cauldron", "v"], ["Ender Pearl, Sand, Wheat Seeds, Snowball oder Nether Quartz", "v", "je Variante"]],
        },
        {
          t: "Sentient Pathfinder",
          items: [
            ["wrd:item/dungeonlocatoritem", "Sentient Pathfinder", "1 Eye of Ender, 1 Soul Lantern, 1 Iron Ingot, formlos; ergibt 2"],
          ],
          text: `<p>Der Dungeon liegt tausende Blöcke weit weg; der Pathfinder bringt einen hin. Man setzt ihn auf einen Block, er wird zu einem schwebenden Wesen. Rechtsklick mit der benutzten Vessel überträgt den Ort („Destiny found, right click to power up!“), ein weiterer Rechtsklick startet einen Countdown. Danach teleportiert er alle Spieler in seiner Nähe zum Dungeon. Im Code gibt es auch einen Rückweg (Merker <code>canReturn</code>); wie er ausgelöst wird, ist nicht im Einzelnen gelesen.</p>`,
          needs: [["Eye of Ender", "v"], ["Soul Lantern", "v"], ["Iron Ingot", "v"], ["benutzte Vessel Of Vision", "m"]],
        },
      ],
    },
    {
      t: "Die Dungeons der Oberwelt",
      sub: "Advancements „The Temple“, „The Maze“, „The Glacier“, „The Magma Chambers“, „The Prison“, „The Illager Archives“ und ihre Unterpunkte. Setzt eine Vessel voraus; Kampfausrüstung ist die eigentliche Hürde.",
      steps: [
        {
          t: "Sechs Dungeon-Gruppen in drei Stockwerken",
          pics: [["render:model/wrd_chest_stronghold_normal", "Stronghold Chest"], ["render:model/wrd_golden_bricks_keyhole", "Boss Room Lock"]],
          text: `<p>Ein Dungeon besteht aus einem oberen Teil und Treppen in tiefere Teile. Welche Gruppe entsteht, entscheidet die Grundtemperatur des Bioms am Ort: im Nether die Nether-Gruppe, über 1,10 Wüste, 0,81 bis 1,10 Dschungel, unter 0,10 Eis, sonst je zur Hälfte „normal“ oder „besonders“. Innerhalb der Gruppe ist das obere Stockwerk eines von zwei; darunter folgt das nächste.</p>
<p>Alle Stockwerke sind aus Raumteilen zusammengesetzt (Gänge, Kreuzungen, Sackgassen, Seitenräume, verschlossene und geheime Räume, Rätselräume, Spawner). Die oberen Stockwerke ohne Boss haben zusätzlich Minispiel- und Schatzräume, die Stockwerke mit Boss einen Miniboss- und einen Bossraum. Größe und Schwierigkeit stellt die Config ein (<code>CFDungeonSize</code>, <code>CFDungeonDifficulty</code>, Standard jeweils „mittel“).</p>`,
          table: {
            head: ["Gruppe", "Oberes Stockwerk", "Mit Boss", "Tiefstes Stockwerk"],
            rows: [
              [null, "Normal (gemäßigt)", "Prison", "Catacombs: Undead Mage", "Necropolis: Necromancer"],
              [null, "Wüste (Sandy Vessel)", "Maze", "Mines: Ancient Mummy", "Tomb: The Host mit Wraiths"],
              [null, "Dschungel (Lush Vessel)", "Temple", "Ruins: Ancient Golem", "Labyrinth: Ancient Guardian Golem"],
              [null, "Eis (Snowy Vessel)", "Glacier", "Frosthold: Heart of Ice", "Tomb of Ice: Ice Mage"],
              [null, "Nether (Quartz Vessel)", "Magma Chambers", "The Forge: Doom Pillar", "Fiery Tomb: Doom Golem"],
              [null, "Besonders (gemäßigt)", "Illager Archives", "Crypt: The Sad King", "Cursed Sepulchres: The Overseer"],
            ],
          },
          needs: [["Kampfausrüstung", "v"]],
        },
        {
          t: "Schlüssel, Truhen und Key Bag",
          items: [
            ["wrd:item/stronghold_chest_key", "Stronghold Chest Key", "häufigster Schlüssel aus den Truhen der Dungeons"],
            ["wrd:item/stronghold_chest_iron_key", "Iron Stronghold Chest Key", "öffnet die Iron Stronghold Chest"],
            ["wrd:item/stronghold_library_chest_key", "Library Stronghold Chest Key", "öffnet die Library Stronghold Chest"],
            ["wrd:item/dungeon_chest_key", "Dungeon Stronghold Chest Key", "öffnet die Dungeon Stronghold Chest"],
            ["wrd:item/stronghold_chest_gold_key", "Golden Stronghold Chest Key", "öffnet die Golden Stronghold Chest"],
            ["wrd:item/treasure_chest_key", "Stronghold Treasure Chest Key", "öffnet die Stronghold Treasure Chest"],
            ["wrd:item/stronghold_chest_redstone_key", "Redstone Stronghold Chest Key", "öffnet die Redstone Stronghold Chest"],
            ["wrd:item/stronghold_chest_diamond_key", "Diamond Stronghold Chest Key", "öffnet die Diamond Stronghold Chest"],
            ["wrd:item/bastion_chest_key", "Bastion Stronghold Chest Key", "nur in Nether-Dungeons"],
            ["wrd:item/key_bag", "Key Bag", "1 Lead, 3 Leather, 1 Iron Ingot; hält Schlüssel und Kreide"],
            ["wrd:item/red_marking_chalk", "Red Chalk Marker, Blue Chalk Marker, Green Chalk Marker", "Wegmarken auf dem Boden"],
          ],
          text: `<p>Jede Truhe der Dungeons braucht ihren Schlüssel. Die einfachen Truhen der Räume (Beutetabellen je Dungeon wie <code>prison_junk</code>, <code>maze</code>, <code>the_forge</code>) geben neben Plunder fast immer einen Schlüssel aus, gewichtet vom gewöhnlichen Stronghold Chest Key (32) bis zum Diamond Key (1). Die Rätselräume (<code>puzzle_room_keys</code>) geben 5 bis 8 Schlüssel auf einmal. Die Schlüsseltruhen selbst haben bessere Beute: Eisen-, Gold-, Diamant- und Redstone-Ausrüstung, Erze, Smaragde, verzauberte Bücher; die Treasure Chest unter anderem Diamantblöcke, Totem of Undying, Ancient Debris und Musikdiscs.</p>
<p>Der Key Bag nimmt alle Schlüssel und Kreidemarker auf; Schlösser akzeptieren den Schlüssel auch, wenn er im Beutel steckt. Mit Kreide im Beutel setzt Shift-Rechtsklick eine Markierung auf den Boden, die Taste R (Standard) wechselt die Farbe. Für verwinkelte Stockwerke ist das die Orientierungshilfe des Mods.</p>`,
          needs: [["Lead", "v"], ["Leather", "v", "3"], ["Iron Ingot", "v"]],
        },
        {
          t: "Miniboss und Bone Chest Key",
          items: [
            ["wrd:item/bone_chest_key", "Bone Chest Key", "Drop jedes Minibosses"],
            ["wrd:item/bleeding_corruption", "Bleeding Corruption", "2 bis 4 je Miniboss"],
          ],
          text: `<p>Im Minibossraum der Boss-Stockwerke erscheint nach einem Countdown einer von sechs „Corrupted“-Gegnern: Corrupted Zombie, Corrupted Skeleton, Corrupted Iron Golem, Corrupted Endermen, in den Nether-Dungeons Corrupted Blaze, im Labyrinth Corrupted Guardling. Alle teilen dieselbe Todesroutine: Sie lassen einen Bone Chest Key und 2 bis 4 Bleeding Corruption fallen (Advancement „A Key of Secrets“: „Defeat the miniboss at the lower section of the dungeon“).</p>
<p>Bleeding Corruption ist der Stoff, aus dem später Orb of Corruption und Heart of the Deceiver entstehen. Der Bone Chest Key öffnet die Ancient Bone Chest (Schritt 7).</p>`,
        },
        {
          t: "Bosse, Trophäen und Bossschlüssel",
          pics: [["render:model/wrd_trophy_um", "Undead Mage Trophy"]],
          items: [
            ["wrd:item/boss_key", "Boss Room Key", "Drop der Bosse; öffnet das Boss Room Lock"],
            ["wrd:item/treasure_key", "Treasure Room Key", "Drop der Bosse; öffnet das Treasure Room Lock"],
            ["wrd:item/secret_room_key", "Secret Room Key", "aus Truhen; öffnet Mossy Iron Bars Keyhold (Geheimräume)"],
            ["render:model/wrd_golden_bricks_keyhole_treasure_s", "Treasure Room Lock", "Schloss vor dem Schatzraum"],
          ],
          text: `<p>Die meisten der zwölf Bosse der Oberwelt kämpfen in mehreren Phasen (im Code eigene Mobs „stage 1“ bis „stage 3“). Jeder lässt beim Tod einen Boss Room Key, einen Treasure Room Key, zwei Diamond Stronghold Chest Keys und seine Trophäe fallen. Die Trophäe ist ein Block; wer sie aufhebt, bekommt das Advancement des Bosses. Für die The-Host-Gruppe heißt die Trophäe „King Wraith Trophy“.</p>
<p>Die Schlösser nehmen ihren Schlüssel aus Hand oder Key Bag („You need a Boss Room Key or a keybag containing this key“). Der Boss Room Key öffnet die Bossräume, der Treasure Room Key den Schatzraum. Wo der erste Boss Room Key eines Dungeons herkommt, wenn der Bossraum verschlossen ist, steht nicht in einer Beutetabelle; im Code geben ihn nur die Bosse aus.</p>`,
          table: {
            head: ["Boss", "Dungeon", "Advancement"],
            rows: [
              [null, "Undead Mage", "Catacombs", "Dead Mage Now"],
              [null, "Necromancer", "Necropolis", "Stay Dead!"],
              [null, "Ancient Mummy", "Mines", "That's a Wrap!"],
              [null, "The Host", "Tomb", "A Crown For A King"],
              [null, "Ancient Golem", "Ruins", "Golem Gone"],
              [null, "Ancient Guardian Golem", "Labyrinth", "Wet... Wet Again"],
              [null, "Heart of Ice", "Frosthold", "Cold Blooded"],
              [null, "Ice Mage", "Tomb of Ice", "Pretty Much Dust Already"],
              [null, "Doom Pillar", "The Forge", "The Brain Of The Operation"],
              [null, "Doom Golem", "Fiery Tomb", "Back In Golem Hell"],
              [null, "The Sad King", "Crypt", "The Kings Have Fallen"],
              [null, "The Overseer", "Cursed Sepulchres", "Look! Look! LOOK!"],
            ],
          },
          needs: [["Boss Room Key, Treasure Room Key", "m"]],
        },
        {
          t: "Ancient Bone Chest",
          pics: [["render:model/wrd_bone_chest", "Ancient Bone Chest"]],
          items: [
            ["render:model/wrd_bone_chest_s", "Ancient Bone Chest", "im Schatzraum versteckt; braucht den Bone Chest Key"],
            ["wrd:item/orbofthedeep", "Orb Of The Deep", "1 bis 2 je Truhe; Schlüsselteil für das Portal"],
            ["wrd:item/all_seeing_eye", "All Seeing Eye", "1 bis 4 je Truhe; führt zum Purpur-Palast"],
            ["wrd:item/bleeding_corruption", "Bleeding Corruption", "1 bis 6 Ziehungen zu je 1 bis 3"],
            ["wrd:item/trialstone", "Trialstone", "1 je Truhe; ein freier Lauf in der Dungeon-Dimension"],
            ["wrd:item/corruptedgreatknight_chestplate", "Corrupted Greatknight Chestplate", "2 Ziehungen aus Rüstung und Werkzeugen der Corrupted-Reihe"],
            ["wrd:item/ancient_tome_special", "Spellbook Special Tome", "1 aus 5 Sorten"],
          ],
          text: `<p>Die Bone Chest ist das Ziel jedes Oberwelt-Dungeons (Advancement „A Chest of Ancient Remains“: „Open the Ancient Bone Chest hidden in the treasure room“). Ihre Beutetabelle <code>bone_chest_loot</code> gibt neben Knochen, Goldrüstung und drei verzauberten Büchern (Stufe 30 bis 60, auch Schatz-Verzauberungen) die Teile für alles Weitere aus.</p>
<p>Für das Portal braucht man 8 Orbs of the Deep (Schritt 11), also bei 1 bis 2 je Truhe vier bis acht Dungeons. Das ist der eigentliche Mahlstrom des Mods: Jeder Dungeon heißt Vessel, Reise, drei Stockwerke, Miniboss, Schatzraum.</p>`,
          needs: [["Bone Chest Key", "m", "vom Miniboss"]],
        },
      ],
    },
    {
      t: "Der Purpur-Palast im End",
      sub: "Advancements „What Is Hidden Beyond The Eye..“, „The Palace At The End Of The Game“ und seine Bosse. Setzt das All Seeing Eye aus der Bone Chest und den Zugang zum End voraus.",
      steps: [
        {
          t: "All Seeing Eye und End Palace",
          items: [
            ["wrd:item/all_seeing_eye", "All Seeing Eye", "„Is used for finding the Purpur Palace“"],
            ["wrd:item/purpurkey", "Purpur Stronghold Chest Key", "aus Truhen des Palasts; öffnet Purpur- und Endstone-Truhen"],
          ],
          text: `<p>Das Auge funktioniert nur im End („You need to be in The End to use this“). Rechtsklick teleportiert zum Palast bei den festen Koordinaten 1000 / 800 / 50 und baut beim ersten Mal dessen Eingang (<code>purpur_palace_start</code>); der Palast setzt sich aus Türmen, Brücken und Innenräumen zusammen (<code>end_palace_*</code>, über 100 Strukturdateien).</p>
<p>In den Truhen liegen Chorus, Endstein, Eisenwerkzeug, Shulker Shells und der Purpur-Schlüssel; die verschlossenen Purpur- und Endstone-Truhen geben Diamantausrüstung mit Verzauberung, Ender Eyes und Ender Pearls.</p>`,
          needs: [["All Seeing Eye", "m"], ["Zugang zum End", "v"]],
        },
        {
          t: "Ender King, Super Enforcer und Heart of Ender",
          items: [
            ["wrd:item/heartofender", "Ender Heart", "Drop des Heart Of Ender"],
            ["wrd:item/acid_cloud_wand", "Acid Wand", "Drop des Ender King"],
          ],
          text: `<p>Ein Spawner im Palast ruft drei Gegner: den Ender King („The King At The End Of The Game“), den Ender Super Enforcer („Hardcore Parkour“) und das Heart Of Ender („Beat That!“). Nur das Heart Of Ender ist Pflicht: Es lässt das Ender Heart fallen, die zweite Zutat des Heart of the Deceiver.</p>`,
        },
      ],
    },
    {
      t: "Das Portal",
      sub: "Advancements „Deceived“ und „What is this place?“. Setzt 8 Orbs of the Deep (Oberwelt-Dungeons) und das Ender Heart (Purpur-Palast) voraus.",
      steps: [
        {
          t: "Heart of the Deceiver",
          items: [
            ["wrd:item/heart_of_the_watcher", "Heart Of The Deceiver", "8 Bleeding Corruption um 1 Ender Heart"],
          ],
          text: `<p>Der Schlüssel zum Portal. Die Bleeding Corruption stammt von den Minibossen und aus den Bone Chests, das Ender Heart aus dem End. Beim Herstellen gibt es nur Partikel und ein Geräusch.</p>`,
          needs: [["Bleeding Corruption", "m", "8"], ["Ender Heart", "m"]],
        },
        {
          t: "Portalbaum",
          pics: [["render:model/wrd_stonebrickorb", "Portal Ring Orb Holder"], ["render:model/wrd_portal_activator_off", "Portal Ring Heart Holder"]],
          plan: {
            name: "Portalbaum (wrd_portal_structure)",
            size: "11×39×11",
            key: {
              A: ["Oak Log", "minecraft:block/oak_log"],
              B: ["Oak Wood", "minecraft:block/oak_log"],
              C: ["Dark Oak Log", "minecraft:block/dark_oak_log"],
              D: ["Oak Leaves", "minecraft:block/oak_leaves"],
              F: ["Portal Ring Orb Holder", "render:model/wrd_stonebrickorb_s"],
              G: ["Portal Ring", "render:model/wrd_portal_ring_block_off_s"],
              H: ["Portal Ring Heart Holder", "render:model/wrd_portal_activator_off_s"],
            },
            count: { A: 1102, B: 335, C: 411, D: 194, F: 8, G: 3, H: 1 },
            form: "Der Baum entsteht von selbst in der Welt; man baut ihn nicht. In seinem hohlen Inneren (Ebene 11) liegen die 8 Orb Holder im Ring um den Heart Holder, dazwischen Kerzen, Wurzeln, Ranken, Corrupted Crystal und eine Library-Truhe.",
          },
          items: [
            ["render:model/wrd_stonebrickorb_s", "Portal Ring Orb Holder", "Rechtsklick mit einem Orb Of The Deep füllt ihn"],
            ["render:model/wrd_portal_activator_off_s", "Portal Ring Heart Holder", "Rechtsklick mit dem Heart Of The Deceiver öffnet das Portal"],
          ],
          text: `<p>Der Baum ist ein eigenes Weltmerkmal: auf jedem Biom außer Ozeanen, Stränden und Plains, im Schnitt 400 auf eine Million Chunks. Er hängt nicht an der Config für natürliche Dungeons und erscheint also auch im Standard.</p>
<p>Jeder der acht Orb Holder nimmt einen Orb Of The Deep auf. Fehlt noch einer, meldet der Heart Holder „The portal needs more Orbs Of The Deep“, ohne Heart „You need a Heart Of The Deceiver“. Sind alle gefüllt, baut der Mod das offene Portal (<code>portal_open</code>); wer es betritt, landet in der Dimension <code>wrd:wesleys_infinite_dungeons</code> (Advancement „What is this place?“).</p>`,
          needs: [["Orb Of The Deep", "m", "8"], ["Heart Of The Deceiver", "m"]],
        },
      ],
    },
    {
      t: "Wesley's Infinite Dungeons",
      sub: "Advancements „Corrupt“, „The Deep Dark Dungeons Below“, „Where shall we go?“ und alles darunter. Setzt das Portal voraus; jeder Lauf kostet einen Orb of Corruption.",
      steps: [
        {
          t: "Orb of Corruption und Dungeon-Eingang",
          pics: [["render:model/wrd_dungeon_entrance", "Dungeon Totempole Top"]],
          items: [
            ["wrd:item/orb_of_corruption", "Orb of Corruption", "2 Bleeding Corruption + 1 Ender Pearl, formlos; Eintritt für einen Lauf"],
            ["render:model/wrd_dungeon_entrance_s", "Dungeon Totempole Top", "Eingang; Rechtsklick mit dem Orb startet den Lauf"],
            ["wrd:item/trialstone", "Trialstone", "„Teleports player to The dungeon dimension for a free attempt“"],
          ],
          text: `<p>Die Dimension ist ein Vorraum mit Auswahlbereichen; beim Betreten warnt der Mod: „Items can be permanently lost in the dungeons“. Der Lauf beginnt am Totempfahl. Er verlangt drei Dinge: einen gewählten Dungeon („Select a dungeon near the Artefact Altar“), eine gewählte Schwierigkeit („Select a difficulty in the difficulty selection area“) und einen Orb of Corruption in der Hand („You need an Orb of Corruption“). Dann baut der Mod den Dungeon und öffnet den Eingang.</p>
<p>Liegt beim Start ein Artefakt am Altar (Schritt 16), wird es geopfert und verändert den Lauf (Advancement „Enhanced Depths“).</p>`,
          needs: [["Bleeding Corruption", "m", "2"], ["Ender Pearl", "v"]],
        },
        {
          t: "Schwierigkeit und Dungeon-Wahl",
          pics: [["render:model/wrd_diff_select_empty", "Difficulty Selector"], ["render:model/wrd_dungeon_selector_great_temple", "Dungeon Selector"]],
          text: `<p>Die Schwierigkeit wählt man an den Difficulty Selectors: Easy ohne Bedingung, Medium ab Erfahrungsstufe 5, Hard ab 30, Extreme ab 60. Eine zweite Stelle im Code nennt für Medium 10 und für Hard 35; welche im Spiel greift, hängt davon ab, von welcher Stufe aus man umschaltet (nicht im Einzelnen gelesen). Den Dungeon wählt man an seinem Selector nahe dem Artefakt-Altar; jeder verlangt eine Erfahrungsstufe:</p>`,
          table: {
            head: ["Dungeon", "Stufe", "Boss", "Advancement"],
            rows: [
              [null, "Snake Temple", "–", "King Snake", "Slithering King"],
              [null, "Aquatic Shrine", "10", "Aquaguard", "Evaporated"],
              [null, "Gemstone Grotto", "30", "Crystal Spider", "And Where Crystals Die"],
              [null, "Temple of Ra", "40", "Giant Mummy", "David Versus Goliath"],
              [null, "The Maw", "50", "Face of The Maw", "Face Off"],
              [null, "Arctic Cenotaph", "60", "The Corpse", "The Thing"],
              [null, "Palace of The Dead", "70", "The Beyond", "Foliage of The Damned"],
              [null, "City of Gold", "80", "The Fallen, danach The Great Creator", "He Who Fell Has Fallen Again"],
            ],
          },
          needs: [["Erfahrungsstufen", "v", "bis 80"]],
        },
        {
          t: "Zeit: Time Rock und Time Dust",
          pics: [["render:model/wrd_infinite_dungeon_time_statue", "Time Rock"]],
          items: [
            ["wrd:item/time_dust_small", "Small Time Dust", "+150 auf den Zähler"],
            ["wrd:item/time_dust_medium", "Medium Time Dust", "+540"],
            ["wrd:item/time_dust_large", "Large Time Dust", "+1500"],
            ["render:model/wrd_infinite_dungeon_time_statue_s", "Time Rock", "nimmt den Staub per Rechtsklick"],
          ],
          text: `<p>Jeder Lauf hat einen Zeitzähler. Time Dust liegt im Dungeon in Haufen oder wird im Shop gekauft; am Time Rock eingesetzt verlängert er den Lauf (Advancement „I Need More Time!“). Läuft der Zähler ab, bricht der Dungeon zusammen: Der Spieler nimmt Schaden und verliert die Dungeon-Gegenstände aus dem Inventar. Wie schnell der Zähler läuft, stellt die Config ein (<code>CFSlowerDungeonCounter</code>, Standard 100).</p>`,
        },
        {
          t: "Gold, Edelsteine und Gold Grinder",
          pics: [["render:model/wrd_infinite_dungeon_coin_deposit", "Gold Grinder"], ["render:model/wrd_golden_skull", "Golden Skull of Ancients"]],
          items: [
            ["wrd:item/lost_gold_small", "Small Gold Pile, Medium Gold Pile, Large Gold Pile", "10, 50, 500 Gold"],
            ["wrd:item/golden_ring", "Golden Ring", "250 Gold"],
            ["wrd:item/golden_vase", "Golden Vase", "750 Gold"],
            ["wrd:item/golden_staff", "Golden Scepter", "1500 Gold"],
            ["wrd:item/golden_necklace", "Golden Necklace", "2000 Gold"],
            ["wrd:item/golden_crown", "Golden Crown", "2500 Gold"],
            ["wrd:item/blue_gems", "Blue Gems, Green Gems, Red Gems", "3, 9, 27 Edelsteine"],
            ["render:model/wrd_golden_skull_s", "Golden Skull of Ancients", "18500 Gold und 250 Edelsteine"],
          ],
          text: `<p>Gold liegt als Haufen in den Räumen, Schätze stehen in Schatzräumen, und auch Mobs der Dimension lassen Gold Piles und Edelsteine fallen (Mobs mit dem Modifier „ExtraGold“ einen Medium Gold Pile; die übrigen Bedingungen sind nicht im Einzelnen gelesen). Erst im Gold Grinder zählt es: Er mahlt Haufen, Schätze und Edelsteine zu einem gemeinsamen Dungeon-Wert. Die Advancements dafür reichen bis 100.000 Gold und 1000 Edelsteine.</p>
<p>Der Dungeon-Wert bestimmt am Ende des Laufs die Belohnung (Schritt 17). Die Schätze selbst nimmt man nicht mit: Das Exit Portal entfernt Gold, Edelsteine, Time Dust, die farbigen Schlüssel und Bücher aus dem Inventar.</p>`,
        },
        {
          t: "Shop, Opferstatue und Artefakte",
          pics: [["render:model/wrd_sacrificial_statue", "Sacrificial Statue"], ["render:model/wrd_protective_amulet", "Protective Amulet"]],
          items: [
            ["render:model/wrd_sacrificial_statue_s", "Sacrificial Statue", "verhängt Curse Of Sacrifices; wer überlebt, bekommt Edelsteine, Time Dust und Gold"],
            ["render:model/wrd_protective_amulet_s", "Protective Amulet", "eines von 25 Artefakten"],
          ],
          text: `<p><b>Shop.</b> In Shopräumen stehen Waren mit Preisschild (0, 25, 50, 100, 500 oder 999): Fackeln, Teppiche, Time Dust, Gold Piles, der blaue und rote Bodenschlüssel und Artefakte. Gekauft wird per Rechtsklick auf die Ware; wovon der Preis abgezogen wird, ist nicht im Einzelnen gelesen. Zum Shop gehört der Dark Shopkeeper (Mob).</p>
<p><b>Opfer.</b> Die Sacrificial Statue verhängt den Fluch Curse Of Sacrifices. Wer ihn übersteht, bekommt Blue, Green und Red Gems, Time Dust und Gold Piles (Advancement „Paid With Blood“).</p>
<p><b>Artefakte.</b> Artefakte sind Blöcke, die im Dungeon zufällig liegen oder im Shop stehen: 12 Fundstücke (Protective Amulet, Fools Gold, Trapper's Guide, Skull Of Vengeance, Note Of Hidden Secrets, Face Of Golden Touch, Broken Sword, Bloody Diamond, Shopkeepers Ring, Broken Banner, Empty Bottle, Broken Time Stone) und 13 Silber-Ringe und -Amulette (Speed, Jumping, Resistance, Fire Resistance, Gathering, Strength, Slowing; Hatred, The Undead, Creeping, Lost Armies, Magic, Vampirism). Am Altar geopfert schalten sie Merkmale für den nächsten Lauf (im Code unter anderem doppelte Zeit, mehr Gold, mehr Fallen, Arenen und Spawner, mehr Edelstein-Shops). Welches Artefakt was bewirkt, ist nicht im Einzelnen ausgelesen.</p>`,
        },
        {
          t: "Ende eines Laufs und Belohnung",
          text: `<p>Wer durch das Exit Portal geht, verlässt den Dungeon (Advancement „Collapsed“: „Leave the dungeon in time“). Dabei rechnet der Mod den erspielten Dungeon-Wert und die Schwierigkeit in Erfahrung und Belohnung um und wirft Beute aus vier Item-Tags aus:</p>
<ul><li><code>forge:ok_loot</code>: Raw Gold, Raw Iron, Raw Copper</li>
<li><code>forge:good_loot</code>: Emerald, Diamond</li>
<li><code>forge:better_loot</code>: Block of Raw Iron, Block of Raw Gold, Block of Raw Copper, Amethyst Shard</li>
<li><code>forge:super_loot</code>: Netherite Scrap, Orb of Corruption, Ancient Debris</li></ul>
<p>Die Staffel richtet sich nach dem Dungeon-Wert; im Code stehen Schwellen bis 64.000. Die genaue Zuordnung von Wert zu Menge ist nicht ausgelesen. Über <code>super_loot</code> kann ein guter Lauf den Orb of Corruption für den nächsten zurückgeben.</p>`,
          needs: [["Dungeon-Wert", "m", "Gold und Edelsteine aus dem Lauf"]],
        },
        {
          t: "The Great Creator",
          pics: [["render:model/wrd_trophy_fb", "The Great Creator Trophy"]],
          text: `<p>Wählt man die City of Gold, baut der Mod beim Start zusätzlich die Hallen des Endkampfs (<code>infinite_dungeon_finalboss_*</code>). Nach The Fallen folgt dort The Great Creator in fünf Phasen; in den Phasen 2 bis 5 führt er ein Corrupted Greatsword. Sein Tod gibt die Trophäe (Advancement „Thank You..“: „Beat The Great Creator“) und die Truhe <code>final_chest</code> mit 64 Ziehungen aus Diamantblöcken.</p>
<p>Das ist das Ende des Mods. Danach bleiben die acht Dungeons mit ihren Gold- und Edelstein-Advancements als Wiederholung.</p>`,
        },
      ],
    },
  ],
  solo: [
    {
      t: "Waffen aus den Dungeons",
      text: `<p>Alle Waffen kommen aus Truhen oder von Mobs, keine hat ein Rezept. Elf stehen im Tag <code>minecraft:swords</code>. Haltbarkeit aus dem Tier im Code; als Fundort steht die Beutetabelle (ihr Name nennt meist den Dungeon) oder der Mob, der die Waffe trägt. Zwei verschiedene Klingen heißen im Spiel „Ancient Cutlass“.</p>`,
      table: {
        head: ["Waffe", "Haltbarkeit", "Fundort"],
        rows: [
          ["wrd:item/corrupted_greatsword", "Corrupted Greatsword", "2532", "bone_chest_loot; Waffe von The Great Creator"],
          ["wrd:item/corrupted_greataxe", "Corrupted Greataxe", "2532", "bone_chest_loot"],
          ["wrd:item/corrupted_great_pickaxe", "Corrupted Great Pickaxe, Corrupted Great Shovel", "2532", "bone_chest_loot; Werkzeugstufe 5"],
          ["wrd:item/corrupted_great_hoe", "Corrupted Great Hoe", "2533", "bone_chest_loot"],
          ["wrd:item/corrupted_necromancing_wand", "Corrupted Greatwand, Corrupted Great Scepter", "–", "bone_chest_loot"],
          ["wrd:item/cutlass", "Ancient Cutlass", "512", "maze, tomb; Swordwielding Zombie Pharao"],
          ["wrd:item/ice_sword", "Ancient Cutlass", "256", "frosthold; Frost Golem Soldier (Eis-Ausführung)"],
          ["wrd:item/sharpened_pickaxe_iron", "Sharpened Pickaxe", "512", "mines"],
          ["wrd:item/bonesword_iron", "Bone Sword", "250", "leftovers"],
          ["wrd:item/weaponisedtorch", "Weaponised Torch", "256", "mines"],
          ["wrd:item/bamboo_mace_iron", "Bamboo Mace", "128", "Temple Cultist Warrior"],
          ["wrd:item/coralsword_iron", "Coral Sword", "128", "Coral Drowned Warrior"],
          ["wrd:item/stunbaton_iron", "Stun Baton", "128", "prison_junk"],
          ["wrd:item/ceremonyknife_iron", "Ceremony Knife", "60", "archive_junk, skeletal_remains"],
          ["wrd:item/bone_crusher", "Bone Crusher", "50", "archive_junk, crypt_bones, cursed_chests"],
          ["wrd:item/ancient_club", "Ancient Club", "20", "glacier"],
        ],
      },
    },
    {
      t: "Zauberstäbe und Wurfwaffen",
      items: [
        ["wrd:item/emerald_wand", "Emerald Wand", "tomb"],
        ["wrd:item/pharaowand_iron", "Wand Of The Pharao", "maze"],
        ["wrd:item/ice_wand", "Ice Wand", "tombofice"],
        ["wrd:item/bloodwand_iron", "Blood Wand", "skeletal_remains"],
        ["wrd:item/acid_cloud_wand", "Acid Wand", "Drop des Ender King"],
        ["wrd:item/blowdart", "Blowpipe", "ruins"],
        ["render:model/wrd_death_tome_s", "Death Tome", "archive_junk, crypt_bones"],
        ["wrd:item/spear_iron", "Throwable Spear", "leftovers"],
        ["wrd:item/ice_spear", "Throwable Ice Spear", "frosthold"],
        ["wrd:item/throwablebomb_iron", "Throwable Bomb, Throwable Fire Bomb, Throwable Ice Bomb, Throwable Icicle", "prison_junk, the_forge, tombofice, glacier"],
      ],
      text: `<p>Schaden und Verbrauch der Stäbe stehen im Code und sind nicht ausgelesen.</p>`,
    },
    {
      t: "Magic Spellbook",
      pics: [["render:model/wrd_magic_spellbook_enchanter", "Magic Spellbook Enchanter"], ["render:model/wrd_magic_spellbook", "Magic Spellbook"]],
      items: [
        ["render:model/wrd_magic_spellbook_enchanter_s", "Magic Spellbook Enchanter", "2 Gold Ingot, 1 Light Weighted Pressure Plate, 5 Planks, 1 Eye of Ender"],
        ["wrd:item/spellbook", "Unwritten Magic Spellbook", "stronghold_loot_normal"],
        ["wrd:item/ancient_tome_cast", "Spellbook Casting Tome", "stronghold_loot_diamond; Area, Bounce, Inhabit, Puddle, Spray"],
        ["wrd:item/ancient_tome_damage", "Spellbook Damage Tome", "stronghold_loot_iron; Fire, Ice, Poison, Raw, Water"],
        ["wrd:item/ancient_tome_special", "Spellbook Special Tome", "bone_chest_loot; Chaos, Flash Freeze, Inferno, Melting, Nuke"],
      ],
      text: `<p>Der Enchanter setzt ein leeres Zauberbuch aus je einem Casting-, Damage- und Special-Tome zum Magic Spellbook zusammen, einer Fernkampfwaffe. Das Ergebnis trägt die drei Eigenschaften, 125 mögliche Bücher. Die Wirkung der einzelnen Kombinationen ist nicht ausgelesen.</p>`,
    },
    {
      t: "Rüstung",
      table: {
        head: ["Teil", "Rüstung", "Haltbarkeit"],
        rows: [
          ["wrd:item/corruptedgreatknight_helmet", "Corrupted Greatknight Helmet", "2", "275"],
          ["wrd:item/corruptedgreatknight_chestplate", "Corrupted Greatknight Chestplate", "6", "400"],
          ["wrd:item/corruptedgreatknight_leggings", "Corrupted Greatknight Leggings", "5", "375"],
          ["wrd:item/corruptedgreatknight_boots", "Corrupted Greatknight Boots", "2", "325"],
          ["wrd:item/corruptedgreatknight_crown", "Corrupted Greatknight Crown, Corrupted Greatknight Hood", "2", "242"],
        ],
      },
      text: `<p>Alle Teile aus der Bone Chest. Härte 4, Rückstoßresistenz 0,1; Krone und Kapuze lassen sich besser verzaubern (28 statt 9). Werte aus dem Rüstungsmaterial im Code.</p>`,
    },
    {
      t: "Fundstücke mit eigener Wirkung",
      items: [
        ["wrd:item/unpowered_relic_of_souls", "Relic Of Souls", "fierytomb; wird zum Charged Relic Of Souls und gibt Soul Protection"],
        ["wrd:item/heart_of_fire", "Heart Of Fire", "magma_chambers_lootable; Feuerangriff per Rechtsklick"],
        ["render:model/wrd_skull_of_flame_s", "Skull Of Flame", "temple_treasure"],
        ["render:model/wrd_cursed_skull_s", "Cursed Skull", "cursed_chests"],
        ["wrd:item/special_fish_eggs", "Special Fish Eggs", "labyrinth"],
      ],
      text: `<p>Einzelwerte stehen im Code und sind nicht ausgelesen.</p>`,
    },
    {
      t: "Tränke und Flüssigkeiten",
      items: [
        [null, "Potion of Antipoison", "Braustand: Potion of Poison + Apple"],
        [null, "Potion of Liquid Heat", "Awkward Potion + Fire Charge"],
        [null, "Potion of Hypothermia", "Awkward Potion + Snowball"],
        [null, "Potion of Soul Protection", "Thick oder Mundane Potion + Bone"],
        [null, "Poison Bucket, Icewater Bucket", "Flüssigkeiten der Dungeons; im Tag minecraft:water"],
      ],
      text: `<p>Die Tränke gehören zu den Gefahren der Dungeons (Gift, Hitze, Kälte); jede Sorte gibt es auch als Splash, Lingering und Pfeil. Die Eimer haben weder Rezept noch Beutetabelle. Der Mod hat außerdem drei Verzauberungen (Impenetrable Boots, Impenetrable Chestplate, Hard Headed); woher sie kommen, ist nicht ausgelesen.</p>`,
    },
    {
      t: "Gestein in der Oberwelt",
      items: [
        ["wrd:block/deep_sand", "Deep Sand", "ersetzt Sand in warmen und lauwarmen Ozeanen, Plains und Desert; Adern bis 64 Blöcke, 1 je Chunk, Höhe 0 bis 128"],
        ["wrd:block/maulstone", "Maulstone", "ersetzt Stein, Granit, Diorit, Andesit in Mushroom Fields; 8 je Chunk, Höhe 0 bis 64"],
      ],
      text: `<p>Die einzigen Blöcke, die der Mod natürlich in die Welt setzt. Deep Sand wird formlos zu Quicksand, Maulstone zu Maulstone Bricks und Fliesen.</p>`,
    },
    {
      t: "Bau- und Dekoblöcke",
      text: `<p>Über 1300 Blöcke, die meisten für den Bau der Dungeons. Rund 140 haben ein Werkbank-Rezept aus Vanilla-Stoffen: Ancient, Dark, Jungle, Andesite, Blackstone, Maulstone und Tomb-Sandstone-Steine samt Stufen, Treppen und Mauern; Knochenwände, Kerzen, Kronleuchter, Kohlebecken, Haunted Bookshelves, Dim Lanterns und eine Candle Bomb (Floor Candles, Gunpowder, 3 Gold Ingot).</p>`,
    },
    {
      t: "Trophäen und Musik",
      text: `<p>21 Boss-Trophäen (12 Oberwelt, 8 Dimension, The Great Creator). 8 Musikdiscs der Dimension (Noedell), im Tag <code>minecraft:music_discs</code>; vier davon tragen den Hinweis „Music not implemented yet“. Sie liegen in der Treasure Chest der Oberwelt-Dungeons.</p>`,
    },
    {
      t: "Ohne Fundort",
      text: `<p>Registriert, aber weder Rezept noch Beutetabelle noch eine Stelle im Code, die sie ausgibt: <b>Wesleys Infinite Dungeons Portal Igniter</b>, <b>Poison Bucket</b>, <b>Icewater Bucket</b> und ein Duplikat des Corrupted Great Scepter mit dem Namen „E“. Dazu kommen 15 Geschoss-Items, die nur intern als Bild dienen. Alle Mobs haben Spawn Eggs.</p>`,
    },
  ],
  bridges: [
    {
      t: "Keine Verbindung zu anderen Mods",
      text: `<p>Der Mod hängt nur an Minecraft und Forge. Alle Rezepte und Beutetabellen nutzen Vanilla-Items. Er hat keine Rezepte für andere Mods und keine Bedingungen auf andere Mods.</p>`,
    },
    {
      t: "Belohnungs-Tags",
      text: `<p>Die Belohnung am Ende eines Laufs kommt aus <code>forge:ok_loot</code>, <code>forge:good_loot</code>, <code>forge:better_loot</code> und <code>forge:super_loot</code>. Im Pack füllt nur dieser Mod sie (geprüft über alle 98 JARs der Instanz). Andere Mods können sich hier ohne Code einklinken; ein eingetragenes Item fällt dann als Dungeon-Belohnung.</p>`,
    },
    {
      t: "Gemeinsame Tags",
      text: `<p>Die elf Waffen stehen in <code>minecraft:swords</code>, die Discs in <code>minecraft:music_discs</code>, Poison und Icewater in <code>minecraft:water</code>. Der Mod trägt nichts in <code>forge:ingots</code>, <code>forge:ores</code> oder ähnliche Material-Tags ein: Er liefert keine Rohstoffe für andere Mods und verarbeitet keine.</p>`,
    },
  ],
  foot: "Quelle: Wesley's Roguelike Dungeons 1.20.1-2.3.6.jar der Testinstanz (Minecraft 1.20.1, Forge 47.4.26): Advancements, Rezepte, Beutetabellen, Tags, Weltgenerierung, Strukturdateien, Sprachdatei, Config der Instanz (Standardwerte); Abläufe aus den Klassen des JARs. Mobs sind im Code gezeichnet und haben kein Bild. Nicht ausgelesen: Schaden der Waffen und Stäbe, Wirkung der Artefakte, Zauberbuch-Kombinationen, Verzauberungen und Tränke; die Staffel der Belohnung nach Dungeon-Wert; Lebenspunkte und Angriffe der Bosse; wo der erste Boss Room Key eines Dungeons liegt; wie der Rückweg des Sentient Pathfinder ausgelöst wird; ob die Vessel beim Benutzen verbraucht wird.",
};
