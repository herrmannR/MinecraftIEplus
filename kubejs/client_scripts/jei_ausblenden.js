// Blendet in JEI alle Items aus, die wir nicht im Spiel haben wollen und deren Rezepte entfernt sind.
// Regel des Users (2026-10-13): Was per Skript entfernt wird, kommt immer auch hier hinein.
// Stand 2026-10-13, KubeJS 2001. UNGETESTET.

JEIEvents.hideItems(event => {
  const ausgeblendet = [
    // Ad Astra: Erzeuger und Maschinen, die IE oder Mekanism umgehen (server_scripts/raumfahrt/ad_astra_regeln.js)
    'ad_astra:coal_generator',
    'ad_astra:solar_panel',
    'ad_astra:photovoltaic_etrium_cell',   // einziger Zweck war das Solar Panel
    'ad_astra:compressor',
    'ad_astra:fuel_refinery',
    'ad_astra:water_pump',
    // Ad Astra: Kabel, Pipes und Durchführungen
    'ad_astra:steel_cable',
    'ad_astra:desh_cable',
    'ad_astra:desh_fluid_pipe',
    'ad_astra:ostrum_fluid_pipe',
    'ad_astra:cable_duct',
    'ad_astra:fluid_pipe_duct'
  ]
  ausgeblendet.forEach(id => event.hide(id))
})
