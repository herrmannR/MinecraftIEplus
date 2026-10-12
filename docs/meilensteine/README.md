# Meilensteinkarte

> Stand 2026-10-12, Minecraft 1.20.1. **Entwurf**, übertragen aus dem Entwurf für 1.18.2: Twilight Forest → Blue Skies, Beyond Earth → Ad Astra mit vier Raketenstufen, dazu der Blood-Magic-Dungeon auf dem Merkur und die Star-Wars-Planeten als Ziel.

Schlüssel-Meilensteine als Karte (Pfade × Stufen) plus Liste: 23 Meilensteine, 8 Pfade, 9 Stufen.

- **Live-Seite (Artifact, privat):** https://claude.ai/artifact/Hdy6LMxESx5CJ9omjkAMEX
- `data.js`: **die Daten** (Pfade, Stufen, Ziel `GOAL`, Meilensteine, Voraussetzungen samt Linienbeschriftung, Weltstand). Hier wird angepasst.
- `template.html`: Layout, Zeichnen der Karte, Liste der offenen Fragen
- `build.sh`: setzt beides zu `meilensteine.html` zusammen

Ablauf bei Änderungen: `data.js` anpassen → `bash build.sh` → `meilensteine.html` an dieselbe Artifact-URL veröffentlichen.
Später dient die Karte als Kapitelgerüst für FTB Quests.

## Was beschlossen ist und was nicht

- 🟢 Beschlossen (2026-10-12): Erzverteilung (`../03_ERZGENERATION.md`), Treibstoff je Raketenstufe, Blood-Magic-Dungeon auf dem Merkur, Werkzeug-Abschwächung in Blue Skies als gewollte Hürde.
- 🔵 Offen: Magie- und Uran-Teile der Rakete T4, Ad Astra: Rocketed, Cryo Fuel, Reihenfolge und Stufen der einzelnen Meilensteine. Die offenen Fragen stehen unten auf der Seite.
