"""Erzeugt data.js für die Übersichtsseite „Credits und Handel“ (docs/credits).

Quellen, nichts von Hand gepflegt:
- Quest-Credits je Buch und Kapitel: baut alle Questbücher mit tools/QuestbuchGen.java (Befehl aus der Kopfzeile
  „# Bauen:“ jeder Steuerdatei) und liest dessen Ausgabe „Credits je Kn“. Die Bücher werden dabei neu geschrieben
  (gleicher Inhalt, solange Texte und Steuerdateien unverändert sind).
- Handel: Abschnitt „## Handel“ in docs/story/texte/dialoge_{davijaan,zwerg,bodhi}.md (wie tools/npc_preset.py).
- Shop-Stufen: Spalte „Stufe · Wert“ der Tabelle von Davijaan.

Aufruf aus dem Projektordner: python docs/credits/daten.py   (oder bash docs/credits/build.sh)
"""
import json
import re
import subprocess
from pathlib import Path

WURZEL = Path(__file__).resolve().parents[2]
HIER = Path(__file__).resolve().parent
TEXTE = WURZEL / 'docs' / 'story' / 'texte'
WERT = {'copper': 1, 'iron': 5, 'gold': 15}

# Anzeigenamen wie in JEI (englisch), Baupläne deutsch wie im Spiel
NAMEN = {
    'swgc:gold_credit': 'Gold Credit', 'swgc:iron_credit': 'Iron Credit', 'swgc:copper_credit': 'Copper Credit',
    'swgc:plastoid': 'Plastoid',
    'mekanism:raw_tin': 'Rohzinn', 'tconstruct:amethyst_bronze_ingot': 'Amethyst-Bronze-Barren', 'blue_skies:raw_falsite': 'Raw Falsite', 'minecraft:diamond': 'Diamant', 'blue_skies:raw_ventium': 'Raw Ventium', 'mekanism:ingot_refined_obsidian': 'Refined Obsidian Ingot', 'blue_skies:raw_horizonite': 'Raw Horizonite', 'bloodmagic:minekey': "Miner's Key", 'minecraft:emerald': 'Smaragd', 'blue_skies:zeal_lighter': 'Zeal Lighter', 'minecraft:book': 'Buch', 'blue_skies:blue_journal': 'Blue Journal', 'blue_skies:blinding_key': 'Blinding Key', 'blue_skies:nature_stone': 'Nature Stone', 'blue_skies:starlit_sapling': 'Starlit Sapling', 'blue_skies:nature_key': 'Nature Key', 'blue_skies:poison_stone': 'Poison Stone', 'minecraft:spider_eye': 'Spinnenauge', 'blue_skies:poison_key': 'Poison Key',
    'kubejs:bauplan_ruestung_klon': 'Bauplan: Klon-Rüstung (Phase 2)', 'kubejs:bauplan_plastoid': 'Bauplan: Plastoid',
    'kubejs:bauplan_durasteel': 'Bauplan: Durasteel', 'kubejs:bauplan_blaster': 'Bauplan: Blaster',
    'kubejs:bauplan_gas_harvester': 'Bauplan: Gas Harvester',
    'kubejs:bauplan_ruestung_royal_guard': 'Bauplan: Rüstung der Royal Guard',
    'kubejs:bauplan_droid_fabricator': 'Bauplan: Droid Fabricator', 'kubejs:bauplan_droide_b1': 'Bauplan: Droide B-1',
    'kubejs:bauplan_droide_b2': 'Bauplan: Droide B-2', 'kubejs:bauplan_droide_droideka': 'Bauplan: Droideka',
    'farmersdelight:roast_chicken_block': 'Roast Chicken', 'farmersdelight:honey_glazed_ham_block': 'Honey Glazed Ham',
    'kaleidoscope_cookery:borscht': 'Borscht', 'kaleidoscope_cookery:egg_fried_rice': 'Egg Fried Rice',
    'ad_astra:desh_ingot': 'Desh Ingot', 'ad_astra:ice_shard': 'Ice Shard', 'ad_astra:raw_desh': 'Raw Desh',
    'mekanism:raw_osmium': 'Raw Osmium', 'tconstruct:cobalt_ingot': 'Cobalt Ingot',
    'minecraft:copper_block': 'Block of Copper', 'minecraft:iron_block': 'Block of Iron',
    'mekanism:block_tin': 'Block of Tin', 'mekanism:block_osmium': 'Block of Osmium',
    'immersiveengineering:storage_steel': 'Block of Steel',
    'easy_npc:npc_key': 'NPC Key', 'wrd:corrupted_greatsword': 'Corrupted Greatsword',
    'blue_skies:pyrope_gem': 'Pyrope Gemstone', 'blue_skies:aquite': 'Aquite', 'blue_skies:charoite': 'Charoite',
    'blue_skies:falsite_ingot': 'Falsite Ingot', 'blue_skies:ventium_ingot': 'Ventium Ingot',
    'blue_skies:horizonite_ingot': 'Horizonite Ingot',
}

FIGUREN = [
    ('davijaan', 'Davijaan', 'Einsiedler auf dem Mond · einzige Stelle, an der man Credits ausgibt'),
    ('zwerg', 'Der Zwerg', 'Schlucht auf halbem Weg zum Blue-Skies-Haus · kauft Metall gegen Credits'),
    ('bodhi', 'Bodhi Bad Dur', 'Wächter der Traumwelten · kauft Rohstoffe aus Everbright und Everdawn gegen Credits'),
]


def quest_credits():
    buecher = {}
    for cfg in sorted((WURZEL / 'tools' / 'questbuch').glob('*.cfg')):
        text = cfg.read_text(encoding='utf-8')
        bau = re.search(r'^# Bauen:\s*(.+)$', text, re.M)
        if not bau or '--hauptquests' in bau.group(1):
            continue
        titel = re.search(r'^title\s*=\s*(.+)$', text, re.M)
        aus = subprocess.run(bau.group(1).split(), cwd=WURZEL, capture_output=True, text=True, encoding='utf-8')
        if aus.returncode != 0:
            raise SystemExit(f'{cfg.name}: Generator-Fehler\n{aus.stderr}')
        je_k = {}
        for k, h, n, e, c in re.findall(r'Credits je Kn: K(\d+) Haupt (\d+) Neben (\d+) Ende (\d+) Copper (\d+)', aus.stdout):
            je_k[int(k)] = {'copper': int(c), 'haupt': int(h), 'neben': int(n), 'ende': int(e)}
        if je_k:
            buecher[cfg.stem] = {'titel': titel.group(1).strip() if titel else cfg.stem, 'k': je_k}
    return buecher


def je_quest():
    """Werte je Quest in Copper aus der Tabelle im Generator (Index = Kapitel)."""
    gen = (WURZEL / 'tools' / 'QuestbuchGen.java').read_text(encoding='utf-8')
    reihe = lambda name: [int(x) for x in re.search(name + r'\s*=\s*\{([^}]*)\}', gen).group(1).split(',')]
    return {'haupt': reihe('CREDITS_HAUPT'), 'neben': reihe('CREDITS_NEBEN')}


def stapel(zelle):
    m = re.search(r'(\d+)\s*×\s*`([\w.:-]+)`', zelle)
    return None if not m else {'n': int(m.group(1)), 'id': m.group(2), 'name': NAMEN.get(m.group(2), m.group(2))}


def handel(kuerzel):
    text = (TEXTE / f'dialoge_{kuerzel}.md').read_text(encoding='utf-8')
    teil = text.split('\n## Handel', 1)[1].split('\n## ', 1)[0]
    out = []
    for z in teil.split('\n'):
        z = z.strip()
        if not z.startswith('|') or '`' not in z:
            continue
        c = [x.strip() for x in z.strip('|').split('|')]
        preis = [p for p in (stapel(c[0]), stapel(c[1])) if p]
        ware = stapel(c[2])
        wert = lambda liste: sum(p['n'] * WERT[p['id'].split(':')[1].split('_')[0]] for p in liste
                                 if p['id'].endswith('_credit'))
        o = {'preis': preis, 'ware': ware, 'nutzungen': 'unbegrenzt' if 'unbegrenzt' in c[3] else int(re.sub(r'\D', '', c[3]) or 1),
             'hinweis': c[4] if len(c) > 4 else '', 'kostet': wert(preis), 'zahlt': wert([ware])}
        st = re.match(r'(\d)\s*·', o['hinweis'])
        if st:
            o['stufe'] = int(st.group(1))
        out.append(o)
    return out


def main():
    daten = {
        'stand': subprocess.run(['git', 'log', '-1', '--format=%cs'], cwd=WURZEL, capture_output=True, text=True).stdout.strip(),
        'buecher': quest_credits(),
        'jeQuest': je_quest(),
        'figuren': [{'id': k, 'name': n, 'rolle': r, 'handel': handel(k)} for k, n, r in FIGUREN],
    }
    js = '// Erzeugt von docs/credits/daten.py, nicht von Hand ändern\nconst DATA = ' + json.dumps(daten, ensure_ascii=False, indent=1) + ';\n'
    (HIER / 'data.js').write_text(js, encoding='utf-8', newline='\n')
    summe = sum(v['copper'] for b in daten['buecher'].values() for v in b['k'].values())
    print(f'data.js: {len(daten["buecher"])} Bücher, Quest-Credits {summe}, '
          + ', '.join(f'{f["name"]} {len(f["handel"])} Handel' for f in daten['figuren']))


if __name__ == '__main__':
    main()
