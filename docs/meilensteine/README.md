# Meilensteinkarte

> Stand 2026-10-14, Minecraft 1.20.1. **Entwurf**, am 2026-10-14 nach der Story (`../18_STORY.md`) umgebaut.

Schlüssel-Meilensteine als Karte (Pfade × Kapitel) plus Liste: 50 Meilensteine, 9 Pfade, 16 Kapitel. Je Mod mehrere Stufen nach den Modpfad-Seiten (feiner aufgeteilt am 2026-10-14); IDs mit Pfad-Kürzel (TK, IE, BO, BM, MK, AE, BS, RF, SW).

- **Part 1 · Finden des Meisters** (K1 bis K11): vom Einschlag der Kapsel bis zur Rakete T4 nach Glacio.
- **Part 2 · Ausbildung und Rückkehr** (K12 bis K16): Alfheim, Rakete T5 nach Endor, Gaia, Rakete T6, Star-Wars-Welten, Rakete T7 nach Mandalore. Nur grob skizziert, wird später besprochen.
- Neue Spalte **„Star Wars · Story“** neben der Raumfahrt: Droide und erste Quest, Ausbildung, Star-Wars-Welten.
- Ein **„?“** an einer Linie heißt: Mod oder Quelle steht fest, das genaue Item noch nicht.
- Jede Karte hat eine Zeile „Story“; was die Mitspieler erst später erfahren sollen, steht eingeklappt unter „Spoiler“.

Dateien:

- **Live-Seite (Artifact, privat):** https://claude.ai/artifact/Hdy6LMxESx5CJ9omjkAMEX
- `data.js`: **die Daten** (Pfade, Stufen, Story-Parts `PARTS`, Ziel `GOAL`, Meilensteine mit Voraussetzungen, Story, Spoiler und Weltstand). Hier wird angepasst.
- `template.html`: Layout, Zeichnen der Karte, Fragenkatalog
- `build.sh`: setzt beides zu `meilensteine.html` zusammen

Ablauf bei Änderungen: `data.js` anpassen → `bash build.sh` → `meilensteine.html` an dieselbe Artifact-URL veröffentlichen.
Später dient die Karte als Kapitelgerüst für FTB Quests: 🟢 **Jede Zeile (Stufe) wird ein Kapitel** (User, 2026-10-14). Kommt in einer Zeile ein Teil des Packs zum ersten Mal vor, schaltet das Kapitel dazu passende Nebenquests frei (kurze Ketten, höchstens drei bis vier Quests; Einzelheiten in `../18_STORY.md`).

## Was beschlossen ist und was nicht

- 🟢 Beschlossen (2026-10-12): Erzverteilung (`../03_ERZGENERATION.md`), Treibstoff je Raketenstufe T1 bis T3, Blood-Magic-Dungeon auf dem Merkur, Werkzeug-Abschwächung in Blue Skies als gewollte Hürde.
- 🟢 Beschlossen (2026-10-13): Story in zwei Parts; Star-Wars-Welten erst mit den Raketen T5 und T6; Alfheim und Gaia erst in Part 2; der Elf verlangt Boss-Items aus Blue Skies und Tech-Erzeugnisse und gibt dann das Rezept für die Rakete T4.
- 🔵 Vorschlag von Claude, zu bestätigen: Runenaltar auf P2 vorgezogen und Pflicht; Everdawn und Blue-Skies-Bosse Pflicht.
- 🔵 Offen: alle Platzhalter mit „?“, die Stufen der einzelnen Meilensteine, ganz Part 2. Der Fragenkatalog steht unten auf der Seite.
