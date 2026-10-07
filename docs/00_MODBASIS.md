# 00 — MODBASIS

## Zweck

Referenz für die festgelegte Modpack-Basis. Die Modliste wird nicht stillschweigend verändert.

## Grundregel

🟢 Die aktuelle Modbasis ist festgelegt. Neue Mods werden nur nach bewusster Entscheidung aufgenommen; große Gameplay-/Progressionsmods werden nicht nebenbei ergänzt.

## Technische Basis

- Minecraft 1.18.2, Forge, ATLauncher-Instanz „Immersive Engineering+“
- 71 Mod-JARs, Rohliste in `mods_v3.txt` (🟢 2026-10-07 1:1 mit `mods/` der Instanz abgeglichen; die Datei enthält zusätzlich die Einträge `mods_v2.txt`/`mods_v3.txt` selbst)

## Gameplay-/Content-Mods

- Applied Energistics 2
- Applied-Botanics
- Applied-Mekanistics
- Blood Magic
- Blood-Smeltery
- Bonsai Trees 3
- Botania
- Farmer's Delight
- Immersive Aircraft
- Immersive Engineering
- Immersive Petroleum
- Immersive Posts
- Mekanism
- Mekanism Generators
- More Immersive Wires
- MythicBotany
- Nethers Delight
- Sophisticated Backpacks
- Storage Drawers
- Tinkers Construct
- Tinkers Levelling Addon
- TCIntegrations
- Travelers Backpack
- Twilight Forest
- Waystones
- Wesley's Roguelike Dungeons

## KubeJS

- KubeJS Forge (1802.5.5-build.569) + Rhino
- KubeJS Blood Magic
- KubeJS Botania
- KubeJS Immersive Engineering
- KubeJS Mekanism
- KubeJS Tinkers

## Utility / Library / Client

AE2WTLib, AppleSkin, Architectury, AttributeFix, Balm, Carry On, Cloth Config, Clumps, Collective, Controlling, Curios, Fusion, Inventory Sorter, Jade, JEI, JEI Multiblocks, JER Integration, JourneyMap, Just Enough Botania, Just Enough Mekanism Multiblocks, Just Enough Resources, LazyDFU, Libnonymous, LibX, Light Overlay, Lucent, MaFgLib, Mantle, MouseTweaks, Patchouli, Placebo, Rechiseled, Sophisticated Core, Spark, Stack Refill, SuperMartijn642 Config Lib, SuperMartijn642 Core Lib, Toast Control.

## Bewusste Entscheidungen

### 🟢 Keine „More Mekanism Processing“-Erweiterung
Verarbeitung wird selbst über KubeJS und Cross-Mod-Design balanciert.

### 🟢 Keine zusätzlichen großen Tech-Mods
Create, Thermal, Ender IO etc. sind nicht Teil der Basis.

### 🟢 ExtraBotany entfernt
`extrabotany-1.18.2-0.1.6.1.jar` liegt in `disabledmods/`, weil Minecraft damit beim Start abstürzte.

### 🟡 Mögliche spätere Endgame-Erweiterungen
Draconic Evolution oder zusätzliche Dimensionen können später diskutiert werden (siehe `09_ENDGAME.md`).

## Bekannte harmlose Log-Meldungen

- KubeJS meldet `GameStagesIntegration … NoClassDefFoundError` — GameStages ist nicht installiert, die Integration wird übersprungen.
- Blood Magic meldet fehlende Texturen/Blockstates (`life_essence_block`, einige Effekt-Icons) — bekannte Kleinigkeiten der Mod-Version, kein Funktionsproblem.
