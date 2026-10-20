"""Erzeugt die Loot-Overrides für die Vereinheitlichung Kaleidoscope / Farmer's Delight.

Aufruf (aus dem Projektordner):
    python tools/kaleidoscope_loot.py

Liest die Tabelle ERSETZEN aus kubejs/server_scripts/crossmod/kaleidoscope_einheitlich.js,
sucht in den Mod-JARs der 1.20.1-Testinstanz alle Loot-Tabellen und Loot-Modifier, die ein
Verlierer-Item nennen, und schreibt eine Kopie mit dem Gewinner nach kubejs/data/.
Ersetzt werden nur Item-Angaben (Einträge vom Typ item, Schlüssel "item"/"items"),
nie Block-IDs in Bedingungen (der Reis-Block heißt wie das Reis-Item).
Nach jedem Mod-Update neu laufen lassen und den Diff ansehen.
"""
import json
import re
import zipfile
from pathlib import Path

PROJEKT = Path(__file__).resolve().parent.parent
INSTANZ = Path.home() / "AppData/Roaming/ATLauncher/instances/Minecraft1201withForge"
SKRIPT = PROJEKT / "kubejs/server_scripts/crossmod/kaleidoscope_einheitlich.js"
ZIEL = PROJEKT / "kubejs/data"


def lies_tabelle():
    text = SKRIPT.read_text(encoding="utf-8")
    block = text.split("// ERSETZEN-ANFANG")[1].split("// ERSETZEN-ENDE")[0]
    tabelle = {}
    for zeile in block.splitlines():
        m = re.match(r"\s*'([a-z0-9_]+:[a-z0-9_/]+)':\s*'([a-z0-9_]+:[a-z0-9_/]+)'", zeile)
        if m:
            tabelle[m.group(1)] = m.group(2)
    return tabelle  # Listen-Einträge (Sashimi) kommen in Loot nicht vor


def ersetze(knoten, tabelle, geaendert):
    if isinstance(knoten, list):
        return [ersetze(k, tabelle, geaendert) for k in knoten]
    if isinstance(knoten, dict):
        neu = {}
        for k, v in knoten.items():
            ist_item_eintrag = k == "name" and str(knoten.get("type", "")).endswith("item")
            if (ist_item_eintrag or k == "item") and isinstance(v, str) and v in tabelle:
                neu[k] = tabelle[v]
                geaendert.append(v)
            elif k == "items" and isinstance(v, list):
                neu[k] = [tabelle.get(i, i) if isinstance(i, str) else i for i in v]
                geaendert.extend(i for i in v if isinstance(i, str) and i in tabelle)
            elif k == "block":
                neu[k] = v
            else:
                neu[k] = ersetze(v, tabelle, geaendert)
        return neu
    return knoten


def main():
    tabelle = lies_tabelle()
    print(f"{len(tabelle)} Zuordnungen aus {SKRIPT.name}")
    muster = re.compile('"(' + "|".join(re.escape(v) for v in tabelle) + ')"')
    geschrieben = 0
    for jar in sorted((INSTANZ / "mods").glob("*.jar")):
        try:
            z = zipfile.ZipFile(jar)
        except zipfile.BadZipFile:
            continue
        for name in z.namelist():
            teile = name.split("/")
            if len(teile) < 4 or teile[0] != "data" or not name.endswith(".json"):
                continue
            if teile[2] not in ("loot_tables", "loot_modifiers"):
                continue
            text = z.read(name).decode("utf-8", "ignore")
            if not muster.search(text):
                continue
            geaendert = []
            neu = ersetze(json.loads(text), tabelle, geaendert)
            if not geaendert:
                print(f"  nur Block-IDs, übersprungen: {name}")
                continue
            ziel = ZIEL / Path(*teile[1:])
            ziel.parent.mkdir(parents=True, exist_ok=True)
            with open(ziel, "w", encoding="utf-8", newline="\n") as f:
                json.dump(neu, f, indent=2, ensure_ascii=False)
                f.write("\n")
            geschrieben += 1
            print(f"  {jar.name[:28]:28} {name}  ({', '.join(sorted(set(geaendert)))})")
    print(f"{geschrieben} Dateien nach {ZIEL.relative_to(PROJEKT)} geschrieben")


if __name__ == "__main__":
    main()
