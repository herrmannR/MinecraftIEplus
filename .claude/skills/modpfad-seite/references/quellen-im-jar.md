# Quellen im JAR

Wo die Angaben für eine Modpfad-Seite liegen und wie man sie liest. Alle Pfade relativ zum entpackten JAR (`<arbeitsordner>/<kürzel>/`). `<ns>` ist der Namespace des Mods.

## Inhalt

1. Buch und Reihenfolge
2. Namen
3. Rezepte
4. Multiblöcke und Strukturen
5. Welt, Beute, Mobs
6. Zahlen und Config
7. Pack-Bezug: installierte Mods, Tags, Bedingungen
8. Lesen ohne jq

## 1. Buch und Reihenfolge

Das Buch bestimmt Phasen und Reihenfolge. Zuerst nachsehen, welche Form der Mod nutzt:

| Form | Ort | Reihenfolge | Text |
|---|---|---|---|
| Patchouli | `assets/<ns>/patchouli_books/<buch>/en_us/` oder `data/<ns>/patchouli_books/…`; darin `categories/` und `entries/<kategorie>/` | `sortnum` der Kategorien und Einträge, `priority`, `advancement` (schaltet frei) | direkt im Eintrag (`"text"`) oder als Schlüssel in `assets/<ns>/lang/en_us.json` (Botania: `botania.page.<eintrag><n>`, Kurzbeschreibung `botania.tagline.<eintrag>`) |
| IE-Handbuch | `assets/<ns>/manual/autoload.json` (Kapitel und Reihenfolge), `manual/en_us/<eintrag>.txt` | Reihenfolge in `autoload.json` | Textdatei; `<config;…>` und `<link;…>` sind Platzhalter |
| Mantle-Buch (Tinkers) | `assets/<ns>/book/<buch>/en_us/<abschnitt>/*.json`, Bilder in `book/images/`, Strukturen in `book/structures/` | Bücher in ihrer Bezugsfolge, darin die Abschnitte | `"text"`-Felder |
| GuideME (AE2) | `assets/<ns>/ae2guide/` als Markdown | `navigation` im Kopf der Dateien | Markdown |
| kein Buch | `data/<ns>/advancements/` | `parent`-Ketten ergeben den Baum | `title`/`description` als Sprachschlüssel |

Ein Patchouli-Buch gibt `java -Dstdout.encoding=UTF-8 tools/PatchouliDump.java <buch>/en_us > buch.txt` vollständig und lesbar aus: Kategorien und Einträge nach `sortnum`, Seitentexte ohne Formatierung, Rezept- und Multiblock-Verweise je Seite. Die Datei dann von vorn bis hinten lesen. Hat das Buch keine `sortnum`, steht die Reihenfolge oft in einem Einleitungs-Eintrag (Blood Magic: „Tiers & Getting Started“ in der Kategorie utility); dort zuerst nachsehen.

Patchouli-Einträge können auch den Aufbau eines Multiblocks enthalten (`"multiblock": {"mapping": …, "pattern": …}`); das ist dann die Quelle für den Bauplan.

Addons hängen ihre Kapitel oft in das Buch des Hauptmods ein (eigener Ordner unter dem Namespace des Hauptmods im Addon-JAR, Texte in einer eigenen Sprachdatei).

## 2. Namen

`assets/<ns>/lang/en_us.json`: `item.<ns>.<id>`, `block.<ns>.<id>`, `fluid.<ns>.<id>`, bei Tinkers auch `modifier.<ns>.<id>` und `material.<ns>.<id>`.

Ein Item ohne Eintrag hier gibt es in der Version in aller Regel nicht, auch wenn seine Textur noch im JAR liegt.

## 3. Rezepte

`data/<ns>/recipes/` (Unterordner je Maschine oder Art). Ein Addon legt Rezepte für fremde Maschinen unter seinem eigenen Namespace ab; nach dem Rezepttyp suchen, nicht nach dem Ordner.

Worauf achten:

- `"type"` nennt die Maschine (`immersiveengineering:crusher`, `botania:mana_infusion`, `tconstruct:alloy` …).
- Mengen: `count`, `amount` (Flüssigkeit in mB), `mana`, `energy`, `time`, `temperature`.
- `"tag"` statt `"item"`: Das Rezept nimmt jedes Item des Tags, auch aus anderen Mods. Das sind Crossmod-Punkte.
- Bedingungen: `"conditions"` oder die Hülle `forge:conditional` (siehe 7).
- Nebenprodukte und Chancen (`secondaries`, `byproducts`, `chance`).

## 4. Multiblöcke und Strukturen

- `data/<ns>/structures/**/*.nbt` (IE: `structures/multiblocks/`), Tinkers: `assets/tconstruct/book/structures/`. Auslesen mit `java tools/NbtDump.java <datei>`.
- Patchouli-Multiblock im Bucheintrag (siehe 1).
- 3D-Modelle: `assets/<ns>/models/**/*.obj` oder `*.obj.ie`, daneben `.mtl` mit den Texturen. Zeichnen mit `tools/ObjRender.java`.
- Wie ein Multiblock geformt wird (welcher Block, welches Werkzeug), steht im Buch.

Ist der Aufbau nur im Code des Mods festgelegt, gibt es keine lesbare Quelle. Dann den Buchtext zitieren und den Bauplan als offen führen.

## 5. Welt, Beute, Mobs

- Erze und Strukturen: `data/<ns>/worldgen/` (`configured_feature`, `placed_feature`, `structure`), Biome-Modifier unter `data/<ns>/forge/biome_modifier/`.
- Beute: `data/<ns>/loot_tables/` (`blocks/`, `entities/`, `chests/`) und `loot_modifiers/`.
- Bosse und Mobs: Sprachdatei (`entity.<ns>.<id>`), Loot-Tabelle, Bucheintrag. Bilder gibt es nur, wenn eine Textur als flaches Bild taugt oder ein OBJ-Modell vorliegt.

## 6. Zahlen und Config

Standardwerte stehen im Code. Lesbar sind sie über die erzeugten Config-Dateien der Instanz: `<instanz>/defaultconfigs/`, `<instanz>/config/`, je Welt `saves/<welt>/serverconfig/`. Diese Dateien nur lesen. Auf der Seite dazuschreiben, dass es Standardwerte sind und die Configs des Packs abweichen können.

## 7. Pack-Bezug

- **Installierte Mods**: `<arbeitsordner>/modids.txt` (von `extract.sh` aus dem `[[mods]]`-Teil der `mods.toml` jedes JARs). Nicht den Abschnitt `[[dependencies]]` verwenden.
- **Bedingungen in Rezepten**:
  - `forge:mod_loaded` mit `modid` → gilt nur, wenn die ID in `modids.txt` steht.
  - `forge:tag_empty` / `mantle:tag_filled` → hängt davon ab, ob irgendein installierter Mod den Tag füllt. Prüfen: `grep -rl` nach dem Tag-Pfad unter `data/*/tags/` in allen entpackten JARs. Mods, die nicht entpackt sind, vorher entpacken.
  - Config-Bedingungen (`tconstruct:config` u. ä.) → aus der Config der Instanz lesen; sonst „hängt an der Config“ schreiben.
- **Tags**: `data/<ns>/tags/items|blocks|fluids/…json`; `forge:`-Tags liegen in `data/forge/tags/` jedes Mods, der dazu beiträgt.

## 8. Lesen ohne jq

Eine Rezeptdatei kompakt ansehen:

```bash
tr -d ' \n\t' < data/<ns>/recipes/<pfad>.json | cut -c1-400
```

Bestimmte Felder aus vielen Dateien:

```bash
for f in data/<ns>/recipes/<ordner>/*.json; do
  echo "$(basename $f .json): $(tr -d ' \n\t' < $f | grep -oE '"(item|tag|fluid)":"[a-z_:/]+"|"(mana|amount|count)":[0-9]+' | tr '\n' ' ')"
done
```

Buchtext eines Patchouli-Eintrags aus der Sprachdatei (Formatierungscodes entfernt):

```bash
grep -oE '"<ns>\.page\.<eintrag>[0-9]+": *"[^"]*"' assets/<ns>/lang/en_us.json | sed -E 's/\$\([a-z0-9#:_\/]*\)//g'
```

Textdateien eines Handbuchs:

```bash
tr '\n' ' ' < assets/<ns>/manual/en_us/<eintrag>.txt | sed -E 's/<[^>]*>//g; s/§.//g'
```

Für mehr als etwa hundert Dateien oder verschachtelte Auswertung ein Java-Werkzeug schreiben; `tools/ModifierDump.java` enthält einen kleinen JSON-Leser, den man übernehmen kann.

## Wenn die Mechanik nur im Code steht

Manche Mods haben weder Buch noch Advancement-Baum, und ihre Rezepte stehen nicht in Dateien (Beispiel: Star Wars: Galaxy in a Cube mit seiner Assembly Bench). Dann sind die Klassen des JARs die Quelle. Das zählt als „JAR lesen“; geraten wird trotzdem nichts.

- Klassen entpacken: `jar xf <mod>.jar <paket>` (das `unzip` dieser Umgebung findet Muster wie `*.class` nicht).
- Registrierte Items, Blöcke und Mobs: `javap -p -c -constants reg/<Registry>.class` und nach `String` filtern. Was in Sprachdatei oder Texturen steht, aber hier fehlt, gibt es im Spiel nicht.
- Abläufe: `javap -p -c -constants <Klasse>.class` lesen, am besten einmal alle Klassen in eine Textdatei schreiben und darin suchen. Ein `javap`-Aufruf je Suchbegriff und Klasse ist viel zu langsam.
- Vanilla-Felder erscheinen als SRG-Kürzel (`Items.f_42415_`). Die Namen liefern zwei Dateien der Instanz: `libraries/de/oceanlabs/mcp/mcp_config/<version>/…-mappings-merged.txt` (Kürzel zu SRG) und `libraries/net/minecraft/client/<version>/…-mappings.txt` (Name zu Kürzel). Nicht aus dem Gedächtnis zuordnen.
- Werte aus Konstruktoren vieler gleichartiger Klassen (Blood Magic: Aktivierungskosten aller Rituale) liest ein awk-Skript über die `javap`-Ausgabe aus: Argumente vor dem `invokespecial` der Oberklasse, erste Konstante von `getRefreshCost()` usw. Wo die Methode rechnet statt eine Konstante zurückzugeben, „variabel“ schreiben.
- Baut eine Methode ihr Ergebnis in Schleifen (Blood Magic `AltarTier.buildComponents`), ist das Ablesen aus dem Bytecode unzuverlässig. Dann die Klasse selbst ausführen: eine Ersatzklasse für die fehlende Minecraft-Klasse schreiben (etwa `net.minecraft.core.BlockPos` mit Konstruktor `(int,int,int)`), zusammen mit den entpackten Mod-Klassen und den nötigen Bibliotheken der Instanz (Guava unter `libraries/com/google/guava/`) auf den Klassenpfad legen und per Reflexion aufrufen. Unter Windows Pfade mit `cygpath -w` umwandeln und `;` als Trenner nehmen. Das geht nur bei Klassen, die beim Laden nichts aus Minecraft brauchen; vorher mit `javap -c` prüfen, welche Klassen sie berühren.
- Auf der Seite dazuschreiben, dass die Angabe aus dem Code stammt. Zahlen nur nennen, wenn klar ist, wofür sie stehen (Feldname, Konstruktor); sonst als nicht ausgelesen führen.
- Die Reihenfolge der Schritte folgt dann den Abhängigkeiten der Rezepte, und die Phasenzeile sagt, dass es kein Buchkapitel gibt.
