---
name: remove-jei
description: Blendet im Modpack ein Item in der JEI-Ansicht aus (KubeJS-Client-Skript), ohne sein Rezept anzufassen. Verwenden, wenn der User /remove-jei oder /remove-JEI aufruft oder sagt, ein Item solle in JEI nicht mehr erscheinen. Wird außerdem vom Skill remove-recipe für jedes entfernte Item genutzt.
---

# Item in JEI ausblenden

Argumente: eine oder mehrere Item-IDs (`modid:name`) oder Item-Namen, optional ein Grund.

## Ablauf

1. **ID klären** wie in `remove-recipe` Schritt 1 (erst `docs/modpfade/<mod>/WISSEN.md`, dann `docs/*.md`, zuletzt die Sprachdatei im JAR). Bei Zweifel den User fragen.

2. **Eintragen** in `kubejs/client_scripts/jei_ausblenden.js`, in die Liste `ausgeblendet`, je Item eine Zeile `'modid:item',   // Grund (Datum)`. Passt das Item zu einer vorhandenen Gruppe (Kommentarzeile darüber), dort einsortieren, sonst ans Ende unter einen Kommentar mit dem Mod-Namen. Ist das Item schon in der Liste, nichts tun und das sagen.
   Ohne Grund vom User: `Wunsch des Users (JJJJ-MM-TT)`.

3. **Hinweis an den User**, falls das Item noch herstellbar ist: Ein ausgeblendetes Item mit Rezept ist im Spiel weiter baubar, nur unsichtbar. Fragen, ob auch das Rezept weg soll (dann Skill `remove-recipe`).

4. **Prüfen:** `python tools/kubejs_check.py kubejs/client_scripts/jei_ausblenden.js`. Syntaxfehler und `ID?` (meist Tippfehler in der ID) vor dem Kopieren beheben; `DUMP`-Zeilen heißen nur „ProbeJS-Dump veraltet, nicht prüfbar“.

5. **In die Testinstanz kopieren**, nur bei geschlossenem Spiel (Prüfbefehl unten ergibt 0; `tasklist` reicht nicht, weil der ATLauncher selbst als javaw läuft). Sonst nicht kopieren und dem User sagen, dass es nach dem Schließen folgt.
   ```bash
   # Spiel geschlossen? Muss 0 ausgeben:
   powershell -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \"Name='javaw.exe'\" | Where-Object { \$_.CommandLine -match 'Minecraft1201withForge' } | Measure-Object).Count"
   I="/c/Users/richa/AppData/Roaming/ATLauncher/instances/Minecraft1201withForge"
   cp kubejs/client_scripts/jei_ausblenden.js "$I/kubejs/client_scripts/"
   ```

6. **Dokumentieren:** eine Zeile in `docs/12_CHANGELOG.md`.

7. **Melden** in ein, zwei Sätzen. Wirkung erst nach einem Neustart des Spiels. Client-Skripte müssen später bei allen Spielern liegen, nicht nur beim Host.
