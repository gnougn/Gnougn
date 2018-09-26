import from_index from '../index.js';

    let get_components_handled = () => {

        let state = from_index.Handle_return_state();

        let components = [

            // colors
            {
                component: 'component_app_particle_game_players_1',
                component_state_transform: state.ui.colors.load_light_yellow_0.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.load_light_yellow_0.display,
                // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
            },
            {
                component: 'element_interaction_player',
                component_state_transform: state.ui.colors.load_light_yellow_0.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.load_light_yellow_0.display,
                // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
            },
            {
                component: 'component_color_load_light_yellow_0',
                component_state_transform: state.ui.colors.load_light_yellow_0.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.load_light_yellow_0.display,
                // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
            },

            {
                component: 'component_app_gui_scroll_y',
                component_state_transform: state.ui.gui.scroll.y.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.scroll.y.display,
                // component_state_opacity:  state.ui.gui.scroll.y.opacity
            },

            {
                component: 'component_app_stage_enneagon',
                component_state_transform: state.ui.stage.enneagon.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.enneagon.display,
                // component_state_opacity:  state.ui.stage.enneagon.opacity
            },

            {
                component: 'component_app_stage_outside',
                component_state_transform: state.ui.stage.enneagon.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.enneagon.display,
                // component_state_opacity:  state.ui.stage.enneagon.opacity
            },

            {
                component: 'component_app_stage_sky',
                component_state_transform: state.ui.stage.enneagon.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.enneagon.display,
                // component_state_opacity:  state.ui.stage.enneagon.opacity
            },

            {
                component: 'component_app_stage_office',
                component_state_transform: state.ui.stage.enneagon.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.enneagon.display,
                // component_state_opacity:  state.ui.stage.enneagon.opacity
            },

            {
                component: 'component_app_stage_load_horizontal',
                component_state_transform: state.ui.stage.enneagon.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.enneagon.display,
                // component_state_opacity:  state.ui.stage.enneagon.opacity
            },

            {
                component: 'component_app_stage_load_verticle',
                component_state_transform: state.ui.stage.enneagon.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.enneagon.display,
                // component_state_opacity:  state.ui.stage.enneagon.opacity
            },

            {
                component: 'component_app_pieces_office',
                component_state_transform: state.ui.stage.enneagon.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.stage.enneagon.display,
                // component_state_opacity:  state.ui.stage.enneagon.opacity
            },

            // gui
            {
                component: 'component_app_gui_bottom_center',
                component_state_transform: state.ui.gui.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom.display,
                // component_state_opacity:  state.ui.gui.bottom.opacity
            },
            
            {
                component: 'component_app_gui_bottom_left',
                component_state_transform: state.ui.gui.bottom_left.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom_left.display,
                // component_state_opacity:  state.ui.gui.bottom_left.opacity
            },
            
            {
                component: 'component_app_gui_bottom_right',
                component_state_transform: state.ui.gui.bottom_right.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.bottom_right.display,
                // component_state_opacity:  state.ui.gui.bottom_right.opacity
            },
            
            {
                component: 'component_app_gui_top_center',
                component_state_transform: state.ui.gui.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top.display,
                // component_state_opacity:  state.ui.gui.top.opacity
            },
            
            {
                component: 'component_app_gui_top_left',
                component_state_transform: state.ui.gui.top_left.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top_left.display,
                // component_state_opacity:  state.ui.gui.top_left.opacity
            },
            
            {
                component: 'component_app_gui_top_right',
                component_state_transform: state.ui.gui.top_right.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.top_right.display,
                // component_state_opacity:  state.ui.gui.top_right.opacity
            },

            {
                component: 'component_app_gui_left',
                component_state_transform: state.ui.gui.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.left.display,
                // component_state_opacity:  state.ui.gui.left.opacity
            },
            
            {
                component: 'component_app_gui_right',
                component_state_transform: state.ui.gui.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.gui.right.display,
                // component_state_opacity:  state.ui.gui.right.opacity
            },

            // modal

            {
                component: 'component_app_modal_element_nav_top',
                component_state_transform: state.ui.modal.nav.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.nav.top.display,
                // component_state_opacity:  state.ui.modal.nav.top.opacity
            },

            {
                component: 'component_app_modal_element_nav_bottom',
                component_state_transform: state.ui.modal.nav.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.nav.bottom.display,
                // component_state_opacity:  state.ui.modal.nav.bottom.opacity
            },

            {
                component: 'component_app_modal_element_nav_left',
                component_state_transform: state.ui.modal.nav.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.nav.left.display,
                // component_state_opacity:  state.ui.modal.nav.left.opacity
            },

            {
                component: 'component_app_modal_element_nav_right',
                component_state_transform: state.ui.modal.nav.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.nav.right.display,
                // component_state_opacity:  state.ui.modal.nav.right.opacity
            },

            {
                component: 'component_app_modal_element_page_top',
                component_state_transform: state.ui.modal.page.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.page.top.display,
                // component_state_opacity:  state.ui.modal.page.top.opacity
            },

            {
                component: 'component_app_modal_element_page_bottom',
                component_state_transform: state.ui.modal.page.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.page.bottom.display,
                // component_state_opacity:  state.ui.modal.page.bottom.opacity
            },

            {
                component: 'component_app_modal_element_page_left',
                component_state_transform: state.ui.modal.page.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.page.left.display,
                // component_state_opacity:  state.ui.modal.page.left.opacity
            },

            {
                component: 'component_app_modal_element_page_right',
                component_state_transform: state.ui.modal.page.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.page.right.display,
                // component_state_opacity:  state.ui.modal.page.right.opacity
            },

            {
                component: 'component_app_modal_element_pop_top',
                component_state_transform: state.ui.modal.pop.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.pop.top.display,
                // component_state_opacity:  state.ui.modal.pop.top.opacity
            },

            {
                component: 'component_app_modal_element_pop_bottom',
                component_state_transform: state.ui.modal.pop.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.pop.bottom.display,
                // component_state_opacity:  state.ui.modal.pop.bottom.opacity
            },

            {
                component: 'component_app_modal_element_pop_left',
                component_state_transform: state.ui.modal.pop.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.pop.left.display,
                // component_state_opacity:  state.ui.modal.pop.left.opacity
            },

            {
                component: 'component_app_modal_element_pop_right',
                component_state_transform: state.ui.modal.pop.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.pop.right.display,
                // component_state_opacity:  state.ui.modal.pop.right.opacity
            },

            {
                component: 'component_app_modal_element_overlay_top',
                component_state_transform: state.ui.modal.overlay.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.overlay.top.display,
                // component_state_opacity:  state.ui.modal.overlay.top.opacity
            },

            {
                component: 'component_app_modal_element_overlay_bottom',
                component_state_transform: state.ui.modal.overlay.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.overlay.bottom.display,
                // component_state_opacity:  state.ui.modal.overlay.bottom.opacity
            },

            {
                component: 'component_app_modal_element_overlay_left',
                component_state_transform: state.ui.modal.overlay.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.overlay.left.display,
                // component_state_opacity:  state.ui.modal.overlay.left.opacity
            },

            {
                component: 'component_app_modal_element_overlay_right',
                component_state_transform: state.ui.modal.overlay.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.overlay.right.display,
                // component_state_opacity:  state.ui.modal.overlay.right.opacity
            },

            {
                component: 'component_app_modal_element_gradient_top',
                component_state_transform: state.ui.modal.gradient.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.gradient.top.display,
                // component_state_opacity:  state.ui.modal.gradient.top.opacity
            },

            {
                component: 'component_app_modal_element_gradient_bottom',
                component_state_transform: state.ui.modal.gradient.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.gradient.bottom.display,
                // component_state_opacity:  state.ui.modal.gradient.bottom.opacity
            },

            {
                component: 'component_app_modal_element_gradient_left',
                component_state_transform: state.ui.modal.gradient.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.gradient.left.display,
                // component_state_opacity:  state.ui.modal.gradient.left.opacity
            },

            {
                component: 'component_app_modal_element_gradient_right',
                component_state_transform: state.ui.modal.gradient.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.gradient.right.display,
                // component_state_opacity:  state.ui.modal.gradient.right.opacity
            },

            {
                component: 'component_app_modal_element_menu_top',
                component_state_transform: state.ui.modal.menu.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.menu.top.display,
                // component_state_opacity:  state.ui.modal.menu.top.opacity
            },

            {
                component: 'component_app_modal_element_menu_bottom',
                component_state_transform: state.ui.modal.menu.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.menu.bottom.display,
                // component_state_opacity:  state.ui.modal.menu.bottom.opacity
            },

            {
                component: 'component_app_modal_element_menu_left',
                component_state_transform: state.ui.modal.menu.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.menu.left.display,
                // component_state_opacity:  state.ui.modal.menu.left.opacity
            },

            {
                component: 'component_app_modal_element_menu_right',
                component_state_transform: state.ui.modal.menu.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.menu.right.display,
                // component_state_opacity:  state.ui.modal.menu.right.opacity
            },

            {
                component: 'component_app_modal_element_fade_top',
                component_state_transform: state.ui.modal.fade.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.fade.top.display,
                // component_state_opacity:  state.ui.modal.fade.top.opacity
            },

            {
                component: 'component_app_modal_element_fade_bottom',
                component_state_transform: state.ui.modal.fade.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.fade.bottom.display,
                // component_state_opacity:  state.ui.modal.fade.bottom.opacity
            },

            {
                component: 'component_app_modal_element_fade_left',
                component_state_transform: state.ui.modal.fade.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.fade.left.display,
                // component_state_opacity:  state.ui.modal.fade.left.opacity
            },

            {
                component: 'component_app_modal_element_fade_right',
                component_state_transform: state.ui.modal.fade.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.fade.right.display,
                // component_state_opacity:  state.ui.modal.fade.right.opacity
            },

            {
                component: 'component_app_modal_element_morph_top',
                component_state_transform: state.ui.modal.morph.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.morph.top.display,
                // component_state_opacity:  state.ui.modal.morph.top.opacity
            },

            {
                component: 'component_app_modal_element_morph_bottom',
                component_state_transform: state.ui.modal.morph.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.morph.bottom.display,
                // component_state_opacity:  state.ui.modal.morph.bottom.opacity
            },

            {
                component: 'component_app_modal_element_morph_left',
                component_state_transform: state.ui.modal.morph.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.morph.left.display,
                // component_state_opacity:  state.ui.modal.morph.left.opacity
            },

            {
                component: 'component_app_modal_element_morph_right',
                component_state_transform: state.ui.modal.morph.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.morph.right.display,
                // component_state_opacity:  state.ui.modal.morph.right.opacity
            },

            {
                component: 'component_app_modal_element_corner_top',
                component_state_transform: state.ui.modal.corner.top.transform,
                component_state_transform_true: 'transform_translate3d_top_100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.corner.top.display,
                // component_state_opacity:  state.ui.modal.corner.top.opacity
            },

            {
                component: 'component_app_modal_element_corner_bottom',
                component_state_transform: state.ui.modal.corner.bottom.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.modal.corner.bottom.display,
                // component_state_opacity:  state.ui.modal.corner.bottom.opacity
            },

            {
                component: 'component_app_modal_element_corner_left',
                component_state_transform: state.ui.modal.corner.left.transform,
                component_state_transform_true: 'transform_translate3d_left_100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.corner.left.display,
                // component_state_opacity:  state.ui.modal.corner.left.opacity
            },

            {
                component: 'component_app_modal_element_corner_right',
                component_state_transform: state.ui.modal.corner.right.transform,
                component_state_transform_true: 'transform_translate3d_left100',
                component_state_transform_false: 'transform_translate3d_left0',
                component_state_display: state.ui.modal.corner.right.display,
                // component_state_opacity:  state.ui.modal.corner.right.opacity
            },

            {
                component: 'element_gui_scroll_y',
                component_state_transform: state.ui.gui.scroll.y.transform,
                component_state_transform_true: 'transform_translate3d_top100',
                component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.gui.scroll.y.display,
                // component_state_opacity:  state.ui.gui.scroll.y.opacity
            },

            {
                component: 'wp_component_post-home_content',
                component_state_transform: state.ui.colors.load_light_yellow_0.transform,
                //component_state_transform_true: 'transform_translate3d_top_100',
                //component_state_transform_false: 'transform_translate3d_top0',
                component_state_display: state.ui.colors.load_light_yellow_0.display,
                // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
            },
        ];

        return components

    };

export default {
    get_components_handled

}
