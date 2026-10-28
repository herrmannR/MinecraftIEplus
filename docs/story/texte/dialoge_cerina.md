# Dialoge Meisterin Cerina (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50), Redeweise überarbeitet 2026-10-26. Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (K10: ST10-02 bis ST10-04; D-CERINA-0 … 2). Figur: `../../18_STORY.md` („Der Elf: Meisterin Cerina“, Abschnitt 5 „Relikt und Strahlenschutz“ O43, „Der Elf: wer hinter Meisterin Cerina steckt“ O46). Lesart wie in `dialoge_dd3r8.md`.
>
> **Leitlinien dieses Entwurfs**
> - Geheim bleibt: Sie ist die Mirialanerin Vernestra Rwoh, eine Jedi. In Teil 1 heißt sie nur „Meisterin Cerina“, so nennen sie die Elfen; ihr alter Name kommt in Teil 2 durch den Meister heraus (Vorschlag aus O46).
> - 🟢 Charakter (User, 2026-10-26): warmherzig und offen. Sie freut sich über Besuch, sorgt sich um die Spieler und spricht in ganzen, fließenden Sätzen, nicht kurz und abgehackt. Wenn sie etwas nicht verraten kann, sagt sie das klar („Das kann ich euch nicht sagen“) statt in Rätseln. Sehr alt, mit leisem Humor über ihr Alter und den Namen „Helle Elfe“.
> - Anspielungen (O9), sparsam: Geduld, sie ist nicht bei den Elfen geboren, sie hat einmal etwas verschwiegen, das sie hätte sagen sollen (Ende von „The Acolyte“).
> - Was sie tut: nimmt das Relikt, nennt, was sie für den Schutz braucht, und gibt den Galaktischen Strahlenschutz, das Gehäuse **um** das Relikt (O43). Er kommt ins Triebwerk der Rakete T4 und lässt die Rakete durch den Schleier um das Versteck des Meisters. Damit endet auch der Fluch (O66).
> - Nach Alfheim dürfen die Spieler noch nicht (Mead of Kvasir in Teil 2, F9).
> - Easy NPC: Text höchstens ~512 Zeichen, Knopf höchstens 64.

Scoreboard `story_cerina` (B2): 1 = gerade aus dem Portal getreten (setzt die Belohnung von ST10-02; der User setzt sie ans Portal, O55), 2 = Relikt abgegeben, 3 = Strahlenschutz übergeben.

---

## Stufe 1 · Aus dem Portal (K10)

#### `c1_portal` · Prio 100 · `story_cerina = 1`
> *Aus dem Portal tritt eine Frau mit grüner Haut und feinen Mustern im Gesicht. Sie lächelt euch an.* Willkommen! Es ist lange her, dass jemand von dieser Seite ein Tor für mich gebaut hat, und ihr habt es wirklich schön gemacht. Sagt mal, wer hat euch gezeigt, wie das geht?
- **[Ein Tagebuch]** → `c1_tagebuch`
- **[Wer bist du?]** → `c1_wer`

#### `c1_wer` · Prio 0
> Die Elfen auf der anderen Seite nennen mich Meisterin Cerina, daran habe ich mich längst gewöhnt. Ich lebe schon so lange bei ihnen, dass sich nicht einmal die Ältesten an eine Zeit ohne mich erinnern. Die Jahre zähle ich schon lange nicht mehr. Aber jetzt erzählt ihr: Was führt euch zu mir?
- **[Wir suchen die Helle Elfe]** → `c1_elf`

#### `c1_elf` · Prio 0
> *Sie lacht leise.* Die Helle Elfe, so nennt man mich da draußen? Das gefällt mir, auch wenn ich gar keine echte Elfe bin. Das ist eine lange Geschichte, die erzähle ich euch ein andermal. Aber ihr seid bei der Richtigen.
- **[Wir haben ein Tagebuch]** → `c1_tagebuch`

#### `c1_tagebuch` · Prio 0
> Ein Tagebuch? Dann hat der, der es geschrieben hat, etwas gefunden, das er besser hätte liegen lassen. Ich spüre es, seit ich durch das Tor gekommen bin. Ihr habt es dabei, oder? Man sieht euch an, dass es euch nicht gut tut. Gebt es mir, bevor es noch schlimmer wird.
- **[Das Relikt]** · Bedingung: im Inventar `kubejs:relikt` → `c1_relikt`
- **[Woher weißt du das?]** → `c1_woher`

#### `c1_woher` · Prio 0
> Wenn man so alt ist wie ich, merkt man so etwas einfach. Und dieses Ding ist alles andere als unauffällig, es sucht die ganze Zeit nach jemandem, der schwach wird. Zum Glück hört ihr es nicht.
- **[Das Relikt]** · Bedingung: im Inventar `kubejs:relikt` → `c1_relikt`
- **[Wir holen es]** → schließen

#### `c1_relikt` · Prio 0
> *Sie tritt einen Schritt zurück und hebt die Hände.* Bitte legt es dort auf den Boden, nicht in meine Hand. So etwas fasse ich nur an, wenn es gar nicht anders geht.
- **[Hier, wir legen es ab]** → Befehle:
  `clear @initiator kubejs:relikt 1`
  `tag @initiator add story_st10_03`
  `scoreboard players set @a story_cerina 2`
  → `c1_danke`

#### `c1_danke` · Prio 0
> Danke, das war mutig von euch. Ich weiß, ihr wollt wissen, was das ist. Aber das kann ich euch nicht sagen, und das liegt nicht daran, dass ich euch nicht vertraue. Je weniger ihr darüber wisst, desto besser für euch. Reden wir lieber darüber, wie ich euch helfen kann.
- **[Kannst du uns helfen?]** → `c2_hilfe`

---

## Stufe 2 · Was sie braucht (K10)

#### `c2_auftrag` · Prio 100 · `story_cerina = 2`
> Da seid ihr ja wieder, wie schön! Habt ihr alles beisammen, worum ich euch gebeten habe? Ich frage nur, weil ich das Ding nicht länger als nötig hier herumliegen haben möchte.
- **[Was brauchst du noch mal?]** → `c2_liste`
- **[Hier ist alles]** · Bedingung: im Inventar `blue_skies:ethereal_arc`, `blue_skies:dusk_arc`, `blue_skies:nature_arc`, `blue_skies:poison_arc`, `mekanism:ultimate_control_circuit`, `botania:elementium_block` → Befehle:
  `clear @initiator blue_skies:ethereal_arc 1`
  `clear @initiator blue_skies:dusk_arc 1`
  `clear @initiator blue_skies:nature_arc 1`
  `clear @initiator blue_skies:poison_arc 1`
  `clear @initiator mekanism:ultimate_control_circuit 1`
  `clear @initiator botania:elementium_block 1`
  `give @initiator kubejs:galaktischer_strahlenschutz 1`
  `tag @initiator add story_st10_04`
  `scoreboard players set @a story_cerina 3`
  → `c2_fertig`
- **[Noch nicht]** → schließen

#### `c2_hilfe` · Prio 0
> Euer Meister ist auf Glacio, einer Welt aus Eis, weit weg von hier. Um sein Versteck hat er einen Schleier gelegt, und durch den kommt nur, wer das Relikt dabei hat. Ihr müsst es ihm also bringen, aber so gut verpackt, dass es niemandem mehr schaden kann. Diese Hülle baue ich euch.
- **[Was brauchst du dafür?]** → `c2_liste`

#### `c2_liste` · Prio 0
> Dafür brauche ich die vier Arcs, von jedem der vier Wächter in den Himmelswelten einen. Dazu einen Ultimate Control Circuit aus eurer Technik und einen Block Elementium. Das Elementium bekommt ihr von den Elfen, durch dieses Tor hier.
- **[Wie mit den Elfen?]** → `c2_handel`
- **[Wir besorgen alles]** → schließen

#### `c2_handel` · Prio 0
> Werft einfach Manasteel durch das Tor, dann schicken euch die Elfen Elementium zurück. Sie handeln gern und sind dabei ziemlich großzügig. Hineingehen dürft ihr aber noch nicht. Warum, kann ich euch heute nicht sagen, aber die Zeit dafür kommt, versprochen.
- **[Zurück]** → `c2_auftrag`

#### `c2_fertig` · Prio 0
> *Sie arbeitet lange, ohne ein Wort zu sagen, und ihr Gesicht wird dabei sehr ernst. Dann reicht sie euch das fertige Stück.* Hier, fertig. Das Relikt ist jetzt sicher eingeschlossen und gibt Ruhe, ihr werdet merken, dass es euch nicht mehr quält. Versprecht mir bitte, dass ihr es nie wieder aufmacht.
- **[Was machen wir damit?]** → `c2_rakete`

#### `c2_rakete` · Prio 0
> Baut es in das Triebwerk eurer stärksten Rakete ein. Der Schleier eures Meisters erkennt, was darin steckt, und lässt euch durch. Wie man so eine Rakete fliegt, wisst ihr bestimmt besser als ich. Passt gut auf euch auf, ja?
- **[Danke, Meisterin Cerina]** → schließen

---

## Stufe 3 · Danach

#### `c3_hallo` · Prio 100 · `story_cerina ≥ 3`
> Ihr seid ja noch da! Schön, euch zu sehen. Aber euer Meister wartet auf Glacio, und ich wette, er ist nicht besonders geduldig. Kann ich noch etwas für euch tun?
- **[Was ist auf der anderen Seite?]** → `c3_alfheim`
- **[Wer bist du wirklich?]** → `c3_wer`
- **[Bis bald]** → schließen

#### `c3_alfheim` · Prio 0
> Das Reich der Elfen. Es ist sehr alt, und die Elfen dort wissen viel über Reisende, die von den Sternen kamen. Ich würde es euch gern zeigen, aber hinein dürft ihr noch nicht. Wenn es so weit ist, steht euch das Tor offen, das verspreche ich euch.
- **[Zurück]** → `c3_hallo`

#### `c3_wer` · Prio 0
> *Sie überlegt kurz, dann lächelt sie.* Das kann ich euch heute nicht sagen, so gern ich es würde. Nur so viel: Ich habe einmal etwas verschwiegen, das ich hätte sagen müssen. Seitdem bin ich lieber ehrlich. Deshalb sage ich euch offen: noch nicht.
- **[Zurück]** → `c3_hallo`

## Rückfall

#### `c_standard` · Prio 1 · ohne Bedingung
> *Sie schaut ganz in Gedanken ins Portal und bemerkt euch erst, als ihr näher kommt.* Oh, entschuldigt, ich war gerade ganz woanders. Kommt doch später wieder, dann habe ich mehr Zeit für euch.
- **[Später]** → schließen

## Offen beim Überarbeiten

- **„Grüne Haut und feine Muster im Gesicht“** (`c1_portal`) beschreibt eine Mirialanerin, ohne das Wort zu nennen. Passt zum Skin, den du aussuchst.
- **„Die Helle Elfe … gar keine echte Elfe“** (`c1_elf`): passt zum Tagebuch („Helle Elfe“, 2026-10-26) und zur Vorgeschichte (als Kind zu den Elfen geflohen, O46). Sie sagt offen, dass sie die Geschichte später erzählt.
- 🟢 **Vos und Cerina kennen sich nicht** (User, 2026-10-21); der Abschiedssatz ist gestrichen.
- **„Einmal etwas verschwiegen, das ich hätte sagen müssen“** (`c3_wer`) spielt auf die Vertuschung am Ende von „The Acolyte“ an; daraus folgt ihr offenes „noch nicht“.
- **„Dass es euch nicht mehr quält“** (`c2_fertig`) nimmt das Ende des Fluchs auf (O66).
- **Elfenhandel** (`c2_handel`): Manasteel gegen Elementium stimmt mit Botania überein; mehr Tauschwaren nennt sie nicht.
- **Arcs bei der Abgabe:** Arcs stecken in Blue Skies in eigenen Feldern im Inventar. 🔵 Prüfen, ob die Bedingung „Item im Inventar“ und `clear` sie dort sehen; sonst müssen die Spieler sie vorher in den normalen Rucksack legen (dann gehört ein Satz dazu in `c2_liste`). Abgegeben wird jede Stufe (Common bis Empowered), auch ein starker Arc geht dabei verloren.
