# 11 — TESTING

## Zweck

Kontrollierte Validierung des Modpacks ohne die bestehende Hauptwelt zu gefährden.

## Testwelten

### Hauptwelt

🔴 Nicht als Experimentierumgebung verwenden.

Nur validierte Änderungen übernehmen.

### Testwelt

🟢 Separate Creative-/Testwelt.

## Testbereiche

### Rezepte
- Inputs
- Outputs
- Tags
- JEI-Anzeige
- Rezeptentfernung
- KubeJS-Reload

### Maschinen
- Multiblocks
- Energie
- Flüssigkeiten
- Gase
- Processing
- Nebenprodukte

### Worldgen
- neue Chunks
- Erzverteilung
- Dimensionen
- bestehende Chunks unangetastet

### Progression
- Gates
- Zugänglichkeit
- bestehender Weltstand
- Umgehungsmöglichkeiten

### Cross-Mod
- IE ↔ Mekanism
- Botania ↔ Tech
- Blood Magic ↔ Tinkers
- Mekanism ↔ AE2
- weitere definierte Integrationen

## Testprotokoll

| Datum | Bereich | Änderung | Ergebnis | Fehler | Fix | Status |
|---|---|---|---|---|---|---|
| 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 |

## Freigaberegel

Eine Änderung gilt erst als 🟢, wenn:
1. Rezept/Mechanik technisch funktioniert,
2. JEI korrekt ist,
3. keine offensichtlichen Exploits entstehen,
4. Progression sinnvoll bleibt,
5. bestehende Welt nicht ungewollt beschädigt wird.
