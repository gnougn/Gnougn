
import from_index from '../index.js';

let from_Import = () => {
    console.log('from functions');
};


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

// 5. Functions
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (innerHTML, classString, idString, index) => {
    let g = document.createElement('div');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_link = (innerHTML, classString, idString, index) => {
    let g = document.createElement('a');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_span = (innerHTML, classString, idString, index) => {
    let g = document.createElement('span');
    g.setAttribute("id", idString + index);
    g.classList = classString;
    g.innerHTML = innerHTML;
    return g
};

let Generate_new_li = (data) => {
    console.log(data.title);
    let ELEMENT = document.createElement('li');
    ELEMENT.setAttribute("id", data.title);
    ELEMENT.classList = data.title;
    ELEMENT.innerHTML = `Hello peeps ${data.title}, yo`;

    // Objects: Firebase Library Items
    // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))
    ELEMENT.addEventListener("click", function(event) {

        from_index.Handle_check_route('library_preview', data);

    });

    return ELEMENT
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
