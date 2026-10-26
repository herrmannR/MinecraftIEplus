# Dialoge Davijaan (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (K4, D-DAVIJAAN). Figur: `../../18_STORY.md` („Der Einsiedler auf dem Mond“, Abschnitt 5 „Einsiedler: Odd Ball“, „Höhle und Klonhelm“). Lesart wie in `dialoge_dd3r8.md` (Name ≤ 32 Zeichen, Knopf ≤ 64, Text bis etwa 512, Einstieg über Bedingung und Priorität).
>
> **Leitlinien dieses Entwurfs**
> - Charakter: alt, lustiger Typ, Pilot. Er schaut den Spielern gern vom Mond aus zu und kommentiert, was er gesehen hat. Über seine Vergangenheit redet er nicht; Fragen danach weicht er mit einem Witz aus.
> - Dem Droiden misstraut er. Den Spielern auch, bis der Helm zurück ist; danach ist er herzlich auf seine knurrige Art.
> - Geheim bleibt (User, 2026-10-21): Odd Ball, CC-2237, Obi-Wans Flügelmann, Order 66. Erlaubt sind leise Anspielungen: Pilot, „Flügelmann“, „Droiden abgeschossen“, „ein Befehl“. Kein Name, keine Nummer, kein „Klon“.
> - Er nennt sich nur „Davijaan“. Den Droiden nennt er „Blechkopf“ oder „euer komischer Roboter“.
> - Die Mondbasis hat Luft, er ist verwundbar (O29).

Scoreboard `story`, Eintrag `#davijaan` (B2): 0 = noch nie gesprochen, 1 = Helm-Auftrag, 2 = Helm gerade zurück, 3 = Vertrauen (normaler Betrieb). DD3R8 prüft `#davijaan ≥ 2` (ST4-07), Stufe 3 erfüllt das also ebenfalls.

---

## Stufe 0 · Besuch (K4, erstes Gespräch)

#### `v0_besuch` · Prio 100 · `#davijaan = 0`
> Na sieh mal an. Drei Menschen, in Raumanzügen. Ich hab euch landen sehen. Ich seh alles von hier oben. Die Landung war … mutig.
- **[Wer bist du?]** → `v0_wer`
- **[Du bist der, der den Mond abschirmt?]** → `v0_schirm`

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
- **[Was hast du verloren?]** → Befehle: `ftbquests change_progress @initiator complete <ST4-02>`, `scoreboard players set #davijaan story 1` → `v0_helm`

#### `v0_helm` · Prio 0
> Einen Helm. Alt, verbeult, mit einem Funkgerät drin, das keiner mehr baut. Er hat mehr gesehen als ihr drei zusammen. Bringt ihn mir, dann reden wir weiter.
- **[Wo ist die Höhle?]** → `v1_weg`

---

## Stufe 1 · Der Helm (K4)

#### `v1_warten` · Prio 100 · `#davijaan = 1`
> Und? Mein Helm? Ich hab euch zugesehen, wie ihr im Kreis lauft. Sehr unterhaltsam. Aber der Helm fehlt.
- **[Wo ist die Höhle?]** → `v1_weg`
- **[Er ist kaputt]** · Bedingung: im Inventar `kubejs:kaputter_klonhelm` → `v1_kaputt`
- **[Hier ist er, repariert]** · Bedingung: im Inventar `swgc:clone_212th_battalion_helmet` (der reparierte Helm ist der echte 212er-Helm, O71) → Befehle:
  `clear @initiator swgc:clone_212th_battalion_helmet 1`
  `ftbquests change_progress @initiator complete <ST4-05>`
  `scoreboard players set #davijaan story 2`
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

#### `v2_helm` · Prio 100 · `#davijaan = 2`
> *Er dreht den Helm lange in den Händen.* … Der Funk geht wieder. Da ist nur noch Rauschen drauf. Aber er geht.
- **[Was ist das für ein Helm?]** → `v2_wessen`
- **[Gern geschehen]** → `v2_danke`

#### `v2_wessen` · Prio 0
> Meiner. Aus einer Zeit, in der ich jeden Tag geflogen bin. Dann kam die Order … und ich verschwand.
- **[In Ordnung]** → `v2_danke`

#### `v2_danke` · Prio 0
> Ihr seid in Ordnung. Für Leute, die beim Landen so aussehen. Hier, ein Geschenk. Damit könnt ihr was bauen, das aus meiner Welt kommt. 
- **[Was ist das?]** → Befehl: `give @initiator kubejs:bauplan_assembly_bench 1` → `v2_bauplan`

#### `v2_bauplan` · Prio 0
> Ein Bauplan. Lest ihn, dann wisst ihr, wie es geht. Ich habe noch mehr, gegen Credits. Und Credits gibt's bei mir für Arbeit oder für gutes Essen. Hier auf dem Mond ist die Auswahl nicht ganz so gut. Gebt mal euer Buch her.
- **[Unser Questbuch?]** → `v2_buch`

#### `v2_buch` · Prio 0
> *Er kritzelt hinein.* So. Da stehen jetzt meine Aufgaben drin. Für jede gibt's Credits.
- **[Und die anderen Einträge?]** → `v2_notizen`

#### `v2_notizen` · Prio 0
> Die Notizen über die Aufgaben eures dubiosen Droiden? Die lass ich drin. Ich bin ja höflich. Jetzt fragt endlich, weswegen ihr eigentlich gekommen seid.
- **[Wir suchen jemanden]** → `v2_mars`

#### `v2_mars` · Prio 0
> Hier oben findet ihr keinen, dafür sorg ich. Aber wollt ihr das Sonnensystem durchsuchen, geht auf den roten Planeten. Von da erreicht man jeden Planeten des Systems. Keine Abschirmung, kein alter Mann.
- **[Danke, Davijaan]** → Befehl: `scoreboard players set #davijaan story 3` → `v2_tschuess`

#### `v2_tschuess` · Prio 0
> Nennt mich Odd Ball. So nannte man mich früher in meiner Einheit. Macht’s gut und lasst euch mal wieder blicken.
- **[Bis bald]** → schließen

---

## Stufe 3 · Der Laden (ab K4, normaler Betrieb)

#### `v3_hallo` · Prio 100 · `#davijaan ≥ 3`

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
> Sachen, die es auf eurer Welt nicht gibt. Baupläne, Durasteel, ein bisschen Plastoid für den Anfang. Damals auf Geonosis haben wir aus dieser verfluchten Klappergestellfabrik einiges mitgehen lassen.
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

## Offen beim Überarbeiten

Gegengelesen vom User am 2026-10-26; die früheren Punkte sind erledigt (Bauplan-Geschenk bleibt im Dialog, Order-Anspielung ist jetzt ausdrücklich).

- 🟢 **Er gibt sich zu erkennen** (User, 2026-10-26, O70): „Nennt mich Odd Ball“, „Outer Rim“, „Geonosis“, „die Order“. Seine Herkunft ist in Teil 1 nicht mehr geheim; was die Order war und wem er gedient hat, sagt er nicht.
- 🟢 **Helm und Bauplan** (User, 2026-10-26, O71): siehe `v1_reparatur`, Technik in `../ABLAUF.md`.
- **Credits für Essen** (`v2_bauplan`): Er zahlt auch für „gutes Essen“. Welche Gerichte (Kaleidoscope, Farmer's Delight) und zu welchem Preis, stellst du im Handel ein oder legst du als Nebenquests fest.
- **Mehrere Begrüßungstexte** (`v3_hallo`): ob Easy NPC zufällig wählt, ist weiter ungeprüft.
