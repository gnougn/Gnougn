import from_index from '../index.js';

    let get_components_handled = () => {

        let state = from_index.Handle_return_state();

        let components = [

            // colors
            {
                component: 'grid_depth_90',
                component_state_transform: state.ui.colors.load_light_yellow_0.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.load_light_yellow_0.display,
                // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
            },
            {
                component: 'grid_depth_90',
                component_state_transform: state.ui.colors.load_light_yellow_0.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.load_light_yellow_0.display,
                // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
            },

        ];

        return components

    };

export default {
    get_components_handled

}
