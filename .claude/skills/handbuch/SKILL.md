---
name: handbuch
description: Baut das IE+ Handbuch (Sammelseite) aus den fertigen Einzelseiten neu und veröffentlicht es an seine feste URL – mit möglichst wenig Tokens, ohne Dateien zu lesen. Nur verwenden, wenn der User /handbuch aufruft oder ausdrücklich verlangt, das Handbuch bzw. die Sammelseite neu zu bauen oder zu aktualisieren. Nie automatisch nach Änderungen an Einzelseiten.
---

# Handbuch neu bauen (sparsam)

Das Handbuch klebt nur die fertigen Einzelseiten zusammen. Es ist nichts zu prüfen, zu lesen oder zu gestalten.

## Ablauf: genau zwei Schritte

1. Bauen:
   ```bash
   bash docs/sammelseite/build.sh
   ```
   Die Ausgabe ist eine Zeile `start.html: N Bytes`. Bricht das Skript mit Fehler ab, die Fehlermeldung dem User melden und aufhören. Nicht selbst auf Fehlersuche gehen.

2. Veröffentlichen: Artifact-Tool, `action: publish`,
   - `file_path`: `docs/sammelseite/out/start.html`
   - `url`: `https://claude.ai/artifact/9CTNkTGyHWCCL3j9gapuEc`
   - kein `icon`, kein `files` (alle Unterseiten stecken in start.html; Nebendateien liefern in der Handy-App 403)

   Wird das Veröffentlichen abgelehnt, weil diese Sitzung das Artifact noch nicht gelesen hat, die Ablehnung als gelesen werten und **dieselbe Datei** noch einmal veröffentlichen. Die Seite wird vollständig aus `build.sh` erzeugt, es gibt nichts zusammenzuführen.

Danach in einem Satz melden: veröffentlicht, Größe in MB.

## Nicht tun

- `start.html`, die Unterseiten oder andere Dateien nicht lesen oder öffnen. Die Datei hat das Skript erzeugt, das Tool lädt sie direkt von der Festplatte hoch.
- Keine Einzelseiten neu bauen, keine anderen Skills laden (auch nicht artifact-design) und nicht im Browser testen.
- Nichts committen, außer der User verlangt es.

## Neue Mod-Seite fehlt im Handbuch?

Nur wenn der User das sagt: in `docs/sammelseite/build.sh` die URL→Datei-Zeile in `sub_links` und den Namen in der `for`-Liste ergänzen, in `docs/sammelseite/shell.html` den Namen in `PAGES` aufnehmen (siehe `docs/sammelseite/README.md`). Dann die beiden Schritte oben.
