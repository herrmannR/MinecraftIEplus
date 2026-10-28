# Dialoge des Zwergs in der Schlucht (Entwurf)

> Entwurf von Claude, 2026-10-26 (O50, O68). Idee des Users: Auf halbem Weg nach Süden liegt eine Schlucht mit Zwergen. Sie kennen das Haus und seinen Wächter (Bodhi Bad Dur), weil sie früher mit ihm Erze aus seinen Welten gehandelt haben. Sie schicken die Spieler hin, danach kann man mit ihnen handeln (z. B. 16 Osmium gegen 1 Kobalt). Lesart wie in `dialoge_dd3r8.md` (Name ≤ 32 Zeichen, Knopf ≤ 64, Text bis etwa 512, Einstieg über Bedingung und Priorität).
>
> **Leitlinien dieses Entwurfs**
> - Eine Figur (O68); Name und Skin legt der User fest, im Text steht `[Name]`.
> - Charakter (Vorschlag): knurrig, stolz auf sein Handwerk, misstrauisch gegen Fremde, aber ehrlich im Handel. Humor aus seiner Sturheit und seinem Blick auf alles, was nicht Stein oder Erz ist.
> - Die Zwerge gehören in diese Welt, nicht in die ferne Galaxis; Bodhi nennen sie „den Hüter des Hauses“.
> - Seit die vier Wesen Bodhis Welten genommen haben, kommt kein Erz mehr aus dem Haus. Das gibt dem Zwerg einen Grund, die Spieler hinzuschicken.

Scoreboard `story_zwerg` (B2): 0 = noch nie gesprochen, 1 = hat die Spieler zum Haus geschickt (Handel offen).

---

## Stufe 0 · Fremde in der Schlucht (K3)

#### `z0_gruss` · Prio 100 · `story_zwerg = 0`
> Halt! Wer poltert denn da so laut die Schlucht runter? Ihr seid nicht von hier unten, das hört man. Was wollt ihr?
- **[Wir suchen ein Haus]** → `z0_haus`
- **[Wer bist du?]** → `z0_wer`

#### `z0_wer` · Prio 0
> Ich bin [Name]. Meine Familie gräbt hier schon ewig, mein Vater, sein Vater und so weiter. Wie lange genau, weiß keiner mehr. Vielleicht haben wir die Schlucht sogar selbst gegraben.
- **[Wir suchen ein Haus]** → `z0_haus`

#### `z0_haus` · Prio 0
> Ein Haus aus fremdem Stein, weiter im Süden? Das ist das Haus des Hüters. Mit dem haben wir jahrelang gehandelt: unser Werkzeug gegen Erz aus seinen Welten. Das beste Zinn, das ich je gesehen habe.
- **[Und jetzt nicht mehr?]** → `z0_still`

#### `z0_still` · Prio 0
> Seit einer Weile kommt von dort nichts mehr. Kein Erz, keine Nachricht. Es heißt, vier Ungeheuer hätten ihm seine Welten weggenommen. Ich geh da jedenfalls nicht mehr hin, ich bin doch nicht lebensmüde.
- **[Wir gehen hin]** → `z0_auftrag`

#### `z0_auftrag` · Prio 0
> Dann grüßt ihn von uns aus der Schlucht. Und wenn ihr aus seinen Welten Erz mitbringt, kommt zu mir. Ich zahle gut und wiege ehrlich ab, darauf mein Wort.
- **[Abgemacht]** → Befehle: `tag @initiator add story_st3_00`, `scoreboard players set @a story_zwerg 1` → `z0_weg`

#### `z0_weg` · Prio 0
> Immer weiter nach Süden, erst die Schlucht entlang und dann noch ein gutes Stück weiter. Das Haus erkennt ihr sofort, es ist aus einem Stein, den es hier sonst nirgends gibt.
- **[Danke]** → schließen

---

## Stufe 1 · Der Handel (ab K3)

#### `z1_hallo` · Prio 100 · `story_zwerg ≥ 1`
> Ah, ihr schon wieder. Noch alles dran? Was habt ihr mir mitgebracht?
- **[Handeln]** → Aktion: Handelsfenster öffnen
- **[Was nimmst du an?]** → `z1_waren`
- **[Wo war das Haus noch mal?]** → `z0_weg`
- **[Bis bald]** → schließen

#### `z1_waren` · Prio 0
> Erz aus den Welten des Hüters, vor allem das bläuliche. Für sechzehn Stück bekommt ihr einen Kobaltbarren. Kobalt gibt es hier oben nicht, das holt man sonst nur aus dem Nether. Ein guter Preis, glaubt mir.
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
