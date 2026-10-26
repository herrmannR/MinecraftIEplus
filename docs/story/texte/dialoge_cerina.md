# Dialoge Meisterin Cerina (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50), Redeweise überarbeitet 2026-10-26. Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (K10: ST10-02 bis ST10-04; D-CERINA-0 … 2). Figur: `../../18_STORY.md` („Der Elf: Meisterin Cerina“, Abschnitt 5 „Relikt und Strahlenschutz“ O43, „Der Elf: wer hinter Meisterin Cerina steckt“ O46). Lesart wie in `dialoge_dd3r8.md`.
>
> **Leitlinien dieses Entwurfs**
> - Geheim bleibt: Sie ist die Mirialanerin Vernestra Rwoh, eine Jedi. In Teil 1 heißt sie nur „Meisterin Cerina“, so nennen sie die Elfen; ihr alter Name kommt in Teil 2 durch den Meister heraus (Vorschlag aus O46).
> - 🟢 Charakter (User, 2026-10-26): warmherzig und offen. Sie freut sich über Besuch, sorgt sich um die Spieler und spricht in ganzen, fließenden Sätzen, nicht kurz und abgehackt. Wenn sie etwas nicht verraten kann, sagt sie das klar („Das kann ich euch nicht sagen“) statt in Rätseln. Sehr alt, mit leisem Humor über ihr Alter und den Namen „Helle Elfe“.
> - Anspielungen (O9), sparsam: Geduld, sie ist nicht bei den Elfen geboren, sie hat einmal etwas verschwiegen, das sie hätte sagen sollen (Ende von „The Acolyte“).
> - Was sie tut: nimmt das Relikt, nennt, was sie für den Schutz braucht, und gibt den Galaktischen Strahlenschutz, das Gehäuse **um** das Relikt (O43). Er kommt ins Triebwerk der Rakete T4 und lässt die Rakete durch den Schleier des Meisters. Damit endet auch der Fluch (O66).
> - Nach Alfheim dürfen die Spieler noch nicht (Mead of Kvasir in Teil 2, F9).
> - Easy NPC: Text höchstens ~512 Zeichen, Knopf höchstens 64.

Scoreboard `story`, Eintrag `#cerina` (B2): 1 = gerade aus dem Portal getreten (setzt die Belohnung von ST10-02; der User setzt sie ans Portal, O55), 2 = Relikt abgegeben, 3 = Strahlenschutz übergeben.

---

## Stufe 1 · Aus dem Portal (K10)

#### `c1_portal` · Prio 100 · `#cerina = 1`
> *Licht flackert im Portal, dann tritt eine Frau heraus, grün wie junges Laub, mit feinen Zeichen im Gesicht. Sie lächelt, als hätte sie euch erwartet.* Willkommen! Es ist lange her, dass jemand von dieser Seite ein Tor für mich gebaut hat, und ihr habt es wirklich schön gemacht. Sagt mir, wer hat euch gezeigt, wie das geht?
- **[Ein Tagebuch]** → `c1_tagebuch`
- **[Wer bist du?]** → `c1_wer`

#### `c1_wer` · Prio 0
> Die Elfen auf der anderen Seite nennen mich Meisterin Cerina, und ich habe mich längst daran gewöhnt. Ich lebe schon so lange bei ihnen, dass sich selbst die Ältesten an keine Zeit ohne mich erinnern, und irgendwann habe ich aufgehört, die Jahre zu zählen. Aber jetzt erzählt ihr: Was führt euch zu mir?
- **[Wir suchen die Helle Elfe]** → `c1_elf`

#### `c1_elf` · Prio 0
> *Sie lacht leise.* Die Helle Elfe, so nennt man mich also dort draußen? Das gefällt mir, auch wenn ich gar nicht bei den Elfen geboren bin. Aber das ist eine lange Geschichte, und die erzähle ich euch ein anderes Mal. Ihr habt jedenfalls die Richtige gefunden.
- **[Wir haben ein Tagebuch]** → `c1_tagebuch`

#### `c1_tagebuch` · Prio 0
> Ein Tagebuch also. Dann hat es jemand geschrieben, der etwas berührt hat, das er besser hätte liegen lassen, denn ich spüre es an euch, seit ich aus dem Tor getreten bin. Ihr tragt es bei euch, nicht wahr? Und ich sehe euch an, dass es euch nicht gut behandelt hat.
- **[Das Relikt]** · Bedingung: im Inventar `kubejs:relikt` → `c1_relikt`
- **[Woher weißt du das?]** → `c1_woher`

#### `c1_woher` · Prio 0
> Wenn man so lange lebt wie ich, lernt man, auf die leisen Dinge zu hören, und dieses hier ist alles andere als leise. Es ruft die ganze Zeit nach jemandem, der ihm nachgibt. Zum Glück hört ihr es nicht, und darüber bin ich sehr froh.
- **[Das Relikt]** · Bedingung: im Inventar `kubejs:relikt` → `c1_relikt`
- **[Wir holen es]** → schließen

#### `c1_relikt` · Prio 0
> *Sie tritt einen Schritt zurück und hebt beschwichtigend die Hände.* Bitte legt es dort auf den Boden und nicht in meine Hand. Ich habe in meinem Leben gelernt, welchen Dingen man besser nicht zu nahe kommt, und dieses gehört ganz sicher dazu.
- **[Hier, wir legen es ab]** → Befehle:
  `clear @initiator kubejs:relikt 1`
  `ftbquests change_progress @initiator complete <ST10-03>`
  `scoreboard players set #cerina story 2`
  → `c1_danke`

#### `c1_danke` · Prio 0
> Danke, das war tapfer von euch. Ich weiß, ihr wollt jetzt wissen, was es ist, und das verstehe ich gut. Aber darüber kann ich euch nichts sagen, und das hat nichts mit Misstrauen zu tun: Manche Dinge werden stärker, wenn man über sie spricht, und dieses gehört dazu. Lasst uns lieber überlegen, wie ich euch helfen kann.
- **[Kannst du uns helfen?]** → `c2_hilfe`

---

## Stufe 2 · Was sie braucht (K10)

#### `c2_auftrag` · Prio 100 · `#cerina = 2`
> Da seid ihr ja wieder, wie schön! Habt ihr alles beisammen, worum ich euch gebeten habe? Ich frage nur, weil das Ding dort drüben nicht gerade geduldiger wird, während es auf uns wartet.
- **[Was brauchst du noch mal?]** → `c2_liste`
- **[Hier ist alles]** · Bedingung: im Inventar `blue_skies:ethereal_arc`, `blue_skies:dusk_arc`, `blue_skies:nature_arc`, `blue_skies:poison_arc`, `mekanism:elite_control_circuit`, 4 × `botania:elementium_ingot` → Befehle:
  `clear @initiator blue_skies:ethereal_arc 1`
  `clear @initiator blue_skies:dusk_arc 1`
  `clear @initiator blue_skies:nature_arc 1`
  `clear @initiator blue_skies:poison_arc 1`
  `clear @initiator mekanism:elite_control_circuit 1`
  `clear @initiator botania:elementium_ingot 4`
  `give @initiator kubejs:galaktischer_strahlenschutz 1`
  `ftbquests change_progress @initiator complete <ST10-04>`
  `scoreboard players set #cerina story 3`
  → `c2_fertig`
- **[Noch nicht]** → schließen

#### `c2_hilfe` · Prio 0
> Euer Meister ist auf Glacio, der Welt aus Eis hinter diesem Stern, und er hat einen Schleier um sie gelegt, durch den nur das Relikt selbst hindurchkommt. Ihr müsst es also zu ihm bringen, aber so gut verwahrt, dass es niemandem mehr schaden kann. Diese Verwahrung baue ich euch gern.
- **[Was brauchst du dafür?]** → `c2_liste`

#### `c2_liste` · Prio 0
> Dafür brauche ich die vier Arcs aus den Traumwelten, von jedem ihrer Wächter einen, außerdem einen Elite Control Circuit aus eurer Technik und vier Barren Elementium. Das Elementium bekommt ihr von den Elfen, durch eben dieses Tor.
- **[Wie mit den Elfen?]** → `c2_handel`
- **[Wir besorgen alles]** → schließen

#### `c2_handel` · Prio 0
> Werft einfach Manasteel durch das Tor, dann schicken euch die Elfen Elementium zurück; sie handeln gern und sind dabei recht großzügig. Hineingehen dürft ihr allerdings noch nicht. Warum, kann ich euch heute nicht erklären, aber ich verspreche euch, dass die Zeit dafür kommt.
- **[Zurück]** → `c2_auftrag`

#### `c2_fertig` · Prio 0
> *Sie arbeitet lange schweigend, und ihr Gesicht wird dabei sehr ernst. Dann reicht sie euch das fertige Stück.* Hier, es ist geschafft. Das Relikt liegt darin, eingeschlossen in Licht und Dämmerung und in eure Technik, und es schläft jetzt; ihr werdet merken, dass es euch nicht mehr quält. Bitte versprecht mir, dass ihr es nicht weckt.
- **[Was machen wir damit?]** → `c2_rakete`

#### `c2_rakete` · Prio 0
> Baut es in das Triebwerk eurer stärksten Rakete ein. Der Schleier eures Meisters erkennt, was darin liegt, und wird euch hindurchlassen. Wie man so eine Rakete fliegt, wisst ihr bestimmt besser als ich, da will ich euch gar nicht hineinreden. Passt gut auf euch auf, ja?
- **[Danke, Meisterin Cerina]** → schließen

---

## Stufe 3 · Danach

#### `c3_hallo` · Prio 100 · `#cerina ≥ 3`
> Ihr seid ja noch hier! Ich freue mich, euch zu sehen, aber Glacio wartet auf euch, und euer Meister wartet auch, und wenn ich raten müsste, ist er von den beiden der Ungeduldigere. Was kann ich noch für euch tun?
- **[Was ist auf der anderen Seite?]** → `c3_alfheim`
- **[Wer bist du wirklich?]** → `c3_wer`
- **[Bis bald]** → schließen

#### `c3_alfheim` · Prio 0
> Eine Welt, die älter ist als alles, woran ihr euch erinnern könnt, und die Elfen dort hüten viel Wissen über Reisende, die von den Sternen kamen. Ich würde sie euch gern zeigen, aber im Moment darf ich euch noch nicht hineinlassen. Wenn die Zeit gekommen ist, steht euch das Tor offen, das verspreche ich euch.
- **[Zurück]** → `c3_hallo`

#### `c3_wer` · Prio 0
> *Sie schweigt einen Moment, dann lächelt sie.* Das ist die eine Frage, auf die ich euch heute keine Antwort geben kann, so gern ich es täte. Nur so viel: Ich habe einmal geschwiegen, wo ich hätte reden sollen, und seitdem bemühe ich mich, ehrlich zu sein. Deshalb sage ich euch lieber offen „noch nicht“, als euch etwas vorzumachen.
- **[Zurück]** → `c3_hallo`

## Rückfall

#### `c_standard` · Prio 1 · ohne Bedingung
> *Sie sieht ganz in Gedanken ins Portal und bemerkt euch erst, als ihr näher kommt.* Oh, verzeiht, ich war gerade weit weg. Kommt doch später wieder, dann habe ich mehr Ruhe für euch.
- **[Später]** → schließen

## Offen beim Überarbeiten

- **„Grün wie junges Laub, mit feinen Zeichen im Gesicht“** (`c1_portal`) beschreibt eine Mirialanerin, ohne das Wort zu nennen. Passt zum Skin, den du aussuchst.
- **„Die Helle Elfe … nicht bei den Elfen geboren“** (`c1_elf`): passt zum Tagebuch („Helle Elfe“, 2026-10-26) und zur Vorgeschichte (als Kind zu den Elfen geflohen, O46). Sie sagt offen, dass sie die Geschichte später erzählt.
- 🟢 **Vos und Cerina kennen sich nicht** (User, 2026-10-21); der Abschiedssatz ist gestrichen.
- **„Einmal geschwiegen, wo ich hätte reden sollen“** (`c3_wer`) spielt auf die Vertuschung am Ende von „The Acolyte“ an; daraus folgt ihr offenes „noch nicht“.
- **„Dass es euch nicht mehr quält“** (`c2_fertig`) nimmt das Ende des Fluchs auf (O66).
- **Elfenhandel** (`c2_handel`): Manasteel gegen Elementium stimmt mit Botania überein; mehr Tauschwaren nennt sie nicht.
- **Arcs bei der Abgabe:** Arcs stecken in Blue Skies in eigenen Feldern im Inventar. 🔵 Prüfen, ob die Bedingung „Item im Inventar“ und `clear` sie dort sehen; sonst müssen die Spieler sie vorher in den normalen Rucksack legen (dann gehört ein Satz dazu in `c2_liste`). Abgegeben wird jede Stufe (Common bis Empowered), auch ein starker Arc geht dabei verloren.
