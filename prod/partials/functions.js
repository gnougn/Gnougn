
import from_index from '../index.js';

let from_Import = () => {
    console.log('from functions');
};


// 5. Functions
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (innerHTML, classString, idString, index) => {
    let g = document.createElement('div');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;

    g.addEventListener( 'click', function(){
        from_index.Handle_check_route(this.innerText, '');
    } );
    
    return g
};

let Generate_new_link = (innerHTML, classString, idString, index) => {
    let g = document.createElement('a');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;

    g.addEventListener( 'click', function(){
        from_index.Handle_check_route(this.innerText, '');
    } );

    return g
};

let Generate_new_span = (innerHTML, classString, idString, index) => {
    let g = document.createElement('span');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_li = (innerHTML, classString, idString, index) => {
    let g = document.createElement('li');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

// Handles
let Toggle_functions_IF_State = (function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) => {

    // Function Check # 1
    (function() {
        if (Ui_State == true) {
            function_one_if_state_true(id_tag);
        }

        if (Ui_State == false) {
            function_two_if_state_false(id_tag);
        }
    })();
};

let Toggle_classes_IF_State = (addThisClass_if_state_false, addThisClass_if_state_true, id_Tag, Ui_State) => {

    let MANIPULATED = document.getElementById(id_Tag);

    if (MANIPULATED != null) {

        if (Ui_State == true) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {

                // remove item after buffer
                setTimeout(function() {

                    MANIPULATED.classList.remove(addThisClass_if_state_false);
                    MANIPULATED.classList.add(addThisClass_if_state_true);

                }, 1);

                return;
            };

        };

        if (Ui_State == false) {

            if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

                // remove item after buffer
                setTimeout(function() {
                    MANIPULATED.classList.add(addThisClass_if_state_false);
                    MANIPULATED.classList.remove(addThisClass_if_state_true);
                }, 1);

                return;
            };
        };

    };
};

let Toggle_display_and_opacity_on_with_no_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('display_none');
                MANIPULATED.classList.add('display');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_0');
                MANIPULATED.classList.add('opacity_1');

            }, 100);

            return;
        };
    };
};

let Toggle_display_and_opacity_off_with_delay = (id) => {

    let MANIPULATED = document.getElementById(id);

    if (MANIPULATED != null) {

        if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

            // remove item immediatly
            setTimeout(function() {
                MANIPULATED.classList.remove('opacity_1');
                MANIPULATED.classList.add('opacity_0');
            }, 0);

            // remove item after buffer
            setTimeout(function() {
                MANIPULATED.classList.remove('display');
                MANIPULATED.classList.add('display_none');
            }, 100);

            return;
        };
    };
};

from_Import();

export default {
  from_Import,
  Generate_new_link,
    Generate_new_fragment,
    Generate_new_div,
    Generate_new_span,
    Generate_new_li,
    Toggle_functions_IF_State,
    Toggle_classes_IF_State,
    Toggle_display_and_opacity_on_with_no_delay,
    Toggle_display_and_opacity_off_with_delay,
}