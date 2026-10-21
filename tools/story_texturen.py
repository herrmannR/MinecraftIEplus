"""Erzeugt die Texturen der Story-Items (Teil 1) aus Vanilla-Texturen.

Aufruf (aus dem Projektordner):
    py tools/story_texturen.py <pfad zu client-1.20.1.jar>
Der Client liegt bei ATLauncher unter libraries/net/minecraft/client/1.20.1/client-1.20.1.jar.

Ergebnis in kubejs/assets/kubejs/textures/item/:
    pilotenhelm.png          Eisenhelm, weiß (kubejs:klonhelm_repariert, „Pilotenhelm des Einsiedlers“)
    pilotenhelm_kaputt.png   Eisenhelm, schmutzig grau mit Riss (kubejs:kaputter_klonhelm)
    tempelrolle.png          Papier, vergilbt, mit rotem Siegel (kubejs:tempelrolle_1 bis _4)
"""
import io
import sys
import zipfile
from pathlib import Path

from PIL import Image

ZIEL = Path(__file__).resolve().parent.parent / 'kubejs' / 'assets' / 'kubejs' / 'textures' / 'item'


def lade(jar, name):
    with zipfile.ZipFile(jar) as z:
        return Image.open(io.BytesIO(z.read(f'assets/minecraft/textures/item/{name}.png'))).convert('RGBA')


def faerben(bild, farbe):
    """Graustufe mal Farbe (Helligkeit bleibt, Farbe wird ersetzt)."""
    aus = bild.copy()
    px = aus.load()
    for x in range(aus.width):
        for y in range(aus.height):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            h = (r + g + b) / 3 / 255
            px[x, y] = (int(farbe[0] * h), int(farbe[1] * h), int(farbe[2] * h), a)
    return aus


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    jar = sys.argv[1]
    ZIEL.mkdir(parents=True, exist_ok=True)

    helm = lade(jar, 'iron_helmet')
    faerben(helm, (240, 240, 236)).save(ZIEL / 'pilotenhelm.png')

    kaputt = faerben(helm, (128, 120, 104))
    px = kaputt.load()
    # Riss schräg über die Schale, nur auf sichtbaren Pixeln
    for x, y in [(6, 3), (6, 4), (7, 5), (7, 6), (8, 7), (9, 8), (9, 9), (10, 10)]:
        if px[x, y][3] > 0:
            px[x, y] = (40, 36, 30, 255)
    kaputt.save(ZIEL / 'pilotenhelm_kaputt.png')

    rolle = faerben(lade(jar, 'paper'), (222, 190, 140))
    px = rolle.load()
    for x, y in [(7, 7), (8, 7), (7, 8), (8, 8)]:
        if px[x, y][3] > 0:
            px[x, y] = (130, 20, 20, 255)
    rolle.save(ZIEL / 'tempelrolle.png')
    print('geschrieben nach', ZIEL)


if __name__ == '__main__':
    main()
