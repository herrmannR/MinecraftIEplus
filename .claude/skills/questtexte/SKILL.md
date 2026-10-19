---
name: questtexte
description: Schreibt beschreibende Questtexte für das FTB-Questbuch zu einem Mod – je Meilenstein Quests mit Aufgabe (Item-ID) und Text, aus den vorhandenen docs-Quellen (WISSEN.md, data.js der Modpfad-Seite, Meilensteinkarte), ohne Story. Bei Mods ohne Buch (Mekanism u. a.) führen die Texte Schritt für Schritt als Ersatz für das Buch; bei Mods mit Buch (IE, Tinkers, Botania, Blood Magic, AE2, Ad Astra, Blue Skies) nennen sie nur Ziel, Fundstelle im Buch und die Pack-Änderungen. Verwenden, wenn der User /questtexte aufruft oder Questtexte, Questbuch-Texte, Quest-Beschreibungen oder einen „Ersatz für das fehlende Buch“ für einen Mod haben will. Erprobt an Mekanism (ohne Buch) und Immersive Engineering (mit Buch), 2026-10-17.
---

# Questtexte für einen Mod

Ergebnis: `docs/questtexte/<mod>.md`, Eintrag in `docs/questtexte/README.md`, Zeile im Changelog. Vorbild für Aufbau und Ton: `docs/questtexte/mekanism.md`. Davon nur den Kopf und **einen** Meilenstein-Abschnitt lesen, nicht die ganze Datei.

## Grundregeln

- **Nur Sachtexte.** Keine Story, keine Figuren, keine Dialoge: Die Story schreibt der User (Memory `story-rolle`). Wo eine Quest an die Story gehängt wird, setzt der User selbst einen Satz davor.
- **Quellen nur aus `docs/`** und, für Prüfungen, aus den JARs der Testinstanz. Keine Artifact-Seiten oder gebauten HTML-Seiten lesen, kein Wiki.
- **Nichts erfinden.** Was nicht in den Quellen steht (typisch: Multiblock-Bauregeln, die nur im Code stehen), entweder weglassen oder aus Spielwissen schreiben **und mit 🔵 „im Spiel prüfen“ markieren**. Am Ende im Abschnitt „Offen vor dem Einbau“ sammeln.
- **Anrede „du“**, Item-Namen englisch wie im Spiel, deutsche kurze Sätze.
- **Pack-Änderungen mit ⚙️ markieren** und in eine Tabelle am Ende übernehmen (Änderung, wo im Text, Stand). Sie gehören in jeden Text, auch bei Mods mit Buch, weil das Buch sie nicht kennt. Noch nicht umgesetzte Entscheidungen so formulieren, dass der Text nach der Umsetzung stimmt, und den Stand in der Tabelle nennen.

## Erklärtiefe: erst nachsehen, ob der Mod ein Buch hat

`grep -n -i "<mod>" docs/19_HILFEBUECHER.md`

| Fall | Text je Quest | Aufwand |
|---|---|---|
| **Ohne Buch** (Mekanism, Rocketed, Giselle, Applied Mekanistics, Galaxy in a Cube, Immersive Aircraft …) | Was die Maschine tut, Rezept nur wo es für den nächsten Schritt zählt, Kette als Pfeilfolge, Zahlen aus der Config, Fallstricke (Strom, Seiten, Sicherheit). 3–8 Sätze. | voll |
| **Mit Buch** (IE, Tinkers, Botania, Blood Magic, AE2, Ad Astra, Blue Skies, Star Wars Planets, Alex's Mobs) | Ein bis zwei Sätze zum Ziel, dann **„Buch: <Buchname> → <Kapitel> → <Eintrag>“**, dann nur die ⚙️-Abweichungen. Keine Rezepte, keine Erklärungen, die im Buch stehen. | gering |

Bei Mods mit Buch richten sich die Quests nach dem Buch: Reihenfolge und Zuschnitt der Quests folgen den Kapiteln des Buchs, soweit sie zu den Meilensteinen passen. Das spart Tokens, weil keine Rezepte und Erklärungen gelesen werden müssen; gebraucht werden nur die Titel der Kapitel und Einträge.

Halbes Buch (Blue Skies: Journal ohne gesicherte Progression) → wie „ohne Buch“ für den Weg zu den Bossen, sonst wie „mit Buch“.

## Ablauf

### 1. Vorwissen (billig)
- `docs/modpfade/<mod>/WISSEN.md` ganz lesen. Es enthält Progression, Zahlen, Fundstellen im JAR und die ID-Tabelle.
- Meilensteine des Mods: Pfad-Kürzel aus dem Kommentar oben in `docs/meilensteine/data.js` (TK, IE, BO, BM, MK, AE, BS, RF, SW), dann `grep -n -A4 'id:"<KÜRZEL>[0-9]' docs/meilensteine/data.js`. Kapitel dazu: `grep -n "<Mod-Name>" docs/01_PROGRESSION.md`.
- Pack-Änderungen: `grep -n -i "<mod>\|<namespace>" docs/01_PROGRESSION.md docs/00_STATUS.md docs/20_ENTSCHEIDUNGEN.md docs/15_RAUMFAHRT.md docs/03_ERZGENERATION.md docs/modpfade/CROSSMOD_AUFFAELLIGKEITEN.md` und `grep -rn "<namespace>:" kubejs/server_scripts kubejs/startup_scripts | cut -c1-200`. Nur die Treffer lesen.
- Story-Bezüge nur zur Einordnung: `grep -n -i "<mod>" docs/18_STORY.md` (z. B. geplante Nebenquest-Reihen wie die Erzvervielfachung). Nicht übernehmen, nur beachten.

### 2. Inhalt holen
- **Ohne Buch:** `docs/modpfade/<mod>/data.js` ist die Hauptquelle (Rezepte, Texte, Zahlen). Erst die Gliederung: `grep -n '^\s*t: ' data.js`. Dann nur die Phasen lesen, die man gerade schreibt (`Read` mit `offset`/`limit`). Ganz lesen nur, wenn die Datei klein ist (unter ~30 KB) oder alle Phasen gebraucht werden. Bei Mekanism (57 KB) war das Ganzlesen der größte Posten.
- **Mit Buch:** Aus `WISSEN.md` den Pfad des Buchs im JAR nehmen (Abschnitt „Wo die Quellen liegen“). Dann nur Titel holen, eine Zeile je Eintrag, zum Beispiel Patchouli: `unzip -p <jar> '<buchpfad>/en_us/entries/*/*.json' | grep -o '"name": *"[^"]*"'` bzw. die Kategorie aus dem Dateipfad. IE-Handbuch: `manual/autoload.json` gibt Kapitel und Einträge, der Titel ist die erste Zeile von `manual/en_us/<eintrag>.txt` (den Ordner einmal in den Scratchpad entpacken, dann ein `awk 'FNR==1'` über alle Dateien; Addons wie Petroleum haben ein eigenes `autoload.json`). Botania (und andere Patchouli-Bücher mit Sprachschlüsseln): `name` ist nur ein Schlüssel wie `botania.entry.flowers`, also gleich `unzip -p <jar> assets/<ns>/lang/en_us.json | grep -oE '"<ns>.(entry|category).[A-Za-z0-9_]+": *"[^"]*"'` und die Kategorie aus `unzip -Z1` (Ordner unter `entries/`). Patchouli mit Klartext-Namen (Blood Magic): alle Einträge in einem Aufruf mit Dateinamen per `unzip -c <jar> $(unzip -Z1 <jar> | grep '<buchpfad>/en_us/.*\.json$') | grep -oE 'inflating: [^ ]*|"name": *"[^"]*"'` (ein Muster mit `*` statt der Liste liefert bei `unzip -c` nichts). Nicht je Datei `unzip -p` in einer Schleife (dauert über 2 Minuten), und beim Entpacken der Botania-JAR in den Scratchpad kam per `unzip -d` nichts an. Tinkers (eigenes Format): Abschnittsnamen aus `unzip -p <jar> assets/tconstruct/book/<buch>/en_us/language.lang`; Eintragsnamen (intern) per Schleife über die wenigen `book/<buch>/sections/*.json` aus `unzip -Z1` mit `grep -oE '"(title|name)": *"[^"]*"'` (schnell). Nicht nach `en_us/<abschnitt>/*.json` suchen, das gibt es nur bei einzelnen Büchern. Python gibt es nicht. GuideME nach dem Skill `modpfad-seite-s`, Abschnitt 3. Buchtexte nicht lesen.

### 3. Gliedern
- Ein Abschnitt je Meilenstein (`## MK1 · Name (K3 Kapitel)`), darin die Quests in Spielreihenfolge.
- Quest-ID `<KÜRZEL><n>-<nn>`, Titel, Art (**Hauptweg** = nötig für spätere Ziele, **Nebenquest** = stellt den Mod in der Breite vor, Ketten von höchstens 3–4).
- Querschnittsthemen, die über mehrere Meilensteine laufen (Erzvervielfachung, Strahlung …), als eigene Nebenquest-Reihe mit Tabelle.
- Vor gefährlichen Teilen (Explosion, Strahlung, Bossen) einen Warnhinweis als Zitatblock.

### 4. Schreiben
Vorlage je Quest:

```markdown
### MK3-03 Purification Chamber: Erz ×3 · Hauptweg
**Aufgabe:** `mekanism:purification_chamber`

Text …
Kette: Erz → … → Barren.
```

Bei Mods mit Buch:

```markdown
### BO2-01 Runic Altar · Hauptweg
**Aufgabe:** `botania:runic_altar`

Ziel in ein bis zwei Sätzen.
Buch: Lexica Botania → <Kapitel> → <Eintrag>.
⚙️ Abweichung im Pack …
```

Aufgaben: Items als ID; Flüssigkeiten als `Flüssigkeit <id>`; Gase und Ähnliches, die FTB Quests nicht direkt prüfen kann, als „in einem Tank“ beschreiben. Mehrere IDs mit Komma.

Datei in **einem** Zug schreiben, mit Kopf (Stand, Quellen, Hinweise zur Verwendung wie in `mekanism.md`), am Ende die ⚙️-Tabelle und „🔵 Offen vor dem Einbau“.

### 5. IDs prüfen (ein Aufruf)
Alle IDs aus der Datei, die nicht in der ID-Tabelle von `WISSEN.md` stehen, mit **einer** Abfrage gegen die Sprachdatei im JAR prüfen (Instanz: `C:\Users\richa\AppData\Roaming\ATLauncher\instances\Minecraft1201withForge\mods`):

```bash
unzip -p <jar> "assets/<ns>/lang/en_us.json" | grep -oE '"(item|block|fluid|gas)\.<ns>\.(id1|id2|id3)"'
```

Die Sprachdatei ist eine einzige lange Zeile: immer `grep -o`, nie die ganze Zeile ausgeben. Fehlt eine ID, korrigieren oder als 🔵 markieren. Neue JAR-Funde in `WISSEN.md` nachtragen (Memory `wissen-pflegen`).

### 6. Nachziehen
- `docs/questtexte/README.md`: Zeile in der Tabelle, Mod aus „Noch offen“ streichen.
- `docs/20_ENTSCHEIDUNGEN.md`: neue Fragen aus „Offen vor dem Einbau“, die der User entscheiden muss, als nächste freie F-Nummer eintragen; reine Prüfungen im Spiel als P-Nummer. Schon vorhandene Fragen nur um den Mod ergänzen.
- `docs/12_CHANGELOG.md`: kurzer Eintrag nach dem Format oben in der Datei.
- `00_STATUS.md` nur, wenn sich am Stand von `questtexte/` etwas Grundsätzliches ändert.
- Nichts committen, kein Artifact, Handbuch nicht neu bauen.

## Abschlussbericht
Kurz: Datei, Zahl der Quests, Art (voll oder mit Buch), die wichtigsten 🔵-Punkte und ⚙️-Abhängigkeiten von noch offenen Entscheidungen. Ein Satz, was teurer war als nötig, und ob das hier nachgetragen wurde.
