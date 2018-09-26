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


let pieces_workspace = () => {
    let component = '\
                <div id="component_app_pieces_workspace" class=" width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0 easing_01">\
                 \
                 <div id="component_app_pieces_workspace_imac" class="easing_01 piece_workspace_imac_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_monitor" class="easing_01 piece_workspace_monitor_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_mic" class="easing_01 piece_workspace_mic_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_scarlett" class="easing_01 piece_workspace_scarlett_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_speaker_1" class="easing_01 piece_workspace_speaker_1_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_speaker_2" class="easing_01 piece_workspace_speaker_2_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_speaker_3" class="easing_01 piece_workspace_speaker_3_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_books_1" class="easing_01 piece_workspace_books_1_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_books_2" class="easing_01 piece_workspace_books_2_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 \
                 <div id="component_app_pieces_workspace_desk" class="easing_01 piece_workspace_desk_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_chair_1" class="easing_01 piece_workspace_chair_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_chair_2" class="easing_01 piece_workspace_chair_2_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 \
                </div>\
                \
                '

    return component

};

let pieces_office = () => {
    let component = '\
        <div id="component_app_pieces_office" class="width_100 height_100 display_none opacity_0 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">\
          <div id="component_app_pieces_office_shoplights" class="width_100 height_100 display_none opacity_0 position_absolute margin_auto">\
            <span id="component_app_pieces_office_shoplight_on" class="pieces_office_shoplight_on display opacity_1 width_100 height_100 margin_auto position_absolute bottom_0 left_0 right_0 float_left margin_auto">\
            </span>\
            <span id="component_app_pieces_office_shoplight_off" class="pieces_office_shoplight_off display opacity_1 width_100 height_100 margin_auto position_absolute bottom_0 left_0 right_0 float_left margin_auto">\
            </span>\
          </div>\
        </div>\
                '

    return component

};

let element_images = () => {

  let element = '\
    \
    <div id="image_1" class="background_dark_yellow_9 width_100 height_25vh position_relative float_left">\
    </div>\
    \
    <div id="image_2" class="background_dark_yellow_9 width_100 height_25vh position_relative float_left">\
    </div>\
    \
    <div id="image_3" class="background_dark_yellow_9 width_100 height_25vh position_relative float_left">\
        <iframe src="https://player.vimeo.com/video/106981173?color=ffff00&title=0&byline=0&portrait=0" width="100" height="100" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\
    </div>\
    \
    <div id="image_4" class="background_dark_yellow_9 width_100 height_25vh position_relative float_left">\
        <iframe width="100" height="100" src="https://www.youtube.com/embed/BWz_PCPCIdE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\
    </div>\
    \
    <div id="image_5" class="position_relative width_100 height_25vh float_left margin_auto ' + filtered_array_gnougn_library[i].character + ' ">\
    </div>\
    \
    <div id="image_6" class="position_relative width_100 height_25vh float_left margin_auto photo_person1">\
    \
    </div>\
    \
    <div id="image_7" class="position_relative width_100 height_25vh float_left margin_auto photo_person1">\
        <div class="gui_arrow_top_left width_25 height_25 float_left position_absolute top_0 bottom_0 left_0 margin_auto">\
        </div>\
        <div class="gui_arrow_top_right width_25 height_25 float_left position_absolute top_0 bottom_0 right_0 margin_auto">\
        </div>\
    </div>\
    \
    <div id="image_8" class="position_relative width_100 height_25vh float_left margin_auto photo_person1">\
        <div class="width_25 height_25 float_left position_absolute right_0 bottom_0 left_0 margin_auto">\
                \
                <div class="gui_arrow_top_left width_25 height_100 float_left position_relative margin_auto">\
                </div>\
                \
                <div class="gui_arrow_top_right width_25 height_100 float_left position_relative margin_auto">\
                </div>\
                \
                <div class="gui_arrow_top_left width_25 height_100 float_left position_relative margin_auto">\
                </div>\
                \
                <div class="gui_arrow_top_right width_25 height_100 float_left position_relative margin_auto">\
                </div>\
                \
        </div>\
    </div>\
    \
    <div id="image_9" class="position_relative width_100 height_25vh float_left margin_auto">\
        \
        <div class="position_relative width_50 height_50 float_left margin_auto photo_person1">\
        </div>\
        \
        <div class="position_relative width_50 height_50 float_left margin_auto photo_person1">\
        </div>\
        \
        <div class="position_relative width_50 height_50 float_left margin_auto photo_person1">\
        </div>\
        \
        <div class="position_relative width_50 height_50 float_left margin_auto photo_person1">\
        </div>\
        \
    </div>\
    \
    <div id="image_10" class="position_relative width_100 height_25vh float_left margin_auto">\
        \
        <div class="position_relative width_50 height_100 float_left margin_auto photo_person1">\
        </div>\
        \
        <div class="position_relative width_50 height_100 float_left margin_auto photo_person2">\
        </div>\
        \
    </div>\
    \
    '

    return element
};

// stage (collection of svgs that are full scrren)
let stage_office = () => {
    let component = '\
            <div id="component_app_stage_office" class="opacity_0 display_none easing_01 width_100 height_100 margin_auto position_absolute bottom_0 left_0 float_left margin_auto display opacity_1 transform_translate3d_top0 easing_01">\
            \
            <div id="component_app_stage_office_wall_color" class="width_100 height_100 margin_auto position_absolute bottom_0 left_0 float_left margin_auto stage_wall_90"></div>\
            <div id="component_app_stage_office_floor" class="width_100 height_100 margin_auto position_absolute bottom_0 left_0 float_left margin_auto stage_floor_90"></div>\
            <div id="component_app_stage_office_wall_lines" class="width_100 height_100 transform_translate3d_top0 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto stage_wall_lines_90"></div>\
            <div id="component_app_stage_office_wall_items" class="width_100 height_100 transform_translate3d_top0 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto stage_office_wall"></div>\
            \
            </div>\
        '

    return component
};

let stage_sky = () => {
    let component = '\
    <div id="component_app_stage_sky" class="opacity_0 display_none easing_01 width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflowhidden">\
    <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated10 enterLeftLeaveRight infinite">\
    <div class="width_1205 height_1205 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto interaction_workspace_man_standing_1">\
    </div>\
    </div>\
    <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated10 enterLeftLeaveRight infinite delay5">\
    <div class="width_1205 height_1205 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto interaction_workspace_man_standing_1">\
    </div>\
    </div>\
    </div>\
    '
    return component
};

let stage_outside = () => {
    let component = '\
    <div id="component_app_stage_outside" class="opacity_0 display_none easing_01 width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflowhidden">\
    <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated10 enterLeftLeaveRight infinite">\
    <div class="width_1205 height_100 margin_auto position_absolute bottom_0 left_25 float_left margin_auto interaction_workspace_man_standing_1">\
    </div>\
    </div>\
    <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated10 enterLeftLeaveRight infinite delay5">\
    <div class="width_1205 height_100 margin_auto position_absolute bottom_0 left_25 float_left margin_auto interaction_workspace_man_standing_1">\
    </div>\
    </div>\
    </div>\
    '
    return component
}

let component_app_stage_enneagon = () => {

  let component = '\
    <span id="component_app_stage_enneagon" class="display_none opacity_0 transform_translate3d_top0 easing_01 position_absolute top_0 left_0 right_0 width_100vw height_100vh display_webkit_box webkit_box_pack_center webkit_box_align">\
    <span id="column1" class="position_relative float_left width_100vw height_100vh easing_025">\
    <span class="width_100 height_100 float_left position_relative overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
            ' + stage_outside() + '\
    </div>landing1 Left Top</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    \
    </div>landing2 Left Center</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
            ' + stage_sky() + '\
    </div>landing2 Left Bottom</span>\
    </span>\
    <span id="column1" class="position_relative float_left width_100vw height_100vh">\
    <span class="width_100 height_100 float_left position_relative overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing1 Center Top</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
            ' + stage_office() + '\
            ' + pieces_workspace() + '\
            ' + pieces_office() + '\
    </div>landing2 Center Mid</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing2 Center Bottom</span>\
    </span>\
    <span id="column1" class="position_relative float_left width_100vw height_100vh">\
    <span class="width_100 height_100 float_left position_relative overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing1 Right Top</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing2 Right Mid</span>  <span class="width_100 height_100 float_left position_relative overflow_hidden display_webkit_box webkit_box_pack_center webkit_box_align">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing2 Right Bottom</span>\
    </span>\
    </span>\
  '

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

let wp_home_posts = () => {
    let component = "\
      <ol id='wp_component_post-home_content' class='display_none opacity_0 easing_01 transform_translate3d_top0 width_100 position_relative margin_auto float_left'>\
         <?php\
            if (have_posts()) :\
                while (have_posts()) : \
                    the_post(); ?>\
         <?php get_template_part( './wp_partials/posts/posts', 'home' ); ?>\
         <?php endwhile;\
            else:\
                echo '<p>NoContent Found</p>';\
            ?>\
         <?php endif; ?>\
      </ol>"

    return component
};

let stage_load_verticle = () => {
    let component = '\
    <div id="component_app_stage_load_verticle" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_absolute top_0 left_0 margin_auto overflowhidden">\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop ">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_1">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay05">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_2">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay1">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_3">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay15">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_4">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay2">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_5">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated05 enterBottom delay25">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_6">\
        </div>\
      </div>\
    </div>\
    '
    return component
};

let stage_load_horizontal = () => {
    let component = '\
      <div id="component_app_stage_load_horizontal" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_fixed top_0 left_0 margin_auto overflowhidden">\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft ">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_5">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay05">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_4">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay1">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_3">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay15">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_2">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay2">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_1">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated05 enterRight delay25">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto background_light_yellow_0">\
          </div>\
        </div>\
      </div>\
    '
    return component
};

let element_colors = () => {
  let component = '\
    \
    <div id="component_color_load_light_yellow_0" class="display_none opacity_0 easing_01 transform_translate3d_top0 growverticle_from_onevh delay2 animated1 width_100vw height_100vh position_fixed top_0 left_0 margin_auto overflow_hidden">\
       \
       <div class="growhorizontal delay1 animated1 width_100 height_100 position_absolute top_0 left_0 margin_auto overflow_hidden background_light_yellow_0">\
       </div>\
    </div>\
    \
    <div id="component_color_load_dark_yellow_0" class="display_none opacity_0 easing_01 transform_translate3d_top0 growverticle_from_onevh delay2 animated1 width_100vw height_100vh position_fixed bottom_0 left_0 margin_auto overflow_hidden">\
       \
       <div class="growhorizontal delay1 animated1 width_100 height_100 position_absolute top_0 left_0 margin_auto overflow_hidden background_dark_yellow_0">\
       </div>\
       \
    </div>\
    \
    <div id="component_color_load_dark_yellow_0_radius" class="display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto">\
       \
       <div class="position_absolute top_0 bottom_0 left_0 right_0 calc_10vh z_index_1 margin_auto">\
          \
          <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
          </div>\
       </div>\
       \
    </div>\
    \
  ';

  return component
};

let element_particles = () => {
  let component = '\
    \
        <div id="component_app_particle_game_players_1" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_fixed top_0 left_0 margin_auto">\
          <div id="component_app_particle_feature_players_player_1_think" class=" easing_01 display_none opacity_0 bottom_0 width_100 height_100 margin_auto position_absolute float_left margin_auto">\
            <div class="width_100 height_100 margin_auto position_absolute bottom_100 left_0 right_0 float_left margin_auto particle_think">\
            </div>\
          </div>\
          <div id="component_app_particle_feature_players_player_1_health_bar" class="display_none opacity_0 easing_01 transform_translate3d_top0 bottom_0 width_100 height_100 margin_auto position_absolute float_left margin_auto">\
            <div class="width_100 height_100 margin_auto position_absolute bottom_100 left_0 right_0 float_left margin_auto particle_health_bar">\
            </div>\
          </div>\
          <div id="component_app_particle_feature_players_helper_think" class="display_none opacity_0 easing_01 transform_translate3d_top0 bottom_0 width_100 height_100 margin_auto position_absolute float_left margin_auto">\
            <div class="width_100 height_100 margin_auto position_absolute bottom_100 left_0 right_0 float_left margin_auto particle_think">\
            </div>\
          </div>\
          <div id="component_app_particle_feature_players_helper_health_bar" class="display_none opacity_0 easing_01 transform_translate3d_top0 bottom_0 width_100 height_100 margin_auto position_absolute float_left margin_auto">\
            <div class="width_100 height_100 margin_auto position_absolute bottom_100 left_0 right_0 float_left margin_auto particle_health_bar">\
            </div>\
          </div>\
        </div>\
    \
  ';

  return component
};

let element_interaction_player = () => {
  let component = '\
    <div id="element_interaction_player" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_absolute top_0 left_0 margin_auto">\
      \
      <div id="component_app_interaction_easel" class="width_100 height_100 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">\
        \
      </div>\
      \
      <div id="bounce" class="margin_auto position_absolute float_left margin_auto background_light_yellow_9 width_1205vw height_1205vh">\
        \
      </div>\
      \
      <div id="bullets" class="margin_auto position_absolute float_left margin_auto width_100 height_100vh">\
          \
          <div id="bullets_verticle" class="margin_auto position_absolute float_left margin_auto width_100 height_100vh"></div>\
          \
          <div id="track_x" class="margin_auto position_absolute float_left margin_auto background_light_yellow_9 width_1vw height_1vh"></div>\
          \
          <div id="track_y" class="margin_auto position_absolute float_left margin_auto background_light_yellow_9 width_1vw height_1vh"></div>\
          \
      </div>\
      \
      <div id="element_ball" class="width_5vh height_5vh background_light_yellow_9 float_left position_absolute easing_01">\
        \
      </div>\
      \
      <div id="component_app_interaction_game_players_1" class="width_100 height_100 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">\
          \
          <div id="component_app_interaction_game_players_1_body" class="interaction_workspace_man_standing_1 opacity_1 easing_01 easing_01 width_1205vh height_50 margin_auto position_absolute bottom_0 left_0 float_left margin_auto">\
          </div>\
          \
      </div>\
      \
      <div id="component_app_interaction_hands" class="width_100 height_100 easing_01 position_absolute margin_auto">\
          \
          <div id="component_app_interaction_hand" class="interaction_hands width_100 height_100 margin_auto position_absolute bottom_0 left_-25 float_left margin_auto">\
          </div>\
          \
      </div>\
      \
      <div id="component_app_interaction_enemy" class="easing_01 margin_auto position_absolute bottom_0 left_0 float_left margin_auto interaction_workspace_man_standing_1">\
        \
      </div>\
      \
      <div id="component_app_interaction_helper_body" class="easing_025 width_100 height_100 margin_auto position_absolute bottom_0 left_0 float_left margin_auto interaction_workspace_man_standing_1">\
        \
      </div>\
      \
    </div>\
  ';

  return component
};

let element_accent_noise = () => {
  let component = '\
    <div id="component_app_accent_noise" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_fixed top_0 left_0 margin_auto">\
       \
       <div id="component_app_accent_opacity" class="width_100 height_100 opacity_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto accent_noise_1">\
       </div>\
       \
    </div>\
  ';

  return component
};

let element_effect_vignette = () => {
  let component = '\
      <div id="effect_vignette" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100 position_fixed top_0 left_0 margin_auto effect_vignette"></div>\
  ';

  return component
};

export default {
  component_app_stage_enneagon,
  element_grid_cross,
  element_grid_depth_90,
  randomizer,
  element_title,
  element_guis,
  wp_home_posts,
  stage_load_verticle,
  stage_load_horizontal,
  element_colors,
  element_particles,
  element_interaction_player,
  element_accent_noise,
  element_effect_vignette
}
