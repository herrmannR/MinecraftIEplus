# 01 — PROGRESSION

## Zweck

Definition der spielerischen Entwicklung des Modpacks und der Abhängigkeiten zwischen Mods.

## Leitprinzip

🟢 Die Progression ist keine lineare Leiter. Mehrere Pfade laufen parallel und kreuzen sich an definierten Punkten. Kein einzelner Pfad ersetzt alle anderen.

## Grobe Zeitachse (Orientierung, kein Lock-System)

| Stufe | Schwerpunkt |
|---|---|
| P0 | Vanilla / Survival |
| P1 | Tinkers / grundlegende Materialverarbeitung |
| P2 | Immersive Engineering |
| P3 | Botania + Blood Magic |
| P4 | Petroleum + fortgeschrittene Industrie |
| P5 | Mekanism |
| P6 | Cross-Mod-Automatisierung, MythicBotany / High-End-Magie |
| P7 | AE2-ME-System, Endgame |

Der frühe AE2-Storage-Layer liegt bewusst außerhalb dieser Achse (ab ca. P2/P3, siehe Pfad F).

## Parallele Pfade

### Pfad A — Handwerk / Tinkers
**Vanilla → Tinkers → bessere Werkzeuge → Spezialmaterialien**
- frühe Einstiegshürde, eigener Werkzeug-/Kampfpfad
- profitiert von Materialien aus Tech, Magie und Dimensionen (Cobalt im Nether, Twilight-Materialien, Hellforged)

### Pfad B — Immersive Engineering / Industrie
**Grundressourcen → IE-Maschinen → Steel → Biodiesel → Petroleum → fortgeschrittene Industrie**
- erste industrielle Infrastruktur, liefert Zwischenprodukte für andere Pfade
- bleibt auch nach Mekanism relevant

### Pfad C — Naturmagie / Botania
**Mana → Runen → Manasteel → Terrasteel → Elven Gateway/Elementium → Gaia → MythicBotany (Alfheim, Alfsteel)**
- weitgehend unabhängig von der Tech-Leiter
- MythicBotany ändert per Config das Gaia-Rezept (`replaceGaiaRecipe = true`) — 🔵 Auswirkung prüfen
- Alfheim (MythicBotany-Dimension) wird über Mead of Kvasir freigeschaltet (`lockAlfheim = true`) — 🔵 genaue Freischaltkette in der Testinstanz/JEI prüfen

### Pfad D — Blutmagie
**Life Essence → Blood Altar → Tier-Aufbau → Alchemie/Rituale → Demon-Dungeon / High-End Blood Magic**
- eigener Ressourcenfluss, keine reine Alternative zu Mekanism-Verarbeitung
- liefert Spezialkomponenten und Cross-Mod-Gates

### Pfad E — Mekanism / High-Tech
**IE-Grundlagen → Osmium-Maschinen → Chemie/Gase → fortgeschrittene Verarbeitung → High-Tech-Energie → Nuclear/Endgame**
- bewusst später und teurer, nicht universell effizienter als IE
- Osmium wird ab der ersten Mekanism-Maschine benötigt → darf nicht hinter einer Endgame-Dimension liegen. Overworld-Osmium (reduziert) reicht für den Einstieg, der Ausbau läuft über den Mond.

### Pfad F — AE2 / Logistik (zweistufig)
1. 🟢 **Früher Storage-Layer** (teuer, aber früh erreichbar): bestehende Kisten und Storage Drawers anbinden, zentral suchen, ein- und auslagern.
2. 🟢 **Endgame-ME-System**: Storage-Zellen, Crafting-Automation, Processing Patterns, P2P, Applied Mekanistics.

Hinweis: Inscriber-Pressen gibt es nur in Meteoriten (`spawnPressesInMeteorites = true`). Schon Stufe 1 braucht Prozessoren → Meteoriten-Suche ist ein natürliches Gate.

### Pfad H — Raumfahrt (Hauptziel)
**IE Steel + Petroleum + erste Mekanism-Maschine → Rakete T1 (Mond: Osmium, Certus) → T2 (Mars) → T3 → T4 / Star-Wars-Planeten (Magie + Uran-Erzeugnisse)**
- 🟢 Hauptziel des Packs: Beyond Earth + Star Wars Planets + Giselle Addon
- 🟢 Energie und Treibstoff nur aus anderen Mods (IE, Immersive Petroleum, Mekanism)
- 🔵 Tier-Zuordnung und Kreuzungspunkte: Entwurf in `15_RAUMFAHRT.md`

### Pfad G — Exploration / Dimensionen
**Overworld → Nether → Twilight Forest → Alfheim / Blood-Magic-Dungeon / Wesley's Dungeons → Endgame**
- Twilight Forest als „Industrial Frontier“ für seltene Industriemetalle (siehe `03_ERZGENERATION.md`)

## Kreuzungspunkte statt linearer Gates

- Tinkers benötigt später seltene Tech-/Dimensionsmaterialien.
- IE liefert industrielle Vorprodukte für Mekanism und AE2.
- Botania liefert einzelne magische Komponenten für ausgewählte High-End-Systeme.
- Blood Magic liefert Spezialmaterialien bzw. alternative Ressourcenpfade.
- Twilight Forest liefert ausgewählte seltene Erze und Dimensionsmaterialien.
- Raumfahrt braucht Treibstoff aus IE/Petroleum und Komponenten aus IE und Mekanism; Planeten liefern neue Metalle zurück.
- AE2 verbindet bestehende Produktionssysteme, statt sie von Anfang an zu ersetzen.

## Weltstand (Hauptwelt, 2026-10-07)

| Pfad | Erreicht |
|---|---|
| A Tinkers | begonnen |
| B IE | Steel, Biodiesel-Generator, Crusher, Arc Furnace, Pumpjack |
| C Botania | Rune Altar |
| D Blood Magic | neu installiert, nicht begonnen |
| E Mekanism | neu installiert, nicht begonnen |
| F AE2 | nicht begonnen |
| G Exploration | Twilight Forest gerade betreten |
| H Raumfahrt | Mods noch nicht installiert |

Neue Gates dürfen bereits erreichten Fortschritt nicht rückwirkend sperren (z. B. vorhandene Arc Furnace bleibt nutzbar, auch wenn ihr Rezept teurer wird).

## Nächster Schritt (Phase 2)

🔵 10–15 Schlüssel-Meilensteine definieren, jeweils mit:
- benötigten Pfaden / Kreuzungspunkten
- Kostenrahmen
- zwingend oder optional
- Auswirkung auf den Weltstand
