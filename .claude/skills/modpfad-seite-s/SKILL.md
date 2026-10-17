---
name: modpfad-seite-s
description: Sparsame Fassung von modpfad-seite – erstellt eine Modpfad-Seite mit möglichst wenig Tokens, indem Buch, Rezepte und Sprachdateien per Skript im Scratchpad verdichtet und nur kompakte Ausgaben gelesen werden; Bilder nur aus flachen Texturen, keine gezeichneten 3D-Modelle. Verwenden, wenn der User /modpfad-seite-s aufruft oder eine Modpfad-Seite ausdrücklich „sparsam“, „tokensparend“ oder „billig“ haben will. Erprobt an AE2 (2026-10-15).
---

# Modpfad-Seite, sparsam

Dieselbe Seite wie mit dem Skill `modpfad-seite`, aber billiger gebaut. **Alle Regeln von `modpfad-seite` gelten unverändert**: nur JARs und Bücher als Quelle, erst lesen dann schreiben, Namen aus der Sprachdatei, Aufbau und Schema laut `../modpfad-seite/references/data-schema.md`, Prüfung, WISSEN.md, README, Oberseite, Crossmod-Datei. Dieser Skill ändert nur, **wie** gelesen wird und welche Bilder vorkommen. Bei Zweifeln an einem Schritt die entsprechende Stelle in `../modpfad-seite/SKILL.md` nachlesen, nicht die ganze Datei.

Die Skripte liegen in `.claude/skills/modpfad-seite-s/scripts/` (`<skill>` unten).

Der User hat diesen Weg gewählt, weil das Lesen ganzer JAR-Inhalte teuer ist. Wiki-Seiten sind keine Alternative: nicht billiger (3–8k Tokens je Seite) und gegen die Quellenregel.

## Grundsatz: verdichten, dann lesen

Nie viele Einzeldateien öffnen und nie große Rohausgaben in den Kontext holen. Stattdessen:

1. Werkzeug schreibt in eine Datei im Scratchpad.
2. Erst zählen (`wc -l`, `cut | sort | uniq -c`), dann filtern, dann nur das Gefilterte lesen.
3. Lange Zeilen kappen (`cut -c1-220`), Wiederholungen (Farben, Stufen, Holzarten, Facades) **vor** dem Lesen herausfiltern.
4. Gezielt nachschlagen (`grep`) statt nochmals alles zu lesen.

## Ablauf

### 0. Vorwissen
`docs/modpfade/<mod>/WISSEN.md` (falls vorhanden) und die WISSEN-Notizen verbundener Mods nur per `grep` nach dem Mod-Namen durchsuchen; `CROSSMOD_AUFFAELLIGKEITEN.md` ebenso (`grep -n -i "<mod>\|<material>"`).

### 1. Umfang
Addons und Brücken per `grep -n -i "<mod>" docs/00_MODBASIS.md`. JAR-Namen per `ls <instanz>/mods | grep -i`.

### 2. Entpacken
Wie im Hauptskill (`tools/extract.sh`, Vanilla-JAR unter `ATLauncher/libraries/net/minecraft/client/1.20.1/client-1.20.1.jar`), Arbeitsordner im Scratchpad.

### 3. Buch billig erschließen
- **GuideME-Handbuch** (`assets/<ns>/<ns>guide/*.md`, z. B. AE2): `bash scripts/guide_index.sh <guide-ordner>` gibt eine Zeile je Seite (Pfad, Eltern, Titel, Position, Item-IDs) – das ist die Checkliste. Die Einstiegsseite (`getting-started.md` o. ä.) mit `bash scripts/guide_text.sh <datei>` ganz lesen; sie gibt die Phasen vor. Von den übrigen Seiten nur `guide_text.sh <datei> 8` (erste Zeilen) und für Zahlen `guide_text.sh <datei> 0 '[0-9]'`.
- **Patchouli**: `tools/PatchouliDump.java` in eine Datei, dann erst Kategorien/Einträge (`grep`) lesen, Seitentexte nur für die Schritte, die man gerade schreibt.
- **Eigenes Journal-Format** (Blue Skies: `data/<ns>/<ns>/journal/entries`): erst eine Indexzeile je Eintrag bauen (Abschnitt, Freischaltbedingung, Icon), dann die Texte. Die Texte können in einer eigenen Sprachdatei liegen (`assets/<ns>/<ns>/journal_lang/en_us.json`), nicht in `lang/en_us.json`: bei leerem `grep` erst `grep -rl "<schlüssel>" assets` statt zu raten. Journal-Bilder unter `textures/gui/journal/icons` sind flache Bilder und erlaubt.
- **Boss-Beute** kann in eigenen Loot-Tabellen statt unter `entities/` stehen (Blue Skies: `loot_tables/loot_bags/<boss>/`); leere Entity-Tabellen sind ein Hinweis darauf.
- **Kein Buch**: Advancement-Baum laut Hauptskill, aber nur `parent` und Titel-Schlüssel per `grep` ausgeben.
- **Citadel-Buch** (Alex's Mobs: `assets/<ns>/book/<buch>/*.json` + `en_us/*.txt`): oft flach (alle `parent: root.json`), dann gibt der Advancement-Baum mit Titel und Beschreibung (`parent`, `title`, `.desc` aus der Sprachdatei, eine Zeile je Advancement) das Gerüst. Die Texte mit **einem** `awk`-Lauf in eine Datei „`<eintrag>| <satz>`“ (ein Satz je Zeile) schreiben und nur noch `grep`en. Nie eine Shell-Schleife über viele Textdateien je Suchbegriff – unter Windows läuft das wegen der Prozessstarts in den 2-Minuten-Timeout.
- **Beute im Code**: Viele Mob-Mods vergeben Beute außerhalb der Loot-Tabellen (Scheren, Abwurf, Belohnung). Was in keiner Tabelle steht, im Buchtext per `grep` suchen, nicht weglassen und nicht raten.

### 4. Rezepte billig erschließen
```bash
java -Dstdout.encoding=UTF-8 tools/RecipeDump.java $JARS <kürzel>/data/<ns>/recipes > $S/rez.txt
cut -d/ -f1 $S/rez.txt | sort | uniq -c          # Ordner und Mengen
bash <skill>/scripts/recipe_filter.sh $S/rez.txt > $S/kern.txt; wc -l $S/kern.txt
```
Das zweite Argument von `recipe_filter.sh` ist ein Ausschluss-Muster für mod-eigene Wiederholungen, die `uniq -c` zeigt. Bei AE2 brachte `'^(matter_cannon|entropy)/|_storage:|portable_|tools/(certus|nether)_quartz_(axe|hoe|shovel|sword)|tools/fluix_(axe|hoe|shovel|sword)'` die 487 Rezepte auf 170 Zeilen. Davon reicht je ein Beispiel auf der Seite.

`recipe_filter.sh` wirft Farbvarianten (Ergebnis-ID endet oder beginnt mit einer der 16 Farben), Stufen/Treppen/Mauern, Facades, Steinmetz- und Deko-Ordner raus und kürzt Zeilen. Bleibt mehr als ~250 Zeilen, nach Ordnern getrennt lesen und weitere Wiederholungen ausschließen. Einzelne fehlende Rezepte danach per `grep` aus `rez.txt` holen.

Addons: Rezeptordner mit `find <kürzel>/data -type d -name recipes | grep -v advancements` suchen – sonst landet man in den Rezept-Advancements.

### 5. Namen, Tags, Config, Worldgen
- Namen der Addons: `grep -E '"(item|block)\.' en_us.json` in eine Zeile mit `tr '\n' ';'`.
- Namen, bei denen man unsicher ist: eine einzige `grep -E '"(item|block)\.<ns>\.(a|b|c)"'`-Abfrage.
- Tags, Worldgen und Config: `tr -d ' \n' < datei | cut -c1-250`.
- Beute außerhalb der Loot-Tabellen steht oft in `data/<ns>/loot_modifiers/*.json` (Farmer's Delight: Messer-Beute, Truhenbeute); eine Zeile je Datei mit `tr -d ' \n\r' | grep -o '"item":"[^"]*"\|"chance":[0-9.]*\|"type":"[^"]*"\|"tag":"[^"]*"' | sort -u | tr '\n' ' '`. Biome der Weltgenerierung stehen in `data/<ns>/forge/biome_modifier/*.json` (Schlüssel `biomes` oder `allowed_biomes`/`denied_biomes`) – erst eine Datei ansehen, welcher Schlüssel benutzt wird.

### 6. Schreiben
`data.js` in einem Zug schreiben, nur mit Fakten aus den gelesenen Ausgaben. **Jeden Satz, der über die gelesenen Zeilen hinausgeht, vor dem Veröffentlichen per gezieltem `grep` belegen oder streichen** – beim AE2-Lauf waren das rund ein Dutzend Stellen (Kabelfarben, Level Emitter, Quantum-Bridge-Paarung, Werkzeugfunktionen, Transform-Bedingung „Explosion“ statt „Wasser“). Rezepttyp-Bedingungen (`circumstance`, `mode`) im Roh-JSON prüfen, wenn RecipeDump sie verkürzt.

### 7. Bilder – nur flache Texturen
- Nur `"<ns>:item/..."` und `"<ns>:block/..."` aus `textures/`. **Kein `ObjRender`, keine `render:`-Verweise** (Vorgabe des Users).
- Verfügbare Texturen einmal kompakt auflisten: `ls textures/item | sed 's/.png//' | grep -v <farben> | tr '\n' ' '`.
- Teile ohne flache Textur (Kabelteile unter `textures/part/`, Multiblock-Teile, Entities) → `null`.
- `mkicons.sh` meldet `FEHLT`: im Unterordner suchen (`find textures -name "*<name>*"`), z. B. `block/drive/drive_front`, `block/chest/front`; sonst `null`.

### 8. Prüfen
`NameCheck` (Ziel 0), `mkicons` (Ziel 0 fehlend), `build.sh <mod>`, dann Vorschau mit `preview_start` auf `file:///…/<mod>.html` und **ein** `javascript_tool`-Aufruf (Textlänge, Bildzahl) plus ein Screenshot mit `scale: 0.5`. Keine ganze Seite lesen.

### 9. Veröffentlichen und nachziehen
- `<mod>.html` als Artifact (neue Seite: ohne `url`, mit `icon`).
- `WISSEN.md` nach Vorlage des Hauptskills; zusätzlich unter „Wo die Quellen liegen“ festhalten, **wie** billig gelesen wurde (Befehle, Filter), damit die nächste Sitzung es wiederholen kann. ID-Tabelle mit `IdIndex.java` anhängen.
- README (Tabelle, „Offen“), `CROSSMOD_AUFFAELLIGKEITEN.md` (Abschnitt je Mod, Kopfzeile Stand).
- **Oberseite ohne Neuzeichnen aller Mods**: das Kachelbild aus `<mod>/icons.js` per `grep '^ *"<verweis>":'` in die zweite Zeile von `uebersicht/icons.js` kopieren (Komma am Zeilenende; die Zeile erst in eine Datei schreiben und mit `awk 'NR==2{getline l < f; print l} {print}'` einfügen – `sed "1a\\$zeile"` fügt den Variablennamen statt des Inhalts ein), dann Eintrag in `MODS`, Mod aus `PLANNED` streichen, `bash build.sh uebersicht`. Nicht `mkicons.sh uebersicht` laufen lassen – das löscht die gezeichneten Bilder der anderen Mods.
- Oberseite an die bestehende URL veröffentlichen: Der erste Versuch wird abgelehnt und zeigt nur den Diff; sind die Unterschiede ausschließlich die eigenen Änderungen, dieselbe Datei noch einmal schicken (beim zweiten identischen Versuch kann nochmals eine Ablehnung kommen; dann ein drittes Mal). Nicht `action: read` – das holt die ganze Seite.
- Sammelseite: nur die Quellen nachziehen (`sub_links`-Zeile, `for`-Liste in `docs/sammelseite/build.sh`, `PAGES` in `shell.html`), **mit dem Edit-Werkzeug**, nicht mit `sed` (die Zeilen enthalten `#`, `'` und `\`). Neu bauen und veröffentlichen nur auf ausdrücklichen Befehl; sonst im Bericht sagen, dass das Handbuch nicht mehr aktuell ist.
- Widerspricht ein Befund einer Projektentscheidung (`00_STATUS.md`), dort nur einen Hinweis anfügen, die Entscheidung nicht ändern.

## Abschlussbericht
Wie im Hauptskill, zusätzlich ein Satz, was beim sparsamen Lesen schiefging oder teurer war als gedacht, und ob das in diesem Skill nachgetragen wurde.
