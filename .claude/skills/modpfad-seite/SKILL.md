---
name: modpfad-seite
description: Erstellt oder ergänzt eine Modpfad-Seite – eine Webseite je Minecraft-Mod, die dessen eigene Progression Schritt für Schritt zeigt (mit Bildern, Multiblock-Bauplänen, Zutaten, für sich stehenden Items und Brücken zu anderen Mods), ausschließlich aus den installierten Mod-JARs und den Büchern der Mods belegt. Immer verwenden, wenn der User eine Modpfad-Seite, Mod-Progressionsseite oder „Seite wie bei Tinkers/IE/Botania“ für einen weiteren Mod will (z. B. Mekanism, AE2, Blood Magic, Ad Astra, Blue Skies), eine bestehende Modpfad-Seite erweitern, korrigieren oder nachprüfen lässt, oder eine Übersicht „was kommt in Mod X wann, was braucht es“ als Seite verlangt. Auch verwenden, wenn für Planung oder KubeJS Wissen über einen Mod mit fertiger Seite gebraucht wird (Item-IDs, Fundstellen im JAR, Progression, Zahlen): Die Notiz docs/modpfade/<mod>/WISSEN.md ist dann der erste Griff.
---

# Modpfad-Seite

Eine Modpfad-Seite zeigt, wie ein Mod **von sich aus** gespielt werden will: seine Progression in der Reihenfolge seines eigenen Buchs, ohne die Änderungen des Packs. Der User nutzt die Seiten, um den Progressionsweg des Packs zu planen und Crossmod-Punkte zu finden. Dafür müssen sie zwei Dinge leisten: gleich aufgebaut sein (damit man Mods vergleichen kann) und stimmen (damit man darauf Entscheidungen bauen kann).

## Die eine Regel: nur JARs und Bücher

Jede Angabe auf der Seite stammt aus einer Datei der installierten Instanz: Rezept-JSON, Buch- oder Handbuchtext des Mods, Sprachdatei, Strukturdatei, Loot-Tabelle, Tag, Modelldatei, Config. Nichts aus dem Gedächtnis, nichts aus Wikis, nichts aus dem Netz.

Der Grund ist Erfahrung, nicht Prinzip. Bei den ersten drei Seiten mussten nach der Nachprüfung rund 240 Stellen geändert werden: ungenaue Namen, unbelegte und falsche Angaben, die aus dem Gedächtnis ergänzt worden waren. Die falschen klangen alle plausibel: Die Elementium-Axt (nicht das Schwert) trennt Köpfe ab. Traveler's Gear braucht ein beliebiges Plattenmetall, nicht fest Kupfer. Vier Tinkers-Blöcke standen auf der Seite, weil ihre Textur im JAR liegt, obwohl es sie in der Version gar nicht mehr gibt. Wissen über Mods ist versionsabhängig und vermischt sich; die JARs der Instanz sind die einzige Quelle, die zur gespielten Version passt.

Was das praktisch heißt:

- **Erst lesen, dann schreiben.** Den Text eines Schritts erst formulieren, wenn die Quelle dazu offen war. Nicht erst schreiben und später „prüfen“.
- **Was nicht ausgelesen ist, steht nicht da** oder ist ausdrücklich als „noch nicht ausgelesen“ markiert und im README unter „Offen“ eingetragen. Eine Lücke ist in Ordnung, eine geratene Angabe nicht.
- **Eine Textur beweist nicht, dass es das Item gibt.** JARs enthalten Altlasten. Ein Item existiert, wenn es einen Eintrag in der Sprachdatei hat und ein Rezept, eine Loot-Tabelle oder einen Bucheintrag.
- **Namen kommen aus der Sprachdatei** (`assets/<ns>/lang/en_us.json`), nicht aus der Erinnerung. `tools/NameCheck.java` prüft das.
- **Zahlen kommen aus Rezept oder Config.** Im Handbuch stehen oft nur Platzhalter; die Standardwerte liegen dann in `defaultconfigs/` oder `config/` der Instanz.
- **Aussagen über „das Pack“** (welche Mods installiert sind, welche Tags gefüllt sind) stammen aus `modids.txt` bzw. den Tag-Dateien, nicht aus Vermutung.
- **Rechnerisch Abgeleitetes** ist erlaubt, wenn beide Ausgangswerte aus dem JAR stammen und die Herleitung dabeisteht.

Wenn eine Frage nur der User beantworten kann (Umfang, welche Addons, was Vorrang hat), fragen statt annehmen.

## Ablauf

Die Werkzeuge liegen in `docs/modpfade/` des Projekts (`tools/`, `template.html`, `build.sh`, `mkicons.sh`). Fehlt der Ordner, aus `assets/modpfade/` dieses Skills dorthin kopieren. `docs/modpfade/README.md` beschreibt die Dateien und führt die Liste der Seiten samt Artifact-URLs.

Voraussetzung: Java (JDK 17 oder neuer, für die `.java`-Werkzeuge im Einzeldatei-Modus) und `unzip`. Python, Node und jq werden nicht gebraucht.

### 0. Vorhandenes Wissen lesen

Zu jeder fertigen Seite gibt es `docs/modpfade/<mod>/WISSEN.md`: JARs mit Kürzeln für `extract.sh`, die Fundstellen im JAR, die Progression in Kürze, Schlüsselzahlen, Item-IDs und was offen ist. Vor jeder Arbeit an einer bestehenden Seite diese Notiz lesen, bevor JARs durchsucht werden. Bei einem neuen Mod die Notizen der Mods lesen, mit denen er verbunden ist (Brücken, gemeinsame Tags). Auch für Fragen außerhalb der Seiten (KubeJS-Änderungen, Progressionsplanung) ist die Notiz der erste Griff.

Die Notiz ersetzt das JAR nicht als Beleg: Was neu auf eine Seite kommt, wird weiterhin im JAR nachgelesen. Sie spart das Suchen, wo es steht.

### 1. Umfang klären

Hauptmod, zugehörige Addons und Brücken-Addons aus der Mod-Liste des Projekts (`docs/00_MODBASIS.md`) bestimmen. Den Pfad der Instanz aus dem Projektgedächtnis nehmen; der Instanzordner wird nur gelesen. Ist unklar, welche Addons auf die Seite gehören, fragen.

### 2. JARs entpacken

```bash
VANILLA=<pfad>/client-1.20.1.jar bash docs/modpfade/tools/extract.sh "<instanz>/mods" "<arbeitsordner>" mek=Mekanism-1.20.1 mekgen=MekanismGenerators
```

Der Arbeitsordner liegt im Scratchpad, nicht im Projekt. Er ist danach der `JARS`-Ordner für alle Werkzeuge. `modids.txt` darin ist die Liste der wirklich installierten Mods.

Ein Arbeitsordner im Temp-Verzeichnis hält nicht: Windows löscht dort Dateien, die eine Weile nicht gelesen wurden. Ein Ordner aus einer früheren Sitzung oder von vor ein paar Stunden ist deshalb lückenhaft, ohne dass etwas darauf hinweist. Vor der Arbeit an einem Mod dessen JARs (und die Vanilla-Texturen) neu entpacken; das dauert Sekunden.

### 3. Quellen sichten

Zuerst feststellen, was der Mod mitbringt. `references/quellen-im-jar.md` nennt, wo die Dinge liegen und wie man sie ohne jq ausliest. Mindestens:

- **Das Buch** des Mods und seine Kapitelreihenfolge. Sie gibt die Phasen und die Reihenfolge der Schritte vor. Hat der Mod kein Buch (Mekanism), ersatzweise den Advancement-Baum: die `parent`-Ketten ergeben die Reihenfolge, Titel und Beschreibung stehen in der Sprachdatei. Erklärtexte liefern dann die Schlüssel `description.<ns>.<block>` und `info.<ns>.jei.*` der Sprachdatei.
  Hat der Mod auch keinen Advancement-Baum und stehen seine Rezepte nicht in Dateien (Star Wars: Galaxy in a Cube), sind die Klassen des JARs die Quelle; wie man sie liest, steht in `references/quellen-im-jar.md` unter „Wenn die Mechanik nur im Code steht“. Die Reihenfolge folgt dann den Abhängigkeiten der Rezepte.
- **Rezepte** der Schlüsselteile jedes Schritts. `java tools/RecipeDump.java <arbeitsordner> <kürzel>/data/<ns>/recipes > rezepte.txt` schreibt alle Rezepte eines Mods lesbar in eine Datei, in der man dann sucht.
- **Strukturdateien** der Multiblöcke.
- **Sprachdatei** für alle Namen.

### 4. Seite schreiben

`docs/modpfade/<mod>/data.js` nach dem Schema in `references/data-schema.md`. Als Maßstab für Tiefe und Ton die vorhandenen Seiten lesen (`tinkers/data.js`, `ie/data.js`, `botania/data.js`); der User hat diese Tiefe ausdrücklich bestätigt und will sie bei jedem weiteren Mod.

### 5. Bilder

- Item- und Blocktexturen als Verweis `"namespace:pfad"` in `data.js`, danach `JARS=<arbeitsordner> bash mkicons.sh <mod>`. Das Werkzeug meldet jeden Verweis ohne Datei als `FEHLT`.
- Multiblöcke: `java tools/NbtDump.java <datei.nbt>` liefert Stückliste und Ebenen für den Bauplan.
- Blöcke mit 3D-Modell: Eintrag in `tools/renders.txt`, dann `java tools/ObjRender.java <arbeitsordner> tools/renders.txt`. Der Zeichner liest OBJ-Dateien und JSON-Blockmodelle (`assets/<ns>/models/block/*.json` mit `elements`). Die Bilder einmal als Übersicht ansehen, bevor sie auf die Seite kommen: Ein grauer Würfel heißt, dass das Modell im Code gezeichnet wird und es nichts zu lesen gibt.
- Texturen, die Abwicklungsbögen von 3D-Modellen sind, nicht als Icon verwenden. Gibt es keine Modelldatei, bleibt das Bild `null`; die Seite zeigt dann ein Kürzel.
- Items mit 3D-Modell haben oft keine Textur unter `textures/item/`; `mkicons.sh` meldet sie als `FEHLT`. Dann `null` setzen, nicht raten.

### 6. Prüfen

Vor dem Veröffentlichen, nicht danach:

1. `java tools/NameCheck.java <arbeitsordner> <mod>/data.js` – jeden gemeldeten Namen ansehen. Übrig bleiben dürfen nur Bildunterschriften und bewusste Sammelbezeichnungen.
2. `mkicons.sh` meldet 0 fehlende Bilder.
3. Jeden Schritt noch einmal gegen seine Quelle lesen: Stimmen Mengen, Reihenfolge, Wirkung? Steht irgendwo ein Satz, zu dem keine Datei offen war? Der fliegt raus oder wird nachgelesen.
4. Alles, was offen bleibt, in `README.md` unter „Offen“.

### 7. Wissen festhalten

`docs/modpfade/<mod>/WISSEN.md` nach `references/wissen-vorlage.md` schreiben, solange die Quellen noch offen sind. Der User will, dass das Gelesene im Projekt bleibt und später schnell wieder greifbar ist, ohne die JARs erneut zu durchsuchen.

Hinein gehört vor allem, was nicht auf der Seite steht: Pfade im JAR, Rezepttypen und Ordner, Tag-Namen und ihr Inhalt, Config-Dateien, und bei Mods, deren Mechanik nur im Code steht, die Klassen mit voller Paketangabe, in denen sie steht. Das Lesen mit `javap` ist der teuerste Teil der Arbeit; ohne Notiz muss die nächste Sitzung von vorn suchen. Danach die ID-Tabelle mit `tools/IdIndex.java` anhängen (Aufruf in der Vorlage).

Bei jeder späteren Änderung an `data.js` die Notiz mitziehen: Text anpassen, ID-Tabelle neu erzeugen.

### 8. Bauen und veröffentlichen

```bash
bash docs/modpfade/build.sh <mod>
```

`<mod>.html` als Artifact veröffentlichen; gibt es für den Mod schon eine URL im README, an dieselbe. Danach im README die Tabelle der Seiten und den Abschnitt „Offen“ nachziehen.

Die neue Seite auf der Oberseite eintragen: in `docs/modpfade/uebersicht/data.js` einen Eintrag in `MODS` ergänzen (Name, Version, Addons, ein Satz, Phasen- und Schrittzahl, ein Bild, Akzentfarben, URL) und den Mod aus `PLANNED` streichen; dann `JARS=<arbeitsordner> bash mkicons.sh uebersicht`, `bash build.sh uebersicht` und `uebersicht.html` an die URL aus dem README veröffentlichen.

Dann die Sammelseite fürs Handy nachziehen (`docs/sammelseite/README.md`): bei einer neuen Seite in `docs/sammelseite/build.sh` die URL→Datei-Zeile in `sub_links` und den Namen in der `for`-Liste ergänzen, in `shell.html` den Namen in `PAGES`; Neu bauen (`bash docs/sammelseite/build.sh`) und `out/start.html` an die Sammelseiten-URL veröffentlichen NUR auf ausdrücklichen Befehl des Users (kostet Nutzungslimit); sonst am Ende nur erwähnen, dass das Handbuch nicht mehr aktuell ist.

Danach `docs/modpfade/CROSSMOD_AUFFAELLIGKEITEN.md` fortschreiben: ein Abschnitt je Mod mit dem, was den Progressionsweg des Packs berührt (Abkürzungen, Überschneidungen mit anderen Mods, harte Voraussetzungen, fehlende Verbindungen), und die übergreifenden Tabellen ergänzen, wenn der neue Mod dort mitspielt (Stahl, Erzvervielfachung, Lager, Strom). Der User will diese Punkte gesammelt haben, um sie später zu entscheiden. Es gelten dieselben Regeln wie für die Seite: belegte Befunde mit 🟢, Unbelegtes getrennt unter „Zu prüfen“ mit 🔵, keine Entscheidungen. Auffälligkeiten, die anderen Projektdokumenten widersprechen, dort korrigieren und im Abschlussbericht nennen.

## Aufbau der Seite

Jede Seite hat dieselben Teile in derselben Reihenfolge. Das Template erzeugt sie aus `data.js`; an der Struktur wird je Mod nichts geändert.

1. **Kopf**: Name des Mods, ein Absatz Einordnung, die beteiligten Mods mit Version (Hauptmod, Addons, Brücken).
2. **Phasen**, jede mit Titel und einem Satz, aus welchem Buchkapitel sie stammt und was sie voraussetzt.
3. **Schritte**, über alle Phasen durchnummeriert. Ein Schritt ist etwas, das man baut oder erreicht, in der Reihenfolge des Spiels. Jeder Schritt hat:
   - Bilder: Buchbild, gezeichnetes 3D-Modell oder Bauplan, wo es welche gibt
   - die Items des Schritts als Kacheln mit englischem Namen und einer Zeile: woraus, wozu
   - einen kurzen deutschen Erklärtext: was es ist, wie es arbeitet, was es freischaltet
   - bei Bedarf eine Tabelle (Materialstufen, Legierungen, Blumen, Modifier)
   - „Braucht“: die Rohstoffe des Schritts, jeder mit Herkunft (Vanilla, dieser Mod, Addon, anderer Mod im Pack)
4. **Für sich stehend**: alles, was der Mod bietet, aber kein Schritt auf dem Hauptweg ist, gruppiert.
5. **Brücken zu anderen Mods**: was Mod und Addons von sich aus mit anderen Mods des Packs verbinden, und was naheläge, aber fehlt.
6. **Fuß**: Quellen und was noch nicht ausgelesen ist.

Regeln, die der User festgelegt hat:

- Item- und Maschinennamen englisch wie in JEI, Erklärtext deutsch.
- Addon-Inhalte stehen dort im Ablauf, wo sie im Spiel dazukommen, mit Addon-Etikett. Addons, die nur zu einem anderen Mod verbinden, stehen unter „Brücken“.
- Zutaten der Schlüsselteile, keine vollständigen Rezepte. Ausnahme, wenn der User es verlangt (bei Tinkers: alle Modifier, erzeugt mit `tools/ModifierDump.java`).
- Vollständigkeit: Jede Maschine, jedes Werkzeug, jede Pflanze, jeder Boss des Mods kommt vor, entweder als Schritt oder unter „Für sich stehend“. Das Inhaltsverzeichnis des Buchs ist die Checkliste.
- Rezepte für nicht installierte Mods gehören nicht auf die Seite (`modids.txt`).

## Typische Fallen

- **Abhängigkeiten in `mods.toml`** nennen Mods, die nicht installiert sind. `extract.sh` liest deshalb nur den `[[mods]]`-Teil.
- **Bedingte Rezepte** (`forge:mod_loaded`, `tag_filled`, Config-Schalter) gelten nur, wenn die Bedingung im Pack erfüllt ist. Ist sie nicht prüfbar, das dazuschreiben.
- **Ein Addon kann ein Rezept des Hauptmods ersetzen oder ein zweites danebenstellen.** Beide nennen und offenlassen, welches gilt, wenn es sich aus den Dateien nicht entscheiden lässt.
- **Buchtexte enthalten Platzhalter** für Config-Werte und Verweise. Der Satz ist dann unvollständig; den Wert aus Config oder Rezept holen.
- **Lange Shell-Schleifen über hunderte JSON-Dateien** sind unter Windows sehr langsam. Für Massenauswertung ein kleines Java-Werkzeug nach dem Muster von `ModifierDump.java` schreiben.
- **Große Seiten** (über etwa 1 MB) lassen sich lokal nicht mehr in der Vorschau öffnen. Die Renderings als Übersicht prüfen, bevor sie eingebaut werden, und den Aufbau an einer Kopie der Seite mit leerem `const ICONS = {};` ansehen (Kopie danach löschen).
- **Namen aus IDs ableiten geht schief.** Das Modul mit der ID `fortune_unit` heißt im Spiel „Ore Refinement Unit“. Jeden Namen aus der Sprachdatei nehmen; `NameCheck` findet die Ausreißer.
- **Buch und Sprachdatei nennen Dinge verschieden** (Blood Magic: „Leadened Pick“ im Buch, „Weakened Pick“ in der Sprachdatei). Auf der Seite gilt die Sprachdatei, weil sie im Spiel erscheint; die Abweichung in die Notiz.
- **Die Oberseite braucht die gezeichneten Bilder aller Mods.** `mkicons.sh uebersicht` schreibt `icons.js` neu und lässt fehlende Bilder weg. In einer neuen Sitzung ist der Render-Ordner leer: vorher die JARs aller Mods entpacken und die Kachelbilder (`icon` in `uebersicht/data.js`) mit `ObjRender.java … <name>` neu zeichnen, bis `mkicons.sh` 0 fehlende meldet.
- **Die lokale Vorschau zeigt Umlaute falsch.** `jwebserver` sendet keinen Zeichensatz, und das Template setzt keinen; als Artifact ist die Seite in Ordnung. Für die Vorschau nur Aufbau und Bilder prüfen.
- **Multiblöcke ohne Strukturdatei** (Mekanism) sind im Code festgelegt. Dann gibt es keinen Bauplan: die Teile mit Rezept und Beschreibung zeigen und ausdrücklich sagen, dass die Bauregeln nicht ausgelesen sind.

## Abschlussbericht

Kurz und so, dass der User ihn ohne Vorwissen lesen kann: der Link, was die Seite umfasst, was gegenüber dem Auftrag fehlt oder abweicht, Auffälligkeiten für die Crossmod-Planung, und was noch nicht ausgelesen ist. Nichts als geprüft bezeichnen, was nicht geprüft wurde.
