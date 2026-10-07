# Prüfbericht der bisherigen Analyse + eigener Plan

Stand: 2026-10-07 · Geprüft gegen die echte Instanz `ATLauncher/instances/ImmersiveEngineering` (nur lesend).
Grundlage: JARs in `mods/`, `config/`, `saves/WasIchBauenWill/serverconfig/`, `logs/latest.log`, `kubejs/`.

---

## Teil A — Prüfbericht

### A1. Bestätigt ✅

| Aussage der Doku | Beleg |
|---|---|
| Modliste = `mods_v3.txt` (71 JARs) | `mods/` stimmt 1:1 überein |
| IE-Erze: Aluminium, Lead, Nickel, Silver, Uranium (+ Deepslate) | `blockstates/ore_*.json` im IE-JAR |
| Mekanism-Erze: Lead, Osmium, Tin, Uranium, Fluorite (+ Deepslate) | Mekanism-JAR |
| Mekanism-Ingots: Bronze, Lead, Osmium, Steel, Tin, Uranium, Refined Glowstone/Obsidian | Mekanism-JAR |
| Tinkers Cobalt als Nether-Erz | `tconstruct:cobalt_ore`, Config `generateCobalt = true`, `veinCountCobalt = 8` |
| AE2 Certus-Erz + Meteoriten | AE2-JAR + `appliedenergistics2/common.json` |
| MythicBotany: Dragonstone-, Elementium-, Gold-Erz | MythicBotany-JAR |
| Blood Magic: `bloodmagic:dungeon_ore` | Blood-Magic-JAR |
| Lead doppelt (IE + Mekanism), beide in `forge:ingots/lead` | Tag-JSONs beider JARs |
| Blood Magic: leerer Certus-Tag (`replace:false`, `values: []`) | Blood-Magic-JAR |
| IE Alloy Smelter: 3 Kupfer + 1 Zinn → 4 Bronze (Ausgabe über Tag) | `alloysmelter/bronze.json` |
| TCIntegrations bringt eigenes Bronze (Ingot/Nugget/Block) | TCIntegrations-JAR |
| Twilight-Forest-Erzwerte (Kohle Y≤127/20, Eisen Y≤63/20, Kupfer 0–96/6, Gold Y≤31/2, Diamant Y≤15 …) | `legacy_*_ore` placed/configured features, in TF-Biomen eingebunden |

### A2. Fehlerhaft ❌

1. **IE hat kein Kupfererz.** `immersiveengineering:ore_copper` existiert nicht. Kupfer kommt nur aus Vanilla.
2. **„IE-/Mekanism-Spawnwerte müssen in einer Testinstanz gemessen werden“ stimmt nicht.** Die Werte stehen in den Configs:
   - IE: **pro Welt** in `saves/<Welt>/serverconfig/immersiveengineering-server.toml` (`[ores.*]`)
   - Mekanism: `config/Mekanism/world.toml`
3. **„Änderungen wirken nur auf neue Chunks“ ist nur teilweise richtig.** Beide Mods können **Retrogen**, also Erze nachträglich in bereits erzeugte Chunks setzen:
   - IE: `retrogen_enable` pro Erz + `retrogen_key`
   - Mekanism: `enableRegeneration` + `userWorldGenVersion`

   Das ist wichtig, weil Mekanism erst nachträglich installiert wurde (siehe A4).
4. **Demonite, Dragonstone, Elementium-Erz und Mythic-Gold stehen in 03 überall auf „–“.** Sie haben aber eigene Dimensionen, die in der Welt bereits registriert sind:
   - `bloodmagic:dungeon` (Demonite)
   - `mythicbotany:alfheim` (MythicBotany-Erze; Config: `enableAlfheim = true`, `lockAlfheim = true`)
5. **Osmium wird in der Erzmatrix nirgends generiert.** Laut deiner Vorgabe ist das falsch: Osmium soll vorkommen.
6. **Die Matrix in 03 („niedrig/hoch“) passt nicht zu den aktuellen Configs.** Im Moment laufen überall die Default-Werte, z. B.:
   - Mekanism Osmium: 65 + 6 + 8 Versuche pro Chunk
   - Mekanism Zinn: 14 + 12 pro Chunk („sehr niedrig“ ist es also nicht)
   - IE Bauxit: 16 pro Chunk, Lead 12, Silber 10, Nickel 7 + 11 (deep)

   Die Matrix ist ein **Soll**, kein Ist. Das muss in der Doku klar getrennt werden.
7. **Fehlende Mods in 00_MODBASIS:** Carry On und MouseTweaks fehlen in der Liste.
8. **AE2-Status ist widersprüchlich** (siehe deine Antwort zu Frage 7): Zielbild ist „AE2 = Endgame, nur früher Storage-Layer für Kisten/Drawers“.

### A3. Lücken / bisher nicht bedacht ⚠️

- **Lead und Uranium werden doppelt generiert** (IE **und** Mekanism, beide aktiv). Uranium kommt dadurch aus zwei Erzfamilien. Die Doku behandelt das nur auf Item-Ebene, nicht beim Worldgen.
- **Spawnen IE-/Mekanism-Erze schon im Twilight Forest?** Beide Mods fügen ihre Erze per Biome-Kategorie hinzu. Ob TF-Biome dazu zählen, ist ungeklärt und muss getestet werden. Davon hängt ab, wie aufwendig die „Industrial Frontier“ wird.
- **AE2-Inscriber-Pressen gibt es nur in Meteoriten** (`spawnPressesInMeteorites = true`). Schon der frühe Storage-Layer (Terminal + Storage Bus) braucht Prozessoren und damit Pressen. Das ist ein natürliches Gate, das in 08 fehlt.
- **Mekanism hat bei seinen eigenen Metallen bereits 5x Ertrag.** „Kein More Mekanism Processing“ verhindert nur die Erweiterung auf fremde Metalle. Die Ertragsfrage bleibt also offen.
- **MythicBotany `replaceGaiaRecipe = true`:** MythicBotany verändert ein Botania-Rezept. Das muss bei der Progression beachtet werden.
- **Weitere Dimensionen sind schon vorhanden:** `wrd:wesleys_infinite_dungeons`, `bonsaitrees3:growtown` und Alfheim. Wichtig für deine Idee einer eigenen Osmium-/Zinn-Dimension.
- **`kubejs/exported/tags` ist veraltet** (Stand 19.03.2026, vor Mekanism/Blood Magic). Für einen aktuellen Tag-Dump muss das Spiel einmal neu exportieren.
- **KubeJS ist praktisch leer** (nur Beispielskripte). Es gibt also nichts, was mit bestehenden Skripten kollidieren könnte.
- `disabledmods/extrabotany` ist deaktiviert. Ist das bewusst so?

### A4. Zeitkritisch ⏰

Mekanism wurde erst nachträglich installiert. **Jeder Chunk, den ihr ab jetzt neu erkundet (auch im Twilight Forest), bekommt die Mekanism-/IE-Default-Erzverteilung.** Wenn Osmium, Zinn oder Lead später exklusiv oder selten sein sollen, sollte die Worldgen-Entscheidung **vor** größeren Erkundungstouren fallen.

---

## Teil B — Eigener Plan

Leitidee: **erst entscheiden, was zeitkritisch oder strukturell ist, dann balancieren, dann implementieren.**
Ich arbeite nur im Projektordner. Die Übernahme in die Instanz machst du.

### Phase 0 — Grundlagen (kurz)
- Projektordner strukturieren:
  - `docs/` (bestehende Doku)
  - `kubejs/` (Spiegel der Ziel-Struktur)
  - `config-overrides/` (nur geänderte Config-Dateien)
  - `CHANGELOG`
- Doku-Korrekturen aus Teil A einarbeiten (nach deinem OK).
- **Testinstanz:** In ATLauncher eine Kopie der Instanz anlegen (machst du). Dorthin werden Skripte und Configs zum Testen kopiert.
- Optional: Git im Projektordner.

### Phase 1 — Worldgen-Entscheidung ⏰ (zuerst!)
1. Klären, ob IE-/Mek-Erze aktuell schon im TF spawnen (Test in der Testinstanz).
2. Zielverteilung festlegen:
   - Osmium/Zinn: Overworld, TF, oder eigene Dimension? Alfheim, Blood-Magic-Dungeon oder eine neue Mod?
   - Lead/Uranium: Doppel-Generierung abschalten?
3. Umsetzungsweg wählen: **Config-Werte** (IE serverconfig, `Mekanism/world.toml`, AE2, Tinkers) zuerst. KubeJS-Worldgen (`addOre` mit Biome-Filter) nur für TF-Erze, nach API-Test.
4. Entscheiden, ob **Retrogen** für bestehende Chunks genutzt wird. Vor allem für Mekanism-Erze in bereits erkundeten Gebieten.

### Phase 2 — Progressions-Gates (Meilensteine)
Statt erst alle Erträge zu balancieren, lege ich zuerst **~10–15 Schlüssel-Meilensteine** fest, z. B.:
- erste Mekanism-Maschine
- Metallurgic Infuser
- Fortgeschrittene IE-Multiblöcke
- Terrasteel
- Blood-Altar-Tiers
- AE2 Storage-Layer
- ME Drive
- Fusion/SPS
- Alfsteel

Für jeden Meilenstein: welche Pfade er braucht (Kreuzungspunkte). Das gibt den Rahmen für alles Weitere und berücksichtigt euren Weltstand.

### Phase 3 — Verarbeitung & Erträge
Ertragstabelle pro Material und Pfad: Vanilla, IE (Crusher/Arc), Tinkers (Ore Melting), Mekanism (2x–5x). Dazu Byproducts, Steel- und Bronze-Hauptroute, Unifizierung doppelter Outputs (Lead, Uranium, Steel, Bronze).

### Phase 4 — Energie & Flüssigkeiten
Rollen der Generatoren (IE Biodiesel/Diesel ↔ Mekanism), Verbrauch der Gate-Maschinen.

### Phase 5 — AE2 zweistufig
- Stufe 1 (früh, teuer): Terminal + Storage Bus an Kisten/Drawers. Gates: Meteoriten-Pressen + IE-Steel.
- Stufe 2 (Endgame): Drives, Zellen, Autocrafting, Applied Mekanistics.

### Phase 6 — Cross-Mod-Rezepte
Nur an den in Phase 2 definierten Kreuzungspunkten.

### Phase 7 — KubeJS-Umsetzung & Test
- Skripte modular (KubeJS 1802 / `onEvent`-Syntax)
- Test in der Testinstanz
- Testprotokoll führen

### Phase 8 — Übernahme in die Hauptwelt
Backup → Configs/Skripte kopieren → Retrogen (falls gewählt) → Changelog für die Mitspieler.
