# Star-Wars-Clone-Wars-Mods für Minecraft 1.20.1

Stand: 10.10.2026. Zwei ähnlich benannte Mods, die Einbindung der Planeten in Ad Astra und der Lichtschwert-Vergleich mit Entscheidung für Galaxy in a Cube (Abschnitt 5).

## Empfohlene Mod-Auswahl (Entscheidung)

Ziel: Ad Astra mit Star-Wars-Planeten, möglichst viel Star-Wars-Inhalt, wenig Bastelarbeit, eigene Quests möglich.

| Mod | Rolle | Status |
|---|---|---|
| Ad Astra (1.15.18 oder neuer) | Raketen und Raumfahrt | nehmen |
| Star Wars Planets 1.4.6.1 | Planeten, direkt in Ad Astra eingebunden | nehmen |
| Star Wars: Galaxy in a Cube 1.0.3.1 | Lichtschwerter, Macht, Klone, Droiden, Fahrzeuge | nehmen |
| FTB Quests | eigene Quests mit Editor im Spiel | nehmen |
| Star Wars Expansion | eigene Planeten mit eigenem Reisesystem | weglassen |
| Star Wars Clone Wars (Rupyber) | Portal-Planeten, Klone, Droiden | weglassen |
| Star Wars The Clone Wars (MelonHaver) | Klone, Droiden | weglassen |

### Warum diese Auswahl

- **Star Wars Planets** ist der einzige Mod, dessen Planeten ohne Zutun über Ad-Astra-Raketen laufen: Tatooine, Endor, Hoth, Mustafar und Mandalore, jeweils mit Orbit, in einer eigenen Galaxie „Outer Rims". Tatooine verlangt eine Rakete der Stufe 4.
- **Inhalt auf den Planeten** (aus dem Quellcode): Tatooine Village, Tatooine Houses, Jawa Crawler, Endor Outpost, AT-AT, AT-ST, AT-ACT, TIE Fighter; Jawas mit Handel, Banthas, Speeder; Kyber- und Beskar-Erz; Stormtrooper- und Beskar-Rüstung; Blaster mit Upgrades.
- **Galaxy in a Cube** liefert das beste Schwert- und Machtsystem und deckt Klone und Droiden ab. Damit sind die beiden Clone-Wars-Mods überflüssig.
- **Star Wars Expansion** hätte die am dichtesten gefüllten Planeten, bringt aber Tatooine, Hoth und Endor ein zweites Mal mit und reist über eine eigene Galaxiekarte statt über Ad Astra. Das ist die Kombination mit der meisten Nacharbeit.
- **Rupyber-Mod:** seit Januar 2024 ohne Update, Planeten nur über Portale, Inhalte doppeln sich mit Galaxy in a Cube.
- **MelonHaver-Mod:** für 1.20.1 seit Juni 2024 ohne Update, von Galaxy in a Cube abgedeckt.

### Verbleibende Arbeit

1. **Schwerter von Star Wars Planets entfernen:** ein KubeJS-Script, siehe Abschnitt 5 (die Rupyber-Zeilen dort streichen).
2. **Zusammenspiel testen:** Star Wars Planets und Galaxy in a Cube gemeinsam starten. Dass sie zusammen laufen, ist nicht belegt.
3. **Optional, Mobs auf die Planeten bringen:** Wo Galaxy in a Cube seine Mobs und Strukturen spawnt, ist nicht dokumentiert (closed source). Falls sie nur in der Overworld erscheinen, braucht es pro Planeten-Biom eine kleine Datapack-Datei für zusätzliche Spawns. Dafür werden die Entity-IDs aus dem Spiel gebraucht.
4. **Kleine Dopplungen:** Jawas, Kyber-Kristalle und Blaster gibt es in beiden Mods. Bei Bedarf per KubeJS ausblenden.

### Quests

FTB Quests (Forge 1.20.1) hat einen Editor im Spiel, es muss nichts von Hand geschrieben werden. Es braucht FTB Library, FTB Teams und Architectury. Aufgaben können Items, Kills, besuchte Dimensionen und Advancements abfragen, also z. B. „Lande auf Tatooine" oder „Baue ein Lichtschwert". KubeJS lässt sich anbinden.

---

## Die beiden Clone-Wars-Mods im Überblick

| | Star Wars Clone Wars | Star Wars The Clone Wars |
|---|---|---|
| Autor | Rupyber Studios (Pyrix25633) | MelonHaver |
| Loader 1.20.1 | Forge | Forge (ältere Versionen auch Fabric/Quilt) |
| Letzte Version 1.20.1 | 1.5.1 (Januar 2024) | v1.9a (Juni 2024) |
| Abhängigkeit | keine belegt | GeckoLib |
| Inhalt | Klone, Droiden, Blaster, 3 Planeten, Strukturen, Fahrzeuge | Klone, Droiden, Waffen, Turret – keine Welten |
| Quellcode | offen (GPL-3.0, MCreator) | geschlossen |
| Auch für 1.18.2 | ja | nein |

---

## 1. Star Wars Clone Wars (Rupyber Studios)

Kleiner Forge-Mod mit Klontruppen, Kampfdroiden, Blastern und drei Planeten-Dimensionen. Mod-ID: `star_wars`.

### Schritte in Spielreihenfolge

1. **Titanium abbauen:** Titanium Ore gibt Raw Titanium, das zu Titanium Ingot wird. Höhe und Dimension des Erzes sind nicht belegt.
2. **Plastoid herstellen:** Aus Plastoid Scrap wird Plastoid Plate, das Grundmaterial für Rüstung und Plastoid-Werkzeuge (Pickaxe, Axe, Sword, Shovel, Hoe).
3. **Basis-Rüstung und Blaster:** Clone Trooper Rüstung (Helmet bis Boots) und Blaster DC-15S oder DC-17. Blaster brauchen Blaster Munitions; der Vorrat steht als Zähler im HUD.
4. **Rüstung anpassen:** Im Clone Armor Customizer (Block mit „Customize"-Knopf) wird die Basis-Rüstung zu Legions- und Rang-Varianten (501st, 212th, 104th, 327th, 41st, 91st, Captain Rex, Commander Cody, Fox, Wolffe, Bly, Gree, Appo, Ponds). Rang-Items: Soldier, Sergeant, Liutenant, Captain, Commander Grade.
5. **Ausrüstung erweitern:** Jetpack, Backpack, Thermal Detonator, Lightsaber in Blau, Grün und Rot – alle mit Rezept.
6. **Portale bauen:** Die Planeten werden über Portale wie beim Nether erreicht, nicht per Rakete. Gezündet wird mit dem jeweiligen Dimension Portal Igniter.

   | Planet | Portalrahmen |
   |---|---|
   | Kashyyyk | Jungle Planks |
   | Felucia | Warped Planks |
   | Geonosis | Red Sandstone (Variante unsicher, vermutlich Cut) |

7. **Planeten erkunden:** Jede Dimension hat drei Biome; Schlafen und Respawn sind möglich. Felucia bringt drei eigene Holzsorten (Blue, Red, Yellow) mit komplettem Bauset.
8. **Strukturen und Kämpfe:** Republic Outposts und Separatist Base auf Felucia, dazu AT-TE, AT-AP und Clone Tanks. Gegner: Droids (Commander, Pilot, Security, jeweils auch Kashyyyk-Variante). Verbündete: Klone samt benannten Commandern.
9. **Fahrzeuge:** Republic Speeder und Republic Tank sind fahrbar; der Tank schießt über eine eigene Taste („Tank Shoot").

### Unsicher

- Kein Wiki, kein Ingame-Buch: Rezepte in JEI nachschlagen.
- Was der Customizer genau als Eingabe verlangt, ist nicht belegt.
- Zweck des Clone Trooper Communicator ist nicht belegt.
- MCreator-Mod, seit Januar 2024 ohne Update.

---

## 2. Planeten in Ad Astra einbinden

**Ergebnis:** Sehr wahrscheinlich möglich, aber nicht getestet. Ad Astra 1.20.1 unterstützt eigene Planeten per Datapack samt Raketen-Tier. Die drei Welten sind normale Dimensionen mit Overworld-Verhalten, ohne Sonderlogik.

Pro Planet eine Datei, z. B. `data/deinpack/planets/kashyyyk.json`:

```json
{
  "dimension": "star_wars:kashyyyk_dimension",
  "gravity": 9.807,
  "oxygen": true,
  "solar_power": 16,
  "solar_system": "swplanets:outer_rims",
  "temperature": 20,
  "tier": 2
}
```

Die Feldnamen entsprechen der Datei `tatooine.json` aus Star Wars Planets (Zweig 1.20.1). Dort gibt es zusätzlich das Feld `orbit` mit einer eigenen Orbit-Dimension. `swplanets:outer_rims` ist die Galaxie von Star Wars Planets; ob fremde Planeten sich dort einhängen lassen, ist nicht getestet.

Hinweis: Dieser Abschnitt betrifft nur den Rupyber-Mod, der nach der Entscheidung oben wegfällt. Er bleibt als Vorlage für andere Fremd-Dimensionen stehen.

### Zu prüfen

- [ ] **Dimension-IDs:** `star_wars:kashyyyk_dimension`, `star_wars:felucia_dimension`, `star_wars:geonosis_dimension` sind aus den Item-Namen abgeleitet. Im Spiel mit `/execute in` und Tab prüfen.
- [ ] **Orbit:** Das Feld `orbit` fehlt im Beispiel. Testen, ob Ad Astra ohne Orbit-Dimension sauber landet.
- [ ] **Name im Menü:** Ohne Übersetzung zeigt Ad Astra (ab 1.15.19) die Planeten-ID als Namen an. Ein Resource Pack ist also optional.
- [ ] **Portale:** Die Portale funktionieren parallel weiter. Wenn nur die Rakete zählen soll, die Igniter-Rezepte per KubeJS entfernen.
- [ ] **Ad-Astra-Version:** Planeten-Datapacks wie Planets+ setzen auf 1.20.1 Ad Astra 1.15.18 oder neuer voraus.

---

## 3. Star Wars The Clone Wars (MelonHaver)

Mob- und Ausrüstungs-Mod ohne eigene Welten oder Strukturen. Jar-Dateiname: `star_wars_order_six_six-…-forge-1.20.1.jar`.

### Schritte in Spielreihenfolge

1. **GeckoLib installieren:** Neuere Versionen brauchen GeckoLib, auch die Forge-Version für 1.20.1.
2. **Holo Books lesen:** Seit v1.3a vorhanden. Einzige Ingame-Doku, Inhalt nicht belegt.
3. **Tibanna Gas herstellen:** Seit v1.9a brauchen die Waffen Tibanna Gas als Munition; es gibt ein Rezept dafür.
4. **Waffen bauen:** Drei Blaster und ein Rocket Launcher. Rezepte in JEI nachschlagen.
5. **Lightsaber:** Vier Lightsaber plus „Waffle Lightsaber". Die tragbaren Klon-Rüstungen wurden mit v1.7 wieder entfernt.
6. **Auto Turret:** Seit v1.9a craftbar, für die Basisverteidigung.
7. **Klone:** Klone, auch als feindliche Order-66-Varianten, und ein Rocket Clone. Weitere Legionen sind rein optisch.
8. **Droiden:** Sieben Droiden-Typen von Anfang an, dazu Buzz Droid (neutral bis zum Angriff) und AQ Droid (KI unfertig). B1 Marine, Crab Droid und Spider Droid kamen mit v1.7.

### Unsicher

- Closed source und kein echtes Wiki: Rezepte, Spawn-Regeln und Werte sind nicht belegt.
- Ob BX-Droide, Droideka und Tactical Droid in der Forge-1.20.1-Version stecken, ist offen. v1.9 wurde in zwei Teile geteilt; der zweite Teil ist für 1.20.1 nicht gelistet.
- Jedi, Sith und Fahrzeuge (AAT, AT-TE, Jäger) stehen nur auf der Roadmap.

---

## 4. Zusammenspiel

- Mod 2 bringt keine eigenen Dimensionen und könnte die Planeten von Mod 1 bevölkern. Ob seine Mobs dort von selbst spawnen, ist nicht belegt.
- Ob beide Mods konfliktfrei zusammen laufen, ist nicht getestet.
- Mod 1 gibt es auch für 1.18.2, Mod 2 erst ab 1.20.

---

## 5. Lichtschwerter: Vergleich und Entscheidung

**Entscheidung:** Die Lichtschwerter kommen aus **Star Wars: Galaxy in a Cube**. Die Schwerter der anderen drei Mods werden per KubeJS entfernt, damit nichts doppelt ist.

### Vergleich

| | Galaxy in a Cube | Star Wars Expansion (FazBrick) | Star Wars Planets (TathanDev) | Star Wars Clone Wars (Rupyber) | Star Wars The Clone Wars (MelonHaver) |
|---|---|---|---|---|---|
| Schwerter | viele Griffe (u. a. Maul, Wookiee, Dark, Warrior, General), Doppelklinge, Doppelklingen-Glefe, Darksaber | einfach und doppelt in je fünf Farben (Blau, Grün, Rot, Gelb, Violett) | Blau, Grün, Violett, Rot, Kylo Ren, Darth Maul, Darksaber | Blau, Grün, Rot | vier plus „Waffle Lightsaber" |
| Schaden | nicht belegt | nicht belegt | 13 (per Config einstellbar), Darksaber 11 | 10 | nicht belegt |
| Haltbarkeit | nicht belegt | nicht belegt | 2031, Reparatur mit Kyber Crystal | 2032, Reparatur mit Titanium Ingot | nicht belegt |
| Treffer-Effekt | Funken, Blitze, Brandspuren | nicht belegt | Jedi-Schwerter (Blau, Grün, Violett) zünden das Ziel 6 Sekunden an | keiner | nicht belegt |
| Sounds | eigene Sounds je Klingenfarbe, Darksaber wie im Film | nicht belegt | Schwing-Sound (zwei Varianten) und Treffer-Sound | keine eigenen | nicht belegt |
| Animationen | Lauf-, Schleich- und Abwehr-Animationen, acht Kampfformen | nicht belegt (Mod braucht Player Animator) | keine | keine | nicht belegt |
| Abwehr | Blasterschüsse reflektieren | unklar (Bugfix erwähnt abprallende Laserschüsse) | keine | keine | nicht belegt |
| Anpassung | acht Kyber-Kristalle, färben und aufrüsten | feste Farben | feste Farben | feste Farben | nicht belegt |
| Herstellung | Crafting, Rezepte in JEI | einfache in Jedi-Tempeln schmieden, doppelte per Crafting | Kyber Crystal Ore, dann Light Saber Base | Glowstone Dust, Redstone, Farbstoff, Titanium Ingot | nicht belegt |
| Quellcode | geschlossen | geschlossen | offen | offen | geschlossen |

### Galaxy in a Cube im Detail

- Forge und Fabric, nur 1.20.1. Letzte Version 1.0.3.1 vom August 2026, keine Abhängigkeiten gelistet.
- **Kampfformen:** Acht Formen; sieben davon nutzen vorerst noch die Animationen der ersten Form (Shii-Cho).
- **Steuerung:** Angriffsarten und Macht-Aktionen mit Strg oder Alt plus Mausrad wechseln (Tasten umbelegbar).
- **Kampfsystem:** Ausdauer, Holocrons, Macht-Techniken wie „Mind Deception".
- **Macht abschalten:** Im Survival per Gamerule `forceObtainment`, falls nur die Schwerter gewünscht sind.
- **Weiterer Inhalt:** Klone, Droiden (B1, B2, Droideka), Klon-Rüstungen, Blaster, Plastoid, Durasteel, AT-RT, AT-ST, Jedi-Sternjäger, Ewoks, Jawas, Tusken Raiders. Eigene Dimensionen sind nicht belegt.

### Star Wars Expansion im Detail

- FazBrick Studios, nur Forge 1.20.1. Letzte Version 3.1.0 vom August 2026. Braucht GeckoLib und Player Animator.
- **Einstieg:** Abgestürzte Rettungskapsel in der Overworld finden, mit Repair Kit reparieren, über die Galaxiekarte ein Ziel wählen.
- **Planeten:** Tatooine, Hoth, Endor und Naboo sind erreichbar. Kashyyyk steht auf der Liste, eine Umsetzung ist nicht belegt.
- **Inhalt:** Strukturen (Jedi-Tempel, Mos Eisley, Tatooine Village, Hutt-Palast, Hoth-Basis, Sith Ruins), Fahrzeuge (X-Wing, TIE Fighter, Landspeeder, Speeder Bike, Snowspeeder, AT-ST), Droiden, Blaster, Bosskampf gegen den Ancient Sith Lord auf Naboo.
- **Better Combat:** Anbindung kam mit 2.0.0 und wurde mit 2.4.0 wegen Problemen wieder entfernt.
- **Sprache:** Vollständige deutsche Übersetzung.
- **Doku:** Closed source, kein Wiki. Seit 3.1.0 gibt es ein Advancement-System für Survival.

### Planeten-Konflikt

Falls Star Wars Expansion dazukommt, gibt es Tatooine, Hoth und Endor doppelt: einmal in Star Wars Planets (Ad-Astra-Raketen) und einmal in Expansion (eigene Galaxiekarte ab Rettungskapsel).

- **Variante A:** Nur Star Wars Planets für Planeten, Expansion weglassen. Bleibt bei einem Reisesystem.
- **Variante B:** Expansion für Planeten und Strukturen, Star Wars Planets weglassen. Dann laufen diese Planeten nicht über Ad Astra.
- **Variante C:** Beide behalten und die Expansion-Dimensionen per Datapack als Ad-Astra-Planeten eintragen (wie in Abschnitt 2). Nicht getestet; die doppelten Planeten bleiben als getrennte Dimensionen bestehen.

Das Modpack „Star Wars Essentials" kombiniert Expansion und Galaxy in a Cube, die beiden laufen also offenbar zusammen.

### Folgen für die Mod-Auswahl

- **Star Wars Planets** bleibt für die Planeten (Tatooine, Endor, Hoth, Mustafar) nötig. Es ist ein Ad-Astra-Addon, Forge 1.20.1, Version 1.4.6.1.
- **MelonHaver-Mod** kann vermutlich ganz entfallen, weil Galaxy in a Cube dessen Klone und Droiden weitgehend abdeckt.
- **Weitere Dopplungen** entstehen bei Klonen, Droiden, Blastern, Plastoid (Rupyber) und Kyber-Kristallen (Star Wars Planets).

### KubeJS: andere Schwerter entfernen

Server-Script (`kubejs/server_scripts/`):

```js
const REMOVED_SABERS = [
  // Star Wars Clone Wars (Rupyber)
  'star_wars:blue_lightsaber',
  'star_wars:green_lightsaber',
  'star_wars:red_lightsaber',
  // Star Wars Planets (TathanDev)
  'swplanets:light_saber_base',
  'swplanets:light_saber_blue',
  'swplanets:light_saber_green',
  'swplanets:light_saber_violet',
  'swplanets:light_saber_red',
  'swplanets:light_saber_kylo_ren',
  'swplanets:light_saber_dark_maul',
  'swplanets:darksaber'
]

ServerEvents.recipes(event => {
  REMOVED_SABERS.forEach(id => event.remove({ output: id }))
})
```

Client-Script (`kubejs/client_scripts/`), dort dieselbe Liste noch einmal anlegen:

```js
JEIEvents.hideItems(event => {
  event.hide(REMOVED_SABERS)
})
```

### Zu prüfen

- [ ] **Kampfsystem testen:** Im Kreativmodus prüfen, ob Steuerung und Ausdauer gefallen.
- [ ] **IDs von Star Wars Planets:** Stammen aus dem Quellcode (Zweig 1.20.1); im Spiel mit `/kubejs hand` gegenprüfen.
- [ ] **MelonHaver-Schwerter:** Falls der Mod bleibt, IDs mit `/kubejs hand` ermitteln und in die Liste aufnehmen.
- [ ] **Drops und Truhen:** Prüfen, ob Mobs oder Strukturen entfernte Schwerter droppen; falls ja, per LootJS ersetzen.
- [ ] **Kyber Crystal aus Star Wars Planets:** Ohne dessen Schwerter hat das Erz dort keinen Zweck mehr. Entweder ausblenden oder per Rezept in die Kristalle von Galaxy in a Cube umwandeln.
- [ ] **Advancement „craft_saber"** von Star Wars Planets wird ohne Rezept unerreichbar.
- [ ] **Rezepte und Werte** von Galaxy in a Cube in JEI nachschlagen; es gibt kein Wiki.
- [ ] **Expansion-Schwerter:** Falls der Mod dazukommt, IDs mit `/kubejs hand` ermitteln. Die Tempel-Schmiede ist vermutlich kein normales Rezept; testen, ob KubeJS sie abschalten kann.
- [ ] **Planeten-Quelle wählen:** Variante A, B oder C aus dem Abschnitt „Planeten-Konflikt".

---

## Quellen

- [Star Wars: Galaxy in a Cube – Modrinth](https://modrinth.com/mod/swgc)
- [Galaxy in a Cube – Versionen und Changelogs (Modrinth API)](https://api.modrinth.com/v2/project/swgc/version)
- [Star Wars Expansion – Modrinth](https://modrinth.com/mod/star-wars-expansion)
- [Star Wars Expansion – Versionen und Changelogs (Modrinth API)](https://api.modrinth.com/v2/project/star-wars-expansion/version)
- [Star Wars Essentials (Modpack) – ModDex](https://moddex.gg/modpack/star-wars-essentials)
- [Star Wars Planets – Quellcode (Zweig 1.20.1)](https://github.com/TathanDev/StarWarsPlanets-AdAstra)
- [Star Wars Planets – Modrinth](https://modrinth.com/mod/star-wars-planets)

- [Star Wars Clone Wars – Modrinth](https://modrinth.com/mod/star-wars-clone-wars)
- [GitHub: Pyrix25633/Forge-StarWarsCloneWars](https://github.com/Pyrix25633/Forge-StarWarsCloneWars)
- [Sprachdatei en_us.json (Mod 1)](https://raw.githubusercontent.com/Pyrix25633/Forge-StarWarsCloneWars/main/src/main/resources/assets/star_wars/lang/en_us.json)
- [Star Wars The Clone Wars – Modrinth](https://modrinth.com/mod/star-wars-the-clone-wars)
- [Versionsliste und Changelogs Mod 2 (Modrinth API)](https://api.modrinth.com/v2/project/AKkcXPCY/version?game_versions=%5B%221.20.1%22%5D)
- [Ad Astra 1.15.19 Changelog – CurseForge](https://www.curseforge.com/minecraft/mc-mods/ad-astra/files/5914893)
- [Ad Astra: Planets+ – Modrinth](https://modrinth.com/datapack/planetsplus)
- [Ad Astra: Rocketed (Datapack-Tiers)](https://moddex.gg/mod/ad-astra-rocketed)
