# Dialoge Quinlan Vos (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (K11: ST11-01 bis ST11-04; D-VOS-0, 1). Figur: `../../18_STORY.md` („Figuren“, Abschnitt 5 „Der Meister: Quinlan Vos“, O4, O33, O43, O52). Lesart wie in `dialoge_dd3r8.md`.
>
> **Leitlinien dieses Entwurfs**
> - Teil 1 endet hier. Das Geheimnis legt der Meister erst im Training offen (O9, Teil 2). Hier gibt es nur Andeutungen: Er spürt das Relikt, er „liest“ Dinge, er erkennt, dass die Spieler „hell“ sind, er bietet an, ihnen etwas zu zeigen.
> - Charakter (Vorschlag nach dem Kanon): ein Abenteurer mit Charme und losem Mundwerk, müde, aber nicht gebrochen. Er macht Witze über seine Lage. Ein Schatten bleibt: Er sagt ehrlich, dass er das Relikt wollte.
> - Er stellt sich auf Glacio als **Quinlan** vor (User, 2026-10-21, O59), nur mit Vornamen; „Meister“ darf bleiben. Was er ist, erfahren die Spieler erst im Training.
> - Psychometrie als leiser Humor: Er berührt die Hand eines Spielers und erzählt, was er „sieht“, aus dem Alltag der Spieler.
> - Er kennt Meister Cerina nicht (User, 2026-10-21, O58); er weiß nur von einem „Hellen Elfen“.
> - Das Relikt steckt im Galaktischen Strahlenschutz im Triebwerk der Rakete T4 (O43). Er nimmt es heraus, ohne dass die Spieler etwas abgeben müssen.

Scoreboard `story`, Eintrag `#vos` (B2): 1 = im Versteck erschienen (Belohnung von ST11-01), 2 = erstes Gespräch geführt, 3 = in der Basis (setzt der User, wenn er Vos und DD3R8 dort hinstellt, O55), 4 = Teil 1 abgeschlossen.

---

## Stufe 1 · Das Versteck (K11, Glacio)

#### `q1_treffen` · Prio 100 · `#vos = 1`
> *Ein Mann sitzt am Feuer, in einen Mantel gewickelt, die Haut gezeichnet von Kälte und Narben.* Drei. Natürlich drei. Ich habe euch kommen sehen, lange bevor ihr gelandet seid.
- **[Bist du der Meister?]** → `q1_meister`

#### `q1_meister` · Prio 0
> Quinlan. Der Droide sagt Meister, bleibt ruhig dabei, das macht ihn glücklich. Ein glücklicher Droide redet weniger. Meistens. Ihr habt mein Tagebuch gelesen.
- **[Und dein Relikt gebracht]** → `q1_relikt`

#### `q1_relikt` · Prio 0
> Ich weiß. Ich spüre es in eurem Triebwerk, schlafend, gut verpackt. Wer immer das gebaut hat, versteht mehr davon als ich. Lasst es dort. Ich hole es selbst heraus.
- **[Was ist es?]** → `q1_was`

#### `q1_was` · Prio 0
> Etwas, das ich nicht hätte suchen sollen. Ich wollte es trotzdem. Das sage ich euch gleich, damit ihr es nicht später von anderen hört.
- **[Warum konnten wir es tragen?]** → `q1_hell`

#### `q1_hell` · Prio 0
> Weil es in euch nichts findet, woran es sich halten kann. Noch nicht. Ihr seid hell, alle drei. Ich habe es schon von Weitem gesehen. Darüber reden wir, wenn ich wieder stehen kann.
- **[Und der Droide?]** → `q1_droide`

#### `q1_droide` · Prio 0
> Ich habe ihn gerufen, als ich wieder genug Kraft hatte. Er kam. Er beschwert sich seitdem, dass er nicht gefragt wurde. Er hat recht. Ich frage selten.
- **[Gib mir deine Hand]** → `q1_hand`
- **[Kommst du mit uns?]** → `q1_heim`

#### `q1_hand` · Prio 0
> *Er nimmt eure Hand einen Moment.* Hm. Eine Truhe voller Kohl. Ein Dungeon, der euch nicht gemocht hat. Und jemand von euch hat einen Ofen in die Luft gejagt. Zweimal.
- **[Woher weißt du das?]** → `q1_woher`

#### `q1_woher` · Prio 0
> Dinge erinnern sich, und Hände auch. Ich höre nur zu. Ein Trick für lange Abende. Mehr zeige ich euch ein anderes Mal.
- **[Kommst du mit uns?]** → `q1_heim`

#### `q1_heim` · Prio 0
> Auf eure Welt? Gern, wenn ihr einen Platz in der Rakete habt. Das Eis hier ist ehrlich, aber es ist schlecht für die Knie. Und ich habe euch noch einiges zu sagen.
- **[Dann fliegen wir]** → Befehle: `ftbquests change_progress @initiator complete <ST11-02>`, `scoreboard players set #vos story 2` → schließen

---

## Stufe 2 · Aufbruch (Glacio, bis zur Heimkehr)

#### `q2_aufbruch` · Prio 100 · `#vos = 2`
> Ich bin bereit, sobald ihr es seid. Der Droide auch, er hat dreimal nachgezählt, ob er alles hat. Er hat nichts. Er war trotzdem gründlich.
- **[Gleich geht es los]** → schließen

Wenn die Spieler wieder auf der Erde sind (ST11-03), stellt der User Vos und DD3R8 in die Basis und setzt `#vos = 3` (O55).

---

## Stufe 3 · Angekommen (K11, Basis der Spieler)

#### `q3_ankunft` · Prio 100 · `#vos = 3`
> *Er sieht sich in eurer Basis um, lange, und lächelt.* Hier ist also alles angefangen. Viel Rauch, viel Lärm, wenig Ordnung. Es gefällt mir.
- **[Was jetzt, Meister?]** → `q3_was`

#### `q3_was` · Prio 0
> Jetzt ruhe ich mich aus. Und dann zeige ich euch, was ihr in euch tragt, wenn ihr wollt. Ihr habt mehr davon, als ihr glaubt. Ein Lehrer merkt so etwas.
- **[Was tragen wir in uns?]** → `q3_noch_nicht`
- **[Wir wollen]** → `q3_ende`

#### `q3_noch_nicht` · Prio 0
> Nicht heute. Ich bin zu müde für große Worte, und ihr verdient gute. Fragt mich morgen. Und übermorgen. Irgendwann sage ich es.
- **[Wir wollen lernen]** → `q3_ende`

#### `q3_ende` · Prio 0
> Gut. Dann beginnen wir bald. Und danke. Ihr habt etwas für einen Fremden getan, ohne zu wissen, wer er ist. Das ist seltener, als ihr denkt.
- **[Gern geschehen]** → Befehle: `ftbquests change_progress @initiator complete <ST11-04>`, `scoreboard players set #vos story 4` → schließen

---

## Stufe 4 · Ende von Teil 1

#### `q4_ruhe` · Prio 100 · `#vos = 4`
> Ich ruhe mich aus. Ihr solltet das auch einmal versuchen. Die Ausbildung beginnt, wenn ich wieder ohne Stöhnen aufstehen kann.
- **[Bis bald, Meister]** → schließen

Ab Teil 2 folgen hier die Dialoge der Ausbildung.

## Rückfall

#### `q_standard` · Prio 1 · ohne Bedingung
> *Er hat die Augen geschlossen und scheint zu lauschen.* Später.
- **[Später]** → schließen

## Offen beim Überarbeiten

- 🟢 **Sein Name** (User, 2026-10-21, O59): Er stellt sich als Quinlan vor (`q1_meister`).
- **Aussehen** (`q1_treffen`): „Haut gezeichnet von Kälte und Narben“ passt auf jeden Skin. Vos hat als Kiffar eine gelbe Gesichtsmarkierung; die kann der Text nennen, wenn der Skin sie zeigt (`skin/Quinlan-Vos.png`).
- **„Ich wollte es trotzdem“** (`q1_was`) nimmt den Hang zur dunklen Seite aus Logbuch Teil 5 auf.
- **Davijaan:** Vos erwähnt ihn nicht. Ein späteres Wiedersehen (Teil 2) bleibt offen.
- **Kohl, Dungeon, Ofen** (`q1_hand`) sind Platzhalter. Wenn du willst, ersetzt du sie durch echte Missgeschicke eurer Runde; das ist das Lustige daran.
