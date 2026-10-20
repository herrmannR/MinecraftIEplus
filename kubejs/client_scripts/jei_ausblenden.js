// Blendet in JEI alle Items aus, die wir nicht im Spiel haben wollen und deren Rezepte entfernt sind.
// Regel des Users (2026-10-13): Was per Skript entfernt wird, kommt immer auch hier hinein.
// Stand 2026-10-20, KubeJS 2001. Teil von 2026-10-20 UNGETESTET.

JEIEvents.hideItems(event => {
  const ausgeblendet = [
    // Ad Astra: Erzeuger und Maschinen, die IE oder Mekanism umgehen (server_scripts/raumfahrt/ad_astra_regeln.js)
    'ad_astra:coal_generator',
    'ad_astra:solar_panel',
    'ad_astra:photovoltaic_etrium_cell',   // einziger Zweck war das Solar Panel
    'ad_astra:compressor',
    'ad_astra:fuel_refinery',
    'ad_astra:water_pump',
    'ad_astra:energizer',                   // Laden über IE und Mekanism (Test 19, 2026-10-17)
    // Ad Astra: Kabel, Pipes und Durchführungen
    'ad_astra:steel_cable',
    'ad_astra:desh_cable',
    'ad_astra:desh_fluid_pipe',
    'ad_astra:ostrum_fluid_pipe',
    'ad_astra:cable_duct',
    'ad_astra:fluid_pipe_duct',
    // Ideenimport (server_scripts/progression/ideenimport_entfernt.js, 2026-10-20)
    'mekanism:digital_miner',
    'ae2:vibration_chamber',
    'ae2:crystal_resonance_generator',
    'swplanets:plastic_plate',
    // Rezepte hinter Bauplänen (server_scripts/starwars/einsiedler_shop.js): in JEI ausgeblendet, das Bauplan-Buch zeigt sie
    'swgc:assembly_bench',
    'swgc:droid_fabricator',
    'swgc:gas_harvester',
    'swgc:empty_gas_vessel',
    // Steuerkerne: Rezept steht im Bauplan des Droiden (2026-10-20)
    'kubejs:steuerkern_b1',
    'kubejs:steuerkern_b2',
    'kubejs:steuerkern_droideka',
    // Bioethanol (Mekanism Generators): hat im Mod kein Rezept und keinen Zweck (User, 2026-10-20)
    'mekanismgenerators:bioethanol_bucket'
  ]
  ausgeblendet.forEach(id => event.hide(id))
})

JEIEvents.hideFluids(event => {
  // Bioethanol: Flüssigkeit zum Eimer oben
  event.hide('mekanismgenerators:bioethanol')
})
