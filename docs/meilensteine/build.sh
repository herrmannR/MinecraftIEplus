#!/usr/bin/env bash
# Baut meilensteine.html aus template.html + data.js (alles in diesem Ordner).
# Danach meilensteine.html an dieselbe Artifact-URL veröffentlichen (siehe README.md).
set -euo pipefail
cd "$(dirname "$0")"
awk '/\/\*DATA\*\//{while((getline l < "data.js")>0) print l; next} {print}' template.html > meilensteine.html
echo "meilensteine.html gebaut ($(wc -c < meilensteine.html) Bytes)"
