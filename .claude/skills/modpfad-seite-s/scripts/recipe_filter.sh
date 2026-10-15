#!/usr/bin/env bash
# Filtert eine RecipeDump-Ausgabe auf die Schlüsselrezepte: ohne Farbvarianten, Stufen/Treppen/Mauern,
# Facades, Steinmetz- und Deko-Ordner; kürzt Typ-Präfixe und lange Zeilen.
# Aufruf: bash recipe_filter.sh rez.txt [zusätzliches Ausschluss-Muster]
set -euo pipefail
C='(white|orange|magenta|light_blue|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)'
extra="${2:-^$}"
grep -v -E "^(block_cutter|decorative|stonecutting|stonecutter)/" "$1" \
  | grep -v -E "^[^:]*(/|_)${C}(_[a-z_]*)?:|^[^:]*_${C}:" \
  | grep -v -E '^[^:]*(slab|stairs|wall|facade|paint_?ball)[^:]*:' \
  | grep -v -E -- "$extra" \
  | sed -E 's/\(minecraft:crafting_shap(ed|eless)\) //; s/, experience=[0-9.]+//; s/\{item=([^}]*)\}/\1/g' \
  | cut -c1-220
