# Dialoge DD3R8 (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf, Dialogstufen und Quest-Codes: `../ABLAUF.md` (D-DD3R8-0 … 7). Figur: `../../18_STORY.md` („Figuren“).
>
> **Leitlinien dieses Entwurfs**
> - Charakter: lustig, aber mechanisch ernst. Er rechnet in Prozent, nimmt alles wörtlich, ist leicht gekränkt und hängt an seinem Meister.
> - Er verrät seine Herkunft nicht („von woanders“). Erlaubt sind kleine Anspielungen (O9): „Meister“, Prozentangaben, einmal „Ich habe ein schlechtes Gefühl dabei“ (K7) und dessen Umkehrung in K3.
> - Er erklärt im Klartext, was die Rätseltexte nur andeuten (Zutaten in K9). Er ist der Guide.
> - Keine Item-IDs im gesprochenen Text, nur Namen, wie sie im Spiel heißen.
> - **Keine Entscheidungen mit Folgen** (User, 2026-10-21, O61): Knöpfe verzweigen nur das Gespräch, alle Wege führen zum selben Ergebnis. Gilt für alle Figuren in Teil 1.

## So ist der Entwurf zu lesen

Easy NPC 7.14 (aus dem JAR, 2026-10-21): Ein Dialog hat einen **Namen** (höchstens 32 Zeichen), **Texte**, **Knöpfe** (Beschriftung höchstens 64 Zeichen; bis 20 Zeichen passen mehrere nebeneinander, längere stehen einzeln), **Bedingungen** und eine **Priorität**. `@initiator` im Text wird durch den Namen des Spielers ersetzt.

- **Einstieg:** Jede Stufe hat einen Einstiegsdialog mit Bedingung auf das Scoreboard `story`, Eintrag `#dd3r8` (B2). Die Priorität entscheidet, wenn mehrere passen (höhere Zahl zuerst). 🔵 Im Spiel prüfen, dass beim Ansprechen der passende Einstieg öffnet und Unterdialoge (Priorität 0, ohne Bedingung) nur über Knöpfe erreichbar sind.
- **Texte** dürfen bis etwa 512 Zeichen lang sein (Eingabefeld im Editor); 192 ist nur die Zeilenbreite in Pixeln, längere Texte werden umgebrochen (JAR geprüft 2026-10-26, `easy_npc_config_ui`). 🔵 Im Spiel ansehen, ab wie vielen Zeilen es unübersichtlich wird.
- **Knopf mit Bedingung** (z. B. Items im Inventar) bleibt sichtbar und ist erst klickbar, wenn die Bedingung erfüllt ist (Test 29).
- `<ST3-05>` usw. steht für die Quest-ID, die `QuestbuchGen` aus dem Code erzeugt; die echten IDs trage ich ein, sobald Buch 1 gebaut ist.
- Alle Befehle mit `@a` gelten für alle drei Spieler; `@initiator` ist, wer gerade spricht.

Schreibweise: **[Knopf]** → Ziel. *Kursiv* sind Geräusche oder Gesten.

---

## Stufe 0 · Der Einschlag (K1, in der Kapsel)

#### `d0_einschlag` · Prio 100 · `#dd3r8 = 0`
> *Zischen. Eine Klappe springt auf.* Systemprüfung … 61 Prozent. Beine: vorhanden. Würde: beschädigt. Oh. Hallo. Seid ihr die drei Brüder der Spezies Mensch?
- **[Ähh ja... Wer bist du?]** → `d0_wer`
- **[Was zum Teufel hast du hier angestellt?]** → `d0_basis`

#### `d0_wer` · Prio 0
> Ich bin DD3R8, Droidika der 2. Generation mit erweiterten Schaltkreisen für Sprache und Umgebungsanalyse. Mein Meister hat mich zu euch geschickt. Seine letzten Worte: „Such Hilfe bei der nächsten intelligenten Lebensform.“ Ihr wart die nächste. Glückwunsch.
- **[Wo ist dein Meister?]** → `d0_meister`

#### `d0_basis` · Prio 0
> Bitte um Verzeihung. Zielkoordinaten waren um 0,01% verschoben. Ich sollte eigentlich einen Kilometer weiter östlich im Meer landen. Die Reise hier hin war etwas stürmisch...
- **[Und wer bist du überhaupt?]** → `d0_wer`
- **[Stürmisch...?]** → `d0_meister`

#### `d0_meister` · Prio 0
> Mein Meister war auf einer Mission in diesem System. Dann gerieten wir in einen Sonnensturm und wurden getrennt. Der Funkkontakt brach ab, und der Datenspeicher hat beim Aufprall gelitten. Moment, ich entschlüssele ihn. Das ist der erste Teil.
- **[Zeig her]** → Befehle: `logbuch teil1` → `d0_hilfe`

#### `d0_hilfe` · Prio 0
> Hier, es ist nicht viel. Er schreibt selten, und wenn, dann in Rätseln. Ich habe ihn oft gebeten, deutlicher zu sein. Er hat gelächelt. Das war keine Antwort. Ich muss ihn finden.
- **[Wir helfen dir]** → `d0_beweis`

#### `d0_beweis` · Prio 0
> Das ist freundlich. Aber freundlich reicht nicht für eine Reise zwischen den Sternen. Ich brauche einen Beweis, dass eure Spezies weit genug entwickelt ist.
- **[Was für einen Beweis?]** → Befehl: `scoreboard players set #dd3r8 story 1` → `d1_liste`

---

## Stufe 1 · Würdig sein (K2)

#### `d1_wuerdig` · Prio 100 · `#dd3r8 = 1`
> Habt ihr den Beweis?
- **[Was brauchst du noch mal?]** → `d1_liste`
- **[Hier ist alles]** · Bedingung: Spieler-Tag `ieplus_kobalthammer` (setzt ein Skript, solange ein Vorschlaghammer ganz aus Kobalt im Inventar ist; O67) und im Inventar `immersiveengineering:capacitor_lv`, `botania:manasteel_block` → Befehle:
  `clear @initiator tconstruct:sledge_hammer 1`
  `clear @initiator immersiveengineering:capacitor_lv 1`
  `clear @initiator botania:manasteel_block 1`
  `scoreboard players set #dd3r8 story 2`
  → `d1_bestanden`
- **[Noch nicht]** → schließen

#### `d1_liste` · Prio 0
> Drei Dinge. Handwerkliches Geschick: einen reinen Kobalthammer. Technisches Verständnis: einen LV-Kondensator. Und zu guter Letzt: Bindet die Macht, die uns alle umgibt, und bringt mir einen Block Manastahl.
- **[Verstanden]** → schließen

#### `d1_bestanden` · Prio 0
> *Summen.* Analyse abgeschlossen. Ergebnis: weit entwickelt. Nur die Ordnung in euren Truhen lässt zu wünschen übrig … Aber dabei kann ich euch vielleicht noch helfen.
- **[Und jetzt?]** → Befehle: `give @a ftbquests:book`, `kubejs stages add @a kapitel_k1`, `kubejs stages add @a kapitel_k2` → `d1_buch`

#### `d1_buch` · Prio 0
> Hier, ein Notizbuch für euch. Der erste Eintrag ist erledigt, den dürft ihr abhaken. Menschen mögen das, habe ich gelesen.
- **[Was steht da alles drin?]** → `d1_buch2`

#### `d1_buch2` · Prio 0
> Alles, womit ihr mir helfen könnt, meinen Meister zu finden, und kleine Aufgaben von mir, um euch etwas intelligenter zu machen. Belohnung gibt es auch, aber nur Kleinigkeiten. Ich bin ein Droide, keine Bank.
- **[Okayy … danke.]** → schließen

---

## Stufe 2 · Das Haus (K3)

Logbuch Teil 2 kommt mit dem Abhaken von „Würdig sein“ (ST2-01).

#### `d2_bericht` · Prio 110 · `#dd3r8 = 2` und `#bodhi ≥ 2`
> Ihr wart bei ihm. Und ihr habt Zinn mitgebracht. Mein Vertrauen in eure Spezies steigt um vier Prozent.
- **[Was kommt jetzt?]** → Befehle: `ftbquests change_progress @initiator complete <ST3-05>`, `scoreboard players set #dd3r8 story 3` → `d2_mond`

#### `d2_mond` · Prio 0
> Der dritte Teil ist entschlüsselt. Mein Meister entdeckte einen alten Bekannten auf eurem Mond. Ihr müsst zu ihm gelangen. Vielleicht weiß er etwas.
- **[Wie sollen wir denn zum Mond fliegen?]** → `d2_rakete`
- **[Wir fliegen]** → schließen

#### `d2_rakete` · Prio 0
> Ihr braucht eine Rakete samt Treibstoff, Startplattform und Raumanzug mit Sauerstoff-Reserven. Für den Mond reicht eine T1-Rakete. Alles weitere steht im Buch.
- **[Alles klar, danke.]** → schließen

#### `d2_haus` · Prio 100 · `#dd3r8 = 2`
> Ich habe etwas geortet. Nicht weit von hier steht ein Haus, das nicht in diese Welt gehört. Seine Steine schwingen wie Dinge von … woanders. Licht und Dämmerung. Ich verstehe es nicht und mag es nicht. Aber vielleicht bringt es uns weiter.
- **[Was erhoffst du dir von diesem Haus?]** → `d2_hausinhalt`

#### `d2_hausinhalt` · Prio 0
> Es ist nur eine Vermutung. Aber dort scheint jemand zu leben. Vielleicht kann er uns helfen, an Materialien zu gelangen, die wir dringend brauchen, um den Planeten zu verlassen: Zinn und Osmium. Das scheint es hier kaum zu geben.
- **[Gut, wo ist das Haus?]** → `d2_weg`

#### `d2_weg` · Prio 0
> Geht nach Süden. Das Signal strahlt von dort. Auf dem Weg findet ihr eine große Schlucht, bewohnt von anderen Zweibeinern. Sie scheinen schon länger auf diesem Planeten zu leben. Vielleicht wissen sie mehr über das Haus und seinen Bewohner.
- **[Wir gehen hin]** → schließen

---

## Stufe 3 · Der Mond (K4)

#### `d3_bericht` · Prio 110 · `#dd3r8 = 3` und `#davijaan ≥ 2`
> Ihr seht aus, als hättet ihr jemanden getroffen. Ein Einsiedler? Der den Mond abschirmt? Und mich nicht leiden kann? … Ich verstehe.
- **[Er sagt, vom Mars könntest du das gesamte Sonnensystem scannen.]** → Befehle: `ftbquests change_progress @initiator complete <ST4-07>`, `scoreboard players set #dd3r8 story 4` → `d3_mars`

#### `d3_mars` · Prio 0
> Ah, die vierte Welt. Weiter, kälter, mehr Staub. Ein Horchposten braucht Strom, Luft und eine vernünftige Gravitation. Kriegt ihr das hin?
- **[Ähh, vielleicht...]** → schließen
- **[Na klar, wir bauen die Basis.]** → schließen

#### `d3_warten` · Prio 100 · `#dd3r8 = 3`
> Ihr seid noch nicht auf dem Mond. Eine Rakete fliegt nicht von allein.
- **[Was fehlt uns?]** → `d3_hilfe`
- **[Wir sind dran]** → schließen

#### `d3_hilfe` · Prio 0
> Stahl, Platten, Treibstoff aus Pflanzen. Und Luft zum Atmen, dort oben gibt es keine. Euer Buch weiß den Rest. Ich habe es selbst hineingeschrieben.
- **[Danke]** → schließen

---

## Stufe 4 · Treibstoff für den Mars (K5)

#### `d4_treibstoff` · Prio 100 · `#dd3r8 = 4`
> Für die vierte Welt reicht euer Pflanzentreibstoff nicht. Ich habe es zweimal simuliert. Beide endeten fatal. Es wird Zeit für euch, hochwertigeren Treibstoff zu produzieren.
- **[Was genau brauchen wir?]** → `d4_liste`
- **[Hier, beides]** · Bedingung: im Inventar `immersivepetroleum:diesel_bucket`, `mekanism:advanced_control_circuit` → Befehle:
  `clear @initiator immersivepetroleum:diesel_bucket 1`
  `clear @initiator mekanism:advanced_control_circuit 1`
  `give @initiator minecraft:bucket 1`
  `ftbquests change_progress @initiator complete <ST5-01>`
  `scoreboard players set #dd3r8 story 5`
  → `d4_danke`

#### `d4_liste` · Prio 0
> Einen Eimer Diesel ohne Schwefel. Und einen Advanced Control Circuit. Den braucht ihr um die T2-Rakete zu bauen.
- **[Verstanden]** → schließen

#### `d4_danke` · Prio 0
> Sehr gut, damit schafft ihr es zum Mars. Außerdem ist es ein ideales Schmiermittel für mein Getriebe. Danke! Stellt mehr her, baut die T2-Rakete und fliegt zum Mars. Hier, ich habe bereits den idealen Platz für die Basis lokalisiert. Schaut euch dort mal um.
- **[Gut, wir gehen.]** → Befehl: `give @initiator minecraft:compass{LodestoneDimension:"ad_astra:mars",LodestoneTracked:0b,LodestonePos:{X:<x>,Y:<y>,Z:<z>},display:{Name:'{"text":"Peilsender von DD3R8","italic":false}'}} 1` (Koordinaten des Platzes trägt der Host ein; O69) → schließen

Auf dem Mars zeigt der Peilsender auf den Platz. Dort liegen die Reste einer alten Basis mit einem kleinen Dungeon und einer Notiz der früheren Bewohner: Hier ist man vor Sonnenstürmen geschützt (User, 2026-10-26; Notiz-Text folgt).

---

## Stufe 5 · Die Station (K6, K7, noch in der Basis)

#### `d5_hinweis` · Prio 100 · `#dd3r8 = 5`
> Habt ihr den Platz auf dem Mars gefunden? Der Peilsender zeigt euch den Weg. Baut dort die Station, dann komme ich nach.
- **[Wir sind dran]** → schließen

---

## Stufe 6 · Das Signal (K7, in der Mars-Station)

DD3R8 erscheint am festen Platz der Station, wenn ST7-02 erledigt ist (O69; Befehl in der Belohnung).

#### `d6_ankunft` · Prio 100 · `#dd3r8 = 6`
> *Rauschen.* Ich bin da. Sieht gut aus. Gebt mir einen Moment, ich richte meine Sensoren aus.
- **[Hörst du etwas?]** → `d6_signal`

#### `d6_signal` · Prio 0
> Da. Ein Signal. Eine Signatur, alt, aber seine. Er lebt. Oder er hat gelebt, als er das gesendet hat.
- **[Wohin führt es?]** → Befehle: `ftbquests change_progress @initiator complete <ST7-03>`, `scoreboard players set #dd3r8 story 7` → `d6_merkur`

#### `d6_merkur` · Prio 0
> Zur heißesten Welt, nah am Stern. Dort steht ein Tempel. Ich habe ein schlechtes Gefühl dabei.
- **[Wir sehen uns das mal an.]** → schließen
- **[Ein schlechtes Gefühl.]** → `d6_tempel`

#### `d6_tempel` · Prio 0
> Meine Sensoren können von hier nur den Tempel orten. Aber etwas hält mich draußen. Ich kann nicht sehen, was darin ist. Vielleicht ist er sogar noch dort!
- **[Gut, wir beeilen uns.]** → schließen

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
> *Lange Pause.* Das Tor bricht an einem, der zu stark ist. Der Altar ist gebrochen. Er muss hindurchgegangen sein.
- **[Was tun wir?]** → `d7_auftrag`

#### `d7_auftrag` · Prio 0
> Ihr müsst den Altar reparieren. Die vierte Rolle sagt, wie: Metall, das lebt. Stein, der Blut trank. Ein Zeichen aus den Welten, die träumen und etwas aus der Tiefe eures Heimatplaneten.
- **[Und dann?]** → `d7_schutz`
- **[Das klingt ziemlich kompliziert...]** → `d7_anleitung`

#### `d7_anleitung` · Prio 0
> Keine Sorge, ihr schafft das. Mein Vertrauen in eure Spezies liegt bereits bei 68 Prozent. Ich habe alles, was ich den Rollen entnehmen konnte, in euer Notizbuch übertragen.
- **[Na gut, und dann?]** → `d7_schutz`

#### `d7_schutz` · Prio 0
> Dann geht ihr hindurch. Ich nicht, einer muss hier horchen, falls er sich meldet. Der letzte Teil seines Speichers ist fertig. Lest ihn, bevor ihr geht. Bitte.
- **[Versprochen]** → schließen

---

## Stufe 8 · Vorbereitung (K9, Mars-Station)

Sobald die Spieler das Relikt haben, verschwindet DD3R8 (ST9-05). Danach spricht ihn niemand mehr an, bis Glacio.

#### `d8_warten` · Prio 100 · `#dd3r8 = 8`
> Habt ihr alles für den Altar? Oder braucht ihr noch Erklärungen?
- **[Metall, das lebt?]** → `d8_metall`
- **[Stein, der Blut trank?]** → `d8_stein`
- **[Das Zeichen?]** → `d8_zeichen`
- **[Die Tiefe?]** → `d8_tiefe`
- **[Und der Schutz?]** → `d8_schutz`

#### `d8_metall` · Prio 0
> Terrasteel. Das grüne Metall aus euren Blumenbecken. Es lebt, ich habe es gemessen.
- **[Zurück]** → `d8_warten`

#### `d8_stein` · Prio 0
> Vier Imbued Slate aus eurem Blutaltar. Ich bin nicht begeistert, dass ihr so etwas habt. Aber hier ist es nützlich.
- **[Zurück]** → `d8_warten`

#### `d8_zeichen` · Prio 0
> Die Welten, die träumen, sind die hinter dem Haus. Fragt ihren Herrscher. Wenn ihr ihm seine Welten zurückgebt, gibt er euch vielleicht ein Siegel.
- **[Zurück]** → `d8_warten`

#### `d8_tiefe` · Prio 0
> In euren alten Grüften, tief unter der Erde, liegt ein Orb of the Deep in den Schatztruhen. Etwas mehr als eine Eisenrüstung wäre angebracht.
- **[Zurück]** → `d8_warten`

#### `d8_schutz` · Prio 0
> Jeder von euch muss etwas Lebendiges am Körper tragen. Sonst verschlingt euch der Altar bei lebendigem Leib.
- **[Zurück]** → `d8_warten`

---

## Stufe 10 · Wiedersehen (K11, Versteck auf Glacio)

Stufe 9 hat keinen Dialog: DD3R8 ist verschwunden. Mit ST11-01 erscheinen er und der Meister im Versteck.

#### `d10_glacio` · Prio 100 · `#dd3r8 = 10`
> Ihr! Ich wusste es. Ich habe eine Wette gegen mich selbst gewonnen. Und verloren. Es ist kompliziert.
- **[Wie kommst du hierher?]** → `d10_wie`

#### `d10_wie` · Prio 0
> Ich saß in der Station und horchte. Dann war da ein Ziehen, und dann war ich hier. Er hat mich geholt. Wie genau, kann nur er euch erklären.
- **[Wo ist er?]** → `d10_meister`

#### `d10_meister` · Prio 0
> Dort drüben. Er sieht müde aus. Seid freundlich zu ihm. Und gebt ihm, was ihr für ihn tragt. Aber vorsichtig.
- **[Machen wir]** → schließen

---

## Rückfall

#### `d_standard` · Prio 1 · ohne Bedingung
> *Surren.* Ich habe gerade nichts Neues. Kommt später wieder. Ich laufe nicht weg. Das kann ich nicht so gut.
- **[Wer ist dein Meister?]** → `d_meister`
- **[Woher kommt ihr?]** → `d_woher`
- **[Was war das Ziel eurer Mission?]** → `d_mission`
- **[Bis später]** → schließen

#### `d_meister` · Prio 0
> Ein Wanderer. Klug, mutig, manchmal leichtsinnig. Wenn er etwas berührt, erfährt er, wem es gehörte. Was ich über ihn weiß, steht im Logbuch des Meisters. Jeder neue Teil, den ich entschlüssele, landet dort.
- **[Zurück]** → `d_standard`

#### `d_woher` · Prio 0
> Von sehr weit weg. Weiter, als eure Raketen je fliegen werden. Genauer darf ich es nicht sagen. Protokoll. Mein Meister hat es so eingestellt, nicht ich. Ich hätte es euch gern erzählt.
- **[Zurück]** → `d_standard`

#### `d_mission` · Prio 0
> Er suchte etwas Altes in diesem System. Was genau, hat er mir nicht gesagt. Er sagt mir selten etwas. Wenn ihr nicht weiterwisst: In eurem Notizbuch steht immer, was als Nächstes zu tun ist.
- **[Zurück]** → `d_standard`

## Offen beim Überarbeiten

- **Warum DD3R8 nicht selbst ins Endless Realm geht:** Im Entwurf bleibt er, um zu horchen (`d7_schutz`). Die Story sagt nur, dass er das Relikt nicht holen kann. Reicht dir das, oder soll es einen anderen Grund geben? -> passt so
- **Richtung zum Blue-Skies-Haus** (`d2_weg`) trägst du ein, sobald das Haus gewählt ist. -> mit neuem npc auf halben weg im süden. in einer schlucht leben zwerge, die das haus mit dem wächter kennen, da sie früher dort mit ihm erze aus seinen welten gehandelt haben. Sie schicken uns hin und ab dem moment können wir mit ihnen handeln. 16 Osmium zu einem Kobalt zum beispiel.
- **Stufe 10 nach der Heimkehr:** Wenn DD3R8 mit Vos in der Basis steht (ST11-03), braucht er einen Dialog für Teil 2. Kommt mit Teil 2. -> ja
- **Anspielungen:** „Ich habe ein schlechtes Gefühl dabei“ (`d6_merkur`) ist die deutlichste. Lassen? -> ja passt
- **Eimer zurück** (`d4_danke`): kleiner Komfort, damit der Eimer nicht verloren geht. Streichen, wenn unnötig. -> schon angepasst
