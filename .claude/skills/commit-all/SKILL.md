---
name: commit-all
description: Committet alle Änderungen im Arbeitsbaum (auch die anderer Sessions) in einem Commit auf dem aktuellen Branch und fasst ganz knapp zusammen, was drin ist. Nur verwenden, wenn der User /commit-all aufruft oder ausdrücklich „commite alles“ sagt.
---

# Alles committen

Ziel: ein Commit mit allem, was im Arbeitsbaum liegt, und eine Antwort von zwei bis vier Zeilen. Wenig Tokens: keine Dateien lesen außer den Diffs, die man für die Nachricht braucht.

## Ablauf

1. **Stand ansehen** (ein Aufruf):
   ```bash
   git status --short && git diff --stat && git log --oneline -3
   ```
   Ist nichts geändert: „Nichts zu committen.“ und Ende.

2. **Verstehen, was drin ist.** Bei Dateien aus dieser Session weißt du es schon. Fremde Änderungen (andere Sessions, der User) nur knapp ansehen: neue Dateien per Name, geänderte per `git diff <datei> | head -40`. Der neueste Eintrag in `docs/12_CHANGELOG.md` (`git diff docs/12_CHANGELOG.md`) sagt meist schon alles.

3. **Committen**, alles in einem Commit auf dem aktuellen Branch (im Projekt `master`), ohne Rückfrage:
   ```bash
   git add -A && git commit -q -F - <<'EOF'
   <Betreff>

   <optional 1–3 Zeilen Erklärung>

   Co-Authored-By: <Attribution laut System-Hinweis>
   EOF
   git log --oneline -1 && git status --short
   ```
   - Betreff deutsch, kurz, im Stil von `git log` (z. B. „Questtexte für Blue Skies und Blood Magic, BS3/BS4 umbenannt“). Mehrere Themen mit Komma oder „und“.
   - Nie pushen, nie `--no-verify`, nie amend. Schlägt ein Hook fehl: Ursache melden, nicht umgehen.
   - Sieht etwas nach Geheimnis oder Müll aus (Zugangsdaten, `.env`, große Binärdateien, Scratch-Dateien): nicht committen, sondern nachfragen.

4. **Antwort an den User**, ganz knapp:
   - Commit-Hash und Branch, „nicht gepusht“.
   - Je Thema eine Zeile, was drin ist. Fremde Änderungen als solche nennen („aus einer anderen Session: …“).
   - Keine Dateilisten, keine Wiederholung der Commit-Nachricht.
