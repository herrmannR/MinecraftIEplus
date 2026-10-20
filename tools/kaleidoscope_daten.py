"""Erzeugt die Datapack-Dateien für Kaleidoscope ohne Dopplungen (Rezepte und Loot).

Aufruf (aus dem Projektordner):
    python tools/kaleidoscope_daten.py

Quelle der Zuordnung ist die Tabelle ERSETZEN in
kubejs/server_scripts/crossmod/kaleidoscope_einheitlich.js (das Skript selbst macht nur noch die Tags).
Das Werkzeug liest alle Rezepte, Loot-Tabellen und Loot-Modifier aus den Mod-JARs der 1.20.1-Testinstanz und schreibt:
  - Rezepte mit Verlierer-Items: Kopie mit dem Gewinner unter derselben ID nach kubejs/data/<ns>/recipes/...
    (überschreibt das Original). Wäre die Kopie doppelt oder fällt das Rezept ganz weg: Datei mit der
    Forge-Bedingung forge:false, das Spiel lädt das Rezept dann nicht.
  - alle Rezepte des Kaleidoscope-Bretts: forge:false.
  - neue Rezepte (Brett-Umzug, Rindfleisch, Umwandlung von Altbestand): kubejs/data/ieplus/recipes/einheitlich/...
  - Loot: Kopie mit Gewinnern; nur Item-Angaben, nie Block-IDs (der Reis-Block heißt wie das Reis-Item).
Warum Dateien statt KubeJS: event.custom läuft durch die Schemas der KubeJS-Addons, und die lehnen gültige
Rezepte ab (IE-Squeezer ohne Item-Ergebnis, Flüssigkeit als Tag; Test 65, 2026-10-20).
Die Liste der erzeugten Dateien steht in tools/kaleidoscope_daten.liste; ein neuer Lauf löscht sie zuerst.
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
LISTE = Path(__file__).with_suffix(".liste")

# Geräte: Rezepte, die sie herstellen, entfallen ersatzlos (der Gewinner hat sein eigenes Rezept).
GERAETE = {
    "farmersdelight:stove", "kaleidoscope_cookery:chopping_board", "kaleidoscope_cookery:straw_block",
    "farmersdelight:iron_knife", "farmersdelight:golden_knife", "farmersdelight:diamond_knife",
    "farmersdelight:netherite_knife",
}
# Entfallen ohne Ersatz: Kaleidoscope hat denselben Weg schon (Offline-Abgleich 2026-10-20) oder unten neu.
OHNE_ERSATZ = {
    "tmted:wheat_dough_from_egg",          # Kaleidoscope: Mehl + Wasser zu Teig
    "tmted:wheat_dough_from_waterbucket",
    "farmersdelight:tomato_seeds",         # Kaleidoscope: Tomate zu Tomatensamen
    "farmersdelight:cutting/beef",         # neu unten: Hackfleisch und Rindfleischwürfel
}
# Altbestand aus der Welt (nur Farmer's-Delight-Dinge, die es dort schon gab): 1:1 umwandeln.
UMWANDELN = [
    "farmersdelight:tomato", "farmersdelight:tomato_seeds", "farmersdelight:rice", "farmersdelight:rice_panicle",
    "farmersdelight:cooked_rice", "farmersdelight:fried_egg", "farmersdelight:wheat_dough",
    "farmersdelight:raw_pasta", "farmersdelight:onion", "farmersdelight:stove",
]
# Kaleidoscope-Brett -> Farmer's-Delight-Brett: nur Zutaten, die das FD-Brett noch nicht zerlegt.
# Huhn, Hammel, Schwein, Fisch und Teig zerlegt das FD-Brett selbst; Kaninchen und Tropenfisch entfallen.
SCHNEIDEN = {
    "gekochtes_rind": ({"item": "minecraft:cooked_beef"}, [{"item": "kaleidoscope_cookery:cooked_cow_offal", "count": 3}]),
    "gebratenes_schwein": ({"item": "minecraft:cooked_porkchop"}, [{"item": "farmersdelight:cooked_bacon", "count": 2}]),
    "chorus": ({"item": "minecraft:chorus_fruit"}, [{"item": "kaleidoscope_end:chorus_seed", "count": 2}]),
    "karotte": ({"item": "minecraft:carrot"}, [{"item": "kaleidoscope_grilling:carrot_dice", "count": 3}]),
    "kartoffel": ({"item": "minecraft:potato"}, [{"item": "kaleidoscope_grilling:potato_slice", "count": 3}]),
    "houttuynia": ({"tag": "kaleidoscope_grilling:ingredients/houttuynia"}, [{"item": "kaleidoscope_grilling:minced_houttuynia"}]),
    "mantou": ({"item": "kaleidoscope_cookery:mantou"}, [{"item": "kaleidoscope_grilling:raw_mantou_slice", "count": 3}]),
    "suesskartoffel": ({"item": "kaleidoscope_grilling:sweet_potato_powder"}, [{"item": "kaleidoscope_grilling:raw_sweet_potato_sheet"}]),
    # Grilling braucht seine Würfel (im Spieß-Code verdrahtet), Farmer's Delight sein Hackfleisch
    "rind": ({"item": "minecraft:beef"}, [{"item": "farmersdelight:minced_beef"}, {"item": "kaleidoscope_grilling:beef_chunks"}]),
}
KOCHTYPEN = {"minecraft:smelting", "minecraft:smoking", "minecraft:blasting", "minecraft:campfire_cooking"}
AUSGABE = {"result", "results", "output", "outputs", "mainOutput"}
UNWICHTIG = {"group", "category", "show_notification", "conditions", "experience", "cookingtime"}
NIE = [{"type": "forge:false"}]


def lies_tabelle():
    text = SKRIPT.read_text(encoding="utf-8")
    block = text.split("// ERSETZEN-ANFANG")[1].split("// ERSETZEN-ENDE")[0]
    tabelle = {}
    for zeile in block.splitlines():
        m = re.match(r"\s*'([a-z0-9_]+:[a-z0-9_/]+)':\s*(.+?),?\s*$", zeile)
        if not m:
            continue
        rechts = re.findall(r"'([a-z0-9_]+:[a-z0-9_/]+)'", m.group(2))
        tabelle[m.group(1)] = rechts if m.group(2).lstrip().startswith("[") else rechts[0]
    return tabelle


def ersetze(knoten, tabelle, nur_items=False):
    """Rezepte: jeder String = Verlierer wird ersetzt (außer unter block/tag). Loot (nur_items): nur Item-Angaben."""
    if isinstance(knoten, list):
        return [ersetze(k, tabelle, nur_items) for k in knoten]
    if isinstance(knoten, dict):
        if (not nur_items and set(knoten) <= {"item", "count"}
                and isinstance(tabelle.get(knoten.get("item")), list)):
            return [{"item": i} for i in tabelle[knoten["item"]]]
        neu = {}
        for k, v in knoten.items():
            if k in ("block", "tag"):
                neu[k] = v
            elif nur_items and isinstance(v, str):
                ist_item = k == "item" or (k == "name" and str(knoten.get("type", "")).endswith("item"))
                neu[k] = tabelle[v] if ist_item and isinstance(tabelle.get(v), str) else v
            elif nur_items and k == "items" and isinstance(v, list):
                neu[k] = [tabelle[i] if isinstance(tabelle.get(i), str) else i for i in v]
            else:
                neu[k] = ersetze(v, tabelle, nur_items)
        return neu
    if not nur_items and isinstance(knoten, str) and isinstance(tabelle.get(knoten), str):
        return tabelle[knoten]
    return knoten


def ausgaben(knoten, drin=False, liste=None):
    liste = [] if liste is None else liste
    if isinstance(knoten, list):
        for k in knoten:
            ausgaben(k, drin, liste)
    elif isinstance(knoten, dict):
        for k, v in knoten.items():
            if k not in ("block", "tag", "type"):
                ausgaben(v, drin or k in AUSGABE, liste)
    elif drin and isinstance(knoten, str):
        liste.append(knoten)
    return liste


def kanonisch(x):
    return json.dumps(x, sort_keys=True, separators=(",", ":"))


def schluessel(j):
    if j.get("type") in KOCHTYPEN:
        return j["type"] + "|" + kanonisch(j.get("ingredient"))
    return kanonisch({k: v for k, v in j.items() if k not in UNWICHTIG})


def nennt(text, ids):
    return any(f'"{i}"' in text for i in ids)


def schreibe(pfad, inhalt, geschrieben):
    pfad.parent.mkdir(parents=True, exist_ok=True)
    with open(pfad, "w", encoding="utf-8", newline="\n") as f:
        json.dump(inhalt, f, indent=2, ensure_ascii=False)
        f.write("\n")
    geschrieben.append(pfad.relative_to(PROJEKT).as_posix())


def main():
    tabelle = lies_tabelle()
    verlierer = list(tabelle)
    gewinner = sorted({g for v in tabelle.values() for g in ([v] if isinstance(v, str) else v)})
    print(f"{len(tabelle)} Zuordnungen aus {SKRIPT.name}")

    if LISTE.exists():  # alte Ausgabe entfernen
        for zeile in LISTE.read_text(encoding="utf-8").splitlines():
            p = PROJEKT / zeile
            if p.exists():
                p.unlink()

    rezepte, loot, herkunft, doppelte_ids = {}, {}, {}, {}
    for jar in sorted((INSTANZ / "mods").glob("*.jar")):
        try:
            z = zipfile.ZipFile(jar)
        except zipfile.BadZipFile:
            continue
        for name in z.namelist():
            teile = name.split("/")
            if len(teile) < 4 or teile[0] != "data" or not name.endswith(".json"):
                continue
            if teile[2] == "recipes":
                try:
                    j = json.loads(z.read(name))
                except ValueError:
                    continue
                if isinstance(j, dict):
                    rid = teile[1] + ":" + "/".join(teile[3:])[:-5]
                    if rid in herkunft and herkunft[rid] != jar.name:
                        doppelte_ids[rid] = f"{herkunft[rid]} / {jar.name}"
                    rezepte[rid], herkunft[rid] = j, jar.name
            elif teile[2] in ("loot_tables", "loot_modifiers"):
                loot[name] = z.read(name).decode("utf-8", "ignore")

    geschrieben = []
    def rezeptpfad(rid):
        ns, pfad = rid.split(":", 1)
        return ZIEL / ns / "recipes" / (pfad + ".json")

    # Bestehende Rezepte ohne Verlierer: Schlüssel für die Dublettenprüfung
    vorhanden, kandidaten = set(), []
    for rid, j in rezepte.items():
        text = json.dumps(j)
        if j.get("type") == "kaleidoscope_cookery:chopping_board":
            schreibe(rezeptpfad(rid), {"type": j["type"], "conditions": NIE}, geschrieben)
            continue
        if nennt(text, verlierer):
            kandidaten.append(rid)
        elif j.get("type") in KOCHTYPEN or nennt(text, gewinner):
            vorhanden.add(schluessel(j))

    for rid in sorted(set(kandidaten) & set(doppelte_ids)):
        print(f"  WARNUNG: Rezept-ID in zwei JARs, welche gilt, ist offen: {rid} ({doppelte_ids[rid]})")
    neu = doppelt = ersatzlos = 0
    for rid in sorted(kandidaten):
        j = rezepte[rid]
        if rid in OHNE_ERSATZ or any(a in GERAETE for a in ausgaben(j)):
            schreibe(rezeptpfad(rid), {"type": j["type"], "conditions": NIE}, geschrieben)
            ersatzlos += 1
            continue
        k = ersetze(j, tabelle)
        s = schluessel(k)
        if s in vorhanden:
            schreibe(rezeptpfad(rid), {"type": j["type"], "conditions": NIE}, geschrieben)
            doppelt += 1
            continue
        vorhanden.add(s)
        schreibe(rezeptpfad(rid), k, geschrieben)
        neu += 1

    eigene = ZIEL / "ieplus/recipes/einheitlich"
    for name, (zutat, ergebnis) in SCHNEIDEN.items():
        schreibe(eigene / "schneiden" / f"{name}.json", {
            "type": "farmersdelight:cutting", "ingredients": [zutat], "result": ergebnis,
            "tool": [{"type": "farmersdelight:tool_action", "action": "knife_dig"}, {"tag": "forge:tools/knives"}],
        }, geschrieben)
    for alt in UMWANDELN:
        schreibe(eigene / "umwandeln" / (alt.split(":")[1] + ".json"), {
            "type": "minecraft:crafting_shapeless", "category": "misc",
            "ingredients": [{"item": alt}], "result": {"item": tabelle[alt]},
        }, geschrieben)

    l = 0
    for name, text in sorted(loot.items()):
        if not nennt(text, [v for v in verlierer if isinstance(tabelle[v], str)]):
            continue
        alt = json.loads(text)
        k = ersetze(alt, tabelle, nur_items=True)
        if k == alt:
            continue
        schreibe(ZIEL / Path(*name.split("/")[1:]), k, geschrieben)
        l += 1

    LISTE.write_text("\n".join(sorted(geschrieben)) + "\n", encoding="utf-8", newline="\n")
    print(f"Rezepte: {len(kandidaten)} mit Verlierern, {neu} umgestellt, {doppelt} doppelt, {ersatzlos} ersatzlos; "
          f"{len(SCHNEIDEN)} Brett-Rezepte, {len(UMWANDELN)} Umwandlungen neu")
    print(f"Loot: {l} Dateien. Gesamt {len(geschrieben)} Dateien (Liste: {LISTE.name})")


if __name__ == "__main__":
    main()
