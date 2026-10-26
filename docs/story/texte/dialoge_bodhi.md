# Dialoge Bodhi Bad Dur (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet und baut die Dialoge von Hand im Easy-NPC-Editor. Ablauf: `../ABLAUF.md` (ST3-01, ST3-04, ST4-06, ST9-01; D-BODHI-0 … 3). Figur und Strang: `../../18_STORY.md` („Das Blue-Skies-Haus“, Abschnitt 5 „Blue-Skies-Haus einbinden“, O34, O47). Lesart wie in `dialoge_dd3r8.md`.
>
> **Leitlinien dieses Entwurfs**
> - Er ist der **Wächter der Traumwelten**, nicht ihr Herrscher (User, 2026-10-26, O72). Im Exil in der Oberwelt sammelt er seine Kräfte; würdevoll, freundlich, ernster als im ersten Entwurf.
> - Er wacht über beide Welten, Everbright (Licht) und Everdawn (Dämmerung). Dass Licht und Dämmerung zusammengehören, ist sein Leitsatz. Das ist eine leise Anspielung auf helle und dunkle Seite, ohne sie zu nennen.
> - Die vier Bosse haben seine Welten an sich gerissen. Er will sie zurück, kämpfen kann er nicht mehr selbst (Grund bleibt offen).
> - Er kennt weder den Meister noch den Droiden. Dass ein „Ding aus Metall“ sein Haus vermessen hat, hat er bemerkt.
> - Er handelt, was sonst der Gatekeeper verkauft; keine Credits (O34).

Scoreboard `story`, Eintrag `#bodhi` (B2): 0 = noch nie gesprochen, 1 = Zinn-Auftrag, 2 = Zinn gebracht, 3 = Osmium gebracht (Strang ist ab hier Nebenquest), 4 = alle vier Bosse besiegt (setzt die Belohnung der letzten Boss-Quest in BS4, B3), 5 = Siegel übergeben.

---

## Stufe 0 · Das Haus (K3)

#### `b0_gruss` · Prio 100 · `#bodhi = 0`
> Besuch! Tretet ein, tretet ein. Verzeiht die Enge. Ich bin Bodhi Bad Dur, Wächter der Traumwelten. Zurzeit wache ich vor allem über diesen Raum.
- **[Traumwelten?]** → `b0_welten`
- **[Ein Droide schickt uns]** → `b0_droide`

#### `b0_droide` · Prio 0
> Ein Ding aus Metall? Metalle gibt es in meinen Traumwelten auch.
- **[Was sind die Traumwelten?]** → `b0_welten`

#### `b0_welten` · Prio 0
> Zwei Welten hinter diesen Mauern. Everbright, wo die Sonne nie untergeht. Everdawn, wo sie nie ganz aufgeht. Licht und Dämmerung. Das eine kann nicht ohne das andere existieren.
- **[Warum bist du hier und nicht dort?]** → `b0_exil`

#### `b0_exil` · Prio 0
> Vier Wesen haben sich meine Welten genommen. Ich musste in eure Welt fliehen und sammle in diesem Haus meine Kräfte. Aber was sucht ihr hier?
- **[Wir brauchen Metalle]** → `b0_metalle`

#### `b0_metalle` · Prio 0
> Zinn? Osmium? Meine Welten sind voll davon. Ich lasse euch gern hinein. Bringt mir dafür etwas von dem, was ihr findet. Seht es als Wegzoll an. Aber hütet euch vor den vier Wesen!
- **[Abgemacht]** → Befehle: `ftbquests change_progress @initiator complete <ST3-01>`, `scoreboard players set #bodhi story 1` → `b0_tor`

#### `b0_tor` · Prio 0
> Ein Tor baut ihr selbst, aus türkisem Ziegel für Everbright, aus mondhellem Ziegel für Everdawn. Entzündet wird es mit dem Zeal Lighter. Den und mein Buch über die Welten verkaufe ich euch.
- **[Handeln]** → Aktion: Handelsfenster öffnen

---

## Stufe 1 · Zinn (K3)

Everdawn ist erst offen, wenn der Zinn-Zoll bezahlt ist (User, 2026-10-26, O73): Ein Skript schickt jeden zurück, der Everdawn bei `#bodhi < 2` betritt.

#### `b1_zinn` · Prio 100 · `#bodhi = 1`
> Wart ihr schon in Everbright? Kalt, nicht wahr?
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Wie kommen wir hinein?]** → `b0_tor`
- **[Hier ist dein Zinn]** · Bedingung: im Inventar 32 × `mekanism:raw_tin` → Befehle:
  `clear @initiator mekanism:raw_tin 32`
  `ftbquests change_progress @initiator complete <ST3-04>`
  `scoreboard players set #bodhi story 2`
  → `b1_danke`
- **[Bis bald]** → schließen

#### `b1_danke` · Prio 0
> Zinn aus den Bergen. Es glänzt noch genauso wie damals. Danke. Behaltet den Rest.
- **[Und Osmium?]** → `b1_osmium`

#### `b1_osmium` · Prio 0
> Dieses hochflexible Erz findet ihr nur in Everdawn, im Dämmerlicht. Dort ist es wärmer, und alles beißt. Kommt wieder, wenn ihr bereit seid. Ein Tor aus mondhellem Ziegel.
- **[Machen wir]** → schließen

---

## Stufe 2 · Osmium (K4)

#### `b2_osmium` · Prio 100 · `#bodhi = 2`
> Ah, meine Freunde. Wart ihr schon in Everdawn? Habt ihr die Echsen gesehen? Sie sind unhöflich, aber schön.
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Hier ist das Osmium]** · Bedingung: im Inventar 32 × `mekanism:raw_osmium` → Befehle:
  `clear @initiator mekanism:raw_osmium 32`
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
> Danke, bereitet euch in Ruhe vor. Ich vergesse nicht, wer mir hilft. Wenn alle vier gefallen sind, habe ich etwas für euch. Etwas, das euch nur der Wächter der Traumwelten geben kann.
- **[Bis dann]** → schließen

---

## Stufe 3 · Die Bosse (Nebenquest, K5/K6)

#### `b3_bosse` · Prio 100 · `#bodhi = 3`
> Und, habt ihr es euch überlegt? Werdet ihr die vier Monsterwesen bekämpfen?
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Wer sind die vier?]** → `b3_wer`
- **[Bis bald]** → schließen

#### `b3_wer` · Prio 0
> In Everbright der Summoner, im Turm. In Everdawn der Alchemist, im Turm. Dann der Starlit Crusher in der grünen Pyramide und der Arachnarch im Baum der Spinnen.
- **[Und wie kommen wir rein?]** → `b3_schluessel`

#### `b3_schluessel` · Prio 0
> In den Türmen liegen Schlüssel, vier öffnen den Weg nach oben. Habt ihr einen Turm bezwungen, verkaufe ich euch weitere. Ich bin ein Wächter und so hüte ich auch die Schlüssel.
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
> Ich danke euch. Ich bleibe hier in dieser Welt und bewache den Eingang von hier.
- **[Bis bald!]** → schließen
- **[Das machen wir.]** → schließen

---

## Stufe 5 · Danach

#### `b5_hallo` · Prio 100 · `#bodhi ≥ 5`
> Meine Freunde, kommt herein!
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Wozu ist das Siegel?]** → `b5_siegel`
- **[Bis bald]** → schließen

#### `b5_siegel` · Prio 0
> Es hält Dunkelheit fern, wo sie zu stark wird. Ihr werdet es wissen, wenn ihr es braucht.
- **[Zurück]** → `b5_hallo`

## Rückfall

#### `b_standard` · Prio 1 · ohne Bedingung
> Ich wache momentan. Kommt später wieder.
- **[Bis später]** → schließen

## Offen beim Überarbeiten

Gegengelesen vom User am 2026-10-26; die früheren Punkte sind erledigt: Wächter statt Herrscher (O72), Grund für das Nicht-Kämpfen bleibt offen, erste Ziegel verkauft Bodhi, Handel wie der Gatekeeper, Siegel gleich nach dem letzten Boss.

- 🟢 **Mengen** (User, 2026-10-26): je 32 Rohzinn und 32 Rohosmium.
- 🟢 **Everdawn erst nach dem Zinn** (O73): Skript auf der Technik-Liste (`../ABLAUF.md`).
