# Erzatlas

> Stand 2026-10-12, Minecraft 1.20.1. Zeigt die Soll-Verteilung aus `../03_ERZGENERATION.md`; die Zahlen sind Vorschläge und im Spiel noch nicht getestet.

Grafische Übersicht aller Erze: Fundorte, Mengen und Verbrauch pro Mod.

- **Live-Seite (Artifact, privat):** https://claude.ai/artifact/LWwdvCpXRwaHCa8NstSc4g
- `data.js` – **die Daten** (Erze, Fundorte, Werte, Verbrauch). Hier wird angepasst, z. B. wenn Worldgen-Werte oder Cross-Mod-Rezepte sich ändern.
- `template.html` – Layout, Styles, Render-Logik, Texte unter der Tabelle
- `icons.js` – Erz-Texturen als Data-URIs (Vanilla, IE, Mekanism aus 1.18.2; Ad Astra, Star Wars Planets und Blue Skies aus den 1.20.1-JARs)
- `build.sh` – setzt alles zu `erzatlas.html` zusammen

Ablauf bei Änderungen: `data.js` anpassen → `bash build.sh` → `erzatlas.html` an dieselbe Artifact-URL veröffentlichen.

## Herkunft der Werte (Stand 2026-10-12)

- Overworld: unsere Configs in `config-overrides/` (Mekanism `world.toml`, IE-Serverconfig)
- Blue Skies, Planeten: Standardwerte aus den JSON-Features der Mod-JARs; mit „NEU“ markierte Quellen sind unsere Vorschläge aus `03_ERZGENERATION.md`
- Verbrauch: Bewertung aus der Rezeptzählung für 1.18.2 übernommen (noch nicht neu gezählt), neue Zeilen nach Progressionsrolle
