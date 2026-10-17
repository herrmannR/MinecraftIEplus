// Regel: Energie, Treibstoff und Sauerstoff für die Raumfahrt kommen nur aus
// Immersive Engineering, Immersive Petroleum und Mekanism.
// Entscheidungen: docs/15_RAUMFAHRT.md (2026-10-07, 2026-10-11, 2026-10-12).
// Wer hier ein Item entfernt, blendet es auch in client_scripts/jei_ausblenden.js aus.
// Stand 2026-10-12, KubeJS 2001. UNGETESTET.

ServerEvents.recipes(event => {
  // Erzeuger und Maschinen, die IE oder Mekanism umgehen
  const entfernt = [
    'ad_astra:coal_generator',
    'ad_astra:solar_panel',
    'ad_astra:photovoltaic_etrium_cell', // einziger Zweck war das Solar Panel
    'ad_astra:compressor',
    'ad_astra:fuel_refinery',
    // Kabel, Pipes und ihre Wand-Durchführungen: Strom und Flüssigkeiten laufen über IE und Mekanism
    'ad_astra:steel_cable',
    'ad_astra:desh_cable',
    'ad_astra:desh_fluid_pipe',
    'ad_astra:ostrum_fluid_pipe',
    'ad_astra:cable_duct',
    'ad_astra:fluid_pipe_duct',
    // Ersatz: Mekanism Electric Pump, IE Fluid Pump
    'ad_astra:water_pump',
    // Jet Suit und Etrionic Capacitor laden in der IE Charging Station und am Mekanism Energy Cube (Test 19, 2026-10-17)
    'ad_astra:energizer',
    // Stahl nur über IE (Hochofen, Lichtbogenofen)
    'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals',
    // Öl direkt zu Raketentreibstoff würde die Destillation umgehen
    'ad_astra:refining/fuel_from_refining_oil',
    // Sauerstoff zwingend aus Mekanism: das Wasser-Rezept des Oxygen Loader entfällt
    'ad_astra:oxygen_loading/oxygen_from_oxygen_loading_water'
  ]
  entfernt.forEach(id => event.remove({ id: id }))

  // Der Compressor entfällt, also auch alle seine Rezepte
  event.remove({ type: 'ad_astra:compressing' })

  // Platten der Planeten-Metalle: Ad Astra bringt die Rezepte für die IE Metal Press und den
  // Engineer's Hammer selbst mit (immersiveengineering:metalpress/plate_desh usw.), hier ist nichts nötig.
  // Eisen- und Stahlplatten hat IE bereits; Ad Astra nimmt sie über forge-Tags an.

  // NOCH NICHT ENTFERNT, weil die Entscheidung offen ist oder ein Test fehlt:
  // - ad_astra:cryo_freezer (Cryo Fuel: entfernen oder Zutat für den T4-Treibstoff)
  // - ad_astra:etrionic_blast_furnace als Block (nur sein Stahl-Rezept ist entfernt)
})
