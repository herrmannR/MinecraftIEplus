# 08 — AE2 & AUTOMATION

> ⚠️ **Stand 1.18.2, noch nicht auf 1.20.1 geprüft.** Seit 2026-10-11 gilt Minecraft 1.20.1 mit geänderter Mod-Liste (`16_MODLISTE_1.20.1.md`). Dieses Dokument wird beim Neustart der Analyse überarbeitet; Einstieg und TODO-Liste: `00_STATUS.md`.

## Zweck

Applied Energistics 2, Applied Mekanistics und Applied Botanics als Logistik-/Automatisierungsschwerpunkt.

## Grundentscheidung

🟢 **AE2 ist Endgame.** Einzige Ausnahme ist ein früher, bewusst teurer **Storage-Layer**, mit dem bestehende Kisten und Storage Drawers angebunden und zentral durchsucht werden können.

🟢 Automation macht eine bereits verstandene Produktionskette effizienter; sie überspringt keine Progression.

## Stufe 1 — Früher Storage-Layer

Ziel:
- vorhandene Truhen und Storage Drawers anbinden
- Items zentral über ein Terminal suchen, ein- und auslagern
- **keine** ME-Zellen, kein Autocrafting

Gewünschter Aufbau:
**Kisten / Drawers → Storage Bus → ME-Kabel/Controller → Terminal**

Kosten berühren mehrere etablierte Pfade:
- IE-Materialien / Steel
- Certus Quartz / Fluix
- Redstone
- optional kleiner Botania-/Blood-Magic-Anteil für hochwertige Varianten

### Natürliches Gate (verifiziert)
Inscriber-Pressen gibt es nur in Meteoriten (`spawnPressesInMeteorites = true`). Terminal, Storage Bus und Controller brauchen Prozessoren → schon Stufe 1 setzt eine Meteoriten-Suche voraus.

### Zu klären in der Testinstanz (🔵)
- Welche Teile mindestens nötig sind (Controller ja/nein, Kanäle, Energie)
- Funktioniert der Storage Bus mit Storage Drawers problemlos (Forge-Item-Capability)?
- Welche Bauteile müssen per Rezept teurer werden, ohne Stufe 2 zu entwerten?
- Wie wird verhindert, dass Stufe 1 schon Drives/Zellen/Autocrafting freischaltet (Gates an ME Drive, Storage Cells, Pattern Provider, Molecular Assembler)?

## Stufe 2 — Endgame-ME

ME Drives und Storage Cells → Import/Export → Crafting → Pattern Provider / Processing → Applied Mekanistics (Gase) → Applied Botanics (Mana) → Cross-Mod-High-End-Automation.

## Meilensteine

1. 🟡 Meteorit gefunden, erste Prozessoren
2. 🟡 Storage-Layer (Stufe 1)
3. 🔵 ME Drive / Storage Cells
4. 🔵 Autocrafting
5. 🔵 Applied Mekanistics
6. 🔵 Cross-Mod-High-End-Automation

## Offen

🔵 Konkrete Rezeptkosten (erst nach Phase 2 „Meilensteine“)
🔵 Certus-/Fluix-Ökonomie
🔵 Gas-/Fluid-Automation

**Noch keine KubeJS-Rezepte hierfür finalisieren.**
