"""Prüft die KubeJS-Skripte des Packs, ohne Minecraft zu starten.

Aufruf (aus dem Projektordner):
    python tools/kubejs_check.py              # alle Skripte in kubejs/
    python tools/kubejs_check.py datei.js ... # nur diese Dateien
    python tools/kubejs_check.py --log        # zusätzlich KubeJS-Log der Testinstanz auswerten
    python tools/kubejs_check.py --nur-log    # nur das Log

Was geprüft wird:
  1. Syntax jeder Datei mit `node --check` (fehlende Klammern, Kommas ...).
  2. Sprachmittel, die Rhino (die JS-Engine von KubeJS) nicht kann.
  3. Jede ID in Anführungszeichen ('mod:name', '#mod:tag', '2x mod:name') gegen den
     ProbeJS-Dump der 1.20.1-Testinstanz: unbekannte IDs und nicht installierte Mods.
Eine ID, die absichtlich fehlt, mit `// check:ok` am Zeilenende von der Prüfung ausnehmen.
Exit-Code 1, wenn Fehler gefunden wurden (Warnungen allein: 0).
"""
import json
import re
import subprocess
import sys
from pathlib import Path

PROJEKT = Path(__file__).resolve().parent.parent
INSTANZ = Path.home() / "AppData/Roaming/ATLauncher/instances/Minecraft1201withForge"
GLOBALS = INSTANZ / "kubejs/probe/generated/globals.d.ts"
LOGS = INSTANZ / "logs/kubejs"

# Rhino in KubeJS 6 (1.20.1) kennt diese Sprachmittel nicht oder nur fehlerhaft.
RHINO_FALLEN = [
    (re.compile(r"\?\.(?!\d)"), "optional chaining '?.'"),
    (re.compile(r"\?\?"), "nullish '??'"),
    (re.compile(r"^\s*class\s+\w+", re.M), "class-Deklaration"),
    (re.compile(r"\basync\s+(function|\()"), "async"),
    (re.compile(r"\bawait\s"), "await"),
    (re.compile(r"^\s*(import|export)\s", re.M), "import/export"),
]

ID_RE = re.compile(r"^(#?)(?:\d+x\s+)?([a-z0-9_.-]+):([a-z0-9_./-]+)$")


# ---------------------------------------------------------------- ProbeJS-Index
def lade_index():
    """Liest alle `type X = "a" | "b"`-Listen aus globals.d.ts."""
    if not GLOBALS.exists():
        return None
    typen = {}
    zeile_re = re.compile(r'^\s*type (\w+) = (".*)$')
    with GLOBALS.open(encoding="utf-8") as f:
        for zeile in f:
            m = zeile_re.match(zeile)
            if m:
                typen[m.group(1)] = set(re.findall(r'"([^"]*)"', m.group(2)))
    tags, ids = set(), set()
    for name, werte in typen.items():
        if name.endswith("Tag"):
            tags |= werte
        elif name not in ("LangKey", "Mod"):
            ids |= werte
    return {"mods": typen.get("Mod", set()), "tags": tags, "ids": ids}


def dump_veraltet():
    if not GLOBALS.exists():
        return False
    dump = GLOBALS.stat().st_mtime
    mods = [p.stat().st_mtime for p in (INSTANZ / "mods").glob("*.jar")]
    return bool(mods) and max(mods) > dump


def installierte_mods():
    """Mod-IDs aus META-INF/mods.toml aller JARs der Testinstanz."""
    import zipfile
    ids = set()
    for jar in (INSTANZ / "mods").glob("*.jar"):
        try:
            with zipfile.ZipFile(jar) as z:
                toml = z.read("META-INF/mods.toml").decode("utf-8", "replace")
        except (KeyError, zipfile.BadZipFile, OSError):
            continue
        # nur [[mods]]-Abschnitte, nicht [[dependencies.x]] (dort steht auch modId)
        for abschnitt in re.split(r"^\s*\[", toml, flags=re.M):
            if abschnitt.startswith("[mods]]"):
                ids.update(re.findall(r'^\s*modId\s*=\s*"([^"]+)"', abschnitt, re.M))
    return ids


# ---------------------------------------------------------------- Tokenizer
def strings_im_code(text):
    """Liefert (zeile, inhalt) für jedes String-Literal, Kommentare werden übersprungen."""
    i, n, zeile = 0, len(text), 1
    while i < n:
        c = text[i]
        if c == "\n":
            zeile += 1
        elif text.startswith("//", i):
            j = text.find("\n", i)
            i = n if j < 0 else j
            continue
        elif text.startswith("/*", i):
            j = text.find("*/", i + 2)
            j = n if j < 0 else j + 2
            zeile += text.count("\n", i, j)
            i = j
            continue
        elif c in "'\"`":
            start, j = zeile, i + 1
            while j < n and text[j] != c:
                if text[j] == "\\":
                    j += 1
                elif text[j] == "\n":
                    zeile += 1
                j += 1
            yield start, text[i + 1 : j], text[max(0, i - 10) : i], text[j + 1 : j + 3]
            i = j + 1
            continue
        i += 1


def selbst_definiert(dateien):
    """IDs und Tags, die unsere eigenen Skripte erst anlegen."""
    ids, tags = set(), set()
    for d in dateien:
        t = d.read_text(encoding="utf-8", errors="replace")
        for m in re.finditer(r"\.create\(\s*['\"]([a-z0-9_:./-]+)['\"]", t):
            name = m.group(1) if ":" in m.group(1) else "kubejs:" + m.group(1)
            ids.update({name, name + "_bucket", name.replace(":", ":block/"), name.replace(":", ":item/")})
        for m in re.finditer(r"\.(?:add|removeAll|remove|get)\(\s*['\"]#?([a-z0-9_.-]+:[a-z0-9_./-]+)['\"]", t):
            tags.add(m.group(1))
        for m in re.finditer(r"\.id\(\s*['\"]([a-z0-9_.-]+:[a-z0-9_./-]+)['\"]", t):
            ids.add(m.group(1))
    # Bücher im Ordner patchouli_books/ der Instanz heißen patchouli:<ordner>
    pb = PROJEKT / "patchouli_books"
    if pb.exists():
        ids.update(f"patchouli:{p.name}" for p in pb.iterdir() if p.is_dir())
    # Dateien aus kubejs/data und kubejs/assets: Tags, Patchouli-Bücher, Texturen
    for wurzel in ("data", "assets"):
        basis = PROJEKT / "kubejs" / wurzel
        for p in basis.rglob("*") if basis.exists() else []:
            if not p.is_file():
                continue
            teile = p.relative_to(basis).with_suffix("").parts
            if len(teile) < 3:
                continue
            ns, art, rest = teile[0], teile[1], teile[2:]
            if art == "tags" and len(rest) >= 2:
                tags.add(f"{ns}:{'/'.join(rest[1:])}")
            elif art == "patchouli_books":
                ids.add(f"{ns}:{rest[0]}")
            elif art == "textures":
                ids.add(f"{ns}:{'/'.join(rest)}")
    return ids, tags


# ---------------------------------------------------------------- Prüfungen
def pruefe_syntax(datei):
    r = subprocess.run(["node", "--check", str(datei)], capture_output=True, text=True, encoding="utf-8")
    if r.returncode == 0:
        return []
    zeilen = [z for z in r.stderr.splitlines() if z.strip() and not z.startswith("Node.js")]
    return ["SYNTAX  " + " | ".join(zeilen[:5])]


def pruefe_rhino(text):
    funde = []
    for muster, name in RHINO_FALLEN:
        for m in muster.finditer(text):
            zeile = text.count("\n", 0, m.start()) + 1
            funde.append(f"Z.{zeile:<4} RHINO   {name} – läuft in KubeJS evtl. nicht")
    return funde


def pruefe_ids(text, index, eigene_ids, eigene_tags, jar_mods):
    funde, ungeprueft = [], {}
    # Zeilen mit dem Kommentar `check:ok` nennen absichtlich fehlende IDs (z. B. Tag-Reparaturen)
    ok_zeilen = {i + 1 for i, z in enumerate(text.splitlines()) if "check:ok" in z}
    for zeile, s, davor, danach in strings_im_code(text):
        if zeile in ok_zeilen:
            continue
        m = ID_RE.match(s.strip())
        # .id('...') legt eine neue ID an, 'x:y': ist ein Objektschlüssel (NBT), 'x:y/' ein Präfix
        if not m or ".id(" in davor or danach.lstrip().startswith(":") or s.endswith("/"):
            continue
        ist_tag, ns, pfad = m.group(1), m.group(2), m.group(3)
        rid = f"{ns}:{pfad}"
        alle_tags = index["tags"] | eigene_tags
        if ist_tag:
            if rid in alle_tags:
                continue
            art = "TAG"
        else:
            # ohne '#' trotzdem ein Tag, z. B. { tag: 'forge:gasoline' } oder event.remove('forge:sand', ...)
            if rid in index["ids"] or rid in eigene_ids or rid in alle_tags:
                continue
            art = "ID"
        eigen = ns in ("minecraft", "forge", "c", "kubejs", "ieplus")
        if ns not in index["mods"] and not eigen:
            if ns in jar_mods:
                ungeprueft.setdefault(ns, []).append(zeile)
            else:
                funde.append(f"Z.{zeile:<4} MOD?    '{s}' – Mod '{ns}' ist nicht installiert")
        else:
            funde.append(f"Z.{zeile:<4} {art}?    '{s}' unbekannt")
    for ns, zeilen in ungeprueft.items():
        funde.append(f"        DUMP    {len(zeilen)} IDs von '{ns}' ungeprüft (Mod fehlt im ProbeJS-Dump)")
    return funde


def werte_log_aus():
    print("\n=== KubeJS-Log der Testinstanz ===")
    if not LOGS.exists():
        print("Kein Log gefunden:", LOGS)
        return
    for log in ("startup.log", "server.log", "client.log"):
        p = LOGS / log
        if not p.exists():
            continue
        zeilen = p.read_text(encoding="utf-8", errors="replace").splitlines()
        fremd = 0
        relevant = []
        for i, z in enumerate(zeilen):
            if "[ERROR]" not in z and "[WARN]" not in z:
                continue
            # Warnungen zu Mod-eigenen Rezepten, die KubeJS nur nicht parsen kann
            if "Failed to parse recipe" in z and "kubejs:" not in z:
                fremd += 1
                continue
            relevant.append(z)
            # Folgezeilen mit Stacktrace/Details kurz mitnehmen
            for f in zeilen[i + 1 : i + 3]:
                if f.startswith("[") and "]" in f[:12]:
                    break
                relevant.append("    " + f.strip()[:200])
        from datetime import datetime
        stand = datetime.fromtimestamp(p.stat().st_mtime).strftime("%d.%m. %H:%M")
        print(f"\n--- {log} (Stand {stand}): {len(relevant)} relevante Zeilen, {fremd} fremde Rezept-Warnungen ausgeblendet")
        for z in relevant[:60]:
            print(z[:300])
        if len(relevant) > 60:
            print(f"... und {len(relevant) - 60} weitere")


def main():
    args = sys.argv[1:]
    mit_log = "--log" in args
    nur_log = "--nur-log" in args
    args = [a for a in args if not a.startswith("--")]
    if nur_log:
        werte_log_aus()
        return 0

    alle = sorted((PROJEKT / "kubejs").rglob("*.js"))
    dateien = [Path(a).resolve() for a in args] if args else alle

    index = lade_index()
    if index is None:
        print("WARNUNG: kein ProbeJS-Dump gefunden – ID-Prüfung entfällt.")
    eigene_ids, eigene_tags = selbst_definiert(alle)
    jar_mods = installierte_mods() if index else set()
    if index:
        fehlend = sorted(jar_mods - index["mods"] - {"forge", "minecraft"})
        if fehlend:
            print(f"HINWEIS: {len(fehlend)} installierte Mods fehlen im ProbeJS-Dump"
                  f" ({', '.join(fehlend[:8])}{' …' if len(fehlend) > 8 else ''}).\n"
                  "  Abhilfe: Welt in der Testinstanz öffnen, `/probejs dump` eingeben.")

    fehler = warnungen = 0
    for d in dateien:
        text = d.read_text(encoding="utf-8", errors="replace")
        syntax = pruefe_syntax(d)
        rest = pruefe_rhino(text)
        if index:
            rest += pruefe_ids(text, index, eigene_ids, eigene_tags, jar_mods)
        fehler += len(syntax)
        warnungen += len(rest)
        if syntax or rest:
            try:
                name = d.relative_to(PROJEKT)
            except ValueError:
                name = d
            print(f"\n{name}")
            for z in syntax + rest:
                print("  " + z)
    print(f"\n{len(dateien)} Dateien geprüft: {fehler} Syntaxfehler, {warnungen} Warnungen.")
    if mit_log:
        werte_log_aus()
    return 1 if fehler else 0


if __name__ == "__main__":
    sys.exit(main())
