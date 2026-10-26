# Ablaufplan Teil 1 — Story-Schritte, Auslöser, Folgen

> Begonnen am 2026-10-21. Führendes Dokument für den **technischen Ablauf** der Story von Teil 1: welche Story-Quest wann kommt, was sie auslöst, welche Figur wo steht, welcher Text dazugehört. Die Handlung selbst steht in `../18_STORY.md` (führend für die Story), offene Fragen nur in `../20_ENTSCHEIDUNGEN.md`.
> Danach richten sich: die Textentwürfe (`docs/story/texte/`, folgt), die Dialoge im Easy-NPC-Editor (baut der User), die Hauptquests in Buch 1 (`QuestbuchGen`), die Skripte.
>
> 🟢 entschieden · 🟡 Vorschlag von Claude, noch nicht bestätigt · 🔵 offen oder im Spiel zu prüfen

## 1. Bausteine (wie Quests, Dialoge und Figuren zusammenspielen)

| Nr. | Baustein | Wie | Stand |
|---|---|---|---|
| B1 | **Abgabe im Dialog** | Knopf mit Bedingung „Item im Inventar“ → Befehle `clear @initiator <item> <n>` und `tag @initiator add story_<code>` (z. B. `story_st3_05`). Die Quest hat eine Stage-Aufgabe mit genau diesem Namen und ist damit für die ganze Party erledigt. Gespräche ohne Abgabe genauso, nur ohne `clear`. So brauchen die Dialoge keine Quest-IDs. | 🟢 Weg erprobt (Test 29); Vorschlag des User 2026-10-26 statt `ftbquests change_progress`. 🔵 P15: Stage-Aufgabe, wenn nur ein Party-Mitglied den Tag hat |
| B2 | **Dialogstufe je Figur** | Ein Scoreboard `story` mit einem Platzhalter-Namen je Figur (`#dd3r8`, `#davijaan`, `#bodhi`, `#cerina`, `#vos`). Der Wert sagt, welcher Dialogteil gerade gilt (Bedingung „Scoreboard“). Gilt für die ganze Welt, also für alle drei Spieler. Gesetzt per `scoreboard players set #dd3r8 story <n>` aus Dialog oder Quest-Belohnung. Anlegen einmalig: `scoreboard objectives add story dummy`. | 🟡 |
| B3 | **Quest → Dialog** | Braucht ein Dialog eine erledigte Quest (z. B. „Bosse besiegt“), setzt deren Belohnung die Dialogstufe (B2). | 🟡 |
| B4 | **Figur erscheinen/verschwinden** | Befehl in der Quest-Belohnung (Team Reward): `easy_npc spawn|despawn <uuid>` oder `execute in <dim> run easy_npc preset import …` (Test 30). | 🟢 |
| B5 | **Logbuch-Eintrag freischalten** | Befehl `/logbuch <eintrag>` (neues KubeJS-Skript nach dem Muster von `/bauplan`): setzt für alle Spieler das Advancement `ieplus:logbuch/<eintrag>`, das den Eintrag im Patchouli-Buch „Logbuch des Meisters“ öffnet; Offline-Spieler beim Einloggen. Der erste Aufruf gibt das Buch an alle. Aufruf aus Quest-Belohnung oder Dialog. | 🟢 gebaut (`server_scripts/story/logbuch.js`), 🔵 Tests 74–77. FTB-Belohnungen mit `/logbuch` brauchen erhöhte Rechte (Befehls-Belohnung „elevate“) |
| B6 | **Lese-Items** | Tempelrollen 1–4 und das Tagebuch des Meisters sind KubeJS-Items. Rechtsklick ruft B5 auf (Eintrag öffnet sich bei allen); das Item bleibt erhalten. | 🟢 gebaut (`logbuch.js`, Items in `teil1_items.js`), 🔵 Test 75 |
| B7 | **Kapitel freischalten** | Die letzte Story-Quest eines Kapitels setzt als Belohnung die Stage `kapitel_k<n+1>`; damit erscheinen die Mod-Abschnitte des nächsten Kapitels (Aufbau wie in den Probe-Büchern). | 🟢 Aufbau, 🔵 P15 (Stage bei Offline-Spielern) |
| B8 | **Eingriff des Hosts** | Wo nichts automatisch prüfbar ist (Mars-Station zu dritt, O22), erledigt der User die Quest per Befehl. | 🟢 |

Quest-Codes der Story: **ST\<Kapitel\>-\<Nr\>** (ST4-03 …). Die Quest-IDs entstehen aus den Codes; Codes nach dem ersten Einspielen nie mehr umbenennen.

## 2. Orte und Figuren

| Ort | Dimension | Wer baut | Figur | Schutzzone |
|---|---|---|---|---|
| Kapsel in der Basis | `minecraft:overworld` | Host (T1) | DD3R8 bis K7 | ja |
| Blue-Skies-Haus (ein bestimmtes Gatekeeper's House) | `minecraft:overworld` | steht schon; User wählt es | Bodhi Bad Dur | ja |
| Mondbasis mit Luft | `ad_astra:moon` | Host (O29) | Davijaan | ja |
| Höhle mit kaputtem Klonhelm | `ad_astra:moon` | Host | – (Spawner) | ja |
| Mars-Station | `ad_astra:mars` | **die Spieler**, an einem festen Platz (O69): dort Reste einer alten Basis, kleiner Dungeon und Notiz der früheren Bewohner (baut der Host) | DD3R8 ab K7 | Ruine ja, Bauplatz nein |
| Schlucht der Zwerge (halber Weg nach Süden zum Blue-Skies-Haus) | `minecraft:overworld` | sucht der Host aus (O68) | Zwerg `[Name]` | offen |
| Tempel mit kaputtem Altar und 4 Rollen | `ad_astra:mercury` | Host (T6) | – | ja, Freistellen für Ritualsteine |
| Station der Minen (Truhe mit Relikt und Tagebuch) | `bloodmagic:dungeon` | automatisch (O40) | – | nein |
| Elfenportal | `minecraft:overworld` | **die Spieler** | Meisterin Cerina ab K10 | nein |
| Versteck auf Glacio | `ad_astra:glacio` | Host (O52) | Quinlan Vos, DD3R8 | ja |
| Basis (Rückkehr) | `minecraft:overworld` | – | Quinlan Vos ab Ende K11 | – |

🟢 **Figuren an Orten der Spieler** (User, 2026-10-21, O55): Mars-Station, Elfenportal und Vos in der Basis setzt der User von Hand: Wenn die Quest fällig ist, stellt er sich an die Stelle und führt einen fertigen Befehl aus (`execute in <dim> run easy_npc preset import … ~ ~ ~`). Die Befehle stehen hier, sobald die Presets exportiert sind. Gilt für ST7-02, ST10-02, ST11-03.

## 3. Ablauf je Kapitel

Spalten: **Aufgabe** = was FTB Quests prüft. **Auslöser** = wodurch die Quest erledigt wird. **Folge** = Belohnung und Befehle (alle als Team Reward). **Text** = Entwurf, den Claude schreibt (Abschnitt 5).

### K1 Ankunft (noch ohne Questbuch)

In der Hauptwelt sind K1 und K2 schon erreicht (IE-Stahl, Runenaltar). Der Abschnitt ist also schnell durch.

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| – | Der Einschlag | – (nur Dialog) | Erstes Gespräch mit DD3R8 in der Kapsel | `/logbuch teil1` (Buch an alle), `#dd3r8 = 1` | D-DD3R8-0, L1 |

### K2 Würdig sein

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| – | Beweis abgeben | – | Dialog (B1): Vorschlaghammer ganz aus Kobalt (Skript setzt Tag `ieplus_kobalthammer`), LV-Kondensator, 1 Manastahlblock (O67, ersetzt F4) | `give @a ftbquests:book`, Stages `kapitel_k1`, `kapitel_k2`, `#dd3r8 = 2` | D-DD3R8-1 |
| ST2-01 | Würdig sein | Checkmark (F26 c) | Spieler klicken im Buch | `/logbuch teil2`, Stage `kapitel_k3` | Q-ST2-01 (erklärt das Questsystem) |

### K3 Industrie

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| ST3-00 | Die Schlucht | Gespräch (Dialog) | Erstes Gespräch mit dem Zwerg (DD3R8 schickt die Spieler über `d2_weg` hin) | `#zwerg = 1`, Handel offen | D-ZWERG (`dialoge_zwerg.md`) |
| ST3-01 | Das Haus | Checkmark-Ersatz: Dialog | Erstes Gespräch mit Bodhi (B1 ohne Item) | `#bodhi = 1` | D-BODHI-0 |
| ST3-02 | Zünder und Journal | `blue_skies:zeal_lighter`, `blue_skies:blue_journal` | gekauft bei Bodhi | – | Q |
| ST3-03 | Everbright | Dimension `blue_skies:everbright` | betreten | – | Q |
| ST3-04 | Zinn für Bodhi | – | Dialog (B1): 32 × `mekanism:raw_tin` (User, 2026-10-26) | `#bodhi = 2` | D-BODHI-1 |
| ST3-05 | Bericht beim Droiden | – | Dialog DD3R8 (Bedingung `#bodhi ≥ 2`) | `/logbuch teil3`, Stage `kapitel_k4`, `#dd3r8 = 3` | D-DD3R8-2 |

### K4 Der Mond

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| ST4-01 | Auf zum Mond | Dimension `ad_astra:moon` | betreten (Rakete T1 steht in RF1) | – | Q |
| ST4-02 | Der Einsiedler | – | Erstes Gespräch mit Davijaan (er erwähnt, „da unten“ etwas verloren zu haben) | `#davijaan = 1` | D-DAVIJAAN-0 |
| ST4-03 | Die Höhle | `kubejs:kaputter_klonhelm` | Truhe in der Höhle | – | Q |
| ST4-04 | Reparatur | `swgc:clone_212th_battalion_helmet` (O71; Rezept erst nach dem Bauplan von Davijaan) | Werkbank (Rezept in `18_STORY.md`) | – | Q |
| ST4-05 | Vertrauen | – | Dialog (B1): reparierter Helm | `#davijaan = 2` (Dialog); Credits. Bauplan Assembly Bench schenkt er im Dialog; danach `#davijaan = 3`, Laden offen | D-DAVIJAAN-1 |
| ST4-06 | Everdawn | Dimension `blue_skies:everdawn`, dann Dialog (B1): 32 × `mekanism:raw_osmium` (User, 2026-10-26); Everdawn erst nach dem Zinn (O73) | Bodhi | `#bodhi = 3`; danach ist Bodhis Strang Nebenquest | D-BODHI-2 |
| ST4-07 | Warum der Mond schweigt | – | Dialog DD3R8 (Bedingung `#davijaan ≥ 2`): Bericht, dass es vom Mars aus geht | Stage `kapitel_k5`, `#dd3r8 = 4` | D-DAVIJAAN-1 (Hinweis Mars), D-DD3R8-3 |

### K5 Erzketten

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| ST5-01 | Treibstoff für den Mars | – | Dialog DD3R8 (B1): 1 Eimer entschwefelter Diesel (`immersivepetroleum:diesel_bucket`, im JAR geprüft) und 1 `mekanism:advanced_control_circuit` – beides braucht die Rakete T2 (O53) | Stage `kapitel_k6`, `#dd3r8 = 5` | D-DD3R8-4 |

Nebenquest in K5/K6: Bodhis Boss-Reihe (BS3, BS4). Belohnung der letzten Boss-Quest (BS4) setzt `#bodhi = 4` (B3); damit bietet Bodhi das Siegel an.

### K6 Der Mars

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| ST6-01 | Der rote Planet | Dimension `ad_astra:mars` | betreten (Rakete T2 steht in RF2) | – | Q |
| ST6-02 | Die verlassene Basis | `kubejs:schrift_marsbasis` | in der Ruine am Platz des Peilsenders (O69, O74) | Stage `kapitel_k7` | Q, Notiz der früheren Bewohner |

### K7 Horchposten

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| ST7-01 | Material für die Station | 🟡 Checkliste (Abschnitt 4) | Items im Inventar | – | Q |
| ST7-02 | Die Station steht | Checkmark, nur für den User | User setzt die Stage per Befehl (`tag <Spieler> add story_st7_02`), wenn alle drei dort sind (B8, O22) | DD3R8: `despawn` in der Basis; erscheint am festen Platz der Station (O69, Befehl mit festen Koordinaten in der Belohnung statt von Hand); `#dd3r8 = 6` | Q |
| ST7-03 | Das Signal | – | Dialog DD3R8 auf dem Mars | `/logbuch teil4`, Stage `kapitel_k8`, `#dd3r8 = 7` | D-DD3R8-5 |

### K8 Hitze

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| ST8-01 | Die heißeste Welt | Dimension `ad_astra:mercury` | betreten (Rakete T3 steht in RF3) | – | Q |
| ST8-02 | Der Tempel | `kubejs:tempelrolle_1` bis `_4` | im Tempel gefunden; Lesen öffnet R1–R4 im Logbuch (B6) | – | Q, R1–R4 |
| ST8-03 | Die Rollen | – | Dialog DD3R8 auf dem Mars (B1): die vier Rollen | `/logbuch teil5`, Stage `kapitel_k9`, `#dd3r8 = 8` | D-DD3R8-6 |

🟡 Die Rollen werden bei der Abgabe verbraucht; ihr Text bleibt im Logbuch.

### K9 Der Tempel

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| ST9-01 | Siegel der Traumwelten | `kubejs:siegel_der_traumwelten` | Dialog Bodhi (Bedingung `#bodhi ≥ 4`): er gibt es (O47) | `#bodhi = 5` | D-BODHI-3 |
| ST9-02 | Fund aus der Tiefe | `wrd:orb_of_the_deep` (O54; liegt in jeder Ancient Bone Chest) | Item im Inventar | – | Q |
| ST9-03 | Schutz für drei | 3 × `botania:goddess_charm` (ID wie in `altar_dimension.js`) | Items im Inventar | – | Q |
| ST9-04 | Der Altar | Terrasteel, 4 Imbued Slate, Siegel, Orb of the Deep (F8, O47, O54) | Rechtsklick am kaputten Altar (O48, neues Skript); das Skript setzt die Stage `story_st9_04` | Das Skript setzt das komplette Ritual Pathway to the Endless Realm hin; aktivieren müssen es die Spieler selbst (Aktivierungskristall, LP; O56) | Q |
| ST9-05 | Das Endless Realm | `kubejs:relikt` | Truhe in der Station der Minen (O40) | DD3R8 `despawn` auf dem Mars (O7), Stage `kapitel_k10`, `#dd3r8 = 9` | Q, TB (beim Lesen des Tagebuchs) |

Nicht als Aufgabe „Dimension `bloodmagic:dungeon` betreten“: Das ginge schon über den Mini-Dungeon (F27).

### K10 Der Elf

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| ST10-01 | Die Station ist still | Checkmark | Spieler klicken (der Droide ist weg; keine automatische Prüfung möglich) | – | Q |
| ST10-02 | Das Elfenportal | `botania:alfheim_portal` | Item im Inventar | – | Q |
| ST10-03 | Meisterin Cerina | – | Rune des Frühlings ins offene Portal werfen: Skript lässt Cerina erscheinen, `#cerina = 1` (O75); dann Dialog (B1): Relikt | `#cerina = 2` | D-CERINA-0, D-CERINA-1 |
| ST10-04 | Was sie braucht | – | Dialog (B1): 4 Arcs, Elite Control Circuit, 4 Elementium (F14) | `give @a kubejs:galaktischer_strahlenschutz` (einer), Stage `kapitel_k11`, `#cerina = 3` | D-CERINA-2 |

### K11 Glacio

| Code | Schritt | Aufgabe | Auslöser | Folge | Text |
|---|---|---|---|---|---|
| ST11-01 | Durch die Barriere | Dimension `ad_astra:glacio` | betreten (Rakete T4 steht in RF4) | Vos und DD3R8 im Versteck: `spawn` (O52), `#vos = 1`, `#dd3r8 = 10` | Q |
| ST11-02 | Das Versteck | – | Erstes Gespräch mit Vos | `#vos = 2` | D-VOS-0, D-DD3R8-7 |
| ST11-03 | Heimkehr | Dimension `minecraft:overworld` (nach ST11-02) | zurück auf der Erde (Vos fliegt mit, O33) | Vos und DD3R8 `despawn` auf Glacio, der User setzt beide in der Basis (O55) und dann `#vos = 3` | Q |
| ST11-04 | Ende von Teil 1 | – | Dialog mit Vos in der Basis | Buch 2 wird sichtbar, `#vos = 4` | D-VOS-1 |

## 4. Checkliste Mars-Station (🟡 Vorschlag, O22)

Item-Aufgaben in ST7-01 (je eine Aufgabe, Mengen für drei Spieler): 🔵 IDs vor dem Einbau gegen die Sprachdateien prüfen.

- Oxygen Distributor (`ad_astra:oxygen_distributor`) und Oxygen Loader (`ad_astra:oxygen_loader`)
- 3 Betten
- Launch Pad (`ad_astra:launch_pad`)
- Strom vor Ort: 4 Solar Panels (`ad_astra:solar_panel`) und ein Energiespeicher (Mekanism Basic Energy Cube)
- Ein Mekanism-Grundgerät für die Luft, z. B. Electrolytic Separator
- 64 Glas oder Isolierglas für die Kuppel

## 5. Texte, die Claude entwirft (O50)

Ablage in `docs/story/texte/`, je Figur oder Buch eine Datei. Der User überarbeitet. Druckfassung zum Gegenlesen: `py tools/story_druck.py` → `docs/story/druck/story_teil1.pdf` (nicht im Git, jederzeit neu erzeugbar).

| Kürzel | Text | Wann | Muss verraten |
|---|---|---|---|
| L1–L5 | Logbuch des Meisters, Teil 1–5 | Tabelle in `18_STORY.md` Abschnitt 5 | je das nächste Ziel, ohne es zu nennen |
| R1–R4 | Tempelrollen | K8 | R1: Portal zur dunklen Seite im Tempel; R2–R4 kurze Texte |
| TB | Tagebuch des Meisters | K9 | Trennung vom Droiden, Flucht ohne Relikt (O4), Glacio, Heller Elf, „wer unbefleckt ist, bringe es mir“ |
| D-DD3R8-0 … 7 | Dialoge des Droiden | je Dialogstufe | siehe Abschnitt 3 |
| D-DAVIJAAN-0, 1 | Einsiedler | K4 | Misstrauen, Höhle, Vertrauen, Shop, Buch („Notizen über die Aufgaben dieses komischen Roboters“), Hinweis Mars |
| D-BODHI-0 … 5 | Wächter der Traumwelten (O72) | K3, K4, K9 | Exil, Bosse haben seine Welten, Zinn/Osmium, Siegel |
| D-CERINA-0 … 2 | Elf | K10 | will oder kann wenig zum Relikt sagen, baut den Strahlenschutz um das Relikt (O43) |
| D-VOS-0, 1 | Meister | K11 | erstes Treffen, Heimkehr; Geheimnis erst in Teil 2 (O9) |
| Q-… | kurze Questtexte der Story-Quests | alle | ohne Star Wars (O9) |
| T-… | Tooltips: Relikt, Strahlenschutz, Klonhelm, Siegel, Rollen, Tagebuch | – | – |

## 6. Was gebaut werden muss

| Was | Wer | Hängt an |
|---|---|---|
| ✅ Skript `/logbuch` + Patchouli-Buch „Logbuch des Meisters“ (B5), 2026-10-21 | Claude | 🔵 Tests 73–77 |
| ✅ Items: 4 Tempelrollen, Tagebuch, Siegel, Pilotenhelm (kaputt/repariert); Reparaturrezept, 2026-10-21 | Claude | 🔵 Tests 73, 78 |
| ✅ `meister_truhe.json`: Tagebuch als Item, 2026-10-21 | Claude | 🔵 Test 78 |
| Bauplan „Pilotenhelm“ (O71): Rolle `kubejs:bauplan_pilotenhelm`, neues Kapitel „Erinnerungsstücke“ im Buch „Baupläne des Einsiedlers“; das Reparaturrezept ergibt jetzt `swgc:clone_212th_battalion_helmet` und ist bis zum Lesen gesperrt (`einsiedler_shop.js`, `story_rezepte.js`, `teil1_items.js`, Patchouli-Eintrag); `kubejs:klonhelm_repariert` entfällt | Claude | – |
| Sperre Everdawn (O73): Wer `blue_skies:everdawn` betritt, solange `#bodhi < 2` (Zinn-Zoll nicht bezahlt), wird zurückgeschickt, mit Meldung; Vorlage `altar_dimension.js` | Claude | – |
| Mars-Schriften (O74): Lese-Item `kubejs:schrift_marsbasis` („Aufzeichnungen der früheren Bewohner“), Eintrag im Logbuch, neues Kapitel „Fundstücke“, mit Text (Entwurf Claude) und einer Patchouli-Multiblock-Seite der Station (3D, auf Klick als Geisterbild vor Ort). Die Station entwirft der User im Kreativmodus; Claude übernimmt sie aus der Strukturdatei in den Bauplan. `logbuch_gen.py` erweitern | User (Station), Claude | Bau der Station |
| Elfe rufen (O75): Skript erkennt eine `botania:rune_spring`, die in ein aktives Portal to Alfheim geworfen wird, entfernt sie, lässt Meisterin Cerina am Portal erscheinen (`easy_npc preset import` an der Portalstelle) und setzt `#cerina = 1`. Ersetzt das Hinstellen von Hand (O55) für die Elfe | Claude | Preset von Cerina |
| Mod-Bücher erst später sichtbar (ST2-01): Mod-Tabs im Questbuch bleiben unsichtbar, bis ihr erstes Kapitel freigeschaltet ist. 🔵 Prüfen, wie FTB Quests ein Kapitel ohne sichtbare Quest anzeigt | Claude | – |
| Skript Kobalthammer (O67): setzt den Spieler-Tag `ieplus_kobalthammer`, solange ein `tconstruct:sledge_hammer` mit allen Teilen aus Kobalt im Inventar ist, sonst entfernt es ihn (für die Abgabe „Würdig sein“) | Claude | – |
| Peilsender (O69): Koordinaten des Platzes auf dem Mars in den Befehl von `d4_danke` und in die Belohnung von ST7-02 eintragen | Host, dann Claude | Bau der Ruine |
| Ruine, kleiner Dungeon und Notiz auf dem Mars (O69); Schlucht der Zwerge (O68) | Host | – |
| Skript Relikt-Fluch (O66): nach 15 s im Inventar Blindheit, Langsamkeit, Vergiftung; nicht ablegbar (Truhe, Behälter, Wegwerfen, Itemrahmen …). 🔵 Offen: Was passiert beim Tod des Trägers (Relikt bleibt bei ihm oder fällt für die anderen)? | Claude | – |
| Skript Altar per Rechtsklick (O48, O56) | Claude | Bauplan des kaputten Altars vom Host |
| Gatekeeper abschalten (O34) | Claude | – |
| ✅ Buch 1 im Questbuch mit ST-Quests (2026-10-26): `tools/questbuch/buch1.cfg` → `chapters/buch1.snbt`, 36 Quests + 10 Marken; Belohnungen aus Abschnitt 3; Easy-NPC-Befehle (Figuren erscheinen/verschwinden) und Credits für ST4-05 fehlen noch | Claude | 🔵 Tests 79–83 |
| Dialoge im Easy-NPC-Editor | User | Texte D |
| Skins DD3R8, Bodhi, Cerina | User | – |
| Testdurchlauf mit Befehlen (neue Tests in `11_TESTING.md`) | Claude schreibt, User spielt | alles oben |
| Bauten, Koordinaten in `schutzzonen.js`, Figuren setzen | Host | H5 |

## 7. Nach dem Gegenlesen nachziehen

🟢 Erledigt am 2026-10-26. Ergebnis je Punkt:

- O63 (Macht-Begriffe): keine Änderung; der User hat die Texte bereits mit dieser Freiheit gegengelesen.
- „bricht“ (DD3R8) neben „zerfällt“ (Tempelrolle 3): bleibt, Rolle 4 sagt selbst „gebrochen“.
- Ritual nach der Reparatur: O56 gilt weiter, die Spieler wecken es selbst; „erweckst du ihn“ in Rolle 4 meint das Aktivieren.
- Relikt-Fluch: Meisterin Cerina sieht ihn (`c1_tagebuch`); bei DD3R8 keine Warnung (User).
- Helle Elfe: erledigt (Cerina, Questtexte, Tooltip).
- Schleier: liegt um das Versteck des Meisters (O77); Cerina, ST11-01 und `18_STORY.md` angepasst.
- Würdig sein (O67): `tinkers.md` (Kobalt jetzt TK2-04, Anvil Hauptweg, neue Quest TK2-06 Vorschlaghammer aus Kobalt; O78), `ie.md`, `botania.md`, Meilenstein SW1.
- Zwerge, Mars, Davijaan, Bodhi: in den Questtexten erledigt; Tooltip des reparierten Helms jetzt am 212er-Helm.
- Sonnensturm: beides gilt (O79), `18_STORY.md`.
- Kaputte Maschinen: kein Satz in `d0_basis` (User).
- Rune im Tagebuch: „Gib dem Portal ein Zeichen des Frühlings, dann hört sie dich.“
- Neu zu schreiben: Text der Mars-Schriften (`texte/fundstuecke.md`).
