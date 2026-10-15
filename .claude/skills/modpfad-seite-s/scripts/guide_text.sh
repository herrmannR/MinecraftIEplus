#!/usr/bin/env bash
# Text einer GuideME-Seite ohne Frontmatter, 3D-Szenen und Markup; ItemLinks werden zu ihrer ID.
# Aufruf: bash guide_text.sh <datei.md> [max_zeilen (0 = alle)] [grep-muster, z. B. '[0-9]' für Zahlen]
set -euo pipefail
f="$1"; n="${2:-0}"; pat="${3:-.}"
awk '/^<GameScene/{s=1} s&&/<\/GameScene>/{s=0;next} !s' "$f" | sed '1,/^---$/d' \
  | grep -v -E '^\s*<|^\s*$|^\s*- [a-z0-9_]+:' \
  | sed -E 's/<ItemLink id="([^"]*)" *\/>/\1/g; s/\[([^]]*)\]\([^)]*\)/\1/g; s/<[^>]*>//g' \
  | grep -E -- "$pat" | { if [ "$n" -gt 0 ]; then head -n "$n"; else cat; fi; } | cut -c1-300
