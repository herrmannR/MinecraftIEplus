# Dialoge Quinlan Vos (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50), Redeweise überarbeitet 2026-10-26. Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (K11: ST11-01 bis ST11-04; D-VOS-0, 1). Figur: `../../18_STORY.md` („Figuren“, Abschnitt 5 „Der Meister: Quinlan Vos“, O4, O33, O43, O52). Lesart wie in `dialoge_dd3r8.md`.
>
> **Leitlinien dieses Entwurfs**
> - Teil 1 endet hier. Das Geheimnis legt der Meister erst im Training offen (O9, Teil 2). Hier gibt es nur Andeutungen: Er spürt das Relikt, er „liest“ Dinge, er erkennt, dass die Spieler „hell“ sind, er bietet an, ihnen etwas zu zeigen.
> - Charakter (Vorschlag nach dem Kanon): ein Abenteurer mit Charme und losem Mundwerk, müde, aber nicht gebrochen. Er macht Witze über seine Lage. Ein Schatten bleibt: Er sagt ehrlich, dass er das Relikt wollte.
> - 🟢 Redeweise (User, 2026-10-26): Er darf in Bildern und Rätseln sprechen, aber in ganzen, fließenden Sätzen, nicht kurz und abgehackt.
> - Er stellt sich auf Glacio als **Quinlan** vor (User, 2026-10-21, O59), nur mit Vornamen; „Meister“ darf bleiben. Was er ist, erfahren die Spieler erst im Training.
> - Psychometrie als leiser Humor: Er berührt die Hand eines Spielers und erzählt, was er „sieht“, aus dem Alltag der Spieler.
> - Er kennt Meister Cerina nicht (User, 2026-10-21, O58); er weiß nur von einer „Hellen Elfe“.
> - Das Relikt steckt im Galaktischen Strahlenschutz im Triebwerk der Rakete T4 (O43). Er nimmt es heraus, ohne dass die Spieler etwas abgeben müssen.
> - Easy NPC: Text höchstens ~512 Zeichen, Knopf höchstens 64.

Scoreboard `story`, Eintrag `#vos` (B2): 1 = im Versteck erschienen (Belohnung von ST11-01), 2 = erstes Gespräch geführt, 3 = in der Basis (setzt der User, wenn er Vos und DD3R8 dort hinstellt, O55), 4 = Teil 1 abgeschlossen.

---

## Stufe 1 · Das Versteck (K11, Glacio)

#### `q1_treffen` · Prio 100 · `#vos = 1`
> *Ein Mann sitzt am Feuer, in einen Mantel gewickelt, die Haut gezeichnet von Kälte und Narben, und er sieht nicht einmal auf, als ihr näher kommt.* Drei also, natürlich sind es drei. Ich habe euch kommen sehen, lange bevor eure Rakete den Himmel über diesem Eis angekratzt hat, so wie man einen Sturm spürt, bevor die erste Flocke fällt.
- **[Bist du der Meister?]** → `q1_meister`

#### `q1_meister` · Prio 0
> Nennt mich Quinlan. Der Droide sagt Meister zu mir, und ihr könnt das ruhig auch tun, denn es macht ihn glücklich, und ein glücklicher Droide redet weniger, jedenfalls an guten Tagen. Ihr habt mein Tagebuch gelesen, das sehe ich euch an der Nasenspitze an.
- **[Und dein Relikt gebracht]** → `q1_relikt`

#### `q1_relikt` · Prio 0
> Ich weiß, ich spüre es dort draußen in eurem Triebwerk, schlafend und so sorgsam verpackt, wie ich es selbst nie gekonnt hätte. Wer immer das gebaut hat, versteht von solchen Dingen mehr als ich. Lasst es, wo es ist; ich hole es mir selbst heraus, wenn die Zeit reif ist.
- **[Was ist es?]** → `q1_was`

#### `q1_was` · Prio 0
> Etwas, das ich nie hätte suchen sollen und das ich trotzdem gesucht habe, weil ein Teil von mir es haben wollte. Das sage ich euch lieber gleich selbst, bevor ihr es eines Tages von jemand anderem hört, denn eine Wahrheit, die man verschweigt, wird mit der Zeit nur schwerer.
- **[Warum konnten wir es tragen?]** → `q1_hell`

#### `q1_hell` · Prio 0
> Weil es in euch nichts findet, woran es sich festhalten kann, jedenfalls noch nicht. Ihr seid hell, alle drei, wie grünes Holz, das einfach nicht brennen will, ich habe es schon von Weitem gesehen. Gequält hat es euch trotzdem, ich weiß, und das tut mir leid. Mehr darüber erzähle ich euch, wenn ich wieder auf eigenen Beinen stehen kann.
- **[Und der Droide?]** → `q1_droide`

#### `q1_droide` · Prio 0
> Ich habe ihn zu mir gerufen, als ich wieder genug Kraft dafür hatte, und er ist gekommen, wie er immer kommt. Seitdem beschwert er sich, dass ihn niemand gefragt hat, und damit hat er leider recht, denn fragen gehört nicht gerade zu meinen Stärken.
- **[Gib mir deine Hand]** → `q1_hand`
- **[Kommst du mit uns?]** → `q1_heim`

#### `q1_hand` · Prio 0
> *Er nimmt eure Hand und hält sie einen Moment lang fest, die Augen halb geschlossen.* Hm, das ist ja interessant. Ich sehe eine Truhe voller Kohl, einen Dungeon, der euch überhaupt nicht leiden konnte, und einen Ofen, den einer von euch in die Luft gejagt hat, und zwar gleich zweimal.
- **[Woher weißt du das?]** → `q1_woher`

#### `q1_woher` · Prio 0
> Dinge erinnern sich an die Hände, die sie gehalten haben, und Hände erinnern sich an alles, was sie getan haben. Ich höre nur ein wenig genauer hin als andere. Es ist ein Trick für lange Abende, und vielleicht zeige ich euch eines Tages, wie er geht.
- **[Kommst du mit uns?]** → `q1_heim`

#### `q1_heim` · Prio 0
> Auf eure Welt? Sehr gern, wenn ihr noch einen Platz in eurer Rakete für mich habt. Das Eis hier ist ehrlich, das muss man ihm lassen, aber es ist schlecht für die Knie, und außerdem habe ich euch noch so einiges zu erzählen, das man besser an einem warmen Feuer erzählt.
- **[Dann fliegen wir]** → Befehle: `ftbquests change_progress @initiator complete <ST11-02>`, `scoreboard players set #vos story 2` → schließen

---

## Stufe 2 · Aufbruch (Glacio, bis zur Heimkehr)

#### `q2_aufbruch` · Prio 100 · `#vos = 2`
> Ich bin bereit, sobald ihr es seid, und der Droide auch: Er hat schon dreimal nachgezählt, ob er alles eingepackt hat. Er besitzt zwar gar nichts, aber gründlich ist er, das kann man ihm nicht absprechen.
- **[Gleich geht es los]** → schließen

Wenn die Spieler wieder auf der Erde sind (ST11-03), stellt der User Vos und DD3R8 in die Basis und setzt `#vos = 3` (O55).

---

## Stufe 3 · Angekommen (K11, Basis der Spieler)

#### `q3_ankunft` · Prio 100 · `#vos = 3`
> *Er sieht sich lange in eurer Basis um, und langsam breitet sich ein Lächeln auf seinem Gesicht aus.* Hier hat also alles angefangen. Viel Rauch, viel Lärm und herzlich wenig Ordnung, und doch spürt man an jeder Ecke, dass hier jemand mit ganzem Herzen gebaut hat. Mir gefällt es.
- **[Was jetzt, Meister?]** → `q3_was`

#### `q3_was` · Prio 0
> Jetzt ruhe ich mich erst einmal aus. Und wenn ich wieder bei Kräften bin, zeige ich euch, was ihr in euch tragt, sofern ihr das wollt. Ihr habt mehr davon, als ihr ahnt, denn ein Licht, das man selbst in den Händen hält, sieht man am schlechtesten.
- **[Was tragen wir in uns?]** → `q3_noch_nicht`
- **[Wir wollen]** → `q3_ende`

#### `q3_noch_nicht` · Prio 0
> Nicht heute, dafür bin ich zu müde, und ihr verdient bessere Worte als die, die ich jetzt fände. Fragt mich morgen wieder, und übermorgen auch. Manche Antworten muss man ein paarmal anklopfen lassen, bevor man ihnen die Tür öffnet, aber irgendwann sage ich es euch, versprochen.
- **[Wir wollen lernen]** → `q3_ende`

#### `q3_ende` · Prio 0
> Gut, dann fangen wir bald an. Und danke euch, von Herzen: Ihr habt einem Fremden geholfen, ohne zu wissen, wer er ist oder was er getan hat, und das ist seltener, als ihr vielleicht glaubt.
- **[Gern geschehen]** → Befehle: `ftbquests change_progress @initiator complete <ST11-04>`, `scoreboard players set #vos story 4` → schließen

---

## Stufe 4 · Ende von Teil 1

#### `q4_ruhe` · Prio 100 · `#vos = 4`
> Ich ruhe mich aus, und ihr solltet das auch einmal versuchen, es ist erstaunlich erholsam. Mit der Ausbildung beginnen wir, sobald ich wieder ohne Stöhnen aufstehen kann, und so wie sich meine Knie anfühlen, gebt mir noch ein paar Tage.
- **[Bis bald, Meister]** → schließen

Ab Teil 2 folgen hier die Dialoge der Ausbildung.

## Rückfall

#### `q_standard` · Prio 1 · ohne Bedingung
> *Er hat die Augen geschlossen und scheint auf etwas zu lauschen, das ihr nicht hören könnt.* Später, Freunde, die Stille erzählt mir gerade eine Geschichte, und ich möchte das Ende nicht verpassen.
- **[Später]** → schließen

## Offen beim Überarbeiten

- 🟢 **Sein Name** (User, 2026-10-21, O59): Er stellt sich als Quinlan vor (`q1_meister`).
- **Aussehen** (`q1_treffen`): „Haut gezeichnet von Kälte und Narben“ passt auf jeden Skin. Vos hat als Kiffar eine gelbe Gesichtsmarkierung; die kann der Text nennen, wenn der Skin sie zeigt (`skin/Quinlan-Vos.png`).
- **„Ein Teil von mir wollte es haben“** (`q1_was`) nimmt den Hang zur dunklen Seite aus Logbuch Teil 5 auf.
- **„Gequält hat es euch trotzdem“** (`q1_hell`) nimmt den Fluch auf (O66).
- **Davijaan:** Vos erwähnt ihn nicht. Ein späteres Wiedersehen (Teil 2) bleibt offen.
- **Kohl, Dungeon, Ofen** (`q1_hand`) sind Platzhalter. Wenn du willst, ersetzt du sie durch echte Missgeschicke eurer Runde; das ist das Lustige daran.
