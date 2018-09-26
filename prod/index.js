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
                        console.clear();
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

                state.ui.colors.load_light_yellow_0.transform = true;
                state.ui.colors.load_light_yellow_0.display = true;

            };

            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

                state.ui.colors.load_light_yellow_0.transform = true;
                state.ui.colors.load_light_yellow_0.display = true;
                
            };
        };

    })();

};

let values_update = () => {

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
  console.log('Handle_init');
};

let Handle_check_states = () => {
  console.log('Handle_check_states');
  components = imported_components.get_components_handled();
  imported_ui.Handle_ui();
  Handle_display_with_delay();
  Handle_opacity();
  Handle_transform();
  Handle_init();
};

let Handle_get_state_from_events = () => {
    state = imported_events.Handle_return_state_from_events();
    console.log('state in index from events');
    // console.log(state);
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

    Handle_check_route(state.app.route);


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
    (() => {
        setInterval(function() {

            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = new Date();

            console.log(months[date.getMonth()]);
            console.log(days[date.getDay()]);

            console.log(date.getDate());
            console.log(date.getMilliseconds());
            console.log(date.getSeconds());
            console.log(date.getMinutes());
            console.log(date.getHours());
            console.log(date.getFullYear());

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
  Handle_check_route
};
