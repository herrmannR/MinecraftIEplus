---
name: remove-recipe
description: Entfernt im Modpack alle Rezepte, die ein bestimmtes Item herstellen, per KubeJS und blendet das Item zugleich in JEI aus. Verwenden, wenn der User /remove-recipe aufruft oder sagt, ein Item solle nicht mehr herstellbar sein bzw. sein Rezept solle weg (z. B. „entferne das Rezept von X“, „X soll man nicht craften können“).
---

# Rezept eines Items entfernen

Argumente: eine oder mehrere Item-IDs (`modid:name`) oder Item-Namen, optional ein Grund.

## Ablauf

1. **ID klären.** Steht nur ein Name da, die ID zuerst in `docs/modpfade/<mod>/WISSEN.md` suchen, dann in den übrigen `docs/*.md`. Erst wenn sie dort fehlt, im JAR der Testinstanz nachsehen (`…\ATLauncher\instances\Minecraft1201withForge\mods`, Datei `assets/<modid>/lang/en_us.json`). Bei mehreren Treffern oder Zweifel den User fragen, nicht raten.

2. **Grund klären.** Hat der User keinen Grund genannt, `Wunsch des Users (JJJJ-MM-TT)` eintragen.

3. **Eintragen** in `kubejs/server_scripts/entfernt/rezepte.js`. Gibt es die Datei nicht, mit diesem Gerüst anlegen:
   ```js
   // Items, die nicht mehr herstellbar sein sollen. Entfernt alle Rezepte, deren Ergebnis das Item ist
   // (Werkbank und Maschinen). Jedes Item steht auch in client_scripts/jei_ausblenden.js.
   // Angelegt über den Skill /remove-recipe. KubeJS 2001.

   ServerEvents.recipes(event => {
     const entfernt = [
       // 'modid:item',   // Grund (Datum)
     ]
     entfernt.forEach(id => event.remove({ output: id }))
   })
   ```
   Je Item eine Zeile `'modid:item',   // Grund (Datum)` in die Liste. Steht das Item schon dort oder in einem anderen Skript (`grep -r "modid:item" kubejs/`), nichts doppelt eintragen und das dem User sagen.

4. **In JEI ausblenden** wie im Skill `remove-jei` beschrieben (Vorgabe des Users: entfernte Items immer auch ausblenden). Nur weglassen, wenn der User ausdrücklich sagt, das Item solle sichtbar bleiben.

5. **Skripte prüfen:** `python tools/kubejs_check.py kubejs/server_scripts/entfernt/rezepte.js kubejs/client_scripts/jei_ausblenden.js`. Syntaxfehler und `ID?` (unbekannte ID, meist Tippfehler) vor dem Kopieren beheben. `DUMP`-Zeilen heißen nur „nicht prüfbar, ProbeJS-Dump veraltet“.

6. **Hinweis prüfen:** Wird das Item in anderen Rezepten als Zutat gebraucht, die bleiben sollen? Schnell prüfen mit der WISSEN.md des Mods; fehlt die Angabe, dem User als offene Frage melden, nicht selbst im JAR graben.

7. **In die Testinstanz kopieren**, aber nur bei geschlossenem Spiel. Prüfen mit dem Befehl unten (Ergebnis 0 = geschlossen; `tasklist` reicht nicht, weil der ATLauncher selbst als javaw läuft). Läuft das Spiel, nicht kopieren und dem User sagen, dass die Kopie nach dem Schließen folgt (das laufende Spiel kann Dateien beim Beenden überschreiben).
   ```bash
   # Spiel geschlossen? Muss 0 ausgeben:
   powershell -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \"Name='javaw.exe'\" | Where-Object { \$_.CommandLine -match 'Minecraft1201withForge' } | Measure-Object).Count"
   I="/c/Users/richa/AppData/Roaming/ATLauncher/instances/Minecraft1201withForge"
   mkdir -p "$I/kubejs/server_scripts/entfernt"
   cp kubejs/server_scripts/entfernt/rezepte.js "$I/kubejs/server_scripts/entfernt/"
   ```

8. **Dokumentieren:** eine Zeile in `docs/12_CHANGELOG.md` (Datum, Items, Grund). Betrifft es ein Thema mit eigenem Dokument (z. B. Raumfahrt), dort ebenfalls eine Zeile.

9. **Melden** in zwei, drei Sätzen: welche Items, wo eingetragen, ob kopiert. Wirkung: Rezepte nach `/reload` im Spiel, JEI-Ausblendung erst nach einem Neustart. Im Spiel ungetestet, bis der User es bestätigt.
