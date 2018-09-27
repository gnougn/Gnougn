import imported_elements from './elements';

let state = '';

let colors = [
  {
    parent: 'component_app',
    id: '',
    classList: '',
    innerHTML: `

    <div id="component">
      ${imported_elements.element_pop_top}
      ${imported_elements.element_pop_left}
      ${imported_elements.element_pop_bottom}
      ${imported_elements.element_pop_right}

      ${imported_elements.element_page_top}
      ${imported_elements.element_page_left}
      ${imported_elements.element_page_bottom}
      ${imported_elements.element_page_right}

      ${imported_elements.element_menu_top}
      ${imported_elements.element_menu_left}
      ${imported_elements.element_menu_bottom}
      ${imported_elements.element_menu_right}

      ${imported_elements.element_morph_top}
      ${imported_elements.element_morph_left}
      ${imported_elements.element_morph_bottom}
      ${imported_elements.element_morph_right}

      ${imported_elements.element_fade_top}
      ${imported_elements.element_fade_left}
      ${imported_elements.element_fade_bottom}
      ${imported_elements.element_fade_right}

      ${imported_elements.element_gradient_top}
      ${imported_elements.element_gradient_left}
      ${imported_elements.element_gradient_bottom}
      ${imported_elements.element_gradient_right}

      ${imported_elements.element_corner_top}
      ${imported_elements.element_corner_left}
      ${imported_elements.element_corner_bottom}
      ${imported_elements.element_corner_right}

      ${imported_elements.element_overlay_top}
      ${imported_elements.element_overlay_left}
      ${imported_elements.element_overlay_bottom}
      ${imported_elements.element_overlay_right}

      ${imported_elements.element_nav_top}
      ${imported_elements.element_nav_left}
      ${imported_elements.element_nav_bottom}
      ${imported_elements.element_nav_right}
      
      ${imported_elements.element_guis()}
    </div>

    <div id="component" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_hidden">

      ${imported_elements.element_colors()}
      ${imported_elements.element_grid_cross()}
      ${imported_elements.element_grid_depth_90()}
      ${imported_elements.stage_load_verticle()}
      ${imported_elements.stage_load_horizontal()}
      ${imported_elements.component_app_stage_enneagon()}
      ${imported_elements.element_accent_noise()}
      ${imported_elements.element_effect_vignette()}
      ${imported_elements.element_particles()}
      ${imported_elements.element_interaction_player()}

      <div id="component_app_gui_logo_combo_feature_container" class="position_absolute width_0 height_0 margin_auto float_left">
        <div id="component_app_gui_logo_combo_feature" class="position_absolute left_-50 top_-50 width_100 height_100 overflow_hidden float_left gui_keyhole">
        </div>
      </div>

      <div id="logo_load_container" class="position_absolute margin_auto float_left width_0 height_0 ">
        <div id="component_app_gui_logo_combo_feature" class="position_absolute left_-50 top_-50 width_100 height_100 overflow_hidden float_left gui_key">
        </div>
      </div>
    </div>

    <div id="component" class="width_100 float_left position_relative">

      <div id="component" class="width_100 height_100vh float_left position_relative display opacity_1 overflow_hidden">

        <div id="" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 overflow_hidden float_left gui_logo_combo_layers">
        </div>

      </div>

      ${imported_elements.element_gui_scroll_y()}

      ${imported_elements.element_gradient('gradient_light_yellow_0_bottom')}
      
      ${imported_elements.element_title('feature: element_slider_1')}

      ${imported_elements.element_container(

              (
                imported_elements.element_container(
                    imported_elements.element_container(
                      (
                        imported_elements.element_slider_1()
                      ),
                      'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'),
                      'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') +

                imported_elements.element_container(
                    imported_elements.element_container(
                      (
                        imported_elements.element_slider_2()
                      ),
                      'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'),
                      'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') +

                imported_elements.element_container(
                    imported_elements.element_container(
                      (
                        imported_elements.element_slider_3()
                      ),
                      'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'),
                      'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') +

                imported_elements.element_container(
                    imported_elements.element_container(
                      (
                        imported_elements.element_slider_4()
                      ),
                      'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'),
                      'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') +

                imported_elements.element_container(
                    imported_elements.element_container(
                      (
                        imported_elements.element_slider_5()
                      ),
                      'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'),
                      'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') +

                imported_elements.element_container(
                    imported_elements.element_container(
                      (
                        imported_elements.element_slider_6()
                      ),
                      'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'),
                      'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') +

                imported_elements.element_container(
                    imported_elements.element_container(
                      (
                        imported_elements.element_slider_7()
                      ),
                      'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'),
                      'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') +

                imported_elements.element_container(
                    imported_elements.element_container(
                      (
                        imported_elements.element_slider_7()
                      ),
                      'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'),
                      'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') +

                imported_elements.element_container(
                    imported_elements.element_container(
                      (
                        imported_elements.wp_home_posts()
                      ),
                      'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'),
                      'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ')
              ),

        'calc_10vh padding_5vh float_left position_relative background_light_yellow_0')

      }

      ${imported_elements.element_title(imported_elements.randomizer())}
      ${imported_elements.element_title('search')}

      <input type="text" placeholder="search..." id="element_input_filter"/>

      <div class="width_20 float_left">
        ${imported_elements.element_title('sort')}
        <input type="text" placeholder="sort by metas: likesup, likesdown" id="element_input_sort"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('view')}
        <input type="text" placeholder="card, grid or list" id="element_input_view"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('type')}
        <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('category')}
        <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('tag')}
        <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('author')}
        <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('word count')}
        <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('video length')}
        <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('difficulty')}
        <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('distance')}
        <input type="text" placeholder="state, city or zip code" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('latest')}
        <input type="text" placeholder="now, 1hr, today, 24 hours, yesterday, this week, month" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('popularity')}
        <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('relavence')}
        <input type="text" placeholder="suggested, subscribed, followers, "/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('price')}
        <input type="text" placeholder="range"/>
      </div>

      <div class="width_20 float_left">
        ${imported_elements.element_title('files')}
        <input type="text" placeholder="suggested, subscribed, followers, "/>
      </div>

      <ul id="element_ol_firebase_roster"></ul>
      <ul id="element_ol_firebase_library"></ul>
      <ul id="element_ol_firebase_skills"></ul>
      <ul id="element_ol_firebase_abilities"></ul>
      <ul id="element_ol_firebase_services"></ul>
      <ul id="element_ol_firebase_partners"></ul>

    </div>
    `,
  }
];

export default {
  colors
}
