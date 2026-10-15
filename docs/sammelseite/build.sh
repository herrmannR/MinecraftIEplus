#!/usr/bin/env bash
# Baut die Sammelseite: Modpfade-Übersicht + alle Mod-Seiten + Erzatlas + Meilensteinkarte
# als EIN Artifact mit mehreren Seiten. Links zwischen den Seiten sind relativ, damit sie
# in der Claude-App im selben Fenster bleiben (Links auf andere Artifacts öffnen den Browser).
# Aufruf: bash build.sh  (nach den einzelnen build.sh in modpfade/, erzatlas/, meilensteine/)
# Danach out/start.html mit files = alle übrigen out/*.html an die Sammelseiten-URL veröffentlichen (README.md).
set -euo pipefail
cd "$(dirname "$0")"
rm -rf out; mkdir out

head='<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
# Zurück-Knopf für Unterseiten; nutzt die Farb-Tokens der jeweiligen Seite
back='<style>.hub-back{position:fixed;left:12px;bottom:12px;z-index:50;padding:8px 14px;border-radius:999px;background:var(--panel);color:var(--fg);border:1px solid var(--line);font:600 14px var(--f-body,system-ui);text-decoration:none;box-shadow:0 2px 10px rgba(0,0,0,.25)}</style><a class="hub-back" href="uebersicht.html">← Übersicht</a>'
nav=$(cat nav.html)

# Übersicht: Artifact-URLs der Einzelseiten durch relative Pfade ersetzen
sub_links() {
  sed -E \
    -e 's#https://claude.ai/artifact/TYsNjvC9iqYNyAMW8Dy78y#tinkers.html#g' \
    -e 's#https://claude.ai/artifact/5ND4jUMzFawrQBFv1Htzr6#ie.html#g' \
    -e 's#https://claude.ai/artifact/3tPaBDHNUfvyPoNjbb2TCw#botania.html#g' \
    -e 's#https://claude.ai/artifact/NDtR89BAXYtyGRHu4tsHMd#mekanism.html#g' \
    -e 's#https://claude.ai/artifact/LDzmRVfRoZREd6nfYoCyQm#adastra.html#g' \
    -e 's#https://claude.ai/artifact/SrPJwSsAAdwZvaUm2MF3iN#swplanets.html#g' \
    -e 's#https://claude.ai/artifact/18k191oT3stvg7zEjZJsHx#swgc.html#g' \
    -e 's#https://claude.ai/artifact/LBPGVvAY4w5kV4Mx6KzBjc#bloodmagic.html#g' \
    -e 's#https://claude.ai/artifact/JoCxMWugDJXsXTJxFFyrwN#rld.html#g' \
    -e 's#https://claude.ai/artifact/EGPb1ZNHD7gCtHSELecFhN#ae2.html#g' \
    -e 's#https://claude.ai/artifact/GAjru1A7JmbqwXNhfBumJt#blue_skies.html#g' \
    -e 's#https://claude.ai/artifact/LWwdvCpXRwaHCa8NstSc4g#erzatlas.html#g' \
    -e 's#https://claude.ai/artifact/Hdy6LMxESx5CJ9omjkAMEX#meilensteine.html#g'
}

# Startseite = Rahmen (shell.html), der die eingebetteten Unterseiten anzeigt. Echte Seitenwechsel
# fängt die Claude-App ab und öffnet sie im Browser, deshalb lädt der Rahmen selbst nach.
cp shell.html out/start.html
{ echo "$head"; sub_links < ../modpfade/uebersicht.html; echo "$nav"; } > out/uebersicht.html

for f in ../modpfade/{tinkers,ie,botania,mekanism,adastra,swplanets,swgc,bloodmagic,rld,ae2,blue_skies}.html ../erzatlas/erzatlas.html ../meilensteine/meilensteine.html; do
  n=$(basename "$f")
  { echo "$head"; cat "$f"; echo "$back"; echo "$nav"; } > "out/$n"
done

# Alle Unterseiten als Textblöcke in die Startseite; </script und <!-- maskieren (shell.html macht es rückgängig)
for f in out/*.html; do
  n=$(basename "$f" .html); [ "$n" = start ] && continue
  grep -q 'HUBSCRIPT\|HUBCOMMENT' "$f" && { echo "Maskier-Kennung kommt in $f vor" >&2; exit 1; }
  echo "<script type=\"text/plain\" id=\"page-$n\">"
  sed -e 's#</script#</HUBSCRIPT#g' -e 's#<!--#<HUBCOMMENT#g' "$f"
  echo '</script>'
done >> out/start.html
sed -n '/^<script type="text\/plain" id="page-/,$p' out/start.html | grep -v '^</script>$' | grep -qi '</script' && { echo "unmaskiertes </script in start.html" >&2; exit 1; }
echo "start.html: $(wc -c < out/start.html) Bytes"
