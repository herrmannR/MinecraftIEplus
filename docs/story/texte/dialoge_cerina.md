# Dialoge Meister Cerina (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (K10: ST10-02 bis ST10-04; D-CERINA-0 … 2). Figur: `../../18_STORY.md` („Der Elf: Meister Cerina“, Abschnitt 5 „Relikt und Strahlenschutz“ O43, „Der Elf: wer hinter Meister Cerina steckt“ O46). Lesart wie in `dialoge_dd3r8.md`.
>
> **Leitlinien dieses Entwurfs**
> - Geheim bleibt: Sie ist die Mirialanerin Vernestra Rwoh, eine Jedi. In Teil 1 heißt sie nur „Meister Cerina“, so nennen sie die Elfen; ihr alter Name kommt in Teil 2 durch den Meister heraus (Vorschlag aus O46).
> - Charakter (Vorschlag): ruhig, sehr alt, freundlich, aber verschlossen. Sie spricht wenig und genau. Zum Relikt will oder kann sie nicht viel sagen; sie hält Abstand davon. Leiser Humor über ihr Alter und darüber, dass man sie „den Hellen Elfen“ nennt.
> - Anspielungen (O9), sparsam: Geduld, „Gleichgewicht“, sie kennt „Leute wie ihn“, sie hat einmal etwas verschwiegen, das sie hätte sagen sollen (Ende von „The Acolyte“).
> - Was sie tut: nimmt das Relikt, nennt, was sie für den Schutz braucht, und gibt den Galaktischen Strahlenschutz, das Gehäuse **um** das Relikt (O43). Er kommt ins Triebwerk der Rakete T4 und lässt die Rakete durch den Schleier des Meisters.
> - Nach Alfheim dürfen die Spieler noch nicht (Mead of Kvasir in Teil 2, F9).

Scoreboard `story`, Eintrag `#cerina` (B2): 1 = gerade aus dem Portal getreten (setzt die Belohnung von ST10-02; der User setzt sie ans Portal, O55), 2 = Relikt abgegeben, 3 = Strahlenschutz übergeben.

---

## Stufe 1 · Aus dem Portal (K10)

#### `c1_portal` · Prio 100 · `#cerina = 1`
> *Licht flackert im Portal, dann steht eine Frau davor, grün wie junges Laub, mit Zeichen im Gesicht.* Ihr habt das Tor gebaut. Sauber. Wer hat euch das beigebracht?
- **[Ein Tagebuch]** → `c1_tagebuch`
- **[Wer bist du?]** → `c1_wer`

#### `c1_wer` · Prio 0
> Drüben nennen sie mich Meister Cerina. Ich lebe bei ihnen, schon sehr lange. Länger, als die ältesten von ihnen sich erinnern. Ich zähle nicht mehr nach.
- **[Wir suchen den Hellen Elfen]** → `c1_elf`

#### `c1_elf` · Prio 0
> Den Hellen Elfen. So nennt man mich also, dort draußen. *Sie lächelt.* Wer immer das gesagt hat, hat mich nie gesehen. Aber gut. Ich bin es wohl.
- **[Wir haben ein Tagebuch]** → `c1_tagebuch`

#### `c1_tagebuch` · Prio 0
> Ein Tagebuch. Von jemandem, der etwas berührt hat, das er nicht berühren sollte. Ich spüre es an euch. Ihr tragt es bei euch, nicht wahr?
- **[Das Relikt]** · Bedingung: im Inventar `kubejs:relikt` → `c1_relikt`
- **[Woher weißt du das?]** → `c1_woher`

#### `c1_woher` · Prio 0
> Man lernt mit den Jahren, auf das zu hören, was still ist. Und dieses Ding ist nicht still. Es ruft. Nur nicht euch, wie es scheint.
- **[Das Relikt]** · Bedingung: im Inventar `kubejs:relikt` → `c1_relikt`
- **[Wir holen es]** → schließen

#### `c1_relikt` · Prio 0
> *Sie tritt einen Schritt zurück.* Legt es dort ab. Nicht in meine Hand. Ich habe gelernt, welchen Dingen man nicht zu nahe kommt.
- **[Hier, wir legen es ab]** → Befehle:
  `clear @initiator kubejs:relikt 1`
  `ftbquests change_progress @initiator complete <ST10-03>`
  `scoreboard players set #cerina story 2`
  → `c1_danke`

#### `c1_danke` · Prio 0
> Danke. Es ist sehr alt und sehr hungrig. Mehr sage ich nicht dazu. Nicht, weil ich es nicht weiß. Weil manche Dinge stärker werden, wenn man über sie spricht.
- **[Kannst du uns helfen?]** → `c2_hilfe`

---

## Stufe 2 · Was sie braucht (K10)

#### `c2_auftrag` · Prio 100 · `#cerina = 2`
> Ihr seid wieder da. Habt ihr, worum ich euch gebeten habe? Das Ding wird nicht geduldiger, während wir warten.
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
> Euer Meister ist auf Glacio, der Welt aus Eis hinter diesem Stern. Er hat einen Schleier um sie gelegt. Durch den kommt nur das Relikt, wohl verwahrt. Ich baue euch die Verwahrung.
- **[Was brauchst du dafür?]** → `c2_liste`

#### `c2_liste` · Prio 0
> Die vier Arcs der Traumwelten, je einen von jedem ihrer Wächter. Einen Elite Control Circuit. Und vier Barren Elementium. Ihr bekommt es von den Elfen durch dieses Tor.
- **[Wie mit den Elfen?]** → `c2_handel`
- **[Wir besorgen alles]** → schließen

#### `c2_handel` · Prio 0
> Werft ihnen Manasteel durch das Tor, sie geben Elementium zurück. Sie handeln gern. Hineingehen dürft ihr noch nicht. Später vielleicht.
- **[Zurück]** → `c2_auftrag`

#### `c2_fertig` · Prio 0
> *Sie arbeitet lange, ohne zu sprechen.* Hier. Das Relikt ist darin, eingeschlossen in Licht und Dämmerung und eure Technik. Es schläft. Weckt es nicht.
- **[Was machen wir damit?]** → `c2_rakete`

#### `c2_rakete` · Prio 0
> Baut es in das Triebwerk eurer stärksten Rakete. Der Schleier eures Meisters erkennt, was darin ist, und lässt euch durch. Den Rest wisst ihr besser als ich.
- **[Danke, Meister Cerina]** → `c2_abschied`

#### `c2_abschied` · Prio 0
> Eine Bitte noch. Sagt eurem Meister nicht, wer ihm geholfen hat. Er wird es ohnehin ahnen. Aber ich möchte ihm das Vergnügen nicht nehmen, es selbst herauszufinden.
- **[Versprochen]** → schließen

---

## Stufe 3 · Danach

#### `c3_hallo` · Prio 100 · `#cerina ≥ 3`
> Ihr seid noch hier? Glacio wartet. Und euer Meister wartet. Einer von beiden ist ungeduldiger, und es ist nicht das Eis.
- **[Was ist auf der anderen Seite?]** → `c3_alfheim`
- **[Wer bist du wirklich?]** → `c3_wer`
- **[Bis bald]** → schließen

#### `c3_alfheim` · Prio 0
> Eine Welt, die älter ist als eure Erinnerung. Die Elfen dort hüten Wissen über Reisende von den Sternen. Ihr dürft hinein, wenn die Zeit gekommen ist. Nicht vorher.
- **[Zurück]** → `c3_hallo`

#### `c3_wer` · Prio 0
> Jemand, der einmal geschwiegen hat, wo sie hätte reden sollen. Seitdem höre ich lieber zu. Fragt euren Meister, wenn ihr ihn gefunden habt. Er redet gern.
- **[Zurück]** → `c3_hallo`

## Rückfall

#### `c_standard` · Prio 1 · ohne Bedingung
> *Sie sieht ins Portal und scheint euch nicht zu hören.*
- **[Später]** → schließen

## Offen beim Überarbeiten

- **„Grün wie junges Laub, mit Zeichen im Gesicht“** (`c1_portal`) beschreibt eine Mirialanerin, ohne das Wort zu nennen. Passt zum Skin, den du aussuchst.
- **„Den Hellen Elfen … hat mich nie gesehen“** (`c1_elf`) löst den Widerspruch aus dem Tagebuch (dort „er“): Vos kennt sie nur vom Hörensagen. Wenn er sie persönlich kennen soll, ändert sich der Satz.
- **„Sagt eurem Meister nicht, wer ihm geholfen hat“** (`c2_abschied`) setzt voraus, dass Vos und Vernestra sich kennen oder voneinander wissen. Das ist neu und nicht entschieden; streichen, wenn nicht gewollt.
- **„Einmal geschwiegen, wo sie hätte reden sollen“** (`c3_wer`) spielt auf die Vertuschung am Ende von „The Acolyte“ an.
- **Elfenhandel** (`c2_handel`): Manasteel gegen Elementium stimmt mit Botania überein; mehr Tauschwaren nennt sie nicht.
- **Arcs bei der Abgabe:** Arcs stecken in Blue Skies in eigenen Feldern im Inventar. 🔵 Prüfen, ob die Bedingung „Item im Inventar“ und `clear` sie dort sehen; sonst müssen die Spieler sie vorher in den normalen Rucksack legen (dann gehört ein Satz dazu in `c2_liste`). Abgegeben wird jede Stufe (Common bis Empowered), auch ein starker Arc geht dabei verloren.
