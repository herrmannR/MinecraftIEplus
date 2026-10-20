// Meilensteine – ENTWURF für Minecraft 1.20.1. Feiner aufgeteilt am 2026-10-14 nach den Modpfad-Seiten (docs/modpfade/) und der Story (docs/18_STORY.md).
// Beschlossen (User): Erzverteilung, Treibstoff T1–T3, Blood-Magic-Dungeon auf Merkur, Blue-Skies-Werkzeugabschwächung (2026-10-12);
// Story in drei Parts (2026-10-14; Part 2 Ausbildung und Vorbereitung T5, Part 3 ab Endor), Alfheim und Gaia in Part 2 (2026-10-13); T5 nur Endor, T6 Tatooine/Hoth/Mustafar, T7 Mandalore, vier Hürden je Rakete,
// T3 braucht ein Blood-Magic-Teil, Mars-Station als Horchposten, jede Zeile = ein Kapitel im Questbuch, Einsiedler auf dem Mond mit Questbuch,
// Nebenquests gegen Credits und Shop; kein Questbuch vor dem Mond; Galaxy in a Cube nur in Star-Wars-Welten; Baupläne schalten Rezepte global frei (2026-10-14). Alles andere ist 🔵.
// Pfade = Spalten, Stufen = Zeilen = Kapitel (CHAPTERS sind Arbeitstitel). Je Pfad höchstens ein Meilenstein pro Zeile.
// IDs: Kürzel des Pfades + laufende Nummer (TK Tinkers, IE IE/Petroleum, BO Botania, BM Blood Magic, MK Mekanism, AE AE2, BS Blue Skies, RF Raumfahrt, SW Star Wars · Story).
// status: "done" = in der Hauptwelt erreicht, "part" = begonnen/teilweise, "open" = offen
// req: [ID, Beschriftung der Linie]; „?“ = Mod oder Quelle steht fest, das genaue Item oder die Stufe noch nicht.
// story / spoiler / tech / world: Story, verborgener Teil, technische Umsetzung, Stand der Hauptwelt.
// Vier Hürden je Rakete: Rumpf vom letzten Ort, neuer Treibstoff, neue Mekanism-Stufe (Vorschlag, der User legt fest), Teil aus einem anderen Pfad.

const PATHS = [
  {id:"A", name:"Tinkers",           hue:"#c98a4b"},
  {id:"B", name:"IE · Petroleum",    hue:"#d4a72c"},
  {id:"C", name:"Botania",           hue:"#5fae6e"},
  {id:"D", name:"Blood Magic",       hue:"#c7525a"},
  {id:"E", name:"Mekanism",          hue:"#5b9bd5"},
  {id:"F", name:"AE2",               hue:"#8b7fd1"},
  {id:"G", name:"Blue Skies",        hue:"#4fb3b0"},
  {id:"H", name:"Raumfahrt",         hue:"#e07b39"},
  {id:"I", name:"Star Wars · Story", hue:"#d9c94a"}
];

const STAGES = ["K1","K2","K3","K4","K5","K6","K7","K8","K9","K10","K11","K12","K13","K14","K15","K16"];
const CHAPTERS = ["Ankunft","Würdig sein","Industrie","Der Mond","Erzketten","Der Mars","Horchposten","Hitze","Der Tempel","Der Elf","Glacio",
                  "Ausbildung","Die Prüfung","Endor","Star-Wars-Welten","Mandalore"];
const PARTS = [
  {from:1,  to:11, name:"Part 1 · Finden des Meisters und Rückkehr"},
  {from:12, to:13, name:"Part 2 · Ausbildung"},
  {from:14, to:16, name:"Part 3 · Star-Wars-Welten"}
];
const GOAL = "RF7";

const MILESTONES = [
  // ───── K1 Ankunft
  {id:"TK1", path:"A", stage:1, name:"Werkzeuge und Melter", status:"part",
   req:[], must:true,
   what:"Pattern, Part Builder, Tinker Station; Grout und Seared Bricks, Melter mit Heater, Gießen mit Faucet und Casting Table.",
   cross:"Liefert das Tinkers-Item für die erste Quest.",
   story:"–",
   world:"Tinkers begonnen; ob die Schmelzerei steht, ist offen."},

  {id:"IE1", path:"B", stage:1, name:"Koks und erster Stahl", status:"done",
   req:[], must:true,
   what:"Engineer's Hammer, Coke Oven, Treated Wood, Alloy Kiln, Crude Blast Furnace.",
   cross:"Stahl ist die Basiswährung für Mekanism, AE2 und die Rakete T1.",
   story:"Der Einschlag der Kapsel erklärt, warum die Maschinen nach dem Wechsel kaputt sind.",
   world:"Erreicht. Nach dem Wechsel auf 1.20.1 müssen alle Multiblöcke neu geformt werden."},

  {id:"BO1", path:"C", stage:1, name:"Blüten und Lebendholz", status:"done",
   req:[], must:true,
   what:"Mystical Flowers, Petal Apothecary, Pure Daisy (Livingwood, Livingrock), Wand of the Forest.",
   cross:"–",
   story:"–",
   world:"Erreicht (Runenaltar steht)."},

  // ───── K2 Würdig sein
  {id:"TK2", path:"A", stage:2, name:"Smeltery", status:"open",
   req:[["TK1","Seared Bricks"]], must:false,
   what:"Smeltery Controller und Aufbau, Legieren, Tinker's Anvil, Plate Armor.",
   cross:"Legierungen von Hand; Nebenquest-Kandidat.",
   story:"–",
   world:"–"},

  {id:"IE2", path:"B", stage:2, name:"Strom und Förderbänder", status:"done",
   req:[["IE1","Stahl"]], must:true,
   what:"Drähte und Connectors, Kinetic Dynamo mit Windmill oder Water Wheel, Accumulators, erste Stromverbraucher, Förderbänder und Rohre.",
   cross:"–",
   story:"–",
   world:"Erreicht."},

  {id:"BO2", path:"C", stage:2, name:"Mana und Manasteel", status:"done",
   req:[["BO1","Livingwood"]], must:true,
   what:"Erzeugende Blumen, Mana Spreader, Mana Pool, Mana Infusion, Manasteel-Ausrüstung.",
   cross:"–",
   story:"Mana ist die „lebendige Macht“: das helle Gegenstück zu Blood Magic.",
   spoiler:"Dass die Spieler Mana lenken können, ist das erste Zeichen ihrer Machtsensitivität.",
   world:"Erreicht."},

  {id:"SW1", path:"I", stage:2, name:"Droide · Würdig sein", status:"open",
   req:[["TK1","Tinkers-Item ?"],["IE1","IE-Item ?"],["BO1","Botania-Item ?"]], must:true,
   what:"Erste Quest. Die Spieler bringen dem Droiden Items aus mehreren Mods als Beweis, dass sie eine weit entwickelte Spezies sind. Danach gibt der Droide die großen Ziele vor.",
   cross:"Bis zum Mond gibt es kein Questbuch: Der Droide führt allein über Easy-NPC-Quests. Welche Items genau verlangt werden, ist offen.",
   story:"Eine kugelförmige Kapsel schlägt in der Basis ein. Darin sitzt ein Droide: Sein Meister ist verschollen und hat ihn zur nächsten Lebensform geschickt, zu drei Individuen. Er übergibt Tagebuch-Ausschnitte mit Rätseln. Charakter: lustig, aber mechanisch ernst.",
   spoiler:"Droide und Meister kommen aus einer weit, weit entfernten Galaxis. Der Droide verrät das nicht und gibt nur kleine Hinweise.",
   tech:"Abgabe im Dialog des Droiden (Easy NPC: Item prüfen, <code>clear @initiator</code>, Stage per <code>tag</code>) setzt eine Stage. Das Questbuch lässt sich über das Inventar öffnen; es bleibt leer (alle Kapitel verborgen), bis der Einsiedler auf dem Mond es freigibt (ungetestet).",
   world:"Die Kapsel muss in der Basis der Hauptwelt gesetzt werden (von Hand oder als Struktur)."},

  // ───── K3 Industrie
  {id:"IE3", path:"B", stage:3, name:"Schwermaschinen und Biodiesel", status:"done",
   req:[["IE2","Strom"]], must:true,
   what:"Improved Blast Furnace, Engineering Blocks, Metal Press, Crusher, Sawmill; Squeezer, Fermenter, Refinery, Diesel Generator, Mixer, Bottling.",
   cross:"Biodiesel ist der Treibstoff für T1. Die Metal Press macht alle Raketenplatten (der Ad-Astra-Compressor entfällt).",
   story:"–",
   world:"Erreicht (Crusher, Biodiesel-Generator)."},

  {id:"BO3", path:"C", stage:3, name:"Runenaltar", status:"done",
   req:[["BO2","Mana Pearl"]], must:true,
   what:"Runic Altar, Elementrunen, Jahreszeiten- und Todsünden-Runen; funktionale Blumen, Lenses, Brauerei.",
   cross:"Runen für Schutz-Items und spätere Rezepte.",
   story:"–",
   world:"Erreicht."},

  {id:"BM1", path:"D", stage:3, name:"Blutaltar und erste Orbs", status:"open",
   req:[], must:true,
   what:"Blood Altar Stufe 1 und 2, erste Blood Orbs, Sigille. 🔵 Keine Modpfad-Seite; Stufen aus dem Gedächtnis, im JAR prüfen.",
   cross:"Beginn der Kette zum Ritual im Tempel.",
   story:"Life Essence entsteht aus genommenem Leben: die dunkle Gegenseite zu Mana.",
   spoiler:"Blood Magic steht in der Story für die Sith-Seite.",
   world:"Mod neu installiert, nicht begonnen."},

  {id:"MK1", path:"E", stage:3, name:"Infuser und Sauerstoff", status:"open",
   req:[["IE1","Stahl"]], must:true,
   what:"Metallurgic Infuser, Basic Control Circuit, Heat Generator, Steel Casing; Electrolytic Separator und Rotary Condensentrator für flüssigen Sauerstoff.",
   cross:"Mekanism-Stufe Basic: Hürde der Rakete T1. Sauerstoff kommt zwingend aus Mekanism.",
   story:"–",
   world:"Mod neu installiert, nicht begonnen. Osmium kommt per Retrogen in die erkundeten Chunks."},

  {id:"AE1", path:"F", stage:3, name:"Storage-Layer", status:"open",
   req:[["IE1","Stahl"]], must:false,
   what:"Meteorit finden (Inscriber-Pressen und Budding-Certus), Prozessoren, Kisten und Drawers per Storage Bus anbinden. 🔵 Keine Modpfad-Seite.",
   cross:"Certus gibt es in 1.20.1 nur noch an Budding-Blöcken in Meteoriten.",
   story:"–",
   world:"AE2 nicht begonnen."},

  {id:"BS1", path:"G", stage:3, name:"Everbright", status:"open",
   req:[["IE1","Ausrüstung"]], must:true,
   what:"Gatekeeper finden, Zeal Lighter (8 Smaragde), Portal nach Everbright. Zinn (nur hier), Blei und Bauxit. 🔵 Keine Modpfad-Seite.",
   cross:"Zinn → Mekanism-Ausbau; Blei und Bauxit → IE. Fremde Werkzeuge sind abgeschwächt, bis die Bosse besiegt sind.",
   story:"Offen.",
   world:"Blue Skies ist neu; ersetzt den Twilight Forest."},

  // ───── K4 Der Mond
  {id:"IE4", path:"B", stage:4, name:"Erdöl und Destillation", status:"part",
   req:[["IE3","Stahl · Strom"]], must:true,
   what:"Seismic Survey Tool, Derrick, Pumpjack, Oil Tank, Distillation Tower (Immersive Petroleum).",
   cross:"Kerosin für T3 und als Basis des Treibstoffs T4.",
   story:"–",
   world:"Pumpjack und Coker gebaut; müssen nach dem Wechsel neu geformt werden. Ob der Pumpjack das alte Vorkommen findet, ist ungetestet."},

  {id:"MK2", path:"E", stage:4, name:"Grundmaschinen", status:"open",
   req:[["MK1","Basic"]], must:false,
   what:"Enrichment Chamber, Crusher, Energized Smelter, Precision Sawmill, Formulaic Assemblicator; Energy Cube, Leitungen, Tanks, Bin, Generatoren, Upgrades.",
   cross:"Erzverdopplung; Nebenquest-Kandidat (erstes Mal Mekanism in der Breite).",
   story:"–",
   world:"–"},

  {id:"BS2", path:"G", stage:4, name:"Everdawn", status:"open",
   req:[["BS1","Gatekeeper"]], must:true,
   what:"Zweite Blue-Skies-Dimension. Osmium in Menge.",
   cross:"Osmium für den Mekanism-Ausbau, als Alternative zum Mond.",
   story:"Offen.",
   world:"Pflicht, weil der Elf Boss-Items aus beiden Dimensionen verlangt (zu bestätigen)."},

  {id:"RF1", path:"H", stage:4, name:"Rakete T1 → Mond", status:"open",
   req:[["IE3","Stahl · Biodiesel · Platten"],["MK1","Sauerstoff · Basic"],["SW1","Auftrag: Mond"]], must:true,
   what:"NASA Workbench, Rakete T1, Launch Pad, Space Suit, Oxygen Loader. Erster Raumflug. Hürden: Stahl, Biodiesel, Mekanism Basic, IE Metal Press.",
   cross:"Der Mond liefert Desh für T2 und Osmium in Menge.",
   story:"Erstes großes Ziel, das der Droide vorgibt. Er hofft, den Meister vom Mond aus zu orten.",
   world:"–"},

  {id:"SW2", path:"I", stage:4, name:"Einsiedler · Questbuch · Shop", status:"open",
   req:[["RF1","Flug zum Mond"]], must:true,
   what:"Auf dem Mond lebt ein außerirdischer Einsiedler in einer eigenen Mondbasis. Nach einer kleinen Quest für ihn vertraut er den Spielern und gibt ihnen das Questbuch. Darin stehen seine Aufgaben (die Nebenquests, Belohnung Credits sofort nach dem Erfüllen) und als „Notizen“ die Aufgaben des Droiden (die Hauptquests). Credits sind die Währung seines Shops; gehandelt wird nur bei ihm auf dem Mond.",
   cross:"Ab dem folgenden Kapitel gibt es Nebenquests. Shop: Items und Rohstoffe für Droiden (offen), Baupläne für Droid Fabricator und Assembly Bench, Rezepte für Blaster und für einzelne Droiden als Wachen (Galaxy in a Cube). Diese Waren gibt es nirgends sonst: Galaxy in a Cube wird komplett aus allen Nicht-Star-Wars-Dimensionen entfernt.",
   story:"Er ist alt, lebt schon lange hier und schweigt über seine Vergangenheit. Ein lustiger Typ, der den Spielern gern vom Mond aus zusieht; deshalb zahlt er Credits für Aufgaben, die ihm eigentlich nichts bringen. Er kennt die Bauart des Droiden und ist ihm gegenüber sehr misstrauisch. Er schirmt den Mond ab, deshalb kann der Droide den Meister von hier nicht orten. Er verrät, dass es vom Mars aus sehr gut geht.",
   spoiler:"Er kommt aus derselben Galaxis wie der Droide. Dass Star Wars im Spiel ist, dürfen die Mitspieler ab hier erraten; das eigentliche Geheimnis ist, dass man wirklich zu den Star-Wars-Welten reisen kann.",
   tech:"Handel mit Easy NPC (Handelsfenster per Dialog-Knopf, erst nach seiner Quest). Währung: Credits von Galaxy in a Cube (Rezept aus Kupfer entfernen), Auszahlung als Item-Belohnung in FTB Quests. Bauplan = Buch-Item, das das Rezept zeigt (bei Droiden Steuerkern und Droide). Beim Kauf schaltet KubeJS das Rezept einmalig für die ganze Welt frei; vorher ist es in JEI ausgeblendet und liefert an der Werkbank nichts. Droiden einzeln über einen Steuerkern je Typ als zusätzliche Fabricator-Zutat. Alles ungetestet; Skripte erst, wenn die Story von Part 1 steht.",
   world:"Seine Mondbasis muss gebaut werden (von Hand beim Host oder als Struktur)."},

  // ───── K5 Erzketten
  {id:"TK3", path:"A", stage:5, name:"Alloyer und Foundry", status:"open",
   req:[["TK2","Smeltery"]], must:false,
   what:"Nether Grout und Scorched Bricks, Scorched Alloyer, Foundry, Blazing Blood, Materialien Stufe 4.",
   cross:"Nebenquest-Kandidat; Kobalt aus dem Nether.",
   story:"–",
   world:"–"},

  {id:"IE5", path:"B", stage:5, name:"Entschwefelter Diesel", status:"open",
   req:[["IE4","Rohöl"]], must:true,
   what:"High-Pressure Refinery Unit: Diesel entschwefeln (liefert Schwefel).",
   cross:"Treibstoff der Rakete T2. Schwefel für die Mekanism-Chemie.",
   story:"–",
   world:"–"},

  {id:"BM2", path:"D", stage:5, name:"Altar T3 · Soul Forge", status:"open",
   req:[["BM1","Altar"]], must:true,
   what:"Blood Altar Stufe 3, Hellfire Forge (Soul Forge), Demon Will, Alchemy Table. 🔵 aus dem Gedächtnis, im JAR prüfen.",
   cross:"Demonit → Tinkers (Hellforged, Blood-Smeltery).",
   story:"–",
   world:"–"},

  {id:"MK3", path:"E", stage:5, name:"Advanced · Erz ×3", status:"open",
   req:[["MK1","Osmium"],["BS1","Zinn"]], must:true,
   what:"Infused Alloy und Advanced Control Circuits, Factories und Tier Installer, Purification Chamber (Erz ×3), Osmium Compressor.",
   cross:"Mekanism-Stufe Advanced: Vorschlag als Hürde der Rakete T2 (der User legt fest).",
   story:"–",
   world:"–"},

  {id:"BS3", path:"G", stage:5, name:"Die Blinding-Bosse", status:"open",
   req:[["BS1","Blinding Dungeon"],["BS2","Blinding Dungeon"]], must:true,
   what:"Je ein Blinding Dungeon in jeder Welt: Summoner (Everbright) und Alchemist (Everdawn). Beute u. a. Ethereal Arc, Dusk Arc, Alchemy Table.",
   cross:"Boss-Items für den Elfen (welche, ist offen). Soll die Werkzeug-Abschwächung aufheben (🔵 wann genau, im Spiel prüfen).",
   story:"Die Bosse können früh besiegt werden; gebraucht werden ihre Items erst für den Elfen.",
   world:"–"},

  // ───── K6 Der Mars
  {id:"IE6", path:"B", stage:6, name:"Großindustrie", status:"part",
   req:[["IE3","Stahl"]], must:false,
   what:"Arc Furnace, Mineral Deposits und Excavator, Kunststoff (Phenolic Resin, Duroplast), Logic Circuits.",
   cross:"Nebenquest-Kandidat; Duroplast und Logic Circuits als Zutaten späterer Raketen möglich.",
   story:"–",
   world:"Arc Furnace erreicht; Excavator und Kunststoff offen."},

  {id:"BO4", path:"C", stage:6, name:"Terrasteel", status:"open",
   req:[["BO3","Runen"]], must:true,
   what:"Terrestrial Agglomeration Plate, Terrasteel.",
   cross:"Baustoff des Elfenportals; mögliches Schutz-Item für den Altar im Tempel.",
   story:"–",
   world:"–"},

  {id:"BS4", path:"G", stage:6, name:"Nature- und Poison-Boss", status:"open",
   req:[["BS3","Blinding-Bosse"]], must:true,
   what:"Nature Dungeon in Everbright (Starlit Crusher, offen nach dem Summoner) und Poison Dungeon in Everdawn (Arachnarch, offen nach dem Alchemist). Beute u. a. Nature Arc, Poisonous Arc.",
   cross:"Boss-Items für den Elfen (welche, ist offen).",
   story:"–",
   world:"–"},

  {id:"RF2", path:"H", stage:6, name:"Rakete T2 → Mars", status:"open",
   req:[["RF1","Desh"],["IE5","Diesel"],["MK3","Advanced ?"],["BS1","Zinn · Aluminium ?"],["SW2","Hinweis: Mars"]], must:true,
   what:"Desh-Rakete mit entschwefeltem Diesel. Mars liefert Ostrum und Fluorit. Hürden: Desh, Diesel, Mekanism Advanced (?), Everbright (?).",
   cross:"IE bleibt nötig (Metal Press für die Platten).",
   story:"Horchposten: Von der Erde aus sind die Signale des Meisters zu schwach, und den Mond schirmt der Einsiedler ab. Er verrät, dass es vom Mars aus sehr gut geht; dort muss eine Station entstehen.",
   tech:"Raketen haben ein Inventar für kleine Fracht.",
   world:"–"},

  // ───── K7 Horchposten
  {id:"TK4", path:"A", stage:7, name:"Planetenmetalle gießen", status:"open",
   req:[["TK3","Foundry"],["RF2","Desh · Ostrum"]], must:false,
   what:"Desh, Ostrum und später Calorite schmelzen und gießen (TCIntegrations); Werkzeuge aus Planetenmetallen.",
   cross:"Tinkers in den höheren Stufen (07_CROSSMOD_INTEGRATION.md). Gießen als Pflichtschritt einer Rakete ist möglich, aber offen.",
   story:"–",
   world:"–"},

  {id:"BM3", path:"D", stage:7, name:"Altar T4 · Rituale", status:"open",
   req:[["BM2","Altar"]], must:true,
   what:"Blood Altar Stufe 4, Ritual Stones, Master Ritual Stone, erste Rituale. 🔵 im JAR prüfen.",
   cross:"Liefert das Blood-Magic-Teil für die Rakete T3 (beschlossen; welches, ist offen) und das Ritual für den Tempel.",
   story:"Der Tempel schirmt den Planeten ab; ohne Blutmagie kommt keine Rakete hindurch.",
   world:"–"},

  {id:"MK4", path:"E", stage:7, name:"Elite · Chemie", status:"open",
   req:[["MK3","Advanced"],["IE5","Schwefel"]], must:true,
   what:"Reinforced Alloy und Elite Circuits; Chemical Injection Chamber (Erz ×4), Thermal Evaporation, Schwefelsäure, Pressurized Reaction Chamber und HDPE.",
   cross:"Erstes Mal Mekanism-Chemie (Nebenquests). Vorschlag: Hürde der Rakete T3. Chemie für den Treibstoff T4.",
   story:"–",
   world:"–"},

  {id:"SW3", path:"I", stage:7, name:"Mars-Station · Horchposten", status:"open",
   req:[["RF2","Flug zum Mars"]], must:true,
   what:"Die Spieler bauen auf dem Mars eine richtige Station. Eine eigene Quest prüft, ob sie steht. Erst dann kommt der Droide auf den Mars.",
   cross:"Quest-Abgaben und Freischaltungen gibt es nur beim Droiden auf dem Mars.",
   story:"Der Droide fängt von hier die Spur auf, die zum Merkur führt. Er braucht Luft: Ohne abgedichteten Raum mit Sauerstoff überlebt er nicht.",
   tech:"Der Droide erscheint per Befehl als Quest-Belohnung (Easy NPC <code>preset import</code> mit Ort und Dimension). Ad Astra schont ihn ohne Sauerstoff nicht, wenn er verwundbar eingestellt ist. Die Stations-Prüfung läuft per KubeJS und setzt eine Stage (FTB XMod Compat ist nicht im Pack). Im Spiel zu testen (Runde 5).",
   world:"–"},

  // ───── K8 Hitze
  {id:"RF3", path:"H", stage:8, name:"Rakete T3 → Merkur, Venus", status:"open",
   req:[["RF2","Ostrum"],["IE4","Kerosin"],["MK4","Elite ?"],["BM3","Schutz gegen den Tempel ?"],["SW3","Spur zum Merkur"]], must:true,
   what:"Ostrum-Rakete mit Kerosin. Hitzeschutz (Netherite Space Suit). Venus liefert Calorite; Merkur und Venus Uran und Blei in Menge. Hürden: Ostrum, Kerosin, Mekanism Elite (?), Blood Magic.",
   cross:"Macht die Nuklearkette ergiebig und führt zum Tempel auf dem Merkur.",
   story:"Auf dem Merkur steht der dunkle Tempel, in dem der Meister verschwand. Sein Inneres ist zerstört. Die Venus hat noch keine Story.",
   tech:"Achtung Spoiler: Star Wars Planets schenkt beim Besitz einer Rakete T3 das „Star Manual“ mit Kapiteln über Jedi und Sith. Die Belohnung muss per Datapack entfernt oder verlegt werden.",
   world:"–"},

  // ───── K9 Der Tempel
  {id:"BM4", path:"D", stage:9, name:"Tempel · Demon Dungeon", status:"open",
   req:[["BM3","Ritual"],["RF3","Flug zum Merkur"],["BO4","Schutz-Item ?"]], must:true,
   what:"Die Spieler finden im verlassenen Tempel vier Schriftrollen, holen auf der Erde das Material, reparieren den Altar auf dem Merkur und öffnen mit dem Ritual Pathway to the Endless Realm das eigentliche Demon Realm. Den kleinen Mini-Dungeon (Edge of the Hidden Realm, Tau Fruit für Altar-Stufe 4) kennen sie da schon. Er ist überall nutzbar und hat keine Story.",
   cross:"Verbindet Blood Magic, Botania, Raumfahrt, Blue Skies (Strang um das Blue-Skies-Haus, Welt-Bosse) und Wesley's Roguelike Dungeons (Vorbereitung). Zutaten der Reparatur offen.",
   story:"Aus den Schriftrollen schließt der Droide, dass der Meister in der Altar-Dimension gefangen ist. Dort ist er aber nicht mehr: Er ist selbst entkommen. Bei der Rückkehr ist der Droide weg oder zerstört. Ein Text des Meisters verweist auf das Elfenportal.",
   spoiler:"Der Tempel war ein Sith-Tempel. Der Meister suchte dort ein altes Relikt.",
   tech:"Das Ritual lässt sich nur über das Forge-Ereignis von Blood Magic abfangen (das KubeJS-Addon kennt nur Rezepte); ungetestet. Der Droide kann per Befehl verschwinden (Easy NPC <code>despawn</code>).",
   world:"Der Tempel braucht eine eigene Struktur auf dem Merkur."},

  {id:"MK5", path:"E", stage:9, name:"Kernkraft", status:"open",
   req:[["MK4","Chemie"],["RF3","Uran in Menge"]], must:true,
   what:"Yellow Cake bis Fissile Fuel, Fission Reactor, Boiler und Turbine, Plutonium und Polonium, Induction Matrix.",
   cross:"Kandidat für die Tech-Erzeugnisse, die der Elf verlangt, und für ein Uran-Teil der Rakete T4 (offen).",
   story:"Offen.",
   world:"–"},

  {id:"AE2", path:"F", stage:9, name:"ME-System", status:"open",
   req:[["AE1","Prozessoren"],["MK3","Mek-Ausbau"]], must:false,
   what:"ME Drives, Storage Cells, Autocrafting, Applied Mekanistics.",
   cross:"Automatisiert die vorhandenen Ketten. Nebenquest-Kandidat.",
   story:"–",
   world:"–"},

  // ───── K10 Der Elf
  {id:"BO5", path:"C", stage:10, name:"Elfenportal · Elf", status:"open",
   req:[["BO4","Terrasteel"],["BM4","Text des Meisters"]], must:true,
   what:"Portal to Alfheim bauen; die Spieler gehen nicht hindurch. Elfenhandel: Elementium, Pixie Dust, Dreamwood, Dragonstone.",
   cross:"Der Elf verlangt Boss-Items aus Blue Skies und Tech-Erzeugnisse, dann gibt er das Rezept für die Rakete T4.",
   story:"Aus dem Portal tritt ein Elf. Die Elfen kennen Reisende von den Sternen aus alter Zeit. Er ortet den Meister: Er ist auf Glacio. Nach dem Ausfall des Droiden führt der Elf die Spieler.",
   tech:"Der Elf ist ein Easy NPC und kann per Befehl als Quest-Belohnung erscheinen, sobald das Portal gebaut ist (ungetestet).",
   world:"–"},

  {id:"MK6", path:"E", stage:10, name:"Ultimate · Teleportation", status:"open",
   req:[["MK5","Polonium ?"],["MK4","Elite"]], must:true,
   what:"Atomic Alloy und Ultimate Circuits, Teleportation Core, Teleporter, Quantum Entangloporter, Dimensional Stabilizer (Chunkloader).",
   cross:"Vorschlag: Hürde der Rakete T4. Nebenquest: automatischer Transport zwischen Mars-Station und Erde.",
   story:"–",
   world:"–"},

  // ───── K11 Glacio
  {id:"RF4", path:"H", stage:11, name:"Rakete T4 → Glacio", status:"open",
   req:[["RF3","Calorite"],["BO5","T4-Rezept · Portal-Item ?"],["BS3","Boss-Items ?"],["BS4","Boss-Items ?"],["MK6","Ultimate ?"],["MK4","Treibstoff-Chemie ?"],["MK5","Uran-Teil ?"],["BM4","Dungeon-Item ?"]], must:true,
   what:"Calorite-Rakete nach dem Rezept des Elfen, mit magischen Komponenten und einem deutlich aufwendigeren Treibstoff (Kerosin plus Mekanism-Chemie). Erreicht nur Glacio.",
   cross:"Hier laufen Tech, Botania, Blue Skies und Blood Magic zusammen.",
   story:"Der Meister hat eine Barriere um den Planeten gelegt; nur die magischen Komponenten bringen die Rakete hindurch. Auf Glacio finden die Spieler den Meister und bringen ihn in die Overworld zurück (beides gehört zu K11). Ende von Part 1.",
   spoiler:"Hier wird das Geheimnis offen: Der Meister ist ein Jedi, und die Spieler können selbst Jedi werden.",
   world:"–"},

  // ───── K12 Ausbildung (Part 2, grob)
  {id:"BM5", path:"D", stage:12, name:"Altar T5", status:"open",
   req:[["BM4","Dungeon"]], must:false,
   what:"Blood Altar Stufe 5 und höhere Orbs. 🔵 im JAR prüfen.",
   cross:"Kandidat für ein Teil der Raketen T6 oder T7.",
   story:"Part 2, wird später besprochen.",
   world:"–"},

  {id:"BO6", path:"C", stage:12, name:"Alfheim betreten", status:"open",
   req:[["BO5","Elfenportal"],["RF4","Meister · Mead of Kvasir ?"]], must:true,
   what:"Mit MythicBotany durch das Elfenportal in die Elfenwelt; Runen der neun Welten, Mana-Infuser, Alfsteel.",
   cross:"Liefert das Rumpf-Material der Rakete T5 (welches, ist offen).",
   story:"Part 2: Der Zutritt kommt zusammen mit der Ausbildung.",
   tech:"Aus dem JAR: Durch das Portal kommt nur, wer den Mead of Kvasir getrunken hat. Den Met kann der Meister herausgeben (Rezept sperren oder an eine Quest binden).",
   world:"–"},

  {id:"MK7", path:"E", stage:12, name:"Fusion", status:"open",
   req:[["MK6","Ultimate"]], must:true,
   what:"Fusion Reactor (Deuterium und Tritium), Laser.",
   cross:"Vorschlag: Hürde der Rakete T5 (der User legt fest). Der Treibstoff muss eine Flüssigkeit sein.",
   story:"Part 2, wird später besprochen.",
   world:"–"},

  {id:"SW4", path:"I", stage:12, name:"Ausbildung beim Meister", status:"open",
   req:[["RF4","Meister gefunden"]], must:true,
   what:"Der Meister bildet die Spieler aus und stellt Prüfungen.",
   cross:"Öffnet den Zutritt zur Elfenwelt und den Kampf gegen Gaia.",
   story:"Part 2, wird später besprochen.",
   spoiler:"Ausbildung zum Jedi.",
   world:"–"},

  // ───── K13 Die Prüfung
  {id:"BO7", path:"C", stage:13, name:"Gaia · Prüfung", status:"open",
   req:[["BO6","Alfsteel"],["SW4","Prüfung des Meisters"]], must:true,
   what:"Gaia Guardian besiegen; Gaia Spirits, Relikte, Corporea.",
   cross:"Kandidat für ein Magie-Teil der Raketen T6 oder T7.",
   story:"Der Kampf gegen den Gaia Guardian ist eine Prüfung des Meisters.",
   spoiler:"Es ist die Jedi-Prüfung.",
   tech:"Aus dem JAR: MythicBotany ersetzt das Rezept des Gaia-Pylons durch eines mit Alfsteel. Gaia liegt damit von selbst hinter Alfheim.",
   world:"–"},

  {id:"MK8", path:"E", stage:13, name:"SPS · Antimaterie", status:"open",
   req:[["MK7","Fusion"]], must:true,
   what:"Supercritical Phase Shifter, Antimatter, Nucleosynthesizer.",
   cross:"Vorschlag: Hürde der Rakete T6.",
   story:"Part 2, wird später besprochen.",
   world:"–"},

  {id:"AE3", path:"F", stage:13, name:"Quantenbrücke", status:"open",
   req:[["AE2","ME-System"]], must:false,
   what:"Quantum Network Bridge, Singularitäten, Spatial IO.",
   cross:"Vorschlag: „Navigationscomputer“ als Hürde der Rakete T6.",
   story:"Part 2, wird später besprochen.",
   world:"–"},

  {id:"RF5", path:"H", stage:13, name:"Rakete T5 → Endor", status:"open",
   req:[["RF4","Calorite"],["BO6","Elementium für Etrium"],["MK7","Fusion ?"],["SW4","Auftrag des Meisters"]], must:true,
   what:"Erste Rakete aus „Ad Astra: Rocketed“. Führt nur nach Endor. Rumpf aus Etrium (Arc Furnace: Calorite + Elementium aus Alfheim + Zutat von Glacio ?; entschieden 2026-10-19). Offen: Treibstoff, Mekanism-Stufe.",
   cross:"Geplant: Endor liefert Kyber für die Rakete T6. ⚠️ Ohne Eingriff gibt es auf Endor kein Kyber-Erz (nur auf Tatooine); braucht ein Vorkommen per Datapack oder eine andere Zutat.",
   story:"Die fertige Rakete T5 schließt Part 2 ab. Mit der Ankunft auf Endor, der Heimat beziehungsweise Basis des Meisters, beginnt Part 3.",
   tech:"Planetenstufe per Datapack: Endor (samt Orbit) von 4 auf 5. Treibstoff über das Tag <code>ad_astra_rocketed:tier_5_rocket_fuel</code>, muss eine Flüssigkeit sein. Ob Ad Astra Stufen über 4 annimmt, ist ungetestet.",
   world:"–"},

  // ───── K14 Endor (Part 3, grob)
  {id:"BM6", path:"D", stage:14, name:"Altar T6", status:"open",
   req:[["BM5","Altar"]], must:false,
   what:"Blood Altar Stufe 6. 🔵 im JAR prüfen.",
   cross:"Kandidat für ein Teil der Rakete T7.",
   story:"Part 3, wird später besprochen.",
   world:"–"},

  {id:"RF6", path:"H", stage:14, name:"T6 → Tatooine, Hoth, Mustafar", status:"open",
   req:[["RF5","Kyber von Endor ?"],["BO7","Magie-Teil ?"],["MK8","Antimaterie ?"],["AE3","Navigationscomputer ?"]], must:true,
   what:"Zweite Rakete aus „Ad Astra: Rocketed“. Führt zu allen Star-Wars-Welten außer Mandalore.",
   cross:"Rezept, Treibstoff und Mekanism-Stufe offen.",
   story:"Part 3, wird später besprochen.",
   tech:"Planetenstufe per Datapack: Tatooine, Hoth (<code>hot</code>) und Mustafar samt Orbits auf 6. Treibstoff über <code>tier_6_rocket_fuel</code>.",
   world:"–"},

  // ───── K15 Star-Wars-Welten
  {id:"MK9", path:"E", stage:15, name:"Meka-Ausrüstung · QIO", status:"open",
   req:[["MK8","Antimaterie"]], must:false,
   what:"MekaSuit, Meka-Tool, Modification Station, QIO (Digital Miner wird entfernt).",
   cross:"Kandidat für die Hürde der Rakete T7; MekaSuit im All (Ad-Astra-Anbindung).",
   story:"Part 3, wird später besprochen.",
   world:"–"},

  {id:"SW5", path:"I", stage:15, name:"Star-Wars-Welten", status:"open",
   req:[["RF6","Rakete T6"],["SW4","Ausbildung"]], must:true,
   what:"Tatooine, Endor, Hoth, Mustafar. Kyber für Lichtschwerter (nur hier, in der Overworld entfernt).",
   cross:"Welche Bosse, Quests und Belohnungen hier liegen, ist offen.",
   story:"Part 3, wird später besprochen: mehrere Bosse für den Meister besiegen, als Kopfgeldjäger Quests bei Easy NPCs erfüllen, Lichtschwerter über eine Quest.",
   spoiler:"Rückkehr in die weit, weit entfernte Galaxis.",
   world:"–"},

  // ───── K16 Mandalore
  {id:"RF7", path:"H", stage:16, name:"Rakete T7 → Mandalore", status:"open",
   req:[["SW5","Freischaltung ?"],["MK9","Mekanism-Stufe ?"],["BM6","Blood-Magic-Teil ?"]], must:true,
   what:"Dritte Rakete aus „Ad Astra: Rocketed“. Einziges Ziel: Mandalore (−160 °C). Dort liegt Beskar.",
   cross:"Rezept, Treibstoff und Hürden offen. Beskar wird für keine weitere Stufe gebraucht.",
   story:"Part 3, wird später besprochen.",
   tech:"Planetenstufe per Datapack: Mandalore samt Orbit auf 7. Treibstoff über <code>tier_7_rocket_fuel</code>.",
   world:"–"}
];
