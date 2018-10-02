import imported_elements from './elements';

let state = '';

let colors = [
  {
    parent: 'component_app',
    id: '',
    classList: '',
    innerHTML: `

    <div id="modal_component">
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
    </div>

    <div id="gui_component">

      ${imported_elements.element_guis()}

    </div>

    <div id="color_component" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_hidden">

      ${imported_elements.element_colors()}
      ${imported_elements.element_grid_cross()}
      ${imported_elements.element_grid_depth_90()}
      ${imported_elements.stage_load_verticle()}
      ${imported_elements.stage_load_horizontal()}
      ${imported_elements.element_accent_noise()}
      ${imported_elements.element_effect_vignette()}

    </div>

    <div id="particles_component" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_hidden">
      ${imported_elements.element_particles()}
    </div>

    <div id="interaction_component" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_hidden">
      ${imported_elements.element_interaction_player()}
    </div>

    <div id="stage_component" class="width_100 float_left position_relative">

      <div id="gui_fold_component" class="width_100 float_left position_relative">

        ${imported_elements.element_nownigel_logo('gradient_light_yellow_0_bottom')}

      </div>

      <div id="gui_content_component" class="width_100 float_left position_relative">
        
        ${imported_elements.element_gradient('gradient_light_yellow_0_bottom')}

        ${imported_elements.element_title('feature: inputs')}

        <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div id="component" class="max_width_50 width_100 float_left position_relative ">

            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${imported_elements.element_form_filter_1()}
              </div>
            </div>

            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${imported_elements.element_form_filter_2()}
              </div>
            </div>

            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${imported_elements.element_form_filter_3()}
              </div>
            </div>

          </div>

        </div>

          ${imported_elements.element_title('feature: cards')}

          <div id="component" class="width_100 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
            <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

              <a href="http://gnougn.com" target="_blank"  class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                  
                <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                  <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                  </div>
                </div>
              
              </a>
                
            </div>
          </div>



        ${imported_elements.element_title('feature: cards: empty')}

        ${imported_elements.element_title('feature: card center')}

        <div id="component" class="width_100 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_0 left_0 right_0 top_0 float_left display_flex_flow height_100 width_100">
                  <div class="margin_auto position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>
        </div>

        ${imported_elements.element_title('feature: card outside')}

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute top_-205vh left_-205vh float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute top_-205vh right_-205vh float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_0 left_-205vh top_0 float_left display_flex_flow height_100">
                  <div class="margin_auto position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_0 right_-205vh top_0 float_left display_flex_flow height_100">
                  <div class="margin_auto position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh right_-205vh float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        ${imported_elements.element_title('feature: card tooltips')}
        <div id="component" class="width_25 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  
                  <div class="position_absolute bottom_100 left_0 right_0 float_left display_flex_flow">
                      <div class="position_relative float_left background_light_yellow_9 border_top_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_radius_1vh_top box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_2vh padding_1vh position_relative float_left">gnougn.com</p>
                      </div>
                  </div>

                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>

              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_25 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>

                  <div class="position_absolute top_100 left_0 right_0 float_left display_flex_flow">
                      <div class="position_relative float_left background_light_yellow_9 border_bottom_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_radius_1vh_bottom box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_2vh padding_1vh position_relative float_left">gnougn.com</p>
                      </div>
                  </div>

              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_25 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  
                  <div class="position_absolute top_0 bottom_0 right_100 float_left display_flex_flow height_100">
                      <div class="position_relative float_left margin_auto background_light_yellow_9 border_bottom_01vh_dark_yellow_9 border_top_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_radius_1vh_left box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_2vh padding_1vh position_relative float_left">gnougn.com</p>
                      </div>
                  </div>

                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>

              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_25 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>

                  <div class="position_absolute top_0 bottom_0 left_100 float_left display_flex_flow height_100">
                      <div class="position_relative float_left margin_auto background_light_yellow_9 border_bottom_01vh_dark_yellow_9 border_top_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 border_radius_1vh_right box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_2vh padding_1vh position_relative float_left">gnougn.com</p>
                      </div>
                  </div>

              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_100 height_100vh float_left position_relative display opacity_1 background_white">\
        
          <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_100 height_50 float_left">
            <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_progession">
            </div>
          </div>
          
        </div>

        ${imported_elements.element_container(

          '\
            <div class="width_100 height_100vh position_relative float_left display_flex_flow">\
              \
              <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                  \
                  <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                      <div class="calc_10vh position_relative float_left photo_dj1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                          \
                          <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                              <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                  <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                              </div>\
                          </div>\
                          \
                      </div>\
                      \
                  </div>\
                  \
              </div>\
              \
            </div>\
          ',

          'width_100 float_left position_relative background_light_yellow_0')}
        
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

    </div>
    `,
  }
];

export default {
  colors
}
