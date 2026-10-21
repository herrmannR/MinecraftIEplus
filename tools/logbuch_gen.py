"""Baut das Patchouli-Buch „Logbuch des Meisters“ aus den Textentwürfen.

Aufruf (aus dem Projektordner):
    py tools/logbuch_gen.py

Quellen (Wortlaut, den der User überarbeitet):
    docs/story/texte/logbuch.md       ## Teil n · „Titel“ (…)   → Kapitel Logbuch, Eintrag teil<n>
    docs/story/texte/tempelrollen.md  ## Rolle n · Titel        → Kapitel Tempelrollen, Eintrag rolle_<n>
    docs/story/texte/tagebuch.md      ## Tagebuch               → Kapitel Tagebuch, Eintrag tagebuch
Ziele (werden komplett neu geschrieben):
    patchouli_books/logbuch/                      Buch (gehört in den Ordner patchouli_books/ der Instanz)
    kubejs/data/ieplus/advancements/logbuch/      je Eintrag ein Advancement, vergibt server_scripts/story/logbuch.js

Umsetzung der Markdown-Zeilen:
    leere Zeile      neuer Absatz            **Text** allein   fett (Überschrift im Text)
    > *Text*         kursive Kopfzeile       *Text*            kursiv
    - Text           Listenpunkt             ---               neue Seite
    **Soll:** …      wird übersprungen (Vorgabe, kein Buchtext)
"""
import json
import re
import shutil
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
TEXTE = WURZEL / 'docs' / 'story' / 'texte'
BUCH = WURZEL / 'patchouli_books' / 'logbuch'
ADV = WURZEL / 'kubejs' / 'data' / 'ieplus' / 'advancements' / 'logbuch'

BUCH_ID = 'patchouli:logbuch'
# True: gesperrte Einträge sind unsichtbar; False: ausgegraut sichtbar (wie das Bauplan-Buch). Entscheidet der User.
GEHEIM = False
# Zeichen je Seite (Schätzung für die Standardschrift; die erste Seite trägt den Titel des Eintrags)
SEITE_ERSTE, SEITE_WEITERE, ZEILE = 280, 340, 21

KAPITEL = {
    'logbuch': ('Logbuch', 'Die entschlüsselten Teile seines Datenspeichers.', 'minecraft:writable_book', 1),
    'tempelrollen': ('Tempelrollen', 'Alte Schriften aus dem Tempel auf der heißesten Welt.', 'kubejs:tempelrolle_1', 2),
    'tagebuch': ('Tagebuch', 'Was er schrieb, nachdem er vom Droiden getrennt wurde.', 'kubejs:tagebuch_des_meisters', 3),
}


def abschnitte(datei, muster, ende):
    """Liefert (Überschrift, Zeilen) je Abschnitt '## …', der zu muster passt, bis zum Abschnitt ende."""
    aktuell, zeilen, aus = None, [], []
    for z in (TEXTE / datei).read_text(encoding='utf-8').splitlines():
        if z.startswith('## '):
            if aktuell:
                aus.append((aktuell, zeilen))
            aktuell, zeilen = None, []
            if z[3:].startswith(ende):
                break
            if re.match(muster, z[3:]):
                aktuell = z[3:]
            continue
        if aktuell is not None:
            zeilen.append(z)
    if aktuell:
        aus.append((aktuell, zeilen))
    return aus


def inline(t):
    t = re.sub(r'\*\*(.+?)\*\*', r'$(l)\1$()', t)
    t = re.sub(r'\*(.+?)\*', r'$(o)\1$()', t)
    return t


def bloecke(zeilen):
    """Absätze als Liste; None steht für einen erzwungenen Seitenumbruch."""
    aus, absatz = [], []

    def fertig():
        if absatz:
            aus.append(''.join(absatz))
            absatz.clear()
    for z in zeilen:
        z = z.rstrip()
        if z.startswith('**Soll:**'):
            continue
        if z.strip() == '---':
            fertig()
            aus.append(None)
        elif not z.strip():
            fertig()
        elif z.startswith('> '):
            fertig()
            aus.append(inline(z[2:]))
        elif z.startswith('- '):
            absatz.append('$(li)' + inline(z[2:]))
        else:
            absatz.append((' ' if absatz and not absatz[-1].startswith('$(li)') else '') + inline(z))
    fertig()
    # Überschrift (nur fett) nie allein am Seitenende: mit dem folgenden Absatz verbinden
    verbunden = []
    for b in aus:
        if verbunden and b is not None and verbunden[-1] is not None and re.fullmatch(r'\$\(l\)[^$]*\$\(\)', verbunden[-1]):
            verbunden[-1] = verbunden[-1] + '$(br2)' + b
        else:
            verbunden.append(b)
    aus = verbunden
    while aus and aus[-1] is None:
        aus.pop()
    while aus and aus[0] is None:
        aus.pop(0)
    return aus


def laenge(t):
    sichtbar = re.sub(r'\$\([^)]*\)', '', t)
    return len(sichtbar) + t.count('$(li)') * ZEILE


def seiten(absaetze):
    """Verteilt Absätze auf Textseiten; zu lange Absätze werden an Satzenden geteilt."""
    stuecke = []
    for a in absaetze:
        if a is None:
            stuecke.append(None)
            continue
        if laenge(a) <= SEITE_WEITERE:
            stuecke.append(a)
            continue
        teil = ''
        for satz in re.split(r'(?<=[.!?…])\s+', a):
            if teil and laenge(teil + ' ' + satz) > SEITE_WEITERE:
                stuecke.append(teil)
                teil = satz
            else:
                teil = (teil + ' ' + satz).strip()
        if teil:
            stuecke.append(teil)
    aus, seite = [], ''
    for s in stuecke:
        grenze = SEITE_ERSTE if not aus else SEITE_WEITERE
        if s is None:
            if seite:
                aus.append(seite)
            seite = ''
            continue
        neu = (seite + '$(br2)' + s) if seite else s
        if seite and laenge(neu) + ZEILE > grenze:
            aus.append(seite)
            seite = s
        else:
            seite = neu
    if seite:
        aus.append(seite)
    return aus


def schreibe(pfad, daten):
    pfad.parent.mkdir(parents=True, exist_ok=True)
    pfad.write_text(json.dumps(daten, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


def advancement(eintrag, titel, icon):
    schreibe(ADV / f'{eintrag}.json', {
        'parent': 'ieplus:logbuch/root',
        'display': {'icon': {'item': icon}, 'title': titel, 'description': 'Im Logbuch des Meisters freigeschaltet',
                    'frame': 'task', 'show_toast': False, 'announce_to_chat': False, 'hidden': True},
        'criteria': {'freigeschaltet': {'trigger': 'minecraft:impossible'}}})


def eintrag(eid, kapitel, titel, icon, sortnum, absaetze):
    daten = {'name': titel, 'icon': icon, 'category': f'patchouli:{kapitel}',
             'advancement': f'ieplus:logbuch/{eid}', 'sortnum': sortnum,
             'pages': [{'type': 'patchouli:text', 'text': s} for s in seiten(absaetze)]}
    if GEHEIM:
        daten['secret'] = True
    schreibe(BUCH / 'en_us' / 'entries' / f'{eid}.json', daten)
    advancement(eid, titel, icon)
    return eid, len(daten['pages'])


def main():
    for d in (BUCH, ADV):
        if d.exists():
            shutil.rmtree(d)
    schreibe(BUCH / 'book.json', {
        'name': 'Logbuch des Meisters',
        'subtitle': 'Entschlüsselt von DD3R8',
        'landing_text': 'Der Datenspeicher des Meisters hat beim Einschlag gelitten. DD3R8 entschlüsselt ihn Stück für Stück. '
                        'Neue Teile erscheinen hier, sobald sie fertig sind.',
        'book_texture': 'patchouli:textures/gui/book_gray.png',
        'model': 'patchouli:book_gray',
        'show_progress': False,
        'i18n': False})
    for kid, (name, beschr, icon, nr) in KAPITEL.items():
        schreibe(BUCH / 'en_us' / 'categories' / f'{kid}.json',
                 {'name': name, 'description': beschr, 'icon': icon, 'sortnum': nr})
    schreibe(ADV / 'root.json', {
        'display': {'icon': {'item': 'minecraft:writable_book'}, 'title': 'Logbuch des Meisters',
                    'description': 'Entschlüsselte Teile', 'background': 'minecraft:textures/block/smooth_stone.png',
                    'frame': 'task', 'show_toast': False, 'announce_to_chat': False, 'hidden': True},
        'criteria': {'freigeschaltet': {'trigger': 'minecraft:impossible'}}})

    ergebnis = []
    for kopf, zeilen in abschnitte('logbuch.md', r'Teil \d', 'Offen'):
        m = re.match(r'Teil (\d) · „(.+?)“', kopf)
        ergebnis.append(eintrag(f'teil{m.group(1)}', 'logbuch', f'Teil {m.group(1)}: {m.group(2)}',
                                'minecraft:writable_book', int(m.group(1)), bloecke(zeilen)))
    for kopf, zeilen in abschnitte('tempelrollen.md', r'Rolle \d', 'Zuordnung'):
        m = re.match(r'Rolle (\d) · (.+)', kopf)
        ergebnis.append(eintrag(f'rolle_{m.group(1)}', 'tempelrollen', m.group(2).strip(),
                                f'kubejs:tempelrolle_{m.group(1)}', int(m.group(1)), bloecke(zeilen)))
    for kopf, zeilen in abschnitte('tagebuch.md', r'Tagebuch$', 'Abgleich'):
        ergebnis.append(eintrag('tagebuch', 'tagebuch', 'Tagebuch des Meisters',
                                'kubejs:tagebuch_des_meisters', 1, bloecke(zeilen)))
    erwartet = [f'teil{i}' for i in range(1, 6)] + [f'rolle_{i}' for i in range(1, 5)] + ['tagebuch']
    fehlt = [e for e in erwartet if e not in [x[0] for x in ergebnis]]
    if fehlt:
        raise SystemExit('Fehlende Einträge: ' + ', '.join(fehlt))
    for eid, n in ergebnis:
        print(f'{eid:10} {n} Seiten')


if __name__ == '__main__':
    main()
