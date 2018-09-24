import from_index from '../index.js';

let state = '';

let Handle_ui = () => {

    state = from_index.Handle_return_state();

    if (state.events.mouse.up == true) {

        if (document.getElementById('component_app_interaction_hands') != null) {
            document.getElementById('component_app_interaction_hand').classList.add('interaction_hands');
        };
    };

    if (state.events.mouse.up == false) {

        if (document.getElementById('component_app_interaction_hands') != null) {
            document.getElementById('component_app_interaction_hand').classList.remove('interaction_hands');
        };
    };

    // gui
    if (document.getElementById('component_app_gui_logo_combo_feature_container') != null) {
        let component_app_gui_logo_combo_feature_container = document.getElementById('component_app_gui_logo_combo_feature_container');
        component_app_gui_logo_combo_feature_container.style =
            'height: ' + (2 * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (2 * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + (state.events.mouse.drop.clientY) + 'px;' +
            'left: ' + (state.events.mouse.drop.clientX) + 'px;';
    };

    if (document.getElementById('logo_load_container') != null) {
        let logo_load_container = document.getElementById('logo_load_container');
        logo_load_container.style =
            'height: ' + (2 * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (2 * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + (state.events.mouse.drag.clientY) + 'px;' +
            'left: ' + (state.events.mouse.drag.clientX) + 'px;';
    };

    if (document.getElementById('component_app_interaction_hands') != null) {
        let component_app_interaction_hands = document.getElementById('component_app_interaction_hands');
        component_app_interaction_hands.style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;' +
            'bottom: ' + 0 + 'px;' +
            'left: ' + (state.events.mouse.drop.clientX) + 'px;';
    };

    if (document.getElementById('component_app_pieces_office_shoplights') != null) {
        let component_app_pieces_office_shoplights = document.getElementById('component_app_pieces_office_shoplights');
        component_app_pieces_office_shoplights.style =
            'height: ' + (state.ui.stage.shoplight.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.stage.shoplight.width * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + (state.ui.stage.shoplight.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.stage.shoplight.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };
    if (document.getElementById('component_app_gui_key') != null) {
        let component_app_gui_key = document.getElementById('component_app_gui_key');
        component_app_gui_key.style =
            'height: ' + (state.ui.gui.key.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.gui.key.width * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + (state.events.mouse.drag.clientY) + 'px;' +
            'left: ' + (state.events.mouse.drag.clientX) + 'px;';
    };

    if (document.getElementById('component_app_gui_keyhole') != null) {
        let component_app_gui_keyhole = document.getElementById('component_app_gui_keyhole');
        component_app_gui_keyhole.style =
            'height: ' + (state.ui.gui.key.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.gui.key.width * (state.ux.dimensions.width8)) + 'px;' +
            'top: ' + (state.ui.gui.key.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.gui.key.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };
    
    // 10 is half the size of the element_ball
    // It center the positioning point to the center of the element_ball
    if (document.getElementById('element_ball') != null) {
        document.getElementById('element_ball').style.top = ((state.events.mouse.gamma / state.ux.dimensions.height) * 100) + "%";
        document.getElementById('element_ball').style.left = ((state.events.mouse.beta / state.ux.dimensions.width) * 100) + "%";
    };

    // pieces
    // - workspace
    if (document.getElementById('component_app_pieces_workspace') != null) {
        document.getElementById('component_app_pieces_workspace').style =
            'height: ' + (state.ui.stage.workspace.desk.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.stage.workspace.desk.width * (state.ux.dimensions.width8)) + 'px;' +
            'bottom: ' + (state.ui.stage.workspace.desk.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.stage.workspace.desk.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };

    // interaction
    // - game
    // - player_1
    if (document.getElementById('component_app_interaction_game_players_1_body') != null) {
        document.getElementById('component_app_interaction_game_players_1_body').style =
            'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
            'bottom: ' + (state.ui.interaction.player_1.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.interaction.player_1.xaxis * (state.ux.dimensions.width8)) + 'px;';

    };

    if (document.getElementById('component_app_particle_game_players_1') != null) {
        document.getElementById('component_app_particle_game_players_1').style =
            'height: ' + (state.ui.interaction.player_1.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.interaction.player_1.width * (state.ux.dimensions.width8)) + 'px;' +
            'bottom: ' + (state.ui.interaction.player_1.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.interaction.player_1.xaxis * (state.ux.dimensions.width8)) + 'px;';

    };

    // Enemy
    if (document.getElementById('component_app_interaction_enemy') != null) {
        document.getElementById('component_app_interaction_enemy').style =
            'height: ' + (state.ui.interaction.enemy.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.interaction.enemy.width * (state.ux.dimensions.width8)) + 'px;' +
            'bottom: ' + (state.ui.interaction.enemy.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.interaction.enemy.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };

    if (document.getElementById('bounce') != null) {
        document.getElementById('bounce').style =
            'top: ' + (state.ui.interaction.bounce.yaxis * (state.ux.dimensions.height8)) + 'px; \
        left: ' + (state.ui.interaction.bounce.xaxis * (state.ux.dimensions.width8)) + 'px ;';
    };
    if (document.getElementById('track_x') != null) {
        document.getElementById('track_x').style =
            'top: ' + (0) + 'px; \
        left: ' + (state.events.mouse.clientX) + 'px ;';
    };
    if (document.getElementById('track_y') != null) {
        document.getElementById('track_y').style =
            'top: ' + (state.events.mouse.clientY) + 'px; \
        left: ' + (0) + 'px ;';
    };
    if (document.getElementById('component_app_interaction_helper_body') != null) {
        document.getElementById('component_app_interaction_helper_body').style =
            'height: ' + (state.ui.interaction.helper.height * (state.ux.dimensions.height8)) + 'px;' +
            'width: ' + (state.ui.interaction.helper.width * (state.ux.dimensions.width8)) + 'px;' +
            'bottom: ' + (state.ui.interaction.helper.yaxis * (state.ux.dimensions.height8)) + 'px;' +
            'left: ' + (state.ui.interaction.helper.xaxis * (state.ux.dimensions.width8)) + 'px;';
    };

    //stage
    // Enneagon
    if (document.getElementById('component_app_stage_enneagon') != null) {
        document.getElementById('component_app_stage_enneagon').style = "transform: translate3d(" +
            (state.ui.stage.enneagon.xaxis * 100) + "%, " +
            (state.ui.stage.enneagon.yaxis * 100) + "%, 0);"
    };

    if (state.events.mouse != null) {
        
        /*
        if (state.events.mouse.enter == true) {
            state.ui.modal.nav.top.transform = false;
            state.ui.modal.nav.bottom.transform = false;
            state.ui.modal.nav.left.transform = false;
            state.ui.modal.nav.right.transform = false;
        };

        if (state.events.mouse.leave == true) {
            state.ui.modal.nav.top.transform = true;
            state.ui.modal.nav.bottom.transform = true;
            state.ui.modal.nav.left.transform = true;
            state.ui.modal.nav.right.transform = true;
        };
        */

        if (
            (state.events.mouse.down == true) &&
            (((state.events.mouse.clientX > (state.ux.dimensions.width8 * 4)) && (state.events.mouse.clientY > (state.ux.dimensions.height8 * 3))) && ((state.events.mouse.clientX < (state.ux.dimensions.width8 * 5)) && (state.events.mouse.clientY < (state.ux.dimensions.height8 * 4))))
        ) {

            alert('mouse is in x_axis:5 x y_axis:4 grid');
        };
    };

    // component_app_pieces_workspace_chair_1
    if ((state.ui.interaction.player_1.display == true) && (document.getElementById('component_app_interaction_game_players_1_body') != null)) {
        if (state.ui.interaction.player_1.xaxis == state.ui.stage.workspace.desk.xaxis) {
            state.data.score.current.area += 1;
            document.getElementById('component_app_pieces_workspace_chair_1').classList.remove('piece_workspace_chair_0_0');
            document.getElementById('component_app_pieces_workspace_chair_1').classList.add('piece_workspace_chair_sitting_0_0');
        };

        if (state.ui.interaction.player_1.xaxis != state.ui.stage.workspace.desk.xaxis) {
            document.getElementById('component_app_pieces_workspace_chair_1').classList.remove('piece_workspace_chair_sitting_0_0');
            document.getElementById('component_app_pieces_workspace_chair_1').classList.add('piece_workspace_chair_0_0');
        };
    };

    // component_app_interaction_game_players_1_body
    if ((state.ui.stage.workspace.desk.display == true) && (document.getElementById('component_app_interaction_game_players_1_body') != null)) {
        if (state.ui.interaction.player_1.xaxis == state.ui.stage.workspace.desk.xaxis) {
            document.getElementById('component_app_interaction_game_players_1_body').classList.remove('opacity_1');
            document.getElementById('component_app_interaction_game_players_1_body').classList.add('opacity_0');
        };

        if (state.ui.interaction.player_1.xaxis != state.ui.stage.workspace.desk.xaxis) {
            document.getElementById('component_app_interaction_game_players_1_body').classList.remove('opacity_0');
            document.getElementById('component_app_interaction_game_players_1_body').classList.add('opacity_1');
        };
    };
};

export default {
    Handle_ui
}