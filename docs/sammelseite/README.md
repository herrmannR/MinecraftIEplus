# Sammelseite „IE+ Handbuch“

Live: https://claude.ai/artifact/9CTNkTGyHWCCL3j9gapuEc (privat)

Ein einziges Artifact mit allen Seiten: Modpfade-Übersicht, jede Mod-Seite, Erzatlas und Meilensteinkarte.
Sie ist für das Handy gedacht. Links auf andere Artifacts öffnet die Claude-App im Browser, deshalb bleiben hier
alle Seiten in einem Artifact und wechseln im selben Fenster.

## Aufbau

- `shell.html` → `out/start.html`: Rahmen mit einem iframe. Alle Unterseiten stecken als Textblöcke in `start.html`
  (`<script type="text/plain" id="page-NAME">`, schließende Script-Tags und `<!--` maskiert); der Rahmen zeigt sie als `srcdoc`.
  Nachladen per `fetch` geht nicht: Die Claude-App auf dem Handy antwortet mit 403.
  Der Seitenname steht im `#hash`, damit die Zurück-Taste funktioniert.
- `nav.html` wird an jede Unterseite angehängt. Es meldet Klicks auf `<name>.html`-Links per `postMessage` an den Rahmen.
  Direkt in das Dokument der Unterseite greifen kann der Rahmen im Artifact nicht. Außerdem übernimmt es das Farbschema.
- Unterseiten bekommen zusätzlich den Knopf „← Übersicht“. Die Übersicht verweist relativ auf die Unterseiten;
  `build.sh` ersetzt dafür die Artifact-URLs.

## Aktualisieren

Nur auf ausdrücklichen Befehl des Users (das Neubauen kostet Nutzungslimit), nicht automatisch nach jeder Änderung an einer Einzelseite:

1. die Einzelseite wie gewohnt bauen und an ihre eigene URL veröffentlichen
2. `bash docs/sammelseite/build.sh`
3. nur `out/start.html` an die Sammelseiten-URL veröffentlichen (enthält alles, rund 4,7 MB; Grenze 16 MB)

Neue Mod-Seite: in `build.sh` die URL→Datei-Zeile in `sub_links` und den Dateinamen in der `for`-Liste ergänzen,
in `shell.html` den Namen in `PAGES` aufnehmen.

## Testen

`.claude/launch.json` → Server „sammelseite“ (jwebserver auf `out/`, Port 8765), dann `http://localhost:8765/start.html`.
Im Browser-Fenster von Claude erreichen Mausklicks die verschachtelte Seite auf claude.ai nicht. Dort mit Tab und Enter testen.
