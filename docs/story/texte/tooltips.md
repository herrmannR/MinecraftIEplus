# Anzeigenamen und Tooltips der Story-Items, Teil 1 (Entwurf)

> Entwurf von Claude, 2026-10-21 (O50). Der User überarbeitet. Umsetzung: Namen in `kubejs/startup_scripts/teil1_items.js`, Tooltips in `kubejs/client_scripts/tooltips_teil1.js` (graue Zeilen). Ablauf: `../ABLAUF.md` (T-…, Abschnitt 6).
>
> **Leitlinien:** höchstens zwei Zeilen, jede unter etwa 50 Zeichen. Erste Zeile Stimmung, zweite Zeile, wozu das Item dient. Kein Star-Wars-Wort (O9).

| Item-ID | Anzeigename | Tooltip | Stand |
|---|---|---|---|
| `kubejs:relikt` | Relikt | „Warm, obwohl es kalt sein müsste.“ / „Es ruft. Nur nicht dich.“ | ersetzt den bisherigen Tooltip |
| `kubejs:galaktischer_strahlenschutz` | Galaktischer Strahlenschutz | „Gefertigt von Meister Cerina. Darin schläft das Relikt.“ / „Bauteil des Calorite-Triebwerks (Rakete T4).“ | ersetzt „Gefertigt vom Hellen Elfen“ |
| `kubejs:kaputter_klonhelm` | **Verbeulter Pilotenhelm** | „Visier gesprungen, Funk tot.“ / „Davijaan will ihn zurück, aber heil.“ | neu; Name siehe „Offen“ |
| `kubejs:klonhelm_repariert` | **Pilotenhelm des Einsiedlers** | „Der Funk rauscht wieder.“ / „Bring ihn Davijaan auf dem Mond.“ | neu |
| `kubejs:siegel_der_traumwelten` | Siegel der Traumwelten | „Licht und Dämmerung zugleich.“ / „Geschenk von Bodhi Bad Dur.“ | neu |
| `kubejs:tempelrolle_1` | Tempelrolle: Das Tor | „Alt und brüchig. Rechtsklick zum Lesen.“ | neu |
| `kubejs:tempelrolle_2` | Tempelrolle: Vom Blut | wie oben | neu |
| `kubejs:tempelrolle_3` | Tempelrolle: Vom Endlosen | wie oben | neu |
| `kubejs:tempelrolle_4` | Tempelrolle: Von der Heilung | wie oben | neu |
| `kubejs:tagebuch_des_meisters` | Tagebuch des Meisters | „Eilig geschrieben, die letzten Seiten zittrig.“ / „Rechtsklick zum Lesen.“ | neu (ersetzt das geschriebene Buch in `meister_truhe.json`) |

Gelesene Rollen und das Tagebuch bleiben im Inventar (B6); die Zeile „Rechtsklick zum Lesen“ bleibt deshalb immer.

## Patchouli-Buch „Logbuch des Meisters“

| Feld | Text |
|---|---|
| Name | Logbuch des Meisters |
| Untertitel | Entschlüsselt von DD3R8 |
| Startseite | Der Datenspeicher des Meisters hat beim Einschlag gelitten. DD3R8 entschlüsselt ihn Stück für Stück. Neue Teile erscheinen hier, sobald sie fertig sind. |
| Kapitel | Logbuch (Teil 1–5) · Tempelrollen (1–4) · Tagebuch |
| Gesperrte Einträge | Patchouli zeigt Einträge hinter einem Advancement ausgegraut an, außer sie sind als `secret` markiert; dann sind sie unsichtbar. Das Bauplan-Buch macht es schon so. 🔵 Im Spiel ansehen, wie es aussieht. |

## Offen beim Überarbeiten

- **„Klonhelm“ im Anzeigenamen:** Bisher geplant war „Kaputter Klonhelm“ bzw. „Klonhelm des Einsiedlers“ (`18_STORY.md`, O25). Das Wort „Klon“ verrät aber schon im Inventar, wer Davijaan ist, und das soll vorerst geheim bleiben (User, 2026-10-21). Vorschlag: „Verbeulter Pilotenhelm“ und „Pilotenhelm des Einsiedlers“, passend zum Funkhelm des Piloten; die IDs bleiben.
- **Gesperrte Einträge im Logbuch:** unsichtbar lassen (Spieler sehen nicht, wie viel noch kommt) oder sichtbar als „Noch nicht entschlüsselt“?
