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


let element_gradient = (info) => {
  let element = '\
  <div class="width_100 height_100vh float_left position_relative '+info+'">\
  \
  </div>\
  '
  return element
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
    <div id="element_slider_1_content'+random_int+'" class="width_100 float_left position_relative">'+element_slider_1_default_content()+'</div>\
    <div id="element_slider_1_content_anchorDown" class="z_index_1 gui_arrow_left width_5vh height_5vh float_left position_relative"></div>\
    <div id="element_slider_1_content_anchorUp" class="z_index_1 gui_arrow_right width_5vh height_5vh float_right position_relative"></div>\
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
    <div id="element_slider_2_content_anchorDown'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 height_5vh float_left position_relative"><div id="element_slider_2_content_anchorDown'+random_int+'" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
    <div id="element_slider_2_content'+random_int+'" class="width_100 float_left position_relative">'+element_slider_2_default_content()+'</div>\
    <div id="element_slider_2_content_anchorUp'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 height_5vh float_right position_relative"><div id="element_slider_2_content_anchorUp'+random_int+'" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
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
                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                \
                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
                \
                </span>\
                \
                <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                ' + i + '\
                </span>\
                \
                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                \
                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_9">\
                \
                </span>\
                \
                <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                ' + i + '\
                </span>\
                \
                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
    <div id="element_slider_3_pagination'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">'+element_slider_3_pagination()+'</div>\
    <div id="element_slider_3_content'+random_int+'" class="width_100 float_left position_relative">'+element_slider_3_default_content()+'</div>\
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
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
    <div id="element_slider_4_pagination'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">'+element_slider_4_pagination()+'</div>\
    <div id="element_slider_4_content'+random_int+'" class="width_100 float_left position_relative">'+element_slider_4_default_content()+'</div>\
    <div id="element_slider_4_content_anchorDown" class="z_index_1 gui_arrow_left width_5vh height_5vh float_left position_relative"></div>\
    <div id="element_slider_4_content_anchorUp" class="z_index_1 gui_arrow_right width_5vh height_5vh float_right position_relative"></div>\
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
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
    <div id="element_slider_5_pagination'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">'+element_slider_5_pagination()+'</div>\
    <div id="element_slider_5_content_anchorDown'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 height_5vh float_left position_relative"><div id="element_slider_5_content_anchorDown'+random_int+'" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
    <div id="element_slider_5_content'+random_int+'" class="width_100 float_left position_relative">'+element_slider_5_default_content()+'</div>\
    <div id="element_slider_5_content_anchorUp'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 height_5vh float_right position_relative"><div id="element_slider_5_content_anchorUp'+random_int+'" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
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
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
    <div id="element_slider_6_pagination'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 float_left position_relative">'+element_slider_6_pagination()+'</div>\
    <div id="element_slider_6_content_anchorDown'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 height_5vh float_left position_relative"><div id="element_slider_6_content_anchorDown'+random_int+'" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
    <div id="element_slider_6_content'+random_int+'" class="width_100 float_left position_relative">'+element_slider_6_default_content()+'</div>\
    <div id="element_slider_6_content_anchorUp'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 height_5vh float_right position_relative"><div id="element_slider_6_content_anchorUp'+random_int+'" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
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
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                      \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_webkit_box webkit_box_pack_center webkit_box_align  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_webkit_box webkit_box_pack_center webkit_box_align border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                      \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_webkit_box webkit_box_pack_center webkit_box_align">\
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
    <div class="display_webkit_box webkit_box_pack_center webkit_box_align width_25 float_left position_relative">\
      <div id="element_slider_7_pagination'+random_int+'" class="width_100 float_left position_relative">'+element_slider_7_pagination()+'</div>\
    </div>\
    \
    <div class="width_75 float_left position_relative">\
      <div id="element_slider_7_content_anchorDown'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 height_5vh float_left position_relative"><div id="element_slider_7_content_anchorDown'+random_int+'" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
      <div id="element_slider_7_content'+random_int+'" class="width_100 float_left position_relative">'+element_slider_7_default_content()+'</div>\
      <div id="element_slider_7_content_anchorUp'+random_int+'" class="display_webkit_box webkit_box_pack_center webkit_box_align width_100 height_5vh float_right position_relative"><div id="element_slider_7_content_anchorUp'+random_int+'" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
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

// navigations


let element_nav_top = '\
    <div id="component_app_modal_element_nav_top" class="easing_01 display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_10vh width_100 display_webkit_box webkit_box_pack_center webkit_box_align z_index_1 ">\
      \
    </div>\
    '

let element_nav_left = '\
    <div id="component_app_modal_element_nav_left" class="easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 left_0 bottom_0 height_100 width_10vh z_index_1 margin_auto">\
      \
      <div class="position_absolute bottom_0 left_0 right_0 float_left calc_02vh display_webkit_box webkit_box_pack_center webkit_box_align border_01vh_dark_yellow_9">\
      </div>\
      \
    </div>\
    '

let element_nav_bottom = '\
    <div id="component_app_modal_element_nav_bottom" class="easing_01 transform_translate3d_top0 display_none opacity_0 position_fixed bottom_0 left_0 right_0 height_10vh width_100 z_index_1 display_webkit_box webkit_box_pack_center webkit_box_align margin_auto">\
      \
    </div>\
    '

let element_nav_right = '\
    <div id="component_app_modal_element_nav_right" class="easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 bottom_0 right_0 height_100 width_10vh z_index_1 margin_auto">\
      \
    </div>\
    '


let element_page_top = '\
    <div id="component_app_modal_element_page_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_1 margin_auto">\
      <div id="component_app_modal_element_page_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
      \
      \
      </div>\
    </div>\
    '

let element_page_left = '\
    <div id="component_app_modal_element_page_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_1 margin_auto">\
      <div id="component_app_modal_element_page_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
      \
      \
      </div>\
    </div>\
    '

let element_page_bottom = '\
    <div id="component_app_modal_element_page_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto">\
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
    <div id="component_app_modal_element_page_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto">\
      <div id="component_app_modal_element_page_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      \
      </div>\
    </div>\
    '

let element_pop_top = '\
    <div id="component_app_modal_element_pop_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100  margin_auto overflow_hidden">\
      <div id="component_app_modal_element_pop_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      \
      </div>\
    </div>\
    '

let element_pop_left = '\
  <div id="component_app_modal_element_pop_left" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100  margin_auto">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_dark_yellow_9 margin_auto">\
    </div>\
  </div>\
  '

let element_pop_bottom = '\
        <div id="component_app_modal_element_pop_bottom" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100  margin_auto">\
        \
        <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
        \
        </div>\
        \
        </div>\
  '

let element_pop_right = '\
  <div id="component_app_modal_element_pop_right" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100  margin_auto">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
    </div>\
  </div>\
  '


let element_morph_top = '\
    <div id="component_app_modal_element_morph_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto">\
    </div>\
    '

let element_morph_left = '\
    <div id="component_app_modal_element_morph_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto">\
    </div>\
    '

let element_morph_bottom = '\
    <div id="component_app_modal_element_morph_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto">\
    </div>\
    '

let element_morph_right = '\
    <div id="component_app_modal_element_morph_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto">\
    </div>\
    '

let element_corner_top = '\
    <div id="component_app_modal_element_corner_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto">\
    </div>\
    '

let element_corner_left = '\
    <div id="component_app_modal_element_corner_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto">\
    </div>\
    '

let element_corner_bottom = '\
    <div id="component_app_modal_element_corner_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto">\
    </div>\
    '

let element_corner_right = '\
    <div id="component_app_modal_element_corner_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto">\
    </div>\
    '

let element_menu_top = '\
    <div id="component_app_modal_element_menu_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto">\
    </div>\
    '

let element_menu_left = '\
    <div id="component_app_modal_element_menu_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto">\
    </div>\
    '

let element_menu_bottom = '\
    <div id="component_app_modal_element_menu_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto">\
    </div>\
    '

let element_menu_right = '\
    <div id="component_app_modal_element_menu_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto">\
    </div>\
    '

let element_fade_top = '\
    <div id="component_app_modal_element_fade_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto">\
    </div>\
    '

let element_fade_left = '\
    <div id="component_app_modal_element_fade_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto">\
    </div>\
    '

let element_fade_bottom = '\
    <div id="component_app_modal_element_fade_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto">\
    </div>\
    '

let element_fade_right = '\
    <div id="component_app_modal_element_fade_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto">\
    </div>\
    '

let element_overlay_top = '\
    <div id="component_app_modal_element_overlay_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 z_index_1 margin_auto">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    '

let element_overlay_left = '\
    <div id="component_app_modal_element_overlay_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    '

let element_overlay_bottom = '\
    <div id="component_app_modal_element_overlay_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    '

let element_overlay_right = '\
    <div id="component_app_modal_element_overlay_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    '

let element_gradient_top = '\
    <div id="component_app_modal_element_gradient_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh z_index_1 margin_auto">\
    </div>\
    '

let element_gradient_left = '\
    <div id="component_app_modal_element_gradient_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto">\
    </div>\
    '

let element_gradient_bottom = '\
    <div id="component_app_modal_element_gradient_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto">\
    </div>\
    '

let element_gradient_right = '\
    <div id="component_app_modal_element_gradient_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto">\
    </div>\
    '


export default {
  element_gradient,
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
}
