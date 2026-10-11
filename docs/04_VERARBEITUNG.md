# 04 — VERARBEITUNG

> ⚠️ **Stand 1.18.2, noch nicht auf 1.20.1 geprüft.** Seit 2026-10-11 gilt Minecraft 1.20.1 mit geänderter Mod-Liste (`16_MODLISTE_1.20.1.md`). Dieses Dokument wird beim Neustart der Analyse überarbeitet; Einstieg und TODO-Liste: `00_STATUS.md`.

## Zweck

Zentrale Balance aller Erz- und Materialverarbeitungswege.

## Leitprinzip

Mekanism soll starke Verarbeitung anbieten, aber nicht automatisch die optimale Lösung für jedes Material sein.

## Zu untersuchende Verarbeitungssysteme

### Vanilla
- Furnace
- Blast Furnace
- Crafting
- weitere relevante Vanilla-Wege

### Immersive Engineering
- Crusher
- Arc Furnace
- Metal Press
- Coke Oven
- Blast Furnace
- Refinery
- weitere relevante Maschinen

### Mekanism
- Enrichment
- Purification
- Chemical Dissolution
- Washing
- Crystallization
- weitere relevante Stufen

### Tinkers
- Melting
- Casting
- Alloying
- Smeltery
- weitere relevante Systeme

### Botania / Blood Magic
- relevante Umwandlungen und Materialsysteme

## Designregel

🟢 Keine pauschale globale 5x-Verarbeitung.

⚠️ Mekanism bringt für seine eigenen Metallketten (Copper, Gold, Iron, Lead, Osmium, Tin, Uranium) bereits 2x–5x mit (Enrichment → Purification → Injection → Crystallization). „Keine More-Mekanism-Processing-Erweiterung“ verhindert nur die Ausweitung auf weitere Metalle. Die Ertragsfrage für die vorhandenen Ketten bleibt offen.

Erträge werden pro Ressource und Verarbeitungspfad festgelegt.

## Master-Processing-Tabelle

| Input | Methode | Maschine | Output | Menge | Nebenprodukt | Energie | Flüssigkeit/Gas | Progression | Status |
|---|---|---|---|---:|---|---:|---|---|---|
| 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 |

## Zu balancieren

- Erz → Ingot
- Erz → Dust
- Erz → mehrere Metalle
- Nuggets/Ingots
- Legierungen
- Recycling
- Byproducts
- Fortune
- Silk Touch
- Maschinenketten
- Energieverbrauch
- Zeitaufwand
- Flüssigkeits-/Gasverbrauch

## Grundsatz

Jede zusätzliche Verarbeitungstufe muss einen nachvollziehbaren Vorteil besitzen. Sie darf nicht nur existieren, um Rezepte künstlich zu verlängern.

# Ergänzung — Tag-/Rezept-Reconciliation Phase 2

Die Ressourcen-Reconciliation zeigt, dass das Modpack bereits eine brauchbare gemeinsame Materialschnittstelle über Forge-Tags besitzt.

## Verifizierte Grundregel

**Materialfamilien werden auf Tag-Ebene vereinheitlicht; konkrete Registry-Items bleiben erhalten, solange kein technischer oder spielerischer Grund für eine Entfernung besteht.**

Beispiele:
- `forge:ingots/steel` verbindet IE Steel, Mekanism Steel und Tinkers-Materialverarbeitung.
- `forge:ingots/lead` verbindet IE und Mekanism Lead.
- Tinkers verwendet diese Tags als Eingabe und kann deshalb mit beiden Item-Repräsentationen arbeiten.

## Konsequenz für das Balancing

Wir müssen nicht jedes Mod-Rezept neu schreiben. Stattdessen werden bevorzugt:

1. die erlaubten Tag-Mitglieder festgelegt,
2. Produktionsrezepte auf gewünschte Erträge geprüft,
3. alternative Verarbeitungspfade mit Energie-/Zeitkosten versehen,
4. erst danach einzelne Rezepte per KubeJS ersetzt oder entfernt.

Besonders relevant sind Steel und Bronze, weil hier mehrere Produktionssysteme gleichzeitig existieren.

## Phase 2b — Sekundäre Verarbeitung

- AE2: Certus Quartz -> Certus Dust -> Silicon -> Printed Silicon.
- AE2: Fluix bleibt eigenständige Kristallfamilie; Applied Botanics nutzt Fluix für Mana/AE2-Brücken.
- MythicBotany: Dragonstone Ore -> Botania Dragonstone; Elementium + Dragonstone + Pixie Dust + 2M Mana -> Alfsteel.
- Blood Magic: Demonite Ore -> Hellforged; Blood-Smeltery ergänzt Smeltery-Casting und Life-Essence-Alloying.
- Tinkers: Manyullyn, Pig Iron, Rose Gold, Amethyst Bronze, Hepatizon, Slimesteel, Soulsteel und Queen's Slime bleiben eigene Material-/Molten-Familien.
- Twilight Forest: Ironwood besitzt einen eigenen Rohstoffpfad aus Liveroot + Raw Iron + Gold-Nuggets; Steeleaf/Knightmetal bleiben dimensionseigene Materialien, können aber über Tinkers integriert werden.

Grundsatz: Forge-Tags werden als Rezept-Schnittstelle verwendet; kanonische Output-Items bleiben mod-spezifisch.
