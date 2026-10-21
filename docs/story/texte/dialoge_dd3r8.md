# Dialoge DD3R8 (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf, Dialogstufen und Quest-Codes: `../ABLAUF.md` (D-DD3R8-0 … 7). Figur: `../../18_STORY.md` („Figuren“).
>
> **Leitlinien dieses Entwurfs**
> - Charakter: lustig, aber mechanisch ernst. Er rechnet in Prozent, nimmt alles wörtlich, ist leicht gekränkt und hängt an seinem Meister.
> - Er verrät seine Herkunft nicht („von woanders“). Erlaubt sind kleine Anspielungen (O9): „Meister“, Prozentangaben, einmal „Ich habe ein schlechtes Gefühl dabei“ (K7) und dessen Umkehrung in K3.
> - Er erklärt im Klartext, was die Rätseltexte nur andeuten (Zutaten in K9). Er ist der Guide.
> - Keine Item-IDs im gesprochenen Text, nur Namen, wie sie im Spiel heißen.

## So ist der Entwurf zu lesen

Easy NPC 7.14 (aus dem JAR, 2026-10-21): Ein Dialog hat einen **Namen** (höchstens 32 Zeichen), **Texte**, **Knöpfe** (Beschriftung höchstens 32 Zeichen, gut lesbar bis 20), **Bedingungen** und eine **Priorität**. `@initiator` im Text wird durch den Namen des Spielers ersetzt.

- **Einstieg:** Jede Stufe hat einen Einstiegsdialog mit Bedingung auf das Scoreboard `story`, Eintrag `#dd3r8` (B2). Die Priorität entscheidet, wenn mehrere passen (höhere Zahl zuerst). 🔵 Im Spiel prüfen, dass beim Ansprechen der passende Einstieg öffnet und Unterdialoge (Priorität 0, ohne Bedingung) nur über Knöpfe erreichbar sind.
- **Texte** sind höchstens etwa 190 Zeichen lang (Zeilengrenze 192). Längeres ist auf mehrere Dialoge mit Knopf „Weiter“ verteilt.
- **Knopf mit Bedingung** (z. B. Items im Inventar) bleibt sichtbar und ist erst klickbar, wenn die Bedingung erfüllt ist (Test 29).
- `<ST3-05>` usw. steht für die Quest-ID, die `QuestbuchGen` aus dem Code erzeugt; die echten IDs trage ich ein, sobald Buch 1 gebaut ist.
- Alle Befehle mit `@a` gelten für alle drei Spieler; `@initiator` ist, wer gerade spricht.

Schreibweise: **[Knopf]** → Ziel. *Kursiv* sind Geräusche oder Gesten.

---

## Stufe 0 · Der Einschlag (K1, in der Kapsel)

#### `d0_einschlag` · Prio 100 · `#dd3r8 = 0`
> *Zischen. Eine Klappe springt auf.* Systemprüfung … 61 Prozent. Beine: vorhanden. Würde: beschädigt. Oh. Hallo. Ihr müsst die drei sein.
- **[Wer bist du?]** → `d0_wer`
- **[Was hast du angerichtet?]** → `d0_basis`

#### `d0_wer` · Prio 0
> Ich bin DD3R8, Begleitdroide. Mein Meister hat mich zu euch geschickt. Seine letzten Worte: „Such Hilfe bei der nächsten Lebensform.“ Ihr wart die nächste. Glückwunsch.
- **[Wo ist dein Meister?]** → `d0_meister`

#### `d0_basis` · Prio 0
> Die Druckwelle hat eure großen Maschinen auseinandergeschoben. Nicht kaputt, nur beleidigt. Baut sie neu zusammen. Die Kapsel hat keine Bremsen. Kein Fehler von mir.
- **[Und wer bist du?]** → `d0_wer`

#### `d0_meister` · Prio 0
> Er war auf einer Mission in diesem System. Dann brach der Kontakt ab. Sein Datenspeicher hat beim Aufprall gelitten. Ich entschlüssele ihn. Den ersten Teil habe ich.
- **[Zeig her]** → Befehle: `logbuch teil1` → `d0_hilfe`

#### `d0_hilfe` · Prio 0
> Lest es. Es ist nicht viel. Er schreibt selten, und wenn, dann in Rätseln. Ich habe ihn oft gebeten, deutlicher zu sein. Er hat gelächelt. Das war keine Antwort.
- **[Wir helfen dir]** → `d0_beweis`

#### `d0_beweis` · Prio 0
> Das ist freundlich. Aber freundlich reicht nicht für eine Reise zwischen den Sternen. Ich brauche einen Beweis, dass eure Spezies weit entwickelt ist.
- **[Was für einen Beweis?]** → Befehl: `scoreboard players set #dd3r8 story 1` → `d1_liste`

---

## Stufe 1 · Würdig sein (K2)

#### `d1_wuerdig` · Prio 100 · `#dd3r8 = 1`
> Habt ihr den Beweis? Ich zähle mit.
- **[Was brauchst du noch mal?]** → `d1_liste`
- **[Hier ist alles]** · Bedingung: im Inventar `tconstruct:smeltery_controller`, `immersiveengineering:capacitor_lv`, 4 × `botania:manasteel_ingot` → Befehle:
  `clear @initiator tconstruct:smeltery_controller 1`
  `clear @initiator immersiveengineering:capacitor_lv 1`
  `clear @initiator botania:manasteel_ingot 4`
  `scoreboard players set #dd3r8 story 2`
  → `d1_bestanden`
- **[Noch nicht]** → schließen

#### `d1_liste` · Prio 0
> Drei Dinge. Einen Smeltery Controller: Feuer, gezähmt. Einen LV-Kondensator: Blitz, eingesperrt. Und vier Manasteel-Barren. Das dritte verstehe ich selbst nicht ganz.
- **[Verstanden]** → schließen

#### `d1_bestanden` · Prio 0
> *Summen.* Analyse abgeschlossen. Ergebnis: weit entwickelt. Mit Abzügen für die Ordnung in euren Truhen.
- **[Und das Metall?]** → `d1_mana`

#### `d1_mana` · Prio 0
> Das Metall aus Blumen misst sich seltsam. Eine Energie, die alles Lebende verbindet. Ich kenne sie. Woher, ist nicht wichtig. Wichtig ist: Ihr könnt sie lenken.
- **[Und jetzt?]** → Befehle: `give @a ftbquests:book`, `kubejs stages add @a kapitel_k1`, `kubejs stages add @a kapitel_k2` → `d1_buch`

#### `d1_buch` · Prio 0
> Ein Notizbuch für eure Aufgaben. Der erste Eintrag ist erledigt, den dürft ihr abhaken. Menschen mögen das, habe ich gelesen.
- **[Was steht noch drin?]** → `d1_buch2`

#### `d1_buch2` · Prio 0
> Daneben kleine Aufgaben von mir, um euch intelligenter zu machen. Nicht persönlich gemeint. Belohnung gibt es auch. Klein. Ich bin ein Droide, keine Bank.
- **[Danke … glaube ich]** → schließen

---

## Stufe 2 · Das Haus (K3)

Logbuch Teil 2 kommt mit dem Abhaken von „Würdig sein“ (ST2-01).

#### `d2_bericht` · Prio 110 · `#dd3r8 = 2` und `#bodhi ≥ 2`
> Ihr wart bei ihm. Und ihr habt Zinn gebracht. Mein Vertrauen in eure Spezies steigt um vier Prozent.
- **[Was kommt jetzt?]** → Befehle: `ftbquests change_progress @initiator complete <ST3-05>`, `scoreboard players set #dd3r8 story 3` → `d2_mond`

#### `d2_mond` · Prio 0
> Der dritte Teil ist entschlüsselt. Mein Meister wollte von eurem Mond aus horchen. Baut eine Rakete, fliegt hin, sagt mir, was ihr hört. Ich habe ein gutes Gefühl dabei. Das ist neu.
- **[Wir fliegen]** → schließen

#### `d2_haus` · Prio 100 · `#dd3r8 = 2`
> Ich habe etwas gemessen. Nicht weit von hier steht ein Haus. Seine Steine schwingen wie Dinge von … woanders. Licht und Dämmerung. Ich verstehe es nicht. Ich mag das nicht.
- **[Wo ist das Haus?]** → `d2_weg`

#### `d2_weg` · Prio 0
> [Richtung oder Koordinaten, trägt der User ein]. Dort lebt einer, der sich Herrscher nennt. Er kennt Wege zu Metallen, die eure Welt nicht hat. Zinn. Osmium. Ohne die fliegt nichts.
- **[Wir gehen hin]** → schließen

---

## Stufe 3 · Der Mond (K4)

#### `d3_bericht` · Prio 110 · `#dd3r8 = 3` und `#davijaan ≥ 2`
> Ihr seht aus, als hättet ihr jemanden getroffen. Ein Einsiedler? Der den Mond abschirmt? Und mich nicht leiden kann? … Ich verstehe.
- **[Er sagt, vom Mars geht es]** → Befehle: `ftbquests change_progress @initiator complete <ST4-07>`, `scoreboard players set #dd3r8 story 4` → `d3_mars`

#### `d3_mars` · Prio 0
> Die vierte Welt. Weiter, kälter, mehr Staub. Ein Horchposten braucht Strom, Luft und einen, der zuhört. Das wäre ich. Die Sache mit dem Leiden-Können übergehe ich.
- **[Gut so]** → schließen

#### `d3_warten` · Prio 100 · `#dd3r8 = 3`
> Ihr seid noch nicht auf dem Mond. Eine Rakete fliegt nicht, wenn man sie nur ansieht. Ich habe es ausprobiert. Lange.
- **[Was fehlt uns?]** → `d3_hilfe`
- **[Wir sind dran]** → schließen

#### `d3_hilfe` · Prio 0
> Stahl, Platten, Treibstoff aus Pflanzen. Und Luft zum Atmen, dort oben gibt es keine. Euer Buch weiß den Rest. Ich habe es selbst hineingeschrieben.
- **[Danke]** → schließen

---

## Stufe 4 · Treibstoff für den Mars (K5)

#### `d4_treibstoff` · Prio 100 · `#dd3r8 = 4`
> Für die vierte Welt reicht euer Pflanzentreibstoff nicht. Ich habe zweimal nachgerechnet, es wurde nicht besser. Bringt mir eine Probe des Besseren.
- **[Was genau?]** → `d4_liste`
- **[Hier, beides]** · Bedingung: im Inventar `immersivepetroleum:diesel_bucket`, `mekanism:advanced_control_circuit` → Befehle:
  `clear @initiator immersivepetroleum:diesel_bucket 1`
  `clear @initiator mekanism:advanced_control_circuit 1`
  `give @initiator minecraft:bucket 1`
  `ftbquests change_progress @initiator complete <ST5-01>`
  `scoreboard players set #dd3r8 story 5`
  → `d4_danke`

#### `d4_liste` · Prio 0
> Einen Eimer Diesel ohne Schwefel. Und einen Advanced Control Circuit. Wenn ihr beides könnt, könnt ihr auch eine Rakete für den Mars.
- **[Verstanden]** → schließen

#### `d4_danke` · Prio 0
> Sauber. Fast zu sauber. Den Eimer bekommt ihr zurück, ich habe keine Verwendung dafür. Jetzt die Rakete. Und dann eine Station.
- **[Eine Station?]** → `d5_station`

---

## Stufe 5 · Die Station (K6, K7, noch in der Basis)

#### `d5_station` · Prio 100 · `#dd3r8 = 5`
> Auf dem Mars, mit Strom, Luft, Betten und einem Landeplatz. Die Liste steht in eurem Buch. Wenn ihr zu dritt dort seid, komme ich nach.
- **[Was nimmst du mit?]** → `d5_packen`
- **[Bis bald]** → schließen

#### `d5_packen` · Prio 0
> Ich packe schon. Ich besitze nichts. Das Packen geht schnell.
- **[…]** → schließen

---

## Stufe 6 · Das Signal (K7, in der Mars-Station)

Der User setzt DD3R8 in die Station (O55), wenn ST7-02 erledigt ist.

#### `d6_ankunft` · Prio 100 · `#dd3r8 = 6`
> *Rauschen.* Ich bin da. Schöne Aussicht. Rot. Sehr rot. Gebt mir einen Moment, ich richte die Antenne aus.
- **[Hörst du etwas?]** → `d6_signal`

#### `d6_signal` · Prio 0
> Da. Sein Kanal. Ein Bruchstück, alt, aber seins. Er lebt. Oder er hat gelebt, als er das gesendet hat. Ich rechne nicht nach, wie lange das her ist.
- **[Wohin führt es?]** → Befehle: `ftbquests change_progress @initiator complete <ST7-03>`, `scoreboard players set #dd3r8 story 7` → `d6_merkur`

#### `d6_merkur` · Prio 0
> Zur heißesten Welt, nah am Stern. Dort steht ein Tempel. Ich habe ein schlechtes Gefühl dabei.
- **[Wir sehen nach]** → schließen

---

## Stufe 7 · Die Rollen (K8, Mars-Station)

#### `d7_rollen` · Prio 100 · `#dd3r8 = 7`
> Der Tempel. Habt ihr dort etwas gefunden? Schriften, Zeichen, Kratzer an der Wand? Ich nehme alles.
- **[Vier Rollen]** · Bedingung: im Inventar `kubejs:tempelrolle_1` bis `_4` → Befehle:
  `clear @initiator kubejs:tempelrolle_1 1` (ebenso `_2`, `_3`, `_4`)
  `ftbquests change_progress @initiator complete <ST8-03>`
  `scoreboard players set #dd3r8 story 8`
  → `d7_erkenntnis`
- **[Noch nichts]** → schließen

#### `d7_erkenntnis` · Prio 0
> *Lange Pause.* Das Tor bricht an einem, der zu stark ist. Der Altar ist gebrochen. Er ist nicht im Tempel. Er ist dahinter.
- **[Was tun wir?]** → `d7_auftrag`

#### `d7_auftrag` · Prio 0
> Wir heilen den Altar. Die vierte Rolle sagt, womit: Metall, das lebt. Stein, der Blut trank. Ein Zeichen aus den Welten, die träumen. Etwas aus der Tiefe.
- **[Und dann?]** → `d7_schutz`

#### `d7_schutz` · Prio 0
> Dann geht ihr hindurch. Ich nicht, einer muss hier horchen, falls er sich meldet. Der letzte Teil seines Speichers ist fertig. Lest ihn, bevor ihr geht. Bitte.
- **[Versprochen]** → schließen

---

## Stufe 8 · Vorbereitung (K9, Mars-Station)

Sobald die Spieler das Relikt haben, verschwindet DD3R8 (ST9-05). Danach spricht ihn niemand mehr an, bis Glacio.

#### `d8_warten` · Prio 100 · `#dd3r8 = 8`
> Habt ihr alles für den Altar? Ich kann übersetzen, was die Rolle meint. Das ist das Mindeste. Und das Meiste, was ich von hier aus tun kann.
- **[Metall, das lebt?]** → `d8_metall`
- **[Stein, der Blut trank?]** → `d8_stein`
- **[Das Zeichen?]** → `d8_zeichen`
- **[Die Tiefe?]** → `d8_tiefe`
- **[Und der Schutz?]** → `d8_schutz`

#### `d8_metall` · Prio 0
> Terrasteel. Das grüne Metall aus euren Blumenbecken. Es lebt, ich habe es gemessen. Ich messe nicht gern Metall, das zurückmisst.
- **[Zurück]** → `d8_warten`

#### `d8_stein` · Prio 0
> Vier Imbued Slate aus eurem Blutaltar. Ich bin nicht begeistert, dass ihr so etwas habt. Aber hier ist es nützlich.
- **[Zurück]** → `d8_warten`

#### `d8_zeichen` · Prio 0
> Die Welten, die träumen, sind die hinter dem Haus. Fragt ihren Herrscher. Wenn ihr ihm seine Welten zurückgebt, gibt er euch vielleicht ein Siegel.
- **[Zurück]** → `d8_warten`

#### `d8_tiefe` · Prio 0
> In euren alten Grüften, tief unter der Erde, liegt ein Orb of the Deep in den Schatztruhen. Geht nicht in Eisen hinein. Ich sage das aus Erfahrung mit Eisen.
- **[Zurück]** → `d8_warten`

#### `d8_schutz` · Prio 0
> Jeder von euch trägt etwas Lebendiges am Körper. Drei Stück, nicht eins für alle. Ich habe nur drei von euch. Ich hätte gern auch nach dem Tor noch drei.
- **[Zurück]** → `d8_warten`

---

## Stufe 10 · Wiedersehen (K11, Versteck auf Glacio)

Stufe 9 hat keinen Dialog: DD3R8 ist verschwunden. Mit ST11-01 erscheinen er und der Meister im Versteck.

#### `d10_glacio` · Prio 100 · `#dd3r8 = 10`
> Ihr! Ich wusste es. Ich habe eine Wette gegen mich selbst gewonnen. Und verloren. Es ist kompliziert.
- **[Wie kommst du hierher?]** → `d10_wie`

#### `d10_wie` · Prio 0
> Ich saß in der Station und horchte. Dann war da ein Ziehen, und dann war ich hier. Er hat mich geholt. Wie, fragt ihn selbst. Ich habe aufgegeben, ihn zu verstehen.
- **[Wo ist er?]** → `d10_meister`

#### `d10_meister` · Prio 0
> Dort drüben. Er sieht müde aus. Seid freundlich zu ihm. Und gebt ihm, was ihr für ihn tragt. Vorsichtig.
- **[Machen wir]** → schließen

---

## Rückfall

#### `d_standard` · Prio 1 · ohne Bedingung
> *Surren.* Ich habe gerade nichts Neues. Kommt später wieder. Ich laufe nicht weg. Das kann ich nicht so gut.
- **[Bis später]** → schließen

## Offen beim Überarbeiten

- **Warum DD3R8 nicht selbst ins Endless Realm geht:** Im Entwurf bleibt er, um zu horchen (`d7_schutz`). Die Story sagt nur, dass er das Relikt nicht holen kann. Reicht dir das, oder soll es einen anderen Grund geben?
- **Richtung zum Blue-Skies-Haus** (`d2_weg`) trägst du ein, sobald das Haus gewählt ist.
- **Stufe 10 nach der Heimkehr:** Wenn DD3R8 mit Vos in der Basis steht (ST11-03), braucht er einen Dialog für Teil 2. Kommt mit Teil 2.
- **Anspielungen:** „Ich habe ein schlechtes Gefühl dabei“ (`d6_merkur`) ist die deutlichste. Lassen?
- **Eimer zurück** (`d4_danke`): kleiner Komfort, damit der Eimer nicht verloren geht. Streichen, wenn unnötig.
