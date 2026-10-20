// Kaleidoscope (Cookery, Grilling, Tavern, End) und Farmer's Delight samt Addons ohne Dopplungen (User, 2026-10-20).
// Kaleidoscope Compat bleibt draußen: sein UNITE-Teil ist unter 1.20.1 großteils wirkungslos (Ordner und Tags im 1.21-Format).
//
// Regel für den Gewinner: Hat Kaleidoscope ein Item fest im Code verdrahtet (Handel des Kochs, Reisschale, Teig-Item,
// Spieß-Code von Grilling), gewinnt Kaleidoscope. Sonst gewinnt Farmer's Delight, dessen Items schon in der Welt liegen.
// Geräte: Herd von Kaleidoscope (Arbeitsplatz des Kochs), Schneidebrett von Farmer's Delight, Küchenmesser von Kaleidoscope
// (Feuersteinmesser von Farmer's Delight bleibt als Einstieg).
//
// Was dieses Skript tut:
//  1. Jedes Rezept, das ein Verlierer-Item nennt, wird mit dem Gewinner neu angelegt (ID ieplus:einheitlich/...).
//     Rezepte, die danach doppelt wären, entfallen. Rezepte für wegfallende Geräte entfallen ganz.
//  2. Das Kaleidoscope-Brett entfällt; seine Rezepte ohne Gegenstück ziehen auf das Farmer's-Delight-Brett um.
//  3. Altbestand aus der Welt: Farmer's-Delight-Zutaten und der Farmer's-Delight-Herd lassen sich 1:1 umwandeln.
//  4. Tags: Verlierer fliegen aus allen Item-Tags (außer Messer: alte Messer schneiden weiter), Gewinner rücken nach.
// Dazu gehören: kubejs/data/*/loot_tables und loot_modifiers (erzeugt mit tools/kaleidoscope_loot.py),
// client_scripts/jei_ausblenden.js und config-overrides/config/farmersdelight-common.toml.
// Stand 2026-10-20, KubeJS 2001. UNGETESTET.

// Verlierer -> Gewinner. Eine Liste heißt: Der Verlierer wird als Zutat durch jedes der Items ersetzt.
// tools/kaleidoscope_loot.py liest diese Tabelle zwischen den Markierungen.
// ERSETZEN-ANFANG
const ERSETZEN = {
  // Kaleidoscope gewinnt (im Code verdrahtet)
  'farmersdelight:tomato': 'kaleidoscope_cookery:tomato',
  'farmersdelight:tomato_seeds': 'kaleidoscope_cookery:tomato_seed',
  'farmersdelight:rice': 'kaleidoscope_cookery:rice',
  'farmersdelight:rice_panicle': 'kaleidoscope_cookery:rice_panicle',
  'farmersdelight:cooked_rice': 'kaleidoscope_cookery:cooked_rice',
  'farmersdelight:fried_egg': 'kaleidoscope_cookery:fried_egg',
  'farmersdelight:wheat_dough': 'kaleidoscope_cookery:raw_dough',
  'tmted:wheat_flour': 'kaleidoscope_cookery:flour',
  'farmersdelight:raw_pasta': 'kaleidoscope_cookery:raw_noodles',
  'farmersdelight:onion': 'kaleidoscope_grilling:onion',
  // Farmer's Delight gewinnt
  'kaleidoscope_cookery:raw_lamb_chops': 'farmersdelight:mutton_chops',
  'kaleidoscope_cookery:cooked_lamb_chops': 'farmersdelight:cooked_mutton_chops',
  'kaleidoscope_cookery:dumpling': 'farmersdelight:dumplings',
  'kaleidoscope_cookery:raw_pork_belly': 'farmersdelight:bacon',
  'kaleidoscope_cookery:cooked_pork_belly': 'farmersdelight:cooked_bacon',
  'kaleidoscope_cookery:raw_cut_small_meats': 'farmersdelight:chicken_cuts',
  'kaleidoscope_cookery:cooked_cut_small_meats': 'farmersdelight:cooked_chicken_cuts',
  'kaleidoscope_cookery:sashimi': ['farmersdelight:cod_slice', 'farmersdelight:salmon_slice'],
  'kaleidoscope_cookery:straw_block': 'farmersdelight:rice_bale',
  // Geräte
  'farmersdelight:stove': 'kaleidoscope_cookery:stove',
  'kaleidoscope_cookery:chopping_board': 'farmersdelight:cutting_board',
  'farmersdelight:iron_knife': 'kaleidoscope_cookery:iron_kitchen_knife',
  'farmersdelight:golden_knife': 'kaleidoscope_cookery:gold_kitchen_knife',
  'farmersdelight:diamond_knife': 'kaleidoscope_cookery:diamond_kitchen_knife',
  'farmersdelight:netherite_knife': 'kaleidoscope_cookery:netherite_kitchen_knife'
}
// ERSETZEN-ENDE

// Geräte: Rezepte, die sie herstellen, entfallen ersatzlos (der Gewinner hat sein eigenes Rezept).
const GERAETE = [
  'farmersdelight:stove', 'kaleidoscope_cookery:chopping_board', 'kaleidoscope_cookery:straw_block',
  'farmersdelight:iron_knife', 'farmersdelight:golden_knife', 'farmersdelight:diamond_knife', 'farmersdelight:netherite_knife'
]

// Diese Rezepte entfallen ohne Ersatz, weil Kaleidoscope denselben Weg schon hat (Offline-Abgleich 2026-10-20)
// oder weil sie unten neu angelegt werden.
const OHNE_ERSATZ = [
  'tmted:wheat_dough_from_egg',          // Kaleidoscope: Mehl + Wasser zu Teig
  'tmted:wheat_dough_from_waterbucket',
  'farmersdelight:tomato_seeds',         // Kaleidoscope: Tomate zu Tomatensamen
  'farmersdelight:cutting/beef'          // neu unten: Hackfleisch und Rindfleischwürfel
]

// Umwandlung von Altbestand aus der Welt (nur Farmer's-Delight-Dinge, die es dort schon gab).
const UMWANDELN = [
  'farmersdelight:tomato', 'farmersdelight:tomato_seeds', 'farmersdelight:rice', 'farmersdelight:rice_panicle',
  'farmersdelight:cooked_rice', 'farmersdelight:fried_egg', 'farmersdelight:wheat_dough', 'farmersdelight:raw_pasta',
  'farmersdelight:onion', 'farmersdelight:stove'
]

const KOCHTYPEN = ['minecraft:smelting', 'minecraft:smoking', 'minecraft:blasting', 'minecraft:campfire_cooking']
const AUSGABE_SCHLUESSEL = ['result', 'results', 'output', 'outputs', 'mainOutput']
const UNWICHTIG = ['group', 'category', 'show_notification', 'conditions', 'experience', 'cookingtime']

// JSON mit sortierten Schlüsseln, damit gleiche Rezepte aus verschiedenen Mods gleich aussehen.
function kanonisch(x) {
  if (Array.isArray(x)) return '[' + x.map(kanonisch).join(',') + ']'
  if (x !== null && typeof x === 'object') {
    return '{' + Object.keys(x).sort().map(k => JSON.stringify(k) + ':' + kanonisch(x[k])).join(',') + '}'
  }
  return JSON.stringify(x)
}

// Ersetzt Verlierer-IDs. Blöcke (Cloche-Darstellung, Bedingungen) und Tags bleiben unberührt.
function ersetze(knoten) {
  if (Array.isArray(knoten)) return knoten.map(ersetze)
  if (knoten !== null && typeof knoten === 'object') {
    const schluessel = Object.keys(knoten)
    if (typeof knoten.item === 'string' && Array.isArray(ERSETZEN[knoten.item]) &&
        schluessel.every(k => k === 'item' || k === 'count')) {
      return ERSETZEN[knoten.item].map(i => ({ item: i }))
    }
    const neu = {}
    schluessel.forEach(k => { neu[k] = (k === 'block' || k === 'tag') ? knoten[k] : ersetze(knoten[k]) })
    return neu
  }
  if (typeof knoten === 'string' && typeof ERSETZEN[knoten] === 'string') return ERSETZEN[knoten]
  return knoten
}

// Sammelt alle IDs unter Ausgabe-Schlüsseln.
function ausgaben(knoten, inAusgabe, liste) {
  if (Array.isArray(knoten)) { knoten.forEach(k => ausgaben(k, inAusgabe, liste)); return liste }
  if (knoten !== null && typeof knoten === 'object') {
    Object.keys(knoten).forEach(k => {
      if (k === 'block' || k === 'tag' || k === 'type') return
      ausgaben(knoten[k], inAusgabe || AUSGABE_SCHLUESSEL.indexOf(k) >= 0, liste)
    })
    return liste
  }
  if (inAusgabe && typeof knoten === 'string') liste.push(knoten)
  return liste
}

function schluesselVon(j) {
  if (KOCHTYPEN.indexOf(j.type) >= 0) return j.type + '|' + kanonisch(j.ingredient)
  const kopie = {}
  Object.keys(j).forEach(k => { if (UNWICHTIG.indexOf(k) < 0) kopie[k] = j[k] })
  return kanonisch(kopie)
}

function schneiden(event, id, zutat, ergebnisse) {
  event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [zutat],
    result: ergebnisse,
    tool: [{ type: 'farmersdelight:tool_action', action: 'knife_dig' }, { tag: 'forge:tools/knives' }]
  }).id('ieplus:einheitlich/schneiden/' + id)
}

ServerEvents.recipes(event => {
  const verlierer = Object.keys(ERSETZEN)
  const gewinner = []
  verlierer.forEach(v => [].concat(ERSETZEN[v]).forEach(g => gewinner.push(g)))
  const enthaelt = (s, ids) => ids.some(i => s.indexOf('"' + i + '"') >= 0)

  const vorhanden = new Set()
  const kandidaten = []
  event.forEachRecipe('*', r => {
    let s
    try { s = String(r.json) } catch (e) { return }
    if (!s || s.charAt(0) !== '{') return
    // Nur Rezepte einlesen, die uns betreffen (Kandidaten oder mögliche Dubletten)
    const istKandidat = enthaelt(s, verlierer)
    if (!istKandidat && !enthaelt(s, gewinner) && !KOCHTYPEN.some(t => s.indexOf('"' + t + '"') >= 0)) return
    const j = JSON.parse(s)
    if (j.type === 'kaleidoscope_cookery:chopping_board') return   // Brett entfällt, siehe unten
    if (istKandidat) kandidaten.push({ id: String(r.getId()), j: j })
    else vorhanden.add(schluesselVon(j))
  })

  let neu = 0, doppelt = 0, ersatzlos = 0
  kandidaten.forEach(k => {
    event.remove({ id: k.id })
    const raus = ausgaben(k.j, false, [])
    if (OHNE_ERSATZ.indexOf(k.id) >= 0 || raus.some(a => GERAETE.indexOf(a) >= 0)) { ersatzlos++; return }
    const j = ersetze(k.j)
    delete j.conditions
    const schl = schluesselVon(j)
    if (vorhanden.has(schl)) { doppelt++; return }
    vorhanden.add(schl)
    event.custom(j).id('ieplus:einheitlich/' + k.id.replace(':', '/'))
    neu++
  })

  // Kaleidoscope-Brett: Rezepte ohne Gegenstück auf dem Farmer's-Delight-Brett ziehen um.
  // Huhn, Hammel, Schwein, Fisch und Teig zerlegt das Farmer's-Delight-Brett schon selbst.
  // Kaninchen und Tropenfisch (Fleischstücke, Sashimi) entfallen mit ihren Items.
  event.remove({ type: 'kaleidoscope_cookery:chopping_board' })
  schneiden(event, 'gekochtes_rind', { item: 'minecraft:cooked_beef' }, [{ item: 'kaleidoscope_cookery:cooked_cow_offal', count: 3 }])
  schneiden(event, 'gebratenes_schwein', { item: 'minecraft:cooked_porkchop' }, [{ item: 'farmersdelight:cooked_bacon', count: 2 }])
  schneiden(event, 'chorus', { item: 'minecraft:chorus_fruit' }, [{ item: 'kaleidoscope_end:chorus_seed', count: 2 }])
  schneiden(event, 'karotte', { item: 'minecraft:carrot' }, [{ item: 'kaleidoscope_grilling:carrot_dice', count: 3 }])
  schneiden(event, 'kartoffel', { item: 'minecraft:potato' }, [{ item: 'kaleidoscope_grilling:potato_slice', count: 3 }])
  schneiden(event, 'houttuynia', { tag: 'kaleidoscope_grilling:ingredients/houttuynia' }, [{ item: 'kaleidoscope_grilling:minced_houttuynia' }])
  schneiden(event, 'mantou', { item: 'kaleidoscope_cookery:mantou' }, [{ item: 'kaleidoscope_grilling:raw_mantou_slice', count: 3 }])
  schneiden(event, 'suesskartoffel', { item: 'kaleidoscope_grilling:sweet_potato_powder' }, [{ item: 'kaleidoscope_grilling:raw_sweet_potato_sheet' }])
  // Rindfleisch: Grilling braucht seine Würfel (im Spieß-Code verdrahtet), Farmer's Delight sein Hackfleisch.
  schneiden(event, 'rind', { item: 'minecraft:beef' }, [{ item: 'farmersdelight:minced_beef' }, { item: 'kaleidoscope_grilling:beef_chunks' }])

  // Altbestand umwandeln
  UMWANDELN.forEach(alt => {
    event.shapeless(ERSETZEN[alt], [alt]).id('ieplus:einheitlich/umwandeln/' + alt.split(':')[1])
  })

  console.info(`kaleidoscope_einheitlich.js: ${kandidaten.length} Rezepte mit Verlierer-Items, ${neu} neu angelegt, ` +
    `${doppelt} als doppelt verworfen, ${ersatzlos} ersatzlos entfernt`)
})

ServerEvents.tags('item', event => {
  const messer = ['farmersdelight:iron_knife', 'farmersdelight:golden_knife', 'farmersdelight:diamond_knife', 'farmersdelight:netherite_knife']
  Object.keys(ERSETZEN).forEach(v => { if (messer.indexOf(v) < 0) event.removeAllTagsFrom(v) })

  // Gewinner in die Tags, in denen bisher nur der Verlierer stand (Abgleich der JARs 2026-10-20)
  event.add('minecraft:villager_plantable_seeds', 'kaleidoscope_cookery:tomato_seed')
  event.add('farmersdelight:meals', 'kaleidoscope_cookery:cooked_rice')
  event.add('nethersdelight:meal_item', 'kaleidoscope_cookery:cooked_rice')
  event.add('forge:dough/wheat', 'kaleidoscope_cookery:raw_dough')
  event.add('forge:pasta/raw_pasta', 'kaleidoscope_cookery:raw_noodles')
  event.add('forge:raw_pork', 'farmersdelight:bacon')
  event.add('forge:cooked_pork', 'farmersdelight:cooked_bacon')
  event.add('forge:raw_meats', 'farmersdelight:chicken_cuts')
  event.add('kaleidoscope_cookery:meals', [
    'farmersdelight:mutton_chops', 'farmersdelight:cooked_mutton_chops', 'farmersdelight:dumplings',
    'farmersdelight:bacon', 'farmersdelight:cooked_bacon', 'farmersdelight:chicken_cuts',
    'farmersdelight:cooked_chicken_cuts', 'farmersdelight:cod_slice', 'farmersdelight:salmon_slice'
  ])
})
