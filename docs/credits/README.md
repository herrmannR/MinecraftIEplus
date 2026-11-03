# Credits und Handel (Übersichtsseite)

Live-Seite: https://claude.ai/artifact/V8orFzHVUp5bNcC9nax7Cp (privat).

Zeigt die Quest-Credits je Kapitel, die kumulierten Credits gegen die Preise der Shop-Stufen, die Preise je Ware und alle Handel von Davijaan, Zwerg und Bodhi. Grundlage: B8 in `docs/20_ENTSCHEIDUNGEN.md`, Begründung in `docs/21_BALANCING.md` Abschnitt 5.

## Neu bauen

```bash
bash docs/credits/build.sh
```

1. `daten.py` baut alle Questbücher mit `tools/QuestbuchGen.java` neu und liest dessen Ausgabe „Credits je Kn“; dazu die Tabelle `CREDITS_HAUPT`/`CREDITS_NEBEN` aus dem Generator und die Abschnitte „## Handel“ aus `docs/story/texte/dialoge_{davijaan,zwerg,bodhi}.md`. Ergebnis: `data.js`.
2. `template.html` + `data.js` → `credits.html`.
3. `credits.html` an dieselbe URL veröffentlichen.

Nichts in `data.js` von Hand ändern. Neue Waren oder Preise kommen in die Handelstabellen der Dialogdateien (daraus baut auch `tools/npc_preset.py` die Presets), neue Quest-Werte in den Generator. Neue Item-IDs brauchen einen Anzeigenamen in `NAMEN` (`daten.py`).

Nicht im Handbuch (Sammelseite) eingetragen; das nur auf Befehl des Users.
