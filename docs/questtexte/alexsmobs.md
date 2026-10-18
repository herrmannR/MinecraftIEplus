# Questtexte Alex's Mobs

> Stand 2026-10-18, Minecraft 1.20.1. Entwurf für FTB Quests. Der Mod hat ein **Buch**, das **Animal Dictionary** (`../19_HILFEBUECHER.md`); die Texte nennen deshalb nur Ziel und Fundstelle und erklären keine Rezepte. Das Buch hat **keine Kapitel**, nur einen Eintrag je Tierart; die Fundstelle lautet daher „Animal Dictionary → <Tier>“. Alex's Mobs hat keinen eigenen Pfad auf der Meilensteinkarte. Gegliedert nach Gegenden wie der Advancement-Baum des Mods (Oberwelt, Meer und Untergrund, Nether, End, Void Worm und Weltrand), dazu Essen mit Alex's Delight. Kürzel **AM** (Quest-IDs mit Bindestrich, z. B. AM2-01; nicht zu verwechseln mit den Befunden AM1–AM5 in `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md`).
> Quellen: `../modpfade/alexsmobs/WISSEN.md`, `../modpfade/alexsmobs/data.js`, `../modpfade/CROSSMOD_AUFFAELLIGKEITEN.md` (AM1–AM5). Eintragsnamen des Buchs aus den Dateinamen unter `assets/alexsmobs/book/animal_dictionary/` im JAR (1.22.9). Item-IDs gegen die Sprachdatei geprüft.

## Hinweise zur Verwendung

- **Reine Sachtexte.** Keine Story, keine Figuren.
- **Anrede „du“**, Item- und Tiernamen englisch wie im Spiel.
- **Alle Quests sind Nebenquests**; kein Ziel des Packs braucht Alex's Mobs. Alle Nebenquests geben Credits (User, 2026-10-17). Ketten von höchstens vier Quests.
- **Buch zuerst:** AM1-01 ist das Animal Dictionary. Alle weiteren Quests verweisen auf den Eintrag des Tiers, das die Beute liefert. Dort stehen Lebensraum, Verhalten, Beute und Rezept.
- Zähmen kann FTB Quests nicht prüfen. Die Aufgaben sind deshalb Items, die man erst nach dem Zähmen oder Erlegen hat; reine Zähm-Quests sind 🔵 als Checkmark gedacht.
- **Pack-Änderungen** mit ⚙️. Für Alex's Mobs gibt es bisher keine; der Mod läuft mit seiner Standard-Config (Werte unten aus `config/alexsmobs.toml`). 🔵 = noch nicht entschieden oder nicht belegt.
- Einordnung: Vor dem Mond gibt es kein Questbuch, die Reihe steht also ab dem Mond offen. Oberwelt und Meer gehen sofort, AM4 braucht den Nether, AM5 und AM6 das End.

---

## AM1 · Tiere der Oberwelt

### AM1-01 Animal Dictionary · Nebenquest
**Aufgabe:** `alexsmobs:animal_dictionary`

Das Nachschlagewerk zu allen Tieren des Mods. Du brauchst dafür ein Beutestück irgendeines Tiers.
Buch: Das Animal Dictionary selbst; Rezept in JEI.

### AM1-02 Bananen und Akazienblüten · Nebenquest
**Aufgabe:** `alexsmobs:banana`, `alexsmobs:acacia_blossom`

Zwei neue Futtermittel aus Vanilla-Laub: Bananen fallen aus Jungle Leaves, Akazienblüten aus Acacia Leaves. Damit zähmst du Affen, Gorillas und Elefanten.
Buch: Animal Dictionary → Capuchin Monkey, Gorilla, Elephant.

### AM1-03 Hummingbird Feeder · Nebenquest
**Aufgabe:** `alexsmobs:hummingbird_feeder`

Ein gefüllter Futterspender hält Kolibris in der Nähe.
Buch: Animal Dictionary → Hummingbird.

### AM1-04 Falknerei · Nebenquest
**Aufgabe:** `alexsmobs:fish_oil`, `alexsmobs:falconry_glove`, `alexsmobs:falconry_hood`

Zähme einen Bald Eagle mit Fish Oil und rüste dich zum Falkner aus. Die Zutaten kommen von drei Tieren: Blobfish (tiefe Ozeane), Grizzly Bear und Roadrunner.
Buch: Animal Dictionary → Bald Eagle; für die Zutaten Blobfish, Grizzly Bear, Roadrunner.

---

## AM2 · Beute der Oberwelt

Jedes Stück kopiert eine Fähigkeit seines Tiers. Die Reihe ist in drei Ketten geteilt: Rüstung, Werkzeuge, Ameisen.

### AM2-01 Ein Helm aus Tierbeute · Nebenquest
**Aufgabe:** `alexsmobs:froststalker_helmet`, `alexsmobs:moose_headgear`, `alexsmobs:frontier_cap` (eins davon)

Drei Helme von drei Tieren. Der Elch wirft sein Geweih nur alle paar Tage ab, man erlegt ihn dafür nicht.
Buch: Animal Dictionary → Froststalker, Moose, Raccoon und Grizzly Bear.

### AM2-02 Brustpanzer · Nebenquest
**Aufgabe:** `alexsmobs:crocodile_chestplate`, `alexsmobs:rocky_chestplate`, `alexsmobs:spiked_turtle_shell` (eins davon)

Die Spiked Scutes für den Schildkrötenpanzer gibt es nur durch Scheren einer bemoosten Alligator Snapping Turtle.
Buch: Animal Dictionary → Crocodile, Rocky Roller, Alligator Snapping Turtle.

### AM2-03 Beine und Stiefel · Nebenquest
**Aufgabe:** `alexsmobs:emu_leggings`, `alexsmobs:centipede_leggings`, `alexsmobs:roadrunner_boots`, `alexsmobs:flying_fish_boots` (eins davon)

Ausweichen wie ein Emu, an Wänden klettern, schnell über Sand laufen oder aus dem Wasser springen.
Buch: Animal Dictionary → Emu und Kangaroo, Cave Centipede, Roadrunner, Flying Fish.

### AM2-04 Werkzeuge der Tiere · Nebenquest
**Aufgabe:** `alexsmobs:vine_lasso`, `alexsmobs:maraca`, `alexsmobs:stink_ray`, `alexsmobs:pocket_sand` (zwei davon)

Lasso aus Schlangenhaut, Rassel, Stinkstrahler und eine Handvoll Sand ins Gesicht.
Buch: Animal Dictionary → Anaconda, Rattlesnake, Skunk, Guster.

### AM2-05 Tendon Whip · Nebenquest
**Aufgabe:** `alexsmobs:tendon_whip`

Die Peitsche verbindet zwei Welten: die Elastic Tendon vom Murmur tief unter der Erde, die Dropbear Claw aus dem Nether.
Buch: Animal Dictionary → Murmur, Dropbear.

### AM2-06 Tarantula Hawk Elytra · Nebenquest
**Aufgabe:** `alexsmobs:tarantula_hawk_elytra`

Eine verbesserte Elytra aus den Flügeln der Tarantula Hawk. Du brauchst dafür eine Elytra.
Buch: Animal Dictionary → Tarantula Hawk.

### AM2-07 Blattschneiderameisen · Nebenquest
**Aufgabe:** `alexsmobs:gongylidia`, `alexsmobs:leafcutter_ant_pupa`

Finde einen Ameisenhügel, ernte den Pilz in der Kammer darunter und gründe mit einer Puppe eine eigene Kolonie. Tritt nicht auf den Hügel, sonst kommt die Königin heraus.
Buch: Animal Dictionary → Leafcutter Ant.

---

## AM3 · Meer und Untergrund

Die Ortungsgeräte bauen aufeinander auf: Echolocator → Endolocator und Strange Fish Finder.

### AM3-01 Ambergris · Nebenquest
**Aufgabe:** `alexsmobs:ambergris`

Bei schweren Gewittern stranden Pottwale an Stränden. Schieb einen unverletzt ins Wasser zurück, dann bedankt er sich mit Ambergris. Ambergris ist auch Brennstoff für 64 Items und lässt sich an Fischer verkaufen.
Buch: Animal Dictionary → Cachalot Whale.

### AM3-02 Echolocator · Nebenquest
**Aufgabe:** `alexsmobs:echolocator`

Zeigt Höhlen in der Nähe. Die Zähne verliert der Pottwal beim Rammen.
Buch: Animal Dictionary → Cachalot Whale.

### AM3-03 Endolocator · Nebenquest
**Aufgabe:** `alexsmobs:endolocator`

Der Echolocator mit Ender Pearls: Nahe einer Festung zeigt er das End-Portal.
Buch: Animal Dictionary → Cachalot Whale.

### AM3-04 Strange Fish Finder · Nebenquest
**Aufgabe:** `alexsmobs:pupfish_locator`

Der seltenste Fisch der Welt lebt in einem einzigen Chunk. Der Fish Finder zeigt die Richtung. Die Fish Bones kommen vom Skelewag an gesunkenen Schiffen.
Buch: Animal Dictionary → Devil's Hole Pupfish, Skelewag.

### AM3-05 Grappling Squok · Nebenquest
**Aufgabe:** `alexsmobs:squid_grapple`

Ein Enterhaken aus Tentakeln. Ein Lost Tentacle fällt nur, wenn ein Giant Squid mit einem Pottwal kämpft.
Buch: Animal Dictionary → Giant Squid.

### AM3-06 Shield Of The Deep · Nebenquest
**Aufgabe:** `alexsmobs:shield_of_the_deep`

Ein Schild aus Haizähnen von zwei Haiarten, dazu ein Heart of the Sea.
Buch: Animal Dictionary → Frilled Shark, Hammerhead Shark.

### AM3-07 Rainbow Glass · Nebenquest
**Aufgabe:** `alexsmobs:rainbow_glass`

Glas, dessen Farbe vom Ort abhängt. Rainbow Jelly gibt es nachts in gefrorenen Ozeanen.
Buch: Animal Dictionary → Comb Jelly.

### AM3-08 Sculk Boomer · Nebenquest
**Aufgabe:** `alexsmobs:sculk_boomer`

Der Skreecher hängt an der Decke des Deep Dark; seine Seele steckt im Boomer.
Buch: Animal Dictionary → Skreecher.

> **Achtung, Deep Dark:** Der Skreecher ruft mit seinem Schrei den Warden. Leise bleiben, Fluchtweg frei halten.
> 🔵 Ob der Schrei den Warden ruft, steht so nicht in den Quellen; im Spiel prüfen oder den Satz streichen.

### AM3-09 Ghostly Pickaxe · Nebenquest
**Aufgabe:** `alexsmobs:ghostly_pickaxe`

Underminer spuken in verlassenen Minen. Wirf ein Erz in ihre Nähe, dann zeigen sie dir verdeckte Blöcke dieses Erzes. Mit Magie getötet, lassen sie manchmal die Ghostly Pickaxe fallen.
Buch: Animal Dictionary → Underminer.

---

## AM4 · Nether

Hier beginnt die lange Kette zur Void Worm: Die **Crimson Mosquito Larva** (AM4-02) wird in AM5 gebraucht.

### AM4-01 Blood Sprayer · Nebenquest
**Aufgabe:** `alexsmobs:blood_sprayer`

Die Crimson Mosquito im Crimson Forest saugt sich an dir fest. Den Blood Sac lässt nur eine vollgesogene Mücke fallen.
Buch: Animal Dictionary → Crimson Mosquito.

### AM4-02 Crimson Mosquito Larva · Nebenquest
**Aufgabe:** `alexsmobs:mosquito_larva`

Aus einer Maggot und dem Rüssel der Mücke. Die Larve zähmt Warped Toads, lässt Stradpoles wachsen und wird im End zum Köder für die Void Worm. Nimm gleich mehrere mit.
Buch: Animal Dictionary → Fly, Crimson Mosquito.

### AM4-03 Soul Heart · Nebenquest
**Aufgabe:** `alexsmobs:soul_heart`

Soul Vultures kreisen über dem Soul Sand Valley. Ein Soul Heart fällt nur von einem Geier, der vorher Leben gesaugt hat. Im End lockt es Spectres an.
Buch: Animal Dictionary → Soul Vulture, Spectre.

### AM4-04 Auf dem Laviathan · Nebenquest
**Aufgabe:** `alexsmobs:straddle_saddle`, `alexsmobs:straddle_helmet`

Reite einen Laviathan über die Lavaseen des Nethers. Straddlite fällt selten vom Straddler in den Basalt Deltas.
Buch: Animal Dictionary → Straddler, Laviathan.

### AM4-05 Straddleboard · Nebenquest
**Aufgabe:** `alexsmobs:straddleboard`

Ein Brett, das auf Lava schwimmt. Es kostet 3 Netheritebarren.
Buch: Animal Dictionary → Straddler.

---

## AM5 · End

Der Capsid ist das Werkzeug für alle Umwandlungen bis zur Transmutation Table.

### AM5-01 Capsid · Nebenquest
**Aufgabe:** `alexsmobs:capsid`

Der Enderiophage in den End Midlands lässt ihn fallen. Er steckt dich mit Ender Flu an; Milch oder Chorus Fruit heilen. Ein Capsid wandelt einen hineingelegten Gegenstand um und fördert Gegenstände ohne Strom senkrecht nach oben.
Buch: Animal Dictionary → Enderiophage.

> **Achtung, Ender Flu:** Bleibt die Krankheit zehn Minuten unbehandelt, platzen Phagen aus dir heraus und töten dich. Milch mitnehmen.

### AM5-02 Cosmic Cod · Nebenquest
**Aufgabe:** `alexsmobs:cosmic_cod`

Ein Cod im Capsid wird zum Cosmic Cod. Damit zähmst du den Cosmaw der äußeren End-Inseln.
Buch: Animal Dictionary → Cosmic Cod, Cosmaw.

### AM5-03 Mimicream · Nebenquest
**Aufgabe:** `alexsmobs:mimicream`

Der Mimicube bewacht die End-Städte und kopiert deine Waffen. Mit Mimicream kopierst du selbst Ausrüstung samt Verzauberungen; die Kopie muss danach repariert werden.
Buch: Animal Dictionary → Mimicube.

### AM5-04 Hemolymph Blaster · Nebenquest
**Aufgabe:** `alexsmobs:hemolymph_blaster`

Den Warped Mosco gibt es nicht wild: Eine Crimson Mosquito, die an einem mit Warped Fungus bedeckten Wesen saugt, verwandelt sich in ihn. Der Blaster braucht seine Beute, den Blood Sprayer und Mimicream.
Buch: Animal Dictionary → Warped Mosco.

---

## AM6 · Void Worm und Weltrand

Der längste Pfad des Mods. Er braucht Capsid, Crimson Mosquito Larva, 2 Netheritebarren und einen Nether Star.

> **Achtung, Bosskampf:** Die Void Worm (160 Lebenspunkte) kämpft über der Leere des End. Wer fällt, verliert alles. Schaden gehört an den Kopf; triffst du ein Körpersegment, spaltet sie sich in zwei Würmer.

### AM6-01 Mysterious Worm · Nebenquest
**Aufgabe:** `alexsmobs:mysterious_worm`

Die Crimson Mosquito Larva im Capsid wird zum Mysterious Worm. Wirf ihn im End in die Leere, um die Void Worm herauszulocken.
Buch: Animal Dictionary → Void Worm.

### AM6-02 Void Worm · Nebenquest
**Aufgabe:** `alexsmobs:void_worm_eye`, `alexsmobs:void_worm_mandible` ×2

Besiege die Void Worm. Sie lässt ein Auge und zwei Mandibeln fallen.
Buch: Animal Dictionary → Void Worm.

### AM6-03 Dimensional Carver · Nebenquest
**Aufgabe:** `alexsmobs:dimensional_carver`

Er öffnet ein Portal zu deinem Spawnpunkt, 20 Benutzungen. Die zwei Mandibeln reichen nur für den Carver oder für den Void Worm Beak, nicht für beides.
Buch: Animal Dictionary → Void Worm.

### AM6-04 Farseer am Weltrand · Nebenquest
**Aufgabe:** `alexsmobs:shattered_dimensional_carver`, `alexsmobs:farseer_arm` ×2

Der Carver im Capsid zerbricht. Der zerbrochene Carver öffnet ein Portal eine Million Blöcke weit; mehrmals in dieselbe Richtung, und du stehst am Weltrand. Nur dort erscheint der Farseer.
Buch: Animal Dictionary → Farseer.

> **Achtung, Farseer:** Klauen und Augenstrahl gehen durch Rüstung und Verzauberungen. Der Weg zurück ist weit: Bett oder zweiten Carver mitnehmen.

### AM6-05 Transmutation Table · Nebenquest
**Aufgabe:** `alexsmobs:transmutation_table`

Wandelt einen ganzen Stack gegen Erfahrung in einen anderen Gegenstand um. Die Auswahl wächst mit dem, was du hineinlegst.
Buch: Animal Dictionary → Farseer.
⚙️ Kosten 3 Erfahrung je Umwandlung, Beacon gesperrt (Config, Standardwerte). 🔵 Ob die Rohmetalle und Diamanten aus dem Tisch das Erz-Gating umgehen dürfen, ist nicht entschieden (Befund AM1).

> **Achtung, Abbau:** Baust du den Tisch ab, explodiert er und verliert alles, was er gelernt hat. Nur der Nether Star bleibt.

---

## AM7 · Essen (mit Alex's Delight)

Kurze Reihe für die Küche. Messer und Cooking Pot kommen aus Farmer's Delight.

### AM7-01 Tierisch gekocht · Nebenquest
**Aufgabe:** `alexsmobs:cooked_kangaroo_meat`, `alexsmobs:cooked_moose_ribs`, `alexsmobs:cooked_lobster_tail`, `alexsmobs:boiled_emu_egg` (zwei davon)

Fleisch und Eier neuer Tiere einfach braten.
Buch: Animal Dictionary → Kangaroo, Moose, Lobster, Emu.

### AM7-02 Aus dem Cooking Pot · Nebenquest
**Aufgabe:** `alexsdelight:kangaroo_stew`, `alexsdelight:lobster_pasta`, `alexsdelight:acacia_blossom_soup` (eins davon)

Alex's Delight kocht Tierbeute mit Farmer's-Delight-Zutaten. Rezepte in JEI; Alex's Delight hat kein eigenes Buch.

### AM7-03 Burger · Nebenquest
**Aufgabe:** `alexsmobs:kangaroo_burger`, `alexsdelight:bison_burger`

Zwei Burger. Alex's Delight ersetzt das Rezept des Kangaroo Burger durch ein eigenes; es steht in JEI.

---

## ⚙️ Pack-Änderungen

| Änderung | Wo im Text | Stand |
|---|---|---|
| keine eigene Änderung; Config auf Standard (Transmutation 3 Erfahrung, Beacon gesperrt, Tisch explodiert, Void Worm 160 HP, nur End) | Hinweise, AM6, AM6-05 | 🟢 so in `config/alexsmobs.toml` |
| Transmutation Table als Umweg am Erz-Gating vorbei (Befund AM1) | AM6-05 | 🔵 nicht entschieden; falls gesperrt oder eingeschränkt, AM6-05 anpassen |
| Rezept `alexsdelight:barbecue_on_a_stick` kaputt (Befund AM4) | nicht verwendet | 🔵 nicht entschieden (entfernen und in JEI ausblenden?) |

## 🔵 Offen vor dem Einbau

- **Zähm-Quests:** FTB Quests prüft kein Zähmen. Wer Capuchin, Elefant oder Bald Eagle als eigene Quest will, braucht Checkmarks.
- **AM3-08:** Ruft der Skreecher wirklich den Warden? Steht nicht in den Quellen; im Spiel prüfen.
- **AM6-04:** Rückweg vom Weltrand (Bett, zweiter Carver) ist Spielwissen, nicht belegt; im Spiel prüfen.
- **AM6-05:** Entscheidung zu Befund AM1 (Transmutation Table und Erz-Gating).
- **Freischaltung:** Steht die ganze Reihe ab dem Mond offen, oder AM4–AM6 erst später (Nether, End)? Das Pack sperrt Nether und End bisher nicht.
- **Alex's Delight:** Barbecue on a Stick ist nicht herstellbar (Befund AM4).
- **Spectre und Ad Astra:** Falls Alex's-Mobs-Tiere auf Planeten überleben sollen, gilt der Hinweis zu den überschriebenen Entity-Tags in `../15_RAUMFAHRT.md`. Für die Quests nicht nötig.
