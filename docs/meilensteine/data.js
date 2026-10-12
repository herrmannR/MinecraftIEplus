// Meilensteine – ENTWURF Phase 2 für Minecraft 1.20.1 (2026-10-12). Übertragen aus dem Entwurf für 1.18.2 vom 2026-10-08.
// Beschlossen (User, 2026-10-12): Erzverteilung, Treibstoff je Raketenstufe, Blood-Magic-Dungeon auf Merkur,
// Blue-Skies-Werkzeugabschwächung als gewollte Hürde. Alles andere ist 🔵, bis es beschlossen ist.
// Pfade = Zeilen der Grafik, Stufen P1–P9 = Spalten (grobe Zeitachse, letzte Stufe = Ziel).
// status: "done" = in der Hauptwelt erreicht, "part" = begonnen/teilweise, "open" = offen
// req: [Meilenstein-ID, Beschriftung der Linie] – Beschriftung = was über die Linie wandert (Material / Freischaltung)

const PATHS = [
  {id:"A", name:"Tinkers",        hue:"#c98a4b"},
  {id:"B", name:"IE · Petroleum", hue:"#d4a72c"},
  {id:"C", name:"Botania",        hue:"#5fae6e"},
  {id:"D", name:"Blood Magic",    hue:"#c7525a"},
  {id:"E", name:"Mekanism",       hue:"#5b9bd5"},
  {id:"F", name:"AE2",            hue:"#8b7fd1"},
  {id:"G", name:"Blue Skies",     hue:"#4fb3b0"},
  {id:"H", name:"Raumfahrt",      hue:"#e07b39"}
];

const STAGES = ["P1","P2","P3","P4","P5","P6","P7","P8","P9"];
const GOAL = "M23";

const MILESTONES = [
  {id:"M1",  path:"A", stage:1, name:"Schmelzerei", status:"part",
   req:[], must:true,
   what:"Tinkers' Smeltery, erste gegossene Werkzeuge.",
   cross:"Gießt später auch Desh, Ostrum und Calorite (TCIntegrations bringt die Schmelz-Fluids mit).",
   world:"Tinkers begonnen; ob die Schmelzerei steht, ist offen."},

  {id:"M2",  path:"B", stage:2, name:"IE-Stahl", status:"done",
   req:[], must:true,
   what:"Koksofen, Hochofen, erster Stahl, IE-Grundmaschinen. Die Raffinerie liefert Biodiesel.",
   cross:"Stahl ist die Basiswährung für Mekanism, den AE2-Storage-Layer und die Rakete T1. Biodiesel ist der Treibstoff für T1.",
   world:"Erreicht. Nach dem Wechsel auf 1.20.1 müssen alle Multiblöcke neu geformt werden."},

  {id:"M3",  path:"C", stage:3, name:"Runenaltar", status:"done",
   req:[], must:false,
   what:"Mana-Infrastruktur, erste Runen.",
   cross:"–",
   world:"Erreicht."},

  {id:"M4",  path:"D", stage:3, name:"Blutaltar T2", status:"open",
   req:[], must:true,
   what:"Blood Altar Stufe 2, erste Blood Orbs.",
   cross:"Beginn der Kette zum Dungeon-Item für die Rakete T4.",
   world:"Mod neu installiert, nicht begonnen."},

  {id:"M5",  path:"G", stage:3, name:"Everbright", status:"open",
   req:[["M2","Ausrüstung"]], must:true,
   what:"Gatekeeper finden, Zeal Lighter kaufen (8 Smaragde), Portal nach Everbright. Dort liegen Zinn (nur hier), Blei und Bauxit.",
   cross:"Zinn → Bronze und Mekanism-Ausbau; Blei und Bauxit → IE. Fremde Werkzeuge sind abgeschwächt, bis die Bosse besiegt sind (gewollte Hürde).",
   world:"Blue Skies ist neu; ersetzt den Twilight Forest."},

  {id:"M6",  path:"F", stage:3, name:"Storage-Layer", status:"open",
   req:[["M2","Stahl"]], must:false,
   what:"Meteorit finden (Inscriber-Pressen und Budding-Certus), Prozessoren, Kisten und Drawers per Storage Bus anbinden.",
   cross:"Certus gibt es in 1.20.1 nur noch an Budding-Blöcken in Meteoriten.",
   world:"AE2 nicht begonnen."},

  {id:"M7",  path:"E", stage:3, name:"Erste Mekanism-Maschine", status:"open",
   req:[["M2","Stahl"]], must:true,
   what:"Metallurgic Infuser und Enrichment Chamber mit dem knappen Overworld-Osmium. Electrolytic Separator und Rotary Condensentrator für flüssigen Sauerstoff.",
   cross:"Pflichtbaustein für die Rakete T1: Sauerstoff kommt zwingend aus Mekanism.",
   world:"Mod neu installiert, nicht begonnen. Osmium kommt per Retrogen in die erkundeten Chunks."},

  {id:"M8",  path:"B", stage:4, name:"Petroleum", status:"part",
   req:[["M2","Stahl"]], must:true,
   what:"Pumpjack, Destillation und Hydrotreater (Immersive Petroleum): entschwefelter Diesel und Kerosin.",
   cross:"Diesel ist der Treibstoff für T2, Kerosin für T3 und die Basis des Raketentreibstoffs für T4.",
   world:"Pumpjack gebaut; muss nach dem Wechsel neu geformt werden. Ob er das alte Ölvorkommen findet, ist ungetestet."},

  {id:"M9",  path:"C", stage:4, name:"Terrasteel", status:"open",
   req:[["M3","Runen"]], must:true,
   what:"Terrestrial Agglomeration Plate, Terrasteel.",
   cross:"Mindestens Terrasteel wird als Magie-Teil der Rakete T4 gebraucht (welches Teil genau, ist offen).",
   world:"–"},

  {id:"M10", path:"G", stage:4, name:"Everdawn", status:"open",
   req:[["M5","Gatekeeper"]], must:false,
   what:"Zweite Blue-Skies-Dimension. Hier liegt Osmium in Menge.",
   cross:"Osmium für den Mekanism-Ausbau, als Alternative zum Mond.",
   world:"–"},

  {id:"M11", path:"H", stage:4, name:"Rakete T1 → Mond", status:"open",
   req:[["M2","Stahl · Biodiesel"],["M7","Sauerstoff"]], must:true,
   what:"NASA Workbench, Rakete T1, Launch Pad, Raumanzug. Erster Raumflug.",
   cross:"Der Mond liefert Desh für T2 und Osmium in Menge.",
   world:"–"},

  {id:"M12", path:"E", stage:4, name:"Mekanism-Ausbau", status:"open",
   req:[["M7","Maschinen"],["M5","Zinn"]], must:true,
   what:"Erzverarbeitung ×3 und ×4 (Purification, Chemical Injection), Gase und Chemie.",
   cross:"Osmium dafür aus Everdawn oder vom Mond. Liefert die Chemie für den Raketentreibstoff T4.",
   world:"–"},

  {id:"M13", path:"D", stage:5, name:"Blutaltar T4", status:"open",
   req:[["M4","Altar"]], must:true,
   what:"Altar Stufe 4, Voraussetzung für das Ritual zum Demon Dungeon.",
   cross:"Demonit → Tinkers (Hellforged).",
   world:"–"},

  {id:"M14", path:"C", stage:5, name:"Alfheim", status:"open",
   req:[["M9","Terrasteel"]], must:false,
   what:"Elven Gateway, Mead of Kvasir, Zugang nach Alfheim (MythicBotany).",
   cross:"Elementium und Dragonstone.",
   world:"–"},

  {id:"M15", path:"G", stage:5, name:"Blue-Skies-Bosse", status:"open",
   req:[["M5","Dungeons"]], must:false,
   what:"Summoner und Alchemist (Everbright), Starlit Crusher und Arachnarch (Everdawn).",
   cross:"Hebt die Abschwächung fremder Werkzeuge auf. Story-Kapitel mit Easy-NPC-Figuren.",
   world:"–"},

  {id:"M16", path:"H", stage:5, name:"Rakete T2 → Mars", status:"open",
   req:[["M11","Desh"],["M8","Diesel"]], must:true,
   what:"Desh-Rakete mit entschwefeltem Diesel. Der Mars liefert Ostrum und Fluorit.",
   cross:"IE bleibt nötig (Metal Press für die Platten, weil der Ad-Astra-Compressor entfällt).",
   world:"–"},

  {id:"M17", path:"C", stage:6, name:"Gaia · Alfsteel", status:"open",
   req:[["M14","Dragonstone"]], must:false,
   what:"Gaia-Guardian besiegen, Alfsteel herstellen.",
   cross:"Wird Pflicht, falls Alfsteel als Magie-Teil der Rakete T4 gewählt wird (offen).",
   world:"–"},

  {id:"M18", path:"H", stage:6, name:"Rakete T3 → Merkur, Venus", status:"open",
   req:[["M16","Ostrum"],["M8","Kerosin"]], must:true,
   what:"Ostrum-Rakete mit Kerosin. Hitzeschutz nötig (Netherite Space Suit). Venus liefert Calorite; Merkur und Venus liefern Uran und Blei in Menge.",
   cross:"Macht die Nuklearkette ergiebig und öffnet den Weg zum Blood-Magic-Dungeon.",
   world:"–"},

  {id:"M19", path:"D", stage:7, name:"Demon Dungeon auf Merkur", status:"open",
   req:[["M13","Ritual"],["M18","Flug zum Merkur"]], must:true,
   what:"Das Ritual zum Blood-Magic-Dungeon gelingt nur auf dem Merkur. Im Dungeon liegt ein Pflicht-Item für die Rakete T4.",
   cross:"Verbindet Blood Magic mit der Raumfahrt. Ob sich das Ritual per KubeJS auf einen Planeten beschränken lässt, ist ungetestet.",
   world:"–"},

  {id:"M20", path:"E", stage:7, name:"Nuklearkette", status:"open",
   req:[["M12","Gase"],["M18","Uran in Menge"]], must:true,
   what:"Fission Reactor, Polonium und Plutonium.",
   cross:"Uran-Erzeugnisse sind Pflichtteil der Rakete T4 (welches genau, ist offen).",
   world:"–"},

  {id:"M21", path:"F", stage:7, name:"ME-System", status:"open",
   req:[["M6","Prozessoren"],["M12","Mek-Ausbau"]], must:false,
   what:"ME Drives, Storage Cells, Autocrafting, Applied Mekanistics.",
   cross:"Automatisiert die vorhandenen Ketten.",
   world:"–"},

  {id:"M22", path:"H", stage:8, name:"Rakete T4 → Glacio", status:"open",
   req:[["M18","Calorite"],["M19","Dungeon-Item"],["M20","Uran-Teil"],["M9","Magie-Teil"],["M12","Raketentreibstoff"]], must:true,
   what:"Calorite-Rakete mit eigenem Raketentreibstoff (Kerosin plus Mekanism-Chemie). Erreicht Glacio und die Star-Wars-Planeten.",
   cross:"Hier laufen Tech, Nuklear, Botania und Blood Magic zusammen.",
   world:"–"},

  {id:"M23", path:"H", stage:9, name:"Star-Wars-Planeten", status:"open",
   req:[["M22","Rakete T4"]], must:true,
   what:"Tatooine, Endor, Hoth, Mustafar, Mandalore. Kyber für Lichtschwerter (nur hier, in der Overworld entfernt) und Beskar.",
   cross:"Endziel. Offen: mit Ad Astra: Rocketed auf T5 bis T7 staffeln?",
   world:"–"}
];
