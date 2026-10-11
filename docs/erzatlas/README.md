# Erzatlas

> ⚠️ **Stand 1.18.2 (Twilight Forest, Beyond Earth).** Nach dem Wechsel auf 1.20.1 muss diese Übersicht samt Artifact-Seite neu aufgebaut werden; siehe TODO-Liste in `../00_STATUS.md`.

Grafische Übersicht aller Erze: Fundorte, Mengen und Verbrauch pro Mod.

- **Live-Seite (Artifact, privat):** https://claude.ai/artifact/LWwdvCpXRwaHCa8NstSc4g
- `data.js` – **die Daten** (Erze, Fundorte, Werte, Verbrauch). Hier wird angepasst, z. B. wenn Cross-Mod-Rezepte den Verbrauch ändern.
- `template.html` – Layout, Styles, Render-Logik
- `icons.js` – Erz-Texturen als Data-URIs (aus Minecraft 1.18.2 und den Mod-JARs)
- `build.sh` – setzt alles zu `erzatlas.html` zusammen

Ablauf bei Änderungen: `data.js` anpassen → `bash build.sh` → `erzatlas.html` an dieselbe Artifact-URL veröffentlichen.

## Herkunft der Werte (Stand 2026-10-08)

- Overworld/Twilight Forest: unsere Configs bzw. KubeJS-Skripte (`config-overrides/`, `kubejs/`), siehe `03_ERZGENERATION.md`
- Planeten: aus dem Bytecode von Beyond Earth 6.2 (`world/oregen/OreGeneration`) und Star Wars Planets 1.15 per `javap` ausgelesen
- Verbrauch: Rezeptzählung aus den JARs (`14_ERZ_MOD_MATRIX.md`) plus Progressionsrolle
