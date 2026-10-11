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
