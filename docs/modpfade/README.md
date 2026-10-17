# Modpfade

> Stand 2026-10-17, Minecraft 1.20.1. Dreizehn Seiten liegen vor (Tinkers, IE, Botania, Mekanism, Ad Astra, Star Wars Planets, Star Wars: Galaxy in a Cube, Blood Magic, Wesley's Roguelike Dungeons, Applied Energistics 2, Blue Skies, Alex's Mobs, Immersive Aircraft); der User hat die Tiefe bestätigt. Regel: keine Angabe aus dem Gedächtnis, alles aus den JARs lesen.

Je Content-Mod eine Seite mit der Progression, wie der Mod sie mit seinen Addons selbst vorsieht (ohne unsere KubeJS-Änderungen): nummerierte Schritte mit Bildern, Bauplänen der Multiblöcke und den nötigen Rohstoffen, am Ende die für sich stehenden Items und die Brücken zu anderen Mods. Die Seiten sind die Grundlage für Progressionsweg und Crossmod-Punkte.

**Oberseite mit einer Kachel je Mod:** https://claude.ai/artifact/BJheZu2HgYdykBjkNQaHT4 (Quelle `uebersicht/`, eigene `template.html`; bei jeder neuen Seite in `uebersicht/data.js` eintragen, bauen und neu veröffentlichen)

**Sammelseite fürs Handy** (alle Seiten in einem Artifact, Wechsel im selben Fenster): https://claude.ai/artifact/9CTNkTGyHWCCL3j9gapuEc, siehe `../sammelseite/README.md`. Neu bauen und veröffentlichen nur auf ausdrücklichen Befehl des Users.

| Mod | Live-Seite (Artifact, privat) | Quelle |
|---|---|---|
| Tinkers' Construct (+ TCIntegrations, Levelling Addon) | https://claude.ai/artifact/TYsNjvC9iqYNyAMW8Dy78y | `tinkers/` |
| Immersive Engineering (+ Petroleum, Posts) | https://claude.ai/artifact/5ND4jUMzFawrQBFv1Htzr6 | `ie/` |
| Botania (+ MythicBotany) | https://claude.ai/artifact/3tPaBDHNUfvyPoNjbb2TCw | `botania/` |
| Mekanism (+ Mekanism Generators) | https://claude.ai/artifact/NDtR89BAXYtyGRHu4tsHMd | `mekanism/` |
| Ad Astra (+ Giselle Addon, More Structures, Rocketed) | https://claude.ai/artifact/LDzmRVfRoZREd6nfYoCyQm | `adastra/` |
| Star Wars Planets | https://claude.ai/artifact/SrPJwSsAAdwZvaUm2MF3iN | `swplanets/` |
| Star Wars: Galaxy in a Cube | https://claude.ai/artifact/18k191oT3stvg7zEjZJsHx | `swgc/` |
| Blood Magic (Brücke Blood-Smeltery) | https://claude.ai/artifact/LBPGVvAY4w5kV4Mx6KzBjc | `bloodmagic/` |
| Wesley's Roguelike Dungeons | https://claude.ai/artifact/JoCxMWugDJXsXTJxFFyrwN | `rld/` |
| Applied Energistics 2 (+ AE2WTLib; Brücken Applied Mekanistics, Applied Botanics, More Immersive Wires) | https://claude.ai/artifact/EGPb1ZNHD7gCtHSELecFhN | `ae2/` |
| Blue Skies (+ Structure Gel API) | https://claude.ai/artifact/GAjru1A7JmbqwXNhfBumJt | `blue_skies/` |
| Alex's Mobs (Brücke Alex's Delight) | https://claude.ai/artifact/Tf1bokH9S871MVquTbiiAJ | `alexsmobs/` |
| Immersive Aircraft (Brücke iaie) | https://claude.ai/artifact/BfUwZLQdeo3DugNVASvxYh | `aircraft/` |

**Nachschlage-Notizen für Claude:** Zu jeder Seite gibt es `<mod>/WISSEN.md` mit JARs und Kürzeln, Fundstellen im JAR (bei Galaxy in a Cube die Klassen), Progression in Kürze, Schlüsselzahlen, Pack-Bezug, Offenem und einer Tabelle Name → Item-ID. Vor Arbeit an einem Mod zuerst dort nachsehen; bei Änderungen an `data.js` mitziehen.

Neue Seiten entstehen mit dem Skill `modpfad-seite` (`.claude/skills/modpfad-seite/`, als Paket `modpfad-seite.skill` in diesem Ordner). Er legt Aufbau und Quellenregel fest: nur JARs und Bücher der Mods.

Was beim Erstellen der Seiten für die Crossmod-Planung auffällt, steht in `CROSSMOD_AUFFAELLIGKEITEN.md` und wird mit jeder neuen Seite fortgeschrieben.

## Dateien

- `<mod>/data.js` – **die Inhalte**: Phasen, Schritte, Items, Baupläne, Zutaten, Einzelstücke, Brücken. Hier wird angepasst.
- `<mod>/WISSEN.md` – Nachschlage-Notiz für Claude (Vorlage: Skill, `references/wissen-vorlage.md`); die ID-Tabelle am Ende erzeugt `tools/IdIndex.java`
- `<mod>/icons.js` – Bilder als Data-URIs, erzeugt aus den Verweisen in `data.js`
- `template.html` – gemeinsames Layout und Render-Logik (Farben und Schriften wie der Erzatlas)
- `build.sh` – setzt je Mod `<mod>.html` zusammen
- `mkicons.sh`, `tools/IconTool.java` – erzeugen `icons.js` aus den Mod-JARs
- `tools/RecipeDump.java` – gibt die Rezepte eines Ordners kompakt aus (Ergebnis, gezählte Zutaten, Bedingungen), mit Namen aus den Sprachdateien
- `tools/ObjRender.java`, `tools/renders.txt` – zeichnen 3D-Modelle als Bild (OBJ und JSON-Blockmodelle mit `elements`, auch `forge:composite`); Aufruf `java tools/ObjRender.java $JARS tools/renders.txt`, Ergebnis unter `$JARS/_render/`, Verweis `"render:model/<name>"` (groß) oder `"render:model/<name>_s"` (Slot)
- `tools/extract.sh` – entpackt die gewünschten JARs der Instanz in einen Arbeitsordner (der `JARS`-Ordner) und schreibt dort `modids.txt`
- `tools/NbtDump.java` – liest Strukturdateien (.nbt) und gibt Stückliste und Ebenen für Baupläne aus
- `tools/PatchouliDump.java` – gibt ein Patchouli-Buch lesbar aus (Kategorien und Einträge nach `sortnum`, Seitentexte ohne Formatierung, Rezept- und Multiblock-Verweise); Aufruf `java -Dstdout.encoding=UTF-8 tools/PatchouliDump.java <buch>/en_us > buch.txt`
- `tools/NameCheck.java` – prüft die Item-Namen einer `data.js` gegen die Sprachdateien der Mods
- `tools/IdIndex.java` – übersetzt die Item-Namen einer `data.js` in Registry-IDs (Markdown-Tabelle für `WISSEN.md`); Aufruf mit `java -Dstdout.encoding=UTF-8`, sonst kommen Umlaute falsch an
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

- Tinkers: Die Tinkers-Anbindung des Giselle Addon sind vier Modifier (Space Breathing, Space Fire Proof, Acid Rain Proof, Gravity Normalizing); sie stehen auf der Ad-Astra-Seite unter „Brücken“, auf der Tinkers-Seite noch als „nicht ausgelesen“
- Nachprüfung am 2026-10-13: alle drei Seiten gegen Sprachdateien, Bücher, Rezepte und Config abgeglichen (Botania 99, IE 76, Tinkers rund 70 geänderte Stellen). Dabei entfernt: vier Tinkers-Blöcke, von denen nur noch die Textur im JAR liegt.
- Nicht ausgelesen und auf den Seiten so markiert: Wirkung von Glowball, EFLN und Punji Sticks (Tinkers); Treibstoffe des Portable Generator (Petroleum); Funktion des Fluix Mana Pool (Applied Botanics)
- Nicht einzeln gegen das Buch gelesen: die Trait-Namen der Tinkers-Materialien sind aus den Materialdaten, ihre Wirkung steht nicht auf der Seite; die Upgrade-Namen des Accumulator Backpack außer der Charging Antenna
- Botania: Bodenmuster der Rune Rituals, Aufbau des Mana Enchanters (für Enchanter und Gaia-Arena liegen `enchanter.nbt` und `gaia_ritual.nbt` in `data/botania/structures/`, noch nicht ausgelesen)
- Botania: Welches Gaia-Pylon-Rezept im Pack gilt (Botania-Original oder MythicBotany über den Alfsteel Pylon), in JEI prüfen
- Mekanism: Die Bauregeln aller Multiblöcke und der Eingangsstoff des SPS stehen nur im Code (kein Buch, keine Strukturdateien); auf der Seite so vermerkt. Ohne Bild, weil im Code gezeichnet: Energy Cube, Dynamic Tank, Nutritional Liquifier, Personal Chest, Turbine Rotor, Wind Generator, alle Leitungen
- Der Arbeitsordner mit den entpackten JARs liegt im Temp-Verzeichnis und wird von Windows ausgedünnt (am 2026-10-13 fehlten nach einigen Stunden die meisten Dateien). Vor jeder Arbeit neu entpacken.
- Ad Astra: Handelsangebote der Lunarians, die Mobs der More-Structures-Dungeons, Treibstoffverbrauch je Raketenstufe und die Sauerstoffregeln des Giselle Addon sind nicht ausgelesen. Raketen, Rover und Lander sind Entities ohne lesbares Bild.
- Star Wars Planets: Tauschverhältnisse der Jawas, Schaden und Energieverbrauch des Blasters, Unterschied zwischen Jedi- und Sith-Schwert und die Wirkung der Planetentemperaturen stehen nur im Code. Im Spiel zu prüfen: ob das Star Manual ankommt (Item nicht registriert) und was der Eintrag für das nicht vorhandene Deepslate-Erz bewirkt.
- Star Wars: Galaxy in a Cube hat weder Buch noch sichtbare Advancements; die Reihenfolge der Seite folgt den Rezept-Abhängigkeiten, die Abläufe (Assembly Bench, Macht, Jawa-Handel, Gas Harvester) sind mit `javap` aus den Klassen des JARs gelesen. Nicht ausgelesen: Werte der Blaster, Lichtschwerter und Rüstungen, Freischaltung der Lichtschwert-Formen, Drops der Mobs, Bedienung der Fahrzeuge.
- Mods, deren Mechanik nur im Code steht: Vanilla-Namen hinter den SRG-Kürzeln (`f_42415_`) liefern die Mapping-Dateien der Instanz (`libraries/de/oceanlabs/mcp/mcp_config/…-mappings-merged.txt` zusammen mit `libraries/net/minecraft/client/…-mappings.txt`).
- Blood Magic: nicht ausgelesen sind die Zahl der Ritual Stones je Ritual, die Erzgewichte der Meteore, die Wirkung des Bounce Array, die Werte der Sentient-Waffen, die Kosten je Stufe der Living-Armour-Upgrades und wie Trick Shot, True Strike und Grave Digger trainiert werden (stehen nur in den Daten, nicht im Buch). Die Upgrade-Namen weichen teils vom Buch ab (Sprachdatei „Weakened Pick“, Buch „Leadened Pick“); auf der Seite gilt die Sprachdatei.
- Weitere Mods: Farmer's Delight (mit Nether's Delight und Engineer's Delight)
- Immersive Aircraft (sparsam gebaut, Verfahren in `aircraft/WISSEN.md`; kein Buch, Reihenfolge nach Rezepten; Fluggeräte sind Entities, die Bilder zeigen die Items): nicht ausgelesen sind das Item für den Booster-Platz, ob Blaze Powder trotz `disableSolidFuel` brennt, der Standard-Treibstoffwert von Airship und Gyrodyne, Geschwindigkeiten und Lebenspunkte und das Flugverhalten auf Ad-Astra-Planeten.
- Blue Skies (sparsam gebaut, Verfahren in `blue_skies/WISSEN.md`; Bilder nur flache Texturen und Journal-Bilder): nicht ausgelesen, weil nur im Code, sind Werkzeugrezepte, Preise des Gatekeepers und der Dorfbewohner, Stärke der Werkzeugabschwächung, welche Schilde gegen den Arachnarch genügen, wann welcher Loot Bag fällt, ob Catylist-Hilfsstoffe der Alchemy Table verbraucht werden. Aquatic/Life/Runic Arc und Infused Arc Sword sind im JAR, aber ohne Quelle.
- Wesley's Roguelike Dungeons (MCreator-Mod, fast alles im Code): nicht ausgelesen sind Schaden der Waffen und Stäbe, Wirkung der 25 Artefakte, Spellbook-Kombinationen, Verzauberungen und Tränke, die Staffel der Lauf-Belohnung nach Dungeon-Wert, die Herkunft des ersten Boss Room Key, der Rückweg des Sentient Pathfinder und ob die Vessel verbraucht wird. Der JAR-Name enthält ein Apostroph: Kürzel `rld="Wesley's Roguelike"`. Der Klassen-Dump (`javap`, 3755 Prozedur-Klassen) dauert rund 3 Minuten.
- AE2: gebaut ohne einzelnes Öffnen der Dateien – Inhaltsverzeichnis des Handbuchs (`assets/ae2/ae2guide`) per awk aus dem Frontmatter, Seitentexte ohne Markup, Rezepte per RecipeDump gefiltert (Verfahren in `ae2/WISSEN.md`). Bilder nur aus flachen Texturen (Vorgabe des Users), Kabelteile ohne Bild. Nicht ausgelesen: Reichweite je Wireless Booster, Brennstoffwerte der Vibration Chamber, Aufbau und Energiebedarf von Spatial IO, Funktion von Color Applicator und Magnet Card; die Beispielanlagen des Handbuchs sind nicht übernommen.
- Alex's Mobs (sparsam gebaut, Verfahren in `alexsmobs/WISSEN.md`; Tiere ohne Bild): Das Animal Dictionary ist flach (ein Eintrag je Tier), die Reihenfolge der Seite folgt dem Advancement-Baum. Nicht ausgelesen: Spawn-Gewichte und Biome je Tier (`config/alexsmobs/*_spawns.json`), Lebenspunkte und Schaden (außer Void Worm), Rüstungswerte, Tränke, Funktion der Void Worm Effigy, Dropchancen der im Code vergebenen Beute (Ambergris, Lost Tentacle, Haizähne, Spiked Scute u. a.).
