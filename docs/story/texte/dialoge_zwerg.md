# Dialoge des Zwergs in der Schlucht (Entwurf)

> Entwurf von Claude, 2026-10-26 (O50, O68). Idee des Users: Auf halbem Weg nach Süden liegt eine Schlucht mit Zwergen. Sie kennen das Haus und seinen Wächter (Bodhi Bad Dur), weil sie früher mit ihm Erze aus seinen Welten gehandelt haben. Sie schicken die Spieler hin, danach kann man mit ihnen handeln (z. B. 16 Osmium gegen 1 Kobalt). Lesart wie in `dialoge_dd3r8.md` (Name ≤ 32 Zeichen, Knopf ≤ 64, Text bis etwa 512, Einstieg über Bedingung und Priorität).
>
> **Leitlinien dieses Entwurfs**
> - Eine Figur (O68); Name und Skin legt der User fest, im Text steht `[Name]`.
> - Charakter (Vorschlag): knurrig, stolz auf sein Handwerk, misstrauisch gegen Fremde, aber ehrlich im Handel. Humor aus seiner Sturheit und seinem Blick auf alles, was nicht Stein oder Erz ist.
> - Die Zwerge gehören in diese Welt, nicht in die ferne Galaxis; Bodhi nennen sie „den Hüter des Hauses“.
> - Seit die vier Wesen Bodhis Welten genommen haben, kommt kein Erz mehr aus dem Haus. Das gibt dem Zwerg einen Grund, die Spieler hinzuschicken.

Scoreboard `story`, Eintrag `#zwerg` (B2): 0 = noch nie gesprochen, 1 = hat die Spieler zum Haus geschickt (Handel offen).

---

## Stufe 0 · Fremde in der Schlucht (K3)

#### `z0_gruss` · Prio 100 · `#zwerg = 0`
> Halt! Wer so laut die Schlucht herunterpoltert, ist entweder ein Ochse oder ein Oberirdischer. Ihr seht nicht aus wie Ochsen. Knapp.
- **[Wir suchen ein Haus]** → `z0_haus`
- **[Wer bist du?]** → `z0_wer`

#### `z0_wer` · Prio 0
> [Name], Sohn von irgendwem, der auch schon hier gegraben hat. Wir leben in dieser Schlucht, seit es sie gibt. Vielleicht haben wir sie auch gegraben. Das weiß keiner mehr so genau.
- **[Wir suchen ein Haus]** → `z0_haus`

#### `z0_haus` · Prio 0
> Ein Haus aus fremdem Stein, weiter im Süden? Das Haus des Hüters. Wir haben jahrelang mit ihm gehandelt: Werkzeug gegen Erz aus seinen Welten. Das beste Zinn, das ich je in der Hand hatte.
- **[Und jetzt nicht mehr?]** → `z0_still`

#### `z0_still` · Prio 0
> Seit einer Weile kommt nichts mehr. Kein Erz, kein Wort. Er soll seine Welten verloren haben, an vier Wesen, die man besser nicht trifft. Ich gehe da nicht mehr hin. Ein Zwerg weiß, wann ein Stollen einstürzt.
- **[Wir gehen hin]** → `z0_auftrag`

#### `z0_auftrag` · Prio 0
> Dann sagt ihm, die Schlucht hat ihn nicht vergessen. Und wenn ihr aus seinen Welten zurückkommt, bringt mir, was ihr findet. Ich zahle in Erz. Gut gemessen, das schwöre ich bei meinem Bart.
- **[Abgemacht]** → Befehle: `tag @initiator add story_st3_00`, `scoreboard players set #zwerg story 1` → `z0_weg`

#### `z0_weg` · Prio 0
> Weiter nach Süden, immer der Schlucht nach und dann darüber hinaus. Das Haus erkennt ihr an den Steinen. Sie sehen aus, als hätte jemand den Himmel zerbrochen und vermauert.
- **[Danke]** → schließen

---

## Stufe 1 · Der Handel (ab K3)

#### `z1_hallo` · Prio 100 · `#zwerg ≥ 1`
> Ah, die Oberirdischen. Wieder heil? Das wundert mich jedes Mal. Was bringt ihr mir?
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Was nimmst du an?]** → `z1_waren`
- **[Wo war das Haus noch mal?]** → `z0_weg`
- **[Bis bald]** → schließen

#### `z1_waren` · Prio 0
> Erz aus den Welten des Hüters, das Blaue vor allem. Sechzehn Stück, und ihr bekommt ein Stück Kobalt. Das findet man hier oben nicht, nur tief im Feuer. Ein fairer Preis. Fast zu fair.
- **[Zurück]** → `z1_hallo`

---

## Rückfall

#### `z_standard` · Prio 1 · ohne Bedingung
> *Er klopft prüfend an einen Stein und hört euch nicht zu.*
- **[Später]** → schließen

## Offen beim Überarbeiten

- **Name und Skin** des Zwergs legst du fest. Stimmt der Charakter (knurrig, stolz, ehrlicher Händler)?
- **Handel:** Vorschlag 16 Rohosmium (`mekanism:raw_osmium`) gegen 1 Kobaltbarren (`tconstruct:cobalt_ingot`). Osmium gibt es erst ab Everdawn (K4), der Handel lohnt also erst dann. Weitere Angebote stellst du im Spiel ein (Easy NPC, Handel).
- **Kobalt früh im Spiel:** Kobalt kommt sonst nur aus dem Nether. Der Handel und der Kobalthammer für „Würdig sein“ (O67) holen ihn nach vorn, in K2/K3. Gewollt?
- **Ort:** Die Schlucht liegt auf halbem Weg nach Süden zwischen Basis und Blue-Skies-Haus; der Host sucht sie aus (eine echte Schlucht der Welt oder gebaut). Schutzzone ja oder nein?
- **Questtext ST3-00** („Die Schlucht“) kommt in `questtexte_story.md`, wenn du die Questtexte durchgesehen hast.
