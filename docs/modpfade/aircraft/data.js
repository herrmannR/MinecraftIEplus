// Stand 2026-10-17, Minecraft 1.20.1. Quelle: Rezepte, Fahrzeugdaten (data/immersive_aircraft/aircraft), Upgrade-Werte
// (data/immersive_aircraft/aircraft_upgrades), Advancement, Tags und Sprachdatei aus immersive_aircraft-1.5.0+1.20.1-forge.jar;
// Tags und README aus iaie-1.2-1.20.1.jar; Zahlenwerte aus config/immersive_aircraft.json und config/iaie-common.toml der Testinstanz;
// Dimensionsprüfung aus der Klasse VehicleEntity (javap). Der Mod hat kein Buch.
// Zeigt den Weg, wie ihn der Mod selbst vorsieht (ohne unsere KubeJS-Änderungen). Schema: Skill modpfad-seite, references/data-schema.md.
// Zutaten: [Name, Herkunft, Zusatz] – Herkunft v = Vanilla, m = dieser Mod, a = Addon, x = anderer Mod im Pack
const PAGE = {
  pageTitle: "Modpfad Immersive Aircraft",
  title: "Immersive Aircraft",
  accent: ["#d9a066", "#8a5a24"],
  lede: "Fluggeräte aus Holz, Eisen und Kupfer: vom muskelbetriebenen Gyrodyne über Luftschiff und Doppeldecker bis zum bewaffneten Warship. Der Mod hat kein Buch. Sein einziges Advancement schaltet alle Rezepte frei, sobald man einen Eisenbarren hat. Die Reihenfolge der Seite folgt deshalb den Rezepten: erst fünf Grundteile, dann die Fluggeräte, dann Upgrades und Waffen. Im Pack tanken die Geräte über das Addon iaie nur flüssigen Treibstoff aus Immersive Engineering.",
  mods: [
    ["Immersive Aircraft", "1.5.0", "main"],
    ["Immersive Aircraft x Immersive Engineering (iaie)", "1.2", "bridge"],
  ],
  phases: [
    {
      t: "Grundteile",
      sub: "Advancement „aircraftery“: Ein Eisenbarren im Inventar schaltet alle 27 Rezepte des Mods auf einmal frei. Alles entsteht an der Werkbank aus Vanilla-Stoffen.",
      steps: [
        {
          t: "Hull, Sail und Propeller",
          items: [
            ["immersive_aircraft:item/hull", "Hull", "6 Holzstämme (#minecraft:logs) + 3 Iron Ingot"],
            ["immersive_aircraft:item/sail", "Sail", "6 White Carpet + 3 String"],
            ["immersive_aircraft:item/propeller", "Propeller", "5 Iron Ingot"],
          ],
          text: `<p>Die drei Bauteile für Rumpf, Segel und Antrieb. Hull steckt in allen sieben Fluggeräten, Sail in den Luftschiffen und im Gyrodyne, Propeller im Biplane, Gyrodyne und Quadrocopter.</p>`,
          needs: [["Holzstämme", "v"], ["Iron Ingot", "v"], ["White Carpet", "v"], ["String", "v"]],
        },
        {
          t: "Boiler und Engine",
          items: [
            ["immersive_aircraft:item/boiler", "Boiler", "7 Copper Ingot + 1 Furnace"],
            ["immersive_aircraft:item/engine", "Engine", "1 Boiler + 1 Blast Furnace + 2 Piston + 3 Cobblestone"],
          ],
          text: `<p>Die Engine ist das teuerste Grundteil; sie braucht einen Boiler und einen Blast Furnace. Alle Fluggeräte außer dem Gyrodyne haben eine Engine und einen Treibstoffplatz („Fuel slot“).</p>`,
          needs: [["Copper Ingot", "v"], ["Furnace", "v"], ["Blast Furnace", "v"], ["Piston", "v"], ["Cobblestone", "v"]],
        },
      ],
    },
    {
      t: "Erste Fluggeräte",
      sub: "Aus den Grundteilen. Ein Fluggerät ist ein Item; es wird auf dem Boden abgesetzt („Needs to be assembled on the floor!“) und ist dann ein Fahrzeug.",
      steps: [
        {
          t: "Gyrodyne – ohne Treibstoff",
          items: [["immersive_aircraft:item/gyrodyne", "Gyrodyne", "2 Sail + 2 Hull + 1 Propeller"]],
          text: `<p>„Muscle-powered copter. Give it a good push and off it flies!“ Der Gyrodyne hat keine Engine und keinen Treibstoffplatz. Man treibt den Rotor selbst an, bis die Meldung „Minimum rotor speed reached, ready for takeoff!“ kommt; dabei zählt das Essen („You are too hungry to fly!“).</p>
<p>Plätze: 1 Waffe, 3 Upgrades, 1 Inventar.</p>`,
          needs: [["Sail", "m", "2"], ["Hull", "m", "2"], ["Propeller", "m"]],
        },
        {
          t: "Airship, Biplane und Quadrocopter",
          items: [
            ["immersive_aircraft:item/airship", "Airship", "6 Sail + 2 Hull + 1 Engine"],
            ["immersive_aircraft:item/biplane", "Biplane", "3 Hull + 1 Engine + 1 Propeller"],
            ["immersive_aircraft:item/quadrocopter", "Quadrocopter", "4 Propeller + 4 Bamboo + 1 Engine"],
          ],
          text: `<p>Die drei Geräte mit Engine. Das Airship ist „Slow but easy to maneuver“, der Biplane „Fast and rather reliable“ und braucht eine Startbahn, der Quadrocopter ist „Perfect for building, and that's about it“.</p>`,
          table: {
            head: ["Fluggerät", "Treibstoff-Faktor", "Waffen", "Upgrades", "Weitere Plätze"],
            rows: [
              ["immersive_aircraft:item/airship", "Airship", "–", "1", "3", "Treibstoff, Banner, Farbe, 1 Inventar"],
              ["immersive_aircraft:item/biplane", "Biplane", "1,25", "1", "4", "Treibstoff, Booster, Banner, 1 Inventar"],
              ["immersive_aircraft:item/quadrocopter", "Quadrocopter", "0,5", "1", "1", "Treibstoff, 1 Inventar"],
            ],
          },
          needs: [["Engine", "m"], ["Hull", "m"], ["Sail", "m"], ["Propeller", "m"], ["Bamboo", "v"]],
        },
      ],
    },
    {
      t: "Große Fluggeräte",
      sub: "Jedes baut auf einem kleineren Gerät auf: Cargo Airship auf dem Airship, Bamboo Hopper auf zwei Biplanes, Warship auf dem Cargo Airship.",
      steps: [
        {
          t: "Cargo Airship und Bamboo Hopper",
          items: [
            ["immersive_aircraft:item/cargo_airship", "Cargo Airship", "1 Airship + 1 Hull + 4 Chest"],
            ["immersive_aircraft:item/bamboo_hopper", "Bamboo Hopper", "2 Biplane + 1 Hull + 1 Engine + 5 Block of Bamboo"],
          ],
          text: `<p>Das Cargo Airship ist „Slow and fuel hungry but carries an entire storage“: fünf Inventarplätze statt einem. Der Bamboo Hopper hat drei Sitze und Schwimmer, um auf dem Wasser zu landen, dazu zwei Waffenplätze und vier Upgrades.</p>`,
          needs: [["Airship", "m"], ["Biplane", "m", "2"], ["Chest", "v", "4"], ["Block of Bamboo", "v", "5"]],
        },
        {
          t: "Warship",
          items: [["immersive_aircraft:item/warship", "Warship", "1 Cargo Airship + 3 Hull + 2 Engine + 2 Sail + 1 Industrial Gears"]],
          text: `<p>„A flying fortress, slow but heavily armed.“ Das Ende der Reihe: drei Treibstoffplätze, zwei Waffen, sechs Upgrades und die dreifache Haltbarkeit (<code>durability 3.0</code>). Es braucht Industrial Gears, ein Upgrade aus der nächsten Phase.</p>`,
          table: {
            head: ["Fluggerät", "Treibstoff-Faktor", "Waffen", "Upgrades", "Weitere Plätze"],
            rows: [
              ["immersive_aircraft:item/cargo_airship", "Cargo Airship", "1,25", "–", "4", "Treibstoff, Banner, Farbe, 5 Inventar"],
              ["immersive_aircraft:item/bamboo_hopper", "Bamboo Hopper", "1,5", "2", "4", "Treibstoff, Booster, 2 Inventar"],
              ["immersive_aircraft:item/warship", "Warship", "0,8", "2", "6", "3 Treibstoff, Booster, Farbe, 2 Inventar"],
            ],
          },
          needs: [["Cargo Airship", "m"], ["Engine", "m", "2"], ["Industrial Gears", "m"]],
        },
      ],
    },
    {
      t: "Upgrades",
      sub: "Kommen in die Upgrade-Plätze. Die Werte stehen in data/immersive_aircraft/aircraft_upgrades; die Sprachdatei zeigt sie als Prozent („%s%% engine power“).",
      steps: [
        {
          t: "Antrieb",
          items: [
            ["immersive_aircraft:item/sturdy_pipes", "Sturdy Pipes", "3 Copper Ingot + 2 Iron Ingot"],
            ["immersive_aircraft:item/steel_boiler", "Steel Boiler", "1 Boiler + 1 Blast Furnace + 7 Iron Ingot"],
            ["immersive_aircraft:item/eco_engine", "Eco Engine", "1 Engine + 3 Gold Ingot + 3 Brick + 2 Slimeball"],
            ["immersive_aircraft:item/nether_engine", "Nether Engine", "1 Engine + 1 Netherite Ingot + 2 Blaze Rod + 2 Magma Cream + 3 Nether Brick"],
            ["immersive_aircraft:item/industrial_gears", "Industrial Gears", "3 Iron Ingot + 3 Copper Ingot + 1 Lever"],
            ["immersive_aircraft:item/enhanced_propeller", "Enhanced Propeller", "1 Propeller + 4 Copper Ingot"],
          ],
          table: {
            head: ["Upgrade", "Motorleistung", "Treibstoffbedarf", "Sonstiges"],
            rows: [
              ["immersive_aircraft:item/sturdy_pipes", "Sturdy Pipes", "+10 %", "–", "–"],
              ["immersive_aircraft:item/steel_boiler", "Steel Boiler", "+25 %", "+50 %", "–"],
              ["immersive_aircraft:item/eco_engine", "Eco Engine", "−20 %", "−75 %", "–"],
              ["immersive_aircraft:item/nether_engine", "Nether Engine", "+40 %", "+30 %", "–"],
              ["immersive_aircraft:item/industrial_gears", "Industrial Gears", "–", "−20 %", "auch Zutat von Warship und Rotary Cannon"],
              ["immersive_aircraft:item/enhanced_propeller", "Enhanced Propeller", "–", "–", "−75 % Luftreibung"],
            ],
          },
          needs: [["Copper Ingot", "v"], ["Gold Ingot", "v"], ["Netherite Ingot", "v"], ["Blaze Rod", "v"], ["Magma Cream", "v"]],
        },
        {
          t: "Steuerung und Haltbarkeit",
          items: [
            ["immersive_aircraft:item/gyroscope", "Gyroscope", "2 Redstone Comparator + 1 Compass"],
            ["immersive_aircraft:item/gyroscope_dials", "Advanced Gyroscope", "1 Gyroscope + 3 Clock + 1 Note Block + 1 Lever"],
            ["immersive_aircraft:item/gyroscope_hud", "Electronic Gyroscope", "1 Gyroscope + 1 Redstone Lamp + 1 Note Block + 1 Lever + 1 Glass Pane + 2 Gold Ingot + 2 Gold Nugget"],
            ["immersive_aircraft:item/hull_reinforcement", "Hull Reinforcement", "3 Hull + 6 Iron Ingot"],
            ["immersive_aircraft:item/improved_landing_gear", "Improved Landing Gear", "3 Iron Ingot + 4 Coal"],
          ],
          text: `<p>Alle drei Gyroskope heben den Windeinfluss auf (−100 %) und stabilisieren um 3 %. Das Advanced Gyroscope fügt ein mechanisches, das Electronic Gyroscope ein elektronisches Armaturenbrett hinzu („Mechanical dashboard“, „Electronic dashboard“).</p>`,
          table: {
            head: ["Upgrade", "Wirkung"],
            rows: [
              ["immersive_aircraft:item/hull_reinforcement", "Hull Reinforcement", "+100 % Haltbarkeit"],
              ["immersive_aircraft:item/improved_landing_gear", "Improved Landing Gear", "+50 % Startgeschwindigkeit"],
            ],
          },
          needs: [["Redstone Comparator", "v", "2"], ["Compass", "v"], ["Clock", "v", "3"], ["Hull", "m", "3"]],
        },
      ],
    },
    {
      t: "Waffen",
      sub: "Kommen in die Waffenplätze („Weapon slot“). Munition und Schaden aus config/immersive_aircraft.json der Testinstanz.",
      steps: [
        {
          t: "Vier Waffen",
          items: [
            ["immersive_aircraft:item/rotary_cannon", "Rotary Cannon", "1 Dispenser + 1 Industrial Gears + 1 Copper Ingot"],
            ["immersive_aircraft:item/heavy_crossbow", "Heavy Crossbow", "1 Crossbow + 1 Tripwire Hook + 1 Holzstamm"],
            ["immersive_aircraft:item/bomb_bay", "Bomb Bay", "1 TNT + 4 Iron Ingot"],
            ["immersive_aircraft:item/telescope", "Telescope", "1 Spyglass + 1 Copper Ingot"],
          ],
          table: {
            head: ["Waffe", "Beschreibung (Sprachdatei)", "Munition (Config)"],
            rows: [
              ["immersive_aircraft:item/rotary_cannon", "Rotary Cannon", "Fast-firing cannon running with gunpowder.", "Gunpowder (100); Schaden 5"],
              ["immersive_aircraft:item/heavy_crossbow", "Heavy Crossbow", "A heavy crossbow with a powerful punch, requires arrows.", "Arrow, Spectral Arrow, Tipped Arrow (je 100)"],
              ["immersive_aircraft:item/bomb_bay", "Bomb Bay", "Drops TNT, does not destroy blocks but deals heavy damage.", "TNT (100); ein Egg wirft ein Huhn ab"],
              ["immersive_aircraft:item/telescope", "Telescope", "A bulkier version of the spyglass.", "–"],
            ],
          },
          text: `<p>Die Config der Testinstanz setzt <code>weaponsAreDestructive: false</code>; keine Waffe zerstört Blöcke.</p>`,
          needs: [["Industrial Gears", "m"], ["Dispenser", "v"], ["Crossbow", "v"], ["TNT", "v"]],
        },
      ],
    },
  ],
  solo: [
    {
      t: "Fliegen, Reparieren, Abstürzen",
      text: `<p>Laut Config der Testinstanz: Schaden repariert man durch Klicken auf das Fahrzeug (2,5 % je Klick, kostet Hunger); bei einem Absturz gibt es eine Explosion mit Radius 2, die keine Blöcke zerstört, kein Feuer legt und den Spieler nicht tötet (<code>preventKillThroughCrash: true</code>). Abgebaute Fluggeräte lassen ihr Inventar fallen, behalten aber Upgrades und Verzierung im Item.</p>
<p>Mobs können einsteigen (<code>defaultCanEnter: true</code>), Wassertiere und Spieler ausgenommen. Banner und Farbstoff haben eigene Plätze und verzieren das Gerät; der Booster-Platz heißt „Boost rockets“.</p>`,
    },
  ],
  bridges: [
    {
      t: "Immersive Engineering", addon: "iaie", x: true,
      text: `<p>Das Addon iaie ersetzt den festen Brennstoff: <code>disableSolidFuel = true</code> in der Testinstanz. Getankt wird flüssiger Treibstoff aus dem Tag <code>iaie:fuel</code>, der den Tag <code>#immersiveengineering:drill_fuel</code> einbindet. Den Treibstoff füllt man in ein Metal Barrel (Tag <code>iaie:fuel_tanks</code>) und legt das Fass in den Treibstoffplatz des Fluggeräts. <code>biodieselFuelTick = 20</code> steuert, wie schnell der flüssige Treibstoff verbrennt.</p>
<p>Ohne Petroleum ist Biodiesel der einzige Treibstoff. Die Grundteile brauchen nichts aus IE; die Brücke liegt allein beim Treibstoff.</p>`,
      items: [
        ["immersiveengineering:block/metal_device/barrel_side", "Metal Barrel", "Treibstofftank (iaie:fuel_tanks)"],
        [null, "Biodiesel", "Treibstoff aus IE"],
      ],
    },
    {
      t: "Immersive Petroleum", addon: "iaie", x: true,
      text: `<p>Diesel, Sulfurized Diesel und Kerosene stehen im Tag <code>#immersiveengineering:drill_fuel</code> und sind damit ebenfalls Treibstoff. Gasoline gehört nicht dazu.</p>`,
    },
    {
      t: "Ad Astra und andere Dimensionen", x: true,
      text: `<p>Die Config erlaubt Overworld, Nether und End ausdrücklich. Für nicht eingetragene Dimensionen gilt laut Code der Standard <code>true</code> (<code>validDimensions.getOrDefault(…, true)</code>): Die Fluggeräte fliegen also auch auf den Planeten von Ad Astra und Star Wars Planets und in Blue Skies. Ob dort Schwerkraft oder fehlende Luft den Flug beeinflussen, ist nicht ausgelesen.</p>`,
    },
  ],
  foot: "Quellen: immersive_aircraft-1.5.0+1.20.1-forge.jar (Rezepte, Fahrzeug- und Upgrade-Daten, Advancement, Tags, Sprachdatei, Klasse VehicleEntity), iaie-1.2-1.20.1.jar (Tags, README), Configs der Testinstanz. Der Mod hat kein Buch. „Treibstoff-Faktor“ ist der Wert <code>fuel</code> der Fahrzeugdaten; fehlt er (Airship, Gyrodyne), gilt ein Standardwert aus dem Code, der nicht ausgelesen ist. Nicht ausgelesen: welches Item in den Booster-Platz passt, ob Blaze Powder (in der Config als Brennstoff mit 1200 eingetragen) trotz disableSolidFuel noch angenommen wird, Geschwindigkeiten und Lebenspunkte der Fluggeräte in Spielwerten. Fluggeräte sind Entities; die Bilder zeigen die Items.",
};
