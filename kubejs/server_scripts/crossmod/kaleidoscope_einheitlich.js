// Kaleidoscope (Cookery, Grilling, Tavern, End) und Farmer's Delight samt Addons ohne Dopplungen (User, 2026-10-20).
// Kaleidoscope Compat bleibt draußen: sein UNITE-Teil ist unter 1.20.1 großteils wirkungslos (Ordner und Tags im 1.21-Format).
//
// Regel für den Gewinner: Hat Kaleidoscope ein Item fest im Code verdrahtet (Handel des Kochs, Reisschale, Teig-Item,
// Spieß-Code von Grilling), gewinnt Kaleidoscope. Sonst gewinnt Farmer's Delight, dessen Items schon in der Welt liegen.
// Geräte: Herd von Kaleidoscope (Arbeitsplatz des Kochs), Schneidebrett von Farmer's Delight, Küchenmesser von Kaleidoscope
// (Feuersteinmesser von Farmer's Delight bleibt als Einstieg).
//
// Aufteilung:
//  - Dieses Skript: die Tabelle ERSETZEN (einzige Quelle) und die Tags. Verlierer fliegen aus allen Item-Tags
//    (außer Messer: alte Messer schneiden weiter), Gewinner rücken nach.
//  - tools/kaleidoscope_daten.py liest die Tabelle und schreibt Rezepte und Loot als Datapack-Dateien nach kubejs/data/
//    (umgestellte Rezepte unter derselben ID, wegfallende mit forge:false, Brett-Umzug, Umwandlung von Altbestand).
//    Nicht über event.custom: die Schemas der KubeJS-Addons lehnen gültige Rezepte ab (Test 65, 2026-10-20).
//    Nach jeder Änderung der Tabelle das Werkzeug neu laufen lassen.
//  - client_scripts/jei_ausblenden.js, config-overrides/config/farmersdelight-common.toml.
// Stand 2026-10-20, KubeJS 2001. Fassung 2 (Rezepte als Dateien), UNGETESTET.

// Verlierer -> Gewinner. Eine Liste heißt: Der Verlierer wird als Zutat durch jedes der Items ersetzt.
// tools/kaleidoscope_daten.py liest diese Tabelle zwischen den Markierungen.
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

ServerEvents.tags('item', event => {
  let messer = ['farmersdelight:iron_knife', 'farmersdelight:golden_knife', 'farmersdelight:diamond_knife', 'farmersdelight:netherite_knife']
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
