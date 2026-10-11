# 00 — MODBASIS

> ⚠️ **Stand 1.18.2, überholt.** Der Wechsel auf 1.20.1 ist beschlossen (2026-10-11). Die gültige Mod-Liste steht in `16_MODLISTE_1.20.1.md`; dieses Dokument wird noch angepasst.

## Zweck

Referenz für die festgelegte Modpack-Basis. Die Modliste wird nicht stillschweigend verändert.

## Grundregel

🟢 Die aktuelle Modbasis ist festgelegt. Neue Mods werden nur nach bewusster Entscheidung aufgenommen; große Gameplay-/Progressionsmods werden nicht nebenbei ergänzt.

## Technische Basis

- Minecraft 1.18.2, Forge, ATLauncher-Instanz „Immersive Engineering+“
- Hauptinstanz/Hauptwelt: 71 Mod-JARs, Rohliste in `mods_v3.txt` (🟢 2026-10-07 1:1 mit `mods/` der Instanz abgeglichen; die Datei enthält zusätzlich die Einträge `mods_v2.txt`/`mods_v3.txt` selbst)
- Testinstanz: 81 Mod-JARs, Rohliste in `mods_v4.txt` (🟢 2026-10-07 mit `mods/` der Testinstanz abgeglichen) = `mods_v3.txt` + 10 Kandidaten (siehe unten). Startet und lädt eine Welt (🟢 2026-10-07, Log geprüft).

## 🔵 Kandidaten in der Testinstanz

Noch nicht in der Hauptinstanz. Übernahme erst nach Test und Entscheidung.

| Mod | JAR | Zweck | Wer braucht ihn | Entscheidung |
|---|---|---|---|---|
| GraveStone | `gravestone-1.18.2-1.0.2.jar` | Grab mit Inventar beim Tod | alle Spieler (Host + Clients) | 🟢 ins Hauptpack (2026-10-08) |
| GraveStone Curios Compat | `gravestonecurioscompat-1.18.x-1.20.x-Forge-2.1.0.jar` | Curios-Slots ins Grab übernehmen | alle Spieler | 🟢 ins Hauptpack (2026-10-08) |
| ProbeJS | `probejs-4.0.0-fix4-forge.jar` | KubeJS-Typen/Autovervollständigung | **nur Entwicklung (Testinstanz)**, nicht ausliefern | nur Testinstanz |
| FTB Quests (+ FTB Library, FTB Teams, Item Filters) | `ftb-quests-forge-1802.3.16-build.479.jar` u. a. | Questbuch für die Progression | alle Spieler | 🟢 ins Hauptpack (2026-10-08) |
| Beyond Earth | `Beyond-Earth-1.18.2-6.2.jar` | Raumfahrt (siehe `15_RAUMFAHRT.md`) | alle Spieler | 🟢 ins Hauptpack (Raumfahrt-Entscheidung) |
| Beyond Earth: Giselle Addon | `Beyond-Earth-Giselle-Addon-1.18.2-2.20.jar` | IE-/Mekanism-Integration | alle Spieler | 🟢 ins Hauptpack (Raumfahrt-Entscheidung) |
| Star Wars Planets | `StarWarsPlanets-1.15.jar` | Star-Wars-Planeten | alle Spieler | 🟢 ins Hauptpack (Raumfahrt-Entscheidung) |

Empfohlen, aber (Stand 2026-10-07) nicht installiert: FerriteCore, ModernFix, Rubidium/Oculus.

### Verworfen / Versionsfallen (verifiziert 2026-10-07)

- **Polymorph 1.18.2-0.51**: verlangt JEI ≥ 10.81, bei uns läuft JEI 9.7.1 → Absturz beim Laden. Entfernt; eine ältere Version wäre nur mit passender JEI-Range möglich.
- **Beyond Earth 7.0-SNAPSHOT**: Neufassung eines anderen Teams (Paket `com.st0x0ef`). Star Wars Planets und Giselle Addon brauchen die Original-Klassen (`net.mrscauthd`) → Absturz. **Nur Beyond Earth 6.x verwenden.**
- **Planeteer Machines**: nur Solarpanels (verstößt gegen die Energie-Regel), fehlende Abhängigkeit `planeteer_core`.
- **Beyond Planets Core**: erzeugt fest im Code Zinn, Uran, Blei, Kobalt und Zink auf allen Planeten und hebelt damit die Erzplanung aus. Wird von Star Wars Planets nicht gebraucht.

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

### 🟢 Raumfahrt geplant (Ausnahme zur Tech-Regel)
Beyond Earth, Star Wars Planets und Beyond Earth: Giselle Addon werden aufgenommen (noch nicht installiert). Beyond Earth bringt eigene Maschinen mit. Deren Energie- und Treibstoffproduktion wird deaktiviert bzw. durch IE/Mekanism ersetzt, damit keine zusätzliche Basistech entsteht. Siehe `15_RAUMFAHRT.md`.

### 🟡 Mögliche spätere Endgame-Erweiterungen
Draconic Evolution oder zusätzliche Dimensionen können später diskutiert werden (siehe `09_ENDGAME.md`).

## Bekannte harmlose Log-Meldungen

- KubeJS meldet `GameStagesIntegration … NoClassDefFoundError` — GameStages ist nicht installiert, die Integration wird übersprungen.
- Blood Magic meldet fehlende Texturen/Blockstates (`life_essence_block`, einige Effekt-Icons) — bekannte Kleinigkeiten der Mod-Version, kein Funktionsproblem.
