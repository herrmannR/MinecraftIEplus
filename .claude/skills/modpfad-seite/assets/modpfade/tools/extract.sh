#!/usr/bin/env bash
# Entpackt Mod-JARs (ohne .class) in einen Arbeitsordner, je JAR ein Unterordner, und legt die Liste der
# installierten Mod-IDs an. Der Arbeitsordner ist danach der JARS-Ordner für mkicons.sh und die Werkzeuge.
#
# Aufruf: bash extract.sh <mods-Ordner der Instanz> <Arbeitsordner> <kürzel>=<Teil des JAR-Namens> ...
# Beispiel: bash extract.sh ".../instances/Minecraft1201withForge/mods" /tmp/jars mek=Mekanism-1.20.1 mekgen=MekanismGenerators
#
# Zusätzlich, einmal je Arbeitsordner:
#   VANILLA=<pfad zu client-1.20.1.jar> bash extract.sh ...   entpackt Vanilla-Texturen und -Sprachdatei nach <Arbeitsordner>/mc
#
# Der Instanzordner wird nur gelesen.
set -euo pipefail
mods="$1"; work="$2"; shift 2
mkdir -p "$work"
for pair in "$@"; do
  key="${pair%%=*}"; pattern="${pair#*=}"
  jar=$(ls "$mods" | awk -v p="$pattern" 'tolower($0) ~ /\.jar$/ && index(tolower($0), tolower(p)) {print; exit}')
  if [ -z "$jar" ]; then echo "FEHLT: kein JAR passend zu '$pattern'"; continue; fi
  mkdir -p "$work/$key"
  unzip -qo "$mods/$jar" -x '*.class' -d "$work/$key" 2>/dev/null || true
  echo "$key <- $jar ($(find "$work/$key" -type f | wc -l) Dateien)"
done
if [ -n "${VANILLA:-}" ]; then
  mkdir -p "$work/mc"
  unzip -qo "$VANILLA" 'assets/minecraft/textures/block/*' 'assets/minecraft/textures/item/*' 'assets/minecraft/lang/en_us.json' -d "$work/mc"
  echo "mc <- $(basename "$VANILLA")"
fi
# Mod-IDs nur aus dem [[mods]]-Teil lesen: die Abhängigkeiten darunter nennen auch Mods, die nicht installiert sind.
for j in "$mods"/*.jar; do
  unzip -p "$j" META-INF/mods.toml 2>/dev/null | awk '/^\s*\[\[dependencies/{exit} /^\s*modId\s*=/{gsub(/.*=\s*"/,""); gsub(/".*/,""); print}'
done | sort -u > "$work/modids.txt"
echo "modids.txt: $(wc -l < "$work/modids.txt") installierte Mod-IDs"
