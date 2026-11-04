"""Wandelt eine Litematica-Schematic in einen Patchouli-Multiblock (Seite „patchouli:multiblock“) um.

Aufruf:  py tools/schematic_multiblock.py tools/schematics/MarsBase.litematic   (zeigt das Muster zur Kontrolle)
Im Code: from schematic_multiblock import multiblock; multiblock(pfad) -> {'pattern': [...], 'mapping': {...}}

Litematica (Format 6): Region mit Size, BlockStatePalette und BlockStates (long-Array, Einträge eng gepackt, auch über
Long-Grenzen; Bits je Eintrag = max(2, Bits für Palette-1)); Index = (y * sizeZ + z) * sizeX + x.
Patchouli: pattern = Ebenen von oben nach unten, je Ebene Zeilen entlang z, Zeichen entlang x; „_“ = beliebig,
„0“ = Mitte (hier unten in der Mitte, auf den Block an dieser Stelle gemappt).
Luft wird zu „_“ (der Bauplatz muss nicht leer geräumt sein). Zustände ohne Bedeutung für den Bau (powered, open,
locked, waterlogged) fallen weg. Mehrteilige Blöcke (ad_astra:reinforced_door, 3×3): nur das Teil „bottom“ bleibt,
die übrigen Teile setzt der Block beim Platzieren selbst.
"""
import string
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import npc_preset as n  # NBT lesen

WEG = {'powered', 'open', 'locked', 'waterlogged'}
ZEICHEN = [c for c in string.ascii_uppercase + string.ascii_lowercase + '123456789#$%&*+=?@']


def _region(pfad):
    w = n.nbt_lesen(pfad)
    r = w[1] if isinstance(w, tuple) else w
    if '' in r:
        r = r[''][1]
    regionen = list(r['Regions'][1].values())
    if len(regionen) != 1:
        raise SystemExit(f'{pfad}: genau eine Region erwartet, gefunden {len(regionen)}')
    return regionen[0][1]


def _zustand(eintrag):
    name = eintrag['Name'][1]
    props = {k: v[1] for k, v in eintrag['Properties'][1].items()} if 'Properties' in eintrag else {}
    if name == 'minecraft:air':
        return None
    if name == 'ad_astra:reinforced_door' and props.get('part') != 'bottom':
        return None
    props = {k: v for k, v in sorted(props.items()) if k not in WEG}
    return name + ('[' + ','.join(f'{k}={v}' for k, v in props.items()) + ']' if props else '')


def multiblock(pfad):
    reg = _region(pfad)
    sx, sy, sz = (abs(reg['Size'][1][k][1]) for k in ('x', 'y', 'z'))
    palette = [_zustand(p) for p in reg['BlockStatePalette'][1][1]]
    bits = max(2, (len(palette) - 1).bit_length())
    longs = [v & 0xFFFFFFFFFFFFFFFF for v in reg['BlockStates'][1]]
    maske = (1 << bits) - 1

    def wert(i):
        start = i * bits
        li, off = divmod(start, 64)
        v = longs[li] >> off
        if off + bits > 64:
            v |= longs[li + 1] << (64 - off)
        return v & maske

    zeichen, mapping = {}, {}
    gitter = [[['_'] * sx for _ in range(sz)] for _ in range(sy)]
    for y in range(sy):
        for z in range(sz):
            for x in range(sx):
                st = palette[wert((y * sz + z) * sx + x)]
                if st is None:
                    continue
                if st not in zeichen:
                    zeichen[st] = ZEICHEN[len(zeichen)]
                    mapping[zeichen[st]] = st
                gitter[y][z][x] = zeichen[st]
    # Mitte: unten in der Mitte; Block dort (oder beliebig) unter „0“
    mx, mz = sx // 2, sz // 2
    unten = gitter[0][mz][mx]
    mapping['0'] = mapping[unten] if unten != '_' else '#minecraft:replaceable'
    if unten == '_':
        mapping.pop('0')
    gitter[0][mz][mx] = '0'
    pattern = [[''.join(reihe) for reihe in gitter[y]] for y in reversed(range(sy))]
    return {'pattern': pattern, 'mapping': mapping}


if __name__ == '__main__':
    mb = multiblock(Path(sys.argv[1]))
    for ebene in mb['pattern']:
        print('\n'.join(ebene))
        print()
    for k, v in mb['mapping'].items():
        print(k, v)
