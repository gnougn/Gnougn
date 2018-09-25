// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
let default_state = {

  app: {
    route: 'null'
  },

  data: {
    firebase: {},
    wordpress: {},
    refs: false,
    sort: 'likes',
    view: 'grid',
    content: false,
    user: {},
    score: {
      current: {
        met: 0,
        area: 0
      },
      leaderboard: []
    }
  },

  animation: {
    duration: 0,
    frame: 1,
    framerate: 24,
    rate: 1000
  },

  events: {
    mouse: {
      click: {
        clientX: 0,
        clientY: 0
      },
      clientX: 0,
      clientY: 0,
      up: true,
      down: false,
      drop: {
        clientX: 0,
        clientY: 0
      },
      drag: {
        clientX: 0,
        clientY: 0
      },
      enter: true,
      leave: false,
      entertimer: 0,
      leavetimer: 0,
      timer: 0,
      automation: {
        increase: true,
        decrease: false
      },
      absolute: 0,
      alpha: 0,
      beta: 0,
      gamma: 0,
      acceleration: {
        x: 0,
        y: 0,
        z: 0
      },
      accelerationIncludingGravity: {
        x: 0,
        y: 0,
        z: 0
      },
      rotationRate: {
        alpha: 0,
        beta: 0,
        gamma: 0
      },
      interval: {
        x: 0,
        y: 0,
        z: 0
      }
    },
    key: {
      keys: [],
      pressed: {
        key_tildy: false,
        key_1: false,
        key_2: false,
        key_3: false,
        key_4: false,
        key_5: false,
        key_6: false,
        key_7: false,
        key_8: false,
        key_9: false,
        key_0: false
      },
      last_key: 0,
      up: true,
      down: false,
      timer: 0,
      automation: {
        increase: true,
        decrease: false
      }
    }
  },

  ux: {
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
      width256: window.innerWidth / 256
    }
  },

  ui: {

    colors: {
      load_light_yellow_0: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 4,
        height: 4,
        width: 4
      }
    },

    stage: {

      workspace: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 0,
        height: 3,
        width: 4,

        imac: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        monitor: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        mic: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        scarlett: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        speaker_1: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        speaker_2: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        speaker_3: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        books_1: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        books_2: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        desk: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        chair_1: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        chair_2: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        }
      },

      office: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -1,
        height: 4,
        width: 4
      },

      shoplight: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 0,
        height: 2,
        width: 2
      },

      sky: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -1,
        height: 4,
        width: 4
      },
      outside: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -1,
        height: 4,
        width: 4
      },
      enneagon: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -1,
        height: 4,
        width: 4
      }

    },

    particles: {
      player_1: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: 1,
        yaxis: 0,
        height: 4,
        width: 2,
        body: {

          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 4,
          height: 4,
          width: 4
        }
      }
    },
    interaction: {

      player_1: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: 1,
        yaxis: 0,
        height: 4,
        width: 2,
        body: {

          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 4,
          height: 4,
          width: 4
        }
      },

      enemy: {
        speed: 1,
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        xaxisascending: true,
        yaxis: 0,
        height: 4,
        width: 2,
        yaxisascending: true,
        actions: {
          jump: false
        }
      },

      helper: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -4,
        height: 8,
        width: 4
      },

      easel: {
        display: false,
        transform: false,
        opacity: false,
        pen: [],
        pencil: []
      },

      dice: Math.floor(Math.random() * 6) + 1,

      random: Math.floor(Math.random() * 100) + 1,

      bullets: [{
        xaxis: 0,
        yaxis: 0
      }, {
        xaxis: 0,
        yaxis: 0
      }, {
        xaxis: 0,
        yaxis: 0
      }, {
        xaxis: 0,
        yaxis: 0
      }],

      hands: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      track_x: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      track_y: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      ball: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      bounce: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      snake: [{
        xaxis: 0,
        yaxis: 0
      }]
    },

    gui: {

      top: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      top_left: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      top_right: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      bottom_left: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      bottom_right: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      left: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      right: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      scroll: {
        x: {
          transform: false,
          opacity: false,
          display: false
        },
        y: {
          transform: false,
          opacity: false,
          display: false
        }
      }
    },

    modal: {
      pop: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      page: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      fade: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      gradient: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      morph: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      menu: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      overlay: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      nav: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      corner: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      }

    }

  }

};

let from_Import = () => {
  console.log('from state');
};

from_Import();

exports.default = {
  from_Import,
  default_state
};
},{}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  g.addEventListener('click', function () {
    _index2.default.Handle_check_route(this.innerText, '');
  });

  return g;
};

let Generate_new_link = (innerHTML, classString, idString, index) => {
  let g = document.createElement('a');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;

  g.addEventListener('click', function () {
    _index2.default.Handle_check_route(this.innerText, '');
  });

  return g;
};

let Generate_new_span = (innerHTML, classString, idString, index) => {
  let g = document.createElement('span');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

let Generate_new_li = (innerHTML, classString, idString, index) => {
  let g = document.createElement('li');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

// Handles
let Toggle_functions_IF_State = (function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) => {

  // Function Check # 1
  (function () {
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
        setTimeout(function () {

          MANIPULATED.classList.remove(addThisClass_if_state_false);
          MANIPULATED.classList.add(addThisClass_if_state_true);
        }, 1);

        return;
      };
    };

    if (Ui_State == false) {

      if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

        // remove item after buffer
        setTimeout(function () {
          MANIPULATED.classList.add(addThisClass_if_state_false);
          MANIPULATED.classList.remove(addThisClass_if_state_true);
        }, 1);

        return;
      };
    };
  };
};

let Toggle_display_and_opacity_on_with_no_delay = id => {

  let MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {

    if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('display_none');
        MANIPULATED.classList.add('display');
      }, 0);

      // remove item after buffer
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_0');
        MANIPULATED.classList.add('opacity_1');
      }, 100);

      return;
    };
  };
};

let Toggle_display_and_opacity_off_with_delay = id => {

  let MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {

    if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_1');
        MANIPULATED.classList.add('opacity_0');
      }, 0);

      // remove item after buffer
      setTimeout(function () {
        MANIPULATED.classList.remove('display');
        MANIPULATED.classList.add('display_none');
      }, 100);

      return;
    };
  };
};

from_Import();

exports.default = {
  from_Import,
  Generate_new_link,
  Generate_new_fragment,
  Generate_new_div,
  Generate_new_span,
  Generate_new_li,
  Toggle_functions_IF_State,
  Toggle_classes_IF_State,
  Toggle_display_and_opacity_on_with_no_delay,
  Toggle_display_and_opacity_off_with_delay
};
},{"../index.js":3}],3:[function(require,module,exports) {
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

var _state = require("./partials/state");

var _state2 = _interopRequireDefault(_state);

var _functions = require("./partials/functions");

var _functions2 = _interopRequireDefault(_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function test(fruit) {
  // extract conditions to array
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  if (redFruits.includes(fruit)) {
    throw 'red';
  }
}

// rest parameters
function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result;
}

console.log(add(1)); // returns 1
console.log(add(1, 2)); // returns 3
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

console.log(foo); // 5

const countVowels = str => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd')); // 0

function randomFunction() {
  console.log(this);
}

let newObj = {
  description: "This is a new Object"
};

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
  let fishes = [{ name: 'apple', color: 'red' }, { name: 'strawberry', color: 'red' }, { name: 'banana', color: 'yellow' }, { name: 'pineapple', color: 'yellow' }, { name: 'grape', color: 'purple' }, { name: 'plum', color: 'purple' }];

  return fishes.filter(f => f.color == color);
}

// EVERY
function test(colors) {
  let fruits = [{ name: 'apple', color: 'red' }, { name: 'banana', color: 'yellow' }, { name: 'grape', color: 'purple' }];

  // condition: short way, all fruits must be red
  let isAllRed = fruits.every(f => f.color == 'red');

  console.log(isAllRed); // false
};

// SOME
function emu(colors) {
  let niggas = [{ name: 'apple', color: 'red' }, { name: 'banana', color: 'yellow' }, { name: 'grape', color: 'purple' }];

  // condition: if any fruit is red
  let isAnyRed = fruits.some(f => f.color == 'red');

  console.log(isAnyRed); // true
};

// es5
var es5sayHello = function () {
  return 'hello!';
};

// es6 with explicit return
let explicitsayHello = () => {
  return 'hello!';
};

// es6 with implicit return
let implicitsayHello = () => 'hello';

// Default Parameters in ES6
var garage = function (model = 'Mustang', color = 'blue', car = 'Ford') {
  console.log(model);
  console.log(color);
  console.log(car);
};

var ninjas = {
  description: "This is a new Object",
  randomFunction() {
    var that = this;

    return function () {
      console.log(that);
    };
  }
};

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
state = _state2.default.default_state;
functions = _functions2.default;

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
    rootRef.on('value', function (snapshot) {
      var obj = snapshot.val();
      state.data.firebase = obj;
      console.log('state.data.firebase');
      console.log(state.data.firebase);
    });

    state.data.refs = false;
  })();

  // set firebase data
  (() => {

    var Handle_Repeat_Firebase_Validation = setInterval(function () {

      // repeat until refs are set
      if (state.data.refs == false) {

        let temp = state.data.firebase;
        // console.log('firbase objects -> firbase array');

        if (temp.gnougn.abilities != null) {
          // abilities
          // set objects to array - part 1

          let result_abilities = Object.keys(temp.gnougn.abilities).map(function (key) {
            return temp.gnougn.abilities[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.abilities = result_abilities;
          // console.log('abilities');
          // console.log(state.data.firebase.gnougn.abilities);
        };

        if (temp.gnougn.library != null) {
          // library
          // set objects to array - part 1
          let result_library = Object.keys(temp.gnougn.library).map(function (key) {
            return temp.gnougn.library[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.library = result_library;
          // console.log('library');
          // console.log(state.data.firebase.gnougn.library);
        };

        if (temp.gnougn.partners != null) {
          // partners
          // set objects to array - part 1
          let result_partners = Object.keys(temp.gnougn.partners).map(function (key) {
            return temp.gnougn.partners[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.partners = result_partners;
          // console.log('partners');
          // console.log(state.data.firebase.gnougn.partners);
        };

        if (temp.gnougn.services != null) {
          // services
          // set objects to array - part 1
          let result_services = Object.keys(temp.gnougn.services).map(function (key) {
            return temp.gnougn.services[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.services = result_services;
          // console.log('services');
          // console.log(state.data.firebase.gnougn.services);
        };

        if (temp.gnougn.roster != null) {
          // roster
          // set objects to array - part 1
          let result_roster = Object.keys(temp.gnougn.roster).map(function (key) {
            return temp.gnougn.roster[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.roster = result_roster;
          // console.log('roster');
          // console.log(state.data.firebase.gnougn.roster);
        };

        if (temp.gnougn.skills != null) {
          // skills
          // set objects to array - part 1
          let result_skills = Object.keys(temp.gnougn.skills).map(function (key) {
            return temp.gnougn.skills[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.skills = result_skills;
          // console.log('skills');
          // console.log(state.data.firebase.gnougn.skills);
        };

        if (temp.gnougn.skills != null) {

          console.log(state.data.firebase.gnougn);

          // Render listtings to front_end
          setTimeout(function () {
            state.data.refs = true;
            Handle_firebase_render();

            // check ui state
            setTimeout(function () {

              setInterval(function () {
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
    setTimeout(function () {

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
        document.getElementById('element_ol_firebase_roster').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li('\
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
                ', [], 'element_ol_firebase_roster_post', '')));
      }
    }, 0);
  })();

  // render library
  (() => {
    setTimeout(function () {

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
        document.getElementById('element_ol_firebase_library').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li('\
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
                        ', '' + filtered_array_gnougn_library[i].type + '', 'element_ol_firebase_library_post', '')));
      }

      // 6.) add events later
    }, 0);
  })();

  // render abilities
  (() => {
    setTimeout(function () {

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
        document.getElementById('element_ol_firebase_abilities').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li('\
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
                        ', [], 'element_ol_firebase_abilities_post', '')));
      }
    }, 0);
  })();

  // render partners
  (() => {
    setTimeout(function () {

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
        document.getElementById('element_ol_firebase_partners').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li('\
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
                        ', [], 'element_ol_firebase_partners_post', '')));
      }
    }, 0);
  })();

  // render skills
  (() => {
    setTimeout(function () {

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
        document.getElementById('element_ol_firebase_skills').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li('\
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
                        ', [], 'element_ol_firebase_skills_post', '')));
      }
    }, 0);
  })();

  // render services
  (() => {
    setTimeout(function () {

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
        document.getElementById('element_ol_firebase_services').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li('\
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
                        ', [], 'element_ol_firebase_services_post', '')));
      }
    }, 0);
  })();

  // add event listeners
  (() => {
    setTimeout(function () {

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

        element_ol_firebase_roster_posts[i].children[0].addEventListener("click", function (event) {
          // route
          Handle_check_route('roster_preview', '');
        });
      };

      // Objects: Firebase Library Items
      // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))
      let element_ol_firebase_library_posts = document.querySelectorAll('#element_ol_firebase_library_post');
      for (let i = 0; i < element_ol_firebase_library_posts.length; i++) {

        let passed_library = filtered_array_gnougn_library;

        element_ol_firebase_library_posts[i].children[0].addEventListener("click", function (event) {

          Handle_check_route('library_preview', array_gnougn_library[i]);
        });
      };

      // Objects: Firebase abilities Items
      // console.log(document.querySelectorAll('#element_ol_firebase_abilities_posts'))
      let element_ol_firebase_abilities_posts = document.querySelectorAll('#element_ol_firebase_abilities_post');
      for (let i = 0; i < element_ol_firebase_abilities_posts.length; i++) {

        let passed_abilities = filtered_array_gnougn_abilities;

        element_ol_firebase_abilities_posts[i].children[0].children[0].children[2].children[2].addEventListener("click", function (event) {

          // Listing data();
          console.log(array_gnougn_abilities[i]);

          // render
          let abilities_preview_page = imported_generators.component_generator('abilities_preview', 'state', state.data.firebase.gnougn.abilities, array_gnougn_abilities[i]);
          document.getElementById('component_app_modal_element_page_top').innerHTML = '';
          document.getElementById('component_app_modal_element_page_top').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_div(abilities_preview_page, 'position_relative width_100 height_100vh float_left', 'id', '')));

          // route
          state.app.route = 'abilities_preview';
          Handle_check_route(state.app.route, '');
        });
      };

      // Objects: Firebase services Items
      // console.log(document.querySelectorAll('#element_ol_firebase_services_posts'))
      let element_ol_firebase_services_posts = document.querySelectorAll('#element_ol_firebase_services_post');
      for (let i = 0; i < element_ol_firebase_services_posts.length; i++) {

        let passed_services = filtered_array_gnougn_services;

        element_ol_firebase_services_posts[i].children[0].children[0].children[2].children[2].addEventListener("click", function (event) {

          // Listing data();
          console.log(array_gnougn_services[i]);

          // render
          let services_preview_page = imported_generators.component_generator('services_preview', 'state', state.data.firebase.gnougn.services, array_gnougn_services[i]);
          document.getElementById('component_app_modal_element_page_top').innerHTML = '';
          document.getElementById('component_app_modal_element_page_top').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_div(services_preview_page, 'position_relative width_100 height_100vh float_left', 'id', '')));

          // route
          state.app.route = 'services_preview';
          Handle_check_route(state.app.route, '');
        });
      };

      // Objects: Firebase skills Items
      // console.log(document.querySelectorAll('#element_ol_firebase_skills_posts'))
      let element_ol_firebase_skills_posts = document.querySelectorAll('#element_ol_firebase_skills_post');
      for (let i = 0; i < element_ol_firebase_skills_posts.length; i++) {

        let passed_skills = filtered_array_gnougn_skills;

        element_ol_firebase_skills_posts[i].children[0].children[0].children[2].children[2].addEventListener("click", function (event) {

          // Listing data();
          console.log(array_gnougn_skills[i]);

          // render
          let skills_preview_page = imported_generators.component_generator('skills_preview', 'state', state.data.firebase.gnougn.skills, array_gnougn_skills[i]);
          document.getElementById('component_app_modal_element_page_top').innerHTML = '';
          document.getElementById('component_app_modal_element_page_top').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_div(skills_preview_page, 'position_relative width_100 height_100vh float_left', 'id', '')));

          // route
          state.app.route = 'skills_preview';
          Handle_check_route(state.app.route, '');
        });
      };

      // Objects: Firebase partners Items
      // console.log(document.querySelectorAll('#element_ol_firebase_partners_posts'))
      let element_ol_firebase_partners_posts = document.querySelectorAll('#element_ol_firebase_partners_post');
      for (let i = 0; i < element_ol_firebase_partners_posts.length; i++) {

        let passed_partners = filtered_array_gnougn_partners;

        element_ol_firebase_partners_posts[i].children[0].children[0].children[2].children[2].addEventListener("click", function (event) {

          // Listing data();
          console.log(array_gnougn_partners[i]);

          // render
          let partners_preview_page = imported_generators.component_generator('partners_preview', 'state', state.data.firebase.gnougn.partners, array_gnougn_partners[i]);
          document.getElementById('component_app_modal_element_page_top').innerHTML = '';
          document.getElementById('component_app_modal_element_page_top').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_div(partners_preview_page, 'position_relative width_100 height_100vh float_left', 'id', '')));

          // route
          state.app.route = 'partners_preview';
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
  if (document.getElementById('element_input_sort').value == 'likesup') {
    return function (a, b) {
      return a.likes - b.likes;
    };
  };
  if (document.getElementById('element_input_sort').value == 'likesdown') {
    return function (a, b) {
      return b.likes - a.likes;
    };
  };
};

let find_view = () => {
  if (document.getElementById('element_input_view').value == 'card') {
    document.getElementById('element_ol_firebase_library').classList.add('card');
    document.getElementById('element_ol_firebase_library').classList.remove('grid');
    document.getElementById('element_ol_firebase_library').classList.remove('list');
  };

  if (document.getElementById('element_input_view').value == 'grid') {
    document.getElementById('element_ol_firebase_library').classList.add('grid');
    document.getElementById('element_ol_firebase_library').classList.remove('card');
    document.getElementById('element_ol_firebase_library').classList.remove('list');
  };
};

let find_type = () => {
  if (document.getElementById('element_input_type').value == 'gallery') {
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
},{"./partials/state":5,"./partials/functions":4}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':62125/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,3])