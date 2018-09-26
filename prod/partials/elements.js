let randomizer = function(){
  let number = Math.floor((Math.random() * 1000000000000000) + 1);
  return number
}

// text
let element_title = (info) => {
    let element = `<h1 id="element_title" class="position_relative margin_auto font_size_5vh line_height_10vh text_align_center width_100 float_left">` + info + `</h1>`

    return element
};

let element_grid_cross = () => {
  let component = `
    <div id="grid_cross" class="display_none opacity_0 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto grid_cross easing_01">
    </div>
  `;

  return component
};

let element_grid_depth_90 = () => {
  let component = `
    <div id="grid_depth_90" class="display_none opacity_0 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto grid_depth_90 easing_01">
    </div>
  `;

  return component
};


let element_guis = () => {
    let element = `

        <div id="component_app_gui_top_left" class="display_none opacity_0 easing_025 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed top_0 left_0 margin_auto z_index_7">

          <div id="component_app_gui_logo_icon" class="gui_logo width_50 height_100 float_left position_relative float_left margin_auto z_index_7">
          </div>

          <div id="component_app_gui_menu_icon" class="gui_menu width_50 height_100 float_left position_relative float_left margin_auto z_index_7">
          </div>

        </div>

        <div id="component_app_gui_top_center" class="display_none opacity_0 easing_025 transform_translate3d_top0 float_left display_webkit_box webkit_box_pack_center webkit_box_align position_fixed calc_20vh_width top_0 left_0 right_0 margin_auto z_index_7">

          <span class="margin_auto position_relative margin_auto z_index_1 display_webkit_box webkit_box_pack_center webkit_box_align height_10vh width_10vh">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    simple
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>

        </div>

        <div id="component_app_gui_top_right" class="display_none opacity_0 easing_025 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed top_0 right_0 margin_auto z_index_7 display_webkit_box webkit_box_pack_center webkit_box_align">

          <span class="margin_auto position_relative margin_auto z_index_1 display_webkit_box webkit_box_pack_center webkit_box_align">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    simple
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>

        </div>

        <div id="component_app_gui_right" class="display_none opacity_0 easing_025 transform_translate3d_left0 width_10vh calc_20vh_height float_left position_fixed top_0 bottom_0 right_0 margin_auto z_index_7">

          <div class="position_absolute top_0 left_0 bottom_0 margin_auto width_10vh height_10vh float_right">

            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>

          </div>

          <div class="position_absolute bottom_0 left_0 width_10vh height_10vh float_right display_webkit_box webkit_box_pack_center webkit_box_align">

          <div id="" class=" width_100 height_100 float_left position_relative float_left margin_auto">

          <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
          </div>

          </div>

        </div>

        <span class="margin_auto position_absolute top_0 left_0 right_0 margin_auto margin_auto z_index_1 display_webkit_box webkit_box_pack_center webkit_box_align">

          <span class="margin_auto position_relative float_left top_0">

          <span class="margin_auto position_relative float_left top_1vh">

          <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

          <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">

          </span>

          <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

          </span>

          <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
            <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
              <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">
                <div class="calc_2vh_width margin_1vh position_relative float_left">
                  <p class="font_size_2vh line_height_205vh">
                  simple
                  </p>
                </div>
              </div>
            </span>
          </span>

          </span>

          </span>

          </span>

        </span>

        </div>

        <div id="component_app_gui_left" class="display_none opacity_0 easing_025 transform_translate3d_left0 width_10vh calc_20vh_height float_left position_fixed top_0 bottom_0 left_0 margin_auto z_index_7">

        <div class="position_absolute top_0 left_0 bottom_0 margin_auto width_10vh height_5vh float_right display_webkit_box webkit_box_pack_center webkit_box_align">

        <div id="" class="gui_circle width_50 height_100 float_left position_relative float_left margin_auto">
        </div>

        <div id="" class="gui_circle width_50 height_100 float_left position_relative float_left margin_auto">
        </div>

        <div id="" class="gui_circle width_50 height_100 float_left position_relative float_left margin_auto">
        </div>

        <div id="" class="gui_circle width_50 height_100 float_left position_relative float_left margin_auto">
        </div>

        </div>

        <div class="position_absolute bottom_0 left_0 width_10vh height_10vh float_right">

        <div id="" class="gui_i width_100 height_50 float_left position_relative float_left margin_auto">
        </div>

        <div id="" class="gui_circle width_100 height_50 float_left position_relative float_left margin_auto">
        </div>

        <div id="time" class="position_relative float_left margin_auto">
        </div>

        </div>


        <span class="margin_auto position_relative margin_auto z_index_1 display_webkit_box webkit_box_pack_center webkit_box_align">

          <span class="margin_auto position_relative float_left top_0">

          <span class="margin_auto position_relative float_left top_1vh">

          <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

          <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">

          </span>

          <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

          </span>

          <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
            <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
              <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">
                <div class="calc_2vh_width margin_1vh position_relative float_left">
                  <p class="font_size_2vh line_height_205vh">
                  simple
                  </p>
                </div>
              </div>
            </span>
          </span>

          </span>

          </span>

          </span>

        </span>

        </div>

        <div id="component_app_gui_bottom_left" class="display_none opacity_0 easing_025 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed bottom_0 left_0 margin_auto z_index_7">
        <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
        </div>
        <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
        </div>
        <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
        </div>
        <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
        </div>

        <span class="margin_auto position_relative margin_auto z_index_1 height_10vh display_webkit_box webkit_box_pack_center webkit_box_align">

          <span class="margin_auto position_relative float_left top_0">

          <span class="margin_auto position_relative float_left top_1vh">

          <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

          <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">

          </span>

          <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
            <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
              <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">
                <div class="calc_2vh_width margin_1vh position_relative float_left">
                  <p class="font_size_2vh line_height_205vh">
                  simple
                  </p>
                </div>
              </div>
            </span>
          </span>

          </span>

          </span>

          </span>

        </span>

        </div>

        <div id="component_app_gui_bottom_center" class="display_none opacity_0 easing_025 transform_translate3d_top0 float_left display_webkit_box webkit_box_pack_center webkit_box_align position_fixed calc_20vh_width bottom_0 left_0 right_0 margin_auto z_index_7">

        <span class="height_10vh margin_auto position_relative margin_auto z_index_1 display_webkit_box webkit_box_pack_center webkit_box_align">

          <span class="margin_auto position_relative float_left top_0">

          <span class="margin_auto position_relative float_left top_1vh">

          <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

          <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">

          </span>

          <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

          </span>

          <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
            <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
              <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">
                <div class="calc_2vh_width margin_1vh position_relative float_left">
                  <p class="font_size_2vh line_height_205vh">
                  simple
                  </p>
                </div>
              </div>
            </span>
          </span>

          </span>

          </span>

          </span>

        </span>

        </div>

        <div id="component_app_gui_bottom_right" class="display_none opacity_0 easing_025 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed bottom_0 right_0 margin_auto z_index_7 display_webkit_box webkit_box_pack_center webkit_box_align">

        <span class="margin_auto position_relative margin_auto z_index_1 display_webkit_box webkit_box_pack_center webkit_box_align">

          <span class="margin_auto position_relative float_left top_0">

          <span class="margin_auto position_relative float_left top_1vh">

          <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

          <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">

          </span>

          <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

          </span>

          <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
            <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
              <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">
                <div class="calc_2vh_width margin_1vh position_relative float_left">
                  <p class="font_size_2vh line_height_205vh">
                  simple
                  </p>
                </div>
              </div>
            </span>
          </span>

          </span>

          </span>

          </span>

        </span>

        </div>
    `

    return element
};

export default {
  element_grid_cross,
  element_grid_depth_90,
  randomizer,
  element_title,
  element_guis
}
