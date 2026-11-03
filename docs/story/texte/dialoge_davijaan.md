# Dialoge Davijaan (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (K4, D-DAVIJAAN). Figur: `../../18_STORY.md` („Der Einsiedler auf dem Mond“, Abschnitt 5 „Einsiedler: Odd Ball“, „Höhle und Klonhelm“). Lesart wie in `dialoge_dd3r8.md` (Name ≤ 32 Zeichen, Knopf ≤ 64, Text bis etwa 512, Einstieg über Bedingung und Priorität).
>
> **Leitlinien dieses Entwurfs**
> - Charakter: alt, lustiger Typ, Pilot. Er schaut den Spielern gern vom Mond aus zu und kommentiert, was er gesehen hat. Über seine Vergangenheit redet er nicht; Fragen danach weicht er mit einem Witz aus.
> - Dem Droiden misstraut er. Den Spielern auch, bis der Helm zurück ist; danach ist er herzlich auf seine knurrige Art.
> - Geheim bleibt (User, 2026-10-21): Odd Ball, CC-2237, Obi-Wans Flügelmann, Order 66. Erlaubt sind leise Anspielungen: Pilot, „Flügelmann“, „Droiden abgeschossen“, „ein Befehl“. Kein Name, keine Nummer, kein „Klon“.
> - Er nennt sich nur „Davijaan“. Den Droiden nennt er „Blechkopf“ oder „euer komischer Roboter“.
> - Die Mondbasis hat Luft, er ist verwundbar (O29).

Scoreboard `davijaan` (B2): 0 = noch nie gesprochen, 1 = Helm-Auftrag, 2 = Helm gerade zurück, 3 = Vertrauen (normaler Betrieb). DD3R8 prüft `davijaan ≥ 2` (ST4-07), Stufe 3 erfüllt das also ebenfalls.

---

## Stufe 0 · Besuch (K4, erstes Gespräch)

#### `v0_besuch` · Prio 100 · `davijaan = 0`
> Na sieh mal an. Drei Menschen, in Raumanzügen. Ich hab euch landen sehen. Ich seh alles von hier oben. Die Landung war … mutig.
- **[Wer bist du?]** → `v0_wer`
- **[Bist du der, der den Mond abschirmt?]** → `v0_schirm`

#### `v0_wer` · Prio 0
> Davijaan. Ich habe mich schon länger gefragt, wann einer von euch Erdmenschen hier hochkommt.
- **[Lebst du schon lange hier?]** → `v0_lange`

#### `v0_lange` · Prio 0
> Lange genug, um jeden Krater beim Vornamen zu kennen. Ich komme von weit, weit weg, aber das tut nichts zur Sache.
- **[Ein Droide schickt uns]** → `v0_droide`
- **[Dann bist du der, der den Mond abschirmt?]** → `v0_schirm`

#### `v0_schirm` · Prio 0
> Die Abschirmung? Ja, die ist von mir. Ich mag keinen unangekündigten Besuch. Ihr habt euch auch nicht angekündigt. Was wollt ihr hier?
- **[Ein Droide schickt uns]** → `v0_droide`

#### `v0_droide` · Prio 0
> Ein Droide hier im Outer Rim?! Ich hasse diese Klappergestelle! Solche haben viele meiner Kameraden auf dem Gewissen. Man kann ihnen niemals trauen!
- **[Und uns?]** → `v0_verloren`

#### `v0_verloren` · Prio 0
> Euch vielleicht. Wenn ihr was für mich tut. Da unten in der Höhle hab ich was verloren. Ich geh da nicht mehr hin. Meine Knie und die Viecher da unten verstehen sich nicht allzu gut.
- **[Was hast du verloren?]** → Befehle: `tag @initiator add story_st4_02`, `scoreboard players set @a davijaan 1` → `v0_helm`

#### `v0_helm` · Prio 0
> Einen Helm. Alt, verbeult, mit einem Funkgerät drin, das keiner mehr baut. Er hat mehr gesehen als ihr drei zusammen. Bringt ihn mir, dann reden wir weiter.
- **[Wo ist die Höhle?]** → `v1_weg`

---

## Stufe 1 · Der Helm (K4)

#### `v1_warten` · Prio 100 · `davijaan = 1`
> Und? Mein Helm? Ich hab euch zugesehen, wie ihr im Kreis lauft. Sehr unterhaltsam. Aber der Helm fehlt.
- **[Wo ist die Höhle?]** → `v1_weg`
- **[Er ist kaputt]** · Bedingung: im Inventar `kubejs:kaputter_klonhelm` → `v1_kaputt`
- **[Hier ist er, repariert]** · Bedingung: im Inventar `swgc:clone_212th_battalion_helmet` (der reparierte Helm ist der echte 212er-Helm, O71) → Befehle:
  `clear @initiator swgc:clone_212th_battalion_helmet 1`
  `tag @initiator add story_st4_05`
  `scoreboard players set @a davijaan 2`
  → `v2_helm`

#### `v1_weg` · Prio 0
> [Richtung zur Höhle, trägt der User ein]. Ein Gang, ein paar Räume, eine Truhe. Und Viecher, die nicht gern Besuch haben. Wie ich, nur mit mehr Zähnen.
- **[Wir holen ihn]** → schließen

#### `v1_kaputt` · Prio 0
> Kaputt? Natürlich ist er kaputt, er lag da unten Jahre im Staub. So nehm ich ihn nicht. Das Visier ist gesprungen und der Funk ist tot.
- **[Wie reparieren wir ihn?]** → `v1_reparatur`

#### `v1_reparatur` · Prio 0
> Stahlplatten für die Schale, Isolierglas fürs Visier, eine Steuerschaltung für die Anzeige und eine Elektronenröhre für den Funk. Hier ein Bauplan. Schafft ihr das?
- **[Ja, das kriegen wir hin.]** → Befehl: `give @initiator kubejs:bauplan_pilotenhelm 1` → schließen

Der Bauplan ist eine Rolle wie die übrigen: Rechtsklick schaltet das Reparaturrezept für die Welt frei und öffnet den Eintrag im Buch „Baupläne des Einsiedlers“, Kapitel „Erinnerungsstücke“. Es ist die erste Rolle der Welt, deshalb bekommen die Spieler damit auch das Buch (O71).

---

## Stufe 2 · Vertrauen (K4, gleich nach der Abgabe)

#### `v2_helm` · Prio 100 · `davijaan = 2`
> Der Funk geht wieder. Da ist nur noch Rauschen drauf. Aber er geht.
- **[Was ist das für ein Helm?]** → `v2_wessen`
- **[Gern geschehen]** → `v2_danke`

#### `v2_wessen` · Prio 0
> Meiner. Aus einer Zeit, in der ich jeden Tag geflogen bin. Dann kam die Order … und ich verschwand.
- **[In Ordnung]** → `v2_danke`

#### `v2_danke` · Prio 0
> Ihr seid in Ordnung. Für Leute, die beim Landen so aussehen. Hier, ein Geschenk. Damit könnt ihr was bauen, das aus meiner Welt kommt. 
- **[Was ist das?]** → Befehl: `give @initiator kubejs:bauplan_assembly_bench 1` → `v2_bauplan`

#### `v2_bauplan` · Prio 0
> Ein Bauplan. Lest ihn, dann wisst ihr, wie es geht. Ich habe noch mehr, gegen Credits. Credits gibt's bei mir für Arbeit. Und wer mir gutes Essen bringt, kriegt was vom Mond. Hier oben ist die Auswahl nicht ganz so gut. Gebt mal euer Buch her.
- **[Unser Questbuch?]** → `v2_buch`

#### `v2_buch` · Prio 0
> So. Da stehen jetzt meine Aufgaben drin. Für jede gibt's Credits.
- **[Und die anderen Einträge?]** → `v2_notizen`

#### `v2_notizen` · Prio 0
> Die Notizen über die Aufgaben eures dubiosen Droiden? Die lass ich drin. Ich bin ja höflich. Jetzt fragt endlich, weswegen ihr eigentlich gekommen seid.
- **[Wir suchen jemanden]** → `v2_mars`

#### `v2_mars` · Prio 0
> Hier oben findet ihr keinen, dafür sorg ich. Aber wollt ihr das Sonnensystem durchsuchen, geht auf den roten Planeten. Von da erreicht man jeden Planeten des Systems. Keine Abschirmung, kein alter Mann.
- **[Danke, Davijaan]** → Befehl: `scoreboard players set @a davijaan 3` → `v2_tschuess`

#### `v2_tschuess` · Prio 0
> Nennt mich Odd Ball. So nannte man mich früher in meiner Einheit. Macht’s gut und lasst euch mal wieder blicken.
- **[Bis bald]** → schließen

---

## Stufe 3 · Der Laden (ab K4, normaler Betrieb)

#### `v3_hallo` · Prio 100 · `davijaan ≥ 3`

Drei Texte zur Abwechslung (🔵 prüfen, ob Easy NPC mehrere Texte eines Dialogs zufällig zeigt; sonst nur den ersten nehmen):
> Da sind sie ja wieder. Ich hab euch gestern zugesehen. Großartig.
> Na? Wieder was explodiert? Von hier oben sieht das sehr hübsch aus.
> Ah, Kundschaft. Kommt rein, macht die Schleuse zu, Luft ist teuer.

- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Was gibt es zu tun?]** → `v3_aufgaben`
- **[Was verkaufst du?]** → `v3_waren`
- **[Wer bist du wirklich?]** → `v3_wer`
- **[Was hast du gegen Droiden?]** → `v3_droiden`
- **[Bis dann]** → schließen

#### `v3_aufgaben` · Prio 0
> Steht alles in eurem Buch. Sucht euch was aus, macht es, holt die Credits ab. Ich mag Leute, die was ausprobieren und lernen wollen.
- **[Zurück]** → `v3_hallo`

#### `v3_waren` · Prio 0
> Sachen, die es auf eurer Welt nicht gibt. Baupläne und ein bisschen Plastoid für den Anfang. Damals auf Geonosis haben wir aus dieser verfluchten Klappergestellfabrik einiges mitgehen lassen.
- **[Zurück]** → `v3_hallo`

#### `v3_wer` · Prio 0
> Ein alter Mann auf einem Stein im Himmel, der seiner Vergangenheit den Rücken gekehrt hat. Mehr bin ich nicht mehr.
- **[Zurück]** → `v3_hallo`

#### `v3_droiden` · Prio 0
> Nichts, solange sie weit weg sind. Ich hab viele Jahre lang auf welche geschossen, so was legt man nicht einfach ab. Euer Blechkopf kann nichts dafür. Vermutlich.
- **[Zurück]** → `v3_hallo`

---

## Rückfall

#### `v_standard` · Prio 1 · ohne Bedingung
> Hm? Ich bin beschäftigt. Kommt später wieder.
- **[Bis später]** → schließen

## Handel

Wird mit `tools/npc_preset.py` ins Preset gebaut (ersetzt alle Handel aus der Vorlage; Handelsart `ADVANCED`, Nutzungen bleiben verbraucht, kein Zurücksetzen). Preise und Begründung: `../../21_BALANCING.md` Abschnitt 5 (B8, 2026-11-03). 1 Gold Credit = 3 Iron = 15 Copper; ein Feld nimmt höchstens 64.

Davijaan ist die einzige Stelle, an der man Credits ausgibt. Alles ist von Anfang an zu sehen; die späten Stufen sind so teuer, dass man sie sich lange nicht leisten kann. Den Bauplan Assembly Bench schenkt er (`v2_danke`), der steht nicht im Handel.

| Preis | Preis 2 | Ware | Nutzungen | Stufe · Wert in Copper |
|---|---|---|---|---|
| 1 × `farmersdelight:roast_chicken_block` | 1 × `farmersdelight:roast_chicken_block` | 2 × `ad_astra:desh_ingot` | 16 | Essen gegen Mond-Rohstoffe (Festessen stapeln nur 1, deshalb zwei Felder) |
| 1 × `farmersdelight:honey_glazed_ham_block` | 1 × `farmersdelight:honey_glazed_ham_block` | 2 × `ad_astra:desh_ingot` | 16 | Essen gegen Mond-Rohstoffe |
| 8 × `kaleidoscope_cookery:borscht` | – | 8 × `ad_astra:ice_shard` | 16 | Essen gegen Mond-Rohstoffe |
| 8 × `kaleidoscope_cookery:egg_fried_rice` | – | 2 × `ad_astra:raw_desh` | 16 | Essen gegen Mond-Rohstoffe |
| 5 × `swgc:gold_credit` | – | 1 × `kubejs:bauplan_ruestung_klon` | 1 | 1 · 75 |
| 1 × `swgc:gold_credit` | – | 6 × `swgc:plastoid` | 8 | 1 · 15 (48 Plastoid = zwei Klon-Rüstungen) |
| 20 × `swgc:gold_credit` | – | 1 × `kubejs:bauplan_plastoid` | 1 | 2 · 300 |
| 20 × `swgc:gold_credit` | – | 1 × `kubejs:bauplan_durasteel` | 1 | 2 · 300 |
| 40 × `swgc:gold_credit` | – | 1 × `kubejs:bauplan_blaster` | 1 | 3 · 600 |
| 30 × `swgc:gold_credit` | – | 1 × `kubejs:bauplan_gas_harvester` | 1 | 3 · 450 |
| 30 × `swgc:gold_credit` | – | 1 × `kubejs:bauplan_ruestung_royal_guard` | 1 | 3 · 450 |
| 40 × `swgc:gold_credit` | – | 1 × `kubejs:bauplan_droid_fabricator` | 1 | 4 · 600 |
| 58 × `swgc:gold_credit` | – | 1 × `kubejs:bauplan_droide_b1` | 1 | 4 · 870 |
| 64 × `swgc:gold_credit` | 20 × `swgc:gold_credit` | 1 × `kubejs:bauplan_droide_b2` | 1 | 4 · 1.260 |
| 64 × `swgc:gold_credit` | 46 × `swgc:gold_credit` | 1 × `kubejs:bauplan_droide_droideka` | 1 | 4 · 1.650 |

## Offen beim Überarbeiten

Gegengelesen vom User am 2026-10-26; die früheren Punkte sind erledigt (Bauplan-Geschenk bleibt im Dialog, Order-Anspielung ist jetzt ausdrücklich).

- 🟢 **Er gibt sich zu erkennen** (User, 2026-10-26, O70): „Nennt mich Odd Ball“, „Outer Rim“, „Geonosis“, „die Order“. Seine Herkunft ist in Teil 1 nicht mehr geheim; was die Order war und wem er gedient hat, sagt er nicht.
- 🟢 **Helm und Bauplan** (User, 2026-10-26, O71): siehe `v1_reparatur`, Technik in `../ABLAUF.md`.
- 🟢 **Essen gegen Mond-Rohstoffe** (User, 2026-11-03, B8): Für gutes Essen gibt er Desh, Rohdesh und Ice Shards statt Credits (Tabelle „Handel“). Fassung 2 (User, 2026-11-03, nach Test 115): mehr Essen je Rohstoff, je Handel 16-mal; zusammen höchstens 64 Desh-Barren, 32 Rohdesh, 128 Ice Shards (Ice Shards verdoppelt, User 2026-11-03) für 64 Festessen und 256 Schüsseln. `v2_bauplan` und `v3_waren` von Claude angepasst (kein Durasteel mehr im Verkauf), bitte gegenlesen.
- **Mehrere Begrüßungstexte** (`v3_hallo`): ob Easy NPC zufällig wählt, ist weiter ungeprüft.
