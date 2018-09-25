let element_grid_cross = () => {
  let component = '\
    <div id="grid_cross" class="display_none opacity_0 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto grid_cross">\
    </div>\
  ';

  return component
};

let element_grid_depth_90 = () => {
  let component = '\
    <div id="grid_depth_90" class="display_none opacity_0 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto grid_depth_90">\
    </div>\
  ';

  return component
};

export default {
  element_grid_cross,
  element_grid_depth_90
}
