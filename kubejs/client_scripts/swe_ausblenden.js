// Star Wars Expansion in JEI ausblenden (F43, 2026-10-31; docs/20_ENTSCHEIDUNGEN.md, Wissen: docs/modpfade/swe/WISSEN.md).
// Der Mod ist nur wegen seiner Wesen im Pack (Easy-NPC-Doppler). Seine Rezepte entfernt server_scripts/starwars/swe_entfernt.js,
// die Rettungskapsel in der Overworld schaltet data/star_wars_expansion/worldgen/structure/broken_pod_structure.json ab.
// Drei Listen: DAUERHAFT bleibt immer ausgeblendet; NUR_TEIL1 kann in Teil 2/3 wieder sichtbar werden (Belohnungen);
// SPAWN_EIER braucht im Spiel niemand (Doppler wählt das Modell aus einer Liste, echte Wesen setzt der Host mit /summon).
// Stand 2026-10-31, KubeJS 2001. UNGETESTET.

// Reisesystem, Doppeltes zu Galaxy in a Cube / Star Wars Planets, Planeten-Rohstoffe, Baublöcke, Händlerblöcke, Credits
const SWE_DAUERHAFT = [
    'star_wars_expansion:ancient_mandalorian_mask_helmet', 'star_wars_expansion:aurodium_ingot', 'star_wars_expansion:aurodium_ore', 'star_wars_expansion:banhta_horn',
    'star_wars_expansion:bantha_leather', 'star_wars_expansion:beskar_armor_chestplate', 'star_wars_expansion:beskar_armor_helmet', 'star_wars_expansion:beskar_armor_leggings',
    'star_wars_expansion:beskar_ingot', 'star_wars_expansion:blaster_e_11', 'star_wars_expansion:blue_double_lightsaber_closed', 'star_wars_expansion:blue_lightsaber_closed',
    'star_wars_expansion:blue_petals', 'star_wars_expansion:cantina_light', 'star_wars_expansion:carbonite', 'star_wars_expansion:clone_armor_212_chestplate',
    'star_wars_expansion:clone_armor_212_helmet', 'star_wars_expansion:clone_armor_212_leggings', 'star_wars_expansion:clone_armor_41_chestplate', 'star_wars_expansion:clone_armor_41_helmet',
    'star_wars_expansion:clone_armor_41_leggings', 'star_wars_expansion:clone_armor_501_chestplate', 'star_wars_expansion:clone_armor_501_helmet', 'star_wars_expansion:clone_armor_501_leggings',
    'star_wars_expansion:clone_armor_chestplate', 'star_wars_expansion:clone_armor_helmet', 'star_wars_expansion:clone_armor_leggings', 'star_wars_expansion:computer_station',
    'star_wars_expansion:computer_tip', 'star_wars_expansion:control_panel', 'star_wars_expansion:control_station', 'star_wars_expansion:copper_sandstone_ore',
    'star_wars_expansion:dl_44', 'star_wars_expansion:doonium_armor_chestplate', 'star_wars_expansion:doonium_armor_leggings', 'star_wars_expansion:doonium_ingot',
    'star_wars_expansion:doonium_ore', 'star_wars_expansion:double_lightsaber_geo', 'star_wars_expansion:double_lightsaber_green', 'star_wars_expansion:double_lightsaber_purple',
    'star_wars_expansion:double_lightsaber_red', 'star_wars_expansion:double_lightsaber_yellow', 'star_wars_expansion:ee_3', 'star_wars_expansion:electronic_board',
    'star_wars_expansion:energy_shield', 'star_wars_expansion:escape_pod_item', 'star_wars_expansion:fallen_sith_armor_chestplate', 'star_wars_expansion:fallen_sith_armor_helmet',
    'star_wars_expansion:fallen_sith_armor_leggings', 'star_wars_expansion:force_pike', 'star_wars_expansion:gaderffii_stick', 'star_wars_expansion:galactic_credit',
    'star_wars_expansion:galactic_credit_gold', 'star_wars_expansion:green_double_lightsaber_closed', 'star_wars_expansion:green_lightsaber_closed', 'star_wars_expansion:grid_metal_block',
    'star_wars_expansion:gungan_shield', 'star_wars_expansion:gungan_staff', 'star_wars_expansion:hardened_mud', 'star_wars_expansion:holocron',
    'star_wars_expansion:hoth_snow', 'star_wars_expansion:hoth_stone', 'star_wars_expansion:imperial_block', 'star_wars_expansion:imperial_lantern',
    'star_wars_expansion:imperial_slab', 'star_wars_expansion:jedi_temple_guard_armor_chestplate', 'star_wars_expansion:jedi_temple_guard_armor_helmet', 'star_wars_expansion:jedi_temple_guard_armor_leggings',
    'star_wars_expansion:kolto_tank', 'star_wars_expansion:korriban_rune_block', 'star_wars_expansion:korriban_stone', 'star_wars_expansion:krykna_leg',
    'star_wars_expansion:krykna_string', 'star_wars_expansion:kyber_crystal_blue', 'star_wars_expansion:kyber_crystal_green', 'star_wars_expansion:kyber_crystal_purple',
    'star_wars_expansion:kyber_crystal_red', 'star_wars_expansion:kyber_crystal_yellow', 'star_wars_expansion:lighstaner_geo_red', 'star_wars_expansion:lightsaber_geo',
    'star_wars_expansion:lightsaber_geo_green', 'star_wars_expansion:lightsaber_geo_purple', 'star_wars_expansion:lightsaber_geo_yellow', 'star_wars_expansion:magnaguard_staff',
    'star_wars_expansion:metal_block', 'star_wars_expansion:metal_slab', 'star_wars_expansion:metal_stairs', 'star_wars_expansion:metal_trapdoor',
    'star_wars_expansion:modern_bookshelf', 'star_wars_expansion:modern_chair', 'star_wars_expansion:modern_crate', 'star_wars_expansion:modern_crate_2',
    'star_wars_expansion:modern_crate_3', 'star_wars_expansion:modern_crate_4', 'star_wars_expansion:modern_lantern', 'star_wars_expansion:modern_pillar',
    'star_wars_expansion:modern_slab', 'star_wars_expansion:modern_stairs', 'star_wars_expansion:moisture_vaporator', 'star_wars_expansion:naboo_royal_guard_armor_chestplate',
    'star_wars_expansion:naboo_royal_guard_armor_helmet', 'star_wars_expansion:naboo_royal_guard_armor_leggings', 'star_wars_expansion:naboo_stone', 'star_wars_expansion:orange_petals',
    'star_wars_expansion:plastoid', 'star_wars_expansion:purple_double_lightsaber_closed', 'star_wars_expansion:purple_lightsaber_closed', 'star_wars_expansion:quadanium_ingot',
    'star_wars_expansion:quadanium_ore', 'star_wars_expansion:red_double_lightsaber_closed', 'star_wars_expansion:red_lightsaber_closed', 'star_wars_expansion:redwood_log',
    'star_wars_expansion:reparation_kit', 'star_wars_expansion:rubber', 'star_wars_expansion:rubber_ore', 'star_wars_expansion:saber_emitter',
    'star_wars_expansion:saber_handle', 'star_wars_expansion:skiff_armor_chestplate', 'star_wars_expansion:skiff_armor_helmet', 'star_wars_expansion:skiff_armor_leggings',
    'star_wars_expansion:slim_imperial_block', 'star_wars_expansion:statue', 'star_wars_expansion:stormtrooper_armor_chestplate', 'star_wars_expansion:stormtrooper_armor_helmet',
    'star_wars_expansion:stormtrooper_armor_leggings', 'star_wars_expansion:tatooine_door', 'star_wars_expansion:tatooine_planet_anchor', 'star_wars_expansion:tatooine_sand',
    'star_wars_expansion:tatooine_sandstone', 'star_wars_expansion:tatooine_sandstone_slab', 'star_wars_expansion:tatooine_sandstone_stairs', 'star_wars_expansion:tatooine_sandstone_wall',
    'star_wars_expansion:tauntaun_leather', 'star_wars_expansion:tie_fighter_item', 'star_wars_expansion:westar_34', 'star_wars_expansion:workspace_bench',
    'star_wars_expansion:x_wing_item', 'star_wars_expansion:yellow_double_lightsaber_closed', 'star_wars_expansion:yellow_lightsaber_closed'
]

// Droiden-Items, Bodenfahrzeuge, Waffen ohne Doppelung, Gewänder mit Doppelsprung, Masken mit Effekt, Snow Suit, Platte, Essen
const SWE_NUR_TEIL1 = [
    'star_wars_expansion:r_2_d_2', 'star_wars_expansion:r_4_p_17', 'star_wars_expansion:r_2_kt', 'star_wars_expansion:c_3_po',
    'star_wars_expansion:tc_14', 'star_wars_expansion:i_82', 'star_wars_expansion:gnk', 'star_wars_expansion:mse_6',
    'star_wars_expansion:t_3_m_4_item', 'star_wars_expansion:viper_113_k', 'star_wars_expansion:bb_8', 'star_wars_expansion:b_1',
    'star_wars_expansion:landspeeder_item', 'star_wars_expansion:speeder_bike_item', 'star_wars_expansion:snowspeeder_item', 'star_wars_expansion:atst_item',
    'star_wars_expansion:vibroblade', 'star_wars_expansion:vibro_axe', 'star_wars_expansion:stun_baton', 'star_wars_expansion:thermal_detonator',
    'star_wars_expansion:brown_jedi_clothes_chestplate', 'star_wars_expansion:gray_jedi_clothes_chestplate', 'star_wars_expansion:black_jedi_clothes_chestplate', 'star_wars_expansion:grand_master_jedi_clothes_chestplate',
    'star_wars_expansion:sith_clothes_chestplate', 'star_wars_expansion:stabilizer_mask_helmet', 'star_wars_expansion:interface_band_helmet', 'star_wars_expansion:ancient_sith_lord_mask_helmet',
    'star_wars_expansion:snow_suit_helmet', 'star_wars_expansion:snow_suit_chestplate', 'star_wars_expansion:snow_suit_leggings', 'star_wars_expansion:cantina_music',
    'star_wars_expansion:raw_bantha_meat', 'star_wars_expansion:cooked_bantha_meat', 'star_wars_expansion:raw_porg', 'star_wars_expansion:cooked_porg',
    'star_wars_expansion:raw_shaak_beef', 'star_wars_expansion:bantha_milk', 'star_wars_expansion:meiloorun', 'star_wars_expansion:jogan',
    'star_wars_expansion:arges_frog_leg'
]

const SWE_SPAWN_EIER = [
    'star_wars_expansion:ancient_sith_lord_spawn_egg', 'star_wars_expansion:arges_frog_spawn_egg', 'star_wars_expansion:astromech_droid_blue_spawn_egg', 'star_wars_expansion:astromech_droid_pink_spawn_egg',
    'star_wars_expansion:astromech_droid_red_spawn_egg', 'star_wars_expansion:bantha_spawn_egg', 'star_wars_expansion:bib_fortuna_spawn_egg', 'star_wars_expansion:brain_walker_spawn_egg',
    'star_wars_expansion:cantina_band_spawn_egg', 'star_wars_expansion:ewok_spawn_egg', 'star_wars_expansion:gamorrean_spawn_egg', 'star_wars_expansion:gonk_droid_spawn_egg',
    'star_wars_expansion:gungan_soldier_spawn_egg', 'star_wars_expansion:gungan_spawn_egg', 'star_wars_expansion:human_spawn_egg', 'star_wars_expansion:hutt_spawn_egg',
    'star_wars_expansion:ithorian_spawn_egg', 'star_wars_expansion:jawa_spawn_egg', 'star_wars_expansion:krykna_spawn_egg', 'star_wars_expansion:mouse_droid_spawn_egg',
    'star_wars_expansion:pirate_spawn_egg', 'star_wars_expansion:porg_spawn_egg', 'star_wars_expansion:protocol_droid_gold_spawn_egg', 'star_wars_expansion:protocol_droid_pink_spawn_egg',
    'star_wars_expansion:protocol_droid_white_spawn_egg', 'star_wars_expansion:rodian_green_spawn_egg', 'star_wars_expansion:shaak_spawn_egg', 'star_wars_expansion:skiff_guard_spawn_egg',
    'star_wars_expansion:t_3_m_4_spawn_egg', 'star_wars_expansion:tauntaun_spawn_egg', 'star_wars_expansion:tusken_raider_spawn_egg', 'star_wars_expansion:twi_lek_default_spawn_egg',
    'star_wars_expansion:viper_droid_spawn_egg', 'star_wars_expansion:wampa_spawn_egg', 'star_wars_expansion:wookie_spawn_egg'
]

JEIEvents.hideItems(event => {
  SWE_DAUERHAFT.concat(SWE_NUR_TEIL1, SWE_SPAWN_EIER).forEach(id => event.hide(id))
})
