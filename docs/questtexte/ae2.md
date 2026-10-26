# Questtexte Applied Energistics 2

> Stand 2026-10-18, Minecraft 1.20.1. Entwurf für FTB Quests. AE2 hat ein eigenes Handbuch, den **Guide** (GuideME, `ae2:guide`; auch über die Taste G auf einem AE2-Item). Die Texte nennen deshalb nur Ziel, Fundstelle im Guide und die Abweichungen des Packs. Die Addons AE2 Wireless Terminals, Applied Mekanistics, Applied Botanics und More Immersive Wires haben kein Buch; ihre Quests erklären knapp selbst. Gegliedert nach den Meilensteinen AE1 bis AE3 der Meilensteinkarte; die Kapitel sind dort Arbeitstitel.
> Quellen: `../modpfade/ae2/WISSEN.md`, `../modpfade/ae2/data.js` (nur Brücken und Addons), Meilensteinkarte, `../01_PROGRESSION.md` (Pfad F), `../03_ERZGENERATION.md`, `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md` (AE1–AE7, A9, BM4, M7). Kapitel- und Seitentitel aus `assets/ae2/ae2guide/` im JAR (AE2 15.4.11). Item-IDs gegen die Sprachdateien geprüft. Für AE2 gibt es noch keine KubeJS-Änderungen.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren. Wo eine Quest an die Story gehängt wird, setzt der User einen Satz davor.
- **Anrede „du“**, Item-, Kapitel- und Seitennamen englisch wie im Spiel.
- **Buch:** Guide → Kapitel → Seite. Die Kapitel: *Getting Started (1.20+)* (mit Abschnitten), *AE2 Mechanics*, *Items, Blocks, and Machines*, *Example Setups*, *Tips and Tricks*.
- **Hauptweg** = nötig für spätere Ziele. **Nebenquest** = stellt den Mod in der Breite vor.
- **Pack-Änderungen** mit ⚙️. Sie stehen nicht im Guide.
- 🔵 = noch nicht entschieden oder nicht belegt.
- **Pfad F ist zweistufig** (`../01_PROGRESSION.md`): AE1 ist der frühe, teure Storage-Layer (Kisten und Drawers zentral durchsuchen), AE2 das ME-System mit Zellen und Autocrafting. ⚙️ Verteuert sind ME Controller und ME Drive (F10): Beide brauchen zusätzlich einen Advanced Control Circuit aus Mekanism und Stahlplatten. Sonst gelten die Rezepte des Mods; JEI zeigt sie.
- AE1 liegt in K3, also vor dem Mond. Laut Story gibt es dort noch kein Questbuch (`../18_STORY.md`, O31 offen). Die Texte sind trotzdem geschrieben, damit sie nachgereicht oder als Notizen genutzt werden können.

---

## AE1 · Storage-Layer (K3 Industrie)

Ziel des Meilensteins: Meteorit finden, Prozessoren prägen und vorhandene Kisten und Storage Drawers über ein kleines Netz zentral durchsuchen. Braucht IE-Stahl (Meilenstein IE1).

### AE1-01 Guide · Hauptweg
**Aufgabe:** `ae2:guide`

AE2 erklärt sich im eigenen Handbuch. Halte über einem AE2-Item die Taste G gedrückt, dann springt der Guide auf die passende Seite.
Buch: Guide → Getting Started (1.20+).
⚙️ Im Pack erzeugt AE2 keinen eigenen Strom, und einige Rezepte können vom Guide abweichen. Gültig ist immer, was JEI zeigt.

### AE1-02 Charger und Crank · Hauptweg
**Aufgabe:** `ae2:charger`, `ae2:crank`

Der Charger lädt Certus Quartz auf und macht aus einem Kompass den Meteorite Compass. Strom gibt die Kurbel oder jede FE-Quelle.
Buch: Items, Blocks, and Machines → Charger, Crank.
⚙️ Statt der Kurbel kannst du den Charger direkt an IE-Strom hängen.

### AE1-03 Meteorite Compass · Hauptweg
**Aufgabe:** `ae2:meteorite_compass`

Der Kompass zeigt zum nächsten Meteoriten.
Buch: Items, Blocks, and Machines → Meteorite Compass; Getting Started → Getting The Initial Materials.
⚙️ Meteoriten gibt es nur in der Overworld, etwa einer je 32 × 32 Chunks.

### AE1-04 Der Meteorit · Hauptweg
**Aufgabe:** `ae2:silicon_press`, `ae2:logic_processor_press`, `ae2:calculation_processor_press`, `ae2:engineering_processor_press`, `ae2:sky_stone_block`

Im Kern des Meteoriten steckt der Mysterious Cube mit den vier Inscriber-Pressen. Daneben findest du Budding Certus Quartz und Sky Stone. Ein Meteorit reicht: Pressen lassen sich später im Inscriber kopieren.
Buch: AE2 Mechanics → Meteorites; Items, Blocks, and Machines → Mysterious Cube, Presses, Sky Stone.
⚙️ Certus gibt es im Pack nur an Budding-Blöcken, kein Certus-Erz. Flawless Budding Certus lässt sich nicht abbauen; merk dir den Ort.
⚙️ Später gibt es weitere Quellen: Sky Stone aus 5 Moon Stone und 4 Mars Stone (Ad Astra), Budding Quartz aus einem Blood-Magic-Meteor mit Certus Quartz Crystal (Mark of the Falling Tower).

### AE1-05 Certus wachsen lassen · Hauptweg
**Aufgabe:** `ae2:growth_accelerator`, 16 × `ae2:certus_quartz_crystal`

Certus wächst als Cluster an Budding-Blöcken; der Growth Accelerator beschleunigt das stark. Bau ihn zuerst.
Buch: Getting Started → Growing Certus Quartz; AE2 Mechanics → Certus Growth; Items, Blocks, and Machines → Budding Certus Quartz, Growth Accelerator.
⚙️ Der Growth Accelerator braucht Strom. AE2 erzeugt im Pack keinen eigenen; nimm IE-Strom.
⚙️ Mekanism hat eigene Rezepte für AE2-Material (Staub, Kristalle); JEI zeigt sie.

### AE1-06 Fluix · Hauptweg
**Aufgabe:** `ae2:fluix_crystal`

Fluix ist das zweite Grundmaterial: Charged Certus, Redstone und Nether Quartz, zusammen ins Wasser geworfen.
Buch: Getting Started → A Quick Aside on Fluix; Items, Blocks, and Machines → Fluix Crystal, Charged Certus Quartz Crystal.

### AE1-07 Inscriber · Hauptweg
**Aufgabe:** `ae2:inscriber`

Im Inscriber prägst du mit den Pressen die Schaltkreise. Eine Presse mit einem Eisenblock ergibt eine Kopie.
Buch: Items, Blocks, and Machines → Inscriber, Presses.
⚙️ Der Inscriber nimmt FE direkt an; Strom aus IE.

### AE1-08 Die drei Prozessoren · Hauptweg
**Aufgabe:** `ae2:silicon`, `ae2:logic_processor`, `ae2:calculation_processor`, `ae2:engineering_processor`

Aus Gold, Certus, Diamant und Silicon entstehen Printed Circuits und daraus die drei Prozessoren. Fast jedes ME-Gerät braucht einen davon.
Buch: Getting Started → Inscribing Some Processors; Items, Blocks, and Machines → Processors.
⚙️ 🔵 Ob die Prozessoren im Pack teurer werden (Teil des „teuren“ Storage-Layers), ist offen.

### AE1-09 Formation Core und Annihilation Core · Hauptweg
**Aufgabe:** `ae2:formation_core`, `ae2:annihilation_core`

Die beiden Kerne stecken in Terminals, Bussen und Ebenen.
Buch: Items, Blocks, and Machines → Formation and Annihilation Cores.

### AE1-10 Energy Acceptor · Hauptweg
**Aufgabe:** `ae2:energy_acceptor`

Das Netz läuft mit AE. Der Energy Acceptor wandelt Forge Energy um, 2 FE ergeben 1 AE.
Buch: AE2 Mechanics → Energy; Items, Blocks, and Machines → Energy Acceptor.
⚙️ Vibration Chamber und Crystal Resonance Generator gibt es im Pack nicht. Strom kommt aus IE oder Mekanism.

### AE1-11 Kabel und ME Terminal · Hauptweg
**Aufgabe:** `ae2:fluix_glass_cable`, `ae2:terminal`

Kabel verbinden die Geräte, das Terminal zeigt alles, was im Netz liegt. Ein Netz ohne Controller trägt höchstens 8 Geräte.
Buch: Getting Started → Matter Energy Tech: ME Networks and Storage; Items, Blocks, and Machines → Cables, Terminals; AE2 Mechanics → Channels.

### AE1-12 Kisten anbinden · Hauptweg
**Aufgabe:** `ae2:storage_bus`

Der Storage Bus macht eine Kiste oder einen Storage Drawer zum Teil des Netzes. Ein Bus je Lager, und das Terminal durchsucht alles auf einmal. Das ist der Storage-Layer.
Buch: Items, Blocks, and Machines → ME Storage Bus; AE2 Mechanics → Import, Export, and Storage.
⚙️ 🔵 Ob ein Storage Bus an einem Drawer Controller alle angeschlossenen Drawers erfasst, im Spiel prüfen.

### AE1-13 Quartz Glass und Illuminated Panel · Nebenquest
**Aufgabe:** `ae2:quartz_glass`, `ae2:semi_dark_monitor`

Quartz Glass und Panels sind Bauteile für Terminals und Zellen und zugleich Baumaterial.
Buch: Items, Blocks, and Machines → Quartz Glass, Illuminated Panels.

---

## AE2 · ME-System (K9)

Ziel des Meilensteins: echte Speicherzellen, Autocrafting und Applied Mekanistics. Braucht die Prozessoren (AE1) und den Mekanism-Ausbau (MK3). AE2 soll vorhandene Produktion verbinden, nicht ersetzen.

### AE2-01 Storage Cells · Hauptweg
**Aufgabe:** `ae2:item_storage_cell_1k`

Eine Zelle besteht aus Housing und Component. Sie zählt Bytes und Sorten: höchstens 63 Sorten je Zelle, egal wie groß.
Buch: Items, Blocks, and Machines → Storage Cells; AE2 Mechanics → Bytes and Types.
⚙️ 🔵 Ob Housing oder Components im Pack teurer werden (AE2 als Endgame), ist offen.

### AE2-02 ME Drive · Hauptweg
**Aufgabe:** `ae2:drive`

Der Drive hält mehrere Zellen und macht sie fürs Netz sichtbar.
Buch: Items, Blocks, and Machines → ME Drive; Getting Started → Your Very First ME System.
⚙️ Rezept anders als im Guide: 4 Steel Plate, 2 Engineering Processor, 2 Fluix Glass Cable und ein Advanced Control Circuit aus Mekanism (Quest „Die Stufen von Mekanism“). Siehe JEI.

### AE2-03 ME Controller · Hauptweg
**Aufgabe:** `ae2:controller`

Ab 9 Geräten braucht das Netz einen Controller. Er verteilt Kanäle: 8 je normalem Kabel, 32 je Dense Cable.
Buch: Items, Blocks, and Machines → Controller; AE2 Mechanics → Channels; Getting Started → Expanding your Network, Overcoming Limits.
⚙️ Rezept anders als im Guide: 2 Steel Plate, 3 Fluix Crystal, ein Engineering Processor, 2 Smooth Sky Stone Block und ein Advanced Control Circuit aus Mekanism. Siehe JEI.

### AE2-04 Größere Zellen · Nebenquest
**Aufgabe:** `ae2:item_storage_cell_4k`, `ae2:item_storage_cell_16k`

Jede Stufe braucht drei Components der vorigen.
Buch: Items, Blocks, and Machines → Storage Cells.

### AE2-05 Fluid Cell · Nebenquest
**Aufgabe:** `ae2:fluid_cell_housing`

Auch Flüssigkeiten lassen sich im Netz lagern.
Buch: Items, Blocks, and Machines → Storage Cells.

### AE2-06 Energy Cell · Nebenquest
**Aufgabe:** `ae2:energy_cell`

Ein Puffer für 200.000 AE, damit das Netz Stromspitzen übersteht.
Buch: Items, Blocks, and Machines → Energy Cells.

### AE2-07 Import, Export, Interface · Nebenquest
**Aufgabe:** `ae2:import_bus`, `ae2:export_bus`, `ae2:interface`

Busse ziehen Items ins Netz und geben sie an Maschinen ab; das Interface ist ein Puffer zwischen Netz und Außenwelt. So hängst du IE- und Mekanism-Maschinen an.
Buch: Items, Blocks, and Machines → ME Import Bus, ME Export Bus, Interface; AE2 Mechanics → Import, Export, and Storage.

### AE2-08 Level Emitter · Nebenquest
**Aufgabe:** `ae2:level_emitter`

Gibt ein Redstone-Signal, wenn ein Vorrat eine Grenze über- oder unterschreitet. Damit schaltest du Maschinen nach Bedarf.
Buch: Items, Blocks, and Machines → Level Emitter; Example Setups → Level Emitter Autostocking.

### AE2-09 Upgrade Cards und Cell Workbench · Nebenquest
**Aufgabe:** `ae2:basic_card`, `ae2:advanced_card`, `ae2:cell_workbench`

Karten machen Busse schneller oder genauer; in der Cell Workbench stellst du Filter für Zellen ein.
Buch: Items, Blocks, and Machines → Upgrade Cards, Cell Workbench.

### AE2-10 Crafting Terminal · Hauptweg
**Aufgabe:** `ae2:crafting_terminal`

Ein Terminal mit eigenem Werkbank-Raster, das direkt aus dem Netz nimmt.
Buch: Items, Blocks, and Machines → Terminals.

### AE2-11 Patterns · Hauptweg
**Aufgabe:** `ae2:blank_pattern`, `ae2:pattern_encoding_terminal`

Ein Pattern speichert ein Rezept. Crafting Patterns gelten für die Werkbank, Processing Patterns für Maschinen anderer Mods.
Buch: AE2 Mechanics → Autocrafting; Items, Blocks, and Machines → Patterns, Terminals.

### AE2-12 Pattern Provider und Molecular Assembler · Hauptweg
**Aufgabe:** `ae2:pattern_provider`, `ae2:molecular_assembler`

Der Provider schickt die Zutaten eines Patterns los, der Assembler craftet Werkbank-Rezepte. Für Processing Patterns stellst du den Provider an eine Maschine.
Buch: Items, Blocks, and Machines → Pattern Provider, Molecular Assembler.

### AE2-13 Crafting CPU · Hauptweg
**Aufgabe:** `ae2:crafting_unit`, `ae2:1k_crafting_storage`

Ohne CPU kein Autocrafting: Sie plant den Auftrag und hält die Zwischenprodukte. Mindestens ein Crafting Storage gehört dazu.
Buch: Items, Blocks, and Machines → Crafting CPU Multiblock (Storage, Coprocessor, Monitor, Unit).

### AE2-14 Applied Mekanistics · Hauptweg
**Aufgabe:** `appmek:chemical_cell_housing`, `appmek:chemical_storage_cell_4k`

Applied Mekanistics lagert Mekanism-Chemikalien wie Gase im ME-Netz. Das Housing braucht 2 Quartz Glass, 3 Redstone und 3 Osmium Ingot; die Zelle entsteht wie eine Item-Zelle aus Housing und Component. Mit Processing Patterns läuft dann auch Autocrafting über Mekanism-Maschinen, die Gase brauchen.
Das Addon steht nicht im Guide.

### AE2-15 Kabelloser Zugriff · Nebenquest
**Aufgabe:** `ae2:fluix_pearl`, `ae2:wireless_access_point`, `ae2:wireless_terminal`

Der Access Point macht das Netz in seiner Umgebung kabellos erreichbar, das Wireless Terminal greift von dort darauf zu. Wireless Booster im Access Point erhöhen die Reichweite.
Buch: Items, Blocks, and Machines → Fluix Pearl, Wireless Receiver, Wireless Access Point, Wireless Terminals.

### AE2-16 Wireless Universal Terminal · Nebenquest
**Aufgabe:** `ae2wtlib:wireless_universal_terminal`

Das Addon AE2 Wireless Terminals bringt auch kabellose Pattern-Terminals. Zwei kabellose Terminals lassen sich zum Universal Terminal kombinieren. Die Magnet Card im Wireless Crafting Terminal zieht laut Beschreibung Items an.
Das Addon steht nicht im Guide.

### AE2-17 P2P Tunnels · Nebenquest
**Aufgabe:** `ae2:me_p2p_tunnel`

P2P Tunnels tragen Kanäle, Items, Flüssigkeiten, Strom oder Redstone durch ein einziges Kabel. Ein ME P2P trägt 32 Kanäle. Abgestimmt wird mit einem Item in der Hand.
Buch: AE2 Mechanics → P2P Tunnels; Items, Blocks, and Machines → P2P Tunnels.
Ein Chemical P2P Tunnel (Applied Mekanistics) wird mit einem Mekanism Chemical Tank abgestimmt.

### AE2-18 ME über IE-Drähte · Nebenquest
**Aufgabe:** `more_immersive_wires:ae_coil`, `more_immersive_wires:ae_connector`

More Immersive Wires führt ME-Kabel als IE-Draht über Masten, auch über weite Strecken. Die Spule braucht 4 Aluminiumdraht aus IE und 4 Glass Cable; Anschluss und Relais setzt du wie bei IE. Für 32 Kanäle gibt es Dense-Spule, -Anschluss und -Relais.
Das Addon steht nicht im Guide; das Verlegen erklärt das Engineer's Manual bei den Drähten.

---

## AE3 · Quantenbrücke (K13 Die Prüfung)

Ziel des Meilensteins: zwei Netze über jede Entfernung und Dimension verbinden, dazu Spatial IO.
⚙️ 🔵 Vorschlag auf der Meilensteinkarte: die Quantum Network Bridge als „Navigationscomputer“, Hürde der Rakete T6. Nicht entschieden.

### AE3-01 Matter Condenser und Singularity · Hauptweg
**Aufgabe:** `ae2:condenser`, `ae2:singularity`

Der Condenser vernichtet Items und macht daraus Matter Balls oder, mit mindestens einer 64k Component, eine Singularity. Eine Singularity kostet 256.000 Items. Mit Export Bus und Bruchstein-Generator geht das von selbst.
Buch: Items, Blocks, and Machines → Matter Condenser, Singularities.

> **Vorsicht:** Im nächsten Schritt brauchst du eine Explosion. Nicht neben dem Netz oder der Basis zünden.

### AE3-02 Quantum Entangled Singularity · Hauptweg
**Aufgabe:** 2 × `ae2:quantum_entangled_singularity`, `ae2:ender_dust`

Singularity und Ender Dust in einer Explosion ergeben ein verschränktes Paar. Je eines kommt an jedes Ende der Brücke.
Buch: Items, Blocks, and Machines → Singularities, Ender Dust, Tiny TNT.

### AE3-03 Quantum Network Bridge · Hauptweg
**Aufgabe:** `ae2:quantum_ring`, `ae2:quantum_link`

Acht Quantum Rings um eine Quantum Link Chamber bilden ein Ende. Beide Enden müssen geladen sein; dann trägt die Brücke 32 Kanäle über jede Entfernung, auch zwischen Planeten.
Buch: AE2 Mechanics → Quantum Bridge; Items, Blocks, and Machines → Quantum Bridge.
⚙️ 🔵 Beide Enden müssen im geladenen Chunk liegen; auf dem Server mit Spatial Anchor oder Chunkloader von Mekanism. Im Spiel prüfen.

### AE3-04 Quantum Bridge Card · Nebenquest
**Aufgabe:** `ae2wtlib:quantum_bridge_card`

Die Karte aus AE2 Wireless Terminals (2 Fluix Pearl und ein Wireless Receiver) verbindet ein kabelloses Terminal über eine Quantum Bridge ohne Reichweitengrenze.
Das Addon steht nicht im Guide. 🔵 Aufbau im Spiel prüfen.

### AE3-05 Spatial IO · Nebenquest
**Aufgabe:** `ae2:spatial_pylon`, `ae2:spatial_io_port`, `ae2:spatial_storage_cell_2`

Spatial IO schneidet einen Raum aus der Welt und speichert ihn in einer Zelle, samt Blöcken und Maschinen. So lässt sich sogar Flawless Budding Certus umziehen.
Buch: AE2 Mechanics → Spatial IO; Items, Blocks, and Machines → Spatial Pylon, Spatial IO Port, Spatial Cells.
🔵 Energiebedarf nicht ausgelesen. Die gespeicherten Räume liegen in einer eigenen Dimension; ob sie auf dem Server stabil läuft, ist nicht geprüft.

### AE3-06 Spatial Anchor · Nebenquest
**Aufgabe:** `ae2:spatial_anchor`

Der Anchor hält die Chunks des eigenen Netzes geladen.
Buch: Items, Blocks, and Machines → Spatial Anchor.
🔵 Ob Chunkloading auf dem Server erlaubt bleibt, entscheidet der Host.

### AE3-07 Applied Botanics · Nebenquest
**Aufgabe:** `appbot:mana_cell_housing`, `appbot:mana_storage_cell_4k`

Applied Botanics lagert Mana im ME-Netz. Das Housing braucht 2 Quartz Glass, 3 Life Essence und 3 Manasteel Ingot, also erst nach dem Gaia Guardian. Ein Mana P2P Tunnel wird mit Petals oder Mana Dust abgestimmt.
Das Addon steht nicht im Guide.

---

## Nebenquests ohne Meilenstein (Werkzeuge)

Ab AE1 freigeschaltet, ohne Reihenfolge.

### AEX-01 Certus Quartz Wrench · Nebenquest
**Aufgabe:** `ae2:certus_quartz_wrench`

Dreht Geräte und baut sie ohne Spitzhacke ab.
Buch: Items, Blocks, and Machines → Wrenches.

### AEX-02 Network Tool · Nebenquest
**Aufgabe:** `ae2:network_tool`

Zeigt Kanäle und Strom eines Netzes und hat Platz für Upgrade Cards.
Buch: Items, Blocks, and Machines → Network Tool.

### AEX-03 Memory Card · Nebenquest
**Aufgabe:** `ae2:memory_card`

Kopiert Einstellungen von einem Gerät aufs nächste und verbindet P2P Tunnels.
Buch: Items, Blocks, and Machines → Memory Card.

### AEX-04 Portable Cell · Nebenquest
**Aufgabe:** `ae2:portable_item_cell_1k`

Ein kleiner Speicher für unterwegs.
Buch: Items, Blocks, and Machines → Storage Cells.

### AEX-05 Fluix-Werkzeuge · Nebenquest
**Aufgabe:** `ae2:fluix_pickaxe`

Werkzeuge aus Fluix, über das Fluix Smithing Template.
Buch: Items, Blocks, and Machines → Quartz Tools, Fluix Tools, Fluix Smithing Template.

### AEX-06 Matter Cannon · Nebenquest
**Aufgabe:** `ae2:matter_cannon`

Verschießt Matter Balls oder Nuggets und braucht 1.600 AE je Schuss.
Buch: Items, Blocks, and Machines → Matter Cannon, Matter Ball.

---

## ⚙️ Pack-Änderungen, die die Texte voraussetzen

| Änderung | Steht in | Stand |
|---|---|---|
| AE2 erzeugt keinen Strom: Vibration Chamber und Crystal Resonance Generator entfernt | AE1-01, AE1-02, AE1-05, AE1-07, AE1-10 | 🟢 entschieden 2026-10-17, umgesetzt (`ideenimport_entfernt.js`, JEI ausgeblendet), Test 36 ✅ |
| Storage-Layer bleibt in K3; ME Controller und ME Drive brauchen zusätzlich Advanced Control Circuit und Stahlplatten (F10) | Hinweise, AE2-02, AE2-03 | 🟢 entschieden 2026-10-20, Skript `ae2_verteuerung.js` liegt vor (ungetestet) |
| Kein Certus-Erz, Meteoriten nur in der Overworld | AE1-03, AE1-04 | 🟢 Mod-Verhalten, so belassen (`03_ERZGENERATION.md`) |
| Sky Stone aus Moon und Mars Stone (Ad Astra) | AE1-04 | 🟢 Fund (Ü A9) |
| Budding Quartz aus dem Blood-Magic-Meteor | AE1-04 | 🟢 Fund (Ü BM4), Meteore bleiben unverändert |
| Mekanism-Rezepte für AE2-Material | AE1-05 | 🟢 Fund (Ü M7) |
| Applied Mekanistics Housing aus Osmium | AE2-14 | 🟢 Mod-Rezept |
| Applied Botanics erst nach Gaia | AE3-07 | 🟢 Mod-Rezept |
| More Immersive Wires mit IE-Aluminiumdraht | AE2-18 | 🟢 Mod installiert |
| Quantum Bridge als Hürde der Rakete T6 | AE3 | 🔵 Vorschlag |

## 🔵 Offen vor dem Einbau

- **O31:** AE1 liegt vor dem Mond. Ob AE1 im Questbuch nachgereicht wird oder als Notiz steht, entscheidet der User.
- **Verteuerung (F10):** Controller und Drive sind eingearbeitet (AE2-02, AE2-03). Die ⚙️-🔵-Zeilen in AE1-08 (Prozessoren) und AE2-01 (Housing, Components) fragen, ob noch mehr teurer wird; F10 nennt nur Controller und Drive. Rezepte im Spiel prüfen (Skript ungetestet).
- 🟢 **Bezug AE2 → Mekanism** (2026-10-26): AE2-02 (und damit AE2-03) hängt an Mekanism MK3-02 (Advanced Control Circuit), über `deps` in `tools/questbuch/ae2.cfg`.
- **AEX (Werkzeuge):** im Kapitel an den Guide (AE1-01) gehängt, also ab K3 sichtbar. AEX-06 Matter Cannon braucht Matter Balls aus dem Condenser (AE3, K13), der in Teil 1 fehlt; Nadeln (Nuggets) gehen auch.
- **Storage Bus an Storage Drawers** (AE1-12) im Spiel prüfen: ein Bus am Drawer Controller oder je Drawer.
- **Quantum Bridge auf dem Server** (AE3-03): Chunkloading beider Enden klären; zugleich, ob Spatial Anchor und Spatial-Storage-Dimension erlaubt sind (AE3-05, AE3-06).
- **Quantum Bridge Card** (AE3-04) und **Magnet Card** (AE2-16): nur aus Rezept und Sprachdatei bekannt, im Spiel prüfen.
- **Aufgabe AE1-05:** Die Menge Certus (16) ist frei gewählt; beim Einbau anpassen.
