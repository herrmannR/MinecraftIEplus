# 24 — Was zwingend noch zu testen ist (Teil 1)

> Stand 2026-11-06, geprüft gegen `11_TESTING.md` und `22_TESTABEND.md`. Alle älteren Tests (47–95, 110–124) sind bestanden. Ergebnisse wie gewohnt in `11_TESTING.md`.

## Vorbereitung

- [ ] Weltordner kopieren, in der Kopie testen
- [ ] Spiel ganz neu starten
- [ ] **Bodhi und DD3R8 als OP neu importieren** (neue Presets vom 2026-11-04)

## Einzeln testbar (ca. 45 min)

- [x] **129 Siegel von Bodhi** (war eine Sackgasse): BS4-04 offen, `/summon blue_skies:arachnarch`, töten → Quest hakt ab, `bodhi` = 4, Bodhi gibt das Siegel, danach `bodhi` = 5
- [ ] **126 `/dd3r8 hierher`**: DD3R8 in der Basis; auf dem Mars an den Platz stellen, Befehl → nach bis zu 10 s Meldung, DD3R8 steht dort und bleibt
- [ ] **127 `/dd3r8 glacio`** (direkt nach 126): DD3R8 steht auf Glacio bei -347 102 89
- [ ] **131 Antworten F1, F2, F4, F5**:
  - [ ] Bodhi: erste zwei Handel Diamond → Turquoise Stone Brick, Cobalt Ingot → Lunar Stone Brick
  - [ ] Galaxy in a Cube erst nach ST4-05 (Helm) sichtbar
  - [ ] `/scoreboard players set @a dd3r8 11` → Standard-Dialog
  - [ ] `dd3r8` 10, Knopf „Wo ist er?“ → „sprecht mit ihm über das, was ihr bei euch habt“
- [x] **125 Schutzzone Bodhis Haus**: im Überlebensmodus im Haus abbauen und setzen geht nicht, außerhalb schon
- [ ] **128 Testseite**: nur noch TS1-03: Eimer Biodiesel ins Inventar (`/give @s immersiveengineering:biodiesel_bucket`) → Quest hakt ab (Rest ✅ 2026-11-06)
- [x] **100 Abgaben ansehen**: ST4-01 und ST7-01 zeigen alle Items mit Bild und Namen (kein „Unknown Item“)

## Nur mit zweitem Spieler (beim Host als Erstes)

- [ ] **82** Nur Spieler A gibt im Dialog ab → Quest gilt für die ganze Party
- [ ] **106** B offline, `dd3r8` für @a ändern → B loggt ein und hat den neuen Wert
- [ ] **76** B offline, `/logbuch teil2` → B loggt ein und hat Teil 2

## Kann wegfallen

- 130 Torrahmen in Bodhis Haus (blockiert nichts mehr, Bodhi verkauft die Ziegel)
- 107 alle Dialoge vollständig durchklicken (nur wenn Zeit bleibt)

## Vor der Runde beim Host (kein Test)

- [ ] `config/ftbquests/quests/chapters/testseite.snbt` löschen
- [ ] L7: `kubejs:schrift_marsbasis` in eine Truhe der Ruine auf dem Mars legen
- [ ] L4: Vos bei -343 103 84 auf Glacio hinstellen
- [ ] Befehle für ST7-02 und ST11-03 (L6, L8) bereithalten: `22_TESTABEND.md`
