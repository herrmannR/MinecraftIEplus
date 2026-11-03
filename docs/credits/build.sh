#!/usr/bin/env bash
# Baut credits.html: erst data.js aus Questbüchern und Handelstabellen (daten.py), dann template.html + data.js.
# Danach credits.html an dieselbe Artifact-URL veröffentlichen (siehe README.md).
set -euo pipefail
cd "$(dirname "$0")"
python daten.py
awk '/\/\*DATA\*\//{while((getline l < "data.js")>0) print l; next} {print}' template.html > credits.html
echo "credits.html gebaut ($(wc -c < credits.html) Bytes)"
