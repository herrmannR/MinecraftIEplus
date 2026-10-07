# Minecraft 1.18.2 Modpack — Projektstatus

> Zentrale Übersicht und Einstiegspunkt für das gesamte Modpack-Projekt.
> Letzte Überarbeitung: 2026-10-07 (Verifikation gegen die echte Instanz, neuer Arbeitsplan).

## Projektziel

Ein bestehendes Minecraft-1.18.2-Forge-Modpack („Immersive Engineering+“, ATLauncher) soll zu einem kohärenten, progressiven Modpack ausgebaut werden. Die vorhandene Welt bleibt erhalten. Mods sollen nicht isoliert nebeneinanderstehen, sondern sich über Ressourcen, Verarbeitung, Energie, Magie und Automatisierung gegenseitig ergänzen.

## Umgebung

| Was | Wo | Zugriff |
|---|---|---|
| Projekt / Doku / Skript-Quellen | `C:\Users\richa\Projekte\MinecraftIEplus` (Git) | frei |
| Eigene Spielinstanz | `…\ATLauncher\instances\ImmersiveEngineering` | **nur lesen** |
| Testinstanz | `…\ATLauncher\instances\TestIEInstance` | frei, jede Änderung in `13_TESTINSTANZ_CHANGELOG.md` |
| **Hauptwelt** | beim Mitspieler (Host), Spiel über **LAN** | kein Zugriff; Übernahme durch die Spieler |

### Konsequenzen aus LAN-Betrieb

- Der **Host** erzeugt die Welt: Worldgen, Server-Skripte (KubeJS `server_scripts`) und Server-Configs wirken nur über die Instanz des Hosts.
- IE-Server-Configs liegen **pro Welt** in `saves/<Welt>/serverconfig/` — sie müssen in die Welt des Hosts übernommen werden, nicht nur in `config/`.
- Mekanism-Worldgen liegt in `config/Mekanism/world.toml` der Host-Instanz.
- Alle Spieler brauchen identische Mods; Client-/Startup-Skripte (KubeJS `startup_scripts`, `client_scripts`, `assets`) müssen bei **allen** Spielern liegen.
- `saves/WasIchBauenWill` in den lokalen Instanzen ist eine **Testwelt**, nicht die Hauptwelt.

## Arbeitsregeln

- Die bestehende Welt wird als reale Ausgangslage berücksichtigt.
- Keine Progressionsänderung ohne Prüfung der Auswirkungen auf die bestehende Welt.
- Fakten nur, wenn verifiziert (JAR, Config, Log oder Test). Vermutungen werden als 🔵 markiert oder erfragt.
- KubeJS und Configs sind die Implementierungsebene; die Designentscheidungen liegen in dieser Dokumentation.
- Experimente nur in der Testinstanz.
- Änderungen werden im CHANGELOG dokumentiert; Änderungen an der Testinstanz zusätzlich in `13_TESTINSTANZ_CHANGELOG.md`.

## Statussystem

- 🟢 DECIDED — verbindlich beschlossen / verifiziert
- 🟡 PLANNED — vorgesehen, aber noch nicht vollständig spezifiziert
- 🔵 OPEN — noch zu entscheiden / zu verifizieren
- 🔴 BLOCKED — kann erst nach einer anderen Entscheidung bearbeitet werden

## Stand der Hauptwelt (2026-10-07)

- Botania: Rune Altar vorhanden.
- Immersive Engineering: Steel, Biodiesel-Generator, Crusher, Arc Furnace (Lichtbogenofen), Pumpjack/Ölförderung gerade gebaut.
- Tinkers Construct: begonnen.
- Twilight Forest: gerade erstmals betreten.
- Applied Energistics 2: noch nicht begonnen.
- **Mekanism, Mekanism Generators, Blood Magic, Blood-Smeltery und deren Integrationsmods wurden gerade erst hinzugefügt.** In allen bereits generierten Chunks fehlen deshalb Mekanism-Erze (→ Retrogen, siehe `03_ERZGENERATION.md`).

## Festgelegte Designrichtung

🟢 Core-Technik: Immersive Engineering, Immersive Petroleum, Mekanism, Mekanism Generators, Applied Energistics 2, Applied Mekanistics.

🟢 Magie: Botania, MythicBotany, Blood Magic.

🟢 Werkzeuge/Materialien: Tinkers Construct, Tinkers Levelling Addon, Blood-Smeltery.

🟢 Mekanism übernimmt die High-Tech-/Chemie-/Verarbeitungsrolle, ersetzt aber nicht automatisch jede andere Verarbeitung.

🟢 Immersive Engineering bleibt die industrielle Grundlage.

🟢 **AE2 ist Endgame.** Einzige Ausnahme: ein früher, teurer Storage-Layer, mit dem bestehende Kisten/Drawers angebunden und durchsucht werden können.

🟢 Keine Erweiterung „More Mekanism Processing“; Erträge werden gezielt selbst gebalanced.

🟢 Keine weiteren großen Basistech-Mods. Spätere Erweiterungen sind Endgame-orientiert und werden separat entschieden.

---

# Arbeitsplan

Leitidee: **erst das Zeitkritische und Strukturelle entscheiden, dann balancieren, dann implementieren.**

| Phase | Inhalt | Status |
|---|---|---|
| 0 | Grundlagen: Projekt/Git, Doku verifiziert & korrigiert, Testinstanz | 🟢 |
| 1 | **Worldgen** (zeitkritisch) | 🟡 in Arbeit |
| 2 | Progressions-Meilensteine (Gates & Kreuzungspunkte) | 🔵 |
| 3 | Verarbeitung & Erträge | 🔵 |
| 4 | Energie & Flüssigkeiten | 🔵 |
| 5 | AE2 zweistufig (früher Storage-Layer / Endgame-ME) | 🔵 |
| 6 | Cross-Mod-Rezepte | 🔵 |
| 7 | KubeJS-/Config-Umsetzung & Test in der Testinstanz | 🔵 |
| 8 | Übernahme in die Hauptwelt (Host) | 🔵 |

### Phase 1 — Worldgen ⏰
Jeder neu erkundete Chunk bekommt die aktuelle Default-Verteilung. Deshalb zuerst:
1. In der Testinstanz prüfen, ob IE-/Mekanism-/AE2-Erze bereits in Twilight-Forest-Biomen spawnen.
2. Zielverteilung festlegen (Osmium, Zinn, doppelte Lead-/Uranium-Generierung, TF-Industrieerze).
3. Umsetzung bevorzugt über Configs (IE serverconfig, `Mekanism/world.toml`, AE2, Tinkers); KubeJS-Worldgen nur für das, was Configs nicht können (z. B. Erze gezielt in TF-Biomen), nach API-Test.
4. **Retrogen** für bereits erkundete Chunks einplanen (🟢 gewünscht), vor allem für Mekanism-Erze.

### Phase 2 — Meilensteine
Statt zuerst alle Erträge zu balancieren, werden 10–15 Schlüssel-Meilensteine definiert (z. B. erste Mekanism-Maschine, Metallurgic Infuser, fortgeschrittene IE-Multiblöcke, Terrasteel, Blood-Altar-Tiers, AE2-Storage-Layer, ME Drive, Alfheim, Alfsteel, Fusion/SPS) — jeweils mit benötigten Pfaden und Kreuzungspunkten, abgeglichen mit dem Weltstand.

### Phase 3–6
Erträge pro Material und Pfad → Energie-Rollen → AE2-Gates → Cross-Mod-Rezepte nur an den Kreuzungspunkten aus Phase 2.

### Phase 7 — Umsetzung
Skripte/Configs entstehen im Projektordner (`kubejs/`, `config-overrides/`), werden in die Testinstanz kopiert und dort getestet.

### Phase 8 — Übernahme
Backup der Hauptwelt beim Host → Configs/Skripte bei allen Spielern einspielen (Server-Teil beim Host) → Retrogen → Changelog für die Mitspieler.

---

# Entscheidungslog / offene Punkte

| Bereich | Status | Datei |
|---|---|---|
| Modbasis | 🟢 | `00_MODBASIS.md` |
| Progression | 🟡 Pfade festgelegt, Meilensteine offen | `01_PROGRESSION.md` |
| Ressourcen | 🟢 Inventur + Tag-Reconciliation verifiziert | `02_RESSOURCEN.md` |
| Erzgeneration | 🟡 Ist-Zustand verifiziert, Soll teilweise offen | `03_ERZGENERATION.md` |
| Verarbeitung | 🔵 | `04_VERARBEITUNG.md` |
| Energie/Flüssigkeiten | 🔵 | `05_ENERGIE_FLUESSIGKEITEN.md` |
| Magie | 🟡 Grundrollen festgelegt | `06_MAGIE.md` |
| Cross-Mod-Integration | 🟡 Prinzip festgelegt | `07_CROSSMOD_INTEGRATION.md` |
| AE2/Automation | 🟡 Rolle festgelegt, Gates offen | `08_AE2_AUTOMATION.md` |
| Endgame | 🔵 | `09_ENDGAME.md` |
| KubeJS | 🟡 leer, Struktur geplant | `10_KUBEJS.md` |
| Testing | 🟢 Testinstanz vorhanden | `11_TESTING.md` |
| Changelog | 🟢 | `12_CHANGELOG.md`, `13_TESTINSTANZ_CHANGELOG.md` |
| Erz × Mod Matrix | 🟢 Ist + Soll | `14_ERZ_MOD_MATRIX.md` |

## Offene Fragen an das Team

🟢 Osmium/Zinn: Option B (Osmium OW selten + TF hoch, Zinn nur TF).
🟢 Lead nur IE-Erz, Uranium nur Mekanism-Erz.
🟢 Retrogen zwingend (Hauptwelt bereits weit erkundet).
🔵 Uran-Menge erhöhen? Kobalt-Menge erhöhen?

Übersicht aller Erze × Mods: `14_ERZ_MOD_MATRIX.md`.
