# Dialoge Bodhi Bad Dur (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (ST3-01, ST3-04, ST4-06, ST9-01; D-BODHI-0 … 3). Figur und Strang: `../../18_STORY.md` („Das Blue-Skies-Haus“, Abschnitt 5 „Blue-Skies-Haus einbinden“, O34, O47). Lesart wie in `dialoge_dd3r8.md`.
>
> **Leitlinien dieses Entwurfs**
> - Charakter (noch nicht festgelegt, Vorschlag): ein Herrscher im Exil, würdevoll und ein wenig verträumt. Er redet groß und wohnt klein; daraus kommt der Humor. Unter der Würde liegt Trauer um seine Welten.
> - Er herrscht über beide Welten, Everbright (Licht) und Everdawn (Dämmerung). Dass Licht und Dämmerung zusammengehören, ist sein Leitsatz. Das ist eine leise Anspielung auf helle und dunkle Seite, ohne sie zu nennen.
> - Die vier Bosse haben seine Welten an sich gerissen. Er will sie zurück, kämpfen kann er nicht mehr selbst (Grund bleibt offen).
> - Er kennt weder den Meister noch den Droiden. Dass ein „Ding aus Metall“ sein Haus vermessen hat, hat er bemerkt.
> - Er handelt, was sonst der Gatekeeper verkauft; keine Credits (O34).

Scoreboard `story`, Eintrag `#bodhi` (B2): 0 = noch nie gesprochen, 1 = Zinn-Auftrag, 2 = Zinn gebracht, 3 = Osmium gebracht (Strang ist ab hier Nebenquest), 4 = alle vier Bosse besiegt (setzt die Belohnung der letzten Boss-Quest in BS4, B3), 5 = Siegel übergeben.

---

## Stufe 0 · Das Haus (K3)

#### `b0_gruss` · Prio 100 · `#bodhi = 0`
> Besuch! Tretet ein, tretet ein. Verzeiht die Enge. Ich bin Bodhi Bad Dur, Herrscher der Traumwelten. Zurzeit herrsche ich vor allem über diesen Raum.
- **[Traumwelten?]** → `b0_welten`
- **[Ein Droide schickt uns]** → `b0_droide`

#### `b0_droide` · Prio 0
> Ein Ding aus Metall? Ja, das stand vor einiger Zeit draußen und hat meine Wände vermessen. Es hat nicht geklopft. Aber gut, ihr seid gekommen. Das ist höflicher.
- **[Was sind die Traumwelten?]** → `b0_welten`

#### `b0_welten` · Prio 0
> Zwei Welten hinter diesen Mauern. Everbright, wo die Sonne nie untergeht. Everdawn, wo sie nie ganz aufgeht. Licht und Dämmerung. Das eine taugt nichts ohne das andere.
- **[Warum bist du hier?]** → `b0_exil`

#### `b0_exil` · Prio 0
> Vier Wesen haben sich meine Welten genommen, jedes ein Stück. Mich haben sie hinausgeworfen, in dieses Haus. Ich warte. Herrscher sind gut im Warten.
- **[Wir brauchen Metalle]** → `b0_metalle`

#### `b0_metalle` · Prio 0
> Zinn? Osmium? Meine Welten sind voll davon. Ich lasse euch gern hinein. Bringt mir dafür etwas von dem, was ihr findet. Ein Herrscher ohne Steuern ist nur ein Mann im Haus.
- **[Abgemacht]** → Befehle: `ftbquests change_progress @initiator complete <ST3-01>`, `scoreboard players set #bodhi story 1` → `b0_tor`

#### `b0_tor` · Prio 0
> Ein Tor baut ihr selbst, aus türkisem Ziegel für Everbright, aus mondhellem Ziegel für Everdawn. Entzündet wird es mit dem Zeal Lighter. Den und mein Journal verkaufe ich euch.
- **[Handeln]** → Aktion: Handelsfenster öffnen

---

## Stufe 1 · Zinn (K3)

#### `b1_zinn` · Prio 100 · `#bodhi = 1`
> Wart ihr schon in Everbright? Kalt, nicht wahr? Ich habe den Schnee dort selbst ausgesucht.
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Wie kommen wir hinein?]** → `b0_tor`
- **[Hier ist dein Zinn]** · Bedingung: im Inventar 16 × `mekanism:raw_tin` → Befehle:
  `clear @initiator mekanism:raw_tin 16`
  `ftbquests change_progress @initiator complete <ST3-04>`
  `scoreboard players set #bodhi story 2`
  → `b1_danke`
- **[Bis bald]** → schließen

#### `b1_danke` · Prio 0
> Zinn aus meinen Bergen. Es glänzt noch genauso wie damals. Danke. Behaltet den Rest, ich habe ohnehin keine Truhe hier.
- **[Und Osmium?]** → `b1_osmium`

#### `b1_osmium` · Prio 0
> Das wächst in Everdawn, im Dämmerlicht. Dort ist es wärmer, und alles beißt. Kommt wieder, wenn ihr bereit seid. Ein Tor aus mondhellem Ziegel.
- **[Machen wir]** → schließen

---

## Stufe 2 · Osmium (K4)

#### `b2_osmium` · Prio 100 · `#bodhi = 2`
> Ah, meine Steuerzahler. Wart ihr schon in Everdawn? Habt ihr meine Echsen gesehen? Sie sind unhöflich, aber schön.
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Hier ist das Osmium]** · Bedingung: im Inventar 16 × `mekanism:raw_osmium` → Befehle:
  `clear @initiator mekanism:raw_osmium 16`
  `ftbquests change_progress @initiator complete <ST4-06>`
  `scoreboard players set #bodhi story 3`
  → `b2_danke`
- **[Bis bald]** → schließen

#### `b2_danke` · Prio 0
> Ihr wart in beiden Welten und seid zurückgekommen. Das schaffen nicht viele. Darf ich euch um etwas Größeres bitten?
- **[Worum geht es?]** → `b2_bosse`

#### `b2_bosse` · Prio 0
> Die vier, die meine Welten halten. Zwei sitzen in Türmen, je einer in jeder Welt. Zwei weitere tiefer drin. Besiegt sie, und ich komme nach Hause.
- **[Wir denken darüber nach]** → `b2_lohn`

#### `b2_lohn` · Prio 0
> Ich verlange nichts sofort. Aber ich vergesse nicht, wer mir hilft. Wenn alle vier gefallen sind, habe ich etwas für euch. Etwas, das nur ein Herrscher geben kann.
- **[Bis dann]** → schließen

---

## Stufe 3 · Die Bosse (Nebenquest, K5/K6)

#### `b3_bosse` · Prio 100 · `#bodhi = 3`
> Wie steht es mit den vieren? Ich höre nachts, wenn einer fällt. Es klingt wie ein Fenster, das aufgeht.
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Wer sind die vier?]** → `b3_wer`
- **[Bis bald]** → schließen

#### `b3_wer` · Prio 0
> In Everbright der Summoner, im Turm. In Everdawn der Alchemist, im Turm. Dann der Starlit Crusher in der grünen Pyramide und der Arachnarch im Baum der Spinnen.
- **[Und wie kommen wir rein?]** → `b3_schluessel`

#### `b3_schluessel` · Prio 0
> In den Türmen liegen Schlüssel, vier öffnen den Weg nach oben. Habt ihr einen Turm bezwungen, verkaufe ich euch weitere. Ich bin Herrscher, kein Narr.
- **[Zurück]** → `b3_bosse`

---

## Stufe 4 · Das Siegel (nach dem letzten Boss)

#### `b4_siegel` · Prio 100 · `#bodhi = 4`
> *Er steht am Fenster und lacht leise.* Alle vier. Ich habe es gehört. Meine Welten atmen wieder.
- **[Was jetzt?]** → `b4_geschenk`

#### `b4_geschenk` · Prio 0
> Ich habe euch etwas versprochen. Das Siegel der Traumwelten. Es trägt Licht und Dämmerung zugleich. Wo es liegt, kann nichts ganz dunkel werden.
- **[Danke, Bodhi]** → Befehle: `give @initiator kubejs:siegel_der_traumwelten 1`, `scoreboard players set #bodhi story 5` → `b4_abschied`

#### `b4_abschied` · Prio 0
> Ich gehe nicht sofort. Ein Herrscher kehrt nicht zurück, er zieht ein. Das braucht Vorbereitung. Mein Haus bleibt offen für euch, mein Handel auch.
- **[Bis bald]** → schließen

---

## Stufe 5 · Danach

#### `b5_hallo` · Prio 100 · `#bodhi ≥ 5`
> Meine Freunde! Setzt euch. Nein, es gibt keine Stühle. Aber setzt euch trotzdem, in Gedanken.
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Wozu ist das Siegel?]** → `b5_siegel`
- **[Bis bald]** → schließen

#### `b5_siegel` · Prio 0
> Es hält Dunkelheit fern, wo sie zu stark wird. Ihr werdet es wissen, wenn ihr es braucht. Herrscher sagen so etwas. Meistens stimmt es.
- **[Zurück]** → `b5_hallo`

## Rückfall

#### `b_standard` · Prio 1 · ohne Bedingung
> Ein Herrscher empfängt gerade nicht. Er schläft. Kommt später wieder.
- **[Bis später]** → schließen

## Offen beim Überarbeiten

- **Charakter:** Für Bodhi steht in der Story nur „Herrscher der Traumwelten im Exil“. Würdevoll-verträumt mit Humor aus „groß reden, klein wohnen“ ist mein Vorschlag. Passt das?
- **Warum er nicht selbst kämpft**, bleibt offen. Möglich wäre: Die vier halten etwas von ihm fest, oder er kann sein Haus nicht verlassen.
- **Erste Ziegel für die Tore:** Im Haus stehen keine Portale (Test 39), und die Ziegel stellt man erst in den Welten her. Woher kommen die ersten? Vorschlag: Bodhi verkauft einen Satz Turquoise und Lunar Stone Bricks im Handel. 🔵 Prüfen, ob das Haus selbst aus diesen Ziegeln gebaut ist (dann ginge auch Abbauen, aber dort liegt die Schutzzone).
- **Mengen** 16 Zinn, 16 Osmium sind weiter ein Vorschlag (ABLAUF).
- **Handel:** Zeal Lighter, Blue Journal, nach dem ersten Turm die Blinding-Schlüssel. Preise des Gatekeepers stehen im Code und sind nicht ausgelesen (`modpfade/blue_skies/WISSEN.md`); du stellst sie im Spiel ein.
- **Das Siegel** (`kubejs:siegel_der_traumwelten`) gibt es noch nicht als Item (`ABLAUF.md`, Abschnitt 6).
- **Wann das Siegel kommt:** Nach dem letzten Boss, also womöglich schon in K6, lange vor dem Tempel. Die Quest ST9-01 in K9 ist dann sofort erfüllt. Gewollt so, oder soll Bodhi das Siegel erst nach den Tempelrollen herausgeben (zusätzliche Bedingung `#dd3r8 ≥ 8`)?
