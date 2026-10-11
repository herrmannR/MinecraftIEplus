# 11 — TESTING

> ⚠️ **Stand 1.18.2, noch nicht auf 1.20.1 geprüft.** Seit 2026-10-11 gilt Minecraft 1.20.1 mit geänderter Mod-Liste (`16_MODLISTE_1.20.1.md`). Dieses Dokument wird beim Neustart der Analyse überarbeitet; Einstieg und TODO-Liste: `00_STATUS.md`.

## Zweck

Kontrollierte Validierung, ohne die Hauptwelt zu gefährden.

## Umgebungen

| Umgebung | Ort | Regel |
|---|---|---|
| Hauptwelt | beim Host (LAN) | 🔴 nie experimentieren; nur freigegebene Änderungen |
| Eigene Instanz `ImmersiveEngineering` | ATLauncher | nur lesen (Referenz) |
| **Testinstanz `TestIEInstance`** | `…\ATLauncher\instances\TestIEInstance` | 🟢 freie Experimente; jede Änderung in `13_TESTINSTANZ_CHANGELOG.md` |

Die Testinstanz ist eine Kopie vom 2026-10-07 mit identischen Mods und den Testwelten `WasIchBauenWill` und `WasIchBauenWill_Kopie`. Für Worldgen-Tests werden **neue** Welten angelegt.

## Testbereiche

- **Rezepte:** Inputs, Outputs, Tags, JEI-Anzeige, Rezeptentfernung, `/reload`
- **Maschinen:** Multiblocks, Energie, Flüssigkeiten, Gase, Nebenprodukte
- **Worldgen:** neue Chunks, Erzverteilung pro Dimension, Retrogen in alten Chunks
- **Progression:** Gates, Umgehungsmöglichkeiten, bestehender Weltstand
- **Cross-Mod:** IE ↔ Mekanism, Botania ↔ Tech, Blood Magic ↔ Tinkers, Mekanism ↔ AE2

## Testprotokoll

| Datum | Bereich | Änderung | Ergebnis | Fehler | Fix | Status |
|---|---|---|---|---|---|---|

## Freigaberegel

Eine Änderung gilt erst als 🟢, wenn:
1. Rezept/Mechanik technisch funktioniert,
2. JEI korrekt ist,
3. keine offensichtlichen Exploits entstehen,
4. die Progression sinnvoll bleibt,
5. die bestehende Welt nicht ungewollt beschädigt wird (Retrogen-Test an einer Weltkopie).
