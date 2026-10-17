// Stand 2026-10-14. Oberseite der Modpfade: eine Kachel je Mod, Klick öffnet die Seite des Mods.
// Neue Seite: Eintrag in MODS mit url ergänzen (und aus PLANNED streichen), dann bash build.sh uebersicht und neu veröffentlichen.
// Bild-Verweise sammelt tools/IconTool.java ein (JARS=... bash mkicons.sh uebersicht).
const PAGE = {
  pageTitle: "Modpfade",
  lede: "Jede Seite zeigt einen Mod so, wie er von sich aus gespielt werden will: Schritt für Schritt, mit Bildern, Bauplänen und den nötigen Rohstoffen. Alle Angaben stammen aus den JARs der Testinstanz (Minecraft 1.20.1).",
};
// [Name, Version, Addons auf der Seite, Kurzbeschreibung, Phasen, Schritte, Bild, Akzent dunkel, Akzent hell, URL]
const MODS = [
  {
    name: "Tinkers' Construct", version: "3.12.1.231", addons: "TCIntegrations, Levelling Addon",
    text: "Vom Holzmuster über Melter und Smeltery bis zur Foundry im Nether. Mit allen Materialstufen und 205 Modifiern samt Zutaten.",
    phases: 5, steps: 27, icon: "tconstruct:block/smeltery/controller/smeltery_active",
    accent: ["#e8823c", "#a8521a"], url: "https://claude.ai/artifact/TYsNjvC9iqYNyAMW8Dy78y",
  },
  {
    name: "Immersive Engineering", version: "10.2.0-183", addons: "Immersive Petroleum, Immersive Posts",
    text: "Vom Engineer's Hammer über Koksofen, Stahl und Schwermaschinen bis zur Ölraffinerie. Jeder Multiblock mit Bild und Bauplan.",
    phases: 5, steps: 30, icon: "render:model/ie_crusher",
    accent: ["#e0a33a", "#a36a12"], url: "https://claude.ai/artifact/5ND4jUMzFawrQBFv1Htzr6",
  },
  {
    name: "Botania", version: "456", addons: "MythicBotany",
    text: "Von der ersten Blüte über Mana, Runen und Terrasteel nach Alfheim und zum Guardian of Gaia.",
    phases: 5, steps: 24, icon: "botania:block/endoflame",
    accent: ["#7cc96b", "#3d8a2f"], url: "https://claude.ai/artifact/3tPaBDHNUfvyPoNjbb2TCw",
  },
  {
    name: "Mekanism", version: "10.4.16.80", addons: "Mekanism Generators",
    text: "Vom Metallurgic Infuser über Erzvervielfachung und Kernkraft bis zu Antimaterie und Fusion. Reihenfolge aus dem Advancement-Baum.",
    phases: 6, steps: 35, icon: "render:model/mek_metallurgic_infuser",
    accent: ["#4fc3a1", "#1f7f66"], url: "https://claude.ai/artifact/NDtR89BAXYtyGRHu4tsHMd",
  },
  {
    name: "Ad Astra", version: "1.15.21", addons: "Giselle Addon, More Structures, Rocketed",
    text: "Von der ersten Stahlplatte über Mond, Mars, Venus und Merkur bis Glacio. Jede Raketenstufe braucht das Metall des Planeten davor.",
    phases: 4, steps: 31, icon: "render:model/aa_nasa_workbench",
    accent: ["#7aa2e8", "#2f5fae"], url: "https://claude.ai/artifact/LDzmRVfRoZREd6nfYoCyQm",
  },
  {
    name: "Star Wars Planets", version: "1.4.6.1", addons: "Addon für Ad Astra",
    text: "Fünf Planeten hinter der Tier 4 Rocket, dazu Kyber-Kristall, Lichtschwerter mit Beacon, Blaster und Beskar-Rüstung.",
    phases: 3, steps: 14, icon: "render:model/swp_light_saber_green",
    accent: ["#e8c95a", "#8a6d0c"], url: "https://claude.ai/artifact/SrPJwSsAAdwZvaUm2MF3iN",
  },
  {
    name: "Star Wars: Galaxy in a Cube", version: "1.0.3.1", addons: "keine",
    text: "Assembly Bench, Lichtschwerter, Blaster, die Macht mit heller und dunkler Seite, Droiden und Klonrüstungen. Kein Buch; Abläufe aus dem Code gelesen.",
    phases: 4, steps: 15, icon: "render:model/swgc_assembly_bench",
    accent: ["#6fc3e8", "#1f6f96"], url: "https://claude.ai/artifact/18k191oT3stvg7zEjZJsHx",
  },
  {
    name: "Blood Magic", version: "3.3.8-50", addons: "Brücke Blood-Smeltery",
    text: "Fünf Altar-Stufen von der ersten Blutspende bis zum Archmage's Orb. Mit Bauplänen der Altar-Stufen, allen Runen und Sigils und 32 Ritualen samt LP-Kosten.",
    phases: 5, steps: 29, icon: "render:model/bm_altar",
    accent: ["#e0605a", "#a32a2a"], url: "https://claude.ai/artifact/LBPGVvAY4w5kV4Mx6KzBjc",
  },
  {
    name: "Wesley's Roguelike Dungeons", version: "2.3.6", addons: "keine",
    text: "Vessel of Vision, sechs Dungeon-Gruppen mit Miniboss und Boss, der Purpur-Palast im End, ein Portalbaum und die Dimension Infinite Dungeons mit acht Läufen auf Zeit. Kein Buch; Abläufe aus dem Code gelesen.",
    phases: 5, steps: 18, icon: "render:model/wrd_bone_chest",
    accent: ["#b48ade", "#6a3f96"], url: "https://claude.ai/artifact/JoCxMWugDJXsXTJxFFyrwN",
  },
  {
    name: "Applied Energistics 2", version: "15.4.11", addons: "AE2WTLib; Brücken Applied Mekanistics, Applied Botanics, More Immersive Wires",
    text: "Vom Meteoriten über Certus, Fluix und die Prozessoren aus dem Inscriber zum ersten ME-Lager, dann Kanäle, Autocrafting, kabelloser Zugriff, P2P, Quantum Bridge und Spatial IO. Reihenfolge aus dem eingebauten Handbuch.",
    phases: 6, steps: 22, icon: "ae2:block/controller",
    accent: ["#9b7cf0", "#5b3fb0"], url: "https://claude.ai/artifact/EGPb1ZNHD7gCtHSELecFhN",
  },
  {
    name: "Blue Skies", version: "1.3.31", addons: "Structure Gel API",
    text: "Vom Gatekeeper-Haus durch die Portale ins kalte Everbright und ins heiße Everdawn: eigene Werkzeugkette von Holz bis Charoite, Ventium, Falsite und Horizonite, dann vier Dungeons mit Summoner, Alchemist, Starlit Crusher und Arachnarch. Reihenfolge aus dem Journal des Mods.",
    phases: 6, steps: 18, icon: "blue_skies:item/misc/zeal_lighter",
    accent: ["#5cc8d8", "#1f7d8a"], url: "https://claude.ai/artifact/GAjru1A7JmbqwXNhfBumJt",
  },
  {
    name: "Alex's Mobs", version: "1.22.9", addons: "Brücke Alex's Delight",
    text: "Rund 90 Tierarten in Oberwelt, Nether und End, viele mit einem Beutestück für Rüstung, Werkzeug oder Essen. Am Ende eine feste Kette: Enderiophage, Capsid, Void Worm, Dimensional Carver, Farseer am Weltrand und die Transmutation Table. Reihenfolge aus dem Advancement-Baum.",
    phases: 6, steps: 21, icon: "alexsmobs:item/animal_dictionary",
    accent: ["#9cc45e", "#4f7a25"], url: "https://claude.ai/artifact/Tf1bokH9S871MVquTbiiAJ",
  },
  {
    name: "Immersive Aircraft", version: "1.5.0", addons: "Brücke iaie",
    text: "Sieben Fluggeräte aus Holz, Eisen und Kupfer, vom muskelbetriebenen Gyrodyne bis zum Warship, dazu Upgrades und Waffen. Kein Buch; alle Rezepte ab dem ersten Eisenbarren. Im Pack tanken die Geräte nur flüssigen IE-Treibstoff im Metal Barrel.",
    phases: 5, steps: 9, icon: "immersive_aircraft:item/biplane",
    accent: ["#d9a066", "#8a5a24"], url: "https://claude.ai/artifact/BfUwZLQdeo3DugNVASvxYh",
  },
  {
    name: "Farmer's Delight", version: "1.3.4", addons: "Nether's Delight, Brücke Engineer's Delight",
    text: "Messer, Wildpflanzen und Stroh, Rich Soil, Cutting Board und Cooking Pot bis zu Festessen; im Nether Machete, Hoglin, Strider und Soul Compost. Engineer's Delight bringt Crusher, Cloche, Bottling Machine und Sawmill ins Spiel. Reihenfolge aus dem Advancement-Baum.",
    phases: 5, steps: 14, icon: "farmersdelight:item/cooking_pot",
    accent: ["#c6b24a", "#7a6a14"], url: "https://claude.ai/artifact/Rj7tWAhmGLAmje66fHT9sX",
  },
];
// Mods ohne Seite, in der Reihenfolge der Mod-Liste
const PLANNED = [];
// Andere Übersichten des Projekts
const MORE = [
  ["Erzatlas", "alle Erze, Fundorte und Verbrauch je Mod", "https://claude.ai/artifact/LWwdvCpXRwaHCa8NstSc4g"],
  ["Meilensteinkarte", "der geplante Progressionsweg des Packs", "https://claude.ai/artifact/Hdy6LMxESx5CJ9omjkAMEX"],
];
