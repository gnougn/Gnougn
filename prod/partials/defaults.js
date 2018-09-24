import imported_elements from './elements';
let state = '';
// default componenets
let colors = [
// colors
{
parent: 'component_app_colors',
id: '',
classList: '',
innerHTML: '\
   '+imported_elements.element_colors()+'\
',
}
];
let stages = [
// colors
{
parent: 'component_app_stages',
id: '',
classList: '',
innerHTML: '\
   '+imported_elements.element_grid_cross()+'\
   \
   '+imported_elements.element_grid_depth_90()+'\
   \
   '+imported_elements.element_accent_noise()+'\
   \
   '+imported_elements.element_effect_vignette()+'\
   \
   '+imported_elements.component_app_stage_enneagon()+'\
   \
   ' + imported_elements.stage_load_verticle() + '\
   \
   ' + imported_elements.stage_load_horizontal() + '\
',
}
];
let particles = [{
parent: 'component_app_particles',
id: '',
classList: '',
innerHTML: '\
   '+imported_elements.element_particles()+'\
\
'
}, ];
let interactions = [{
parent: 'component_app_interactions',
id: '',
classList: '',
innerHTML: '\
   '+imported_elements.element_interaction_player()+'\
   \
   <div id="logo_opacity" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 overflow_hidden float_left opacity_02 gui_logo_combo_frame_1">\
   </div>\
   \
'
}, ];
let gui = [
   {
      parent: 'component_app_gui',
      id: '',
      classList: '',
      innerHTML: '\
         \
         <div id="component_modal_scroll_fixed_feature_4" class="width_100 height_100vh float_left position_relative display opacity_1 overflow_hidden">\
           '+imported_elements.element_fold()+'\
         </div>\
         \
      '
   },
   {
      parent: 'component_app_gui',
      id: '',
      classList: '',
      innerHTML: imported_elements.element_gui_scroll_y()
   },
   {
      parent: 'component_app_gui_scroll_y',
      id: 'wp_component_app_wp',
      classList: ' display opacity_1 easing_01 width_100 position_relative margin_auto',
      innerHTML: imported_elements.wp_home_posts()
   },
   {
      parent: 'component_app_gui',
      id: '',
      classList: '',
      innerHTML: '\
         \
         <div id="component_modal_scroll_fixed_feature_4" class="width_100 height_100vh float_left position_relative display opacity_1 overflow_hidden">\
           '+imported_elements.element_guis()+'\
         </div>\
         \
      '
   }
];
let modals = [
// modals
{
parent: 'component_app_modals',
id: '',
classList: '',
innerHTML: '\
   \
   ' + imported_elements.element_pop_top + '\
   ' + imported_elements.element_pop_left + '\
   ' + imported_elements.element_pop_bottom + '\
   ' + imported_elements.element_pop_right + '\
   \
   ' + imported_elements.element_page_top + '\
   ' + imported_elements.element_page_left + '\
   ' + imported_elements.element_page_bottom + '\
   ' + imported_elements.element_page_right + '\
   \
   ' + imported_elements.element_menu_top + '\
   ' + imported_elements.element_menu_left + '\
   ' + imported_elements.element_menu_bottom + '\
   ' + imported_elements.element_menu_right + '\
   \
   ' + imported_elements.element_morph_top + '\
   ' + imported_elements.element_morph_left + '\
   ' + imported_elements.element_morph_bottom + '\
   ' + imported_elements.element_morph_right + '\
   \
   ' + imported_elements.element_fade_top + '\
   ' + imported_elements.element_fade_left + '\
   ' + imported_elements.element_fade_bottom + '\
   ' + imported_elements.element_fade_right + '\
   \
   ' + imported_elements.element_gradient_top + '\
   ' + imported_elements.element_gradient_left + '\
   ' + imported_elements.element_gradient_bottom + '\
   ' + imported_elements.element_gradient_right + '\
   \
   ' + imported_elements.element_corner_top + '\
   ' + imported_elements.element_corner_left + '\
   ' + imported_elements.element_corner_bottom + '\
   ' + imported_elements.element_corner_right + '\
   \
   ' + imported_elements.element_overlay_top + '\
   ' + imported_elements.element_overlay_left + '\
   ' + imported_elements.element_overlay_bottom + '\
   ' + imported_elements.element_overlay_right + '\
   \
   ' + imported_elements.element_nav_top + '\
   ' + imported_elements.element_nav_left + '\
   ' + imported_elements.element_nav_bottom + '\
   ' + imported_elements.element_nav_right + '\
   \
'
}
];
export default {
colors,
stages,
particles,
interactions,
gui,
modals
}