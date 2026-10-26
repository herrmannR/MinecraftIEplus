"""Druckfassung aller Story-Texte von Teil 1 zum Gegenlesen (HTML und PDF, A4).

Aufruf (aus dem Projektordner):
    py tools/story_druck.py
Ergebnis: docs/story/druck/story_teil1.html und story_teil1.pdf (nicht im Git, jederzeit neu erzeugbar).
Das PDF druckt Microsoft Edge im Hintergrund (--headless --print-to-pdf).

Inhalt in dieser Reihenfolge: Logbuch, Tempelrollen, Tagebuch, Dialoge (DD3R8, Davijaan, Bodhi Bad Dur,
Meisterin Cerina, Quinlan Vos), Questtexte der Story-Quests, Tooltips. Weggelassen wird Technik, die zum
Gegenlesen nicht nötig ist: Kopfnotizen der Dateien, Befehle in Dialogen, Steuerdatei-Zeilen.
Jeder Absatz trägt am linken Rand eine Kennung (z. B. L2·3, R4·1, TB·7), Dialoge ihren Namen (d0_wer),
Questtexte ihren Code (ST4-03), damit Rückmeldungen eine Stelle eindeutig nennen können.
"""
import html
import re
import subprocess
import sys
import tempfile
import time
from datetime import date
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
TEXTE = WURZEL / 'docs' / 'story' / 'texte'
AUS = WURZEL / 'docs' / 'story' / 'druck'
EDGE = [Path(r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'),
        Path(r'C:\Program Files\Microsoft\Edge\Application\msedge.exe')]

# Datei, Titel im Druck, Art, Kürzel für Absatzkennungen bzw. Sprecher
TEILE = [
    ('logbuch.md', 'Logbuch des Meisters', 'prosa', 'L'),
    ('tempelrollen.md', 'Tempelrollen', 'prosa', 'R'),
    ('tagebuch.md', 'Tagebuch des Meisters', 'prosa', 'TB'),
    ('fundstuecke.md', 'Fundstücke (Mars)', 'prosa', 'F'),
    ('dialoge_dd3r8.md', 'Dialoge: DD3R8', 'dialog', 'DD3R8'),
    ('dialoge_zwerg.md', 'Dialoge: Der Zwerg in der Schlucht', 'dialog', 'Zwerg'),
    ('dialoge_davijaan.md', 'Dialoge: Davijaan', 'dialog', 'Davijaan'),
    ('dialoge_bodhi.md', 'Dialoge: Bodhi Bad Dur', 'dialog', 'Bodhi'),
    ('dialoge_cerina.md', 'Dialoge: Meisterin Cerina', 'dialog', 'Cerina'),
    ('dialoge_vos.md', 'Dialoge: Quinlan Vos', 'dialog', 'Quinlan'),
    ('questtexte_story.md', 'Questtexte der Story-Quests (Buch 1)', 'quest', 'Q'),
    ('tooltips.md', 'Anzeigenamen und Tooltips', 'prosa', 'T'),
]
# Abschnitte (## …), die nur Technik enthalten
WEGLASSEN = ('So ist der Entwurf zu lesen', 'Aufgabenarten, die der Generator')
EMOJI = re.compile('[\U0001F300-\U0001FAFF\u2600-\u27BF\uFE0F]')


def inline(t):
    t = html.escape(EMOJI.sub('', t), quote=False)
    t = re.sub(r'`([^`]+)`', r'<code>\1</code>', t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t)
    t = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<i>\1</i>', t)
    return t


def tabelle(zeilen):
    rows = [[c.strip() for c in z.strip().strip('|').split('|')] for z in zeilen if not re.match(r'^\|[\s|:-]+\|$', z.strip())]
    kopf, rest = rows[0], rows[1:]
    h = '<table><thead><tr>' + ''.join(f'<th>{inline(c)}</th>' for c in kopf) + '</tr></thead><tbody>'
    h += ''.join('<tr>' + ''.join(f'<td>{inline(c)}</td>' for c in r) + '</tr>' for r in rest)
    return h + '</tbody></table>'


def knopf(z):
    """'- **[Text]** · Bedingung: … → Befehle: … → `ziel`' als Zweig ohne Befehle."""
    m = re.match(r'- \*\*\[(.+?)\]\*\*(.*)', z)
    label, rest = m.group(1), m.group(2)
    bed = re.search(r'Bedingung:\s*(.+?)(?:\s*→|$)', rest)
    ziele = re.findall(r'→\s*(`[^`]+`|schließen|Aktion: [^→]+?)(?=\s*$|\s*→)', rest)
    ziel = ziele[-1].strip() if ziele else ''
    if ziel.startswith('`'):
        name = ziel.strip('`')
        ziel_html = f'<a href="#{name}"><code>{html.escape(name)}</code></a>'
    elif ziel == 'schließen':
        ziel_html = '<span class="ende">Gespräch endet</span>'
    else:
        ziel_html = f'<span class="ende">{inline(ziel.replace("Aktion: ", ""))}</span>'
    befehle = ' <span class="tech">(mit Befehlen)</span>' if 'Befehl' in rest else ''
    bed_html = f'<div class="bed">nur wenn: {inline(bed.group(1))}</div>' if bed else ''
    return (f'<div class="knopf"><span class="pfeil">▸</span> <span class="label">„{inline(label)}“</span> '
            f'→ {ziel_html}{befehle}{bed_html}</div>')


def datei(name, titel, art, kurz):
    zeilen = (TEXTE / name).read_text(encoding='utf-8').splitlines()
    out = [f'<section class="teil"><h1>{html.escape(titel)}</h1>']
    i, abschnitt, nr, im_kopf, weg = 0, '', 0, True, False
    sprecher = kurz
    while i < len(zeilen):
        z = zeilen[i]
        s = z.strip()
        if z.startswith('# '):
            i += 1
            continue
        if z.startswith('## '):
            im_kopf = False
            kopf = z[3:]
            weg = kopf.startswith(WEGLASSEN)
            if not weg:
                abschnitt = kopf
                nr = 0
                offen = kopf.startswith(('Offen', 'Abgleich', 'Zuordnung', 'Rückfall'))
                cls = ' class="offen"' if kopf.startswith('Offen') else ''
                out.append(f'<h2{cls}>{inline(kopf)}</h2>')
            i += 1
            continue
        if im_kopf or weg:
            i += 1
            continue
        if s.startswith('**Soll:**'):
            out.append(f'<p class="soll">{inline(s)}</p>')
            i += 1
            continue
        if s.startswith(('**Steuerdatei:**', 'Scoreboard `story`')) or re.match(r'^\s{2,}`', z):
            i += 1
            continue
        if s == '---' or not s:
            i += 1
            continue
        if z.startswith('#### ') and art == 'dialog':
            m = re.match(r'#### `([^`]+)`(.*)', z)
            name, rest = m.group(1), m.group(2)
            bed = ''
            teile = [t.strip() for t in rest.split('·') if t.strip()]
            bed_teile = [t for t in teile if not t.startswith('Prio')]
            if bed_teile:
                bed = ' <span class="tech">wenn ' + inline(', '.join(bed_teile)) + '</span>'
            out.append(f'<h4 id="{name}"><code>{html.escape(name)}</code>{bed}</h4>')
            i += 1
            continue
        if z.startswith('### '):
            kopf = z[4:]
            m = re.match(r'(ST\d+-\d+) (.+?) · (\w+)', kopf)
            if m:
                out.append(f'<h3 id="{m.group(1)}"><span class="nr">{m.group(1)}</span>{inline(m.group(2))}</h3>')
                abschnitt, nr = m.group(1), 0
            else:
                out.append(f'<h3>{inline(kopf)}</h3>')
            i += 1
            continue
        if s.startswith('|'):
            block = []
            while i < len(zeilen) and zeilen[i].strip().startswith('|'):
                block.append(zeilen[i])
                i += 1
            out.append(tabelle(block))
            continue
        if art == 'dialog' and s.startswith('- **['):
            ganz = s
            i += 1
            # Folgezeilen eines Knopfs (Befehle, Ziel) sind eingerückt
            while i < len(zeilen) and zeilen[i].startswith('  ') and not zeilen[i].strip().startswith('- '):
                ganz += ' ' + zeilen[i].strip()
                i += 1
            out.append(knopf(ganz))
            continue
        if art == 'dialog' and s.startswith('> '):
            out.append(f'<p class="rede"><span class="wer">{sprecher}:</span> {inline(s[2:])}</p>')
            i += 1
            continue
        # Absatz oder Liste sammeln
        nr += 1
        if s.startswith('- '):
            items = []
            while i < len(zeilen) and zeilen[i].strip().startswith('- '):
                items.append(zeilen[i].strip()[2:])
                i += 1
                while i < len(zeilen) and zeilen[i].startswith('  ') and zeilen[i].strip() and not zeilen[i].strip().startswith('- '):
                    items[-1] += ' ' + zeilen[i].strip()
                    i += 1
            inhalt = '<ul>' + ''.join(f'<li>{inline(x)}</li>' for x in items) + '</ul>'
            out.append(f'<div class="abs">{marke(art, kurz, abschnitt, nr)}{inhalt}</div>')
            continue
        teil = []
        while i < len(zeilen) and zeilen[i].strip() and not re.match(r'^(#|\||- |---|> )', zeilen[i].strip()):
            teil.append(zeilen[i].strip())
            i += 1
        if s.startswith('> '):
            teil = [s[2:]]
            i += 1
        cls = 'abs kopfzeile' if s.startswith('> ') else 'abs'
        out.append(f'<p class="{cls}">{marke(art, kurz, abschnitt, nr)}{inline(" ".join(teil))}</p>')
    out.append('</section>')
    return '\n'.join(out)


def marke(art, kurz, abschnitt, nr):
    if art == 'dialog':
        return ''
    if art == 'quest':
        code = abschnitt if abschnitt.startswith('ST') else 'Q'
        return f'<span class="mk">{code}·{nr}</span>'
    m = re.match(r'(?:Teil|Rolle|Fundstück) (\d)', abschnitt)
    pre = f'{kurz}{m.group(1)}' if m else kurz
    return f'<span class="mk">{pre}·{nr}</span>'


CSS = """
@page { size: A4; margin: 18mm 58mm 18mm 26mm; }
body { font-family: Georgia, 'Times New Roman', serif; font-size: 10.5pt; line-height: 1.5; color: #111; }
h1, h2, h3, h4, .titel { font-family: 'Segoe UI', Arial, sans-serif; }
.titel { page-break-after: always; padding-top: 60mm; }
.titel h1 { font-size: 26pt; margin: 0 0 4mm; }
.titel p { font-size: 11pt; }
section.teil { page-break-before: always; }
h1 { font-size: 18pt; border-bottom: 1.5pt solid #333; padding-bottom: 2mm; margin: 0 0 6mm; }
h2 { font-size: 13pt; margin: 8mm 0 3mm; page-break-after: avoid; }
h2.offen { color: #7a4b00; border-top: 0.6pt dashed #7a4b00; padding-top: 3mm; }
h3 { font-size: 11pt; margin: 5mm 0 1.5mm; page-break-after: avoid; }
h3 .nr { font-family: Consolas, monospace; font-weight: normal; color: #555; margin-right: 3mm; }
h4 { font-size: 9.5pt; margin: 4.5mm 0 1mm; color: #333; page-break-after: avoid; }
h4 code { font-size: 9.5pt; background: #eee; padding: 0 1.2mm; }
.abs { position: relative; margin: 0 0 2.5mm; }
.kopfzeile { font-style: italic; color: #444; }
.mk { position: absolute; left: -20mm; width: 17mm; text-align: right; font-family: Consolas, monospace; font-size: 7.5pt; color: #888; top: 0.6mm; }
.rede { margin: 0 0 1.5mm; page-break-inside: avoid; }
.wer { font-family: 'Segoe UI', Arial, sans-serif; font-weight: bold; font-size: 9pt; letter-spacing: 0.3pt; }
.knopf { margin: 0 0 0.8mm 8mm; font-size: 9.8pt; }
.knopf .pfeil { color: #888; }
.knopf .label { font-style: italic; }
.bed, .tech { font-family: 'Segoe UI', Arial, sans-serif; font-size: 8pt; color: #777; font-style: normal; }
.bed { margin-left: 5mm; }
.ende { font-family: 'Segoe UI', Arial, sans-serif; font-size: 8.5pt; color: #555; }
code { font-family: Consolas, monospace; font-size: 8.5pt; }
.soll { font-family: 'Segoe UI', Arial, sans-serif; font-size: 8.5pt; color: #666; border-left: 2pt solid #ccc; padding-left: 2mm; margin: 0 0 2.5mm; }
@media screen { body { margin: 10mm 20mm 10mm 30mm; max-width: 130mm; } }
a { color: inherit; text-decoration: none; }
table { border-collapse: collapse; width: 100%; font-size: 8.8pt; margin: 2mm 0 4mm; page-break-inside: auto; }
th, td { border: 0.5pt solid #aaa; padding: 1mm 1.5mm; vertical-align: top; text-align: left; }
th { background: #eee; font-family: 'Segoe UI', Arial, sans-serif; }
ul { margin: 0 0 0 5mm; padding: 0; }
li { margin-bottom: 1mm; }
"""


def main():
    AUS.mkdir(parents=True, exist_ok=True)
    inhalt = ''.join(f'<li>{html.escape(t)}</li>' for _, t, _, _ in TEILE)
    titel = (f'<div class="titel"><h1>Immersive Engineering+<br>Story Teil 1</h1>'
             f'<p>Alle Texte zum Gegenlesen · Entwurf · Stand {date.today().strftime("%d.%m.%Y")}</p>'
             f'<p><b>Inhalt</b></p><ol>{inhalt}</ol>'
             '<p><b>Rückmeldung:</b> Jeder Absatz hat links eine Kennung (z. B. <code>L2·3</code> = Logbuch Teil 2, '
             'Absatz 3; <code>R4·1</code> Tempelrolle 4; <code>TB·7</code> Tagebuch). Dialoge nennt man mit ihrem Namen '
             '(<code>d0_wer</code>), Story-Quests mit ihrem Code (<code>ST4-03</code>). Der rechte Rand ist für Notizen frei.</p>'
             '<p><b>Dialoge</b> stehen wie im Drehbuch: zuerst, was die Figur sagt, darunter mit ▸ die Antworten der '
             'Spieler und wohin sie führen. „wenn …“ ist die Stufe, in der der Dialog erscheint; Befehle sind weggelassen.</p></div>')
    teile = '\n'.join(datei(*t) for t in TEILE)
    seite = (f'<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Story Teil 1</title>'
             f'<style>{CSS}</style></head><body>{titel}{teile}</body></html>')
    h = AUS / 'story_teil1.html'
    h.write_text(seite, encoding='utf-8')
    edge = next((e for e in EDGE if e.exists()), None)
    if not edge:
        sys.exit(f'Edge nicht gefunden; HTML liegt in {h}, im Browser öffnen und drucken.')
    pdf = AUS / 'story_teil1.pdf'
    # eigenes Profil, sonst hängt sich Edge an ein offenes Fenster und schreibt kein PDF
    # Edge kehrt sofort zurück und druckt in einem zweiten Prozess; deshalb auf die fertige Datei warten
    if pdf.exists():
        pdf.unlink()
    profil = tempfile.mkdtemp(prefix='edge_druck_')
    subprocess.run([str(edge), '--headless', '--disable-gpu', '--no-pdf-header-footer', f'--user-data-dir={profil}',
                    f'--print-to-pdf={pdf}', h.as_uri()], timeout=120,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    groesse = -1
    for _ in range(120):
        if pdf.exists() and pdf.stat().st_size == groesse and groesse > 0:
            break
        groesse = pdf.stat().st_size if pdf.exists() else -1
        time.sleep(0.5)
    if not pdf.exists():
        sys.exit(f'Kein PDF entstanden; HTML liegt in {h}, im Browser öffnen und drucken.')
    print('geschrieben:', h, pdf, sep='\n  ')


if __name__ == '__main__':
    main()
