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
];
// Mods ohne Seite, in der Reihenfolge der Mod-Liste
const PLANNED = ["Applied Energistics 2", "Blood Magic", "Ad Astra", "Blue Skies", "Star Wars", "Farmer's Delight"];
// Andere Übersichten des Projekts
const MORE = [
  ["Erzatlas", "alle Erze, Fundorte und Verbrauch je Mod", "https://claude.ai/artifact/LWwdvCpXRwaHCa8NstSc4g"],
  ["Meilensteinkarte", "der geplante Progressionsweg des Packs", "https://claude.ai/artifact/Hdy6LMxESx5CJ9omjkAMEX"],
];
