# 16 — WECHSEL AUF 1.20.1: BEFUNDE UND WELT-TEST

> Stand 2026-10-12. Die **Mod-Liste** steht seit dem 2026-10-12 in `00_MODBASIS.md` (zusammengeführt, Rohliste `mods_v5.txt`). Dieses Dokument behält, was beim Wechsel herauskam: Befunde zu Blue Skies und der Test mit der Kopie der Hauptwelt. Die frühere Fassung mit Download-Tabellen liegt im Git-Verlauf (Commit `9bf29d8`).

## Eckdaten

- Minecraft **1.20.1**, **Forge 47.4.26**; 🟢 Wechsel beschlossen am 2026-10-11 (`12_CHANGELOG.md`).
- Testinstanz: `…\ATLauncher\instances\Minecraft1201withForge`, 98 JARs, startet und lädt eine Welt.
- ⚠️ Wer einen Mod streicht, dessen Blöcke oder Items schon in der Welt sind, verliert diese beim Laden.

## Blue Skies — Befunde aus JAR und Config

- **Fremde Erze:** Blue Skies filtert Features anderer Mods in seinen Dimensionen. Freigabe über `allowed_mods_for_feature_gen` in `config/blue_skies-common.toml` (🟢 Standard ist eine leere Liste, 2026-10-12 gelesen). Die Freigabe lässt Features nur durch den Filter; erzeugen muss sie weiterhin ein Biome Modifier.
- **Gestein:** `blue_skies:turquoise_stone` (Everbright), `blue_skies:lunar_stone` (Everdawn). Die eigenen Erze sind normale JSON-Features; Werte in `02_RESSOURCEN.md`.
- **Werkzeug-Abschwächung:** im Code vorhanden (`PlayerHooks.isNerfableTool`, `SkiesEntityHooks.nerfDamage`), an den Boss-Fortschritt gekoppelt, **kein Config-Schalter**. 🟢 Im Spiel getestet (User, 2026-10-11): Tinkers-Werkzeuge sind in Everbright abgeschwächt. 🟢 **Entscheidung 2026-10-12:** als gewollte Hürde hinnehmen. Wer in Blue Skies abbauen will, nutzt die Werkzeuge der Dimension oder besiegt die Bosse. 🟢 Gemessen (Test 22, 2026-10-17): mit fremdem Werkzeug dauert es ewig; bleibt so.
- **Bosse:** Summoner, Alchemist, Starlit Crusher, Arachnarch; Zugang über den Gatekeeper.

## Rollen der Dimensionen (Stand 2026-10-12)

- 🟢 Blue Skies: Story-Dimension und Quelle der Industriemetalle. Everbright: Zinn (nur dort), Blei, Bauxit. Everdawn: Osmium. Details: `03_ERZGENERATION.md`.
- 🟢 Wesley's Roguelike Dungeons: seit 2026-10-17 fünfstufige Nebenquest-Reihe und Vorbereitung auf die Altar-Dimension (`01_PROGRESSION.md`, O35).
- 🟡 Blood-Magic-Dungeon: Zugang nur auf dem Merkur, dort ein Pflicht-Item für die T4-Rakete (`15_RAUMFAHRT.md`; technische Machbarkeit ungetestet).

## Welt-Test: Kopie der Hauptwelt in 1.20.1 (2026-10-11)

Kopie aus `welten_backups/WeltVorClaude.zip` (Welt `3_ Versuch von 1,5`) in der Testinstanz geladen. Belege: `logs/latest.log` und `logs/2026-10-11-5.log.gz` der Instanz.

**Ergebnis: Die Welt lädt. Inventar, Botania, Tinkers sowie IE-Masten und -Kabel funktionieren (User-Test). Alle bereits gebauten großen IE- und IP-Multiblöcke sind kaputt.**

### Multiblöcke

IE 10 hat das Multiblock-System neu gebaut. Die alten Block-Entity-Typen (`…_dummy`, `…_master`) gibt es nicht mehr; Minecraft verwirft sie beim Laden (Log: `Skipping BlockEntity with id …`). Die Blöcke bleiben als leere Hülle stehen, Inhalt und Zusammenhalt sind weg.

| Maschine | Anzahl Maschinen | verworfene Block-Entities |
|---|---:|---:|
| Coker (Immersive Petroleum) | 1 | 612 |
| Blechtank (samt Flüssigkeit) | 5 | 190 |
| Koksofen | 3 | 81 |
| Lichtbogenofen | 1 | 77 |
| Dieselgenerator | 1 | 38 |
| Metallpresse | 1 | 7 |

- Kleine Multiblöcke ließen sich im Test durch Abbauen einzelner Blöcke neu formen; Pumpjack und Coker nicht.
- 🟢 **Folge für die echte Umstellung:** Vor dem Wechsel in 1.18.2 alle IE- und IP-Multiblöcke leeren und mit dem Hammer zerlegen, nach dem Wechsel neu formen.

### Entfernte Inhalte

- Beim Laden wurden rund 1.200 unbekannte IDs entfernt. Der größte Teil ist Twilight Forest (424 Blöcke, 539 Items, 80 Kreaturen); dazu Waystones (10 Wegsteine verworfen), Tinkers, AE2 (u. a. Certus-Erz, siehe unten), Immersive Petroleum (14 Blöcke, 12 Flüssigkeiten).
- **AE2-Certus-Erz gibt es in 1.20.1 nicht mehr.** Bereits erzeugte Erzblöcke verschwinden beim Laden; Certus kommt nur noch aus Meteoriten (`02_RESSOURCEN.md`).
- **Chisels & Bits:** Die Welt enthält 22 Einträge dieses Mods; er fehlte beim Test und wurde danach installiert. 🔵 Mod-Liste des Hosts abgleichen (TODO F21).

### Stolpersteine beim Laden

- **Absturz beim ersten Ladeversuch:** `serverconfig/immersivepetroleum-server.toml` aus 1.18.2 nennt `immersivepetroleum:benzene`, das es nicht mehr gibt (`crash-2026-10-11_21.58.36-server.txt`). Die Datei muss vor dem ersten Start aus dem Weltordner entfernt werden. In der Testwelt liegt sie als `immersivepetroleum-server.toml.1182-alt`.
- **Backup unvollständig:** `DIM-1/entities` fehlt im Download (`___All_Errors.txt`).
- Die Ölvorkommen (`data/ImmersivePetroleum-ReservoirRegions/`) sind als Dateien unverändert vorhanden. 🟢 1.20.1 liest sie korrekt (Test 26, 2026-10-17).

### Noch nicht geprüft

🔵 Zustand der Tinkers-Werkzeuge im Detail, der Ölförderung und der früheren Twilight-Forest-Dimension nach dem Laden.
