# Schema von `<mod>/data.js`

Die Datei definiert genau eine Konstante `PAGE` (davor dürfen Hilfskonstanten stehen, etwa eine Blockliste für Baupläne). Das Template rendert daraus die Seite. Vollständige Beispiele: `docs/modpfade/tinkers/data.js`, `ie/data.js`, `botania/data.js`.

Die ersten Zeilen sind ein Kommentar mit Stand (Datum, Minecraft-Version) und den gelesenen JARs samt Version.

```js
const PAGE = {
  pageTitle: "Modpfad Mekanism",          // Titel der Seite; build.sh liest genau dieses Feld
  title: "Mekanism",                       // Überschrift; das Template hängt „Modpfad“ an
  accent: ["#5fb3a0", "#2f7f6d"],          // Akzentfarbe [dunkles Thema, helles Thema], passend zum Mod
  lede: "…",                               // ein Absatz: von wo bis wo führt der Weg
  mods: [                                  // [Name, Version, Art]; Art: "main" | "addon" | "bridge"
    ["Mekanism", "10.4.16.80", "main"],
  ],
  phases: [ { t, sub, steps: [ … ] } ],
  solo: [ … ],                             // „Für sich stehend“
  bridges: [ … ],                          // „Brücken zu anderen Mods“
  foot: "…",                               // Quellen, Einschränkungen, was noch nicht ausgelesen ist
};
```

## Phase

```js
{
  t: "Holz und Stein",                                   // Titel
  sub: "Buch „Materials and You“. Alles entsteht am …",  // Buchkapitel und Voraussetzung, ein bis zwei Sätze
  steps: [ … ],
}
```

## Schritt

Alle Felder außer `t` sind optional; die Reihenfolge auf der Seite ist fest: Bilder, Bauplan, Items, Text, Tabelle, Braucht.

```js
{
  t: "Seared Melter mit Heater",
  addon: "TCIntegrations",                 // nur wenn der Schritt aus einem Addon stammt
  pics: [["tconstruct:book/images/melter", "Bildunterschrift"]],   // große Bilder
  plan: { … } | [ { … }, { … } ],          // Bauplan, siehe unten
  items: [                                 // Kacheln: [Bild | null, englischer Name, eine Zeile]
    ["tconstruct:block/smeltery/controller/melter_active", "Seared Melter", "5 Seared Brick + 1 Gauge"],
  ],
  text: `<p>…</p>`,                        // HTML; <p>, <b>, <ul>, <code>
  table: { head: ["Material", "Eigenschaft", "Quelle"], rows: [[Bild | null, "Zelle 1", "Zelle 2", "Zelle 3"]] },  // auch als Liste mehrerer Tabellen
  needs: [["Seared Brick", "m"], ["Kohle oder Lava", "v"], ["Stahl", "x", "IE"]],
}
```

- **Namen** in `items` und in der ersten Tabellenspalte stehen so in der Sprachdatei. Mehrere Namen in einem Feld mit `, ` trennen; `NameCheck` prüft jeden Teil.
- **Die Zeile einer Kachel** nennt Zutaten oder Zweck, knapp. Mengen nur, wenn sie aus dem Rezept gelesen sind.
- **`needs`**: `[Name, Herkunft, Zusatz]`. Herkunft `v` Vanilla, `m` dieser Mod, `a` Addon, `x` anderer Mod im Pack. Der Zusatz ist eine Menge, ein Zweck oder bei `x` der Name des Mods. Hier stehen Rohstoffe und Vorstufen, keine Einzelteile.
- **`text`**: zwei bis vier Sätze pro Absatz, ein bis drei Absätze. Was ist es, wie arbeitet es, was schaltet es frei, worin unterscheidet es sich vom Vorgänger.

## Bilder

Ein Bild ist ein Verweis `"namespace:pfad"`; `mkicons.sh` sammelt alle Verweise ein.

| Verweis | Datei im JAR |
|---|---|
| `"tconstruct:item/materials/pattern"` | `assets/tconstruct/textures/item/materials/pattern.png` |
| `"tconstruct:book/images/melter"` | `assets/tconstruct/book/images/melter.png` (Buchbild) |
| `"botania:gui/entries/pure_daisy"` | `assets/botania/textures/gui/entries/pure_daisy.png` |
| `"…/pickaxe/handle_x+head_y+binding_z"` | mehrere Ebenen aus demselben Ordner übereinander |
| `"…/a+/item/tool/b/c"` | Ebene mit führendem `/` ist ein vollständiger Pfad unter `textures/` |
| `"render:model/ie_crusher"` | gezeichnetes 3D-Modell, groß (für `pics`) |
| `"render:model/ie_crusher_s"` | dasselbe klein (für Kacheln und Bauplan-Legende) |

Erlaubte erste Pfadteile: `item`, `block`, `book`, `gui`, `image`, `model`, `models`, `entity`, `misc`. Animierte Texturen werden auf das erste Bild beschnitten. `null` zeigt ein Kürzel aus den Anfangsbuchstaben.

### 3D-Modelle zeichnen

`tools/renders.txt`, eine Zeile je Bild:

```
ie_crusher 215 30 ie/assets/immersiveengineering/models/block/metal_multiblock/crusher.obj
ie_connector_lv 215 30 ie/assets/…/connector_lv.obj texture=immersiveengineering:block/connector/connector_lv
```

Name, Gier, Neigung (Grad; `215 30` ist die übliche Schrägsicht von oben, `0 90` eine Draufsicht), Modellpfad relativ zum Arbeitsordner (mehrere mit Komma), danach Texturen für Platzhalter. Steht in der `.mtl` des Modells `map_Kd #texture`, braucht es `texture=namespace:pfad`; den Wert liefert die Modell-JSON, die das OBJ einbindet (Feld `textures`).

## Bauplan

```js
plan: {
  name: "Crusher",
  size: "5×3×3",                           // Breite × Höhe × Tiefe, wie NbtDump sie ausgibt (x×y×z)
  key: { C: ["Steel Scaffolding", "immersiveengineering:block/metal_decoration/steel_scaffolding"], … },
  layers: ["CCCCA CCACA CCACA", ".EEEA AEAEA BEEEA", ".FFF. .FFF. .FFF."],
  form: "Hammer auf den mittleren Block der Vorderseite.",
}
```

- `layers`: von unten nach oben; je Ebene die Reihen von `NbtDump` unverändert, durch Leerzeichen getrennt; `.` ist Luft.
- `key`: Buchstabe → `[Name, Bild | null]`. Die Stückliste zählt das Template selbst.
- Sehr hohe Strukturen: `layers` weglassen und `count: { A: 25, … }` angeben; dann erscheint nur die Stückliste. In `form` sagen, wie die Struktur aufgebaut ist.
- Eine Blocklage dicke Strukturen als Ansicht von vorn: eine einzige Ebene, Reihen von oben nach unten, dazu `caps: ["Ansicht von vorn"]`.
- `form`: wie der Multiblock geformt oder gestartet wird, aus dem Buch.

## Für sich stehend und Brücken

```js
solo: [
  { t: "Werkzeuge", addon: "Immersive Petroleum",   // addon optional
    text: `<p>…</p>`,                               // optional
    items: [[Bild | null, "Name", "eine Zeile"]],
    table: { head, rows } },                        // optional
],
bridges: [
  { t: "Applied Energistics 2", addon: "Applied Botanics", x: true,   // x: Addon-Etikett in der Farbe „anderer Mod“
    text: `<p>…</p>`, items: [ … ] },
],
```

Unter „Brücken“ steht auch, was fehlt, wenn es für die Planung wichtig ist (Beispiel: Die Orechid erzeugt nur Vanilla-Erze).

## Erzeugte Tabellen

Lange, gleichförmige Listen (hunderte Rezepte) nicht von Hand schreiben. Ein Werkzeug nach dem Muster von `tools/ModifierDump.java` schreibt sie in `<mod>/modifiers.js` als Konstante; `build.sh` bindet diese Datei vor `data.js` ein, und `data.js` verweist darauf (`rows: MODIFIERS.upgrade`).
