# Hilfebücher im Spiel — Folgen für das Questbuch

> Befund aus den JARs der 1.20.1-Testinstanz (98 Mods), 2026-10-17. Gesucht nach Patchouli-, GuideMe-, Modonomicon- und Lavender-Büchern, dem IE-Handbuch, Tinkers-Büchern und Buch-Items in den Sprachdateien.

## Regel für das Questbuch

- **Mod mit Buch:** Das Questbuch erklärt wenig. Es nennt das Ziel, verweist auf das Buch und auf das Kapitel darin.
- **Mod ohne Buch:** Das Questbuch führt den Weg Schritt für Schritt: welche Maschine, welches Zwischenprodukt, welcher nächste Schritt.
- **Immer erklären, auch bei Mods mit Buch:** alles, was wir per KubeJS oder Config ändern. Die Bücher kennen unsere Änderungen nicht und beschreiben dann falsche Rezepte. Beispiele: Ad-Astra-Platten über die IE Metal Press, eigene Treibstoffstufen, der IE-Crusher übernimmt den Mekanism-Crusher, AE2 erst spät und ohne eigene Energie, die Erzverteilung.

## Mods mit Buch

| Mod | Buch | Art | Erweitert von |
|---|---|---|---|
| Immersive Engineering | Engineer's Manual | IE-Handbuch | Immersive Petroleum, Immersive Posts |
| Tinkers' Construct | Materials and You, Puny Smelting, Mighty Smelting, Fantastic Foundry, Tinkers' Gadgetry, Encyclopedia of Tinkering | eigene Tinkers-Bücher | Blood Smeltery, Tinkers Levelling Addon |
| Botania | Lexica Botania | Patchouli | MythicBotany, Applied Botanics |
| Blood Magic | Sanguine Scientiem | Patchouli | — |
| Applied Energistics 2 | Guide | GuideMe | — (Applied Mekanistics ergänzt nichts) |
| Ad Astra | Astrodux (hat ein Rezept) | Patchouli | — (Giselle Addon und Rocketed ergänzen nichts) |
| Star Wars Planets | Star Manual (kein Rezept, nur Creative-Tab oder Belohnung) | Patchouli | — |
| Blue Skies | Blue Journal, beim Gatekeeper zu kaufen; schaltet einen Reiter im Inventar frei, Einträge kommen beim Spielen dazu | eigenes System | — |
| Alex's Mobs | Animal Dictionary | eigenes Buch (Citadel) | — |

Hinweise:
- 🔵 Ob das Blue Journal auch die Progression erklärt (Bosse, Werkzeuge, Dimensionen) oder nur Lore und Bestiarium enthält, ist nicht geprüft. Bis dahin gilt Blue Skies als Mod mit halbem Buch: Das Questbuch führt den Weg zu den Bossen.
- Das Star Manual verrät das Geheimnis schon bei T3 (siehe `00_STATUS.md`, Block D).

## Mods ohne Buch — hier muss das Questbuch führen

| Mod | Bemerkung |
|---|---|
| **Mekanism + Mekanism Generators** | wichtigster Fall: großer Tech-Mod ganz ohne Buch, nur das Wiki außerhalb des Spiels. Erzverarbeitung (2×–5×), Chemie, Sauerstoff, Fusion vollständig erklären |
| Mekanism: Ad Astra Ores | Erze auf den Planeten |
| Applied Mekanistics | Chemikalien in AE2 speichern; das AE2-Buch erwähnt es nicht |
| Ad Astra: Giselle Addon | Ausrüstung und Verzauberungen für die Raumfahrt |
| Ad Astra: Rocketed | Raketen T5 bis T7; Astrodux kennt sie nicht |
| Galaxy in a Cube (swgc) | |
| Farmer's Delight, Nether's Delight, Alex's Delight, Engineer's Delight | nur Nebenquests |
| Wesley's Roguelike Dungeons | Dungeons finden und was sie liefern |
| Immersive Aircraft | |
| More Immersive Wires, IAIE | Ergänzungen zu IE, im Engineer's Manual nicht enthalten |
| Storage Drawers, Sophisticated Backpacks, Chisels & Bits, Rechiseled | Komfort; kurze Hinweise genügen |

Hilfsmods ohne eigenen Spielinhalt (JEI, Jade, JourneyMap, Bibliotheken, Leistungsmods) brauchen keine Quests.
