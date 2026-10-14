# 07 — CROSS-MOD-INTEGRATION

> ⚠️ **Stand 1.18.2, noch nicht auf 1.20.1 geprüft.** Seit 2026-10-11 gilt Minecraft 1.20.1 mit geänderter Mod-Liste (`00_MODBASIS.md`). Dieses Dokument wird beim Neustart der Analyse überarbeitet; Einstieg und TODO-Liste: `00_STATUS.md`.

> Befunde aus den Modpfad-Seiten (was die Mods von sich aus tun und den Progressionsweg berührt) stehen für 1.20.1 in `modpfade/CROSSMOD_AUFFAELLIGKEITEN.md`.

## Zweck

Gezielte Verbindung der Mods durch Ressourcen, Rezepte, Maschinen und Progressionsanforderungen.

## Leitprinzip

Cross-Mod-Rezepte sollen echte Synergien schaffen und nicht bloß beliebige Materialien zusammenwerfen.

Ein gutes Rezept beantwortet mindestens eine dieser Fragen:
- Warum braucht der Spieler beide Mods?
- Welche neue Produktionskette entsteht?
- Welche Ressource wird dadurch wertvoll?
- Welche bisherige Maschine bekommt eine neue Rolle?

## Geplante Integrationsachsen

### Immersive Engineering ↔ Mekanism

🟡 Industrielle Vorprodukte → High-Tech-Verarbeitung.

### Immersive Engineering ↔ Botania

🔵 Industrielle Komponenten + magische Ressourcen.

### Blood Magic ↔ Tinkers

🔵 spezielle Material-/Werkzeugprogression.

### Mekanism ↔ AE2

🟢 High-Tech-Verarbeitung → spätere Automatisierung.

### Botania ↔ AE2

🔵 magische Ressourcen als optionale/gezielte Komponenten.

### Blood Magic ↔ Mekanism

🔵 spezielle High-End-Materialien/Prozesse.

### Tinkers ↔ Tech-Mods

🔵 fortgeschrittene Werkzeugmaterialien über mehrere Pfade.

## Integrationsmatrix

| Quelle | Ziel | Ressource/Rezept | Zweck | Progressionsstufe | Status |
|---|---|---|---|---|---|
| IE | Mekanism | 🔵 | 🔵 | 🔵 | 🔵 |
| Botania | IE | 🔵 | 🔵 | 🔵 | 🔵 |
| Blood Magic | Tinkers | 🔵 | 🔵 | 🔵 | 🔵 |
| Mekanism | AE2 | 🔵 | 🔵 | 🔵 | 🔵 |
| Botania | AE2 | 🔵 | 🔵 | 🔵 | 🔵 |

## Tinkers in den höheren Stufen (🟢 1.20.1, User-Entscheidung 2026-10-12)

Dieser Abschnitt gilt für 1.20.1; Befunde aus den JARs der Testinstanz. Alles ist im Spiel ungetestet, konkrete Rezepte und Werte sind noch nicht festgelegt.

### Beschlossene Wege

| Kürzel | Weg | Umsetzung | Stand |
|---|---|---|---|
| A | Seltene Tinkers-Flüssigkeiten als Zutat in Rezepten anderer Mods: Blazing Blood, Liquid Soul, Ichor, Molten Ender, Manyullyn, Queen's Slime. | KubeJS | 🔵 welche Rezepte |
| C | Planeten-Metalle aufwerten: Desh, Ostrum und Calorite sind in TCIntegrations nur Stufe 2 (Eisen-Niveau). Stufe und Werte per Datapack anheben. | `kubejs/data` | 🔵 Werte |
| D | Eigene Tinkers-Materialien für Metalle ohne Material: Hellforged, Terrasteel, Elementium, Alfsteel, Blue-Skies-Metalle, Star-Wars-Metalle. | `kubejs/data`, Texturen | 🔵 Liste, Werte, Traits |
| E | Modifier an späte Items binden (zusätzliche Slots, starke Modifier). Giselle liefert bereits vier Raumfahrt-Modifier. | KubeJS | 🔵 welche Items |
| F | Gießen als Pflichtschritt: einzelne Raketenteile entstehen nur am Gießtisch oder im Gießbecken. | KubeJS | 🔵 welche Teile |

Nicht beschlossen: Weg B (Schmelzerei-Brennstoff aus Tech-Flüssigkeiten) und zusätzliche Addons (Tinkers' Advanced, TiCEX).

### Schmelzen und Legieren

🟢 Regel: Jedes Metall soll sich in der Schmelzerei **einschmelzen** lassen. Die **Herstellung** einer Legierung bleibt bei der Maschine, zu der sie gehört.

Barren ohne Schmelzrezept (Stand der JARs):

| Metall | Mod | Grund |
|---|---|---|
| Terrasteel, Elementium | Botania | kein Rezept, keine Flüssigkeit |
| Alfsteel, Gaia-Barren | MythicBotany, Botania | kein Rezept, kein `forge:ingots`-Tag |
| Falsite, Ventium, Horizonite | Blue Skies | nur eigene Tags (`blue_skies:ingots/…`) |
| Durasteel | Galaxy in a Cube | kein Tag, kein Rezept |
| Soulsteel | Tinkers | Barren ohne Schmelzrezept |

🔵 Erze nur vorsichtig ergänzen: Der Ertrag der Schmelzerei beim Erzschmelzen ist nicht geprüft und konkurriert mit IE und Mekanism.

Legierungen in der Schmelzerei:

| Legierung | Entscheidung |
|---|---|
| Refined Obsidian (1475 °C, aus Obsidian, Diamant, Osmium) | 🟢 Rezept entfernt, bleibt Mekanism (`crossmod/tinkers_legierungen.js`) |
| Bronze, Konstantan, Elektrum, Invar | 🟢 bleiben |
| Stahl, Refined Glowstone | kein Rezept vorhanden, bleibt so |
| Terrasteel, Alfsteel und andere Magie-Metalle | 🟢 kein Legierungsrezept anlegen |

### Blood-Smeltery

🟢 Das Addon bleibt (User, 2026-10-12). Es liefert, was sich per Datapack nicht nachbauen lässt: LP-Eigenschaften für Werkzeuge (Bloodstained, Exsanguinate, Transfusion, Ambrosiac, Sentience) und Demon Will als Flüssigkeit.

🟢 Entfernt, weil sie Blood Magic abkürzen (`crossmod/blood_smeltery.js`):
- Life Essence als Legierung aus Demon Will, Liquid Soul und Blut bzw. Fleischsuppe (LP ohne Opfer am Altar).
- Blank Slate und Blank Rune aus Blood-Seared Stone gießen.

Das Einschmelzen von Slates und Runen zu Blood-Seared Stone bleibt; die Flüssigkeit dient nur noch als Werkzeugmaterial.

## Verbotene Integrationsform

Keine willkürlichen „5 Eisen + 2 Mana = High-Tech-Teil“-Rezepte ohne systemische Begründung.
