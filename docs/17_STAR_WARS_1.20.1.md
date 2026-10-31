# 17 — STAR WARS (1.20.1)

## Zweck

Welche Star-Wars-Mods im Pack sind, wer welchen Inhalt liefert und was dafür noch zu tun ist. Raumfahrt und Planetenstufen: `15_RAUMFAHRT.md`; Story: `18_STORY.md`.

Grundlage: Recherche des Users vom 2026-10-10, vollständig in `recherche/star-wars-clone-wars-mods-1.20.1.md` (Mod-Vergleich, Lichtschwert-Tabelle, Quellen).

## Entscheidung (🟢 2026-10-11)

| Mod | Rolle | Status |
|---|---|---|
| Ad Astra | Raketen und Raumfahrt | 🟢 nehmen (steht schon in Stufe 2) |
| Star Wars Planets 1.4.6.1 | Planeten, direkt in Ad Astra eingebunden | 🟢 nehmen (steht schon in Stufe 2) |
| Star Wars: Galaxy in a Cube 1.0.3.1 | Lichtschwerter, Macht, Klone, Droiden, Fahrzeuge | 🟢 nehmen (**neu**) |
| FTB Quests | Star-Wars-Quests (Dimension besucht, Item, Kill, Advancement) | 🟢 schon beschlossen |
| Star Wars Expansion 3.1.0 (FazBrick) | eigene Planeten mit eigener Galaxiekarte; viele Wesen | 🟢 nehmen als **Lieferant von Wesen** (User, 2026-10-31): Droiden-Modell für DD3R8 (Easy-NPC-Doppler), weitere Wesen für Teil 2 und 3. Reisesystem und Doppeltes wird abgeschaltet, siehe F43 in `20_ENTSCHEIDUNGEN.md` |
| Star Wars Clone Wars (Rupyber) | Portal-Planeten, Klone, Droiden | ❌ weglassen |
| Star Wars The Clone Wars (MelonHaver) | Klone, Droiden | ❌ weglassen |

Begründung in Kurzform:

- **Star Wars Planets** ist der einzige Mod, dessen Planeten ohne Zutun über Ad-Astra-Raketen laufen (Galaxie „Outer Rims", Tatooine verlangt Stufe 4).
- **Galaxy in a Cube** hat das beste Schwert- und Machtsystem und deckt Klone und Droiden mit ab. Damit sind beide Clone-Wars-Mods überflüssig.
- **Star Wars Expansion** bringt Tatooine, Hoth und Endor ein zweites Mal und reist über eine eigene Galaxiekarte statt über Ad Astra (Variante A aus der Recherche: nur ein Reisesystem). Seit 2026-10-31 trotzdem im Pack, aber nur wegen der Wesen: Die Wesen von Galaxy in a Cube stehen in Kategorie `MISC` und sind im Easy-NPC-Doppler nicht wählbar, die von Star Wars Expansion schon. Die Galaxiekarte bleibt dabei abgeschaltet (F43).

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
| Wesen als Modelle für Easy NPC (Droiden, Rodians, Twi'Leks, Hutt …) | **Star Wars Expansion** | übrige Inhalte abgeschaltet (F43), siehe unten |

## Unterschiede zum 1.18.2-Plan

- **Kamino** gibt es in der Ad-Astra-Version nicht (🟢 aus JAR, `15_RAUMFAHRT.md`).
- **Kyber** liegt ohne Eingriff nur auf Tatooine, nicht auf Endor (S3 in `modpfade/CROSSMOD_AUFFAELLIGKEITEN.md`).
- **Lichtschwerter** kommen aus Galaxy in a Cube (Assembly Bench, Rezepte im Code; ausgelesen in `modpfade/swgc/WISSEN.md`).

## KubeJS: Schwerter von Star Wars Planets entfernen

🟢 Umgesetzt 2026-10-31 (Test 109): `server_scripts/starwars/swplanets_entfernt.js` entfernt die Rezepte, `client_scripts/jei_ausblenden.js` blendet aus: die acht Schwerter unten, dazu Blaster, Blaster Upgrader, Zoom- und Explosion-Upgrade (Doppelung zu Galaxy in a Cube) und `swplanets:kyber_crystal` (Kyber kommt aus Galaxy in a Cube; das Erz lässt ihn noch fallen, bis Punkt 4 gebaut ist). Stormtrooper- und Beskar-Rüstung bleiben (Questtexte `questtexte/swplanets.md`). Der Entwurf unten ist damit überholt.

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
- 🟢 **Plastic Plate** (Star Wars Planets) kommt komplett raus (Skript 2026-10-20). Star-Wars-Kunststoff ist **Plastoid** (Galaxy in a Cube). ⚠️ Geändert durch O28 (2026-10-20): Plastoid gibt es nur im Shop des Einsiedlers, ohne Rezept; das geplante HDPE-Rezept entfällt. ⚠️ Wieder geändert durch O42 (2026-10-20): Der Einsiedler verkauft nur die ersten 20 Plastoid; danach Werkbank-Rezept 2 HDPE Pellets → 1 Plastoid hinter dem Bauplan „Plastoid“. ⚠️ Folge: Stormtrooper-Rüstung (24 Plastic Plate) und der Blaster von Star Wars Planets (5 Plastic Plate) brauchen dann ein neues Rezept oder fallen ebenfalls weg. 🔵 Entscheidung offen; Rezept und Menge für Plastoid offen.
- 🟢 **Beskar** wird extrem teuer: nur in einem sehr leistungsfähigen Ofen schmelzbar, Ergebnis nur ein Nugget. 🔵 Ofen und Rezept entscheidet der User später. ⚠️ In der ID-Liste von Star Wars Planets gibt es kein Beskar-Nugget (`modpfade/swplanets/WISSEN.md`); vermutlich braucht es ein eigenes KubeJS-Item.
- 🟢 **Star Manual** raus (Advancement-Belohnung `swplanets:star_manual` entfernen).
- 🟢 **Planetenkarte:** Mit der Rakete T5 erscheint nur Endor; die übrigen Planeten erst ab T6 bzw. T7 (über die Stufen in `data/swplanets/planets/*.json`, siehe `18_STORY.md`).
- 🟢 **Strukturen:** Auf den Planeten sollen eigene Story-Strukturen und die Strukturen von Galaxy in a Cube (z. B. Ewok Village) erzeugt werden. 🔵 Welche, wo.
- 🟢 **Macht** kommt aus Galaxy in a Cube; der normale Fortschritt soll gesperrt sein und die Macht über Quests freigeschaltet werden (Story: `18_STORY.md`, Teil 2). 🔵 Technik: T10 in `18_STORY.md`, Tests 33 und 34.
- 🔵 **Galaxy in a Cube** soll Planeten und Story-Inhalte ergänzen; die genaue Rolle legt der User noch fest.

## Offene Arbeit

1. 🔵 **Zusammenspiel testen:** Star Wars Planets und Galaxy in a Cube gemeinsam starten. Dass sie zusammen laufen, ist nicht belegt.
2. 🟡 **Worldgen von Galaxy in a Cube** (🟢 aus JAR, 2026-10-12; Kyber-Abschaltung bestätigt mit Test 9; Ewok-Dörfer und Jawas per Datapack, Tusken Raider per Skript aus der Overworld entfernt, Test 54; Entscheidung 2026-10-14 in `18_STORY.md`): Der Mod erzeugt in der Overworld Kyber-Kristalle (`swgc:kyber_crystal`, alle Overworld-Biome, 1 Versuch in jedem 16. Chunk, Y 4…112 über dem Weltboden), die Struktur `swgc:ewok_village` im Biom `minecraft:forest` und Jawa-Spawns in Wüste und Badlands. Erz-Features für Plastoid oder Durasteel gibt es nicht. 🟢 Entscheidung 2026-10-12: Die Kristalle werden aus der Overworld entfernt; Kyber gibt es nur auf den Star-Wars-Planeten (`03_ERZGENERATION.md`). Damit wird Punkt 4 Pflicht: ein Rezept vom Kyber-Erz zum Kristall, sonst sind Lichtschwerter nicht herstellbar.
3. 🔵 **Spawns:** Wo Galaxy in a Cube Mobs und Strukturen spawnt, ist nicht dokumentiert. Falls nur in der Overworld: pro Planeten-Biom eine Datapack-Datei mit zusätzlichen Spawns (Entity-IDs aus dem Spiel ablesen), und entscheiden, ob Klone und Droiden in der Overworld überhaupt erwünscht sind.
4. 🟡 **Kyber aus Star Wars Planets:** wird durch das Kyber von Galaxy in a Cube ersetzt (User, 2026-10-17). Offen ist nur noch der Weg: Drop des Erzes ändern oder Rezept zum Kristall.
5. 🟡 **Macht:** über Quests freischalten (User, 2026-10-17). Prüfen, ob `forceObtainment` den normalen Fortschritt abschaltet und ob sich Punkte per Befehl vergeben lassen; im Kreativmodus Steuerung und Ausdauer ausprobieren.
6. 🔵 **Drops und Truhen:** Prüfen, ob Mobs oder Strukturen von Star Wars Planets entfernte Schwerter droppen; falls ja, per LootJS ersetzen (LootJS ist noch nicht im Pack).
7. 🔵 **Advancement `craft_saber`** von Star Wars Planets wird ohne Rezept unerreichbar → nicht als Quest-Bedingung verwenden.
8. 🔵 **Dopplungen** bei Jawas, Kyber-Kristallen und Blastern sichten und entscheiden, welche Seite bleibt.
9. 🟡 **Rezepte und Werte** von Galaxy in a Cube: JEI zeigt nur die 32 Werkbank-Rezepte (Test 24, 2026-10-17). Lichtschwerter, Blaster, Bemalungen (z. B. 501st), Kyber-Färben und Droiden laufen über Assembly Bench, eigenen Bildschirm und Droid Fabricator ohne JEI; Rezepte dieser Wege stehen in `modpfade/swgc/WISSEN.md` und müssen im Questbuch erklärt werden. 🔵 Werte der Waffen und Rüstungen offen.
10. 🔵 **Quests:** Star-Wars-Kapitel in FTB Quests, z. B. „Lande auf Tatooine", „Baue ein Lichtschwert".

## Star Wars Expansion: abgeschaltet, Inhalte für die Planeten (2026-10-31)

🟢 **Umgesetzt (F43):** Star Wars Expansion ist im Pack, aber nur als Lieferant von Wesen. Rettungskapsel in der Overworld aus (`kubejs/data/star_wars_expansion/worldgen/structure/broken_pod_structure.json`), alle 31 Rezepte weg (`server_scripts/starwars/swe_entfernt.js`), alle Items in JEI ausgeblendet (`client_scripts/swe_ausblenden.js`, Listen „dauerhaft“, „nur Teil 1“, Spawn-Eier). Damit gibt es keinen Weg in seine vier Dimensionen (Tatooine, Endor, Hoth, Naboo); sie bleiben registriert, werden aber nie eingebunden. Test 108.

🔵 **Vorschläge: Inhalte aus Star Wars Expansion in die Welten von Star Wars Planets holen** (Claude, 2026-10-31; Entscheidung F44). Ziele sind die Biome von Star Wars Planets: `swplanets:tatooine_desert`, `tatooine_rocky_desert`, `endor_taiga`, `hoth_frozen_desert`, `mustafar_hill`, `mandalore_vestige` (dazu `hot_desert`). Alles per Datapack in `kubejs/data/`, ohne Code.

| # | Idee | Technik | Haken |
|---|---|---|---|
| E1 | **Tiere und Gegner spawnen lassen**: Krykna (Spinne) und Tusken auf Tatooine, Tauntaun und Wampa auf Hoth, Porgs und Ewoks auf Endor. Bantha hat Star Wars Planets selbst. | je eine Datei `forge/biome_modifier/*.json` mit `forge:add_spawns` und den Biomen oben | Die Spawn-Regeln der Wesen stehen im Code (MCreator); Tiere brauchen evtl. Blöcke aus `minecraft:animals_spawnable_on` – die Oberflächenblöcke von Star Wars Planets dort eintragen. Im Spiel prüfen. |
| E2 | **Bauten übernehmen**: Hutt Palace, Tatooine Village, Jawa Sandcrawler, Pirate Ship, Tusken Campment und Jedi Temple auf Tatooine; Hoth Base auf Hoth; Ewok Tree auf Endor; Sith Ruins auf Mustafar. | Strukturdateien des Mods in `kubejs/data/star_wars_expansion/worldgen/structure/` überschreiben, `biomes` auf die Biome von Star Wars Planets setzen | Die Bauten bringen ihre Bewohner fest mit (z. B. Hutt, Gamorreans, Skiff Guards). Truhen haben festen Inhalt mit ausgeblendeten Items (Doonium, Credits, Saber-Teile), die Siedlungen enthalten Arbeitsblöcke der Händler (dann Händler gegen Credits). Vorher NBT bereinigen oder nur Bauten ohne Truhen und Händlerblöcke nehmen (Tusken Campment, Ewok Tree, Hoth Base). |
| E3 | **Kopfgeldjäger-Quests in Teil 3** (`18_STORY.md`: „verdingen sich als Kopfgeldjäger“): Auftraggeber als Easy NPC mit Doppler-Modell Hutt, Bib Fortuna, Rodian oder Twi'Lek; Ziele Pirates, Gamorreans, Skiff Guards, Tusken, Wampa. Bib Fortuna sagt im Mod schon „We only cater to bounty hunters here“. | Easy NPC (Doppler), FTB-Quests-Aufgabe „Kill“ | Ziele müssen spawnen (E1/E2) oder vom Host gesetzt werden (`/summon`). |
| E4 | **Bosse für den Meister** (Teil 3: „mehrere Bosse“): Ancient Sith Lord als Boss in den Sith Ruins auf Mustafar; Wampa als Boss auf Hoth. Der Sith Lord lässt seine Maske fallen (Lebensraub je Treffer). | Struktur aus E2 oder `/summon` am festen Ort | Werte des Sith Lord nicht ausgelesen. |
| E5 | **Belohnungen aus der Teil-1-Liste**: Droiden als Begleiter (R2-D2, C-3PO, BB-8 …), Landspeeder und Speeder Bike, Vibro-Waffen, Jedi-Gewänder mit Doppelsprung (Teil 2, Training), Snow Suit für Hoth. | in `swe_ausblenden.js` aus `SWE_NUR_TEIL1` streichen; als Quest-Belohnung oder im Shop | Droiden fressen Computer Tip (dann auch freigeben). 🔵 Prüfen, ob die Taste Z auch in Bodenfahrzeugen die Galaxiekarte öffnet – dann nur Fahrzeuge, die das nicht tun. X-Wing und TIE-Fighter nie. |
| E6 | **Deko für Story-Bauten des Hosts**: Imperial-, Modern- und Metal-Blöcke, Kolto Tank (Heilung des Meisters), Moisture Vaporator, Holocron, Jedi Knight Statue, Cantina Light – für Mondbasis, Versteck auf Glacio, Endor-Basis. | Kreativmodus des Hosts | Blöcke sind in JEI ausgeblendet, aber im Kreativ-Tab des Mods vorhanden. |
| E7 | **Cantina auf Tatooine**: Cantina Band mit Platte „Cantina Music“ in einem gebauten Treffpunkt der Kopfgeldjäger. | Bau des Hosts, Wesen per `/summon` oder Easy NPC | – |

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
