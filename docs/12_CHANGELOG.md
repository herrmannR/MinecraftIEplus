# 12 — CHANGELOG

## Zweck

Chronologisches Protokoll aller relevanten Entscheidungen und Änderungen.

## Format

```text
## YYYY-MM-DD — Titel

Status: 🟢 / 🟡 / 🔵

### Änderung
...

### Begründung
...

### Betroffene Bereiche
- ...

### Auswirkungen auf bestehende Welt
...

### KubeJS / technische Umsetzung
...

### Teststatus
...
```

## 2026-10-06 — Dokumentationsgrundstruktur erstellt

Status: 🟢

### Änderung

Die zentrale Projektdokumentation für das Minecraft-1.18.2-Modpack wurde angelegt.

### Enthalten

- Status-/Dashboard
- Modbasis
- Progression
- Ressourcen
- Erzgeneration
- Verarbeitung
- Energie/Flüssigkeiten
- Magie
- Cross-Mod-Integration
- AE2/Automation
- Endgame
- KubeJS
- Testing
- Changelog

### Bekannte bestehende Welt

- Botania Rune Altar
- IE Steel
- IE Biodiesel Generator
- Beginn der Ölgewinnung
- Tinkers Construct begonnen
- AE2 noch nicht begonnen

### Nächster Schritt

Vollständige und verifizierte Ressourcen-/Materialinventur.

## 2026-10-06 — Ressourceninventur Phase 1

Status: 🟢

### Änderung

Die hochgelieferten Mod-JARs aus `mods_v3.zip` wurden erstmals direkt auf ressourcenrelevante Registry-/Asset-/Rezeptdaten untersucht.

### Ergebnis

Dokumentiert wurden insbesondere:

- IE Ressourcen und Flüssigkeiten
- Immersive Petroleum
- Mekanism / Mekanism Generators
- Tinkers Construct
- Botania
- MythicBotany
- Blood Magic
- Blood-Smeltery
- AE2
- Applied Mekanistics
- Applied Botanics
- Farmer's Delight / Nethers Delight
- Twilight Forest
- weitere relevante Content-Mods

### Wichtiger Befund

Mehrere gemeinsame Materialfamilien existieren in mehreren Mods. Eine bloße Namensgleichheit wird deshalb nicht als Identität angenommen.

### Nächster Schritt

Tag- und Rezept-Reconciliation der gemeinsamen Materialfamilien.

## 2026-10-07 — Tag-/Rezept-Reconciliation Phase 2

Status: 🟢 technische Analyse / 🟡 Balancing noch offen

### Änderung

Die wichtigsten gemeinsamen Metallfamilien wurden anhand der tatsächlich enthaltenen Forge-Tags und Rezeptdefinitionen aus `mods_v3.zip` abgeglichen.

### Ergebnis

- Forge-Tags sind die zentrale Integrationsschnittstelle.
- Lead, Uranium und Steel besitzen mehrere konkrete Item-Repräsentationen, können aber über gemeinsame Tags zusammenarbeiten.
- Tinkers Construct greift bei zentralen Materialien überwiegend tag-basiert zu.
- Steel wird als gemeinsame Materialfamilie behandelt, IE bleibt jedoch die geplante primäre Produktionsquelle.
- Bronze besitzt mehrere parallele Produktionssysteme und wird deshalb als wichtiger Test-/Balancingpunkt markiert.
- Constantan/Electrum/Aluminum/Nickel/Silver bleiben IE-dominiert.
- Tin/Osmium bleiben Mekanism-dominiert.

### Bewusst noch nicht geändert

- keine Items entfernt,
- keine globalen KubeJS-Rezepte ersetzt,
- keine Worldgen geändert,
- keine Yield-/Energiewerte finalisiert.

### Nächster Schritt

Reconciliation der sekundären Ressourcenfamilien und anschließend Aufbau der finalen Ressourcenmatrix.

## 2026-10-07 — Phase 2b: Sekundäre Ressourcenfamilien

- Certus Quartz, Fluix und Silicon reconciled.
- Manasteel, Elementium, Terrasteel und Dragonstone reconciled.
- Alfsteel als MythicBotany-High-End-Material dokumentiert.
- Demonite/Hellforged und Blood-Smeltery-Schnittstelle dokumentiert.
- Tinkers-Sondermetalle als eigenständige Materialfamilien bestätigt.
- Twilight-Forest-Materialien Ironwood, Steeleaf, Knightmetal und Fiery eingeordnet.
- Grundsatz festgehalten: Tags als Integrationsschnittstelle, mod-spezifische Outputs erhalten.

## 2026-10-07 — Phase 3: Ore-/Worldgen-Reconciliation

- Twilight-Forest-Erz-Worldgen direkt aus der JAR geprüft.
- Vanilla-Erzverteilung in Twilight Forest dokumentiert.
- Dimensionsgebundene Tinkers-, AE2- und Blood-Magic-Ressourcen abgegrenzt.
- Konzept für seltene Industrieerze in Twilight Forest aufgenommen.
- Keine bestehende Worldgen-Verteilung im Hauptspiel geändert.

## 2026-10-07 — Progression überarbeitet / früher AE2-Storage-Layer

- 🟢 Progression explizit als parallele Pfade strukturiert.
- 🟢 Tinkers, IE, Botania, Blood Magic, Mekanism, AE2 und Exploration als eigenständige Pfade definiert.
- 🟢 Kreuzungspunkte statt einer starren linearen Mod-Leiter festgelegt.
- 🟢 AE2 in zwei Progressionsstufen aufgeteilt: früher Storage-Layer und später vollständige ME-Automation.
- 🟡 Frühe AE2-Anbindung von normalen Truhen und Storage Drawers als Ziel festgelegt.
- 🔵 Exakte Rezepte/Kosten des frühen AE2-Layers bleiben bis zur abgeschlossenen Ressourcenmatrix offen.


## 2026-10-07 — Phase 3 finalisiert

- Erz-/Worldgen-Matrix als verbindliche Progressionsentscheidung festgehalten.
- Overworld als Basisressourcenraum bestätigt.
- Twilight Forest als **Industrial Frontier** für Aluminium, Nickel, Silver und Lead festgelegt.
- Cobalt als starke/exklusive Nether-Ressource für Tinkers festgelegt.
- Tin und Osmium als Mekanism-identitätsgebundene Ressourcen bestätigt.
- Certus Quartz im Overworld bestätigt; Fluix bleibt AE2-Verarbeitung.
- Botania/MythicBotany und Blood Magic werden nicht durch gewöhnliche Erzverteilung trivialisiert.
- Migrationsregel für die bestehende Welt festgehalten.
- Genaue Y-Level, Vein Sizes und Spawn-Chancen bewusst für die spätere technische Ausarbeitung offen gelassen.

## 2026-10-07 — Verifikation gegen die echte Instanz, Doku-Überarbeitung, neuer Plan

Status: 🟢

### Änderung

Die gesamte bisherige Analyse wurde gegen die ATLauncher-Instanz geprüft (JARs, Configs, Logs, Welt-Ordner). Danach wurde die Doku korrigiert und neu strukturiert.

### Korrekturen

- IE besitzt **kein** Kupfererz (`immersiveengineering:ore_copper` existiert nicht).
- IE-/Mekanism-Spawnwerte müssen nicht gemessen werden, sie stehen in den Configs (IE pro Welt in `serverconfig/`, Mekanism in `config/Mekanism/world.toml`).
- Retrogen ist bei IE und Mekanism möglich. Die Regel „nur neue Chunks“ war zu streng.
- Demonite (Demon Dungeon) und die MythicBotany-Erze (Alfheim) haben eigene Dimensionen.
- Osmium war fälschlich ohne Vorkommen eingetragen. Osmium soll in der Welt vorkommen, die Verteilung ist offen (Optionen in 03).
- Die Erzmatrix in 03 ist ein **Soll**. Der Ist-Zustand (Default-Werte) ist jetzt separat dokumentiert.
- Carry On und MouseTweaks wurden in 00_MODBASIS ergänzt.
- AE2-Rolle vereinheitlicht: Endgame + früher Storage-Layer.

### Neue Befunde

- Lead und Uranium werden doppelt generiert (IE + Mekanism).
- Inscriber-Pressen gibt es nur in Meteoriten. Das ist ein natürliches Gate schon für den frühen AE2-Layer.
- Mekanism bringt für seine eigenen Metalle bereits 2x–5x Ertrag mit.
- MythicBotany: `replaceGaiaRecipe = true`, `lockAlfheim = true`.
- ExtraBotany ist wegen Startabsturz deaktiviert.
- Der KubeJS-Tag-Dump ist veraltet. KubeJS enthält nur Beispielskripte.

### Organisation

- Doku-Ordner nach `docs/` umbenannt, Projekt unter Git.
- Neuer Arbeitsplan (Phasen 0–8) in `00_STATUS.md`.
- `02_RESSOURCEN.md` gestrafft (veraltete Upload-Bitte, leere Vorlagen und doppelte Worldgen-Abschnitte entfernt).
- `08_AE2_AUTOMATION.md` neu geschrieben.
- Testinstanz `TestIEInstance` eingerichtet. Ihr Protokoll steht in `13_TESTINSTANZ_CHANGELOG.md`.

### Auswirkungen auf bestehende Welt

Keine. Es wurde nichts an Instanzen oder Welten geändert.

### Umgebung

- Hauptwelt liegt beim Mitspieler (Host, LAN).
- `saves/WasIchBauenWill` ist nur eine Testwelt.

## 2026-10-07 — Worldgen-Entscheidungen + Erz×Mod-Matrix

Status: 🟢

- Osmium/Zinn: **Option B**. Osmium in der Overworld selten, im Twilight Forest häufig; Zinn nur noch im Twilight Forest.
- **Blei** nur noch aus IE-Erz (Mekanism-Bleierz wird abgeschaltet). **Uran** nur noch aus Mekanism-Erz (IE-Uranerz wird abgeschaltet). Ob die Uran-Menge erhöht wird, ist offen.
- **Retrogen** ist zwingend, weil die Hauptwelt seit der Mekanism-Installation schon weit erkundet ist.
- Neue Übersicht `14_ERZ_MOD_MATRIX.md`: Erze × Mods mit Ist/Soll, Wertung und Rezeptzählung aus den JARs.
- Noch nichts an Instanzen geändert.

## 2026-10-07 — Kandidaten-Mods in der Testinstanz

Status: 🔵

- In der Testinstanz installiert: GraveStone (+ Curios Compat), Polymorph, ProbeJS. Neue Modliste: `mods_v4.txt`.
- ProbeJS ist nur ein Entwicklungswerkzeug und wird nicht an die Mitspieler ausgeliefert.
- Die Hauptinstanz bleibt unverändert (`mods_v3.txt`).
- Diskutiert: Beyond Earth als mögliche Erweiterung. Noch nicht entschieden.

## 2026-10-07 — Worldgen präzisiert, erste Testkonfiguration

Status: 🟡 (Test ausstehend)

- Im Twilight Forest kommen nur **Zinn (exklusiv), Blei und Aluminium** dazu, umgesetzt per KubeJS `worldgen.add` mit Biome-Regex. Osmium, Silber, Nickel, Uran und Fluorit bekommen keine TF-Quelle.
- Uran: Mekanism-Menge ×1,3 (einzige Quelle). Kobalt bleibt Standard.
- Die Hauptwelt wurde **noch nie mit Mekanism geöffnet**. Mekanism-Retrogen ist damit nötig, und die Configs müssen vor dem ersten Öffnen beim Host liegen.
- Verifiziert an KubeJS 1802.5.5:
  - Skripte werden rekursiv geladen.
  - `worldgen.add`/`worldgen.remove` existieren; Biome-Filter per ID, Regex (`/…/`) oder Kategorie (`^…`).
  - **KubeJS-Erze haben kein Retrogen.**
- Configs liegen in `config-overrides/`, Originale in `config-overrides/_original/`; Skripte in `kubejs/`. In die Testinstanz eingespielt (siehe `13_TESTINSTANZ_CHANGELOG.md`).
