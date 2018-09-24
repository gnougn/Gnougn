
// Imports
import imported_state from './partials/state';
import imported_functions from './partials/functions';
import imported_events from './partials/events';
import imported_defaults from './partials/defaults';
import imported_components from './partials/components';
import imported_generators from './partials/generators';
import imported_elements from './partials/elements';
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

// Handles
let Handle_return_state;
let Handle_get_state_from_events;
let Handle_render;
let Handle_firebase_render;
let Handle_Firebase_Refs_and_Render;
let find_sort;
let find_view;
let find_type;
let time;

let Handle_init;
let Handle_reset_ui;
let Handle_check_route;
let Handle_display_with_delay;
let Handle_reset_ui_to_home;
let Handle_transform;
let Handle_opacity;
let Handle_ui;
let Handle_EventListeners;
let Handle_check_states;
let addListings;
let deleteWhoListings;
let likeWhoListings;
let dislikeWhoListings;

Handle_return_state = () => { return state };

Handle_get_state_from_events = () => {
    state = imported_events.Handle_return_state_from_events(); 
    console.log('state in index from events');
    // console.log(state);
};

Handle_Firebase_Refs_and_Render = () => {
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
                        console.clear();
                    }, 0);

                };

            };

        }, 0);

    })();
};

Handle_render = () => {

    document.getElementById('component_app_colors').innerHTML = '';
    for (var i = 0; i < defaults.colors.length; i++) {
        console.log('defaults.colors[i]: ' + defaults.colors[i]);
        document.getElementById(defaults.colors[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')))
    };

    document.getElementById('component_app_particles').innerHTML = '';
    for (var i = 0; i < defaults.particles.length; i++) {
        console.log('defaults.particles[i]: ' + defaults.particles[i]);
        document.getElementById(defaults.particles[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.particles[i].innerHTML, defaults.particles[i].classList, defaults.particles[i].id, '')))
    };

    document.getElementById('component_app_stages').innerHTML = '';
    for (var i = 0; i < defaults.stages.length; i++) {
        console.log('defaults.stages[i]: ' + defaults.stages[i]);
        document.getElementById(defaults.stages[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.stages[i].innerHTML, defaults.stages[i].classList, defaults.stages[i].id, '')))
    };

        document.getElementById('component_app_interactions').innerHTML = '';
    for (var i = 0; i < defaults.interactions.length; i++) {
        console.log('defaults.interactions[i]: ' + defaults.interactions[i]);
        document.getElementById(defaults.interactions[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.interactions[i].innerHTML, defaults.interactions[i].classList, defaults.interactions[i].id, '')))
    };

    document.getElementById('component_app_gui').innerHTML = '';
    for (var i = 0; i < defaults.gui.length; i++) {
        console.log('defaults.gui[i]: ' + defaults.gui[i]);
        document.getElementById(defaults.gui[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.gui[i].innerHTML, defaults.gui[i].classList, defaults.gui[i].id, '')))
    };

    document.getElementById('component_app_modals').innerHTML = '';
    for (var i = 0; i < defaults.modals.length; i++) {
        console.log('defaults.modals[i]: ' + defaults.modals[i]);
        document.getElementById(defaults.modals[i].parent).appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(defaults.modals[i].innerHTML, defaults.modals[i].classList, defaults.modals[i].id, '')))
    };
};

find_sort = () => {
    if ((document.getElementById('element_input_sort').value) == 'likesup') {
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

find_view = () => {
    if ((document.getElementById('element_input_view').value) == 'card') {
        document.getElementById('element_ol_firebase_library').classList.add('card');
        document.getElementById('element_ol_firebase_library').classList.remove('grid');
        document.getElementById('element_ol_firebase_library').classList.remove('list');
    };
    
    if ((document.getElementById('element_input_view').value) == 'grid') {
        document.getElementById('element_ol_firebase_library').classList.add('grid');
        document.getElementById('element_ol_firebase_library').classList.remove('card');
        document.getElementById('element_ol_firebase_library').classList.remove('list');
    };
};

find_type = () => {
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
};

Handle_firebase_render = () => {

    // render roster
    (() => {
        setTimeout(function() {

            let array = state.data.firebase;
            let array_gnougn_roster = array.gnougn.roster.sort(find_sort());
            let filtered_array_gnougn_roster = [];

            for (var i = 0; i < array_gnougn_roster.length; i++) {
                if (array_gnougn_roster[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_roster.push(array_gnougn_roster[i]);
                };
            };

            document.getElementById('element_ol_firebase_roster').innerHTML = '';

            for (var i = 0; i < filtered_array_gnougn_roster.length; i++) {
                document.getElementById('element_ol_firebase_roster').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_li('\
                <div id="container">\
                    <div id="section">\
                        \
                        <div id="background">\
                            \
                            <div class="position_absolute left_0 top_0 width_100 height_100 ' + filtered_array_gnougn_roster[i].character + ' ">\
                            </div>\
                            \
                        </div>\
                        \
                        <div id="image">\
                            \
                            <div class="position_absolute left_0 top_0 width_100 height_100 ' + filtered_array_gnougn_roster[i].character + ' ">\
                            </div>\
                            \
                            \
                        </div>\
                        \
                        <div id="content">\
                          <h1 id="title">' + 'id: ' + filtered_array_gnougn_roster[i].id + '</h1>\
                          <h1 id="title">' + 'title: ' + filtered_array_gnougn_roster[i].title + '</h1>\
                          <h1 id="likes">' + 'likes: ' + filtered_array_gnougn_roster[i].likes + '</h1>\
                          <a id="preview" href="#">' + 'preview' + '</a>\
                        </div>\
                        \
                        <div id="interaction" class="position_relative width_100 float_right display_webkit_box webkit_box_pack_center webkit_box_align">\
                        </div>\
                        \
                        <div id="meta">\
                          <a id="preview" href="#">' + 'preview' + '</a>\
                        </div>\
                        \
                        <div id="user">\
                          <a id="preview" href="#">' + 'preview' + '</a>\
                        </div>\
                        \
                    </div>\
                </div>\
                ', [], 'element_ol_firebase_roster_post', '')))
            }

        }, 0);
    })();

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
                document.getElementById('element_ol_firebase_library').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_li('\
                        <div id="container">\
                            <div id="section">\
                                \
                                <div id="title">\
                                    \
                                    title:\
                                </div>\
                                \
                                <div id="image">\
                                \
                                </div>\
                                \
                                <div id="content">\
                                    <h1 id="title">' + 'id: ' + filtered_array_gnougn_library[i].id + '</h1>\
                                    <h1 id="title">' + 'title: ' + filtered_array_gnougn_library[i].title + '</h1>\
                                    <h1 id="likes">' + 'likes: ' + filtered_array_gnougn_library[i].likes + '</h1>\
                                    \
                                    \
                                </div>\
                                \
                                <div id="interaction" class="position_relative width_100 float_right display_webkit_box webkit_box_pack_center webkit_box_align">\
                                </div>\
                                \
                                <div id="meta">\
                                    \
                                    <div class="position_relative gui_arrow_left width_5vh height_5vh float_right">\
                                    \
                                    </div>\
                                    \
                                    <div class="position_relative gui_arrow_left width_5vh height_5vh float_right">\
                                    \
                                    </div>\
                                    \
                                    <div class="position_relative gui_arrow_left width_5vh height_5vh float_right">\
                                    \
                                    </div>\
                                    \
                                    <h1>' + 'meta: ' + filtered_array_gnougn_library[i].title + '</h1>\
                                    \
                                </div>\
                                \
                                <div id="user">\
                                    \
                                    <div class="position_relative width_5vh height_5vh border_radius_circle float_right">\
                                        \
                                        <div id="profile_picture" class="position_absolute overflow_hidden box_shadow_bottom_left_1vh_dark border_radius_circle left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 ' + filtered_array_gnougn_library[i].author.profile_picture + ' ">\
                                        </div>\
                                    </div>\
                                    \
                                    <div class="position_relative width_100 height_5vh float_right">\
                                        \
                                        <div id="author_id" class="position_relative float_left width_100">\
                                            ' + filtered_array_gnougn_library[i].author.id + ' \
                                        </div>\
                                    </div>\
                                    \
                                    <div class="position_relative width_100 height_5vh float_right">\
                                        \
                                    </div>\
                                    \
                                    <h1>' + 'user: ' + filtered_array_gnougn_library[i].title + '</h1>\
                                    \
                                </div>\
                                \
                            </div>\
                        </div>\
                        ', '' + filtered_array_gnougn_library[i].type + '', 'element_ol_firebase_library_post', '')))
            }

            // 6.) add events later

        }, 0);
    })();

    // render abilities
    (() => {
        setTimeout(function() {

            let array = state.data.firebase;
            let array_gnougn_abilities = array.gnougn.abilities.sort(find_sort());
            let filtered_array_gnougn_abilities = [];

            for (var i = 0; i < array_gnougn_abilities.length; i++) {
                if (array_gnougn_abilities[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_abilities.push(array_gnougn_abilities[i]);
                };
            };

            document.getElementById('element_ol_firebase_abilities').innerHTML = '';
            for (var i = 0; i < filtered_array_gnougn_abilities.length; i++) {
                document.getElementById('element_ol_firebase_abilities').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_li('\
                        <div id="container">\
                            <div id="section">\
                                \
                                <div id="background">\
                                \
                                <div class="position_absolute left_0 top_0 width_100 height_100 ' + filtered_array_gnougn_abilities[i].character + ' ">\
                                </div>\
                                \
                                </div>\
                                \
                                <div id="image">\
                                    \
                                </div>\
                                \
                                <div id="content">\
                                  <h1 id="title">' + 'id: ' + filtered_array_gnougn_abilities[i].id + '</h1>\
                                  <h1 id="title">' + 'title: ' + filtered_array_gnougn_abilities[i].title + '</h1>\
                                  <h1 id="likes">' + 'likes: ' + filtered_array_gnougn_abilities[i].likes + '</h1>\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                                <div id="interaction" class="position_relative width_100 float_right display_webkit_box webkit_box_pack_center webkit_box_align">\
                                </div>\
                                \
                                <div id="meta">\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                                <div id="user">\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                            </div>\
                        </div>\
                        ', [], 'element_ol_firebase_abilities_post', '')))
            }

        }, 0);
    })();

    // render partners
    (() => {
        setTimeout(function() {

            let array = state.data.firebase;
            let array_gnougn_partners = array.gnougn.partners.sort(find_sort());
            let filtered_array_gnougn_partners = [];

            for (var i = 0; i < array_gnougn_partners.length; i++) {
                if (array_gnougn_partners[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_partners.push(array_gnougn_partners[i]);
                };
            };

            document.getElementById('element_ol_firebase_partners').innerHTML = '';
            for (var i = 0; i < filtered_array_gnougn_partners.length; i++) {
                document.getElementById('element_ol_firebase_partners').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_li('\
                        <div id="container">\
                            <div id="section">\
                                \
                                <div id="background">\
                                \
                                <div class="position_absolute left_0 top_0 width_100 height_100 ' + filtered_array_gnougn_partners[i].character + ' ">\
                                </div>\
                                \
                                </div>\
                                \
                                <div id="image">\
                                    \
                                </div>\
                                \
                                <div id="content">\
                                  <h1 id="title">' + 'id: ' + filtered_array_gnougn_partners[i].id + '</h1>\
                                  <h1 id="title">' + 'title: ' + filtered_array_gnougn_partners[i].title + '</h1>\
                                  <h1 id="likes">' + 'likes: ' + filtered_array_gnougn_partners[i].likes + '</h1>\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                                <div id="interaction" class="position_relative width_100 float_right display_webkit_box webkit_box_pack_center webkit_box_align">\
                                </div>\
                                \
                                <div id="meta">\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                                <div id="user">\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                            </div>\
                        </div>\
                        ', [], 'element_ol_firebase_partners_post', '')))
            }

        }, 0);
    })();

    // render skills
    (() => {
        setTimeout(function() {

            let array = state.data.firebase;
            let array_gnougn_skills = array.gnougn.skills.sort(find_sort());
            let filtered_array_gnougn_skills = [];

            for (var i = 0; i < array_gnougn_skills.length; i++) {
                if (array_gnougn_skills[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_skills.push(array_gnougn_skills[i]);
                };
            };

            document.getElementById('element_ol_firebase_skills').innerHTML = '';
            for (var i = 0; i < filtered_array_gnougn_skills.length; i++) {
                document.getElementById('element_ol_firebase_skills').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_li('\
                        <div id="container">\
                            <div id="section">\
                                \
                                <div id="background">\
                                \
                                <div class="position_absolute left_0 top_0 width_100 height_100 ' + filtered_array_gnougn_skills[i].character + ' ">\
                                </div>\
                                \
                                </div>\
                                \
                                <div id="image">\
                                    \
                                </div>\
                                \
                                <div id="content">\
                                  <h1 id="title">' + 'id: ' + filtered_array_gnougn_skills[i].id + '</h1>\
                                  <h1 id="title">' + 'title: ' + filtered_array_gnougn_skills[i].title + '</h1>\
                                  <h1 id="likes">' + 'likes: ' + filtered_array_gnougn_skills[i].likes + '</h1>\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                                <div id="interaction" class="position_relative width_100 float_right display_webkit_box webkit_box_pack_center webkit_box_align">\
                                </div>\
                                \
                                <div id="meta">\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                                <div id="user">\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                            </div>\
                        </div>\
                        ', [], 'element_ol_firebase_skills_post', '')))
            }

        }, 0);
    })();

    // render services
    (() => {
        setTimeout(function() {

            let array = state.data.firebase;
            let array_gnougn_services = array.gnougn.services.sort(find_sort());
            let filtered_array_gnougn_services = [];

            for (var i = 0; i < array_gnougn_services.length; i++) {
                if (array_gnougn_services[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_services.push(array_gnougn_services[i]);
                };
            };

            document.getElementById('element_ol_firebase_services').innerHTML = '';
            for (var i = 0; i < filtered_array_gnougn_services.length; i++) {
                document.getElementById('element_ol_firebase_services').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_li('\
                        <div id="container">\
                            <div id="section">\
                                \
                                <div id="background">\
                                \
                                <div class="position_absolute left_0 top_0 width_100 height_100 ' + filtered_array_gnougn_services[i].character + ' ">\
                                </div>\
                                \
                                </div>\
                                \
                                <div id="image">\
                                    \
                                </div>\
                                \
                                <div id="content">\
                                  <h1 id="title">' + 'id: ' + filtered_array_gnougn_services[i].id + '</h1>\
                                  <h1 id="title">' + 'title: ' + filtered_array_gnougn_services[i].title + '</h1>\
                                  <h1 id="likes">' + 'likes: ' + filtered_array_gnougn_services[i].likes + '</h1>\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                                <div id="interaction" class="position_relative width_100 float_right display_webkit_box webkit_box_pack_center webkit_box_align">\
                                </div>\
                                \
                                <div id="meta">\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                                <div id="user">\
                                  <a id="preview" href="#">' + 'preview' + '</a>\
                                </div>\
                                \
                            </div>\
                        </div>\
                        ', [], 'element_ol_firebase_services_post', '')))
            }

        }, 0);
    })();

    // add event listeners
    (() => {
        setTimeout(function() {

            let array_gnougn_library = state.data.firebase.gnougn.library;
            let filtered_array_gnougn_library = [];

            for (var i = 0; i < array_gnougn_library.length; i++) {
                if (array_gnougn_library[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_library.push(array_gnougn_library[i]);
                };
            };

            let array_gnougn_roster = state.data.firebase.gnougn.roster;
            let filtered_array_gnougn_roster = [];

            for (var i = 0; i < array_gnougn_roster.length; i++) {
                if (array_gnougn_roster[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_roster.push(array_gnougn_roster[i]);
                };
            };

            let array_gnougn_partners = state.data.firebase.gnougn.partners;
            let filtered_array_gnougn_partners = [];

            for (var i = 0; i < array_gnougn_partners.length; i++) {
                if (array_gnougn_partners[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_partners.push(array_gnougn_partners[i]);
                };
            };

            let array_gnougn_abilities = state.data.firebase.gnougn.abilities;
            let filtered_array_gnougn_abilities = [];

            for (var i = 0; i < array_gnougn_abilities.length; i++) {
                if (array_gnougn_abilities[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_abilities.push(array_gnougn_abilities[i]);
                };
            };

            let array_gnougn_skills = state.data.firebase.gnougn.skills;
            let filtered_array_gnougn_skills = [];

            for (var i = 0; i < array_gnougn_skills.length; i++) {
                if (array_gnougn_skills[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_skills.push(array_gnougn_skills[i]);
                };
            };

            let array_gnougn_services = state.data.firebase.gnougn.services;
            let filtered_array_gnougn_services = [];

            for (var i = 0; i < array_gnougn_services.length; i++) {
                if (array_gnougn_services[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
                    filtered_array_gnougn_services.push(array_gnougn_services[i]);
                };
            };

            // Objects: Firebase roster Items
            // console.log(document.querySelectorAll('#element_ol_firebase_roster_posts'))
            let element_ol_firebase_roster_posts = document.querySelectorAll('#element_ol_firebase_roster_post');
            for (let i = 0; i < element_ol_firebase_roster_posts.length; i++) {

                let passed_roster = filtered_array_gnougn_roster;

                element_ol_firebase_roster_posts[i].children[0].addEventListener("click", function(event) {
                // route
                    Handle_check_route('roster_preview', '');

                });

            };

            // Objects: Firebase Library Items
            // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))
            let element_ol_firebase_library_posts = document.querySelectorAll('#element_ol_firebase_library_post');
            for (let i = 0; i < element_ol_firebase_library_posts.length; i++) {

                let passed_library = filtered_array_gnougn_library;

                element_ol_firebase_library_posts[i].children[0].addEventListener("click", function(event) {

                    Handle_check_route('library_preview', array_gnougn_library[i]);

                });

            };

            // Objects: Firebase abilities Items
            // console.log(document.querySelectorAll('#element_ol_firebase_abilities_posts'))
            let element_ol_firebase_abilities_posts = document.querySelectorAll('#element_ol_firebase_abilities_post');
            for (let i = 0; i < element_ol_firebase_abilities_posts.length; i++) {

                let passed_abilities = filtered_array_gnougn_abilities;

                element_ol_firebase_abilities_posts[i].children[0].children[0].children[2].children[2].addEventListener("click", function(event) {

                    // Listing data();
                    console.log(array_gnougn_abilities[i]);

                    // render
                    let abilities_preview_page = imported_generators.component_generator('abilities_preview', 'state', state.data.firebase.gnougn.abilities, array_gnougn_abilities[i]);
                    document.getElementById('component_app_modal_element_page_top').innerHTML = '';
                    document.getElementById('component_app_modal_element_page_top').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(abilities_preview_page, 'position_relative width_100 height_100vh float_left', 'id', '')));

                    // route
                    state.app.route = 'abilities_preview'
                    Handle_check_route(state.app.route, '');

                });

            };

            // Objects: Firebase services Items
            // console.log(document.querySelectorAll('#element_ol_firebase_services_posts'))
            let element_ol_firebase_services_posts = document.querySelectorAll('#element_ol_firebase_services_post');
            for (let i = 0; i < element_ol_firebase_services_posts.length; i++) {

                let passed_services = filtered_array_gnougn_services;

                element_ol_firebase_services_posts[i].children[0].children[0].children[2].children[2].addEventListener("click", function(event) {

                    // Listing data();
                    console.log(array_gnougn_services[i]);

                    // render
                    let services_preview_page = imported_generators.component_generator('services_preview', 'state', state.data.firebase.gnougn.services, array_gnougn_services[i]);
                    document.getElementById('component_app_modal_element_page_top').innerHTML = '';
                    document.getElementById('component_app_modal_element_page_top').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(services_preview_page, 'position_relative width_100 height_100vh float_left', 'id', '')));

                    // route
                    state.app.route = 'services_preview'
                    Handle_check_route(state.app.route, '');

                });

            };

            // Objects: Firebase skills Items
            // console.log(document.querySelectorAll('#element_ol_firebase_skills_posts'))
            let element_ol_firebase_skills_posts = document.querySelectorAll('#element_ol_firebase_skills_post');
            for (let i = 0; i < element_ol_firebase_skills_posts.length; i++) {

                let passed_skills = filtered_array_gnougn_skills;

                element_ol_firebase_skills_posts[i].children[0].children[0].children[2].children[2].addEventListener("click", function(event) {

                    // Listing data();
                    console.log(array_gnougn_skills[i]);

                    // render
                    let skills_preview_page = imported_generators.component_generator('skills_preview', 'state', state.data.firebase.gnougn.skills, array_gnougn_skills[i]);
                    document.getElementById('component_app_modal_element_page_top').innerHTML = '';
                    document.getElementById('component_app_modal_element_page_top').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(skills_preview_page, 'position_relative width_100 height_100vh float_left', 'id', '')));

                    // route
                    state.app.route = 'skills_preview'
                    Handle_check_route(state.app.route, '');

                });

            };

            // Objects: Firebase partners Items
            // console.log(document.querySelectorAll('#element_ol_firebase_partners_posts'))
            let element_ol_firebase_partners_posts = document.querySelectorAll('#element_ol_firebase_partners_post');
            for (let i = 0; i < element_ol_firebase_partners_posts.length; i++) {

                let passed_partners = filtered_array_gnougn_partners;

                element_ol_firebase_partners_posts[i].children[0].children[0].children[2].children[2].addEventListener("click", function(event) {

                    // Listing data();
                    console.log(array_gnougn_partners[i]);

                    // render
                    let partners_preview_page = imported_generators.component_generator('partners_preview', 'state', state.data.firebase.gnougn.partners, array_gnougn_partners[i]);
                    document.getElementById('component_app_modal_element_page_top').innerHTML = '';
                    document.getElementById('component_app_modal_element_page_top').appendChild(imported_functions.Generate_new_fragment.appendChild(imported_functions.Generate_new_div(partners_preview_page, 'position_relative width_100 height_100vh float_left', 'id', '')));

                    // route
                    state.app.route = 'partners_preview'
                    Handle_check_route(state.app.route, '');

                });

            };

            find_view();
            find_type();

        }, 0);
    })();


    state.data.refs = true;
};

Handle_reset_ui = () => {

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

Handle_reset_ui_to_home = () => {

    state.ui.gui.top_right.display = false;
    state.ui.gui.top.display = false;
    // state.ui.gui.top_left.display = !state.ui.gui.top_left.display;

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

Handle_check_route = (route, info) => {

    state.app.route = route;

    (() => {

        // null
        if (route == 'null') {

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    Handle_reset_ui_to_home();
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

                        state.ui.gui.top.display = true;
                        state.ui.gui.top.opacity = true;
                        state.ui.gui.top.transform = false;

                        state.ui.gui.top_right.display = true;
                        state.ui.gui.top_right.opacity = true;
                        state.ui.gui.top_right.transform = false;

                        state.ui.gui.top_left.display = true;
                        state.ui.gui.top_left.opacity = true;
                        state.ui.gui.top_left.transform = false;

                        state.ui.gui.right.display = true;
                        state.ui.gui.right.opacity = true;
                        state.ui.gui.right.transform = false;

                        state.ui.gui.left.display = true;
                        state.ui.gui.left.opacity = true;
                        state.ui.gui.left.transform = false;

                        state.ui.gui.bottom.display = true;
                        state.ui.gui.bottom.opacity = true;
                        state.ui.gui.bottom.transform = false;

                        state.ui.gui.bottom_right.display = true;
                        state.ui.gui.bottom_right.opacity = true;
                        state.ui.gui.bottom_right.transform = false;

                        state.ui.gui.bottom_left.display = true;
                        state.ui.gui.bottom_left.opacity = true;
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

        // home
        if (route == 'about') {
            alert('made it about');

            // function start (Detail)
            document.getElementById('component_app_modal_element_page_top_content').innerHTML = 
            imported_generators.generate('about_page', info);
            
            state.ui.modal.page.top.display = true;

            setTimeout(() => {
                state.ui.modal.page.top.transform = false;
            }, 200);

        };

        // home
        if (route == 'materials') {
            alert('made it about');

            // function start (Detail)
            document.getElementById('component_app_modal_element_page_top_content').innerHTML = 
            imported_generators.generate('about_page', info);
            
            state.ui.modal.page.top.display = true;

            setTimeout(() => {
                state.ui.modal.page.top.transform = false;
            }, 200);

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
                    document.getElementById('component_app_modal_element_page_top_content').innerHTML += '\
                        \
                        '+imported_elements.element_slider_3()+'\
                        \
                    ';
                    
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

    })()
};

Handle_display_with_delay = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_functions_IF_State(imported_functions.Toggle_display_and_opacity_on_with_no_delay, imported_functions.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
        };
    };
};

Handle_transform = () => {

    for (var i = 0; i < components.length; i++) {
        // console.log(components[i].component);
        // console.log(components[i].component_state);

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
        };
    };
};

Handle_opacity = () => {

    for (var i = 0; i < components.length; i++) {

        // colors
        if ((document.getElementById(components[i].component)) != null) {
            imported_functions.Toggle_classes_IF_State('opacity_0', 'opacity_1', components[i].component, components[i].component_state_opacity);
        };
    };
};

Handle_EventListeners = () => {

    if (document.getElementById('component_app_gui_top_left') != null) {

        document.getElementById('component_app_gui_logo_icon').addEventListener("click", function(event) {
            state.ui.modal.page.bottom.display = true;
            state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
        });

        document.getElementById('component_app_gui_menu_icon').addEventListener("click", function(event) {
            state.ui.modal.nav.top.display = true;
            state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
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

};

Handle_init = () => {
};

Handle_check_states = () => {
    console.log('Handle_check_states');
    components = imported_components.get_components_handled();
    imported_ui.Handle_ui();
    Handle_display_with_delay();
    Handle_opacity();
    Handle_transform();
    Handle_init();
};

// Create
addListings = (child) => {

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
deleteWhoListings = (child, id) => {

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
likeWhoListings = (child, id) => {

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
dislikeWhoListings = (child, id) => {

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

let values_update = () => {

    let state = Handle_return_state();

    if (document.getElementById('score_current_area') != null) {
        document.getElementById('score_current_area').innerText = state.data.score.current.area;
        document.getElementById('score_current_met').innerText = state.data.score.current.met;
    };

    if (document.getElementById('time') != null) {
        document.getElementById('time').innerText = time;
    };

    // page
    if (document.getElementById('component_app_status_display_page_top') != null) {
        document.getElementById('component_app_status_display_page_top').innerText = state.ui.modal.page.top.display;
    };

    if (document.getElementById('component_app_status_opacity_page_top') != null) {
        document.getElementById('component_app_status_opacity_page_top').innerText = state.ui.modal.page.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_page_top') != null) {
        document.getElementById('component_app_status_transform_page_top').innerText = state.ui.modal.page.top.transform;
    };

    if (document.getElementById('component_app_status_display_page_bottom') != null) {
        document.getElementById('component_app_status_display_page_bottom').innerText = state.ui.modal.page.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_page_bottom') != null) {
        document.getElementById('component_app_status_opacity_page_bottom').innerText = state.ui.modal.page.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_page_bottom') != null) {
        document.getElementById('component_app_status_transform_page_bottom').innerText = state.ui.modal.page.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_page_left') != null) {
        document.getElementById('component_app_status_display_page_left').innerText = state.ui.modal.page.left.display;
    };

    if (document.getElementById('component_app_status_opacity_page_left') != null) {
        document.getElementById('component_app_status_opacity_page_left').innerText = state.ui.modal.page.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_page_left') != null) {
        document.getElementById('component_app_status_transform_page_left').innerText = state.ui.modal.page.left.transform;
    };

    if (document.getElementById('component_app_status_display_page_right') != null) {
        document.getElementById('component_app_status_display_page_right').innerText = state.ui.modal.page.right.display;
    };

    if (document.getElementById('component_app_status_opacity_page_right') != null) {
        document.getElementById('component_app_status_opacity_page_right').innerText = state.ui.modal.page.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_page_right') != null) {
        document.getElementById('component_app_status_transform_page_right').innerText = state.ui.modal.page.right.transform;
    };

    // pop

    if (document.getElementById('component_app_status_display_pop_top') != null) {
        document.getElementById('component_app_status_display_pop_top').innerText = state.ui.modal.pop.top.display;
    };

    if (document.getElementById('component_app_status_opacity_pop_top') != null) {
        document.getElementById('component_app_status_opacity_pop_top').innerText = state.ui.modal.pop.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_pop_top') != null) {
        document.getElementById('component_app_status_transform_pop_top').innerText = state.ui.modal.pop.top.transform;
    };

    if (document.getElementById('component_app_status_display_pop_bottom') != null) {
        document.getElementById('component_app_status_display_pop_bottom').innerText = state.ui.modal.pop.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_pop_bottom') != null) {
        document.getElementById('component_app_status_opacity_pop_bottom').innerText = state.ui.modal.pop.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_pop_bottom') != null) {
        document.getElementById('component_app_status_transform_pop_bottom').innerText = state.ui.modal.pop.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_pop_left') != null) {
        document.getElementById('component_app_status_display_pop_left').innerText = state.ui.modal.pop.left.display;
    };

    if (document.getElementById('component_app_status_opacity_pop_left') != null) {
        document.getElementById('component_app_status_opacity_pop_left').innerText = state.ui.modal.pop.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_pop_left') != null) {
        document.getElementById('component_app_status_transform_pop_left').innerText = state.ui.modal.pop.left.transform;
    };

    if (document.getElementById('component_app_status_display_pop_right') != null) {
        document.getElementById('component_app_status_display_pop_right').innerText = state.ui.modal.pop.right.display;
    };

    if (document.getElementById('component_app_status_opacity_pop_right') != null) {
        document.getElementById('component_app_status_opacity_pop_right').innerText = state.ui.modal.pop.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_pop_right') != null) {
        document.getElementById('component_app_status_transform_pop_right').innerText = state.ui.modal.pop.right.transform;
    };

    // overlay

    if (document.getElementById('component_app_status_display_overlay_top') != null) {
        document.getElementById('component_app_status_display_overlay_top').innerText = state.ui.modal.overlay.top.display;
    };

    if (document.getElementById('component_app_status_opacity_overlay_top') != null) {
        document.getElementById('component_app_status_opacity_overlay_top').innerText = state.ui.modal.overlay.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_overlay_top') != null) {
        document.getElementById('component_app_status_transform_overlay_top').innerText = state.ui.modal.overlay.top.transform;
    };

    if (document.getElementById('component_app_status_display_overlay_bottom') != null) {
        document.getElementById('component_app_status_display_overlay_bottom').innerText = state.ui.modal.overlay.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_overlay_bottom') != null) {
        document.getElementById('component_app_status_opacity_overlay_bottom').innerText = state.ui.modal.overlay.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_overlay_bottom') != null) {
        document.getElementById('component_app_status_transform_overlay_bottom').innerText = state.ui.modal.overlay.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_overlay_left') != null) {
        document.getElementById('component_app_status_display_overlay_left').innerText = state.ui.modal.overlay.left.display;
    };

    if (document.getElementById('component_app_status_opacity_overlay_left') != null) {
        document.getElementById('component_app_status_opacity_overlay_left').innerText = state.ui.modal.overlay.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_overlay_left') != null) {
        document.getElementById('component_app_status_transform_overlay_left').innerText = state.ui.modal.overlay.left.transform;
    };

    if (document.getElementById('component_app_status_display_overlay_right') != null) {
        document.getElementById('component_app_status_display_overlay_right').innerText = state.ui.modal.overlay.right.display;
    };

    if (document.getElementById('component_app_status_opacity_overlay_right') != null) {
        document.getElementById('component_app_status_opacity_overlay_right').innerText = state.ui.modal.overlay.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_overlay_right') != null) {
        document.getElementById('component_app_status_transform_overlay_right').innerText = state.ui.modal.overlay.right.transform;
    };

    // menu

    if (document.getElementById('component_app_status_display_menu_top') != null) {
        document.getElementById('component_app_status_display_menu_top').innerText = state.ui.modal.menu.top.display;
    };

    if (document.getElementById('component_app_status_opacity_menu_top') != null) {
        document.getElementById('component_app_status_opacity_menu_top').innerText = state.ui.modal.menu.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_menu_top') != null) {
        document.getElementById('component_app_status_transform_menu_top').innerText = state.ui.modal.menu.top.transform;
    };

    if (document.getElementById('component_app_status_display_menu_bottom') != null) {
        document.getElementById('component_app_status_display_menu_bottom').innerText = state.ui.modal.menu.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_menu_bottom') != null) {
        document.getElementById('component_app_status_opacity_menu_bottom').innerText = state.ui.modal.menu.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_menu_bottom') != null) {
        document.getElementById('component_app_status_transform_menu_bottom').innerText = state.ui.modal.menu.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_menu_left') != null) {
        document.getElementById('component_app_status_display_menu_left').innerText = state.ui.modal.menu.left.display;
    };

    if (document.getElementById('component_app_status_opacity_menu_left') != null) {
        document.getElementById('component_app_status_opacity_menu_left').innerText = state.ui.modal.menu.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_menu_left') != null) {
        document.getElementById('component_app_status_transform_menu_left').innerText = state.ui.modal.menu.left.transform;
    };

    if (document.getElementById('component_app_status_display_menu_right') != null) {
        document.getElementById('component_app_status_display_menu_right').innerText = state.ui.modal.menu.right.display;
    };

    if (document.getElementById('component_app_status_opacity_menu_right') != null) {
        document.getElementById('component_app_status_opacity_menu_right').innerText = state.ui.modal.menu.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_menu_right') != null) {
        document.getElementById('component_app_status_transform_menu_right').innerText = state.ui.modal.menu.right.transform;
    };

    // fade

    if (document.getElementById('component_app_status_display_fade_top') != null) {
        document.getElementById('component_app_status_display_fade_top').innerText = state.ui.modal.fade.top.display;
    };

    if (document.getElementById('component_app_status_opacity_fade_top') != null) {
        document.getElementById('component_app_status_opacity_fade_top').innerText = state.ui.modal.fade.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_fade_top') != null) {
        document.getElementById('component_app_status_transform_fade_top').innerText = state.ui.modal.fade.top.transform;
    };

    if (document.getElementById('component_app_status_display_fade_bottom') != null) {
        document.getElementById('component_app_status_display_fade_bottom').innerText = state.ui.modal.fade.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_fade_bottom') != null) {
        document.getElementById('component_app_status_opacity_fade_bottom').innerText = state.ui.modal.fade.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_fade_bottom') != null) {
        document.getElementById('component_app_status_transform_fade_bottom').innerText = state.ui.modal.fade.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_fade_left') != null) {
        document.getElementById('component_app_status_display_fade_left').innerText = state.ui.modal.fade.left.display;
    };

    if (document.getElementById('component_app_status_opacity_fade_left') != null) {
        document.getElementById('component_app_status_opacity_fade_left').innerText = state.ui.modal.fade.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_fade_left') != null) {
        document.getElementById('component_app_status_transform_fade_left').innerText = state.ui.modal.fade.left.transform;
    };

    if (document.getElementById('component_app_status_display_fade_right') != null) {
        document.getElementById('component_app_status_display_fade_right').innerText = state.ui.modal.fade.right.display;
    };

    if (document.getElementById('component_app_status_opacity_fade_right') != null) {
        document.getElementById('component_app_status_opacity_fade_right').innerText = state.ui.modal.fade.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_fade_right') != null) {
        document.getElementById('component_app_status_transform_fade_right').innerText = state.ui.modal.fade.right.transform;
    };

    // corner

    if (document.getElementById('component_app_status_display_corner_top') != null) {
        document.getElementById('component_app_status_display_corner_top').innerText = state.ui.modal.corner.top.display;
    };

    if (document.getElementById('component_app_status_opacity_corner_top') != null) {
        document.getElementById('component_app_status_opacity_corner_top').innerText = state.ui.modal.corner.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_corner_top') != null) {
        document.getElementById('component_app_status_transform_corner_top').innerText = state.ui.modal.corner.top.transform;
    };

    if (document.getElementById('component_app_status_display_corner_bottom') != null) {
        document.getElementById('component_app_status_display_corner_bottom').innerText = state.ui.modal.corner.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_corner_bottom') != null) {
        document.getElementById('component_app_status_opacity_corner_bottom').innerText = state.ui.modal.corner.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_corner_bottom') != null) {
        document.getElementById('component_app_status_transform_corner_bottom').innerText = state.ui.modal.corner.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_corner_left') != null) {
        document.getElementById('component_app_status_display_corner_left').innerText = state.ui.modal.corner.left.display;
    };

    if (document.getElementById('component_app_status_opacity_corner_left') != null) {
        document.getElementById('component_app_status_opacity_corner_left').innerText = state.ui.modal.corner.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_corner_left') != null) {
        document.getElementById('component_app_status_transform_corner_left').innerText = state.ui.modal.corner.left.transform;
    };

    if (document.getElementById('component_app_status_display_corner_right') != null) {
        document.getElementById('component_app_status_display_corner_right').innerText = state.ui.modal.corner.right.display;
    };

    if (document.getElementById('component_app_status_opacity_corner_right') != null) {
        document.getElementById('component_app_status_opacity_corner_right').innerText = state.ui.modal.corner.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_corner_right') != null) {
        document.getElementById('component_app_status_transform_corner_right').innerText = state.ui.modal.corner.right.transform;
    };

    // morph

    if (document.getElementById('component_app_status_display_morph_top') != null) {
        document.getElementById('component_app_status_display_morph_top').innerText = state.ui.modal.morph.top.display;
    };

    if (document.getElementById('component_app_status_opacity_morph_top') != null) {
        document.getElementById('component_app_status_opacity_morph_top').innerText = state.ui.modal.morph.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_morph_top') != null) {
        document.getElementById('component_app_status_transform_morph_top').innerText = state.ui.modal.morph.top.transform;
    };

    if (document.getElementById('component_app_status_display_morph_bottom') != null) {
        document.getElementById('component_app_status_display_morph_bottom').innerText = state.ui.modal.morph.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_morph_bottom') != null) {
        document.getElementById('component_app_status_opacity_morph_bottom').innerText = state.ui.modal.morph.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_morph_bottom') != null) {
        document.getElementById('component_app_status_transform_morph_bottom').innerText = state.ui.modal.morph.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_morph_left') != null) {
        document.getElementById('component_app_status_display_morph_left').innerText = state.ui.modal.morph.left.display;
    };

    if (document.getElementById('component_app_status_opacity_morph_left') != null) {
        document.getElementById('component_app_status_opacity_morph_left').innerText = state.ui.modal.morph.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_morph_left') != null) {
        document.getElementById('component_app_status_transform_morph_left').innerText = state.ui.modal.morph.left.transform;
    };

    if (document.getElementById('component_app_status_display_morph_right') != null) {
        document.getElementById('component_app_status_display_morph_right').innerText = state.ui.modal.morph.right.display;
    };

    if (document.getElementById('component_app_status_opacity_morph_right') != null) {
        document.getElementById('component_app_status_opacity_morph_right').innerText = state.ui.modal.morph.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_morph_right') != null) {
        document.getElementById('component_app_status_transform_morph_right').innerText = state.ui.modal.morph.right.transform;
    };

    // gradient

    if (document.getElementById('component_app_status_display_gradient_top') != null) {
        document.getElementById('component_app_status_display_gradient_top').innerText = state.ui.modal.gradient.top.display;
    };

    if (document.getElementById('component_app_status_opacity_gradient_top') != null) {
        document.getElementById('component_app_status_opacity_gradient_top').innerText = state.ui.modal.gradient.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_gradient_top') != null) {
        document.getElementById('component_app_status_transform_gradient_top').innerText = state.ui.modal.gradient.top.transform;
    };

    if (document.getElementById('component_app_status_display_gradient_bottom') != null) {
        document.getElementById('component_app_status_display_gradient_bottom').innerText = state.ui.modal.gradient.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_gradient_bottom') != null) {
        document.getElementById('component_app_status_opacity_gradient_bottom').innerText = state.ui.modal.gradient.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_gradient_bottom') != null) {
        document.getElementById('component_app_status_transform_gradient_bottom').innerText = state.ui.modal.gradient.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_gradient_left') != null) {
        document.getElementById('component_app_status_display_gradient_left').innerText = state.ui.modal.gradient.left.display;
    };

    if (document.getElementById('component_app_status_opacity_gradient_left') != null) {
        document.getElementById('component_app_status_opacity_gradient_left').innerText = state.ui.modal.gradient.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_gradient_left') != null) {
        document.getElementById('component_app_status_transform_gradient_left').innerText = state.ui.modal.gradient.left.transform;
    };

    if (document.getElementById('component_app_status_display_gradient_right') != null) {
        document.getElementById('component_app_status_display_gradient_right').innerText = state.ui.modal.gradient.right.display;
    };

    if (document.getElementById('component_app_status_opacity_gradient_right') != null) {
        document.getElementById('component_app_status_opacity_gradient_right').innerText = state.ui.modal.gradient.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_gradient_right') != null) {
        document.getElementById('component_app_status_transform_gradient_right').innerText = state.ui.modal.gradient.right.transform;
    };

    // nav

    if (document.getElementById('component_app_status_display_nav_top') != null) {
        document.getElementById('component_app_status_display_nav_top').innerText = state.ui.modal.nav.top.display;
    };

    if (document.getElementById('component_app_status_opacity_nav_top') != null) {
        document.getElementById('component_app_status_opacity_nav_top').innerText = state.ui.modal.nav.top.opacity;
    };

    if (document.getElementById('component_app_status_transform_nav_top') != null) {
        document.getElementById('component_app_status_transform_nav_top').innerText = state.ui.modal.nav.top.transform;
    };

    if (document.getElementById('component_app_status_display_nav_bottom') != null) {
        document.getElementById('component_app_status_display_nav_bottom').innerText = state.ui.modal.nav.bottom.display;
    };

    if (document.getElementById('component_app_status_opacity_nav_bottom') != null) {
        document.getElementById('component_app_status_opacity_nav_bottom').innerText = state.ui.modal.nav.bottom.opacity;
    };

    if (document.getElementById('component_app_status_transform_nav_bottom') != null) {
        document.getElementById('component_app_status_transform_nav_bottom').innerText = state.ui.modal.nav.bottom.transform;
    };

    if (document.getElementById('component_app_status_display_nav_left') != null) {
        document.getElementById('component_app_status_display_nav_left').innerText = state.ui.modal.nav.left.display;
    };

    if (document.getElementById('component_app_status_opacity_nav_left') != null) {
        document.getElementById('component_app_status_opacity_nav_left').innerText = state.ui.modal.nav.left.opacity;
    };

    if (document.getElementById('component_app_status_transform_nav_left') != null) {
        document.getElementById('component_app_status_transform_nav_left').innerText = state.ui.modal.nav.left.transform;
    };

    if (document.getElementById('component_app_status_display_nav_right') != null) {
        document.getElementById('component_app_status_display_nav_right').innerText = state.ui.modal.nav.right.display;
    };

    if (document.getElementById('component_app_status_opacity_nav_right') != null) {
        document.getElementById('component_app_status_opacity_nav_right').innerText = state.ui.modal.nav.right.opacity;
    };

    if (document.getElementById('component_app_status_transform_nav_right') != null) {
        document.getElementById('component_app_status_transform_nav_right').innerText = state.ui.modal.nav.right.transform;
    };

    // browser

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_ux_browser_height').innerText = state.ux.browser.height;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_ux_browser_width').innerText = state.ux.browser.width;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_ux_dimensions_height').innerText = state.ux.dimensions.height;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_ux_dimensions_width').innerText = state.ux.dimensions.width;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_clientX').innerHTML = state.events.mouse.clientX;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_clientY').innerHTML = state.events.mouse.clientY;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_x_axis').innerHTML = state.events.mouse.x_axis;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_y_axis').innerHTML = state.events.mouse.y_axis;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_absolute').innerHTML = state.events.mouse.absolute;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x').innerHTML = state.events.mouse.accelerationIncludingGravity.x;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_y').innerHTML = state.events.mouse.accelerationIncludingGravity.y;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_z').innerHTML = state.events.mouse.accelerationIncludingGravity.z;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_acceleration_x').innerHTML = state.events.mouse.acceleration.x;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_acceleration_y').innerHTML = state.events.mouse.acceleration.y;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_acceleration_z').innerHTML = state.events.mouse.acceleration.z;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_rotationRate_alpha').innerHTML = state.events.mouse.rotationRate.alpha;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_rotationRate_beta').innerHTML = state.events.mouse.rotationRate.beta;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_rotationRate_gamma').innerHTML = state.events.mouse.rotationRate.gamma;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_alpha').innerHTML = state.events.mouse.alpha;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_beta').innerHTML = state.events.mouse.beta;
    };

    if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
        document.getElementById('component_app_status_state_events_mouse_gamma').innerHTML = state.events.mouse.gamma;
    };
    
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

// Lifecycle hooks
window.onload = () => {

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

    // handle route
    Handle_check_route(state.app.route, '');

    if (document.getElementById('element_input_filter') != null) {
        document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
            // filter library
            setTimeout(function() {
                Handle_Firebase_Refs_and_Render();
            }, 0);

        });
    };

    if (document.getElementById('element_input_title') != null) {
        document.getElementById('element_input_title').addEventListener('keydown', (event) => {
            
            // submit new listing
            if (event.keyCode == 13) {
                event.preventDefault();
                addListings('library');
            };

            // submit new listing
            if (event.keyCode == 32) {
                event.preventDefault();
                Handle_Firebase_Refs_and_Render();
            };

        });
    };

    if (document.getElementById('element_input_sort') != null) {
        document.getElementById('element_input_sort').addEventListener('keydown', (event) => {
            
            if (event.keyCode == 13) {
                event.preventDefault();
                Handle_Firebase_Refs_and_Render();
            };

        });
    };

    if (document.getElementById('element_input_view') != null) {
        document.getElementById('element_input_view').addEventListener('keydown', (event) => {

            if (event.keyCode == 13) {
                event.preventDefault();
                Handle_Firebase_Refs_and_Render();
            };

        });
    };

    if (document.getElementById('element_input_type') != null) {
        document.getElementById('element_input_type').addEventListener('keydown', (event) => {

            if (event.keyCode == 13) {
                event.preventDefault();
                Handle_Firebase_Refs_and_Render();
            };

        });
    };

    // Localize data
    if (localStorage.userid == undefined) {
        alert('welcome first timer');
        localStorage.setItem("username", 'username');
        localStorage.setItem("userid", Math.floor(Math.random() * 99999) + 1);
        localStorage.setItem("userpassword", 'userpassword');
        localStorage.setItem("useremail", 'useremail');
    };

    // events timer
    (() => {
        let int = 0;
        setInterval(function() {

            console.log(state.events.key.keys);

            if (state.events.key.keys.length == 0) {
                state.events.key.up = true;
                state.events.key.down = false;
                // console.log('no keys are being pressed');
            };
            if (state.events.key.keys.length != 0) {
                state.events.key.up = false;
                state.events.key.down = true;
                // console.log('keys are being pressed');
            };
            if (state.events.key.up == true) {
                state.events.key.timer -= 1;
                // console.log('state.events.key.timer: ' + state.events.key.timer);
            };
            if (state.events.key.up == false) {
                state.events.key.timer += 1;
                // console.log('state.events.key.timer: ' + state.events.key.timer);
            };
            if (state.events.mouse.up == true) {
                state.events.mouse.timer -= 1;
                // console.log('state.events.mouse.timer: ' + state.events.mouse.timer);
            };
            if (state.events.mouse.up == false) {
                state.events.mouse.timer += 1;
                // console.log('state.events.mouse.timer: ' + state.events.mouse.timer);
            };
            if (state.events.mouse.enter == true) {
                state.events.mouse.entertimer -= 1;
                // console.log('state.events.mouse.entertimer: ' + state.events.mouse.entertimer);
            };
            if (state.events.mouse.enter == false) {
                state.events.mouse.entertimer += 1;
                // console.log('state.events.mouse.entertimer: ' + state.events.mouse.entertimer);
            };

            int += 1;
            console.log('You have spent: ' + int + ' seconds on this site.');

        }, 1000);
    })();

    // get date
    (() => {
        setInterval(function() {
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = new Date();
            time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
            console.log(time);
            document.getElementById('time').innerText = time;
        }, 1000);
    })();

    (() => {
        setTimeout(function() {
            
            // render events
            Handle_EventListeners();

        }, 1000);
    })();

};

// Exports
export default {
    Handle_reset_ui,
    Handle_reset_ui_to_home,
    Handle_return_state,
    Handle_check_route,
    Handle_get_state_from_events,
    Handle_Firebase_Refs_and_Render,
    values_update
};