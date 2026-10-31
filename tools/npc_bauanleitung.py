"""Bauanleitung für die Story-Figuren im Easy-NPC-Editor (HTML und PDF, A4), zum Abhaken.

Aufruf (aus dem Projektordner):
    py tools/npc_bauanleitung.py
Ergebnis: docs/story/druck/npc_bauanleitung.html und .pdf (nicht im Git, jederzeit neu erzeugbar).

Quelle sind allein die Dialog-Dateien in docs/story/texte/dialoge_*.md: je Dialog Name, Priorität, Bedingung,
Text und Knöpfe mit Bedingung, Befehlen und Ziel. Entwurfsnotizen („Leitlinien“, „Offen beim Überarbeiten“)
bleiben weg. Platzhalter wie [Name] oder <x> sind rot markiert. Nach jeder Textänderung neu erzeugen.
"""
import html
import re
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import story_druck as druck  # Edge-Druck wiederverwenden

WURZEL = Path(__file__).resolve().parent.parent
TEXTE = WURZEL / 'docs' / 'story' / 'texte'
AUS = WURZEL / 'docs' / 'story' / 'druck'

# Datei, Figur, Objective der Dialogstufe, Ort; Reihenfolge wie in der Story
FIGUREN = [
    ('dialoge_dd3r8.md', 'DD3R8', 'dd3r8', 'Kapsel in der Basis (bis K7), danach Mars-Station'),
    ('dialoge_zwerg.md', 'Der Zwerg in der Schlucht', 'zwerg', 'Schlucht auf halbem Weg nach Süden'),
    ('dialoge_bodhi.md', 'Bodhi Bad Dur', 'bodhi', 'Blue-Skies-Haus'),
    ('dialoge_davijaan.md', 'Davijaan', 'davijaan', 'Mondbasis'),
    ('dialoge_cerina.md', 'Meisterin Cerina', 'cerina', 'erscheint am Elfenportal (Skript, aus ihrem Preset)'),
    ('dialoge_vos.md', 'Quinlan Vos', 'vos', 'Versteck auf Glacio, danach Basis'),
]
PLATZHALTER = re.compile(r'(\[Name\]|&lt;[xyz]&gt;|&lt;ST[\d-]+&gt;|&lt;uuid&gt;|PLATZHALTER\w*)')  # nach html.escape


def inline(t):
    t = html.escape(druck.EMOJI.sub('', t), quote=False)
    t = re.sub(r'`([^`]+)`', r'<code>\1</code>', t)
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t)
    t = re.sub(r'(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])', r'<i>\1</i>', t)
    return PLATZHALTER.sub(lambda m: f'<span class="ph">{m.group(1)}</span>', t)


def roh(t):
    """Text so, wie er in den Editor kommt (ohne Markdown, Gesten bleiben mit Sternchen)."""
    return PLATZHALTER.sub(lambda m: f'<span class="ph">{m.group(1)}</span>', html.escape(t, quote=False))


def knopf(z):
    m = re.match(r'- \*\*\[(.+?)\]\*\*(.*)', z, re.S)
    label, rest = m.group(1), m.group(2)
    bed = re.search(r'Bedingung:\s*(.+?)\s*→', rest, re.S)
    befehle = []
    bm = re.search(r'Befehle?:(.*)→', rest, re.S)
    if bm:
        befehle = re.findall(r'`([^`]+)`', bm.group(1))
    ziel = rest.rsplit('→', 1)[-1].strip()
    if ziel.startswith('`'):
        ziel_html = f'<code>{html.escape(ziel.strip("`"))}</code>'
    elif ziel == 'schließen':
        ziel_html = 'Gespräch schließen'
    else:
        ziel_html = inline(ziel.replace('Aktion: ', 'Aktion: '))
    lang = len(label) > 64
    zeilen = ''.join(f'<div class="cmd">{roh(b)}</div>' for b in befehle) or '–'
    return (f'<tr><td><span class="knopf">{roh(label)}</span>{" <span class=ph>(über 64 Zeichen)</span>" if lang else ""}</td>'
            f'<td>{inline(bed.group(1)) if bed else "–"}</td><td>{zeilen}</td><td>{ziel_html}</td></tr>')


def figur(datei, name, eintrag, ort):
    text = (TEXTE / datei).read_text(encoding='utf-8')
    # Kopf bis zum ersten --- und die Notizen am Ende weglassen
    text = text.split('\n---\n', 1)[1] if '\n---\n' in text else text
    text = text.split('## Offen beim Überarbeiten')[0]
    zeilen = text.split('\n')
    teile, anzahl = [], 0
    i = 0
    while i < len(zeilen):
        z = zeilen[i]
        if z.startswith('## '):
            teile.append(f'<h2>{inline(z[3:])}</h2>')
        elif z.startswith('#### '):
            m = re.match(r'#### `(\w+)`\s*·\s*Prio\s*(\d+)\s*(?:·\s*(.*))?', z)
            did, prio, bed = m.group(1), m.group(2), (m.group(3) or '').strip()
            i += 1
            rede = []
            while i < len(zeilen) and zeilen[i].startswith('>'):
                rede.append(zeilen[i][1:].strip())
                i += 1
            knoepfe = []
            while i < len(zeilen) and (zeilen[i].startswith('- **[') or (zeilen[i].startswith('  ') and knoepfe)):
                if zeilen[i].startswith('- **['):
                    knoepfe.append(zeilen[i])
                else:
                    knoepfe[-1] += ' ' + zeilen[i].strip()
                i += 1
            anzahl += 1
            sprechtext = ' '.join(rede)
            warn = ' <span class="ph">(über 512 Zeichen)</span>' if len(sprechtext) > 512 else ''
            bed_html = inline(bed) if bed and bed != 'ohne Bedingung' else '–'
            # je Vergleich eine Scoreboard-Bedingung im Editor: Name = Objective, Vergleich, Wert
            bedingungen = re.findall(r'`(story_\w+)\s*(=|≥)\s*(\d+)`', bed)
            if bedingungen:
                bed_html = ' und '.join(
                    f'Scoreboard, Name <code>{o}</code>, {"gleich (=)" if op == "=" else "größer gleich (≥)"} <b>{w}</b>'
                    for o, op, w in bedingungen)
            tab = ''.join(knopf(k) for k in knoepfe)
            teile.append(
                f'<div class="dialog"><h3><span class="box">☐</span> <code>{did}</code></h3>'
                f'<div class="meta">Priorität <b>{prio}</b> · Bedingung: {bed_html}</div>'
                f'<div class="text">{roh(sprechtext)}</div>{warn}'
                + (f'<table><thead><tr><th>Knopf</th><th>Bedingung</th><th>Befehle (je Zeile einer)</th><th>Ziel</th></tr></thead>'
                   f'<tbody>{tab}</tbody></table>' if tab else '')
                + '</div>')
            continue
        elif z.strip() and not z.startswith('---') and not z.startswith('>'):
            teile.append(f'<p class="hinweis">{inline(z.strip())}</p>')
        i += 1
    kopf = (f'<h1>{html.escape(name)}</h1>'
            f'<p class="figkopf">Ort: {html.escape(ort)} · Dialogstufe: Objective '
            f'<code>{eintrag}</code> · {anzahl} Dialoge · Quelle <code>docs/story/texte/{datei}</code></p>'
            f'<p class="figkopf">☐ Figur gesetzt · ☐ Skin · ☐ Name · ☐ alle Dialoge · ☐ Handel (falls vorhanden) · '
            f'☐ Preset exportiert</p>')
    return f'<section class="teil">{kopf}{"".join(teile)}</section>'


CSS = """
@page { size: A4; margin: 14mm 14mm 14mm 16mm; }
body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 9.5pt; line-height: 1.4; color: #111; }
.titel { page-break-after: always; padding-top: 30mm; }
.titel h1 { font-size: 24pt; }
section.teil { page-break-before: always; }
h1 { font-size: 17pt; border-bottom: 1.5pt solid #333; padding-bottom: 2mm; margin: 0 0 2mm; }
h2 { font-size: 12pt; margin: 6mm 0 2mm; page-break-after: avoid; background: #eee; padding: 1mm 2mm; }
h3 { font-size: 10.5pt; margin: 0 0 1mm; }
h3 code { font-size: 10.5pt; background: #e8eef8; padding: 0 1.5mm; }
.box { font-size: 12pt; }
.figkopf { color: #444; margin: 0 0 1.5mm; }
.dialog { border: 0.6pt solid #bbb; border-radius: 1.5mm; padding: 2mm 3mm; margin: 0 0 3mm; page-break-inside: avoid; }
.meta { color: #444; font-size: 8.8pt; margin-bottom: 1.5mm; }
.text { font-family: Georgia, serif; font-size: 10pt; background: #fafaf4; border-left: 2pt solid #c9b458; padding: 1.5mm 2.5mm; margin-bottom: 2mm; }
table { border-collapse: collapse; width: 100%; font-size: 8.6pt; }
th, td { border: 0.5pt solid #aaa; padding: 1mm 1.5mm; vertical-align: top; text-align: left; }
th { background: #f0f0f0; }
td:nth-child(1) { width: 26%; } td:nth-child(2) { width: 24%; } td:nth-child(4) { width: 14%; }
.knopf { font-weight: bold; }
.cmd { font-family: Consolas, monospace; font-size: 8.2pt; word-break: break-all; margin-bottom: 0.6mm; }
code { font-family: Consolas, monospace; font-size: 8.4pt; }
.ph { color: #b00000; font-weight: bold; }
.hinweis { color: #555; font-style: italic; margin: 1mm 0 3mm; }
ul, ol { margin: 0 0 2mm 5mm; padding: 0; }
@media screen { body { margin: 8mm auto; max-width: 190mm; padding: 0 4mm; } }
"""


def main():
    AUS.mkdir(parents=True, exist_ok=True)
    titel = (
        '<div class="titel"><h1>Immersive Engineering+<br>Story-Figuren bauen</h1>'
        f'<p>Bauanleitung für den Easy-NPC-Editor · Teil 1 · Stand {date.today().strftime("%d.%m.%Y")}</p>'
        '<h2>Einmal vorher</h2><ol>'
        '<li>Die Objectives <code>&lt;figur&gt;</code> legt das Skript <code>dialogstufen.js</code> beim Serverstart selbst an.</li>'
        '<li>Figur setzen, Skin und Namen eintragen.</li>'
        '<li>Je Figur alle Dialoge der Reihe nach anlegen und abhaken (☐).</li>'
        '<li>Fertige Figur als Preset exportieren und den Namen an Claude geben (Cerina braucht das für das Elfenportal, '
        'DD3R8 und Vos für ihr Erscheinen an neuen Orten).</li></ol>'
        '<h2>So liest man einen Dialog</h2><ul>'
        '<li><b>Name</b> (blau, höchstens 32 Zeichen) genau so übernehmen; die Knöpfe verweisen darauf.</li>'
        '<li><b>Priorität</b> und <b>Bedingung</b>: Der Einstieg jeder Stufe hat Priorität 100 und eine Bedingung vom Typ Scoreboard (Name = Objective, Vergleich, Wert; '
        'sie liest den Score des Spielers, der spricht, darum setzen alle Befehle den Wert mit <code>@a</code>); '
        'Unterdialoge haben Priorität 0 und keine Bedingung, sie öffnen nur über Knöpfe. Der Rückfall hat Priorität 1.</li>'
        '<li><b>Text</b> (gelber Rand, bis etwa 512 Zeichen) wird in das Textfeld kopiert. Sternchen *…* markieren Gesten; '
        'die kann man so lassen oder weglassen.</li>'
        '<li><b>Knöpfe</b> (höchstens 64 Zeichen): Bedingung am Knopf eintragen, dann jede Befehlszeile als eigene '
        'Befehls-Aktion, dann das Ziel (anderer Dialog, Gespräch schließen oder Handelsfenster).</li>'
        '<li><code>@initiator</code> ist der Spieler, der gerade spricht; <code>@a</code> sind alle Spieler.</li>'
        '<li><span class="ph">Rot</span> sind Platzhalter, die noch fehlen (Name des Zwergs, Koordinaten des Peilsenders).</li>'
        '</ul></div>')
    teile = '\n'.join(figur(*f) for f in FIGUREN)
    seite = (f'<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" '
             f'content="width=device-width, initial-scale=1"><title>Story-Figuren bauen</title>'
             f'<style>{CSS}</style></head><body>{titel}{teile}</body></html>')
    h = AUS / 'npc_bauanleitung.html'
    h.write_text(seite, encoding='utf-8')
    druck.AUS = AUS
    pdf = AUS / 'npc_bauanleitung.pdf'
    edge = next((e for e in druck.EDGE if e.exists()), None)
    if not edge:
        sys.exit(f'Edge nicht gefunden; HTML liegt in {h}.')
    import subprocess, tempfile, time
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
    print('geschrieben:', h, pdf, sep='\n  ')


if __name__ == '__main__':
    main()
