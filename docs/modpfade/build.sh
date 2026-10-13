#!/usr/bin/env bash
# Baut je Mod eine Seite <mod>.html aus template.html + <mod>/icons.js + <mod>/data.js.
# Aufruf: bash build.sh            (alle Mods)
#         bash build.sh tinkers    (nur einer)
# Danach die HTML-Datei an die Artifact-URL des Mods veröffentlichen (siehe README.md).
set -euo pipefail
cd "$(dirname "$0")"
mods=("$@"); [ ${#mods[@]} -eq 0 ] && mods=($(ls -d */ | tr -d / | grep -v '^tools$'))
for m in "${mods[@]}"; do
  title=$(grep -oE 'pageTitle: *"[^"]+"' "$m/data.js" | sed -E 's/pageTitle: *"//; s/"$//')
  awk -v dir="$m" -v title="$title" '
    /\/\*ICONS\*\//{while((getline l < (dir "/icons.js"))>0) print l; while((getline l < (dir "/modifiers.js"))>0) print l; next}
    /\/\*PAGE\*\//{while((getline l < (dir "/data.js"))>0) print l; next}
    {sub(/\/\*TITLE\*\//, title); print}' template.html > "$m.html"
  echo "$m.html gebaut ($(wc -c < "$m.html") Bytes)"
done
