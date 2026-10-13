# Modpfade

> Stand 2026-10-13, Minecraft 1.20.1. Tinkers' Construct, Immersive Engineering und Botania liegen vor; der User hat die Tiefe bestätigt. Regel: keine Angabe aus dem Gedächtnis, alles aus den JARs lesen.

Je Content-Mod eine Seite mit der Progression, wie der Mod sie mit seinen Addons selbst vorsieht (ohne unsere KubeJS-Änderungen): nummerierte Schritte mit Bildern, Bauplänen der Multiblöcke und den nötigen Rohstoffen, am Ende die für sich stehenden Items und die Brücken zu anderen Mods. Die Seiten sind die Grundlage für Progressionsweg und Crossmod-Punkte.

| Mod | Live-Seite (Artifact, privat) | Quelle |
|---|---|---|
| Tinkers' Construct (+ TCIntegrations, Levelling Addon) | https://claude.ai/artifact/TYsNjvC9iqYNyAMW8Dy78y | `tinkers/` |
| Immersive Engineering (+ Petroleum, Posts) | https://claude.ai/artifact/5ND4jUMzFawrQBFv1Htzr6 | `ie/` |
| Botania (+ MythicBotany) | https://claude.ai/artifact/3tPaBDHNUfvyPoNjbb2TCw | `botania/` |

Neue Seiten entstehen mit dem Skill `modpfad-seite` (`.claude/skills/modpfad-seite/`, als Paket `modpfad-seite.skill` in diesem Ordner). Er legt Aufbau und Quellenregel fest: nur JARs und Bücher der Mods.

## Dateien

- `<mod>/data.js` – **die Inhalte**: Phasen, Schritte, Items, Baupläne, Zutaten, Einzelstücke, Brücken. Hier wird angepasst.
- `<mod>/icons.js` – Bilder als Data-URIs, erzeugt aus den Verweisen in `data.js`
- `template.html` – gemeinsames Layout und Render-Logik (Farben und Schriften wie der Erzatlas)
- `build.sh` – setzt je Mod `<mod>.html` zusammen
- `mkicons.sh`, `tools/IconTool.java` – erzeugen `icons.js` aus den Mod-JARs
- `tools/ObjRender.java`, `tools/renders.txt` – zeichnen 3D-Modelle (OBJ) als Bild; Aufruf `java tools/ObjRender.java $JARS tools/renders.txt`, Ergebnis unter `$JARS/_render/`, Verweis `"render:model/<name>"` (groß) oder `"render:model/<name>_s"` (Slot)
- `tools/extract.sh` – entpackt die gewünschten JARs der Instanz in einen Arbeitsordner (der `JARS`-Ordner) und schreibt dort `modids.txt`
- `tools/NbtDump.java` – liest Strukturdateien (.nbt) und gibt Stückliste und Ebenen für Baupläne aus
- `tools/NameCheck.java` – prüft die Item-Namen einer `data.js` gegen die Sprachdateien der Mods
- `tools/ModifierDump.java`, `tools/modids.txt` – lesen alle Tinkers-Modifier-Rezepte aus und schreiben `tinkers/modifiers.js`; `modids.txt` ist die Liste der installierten Mod-IDs (aus den `mods.toml` der Instanz)

Ablauf bei Textänderungen: `data.js` anpassen → `bash build.sh <mod>` → `<mod>.html` an dieselbe Artifact-URL veröffentlichen.

Ablauf bei neuen Bildern: Verweis `"namespace:pfad"` in `data.js` eintragen → `JARS=<Ordner> bash mkicons.sh <mod>` → bauen. `JARS` ist ein Ordner mit je einem Unterordner pro entpacktem JAR (ohne `.class`), dazu die Vanilla-Texturen aus `client-1.20.1.jar`. Fehlende Texturen meldet das Werkzeug als `FEHLT`.

## Bilder

- Verweis `"tconstruct:item/materials/pattern"` → `assets/tconstruct/textures/item/materials/pattern.png`
- Verweis `"tconstruct:book/images/melter"` → Buchbild außerhalb von `textures/`
- `"…/pickaxe/handle_tconstruct_wood+head_tconstruct_iron+…"` legt mehrere Ebenen übereinander (Tinkers-Werkzeuge); eine Ebene mit führendem `/` ist ein vollständiger Pfad
- IE- und Petroleum-Blöcke mit 3D-Modell werden aus der OBJ-Datei gezeichnet (Schrägsicht von oben: Gier 215°, Neigung 30°; `0 90` wäre eine reine Draufsicht). Multiblöcke haben Bild und Bauplan.
- Botania-Pylons, Brewery, Hourglass und Corporea Index haben keine Modelldatei (im Code gezeichnet); dort steht `null`, die Seite zeigt ein Kürzel.

## Baupläne

Die Ebenen stammen aus den Strukturdateien der Mods (`data/<mod>/structures/multiblocks/*.nbt`, bei Tinkers `assets/tconstruct/book/structures/`), ausgelesen am 2026-10-13. Format in `data.js`: `layers` von unten nach oben, je Ebene die Zeilen durch Leerzeichen getrennt, `.` ist Luft, Buchstaben stehen in `key`. Sehr hohe Multiblöcke (Distillation Tower, Coker) haben nur eine Stückliste (`count`).

## Herkunft der Angaben

- Reihenfolge und Erklärungen: Bücher der Mods (Tinkers-Bücher, IE-Handbuch, Lexica Botania)
- Zutaten, Mana- und Temperaturwerte: Rezept-JSONs der JARs
- Leistungswerte bei IE: Standardwerte des Mods, unsere Configs können abweichen

## Offen

- Tinkers: Inhalt der Tinkers-Anbindung im Giselle Addon
- Nachprüfung am 2026-10-13: alle drei Seiten gegen Sprachdateien, Bücher, Rezepte und Config abgeglichen (Botania 99, IE 76, Tinkers rund 70 geänderte Stellen). Dabei entfernt: vier Tinkers-Blöcke, von denen nur noch die Textur im JAR liegt.
- Nicht ausgelesen und auf den Seiten so markiert: Wirkung von Glowball, EFLN und Punji Sticks (Tinkers); Treibstoffe des Portable Generator (Petroleum); Funktion des Fluix Mana Pool (Applied Botanics)
- Nicht einzeln gegen das Buch gelesen: die Trait-Namen der Tinkers-Materialien sind aus den Materialdaten, ihre Wirkung steht nicht auf der Seite; die Upgrade-Namen des Accumulator Backpack außer der Charging Antenna
- Botania: Bodenmuster der Rune Rituals, Aufbau des Mana Enchanters
- Botania: Welches Gaia-Pylon-Rezept im Pack gilt (Botania-Original oder MythicBotany über den Alfsteel Pylon), in JEI prüfen
- Weitere Mods: Mekanism, AE2, Blood Magic, Ad Astra, Blue Skies, Star Wars, Farmer's Delight
