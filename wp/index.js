/*
es2015 or es6

Phrases to empasises:
  1) Imports
  2) Best practices
  3) Delclarions
  4) Assignments
  5) Initialize
  6) Higher Order Functions - Returning state after filter/sort
  7) Closures - Data Encapsulation for particular concern (If game items choose path do "WHAT?")
  8) Boilerplate - allows Intermediate control of state ie (Filter and return result)
  9) Edge case
  10) Case study

Questions To Answer:
  - Node Bots?
  - Social Presents?
  - brand 6

Question To know the answers to:
  use strict?

Design Patterns
  Creational patterns:
  - Module
  - Builder
  - Module
  Structural patterns:
  - Facade
  - Composites
  - Module
  Behavioral patterns:
  - Observer
  - Static
  - Reactionary

Development Pattern
  - test driven development

Programming Pattern
  - O.O.P.
  - Functional - Partial App & Currying(Seperating concerns with functions to provide fewer parameters)
  - procedural
  - event driven
  - imperative
  - declarative

Order of operations
  1) Imports
  2) Delclarions
  3) Assignments
  4) Initialize
  5) Closures
  5) Lifecycle Hooks

*/


// Imports
'use strict';

// Imports
import imported_state from './partials/state';
import imported_functions from './partials/functions';
import imported_events from './partials/events';
import imported_defaults from './partials/defaults';
import imported_components from './partials/components';
// import imported_generators from './partials/generators';
// import imported_elements from './partials/elements';
import imported_values from './partials/values';
import imported_ui from './partials/ui';


// Declaration
let state;
let functions;
let defaults;
let components;

// Assignment
state = imported_state.default_state;
functions = imported_functions;
defaults = imported_defaults;
components = imported_components;

// Initialization
let config = {
    apiKey: "AIzaSyDXIXMGC_38yav7wo7E5A8ZwGK7vNavpxk",
    authDomain: "gnougn-efdc5.firebaseapp.com",
    databaseURL: "https://gnougn-efdc5.firebaseio.com",
    projectId: "gnougn-efdc5",
    storageBucket: "gnougn-efdc5.appspot.com",
    messagingSenderId: "668732840020"
};

// Functions
firebase.initializeApp(config);

// Closures
let Handle_Firebase_Refs_and_Render = () => {
    console.log('Handle_Firebase_Refs');
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const wordpressRef = gnougnRef.child('wordpress');
    console.log('Handle_Firebase_Refs');

    (() => {
        rootRef.on('value', function(snapshot) {
            var obj = snapshot.val();
            state.data.firebase = obj;
            console.log('state.data.firebase');
            console.log(state.data.firebase);
        });

        state.data.refs = false;
    })();

    // set firebase data
    (() => {

        var Handle_Repeat_Firebase_Validation = setInterval(function() {

            // repeat until refs are set
            if (state.data.refs == false) {

                let temp = state.data.firebase;
                // console.log('firbase objects -> firbase array');

                if ((temp.gnougn.abilities) != null) {
                    // abilities
                    // set objects to array - part 1

                    let result_abilities = Object.keys(temp.gnougn.abilities).map(function(key) {
                        return temp.gnougn.abilities[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.abilities = result_abilities;
                    // console.log('abilities');
                    // console.log(state.data.firebase.gnougn.abilities);
                };

                if ((temp.gnougn.library) != null) {
                    // library
                    // set objects to array - part 1
                    let result_library = Object.keys(temp.gnougn.library).map(function(key) {
                        return temp.gnougn.library[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.library = result_library;
                    // console.log('library');
                    // console.log(state.data.firebase.gnougn.library);
                };


                if ((temp.gnougn.partners) != null) {
                    // partners
                    // set objects to array - part 1
                    let result_partners = Object.keys(temp.gnougn.partners).map(function(key) {
                        return temp.gnougn.partners[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.partners = result_partners;
                    // console.log('partners');
                    // console.log(state.data.firebase.gnougn.partners);
                };

                if ((temp.gnougn.services) != null) {
                    // services
                    // set objects to array - part 1
                    let result_services = Object.keys(temp.gnougn.services).map(function(key) {
                        return temp.gnougn.services[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.services = result_services;
                    // console.log('services');
                    // console.log(state.data.firebase.gnougn.services);
                };

                if ((temp.gnougn.roster) != null) {
                    // roster
                    // set objects to array - part 1
                    let result_roster = Object.keys(temp.gnougn.roster).map(function(key) {
                        return temp.gnougn.roster[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.roster = result_roster;
                    // console.log('roster');
                    // console.log(state.data.firebase.gnougn.roster);
                };

                if ((temp.gnougn.skills) != null) {
                    // skills
                    // set objects to array - part 1
                    let result_skills = Object.keys(temp.gnougn.skills).map(function(key) {
                        return temp.gnougn.skills[key];
                    });

                    // set objects to array - part 2
                    state.data.firebase.gnougn.skills = result_skills;
                    // console.log('skills');
                    // console.log(state.data.firebase.gnougn.skills);
                };


                if ((temp.gnougn.skills) != null) {

                    console.log(state.data.firebase.gnougn);

                    // Render listtings to front_end
                    setTimeout(function() {
                        state.data.refs = true;
                        Handle_firebase_render();

                        // check ui state
                        setTimeout(function() {

                            setInterval(function() {
                                Handle_check_states();
                            }, 1000 / 24);

                        }, 1000);
                    }, 0);

                };

            };

        }, 0);

    })();
};

let Handle_firebase_render = () => {

    // render library
    (() => {

        setTimeout(function() {

            // *********************** "Order of operations" ************************

            // 1.) set array
            let array = state.data.firebase;

            // 2.) sort array
            let array_gnougn_library = array.gnougn.library.sort(find_sort());
            let filtered_array_gnougn_library = [];

            // 3.) filter array
            for (var i = 0; i < array_gnougn_library.length; i++) {
                if (array_gnougn_library[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_library.push(array_gnougn_library[i]);
                };
            };

            // 4.) empty ol element
            document.getElementById('element_ol_firebase_library').innerHTML = '';

            // 5.) fill ol element
            for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
                // console.log(filtered_array_gnougn_library[i]);
                document.getElementById('element_ol_firebase_library').appendChild(imported_functions.Generate_new_fragment.appendChild(
                  imported_functions.Generate_new_li(filtered_array_gnougn_library[i])
                    )
                )
            }

            // 6.) add events later
            find_view();
            find_type();

        }, 0);

    })();

    state.data.refs = true;

};

let Handle_return_state = () => { return state };

let Handle_check_route = (route, info) => {

    state.app.route = route;

    (() => {

        // null
        if (route == 'null') {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                window.scrollTo(20, 0);

                state.ui.colors.load_light_yellow_0.transform = true;
                state.ui.colors.load_light_yellow_0.display = true;

            };

            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                    // reset

                    // stages

                    // particles

                    // interaction

                    // modals
                    setTimeout(function() {
                        // - nav
                        state.ui.modal.nav.top.display = true;
                        state.ui.modal.nav.top.transform = true;
                        state.ui.modal.nav.bottom.display = true;
                        state.ui.modal.nav.bottom.transform = true;
                        state.ui.modal.nav.left.display = true;
                        state.ui.modal.nav.left.transform = true;
                        state.ui.modal.nav.right.display = true;
                        state.ui.modal.nav.right.transform = true;
                    }, 2000);

                    // colors
                    setTimeout(function() {
                        state.ui.colors.load_light_yellow_0.display = true;
                    }, 1000);

                    // gui
                    setTimeout(function() {

                        state.ui.gui.top.display = false;
                        state.ui.gui.top.opacity = false;
                        state.ui.gui.top.transform = false;

                        state.ui.gui.top_right.display = false;
                        state.ui.gui.top_right.opacity = false;
                        state.ui.gui.top_right.transform = false;

                        state.ui.gui.top_left.display = true;
                        state.ui.gui.top_left.opacity = true;
                        state.ui.gui.top_left.transform = false;

                        state.ui.gui.right.display = false;
                        state.ui.gui.right.opacity = false;
                        state.ui.gui.right.transform = false;

                        state.ui.gui.left.display = false;
                        state.ui.gui.left.opacity = false;
                        state.ui.gui.left.transform = false;

                        state.ui.gui.bottom.display = false;
                        state.ui.gui.bottom.opacity = false;
                        state.ui.gui.bottom.transform = false;

                        state.ui.gui.bottom_right.display = false;
                        state.ui.gui.bottom_right.opacity = false;
                        state.ui.gui.bottom_right.transform = false;

                        state.ui.gui.bottom_left.display = false;
                        state.ui.gui.bottom_left.opacity = false;
                        state.ui.gui.bottom_left.transform = false;

                        state.ui.gui.scroll.y.display = false;
                        state.ui.gui.scroll.y.opacity = false;
                        state.ui.gui.scroll.y.transform = true;

                        state.ui.stage.enneagon.display = true;
                        state.ui.stage.enneagon.opacity = true;
                        state.ui.stage.enneagon.transform = false;

                    }, 1000);

            };

        };

        // ON TO Preview
        if (route == 'library_preview') {

            // function start (Preview)
            let number = Math.floor((Math.random() * 1000000000000000) + 1);

            document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
            document.getElementById('component_app_modal_element_pop_top_content').innerHTML += info;
            document.getElementById('component_app_modal_element_pop_top_content').innerHTML += '<div id="close'+number+'" class="gui_close width_10vh height_10vh float_left position_relative"></div>';
            document.getElementById('component_app_modal_element_pop_top_content').innerHTML += '<div id="enter'+number+'" class="gui_arrow_left width_10vh height_10vh float_left position_relative"></div>';

            state.ui.modal.pop.top.display = true;

            setTimeout(function() {
                state.ui.modal.pop.top.transform = false;
            }, 200);

            // add event listeners
            setTimeout(() => {

                document.getElementById('close'+number+'').addEventListener('click', (event) => {
                    // function start (Preview close)
                    state.ui.modal.pop.top.display = true;
                    state.ui.modal.pop.top.transform = true;
                });

                // ON TO DETAIL
                document.getElementById('enter'+number+'').addEventListener('click', (event) => {

                    // function start (Detail)
                    document.getElementById('component_app_modal_element_page_top_content').innerHTML = '<div id="component_app_modal_element_page_top_content_close'+number+'" class="gui_close width_10vh height_10vh float_left position_relative"></div>';
                    document.getElementById('component_app_modal_element_page_top_content').innerHTML += '<div id="component_app_modal_element_page_top_content_enter'+number+'" class="gui_arrow_left width_10vh height_10vh float_left position_relative"></div>';
                    
                    state.ui.modal.page.top.display = true;

                    setTimeout(() => {
                        state.ui.modal.page.top.transform = false;
                    }, 200);

                    // add event listeners
                    setTimeout(() => {

                        document.getElementById('component_app_modal_element_page_top_content_close'+number+'').addEventListener('click', (event) => {    
                            // function start (Preview close)
                            state.ui.modal.page.top.display = true;
                            state.ui.modal.page.top.transform = true;
                          });

                        // ON TO TOUR
                        document.getElementById('component_app_modal_element_page_top_content_enter'+number+'').addEventListener('click', (event) => {

                            state.ui.modal.overlay.top.display = true;
                            state.ui.modal.overlay.top.transform = true;

                            // function start (Tour)
                            document.getElementById('component_app_modal_element_overlay_top_content').innerHTML = '<div id="component_app_modal_element_overlay_top_content_close'+number+'" class="gui_close width_10vh height_10vh float_left position_relative"></div>';
                            document.getElementById('component_app_modal_element_overlay_top_content').innerHTML += '<div id="component_app_modal_element_overlay_top_content_enter'+number+'" class="gui_arrow_left width_10vh height_10vh float_left position_relative"></div>';

                            state.ui.modal.overlay.top.display = true;

                            setTimeout(() => {
                                state.ui.modal.overlay.top.transform = false;
                            }, 200);

                            // add event listeners
                            setTimeout(() => {
                                document.getElementById('component_app_modal_element_overlay_top_content_close'+number+'').addEventListener('click', (event) => {
                                    
                                    // function start (Preview close)
                                    state.ui.modal.overlay.top.display = true;
                                    state.ui.modal.overlay.top.transform = true;
                                  });

                                // ON TO DONE
                                document.getElementById('component_app_modal_element_overlay_top_content_enter'+number+'').addEventListener('click', (event) => {

                                    alert('DONE!');

                                  });

                            }, 1000);

                          });

                    }, 1000);

                  });

            }, 1000);

        };

        if (route == 'reset') {

            // gui
            state.ui.gui.top.display = false;
            state.ui.gui.top.opacity = false;
            state.ui.gui.top.transform = false;
            state.ui.gui.top_left.display = false;
            state.ui.gui.top_left.opacity = false;
            state.ui.gui.top_left.transform = false;
            state.ui.gui.top_right.display = false;
            state.ui.gui.top_right.opacity = false;
            state.ui.gui.top_right.transform = false;
            state.ui.gui.left.display = false;
            state.ui.gui.left.opacity = false;
            state.ui.gui.left.transform = false;
            state.ui.gui.right.display = false;
            state.ui.gui.right.opacity = false;
            state.ui.gui.right.transform = false;
            state.ui.gui.bottom.display = false;
            state.ui.gui.bottom.opacity = false;
            state.ui.gui.bottom.transform = false;
            state.ui.gui.bottom_left.display = false;
            state.ui.gui.bottom_left.opacity = false;
            state.ui.gui.bottom_left.transform = false;
            state.ui.gui.bottom_right.display = false;
            state.ui.gui.bottom_right.opacity = false;
            state.ui.gui.bottom_right.transform = false;

            // state.ui.gui.scroll.y.display = false;
            // state.ui.gui.scroll.y.opacity = false;
            // state.ui.gui.scroll.y.transform = false;

            // - modal

            // -- nav
            state.ui.modal.nav.top.display = false;
            state.ui.modal.nav.top.transform = false;
            state.ui.modal.nav.bottom.display = false;
            state.ui.modal.nav.bottom.transform = false;
            state.ui.modal.nav.left.display = false;
            state.ui.modal.nav.left.transform = false;
            state.ui.modal.nav.right.display = false;
            state.ui.modal.nav.right.transform = false;

            // - - page
            state.ui.modal.page.top.display = false;
            state.ui.modal.page.top.transform = false;
            state.ui.modal.page.bottom.display = false;
            state.ui.modal.page.bottom.transform = false;
            state.ui.modal.page.left.display = false;
            state.ui.modal.page.left.transform = false;
            state.ui.modal.page.right.display = false;
            state.ui.modal.page.right.transform = false;

            // - - pop
            state.ui.modal.pop.top.display = false;
            state.ui.modal.pop.top.transform = false;
            state.ui.modal.pop.bottom.display = false;
            state.ui.modal.pop.bottom.transform = false;
            state.ui.modal.pop.left.display = false;
            state.ui.modal.pop.left.transform = false;
            state.ui.modal.pop.right.display = false;
            state.ui.modal.pop.right.transform = false;
        
        };

        if (route == 'start') {

            state.ui.gui.top_right.display = true;
            state.ui.gui.top.display = true;
            state.ui.gui.top_left.display = true;

            state.ui.gui.left.display = true;
            state.ui.gui.right.display = true;

            state.ui.gui.bottom_right.display = true;
            state.ui.gui.bottom.display = true;
            state.ui.gui.bottom_left.display = true;

            state.ui.modal.nav.bottom.transform = true;
            state.ui.modal.nav.left.transform = true;
            state.ui.modal.nav.top.transform = true;
            state.ui.modal.nav.right.transform = true;

            state.ui.modal.pop.bottom.transform = true;
            state.ui.modal.pop.left.transform = true;
            state.ui.modal.pop.top.transform = true;
            state.ui.modal.pop.right.transform = true;

            state.ui.modal.page.bottom.transform = true;
            state.ui.modal.page.left.transform = true;
            state.ui.modal.page.top.transform = true;
            state.ui.modal.page.right.transform = true;

        };

        if (route == 'home') {

            state.ui.gui.top_right.display = false;
            state.ui.gui.top.display = false;
            state.ui.gui.top_left.display = true;

            state.ui.gui.left.display = false;
            state.ui.gui.right.display = false;

            state.ui.gui.bottom_right.display = false;
            state.ui.gui.bottom.display = false;
            state.ui.gui.bottom_left.display = false;

            state.ui.modal.nav.bottom.transform = true;
            state.ui.modal.nav.left.transform = true;
            state.ui.modal.nav.top.transform = true;
            state.ui.modal.nav.right.transform = true;

            state.ui.modal.pop.bottom.transform = true;
            state.ui.modal.pop.left.transform = true;
            state.ui.modal.pop.top.transform = true;
            state.ui.modal.pop.right.transform = true;

            state.ui.modal.page.bottom.transform = true;
            state.ui.modal.page.left.transform = true;
            state.ui.modal.page.top.transform = true;
            state.ui.modal.page.right.transform = true;

        };


    })();

};

let values_update = () => {
  imported_values.values_update();
}

let Handle_render = () => {

    document.getElementById('component_app').innerHTML = '';
    for (var i = 0; i < defaults.colors.length; i++) {
        console.log('defaults.colors[i]: ' + defaults.colors[i]);
        document.getElementById(defaults.colors[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')))
    };

};

let Handle_display_with_delay = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_display_and_opacity_on_with_no_delay, imported_functions.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
        };
    };
};

let Handle_transform = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
        };
    };
};

let Handle_opacity = () => {

    for (var i = 0; i < components.length; i++) {

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State('opacity_0', 'opacity_1', components[i].component, components[i].component_state_opacity);
        };
    };
};

let Handle_init = () => {
  //console.log('Handle_init');
};

let Handle_check_states = () => {
  //console.log('Handle_check_states');
  components = imported_components.get_components_handled();
  imported_ui.Handle_ui();
  Handle_display_with_delay();
  Handle_opacity();
  Handle_transform();
  Handle_init();
};

let Handle_get_state_from_events = () => {
    state = imported_events.Handle_return_state_from_events();
    values_update();
    console.log('state in index from events');
    // console.log(state);
};

let Handle_EventListeners = () => {

        document.getElementById('component_app_gui_logo_icon').addEventListener("click", function(event) {
            state.ui.modal.nav.top.display = true;

            setTimeout( () => {
                state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
            }, 100);
        });

        document.getElementById('component_app_gui_menu_icon').addEventListener("click", function(event) {
            state.ui.modal.page.bottom.display = true;

            setTimeout( () => {
                state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
            }, 100);
        });

        document.getElementById('component_app_gui_top_left').addEventListener("click", function(event) {

        });

        document.getElementById('component_app_gui_top_right').addEventListener("click", function(event) {

        });

        document.getElementById('component_app_gui_top_center').addEventListener("click", function(event) {

        });

        document.getElementById('component_app_gui_left').addEventListener("click", function(event) {
            state.ui.modal.pop.left.display = true;
            state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
        });

        document.getElementById('component_app_gui_right').addEventListener("click", function(event) {
            state.ui.modal.pop.right.display = true;
            state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
        });

        document.getElementById('component_app_gui_bottom_center').addEventListener("click", function(event) {
            state.ui.modal.pop.bottom.display = true;
            state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
        });

        document.getElementById('component_app_gui_bottom_left').addEventListener("click", function(event) {
            state.ui.modal.pop.top.display = true;
            state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
        });

        document.getElementById('component_app_gui_bottom_right').addEventListener("click", function(event) {
            state.ui.modal.pop.top.display = true;
            state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
        });

        document.getElementById('component_app_status_display_nav_top').addEventListener("click", function(event) {
            state.ui.modal.nav.top.display = !state.ui.modal.nav.top.display;
        });

        document.getElementById('component_app_status_opacity_nav_top').addEventListener("click", function(event) {
            state.ui.modal.nav.top.opacity = !state.ui.modal.nav.top.opacity;
        });

        document.getElementById('component_app_status_transform_nav_top').addEventListener("click", function(event) {
            state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
        });

        // nav - left
        document.getElementById('component_app_status_display_nav_left').addEventListener("click", function(event) {
            state.ui.modal.nav.left.display = !state.ui.modal.nav.left.display;
        });

        document.getElementById('component_app_status_opacity_nav_left').addEventListener("click", function(event) {
            state.ui.modal.nav.left.opacity = !state.ui.modal.nav.left.opacity;
        });

        document.getElementById('component_app_status_transform_nav_left').addEventListener("click", function(event) {
            state.ui.modal.nav.left.transform = !state.ui.modal.nav.left.transform;
        });

        // nav - bottom
        document.getElementById('component_app_status_display_nav_bottom').addEventListener("click", function(event) {
            state.ui.modal.nav.bottom.display = !state.ui.modal.nav.bottom.display;
        });

        document.getElementById('component_app_status_opacity_nav_bottom').addEventListener("click", function(event) {
            state.ui.modal.nav.bottom.opacity = !state.ui.modal.nav.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_nav_bottom').addEventListener("click", function(event) {
            state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
        });

        // nav - right
        document.getElementById('component_app_status_display_nav_right').addEventListener("click", function(event) {
            state.ui.modal.nav.right.display = !state.ui.modal.nav.right.display;
        });

        document.getElementById('component_app_status_opacity_nav_right').addEventListener("click", function(event) {
            state.ui.modal.nav.right.opacity = !state.ui.modal.nav.right.opacity;
        });

        document.getElementById('component_app_status_transform_nav_right').addEventListener("click", function(event) {
            state.ui.modal.nav.right.transform = !state.ui.modal.nav.right.transform;
        });


        // pop - top
        document.getElementById('component_app_status_display_pop_top').addEventListener("click", function(event) {
            state.ui.modal.pop.top.display = !state.ui.modal.pop.top.display;
        });

        document.getElementById('component_app_status_opacity_pop_top').addEventListener("click", function(event) {
            state.ui.modal.pop.top.opacity = !state.ui.modal.pop.top.opacity;
        });

        document.getElementById('component_app_status_transform_pop_top').addEventListener("click", function(event) {
            state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
        });

        // pop - left
        document.getElementById('component_app_status_display_pop_left').addEventListener("click", function(event) {
            state.ui.modal.pop.left.display = !state.ui.modal.pop.left.display;
        });

        document.getElementById('component_app_status_opacity_pop_left').addEventListener("click", function(event) {
            state.ui.modal.pop.left.opacity = !state.ui.modal.pop.left.opacity;
        });

        document.getElementById('component_app_status_transform_pop_left').addEventListener("click", function(event) {
            state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
        });

        // pop - bottom
        document.getElementById('component_app_status_display_pop_bottom').addEventListener("click", function(event) {
            state.ui.modal.pop.bottom.display = !state.ui.modal.pop.bottom.display;
        });

        document.getElementById('component_app_status_opacity_pop_bottom').addEventListener("click", function(event) {
            state.ui.modal.pop.bottom.opacity = !state.ui.modal.pop.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_pop_bottom').addEventListener("click", function(event) {
            state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
        });

        // pop - right
        document.getElementById('component_app_status_display_pop_right').addEventListener("click", function(event) {
            state.ui.modal.pop.right.display = !state.ui.modal.pop.right.display;
        });

        document.getElementById('component_app_status_opacity_pop_right').addEventListener("click", function(event) {
            state.ui.modal.pop.right.opacity = !state.ui.modal.pop.right.opacity;
        });

        document.getElementById('component_app_status_transform_pop_right').addEventListener("click", function(event) {
            state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
        });


        // page - top
        document.getElementById('component_app_status_display_page_top').addEventListener("click", function(event) {
            state.ui.modal.page.top.display = !state.ui.modal.page.top.display;
        });

        document.getElementById('component_app_status_opacity_page_top').addEventListener("click", function(event) {
            state.ui.modal.page.top.opacity = !state.ui.modal.page.top.opacity;
        });

        document.getElementById('component_app_status_transform_page_top').addEventListener("click", function(event) {
            state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
        });

        // page - left
        document.getElementById('component_app_status_display_page_left').addEventListener("click", function(event) {
            state.ui.modal.page.left.display = !state.ui.modal.page.left.display;
        });

        document.getElementById('component_app_status_opacity_page_left').addEventListener("click", function(event) {
            state.ui.modal.page.left.opacity = !state.ui.modal.page.left.opacity;
        });

        document.getElementById('component_app_status_transform_page_left').addEventListener("click", function(event) {
            state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
        });

        // page - bottom
        document.getElementById('component_app_status_display_page_bottom').addEventListener("click", function(event) {
            state.ui.modal.page.bottom.display = !state.ui.modal.page.bottom.display;
        });

        document.getElementById('component_app_status_opacity_page_bottom').addEventListener("click", function(event) {
            state.ui.modal.page.bottom.opacity = !state.ui.modal.page.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_page_bottom').addEventListener("click", function(event) {
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });

        // page - right
        document.getElementById('component_app_status_display_page_right').addEventListener("click", function(event) {
            state.ui.modal.page.right.display = !state.ui.modal.page.right.display;
        });

        document.getElementById('component_app_status_opacity_page_right').addEventListener("click", function(event) {
            state.ui.modal.page.right.opacity = !state.ui.modal.page.right.opacity;
        });

        document.getElementById('component_app_status_transform_page_right').addEventListener("click", function(event) {
            state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
        });


        // morph - top
        document.getElementById('component_app_status_display_morph_top').addEventListener("click", function(event) {
            state.ui.modal.morph.top.display = !state.ui.modal.morph.top.display;
        });

        document.getElementById('component_app_status_opacity_morph_top').addEventListener("click", function(event) {
            state.ui.modal.morph.top.opacity = !state.ui.modal.morph.top.opacity;
        });

        document.getElementById('component_app_status_transform_morph_top').addEventListener("click", function(event) {
            state.ui.modal.morph.top.transform = !state.ui.modal.morph.top.transform;
        });

        // morph - left
        document.getElementById('component_app_status_display_morph_left').addEventListener("click", function(event) {
            state.ui.modal.morph.left.display = !state.ui.modal.morph.left.display;
        });

        document.getElementById('component_app_status_opacity_morph_left').addEventListener("click", function(event) {
            state.ui.modal.morph.left.opacity = !state.ui.modal.morph.left.opacity;
        });

        document.getElementById('component_app_status_transform_morph_left').addEventListener("click", function(event) {
            state.ui.modal.morph.left.transform = !state.ui.modal.morph.left.transform;
        });

        // morph - bottom
        document.getElementById('component_app_status_display_morph_bottom').addEventListener("click", function(event) {
            state.ui.modal.morph.bottom.display = !state.ui.modal.morph.bottom.display;
        });

        document.getElementById('component_app_status_opacity_morph_bottom').addEventListener("click", function(event) {
            state.ui.modal.morph.bottom.opacity = !state.ui.modal.morph.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_morph_bottom').addEventListener("click", function(event) {
            state.ui.modal.morph.bottom.transform = !state.ui.modal.morph.bottom.transform;
        });

        // morph - right
        document.getElementById('component_app_status_display_morph_right').addEventListener("click", function(event) {
            state.ui.modal.morph.right.display = !state.ui.modal.morph.right.display;
        });

        document.getElementById('component_app_status_opacity_morph_right').addEventListener("click", function(event) {
            state.ui.modal.morph.right.opacity = !state.ui.modal.morph.right.opacity;
        });

        document.getElementById('component_app_status_transform_morph_right').addEventListener("click", function(event) {
            state.ui.modal.morph.right.transform = !state.ui.modal.morph.right.transform;
        });


        // corner - top
        document.getElementById('component_app_status_display_corner_top').addEventListener("click", function(event) {
            state.ui.modal.corner.top.display = !state.ui.modal.corner.top.display;
        });

        document.getElementById('component_app_status_opacity_corner_top').addEventListener("click", function(event) {
            state.ui.modal.corner.top.opacity = !state.ui.modal.corner.top.opacity;
        });

        document.getElementById('component_app_status_transform_corner_top').addEventListener("click", function(event) {
            state.ui.modal.corner.top.transform = !state.ui.modal.corner.top.transform;
        });

        // corner - left
        document.getElementById('component_app_status_display_corner_left').addEventListener("click", function(event) {
            state.ui.modal.corner.left.display = !state.ui.modal.corner.left.display;
        });

        document.getElementById('component_app_status_opacity_corner_left').addEventListener("click", function(event) {
            state.ui.modal.corner.left.opacity = !state.ui.modal.corner.left.opacity;
        });

        document.getElementById('component_app_status_transform_corner_left').addEventListener("click", function(event) {
            state.ui.modal.corner.left.transform = !state.ui.modal.corner.left.transform;
        });

        // corner - bottom
        document.getElementById('component_app_status_display_corner_bottom').addEventListener("click", function(event) {
            state.ui.modal.corner.bottom.display = !state.ui.modal.corner.bottom.display;
        });

        document.getElementById('component_app_status_opacity_corner_bottom').addEventListener("click", function(event) {
            state.ui.modal.corner.bottom.opacity = !state.ui.modal.corner.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_corner_bottom').addEventListener("click", function(event) {
            state.ui.modal.corner.bottom.transform = !state.ui.modal.corner.bottom.transform;
        });

        // corner - right
        document.getElementById('component_app_status_display_corner_right').addEventListener("click", function(event) {
            state.ui.modal.corner.right.display = !state.ui.modal.corner.right.display;
        });

        document.getElementById('component_app_status_opacity_corner_right').addEventListener("click", function(event) {
            state.ui.modal.corner.right.opacity = !state.ui.modal.corner.right.opacity;
        });

        document.getElementById('component_app_status_transform_corner_right').addEventListener("click", function(event) {
            state.ui.modal.corner.right.transform = !state.ui.modal.corner.right.transform;
        });


        // fade - top
        document.getElementById('component_app_status_display_fade_top').addEventListener("click", function(event) {
            state.ui.modal.fade.top.display = !state.ui.modal.fade.top.display;
        });

        document.getElementById('component_app_status_opacity_fade_top').addEventListener("click", function(event) {
            state.ui.modal.fade.top.opacity = !state.ui.modal.fade.top.opacity;
        });

        document.getElementById('component_app_status_transform_fade_top').addEventListener("click", function(event) {
            state.ui.modal.fade.top.transform = !state.ui.modal.fade.top.transform;
        });

        // fade - left
        document.getElementById('component_app_status_display_fade_left').addEventListener("click", function(event) {
            state.ui.modal.fade.left.display = !state.ui.modal.fade.left.display;
        });

        document.getElementById('component_app_status_opacity_fade_left').addEventListener("click", function(event) {
            state.ui.modal.fade.left.opacity = !state.ui.modal.fade.left.opacity;
        });

        document.getElementById('component_app_status_transform_fade_left').addEventListener("click", function(event) {
            state.ui.modal.fade.left.transform = !state.ui.modal.fade.left.transform;
        });

        // fade - bottom
        document.getElementById('component_app_status_display_fade_bottom').addEventListener("click", function(event) {
            state.ui.modal.fade.bottom.display = !state.ui.modal.fade.bottom.display;
        });

        document.getElementById('component_app_status_opacity_fade_bottom').addEventListener("click", function(event) {
            state.ui.modal.fade.bottom.opacity = !state.ui.modal.fade.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_fade_bottom').addEventListener("click", function(event) {
            state.ui.modal.fade.bottom.transform = !state.ui.modal.fade.bottom.transform;
        });

        // fade - right
        document.getElementById('component_app_status_display_fade_right').addEventListener("click", function(event) {
            state.ui.modal.fade.right.display = !state.ui.modal.fade.right.display;
        });

        document.getElementById('component_app_status_opacity_fade_right').addEventListener("click", function(event) {
            state.ui.modal.fade.right.opacity = !state.ui.modal.fade.right.opacity;
        });

        document.getElementById('component_app_status_transform_fade_right').addEventListener("click", function(event) {
            state.ui.modal.fade.right.transform = !state.ui.modal.fade.right.transform;
        });


        // gradient - top
        document.getElementById('component_app_status_display_gradient_top').addEventListener("click", function(event) {
            state.ui.modal.gradient.top.display = !state.ui.modal.gradient.top.display;
        });

        document.getElementById('component_app_status_opacity_gradient_top').addEventListener("click", function(event) {
            state.ui.modal.gradient.top.opacity = !state.ui.modal.gradient.top.opacity;
        });

        document.getElementById('component_app_status_transform_gradient_top').addEventListener("click", function(event) {
            state.ui.modal.gradient.top.transform = !state.ui.modal.gradient.top.transform;
        });

        // gradient - left
        document.getElementById('component_app_status_display_gradient_left').addEventListener("click", function(event) {
            state.ui.modal.gradient.left.display = !state.ui.modal.gradient.left.display;
        });

        document.getElementById('component_app_status_opacity_gradient_left').addEventListener("click", function(event) {
            state.ui.modal.gradient.left.opacity = !state.ui.modal.gradient.left.opacity;
        });

        document.getElementById('component_app_status_transform_gradient_left').addEventListener("click", function(event) {
            state.ui.modal.gradient.left.transform = !state.ui.modal.gradient.left.transform;
        });

        // gradient - bottom
        document.getElementById('component_app_status_display_gradient_bottom').addEventListener("click", function(event) {
            state.ui.modal.gradient.bottom.display = !state.ui.modal.gradient.bottom.display;
        });

        document.getElementById('component_app_status_opacity_gradient_bottom').addEventListener("click", function(event) {
            state.ui.modal.gradient.bottom.opacity = !state.ui.modal.gradient.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_gradient_bottom').addEventListener("click", function(event) {
            state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
        });

        // gradient - right
        document.getElementById('component_app_status_display_gradient_right').addEventListener("click", function(event) {
            state.ui.modal.gradient.right.display = !state.ui.modal.gradient.right.display;
        });

        document.getElementById('component_app_status_opacity_gradient_right').addEventListener("click", function(event) {
            state.ui.modal.gradient.right.opacity = !state.ui.modal.gradient.right.opacity;
        });

        document.getElementById('component_app_status_transform_gradient_right').addEventListener("click", function(event) {
            state.ui.modal.gradient.right.transform = !state.ui.modal.gradient.right.transform;
        });


        // menu - top
        document.getElementById('component_app_status_display_menu_top').addEventListener("click", function(event) {
            state.ui.modal.menu.top.display = !state.ui.modal.menu.top.display;
        });

        document.getElementById('component_app_status_opacity_menu_top').addEventListener("click", function(event) {
            state.ui.modal.menu.top.opacity = !state.ui.modal.menu.top.opacity;
        });

        document.getElementById('component_app_status_transform_menu_top').addEventListener("click", function(event) {
            state.ui.modal.menu.top.transform = !state.ui.modal.menu.top.transform;
        });

        // menu - left
        document.getElementById('component_app_status_display_menu_left').addEventListener("click", function(event) {
            state.ui.modal.menu.left.display = !state.ui.modal.menu.left.display;
        });

        document.getElementById('component_app_status_opacity_menu_left').addEventListener("click", function(event) {
            state.ui.modal.menu.left.opacity = !state.ui.modal.menu.left.opacity;
        });

        document.getElementById('component_app_status_transform_menu_left').addEventListener("click", function(event) {
            state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
        });

        // menu - bottom
        document.getElementById('component_app_status_display_menu_bottom').addEventListener("click", function(event) {
            state.ui.modal.menu.bottom.display = !state.ui.modal.menu.bottom.display;
        });

        document.getElementById('component_app_status_opacity_menu_bottom').addEventListener("click", function(event) {
            state.ui.modal.menu.bottom.opacity = !state.ui.modal.menu.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_menu_bottom').addEventListener("click", function(event) {
            state.ui.modal.menu.bottom.transform = !state.ui.modal.menu.bottom.transform;
        });

        // menu - right
        document.getElementById('component_app_status_display_menu_right').addEventListener("click", function(event) {
            state.ui.modal.menu.right.display = !state.ui.modal.menu.right.display;
        });

        document.getElementById('component_app_status_opacity_menu_right').addEventListener("click", function(event) {
            state.ui.modal.menu.right.opacity = !state.ui.modal.menu.right.opacity;
        });

        document.getElementById('component_app_status_transform_menu_right').addEventListener("click", function(event) {
            state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;
        });


        // overlay - top
        document.getElementById('component_app_status_display_overlay_top').addEventListener("click", function(event) {
            state.ui.modal.overlay.top.display = !state.ui.modal.overlay.top.display;
        });

        document.getElementById('component_app_status_opacity_overlay_top').addEventListener("click", function(event) {
            state.ui.modal.overlay.top.opacity = !state.ui.modal.overlay.top.opacity;
        });

        document.getElementById('component_app_status_transform_overlay_top').addEventListener("click", function(event) {
            state.ui.modal.overlay.top.transform = !state.ui.modal.overlay.top.transform;
        });

        // overlay - left
        document.getElementById('component_app_status_display_overlay_left').addEventListener("click", function(event) {
            state.ui.modal.overlay.left.display = !state.ui.modal.overlay.left.display;
        });

        document.getElementById('component_app_status_opacity_overlay_left').addEventListener("click", function(event) {
            state.ui.modal.overlay.left.opacity = !state.ui.modal.overlay.left.opacity;
        });

        document.getElementById('component_app_status_transform_overlay_left').addEventListener("click", function(event) {
            state.ui.modal.overlay.left.transform = !state.ui.modal.overlay.left.transform;
        });

        // overlay - bottom
        document.getElementById('component_app_status_display_overlay_bottom').addEventListener("click", function(event) {
            state.ui.modal.overlay.bottom.display = !state.ui.modal.overlay.bottom.display;
        });

        document.getElementById('component_app_status_opacity_overlay_bottom').addEventListener("click", function(event) {
            state.ui.modal.overlay.bottom.opacity = !state.ui.modal.overlay.bottom.opacity;
        });

        document.getElementById('component_app_status_transform_overlay_bottom').addEventListener("click", function(event) {
            state.ui.modal.overlay.bottom.transform = !state.ui.modal.overlay.bottom.transform;
        });

        // overlay - right
        document.getElementById('component_app_status_display_overlay_right').addEventListener("click", function(event) {
            state.ui.modal.overlay.right.display = !state.ui.modal.overlay.right.display;
        });

        document.getElementById('component_app_status_opacity_overlay_right').addEventListener("click", function(event) {
            state.ui.modal.overlay.right.opacity = !state.ui.modal.overlay.right.opacity;
        });

        document.getElementById('component_app_status_transform_overlay_right').addEventListener("click", function(event) {
            state.ui.modal.overlay.right.transform = !state.ui.modal.overlay.right.transform;
        });
};

// Create
let addListings = (child) => {

    let default_item = {
        id: 0,
        title: document.getElementById('element_input_title').value,
        subtitle: document.getElementById('element_input_subtitle').value,
        paragraph: document.getElementById('element_input_paragraph').value,
        category: document.getElementById('element_input_category').value,
        tag: document.getElementById('element_input_tag').value,
        type: document.getElementById('element_input_type').value,
        feature: [{
            title: "interaction_workspace_man_standing_1"
        }, {
            title: "interaction_workspace_man_standing_2"
        }, {
            title: "interaction_workspace_man_standing_3"
        }, {
            title: "interaction_workspace_man_standing_4"
        }, {
            title: "interaction_workspace_man_standing_5"
        }, {
            title: "interaction_workspace_man_standing_6"
        }, {
            title: "interaction_workspace_man_standing_7"
        }, {
            title: "interaction_workspace_man_standing_8"
        }, {
            title: "interaction_workspace_man_standing_9"
        }, {
            title: "interaction_workspace_man_standing_10"
        }, {
            title: "interaction_workspace_man_standing_11"
        }, {
            title: "interaction_workspace_man_standing_12"
        }, {
            title: "interaction_workspace_man_standing_13"
        }, {
            title: "interaction_workspace_man_standing_14"
        }, {
            title: "interaction_workspace_man_standing_15"
        }, {
            title: "interaction_workspace_man_standing_16"
        }],
        categories: [{
            title: "developer"
        }, {
            title: "design"
        }, {
            title: "graphic"
        }, {
            title: "motion"
        }, {
            title: "strategy"
        }, {
            title: "content"
        }],
        tags: [{
            title: "developer"
        }, {
            title: "design"
        }, {
            title: "graphic"
        }, {
            title: "motion"
        }, {
            title: "strategy"
        }, {
            title: "content"
        }],
        character: "interaction_workspace_man_standing_1",
        author: {
            "profile_picture": "photo_person1",
        },

        dislikes: 0,
        likes: 0,
        views: 0,
        meh: 0,
        previews: 0,
        "abilities": [{
            "fullname": "4240",
            "id": "-LGHD8-62MwWnnPzUw7g",
            "likescount": 0,
            "title": "dummy420",
            "employers": [{
                "fullname": "4240",
                "id": "-LGHD8-62MwWnnPzUw7g",
                "likescount": 0,
                "title": "dummy420"
            }, {
                "fullname": "420",
                "id": "-LGHD8-62MwWnn23",
                "likescount": 0,
                "title": "dummy420"
            }],
        }, {
            "fullname": "420",
            "id": "-LGHD8-62MwWnn23",
            "likescount": 0,
            "title": "dummy420",
            "employers": [{
                "fullname": "4240",
                "id": "-LGHD8-62MwWnnPzUw7g",
                "likescount": 0,
                "title": "dummy420"
            }, {
                "fullname": "420",
                "id": "-LGHD8-62MwWnn23",
                "likescount": 0,
                "title": "dummy420"
            }],
        }],
        "info": {
            "subtitle": "and 3d animator",
            "summary": "If the formula doesn't work, we change the formula.",
            "testimonials": [{
                "experience": 7,
                "id": 1
            }],
        }
    };

    document.getElementById('element_input_title').value = '';

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);

    Ref.push(default_item).then((snap) => {
        const key = snap.key;
        console.log('from addListing' + key);
        // update created item with snap.key
        Ref.child(key).update({
            id: key
        });

        // Set firebase data
        setTimeout(function() {
            Handle_Firebase_Refs_and_Render();
        }, 0);

    });
};

// Delete
let deleteWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from deleteWhoListings service');
    Ref.child(id).remove();

    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

// Update
let likeWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes += 1;
    Ref.child(id).set(changeThisValue);
    console.log(id);
    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

// Update
let dislikeWhoListings = (child, id) => {

    // Firebase References
    // Firebase Database
    const rootRef = firebase.database().ref();
    const gnougnRef = rootRef.child('gnougn');
    const Ref = gnougnRef.child(child);
    console.log(id, 'from likeWhoListings service');
    var changeThisValue;
    Ref.child(id).once('value', function(snap) {
        changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
    });

    changeThisValue.likes -= 1;

    Ref.child(id).set(changeThisValue);

    console.log(id);
    console.log(changeThisValue);

    // Set firebase data
    setTimeout(function() {
        Handle_Firebase_Refs_and_Render();
    }, 0);
};

let find_sort = () => {
    if ((document.getElementById('element_input_sort').value) == 'likesup' || '') {
        return function(a, b) {
            return a.likes - b.likes
        }
    };
    if ((document.getElementById('element_input_sort').value) == 'likesdown') {
        return function(a, b) {
            return b.likes - a.likes
        }
    };
};

let find_view = () => {
    if ((document.getElementById('element_input_view').value == 'card') || (document.getElementById('element_input_view').value == '')) {
        document.getElementById('element_ol_firebase_library').classList.add('card');
        document.getElementById('element_ol_firebase_library').classList.remove('grid');
        document.getElementById('element_ol_firebase_library').classList.remove('list');
    };

    if ((document.getElementById('element_input_view').value) == 'grid') {
        document.getElementById('element_ol_firebase_library').classList.add('grid');
        document.getElementById('element_ol_firebase_library').classList.remove('card');
        document.getElementById('element_ol_firebase_library').classList.remove('list');
    };

    if ((document.getElementById('element_input_view').value) == 'list') {
        document.getElementById('element_ol_firebase_library').classList.add('list');
        document.getElementById('element_ol_firebase_library').classList.remove('card');
        document.getElementById('element_ol_firebase_library').classList.remove('grid');
    };
};

let find_type = () => {
    if ((document.getElementById('element_input_type').value == 'ux/ui') || (document.getElementById('element_input_type').value == '')) {
        document.getElementById('element_ol_firebase_library').classList.add('ux/ui');
        document.getElementById('element_ol_firebase_library').classList.remove('slider');
        document.getElementById('element_ol_firebase_library').classList.remove('photo');
        document.getElementById('element_ol_firebase_library').classList.remove('graphic');
        document.getElementById('element_ol_firebase_library').classList.remove('read');
        document.getElementById('element_ol_firebase_library').classList.remove('video');
        document.getElementById('element_ol_firebase_library').classList.remove('code');
        document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    };

    if ((document.getElementById('element_input_type').value) == 'code') {
        document.getElementById('element_ol_firebase_library').classList.add('code');
        document.getElementById('element_ol_firebase_library').classList.remove('slider');
        document.getElementById('element_ol_firebase_library').classList.remove('photo');
        document.getElementById('element_ol_firebase_library').classList.remove('graphic');
        document.getElementById('element_ol_firebase_library').classList.remove('read');
        document.getElementById('element_ol_firebase_library').classList.remove('video');
        document.getElementById('element_ol_firebase_library').classList.remove('gallery');
        document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
    };

    if ((document.getElementById('element_input_type').value) == 'gallery') {
        document.getElementById('element_ol_firebase_library').classList.add('gallery');
        document.getElementById('element_ol_firebase_library').classList.remove('slider');
        document.getElementById('element_ol_firebase_library').classList.remove('photo');
        document.getElementById('element_ol_firebase_library').classList.remove('graphic');
        document.getElementById('element_ol_firebase_library').classList.remove('read');
        document.getElementById('element_ol_firebase_library').classList.remove('video');
        document.getElementById('element_ol_firebase_library').classList.remove('code');
        document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
    };

    if ((document.getElementById('element_input_type').value) == 'video') {
        document.getElementById('element_ol_firebase_library').classList.add('video');
        document.getElementById('element_ol_firebase_library').classList.remove('slider');
        document.getElementById('element_ol_firebase_library').classList.remove('photo');
        document.getElementById('element_ol_firebase_library').classList.remove('graphic');
        document.getElementById('element_ol_firebase_library').classList.remove('read');
        document.getElementById('element_ol_firebase_library').classList.remove('gallery');
        document.getElementById('element_ol_firebase_library').classList.remove('code');
        document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
    };

    if ((document.getElementById('element_input_type').value) == 'read') {
        document.getElementById('element_ol_firebase_library').classList.add('read');
        document.getElementById('element_ol_firebase_library').classList.remove('slider');
        document.getElementById('element_ol_firebase_library').classList.remove('photo');
        document.getElementById('element_ol_firebase_library').classList.remove('graphic');
        document.getElementById('element_ol_firebase_library').classList.remove('video');
        document.getElementById('element_ol_firebase_library').classList.remove('gallery');
        document.getElementById('element_ol_firebase_library').classList.remove('code');
        document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
    };

    if ((document.getElementById('element_input_type').value) == 'graphic') {
        document.getElementById('element_ol_firebase_library').classList.add('graphic');
        document.getElementById('element_ol_firebase_library').classList.remove('slider');
        document.getElementById('element_ol_firebase_library').classList.remove('photo');
        document.getElementById('element_ol_firebase_library').classList.remove('video');
        document.getElementById('element_ol_firebase_library').classList.remove('read');
        document.getElementById('element_ol_firebase_library').classList.remove('gallery');
        document.getElementById('element_ol_firebase_library').classList.remove('code');
        document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
    };

    if ((document.getElementById('element_input_type').value) == 'photo') {
        document.getElementById('element_ol_firebase_library').classList.add('photo');
        document.getElementById('element_ol_firebase_library').classList.remove('slider');
        document.getElementById('element_ol_firebase_library').classList.remove('video');
        document.getElementById('element_ol_firebase_library').classList.remove('graphic');
        document.getElementById('element_ol_firebase_library').classList.remove('read');
        document.getElementById('element_ol_firebase_library').classList.remove('gallery');
        document.getElementById('element_ol_firebase_library').classList.remove('code');
        document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
    };

    if ((document.getElementById('element_input_type').value) == 'slider') {
        document.getElementById('element_ol_firebase_library').classList.add('slider');
        document.getElementById('element_ol_firebase_library').classList.remove('video');
        document.getElementById('element_ol_firebase_library').classList.remove('photo');
        document.getElementById('element_ol_firebase_library').classList.remove('graphic');
        document.getElementById('element_ol_firebase_library').classList.remove('read');
        document.getElementById('element_ol_firebase_library').classList.remove('gallery');
        document.getElementById('element_ol_firebase_library').classList.remove('code');
        document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
    };
};

// Lifecycle hooks
window.onload = () => {

    // garage('monster', 'monster');
    console.log(localStorage);
    console.log(localStorage.username);
    console.log(localStorage.userid);
    console.log(localStorage.userpassword);
    console.log(localStorage.useremail);
    console.log(window);
    console.log(screen);
    console.log(screen.height);
    console.log(screen.width);
    console.log(navigator);
    console.log(history);
    console.log(history.length);
    console.log(location);
    console.log(location.pathname);

    // render view
    Handle_render();

    // render firebase data
    Handle_Firebase_Refs_and_Render();

    // render route: null
    Handle_check_route(state.app.route);

    // add events
    Handle_EventListeners();

    // start timer
    (() => {
        let int = 0;
        setInterval(function() {

            console.log(state.events.key.keys);

            if (state.events.key.keys.length == 0) {
                state.events.key.up = true;
                state.events.key.down = false;
            };

            if (state.events.key.keys.length != 0) {
                state.events.key.up = false;
                state.events.key.down = true;
            };

            if (state.events.key.up == true) {
                state.events.key.timer -= 1;
                console.log('state.events.key.timer: ' + state.events.key.timer);
            }

            if (state.events.key.up == false) {
                state.events.key.timer += 1;
                console.log('state.events.key.timer: ' + state.events.key.timer);
            }

            if (state.events.mouse.up == true) {
                state.events.mouse.timer -= 1;
                console.log('state.events.mouse.timer: ' + state.events.mouse.timer);
            }

            if (state.events.mouse.up == false) {
                state.events.mouse.timer += 1;
                console.log('state.events.mouse.timer: ' + state.events.mouse.timer);
            }
            int += 1;
            console.log(int);
        }, 1000);
    })();


    // alert(state.ui.interaction.dice);
    // alert(state.ui.interaction.random);
    // get date
    // get date
    (() => {
        setInterval(function() {
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = new Date();
            state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
            console.log(state.data.time);
            document.getElementById('time').innerText = state.data.time;
        }, 1000);
    })();

    /*

    // Player 1 Spin
    (function () {
        let frame = 1;
        setInterval(
            function () {

                let MANIPULATED = document.getElementById('component_app_interaction_player_1_body');
                let MANIPULATED_Length = 16;
                if (MANIPULATED != null) {

                    if (frame == 1) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_1');
                    };

                    if (frame == 2) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_2');
                    };

                    if (frame == 3) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_3');
                    };

                    if (frame == 4) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_4');
                    };

                    if (frame == 5) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_5');
                    };

                    if (frame == 6) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_6');
                    };

                    if (frame == 7) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_7');
                    };

                    if (frame == 8) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_8');
                    };

                    if (frame == 9) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_9');
                    };

                    if (frame == 10) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_10');
                    };

                    if (frame == 11) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_11');
                    };

                    if (frame == 12) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_12');
                    };

                    if (frame == 13) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_13');
                    };

                    if (frame == 14) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_14');
                    };

                    if (frame == 15) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_15');
                    };

                    if (frame == 16) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_16');
                    };

                };

                frame += 1;
                if (frame > MANIPULATED_Length) {
                    frame = 1;
                };

            }, 1000 / state.animation.framerate);
    }());

    // Helper
    (function () {
        let frame = 1;
        setInterval(
            function () {

                let MANIPULATED = document.getElementById('component_app_interaction_helper_body');
                let MANIPULATED_Length = 16;

                if (MANIPULATED != null) {

                    if (frame == 1) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_1');
                    };

                    if (frame == 2) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_2');
                    };

                    if (frame == 3) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_3');
                    };

                    if (frame == 4) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_4');
                    };

                    if (frame == 5) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_5');
                    };

                    if (frame == 6) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_6');
                    };

                    if (frame == 7) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_7');
                    };

                    if (frame == 8) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_8');
                    };

                    if (frame == 9) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_9');
                    };

                    if (frame == 10) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_10');
                    };

                    if (frame == 11) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_11');
                    };

                    if (frame == 12) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_12');
                    };

                    if (frame == 13) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_13');
                    };

                    if (frame == 14) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_14');
                    };

                    if (frame == 15) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_15');
                    };

                    if (frame == 16) {
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                        MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                        MANIPULATED.classList.add('interaction_workspace_man_standing_16');
                    };

                };

                frame += 1;
                if (frame > MANIPULATED_Length) {
                    frame = 1;
                };

            }, 1000 / state.animation.framerate);
    }());

    // Logo 1
    (function() {
        let interval = 1;
        let MANIPULATED = document.getElementById('component_app_gui_logo_combo_layer_feature');

        setInterval(
            function() {


                if (MANIPULATED != null) {
                    MANIPULATED.innerHTML = '';
                    if (interval == 1) {
                        MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                        MANIPULATED.classList.add('gui_logo_combo_frame_1');
                    };
                    if (interval == 2) {
                        MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                        MANIPULATED.classList.add('gui_logo_combo_frame_2');
                    };
                    if (interval == 3) {
                        MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                        MANIPULATED.classList.add('gui_logo_combo_frame_3');
                    };
                    if (interval == 4) {
                        MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                        MANIPULATED.classList.add('gui_logo_combo_frame_4');
                        interval = 0;
                    };

                    interval += 1;
                }

            }, (1000 / state.animation.framerate) * 4);

    }());

    // Logo 2
    (function() {
        let interval = 1;
        let MANIPULATED = document.getElementById('component_app_gui_logo_combo_layer');

        setInterval(
            function() {


                if (MANIPULATED != null) {
                    MANIPULATED.innerHTML = '';
                    if (interval == 1) {
                        MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                        MANIPULATED.classList.add('gui_logo_combo_frame_1');
                    };
                    if (interval == 2) {
                        MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                        MANIPULATED.classList.add('gui_logo_combo_frame_2');
                    };
                    if (interval == 3) {
                        MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                        MANIPULATED.classList.add('gui_logo_combo_frame_3');
                    };
                    if (interval == 4) {
                        MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                        MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                        MANIPULATED.classList.add('gui_logo_combo_frame_4');
                        interval = 0;
                    };

                    interval += 1;
                }

            }, (1000 / state.animation.framerate) * 4);

    }());

    // Noise animation
    ( function() {
        let interval = 1;

        setInterval(
        function() {


                let MANIPULATED = document.getElementById('component_app_accent_noise');
                    if ( MANIPULATED != null) {
                    MANIPULATED.innerHTML = '';
                    if (interval == 1) {
                        MANIPULATED.classList.remove('accent_noise_1');
                        MANIPULATED.classList.remove('accent_noise_2');
                        MANIPULATED.classList.remove('accent_noise_3');
                        MANIPULATED.classList.remove('accent_noise_4');
                        MANIPULATED.classList.add('accent_noise_1');
                    };
                    if (interval == 2) {
                        MANIPULATED.classList.remove('accent_noise_1');
                        MANIPULATED.classList.remove('accent_noise_2');
                        MANIPULATED.classList.remove('accent_noise_3');
                        MANIPULATED.classList.remove('accent_noise_4');
                        MANIPULATED.classList.add('accent_noise_2');
                    };
                    if (interval == 3) {
                        MANIPULATED.classList.remove('accent_noise_1');
                        MANIPULATED.classList.remove('accent_noise_2');
                        MANIPULATED.classList.remove('accent_noise_3');
                        MANIPULATED.classList.remove('accent_noise_4');
                        MANIPULATED.classList.add('accent_noise_3');
                    };
                    if (interval == 4) {
                        MANIPULATED.classList.remove('accent_noise_1');
                        MANIPULATED.classList.remove('accent_noise_2');
                        MANIPULATED.classList.remove('accent_noise_3');
                        MANIPULATED.classList.remove('accent_noise_4');
                        MANIPULATED.classList.add('accent_noise_4');
                        interval = 0;
                    };

                    interval += 1;

            }

        }, 1000/state.framerate);
    }());

    // icon_handdrawn_iphone
    (function() {
        let interval = 1;

        setInterval(
            function() {

        let MANIPULATED = document.getElementById('icon_handdrawn_iphone');

                if (MANIPULATED != null) {
                    MANIPULATED.innerHTML = '';
                    if (interval == 1) {
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_iphone_0_0_frame_1');
                    };
                    if (interval == 2) {
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_iphone_0_0_frame_2');
                    };
                    if (interval == 3) {
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_iphone_0_0_frame_3');
                    };
                    if (interval == 4) {
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_iphone_0_0_frame_4');
                        interval = 0;
                    };

                    interval += 1;
                }

            }, 1000 / state.animation.framerate);

    }());

    // icon_handdrawn_vr
    (function() {
        let interval = 1;

        setInterval(
            function() {

                let MANIPULATED = document.getElementById('icon_handdrawn_vr');

                if (MANIPULATED != null) {
                    MANIPULATED.innerHTML = '';
                    if (interval == 1) {
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_vr_0_0_frame_1');
                    };
                    if (interval == 2) {
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_vr_0_0_frame_2');
                    };
                    if (interval == 3) {
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_vr_0_0_frame_3');
                    };
                    if (interval == 4) {
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_vr_0_0_frame_4');
                        interval = 0;
                    };

                    interval += 1;
                }

            }, 1000 / state.animation.framerate);

    }());

    // icon_handdrawn_desktop
    (function() {
        let interval = 1;

        setInterval(
            function() {


        let MANIPULATED = document.getElementById('icon_handdrawn_desktop');
                if (MANIPULATED != null) {
                    MANIPULATED.innerHTML = '';
                    if (interval == 1) {
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_desktop_0_0_frame_1');
                    };
                    if (interval == 2) {
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_desktop_0_0_frame_2');
                    };
                    if (interval == 3) {
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_desktop_0_0_frame_3');
                    };
                    if (interval == 4) {
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_desktop_0_0_frame_4');
                        interval = 0;
                    };

                    interval += 1;
                }

            }, 1000 / state.animation.framerate);

    }());

    // icon_handdrawn_head
    (function() {
        let interval = 1;

        setInterval(
            function() {

        let MANIPULATED = document.getElementById('icon_handdrawn_head');

                if (MANIPULATED != null) {
                    MANIPULATED.innerHTML = '';
                    if (interval == 1) {
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_head_0_0_frame_1');
                    };
                    if (interval == 2) {
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_head_0_0_frame_2');
                    };
                    if (interval == 3) {
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_head_0_0_frame_3');
                    };
                    if (interval == 4) {
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_1');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_2');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_3');
                        MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_4');
                        MANIPULATED.classList.add('icon_handdrawn_head_0_0_frame_4');
                        interval = 0;
                    };

                    interval += 1;
                }

            }, 1000 / state.animation.framerate);

    }());

    */

    // icon_handdrawn_head
    (function() {
        let interval = 1;

        setInterval(
            function() {

        let MANIPULATED = document.getElementById('icon_dj_animation');

                if (MANIPULATED != null) {
                    MANIPULATED.innerHTML = '';
                    if (interval == 1) {
                        MANIPULATED.classList.remove('icon_dj_animation_1');
                        MANIPULATED.classList.remove('icon_dj_animation_2');
                        MANIPULATED.classList.remove('icon_dj_animation_3');
                        MANIPULATED.classList.remove('icon_dj_animation_4');
                        MANIPULATED.classList.add('icon_dj_animation_1');
                    };
                    if (interval == 2) {
                        MANIPULATED.classList.remove('icon_dj_animation_1');
                        MANIPULATED.classList.remove('icon_dj_animation_2');
                        MANIPULATED.classList.remove('icon_dj_animation_3');
                        MANIPULATED.classList.remove('icon_dj_animation_4');
                        MANIPULATED.classList.add('icon_dj_animation_2');
                    };
                    if (interval == 3) {
                        MANIPULATED.classList.remove('icon_dj_animation_1');
                        MANIPULATED.classList.remove('icon_dj_animation_2');
                        MANIPULATED.classList.remove('icon_dj_animation_3');
                        MANIPULATED.classList.remove('icon_dj_animation_4');
                        MANIPULATED.classList.add('icon_dj_animation_3');
                    };
                    if (interval == 4) {
                        MANIPULATED.classList.remove('icon_dj_animation_1');
                        MANIPULATED.classList.remove('icon_dj_animation_2');
                        MANIPULATED.classList.remove('icon_dj_animation_3');
                        MANIPULATED.classList.remove('icon_dj_animation_4');
                        MANIPULATED.classList.add('icon_dj_animation_4');
                        interval = 0;
                    };

                    interval += 1;
                }

            }, 1000 / state.animation.framerate);

    }());

    /* 1000 ms */
    // Bounce
    // Enemy
    (function () {
        let frame = 1;
        setInterval(

            function () {

                (function () {

                    if (state.ui.interaction.bounce.yaxis == 0) {
                        state.ui.interaction.bounce.yaxisascending = true;
                    }

                    if (state.ui.interaction.bounce.yaxis == (state.ux.dimensions.current - 1)) {
                        state.ui.interaction.bounce.yaxisascending = false;
                    }

                    if (state.ui.interaction.bounce.xaxis == 0) {
                        state.ui.interaction.bounce.xaxisascending = true;
                    }

                    if (state.ui.interaction.bounce.xaxis == (state.ux.dimensions.current - 1)) {
                        state.ui.interaction.bounce.xaxisascending = false;
                    }

                    if (state.ui.interaction.bounce.yaxisascending == false) {
                        state.ui.interaction.bounce.yaxis -= 1;
                    }

                    if (state.ui.interaction.bounce.yaxisascending == true) {
                        state.ui.interaction.bounce.yaxis += 1;
                    }

                    if (state.ui.interaction.bounce.xaxisascending == false) {
                        state.ui.interaction.bounce.xaxis -= 1;
                    }

                    if (state.ui.interaction.bounce.xaxisascending == true) {
                        state.ui.interaction.bounce.xaxis += 1;
                    }

                }());

                (function () {


                    if (state.ui.interaction.enemy.xaxis == 0) {
                        state.ui.interaction.enemy.xaxisascending = true;
                    }

                    if (state.ui.interaction.enemy.xaxis == (state.ux.dimensions.current - 1)) {
                        state.ui.interaction.enemy.xaxisascending = false;
                    }

                    if (state.ui.interaction.enemy.xaxisascending == false) {
                        state.ui.interaction.enemy.xaxis -= 1;
                    }

                    if (state.ui.interaction.enemy.xaxisascending == true) {
                        state.ui.interaction.enemy.xaxis += 1;
                    }

                    if (state.ui.interaction.player_1.xaxis == state.ui.interaction.enemy.xaxis && state.ui.interaction.player_1.yaxis == state.ui.interaction.enemy.yaxis) {
                        // alert('Game over');
                    };

                }());

            }, 1000);
    }());

};

// resize
window.onresize = () => {

    console.log('onresize');

    state.ux = {
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },

        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },

        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },

        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        },
    };

    values_update();
};

// Exports
export default {
  Handle_get_state_from_events,
  Handle_return_state,
  Handle_check_route,
  values_update
};
