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

## 2026-10-07 — Raumfahrt als Hauptziel

Status: 🟢 (Entscheidung) / 🔵 (Umsetzung)

- Raumfahrt wird Hauptziel des Packs: **Beyond Earth**, **Star Wars Planets** und **Beyond Earth: Giselle Addon** werden aufgenommen. Noch nicht installiert.
- Regel: Energie und Treibstoff für die Raumfahrt kommen ausschließlich aus anderen Mods (IE, Immersive Petroleum, Mekanism). Eigene Produktion von Beyond Earth wird deaktiviert oder ersetzt.
- Neue Datei `15_RAUMFAHRT.md`. Neuer Pfad H in `01_PROGRESSION.md`. Angepasst wurden außerdem `00_STATUS.md`, `00_MODBASIS.md`, `05_ENERGIE_FLUESSIGKEITEN.md` und `09_ENDGAME.md`.

### Auswirkungen auf bestehende Welt
Planeten sind neue Dimensionen. Ob die Mods in der Overworld etwas generieren, ist noch zu prüfen.

## 2026-10-07 — Raumfahrt präzisiert, Mond als Osmium-/Certus-Quelle

Status: 🟢

- Ad Astra gibt es nicht für 1.18.2 Forge. Star Wars Planets ist gesetzt, deshalb Beyond Earth.
- Sauerstoff aus Mekanism, falls technisch sinnvoll machbar.
- Der erste Raumflug zum Mond setzt Petroleum und eine erste Mekanism-Maschine voraus.
- **Osmium und Certus:** in der Overworld reduziert, auf dem Mond häufig (`03_ERZGENERATION.md`, `14_ERZ_MOD_MATRIX.md`).
- Treibstoff-Tiers: IE bleibt nötig, Mekanism ist Pflicht. Star-Wars-Planeten brauchen Magie und Uran-Erzeugnisse.
- Planeten-Metalle bekommen Mekanisms Mehrfach-Erzverarbeitung, sofern das ins Balancing passt.

## 2026-10-07 — Finale Kandidaten-Modliste, Log-Prüfung

Status: 🟢 (Start) / 🔵 (offene Punkte)

- Die Testinstanz läuft mit 81 JARs (`mods_v4.txt`). Versionsfallen sind in `00_MODBASIS.md` dokumentiert.
- Erze und Strukturen von Beyond Earth und Star Wars Planets stehen in `15_RAUMFAHRT.md`. Korrektur: Desh kommt vom **Mond**, Ostrum vom **Mars** und Calorite von der **Venus**.
- Neu entdeckt: Beyond Earth generiert in der Overworld Meteoriten und Ölquellen. Ob die Ölquellen bleiben, ist offen.
- Die Imperiums-Truhen von Star Wars Planets sind leer, weil ihre Loot-Tabelle kaputt ist.

## 2026-10-07 — Beyond-Earth-Ölquellen aus, Meteoriten bleiben

Status: 🟢 (Entscheidung) / 🔵 (Test)

- Die Oil Wells von Beyond Earth werden per KubeJS-Datapack abgeschaltet (`kubejs/data/…/oil_well_biomes.json`). Meteoriten bleiben.
- Auswirkung auf die Hauptwelt: Die Datei muss beim Host liegen, **bevor** die Welt zum ersten Mal mit Beyond Earth geöffnet wird. Sonst entstehen in den dann neu generierten Ozean- und Sumpf-Chunks Ölquellen.

## 2026-10-07 — Osmium/Certus-Testwerte, Mond-Erz-Skript

Status: 🟡 (Testwerte)

- Overworld: Osmium etwa auf ein Drittel bis die Hälfte reduziert, Certus auf etwa ein Drittel (Werte in `03_ERZGENERATION.md`).
- Mond: Osmium und Certus per KubeJS (`moon_ores.js`).
- Getestet: Die Ölquellen von Beyond Earth sind aus, die Meteoriten bleiben.

## 2026-10-08 — GraveStone fürs Hauptpack beschlossen

- 🟢 GraveStone und GraveStone Curios Compat kommen ins Hauptpack (bei allen Spielern installieren).
- Polymorph bleibt draußen (Absturz mit JEI 9.7.1, siehe `00_MODBASIS.md`).
- 🟢 FTB Quests mit FTB Library, FTB Teams und Item Filters kommt ins Hauptpack (bei allen Spielern installieren).

## 2026-10-08 — Worldgen-Korrektur: Mekanism-Zinn/-Blei, Mekanism-Erze im TF

Status: 🟡 (Test ausstehend)

- **Fehler gefunden:** Die bisherige Mekanism-Config hatte Zinn und Blei gar nicht abgeschaltet. Zinn wäre also weiter in der Overworld entstanden. Jetzt ist es korrigiert (`shouldGenerate = false`).
- **Mekanism-Erze im Twilight Forest:** Osmium, Uran, Fluorit und Salz werden per KubeJS aus den TF-Biomen entfernt, wie beschlossen: Im TF gibt es nur Zinn, Blei und Aluminium.
- Mond-Test bestanden: Osmium, Certus und Desh vorhanden, Mengen ausreichend.
- 🔵 Zu prüfen: ob das Mekanism-Retrogen die KubeJS-Entfernung im TF respektiert.

## 2026-10-08 — Blei kommt aus dem Mekanism-Erz statt aus dem IE-Erz

Status: 🟢 (Entscheidung) / 🔵 (Test)

- Wunsch des Nutzers: Die Textur des Mekanism-Bleierzes ist schöner.
- Overworld: Mekanism-Blei mit 4 Adern × 9 (reduziert, Original 8). IE-Blei ist aus.
- Twilight Forest: Das KubeJS-Erz setzt jetzt Mekanism-Blei. Mekanisms eigenes Blei-Feature wird im TF entfernt, damit wir die Menge allein steuern.
- Auswirkung auf die Hauptwelt: Bereits generiertes IE-Bleierz bleibt und funktioniert weiter, weil beide Erze über Tags verarbeitet werden. **Das Mekanism-Retrogen erzeugt in bereits erkundeten Chunks zusätzlich Mekanism-Blei.** Dort gibt es dann etwas mehr Blei als in neuen Chunks.

## 2026-10-08 — Bauxit im TF erhöht, KubeJS-Namensregel

Status: 🟢

- Twilight Forest: Bauxit von 14 auf 18 Adern (× 8), weil es im Test zu selten war.
- Neue Regel in `10_KUBEJS.md`: Globale Namen müssen über alle Skripte eindeutig sein. Ein doppeltes `const` hat in der Testinstanz einen Absturz verursacht.

## 2026-10-08 — TF ohne Certus, weniger Zinn

Status: 🟢 (Entscheidung) / 🔵 (Test)

- Im Twilight Forest gibt es kein Certus mehr (Wunsch des Nutzers). AE2 setzt es sonst in alle Biome mit normaler Kategorie.
- Zinn im TF: 11 statt 14 Adern.
- Das Skript heißt jetzt `tf_remove_foreign_ores.js`.

## 2026-10-08 — Phase 1 (Worldgen) in der Testinstanz abgeschlossen

Status: 🟢

Alle Worldgen-Ziele sind im Spiel bestätigt (Details in `13_TESTINSTANZ_CHANGELOG.md`). Offen für Phase 8: die Übernahme beim Host (Configs, `defaultconfigs` bzw. Welt-`serverconfig`, KubeJS), das Retrogen-Verhalten in der Hauptwelt und das Entfernen des Debug-Skripts.

## 2026-10-11 — Sauerstoff zwingend aus Mekanism

Status: 🟢 (Entscheidung) / 🔵 (Test)

- Oxygen Loader und Oxygen Bubble Distributor erzeugen Sauerstoff nicht mehr aus Wasser, sondern nur noch aus flüssigem Mekanism-Sauerstoff (Electrolytic Separator → Rotary Condensentrator).
- Umsetzung: `kubejs/server_scripts/crossmod/space_oxygen.js`. Mengen vorläufig.
- `15_RAUMFAHRT.md` enthält jetzt außerdem den aus den JARs verifizierten Progressionsweg der Raumfahrt-Mods.

### Auswirkungen auf bestehende Welt
Keine. Raumfahrt ist in der Hauptwelt noch nicht begonnen. Das Skript ist ein Server-Skript und muss beim Host liegen.

## 2026-10-11 — Star-Wars-Mods für den 1.20.1-Kandidaten

Status: 🟢 (Entscheidung) / 🔵 (Test)

- Neu im 1.20.1-Kandidaten: **Star Wars: Galaxy in a Cube** 1.0.3.1 (Lichtschwerter, Macht, Klone, Droiden, Fahrzeuge).
- Star Wars Planets bleibt für Planeten, Strukturen, Kyber und Beskar. Seine Lichtschwerter werden per KubeJS entfernt, damit nichts doppelt ist (Skript noch nicht angelegt).
- Verworfen: Star Wars Expansion (zweites Reisesystem, doppelte Planeten), Star Wars Clone Wars (Rupyber) und Star Wars The Clone Wars (MelonHaver), beide von Galaxy in a Cube abgedeckt.
- Details und offene Tests: `17_STAR_WARS_1.20.1.md`; Recherche in `recherche/star-wars-clone-wars-mods-1.20.1.md`.

### Auswirkungen auf bestehende Welt
Keine, solange der Wechsel auf 1.20.1 nicht beschlossen ist. 🔵 Offen: ob Galaxy in a Cube in der Overworld Erze, Strukturen oder Mobs erzeugt.

## 2026-10-11 — Wechsel auf Minecraft 1.20.1 beschlossen

Status: 🟢 (Entscheidung) / 🔵 (Umsetzung)

### Änderung
- Das Pack wechselt von 1.18.2 auf **Minecraft 1.20.1, Forge 47.4.26**. Die bestehende Welt wird mitgenommen.
- Raumfahrt: **Ad Astra** + Ad Astra: Giselle Addon + Star Wars Planets (Ad-Astra-Version) ersetzen Beyond Earth und dessen Addons.
- **Twilight Forest entfällt**, Ersatz ist **Blue Skies** (Story-Dimension, künftige Hauptquelle der Mekanism-Erze).
- **Waystones entfällt** (samt Balm). **Light Overlay** und **LazyDFU** entfallen.
- **Wesley's Roguelike Dungeons bleibt** als Spaß-Dungeon-Welt.
- Neu fest im Pack: Alex's Mobs, Alex's Delight, Citadel, Engineers Delight, iaie, Meka Jade Upgrade, KubeJS Additions.
- 🔵 Entwurf: Zugang zum Blood-Magic-Dungeon nur auf einem Ad-Astra-Planeten (Venus oder Merkur), dort ein Pflicht-Item für die T4-Rakete.

### Begründung
- Ad Astra wird gepflegt, hat Treibstoff-Tags je Raketenstufe und datengetriebene Planeten; Beyond Earth 1.18.2 ist eingestellt.
- Twilight Forest 4.3.2508 stürzt beim Start im Intel-Grafiktreiber ab (Iris Xe, Treiber 32.0.101.7088). Ein Treiberwechsel ist nicht gewünscht.
- Der Welt-Test mit einer Kopie der Hauptwelt war erfolgreich bis auf die IE-/IP-Multiblöcke (siehe unten).

### Betroffene Bereiche
Alle. Die Dokumente 00–15 beschreiben noch den Stand 1.18.2 und werden schrittweise angepasst. Mod-Liste und Testergebnisse: `16_MODLISTE_1.20.1.md`.

### Auswirkungen auf bestehende Welt
- Twilight-Forest-Dimension, Waystones und Chisels-&-Bits-Blöcke (Mod des Hosts) gehen verloren.
- **Alle gebauten IE-/IP-Multiblöcke verlieren Funktion und Inhalt.** Vor dem Wechsel in 1.18.2 leeren und zerlegen, danach neu formen.
- `serverconfig/immersivepetroleum-server.toml` vor dem ersten Start aus dem Weltordner entfernen (sonst Absturz).
- Zurück auf 1.18.2 geht nach dem Öffnen nicht mehr; vollständiges Backup beim Host nötig.

### KubeJS / technische Umsetzung
- Hinfällig: `space_oxygen.js`, `moon_ores.js`, der Ölquellen-Tag (alle Beyond Earth) sowie `tf_industrial_ores.js` und `tf_remove_foreign_ores.js` (Twilight Forest).
- Neu zu schreiben in KubeJS-2001-Syntax: Erze für Blue Skies (Freigabe über `allowed_mods_for_feature_gen`), Sauerstoff- und Treibstoffregeln für Ad Astra.
- `Mekanism/world.toml` und die IE-Serverconfig gegen die 1.20.1-Versionen neu abgleichen.

### Teststatus
Testinstanz `Minecraft1201withForge` startet und lädt die Welt-Kopie. 🔵 Offen: Ad Astra samt Addons, Ölförderung nach Neuaufbau der Pumpe, Mekanism-Erze in Blue Skies.

## 2026-10-11 — Doku abgeschlossen, Analyse startet neu

Status: 🟢

- Nachträge zur Mod-Liste: Bonsai Trees 3, Traveler's Backpack und Balm entfallen; Chisels & Bits, Embeddium, Easy NPC (für Story-Figuren, Phase 7b), Ad Astra: More Structures und Mekanism: Ad Astra Ores kommen dazu. Ad Astra: Rocketed ist installiert, die Entscheidung ist offen.
- Mekanism: Ad Astra Ores bleibt nur wegen der Erzblöcke; seine Generierung ist per Tag-Override abgeschaltet. Die Ad-Astra-Ölquellen sind ebenfalls per Override abgeschaltet (nur im Projektordner).
- `15_RAUMFAHRT.md` ist für Ad Astra neu geschrieben (aus den JARs gelesen).
- 🟢 Entscheidung des Users: Nach Versionswechsel und Mod-Änderungen beginnt die gesamte Analyse von vorne. Skripte für 1.20.1 wurden bewusst noch nicht geschrieben. Die Dokumente 00–14 tragen einen Warnhinweis „Stand 1.18.2“; Einstieg und TODO-Liste stehen in `00_STATUS.md`.

### Teststatus
Die Testinstanz startet mit 102 Mods und lädt eine Welt (Log 23:07 Uhr). Keiner der drei Tag-Overrides ist im Spiel geprüft.

## 2026-10-12 — Neustart der Analyse: Block A (Grundlagen) für 1.20.1 abgeschlossen

Status: 🟢

### Änderung

- `00_MODBASIS.md` neu geschrieben: verbindliche Mod-Liste für 1.20.1 (98 JARs, Rohliste `mods_v5.txt`), zusammengeführt mit der Liste aus `16_MODLISTE_1.20.1.md`.
- `16_MODLISTE_1.20.1.md` auf die Befunde reduziert (Blue Skies, Welt-Test); die zwei Welt-Test-Abschnitte sind zusammengeführt.
- `02_RESSOURCEN.md` und `14_ERZ_MOD_MATRIX.md` neu aus den JARs der Testinstanz aufgenommen (Ist-Zustand, Soll offen).
- `00_STATUS.md` vollständig auf 1.20.1 gebracht.

### Neue Befunde aus den JARs

- **AE2 15.4.11 hat kein Certus-Erz mehr.** Certus entsteht nur an Budding-Blöcken in Meteoriten. Der Beschluss „Mond = Hauptquelle für Certus“ ist so nicht mehr umsetzbar.
- **Galaxy in a Cube erzeugt in der Overworld** Kyber-Kristalle (alle Biome, jeder 16. Chunk), Ewok-Dörfer (Wald) und Jawas (Wüste, Badlands).
- **Nebenquellen an der Worldgen vorbei:** IE-Excavator-Ader Cassiterite liefert 100 % Zinn; Blood-Magic-Meteore liefern Osmium, Zinn, Uran, Fluorit und Budding-Certus.
- Die Config-Formate von IE (`[ores.*]`) und Mekanism (`world.toml`) sind gegenüber 1.18.2 unverändert, die Standardwerte auch.
- „Mekanism: Ad Astra Ores“ setzt über `gen_ores_deepslate` zusätzlich die normalen Mekanism-Erze auf Glacio; seine Mengen kommen aus `Mekanism/world.toml`.
- Blue Skies: acht eigene Erze; fremde Erze brauchen die Freigabe **und** einen eigenen Biome Modifier. Mekanism-Erzblöcke in Blue-Skies-Gestein gibt es nicht.
- Stahl hat ein viertes Item (`ad_astra:steel_ingot`); Beskar und Kyber haben keine `forge:`-Barren-Tags.
- `iaie` ist „Immersive Aircraft x Immersive Engineering“: Fluggeräte tanken Biodiesel, Diesel oder Kerosene aus dem IE-Metallfass.
- Die Testinstanz startet mit allen 98 JARs einschließlich Chisels & Bits und Embeddium (Log 2026-10-11, 23:07).

### Betroffene Bereiche

- Erzplanung (Block B), Meilensteine (Block C)

### Auswirkungen auf bestehende Welt

Keine; es wurden nur Dokumente geändert. An der Testinstanz wurde nichts geschrieben.

### KubeJS / technische Umsetzung

Keine Skripte. Ausgewertet wurden `data/*/worldgen`, `data/*/forge/biome_modifier`, `data/*/tags`, `data/*/recipes` aller JARs sowie die Configs der Testinstanz.

### Teststatus

Alles aus JAR und Config gelesen, nichts davon im Spiel getestet.

## 2026-10-12 — Erzverteilung für 1.20.1 beschlossen (Block B)

Status: 🟡 (entschieden; Zahlenwerte ungetestet, Features noch nicht angelegt)

### Änderung

Entscheidungen des Users:

- **Zinn** nur in Blue Skies (Everbright); Overworld aus; Excavator-Ader Cassiterite wird entfernt.
- **Blei:** Overworld sehr selten, Everbright häufig, dazu Merkur und Venus. Nur Mekanism-Erz (IE-Bleierz aus).
- **Aluminium:** Overworld selten, Everbright häufig. Silber und Nickel bleiben IE-Standard.
- **Osmium:** Overworld wenig, Everdawn und Mond viel, dazu Glacio.
- **Uran:** nur Mekanism-Erz (IE-Uranerz aus), Overworld ×1,3; reichlich auf Merkur und Venus, dazu Glacio. **Fluorit** zusätzlich auf dem Mars.
- **Certus:** AE2-Standard, nur Meteoriten (kein Erz mehr in 1.20.1).
- **Kyber-Kristalle** von Galaxy in a Cube werden aus der Overworld entfernt.

### Begründung

Blue Skies übernimmt die Rolle des Twilight Forest als Quelle der Industriemetalle für den Mekanism-Ausbau. Uran auf den T3-Planeten stützt die Regel, dass die Star-Wars-Planeten Uran-Erzeugnisse verlangen. Kyber nur auf den Planeten hält die Lichtschwerter an die Raumfahrt gebunden.

### Betroffene Bereiche

- `03_ERZGENERATION.md` (neu aufgebaut), `14_ERZ_MOD_MATRIX.md` (Soll-Spalte), `02_RESSOURCEN.md`, `15_RAUMFAHRT.md`, `17_STAR_WARS_1.20.1.md`, `00_STATUS.md`
- Erzatlas (`docs/erzatlas/`, Artifact-Seite neu veröffentlicht, Texturen aus den 1.20.1-JARs)

### Auswirkungen auf bestehende Welt

- Mekanism-Retrogen bleibt nötig (Osmium, Uran, Fluorit, Salz, seltenes Blei in erkundeten Overworld-Chunks).
- Vorhandenes IE-Blei- und IE-Uranerz bleibt in alten Chunks stehen.
- Alle Overrides müssen vor dem ersten Start der Hauptwelt in 1.20.1 beim Host liegen.

### KubeJS / technische Umsetzung

- 🟢 Angelegt im Projektordner: `config-overrides/config/Mekanism/world.toml` (Zinn aus; Osmium 20/3/4; Blei 2; Uran 5/9; Retrogen an, Version 1) und `config-overrides/serverconfig/immersiveengineering-server.toml` (Bauxit 5; Blei und Uran `vein_size = 0`), jeweils auf Basis der 1.20.1-Standarddateien (Kopien unter `_original/`).
- Entfernt: `config-overrides/…/appliedenergistics2/common.json` (die Worldgen-Schlüssel gibt es in AE2 15 nicht mehr).
- 🔵 Noch nicht angelegt (Block D): eigene Erz-Features für Everbright, Everdawn und die Planeten; Freigabe in `blue_skies-common.toml`; Override für `swgc:kyber_crystals`; Anpassung der Excavator-Adern.

### Teststatus

Nichts im Spiel getestet. In die Testinstanz wurde nichts kopiert.

## 2026-10-12 — Progression für 1.20.1: erste Entscheidungen und neue Meilensteinkarte (Block C)

Status: 🟡 (teilweise entschieden; Meilensteinkarte ist ein Entwurf)

### Änderung

Entscheidungen des Users:

- **Treibstoff je Raketenstufe:** T1 Biodiesel (IE), T2 entschwefelter Diesel, T3 Kerosin (beide Immersive Petroleum), T4 eigener Raketentreibstoff aus Kerosin plus Mekanism-Chemie.
- **Blood-Magic-Dungeon** nur auf dem **Merkur** zugänglich.
- **Ad Astra:** Kabel, Fluid Pipes und Water Pump werden entfernt (Ersatz: IE, Mekanism). Der Energizer wird entfernt, wenn sich Ad-Astra-Items in der IE Charging Station oder am Mekanism Energy Cube laden lassen.
- **Blue Skies:** Die Abschwächung fremder Werkzeuge wird als gewollte Hürde hingenommen.
- Zurückgestellt: Magie- und Uran-Teile der Rakete T4; Ad Astra: Rocketed; Cryo Fuel.

Die Meilensteinkarte wurde aus dem Entwurf für 1.18.2 übertragen und ergänzt: 23 Meilensteine, 8 Pfade, 9 Stufen. Twilight Forest → Blue Skies (Everbright, Everdawn, Bosse); Beyond Earth → Ad Astra mit vier einzelnen Raketenstufen; neu der Demon Dungeon auf dem Merkur und die Star-Wars-Planeten als eigene Zielstufe.

### Betroffene Bereiche

- `01_PROGRESSION.md` (neu geschrieben), `15_RAUMFAHRT.md`, `16_MODLISTE_1.20.1.md`, `00_STATUS.md`
- `docs/meilensteine/` (Daten, Vorlage, README; Artifact-Seite neu veröffentlicht)

### Neue offene Punkte

- T1 fliegt jetzt mit Biodiesel. Damit ist „erster Raumflug nach Petroleum“ (Entscheidung 2026-10-07) nicht mehr von selbst erfüllt.
- Cable Duct und Fluid Pipe Duct hängen an den Ad-Astra-Kabeln. Wie IE-Leitungen und Mekanism-Kabel in abgedichtete Räume kommen, muss im Spiel geprüft werden.
- Aus dem JAR geprüft: Water Pump, Energizer, Kabel und Pipes sind in keinem anderen Rezept Zutat (außer den zwei Durchführungen).

### Auswirkungen auf bestehende Welt

Keine; die Raumfahrt ist in der Hauptwelt noch nicht begonnen.

### KubeJS / technische Umsetzung

Keine Skripte. Vorgesehen für Block D: Tag-Dateien `ad_astra:tier_N_rocket_fuel` mit `replace: true`, Entfernen der Rezepte der gestrichenen Ad-Astra-Blöcke, neues Fluid für den T4-Treibstoff.

### Teststatus

Nichts im Spiel getestet.

## 2026-10-12 — Erste Fassung der Overrides und Skripte für 1.20.1 (Block D)

Status: 🟡 (im Projektordner angelegt, im Spiel ungetestet, nicht in der Testinstanz)

### Änderung

- Gelöscht: die fünf KubeJS-1802-Skripte und `kubejs/data/beyond_earth/`.
- Neu, Datapack (`kubejs/data/`): zwölf Erz-Features im Namensraum `ieplus` mit sieben Biome Modifiern (Everbright, Everdawn, Mond, Mars, Merkur, Venus, Glacio); Override für `swgc:kyber_crystals` (`forge:none`); Treibstoff-Tags für T1 bis T3; Excavator-Adern Galena und Uraninite mit Gewicht 5.
- Neu, Skripte (KubeJS 2001): `fixes/tag_fixes.js` (`forge:sand`), `raumfahrt/ad_astra_regeln.js` (Rezepte entfernen, Platten über die IE Metal Press), `worldgen/excavator_adern.js` (Cassiterite entfernen).
- Neu, Config: `config-overrides/config/blue_skies-common.toml` mit `allowed_mods_for_feature_gen = ["ieplus"]`.
- `10_KUBEJS.md` für KubeJS 2001 neu geschrieben.

### Begründung

Umsetzung der Entscheidungen vom 2026-10-12 (Erzverteilung, Treibstoffe, Ad-Astra-Maschinen). Nicht umgesetzt ist alles, was der User zurückgestellt hat (T4-Teile, Rocketed, Cryo Fuel) oder was einen Test braucht (Energizer, Ritual auf dem Merkur).

### Befund

Blue Skies entfernt in seinen Biomen alle platzierten Features, deren **Namensraum** nicht freigegeben ist (Klasse `PurifyBiome`, im Bytecode nachgelesen). Die Freigabe des eigenen Namensraums `ieplus` genügt deshalb; `mekanism` oder `immersiveengineering` müssen nicht freigegeben werden.

### Auswirkungen auf bestehende Welt

Keine, solange nichts kopiert ist. Beim Host müssen alle Dateien vor dem ersten Start in 1.20.1 liegen.

### Teststatus

Ungetestet. Die JSON-Formate sind aus den JARs der Testinstanz übernommen (Blue Skies, Mekanism: Ad Astra Ores, IE). Die KubeJS-Aufrufe sind nicht im Spiel geprüft.

## 2026-10-12 — Overrides und Skripte in die 1.20.1-Testinstanz kopiert

Status: 🟡 (kopiert, ungetestet)

### Änderung

Mit Zustimmung des Users in `…\ATLauncher\instances\Minecraft1201withForge` kopiert:

- `kubejs/data/` (41 Dateien) und `kubejs/server_scripts/` (3 Skripte; `example.js` der Instanz bleibt)
- `config/Mekanism/world.toml` und `config/blue_skies-common.toml` (Sicherungen der vorherigen Dateien daneben als `….vor-2026-10-12`)
- `defaultconfigs/immersiveengineering-server.toml` (gilt für neu angelegte Welten)

Vorhandene Welten wurden nicht verändert. `11_TESTING.md` enthält den Testplan (27 Punkte).

### Auswirkungen

Mekanism-Retrogen ist in der Testinstanz eingeschaltet (`enableRegeneration = true`, Version 1). Wer eine vorhandene Testwelt öffnet, löst dort Retrogen aus.

### Teststatus

Nichts getestet; das Spiel wurde nicht gestartet.

## 2026-10-12 — Tinkers in den höheren Stufen, Blood-Smeltery untersucht

Status: 🟢 Entscheidung, 🔵 Rezepte und Werte

### Änderung

- Fünf Wege beschlossen, Tinkers an die späte Progression zu binden: seltene Flüssigkeiten als Zutat (A), Planeten-Metalle aufwerten (C), eigene Materialien (D), Modifier gegen späte Items (E), Gießen als Pflichtschritt (F).
- Regel: Jedes Metall soll sich einschmelzen lassen; Legierungen entstehen bei der zugehörigen Maschine.
- Legierungsrezept für Refined Obsidian aus der Schmelzerei entfernt. Bronze, Konstantan, Elektrum und Invar bleiben.
- Blood-Smeltery bleibt im Pack. Entfernt: Life-Essence-Legierung, Gießen von Blank Slate und Blank Rune (`crossmod/blood_smeltery.js`).
- Fehler von Blood-Smeltery 1.2.1a auf ihre Ursache zurückgeführt (Mod-Bug bei den Hellforged-Flüssigkeiten, fehlendes Thermal). Keine neuere Version vorhanden.

### Begründung

Tinkers endete bisher praktisch bei Manyullyn; Desh, Ostrum und Calorite sind als Werkzeugmaterial nur Stufe 2.

### Betroffene Bereiche

- `07_CROSSMOD_INTEGRATION.md`, `01_PROGRESSION.md`, `00_STATUS.md`, `00_MODBASIS.md`, `10_KUBEJS.md`

### Auswirkungen auf bestehende Welt

Keine; Refined Obsidian wurde in der Hauptwelt noch nicht hergestellt (Mekanism nicht begonnen).

### KubeJS / technische Umsetzung

`kubejs/server_scripts/crossmod/tinkers_legierungen.js` und `crossmod/blood_smeltery.js`. Am 2026-10-12 mit Zustimmung des Users in die Testinstanz kopiert (`kubejs/server_scripts/crossmod/`).

### Teststatus

Ungetestet.

## 2026-10-13 — Testrunde 1 (Tests 1–7) und zwei Korrekturen

Status: 🟡

### Ergebnis

- ✅ Test 1, 2: neue Welt lädt; 6 von 6 Server-Skripten ohne Fehler.
- ✅ Test 4, 5 (User, JEI): Ad-Astra-Rezepte sind entfernt; Platten gibt es über Metal Press und Engineer's Hammer.
- 🟡 Test 3, 6, 7: vom User in JEI noch nicht gefunden; Hinweise, wo nachzusehen ist, stehen in `11_TESTING.md`.
- Die IE-Erzwerte aus `defaultconfigs/` werden von neuen Welten übernommen.

### Korrekturen

- Ad Astra bringt die IE-Rezepte für Desh-, Ostrum- und Calorite-Platten selbst mit. Die doppelten Rezepte aus `ad_astra_regeln.js` sind entfernt; die falsche Angabe in `15_RAUMFAHRT.md` ist berichtigt.
- Jawas (Star Wars Planets) ließen Steel Cable fallen. Neues Loot-Override ersetzt es durch Stahlstäbe (ungetestet).

Beide Änderungen sind auch in die Testinstanz kopiert.

## 2026-10-13 — Worldgen ausgezählt; Uran und Osmium gesenkt; JEI-Ausblendung

Status: 🟡

### Änderung

- Neues Werkzeug `tools/ErzZaehler.java`: zählt Erzblöcke je Dimension direkt aus den Weltdateien.
- Auszählung der Testwelt (Blöcke pro Chunk): Overworld Zinn 0, IE-Blei 0, IE-Uran 0, Kyber-Kristalle 0; Mekanism-Blei 11, Osmium 24, Uran 48. Everbright: Zinn 35, Blei 37, Bauxit 33. Everdawn: Osmium 36. Die Erz-Features und die Blue-Skies-Freigabe (`ieplus`) funktionieren also.
- 🟢 Entscheidung des Users: Uran in der Overworld auf etwa 10 pro Chunk, Osmium auf Diamant-Niveau (etwa 15). `Mekanism/world.toml`: Uran small 5 → 1, buried 9 → 2; Osmium 20/3/4 → 12/2/3. Noch nicht nachgezählt. Die Vorgabe „Uran ×1,3“ entfällt.
- 🟢 Vorgabe des Users: Entfernte Items werden immer auch in JEI ausgeblendet. Neu: `kubejs/client_scripts/jei_ausblenden.js` (zwölf Ad-Astra-Items). Die Photovoltaic Etrium Cell ist jetzt ebenfalls entfernt (ihr einziger Zweck war das Solar Panel).
- Befund: Ad Astra hat für Etrium-Barren, -Platten usw. kein einziges Rezept; 🔵 ausblenden oder eigene Rolle geben.

Alles ist auch in die Testinstanz kopiert; Config und Client-Skript wirken erst nach einem Neustart des Spiels.

## 2026-10-13 — Story begonnen; Ad Astra: Rocketed bleibt

Status: 🟡

### Änderung
- Neues Dokument `18_STORY.md`: Rahmen, Geheimnis, Handlung in zwei Teilen, offene Stellen, Einbindungs-Ideen. Die Story schreibt der User.
- „Ad Astra: Rocketed“ bleibt im Pack: Die Star-Wars-Planeten verlangen mindestens die Raketen T5 und T6; T4 führt nur noch nach Glacio.

### Begründung
Teil 1 der Story endet mit dem Fund des Meisters auf Glacio (T4). Die Star-Wars-Welten bilden Teil 2 und sollen dahinter liegen.

### Betroffene Bereiche
- `18_STORY.md`, `00_STATUS.md`, `00_MODBASIS.md`, `01_PROGRESSION.md`, `15_RAUMFAHRT.md`
- 🔵 Noch nicht angepasst: Stufentabellen in `01_PROGRESSION.md` und `15_RAUMFAHRT.md`, Meilensteinkarte, Rezepte und Treibstoffe für T5 und T6.

### Auswirkungen auf bestehende Welt
Keine.

## 2026-10-14 — Meilensteinkarte nach der Story umgebaut

Status: 🟡

### Änderung
- Karte von 23 auf 28 Meilensteine, von 9 auf 12 Stufen; neue Spalte „Star Wars · Story“; zwei Story-Parts (Part 1 bis Glacio, Part 2 bis zu den Star-Wars-Welten).
- Neu: M24 Droide und erste Quest, M25 Elfenportal und Elf, M26 Rakete T5, M27 Rakete T6, M28 Ausbildung beim Meister.
- Verschoben: Alfheim (M14) und Gaia (M17) nach Part 2; Runenaltar (M3) auf P2; Rakete T4 (M22) auf P9.
- Pflicht geworden (Vorschlag, zu bestätigen): Runenaltar, Everdawn, Blue-Skies-Bosse.
- Platzhalter mit „?“ an allen Linien, bei denen der Mod feststeht, das Item aber nicht. Fragenkatalog mit 34 Punkten auf der Seite.
- Jede Karte hat eine Zeile „Story“ und eingeklappte Spoiler.

### Begründung
Die Story des Users (`18_STORY.md`) legt die Reihenfolge fest: Tempel auf dem Merkur, dann Elfenportal, dann Glacio; Alfheim, Gaia und die Star-Wars-Welten erst danach.

### Betroffene Bereiche
- `meilensteine/` (data.js, template.html, README.md, Artifact-Seite), `01_PROGRESSION.md`, `15_RAUMFAHRT.md`, `00_STATUS.md`, `18_STORY.md`

### Auswirkungen auf bestehende Welt
Keine. Der Weltstand (Stahl, Runenaltar erreicht) passt weiter zur Karte.

## 2026-10-14 — Raketen T5 bis T7 und vier Hürden je Stufe

Status: 🟡

### Änderung
- T5 führt nur nach Endor (Basis des Meisters), T6 nach Tatooine, Hoth und Mustafar, T7 nach Mandalore.
- Regel: Jede Rakete braucht einen Rumpf aus dem Metall des zuletzt erreichten Ortes, einen neuen Treibstoff, eine neue Mekanism-Stufe und ein Teil aus einem anderen Pfad. Ab T5 kommt das Rumpf-Material aus Alfheim.
- T3 braucht ein Teil aus Blood Magic, weil der Tempel den Planeten abschirmt.
- Karte: neuer Meilenstein M29 (Rakete T7), Part 2 auf P10 bis P14 gestreckt.

### Begründung
Entscheidungen des Users. Erzprüfung: Bis T4 liegt jedes Material rechtzeitig vor; Glacio hat kein eigenes Metall, deshalb Alfheim für T5.

### Betroffene Bereiche
- `meilensteine/`, `01_PROGRESSION.md`, `15_RAUMFAHRT.md`, `18_STORY.md`, `00_STATUS.md`
- 🔵 Umsetzung: Stufen der Star-Wars-Planeten per Datapack ändern; Rezepte und flüssige Treibstoffe für T5 bis T7.

### Auswirkungen auf bestehende Welt
Keine.

## 2026-10-14 — Meilensteinkarte feiner aufgeteilt (16 Kapitel)

Status: 🟡

### Änderung
- Je Mod mehrere Stufen nach den Modpfad-Seiten: Tinkers 4, IE/Petroleum 6, Botania 7, Blood Magic 6, Mekanism 9, AE2 3, Blue Skies 4, Raumfahrt 7, Story 4; zusammen 50 Meilensteine.
- 16 Zeilen, jede Zeile ein Kapitel des Questbuchs (Arbeitstitel K1 Ankunft bis K16 Mandalore). Part 1 K1–K11, Part 2 K12–K16.
- Neue IDs mit Pfad-Kürzel (TK, IE, BO, BM, MK, AE, BS, RF, SW) statt M1–M29.
- Mekanism-Leiter als Vorschlag für die vierte Hürde je Rakete: Basic, Advanced, Elite, Ultimate, Fusion, SPS (der User legt fest).
- Mars-Station als eigener Meilenstein (SW2); Blue-Skies-Bosse nach Dimension getrennt (BS3, BS4).
- Neue Zeile „Technik“ auf jeder Karte; Fragenkatalog auf die neuen Kürzel umgestellt.

### Begründung
Wunsch des Users: Progression granularer und gestreckt, damit für die Raketen T5 bis T7 noch neue Bereiche aus den anderen Mods übrig sind; jede Zeile soll ein Kapitel werden, an dem Nebenquests hängen.

### Betroffene Bereiche
- `meilensteine/`, `01_PROGRESSION.md`, `18_STORY.md`, `00_STATUS.md`, Sammelseite
- 🔵 Blood Magic, AE2 und Blue Skies haben noch keine Modpfad-Seite; ihre Stufen sind vorläufig.

### Auswirkungen auf bestehende Welt
Keine. Weltstand: IE bis Schwermaschinen und Biodiesel erreicht, Botania bis Runenaltar erreicht, Tinkers, Petroleum und IE-Großindustrie begonnen.

## 2026-10-14 — Story in drei Teilen

### Änderung
- Story in drei statt zwei Teilen (User): Part 1 bis zur Rückkehr des Meisters in die Overworld (K1–K11), Part 2 Ausbildung und Vorbereitung T5 (K12–K13, endet mit der fertigen Rakete T5), Part 3 die Star-Wars-Welten ab der Ankunft auf Endor (K14–K16).
- Kapitelnamen (Arbeitstitel): K13 heißt jetzt „Die Prüfung“, K14 „Endor“ (vorher „Endor“ und „Hyperraum“); die Ankunft auf Endor steht am Anfang von K14.

### Betroffene Bereiche
- `18_STORY.md`, `01_PROGRESSION.md`, `15_RAUMFAHRT.md`, `00_STATUS.md`, `meilensteine/`, Sammelseite

### Auswirkungen auf bestehende Welt
Keine.

## 2026-10-17 — Tests bestätigt, Planeten-Erze angepasst, Skills zum Entfernen

Status: 🟡

- ✅ Vom User in JEI bestätigt: Refined Obsidian ohne Schmelzerei-Legierung, Life Essence ohne Legierung, Blank Slate und Blank Rune ohne Gussrezept (`crossmod/tinkers_legierungen.js`, `crossmod/blood_smeltery.js`).
- ✅ Vom User bestätigt: Die zwölf entfernten Ad-Astra-Items sind in JEI ausgeblendet; Jawas lassen kein Steel Cable mehr fallen; `/locate` findet keine Ad-Astra-Ölquellen.
- ❌ Overworld-Uran und -Osmium waren in der neuen Welt unverändert (48 und 24 pro Chunk). Ursache: `config/Mekanism/world.toml` war am 2026-10-13 bei laufendem Spiel in die Instanz kopiert worden; das Spiel hat beim Beenden seine alten Werte zurückgeschrieben. Configs nur bei geschlossenem Spiel kopieren.
- 🟢 Entscheidung des User: Mond-Osmium Ziel 36 pro Chunk (Feature `count` 16 → 9), Merkur-Uran 24 (12 → 5), Venus-Uran 40 (12 → 8). Noch nicht nachgezählt.
- Neue Skills `/remove-recipe` (entfernt alle Rezepte eines Items in `kubejs/server_scripts/entfernt/rezepte.js` und blendet es aus) und `/remove-jei` (trägt ein Item in `kubejs/client_scripts/jei_ausblenden.js` ein).

## 2026-10-17 — Erzverteilung im Spiel bestätigt

Status: 🟢

Neue Testwelt mit korrekt kopierter Mekanism-Config und den gesenkten Planetenwerten ausgezählt: Overworld Uran 10,4 und Osmium 16,4 pro Chunk (Ziel 10 bzw. Diamant-Niveau 14,9), Mond-Osmium 37,7 (Ziel 36), Merkur-Uran 24,4 (24), Venus-Uran 39,2 (40). Everbright, Everdawn, Mars und Glacio wie geplant; kein Zinn, kein IE-Blei/-Uran, keine Kyber-Kristalle in der Overworld. Tabelle: `03_ERZGENERATION.md`, Abschnitt „Nachgezählt“. Tests 8 und 11–15 bestanden.

## 2026-10-17 — Ideenimport eingearbeitet

Status: 🟡

### Änderung
- Gesammelte Ideen des Users (von anderen KI zusammengefasst) nach Rückfragen eingearbeitet.
- Story: Ablauf am Tempel auf dem Merkur präzisiert (vier Schriftrollen, Droide erkennt die Gefangenschaft des Meisters, Rückkehr zur Erde zur Vorbereitung, Reparatur des Altars, Meister weg); neuer Strang Blue-Skies-Haus (Easy NPC statt Guard, erst Nebenquest, dann Pflicht für die Reparatur); Nebenquest-Stränge (Wesley's in fünf Stufen, Immersive Aircraft, Erzvervielfachung, Core Sample Drill), alle mit Credits; Macht und Training in Teil 2.
- Entschieden: Star Manual raus; Plastic Plate raus, Plastoid mit HDPE; Kyber von Star Wars Planets durch Galaxy in a Cube ersetzt; Beskar extrem teuer (Ofen offen); Dopplungen von Star Wars Planets raus; mit T5 nur Endor auf der Karte; Digital Miner raus; AE2-Energieerzeuger raus; IE-Crusher übernimmt den Mekanism-Crusher.
- Neue offene Fragen O34–O38, Technik T10–T11, Testrunde 6 (Tests 33–39).

### Betroffene Bereiche
- `18_STORY.md`, `17_STAR_WARS_1.20.1.md`, `01_PROGRESSION.md`, `11_TESTING.md`, `00_STATUS.md`, `meilensteine/data.js`

### Auswirkungen auf bestehende Welt
Keine (noch nichts umgesetzt).

## 2026-10-17 — Absturz beim Laden der frischen Hauptwelt-Kopie

Status: 🟢 behoben (in der Testinstanz)

Die neu kopierte Weltkopie `3_ Versuch von 1,5` brachte wieder ihre `serverconfig/immersivepetroleum-server.toml` aus 1.18.2 mit. Sie nennt `immersivepetroleum:benzene`, das es in 1.20.1 nicht gibt; der integrierte Server stürzte ab (`crash-2026-10-17_09.26.45-server.txt`), das Spiel blieb hängen. Datei in `.1182-alt` umbenannt; zugleich unsere IE-Serverconfig in die Weltkopie gelegt (alte als `.1182-alt`). Gleicher Fehler wie am 2026-10-11; für die Hauptwelt ist das TODO F24.

## 2026-10-17 — Retrogen geprüft, Worldgen abgeschlossen

Status: 🟢

- Mekanism-Retrogen in der Kopie der Hauptwelt: 821 Chunks rund um den Spawn beim ersten Laden in 28 Sekunden nachgeneriert (Log: „Regenerating ores and salt“). Pro Chunk Uran 10,4, Osmium 16,6, Blei 10,4, Fluorit 46, Salz 2,1, kein Zinn. Nicht geladene Chunks folgen, sobald jemand sie betritt.
- 🟢 Entscheidung des Users: Excavator-Ader Laterite und die Blood-Magic-Meteore bleiben unverändert.
- Block B (Worldgen) ist damit abgeschlossen.

## 2026-10-17 — Ölvorkommen nach dem Wechsel geprüft

Status: 🟢

- Test 26 in der Weltkopie `3_ Versuch von 1,5` (User): An der alten Pumpjack-Stelle liegt weiterhin ein Ölreservoir, und der neu gebaute Pumpjack fördert dort. Die Vorkommen von Immersive Petroleum überstehen den Wechsel auf 1.20.1; nur der Pumpjack selbst muss neu gebaut werden.
- Runde 4 in `11_TESTING.md` ist damit abgeschlossen.

## 2026-10-17 — Testrunde 3: Raumfahrt und Blue Skies

Status: 🟢 (Tests 16–24)

### Ergebnisse (User)
- 16: Die Treibstoff-Tags greifen; T1 bis T3 nehmen jeweils nur ihren Treibstoff.
- 17: 3 Eimer pro Start auf jeder Stufe T1 bis T3, 6 für Hin- und Rückflug.
- 18: Flüssiger Mekanism-Sauerstoff klappt.
- 19: Jet Suit und Etrionic Capacitor laden in der IE Charging Station und am Mekanism Energy Cube.
- 20: Mit den richtigen Blöcken bleibt ein Raum dicht; der IE Feedthrough Insulator oder ein Energiespeicher in Wand oder Boden bringt den Strom hinein.
- 21: Glacio braucht keinen Anzug; auf allen anderen Ad-Astra-Planeten reicht jeder Anzug.
- 22: Blue-Skies-Werkzeugabschwächung: mit fremdem Werkzeug dauert es ewig. Bleibt so gewollt (offener Punkt C.11 erledigt).
- 23: Everdawn ist sofort erreichbar, wie Everbright. Osmium in Menge gibt es damit schon vor dem Mond.
- 24: JEI zeigt von Galaxy in a Cube nur die Werkbank-Rezepte. Lichtschwerter, Kristalle, Droiden und bemalte Rüstungen (z. B. 501st) fehlen, weil der Mod kein JEI-Plugin hat. Die 7 Raketen-Rezepte von Ad Astra und Rocketed sind sichtbar; nur die betankte Rakete aus dem Kreativmenü hat keins.

### Änderung
- Energizer entfernt: Rezept in `server_scripts/raumfahrt/ad_astra_regeln.js`, in JEI ausgeblendet. Er ist in keinem anderen Rezept Zutat (geprüft in den JARs von Ad Astra, Giselle und Rocketed). Ungetestet, noch nicht in der Testinstanz.

### Betroffene Bereiche
- `11_TESTING.md`, `15_RAUMFAHRT.md`, `01_PROGRESSION.md`, `03_ERZGENERATION.md`, `00_STATUS.md`, `modpfade/adastra/WISSEN.md`, `modpfade/blue_skies/WISSEN.md`, KubeJS

### Auswirkungen auf bestehende Welt
Keine; die Hauptwelt hat Ad Astra noch nicht.

## 2026-10-17 — Questtexte für Mekanism (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/mekanism.md` (Ordner `questtexte/` mit README, Skill `questtexte` für die übrigen Mods). Beschreibende Questtexte als Ersatz für das fehlende Mekanism-Buch, gegliedert nach MK1 bis MK9 der Meilensteinkarte, dazu die Nebenquest-Reihe Erzvervielfachung (EV-1 bis EV-5). Je Quest Aufgabe (Item-ID, gegen die Sprachdateien geprüft) und Text. Pack-Änderungen markiert.

### Begründung
Mekanism hat kein Buch im Spiel (`19_HILFEBUECHER.md`); das Questbuch muss den Weg Schritt für Schritt führen.

### Betroffene Bereiche
- `00_STATUS.md`

### Teststatus
Multiblock-Bauregeln, Zündenergie der Fusion und Eingang des SPS stammen nicht aus den JAR-Daten (🔵, im Spiel prüfen).

## 2026-10-17 — Questtexte für Immersive Engineering (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/ie.md` mit dem Skill `questtexte`. 35 Quests über IE1 bis IE6 plus sechs Werkzeug-Nebenquests, im kurzen Format für Mods mit Buch: Ziel, Fundstelle im Engineer's Manual (Kapitel → Eintrag), Pack-Abweichungen. Petroleum ist eingeschlossen (Kapitel „Oil Processing“).
- `modpfade/ie/WISSEN.md`: Flüssigkeits-IDs von Petroleum richtiggestellt (Tabelle nennt die Blöcke), billiger Weg zur Gliederung des Handbuchs.

### Betroffene Bereiche
- `questtexte/README.md`, `modpfade/ie/WISSEN.md`, Skill `questtexte`

## 2026-10-17 — Questtexte für Botania (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/botania.md` mit dem Skill `questtexte`. 55 Quests über BO1 bis BO7 plus sieben Nebenquests ohne Meilenstein, im kurzen Format für Mods mit Buch: Ziel, Fundstelle im Lexica Botania (Kategorie → Eintrag), Pack-Abweichungen. MythicBotany ist eingeschlossen (Kategorien „Alfheim“ und „MythicBotany“), dazu die Reihen Corporea und Mimir/Mjöllnir.
- `modpfade/botania/WISSEN.md`: Lexikon-Titel stehen als Sprachschlüssel in der Sprachdatei, Pure Daisy liefert `botania:livingwood_log`, Dimension `mythicbotany:alfheim`.

### Betroffene Bereiche
- `questtexte/README.md`, `modpfade/botania/WISSEN.md`, Skill `questtexte`, `11_TESTING.md` (Tests 40–41), `00_STATUS.md`

### Teststatus
Offen: Weg zum Mead of Kvasir (Alfheim vor Gaia), Gaia-Pylon-Rezept in JEI, `lockAlfheim` in 1.20.1.

## 2026-10-17 — Questtexte für Galaxy in a Cube (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/swgc.md` mit dem Skill `questtexte`. 26 Quests über SW2 bis SW5 (Shop des Einsiedlers, Plastoid und Truppen, Macht, Lichtschwerter), im vollen Format für Mods ohne Buch. Anhang mit allen Rezepten, die JEI nicht zeigt: Assembly Bench, Droid Fabricator, Kyber färben.
- `modpfade/swgc/WISSEN.md`: Verbrauch an der Assembly Bench, Ergebnis-IDs der Droiden und der Klonrüstung.

### Betroffene Bereiche
- `questtexte/README.md`, `modpfade/swgc/WISSEN.md`

### Teststatus
Offen: Plastoid mit HDPE verschiebt Blaster, B-1, Droideka und Klonrüstung auf K7; Machtpunkte per Befehl (T10); Weg Kyber-Erz → Kristall; Befehle an Droiden.

## 2026-10-17 — Questtexte für Ad Astra mit Addons (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/adastra.md` mit dem Skill `questtexte`. 50 Quests über RF1 bis RF7 plus die Reihen RFX (Schutz ohne Raumanzug: Verzauberungen, Tinkers-Modifier, MekaSuit-Module) und RFY (Sky Stone für AE2). Hauptmod im kurzen Format mit Fundstelle im Astrodux (Kapitel → Eintrag); Giselle Addon, More Structures und Rocketed ohne Buch, knapp erklärt. Die Buchkapitel stehen beim Meilenstein der Rakete, für die man sie braucht.
- `modpfade/adastra/WISSEN.md`: Dimensions-IDs, IDs der Giselle-Verzauberungen und MekaSuit-Module, Moon Globe. `modpfade/swplanets/WISSEN.md`: Dimensions-IDs, Hoth heißt `swplanets:hot`.

### Betroffene Bereiche
- `questtexte/README.md`, `modpfade/adastra/WISSEN.md`, `modpfade/swplanets/WISSEN.md`

### Teststatus
Offen: Cryo Freezer, Rover-Treibstoff, Boss-Mobs der More-Structures-Dungeons, Automation NASA Workbench, Rezepte und Treibstoffe T4 bis T7.

## 2026-10-17 — Questtexte für Wesley's Roguelike Dungeons und Immersive Aircraft (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/rld.md` mit dem Skill `questtexte`. 23 Nebenquests in den fünf Stufen aus `18_STORY.md` (Vorbereitung, Oberwelt-Dungeons je Gruppe, Purpur-Palast im End, Nether, Infinite Dungeons bis The Great Creator), im vollen Format für Mods ohne Buch. Bosse werden über ihre Trophäen geprüft.
- Neu: `questtexte/aircraft.md`. 18 Nebenquests (Teile, Treibstoff im Metal Barrel, Fluggeräte, Upgrades, große Geräte, Waffen), im vollen Format.

### Betroffene Bereiche
- `questtexte/README.md`, `modpfade/rld/WISSEN.md` (Trophäen-IDs)

### Teststatus
Offen: O35 (welche Wesley's-Stufen Pflicht), „acht Oberwelt-Dungeons“ der Story gegenüber fünf Gruppen im Mod, Seltenheit des Portalbaums, Rückweg des Pathfinder; Freischaltung und Umfang der Aircraft-Reihe, Gyrodyne ohne Treibstoff, Bindung an IE-Stahl.

## 2026-10-18 — Questtexte für Alex's Mobs (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/alexsmobs.md` mit dem Skill `questtexte`. 37 Nebenquests in sieben Reihen (Oberwelt, Beute der Oberwelt, Meer und Untergrund, Nether, End, Void Worm und Weltrand, Essen mit Alex's Delight), im kurzen Format mit Fundstelle im Animal Dictionary (ohne Kapitel, ein Eintrag je Tier). Keine Pack-Änderungen; Config-Werte als Standard genannt.
- `modpfade/alexsmobs/WISSEN.md`: IDs Cosmic Cod und Ghostly Pickaxe.

### Betroffene Bereiche
- `questtexte/README.md`, `modpfade/alexsmobs/WISSEN.md`

### Teststatus
Offen: Transmutation Table und Erz-Gating (Befund AM1), Barbecue on a Stick (AM4), Zähm-Quests nur als Checkmark, Skreecher und Warden, Freischaltung von Nether- und End-Reihe.

## 2026-10-18 — Questtexte für AE2 (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/ae2.md` mit dem Skill `questtexte`. 44 Quests: AE1 Storage-Layer (13), AE2 ME-System (18), AE3 Quantenbrücke (7), dazu 6 Werkzeug-Nebenquests (AEX). Kurzes Format mit Fundstelle im Guide; die Addons (Wireless Terminals, Applied Mekanistics, Applied Botanics, More Immersive Wires) knapp selbst erklärt.
- `modpfade/ae2/WISSEN.md`: IDs Certus Quartz Crystal und Guide.

### Betroffene Bereiche
- `questtexte/README.md`, `modpfade/ae2/WISSEN.md`

### Teststatus
Offen: welche AE2-Rezepte teurer werden, Entfernen von Vibration Chamber und Crystal Resonance Generator (Test 36), Storage Bus an Storage Drawers, Chunkloading der Quantum Bridge auf dem Server, Quantum Bridge Card und Magnet Card.

## 2026-10-18 — Questtexte für Tinkers' Construct (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/tinkers.md` mit dem Skill `questtexte`. 40 Quests in TK1 bis TK4 und der Nebenquest-Reihe Ausbau (TKA-01 bis TKA-07), im kurzen Format mit Fundstelle in den sechs Tinkers-Büchern; TCIntegrations, Levelling Addon und Blood-Smeltery ohne Buch knapp erklärt. Pack-Änderungen: Refined Obsidian nur Mekanism, Blood-Smeltery-Abkürzungen entfernt, Wege A und C–F als offen.
- `modpfade/tinkers/WISSEN.md`: IDs für Legierungsbarren, Kobalt, Plate Armor, Werkzeugteil, Encyclopedia, Planetenmetall- und Blood-Smeltery-Flüssigkeiten; Fundort der Abschnittsnamen.

### Betroffene Bereiche
- `questtexte/README.md`, `modpfade/tinkers/WISSEN.md`

### Teststatus
Offen: Würdigkeits-Item (K2), O31, Eintragstitel im Buch gegenlesen, Blood-Smeltery 1.2.1a im Spiel, Material-Aufgaben per NBT oder Kontrollhaken.

## 2026-10-19 — Osmium in Everdawn bleibt

Status: 🟢

### Änderung
- Entscheidung (User): Everdawn ist sofort erreichbar und liefert Osmium in Menge vor dem Mond. Das bleibt so, weil Everdawn durch die Werkzeugabschwächung von Blue Skies (neue Werkzeuge nötig) schwer genug ist. Kein Portal-Skript, keine Senkung.

### Betroffene Bereiche
- `03_ERZGENERATION.md`, `00_STATUS.md`

## 2026-10-19 — Etrium wird Rumpf der Rakete T5

Status: 🟢 Entscheidung, 🔵 Skript

### Änderung
- Entscheidung (User): Etrium (in Ad Astra ohne Rezept) wird das Rumpfmetall von T5. Herstellung im IE Arc Furnace aus Calorite, Elementium und einer Zutat von Glacio (noch offen). Kein Erz.
- Offen im Skript: Arc-Furnace-Rezept, Platte und Stab in der Metal Press, Nugget und Block, Tinkers-Schmelzen, Etrium im Rezept der Rakete T5, Photovoltaic Etrium Cell ausblenden; Verwendung des Etrionic Core.

### Betroffene Bereiche
- `15_RAUMFAHRT.md` (neuer Abschnitt „Etrium“), `01_PROGRESSION.md`, `11_TESTING.md` (Test 5), `modpfade/adastra/WISSEN.md`

## 2026-10-19 — Questtexte für Star Wars Planets (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/swplanets.md` mit dem Skill `questtexte`. 16 Quests in RF5 (Endor), RF6 (Tatooine, Hoth, Mustafar) und RF7 (Mandalore), anschließend an RF5-01 bis RF7-01 in `adastra.md`. Geschrieben wie ohne Buch, weil das Star Manual rausfliegt; Schwerpunkt Planeten, Bauwerke, Kyber und Beskar. Blaster und Lichtschwerter des Mods ohne Quest (Dopplung zu Galaxy in a Cube).

### Betroffene Bereiche
- `questtexte/README.md`

### Teststatus
Offen: Kyber auf Endor fehlt im Mod (S3) und bricht die Kette Endor → T6, Weg Kyber-Erz → Kristall, Stormtrooper-Rüstung ohne Plastic Plate, Beskar-Ofen und Nugget, Blaster behalten oder nicht, Structure-Task in FTB Quests.

## 2026-10-19 — Questtexte für Blue Skies (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/blue_skies.md` mit dem Skill `questtexte`. 30 Quests in BS1 bis BS4 und der Nebenquest-Reihe BSN (Leben in den Welten). Halbes Buch: Weg zu den vier Bossen ausgeschrieben, Rest mit Fundstelle im Blue Journal. Pack-Änderungen: Zinn, Blei, Bauxit in Everbright, Osmium in Everdawn, Figur im Blue-Skies-Haus statt Händler, Boss-Beute für später (O1).
- Meilensteinkarte (User, 2026-10-19): BS3 heißt jetzt „Die Blinding-Bosse“ (Summoner in Everbright, Alchemist in Everdawn; braucht BS1 und BS2), BS4 „Nature- und Poison-Boss“ (Starlit Crusher, Arachnarch; braucht BS3). Vorher standen die Bosse unter der falschen Welt. Kapiteltabellen in `01_PROGRESSION.md` und `18_STORY.md` nachgezogen.

### Betroffene Bereiche
- `questtexte/README.md`
- `meilensteine/data.js` (BS3, BS4), `01_PROGRESSION.md` und `18_STORY.md` (Kapiteltabelle K5/K6)

### Teststatus
Offen: Währung des Zeal Lighter, Werkzeugrezepte, Ende der Werkzeugabschwächung, welcher Schild gegen den Arachnarch genügt, Bosse wiederholbar, Zähm-Aufgabe in FTB Quests.

## 2026-10-19 — Questtexte für Blood Magic (Entwurf)

Status: 🟡

### Änderung
- Neu: `questtexte/bloodmagic.md` mit dem Skill `questtexte`. 54 Quests in BM1 bis BM6, mit Buch (Sanguine Scientiem): Ziel, Fundstelle im Buch, Pack-Änderungen. Eintragstitel aus der JAR.
- Die Quests folgen den Altar-Stufen des Mods, nicht den Stufen der Meilensteinkarte: Rituale ab Stufe 3, Stufe 4 erst nach dem Demon Realm (Weak Blood Shard aus Tau), Stufe 6 gibt es nicht. Vorschlag für die Karte im Abschnitt „Offen vor dem Einbau“.

### Betroffene Bereiche
- `questtexte/README.md`

### Teststatus
Offen: Zuschnitt BM1–BM6 (User), Teil für T3 (O20, nur aus Stufe 3 möglich), Altar-Reparatur im Tempel (O2), Fund für T4, Ritual-Sperre auf den Tempel (E19), Ritual-Stein-Zahlen.

## 2026-10-19 — Doku-Prüfung auf Stimmigkeit

Status: 🟢

### Änderung
- Kyber: Das Deepslate-Vorkommen von Star Wars Planets ist wirkungslos (S3); ohne Eingriff gibt es Kyber nur auf Tatooine, nicht auf Endor. Korrigiert in `01_PROGRESSION.md`, `15_RAUMFAHRT.md`, `17_STAR_WARS_1.20.1.md` und auf der Meilensteinkarte (RF5).
- Meilensteinkarte RF5: Rumpf aus Etrium eingetragen (Entscheidung vom 2026-10-19); Seite neu veröffentlicht, dabei auch die noch nicht veröffentlichte Umbenennung von BS3/BS4.
- Veraltete Status-Angaben nach den Tests 1–27 nachgezogen: `00_STATUS.md` (51 Meilensteine, Testrunden), `03_ERZGENERATION.md`, `10_KUBEJS.md` (Skripte getestet, `jei_ausblenden.js`, Energizer), `15_RAUMFAHRT.md` (Tag-Overrides, Nächste Schritte), `16_MODLISTE_1.20.1.md`, `00_MODBASIS.md`, `erzatlas/README.md`, `README.md` (1.20.1).
- Überholte Beschlüsse markiert: „erster Raumflug nach Petroleum“ wieder offen (F6), „Star-Wars-Planeten verlangen Magie und Uran“ ersetzt durch die vier Hürden; im Erzatlas der Uran-Hinweis.
- `18_STORY.md`: O13 erledigt; Questbuch-Freischaltung „nach Würdig sein“ als überholt markiert; Elf per Befehl (Test 30) und Alfheim-Sperre (JAR) nachgetragen.
- `01_PROGRESSION.md`: Kapiteltabelle K8/K9 an `18_STORY.md` angeglichen.

### Betroffene Bereiche
- Doku, Meilensteinkarte, Erzatlas

### Auswirkungen auf bestehende Welt
Keine.

## 2026-10-19 — Neuordnung der Doku (Entscheidung User)

Status: 🟢

### Änderung
- **Zentrale Fragenliste** `20_ENTSCHEIDUNGEN.md` (F1–F25, O-Fragen, P1–P15, T-Fragen), aufgebaut aus `questtexte/OFFENE_FRAGEN.md` (entfernt), der O-Liste und den Technik-Fragen aus `18_STORY.md`, den Offen-Abschnitten von `01_PROGRESSION.md` und `15_RAUMFAHRT.md`, den offenen Punkten aus `00_STATUS.md` und dem Fragenkatalog der Meilensteinkarte (Seite neu veröffentlicht, zeigt jetzt einen Hinweis). Die übrigen Dokumente nennen nur noch Nummern.
- **Kapiteltabelle** nur noch in `01_PROGRESSION.md`; `18_STORY.md` Abschnitt 6 verweist darauf.
- **Archiv** `archiv_1182/`: 04–06, 08, 09, 13, `mods_v3.txt`, `mods_v4.txt` und die alte `Erzatlas IE+.html` aus dem Hauptordner. `07_CROSSMOD_INTEGRATION.md` auf die gültigen 1.20.1-Teile gekürzt (Tinkers, Schmelzregeln, Blood-Smeltery).
- **Fahrplan** in `00_STATUS.md` mit sieben Schritten statt der Phasen- und Blocknummern; Host-Aufgaben als H1–H5. Neue Arbeitsregel: offene Fragen nur in `20_ENTSCHEIDUNGEN.md`, je Tabelle ein führendes Dokument.
- Skill `questtexte` trägt neue Fragen in `20_ENTSCHEIDUNGEN.md` ein.

### Betroffene Bereiche
- Doku, Meilensteinkarte, Skill `questtexte`

### Auswirkungen auf bestehende Welt
Keine.

## 2026-10-20 — Entscheidungen und Skripte für Teil 1

Status: 🟡 (Skripte ungetestet)

### Änderung
- Entscheidungen für Teil 1 getroffen (F1–F26 außer F3, O3, O16, O17, O22, O23, O27–O30, O33, T1–T6), eingetragen in `20_ENTSCHEIDUNGEN.md` und `18_STORY.md`. Neu in der Story: Relikt und Tagebuch des Meisters in der Altar-Dimension, der „Helle Elf“, Galaktischer Strahlenschutz; Questbuch vom Droiden nach „Würdig sein“; Mars-Station ohne Prüfskript (Test 32 entfällt).
- Skripte für Teil 1 (`10_KUBEJS.md`, Abschnitt „Teil 1“): Raketen T1–T4 mit Control Circuits, Ventium, Imbued Slate, Elementium und Strahlenschutz; Rover nur Biodiesel; eigene Items; Ritual nur auf dem Merkur; Altar-Dimension nur mit Goddess' Charm; Truhe mit Relikt und Tagebuch; Digital Miner, AE2-Generatoren, Plastic Plate und Star Manual entfernt; IE-Crusher übernimmt die Rezepte des Mekanism-Crushers; ME Controller und Drive teurer; Airship mit Stahl; Credits, Plastoid, Durasteel und Steuerkerne nur im Shop; Baupläne schalten Rezepte global frei; Jawas und Ewok-Dörfer aus der Overworld; Transmutation Table nur Truhenbeute.
- Plastoid nur im Shop (O28); das HDPE-Rezept entfällt.
- Testrunde 8 (Tests 42–55) in `11_TESTING.md`.

### Betroffene Bereiche
- `kubejs/`, `config-overrides/config/alexsmobs.toml`, Doku

### Auswirkungen auf bestehende Welt
Schon gebaute Digital Miner, Vibration Chambers und Crystal Resonance Generators bleiben stehen, lassen sich aber nicht neu bauen. Das `alexsmobs.toml` gehört beim Host nach `config/`.

## 2026-10-20 — Skripte für Teil 1 in die Testinstanz kopiert

Status: 🟡

### Änderung
- `kubejs/startup_scripts`, `server_scripts`, `client_scripts` und `data` aus dem Projekt in die Testinstanz `Minecraft1201withForge` kopiert (mit Zustimmung des Users); `config-overrides/config/alexsmobs.toml` nach `config/`.
- Sicherungen: `config/alexsmobs.toml.vor-2026-10-20`, `kubejs/jei_ausblenden.js.vor-2026-10-20`.
- Alle 15 neuen bzw. geänderten Dateien per Vergleich bestätigt. Getestet ist noch nichts (Tests 42–55).

## 2026-10-20 — F3: Treibstoffe T4 bis T7

Status: 🟡 (ungetestet)

### Änderung
- Entscheidung (User): T4 Kryo-Raketentreibstoff aus Benzin + Cryo Fuel, T5 flüssiges D-T-Fusionsgemisch, T6 Antimaterie-Treibstoff, T7 Antimaterie-Treibstoff + Magie; ab T4 sparsam (1 Eimer pro Start). Cryo Freezer bleibt als Zulieferer. Analyse aller Flüssigkeiten: `recherche/f3_treibstoffe.md`.
- Umgesetzt: eigene Flüssigkeit `kubejs:kryo_treibstoff` mit Refinery-Rezept; Tags für T4, T5, `efficient_fuel`; T6 und T7 vorerst ohne Treibstoff.
- In die Testinstanz kopiert (7 Dateien, per Vergleich bestätigt). Tests 56 und 57 in `11_TESTING.md`.

### Auswirkungen auf bestehende Welt
Keine.

## 2026-10-20 — Tests 43–47, Fassung 2 von Baupläne und Ritual-Sperre

Status: 🟡

### Änderung
- Tests 44–46 bestanden (Triebwerke, Tanks, Rover nur mit Biodiesel).
- Test 47 fehlgeschlagen: `altar_dimension.js` rief `dimension()` als Funktion auf; die Ausnahme brach jede Ritual-Aktivierung ab. Fassung 2 liest die Dimension robust, und Fehler im Handler lassen das Ereignis durch.
- Test 43 (Wünsche des Users): Baupläne als öffenbare Bücher mit Beschreibung und Rezept (Befehl `/bauplan`); Baupläne für B-1, B-2 und Droideka schalten das Rezept des Steuerkerns frei; Bauplan-Rezepte und Droiden stark verteuert (Stahl, Desh, Durasteel, Control Circuits; Entwurf); eigene Texturen für die Steuerkerne. Die Bauplan-Items entfallen.
- In die Testinstanz kopiert. Wieder zu testen: 43, 47, 48, 53.

### Betroffene Bereiche
- `kubejs/`, `docs/10_KUBEJS.md`, `11_TESTING.md`, `18_STORY.md`, `20_ENTSCHEIDUNGEN.md`

### Auswirkungen auf bestehende Welt
Keine.

## 2026-10-20 — Baupläne als Patchouli-Bücher, Ritual- und Amulett-Sperre (Fassung 3)

Status: 🟡

### Änderung
- Test 47 und 48 erneut fehlgeschlagen: Rhino meldet bei `const` in einem `try`-Block „redeclaration of var“; der Handler fing den Fehler ab und ließ Ritual und Betreten durch. `altar_dimension.js` nutzt jetzt `var`. Das Betreten-Ereignis kommt bei der Teleportation von Blood Magic an (Log).
- Baupläne sind Patchouli-Bücher mit Beschreibung und dem Rezept als Bild (Wunsch des Users zu Test 43): sechs Bücher `patchouli:bauplan_<name>` samt Inhalt in `patchouli_books/` (gehört beim Host in den Ordner `patchouli_books/` der Instanz), Item-Modelle in `kubejs/assets/`. (Korrigiert nach dem ersten Test: Der Inhalt lag zuerst in `kubejs/assets/patchouli/`, wo Patchouli ihn bei externen Büchern nicht liest.) `/bauplan <name>` gibt das Buch; der erste Erhalt schaltet frei. Die geschriebenen Bücher aus Fassung 2 entfallen.
- In die Testinstanz kopiert. Wieder zu testen: 43, 47, 48, 53 (Neustart nötig: Patchouli lädt Bücher nur beim Start).

### Betroffene Bereiche
- `kubejs/`, `patchouli_books/`, Doku

### Auswirkungen auf bestehende Welt
Keine. Der Host braucht zusätzlich den Ordner `patchouli_books/`.

## 2026-10-20 — Story-Variante B: nur Pathway to the Endless Realm im Tempel

- JAR geprüft: Edge of the Hidden Realm ist ein Mini-Dungeon. Der Startraum hat 4 Türen, jeder Raum dahinter ist eine Sackgasse. Der User hat Variante B gewählt: Der Altar im Tempel ist Pathway to the Endless Realm, der Mini-Dungeon bleibt ohne Story (`18_STORY.md`, BM4 in `meilensteine/data.js`, `modpfade/bloodmagic/WISSEN.md`).
- `altar_dimension.js`: Die Ritual-Sperre auf den Merkur gilt nur noch für `ritualStandardDungeon`. Edge of the Hidden Realm geht überall, sonst gäbe es vor dem Merkur keine Tau Fruit und keine Altar-Stufe 4 (K7). Nicht in die Testinstanz kopiert.
- O39 entschieden: Die Amulett-Sperre gilt für beide Rituale (ganze Dimension). Skript unverändert.

### Betroffene Bereiche
- `kubejs/startup_scripts/altar_dimension.js`, Doku

### Auswirkungen auf bestehende Welt
Keine.

## 2026-10-20 — Skripte gegen F27 und O39 geprüft

Status: 🟡

### Änderung
- `altar_dimension.js` passt zu F27 und O39: Die Merkur-Sperre gilt nur für `ritualStandardDungeon` (im JAR: „Pathway to the Endless Realm“); die Amulett-Sperre gilt für die ganze Dimension; die `var`-Korrektur aus Fassung 3 ist erhalten. Die Testinstanz hatte noch die Fassung mit beiden Ritualen gesperrt; neu kopiert.
- Tests 47–49 an F27 angepasst: Test 47 prüft Pathway to the Endless Realm (Sperre) und Edge of the Hidden Realm (überall erlaubt); die Truhe des Meisters gehört ins Endless Realm. Das Ergebnis „Ritual geht überall“ der zweiten Runde war mit Edge of the Hidden Realm und ist jetzt gewollt.
- Questtext Blood Magic: BM4-02 und die Tabelle der Pack-Änderungen korrigiert. 🔵 BM4/BM5 müssen nach F27 noch neu geordnet werden.

## 2026-10-20 — Baupläne in einem Buch mit freischaltbaren Einträgen

Status: 🟡

### Änderung
- Wunsch des Users: Statt sechs einzelner Bücher gibt es ein Buch „Baupläne des Einsiedlers“ (`patchouli_books/bauplaene/`). Jeder Eintrag ist gesperrt, bis sein Advancement `ieplus:bauplan/<name>` vergeben ist (versteckt, ohne Toast; Stamm `ieplus:bauplan/root`).
- Der Einsiedler verkauft Bauplan-Seiten (`kubejs:bauplan_<name>`). Beim Erhalt: Seite verbraucht, Rezept freigeschaltet, Advancement an alle Spieler (Offline-Spieler beim Einloggen); der erste Kauf der Welt gibt das Buch dazu.
- Die sechs Einzelbücher und ihre Modelle entfernt (Projekt und Testinstanz). Neu kopiert: Buch, Advancements, `teil1_items.js`, `einsiedler_shop.js`.

### Betroffene Bereiche
- `kubejs/`, `patchouli_books/`, Doku

## 2026-10-20 — Test 53: Chat-Spam durch Bauplan-Seiten behoben

Status: 🟡

### Änderung
- Die Bauplan-Seite blieb im Inventar (`event.item.shrink()` wirkte nur auf eine Kopie), jede Inventaränderung meldete erneut. `einsiedler_shop.js` entfernt die Seite jetzt einen Tick später per `/clear` und meldet nur, wenn wirklich eine Seite entfernt wurde. In die Testinstanz kopiert.

## 2026-10-20 — Baupläne als Schriftrollen, Rechtsklick, Zurücksetzen

Status: 🟡

### Änderung
- Wunsch des Users: Alle Baupläne sehen gleich aus, als Schriftrolle (eigene Textur `kubejs/assets/kubejs/textures/item/bauplan_rolle.png`). Freigeschaltet wird per Rechtsklick: Die Rolle verschwindet, Rezept und Bucheintrag werden frei; ist der Bauplan schon im Buch, bleibt die Rolle und es kommt nur eine Meldung. Das Inventar-Ereignis aus Fassung 5 entfällt.
- Neuer Befehl `/bauplan zuruecksetzen`: sperrt alle Baupläne der Welt, nimmt die Bucheinträge bei allen Spielern zurück (Advancement `ieplus:bauplan/root` samt Unterpunkten) und gibt das Buch beim nächsten Lesen erneut aus. Beim Einloggen gleicht das Skript jeden Spieler an den Weltstand an.
- Texte im Buch angepasst. In die Testinstanz kopiert (Neustart nötig).

## 2026-10-20 — Relikt und Tagebuch automatisch in der Station (O40)

Status: 🟡

### Änderung
- Wunsch des Users: Die Truhe des Meisters entsteht von selbst in einem großen Raum der Minen; mehrere Funde sind erlaubt.
- Neu `kubejs/data/bloodmagic/loot_tables/chests/mines/smithy_loot.json`: Kopie der Blood-Magic-Tabelle mit einem Pool, der `ieplus:chests/meister_truhe` einbindet. Die Tabelle gibt es nur in einer Truhe der Station, dem größten Mine-Raum. Test 58. In die Testinstanz kopiert (`/reload` genügt).

## 2026-10-20 — Stahl nur über IE, Bioethanol ausgeblendet, JEI-Info für Cryo Fuel (O41)

Status: 🟢 (Test 59 bestanden, User 2026-10-20)

### Änderung
- Funde des Users beim Testen. Neu `kubejs/server_scripts/progression/stahl_nur_ie.js`: entfernt `mekanism:processing/steel/enriched_iron_to_dust` (Metallurgic Infuser). Ad Astra war schon entfernt, Tinkers bleibt.
- `jei_ausblenden.js`: Bioethanol (Eimer und Flüssigkeit) ausgeblendet; hat in Mekanism Generators kein Rezept.
- Neu `kubejs/client_scripts/jei_infos.js`: Info-Seite für Cryo Fuel. Ad Astra zeichnet das Ergebnis des Cryo Freezer in JEI nur als Füllbalken (laut Klassen im JAR), deshalb fand R auf Cryo Fuel nichts. Test 59. In die Testinstanz kopiert (Sicherung: `kubejs/client_scripts/jei_ausblenden.js.vor-O41`), Neustart nötig.

## 2026-10-20 — Test 53 bestanden, Blaster-Baupläne

Status: 🟡

### Änderung
- Test 53 (Baupläne als Rollen, Buch, Zurücksetzen) vom User geprüft: passt.
- Sieben neue Rollen `kubejs:bauplan_blaster_<modell>` (DC-15A, DC-15S, DC-17, DH-17, E-5, TL-50, Amban-Gewehr) mit je einer Buchseite (Bild des Blasters, Zutaten an der Assembly Bench). Keine Sperre an der Bench (User): Die Bench liest ihre Blaster-Liste nur beim Start (statisch in `AssemblyBenchMenu`), und wer das Rezept vorher findet, darf es nutzen.
- Bestätigt: Durasteel und Plastoid haben kein Rezept, nur Shop-Ware.
- In die Testinstanz kopiert (Neustart nötig, neue Items).

## 2026-10-20 — Test 47 bestanden, Test 48: Amulett-Prüfung Fassung 4

Status: 🟡

### Änderung
- Test 47 ✅ (User): Edge of the Hidden Realm überall, Pathway to the Endless Realm nur auf dem Merkur.
- Test 48 ❌ (User): Man kommt weiter ohne Amulett hinein. Im JAR geprüft: Blood Magic teleportiert per `/execute … run tp`, Forge löst dabei `EntityTravelToDimensionEvent` aus, Abbrechen wirkt. Fassung 4 von `altar_dimension.js`: kein Rückfall aufs Inventar mehr (der ließ bei einer gescheiterten Curios-Abfrage durch), `findFirstCurio(Item)` ausdrücklich gewählt, bei gescheiterter Abfrage bleibt man draußen, Log-Zeilen für jede Reise und jede Entscheidung. In die Testinstanz kopiert (Neustart nötig).

## 2026-10-20 — Rüstungs-Baupläne, Buch in drei Kapiteln

Status: 🟡

### Änderung
- Wunsch des Users: Die Werkbank-Rezepte der Rüstungen aus Galaxy in a Cube (Klon Phase 2, Jedi, Sith, Royal Guard, Vader; 19 Teile) gibt es nur noch per Bauplan. Fünf neue Rollen `kubejs:bauplan_ruestung_<satz>`; das Rezept ist bis zum Lesen gesperrt (gleiche Technik wie bei den Maschinen), die Kosten bleiben wie im Original. Die Rüstungsteile sind in JEI ausgeblendet.
- Das Buch „Baupläne des Einsiedlers“ hat jetzt drei Kapitel: Maschinen (Assembly Bench, Droid Fabricator, Gas Harvester), Waffen (Blaster, Droiden), Rüstung (fünf Sätze mit Rezeptbildern).
- Test 60 angelegt (zuerst als 56, doppelt mit dem Treibstoff-Test). In die Testinstanz kopiert (Neustart nötig).
- Test 48 ✅ (User): nur mit Charm im Curios-Slot hinein; das Log zeigt die Abfrage sauber (false ohne Charm und mit Charm im Inventar, true im Slot).

## 2026-10-20 — Baupläne auch in der Tinkers-Werkstation (Test 60)

Status: 🟡

### Änderung
- Test 60 (User): Nach dem Lesen des Bauplans ging das Rezept an der Werkbank, nicht aber in der Tinkers-Werkstation; sie gibt keinen Spieler an das Rezept weiter. `ieplusFreigeschaltet` in `einsiedler_shop.js` liest den Weltwert jetzt über `Utils.server`, wenn kein Spieler da ist. Gilt für alle Baupläne; Autocrafter funktionieren damit nach der Freischaltung ebenfalls. In die Testinstanz kopiert.

## 2026-10-20 — Test 60 bestanden, ein Bauplan für alle Blaster

Status: 🟡

### Änderung
- Test 60 ✅ (User): Rüstungs-Baupläne gehen an Werkbank und Tinkers-Werkstation.
- Die sieben Blaster haben an der Assembly Bench dasselbe Rezept (1 Diamant, 1 Plastoid, 1 Durasteel; nur das Modell wird gewählt), fest im Code. Einzelne Rezepte sind nicht möglich. Deshalb ersetzt eine Rolle `kubejs:bauplan_blaster` die sieben Einzelrollen; sie öffnet alle sieben Blaster-Seiten im Buch (Advancement `ieplus:bauplan/blaster`). Die Droiden behalten ihre drei Baupläne (User).
- In die Testinstanz kopiert, alte Advancements dort entfernt (Neustart nötig, Items geändert).
- Neuer Befehl `/bauplan alles` (Gegenteil von `zuruecksetzen`): schaltet alle Baupläne frei, öffnet alle Bucheinträge bei allen Spielern und gibt dem Ausführenden ein Buch.
- Test 61 ✅ (User): ein Blaster-Bauplan öffnet alle sieben Seiten; `/bauplan alles` funktioniert.

## 2026-10-20 — Tests für Teil 1 bis auf 54 bestanden, Tusken Raider aus der Overworld

Status: 🟡

### Änderung
- Tests 43, 50, 51, 52, 55, 56, 57 ✅ (User); Test 49 entfällt (O40, Test 58).
- Test 54 (User): kein Ewok-Dorf, aber Tusken Raider in der Overworld. Sie kommen über einen eigenen Spawner im Code von Galaxy in a Cube (`TuskenTribeSpawner`, nur Overworld, keine Config), nicht über Biom-Daten. Neues Skript `server_scripts/starwars/galaxy_overworld.js` fängt `swgc:tusken_raider` in der Overworld ab. In die Testinstanz kopiert (`/reload` genügt).
- Test 54 ✅ (User): keine Tusken Raider mehr in der Overworld. Damit sind alle Tests für Teil 1 bestanden. Wunsch für Teil 2: Tusken auf Tatooine (F29).

## 2026-10-20 — Keine Fahrzeuge in Bauwerken, Plastoid aus HDPE, Mekanism-Erze für IE-Metalle (O42)

Status: 🟡

### Änderung
- Fund des Users: Bauwerke auf den Planeten bringen Fahrzeuge mit. Im JAR von Ad Astra More Structures stecken ein Rover in `abandoned_base.nbt` und eine fertige T1-Rakete in `rocket_launch_t1.nbt` (beide auf allen Planeten). Kopien ohne diese Entities liegen in `kubejs/data/ad_astra_more_structures/structures/` (Werkzeug `tools/nbt_entities_entfernen.py`, Rundlauf geprüft). Gilt nur für neu erzeugte Chunks.
- Plastoid: Bauplan „Plastoid“ (Rolle, Advancement, Buchseite im neuen Kapitel „Werkstoffe“), Rezept 2 HDPE Pellets → 1 Plastoid. Der Einsiedler verkauft nur die ersten 20 (Einstellung im Handel von Easy NPC, macht der User).
- Mekanism-Erzverarbeitung bis 5× für Silber, Nickel, Aluminium: neue Items und Slurries (`startup_scripts/mekanism_erze.js`), 21 Rezepte je Metall (`server_scripts/crossmod/mekanism_erze.js`), Texturen aus den Blei-Texturen von Mekanism eingefärbt. Tests 62–64. In die Testinstanz kopiert (21 Dateien; `einsiedler_shop.js` und `teil1_items.js` waren dort auf dem Stand vor O42, alter Stand liegt in Git), Neustart nötig.

## 2026-10-20 — Kaleidoscope aufgenommen, ohne Dopplungen mit Farmer's Delight

Status: 🔵 ungetestet (Tests 65–72)

### Änderung
- Wunsch eines Mitspielers: Kaleidoscope Cookery 1.6.0, Tavern 1.2.0, Grilling 1.1.1, End 1.0.14 und ImmersiveEating 1.5.1 (+ GeckoLib 4.8.4) liegen in `mods/` der Testinstanz. Kaleidoscope Compat 2.6.5 „Patch.2“ bleibt in `disabledmods/`.
- Vorgabe des Users: perfekt integriert, keine Dopplungen; Farmer's Delight und alle Addons bleiben (FD und Nether's Delight stecken schon in der Welt).
- Neues Skript `server_scripts/crossmod/kaleidoscope_einheitlich.js`, 29 Loot-Overrides in `kubejs/data/` (Werkzeug `tools/kaleidoscope_loot.py`), JEI-Ausblendung, `config-overrides/config/farmersdelight-common.toml`. In die Testinstanz kopiert (Spiel war zu).

### Zuordnung (Verlierer → Gewinner)
- **Kaleidoscope gewinnt** (im Code verdrahtet: Handel des Kochs, Reisschale, Teig- und Mehl-Item, Spieß-Code): Tomate, Tomatensamen, Reis, Reisrispe, gekochter Reis, Spiegelei, Teig, Mehl (auch das von Engineers Delight), rohe Nudeln (statt Pasta), Zwiebel (Grilling).
- **Farmer's Delight gewinnt** (schon in der Welt, bei Kaleidoscope nur Nährwerte im Code): Hammelkoteletts roh/gebraten, Dumplings, Speck roh/gebraten (statt Schweinebauch), Hähnchenstücke roh/gebraten (statt Fleischstücke), Kabeljau- und Lachsfilet (statt Sashimi), Reisballen (statt des Kaleidoscope-„Strohballens“ aus 9 Reisrispen).
- **Geräte:** Herd von Kaleidoscope (Arbeitsplatz des Kochs, gilt auch als FD-Hitzequelle); Schneidebrett von Farmer's Delight; Küchenmesser von Kaleidoscope (Eisen bis Netherite), das Feuersteinmesser von Farmer's Delight bleibt als Einstieg.
- **Bleiben getrennt** (eigene Mechanik oder anderes Ding): FD-Kochtopf und Pfanne neben Wok, Suppentopf, Dampfgarer, Mühlstein, Grill; Kohl und Salat; Hackfleisch und Rindfleischwürfel (Grilling braucht die Würfel im Spieß-Code, deshalb gibt Rindfleisch am Brett jetzt beides je 1 statt 2 Hackfleisch).
- Entfallen mit ihren Items: Kaleidoscope-Fleischstücke aus Kaninchen, Sashimi aus Tropenfisch, Knochen aus gebratenem Fisch am Kaleidoscope-Brett. Rohe Kuh-Innereien gibt es weiter nur beim Koch: Grilling überschreibt im Original deren Brett-Rezept mit Rindfleischwürfeln.

### Begründung gegen Compat
- Von 61 Dateien seines Farmer's-Delight-Abgleichs sind 47 unter 1.20.1 wirkungslos oder fehlerhaft (Ordner `recipe/`, `loot_table/`, `advancement/`, Tags `c:…`, `neoforge:conditions`, leere Dateien). Wilde Pflanzen und Truhen hätten weiter FD-Items geliefert, Engineers Delight fasst Compat nicht an.

### Auswirkungen auf bestehende Welt
- FD-Zutaten und FD-Herd im Bestand: 1:1 in der Werkbank umwandeln. Gesetzte FD-Herde lassen beim Abbauen einen Kaleidoscope-Herd fallen. Alte FD-Messer bleiben Messer (Tags behalten).
- Gepflanzte FD-Tomaten, -Reis und -Zwiebeln geben über die Loot-Overrides schon die Gewinner (im FD-Code der Ranke steht kein Tomaten-Item; im Spiel prüfen, Test 70).
- Neue Pflanzen, Bäume und Dorfgebäude von Kaleidoscope erscheinen nur in neuen Chunks. Beim Host müssen Mods, `kubejs/` und die FD-Config mit.

### Teststatus
- Offline geprüft: `kubejs_check.py` ohne Befund; das Skript lief in Node gegen alle 14.937 Rezepte der JARs (123 betroffen, 103 neu, 10 Dubletten verworfen, 10 ersatzlos, kein Verlierer in neuen Rezepten). Im Spiel offen: Tests 65–72.
- Erster Start (Test 65): „KubeJS error“ beim Betreten der Welt. Rhino bricht bei `const` in der rekursiven Funktion `ersetze` ab („redeclaration of var schluessel“); Node hatte das im Offline-Lauf nicht bemängelt. In allen Funktionen des Skripts `let` statt `const`. `tools/kubejs_check.py` warnt jetzt vor `const` in rekursiven Funktionen. In die Testinstanz kopiert, `/reload` genügt.
