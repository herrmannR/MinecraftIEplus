#!/usr/bin/env bash
# Erzeugt <mod>/icons.js aus den Bild-Verweisen in <mod>/data.js.
# Braucht die entpackten Mod-JARs (ohne .class) in einem Ordner, je JAR ein Unterordner,
# dazu die Vanilla-Texturen aus client-1.20.1.jar. Pfad über JARS=... angeben.
# Aufruf: JARS=/pfad/zu/jars bash mkicons.sh tinkers
set -euo pipefail
cd "$(dirname "$0")"
: "${JARS:?JARS=<Ordner mit entpackten JARs> angeben}"
for m in "$@"; do java tools/IconTool.java "$m/data.js" "$m/icons.js" "$JARS"; done
