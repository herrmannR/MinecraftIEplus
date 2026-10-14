# Vorlage für `<mod>/WISSEN.md`

Die Notiz ist für Claude, nicht für den User. Sie soll eine spätere Sitzung in einer Minute arbeitsfähig machen: welche JARs, wo die Quellen liegen, wie die Progression aussieht, welche Zahlen gelten, welche IDs die Items haben und was offen ist. `data.js` bleibt die ausführliche Fassung; die Notiz verweist darauf und wiederholt keine Fließtexte.

Für die Notiz gelten dieselben Regeln wie für die Seite: Jede Angabe stammt aus einer Datei, die beim Schreiben offen war. Fundstellen, die man erst beim Schreiben der Notiz nachschlägt (Ordner, Tag-Inhalte, Klassennamen), vorher im entpackten JAR ansehen.

Vorbilder: `docs/modpfade/mekanism/WISSEN.md` (Mod ohne Buch), `adastra/WISSEN.md` (Mod mit Buch und Tags), `swgc/WISSEN.md` (Mechanik nur im Code).

```markdown
# <Mod> – Wissen

> Nachschlage-Notiz für Claude, Stand <Datum>, Minecraft 1.20.1. Alles aus den JARs [und der Config] der Testinstanz gelesen, zusammengefasst aus `data.js` (Seite: <Artifact-URL>). Ausführliche Texte stehen in `data.js`. Gilt für den Mod ohne unsere KubeJS-Änderungen.

## JARs

| Mod | Version | Kürzel | Namespace | Rolle |
|---|---|---|---|---|
| <Name> | <Version> | `<kürzel>=<Teil des JAR-Namens>` | `<ns>` | Hauptmod / Addon / Brücke |

## Wo die Quellen liegen

- **Buch** (Pfad, Kapitel = Phasen der Seite) oder, ohne Buch, Advancements / Klassen
- **Rezepte**: Ordner, Rezepttypen mit Anzahl, Bedingungen (`forge:mod_loaded`, `tag_filled`)
- **Strukturen**, **Tags**, **Planeten/Worldgen**, **Config-Dateien** der Instanz
- **Nur im Code**: Klassen mit voller Paketangabe, je Mechanik eine Zeile

## Progression in Kürze

Eine nummerierte Zeile je Phase: Schritte mit Schlüsselitems und dem, was jeweils das Tor ist.

## Schlüsselzahlen

Werte aus Rezept und Config, die man für Planung und KubeJS braucht.

## Pack-Bezug

Tags, über die andere Mods andocken; Abkürzungen; Verweise auf die Ü-Abschnitte in `CROSSMOD_AUFFAELLIGKEITEN.md`. Ansatzpunkte für KubeJS als Befund, nicht als Entscheidung.

## In den Dateien, aber nicht im Spiel (wenn es so etwas gibt)

## Offen

Dasselbe wie im README unter „Offen“, mit dem Hinweis, wo man nachlesen könnte.

## IDs der Seite

Erzeugt mit `java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> <mod>/data.js <ns> …` aus den Sprachschlüsseln.

<Tabelle aus IdIndex>
```

Die ID-Tabelle wird nicht von Hand geschrieben, sondern angehängt:

```bash
java -Dstdout.encoding=UTF-8 tools/IdIndex.java <arbeitsordner> <mod>/data.js <ns> [<ns> …] >> <mod>/WISSEN.md
```

Die Namespaces hinter `data.js` sind die der Seite (Hauptmod und Addons); sie stehen dann vorn, wenn ein Name in mehreren Mods vorkommt. Ohne `-Dstdout.encoding=UTF-8` kommen Umlaute unter Windows falsch an. Ändert sich `data.js`, die Tabelle ab der Zeile `| Name | ID |` abschneiden und neu anhängen.
