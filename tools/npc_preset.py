"""Baut Easy-NPC-Presets der Story-Figuren aus den Dialogtexten.

Aufruf (aus dem Projektordner):
    py tools/npc_preset.py              alle Figuren
    py tools/npc_preset.py bodhi vos    nur diese

Quelle der Dialoge: docs/story/texte/dialoge_<figur>.md (Format wie dort beschrieben).
Aussehen (Modell, Skin, Name, Handel) kommt aus einer Vorlage: dem Preset, das der User im Spiel gespeichert hat
(liegt nach dem ersten Lauf auch hier unter config-overrides/config/easy_npc/preset/). Das Skript ersetzt nur die
Dialoge (DialogData) und den Namen; alles andere bleibt, wie es in der Vorlage steht.
Ergebnis: config-overrides/config/easy_npc/preset/<modell>/<datei>.npc.nbt. Ins Spiel: Datei in den gleichen
Ordner der Instanz kopieren (Spiel zu), dann das Preset im Spiel importieren.

Easy NPC 7.14 (JAR geprüft 2026-10-31): Bedingung SCOREBOARD liest den Score des sprechenden Spielers
(Name = Objective); HAS_ITEM_IN_INVENTORY zählt alle Stapel, „gleich n“ heißt mindestens n; PLAYER_TAG prüft
einen Spieler-Tag (Name = Tag). Befehle mit führendem „/“ sind erlaubt.
"""
import gzip
import io
import random
import re
import struct
import sys
import time
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
TEXTE = WURZEL / 'docs' / 'story' / 'texte'
AUS = WURZEL / 'config-overrides' / 'config' / 'easy_npc' / 'preset'
INSTANZ = Path.home() / 'AppData/Roaming/ATLauncher/instances/Minecraft1201withForge'

# Kürzel: Dialogdatei, Name im Spiel, Ausgabe (Ordner/Datei), Vorlage (Ordner/Datei der Ausgabe oder Datei der Instanz)
FIGUREN = {
    # Doppler, der den Droiden aus Star Wars Expansion darstellt (vom User gebaut, 2026-10-31)
    'dd3r8':    ('dialoge_dd3r8.md', 'DD3R8', 'humanoid/dd3r8.npc.nbt', 'config/easy_npc/preset/humanoid/dd3r8.npc.nbt'),
    'zwerg':    ('dialoge_zwerg.md', 'Der Zwerg', 'humanoid/zwerg.npc.nbt', None),
    'bodhi':    ('dialoge_bodhi.md', 'Bodhi Bad Dur', 'humanoid/bodhibaddur.npc.nbt', 'config/easy_npc/preset/humanoid/bodhibaddur.npc.nbt'),
    'davijaan': ('dialoge_davijaan.md', 'Davijaan', 'humanoid/davijaan.npc.nbt', 'config/easy_npc/preset/humanoid/davijaan.npc.nbt'),
    'cerina':   ('dialoge_cerina.md', 'Meisterin Cerina', 'humanoid_slim/cerina.npc.nbt', 'config/easy_npc/preset/humanoid_slim/cerina.npc.nbt'),
    # Das Preset quinlanvos war eine Kopie von Cerina; Vorlage ist der Vos, der in der Testwelt steht.
    'vos':      ('dialoge_vos.md', 'Quinlan Vos', 'humanoid/quinlanvos.npc.nbt', 'saves/New World/easy_npc/npcs/2edd3745-1e00-47bd-93e8-7f748b456e62.npc.nbt'),
}
# Eigener Skin: Datei liegt im Projekt unter config-overrides/config/easy_npc/skin/<modell>/ und muss in denselben
# Ordner der Instanz. Easy NPC erkennt einen eigenen Skin an der UUID aus dem Dateinamen
# (UUID.nameUUIDFromBytes("name.png"), geprüft an Odd-Ball.png, 2026-10-31).
SKINS = {'zwerg': 'moria-dwarf.png'}
# ohne eigene Vorlage: Davijaan als Grundgerüst, aber Standard-Skin (Skin stellt der User im Editor ein)
LEERE_VORLAGE = 'davijaan'
# Diese Schlüssel hat ein exportiertes Preset; aus einer NPC-Datei der Welt kommt nur das hinein
PRESET_SCHLUESSEL = {'ModelData', 'SkinData', 'ForgeData', 'Navigation', 'ObjectiveData', 'EasyNPCVersion', 'id',
                     'DialogData', 'PresetUUID', 'CustomName', 'RenderData', 'Offers', 'TradingData', 'VariantType'}

# ---------------------------------------------------------------- NBT mit Typen: Knoten = (Typ, Wert)
END, BYTE, SHORT, INT, LONG, FLOAT, DOUBLE, BARR, STR, LIST, COMP, IARR, LARR = range(13)


def _lies(f, t):
    if t == BYTE: return struct.unpack('>b', f.read(1))[0]
    if t == SHORT: return struct.unpack('>h', f.read(2))[0]
    if t == INT: return struct.unpack('>i', f.read(4))[0]
    if t == LONG: return struct.unpack('>q', f.read(8))[0]
    if t == FLOAT: return struct.unpack('>f', f.read(4))[0]
    if t == DOUBLE: return struct.unpack('>d', f.read(8))[0]
    if t == BARR: return f.read(_lies(f, INT))
    if t == STR: return f.read(struct.unpack('>H', f.read(2))[0]).decode('utf-8')
    if t == LIST:
        et = f.read(1)[0]
        return (et, [_lies(f, et) for _ in range(_lies(f, INT))])
    if t == COMP:
        d = {}
        while True:
            et = f.read(1)[0]
            if et == END: return d
            k = _lies(f, STR)
            d[k] = (et, _lies(f, et))
    if t == IARR: return [_lies(f, INT) for _ in range(_lies(f, INT))]
    if t == LARR: return [_lies(f, LONG) for _ in range(_lies(f, INT))]
    raise ValueError(t)


def _schreib(f, t, v):
    if t == BYTE: f.write(struct.pack('>b', v))
    elif t == SHORT: f.write(struct.pack('>h', v))
    elif t == INT: f.write(struct.pack('>i', v))
    elif t == LONG: f.write(struct.pack('>q', v))
    elif t == FLOAT: f.write(struct.pack('>f', v))
    elif t == DOUBLE: f.write(struct.pack('>d', v))
    elif t == BARR: _schreib(f, INT, len(v)); f.write(v)
    elif t == STR:
        b = v.encode('utf-8'); f.write(struct.pack('>H', len(b))); f.write(b)
    elif t == LIST:
        et, werte = v
        f.write(bytes([et if werte else END])); _schreib(f, INT, len(werte))
        for w in werte: _schreib(f, et, w)
    elif t == COMP:
        for k, (et, w) in v.items():
            f.write(bytes([et])); _schreib(f, STR, k); _schreib(f, et, w)
        f.write(bytes([END]))
    elif t == IARR:
        _schreib(f, INT, len(v))
        for w in v: _schreib(f, INT, w)
    elif t == LARR:
        _schreib(f, INT, len(v))
        for w in v: _schreib(f, LONG, w)


def nbt_lesen(pfad):
    roh = Path(pfad).read_bytes()
    try:
        roh = gzip.decompress(roh)
    except OSError:
        pass
    f = io.BytesIO(roh)
    t = f.read(1)[0]
    _lies(f, STR)
    return _lies(f, t)


def nbt_schreiben(pfad, wurzel):
    f = io.BytesIO()
    f.write(bytes([COMP])); _schreib(f, STR, ''); _schreib(f, COMP, wurzel)
    Path(pfad).parent.mkdir(parents=True, exist_ok=True)
    Path(pfad).write_bytes(gzip.compress(f.getvalue(), mtime=0))


def s(v): return (STR, v)
def i(v): return (INT, v)
def comp(d): return (COMP, d)
def liste(et, werte): return (LIST, (et, werte))
def skin_uuid(dateiname):
    import hashlib
    h = bytearray(hashlib.md5(dateiname.encode('utf-8')).digest())
    h[6] = h[6] & 0x0f | 0x30
    h[8] = h[8] & 0x3f | 0x80
    return (IARR, list(struct.unpack('>iiii', bytes(h))))


def uuid(): return (IARR, [random.randint(-2**31, 2**31 - 1) for _ in range(4)])


# ---------------------------------------------------------------- Dialogtext lesen
KNOPF = re.compile(r'- \*\*\[(.+?)\]\*\*(.*)', re.S)


def bedingungen_dialog(text):
    """`bodhi = 2` und `dd3r8 ≥ 1` -> Scoreboard-Bedingungen."""
    out = []
    for obj, op, wert in re.findall(r'`(\w+)\s*(=|≥)\s*(\d+)`', text):
        out.append({'Type': s('SCOREBOARD'), 'Name': s(obj),
                    'Operation': s('EQUALS' if op == '=' else 'GREATER_THAN_OR_EQUALS'), 'Value': i(int(wert))})
    return out


def bedingungen_knopf(text):
    """Bedingung eines Knopfs: Spieler-Tag `x`, im Inventar [n ×] `item`, …, `a_1` bis `_4`."""
    out = []
    text = re.sub(r'\([^)]*\)', '', text)  # Erläuterungen in Klammern
    for tag in re.findall(r'Spieler-Tag `([\w.:-]+)`', text):
        out.append({'Type': s('PLAYER_TAG'), 'Name': s(tag), 'Operation': s('EQUALS')})
    inv = text.split('im Inventar', 1)
    if len(inv) == 2:
        teil = inv[1]
        bis = re.search(r'`([\w.:-]+?)(\d+)`\s*bis\s*`_(\d+)`', teil)
        if bis:
            namen = [(1, f'{bis.group(1)}{n}') for n in range(int(bis.group(2)), int(bis.group(3)) + 1)]
        else:
            namen = [(int(n) if n else 1, item) for n, item in re.findall(r'(?:(\d+)\s*×\s*)?`([\w.:-]+)`', teil)]
        for anzahl, item in namen:
            out.append({'Type': s('HAS_ITEM_IN_INVENTORY'), 'Name': s(item), 'Operation': s('EQUALS'), 'Value': i(anzahl)})
    return out


def knopf(z, nr, warn, did=''):
    m = KNOPF.match(z)
    label, rest = m.group(1), m.group(2)
    bed = re.search(r'Bedingung:\s*(.+?)\s*→', rest, re.S)
    aktionen = []
    bm = re.search(r'Befehle?:(.*)→', rest, re.S)
    if bm:
        for b in re.findall(r'`([^`]+)`', re.sub(r'\([^)]*\)', '', bm.group(1))):
            aktionen.append({'Type': s('COMMAND'), 'Cmd': s('/' + b.lstrip('/'))})
    ziel = rest.rsplit('→', 1)[-1].strip()
    if ziel.startswith('`'):
        aktionen.append({'Type': s('OPEN_NAMED_DIALOG'), 'Cmd': s(ziel.strip('`'))})
    elif ziel == 'schließen':
        aktionen.append({'Type': s('CLOSE_DIALOG')})
    elif 'Handelsfenster' in ziel:
        aktionen.append({'Type': s('OPEN_TRADING_SCREEN')})
    else:
        warn.append(f'Ziel nicht erkannt: „{ziel}“ (Knopf „{label}“)')
    if len(label) > 64:
        warn.append(f'Knopf über 64 Zeichen: „{label}“')
    # Easy NPC 7.14 bildet die Knopf-ID nur aus dem Label (DialogButtonEntry: UUIDUtils.textToUUID). Gleiche Labels in
    # verschiedenen Dialogen teilen sich die ID; der Server sperrt dann alle, sobald eine Bedingung irgendwo fehlt
    # (Test 111, 2026-11-03). Deshalb Dialogname + Nummer, höchstens 32 Zeichen.
    k = {'Name': s(label), 'Label': s(f'{did[:28]}_{nr}' if did else f'button_{nr}'),
         'Actions': liste(COMP, [{**a, 'Id': uuid()} for a in aktionen])}
    if bed:
        bl = bedingungen_knopf(bed.group(1))
        if not bl:
            warn.append(f'Bedingung nicht erkannt: „{bed.group(1)}“ (Knopf „{label}“)')
        k['Conditions'] = liste(COMP, bl)
    return k


def dialoge(datei, warn):
    text = (TEXTE / datei).read_text(encoding='utf-8')
    text = text.split('\n---\n', 1)[1] if '\n---\n' in text else text
    text = text.split('## Offen beim Überarbeiten')[0]
    zeilen = text.split('\n')
    out, namen, ziele, labels = [], set(), set(), set()
    n = 0
    while n < len(zeilen):
        m = re.match(r'#### `(\w+)`\s*·\s*Prio\s*(\d+)\s*(?:·\s*(.*))?', zeilen[n])
        if not m:
            n += 1
            continue
        did, prio, bed = m.group(1), int(m.group(2)), (m.group(3) or '')
        n += 1
        texte, knoepfe = [], []
        while n < len(zeilen) and not zeilen[n].startswith('#') and not zeilen[n].startswith('---'):
            z = zeilen[n]
            if z.startswith('>'):
                texte.append(z[1:].strip())
            elif z.startswith('- **['):
                knoepfe.append(z)
            elif z.startswith('  ') and knoepfe:
                knoepfe[-1] += ' ' + z.strip()
            n += 1
        if len(did) > 32:
            warn.append(f'Dialogname über 32 Zeichen: {did}')
        for t in texte:
            if len(t) > 512:
                warn.append(f'{did}: Text über 512 Zeichen ({len(t)})')
        for ph in re.findall(r'\[[^\]]*(?:trägt der User|Name)[^\]]*\]|<[xyz]>|<ST[\d-]+>|PLATZHALTER\w*', ' '.join(texte + knoepfe)):
            warn.append(f'{did}: Platzhalter {ph}')
        ks = [knopf(k, j + 1, warn, did) for j, k in enumerate(knoepfe)]
        for k in ks:
            if k['Label'][1] in labels:
                warn.append(f'Knopf-Label doppelt: {k["Label"][1]}')
            labels.add(k['Label'][1])
        d ={'Name': s(did), 'Priority': i(prio), 'Texts': liste(COMP, [{'Text': s(t)} for t in texte]),
             'Buttons': liste(COMP, ks)}
        bl = bedingungen_dialog(bed)
        if bl:
            d['Conditions'] = liste(COMP, bl)
        out.append(d)
        namen.add(did)
        for k in ks:
            for a in k['Actions'][1][1]:
                if a['Type'][1] == 'OPEN_NAMED_DIALOG':
                    ziele.add(a['Cmd'][1])
    for z in sorted(ziele - namen):
        warn.append(f'Knopf verweist auf fehlenden Dialog {z}')
    return out


# ---------------------------------------------------------------- Handel lesen
# Abschnitt „## Handel“ der Dialogdatei: Tabelle | Preis | Preis 2 | Ware | Nutzungen | (weitere Spalten egal).
# Zellen „n × `item`“ oder „–“; Nutzungen als Zahl oder „unbegrenzt“. Handelsart ADVANCED: nur dort behält jedes
# Angebot seine eigenen Nutzungen (BASIC setzt alle auf denselben Wert); ResetsEveryMin 0 = verbrauchte Angebote
# kommen nie wieder (Easy NPC 7.14, TradingOfferHandler/TradingDataCapable, JAR geprüft 2026-11-03).
UNBEGRENZT = 99999


def _stapel(zelle, warn):
    m = re.search(r'(\d+)\s*×\s*`([\w.:-]+)`', zelle)
    if not m:
        return comp({'id': s('minecraft:air'), 'Count': (BYTE, 1)})
    n = int(m.group(1))
    if n > 64:
        warn.append(f'Handel: mehr als 64 in einem Feld ({zelle.strip()})')
    return comp({'id': s(m.group(2)), 'Count': (BYTE, n)})


def handel(datei, warn):
    text = (TEXTE / datei).read_text(encoding='utf-8')
    if '\n## Handel' not in text:
        return None
    teil = text.split('\n## Handel', 1)[1].split('\n## ', 1)[0]
    angebote = []
    for z in teil.split('\n'):
        z = z.strip()
        if not z.startswith('|') or '`' not in z:
            continue
        zellen = [c.strip() for c in z.strip('|').split('|')]
        if len(zellen) < 4:
            warn.append(f'Handel: Zeile zu kurz: {z}')
            continue
        nutz = UNBEGRENZT if 'unbegrenzt' in zellen[3] else int(re.sub(r'\D', '', zellen[3]) or 1)
        angebote.append({'buy': _stapel(zellen[0], warn), 'buyB': _stapel(zellen[1], warn),
                         'sell': _stapel(zellen[2], warn), 'maxUses': i(nutz), 'uses': i(0), 'xp': i(0),
                         'priceMultiplier': (FLOAT, 0.0), 'specialPrice': i(0), 'demand': i(0),
                         'rewardExp': (BYTE, 0)})
    if len(angebote) > 25:
        warn.append(f'Handel: {len(angebote)} Angebote, ADVANCED erlaubt 25')
    return angebote


# ---------------------------------------------------------------- Preset bauen
def vorlage(kuerzel):
    datei, name, ausgabe, quelle = FIGUREN[kuerzel]
    if quelle is None:
        basis = vorlage(LEERE_VORLAGE)
        for k in ('SkinData', 'Offers', 'TradingData', 'UUID', 'Pos', 'Rotation', 'Navigation'):
            basis['data'][1].pop(k, None)
        basis['data'][1]['PresetUUID'] = uuid()
        return basis
    pfad = INSTANZ / quelle
    if not pfad.exists():
        pfad = AUS / ausgabe
    w = nbt_lesen(pfad)
    if 'data' in w:
        return w
    # NPC-Datei aus der Welt: in die Form eines Presets bringen
    data = {k: v for k, v in w.items() if k in PRESET_SCHLUESSEL}
    data.setdefault('PresetUUID', uuid())
    meta = {'variantType': data.pop('VariantType')} if 'VariantType' in data else {}
    return {'PresetMetadata': comp(meta), 'data': comp(data)}


def bauen(kuerzel):
    datei, name, ausgabe, _ = FIGUREN[kuerzel]
    warn = []
    w = vorlage(kuerzel)
    data = w['data'][1]
    jetzt = int(time.time() * 1000)
    meta = w['PresetMetadata'][1]
    meta.update({'name': s(Path(ausgabe).name.split('.')[0]), 'entityTypeId': s(data['id'][1]),
                 'modified': (LONG, jetzt), 'author': meta.get('author', s('IE+')),
                 'description': s(f'Story-Figur {name}, Dialoge aus docs/story/texte/{datei}')})
    meta.setdefault('created', (LONG, jetzt))
    meta.setdefault('category', s('General'))
    meta.setdefault('version', s('1.1.0'))
    if kuerzel in SKINS:
        data['SkinData'] = comp({'Type': s('CUSTOM'), 'UUID': skin_uuid(SKINS[kuerzel])})
    data['CustomName'] = s('{"color":"#FFFFFF","text":%s}' % ('"' + name.replace('"', '\\"') + '"'))
    ds = dialoge(datei, warn)
    data['DialogData'] = comp({'Type': s('STANDARD'), 'DialogDataSet': liste(COMP, ds)})
    # Obergrenze für Dialogbefehle der Figur; fehlt sie, gilt Stufe 0 und scoreboard/tag/give scheitern still
    # (Easy NPC 7.14, ActionEventDataCapable: ActionData.ActionPermissionLevel, Standard ALL; 2026-11-01)
    akt = data.setdefault('ActionData', comp({}))[1]
    akt['ActionPermissionLevel'] = i(2)
    # Standard beim Ansprechen wie bei einer neu gesetzten Figur (aus der NPC-Datei der Testwelt)
    akt.setdefault('ActionEventSet', comp({'ON_INTERACTION': liste(COMP, [{'Type': s('OPEN_DEFAULT_DIALOG')},
                                                                          {'Type': s('OPEN_TRADING_SCREEN')}])}))
    ha = handel(datei, warn)
    if ha is not None:
        data['Offers'] = comp({'Recipes': comp({'Recipes': liste(COMP, ha)}), 'Inventory': comp({})})
        data['TradingData'] = comp({'TradingDataSet': comp({'Type': s('ADVANCED'), 'ResetsEveryMin': i(0),
                                                           'LastReset': (LONG, jetzt)})})
    nbt_schreiben(AUS / ausgabe, w)
    print(f'{kuerzel}: {len(ds)} Dialoge' + (f', {len(ha)} Handel' if ha is not None else '') + f' -> {(AUS / ausgabe).relative_to(WURZEL)}')
    for x in warn:
        print('   !', x)


if __name__ == '__main__':
    for k in (sys.argv[1:] or FIGUREN):
        bauen(k)
