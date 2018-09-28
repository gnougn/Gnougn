import imported_elements from './elements';

let state = '';

let colors = [
  {
    parent: 'component_app',
    id: '',
    classList: '',
    innerHTML: `

    <div id="component" class="background_light_yellow_1 width_100 height_100vh float_left position_fixed display opacity_1 overflow_hidden">
      <div id="" class="position_absolute left_0 right_0 bottom_-5 margin_auto width_75 height_75 overflow_hidden float_left gui_logo_combo">
      </div>

      <div id="" class="position_absolute left_0 bottom_0 margin_auto width_20 height_20 overflow_hidden float_left gui_logo_combo">
      </div>

      <div id="" class="position_absolute  right_0 bottom_0 margin_auto width_20 height_20 overflow_hidden float_left gui_logo_combo_layers">
      </div>

      <div id="" class="position_absolute right_0 top_0 margin_auto width_20 height_20 overflow_hidden float_left gui_menu_logo">
      </div>

      <div id="" class="position_absolute left_0 top_0 margin_auto width_20 height_20 overflow_hidden float_left gui_menu_logo_2">
      </div>

    </div>

    <div id="component" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_y">
      <div id="component" class="width_100 height_100vh float_left position_relative display opacity_1 overflow_hidden">
      </div>
      <div id="component" class="background_light_yellow_9 width_100 height_100vh float_left position_relative display opacity_1 overflow_hidden">
      </div>
    </div>

    <div id="component" class="background_light_yellow_1 width_100 height_10vh float_left position_fixed left_0 bottom_0 display opacity_1 overflow_hidden opacity_05">
    </div>
    `,
  }
];

export default {
  colors
}
