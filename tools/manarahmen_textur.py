"""Erzeugt die Texturen des Mana-Diamant-Rahmens (umgebauter Leuchtrahmen, minecraft:glow_item_frame).

Aufruf (aus dem Projektordner):
    py tools/manarahmen_textur.py <client-1.20.1.jar> <Botania-JAR>
Client bei ATLauncher: libraries/net/minecraft/client/1.20.1/client-1.20.1.jar; Botania im mods-Ordner der Instanz.

Verfahren: Jedes Holz-Pixel wird nach seiner Helligkeit auf einen Verlauf aus den Farben des Mana-Diamanten
(botania:mana_diamond) gelegt. Form, Maserung und Schattierung bleiben, nur die Farbe wechselt.

Ergebnis:
    kubejs/assets/kubejs/textures/block/mana_rahmen.png          Rand des Rahmens (statt Birkenbretter)
    kubejs/assets/minecraft/textures/item/glow_item_frame.png    Symbol (Holzrand umgefärbt, Leder bleibt)
Die Modelle unter kubejs/assets/minecraft/models/block/glow_item_frame*.json verweisen auf mana_rahmen.png
und nehmen als Rückseite das Leder des normalen Rahmens.
"""
import io
import sys
import zipfile
from pathlib import Path

from PIL import Image

PROJEKT = Path(__file__).resolve().parent.parent
ASSETS = PROJEKT / 'kubejs' / 'assets'

# Farben des Mana-Diamanten, dunkel nach hell (ohne reines Weiß)
VERLAUF = [(0x00, 0x4b, 0x67), (0x00, 0x73, 0x8b), (0x00, 0xb4, 0xc4), (0x00, 0xe4, 0xe5),
           (0x38, 0xff, 0xfa), (0x9d, 0xff, 0xf4), (0xd5, 0xff, 0xfa)]
# Holzfarben im Vanilla-Symbol item/item_frame.png (der Rest ist Leder und Bild)
SYMBOL_HOLZ = {0xe7d49b, 0xd5c184, 0xcab577, 0xb4a062, 0x9d8a51, 0x937d42, 0x776432}


def lade(jar, pfad):
    with zipfile.ZipFile(jar) as z:
        return Image.open(io.BytesIO(z.read(pfad))).convert('RGBA')


def hell(r, g, b):
    return 0.299 * r + 0.587 * g + 0.114 * b


def verlauf(t):
    t = min(max(t, 0.0), 1.0) * (len(VERLAUF) - 1)
    i = min(int(t), len(VERLAUF) - 2)
    f = t - i
    a, b = VERLAUF[i], VERLAUF[i + 1]
    return tuple(round(a[k] + (b[k] - a[k]) * f) for k in range(3))


def umfaerben(bild, ist_holz, von, bis):
    """Holz-Pixel nach Helligkeit auf den Verlauf [von, bis] legen."""
    px = bild.load()
    werte = [hell(*px[x, y][:3]) for x in range(bild.width) for y in range(bild.height)
             if px[x, y][3] and ist_holz(px[x, y])]
    lo, hi = min(werte), max(werte)
    for x in range(bild.width):
        for y in range(bild.height):
            r, g, b, a = px[x, y]
            if not a or not ist_holz(px[x, y]):
                continue
            t = (hell(r, g, b) - lo) / (hi - lo)
            px[x, y] = verlauf(von + (bis - von) * t) + (a,)
    return bild


def main():
    client, botania = sys.argv[1], sys.argv[2]
    lade(botania, 'assets/botania/textures/item/mana_diamond.png')   # nur Prüfung, dass das JAR passt

    rand = umfaerben(lade(client, 'assets/minecraft/textures/block/birch_planks.png'), lambda p: True, 0.2, 0.95)
    ziel = ASSETS / 'kubejs' / 'textures' / 'block' / 'mana_rahmen.png'
    ziel.parent.mkdir(parents=True, exist_ok=True)
    rand.save(ziel)

    def holz(p):
        return (p[0] << 16 | p[1] << 8 | p[2]) in SYMBOL_HOLZ
    symbol = umfaerben(lade(client, 'assets/minecraft/textures/item/item_frame.png'), holz, 0.0, 1.0)
    ziel2 = ASSETS / 'minecraft' / 'textures' / 'item' / 'glow_item_frame.png'
    ziel2.parent.mkdir(parents=True, exist_ok=True)
    symbol.save(ziel2)
    print('geschrieben:', ziel.relative_to(PROJEKT), ziel2.relative_to(PROJEKT))


if __name__ == '__main__':
    main()
