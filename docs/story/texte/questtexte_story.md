# Questtexte der Story-Quests, Buch 1 (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet. Ablauf, Auslöser und Belohnungen: `../ABLAUF.md` (führend). Diese Datei liefert Titel, Aufgabe und Text je Story-Quest im Format von `tools/QuestbuchGen.java` (wie `docs/questtexte/<mod>.md`), damit Buch 1 später daraus gebaut werden kann.
>
> **Leitlinien**
> - Kein Star-Wars-Wort (O9). Figuren heißen, wie die Spieler sie kennen: DD3R8, Bodhi Bad Dur, Davijaan, Meisterin Cerina, Quinlan bzw. „der Meister“.
> - Story hat kein Hilfebuch: Die Texte sagen klar, **wo** man hin muss und **was** zu tun ist (`docs/19_HILFEBUECHER.md`). Wie man Maschinen und Raketen baut, steht in den Mod-Kapiteln; hier nur der Verweis.
> - Kurz: ein bis drei Sätze, Anrede „du“ wie in den übrigen Questtexten.
> - K1 hat keine Quest: Das Questbuch gibt es erst nach „Würdig sein“ (T4).

## Aufgabenarten, die der Generator noch nicht kennt

Für den Bau von Buch 1 braucht `QuestbuchGen` diese Ergänzungen (Teil des Technik-Schritts, `../ABLAUF.md` Abschnitt 6):

| Aufgabe im Text | Bedeutung | in der Steuerdatei |
|---|---|---|
| „Abgabe im Dialog“, „Gespräch mit …“ | Stage-Aufgabe `story_<code>` (z. B. `story_st3_05`); der Dialog setzt sie mit `tag @initiator add story_st3_05` (B1, Vorschlag des Users 2026-10-26, erprobt in Test 29). | `stage(story_<code>)`, später automatisch |
| „Häkchen“ | Die Spieler klicken selbst. | `check(Titel)` (gibt es schon) |
| „Nur der Host“ | Der User setzt die Stage per Befehl (O22), z. B. `tag <Spieler> add story_st7_02`. | wie Dialog: `stage(story_<code>)` |
| mehrere Aufgabenarten in einer Quest | z. B. Dimension und Dialog | Eintrag `tasks = …; …` |

Item-Aufgaben nur **erkennen**, nicht verbrauchen (Standard in FTB Quests): Relikt, Rollen und Helm werden danach noch gebraucht.

Abhängigkeiten, die vom Standard (Hauptweg der Reihe nach) abweichen, stehen unten je Abschnitt unter „Steuerdatei“.

---

## ST2 · Würdig sein (K2 Würdig sein)

### ST2-01 Würdig sein · Hauptweg
**Aufgabe:** Häkchen „Beweis erbracht“

Du hast DD3R8 bewiesen, dass eure Spezies weit entwickelt ist, und er hat euch dieses Buch gegeben. Ab hier führt es euch. Links stehen die Bücher: In Buch 1 folgt ihr der Spur des Meisters. Zusätzlich gibt es für fast jeden Mod ein Buch. Die Mod-Bücher und dieses Hauptbuch sind in Kapitel aufgeteilt, die durch Fortschritt in der Hauptstory freigeschaltet werden. Einige Mod-Bücher werden erst beim Abschluss späterer Kapitel freigeschaltet und sichtbar. Klick auf das Häkchen, um diese Quest abzuschließen, und hol dir dann die Belohnung ab. Der Fortschritt gilt für euch alle drei.

---

## ST3 · Der Weg zum Haus (K3 Industrie)

### ST3-00 Die Schlucht · Hauptweg
**Aufgabe:** Gespräch mit dem Zwerg in der Schlucht (Dialog)

DD3R8 hat im Süden ein seltsames Signal geortet. Auf halbem Weg liegt eine Schlucht, in der Zwerge leben. Frag sie nach dem Haus und seinem Bewohner.

### ST3-01 Das Haus · Hauptweg
**Aufgabe:** Gespräch mit dem Wächter der Traumwelten (Dialog)

DD3R8 hat in der Nähe ein Haus geortet, dessen Steine seltsam schwingen. Der Zwerg hat euch den Weg beschrieben. Finde es und sprich mit dem, der dort wohnt.

### ST3-02 Zünder und Journal · Hauptweg
**Aufgabe:** `blue_skies:zeal_lighter`, `blue_skies:blue_journal`

Bodhi Bad Dur verkauft dir den Zeal Lighter, mit dem man die Tore in seine Welten entzündet, und sein Journal. Beides findest du in seinem Handel.

### ST3-03 Everbright · Hauptweg
**Aufgabe:** Dimension `blue_skies:everbright` betreten

Bau ein Tor aus Turquoise Stone Bricks, entzünde es mit dem Zeal Lighter und tritt hindurch. Everbright ist die Welt des ewigen Lichts. Deine Werkzeuge taugen dort wenig; wie du neu anfängst, steht im Kapitel Blue Skies.

### ST3-04 Zinn für Bodhi · Hauptweg
**Aufgabe:** Abgabe im Dialog: 32 × `mekanism:raw_tin`

Bodhi lässt euch in seine Welten, verlangt aber einen Wegzoll. Bring ihm 32 Rohzinn aus Everbright. Erst dann öffnet sich auch der Weg nach Everdawn.

### ST3-05 Bericht beim Droiden · Hauptweg
**Aufgabe:** Gespräch mit DD3R8 (Dialog)

Erzähl DD3R8, was ihr bei Bodhi erlebt habt. Vielleicht hat er inzwischen den nächsten Teil des Logbuchs entschlüsselt.

**Steuerdatei:** `ST3-00 tasks = stage(story_st3_00)`, `ST3-01 tasks = stage(story_st3_01)`, `ST3-04 tasks = stage(story_st3_04)`, `ST3-05 tasks = stage(story_st3_05)`.

---

## ST4 · Der Mond (K4 Der Mond)

### ST4-01 Auf zum Mond · Hauptweg
**Aufgabe:** `mekanism:basic_chemical_tank` voll mit Oxygen, Dimension `ad_astra:moon` betreten

Der Meister bemerkte eine Präsenz auf dem Mond. Bau die Rakete T1 (Kapitel Ad Astra), füll einen Basic Chemical Tank ganz mit Oxygen (Mekanism, Kapitel Mekanism) als Reserve, nimm ihn mit und flieg hin, um herauszufinden, wer dort wohnt.

### ST4-02 Der Einsiedler · Hauptweg
**Aufgabe:** Gespräch mit dem Einsiedler (Dialog)

Auf dem Mond lebt jemand in einer Station. Besuch ihn. Sei höflich, er bekommt selten Besuch und will das auch so.

### ST4-03 Die Höhle · Hauptweg
**Aufgabe:** `kubejs:kaputter_klonhelm`

Davijaan hat in einer Höhle in der Nähe seiner Station einen alten Helm verloren und will nicht mehr hin. Hol ihn aus der Truhe in der Höhle. Ohne Raumanzug kommst du dort nicht weit, und du bist dort nicht allein.

### ST4-04 Reparatur · Hauptweg
**Aufgabe:** `swgc:clone_212th_battalion_helmet`

Der Helm ist kaputt, so nimmt Davijaan ihn nicht. Reparier ihn nach dem Bauplan, den du von Davijaan erhalten hast.

### ST4-05 Vertrauen · Hauptweg
**Aufgabe:** Abgabe im Dialog: `swgc:clone_212th_battalion_helmet`

Bring Davijaan seinen Helm zurück.

### ST4-06 Everdawn · Hauptweg
**Aufgabe:** Dimension `blue_skies:everdawn` betreten, dann Abgabe im Dialog: 32 × `mekanism:raw_osmium`

Bau ein Tor aus Lunar Stone Bricks und reise nach Everdawn, die Welt der ewigen Dämmerung. Bring Bodhi 32 Rohosmium. Danach hat er eine größere Bitte an euch.

### ST4-07 Warum der Mond schweigt · Hauptweg
**Aufgabe:** Gespräch mit DD3R8 (Dialog)

Davijaan schirmt den Mond ab, aber hat euch verraten, von wo aus man den Meister lokalisieren könnte. Erzähl es DD3R8.

**Steuerdatei:** `ST4-02 tasks = stage(story_st4_02)`, `ST4-05 tasks = stage(story_st4_05)`, `ST4-06 tasks = dim(blue_skies:everdawn); stage(story_st4_06)`, `ST4-06 deps = ST3-05` (läuft neben dem Mond), `ST4-07 tasks = stage(story_st4_07)`, `ST4-07 deps = ST4-05`.

---

## ST5 · Treibstoff (K5 Erzketten)

### ST5-01 Treibstoff für den Mars · Hauptweg
**Aufgabe:** Abgabe im Dialog: `immersivepetroleum:diesel_bucket`, `mekanism:advanced_control_circuit`

Für den Mars reicht Biodiesel nicht. DD3R8 will einen Eimer entschwefelten Diesel und einen Advanced Control Circuit sehen, beides braucht die Rakete T2. Wie du den Diesel herstellst, steht im Kapitel Immersive Engineering, den Circuit im Kapitel Mekanism.

**Steuerdatei:** `ST5-01 tasks = stage(story_st5_01)`.

---

## ST6 · Der Mars (K6 Der Mars)

### ST6-01 Der rote Planet · Hauptweg
**Aufgabe:** Dimension `ad_astra:mars` betreten

Bau die Rakete T2 (Kapitel Ad Astra) und flieg zum Mars.

### ST6-02 Die verlassene Basis · Hauptweg
**Aufgabe:** `kubejs:schrift_marsbasis`

Folge dem Peilsender von DD3R8 zu den Resten einer alten Basis und erkunde sie. Irgendwo dort haben die früheren Bewohner Aufzeichnungen hinterlassen. Mit Rechtsklick liest du sie; danach stehen sie im Logbuch des Meisters unter „Fundstücke“, mit einem Bauplan der Station.

---

## ST7 · Horchposten (K7 Horchposten)

### ST7-01 Material für die Station · Hauptweg
**Aufgabe:** 2 × `ad_astra:oxygen_distributor`, `ad_astra:oxygen_loader`, `ad_astra:gravity_normalizer`, `ad_astra:launch_pad`, 4 × `mekanismgenerators:solar_generator`, `mekanism:advanced_energy_cube` voll geladen, `mekanism:electrolytic_separator`, 3 × `minecraft:white_bed`, 64 × `minecraft:glass`

DD3R8 braucht eine Station mit normalen Erd-Bedingungen. Sammle alles, was dafür nötig ist: Luft (zwei Sauerstoffverteiler), Strom (vier Solar Generators von Mekanism für ein eigenes Netz und ein voll geladener Advanced Energy Cube), Gravitations-Normalisierer, einen Landeplatz, Betten und Glas für die Kuppel.

### ST7-02 Die Station steht · Hauptweg
**Aufgabe:** Stage (heimlich von Host gesetzt, wird hier nicht beschrieben)

Baut die Station auf dem Mars nach den Plänen der ehemaligen Bewohner, dicht, mit Luft und Strom. Haltet euch dann zu dritt darin auf.

### ST7-03 Das Signal · Hauptweg
**Aufgabe:** Gespräch mit DD3R8 auf dem Mars (Dialog)

DD3R8 richtet seine Antenne aus. Sprich mit ihm in der Station.

**Steuerdatei:** `ST7-01 tasks = …; or(Bett; minecraft:white_bed, … alle 16 Farben); …` (🔵 3 Betten beliebiger Farbe: Smart Filter mit Tag `#minecraft:beds`, falls FTB Filter System Tags kann), `ST7-02 tasks = stage(story_st7_02)`, `ST7-03 tasks = stage(story_st7_03)`.

---

## ST8 · Hitze (K8 Hitze)

### ST8-01 Die heißeste Welt · Hauptweg
**Aufgabe:** Dimension `ad_astra:mercury` betreten

Das Signal führt zur Welt, die dem Stern am nächsten ist. Bau die Rakete T3 (Kapitel Ad Astra) und flieg hin. Dort ist es glühend heiß. Zieh vorher den Netherite Space Suit an (Kapitel Ad Astra); er schützt besser und hält dich dauerhaft feuerfest.

### ST8-02 Der Tempel · Hauptweg
**Aufgabe:** `kubejs:tempelrolle_1`, `kubejs:tempelrolle_2`, `kubejs:tempelrolle_3`, `kubejs:tempelrolle_4`

Irgendwo auf dem Merkur steht ein alter Tempel. Durchsuch ihn und nimm alle vier Schriftrollen mit. Mit Rechtsklick liest du eine Rolle; ihr Text steht danach auch im Logbuch des Meisters.

### ST8-03 Die Rollen · Hauptweg
**Aufgabe:** Abgabe im Dialog: die vier Tempelrollen

Bring die vier Rollen zu DD3R8 in die Station auf dem Mars.

**Steuerdatei:** `ST8-03 tasks = stage(story_st8_03)`.

---

## ST9 · Der Tempel (K9 Der Tempel)

### ST9-01 Siegel der Traumwelten · Hauptweg
**Aufgabe:** `kubejs:siegel_der_traumwelten`

Bodhi Bad Dur hat euch ein Geschenk versprochen, wenn alle vier Wächter seiner Welten besiegt sind. Hast du es schon, ist diese Quest sofort erledigt. Die Bosse findest du im Kapitel Blue Skies.

### ST9-02 Fund aus der Tiefe · Hauptweg
**Aufgabe:** `wrd:orb_of_the_deep`

In den alten Dungeons tief unter der Erde liegt in der Ancient Bone Chest ein Orb of the Deep. Wie du einen Dungeon findest und durchquerst, steht im Kapitel Roguelike Dungeons.

### ST9-03 Schutz für drei · Hauptweg
**Aufgabe:** 3 × `botania:goddess_charm`

Jeder von euch muss beim Durchgang einen Benevolent Goddess' Charm tragen, sonst lässt das Tor ihn nicht hinein. Drei Stück, für jeden einen. Das Rezept steht in der Lexica Botania.

### ST9-04 Der Altar · Hauptweg
**Aufgabe:** Altar im Tempel repariert

Geh mit einem Block Terrasteel, 4 Demonic Slate, dem Siegel der Traumwelten und dem Orb of the Deep zum kaputten Altar im Tempel und klick ihn mit Rechtsklick an. Danach steht das Ritual wieder. Wecke es wie jedes Ritual von Blood Magic. (Siehe Buch über Blood Magic)

### ST9-05 Das Endless Realm · Hauptweg
**Aufgabe:** `kubejs:relikt`

Geh durch das Tor ins Endless Realm. Folge den Gängen der Minen bis zur großen Halle, wo sie sich treffen. Dort liegt in einer Truhe, was der Meister zurückgelassen hat. Nimm alles mit und lies das Tagebuch. Tipp: Wechselt euch beim Tragen ab.

**Steuerdatei:** `ST9-01 deps = ST8-03`, `ST9-02 deps = ST8-03`, `ST9-03 deps = ST8-03` (die drei laufen nebeneinander), `ST9-04 tasks = stage(story_st9_04)` (das Altar-Skript hakt ab), `ST9-04 deps = ST9-01, ST9-02, ST9-03`.

---

## ST10 · Der Elf (K10 Der Elf)

### ST10-01 Die Station ist still · Hauptweg
**Aufgabe:** Häkchen „Gelesen“

Als ihr das Relikt genommen habt, ist DD3R8 aus der Station verschwunden. Ab jetzt zeigt euch das Tagebuch des Meisters den Weg. Lies es noch einmal genau.

### ST10-02 Das Elfenportal · Hauptweg
**Aufgabe:** `botania:alfheim_portal`

Der Meister schreibt von der Hellen Elfe hinter einem Tor aus lebendem Holz. Bau das Portal to Alfheim nach der Lexica Botania und öffne es. Hineingehen musst du nicht.

### ST10-03 Meisterin Cerina · Hauptweg
**Aufgabe:** Abgabe im Dialog: `kubejs:relikt`

Wirf eine Rune des Frühlings (`botania:rune_spring`) in das offene Portal to Alfheim. Dann ruft das Portal die Helle Elfe herbei. Sprich mit ihr und gib ihr das Relikt.

### ST10-04 Was sie braucht · Hauptweg
**Aufgabe:** Abgabe im Dialog: `blue_skies:ethereal_arc`, `blue_skies:dusk_arc`, `blue_skies:nature_arc`, `blue_skies:poison_arc`, `mekanism:ultimate_control_circuit`, `botania:elementium_block`

Meisterin Cerina will euch helfen, zum Meister zu gelangen. Dafür braucht sie die vier Arcs der Wächter aus Blue Skies, einen Ultimate Control Circuit und einen Block Elementium. Elementium bekommst du durch das Portal: Wirf Manasteel hinein.

**Steuerdatei:** `ST10-03 tasks = stage(story_st10_03)`, `ST10-04 tasks = stage(story_st10_04)`.

---

## ST11 · Glacio (K11 Glacio)

### ST11-01 Durch den Schleier · Hauptweg
**Aufgabe:** Dimension `ad_astra:glacio` betreten

Bau den Galaktischen Strahlenschutz in das Triebwerk der Rakete T4 (Kapitel Ad Astra) und flieg nach Glacio. Der Schleier um das Versteck des Meisters lässt dich durch, weil er erkennt, was im Triebwerk steckt.

### ST11-02 Das Versteck · Hauptweg
**Aufgabe:** Gespräch mit dem Meister (Dialog)

Irgendwo auf Glacio hat sich der Meister versteckt. Such ihn.

### ST11-03 Heimkehr · Hauptweg
**Aufgabe:** Dimension `minecraft:overworld` betreten

Der Meister und DD3R8 fliegen mit euch zur Erde. Bring sie nach Hause.

### ST11-04 Ende von Teil 1 · Hauptweg
**Aufgabe:** Gespräch mit Quinlan in der Basis (Dialog)

Der Meister ist auf der Erde. Sprich mit ihm in eurer Basis.

**Steuerdatei:** `ST11-02 tasks = stage(story_st11_02)`, `ST11-04 tasks = stage(story_st11_04)`.

## Offen beim Überarbeiten

Gegengelesen vom User am 2026-10-26: Dopplungen mit den Mod-Kapiteln bleiben (beide haken sich ab), ST7-01 mit 3 × `minecraft:white_bed`, ST9-04 und ST11-03 wie beschrieben.

- 🟢 **Netherite Space Suit** (User, 2026-10-26, O76): RF3-05 ist jetzt Hauptweg vor dem Merkur. Der Anzug ist im Spiel für die Hitze nicht nötig (Befund in `questtexte/adastra.md`); Pflicht ist er nur über die Quest.
