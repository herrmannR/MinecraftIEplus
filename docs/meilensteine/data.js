// Meilensteine – ENTWURF Phase 2 (2026-10-08). Alles hier ist 🔵, bis es beschlossen ist.
// Pfade = Zeilen der Grafik, Stufen P1–P8 = Spalten (grobe Zeitachse aus 01_PROGRESSION.md, P8 = Raumfahrt-Endziel).
// status: "done" = in der Hauptwelt erreicht, "part" = begonnen/teilweise, "open" = offen
// req: [Meilenstein-ID, Beschriftung der Linie] – Beschriftung = was über die Linie wandert (Material / Freischaltung)

const PATHS = [
  {id:"A", name:"Tinkers",        hue:"#c98a4b"},
  {id:"B", name:"IE · Petroleum", hue:"#d4a72c"},
  {id:"C", name:"Botania",        hue:"#5fae6e"},
  {id:"D", name:"Blood Magic",    hue:"#c7525a"},
  {id:"E", name:"Mekanism",       hue:"#5b9bd5"},
  {id:"F", name:"AE2",            hue:"#8b7fd1"},
  {id:"G", name:"Exploration",    hue:"#4fb3b0"},
  {id:"H", name:"Raumfahrt",      hue:"#e07b39"}
];

const STAGES = ["P1","P2","P3","P4","P5","P6","P7","P8"];

const MILESTONES = [
  {id:"M1",  path:"A", stage:1, name:"Schmelzerei", status:"part",
   req:[], must:true,
   what:"Tinkers' Smeltery, erste gegossene Werkzeuge.",
   cross:"Gießt später auch Desh, Ostrum und Calorite (Beyond-Earth-Integration ist im JAR).",
   world:"Tinkers begonnen; ob die Schmelzerei steht, ist offen."},

  {id:"M2",  path:"B", stage:2, name:"IE-Stahl", status:"done",
   req:[], must:true,
   what:"Koksofen, Hochofen, erster Stahl, IE-Grundmaschinen.",
   cross:"Stahl ist die Basiswährung für Mekanism, AE2-Storage-Layer und Rakete T1.",
   world:"Erreicht (Stahl, Crusher, Arc Furnace)."},

  {id:"M3",  path:"C", stage:3, name:"Runenaltar", status:"done",
   req:[], must:false,
   what:"Mana-Infrastruktur, erste Runen.",
   cross:"–",
   world:"Erreicht."},

  {id:"M4",  path:"D", stage:3, name:"Blutaltar T2", status:"open",
   req:[], must:false,
   what:"Blood Altar Stufe 2, erste Blood Orbs.",
   cross:"Vorschlag: IE-Stahl in den Runen (Schmelzerei-Pfad bleibt eigenständig).",
   world:"Mod neu installiert, nicht begonnen."},

  {id:"M5",  path:"G", stage:3, name:"TF-Expedition", status:"part",
   req:[["M2","Ausrüstung"]], must:true,
   what:"Twilight Forest erkunden: Zinn (exklusiv), Blei, Bauxit abbauen.",
   cross:"Zinn → Bronze und Mekanism-Ausbau; Blei/Bauxit → IE.",
   world:"Twilight Forest gerade betreten."},

  {id:"M6",  path:"B", stage:4, name:"Diesel", status:"part",
   req:[["M2","Stahl"]], must:true,
   what:"Pumpjack + Destillation (Immersive Petroleum) liefern Diesel.",
   cross:"Diesel ist der Treibstoff für Rakete T1.",
   world:"Pumpjack gerade gebaut; Destillation offen."},

  {id:"M7",  path:"E", stage:5, name:"Erste Mekanism-Maschine", status:"open",
   req:[["M2","Stahl"],["M5","Zinn"]], must:true,
   what:"Metallurgic Infuser / Enrichment Chamber mit Overworld-Osmium.",
   cross:"Pflichtbaustein für Rakete T1 (Entscheidung 2026-10-07).",
   world:"Mod neu installiert, nicht begonnen."},

  {id:"M8",  path:"F", stage:3, name:"Storage-Layer", status:"open",
   req:[["M2","Stahl"]], must:false,
   what:"Meteorit finden (Inscriber-Pressen), Prozessoren, Kisten und Drawers per Storage Bus anbinden.",
   cross:"Certus aus Overworld und Meteoriten reicht nur hierfür.",
   world:"AE2 nicht begonnen."},

  {id:"M9",  path:"C", stage:4, name:"Terrasteel", status:"open",
   req:[["M3","Runen"]], must:true,
   what:"Terrestrial Agglomeration Plate, Terrasteel.",
   cross:"Vorschlag: Terrasteel in Raketenteilen ab T2.",
   world:"–"},

  {id:"M10", path:"H", stage:5, name:"Rakete T1 → Mond", status:"open",
   req:[["M6","Diesel"],["M7","Mek-Bauteil"]], must:true,
   what:"NASA-Workbench, Rakete T1, Launchpad, Sauerstoff. Erster Raumflug.",
   cross:"Mond liefert Osmium und Certus in Menge sowie Desh.",
   world:"–"},

  {id:"M11", path:"E", stage:6, name:"Mekanism-Ausbau", status:"open",
   req:[["M7","Maschinen"],["M10","Mond-Osmium"]], must:true,
   what:"Erzverarbeitung ×3/×4 (Purification, Chemical Injection), Gase.",
   cross:"Veredelter Treibstoff für T2/T3 (IE-Diesel → Mekanism-Chemie).",
   world:"–"},

  {id:"M12", path:"D", stage:5, name:"Blutaltar T4", status:"open",
   req:[["M4","Altar"]], must:false,
   what:"Altar T4, Demon Dungeon, Demonit.",
   cross:"Demonit → Tinkers (Hellforged). Offen: zusätzlich Pflicht für Star Wars?",
   world:"–"},

  {id:"M13", path:"C", stage:5, name:"Alfheim", status:"open",
   req:[["M9","Terrasteel"]], must:false,
   what:"Elven Gateway, Mead of Kvasir, Zugang nach Alfheim (MythicBotany).",
   cross:"Elementium und Dragonstone.",
   world:"–"},

  {id:"M14", path:"C", stage:6, name:"Gaia · Alfsteel", status:"open",
   req:[["M13","Dragonstone"]], must:true,
   what:"Gaia-Guardian besiegen, Alfsteel herstellen.",
   cross:"Alfsteel = Magie-Pflichtteil für Star-Wars-Raketen (Vorschlag).",
   world:"–"},

  {id:"M15", path:"H", stage:6, name:"Rakete T2/T3 → Mars, Venus", status:"open",
   req:[["M10","Desh"],["M11","Treibstoff"],["M9","Terrasteel"]], must:true,
   what:"Ostrum (Mars) und Calorite (Venus) erschließen.",
   cross:"IE bleibt nötig (Metal Press, Refinery), Mekanism für den Treibstoff.",
   world:"–"},

  {id:"M16", path:"F", stage:7, name:"ME-System", status:"open",
   req:[["M8","Prozessoren"],["M10","Mond-Certus"],["M11","Mek-Ausbau"]], must:false,
   what:"ME Drives, Storage Cells, Autocrafting, Applied Mekanistics.",
   cross:"Automatisiert die vorhandenen Ketten.",
   world:"–"},

  {id:"M17", path:"E", stage:7, name:"Nuklearkette", status:"open",
   req:[["M11","Gase"]], must:true,
   what:"Fission Reactor, Polonium und Plutonium.",
   cross:"Uran-Erzeugnisse = Pflichtteil für Star-Wars-Raketen.",
   world:"–"},

  {id:"M18", path:"H", stage:8, name:"Star-Wars-Planeten", status:"open",
   req:[["M15","Calorite"],["M17","Polonium"],["M14","Alfsteel"]], must:true,
   what:"Rakete T4: Tatooine, Kamino, Endor, Hoth, Mustafar, Mandalore. Kyber und Beskar.",
   cross:"Endziel: verbindet Tech, Nuklear und Magie.",
   world:"–"}
];
