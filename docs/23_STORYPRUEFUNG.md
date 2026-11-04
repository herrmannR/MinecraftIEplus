# 23 — Logische Prüfung der Story, Teil 1

> Stand 2026-11-04 (Claude, auf Bitte des Users). Geprüft wurden nur Quellen unter `docs/`, `tools/questbuch/` und `kubejs/`, keine gebauten Seiten. Bewusst so und kein Fehler: DD3R8 holt der Host bei ST7-02 mit `/dd3r8 hierher` und setzt den Tag von Hand; ST9-05 ruft `/dd3r8 glacio`; Vos stellt der Host bei -343 103 84 hin; Schutzzone um Bodhis Haus; Kapitel „Testseite“ wird ignoriert.

## Was geprüft wurde

- **Ablauf gegen Dialoge:** jede Stufe von `dd3r8`, `zwerg`, `bodhi`, `davijaan`, `cerina`, `vos`: Wer setzt sie, ist sie erreichbar, gibt es Lücken, Doppelungen oder Sackgassen?
- **Stage-Aufgaben in Buch 1:** Alle 17 Aufgaben `story_<code>` haben einen Setzer (Dialog, Host bei ST7-02, `altar_reparatur.js` bei ST9-04). Die Kapitel-Stages `kapitel_k1` bis `kapitel_k11` sind lückenlos (K1/K2 über `dialog_bruecke.js`, ab K3 Belohnungen). Buch 2 hängt an ST11-04 (`hauptquests.cfg`, `vorgaenger`).
- **Items:** Alle Story-Items gibt es (`teil1_items.js`, Galaxy in a Cube, Blue Skies, Botania, Mekanism, IE, Blood Magic, Roguelike Dungeons). Jedes verlangte Item ist zum Zeitpunkt der Quest über ein früher oder gleichzeitig freigeschaltetes Mod-Kapitel beschaffbar (Abgleich der `(Kn)` in `docs/questtexte/*.md`).
- **Logbuch:** Alle elf Einträge werden freigeschaltet (`teil1` Dialog, `teil2`–`teil5` Belohnungen ST2-01, ST3-05, ST7-03, ST8-03; Rollen, Tagebuch und „Die Basis“ über Lese-Items).
- **Skripte:** Scores, Tags und Stage-Namen in `dialogstufen.js`, `dialog_bruecke.js`, `everdawn_sperre.js`, `elfenportal.js`, `altar_reparatur.js`, `altar_dimension.js`, `dd3r8_umzug.js`, `raketen_t1_t4.js` (Strahlenschutz im Calorite-Triebwerk) passen zu Dialogen und Quests.
- **Gebaute Dateien:** Presets und Logbuch neu gebaut und verglichen: inhaltlich gleich mit dem Stand im Git und in der Testinstanz (nur Zeitstempel und zufällige IDs anders). Buch 1 neu gebaut: unverändert.
- **Inhalt:** Orte, Richtungen (Koordinaten aus `schutzzonen.js`), Namen, wer was wann weiß.

## Funde

| Nr | Fundstelle | Fehler | Fix / offen |
|---|---|---|---|
| S1 | `tools/questbuch/blue_skies.cfg` BS4-04; ABLAUF K5/K6; `dialoge_bodhi.md` Stufe 4 | **Sackgasse:** `bodhi = 4` setzte niemand. Bodhi bietet das Siegel nur bei `bodhi = 4` an; ohne Siegel keine Altar-Reparatur (ST9-01, ST9-04), Teil 1 bliebe in K9 stehen. | ✅ Belohnung von BS4-04 (Arachnarch, letzter Boss der Kette BS3-02 → BS4-04): `/scoreboard players set @a bodhi 4`. `blue_skies.snbt` gebaut und kopiert. Test 129 |
| S2 | `docs/questtexte/swgc.md` SW2-05 | „Kauf den Bauplan Assembly Bench“: Davijaan schenkt ihn im Dialog (`v2_danke`, B8c), im Handel gibt es ihn nicht. | ✅ Text: Davijaan schenkt ihn, wenn du ihm den Helm zurückbringst |
| S3 | `swgc.md` SW2-04 und Tabelle „Pack-Änderungen“ | „Durasteel gibt es nur im Shop, kein Rezept“: Seit B8e verkauft der Shop kein Durasteel mehr, sondern den Bauplan Durasteel (4 Stahl, 4 Osmium, 1 Desh-Platte → 4). | ✅ Text und Tabelle |
| S4 | `swgc.md` Einleitung SW2 und SW2-01 | „Shop: Credits, Durasteel …“ und „Credits nur als Quest-Belohnung“: Zwerg und Bodhi zahlen seit B8f Credits. | ✅ Text und Tabelle |
| S5 | `docs/questtexte/blue_skies.md` BS1-01 | „Häuser mit zwei Portalen“: Laut JAR hat jedes Gatekeeper-Haus genau **einen** unentzündeten Torrahmen, zufällig aus Turquoise (Everbright) oder Lunar Stone Bricks (Everdawn). | ✅ Text; Befund in `modpfade/blue_skies/WISSEN.md`. Folgefrage F1 |
| S6 | `dialoge_cerina.md` Scoreboard-Zeile | `cerina = 1` „setzt die Belohnung von ST10-02, der User setzt sie ans Portal“: veraltet, das macht `elfenportal.js` (O75). | ✅ Doku (kein Dialog betroffen, Preset unverändert) |
| S7 | `docs/story/ABLAUF.md` Abschnitt 2 und 5 | Zwerg noch „`[Name]`“, Tagebuch noch „Heller Elf“. | ✅ Zoltan, „Helle Elfe“ |
| S8 | `kubejs/startup_scripts/teil1_items.js` Kommentar | Strahlenschutz „aus … Elite Control Circuit“, „der Helle Elf“: Die Abgabe verlangt den Ultimate Control Circuit (ST10-04). | ✅ Kommentar, kopiert |
| S9 | `docs/22_TESTABEND.md` | Für ST11-03 fehlten die Befehle des Hosts (Vos in die Basis, DD3R8 holen, `vos = 3`); sie standen nur im Ablauf. | ✅ Lücke L8 mit Befehlen |
| F1 | Bodhi `b0_tor`, Questtext ST3-03, `everdawn_sperre.js` | Torrahmen: siehe Frage F1 unten. | ✅ User 2026-11-04: Bodhi verkauft als erste zwei Handel 1 Diamond → 1 Turquoise Stone Brick und 1 Cobalt Ingot → 1 Lunar Stone Brick; `b0_tor` und ST3-03 nennen das. Test 131 |
| F2 | `swgc.cfg` SW2-01 | siehe Frage F2 | ✅ SW2-01 hängt an `buch1:ST4-05` (Helm). Test 131 |
| F3 | Bodhi `b3_schluessel` | siehe Frage F3 | ✅ bleibt so (User) |
| F4 | DD3R8 nach der Heimkehr | siehe Frage F4 | ✅ Belohnung ST11-03 setzt `dd3r8 = 11`, kein Einstieg dafür, Rückfall auf `d_standard`. Test 131 |
| F5 | DD3R8 `d10_meister` | siehe Frage F5 | ✅ „Und sprecht mit ihm über das, was ihr bei euch habt.“ |
| F6 | `elfenportal.js` | siehe Frage F6 | ✅ bleibt so; der Host lässt es im Durchgang nicht zu (User) |
| F7 | Entfernung zu Bodhis Haus | siehe Frage F7 | ✅ bleibt so (User) |

## Fragen an den User (O81, alle beantwortet 2026-11-04)

1. **F1 Ziegel für das erste Tor.** Bodhi sagt „Ein Tor baut ihr selbst“, ST3-03 „Bau ein Tor aus Turquoise Stone Bricks“. Die Ziegel gibt es vor dem ersten Besuch aber nur aus den Torrahmen der Gatekeeper-Häuser, und Bodhis Haus ist geschützt. In Bodhis Haus steht nur **ein** Rahmen: Ist er aus Lunar-Ziegeln, führt er nach Everdawn, und das ist bis zum Zinn gesperrt. Dann müssten die Spieler erst ein anderes Haus mit Turquoise-Rahmen finden, ohne dass ein Text das sagt. Früher war entschieden: „erste Ziegel verkauft Bodhi“ (`dialoge_bodhi.md`, „Offen“). Im Handel steht das aber nicht. Vorschlag: Bodhi verkauft je 12 Turquoise und 12 Lunar Stone Bricks (ein Rahmen); welcher Preis? Oder sollen die Spieler den Rahmen in seinem Haus anzünden bzw. Ziegel aus anderen Häusern holen (dann passe ich ST3-03 an)? Test 130 zeigt, welcher Rahmen bei Bodhi steht.
2. **F2 Davijaans Aufgaben im Buch.** Davijaan sagt erst nach dem Helm „Da stehen jetzt meine Aufgaben drin“ (`v2_buch`). Das Kapitel Galaxy in a Cube (SW2) erscheint aber schon mit `kapitel_k4`, also vor dem ersten Besuch. Soll SW2-01 an ST4-05 hängen?
3. **F3 Schlüssel bei Bodhi.** `b3_schluessel`: „Habt ihr einen Turm bezwungen, verkaufe ich euch weitere.“ Der Handel bietet alle Schlüssel aber sofort an. Text oder Handel ändern?
4. **F4 DD3R8 nach der Heimkehr.** `dd3r8` bleibt 10; in der Basis begrüßt er die Spieler noch mit „Wie kommst du hierher?“ (Glacio-Dialog). Notiert als „kommt mit Teil 2“. Reicht das für das Ende von Teil 1, oder soll er eine kurze Stufe 11 bekommen?
5. **F5 Relikt auf Glacio.** DD3R8 (`d10_meister`): „gebt ihm, was ihr für ihn tragt“. Vos (`q1_relikt`): „Lasst es, wo es ist“, weil es im Triebwerk steckt. Soll der Satz von DD3R8 dazu passen (z. B. „was ihr für ihn mitgebracht habt“)?
6. **F6 Cerina zu früh rufbar.** `elfenportal.js` ruft Cerina bei jeder Rune des Frühlings im offenen Portal, auch lange vor K10 (Portal gibt es ab BO5, Runen ab BO3). Soll das Skript erst ab `dd3r8 ≥ 9` (Relikt geholt) reagieren?
7. **F7 Entfernung zum Haus.** Bodhis Haus liegt von DD3R8 aus etwa 1.330 Blöcke süd-südwestlich (-370/-20 → -1046/1115). DD3R8 sagt „nicht weit von hier“, ST3-01 „in der Nähe“. Lassen oder z. B. „weit im Süden“?
