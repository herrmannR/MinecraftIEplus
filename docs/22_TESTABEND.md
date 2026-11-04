# 22 — Letzter Testabend (Teil 1)

> Stand 2026-11-04. Nur Tests, deren Fehler den Spielfluss blockieren würden. Je Technik ein repräsentativer Fall statt der ganzen Story. Ergebnisse wie gewohnt in `11_TESTING.md`.

## Vorbereitung (10 min)

1. Weltordner `Hauptwelt_IE_Decon` kopieren, in der Kopie testen.
2. Spiel ganz neu starten (Start-Skripte, Questbuch, Presets).
3. Alle sechs Figuren **als OP neu importieren** (neue Knopf-Labels; ohne Neuimport bleiben Knöpfe gesperrt).
4. Einmal `py tools/kubejs_check.py --nur-log`: keine Fehler.
5. Ab hier im **Überlebensmodus**, Befehle nur zum Vorspulen (`/scoreboard players set @a <figur> <n>`, `/give`).

## A · Abgaben im Dialog (blockiert jede Story-Stufe) — 30 min

Ein Fall je Figur, weil der Fehler mit den Knopf-Labels alle betraf.

| # | Figur, Stufe | Vorspulen | Prüfen |
|---|---|---|---|
| A1 | DD3R8, Stufe 4 (Test 111) | `dd3r8` 4; Diesel-Eimer und Advanced Control Circuit | Knopf „Hier, beides“ erst ohne Items gesperrt, mit Items frei; Items weg, Eimer zurück; Peilsender zeigt auf dem Mars auf -272 104 -252 |
| A2 | Bodhi, Zinn (ST3-04) | `bodhi` 1; 32 Rohzinn | Knopf frei, Zinn weg, `bodhi` 2, Quest ST3-04 abgehakt, Everdawn danach offen |
| A3 | Davijaan, Helm (ST4-05) | `davijaan` 1; `swgc:clone_212th_battalion_helmet` | Knopf frei, Helm weg, Quest abgehakt, danach Shop offen |
| A4 | Cerina, Relikt (ST10-03) | Rune ins Portal (Cerina erscheint); Relikt im Inventar | Knopf frei, Relikt weg, `cerina` 2 |
| A5 | Ein Knopf **ohne** passende Items | beliebige Figur | bleibt gesperrt, nichts passiert |

## B · Questbuch-Fluss (blockiert das Weiterkommen) — 30 min

| # | Was | Prüfen |
|---|---|---|
| B1 | Kapitelwechsel | Nach A2 bzw. nach einer Kapitel-Belohnung erscheint das nächste Kapitel von selbst, ohne Klick |
| B2 | Mod-Kapitel tauchen auf | Nach `kapitel_k3` (z. B. `/kubejs stages add @s kapitel_k3`) werden die K3-Quests in IE, Mekanism, Blood Magic, Blue Skies sichtbar; vorher nicht (ABLAUF ST2-01) |
| B3 | Beobachtungs-Aufgabe (P20) | Einen IE-Multiblock bauen, zu dem es eine Quest gibt (z. B. Koksofen), Quest hakt ab |
| B4 | Kill-Aufgabe (P20) | Einen Blue-Skies-Boss per `/summon` töten, Quest hakt ab |
| B5 | Story-Abgaben ansehen (Test 100) | ST4-01 und ST7-01: alle Items mit Bild und Namen (kein „Unknown Item“) |
| B6 | Blood-Magic-Kapitel (Test 101) | K9 in der Reihenfolge Edge → Tau Fruit → Weak Blood Shard → Altar Stufe 4 → Pathway → Foreman's Key |

## C · Mehrspieler (blockiert die Runde beim Host) — 30 min, nur mit zweitem Spieler

Ohne zweiten Spieler: beim Host als Erstes prüfen.

| # | Test | Prüfen |
|---|---|---|
| C1 | 82 / P15 | Nur Spieler A gibt im Dialog ab; Quest gilt für die ganze Party |
| C2 | 106 | Spieler B offline, `dd3r8` für @a ändern, B loggt ein und hat den neuen Wert |
| C3 | 76 | B offline, `/logbuch teil2`; B loggt ein und hat Teil 2 |

## D · Nur wenn Zeit bleibt

- P17: Kommt man in den Mines des Endless Realm ohne Miner's Key zur Station? (sonst braucht K9 den Schlüssel früher)
- Test 107 in Stichproben: je Figur die erste und die letzte Stufe durchklicken.

## Bewusst weggelassen

Alles, was nur Komfort oder Beschreibung betrifft: Multiblock-Größen Mekanism (P1), Gewürze (P16), Ritualsteine (P18), Dungeon-Details (P11, P19), AE2-, Tinkers-, Aircraft-Feinheiten (P3–P13).

## Lücken in Quests und Story (kein Test, muss vor dem Host gefüllt werden)

| # | Lücke | Wer | Was fehlt |
|---|---|---|---|
| L1 | 3D-Bauplan der Mars-Station (O74, ST6-02, Logbuch „Fundstücke“) | Claude | Patchouli-Multiblock aus der Schematic; welche Datei? |
| L2 | DD3R8 zieht zur Mars-Station (Belohnung ST7-02) | Claude | Befehl: in der Basis entfernen, an der Station erscheinen (Platz -272 104 -252 bekannt) |
| L3 | DD3R8 verlässt den Mars (Belohnung ST9-05) | Claude | Befehl zum Entfernen |
| L4 | Vos und DD3R8 im Versteck auf Glacio (Belohnung ST11-01) | User, dann Claude | Koordinaten des Verstecks; ist es gebaut? |
| L5 | Schutzzone um Bodhis Haus | User, dann Claude | zwei gegenüberliegende Ecken |
| L6 | ST7-02 „Die Station steht“ | Host | setzt den Tag `story_st7_02` von Hand, wenn alle drei in der fertigen Station sind (so gewollt) |
