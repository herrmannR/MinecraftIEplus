#!/usr/bin/env bash
# Eine Zeile je GuideME-Seite: Pfad ^Elternseite "Titel" #Position Item-IDs (Namespace-Präfix entfernt).
# Aufruf: bash guide_index.sh <ordner, z. B. $JARS/ae2/assets/ae2/ae2guide>
set -euo pipefail
cd "$1"
find . -name "*.md" | sort | xargs awk '
  FNR==1 { if (f) print out; f=FILENAME; out=f; fm=0 }
  /^---$/ { fm++; next }
  fm==1 && /parent:/   { out=out" ^"$2 }
  fm==1 && /title:/    { sub(/.*title: */,""); out=out" \""$0"\"" }
  fm==1 && /position:/ { out=out" #"$2 }
  fm==1 && /^ *- /     { gsub(/ *- */,""); out=out" "$0 }
  END { print out }' | sed -E 's/\b[a-z0-9_]+://g'
