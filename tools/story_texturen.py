"""Erzeugt die Texturen der Story-Items (Teil 1) aus Vanilla- und Mod-Texturen.

Aufruf (aus dem Projektordner):
    py tools/story_texturen.py <pfad zu client-1.20.1.jar> <pfad zu StarWarsExpansion-JAR>
Der Client liegt bei ATLauncher unter libraries/net/minecraft/client/1.20.1/client-1.20.1.jar,
der Mod im mods-Ordner der Instanz (StarWarsExpansionv3.1.0.jar).

Ergebnis in kubejs/assets/kubejs/textures/item/:
    pilotenhelm_kaputt.png   212er-Klonhelm aus Star Wars Expansion mit Riss durch die Mitte (kubejs:kaputter_klonhelm)
    tempelrolle.png          offene Rolle mit schwarzen Schriftzeilen, von Hand gezeichnet (kubejs:tempelrolle_1 bis _4)
"""
import io
import sys
import zipfile
from pathlib import Path

from PIL import Image

ZIEL = Path(__file__).resolve().parent.parent / 'kubejs' / 'assets' / 'kubejs' / 'textures' / 'item'


def lade(jar, name, mod='minecraft'):
    with zipfile.ZipFile(jar) as z:
        return Image.open(io.BytesIO(z.read(f'assets/{mod}/textures/item/{name}.png'))).convert('RGBA')


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
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    jar, swe = sys.argv[1], sys.argv[2]
    ZIEL.mkdir(parents=True, exist_ok=True)

    # Verbeulter Pilotenhelm: 212er-Klonhelm aus Star Wars Expansion mit Riss (User, 2026-11-02, Vorschlag 3).
    # Der reparierte Helm ist seit O71 der 212er-Helm von Galaxy in a Cube; keine eigene Textur.
    kaputt = lade(swe, 'clone_helmet_item_212', 'star_wars_expansion')
    px = kaputt.load()
    # Braun des 212er-Streifens auf das Orange-Gelb des fertigen SWGC-Helms (clone_212th_battalion_layer_1) setzen (User, 2026-11-02)
    for x in range(kaputt.width):
        for y in range(kaputt.height):
            if px[x, y] == (147, 76, 8, 255):
                px[x, y] = (235, 132, 38, 255)
    # Riss leicht schräg durch die Mitte, ein Ast nach rechts unten. Auf dem schwarzen Visier hell, sonst dunkel.
    for x, y in [(8, 2), (7, 3), (8, 4), (8, 5), (9, 6), (8, 7), (8, 8), (7, 9), (7, 10), (6, 11),
                 (9, 8), (10, 9), (11, 9)]:
        r, g, b, a = px[x, y]
        if a > 0:
            px[x, y] = (38, 34, 30, 255) if (r + g + b) / 3 > 45 else (170, 176, 184, 255)
    kaputt.save(ZIEL / 'pilotenhelm_kaputt.png')

    # Offene Rolle: Stäbe oben und unten, dazwischen das Blatt mit drei schwarzen Schriftzeilen (User, 2026-10-27)
    karte = [
        '................',
        '.OOOOOOOOOOOOOO.',
        'OrhhhhhhhhhhhhrO',
        'ORrrrrrrrrrrrrRO',
        '.ORRRRRRRRRRRRO.',
        '..OPPPPPPPPPPO..',
        '..OPKKKKKKKKpO..',
        '..OPPPPPPPPPpO..',
        '..OPKKKPKKKKpO..',
        '..OPPPPPPPPPpO..',
        '..OPKKKKKPKKpO..',
        '..OPPPPPPPPPpO..',
        '.OrrrrrrrrrrrrO.',
        'OrhhhhhhhhhhhhrO',
        'ORRRRRRRRRRRRRRO',
        '.OOOOOOOOOOOOOO.',
    ]
    farben = {'O': (66, 44, 24), 'R': (150, 108, 60), 'r': (196, 156, 98), 'h': (236, 212, 160),
              'P': (232, 208, 158), 'p': (208, 178, 126), 'K': (22, 20, 18)}
    rolle = Image.new('RGBA', (16, 16), (0, 0, 0, 0))
    for y, zeile in enumerate(karte):
        for x, zeichen in enumerate(zeile):
            if zeichen in farben:
                rolle.putpixel((x, y), farben[zeichen] + (255,))
    rolle.save(ZIEL / 'tempelrolle.png')
    print('geschrieben nach', ZIEL)


if __name__ == '__main__':
    main()
