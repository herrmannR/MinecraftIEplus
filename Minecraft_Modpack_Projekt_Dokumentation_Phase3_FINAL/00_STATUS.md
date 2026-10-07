# Minecraft 1.18.2 Modpack — Projektstatus

> Zentrale Übersicht und Einstiegspunkt für das gesamte Modpack-Projekt.

## Projektziel

Ein bestehendes Minecraft-1.18.2-Forge-Modpack soll zu einem kohärenten, progressiven Modpack ausgebaut werden. Die vorhandene Welt bleibt erhalten. Mods sollen nicht isoliert nebeneinanderstehen, sondern sich über Ressourcen, Verarbeitung, Energie, Magie und Automatisierung gegenseitig ergänzen.

## Arbeitsregeln

- Die bestehende Welt wird als reale Ausgangslage berücksichtigt.
- Keine Progressionsänderung ohne Prüfung der Auswirkungen auf die bestehende Welt.
- Keine Rezeptänderung wird als final betrachtet, bevor Ressourcen-, Progressions- und Verarbeitungskontext definiert sind.
- Ore Generation, Verarbeitung, Energie, Flüssigkeiten/Gase und Nebenprodukte werden gemeinsam betrachtet.
- KubeJS dient als Implementierungsebene; die Designentscheidungen liegen in dieser Dokumentation.
- Experimente finden in einer separaten Testwelt statt.
- Änderungen werden im CHANGELOG dokumentiert.

## Statussystem

- 🟢 DECIDED — verbindlich beschlossen
- 🟡 PLANNED — vorgesehen, aber noch nicht vollständig spezifiziert
- 🔵 OPEN — noch zu entscheiden / zu verifizieren
- 🔴 BLOCKED — kann erst nach einer anderen Entscheidung bearbeitet werden

## Aktueller Fokus

🟡 Ressourcen-/Materialinventur läuft. Phase 1 (JAR-Inventur) dokumentiert; Tag-/Recipe-Reconciliation folgt.

## Bekannter Stand der bestehenden Welt

- Botania: Rune Altar vorhanden.
- Immersive Engineering: Steel vorhanden.
- Immersive Engineering: Biodiesel Generator vorhanden.
- Immersive Engineering: erste Ölgewinnung wird begonnen.
- Tinkers Construct: bereits begonnen.
- Applied Energistics 2: noch nicht begonnen.

## Bereits festgelegte Designrichtung

🟢 Core-Technik:
- Immersive Engineering
- Immersive Petroleum
- Mekanism
- Mekanism Generators
- Applied Energistics 2
- Applied Mekanistics

🟢 Magie:
- Botania
- MythicBotany
- Blood Magic

🟢 Werkzeuge/Materialien:
- Tinkers Construct
- Tinkers Levelling Addon
- Blood-Smeltery

🟢 Mekanism soll High-Tech-/Chemie-/Verarbeitungsrolle übernehmen, aber nicht automatisch jede andere Verarbeitung ersetzen.

🟢 Immersive Engineering bleibt als industrielle Grundlage relevant.

🟢 AE2 wird als spätere Progressionsstufe behandelt, nicht als frühe Komfortlösung.

🟢 Mehr Mekanism Processing wird nicht hinzugefügt; Verarbeitung und Erträge werden gezielt selbst gebalanced.

🟢 Keine weiteren großen Basistech-Mods sollen hinzugefügt werden. Eventuelle spätere Erweiterungen sind Endgame-orientiert und werden separat entschieden.

## Nächste Arbeitsschritte

1. Ressourcen und tatsächliche Materialien vollständig erfassen.
2. Erzquellen und Worldgen prüfen.
3. Verarbeitungswege und Erträge definieren.
4. Energie- und Flüssigkeitsökonomie definieren.
5. Progressionsabhängigkeiten konkretisieren.
6. Cross-Mod-Rezepte entwerfen.
7. KubeJS-Implementierung spezifizieren.
8. In Testwelt validieren.
9. Erst danach Änderungen in der bestehenden Welt übernehmen.

---

# Entscheidungslog / offene Punkte

| Bereich | Status | Hinweis |
|---|---|---|
| Modbasis | 🟢 | `00_MODBASIS.md` |
| Progression | 🟡 | Grundrichtung vorhanden, Details offen |
| Ressourcen | 🔵 | vollständige Inventur steht aus |
| Erzgeneration | 🔵 | muss anhand tatsächlicher Mods geprüft werden |
| Verarbeitung | 🔵 | bewusst noch nicht final |
| Energie/Flüssigkeiten | 🔵 | noch zu modellieren |
| Magie | 🟡 | Grundrollen festgelegt |
| Cross-Mod-Integration | 🟡 | Prinzip festgelegt, konkrete Rezepte offen |
| AE2/Automation | 🟡 | Rolle festgelegt, konkrete Gates offen |
| Endgame | 🔵 | zukünftige Erweiterungen offen |
| KubeJS | 🟡 | Addons vorhanden, Implementierung steht aus |
| Testing | 🟢 | separate Testwelt als Regel |
| Changelog | 🟢 | wird ab jetzt geführt |

## Ressourcen-Reconciliation Phase 2

🟢 **Tag-Struktur der wichtigsten Metallfamilien verifiziert.**

Festgestellt:
- gemeinsame Vanilla-Basen für Iron/Copper/Gold,
- doppelte Registry-Repräsentationen bei Lead/Uranium/Steel,
- mod-spezifische Ursprünge für Silver/Tin/Aluminum/Osmium/Nickel,
- gemeinsame Alloy-Systeme für Bronze/Constantan/Electrum,
- Tinkers nutzt die gemeinsamen Forge-Tags intensiv.

🟡 Bronze-Ausgabe und konkrete Runtime-Auflösung von Tag-basierten Outputs müssen in der Testwelt geprüft werden.

🟡 Exakte Yield-/Energie-/Zeit-Balance folgt erst nach Abschluss der sekundären Ressourcenfamilien.

## 2026-10-07 — Sekundäre Ressourcenfamilien reconciled

🟢 Sekundäre Ressourcenfamilien sind auf Registry-/Tag-/Rezept-Ebene vorläufig reconciled: AE2, Botania/MythicBotany, Blood Magic/Blood-Smeltery, Tinkers-Sondermetalle und Twilight Forest.
🟢 Kanonische Quellen und Cross-Mod-Schnittstellen dokumentiert.
🟡 Worldgen, tatsächliche Erzverteilung, Mengenverhältnisse und Progressionskosten sind noch nicht final.
🔵 Feinabstimmung der KubeJS-Rezepte folgt erst nach Abschluss der Ressourcen-/Worldgen-Matrix.

## 2026-10-07 — Ore-/Worldgen-Reconciliation Phase 3

🟢 Twilight Forest Worldgen wurde direkt aus den JAR-Definitionen verifiziert.
🟢 Twilight Forest besitzt eigene Vanilla-Erzverteilung für Kohle, Eisen, Kupfer, Gold, Lapis, Redstone und Diamant.
🟢 Tinkers Cobalt ist als Nether-Ressource bestätigt; Slime-Islands sind eigene dimensionsgebundene Worldgen-Strukturen.
🟢 AE2-Meteoriten sind als separate Worldgen-/Strukturressource bestätigt.
🟡 Konzept beschlossen: seltene Industrieerze können als zusätzliche bzw. bevorzugte Quellen in Twilight Forest genutzt werden.
🔵 Exakte IE-/Mekanism-Spawnparameter müssen in einer laufenden Testinstanz vermessen werden.


### Aktualisierung — 2026-10-07

🟢 **Phase 3 finalisiert:** Die Erz-/Worldgen-Matrix in `03_ERZGENERATION.md` ist verbindlich. Technische Parameter wie Y-Level, Vein Sizes und Spawn-Chancen bleiben bewusst für die spätere Ausarbeitung offen.
