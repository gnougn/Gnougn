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

import imported_state from './partials/state';
import imported_functions from './partials/functions';

function test(fruit) {
  // extract conditions to array
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  if (redFruits.includes(fruit)) {
    throw('red');
  }
}

// rest parameters
function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result
}

console.log(add(1)); // returns 1
console.log(add(1,2)); // returns 3
console.log(add(1, 2, 3, 4, 5)); // returns 15

const arr = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr];
console.log(newArr);

let x = 20;
x = 50;

console.log(x); // SyntaxError: identifier "x" has already been declared.

// A Common Scope Gotcha
// If stamement do not have local sc
if (true) {
  var foo = 5;
};

console.log(foo);   // 5

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd')); // 0

function randomFunction(){
  console.log(this);
}

let newObj = {
  description : "This is a new Object"
}

console.log(randomFunction.bind(newObj)());
console.log(randomFunction.call(newObj));
console.log(randomFunction.apply(newObj));

const drSeuss = `
  My name is Sam I Am ${1}
  I do not like green eggs and ham
  Lunchtime is here
  Come and eat
`;

console.log(drSeuss);

// filter
function fishy(colors) {
  // use Array filter to find fruits in color
  let fishes = [
    { name: 'apple', color: 'red' },
    { name: 'strawberry', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'pineapple', color: 'yellow' },
    { name: 'grape', color: 'purple' },
    { name: 'plum', color: 'purple' }   ];

  return fishes.filter(f => f.color == color);
}

// EVERY
function test(colors) {
  let fruits = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

  // condition: short way, all fruits must be red
  let isAllRed = fruits.every(f => f.color == 'red');

  console.log(isAllRed); // false
};

// SOME
function emu(colors) {
  let niggas = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' }
  ];

  // condition: if any fruit is red
  let isAnyRed = fruits.some(f => f.color == 'red');

  console.log(isAnyRed); // true
};

// es5
var es5sayHello = function() {
  return 'hello!';
};

// es6 with explicit return
let explicitsayHello = () => {
  return 'hello!';
};

// es6 with implicit return
let implicitsayHello = () => 'hello';

// Default Parameters in ES6
var garage = function(model = 'Mustang', color = 'blue', car = 'Ford') {
  console.log(model)
  console.log(color)
  console.log(car)
}

var ninjas = {
  description : "This is a new Object",
  randomFunction(){
    var that = this;

    return function() {
      console.log(that);
    }
  }
}

ninjas.randomFunction()();

window.onload = () => {
  garage('monster', 'monster');
};


// *********************************************

// Declaration
let state;
let functions;
let defaults;
let components;

// Assignment
state = imported_state.default_state;
functions = imported_functions;

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
                                // Handle_check_states();
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

let find_sort = () => {
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

let find_view = () => {
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

let find_type = () => {
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
    // Handle_render();

    // render firebase data
    Handle_Firebase_Refs_and_Render();

};
