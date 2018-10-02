let randomizer = function(){
  let number = Math.floor((Math.random() * 1000000000000000) + 1);
  return number
}

// containers
let element_container = (info, style) => {
  let element = '\
  <div id="element_container" class="'+style+'">\
    '+info+'\
  </div>\
  '
  return element
};

let element_container_styled = (style, info) => {
    let element = '<div id="element_container_styled" class="position_relative margin_auto ' + style + ' float_left">' + info + '</div>'

    return element
};

let element_container_center = (info) => {

    let element = '<div id="element_container_center" class="width_100 height_100 position_relative float_left display_flex_flow "><div class="position_relative float_left">' + info + '</div></div>'

    return element
};

let element_nownigel_logo = () => {

    let element = `

      <div id="component_bg" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_hidden">

        <div id="" class="fadeIn delay1 animated1">
          <div id="" class="fadeOut delay4 animated1">
            <div id="" class="fadeOut delay3 animated1">
            <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 float_left">
              <div id="" class="position_absolute left_0 top_100 right_0 margin_auto width_100 height_100 float_left icon_dj_loading">
              </div>
            </div>
            <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 float_left">
              <div id="icon_dj_animation" class="position_absolute left_0 top_0 bottom_0 right_0 margin_auto width_50 height_50 icon_dj_animation_1 float_left">
              </div>
            </div>
            </div>
          </div>
        </div>

        <div id="" class="fadeIn delay4 animated1">
          <div id="" class="fadeOut delay10 animated1">
            <div id="" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 overflow_hidden float_left gui_logo_combo_layers">
            </div>
          </div>
        </div>

      </div>

      <div id="component_content" class="width_100 height_100vh float_left position_relative display opacity_1 overflow_hidden">
       
        <div id="dj_buttons" class="fadeIn delay10 animated1">\

          <div id="" class="position_absolute right_0 bottom_0 right_0 top_-10 left_0 margin_auto width_50 height_33 float_left">
            
            <div id="" class="position_absolute right_0 bottom_0 right_0 top_0 left_0 margin_auto width_100 height_100 float_left gui_logo_combo_layers animated5 pulse infinite"></div>

            <div id="" class="position_absolute left_0 top_100 right_0 margin_auto width_100 height_100 float_left display_flex_flow">

              <div id="" class="position_relative margin_auto float_left">

                <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                  <span class="margin_auto position_relative float_left top_0">

                  <span class="margin_auto position_relative float_left top_1vh">

                  <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                  <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                  </span>

                  <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                    enter site
                  </span>

                  <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                    <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                      <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

                <span class="margin_auto position_relative float_left z_index_1 width_1vh height_5vh display_flex_flow"></span>

                <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                  <span class="margin_auto position_relative float_left top_0">

                  <span class="margin_auto position_relative float_left top_1vh">

                  <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                  <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                  </span>

                  <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                    Learn more
                  </span>

                  <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                    <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                      <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

            </div>

          </div>

        </div>

      </div>

    `
    return element
};


let element_dj_logo = () => {

    let element = `
    <div id="component" class="width_100 height_100vh float_left position_relative display opacity_1">\
    
      <div id="" class="fadeIn delay1 animated1">
        <div id="" class="fadeOut delay3 animated1">
        <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 float_left">
          <div id="" class="position_absolute left_0 top_100 right_0 margin_auto width_100 height_100 float_left icon_dj_loading">
          </div>
        </div>
        <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 float_left">
          <div id="icon_dj_animation" class="position_absolute left_0 top_0 bottom_0 right_0 margin_auto width_50 height_50 icon_dj_animation_1 float_left">
          </div>
        </div>
        </div>
      </div>

      <div id="" class="fadeIn delay4 animated1">

        <div id="" class="position_absolute left_0 right_0 bottom_0 margin_auto width_100 height_100 float_left gui_logo_dj_4">
        </div>

      </div>

      <div id="" class="fadeIn delay5 animated1">

        <div id="" class="position_absolute right_0 bottom_0 margin_auto width_50 height_50 float_left gui_logo_dj_5">
        </div>

      </div>

      <div id="" class="fadeIn delay6 animated1">

        <div id="" class="position_absolute left_-25 bottom_0 margin_auto width_100 height_100 float_left gui_logo_dj_6">
        </div>

      </div>

      <div id="" class="fadeIn delay7 animated1">

        <div id="" class="position_absolute right_0 left_0 bottom_0 margin_auto width_100 height_100 float_left gui_logo_dj_2">
        </div>

      </div>

      <div id="" class="fadeIn delay8 animated1">

        <div id="" class="position_absolute right_-25 bottom_-25 margin_auto width_74 height_74 float_left gui_logo_dj_3">
        </div>

      </div>

      <div id="dj_body" class="fadeIn delay9 animated1">
        <div id="" class="position_fixed left_0 bottom_0 margin_auto width_50 height_75 float_left gui_logo_dj_1 animated30 pulse infinite">
        </div>
      </div>

      <div id="dj_buttons" class="fadeIn delay10 animated1">
        <div id="" class="position_absolute right_0 bottom_0 right_0 top_-10 left_0 margin_auto width_50 height_33 float_left">
          
          <div id="" class="position_absolute right_0 bottom_0 right_0 top_0 left_0 margin_auto width_100 height_100 float_left gui_logo_dj_final animated5 pulse infinite"></div>

          <div id="" class="position_absolute right_0 bottom_0 right_0 top_0 left_0 margin_auto width_50 height_50 float_left gui_logo_dj_mark animated5 delay05 pulse infinite"></div>

          <div id="" class="position_absolute left_0 top_100 right_0 margin_auto width_100 height_100 float_left display_flex_flow">

            <div id="" class="position_relative margin_auto float_left">

              <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                <span class="margin_auto position_relative float_left top_0">

                <span class="margin_auto position_relative float_left top_1vh">

                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                </span>

                <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                  enter site
                </span>

                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

              <span class="margin_auto position_relative float_left z_index_1 width_1vh height_5vh display_flex_flow"></span>

              <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                <span class="margin_auto position_relative float_left top_0">

                <span class="margin_auto position_relative float_left top_1vh">

                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                </span>

                <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                  Learn more
                </span>

                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

          </div>

        </div>

      </div>

      <div id="" class="fadeIn delay10 animated1">
        <div class="position_absolute top_0 right_0 margin_auto float_right z_index_7 display_flex_flow">

          <span class="margin_auto padding_205vh position_relative float_left z_index_1 ">

              <div id="" class="gui_i width_5vh height_5vh float_left position_relative float_left margin_auto margin_1vh_left">
              </div>

              <div id="" class="gui_circle width_5vh height_5vh float_left position_relative float_left margin_auto margin_1vh_left">
              </div>

              <span class="margin_auto margin_1vh_left position_relative float_left z_index_1 display_flex_flow">

                <span class="margin_auto position_relative float_left top_0">

                <span class="margin_auto position_relative float_left top_1vh">

                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                </span>

                <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                  Book Me
                </span>

                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

           </span>

        </div>
      </div>

    </div>


    `

    return element
};

let element_content_card = () => {
  let component = '\
  \
            <div class="display_flex_flow width_100 height_100vh float_left position_relative background_light_yellow_9 color_dark_yellow_9">\
              \
              <div class="display_flex_flow width_100 height_100 float_left position_absolute left_0 right_0 bottom_100">\
                \
                <div class="display_flex_flow calc_25vh box_shadow_bottom_left_1vh_dark float_left position_absolute left_0 right_0 bottom_0 margin_auto background_light_yellow_9">\
                   \
                   <div class="display_flex_flow width_100 float_left position_relative">\
                      \
                      <div class="float_left position_relative">\
                         \
                         <div class="display_flex_flow width_100 float_left position_relative">\
                            loading\
                         </div>\
                         \
                         <div class="display_flex_flow width_100 float_left position_relative">\
                            \
                            <div class="display_flex_flow float_left position_relative padding_05vh">\
                               [yes]\
                            </div>\
                            \
                            <div class="display_flex_flow float_left position_relative padding_05vh">\
                               no\
                            </div>\
                            \
                         </div>\
                         \
                      </div>\
                      \
                   </div>\
                   \
                </div>\
                \
              </div>\
              \
              <div class="display_flex_flow width_100 height_100 box_shadow_bottom_left_1vh_dark float_left position_absolute bottom_0 left_0 right_0 margin_auto background_light_yellow_9">\
                 \
                 <div class="display_flex_flow width_100 float_left position_relative">\
                    \
                    <div class="float_left position_relative">\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative">\
                          loading\
                       </div>\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative">\
                          \
                          <div class="display_flex_flow float_left position_relative padding_05vh">\
                             [yes]\
                          </div>\
                          \
                          <div class="display_flex_flow float_left position_relative padding_05vh">\
                             no\
                          </div>\
                          \
                       </div>\
                       \
                    </div>\
                    \
                 </div>\
                 \
              </div>\
              \
            </div>\
            \
            ';

  return component
};

let element_spaced_color = () => {
  let component = '\
  \
            <div class="display_flex_flow width_100 height_100vh float_left position_relative background_light_yellow_9 color_light_yellow_9">\
              \
              <div class="display_flex_flow calc_10vh box_shadow_bottom_left_1vh_dark border_01vh_dark_yellow_9 float_left position_relative background_light_yellow_0 color_light_yellow_9">\
                 \
                 <div class="display_flex_flow width_100 float_left position_relative">\
                    \
                    <div class="float_left position_relative">\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative color_light_yellow_9">\
                          loading\
                       </div>\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative">\
                          \
                          <div class="display_flex_flow float_left position_relative color_light_yellow_9 padding_05vh">\
                             [yes]\
                          </div>\
                          \
                          <div class="display_flex_flow float_left position_relative color_light_yellow_9 padding_05vh">\
                             no\
                          </div>\
                          \
                       </div>\
                       \
                    </div>\
                    \
                 </div>\
                 \
              </div>\
              \
            </div>\
            \
            ';

  return component
};

let element_content_loading = () => {
  let component = '\
  \
            <div class="display_flex_flow width_100 height_100vh float_left position_relative background_black color_light_yellow_9">\
              \
              <div class="display_flex_flow calc_10vh box_shadow_bottom_left_1vh_light_yellow_1 border_01vh_light_yellow_0 float_left position_relative background_black color_light_yellow_9">\
                 \
                 <div class="display_flex_flow width_100 float_left position_relative">\
                    \
                    <div class="float_left position_relative">\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative color_light_yellow_9">\
                          loading\
                       </div>\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative">\
                          \
                          <div class="display_flex_flow float_left position_relative color_light_yellow_9 padding_05vh">\
                             [yes]\
                          </div>\
                          \
                          <div class="display_flex_flow float_left position_relative color_light_yellow_9 padding_05vh">\
                             no\
                          </div>\
                          \
                       </div>\
                       \
                    </div>\
                    \
                 </div>\
                 \
              </div>\
              \
            </div>\
            \
            ';

  return component
};

let element_content_loading_scrolling = () => {
  let component = '\
  \
            <div class="display_flex_flow width_100 height_100vh float_left position_relative background_black color_light_yellow_9">\
              \
              <div class="display_flex_flow calc_10vh box_shadow_bottom_left_1vh_light_yellow_1 border_01vh_light_yellow_0 float_left position_relative background_black color_light_yellow_9">\
            <div class="position_relative height_100 width_100 float_left overflow_hidden">\
               \
               \
               <ul class="position_relative height_100 width_100 float_left border_top_01vh_dark_yellow_9">\
                  \
                  ' + element_scroll_y_scrollbar(element_list_items([{
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, ])) + '\
                  \
               </ul>\
               \
            </div>\
            \
            <div class="position_relative height_100vh width_100 float_left">\
               \
               \
               <div class="position_relative calc_02vh_height width_100 float_left border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9">\
                  \
               </div>\
               \
               \
            </div>\
            \
              </div>\
              \
            </div>\
            \
            ';

  return component
};

let element_content_scrolling = () => {
  let component = '\
  \
  \
            <div class="position_relative height_100 width_100 float_left overflow_hidden">\
               \
               \
               <ul class="position_relative height_100 width_100 float_left border_top_01vh_dark_yellow_9">\
                  \
                  ' + element_scroll_y_scrollbar(element_list_items([{
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, {
                  link: 'death_ride'
                  }, ])) + '\
                  \
               </ul>\
               \
            </div>\
            \
            ';

  return component
};

let element_center_content = (x) => {
  let component = '\
  \
  <div class="display_flex_flow width_100 height_100vh float_left position_relative">\
  '+x+'\
  </div>\
  \
  ';

  return component
};

let element_list_items = (array) => {

    let items = ''
    for (var i = 0; i < array.length; i++) {

        items += '\
        ' + element_list_item(array[i].link) + '\
      ';
    };

    return items
};

let element_list_item = (info) => {

    let random_int = randomizer();

    let element = '\
      <li class="position_relative height_10vh width_100 float_left margin_auto background_light_yellow_0 border_bottom_01vh_dark_yellow_9">\
      \
        <div class="position_relative height_10vh width_10vh float_left overflow_hidden margin_auto">\
          <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_1vh overflow_hidden border_radius_circle border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
          \
          </div>\
        </div>\
        \
        <a id="element_list_item'+random_int+'" class="hover_show position_relative float_left overflow_hidden margin_auto line_height_10vh font_size_10vh text_shadow_01vh_dark_yellow_1 color-dark-yellow-9">\
          ' + info + '\
        </a>\
        \
        <a id="element_list_item'+random_int+'" class="hover_show position_relative float_left overflow_hidden margin_auto line_height_10vh font_size_5vh text_shadow_01vh_dark_yellow_1 color-dark-yellow-9">\
          ' + info + '\
        </a>\
        \
        <a id="element_list_item'+random_int+'" class="hover_show position_relative float_left overflow_hidden margin_auto line_height_10vh font_size_205vh text_shadow_01vh_dark_yellow_1 color-dark-yellow-9">\
          ' + info + '\
        </a>\
        \
        <a id="element_list_item'+random_int+'" class="hover_show position_relative float_left overflow_hidden margin_auto line_height_10vh font_size_2vh text_shadow_01vh_dark_yellow_1 color-dark-yellow-9">\
          ' + info + '\
        </a>\
        \
      </li>\
    '

    // add event listeners
    setTimeout(() => {

      document.getElementById('element_list_item'+random_int).addEventListener("click", function(event) {
          alert('yes');
        })

    }, 1000);

    return element

};

let component_keystroke_annotate_new = (x, y) => {
    let component = '\
      <span class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
      <span class="margin_auto position_relative float_left top_0">\
      <span class="margin_auto position_relative float_left top_1vh">\
      <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
      \
      <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
      \
      </span>\
      \
      <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
      ' + x + '\
      </span>\
      \
      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
            <div class="calc_2vh_width margin_1vh position_relative float_left">\
              <p class="font_size_2vh line_height_205vh">\
              ' + y + '\
              </p>\
            </div>\
          </div>\
        </span>\
      </span>\
      \
      </span>\
      </span>\
      </span>\
      </span>\
    ';

    return component
};

let element_time = () => {
  let component = '\
    <h1 id="time" class="font_size_205vh line_height_5vh">Request</h1>\
  ';

  return component
};

let element_gradient = (info) => {
  let element = '\
  <div class="width_100 height_100vh float_left position_relative '+info+'">\
  \
  </div>\
  '
  return element
};

let element_form_filter_1 = () => {
  let component = '\
  \
  \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_sort" placeholder="search" class="padding_1vh" value="likesup" type="text" name=""/>\
            </form>\
            \
            \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_view" placeholder="search" class="padding_1vh" value="card" type="text" name=""/>\
            </form>\
            \
            \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_type" placeholder="search" class="padding_1vh" value="gallery" type="text" name=""/>\
            </form>\
            \
            \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_filter" placeholder="searc class="padding_1vh"h" type="text" name=""/>\
            </form>\
            \
  \
  ';

  return component
};


let element_form_filter_2 = () => {
  let component = '\
  \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_login_username" placeholder="your username" type="text" name=""/>\
               <input id="element_input_login_password" placeholder="your password" type="text" name=""/>\
            </form>\
            \
  \
  ';

  return component
};

let element_form_filter_3 = () => {
  let component = '\
  \
            <h1 class="font_size_205vh line_height_5vh">New Post</h1>\
            \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_title" placeholder="title" type="text" name=""/>\
               <input id="element_input_subtitle" placeholder="subtitle" type="text" name=""/>\
               <input id="element_input_paragraph" placeholder="paragraph" type="text" name=""/>\
               <input id="element_input_featured" placeholder="featured image(s)" type="text" name=""/>\
               <input id="element_input_type" placeholder="type" type="text" name=""/>\
               <input id="element_input_category" placeholder="category" type="text" name=""/>\
               <input id="element_input_tag" placeholder="tag" type="text" name=""/>\
            </form>\
            \
            <div class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">\
               \
               \
               \
               <div class="margin_auto position_relative float_left">\
                  \
                  \
                  <div class="margin_auto position_relative float_left width_100">\
                     \
                     \
                     <div class="margin_auto position_relative float_left top_1vh width_100">\
                        \
                        \
                        <div class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align pseudo_hover pseudo_button_bottom_dark_yellow_8_shadow pseudo_button_bottom_dark_yellow_8_border_01 ">\
                           \
                           \
                           <div class=" position_absolute bottom_0 left_0 right_0 float_left calc_02vh_width height_5vh display_webkit_box webkit_box_pack_center webkit_box_align border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 ">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left calc_04vh_width height_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_dark_yellow_0">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left height_01vh calc_02vh_width margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_light_yellow_1">\
                           </div>\
                           \
                           \
                           <a id="submit" href="#" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right color-dark-yellow-5 color-light-green-9hover text_shadow_01vh_dark_yellow_1">\
                           ' + 'submit' + '</a>\
                        </div>\
                        \
                     </div>\
                     \
                  </div>\
                  \
               </div>\
               \
            </div>\
            \
            <h1 class="font_size_205vh line_height_5vh">Request</h1>\
            \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_first_name" placeholder="title" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="subtitle" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="paragraph" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="featured image(s)" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="type" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="category" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="tag" type="text" name=""/>\
            </form>\
            \
            <div class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">\
               \
               \
               \
               <div class="margin_auto position_relative float_left">\
                  \
                  \
                  <div class="margin_auto position_relative float_left width_100">\
                     \
                     \
                     <div class="margin_auto position_relative float_left top_1vh width_100">\
                        \
                        \
                        <div class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align pseudo_hover pseudo_button_bottom_dark_yellow_8_shadow pseudo_button_bottom_dark_yellow_8_border_01 ">\
                           \
                           \
                           <div class=" position_absolute bottom_0 left_0 right_0 float_left calc_02vh_width height_5vh display_webkit_box webkit_box_pack_center webkit_box_align border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 ">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left calc_04vh_width height_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_dark_yellow_0">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left height_01vh calc_02vh_width margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_light_yellow_1">\
                           </div>\
                           \
                           \
                           <a id="submit" href="#" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right color-dark-yellow-5 color-light-green-9hover text_shadow_01vh_dark_yellow_1">\
                           ' + 'submit' + '</a>\
                        </div>\
                        \
                        \
                     </div>\
                     \
                     \
                  </div>\
                  \
                  \
               </div>\
               \
               \
               \
            </div>\
            \
            \
            <h1 class="font_size_205vh line_height_5vh">Estimate</h1>\
            \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_first_name" placeholder="title" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="subtitle" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="paragraph" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="featured image(s)" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="type" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="category" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="tag" type="text" name=""/>\
            </form>\
            \
            \
            <div class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">\
               \
               \
               \
               <div class="margin_auto position_relative float_left">\
                  \
                  \
                  <div class="margin_auto position_relative float_left width_100">\
                     \
                     \
                     <div class="margin_auto position_relative float_left top_1vh width_100">\
                        \
                        \
                        <div class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align pseudo_hover pseudo_button_bottom_dark_yellow_8_shadow pseudo_button_bottom_dark_yellow_8_border_01 ">\
                           \
                           \
                           <div class=" position_absolute bottom_0 left_0 right_0 float_left calc_02vh_width height_5vh display_webkit_box webkit_box_pack_center webkit_box_align border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 ">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left calc_04vh_width height_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_dark_yellow_0">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left height_01vh calc_02vh_width margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_light_yellow_1">\
                           </div>\
                           \
                           \
                           <a id="submit" href="#" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right color-dark-yellow-5 color-light-green-9hover text_shadow_01vh_dark_yellow_1">\
                           ' + 'submit' + '</a>\
                        </div>\
                        \
                        \
                     </div>\
                     \
                     \
                  </div>\
                  \
                  \
               </div>\
               \
               \
               \
            </div>\
            \
            \
            <h1 class="font_size_205vh line_height_5vh">Contact Us</h1>\
            \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_first_name" placeholder="title" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="subtitle" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="paragraph" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="featured image(s)" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="type" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="category" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="tag" type="text" name=""/>\
            </form>\
            \
            \
            <div class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">\
               \
               \
               \
               <div class="margin_auto position_relative float_left">\
                  \
                  \
                  <div class="margin_auto position_relative float_left width_100">\
                     \
                     \
                     <div class="margin_auto position_relative float_left top_1vh width_100">\
                        \
                        \
                        <div class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align pseudo_hover pseudo_button_bottom_dark_yellow_8_shadow pseudo_button_bottom_dark_yellow_8_border_01 ">\
                           \
                           \
                           <div class=" position_absolute bottom_0 left_0 right_0 float_left calc_02vh_width height_5vh display_webkit_box webkit_box_pack_center webkit_box_align border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 ">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left calc_04vh_width height_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_dark_yellow_0">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left height_01vh calc_02vh_width margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_light_yellow_1">\
                           </div>\
                           \
                           \
                           <a id="submit" href="#" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right color-dark-yellow-5 color-light-green-9hover text_shadow_01vh_dark_yellow_1">\
                           ' + 'submit' + '</a>\
                        </div>\
                        \
                        \
                     </div>\
                     \
                     \
                  </div>\
                  \
                  \
               </div>\
               \
               \
               \
            </div>\
            \
            \
            <h1 class="font_size_205vh line_height_5vh">Apply</h1>\
            \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_first_name" placeholder="title" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="subtitle" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="paragraph" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="featured image(s)" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="type" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="category" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="tag" type="text" name=""/>\
            </form>\
            \
            \
            <div class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">\
               \
               \
               \
               <div class="margin_auto position_relative float_left">\
                  \
                  \
                  <div class="margin_auto position_relative float_left width_100">\
                     \
                     \
                     <div class="margin_auto position_relative float_left top_1vh width_100">\
                        \
                        \
                        <div class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align pseudo_hover pseudo_button_bottom_dark_yellow_8_shadow pseudo_button_bottom_dark_yellow_8_border_01 ">\
                           \
                           \
                           <div class=" position_absolute bottom_0 left_0 right_0 float_left calc_02vh_width height_5vh display_webkit_box webkit_box_pack_center webkit_box_align border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 ">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left calc_04vh_width height_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_dark_yellow_0">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left height_01vh calc_02vh_width margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_light_yellow_1">\
                           </div>\
                           \
                           \
                           <a id="send" href="#" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right color-dark-yellow-5 color-light-green-9hover text_shadow_01vh_dark_yellow_1">\
                           ' + 'send' + '</a>\
                        </div>\
                        \
                        \
                     </div>\
                     \
                     \
                  </div>\
                  \
                  \
               </div>\
               \
               \
               \
            </div>\
            \
            \
            <h1 class="font_size_205vh line_height_5vh">Comment</h1>\
            \
            <form class="position_relative width_100 float_left">\
               <input id="element_input_first_name" placeholder="title" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="subtitle" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="paragraph" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="featured image(s)" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="type" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="category" type="text" name=""/>\
               <input id="element_input_first_name" placeholder="tag" type="text" name=""/>\
            </form>\
            \
            \
            <div class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">\
               \
               \
               \
               <div class="margin_auto position_relative float_left">\
                  \
                  \
                  <div class="margin_auto position_relative float_left width_100">\
                     \
                     \
                     <div class="margin_auto position_relative float_left top_1vh width_100">\
                        \
                        \
                        <div class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align pseudo_hover pseudo_button_bottom_dark_yellow_8_shadow pseudo_button_bottom_dark_yellow_8_border_01 ">\
                           \
                           \
                           <div class=" position_absolute bottom_0 left_0 right_0 float_left calc_02vh_width height_5vh display_webkit_box webkit_box_pack_center webkit_box_align border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 ">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left calc_04vh_width height_100 margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_dark_yellow_0">\
                           </div>\
                           \
                           \
                           <div class=" position_absolute top_-01vh left_0 right_0 float_left height_01vh calc_02vh_width margin_auto display_webkit_box webkit_box_pack_center webkit_box_align background_light_yellow_1">\
                           </div>\
                           \
                           \
                           <a id="submit comment" href="#" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right color-dark-yellow-5 color-light-green-9hover text_shadow_01vh_dark_yellow_1">\
                           ' + 'submit comment' + '</a>\
                        </div>\
                        \
                        \
                     </div>\
                     \
                     \
                  </div>\
                  \
                  \
               </div>\
               \
               \
               \
            </div>\
  ';

  return component
};

let element_gui_scroll_y = () => {

    let anchor = 0;
    let random_int = randomizer();

    let check_element = () => {
      
      document.getElementById('anchor').innerHTML = anchor;

      if (anchor == 0) {
        document.getElementById('component_app_gui_scroll_y_fold_content').innerHTML = anchors;
        document.getElementById('component_app_gui_scroll_y_content').innerHTML = default_content;

        from_index.Handle_Firebase_Refs_and_Render();
      };

      if (anchor == 1) {
        document.getElementById('component_app_gui_scroll_y_fold_content').innerHTML = '1';
        document.getElementById('component_app_gui_scroll_y_content').innerHTML = default_content_1;
        
      };

      if (anchor == 2) {
        document.getElementById('component_app_gui_scroll_y_fold_content').innerHTML = '2';
        document.getElementById('component_app_gui_scroll_y_content').innerHTML = default_content_2;
        
      };
      
      if (anchor == 3) {
        document.getElementById('component_app_gui_scroll_y_fold_content').innerHTML = '\
          \
          \
        ';
        document.getElementById('component_app_gui_scroll_y_content').innerHTML = '';
      };
    };

    let default_content = '\
      \
      '+element_gradient('gradient_light_yellow_0_bottom')+'\
      \
      '+element_container('\
        \
        '+element_container('\
            \
            ' + element_title('feature: dj') + '\
            \
            '+element_container('\
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
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
          \
        ', 'width_100 height_100vh float_left position_relative background_light_yellow_0')+'\
        \
        '+element_container('\
            \
            '+element_container('\
              \
              <div class="position_relative background_light_yellow_9 margin_auto width_100 height_5vh float_right">\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <div class="position_relative margin_auto height_5vh width_5vh float_left display_flex_flow">\
                    \
                    <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">\
                    </div>\
                    \
                  </div>\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    Home\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    Search\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    About\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    Hire\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    Contact\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">\
                  \
                  <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">\
                  </div>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">\
                  \
                  <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">\
                  </div>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">\
                  \
                  <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">\
                  </div>\
                  \
                </div>\
                \
              </div>\
              \
              ', 'width_100 float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
          \
        ', 'width_100 float_left position_relative')+'\
        \
        '+element_container('\
            \
            ' + element_title('feature: start gnougn') + '\
            \
            '+element_container('\
              \
              <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                  \
                  <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                      <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
          \
        ', 'width_100 height_100vh float_left position_relative background_light_yellow_0')+'\
        \
        '+element_container('\
            \
            ' + element_title('feature: element_slider_1') + '\
            \
            '+element_container('\
            \
            '+element_slider_1()+'\
          \
          ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
          \
        ', 'width_33 float_left position_relative background_light_yellow_0')+'\
        \
        '+element_container('\
              \
              ' + element_title('feature: element_slider_2') + '\
          \
            '+element_container('\
              \
              '+element_slider_2()+'\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0')+'\
        \
        '+element_container('\
              \
              ' + element_title('feature: element_slider_3') + '\
          \
            '+element_container('\
              \
              '+element_slider_3()+'\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0')+'\
        \
        '+element_container('\
              \
              ' + element_title('feature: element_slider_4') + '\
          \
            '+element_container('\
              \
              '+element_slider_4()+'\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0')+'\
        \
        '+element_container('\
          \
          ' + element_title('feature: element_slider_5') + '\
          \
            '+element_container('\
              \
              '+element_slider_5()+'\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0')+'\
        \
        '+element_container('\
          \
          ' + element_title('feature: element_slider_6') + '\
          \
            '+element_container('\
              \
              '+element_slider_6()+'\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0')+'\
        \
        '+element_container('\
          \
          ' + element_title('feature: element_slider_7') + '\
          \
            '+element_container('\
              \
              '+element_slider_7()+'\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0')+'\
        \
        '+element_container('\
              \
              ' + element_title('feature: element_time') + '\
          \
            '+element_container('\
              \
              '+element_time()+'\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0')+'\
        \
        ' + element_title('feature: transforms', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: transforms') + '\
        \
        <div id="component_transform_1" class="overflow_hidden width_100 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            \
            <div id="" class="overflow_hidden width_25 height_100 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                 \
                <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_25 height_100 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                 \
                <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_25 height_100 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                 \
                <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_25 height_100 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                 \
                <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                \
            </div>\
            \
            \
        </div>\
        \
        <div id="component_transform_2" class="overflow_hidden width_100 height_100vh position_relative float_left background-light-yellow-9">\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_100 height_25 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                 \
                <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_100 height_25 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                 \
                <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_100 height_25 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                 \
                <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_100 height_25 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                 \
                <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
                \
            </div>\
            \
            \
        </div>\
        \
        <div id="component_transform_3" class="overflow_hidden width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
             \
            <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
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
            \
        </div>\
        \
        <div id="component_transform_4" class="overflow_hidden width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">top-100</p>\
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
             \
            <div class="transform_translate3d_top_0_hover transform_translate3d_top_100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">top-100</p>\
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
            \
        </div>\
        \
        <div id="component_transform_5" class="overflow_hidden width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">left100</p>\
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
             \
            <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">left100</p>\
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
            \
        </div>\
        \
        <div id="component_transform_6" class="overflow_hidden width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">left-100</p>\
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
             \
            <div class="transform_translate3d_left0_hover transform_translate3d_left_100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">left-100</p>\
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
            \
        </div>\
        \
        ' + element_title('feature: hides', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: hides') + '\
        \
        <div id="component_transform_1" class="width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow overflow_hidden">\
            \
            <div class="hover_hide calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                \
                <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                    <div class="opacity_02 calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                    </div>\
                </div>\
                \
                <div class="position_absolute bottom_10vh left_0 float_left display_flex_flow">\
                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                        <p class="font_size_205vh padding_205vh position_relative float_left">hover_hide</p>\
                    </div>\
                </div>\
                \
            </div>\
            \
            <div class="show_hide calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                \
                <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                    <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                    </div>\
                </div>\
                \
                <div class="position_absolute bottom_10vh left_0 float_left display_flex_flow">\
                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                        <p class="font_size_205vh padding_205vh position_relative float_left">show_hide</p>\
                    </div>\
                </div>\
                \
            </div>\
            \
        </div>\
        \
        <div id="component_transform_2" class="width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow overflow_hidden">\
            \
            <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                \
                <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                    <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                    </div>\
                    \
                    <div class="show_hide position_absolute bottom_0 left_0 float_left display_flex_flow">\
                        <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            <p class="font_size_205vh padding_205vh position_relative float_left">show_hide</p>\
                        </div>\
                    </div>\
                    \
                    <div class="hover_hide position_absolute bottom_0 left_0 float_left display_flex_flow">\
                        <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            <p class="font_size_205vh padding_205vh position_relative float_left">hover_hide</p>\
                        </div>\
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
        </div>\
        \
                          ' + element_title('feature: grid', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: grid') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_100', '1/1') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_50', '1/2') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_50', '2/2') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', '1/3') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', '2/3') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', '3/3') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_25', '1/4') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_25', '2/4') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_25', '3/4') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_25', '4/4') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '1/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '2/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '3/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '4/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '5/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '1/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '2/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '3/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '4/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '5/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '6/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '1/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '2/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '3/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '4/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '5/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '6/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '7/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '1/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '2/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '3/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '4/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '5/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '6/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '7/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '8/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '1/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '2/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '3/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '4/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '5/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '6/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '7/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '8/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '9/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '1/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '2/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '3/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '4/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '5/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '6/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '7/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '8/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '9/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '10/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', 'yo 123') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', 'yo 123') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', 'yo 123') + '\
        \
        \
                      ' + element_container_styled('position_relative float_left background-light-yellow-9 width_100 height_50vh', '\
                          ' + element_container_center('\
                              <div class="position_relative width_100 text_align_center float_left font_size_10vh line_height_10vh">\
                                  Roster - What:\
                              </div>\
                              \
                              <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                  Summary - About:\
                              </div>\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('roster') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      \
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_100 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('Widths') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_10 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_90 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_20 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-5 width_80 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_30 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_70 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_40 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-5 width_60 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_50 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_50 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_100 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('Heights') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_100 height_10vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_100 height_20vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_100 height_30vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-5 width_100 height_40vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_100 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_100 height_60vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_100 height_70vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-5 width_100 height_80vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_100 height_90vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_100 height_100vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      \
                      \
                      ' + element_title('grid: 100 x 100', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'grid: 100 x 100') + '\
                      \
                                    ' + element_container_styled('position_relative float_left width_100 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                      \
                                    ' + element_container_styled('position_relative float_left width_50 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_50 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_33flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_33flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_33flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    ' + element_container_styled('position_relative float_left width_25 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_25 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_25 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_25 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
        ' + element_title('feature: grows', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: grows') + '\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_205vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_5vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_15vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_20vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_25vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        ' + element_title('feature: calc', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: grows') + '\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_205vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_5vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_15vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_20vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_25vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        ' + element_title('feature: photos', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: photos') + '\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person1"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person2"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person3"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person4"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person5"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person6"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person7"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person8"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person9"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person10"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person11"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person12"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person13"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person14"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person15"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person16"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person17"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person18"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person19"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person20"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person21"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person22"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person23"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person24"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person25"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person26"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person27"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person28"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person29"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person30"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person31"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person32"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person33"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person34"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person35"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person36"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person37"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person38"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person39"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person40"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person41"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person42"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person43"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person44"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person45"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person46"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person47"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person48"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person49"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person50"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person51"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person52"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person53"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person54"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person55"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person56"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person57"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person58"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person59"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person60"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person61"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person62"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person63"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person64"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person65"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person66"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person67"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person68"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person69"></div>\
        \
        ' + element_title('feature: containers', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: containers') + '\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-8 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-7 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-6 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-5 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-4 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-3 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-2 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-1 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-0 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
      ', 'width_100 float_left position_relative background_light_yellow_0')+'\
      \
    ';

    let default_content_1 = '\
        ' + element_content_card() + '\
        \
        ' + element_title('feature: element_spaced_color') + '\
        \
          <div class="width_100 height_100vh float_left position_relative overflow_hidden">\
              \
              <div class="width_100 height_100 float_left position_relative scrollbaryhidden overflow_y">\
              \
              </div>\
              \
              <div id="top_right_anchors" class="float_left position_absolute top_10vh right_10vh margin_auto overflow_hidden display_flex_flow z_index_7">\
                \
                <span class="position_relative margin_auto z_index_1 height_100 width_100 display_flex_flow">\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </span>\
                \
              </div>\
              \
              <div id="top_left_anchors" class="float_left position_absolute top_10vh left_10vh margin_auto overflow_hidden display_flex_flow z_index_7">\
                \
                <span class="position_relative margin_auto z_index_1 height_100 width_100 display_flex_flow">\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </span>\
                \
              </div>\
                          \
              <div id="bottom_right_anchors" class="float_left position_absolute bottom_10vh right_10vh margin_auto overflow_hidden display_flex_flow z_index_7">\
                \
                <span class="position_relative margin_auto z_index_1 height_100 width_100 display_flex_flow">\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </span>\
                \
              </div>\
              \
              <div id="bottom_left_anchors" class="float_left position_absolute bottom_10vh left_10vh margin_auto overflow_hidden display_flex_flow z_index_7">\
                \
                <span class="position_relative margin_auto z_index_1 height_100 width_100 display_flex_flow">\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </span>\
                \
              </div>\
              \
              <div id="left_anchors" class="width_10vh calc_20vh_height float_left position_absolute top_0 bottom_0 left_0 margin_auto display_flex_flow z_index_7">\
                \
                <div class="position_relative margin_auto width_10vh float_right">\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </div>\
                \
              </div>\
              \
              <div id="right_anchors" class="width_10vh calc_20vh_height float_left position_absolute top_0 bottom_0 right_0 margin_auto display_flex_flow z_index_7">\
                \
                <div class="position_relative margin_auto width_10vh float_right">\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </div>\
              \
              </div>\
            \
          </div>\
        \
        ' + element_spaced_color() + '\
        \
        ' + element_title('feature: element_content_loading') + '\
        \
        ' + element_content_loading() + '\
        \
        ' + element_title('feature: element_content_loading_scrolling') + '\
        \
        ' + element_content_loading_scrolling() + '\
        \
        ' + element_title('feature: element_content_scrolling') + '\
        \
        ' + element_content_scrolling() + '\
        \
        ' + element_title('feature: element_center_content') + '\
        \
        ' + element_center_content('\
          \
          ' + component_keystroke_annotate_new('yes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.') + '\
          \
          ' + component_keystroke_annotate_new('yes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.') + '\
          \
          ' + component_keystroke_annotate_new('yes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.') + '\
          \
        ') + '\
    ';

    let default_content_2 = '\
      \
      <div id="component_app_gui_scroll_y_fold" class="width_100 height_100vh float_left position_relative overflow_hidden">\
          \
          <div class="width_50 float_left position_absolute top_0 right_0 margin_auto overflow_hidden display_flex_flow ">\
              \
              ' + element_scroll_x_scrollbar_styled([{
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, ]) + '\
              \
            \
          </div>\
          \
          <div class="width_50 calc_10vh_height float_left position_absolute top_0 left_0 margin_auto overflow_hidden display_flex_flow ">\
          \
            ' + element_content_scrolling() + '\
          \
          </div>\
          \
          <div class="width_100 float_left position_absolute bottom_0 left_0 right_0 margin_auto overflow_hidden display_flex_flow ">\
              \
              ' + element_scroll_x_scrollbar_styled([{
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, {
              link: 'death_ride'
              }, ]) + '\
              \
            \
          </div>\
          \
          <div class="width_50 calc_20vh_height float_left position_absolute top_10vh right_0 margin_auto overflow_hidden display_flex_flow ">\
          \
            ' + element_content_scrolling() + '\
          \
          </div>\
          \
      </div>\
      \
    ';

    let anchors = '\
            \
            <div id="top_right_anchors" class="float_left position_absolute top_10vh right_10vh margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="top_left_anchors" class="float_left position_absolute top_10vh left_10vh margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="bottom_right_anchors" class="float_left position_absolute bottom_10vh right_10vh margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="bottom_left_anchors" class="float_left position_absolute bottom_10vh left_10vh margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="bottom_anchors" class="width_100 float_left position_absolute bottom_0 right_0 margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="left_anchors" class="width_10vh calc_20vh_height float_left position_absolute top_0 bottom_0 left_0 margin_auto display_flex_flow z_index_1">\
            </div>\
            \
            <div id="right_anchors" class="width_10vh calc_20vh_height float_left position_absolute top_0 bottom_0 right_0 margin_auto display_flex_flow z_index_1">\
            </div>\
    ';

    let component = '\
      \
      <div id="element_gui_scroll_y" class="width_100 float_left position_relative overflow_hidden easing_01 transform_translate3d_top0">\
        \
        <div id="component_modal_scroll_fixed_feature_1" class="width_100 height_100vh background_dark_yellow_3 float_left position_absolute bottom_0 left_0 display_none opacity_0 overflow_hidden">\
        </div>\
        \
        <div id="component_modal_scroll_fixed_feature_2" class="width_100 height_100vh background_dark_yellow_2 float_left position_absolute bottom_0 left_0 display_none opacity_0 overflow_hidden">\
        </div>\
        \
        <div id="component_modal_scroll_fixed_feature_3" class="width_100 height_100vh float_left position_relative display opacity_1 overflow_hidden">\
          '+anchors+'\
        </div>\
        \
        <div id="component_app_gui_scroll_y" tabindex="1" class="calc_02vh border_01vh_dark_yellow_9 float_left position_absolute bottom_0 left_0 text_align_center overflow_y scrollbaryhidden easing_01">\
          \
          <div id="component_app_gui_scroll_y_fold" class="width_100 height_100vh float_left position_relative overflow_hidden">\
              \
              <div id="component_app_gui_scroll_y_fold_content" class="width_100 height_100 float_left position_relative scrollbaryhidden overflow_y">\
              \
              </div>\
              \
          </div>\
          \
          <div id="component_app_gui_scroll_y_content" class="width_100 float_left position_relative">\
            '+default_content+'\
          </div>\
          \
        </div>\
        \
      </div>\
    ';

    // add event listeners
    setTimeout(() => {

      (() => {

        document.getElementById('component_app_gui_scroll_y').addEventListener('click', (event) => {
          console.log('click from component_app_gui_scroll_y');
        });
        
        document.getElementById('component_app_gui_scroll_y').addEventListener('wheel', (event) => {
          console.log('wheel from component_app_gui_scroll_y');
        });

        document.getElementById('component_app_gui_scroll_y_fold_content').addEventListener('scroll', (event) => {
          console.log('scroll from component_app_gui_scroll_y_fold_content');
            if (document.getElementById('component_app_gui_scroll_y_fold_content') != null) {
                
                // scrolling
                let component_app_gui_scroll_y_fold_content_position = 0;
                
                console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                if (event.srcElement.scrollTop > component_app_gui_scroll_y_fold_content_position) {
                    console.log('component_app_gui_scroll_y_fold_content_position increasing');
                }

                if (event.srcElement.scrollTop < component_app_gui_scroll_y_fold_content_position) {
                    console.log('component_app_gui_scroll_y_fold_content_position decreasing');
                }

                if (event.srcElement.scrollTop == 0) {
                    console.log('top met');
                }

                if (event.srcElement.scrollTop > 1) {
                    console.log('scrolling started');
                }

                if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                    console.log('inside lead');
                }

                if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                    console.log('past lead')
                }

                if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                    console.log('100vh before bottom met')
                }

                if ((event.srcElement.scrollHeight) == (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                    console.log('bottom met')
                }

                console.log('scroll');
                from_index.Handle_get_state_from_events();
                from_index.values_update();

            };
        });
        
        document.getElementById('component_app_gui_scroll_y').addEventListener('scroll', (event) => {
          console.log('scroll from component_app_gui_scroll_y');
            if (document.getElementById('component_app_gui_scroll_y') != null) {
                
                // scrolling
                let component_app_gui_scroll_y_position = 0;
                
                
                console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
                console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
                console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
                console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
                console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
                console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

                if (event.srcElement.scrollTop > component_app_gui_scroll_y_position) {
                    console.log('component_app_gui_scroll_y_position increasing');
                    component_app_gui_scroll_y_position = event.srcElement.scrollTop;
                }

                if (event.srcElement.scrollTop < component_app_gui_scroll_y_position) {
                    console.log('component_app_gui_scroll_y_position decreasing');
                    component_app_gui_scroll_y_position = event.srcElement.scrollTop;
                }

                if (event.srcElement.scrollTop == 0) {
                    console.log('top met');
                    document.getElementById('component_app_modal_element_nav_top').classList.remove('background_dark_yellow_0');
                }

                if (event.srcElement.scrollTop > 1) {
                    console.log('scrolling started');
                    document.getElementById('component_app_modal_element_nav_top').classList.add('background_dark_yellow_0');
                }

                if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
                    console.log('inside lead');
                    document.getElementById('component_modal_scroll_fixed_feature_1').classList.remove('display');
                    document.getElementById('component_modal_scroll_fixed_feature_1').classList.add('display_none');
                    document.getElementById('component_modal_scroll_fixed_feature_2').classList.remove('display_none');
                    document.getElementById('component_modal_scroll_fixed_feature_2').classList.add('display');
                }

                if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
                    console.log('past lead')
                    document.getElementById('component_modal_scroll_fixed_feature_1').classList.remove('display_none');
                    document.getElementById('component_modal_scroll_fixed_feature_1').classList.add('display');
                    document.getElementById('component_modal_scroll_fixed_feature_2').classList.remove('display');
                    document.getElementById('component_modal_scroll_fixed_feature_2').classList.add('display_none');
                }

                if (((event.srcElement.scrollHeight) - event.srcElement.clientHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                    console.log('100vh before bottom met')
                }

                if ((event.srcElement.scrollHeight) < (event.srcElement.scrollTop + event.srcElement.offsetHeight)) {
                    document.getElementById('component_app_modal_element_nav_top').classList.remove('background_dark_yellow_0');
                    console.log('bottom met')
                }

                console.log('scroll');
                from_index.Handle_get_state_from_events();
                from_index.values_update();

            };
        });
        
        document.getElementById('component_app_gui_scroll_y').addEventListener('mousemove', (event) => {
          console.log('mousemove from component_app_gui_scroll_y');
        });
        
        document.getElementById('component_app_gui_scroll_y').addEventListener('mouseup', (event) => {
          console.log('mouseup from component_app_gui_scroll_y');
        });
        
        document.getElementById('component_app_gui_scroll_y').addEventListener('mousedown', (event) => {
          console.log('mousedown from component_app_gui_scroll_y');
        });
        
        document.getElementById('component_app_gui_scroll_y').addEventListener('mouseenter', (event) => {
          console.log('mouseenter from component_app_gui_scroll_y');
        });
        
        document.getElementById('component_app_gui_scroll_y').addEventListener('mouseleave', (event) => {
          console.log('mouseleave from component_app_gui_scroll_y');
        });

        document.getElementById('component_app_gui_scroll_y').addEventListener('keyup', (event) => {
          console.log('keyup from component_app_gui_scroll_y');
        });

        document.getElementById('component_app_gui_scroll_y').addEventListener("keydown", function(event) {

          console.log('keydown from component_app_gui_scroll_y');

          if(event.keyCode == 37) {
            anchor -= 1;
            check_element();
          };

          if(event.keyCode == 39) {
            anchor += 1;
            check_element();
          };

        });

        document.getElementById('folds'+random_int+'').addEventListener('click', (event) => {
          anchor = 3;
          check_element();
        });

        document.getElementById('anchorUp'+random_int+'').addEventListener('click', (event) => {
          anchor += 1;
          check_element();
        });

        document.getElementById('anchorDown'+random_int+'').addEventListener('click', (event) => {
          if (anchor > 0) {
            anchor -= 1;
            check_element();
          };
        });

      check_element();

      })();

    }, 1000);

    return component
};

// scrolls
let element_scroll_y = (info) => {
    let component = '\
    <div id="element_scroll_y" class="position_relative width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1">\
      <div class="position_relative width_100 float_left">\
      ' + info + '\
      </div>\
    </div>\
    '
    return component
};

let element_scroll_y_scrollbar = (info) => {
    let component = '\
    <div id="element_scroll_y_scrollbar" class="position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">\
      <div class="position_relative width_100 float_left">\
      ' + info + '\
      </div>\
    </div>\
    '

    return component
};

let element_scroll_y_scrollbar_styled = (style, info) => {
    let component = '\
    <div id="element_scroll_y_scrollbar_styled" class="position_relative ' + style + ' overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">\
      <div class="position_relative width_100 float_left">\
      ' + info + '\
      </div>\
    </div>\
    '

    return component
};

let element_scroll_x_scrollbar_styled = (array) => {

    let array_items = '';

    for (let i = 0; i < array.length; i++) {
        array_items += component_keystroke_annotate_new(array[i].title, array[i].title);
    }

    let component = '\
      <div class="margin_auto position_relative float_left width_100">\
        <div class="position_relative easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_border_01">\
          <div class="background_light_yellow_9 position_relative float_left width_100 height_100 display_flex_flow border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9">\
            <div class="width_100 height_100 position_relative float_left top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">\
              <div class="height_100 float_left position_relative display_flex_flow">\
                ' + array_items + '\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    '

    return component
};

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

// reusables

let element_slider_1 = () => {

  let anchor = 0;
  let array = [{title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}]
  let random_int = randomizer();

  let element_slider_1_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content
  };


  let update = () => {
    document.getElementById('element_slider_1_content'+random_int+'').innerHTML = element_slider_1_default_content();

  };

  let component = '\
    <div id="element_slider_1_'+random_int+'" class="width_100 float_left position_relative margin_auto text_align_center">\
      <div id="element_slider_1_content'+random_int+'" class="width_100 float_left position_relative text_align_center">'+element_slider_1_default_content()+'</div>\
      <div id="element_slider_1_content_anchorDown" class="z_index_1 gui_arrow_left width_5vh height_5vh float_left position_relative"></div>\
      <div id="element_slider_1_content_anchorUp" class="z_index_1 gui_arrow_right width_5vh height_5vh float_right position_relative"></div>\
    </div>\
  ';

    // add event listeners
    setTimeout(() => {
      update();
      document.getElementById('element_slider_1_content_anchorUp').addEventListener('click', (event) => {
            if (anchor < (array.length) - 1) {
              anchor += 1;
              update();
            };
          });

          document.getElementById('element_slider_1_content_anchorDown').addEventListener('click', (event) => {
            if (anchor > 0) {
              anchor -= 1;
              update();
            };
          });

    }, 2000);

  return component
};

let element_slider_2 = () => {

  let anchor = 0;
  let array = [{title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}]
  let random_int = randomizer();

  let element_slider_2_default_content = () => {

    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content

  };

  let update = () => {

    document.getElementById('element_slider_2_content'+random_int+'').innerHTML = element_slider_2_default_content();

  };

  let component = '\
    <div id="element_slider_2_'+random_int+'" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_2_content_anchorDown'+random_int+'" class="display_flex_flow width_100 height_5vh float_left position_relative"><div id="element_slider_2_content_anchorDown'+random_int+'" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
    <div id="element_slider_2_content'+random_int+'" class="width_100 float_left position_relative text_align_center">'+element_slider_2_default_content()+'</div>\
    <div id="element_slider_2_content_anchorUp'+random_int+'" class="display_flex_flow width_100 height_5vh float_right position_relative"><div id="element_slider_2_content_anchorUp'+random_int+'" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
    </div>\
  ';

    // add event listeners
    setTimeout(() => {

      update();
      document.getElementById('element_slider_2_content_anchorUp'+random_int+'').addEventListener('click', (event) => {
            if (anchor < (array.length) - 1) {
              anchor += 1;
              update();
            };
          });

          document.getElementById('element_slider_2_content_anchorDown'+random_int+'').addEventListener('click', (event) => {
            if (anchor > 0) {
              anchor -= 1;
              update();
            };
          });

    }, 2000);

  return component
};

let element_slider_3 = () => {

  let anchor = 0;
  let array = [{title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}]
  let random_int = randomizer();

  let element_slider_3_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content
  };

  let element_slider_3_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_3_pagination'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
                <span class="margin_auto position_relative float_left top_0">\
                <span class="margin_auto position_relative float_left top_1vh">\
                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                \
                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                \
                </span>\
                \
                <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                ' + i + '\
                </span>\
                \
                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                      <div class="calc_2vh_width margin_1vh position_relative float_left">\
                        <p class="font_size_2vh line_height_205vh">\
                        ' + i + '\
                        </p>\
                      </div>\
                    </div>\
                  </span>\
                </span>\
                \
                </span>\
                </span>\
                </span>\
                \
              </span>\
        ';

        // add event listeners
        setTimeout(() => {
          document.getElementById("element_slider_3_pagination"+random_int).addEventListener('click', (event) => {
                  anchor = index;
                  update();
              });

        }, 2000);

        return g

    };

    let page_current = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_3_pagination'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
                <span class="margin_auto position_relative float_left top_0">\
                <span class="margin_auto position_relative float_left top_1vh">\
                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                \
                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
                \
                </span>\
                \
                <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                ' + i + '\
                </span>\
                \
                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                      <div class="calc_2vh_width margin_1vh position_relative float_left">\
                        <p class="font_size_2vh line_height_205vh">\
                        ' + i + '\
                        </p>\
                      </div>\
                    </div>\
                  </span>\
                </span>\
                \
                </span>\
                </span>\
                </span>\
                \
              </span>\
        ';

        return g
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += (page_changer(i));

      };

      if (i == anchor) {

        pagination_content += (page_current(i));

      };

    };

    return pagination_content
  };

  let update = () => {
    document.getElementById('element_slider_3_pagination'+random_int+'').innerHTML = '';
    document.getElementById('element_slider_3_pagination'+random_int+'').innerHTML = (element_slider_3_pagination());
    document.getElementById('element_slider_3_content'+random_int+'').innerHTML = element_slider_3_default_content();

  };

  let component = '\
    <div id="element_slider_3_'+random_int+'" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_3_pagination'+random_int+'" class="display_flex_flow width_100 float_left position_relative">'+element_slider_3_pagination()+'</div>\
    <div id="element_slider_3_content'+random_int+'" class="width_100 float_left position_relative text_align_center">'+element_slider_3_default_content()+'</div>\
    </div>\
  ';

    // add event listeners
    setTimeout(() => {
      update();
    }, 1);

  return component
};

let element_slider_4 = () => {

  let anchor = 0;
  let array = [{title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}]
  let random_int = randomizer();

  let element_slider_4_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content
  };

  let element_slider_4_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_4_pagination'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      ' + i + '\
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              </span>\
        ';

                // add event listeners
        setTimeout(() => {
          document.getElementById("element_slider_4_pagination"+random_int).addEventListener('click', (event) => {
                  anchor = index;
                  update();
              });

        }, 2000);

        return g
    };

    let page_current = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_4_pagination'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      ' + i + '\
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              \
              </span>\
        ';

        return g
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += (page_changer(i));

      };

      if (i == anchor) {

        pagination_content += (page_current(i));

      };

    };

    return pagination_content
  };

  let update = () => {
    document.getElementById('element_slider_4_pagination'+random_int+'').innerHTML = '';
    document.getElementById('element_slider_4_pagination'+random_int+'').innerHTML += (element_slider_4_pagination());
    document.getElementById('element_slider_4_content'+random_int+'').innerHTML = element_slider_4_default_content();

  };

  let component = '\
  <div id="element_slider_4_'+random_int+'" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_4_pagination'+random_int+'" class="display_flex_flow width_100 float_left position_relative">'+element_slider_4_pagination()+'</div>\
    <div id="element_slider_4_content'+random_int+'" class="width_100 float_left position_relative text_align_center">'+element_slider_4_default_content()+'</div>\
    <div id="element_slider_4_content_anchorDown" class="z_index_1 gui_arrow_left width_5vh height_5vh float_left position_relative"></div>\
    <div id="element_slider_4_content_anchorUp" class="z_index_1 gui_arrow_right width_5vh height_5vh float_right position_relative"></div>\
  </div>\
  ';

    // add event listeners
    setTimeout(() => {
      update();
      document.getElementById('element_slider_4_content_anchorUp').addEventListener('click', (event) => {
            if (anchor < (array.length) - 1) {
              anchor += 1;
              update();
            };
          });

          document.getElementById('element_slider_4_content_anchorDown').addEventListener('click', (event) => {
            if (anchor > 0) {
              anchor -= 1;
              update();
            };
          });

    }, 2000);

  return component
};

let element_slider_5 = () => {

  let anchor = 0;
  let array = [{title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}]
  let random_int = randomizer();

  let element_slider_5_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content
  };

  let element_slider_5_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_5_pagination'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      ' + i + '\
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              </span>\
        ';

                // add event listeners
        setTimeout(() => {
          document.getElementById("element_slider_5_pagination"+random_int).addEventListener('click', (event) => {
                  anchor = index;
                  update();
              });

        }, 2000);

        return g
    };

    let page_current = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_5_pagination'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      ' + i + '\
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              \
              </span>\
        ';

        return g
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += (page_changer(i));

      };

      if (i == anchor) {

        pagination_content += (page_current(i));

      };

    };

    return pagination_content
  };

  let update = () => {
    document.getElementById('element_slider_5_pagination'+random_int+'').innerHTML = '';
    document.getElementById('element_slider_5_pagination'+random_int+'').innerHTML += (element_slider_5_pagination());
    document.getElementById('element_slider_5_content'+random_int+'').innerHTML = element_slider_5_default_content();

  };

  let component = '\
    <div id="element_slider_5_'+random_int+'" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_5_pagination'+random_int+'" class="display_flex_flow width_100 float_left position_relative">'+element_slider_5_pagination()+'</div>\
    <div id="element_slider_5_content_anchorDown'+random_int+'" class="display_flex_flow width_100 height_5vh float_left position_relative"><div id="element_slider_5_content_anchorDown'+random_int+'" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
    <div id="element_slider_5_content'+random_int+'" class="width_100 float_left position_relative text_align_center">'+element_slider_5_default_content()+'</div>\
    <div id="element_slider_5_content_anchorUp'+random_int+'" class="display_flex_flow width_100 height_5vh float_right position_relative"><div id="element_slider_5_content_anchorUp'+random_int+'" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
    </div>\
  ';

    // add event listeners
    setTimeout(() => {
      update();
      document.getElementById('element_slider_5_content_anchorUp'+random_int+'').addEventListener('click', (event) => {
            if (anchor < (array.length) - 1) {
              anchor += 1;
              update();
            };
          });

          document.getElementById('element_slider_5_content_anchorDown'+random_int+'').addEventListener('click', (event) => {
            if (anchor > 0) {
              anchor -= 1;
              update();
            };
          });

    }, 2000);

  return component
};

let element_slider_6 = () => {

  let anchor = 0;
  let array = [{title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}]
  let random_int = randomizer();

  let element_slider_6_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content
  };

  let element_slider_6_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_6_pagination'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      \
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              </span>\
        ';

                // add event listeners
        setTimeout(() => {
          document.getElementById("element_slider_6_pagination"+random_int).addEventListener('click', (event) => {
                  anchor = index;
                  update();
              });

        }, 2000);

        return g
    };

    let page_current = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_6_pagination'+random_int+'" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      \
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              \
              </span>\
        ';

        return g
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += (page_changer(i));

      };

      if (i == anchor) {

        pagination_content += (page_current(i));

      };

    };

    return pagination_content
  };

  let update = () => {
    document.getElementById('element_slider_6_pagination'+random_int+'').innerHTML = '';
    document.getElementById('element_slider_6_pagination'+random_int+'').innerHTML += (element_slider_6_pagination());
    document.getElementById('element_slider_6_content'+random_int+'').innerHTML = element_slider_6_default_content();

  };

  let component = '\
    <div id="element_slider_6_'+random_int+'" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_6_pagination'+random_int+'" class="display_flex_flow width_100 float_left position_relative">'+element_slider_6_pagination()+'</div>\
    <div id="element_slider_6_content_anchorDown'+random_int+'" class="display_flex_flow width_100 height_5vh float_left position_relative"><div id="element_slider_6_content_anchorDown'+random_int+'" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
    <div id="element_slider_6_content'+random_int+'" class="width_100 float_left position_relative text_align_center">'+element_slider_6_default_content()+'</div>\
    <div id="element_slider_6_content_anchorUp'+random_int+'" class="display_flex_flow width_100 height_5vh float_right position_relative"><div id="element_slider_6_content_anchorUp'+random_int+'" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
    </div>\
  ';

    // add event listeners
    setTimeout(() => {
      update();
      document.getElementById('element_slider_6_content_anchorUp'+random_int+'').addEventListener('click', (event) => {
            if (anchor < (array.length) - 1) {
              anchor += 1;
              update();
            };
          });

          document.getElementById('element_slider_6_content_anchorDown'+random_int+'').addEventListener('click', (event) => {
            if (anchor > 0) {
              anchor -= 1;
              update();
            };
          });

    }, 2000);

  return component
};

let element_slider_7 = () => {

  let anchor = 0;
  let array = [{title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}, {title: 'Shannon Sharpe'}]
  let random_int = randomizer();

  let element_slider_7_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content
  };

  let element_slider_7_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_7_pagination'+random_int+'" class="margin_auto position_relative width_100 margin_105vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                      \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      \
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              </span>\
        ';

                // add event listeners
        setTimeout(() => {
          document.getElementById("element_slider_7_pagination"+random_int).addEventListener('click', (event) => {
                  anchor = index;
                  update();
              });

        }, 2000);

        return g
    };

    let page_current = function(index){
        let random_int = randomizer();
        let g = '\
              <span id="element_slider_7_pagination'+random_int+'" class="margin_auto position_relative width_100 margin_2vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                      \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      \
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              \
              </span>\
        ';

        return g
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += (page_changer(i));

      };

      if (i == anchor) {

        pagination_content += (page_current(i));

      };

    };

    return pagination_content
  };

  let update = () => {
    document.getElementById('element_slider_7_pagination'+random_int+'').innerHTML = '';
    document.getElementById('element_slider_7_pagination'+random_int+'').innerHTML += (element_slider_7_pagination());
    document.getElementById('element_slider_7_content'+random_int+'').innerHTML = element_slider_7_default_content();

  };

  let component = '\
    <div id="element_slider_7_'+random_int+'" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div class="display_flex_flow width_25 float_left position_relative">\
      <div id="element_slider_7_pagination'+random_int+'" class="width_100 float_left position_relative text_align_center">'+element_slider_7_pagination()+'</div>\
    </div>\
    \
    <div class="width_75 float_left position_relative">\
      <div id="element_slider_7_content_anchorDown'+random_int+'" class="display_flex_flow width_100 height_5vh float_left position_relative"><div id="element_slider_7_content_anchorDown'+random_int+'" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
      <div id="element_slider_7_content'+random_int+'" class="width_100 float_left position_relative text_align_center">'+element_slider_7_default_content()+'</div>\
      <div id="element_slider_7_content_anchorUp'+random_int+'" class="display_flex_flow width_100 height_5vh float_right position_relative"><div id="element_slider_7_content_anchorUp'+random_int+'" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
    </div>\
    </div>\
    \
  ';

    // add event listeners
    setTimeout(() => {
      update();
      document.getElementById('element_slider_7_content_anchorUp'+random_int+'').addEventListener('click', (event) => {
            if (anchor < (array.length) - 1) {
              anchor += 1;
              update();
            };
          });

          document.getElementById('element_slider_7_content_anchorDown'+random_int+'').addEventListener('click', (event) => {
            if (anchor > 0) {
              anchor -= 1;
              update();
            };
          });

    }, 2000);

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
    <span id="component_app_stage_enneagon" class="display_none opacity_0 transform_translate3d_top0 easing_01 position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">\
    <span id="column1" class="position_relative float_left width_100vw height_100vh easing_01">\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
            ' + stage_outside() + '\
    </div>landing1 Left Top</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    \
    </div>landing2 Left Center</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
            ' + stage_sky() + '\
    </div>landing2 Left Bottom</span>\
    </span>\
    <span id="column1" class="position_relative float_left width_100vw height_100vh">\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing1 Center Top</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
            ' + stage_office() + '\
            ' + pieces_workspace() + '\
            ' + pieces_office() + '\
    </div>landing2 Center Mid</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing2 Center Bottom</span>\
    </span>\
    <span id="column1" class="position_relative float_left width_100vw height_100vh">\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing1 Right Top</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing2 Right Mid</span>  <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing2 Right Bottom</span>\
    </span>\
    </span>\
  '

  return component

};


let element_guis = () => {
    let element = `

        <div id="component_app_gui_top_left" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed top_0 left_0 margin_auto z_index_7">

          <div id="component_app_gui_logo_icon" class="gui_logo_dj_final_mark width_50 height_100 float_left position_relative float_left margin_auto z_index_7 margin_1vh_left">
          </div>

          <div id="component_app_gui_menu_icon" class="gui_menu width_50 height_100 float_left position_relative float_left margin_auto z_index_7">
          </div>

        </div>
        
        <div class="fadeIn delay10 animated1 position_fixed bottom_0 left_0 right_0 background_light_yellow_9 margin_auto width_100 height_5vh float_right z_index_7">
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <div class="position_relative margin_auto height_5vh width_5vh float_left display_flex_flow">
              
              <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
              </div>
              
            </div>
            
            <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Home
            </a>
            
          </div>
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Search
            </a>
            
          </div>
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              About
            </a>
            
          </div>
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Hire
            </a>
            
          </div>
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Contact
            </a>
            
          </div>
          
          <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">
            
            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>
            
          </div>
          
          <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">
            
            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>
            
          </div>
          
          <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">
            
            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>
            
          </div>
          
        </div>

        <div id="component_app_gui_top_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left display_flex_flow position_fixed calc_20vh_width top_0 left_0 right_0 margin_auto z_index_7">

          <span class="margin_auto position_relative margin_auto z_index_1 display_flex_flow height_10vh width_10vh">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_user" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

        <div id="component_app_gui_top_right" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed top_0 right_0 margin_auto z_index_7 display_flex_flow">

          <span class="margin_auto position_relative margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_area" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

        <div id="component_app_gui_right" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_20vh_height float_left position_fixed top_0 bottom_0 right_0 margin_auto z_index_7">

          <span class="margin_auto position_absolute top_0 left_0 right_0 margin_auto margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_green_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_met" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    Whats this
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>


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

          <div class="position_absolute bottom_0 left_0 width_10vh height_10vh float_right display_flex_flow">

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

        </div>

        <div id="component_app_gui_left" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_20vh_height float_left position_fixed top_0 bottom_0 left_0 margin_auto z_index_7">

          <span class="margin_auto position_relative margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_messages" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

          <div class="position_absolute top_0 left_0 bottom_0 margin_auto width_10vh height_5vh float_right display_flex_flow">

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

        </div>

        <div id="component_app_gui_bottom_left" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed bottom_0 left_0 margin_auto z_index_7">
          
          <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
          </div>

          <span class="margin_auto position_relative margin_auto z_index_1 height_10vh display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span id="score_current_data" class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

        <div id="component_app_gui_bottom_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left display_flex_flow position_fixed calc_20vh_width bottom_0 left_0 right_0 margin_auto z_index_7">

          <span class="height_10vh margin_auto position_relative margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_fans" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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

        <div id="component_app_gui_bottom_right" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed bottom_0 right_0 margin_auto z_index_7 display_flex_flow">

          <span class="margin_auto position_relative margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_likes" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
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
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay05">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay1">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay15">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay2">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated05 enterBottom delay25">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
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
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay05">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay1">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay15">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay2">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated05 enterRight delay25">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
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
  let component = `
    <div id="element_interaction_player" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_absolute top_0 left_0 margin_auto">
      
      <div id="component_app_interaction_easel" class="width_100 height_100 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">
        
      </div>
      
      <div id="bounce" class="display_none opacity_0 easing_01 transform_translate3d_top0 margin_auto position_absolute float_left margin_auto background_light_yellow_9 width_1205vw height_1205vh">
        
      </div>
      
      <div id="bullets" class="display_none opacity_0 easing_01 transform_translate3d_top0 margin_auto position_absolute float_left margin_auto width_100 height_100vh">
          
          <div id="bullets_verticle" class="margin_auto position_absolute float_left margin_auto width_100 height_100vh"></div>
          
          <div id="track_x" class="margin_auto position_absolute float_left margin_auto background_light_yellow_9 width_1vw height_1vh"></div>
          
          <div id="track_y" class="margin_auto position_absolute float_left margin_auto background_light_yellow_9 width_1vw height_1vh"></div>
          
      </div>
      
      <div id="element_ball" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_5vh height_5vh background_light_yellow_9 float_left position_absolute easing_01">
        
      </div>
      
      <div id="component_app_interaction_game_players_1" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">
          
          <div id="component_app_interaction_game_players_1_body" class="interaction_workspace_man_standing_1 opacity_1 easing_01 easing_01 width_1205vh height_50 margin_auto position_absolute bottom_0 left_0 float_left margin_auto">
          </div>
          
      </div>
      
      <div id="component_app_interaction_hands" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100 easing_01 position_absolute margin_auto">
          
          <div id="component_app_interaction_hand" class="interaction_hands width_100 height_100 margin_auto position_absolute bottom_0 left_-25 float_left margin_auto">
          </div>
          
      </div>
      
      <div id="component_app_interaction_enemy" class="display_none opacity_0 easing_01 transform_translate3d_top0 easing_01 margin_auto position_absolute bottom_0 left_0 float_left margin_auto interaction_workspace_man_standing_1">
        
      </div>
      
      <div id="component_app_interaction_helper_body" class="display_none opacity_0 easing_01 transform_translate3d_top0 easing_01 width_100 height_100 margin_auto position_absolute bottom_0 left_0 float_left margin_auto interaction_workspace_man_standing_1">
        
      </div>
      
      <div id="component_app_gui_logo_combo_feature_container" class="display_none opacity_0 easing_01 transform_translate3d_top0 position_absolute width_0 height_0 margin_auto float_left">
        <div id="component_app_gui_logo_combo_feature" class="position_absolute left_-50 top_-50 width_100 height_100 overflow_hidden float_left gui_keyhole">
        </div>
      </div>

      <div id="logo_load_container" class="display_none opacity_0 easing_01 transform_translate3d_top0 position_absolute margin_auto float_left width_0 height_0 ">
        <div id="component_app_gui_logo_combo_feature" class="position_absolute left_-50 top_-50 width_100 height_100 overflow_hidden float_left gui_key">
        </div>
      </div>
    </div>
    `

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

// navigations


let element_nav_top = '\
    <div id="component_app_modal_element_nav_top" class="easing_01 display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_10vh width_100 display_flex_flow z_index_1 ">\
      \
    </div>\
    '

let element_nav_left = '\
    <div id="component_app_modal_element_nav_left" class="easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 left_0 bottom_0 height_100 width_10vh z_index_1 margin_auto">\
      \
      <div class="position_absolute bottom_0 left_0 right_0 float_left calc_02vh display_flex_flow border_01vh_dark_yellow_9">\
      </div>\
      \
    </div>\
    '

let element_nav_bottom = '\
    <div id="component_app_modal_element_nav_bottom" class="easing_01 transform_translate3d_top0 display_none opacity_0 position_fixed bottom_0 left_0 right_0 height_10vh width_100 z_index_1 display_flex_flow margin_auto">\
      \
    </div>\
    '

let element_nav_right = '\
    <div id="component_app_modal_element_nav_right" class="easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 bottom_0 right_0 height_100 width_10vh z_index_1 margin_auto">\
      \
    </div>\
    '


let element_page_top = `
    <div id="component_app_modal_element_page_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_7 margin_auto">
      <div id="component_app_modal_element_page_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">
      
        ${element_gui_scroll_y()};

      </div>
    </div>
    `

let element_page_left = '\
    <div id="component_app_modal_element_page_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_7 margin_auto">\
      <div id="component_app_modal_element_page_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
      \
      \
      </div>\
    </div>\
    '

let element_page_bottom = '\
    <div id="component_app_modal_element_page_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_7">\
      <div id="component_app_modal_element_page_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
                \
                '+element_scroll_y(element_container('\
                            \
                            '+element_container('<div class="width_100 float_left position_relative">\
                            <div class="position_relative width_100 float_left font_size_4vh line_height_5vh">\
                            UI state:\
                            </div>\
                            <div class="position_relative width_100 float_left font_size_2vh line_height_3vh">\
                            Route State (Onboarding, Form, Search, Interaction):\
                            </div>\
                  <div class="width_100 float_left position_relative display opacity_1">Colors:</div>\
                                      <hr>\
                                      <div id="" class="width_100 float_left position_relative display opacity_1">load:</div>\
                                      <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                      <div id="" class=" position_relative display opacity_1">null</div>\
                                      </div>\
                                      <hr>\
                                      <div class="width_100 float_left position_relative display opacity_1">Grid:</div>\
                                      <hr>\
                                      <div id="" class="width_100 float_left position_relative display opacity_1">Depth:</div>\
                                      <div class="width_100 float_left position_relative display opacity_1">90: \
                                      <div id="" class=" position_relative display opacity_1">null</div>\
                                      </div>\
                                      <div class="width_100 float_left position_relative display opacity_1">270: \
                                      <div id="" class=" position_relative display opacity_1">null</div>\
                                      </div>\
                                      <hr>\
                  <div class="width_100 float_left position_relative display opacity_1">Colors:</div>\
                                      <hr>\
                                      <div id="" class="width_100 float_left position_relative display opacity_1">load:</div>\
                                      <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                      <div id="" class=" position_relative display opacity_1">null</div>\
                                      </div>\
                                      <hr>\
                                      <div class="width_100 float_left position_relative display opacity_1">Grid:</div>\
                                      <hr>\
                                      <div id="" class="width_100 float_left position_relative display opacity_1">Depth:</div>\
                                      <div class="width_100 float_left position_relative display opacity_1">90: \
                                      <div id="" class=" position_relative display opacity_1">null</div>\
                                      </div>\
                                      <div class="width_100 float_left position_relative display opacity_1">270: \
                                      <div id="" class=" position_relative display opacity_1">null</div>\
                                      </div>\
                                      <hr>\
                  <div class="width_100 float_left position_relative display opacity_1">Setting:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Accent:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Effect:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Pieces:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Particles:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Interaction:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Characters:</div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">enemies: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Route:</div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Materials: \
                                <div id="route" class=" position_relative display opacity_1">materials</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Gui:</div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">logo: \
                                <div id="component_app_status_display_gui_element_logo" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">arrows: \
                                <div id="component_app_status_display_gui_element_arrows" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">buttons: \
                                <div id="component_app_status_display_gui_element_buttons" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_10vh">Modal:</div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">pop</div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">top: \
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">display: \
                                <div id="component_app_status_display_pop_top" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">opacity: \
                                <div id="component_app_status_opacity_pop_top" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">transform: \
                                <div id="component_app_status_transform_pop_top" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <hr>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">bottom: \
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">display: \
                                <div id="component_app_status_display_pop_bottom" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">opacity: \
                                <div id="component_app_status_opacity_pop_bottom" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">transform: \
                                <div id="component_app_status_transform_pop_bottom" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <hr>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">left: \
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">display: \
                                <div id="component_app_status_display_pop_left" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">opacity: \
                                <div id="component_app_status_opacity_pop_left" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">transform: \
                                <div id="component_app_status_transform_pop_left" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <hr>\
                                \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_pop_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_pop_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_pop_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">nav</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_nav_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_nav_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_nav_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_nav_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_nav_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_nav_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_nav_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_nav_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_nav_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_nav_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_nav_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_nav_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">page</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_page_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_page_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_page_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_page_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_page_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_page_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_page_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_page_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_page_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_page_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_page_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_page_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">menu</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_menu_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_menu_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_menu_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_menu_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_menu_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_menu_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_menu_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_menu_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_menu_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_menu_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_menu_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_menu_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">morph</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_morph_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_morph_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_morph_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_morph_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_morph_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_morph_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_morph_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_morph_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_morph_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_morph_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_morph_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_morph_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">corner</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_corner_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_corner_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_corner_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_corner_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_corner_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_corner_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_corner_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_corner_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_corner_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_corner_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_corner_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_corner_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">gradient</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_gradient_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_gradient_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_gradient_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_gradient_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_gradient_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_gradient_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_gradient_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_gradient_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_gradient_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_gradient_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_gradient_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_gradient_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">fade</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_fade_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_fade_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_fade_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_fade_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_fade_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_fade_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_fade_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_fade_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_fade_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_fade_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_fade_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_fade_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">overlay</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_overlay_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_overlay_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_overlay_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_overlay_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_overlay_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_overlay_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_overlay_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_overlay_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_overlay_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_overlay_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_overlay_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_overlay_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh">events:</div>\
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">mouse:</div>\
                        <div class="width_100 float_left position_relative display opacity_1">ClientX: \
                        <div id="component_app_status_state_events_mouse_clientX" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">ClientY: \
                        <div id="component_app_status_state_events_mouse_clientY" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">AxisX: \
                        <div id="component_app_status_state_events_mouse_x_axis" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">AxisY: \
                        <div id="component_app_status_state_events_mouse_y_axis" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">Oriontation.Absolute: \
                        <div id="component_app_status_state_events_mouse_absolute" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">Oriontation.Alpha: \
                        <div id="component_app_status_state_events_mouse_alpha" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">Oriontation.Beta: \
                        <div id="component_app_status_state_events_mouse_beta" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">Oriontation.Gamma: \
                        <div id="component_app_status_state_events_mouse_gamma" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">acceleration.x: \
                        <div id="component_app_status_state_events_mouse_acceleration_x" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">acceleration.y: \
                        <div id="component_app_status_state_events_mouse_acceleration_y" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">acceleration.z: \
                        <div id="component_app_status_state_events_mouse_acceleration_z" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">accelerationIncludingGravity.x: \
                        <div id="component_app_status_state_events_mouse_accelerationIncludingGravity_x" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">accelerationIncludingGravity.y: \
                        <div id="component_app_status_state_events_mouse_accelerationIncludingGravity_y" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">accelerationIncludingGravity.z: \
                        <div id="component_app_status_state_events_mouse_accelerationIncludingGravity_z" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">rotationRate.Alpha: \
                        <div id="component_app_status_state_events_mouse_rotationRate_alpha" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">rotationRate.Beta: \
                        <div id="component_app_status_state_events_mouse_rotationRate_beta" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">rotationRate.Gamma: \
                        <div id="component_app_status_state_events_mouse_rotationRate_gamma" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">ux:</div>\
                        <div class="width_100 float_left position_relative display opacity_1">dimensions:</div>\
                        <div class="width_100 float_left position_relative display opacity_1">width: \
                        <div id="component_app_status_state_ux_dimensions_width" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">height: \
                        <div id="component_app_status_state_ux_dimensions_height" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">browser:</div>\
                        <div class="width_100 float_left position_relative display opacity_1">width: \
                        <div id="component_app_status_state_ux_browser_width" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">height: \
                        <div id="component_app_status_state_ux_browser_height" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        </div>\
                            \
                          ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9')+'\
                          \
                        ', 'width_100 float_left position_relative background_light_yellow_0'))+'\
                        \
                \
      </div>\
    </div>\
    '

let element_page_right = '\
    <div id="component_app_modal_element_page_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_7">\
      <div id="component_app_modal_element_page_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      \
      </div>\
    </div>\
    '

let element_pop_top = '\
    <div id="component_app_modal_element_pop_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_7">\
      <div id="component_app_modal_element_pop_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      \
      </div>\
    </div>\
    '

let element_pop_left = '\
  <div id="component_app_modal_element_pop_left" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_7">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_dark_yellow_9 margin_auto">\
    </div>\
  </div>\
  '

let element_pop_bottom = '\
        <div id="component_app_modal_element_pop_bottom" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_7">\
        \
        <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
        \
        </div>\
        \
        </div>\
  '

let element_pop_right = '\
  <div id="component_app_modal_element_pop_right" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_7">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
    </div>\
  </div>\
  '


let element_morph_top = '\
    <div id="component_app_modal_element_morph_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto z_index_7">\
    </div>\
    '

let element_morph_left = '\
    <div id="component_app_modal_element_morph_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_morph_bottom = '\
    <div id="component_app_modal_element_morph_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_morph_right = '\
    <div id="component_app_modal_element_morph_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_corner_top = '\
    <div id="component_app_modal_element_corner_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto z_index_7">\
    </div>\
    '

let element_corner_left = '\
    <div id="component_app_modal_element_corner_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_corner_bottom = '\
    <div id="component_app_modal_element_corner_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_corner_right = '\
    <div id="component_app_modal_element_corner_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_menu_top = '\
    <div id="component_app_modal_element_menu_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto z_index_7">\
    </div>\
    '

let element_menu_left = '\
    <div id="component_app_modal_element_menu_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_menu_bottom = '\
    <div id="component_app_modal_element_menu_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_menu_right = '\
    <div id="component_app_modal_element_menu_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_fade_top = '\
    <div id="component_app_modal_element_fade_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto z_index_7">\
    </div>\
    '

let element_fade_left = '\
    <div id="component_app_modal_element_fade_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_fade_bottom = '\
    <div id="component_app_modal_element_fade_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_fade_right = '\
    <div id="component_app_modal_element_fade_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_overlay_top = '\
    <div id="component_app_modal_element_overlay_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 z_index_1 margin_auto z_index_7">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    '

let element_overlay_left = '\
    <div id="component_app_modal_element_overlay_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto z_index_7">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    '

let element_overlay_bottom = '\
    <div id="component_app_modal_element_overlay_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto z_index_7">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    '

let element_overlay_right = '\
    <div id="component_app_modal_element_overlay_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto z_index_7">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    '

let element_gradient_top = '\
    <div id="component_app_modal_element_gradient_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto z_index_7">\
    </div>\
    '

let element_gradient_left = '\
    <div id="component_app_modal_element_gradient_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_gradient_bottom = '\
    <div id="component_app_modal_element_gradient_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '

let element_gradient_right = '\
    <div id="component_app_modal_element_gradient_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_7">\
    </div>\
    '


export default {
  element_gradient,
  element_gui_scroll_y,
  element_slider_1,
  element_slider_2,
  element_slider_3,
  element_slider_4,
  element_slider_5,
  element_slider_6,
  element_slider_7,
  component_app_stage_enneagon,
  element_container,
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
  element_effect_vignette,
  element_scroll_y,
  element_scroll_y_scrollbar,
  element_scroll_y_scrollbar_styled,
  element_nav_top,
  element_nav_left,
  element_nav_bottom,
  element_nav_right,
  element_pop_top,
  element_pop_left,
  element_pop_bottom,
  element_pop_right,
  element_page_top,
  element_page_left,
  element_page_bottom,
  element_page_right,
  element_menu_top,
  element_menu_left,
  element_menu_bottom,
  element_menu_right,
  element_morph_top,
  element_morph_left,
  element_morph_bottom,
  element_morph_right,
  element_fade_top,
  element_fade_left,
  element_fade_bottom,
  element_fade_right,
  element_gradient_top,
  element_gradient_left,
  element_gradient_bottom,
  element_gradient_right,
  element_corner_top,
  element_corner_left,
  element_corner_bottom,
  element_corner_right,
  element_overlay_top,
  element_overlay_left,
  element_overlay_bottom,
  element_overlay_right,
element_nownigel_logo,
element_dj_logo,
element_form_filter_1,
element_form_filter_2,
element_form_filter_3
}
