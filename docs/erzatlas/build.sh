#!/usr/bin/env bash
# Baut erzatlas.html aus template.html + icons.js + data.js (alles in diesem Ordner).
# Danach erzatlas.html als Artifact neu veröffentlichen (gleiche URL, siehe README.md).
set -euo pipefail
cd "$(dirname "$0")"
awk '/\/\*ICONS\*\//{while((getline l < "icons.js")>0) print l; next}
     /\/\*GROUPS\*\//{while((getline l < "data.js")>0) print l; next} {print}' template.html > erzatlas.html
echo "erzatlas.html gebaut ($(wc -c < erzatlas.html) Bytes)"
