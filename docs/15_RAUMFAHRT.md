# 15 — RAUMFAHRT

## Zweck

Design der Raumfahrt als **Hauptziel des Packs**: Beyond Earth + Star Wars Planets, eingebettet in die bestehenden Pfade.

## Grundentscheidungen

🟢 **Raumfahrt ist ein Hauptziel des Modpacks** (Entscheidung 2026-10-07).

🟢 Mods (geplant, noch nicht installiert):
- **Beyond Earth** (Forge, 1.18.2) — Raketen, Planeten, Sauerstoff, Rover
- **Star Wars Planets** (Beyond-Earth-Addon, 1.18.2) — u. a. Tatooine, Kamino, Endor, Hoth, Mustafar
- **Beyond Earth: Giselle Addon** (1.18.2) — Integration mit Mekanism und IE

🟢 **Energie und Treibstoff kommen ausschließlich aus anderen Mods.** Eigene Energie- und Treibstoffproduktion von Beyond Earth wird deaktiviert (Rezepte entfernt) bzw. ersetzt.

🟢 Ad Astra ist für 1.18.2 Forge keine Option. Star Wars Planets ist gesetzt → Beyond Earth (trotz eingestellter Pflege).

### Entscheidungen 2026-10-07

1. 🟢 **Sauerstoff** kommt aus Mekanism (z. B. Electrolytic Separator), **sofern sich das technisch sinnvoll umsetzen lässt** (🔵 prüfen: nimmt der Oxygen Loader Mekanism-Sauerstoff an, ggf. über Giselle Addon?). Sonst bleibt der Beyond-Earth-Oxygen-Loader mit Mekanism-Energie.
2. 🟢 **Erster Raumflug (Mond)** nach Petroleum; zusätzlich ist mindestens eine erste Mekanism-Maschine Pflicht (im Raketen- oder Launchpad-Rezept bzw. über Komponenten).
3. 🟢 **Mond = Hauptquelle für Osmium und Certus.** In der Overworld beides reduziert (siehe `03_ERZGENERATION.md`).
4. 🟢 **Treibstoff-Tiers:** IE bleibt auch später nötig, Mekanism wird auf jeden Fall gebraucht. **Star-Wars-Planeten** benötigen zwingend **Magie-Komponenten** und **Uran-Erzeugnisse** (Mekanism-Nuklearkette).
5. 🟢 **Planeten-Metalle** bekommen Mekanisms Mehrfach-Erzverarbeitung, sofern es zum Spiel passt (Balancing in Phase 3).

## Bekannte Fakten (Webrecherche, 🔵 noch gegen die JARs zu prüfen)

- Beyond Earth wird nicht mehr weiterentwickelt (Nachfolger: Ad Astra / Stellaris, nicht für 1.18.2). Bugs der 1.18.2-Version bleiben → gründlicher Test in der Testinstanz nötig.
- Star Wars Planets gibt es in zwei Linien: für **Beyond Earth** (1.18.x, Forge) und für **Ad Astra**. Wir brauchen die Beyond-Earth-Version; die passende Beyond-Earth-Version muss abgeglichen werden.
- Giselle Addon:
  - IE: Metal-Press-Form „Compressing“ (Barren → Compressed-Platten), Arc-Furnace-Recycling zurück zu Barren
  - IE-Biodiesel als Treibstoff für Fuel Loader, Rover und Raketen
  - Mekanism: Crushing-Rezepte für Planetengestein, Oxygen Loader kann Mekanism-Items (z. B. Scuba Tank) mit Sauerstoff füllen

## Regel „Energie/Treibstoff nur aus anderen Mods“ — Umsetzungsentwurf

| Beyond-Earth-Element | Umgang | Ersatzquelle | Status |
|---|---|---|---|
| Fuel Refinery (Öl → Fuel) | Rezept entfernen oder Fuel nur über andere Mods erzeugen | IE Petroleum (Diesel/Destillation), IE Biodiesel | 🔵 |
| Eigener Generator (Kohle) | Rezept entfernen | IE / Mekanism Generators | 🔵 |
| Solar Panel | Rezept entfernen | Mekanism Solar | 🔵 |
| Compressor | Rezept entfernen | IE Metal Press + Giselle-Compressing-Mold | 🔵 |
| Oxygen Loader / Oxygen Bubble Distributor | 🔵 offen: zählt Sauerstoff als „Treibstoff“? | z. B. Mekanism Electrolytic Separator | 🔵 |
| Fuel Loader | bleibt (nur Befüllung, keine Produktion) | — | 🔵 |
| Eigener Stahl | per Tags mit IE-Stahl vereinheitlichen | IE Steel | 🔵 |

🔵 Zu prüfen: welche Fluids die Raketen tatsächlich akzeptieren (Fuel-Tag?), und ob Diesel/Biodiesel per Tag als Raketentreibstoff eingehängt werden kann.

## Progressionsvorschlag (🔵 Entwurf, in Phase 2 festzulegen)

Pfad H — Raumfahrt, kreuzt die Pfade B, C, D und E:

| Stufe | Ziel | Kreuzungspunkte (Vorschlag) |
|---|---|---|
| Rakete T1 → Mond | erster Raumflug; **Osmium + Certus in Menge**, Desh | 🟢 IE Steel, Metal Press (Compressing), Diesel aus IE Petroleum, **erste Mekanism-Maschine** |
| Rakete T2 → Mars | Ostrum | IE-Treibstoff, durch Mekanism veredelt (z. B. Chemical Infuser/Oxidizer); Mekanism-Ausbau mit Mond-Osmium |
| Rakete T3 → Merkur/Venus | Calorite (Venus) | Mekanism-Chemie + weiterhin IE-Komponenten (Refinery, Arc Furnace) |
| Rakete T4 → Glacio / Star-Wars-Planeten | Star-Wars-Inhalte (Beskar, Kyber), Prestige | 🟢 **Magie** (Botania/MythicBotany, Blood Magic) **+ Uran-Erzeugnisse** (z. B. Polonium/Plutonium aus der Mekanism-Nuklearkette) |

🔵 Treibstoff-Idee (Entwurf): T1 = IE-Diesel; ab T2 ein eigener KubeJS-Treibstoff, hergestellt in IE und Mekanism im Wechsel (z. B. Diesel → Mekanism-Veredelung → IE Mixer/Refinery). Abhängig davon, ob Beyond Earth verschiedene Treibstoffe pro Tier unterscheiden kann (🔵 JAR prüfen). Sonst wird das Tier über Raketen-/Launchpad-Rezepte gegated.

🔵 Offen, wie Star-Wars-Planeten in die Rakete-Tiers einsortiert werden (Addon prüfen).

## Installierter Stand (🟢 verifiziert 2026-10-07, Testinstanz startet)

- `Beyond-Earth-1.18.2-6.2.jar`, `StarWarsPlanets-1.15.jar`, `Beyond-Earth-Giselle-Addon-1.18.2-2.20.jar`
- **Nicht** Beyond Earth 7.0-SNAPSHOT (inkompatibel mit beiden Addons) und **nicht** Beyond Planets Core / Planeteer Machines (siehe `00_MODBASIS.md`).
- Dimensionen: Mond, Mars, Merkur, Venus, Glacio (je + Orbit); Tatooine, Kamino, Endor, Hoth (`hot`), Mustafar, Mandalore (je + Orbit).

## Worldgen aus den JARs (🟢 verifiziert)

**Planeten-Erze (Beyond Earth, fest im Code):**

| Planet | Erze |
|---|---|
| Mond | Desh, Cheese, Ice Shard, Iron |
| Mars | Ostrum, Diamond, Ice Shard, Iron |
| Merkur | Iron |
| Venus | Calorite, Coal, Diamond, Gold |
| Glacio | Coal, Copper, Iron, Lapis, Ice Shard (+ Deepslate-Varianten) |

Star Wars Planets: Kyber-Kristall-Erz, Beskar-Erz; Strukturen AT-AT, AT-ST, AT-ACT, Tatooine-Häuser.

**Overworld-Strukturen von Beyond Earth** (betreffen neue Overworld-Chunks):
- **Meteor**: Wald, Dschungel, Taiga, Wüste, Ebenen, Savanne. 🟢 Bleibt (2026-10-07).
- **Oil Well**: Ozeane, Tiefsee, Sumpf. 🟢 **Abgeschaltet** (2026-10-07), weil sie eine kostenlose Ölquelle wären. Immersive Petroleum bleibt die einzige Ölquelle. Umsetzung: `kubejs/data/beyond_earth/tags/worldgen/biome/has_structure/oil_well_biomes.json` (`replace: true`, leere Liste). 🔵 Wirkung in der Testinstanz prüfen. Das gilt nur für neue Chunks; in der Hauptwelt muss die Datei **vor dem ersten Start mit Beyond Earth** beim Host liegen.

**Fehler im Addon:** Die Loot-Tabelle `swplanets:chests/empire_chests` ist kaputt (`minecraft:steak` gibt es nicht) → Imperiums-Truhen bleiben leer. Lässt sich per Datapack/KubeJS-Override reparieren.

## Auswirkungen auf die bestehende Welt

- Planeten sind neue Dimensionen → kein Retrogen nötig.
- 🔵 Prüfen, ob Beyond Earth oder Star Wars Planets Erze/Strukturen in der **Overworld** generieren (dann Retrogen-/Worldgen-Frage).
- Neue Metalle (Desh, Ostrum, Calorite, ggf. Star-Wars-Materialien) → Erzmatrix (`14_ERZ_MOD_MATRIX.md`), Verarbeitung (`04_VERARBEITUNG.md`), Tags (`02_RESSOURCEN.md`).

## Offene Fragen

1. 🔵 Wie verhält sich Immersive Aircraft dazu (bleibt Atmosphären-Transport)?
2. 🔵 Welche Magie-Komponenten genau für Star-Wars-Planeten (z. B. Terrasteel, Gaia Spirit, Alfsteel, Blood-Orb-Tier)?
3. 🔵 Technische Machbarkeit Sauerstoff/Treibstoff-Tiers (nach Installation aus JARs prüfen).

## Nächste Schritte

1. Passende Versionen von Beyond Earth, Star Wars Planets und Giselle Addon für 1.18.2 heraussuchen und abgleichen.
2. In der Testinstanz installieren, Start und Log prüfen.
3. Inhalte aus den JARs erfassen (Rezepte, Fluids, Tags, Worldgen).
4. Pfad H in die Phase-2-Meilensteine aufnehmen.

## Quellen

- https://www.curseforge.com/minecraft/mc-mods/Beyond-Earth
- https://www.curseforge.com/minecraft/mc-mods/space-bosstools-giselle-addon
- https://metamods.net/en/mods/star-wars-planets-be
