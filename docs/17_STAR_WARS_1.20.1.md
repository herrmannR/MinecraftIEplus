# 17 — STAR WARS (1.20.1)

## Zweck

Welche Star-Wars-Mods in den 1.20.1-Kandidaten kommen, wer welchen Inhalt liefert und was dafür noch zu tun ist. Gilt nur für `16_MODLISTE_1.20.1.md`; für 1.18.2 bleibt `15_RAUMFAHRT.md` maßgeblich.

Grundlage: Recherche des Users vom 2026-10-10, vollständig in `recherche/star-wars-clone-wars-mods-1.20.1.md` (Mod-Vergleich, Lichtschwert-Tabelle, Quellen).

## Entscheidung (🟢 2026-10-11)

| Mod | Rolle | Status |
|---|---|---|
| Ad Astra | Raketen und Raumfahrt | 🟢 nehmen (steht schon in Stufe 2) |
| Star Wars Planets 1.4.6.1 | Planeten, direkt in Ad Astra eingebunden | 🟢 nehmen (steht schon in Stufe 2) |
| Star Wars: Galaxy in a Cube 1.0.3.1 | Lichtschwerter, Macht, Klone, Droiden, Fahrzeuge | 🟢 nehmen (**neu**) |
| FTB Quests | Star-Wars-Quests (Dimension besucht, Item, Kill, Advancement) | 🟢 schon beschlossen |
| Star Wars Expansion (FazBrick) | eigene Planeten mit eigener Galaxiekarte | ❌ weglassen |
| Star Wars Clone Wars (Rupyber) | Portal-Planeten, Klone, Droiden | ❌ weglassen |
| Star Wars The Clone Wars (MelonHaver) | Klone, Droiden | ❌ weglassen |

Begründung in Kurzform:

- **Star Wars Planets** ist der einzige Mod, dessen Planeten ohne Zutun über Ad-Astra-Raketen laufen (Galaxie „Outer Rims", Tatooine verlangt Stufe 4).
- **Galaxy in a Cube** hat das beste Schwert- und Machtsystem und deckt Klone und Droiden mit ab. Damit sind beide Clone-Wars-Mods überflüssig.
- **Star Wars Expansion** bringt Tatooine, Hoth und Endor ein zweites Mal und reist über eine eigene Galaxiekarte statt über Ad Astra (Variante A aus der Recherche: nur ein Reisesystem).

## Aufteilung der Inhalte

| Inhalt | Kommt aus | Anmerkung |
|---|---|---|
| Planeten, Orbits, Reise | Star Wars Planets | Tatooine, Endor, Hoth, Mustafar, Mandalore |
| Strukturen auf den Planeten | Star Wars Planets | Tatooine Village/Houses, Jawa Crawler, Endor Outpost, AT-AT, AT-ST, AT-ACT, TIE Fighter |
| Kyber- und Beskar-Erz | Star Wars Planets | 🔵 Zweck von Kyber offen, siehe unten |
| Stormtrooper- und Beskar-Rüstung | Star Wars Planets | |
| **Lichtschwerter**, Darksaber | **Galaxy in a Cube** | Schwerter von Star Wars Planets werden entfernt |
| Macht, Holocrons, Kampfformen | Galaxy in a Cube | abschaltbar per Gamerule `forceObtainment` |
| Klone, Droiden (B1, B2, Droideka), Klon-Rüstung | Galaxy in a Cube | |
| Fahrzeuge AT-RT, AT-ST, Jedi-Sternjäger | Galaxy in a Cube | |
| Jawas, Kyber-Kristalle, Blaster | **beide** | 🔵 Dopplung, bei Bedarf eine Seite ausblenden |

## Unterschiede zum 1.18.2-Plan

- **Kamino:** In der 1.20.1-Planetenliste der Recherche fehlt Kamino (1.18.2: sechs Planeten). 🔵 Im Spiel prüfen. Fehlt er, ändert sich die Kyber-Verteilung aus `15_RAUMFAHRT.md`.
- **Lichtschwert als Belohnung:** In 1.18.2 ist es Light Saber Base (Kyber + Eisen) plus Beacon je Farbe. Das entfällt mit dem Wechsel auf die Schwerter von Galaxy in a Cube; deren Rezepte sind noch nicht bekannt (kein Wiki, closed source).
- **Erzatlas und Meilensteinkarte** bleiben auf dem 1.18.2-Stand, solange der Wechsel nicht beschlossen ist.

## KubeJS: Schwerter von Star Wars Planets entfernen

Noch nicht angelegt. IDs stammen aus dem Quellcode (Zweig 1.20.1), 🔵 im Spiel mit `/kubejs hand` gegenprüfen.

`kubejs/server_scripts/star_wars_sabers.js`:

```js
const REMOVED_SABERS = [
  'swplanets:light_saber_base',
  'swplanets:light_saber_blue',
  'swplanets:light_saber_green',
  'swplanets:light_saber_violet',
  'swplanets:light_saber_red',
  'swplanets:light_saber_kylo_ren',
  'swplanets:light_saber_dark_maul',
  'swplanets:darksaber'
]

ServerEvents.recipes(event => {
  REMOVED_SABERS.forEach(id => event.remove({ output: id }))
})
```

`kubejs/client_scripts/star_wars_sabers.js` (dieselbe Liste dort noch einmal anlegen):

```js
JEIEvents.hideItems(event => {
  event.hide(REMOVED_SABERS)
})
```

## Entscheidungen aus dem Ideenimport (User, 2026-10-17)

- 🟢 **Grundsatz:** Was Star Wars Planets doppelt zu Galaxy in a Cube hat, wird bei Star Wars Planets entfernt.
- 🟢 **Lichtschwerter** von Star Wars Planets raus (bestätigt die Liste unten).
- 🟢 **Kyber:** Das Kyber von Star Wars Planets wird durch das Kyber von Galaxy in a Cube ersetzt (Punkt 4 unten); insgesamt soll Kyber deutlich schwerer erhältlich sein. 🔵 Weg offen: Drop des Kyber-Erzes ändern oder Rezept Kyber-Erz → Kristall.
- 🟢 **Plastic Plate** (Star Wars Planets) kommt komplett raus. Star-Wars-Kunststoff ist **Plastoid** (Galaxy in a Cube); HDPE aus Mekanism wird Bestandteil seines Rezepts. ⚠️ Folge: Stormtrooper-Rüstung (24 Plastic Plate) und der Blaster von Star Wars Planets (5 Plastic Plate) brauchen dann ein neues Rezept oder fallen ebenfalls weg. 🔵 Entscheidung offen; Rezept und Menge für Plastoid offen.
- 🟢 **Beskar** wird extrem teuer: nur in einem sehr leistungsfähigen Ofen schmelzbar, Ergebnis nur ein Nugget. 🔵 Ofen und Rezept entscheidet der User später. ⚠️ In der ID-Liste von Star Wars Planets gibt es kein Beskar-Nugget (`modpfade/swplanets/WISSEN.md`); vermutlich braucht es ein eigenes KubeJS-Item.
- 🟢 **Star Manual** raus (Advancement-Belohnung `swplanets:star_manual` entfernen).
- 🟢 **Planetenkarte:** Mit der Rakete T5 erscheint nur Endor; die übrigen Planeten erst ab T6 bzw. T7 (über die Stufen in `data/swplanets/planets/*.json`, siehe `18_STORY.md`).
- 🟢 **Strukturen:** Auf den Planeten sollen eigene Story-Strukturen und die Strukturen von Galaxy in a Cube (z. B. Ewok Village) erzeugt werden. 🔵 Welche, wo.
- 🟢 **Macht** kommt aus Galaxy in a Cube; der normale Fortschritt soll gesperrt sein und die Macht über Quests freigeschaltet werden (Story: `18_STORY.md`, Teil 2). 🔵 Technik: T10 in `18_STORY.md`, Tests 33 und 34.
- 🔵 **Galaxy in a Cube** soll Planeten und Story-Inhalte ergänzen; die genaue Rolle legt der User noch fest.

## Offene Arbeit

1. 🔵 **Zusammenspiel testen:** Star Wars Planets und Galaxy in a Cube gemeinsam starten. Dass sie zusammen laufen, ist nicht belegt.
2. 🟡 **Worldgen von Galaxy in a Cube** (🟢 aus JAR, 2026-10-12; 🔵 im Spiel nicht geprüft): Der Mod erzeugt in der Overworld Kyber-Kristalle (`swgc:kyber_crystal`, alle Overworld-Biome, 1 Versuch in jedem 16. Chunk, Y 4…112 über dem Weltboden), die Struktur `swgc:ewok_village` im Biom `minecraft:forest` und Jawa-Spawns in Wüste und Badlands. Erz-Features für Plastoid oder Durasteel gibt es nicht. 🟢 Entscheidung 2026-10-12: Die Kristalle werden aus der Overworld entfernt; Kyber gibt es nur auf den Star-Wars-Planeten (`03_ERZGENERATION.md`). Damit wird Punkt 4 Pflicht: ein Rezept vom Kyber-Erz zum Kristall, sonst sind Lichtschwerter nicht herstellbar.
3. 🔵 **Spawns:** Wo Galaxy in a Cube Mobs und Strukturen spawnt, ist nicht dokumentiert. Falls nur in der Overworld: pro Planeten-Biom eine Datapack-Datei mit zusätzlichen Spawns (Entity-IDs aus dem Spiel ablesen), und entscheiden, ob Klone und Droiden in der Overworld überhaupt erwünscht sind.
4. 🟡 **Kyber aus Star Wars Planets:** wird durch das Kyber von Galaxy in a Cube ersetzt (User, 2026-10-17). Offen ist nur noch der Weg: Drop des Erzes ändern oder Rezept zum Kristall.
5. 🟡 **Macht:** über Quests freischalten (User, 2026-10-17). Prüfen, ob `forceObtainment` den normalen Fortschritt abschaltet und ob sich Punkte per Befehl vergeben lassen; im Kreativmodus Steuerung und Ausdauer ausprobieren.
6. 🔵 **Drops und Truhen:** Prüfen, ob Mobs oder Strukturen von Star Wars Planets entfernte Schwerter droppen; falls ja, per LootJS ersetzen (LootJS ist noch nicht im Pack).
7. 🔵 **Advancement `craft_saber`** von Star Wars Planets wird ohne Rezept unerreichbar → nicht als Quest-Bedingung verwenden.
8. 🔵 **Dopplungen** bei Jawas, Kyber-Kristallen und Blastern sichten und entscheiden, welche Seite bleibt.
9. 🔵 **Rezepte und Werte** von Galaxy in a Cube in JEI nachschlagen und hier eintragen.
10. 🔵 **Quests:** Star-Wars-Kapitel in FTB Quests, z. B. „Lande auf Tatooine", „Baue ein Lichtschwert".

## Vorlage: fremde Dimension als Ad-Astra-Planet

Wird aktuell nicht gebraucht (der Rupyber-Mod entfällt), bleibt als Muster. Eine Datei pro Planet unter `data/<pack>/planets/<name>.json`; Feldnamen wie in `tatooine.json` von Star Wars Planets. Nicht getestet, insbesondere nicht ohne das Feld `orbit`.

```json
{
  "dimension": "modid:dimension",
  "gravity": 9.807,
  "oxygen": true,
  "solar_power": 16,
  "solar_system": "swplanets:outer_rims",
  "temperature": 20,
  "tier": 2
}
```
