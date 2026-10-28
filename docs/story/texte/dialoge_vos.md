# Dialoge Quinlan Vos (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50), Redeweise überarbeitet 2026-10-26. Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (K11: ST11-01 bis ST11-04; D-VOS-0, 1). Figur: `../../18_STORY.md` („Figuren“, Abschnitt 5 „Der Meister: Quinlan Vos“, O4, O33, O43, O52). Lesart wie in `dialoge_dd3r8.md`.
>
> **Leitlinien dieses Entwurfs**
> - Teil 1 endet hier. Das Geheimnis legt der Meister erst im Training offen (O9, Teil 2). Hier gibt es nur Andeutungen: Er spürt das Relikt, er „liest“ Dinge, er erkennt, dass die Spieler „hell“ sind, er bietet an, ihnen etwas zu zeigen.
> - Charakter (Vorschlag nach dem Kanon): ein Abenteurer mit Charme und losem Mundwerk, müde, aber nicht gebrochen. Er macht Witze über seine Lage. Ein Schatten bleibt: Er sagt ehrlich, dass er das Relikt wollte.
> - 🟢 Redeweise (User, 2026-10-26): Er darf in Bildern und Rätseln sprechen, aber in ganzen, fließenden Sätzen, nicht kurz und abgehackt.
> - Er stellt sich auf Glacio als **Quinlan** vor (User, 2026-10-21, O59), nur mit Vornamen; „Meister“ darf bleiben. Was er ist, erfahren die Spieler erst im Training.
> - Psychometrie als leiser Humor: Er berührt die Hand eines Spielers und erzählt, was er „sieht“, aus dem Alltag der Spieler.
> - Er kennt Meisterin Cerina nicht (User, 2026-10-21, O58); er weiß nur von einer „Hellen Elfe“.
> - Das Relikt steckt im Galaktischen Strahlenschutz im Triebwerk der Rakete T4 (O43). Er nimmt es heraus, ohne dass die Spieler etwas abgeben müssen.
> - Easy NPC: Text höchstens ~512 Zeichen, Knopf höchstens 64.

Scoreboard `story_vos` (B2): 1 = im Versteck erschienen (Belohnung von ST11-01), 2 = erstes Gespräch geführt, 3 = in der Basis (setzt der User, wenn er Vos und DD3R8 dort hinstellt, O55), 4 = Teil 1 abgeschlossen.

---

## Stufe 1 · Das Versteck (K11, Glacio)

#### `q1_treffen` · Prio 100 · `story_vos = 1`
> *Ein Mann sitzt am Feuer, in einen Mantel gewickelt, das Gesicht voller Narben. Er schaut nicht einmal auf.* Ihr seid also zu dritt. Ich hab euch schon gespürt, lange bevor eure Rakete hier gelandet ist.
- **[Bist du der Meister?]** → `q1_meister`

#### `q1_meister` · Prio 0
> Nennt mich Quinlan. Der Droide sagt Meister zu mir. Ihr könnt das auch, dann freut er sich, und wenn er sich freut, redet er weniger. Und ihr habt mein Tagebuch gelesen, sonst wärt ihr nicht hier.
- **[Und dein Relikt gebracht]** → `q1_relikt`

#### `q1_relikt` · Prio 0
> Ich weiß. Ich spüre es da draußen in eurem Triebwerk. Es schläft, und es ist besser verpackt, als ich das je hinbekommen hätte. Wer auch immer das gebaut hat, kennt sich damit besser aus als ich. Lasst es, wo es ist, ich hole es später selbst raus.
- **[Was ist es?]** → `q1_was`

#### `q1_was` · Prio 0
> Etwas, das ich nie hätte suchen sollen. Ich hab es trotzdem gesucht, weil ein Teil von mir es haben wollte. Das sage ich euch lieber gleich selbst, bevor ihr es irgendwann von jemand anderem hört.
- **[Warum konnten wir es tragen?]** → `q1_hell`

#### `q1_hell` · Prio 0
> Weil es bei euch nichts findet, woran es sich festhalten kann. Noch nicht jedenfalls. Ihr seid alle drei hell, das hab ich schon von Weitem gesehen. Gequält hat es euch trotzdem, ich weiß, und das tut mir leid. Mehr erzähle ich euch, wenn ich wieder auf den Beinen bin.
- **[Und der Droide?]** → `q1_droide`

#### `q1_droide` · Prio 0
> Ich hab ihn gerufen, als ich wieder genug Kraft dafür hatte, und er ist gekommen, wie immer. Seitdem beschwert er sich, dass ihn keiner gefragt hat. Da hat er leider recht, fragen ist nicht so meine Stärke.
- **[Gib mir deine Hand]** → `q1_hand`
- **[Kommst du mit uns?]** → `q1_heim`

#### `q1_hand` · Prio 0
> *Er nimmt eure Hand, hält sie kurz fest und schließt halb die Augen.* Hm, interessant. Ich sehe eine Truhe voller Kohl, einen Dungeon, der euch gar nicht mochte, und einen Ofen, den einer von euch in die Luft gejagt hat. Zweimal.
- **[Woher weißt du das?]** → `q1_woher`

#### `q1_woher` · Prio 0
> Dinge merken sich, wer sie angefasst hat, und ich kann das ein bisschen lesen. Ein netter Trick für lange Abende. Vielleicht zeige ich euch irgendwann, wie das geht.
- **[Kommst du mit uns?]** → `q1_heim`

#### `q1_heim` · Prio 0
> Mit zu euch? Sehr gern, wenn ihr noch Platz in der Rakete habt. Hier ist es kalt, und meine Knie sind dafür nicht mehr gemacht. Außerdem hab ich euch noch einiges zu erzählen, und das geht am Feuer besser als im Eis.
- **[Dann fliegen wir]** → Befehle: `tag @initiator add story_st11_02`, `scoreboard players set @a story_vos 2` → schließen

---

## Stufe 2 · Aufbruch (Glacio, bis zur Heimkehr)

#### `q2_aufbruch` · Prio 100 · `story_vos = 2`
> Ich bin bereit, wenn ihr es seid. Der Droide auch, er hat schon dreimal nachgezählt, ob er alles eingepackt hat. Dabei besitzt er gar nichts.
- **[Gleich geht es los]** → schließen

Wenn die Spieler wieder auf der Erde sind (ST11-03), stellt der User Vos und DD3R8 in die Basis und setzt `story_vos = 3` (O55).

---

## Stufe 3 · Angekommen (K11, Basis der Spieler)

#### `q3_ankunft` · Prio 100 · `story_vos = 3`
> *Er schaut sich lange in eurer Basis um und fängt langsam an zu grinsen.* Hier hat also alles angefangen. Viel Rauch, viel Lärm, wenig Ordnung. Aber man sieht, dass ihr hier mit Spaß gebaut habt. Gefällt mir.
- **[Was jetzt, Meister?]** → `q3_was`

#### `q3_was` · Prio 0
> Jetzt ruhe ich mich erst mal aus. Und wenn ich wieder fit bin, zeige ich euch, was in euch steckt, wenn ihr wollt. Da ist mehr, als ihr denkt.
- **[Was tragen wir in uns?]** → `q3_noch_nicht`
- **[Wir wollen]** → `q3_ende`

#### `q3_noch_nicht` · Prio 0
> Heute nicht, dafür bin ich zu müde, und ihr habt eine bessere Erklärung verdient als die, die ich jetzt hinbekomme. Fragt mich morgen wieder. Irgendwann sag ich es euch, versprochen.
- **[Wir wollen lernen]** → `q3_ende`

#### `q3_ende` · Prio 0
> Gut, dann fangen wir bald an. Und danke. Ihr habt einem Fremden geholfen, ohne zu wissen, wer er ist oder was er getan hat. Das macht nicht jeder.
- **[Gern geschehen]** → Befehle: `tag @initiator add story_st11_04`, `scoreboard players set @a story_vos 4` → schließen

---

## Stufe 4 · Ende von Teil 1

#### `q4_ruhe` · Prio 100 · `story_vos = 4`
> Ich ruhe mich aus. Solltet ihr auch mal probieren. Mit der Ausbildung fangen wir an, sobald ich wieder ohne Stöhnen aufstehen kann. Gebt mir noch ein paar Tage.
- **[Bis bald, Meister]** → schließen

Ab Teil 2 folgen hier die Dialoge der Ausbildung.

## Rückfall

#### `q_standard` · Prio 1 · ohne Bedingung
> *Er hat die Augen geschlossen und scheint auf etwas zu horchen.* Später, Freunde. Ich bin gerade beschäftigt.
- **[Später]** → schließen

## Offen beim Überarbeiten

- 🟢 **Sein Name** (User, 2026-10-21, O59): Er stellt sich als Quinlan vor (`q1_meister`).
- **Aussehen** (`q1_treffen`): „Haut gezeichnet von Kälte und Narben“ passt auf jeden Skin. Vos hat als Kiffar eine gelbe Gesichtsmarkierung; die kann der Text nennen, wenn der Skin sie zeigt (`skin/Quinlan-Vos.png`).
- **„Ein Teil von mir wollte es haben“** (`q1_was`) nimmt den Hang zur dunklen Seite aus Logbuch Teil 5 auf.
- **„Gequält hat es euch trotzdem“** (`q1_hell`) nimmt den Fluch auf (O66).
- **Davijaan:** Vos erwähnt ihn nicht. Ein späteres Wiedersehen (Teil 2) bleibt offen.
- **Kohl, Dungeon, Ofen** (`q1_hand`) sind Platzhalter. Wenn du willst, ersetzt du sie durch echte Missgeschicke eurer Runde; das ist das Lustige daran.
