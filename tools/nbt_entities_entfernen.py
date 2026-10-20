"""Entfernt Entities aus einer Structure-NBT-Datei (gzip) und schreibt eine Kopie.

Aufruf: python tools/nbt_entities_entfernen.py <quelle.nbt> <ziel.nbt> <entity-id> [<entity-id> ...]
Beispiel: Rover aus dem Bauwerk „Abandoned Base“ (Ad Astra More Structures) entfernen.
Ohne Fremdbibliothek: kleiner NBT-Leser und -Schreiber für die Standard-Tags.
"""
import gzip
import struct
import sys


def lesen(d, p, typ):
    if typ == 1: return struct.unpack_from('>b', d, p)[0], p + 1
    if typ == 2: return struct.unpack_from('>h', d, p)[0], p + 2
    if typ == 3: return struct.unpack_from('>i', d, p)[0], p + 4
    if typ == 4: return struct.unpack_from('>q', d, p)[0], p + 8
    if typ == 5: return struct.unpack_from('>f', d, p)[0], p + 4
    if typ == 6: return struct.unpack_from('>d', d, p)[0], p + 8
    if typ in (7, 11, 12):
        n = struct.unpack_from('>i', d, p)[0]; p += 4
        fmt, size = {7: ('b', 1), 11: ('i', 4), 12: ('q', 8)}[typ]
        return list(struct.unpack_from('>%d%s' % (n, fmt), d, p)), p + n * size
    if typ == 8:
        n = struct.unpack_from('>H', d, p)[0]; p += 2
        return d[p:p + n].decode('utf-8'), p + n
    if typ == 9:
        inner = d[p]; n = struct.unpack_from('>i', d, p + 1)[0]; p += 5
        werte = []
        for _ in range(n):
            w, p = lesen(d, p, inner); werte.append(w)
        return (inner, werte), p
    if typ == 10:
        felder = []
        while True:
            t = d[p]; p += 1
            if t == 0: return felder, p
            name, p = lesen(d, p, 8)
            w, p = lesen(d, p, t)
            felder.append((name, t, w))
    raise ValueError('unbekannter Tag %d' % typ)


def schreiben(typ, w):
    if typ == 1: return struct.pack('>b', w)
    if typ == 2: return struct.pack('>h', w)
    if typ == 3: return struct.pack('>i', w)
    if typ == 4: return struct.pack('>q', w)
    if typ == 5: return struct.pack('>f', w)
    if typ == 6: return struct.pack('>d', w)
    if typ in (7, 11, 12):
        fmt = {7: 'b', 11: 'i', 12: 'q'}[typ]
        return struct.pack('>i', len(w)) + struct.pack('>%d%s' % (len(w), fmt), *w)
    if typ == 8:
        b = w.encode('utf-8'); return struct.pack('>H', len(b)) + b
    if typ == 9:
        inner, werte = w
        if not werte: inner = inner or 0
        return bytes([inner]) + struct.pack('>i', len(werte)) + b''.join(schreiben(inner, x) for x in werte)
    if typ == 10:
        return b''.join(bytes([t]) + schreiben(8, n) + schreiben(t, x) for n, t, x in w) + b'\x00'
    raise ValueError(typ)


def feld(compound, name):
    for n, t, w in compound:
        if n == name: return w
    return None


def main():
    quelle, ziel, ids = sys.argv[1], sys.argv[2], set(sys.argv[3:])
    d = gzip.decompress(open(quelle, 'rb').read())
    assert d[0] == 10
    name, p = lesen(d, 1, 8)
    root, _ = lesen(d, p, 10)
    neu = []
    for i, (n, t, w) in enumerate(root):
        if n == 'entities':
            inner, liste = w
            behalten = [e for e in liste if feld(feld(e, 'nbt') or [], 'id') not in ids]
            print('Entities: %d -> %d' % (len(liste), len(behalten)))
            w = (inner, behalten)
        neu.append((n, t, w))
    out = bytes([10]) + schreiben(8, name) + schreiben(10, neu)
    open(ziel, 'wb').write(gzip.compress(out))


if __name__ == '__main__':
    main()
