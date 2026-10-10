# Meilensteinkarte

**Entwurf (noch nicht beschlossen).** Phase-2-Vorschlag: Schlüssel-Meilensteine als Karte (Pfade × Stufen) plus Liste.

- **Live-Seite (Artifact, privat):** https://claude.ai/artifact/Hdy6LMxESx5CJ9omjkAMEX
- `data.js`: **die Daten** (Pfade, Stufen, Meilensteine, Voraussetzungen samt Linienbeschriftung, Weltstand). Hier wird angepasst.
- `template.html`: Layout und Zeichnen der Karte
- `build.sh`: setzt beides zu `meilensteine.html` zusammen

Ablauf bei Änderungen: `data.js` anpassen → `bash build.sh` → `meilensteine.html` an dieselbe Artifact-URL veröffentlichen.
Später dient die Karte als Kapitelgerüst für FTB Quests.
