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
})({4:[function(require,module,exports) {
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
},{}],5:[function(require,module,exports) {
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

// 5. Functions
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (innerHTML, classString, idString, index) => {
  let g = document.createElement('div');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

let Generate_new_link = (innerHTML, classString, idString, index) => {
  let g = document.createElement('a');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

let Generate_new_span = (innerHTML, classString, idString, index) => {
  let g = document.createElement('span');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

let Generate_new_li = data => {
  console.log(data.title);
  let ELEMENT = document.createElement('li');
  ELEMENT.setAttribute("id", data.title);
  ELEMENT.classList = data.title;
  ELEMENT.innerHTML = `Hello peeps ${data.title}, yo`;

  // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))
  ELEMENT.addEventListener("click", function (event) {

    _index2.default.Handle_check_route('library_preview', data);
  });

  return ELEMENT;
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
},{"../index.js":3}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let state = '';

// Desktop
// Imports
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

  document.getElementById('component_app').addEventListener('click', event => {
    state = _index2.default.Handle_return_state();

    // console.log('state in events');
    state.events.mouse.click.clientX = event.clientX;
    state.events.mouse.click.clientY = event.clientY;
    console.log(state.events.mouse.click.clientX);
    console.log(state.events.mouse.click.clientY);
    console.log('click');

    // x axis: 1
    if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 1) {
      console.log('mouse is in clientX:1 x clientY:1 grid');
      state.events.mouse.clientX = 1;
      state.events.mouse.clientY = 1;
    };

    if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 2) {
      console.log('mouse is in clientX:1 x clientY:2 grid');
      state.events.mouse.clientX = 1;
      state.events.mouse.clientY = 2;
    };

    if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 3) {
      console.log('mouse is in clientX:1 x clientY:3 grid');
      state.events.mouse.clientX = 1;
      state.events.mouse.clientY = 3;
    };

    if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 4) {
      console.log('mouse is in clientX:1 x clientY:4 grid');
      state.events.mouse.clientX = 1;
      state.events.mouse.clientY = 4;
    };

    if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 5) {
      console.log('mouse is in clientX:1 x clientY:5 grid');
      state.events.mouse.clientX = 1;
      state.events.mouse.clientY = 5;
    };

    if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 6) {
      console.log('mouse is in clientX:1 x clientY:6 grid');
      state.events.mouse.clientX = 1;
      state.events.mouse.clientY = 6;
    };

    if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 7) {
      console.log('mouse is in clientX:1 x clientY:7 grid');
      state.events.mouse.clientX = 1;
      state.events.mouse.clientY = 7;
    };

    if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 8) {
      console.log('mouse is in clientX:1 x clientY:8 grid');
      state.events.mouse.clientX = 1;
      state.events.mouse.clientY = 8;
    };

    // x axis: 2

    if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 1) {
      console.log('mouse is in clientX:2 x clientY:1 grid');
      state.events.mouse.clientX = 2;
      state.events.mouse.clientY = 1;
    };

    if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 2) {
      console.log('mouse is in clientX:2 x clientY:2 grid');
      state.events.mouse.clientX = 2;
      state.events.mouse.clientY = 2;
    };

    if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 3) {
      console.log('mouse is in clientX:2 x clientY:3 grid');
      state.events.mouse.clientX = 2;
      state.events.mouse.clientY = 3;
    };

    if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 4) {
      console.log('mouse is in clientX:2 x clientY:4 grid');
      state.events.mouse.clientX = 2;
      state.events.mouse.clientY = 4;
    };

    if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 5) {
      console.log('mouse is in clientX:2 x clientY:5 grid');
      state.events.mouse.clientX = 2;
      state.events.mouse.clientY = 5;
    };

    if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 6) {
      console.log('mouse is in clientX:2 x clientY:6 grid');
      state.events.mouse.clientX = 2;
      state.events.mouse.clientY = 6;
    };

    if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 7) {
      console.log('mouse is in clientX:2 x clientY:7 grid');
      state.events.mouse.clientX = 2;
      state.events.mouse.clientY = 7;
    };

    if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 8) {
      console.log('mouse is in clientX:2 x clientY:8 grid');
      state.events.mouse.clientX = 2;
      state.events.mouse.clientY = 8;
    };

    // x axis: 3
    if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 1) {
      console.log('mouse is in clientX:3 x clientY:1 grid');
      state.events.mouse.clientX = 3;
      state.events.mouse.clientY = 1;
    };

    if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 2) {
      console.log('mouse is in clientX:3 x clientY:2 grid');
      state.events.mouse.clientX = 3;
      state.events.mouse.clientY = 2;
    };

    if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 3) {
      console.log('mouse is in clientX:3 x clientY:3 grid');
      state.events.mouse.clientX = 3;
      state.events.mouse.clientY = 3;
    };

    if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 4) {
      console.log('mouse is in clientX:3 x clientY:4 grid');
      state.events.mouse.clientX = 3;
      state.events.mouse.clientY = 4;
    };

    if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 5) {
      console.log('mouse is in clientX:3 x clientY:5 grid');
      state.events.mouse.clientX = 3;
      state.events.mouse.clientY = 5;
    };

    if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 6) {
      console.log('mouse is in clientX:3 x clientY:6 grid');
      state.events.mouse.clientX = 3;
      state.events.mouse.clientY = 6;
    };

    if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 7) {
      console.log('mouse is in clientX:3 x clientY:7 grid');
      state.events.mouse.clientX = 3;
      state.events.mouse.clientY = 7;
    };

    if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 8) {
      console.log('mouse is in clientX:3 x clientY:8 grid');
      state.events.mouse.clientX = 3;
      state.events.mouse.clientY = 8;
    };

    // x axis: 4
    if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 1) {
      console.log('mouse is in clientX:4 x clientY:1 grid');
      state.events.mouse.clientX = 4;
      state.events.mouse.clientY = 1;
    };

    if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 2) {
      console.log('mouse is in clientX:4 x clientY:2 grid');
      state.events.mouse.clientX = 4;
      state.events.mouse.clientY = 2;
    };

    if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 3) {
      console.log('mouse is in clientX:4 x clientY:3 grid');
      state.events.mouse.clientX = 4;
      state.events.mouse.clientY = 3;
    };

    if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 4) {
      console.log('mouse is in clientX:4 x clientY:4 grid');
      state.events.mouse.clientX = 4;
      state.events.mouse.clientY = 4;
    };

    if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 5) {
      console.log('mouse is in clientX:4 x clientY:5 grid');
      state.events.mouse.clientX = 4;
      state.events.mouse.clientY = 5;
    };

    if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 6) {
      console.log('mouse is in clientX:4 x clientY:6 grid');
      state.events.mouse.clientX = 4;
      state.events.mouse.clientY = 6;
    };

    if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 7) {
      console.log('mouse is in clientX:4 x clientY:7 grid');
      state.events.mouse.clientX = 4;
      state.events.mouse.clientY = 7;
    };

    if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 8) {
      console.log('mouse is in clientX:4 x clientY:8 grid');
      state.events.mouse.clientX = 4;
      state.events.mouse.clientY = 8;
    };

    // x axis: 5
    if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 1) {
      console.log('mouse is in clientX:5 x clientY:1 grid');
      state.events.mouse.clientX = 5;
      state.events.mouse.clientY = 1;
    };

    if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 2) {
      console.log('mouse is in clientX:5 x clientY:2 grid');
      state.events.mouse.clientX = 5;
      state.events.mouse.clientY = 2;
    };

    if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 3) {
      console.log('mouse is in clientX:5 x clientY:3 grid');
      state.events.mouse.clientX = 5;
      state.events.mouse.clientY = 3;
    };

    if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 4) {
      console.log('mouse is in clientX:5 x clientY:4 grid');
      state.events.mouse.clientX = 5;
      state.events.mouse.clientY = 4;
    };

    if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 5) {
      console.log('mouse is in clientX:5 x clientY:5 grid');
      state.events.mouse.clientX = 5;
      state.events.mouse.clientY = 5;
    };

    if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 6) {
      console.log('mouse is in clientX:5 x clientY:6 grid');
      state.events.mouse.clientX = 5;
      state.events.mouse.clientY = 6;
    };

    if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 7) {
      console.log('mouse is in clientX:5 x clientY:7 grid');
      state.events.mouse.clientX = 5;
      state.events.mouse.clientY = 7;
    };

    if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 8) {
      console.log('mouse is in clientX:5 x clientY:8 grid');
      state.events.mouse.clientX = 5;
      state.events.mouse.clientY = 8;
    };

    // x axis: 6

    if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 1) {
      console.log('mouse is in clientX:6 x clientY:1 grid');
      state.events.mouse.clientX = 6;
      state.events.mouse.clientY = 1;
    };

    if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 2) {
      console.log('mouse is in clientX:6 x clientY:2 grid');
      state.events.mouse.clientX = 6;
      state.events.mouse.clientY = 2;
    };

    if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 3) {
      console.log('mouse is in clientX:6 x clientY:3 grid');
      state.events.mouse.clientX = 6;
      state.events.mouse.clientY = 3;
    };

    if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 4) {
      console.log('mouse is in clientX:6 x clientY:4 grid');
      state.events.mouse.clientX = 6;
      state.events.mouse.clientY = 4;
    };

    if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 5) {
      console.log('mouse is in clientX:6 x clientY:5 grid');
      state.events.mouse.clientX = 6;
      state.events.mouse.clientY = 5;
    };

    if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 6) {
      console.log('mouse is in clientX:6 x clientY:6 grid');
      state.events.mouse.clientX = 6;
      state.events.mouse.clientY = 6;
    };

    if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 7) {
      console.log('mouse is in clientX:6 x clientY:7 grid');
      state.events.mouse.clientX = 6;
      state.events.mouse.clientY = 7;
    };

    if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 8) {
      console.log('mouse is in clientX:6 x clientY:8 grid');
      state.events.mouse.clientX = 6;
      state.events.mouse.clientY = 8;
    };

    // x axis: 7
    if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 1) {
      console.log('mouse is in clientX:7 x clientY:1 grid');
      state.events.mouse.clientX = 7;
      state.events.mouse.clientY = 1;
    };

    if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 2) {
      console.log('mouse is in clientX:7 x clientY:2 grid');
      state.events.mouse.clientX = 7;
      state.events.mouse.clientY = 2;
    };

    if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 3) {
      console.log('mouse is in clientX:7 x clientY:3 grid');
      state.events.mouse.clientX = 7;
      state.events.mouse.clientY = 3;
    };

    if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 4) {
      console.log('mouse is in clientX:7 x clientY:4 grid');
      state.events.mouse.clientX = 7;
      state.events.mouse.clientY = 4;
    };

    if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 5) {
      console.log('mouse is in clientX:7 x clientY:5 grid');
      state.events.mouse.clientX = 7;
      state.events.mouse.clientY = 5;
    };

    if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 6) {
      console.log('mouse is in clientX:7 x clientY:6 grid');
      state.events.mouse.clientX = 7;
      state.events.mouse.clientY = 6;
    };

    if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 7) {
      console.log('mouse is in clientX:7 x clientY:7 grid');
      state.events.mouse.clientX = 7;
      state.events.mouse.clientY = 7;
    };

    if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 8) {
      console.log('mouse is in clientX:7 x clientY:8 grid');
      state.events.mouse.clientX = 7;
      state.events.mouse.clientY = 8;
    };

    // x axis: 8
    if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 1) {
      console.log('mouse is in clientX:8 x clientY:1 grid');
      state.events.mouse.clientX = 8;
      state.events.mouse.clientY = 1;
    };

    if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 2) {
      console.log('mouse is in clientX:8 x clientY:2 grid');
      state.events.mouse.clientX = 8;
      state.events.mouse.clientY = 2;
    };

    if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 3) {
      console.log('mouse is in clientX:8 x clientY:3 grid');
      state.events.mouse.clientX = 8;
      state.events.mouse.clientY = 3;
    };

    if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 4) {
      console.log('mouse is in clientX:8 x clientY:4 grid');
      state.events.mouse.clientX = 8;
      state.events.mouse.clientY = 4;
    };

    if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 5) {
      console.log('mouse is in clientX:8 x clientY:5 grid');
      state.events.mouse.clientX = 8;
      state.events.mouse.clientY = 5;
    };

    if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 6) {
      console.log('mouse is in clientX:8 x clientY:6 grid');
      state.events.mouse.clientX = 8;
      state.events.mouse.clientY = 6;
    };

    if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 7) {
      console.log('mouse is in clientX:8 x clientY:7 grid');
      state.events.mouse.clientX = 8;
      state.events.mouse.clientY = 7;
    };

    if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 8) {
      console.log('mouse is in clientX:8 x clientY:8 grid');
      state.events.mouse.clientX = 8;
      state.events.mouse.clientY = 8;
    };

    _index2.default.Handle_get_state_from_events();
  });

  document.getElementById('component_app').addEventListener('wheel', event => {
    state = _index2.default.Handle_return_state();

    // console.log('state in events');

    console.log('wheel');

    if (event.deltaY < 0) {
      console.log('scrolling up');
    };

    if (event.deltaY > 0) {
      console.log('scrolling down');
    };

    _index2.default.Handle_get_state_from_events();
  });

  document.getElementById('component_app').addEventListener('scroll', event => {
    state = _index2.default.Handle_return_state();
    // console.log('state in events');
  });

  document.getElementById('component_app').addEventListener('mouseup', event => {
    state = _index2.default.Handle_return_state();
    state.events.mouse.up = true;
    // console.log('state in events');
    console.log('mouseup');
    _index2.default.Handle_get_state_from_events();
  });

  document.getElementById('component_app').addEventListener('mousedown', event => {
    state = _index2.default.Handle_return_state();
    state.events.mouse.up = false;
    // console.log('state in events');
    console.log('mousedown');
    _index2.default.Handle_get_state_from_events();
  });

  document.getElementById('component_app').addEventListener('mouseenter', event => {
    state = _index2.default.Handle_return_state();
    state.events.mouse.enter = true;
    state.events.mouse.leave = false;
    // console.log('state in events');
    console.log('mouseenter');
    _index2.default.Handle_get_state_from_events();
  });

  document.getElementById('component_app').addEventListener('mouseleave', event => {
    state = _index2.default.Handle_return_state();
    state.events.mouse.enter = false;
    state.events.mouse.leave = true;
    // console.log('state in events');
    console.log('mouseleave');
    _index2.default.Handle_get_state_from_events();
  });

  document.getElementById('component_app').addEventListener('mousemove', event => {
    state = _index2.default.Handle_return_state();
    // console.log('state in events');
    if (state.events.mouse.up == true) {
      console.log('drop');
    };
    if (state.events.mouse.up == false) {
      console.log('drag');
    };

    if (state.events != null) {

      state.events.mouse.clientX = event.clientX;
      state.events.mouse.clientY = event.clientY;

      /*
      if (state.ui.interaction.easel.display == true) {
           if (state.events.mouse.up == true) {
               state.ui.interaction.easel.pencil.push({
                  'xaxis': event.clientX,
                  'yaxis': event.clientY
              })
              if (document.getElementById('component_app_interaction_easel_pencil') != null) {
                  document.getElementById('component_app_interaction_easel_pencil').innerHTML = '';
                   for (let i = 0; i < state.ui.interaction.easel.pencil.length; i++) {
                      document.getElementById('component_app_interaction_easel_pencil').innerHTML += '<div class="background-dark-yellow-9 position_absolute margin_auto width_1vh height_1vh" style="top:' + (state.ui.interaction.easel.pencil[i].yaxis) + 'px; left:' + (state.ui.interaction.easel.pencil[i].xaxis) + 'px;"></div>'
                  };
              };
          };
           if (state.events.mouse.down == true) {
               state.ui.interaction.easel.pen.push({
                  'xaxis': event.clientX,
                  'yaxis': event.clientY
              })
               if (document.getElementById('component_app_interaction_easel_pen') != null) {
                  document.getElementById('component_app_interaction_easel_pen').innerHTML = '';
                   for (let i = 0; i < state.ui.interaction.easel.pen.length; i++) {
                      document.getElementById('component_app_interaction_easel_pen').innerHTML += '<div class="background-light-yellow-9 position_absolute margin_auto width_1vh height_1vh" style="top:' + (state.ui.interaction.easel.pen[i].yaxis) + 'px; left:' + (state.ui.interaction.easel.pen[i].xaxis) + 'px;"></div>'
                  };
              };
          };
      };
      */

      if (state.events.mouse.up == true) {
        state.events.mouse.drop.clientX = event.clientX;
        state.events.mouse.drop.clientY = event.clientY;
      };

      if (state.events.mouse.up == false) {
        console.log('mousemove + mouse.down = "dragging"');
        state.events.mouse.drag.clientX = event.clientX;
        state.events.mouse.drag.clientY = event.clientY;
      };
    };

    console.log('mousemove');
    _index2.default.Handle_get_state_from_events();
  });

  document.getElementById('component_app').addEventListener('keydown', event => {
    state = _index2.default.Handle_return_state();
    // console.log('state in events');
    console.log('keydown');

    let keyCode = event.keyCode;
    console.log('keyCode: ' + keyCode);
    console.log('keys held: ');
    console.log(state.events.key.keys);

    let matched = false;

    for (var i = 0; i < state.events.key.keys.length; i++) {
      if (state.events.key.keys[i] == event.keyCode) {
        matched = true;
      };
    };

    if (matched == false) {
      state.events.key.keys.push(event.keyCode);
    };

    // zero
    if (keyCode == 48) {
      console.log('0');
    };
    // one
    if (keyCode == 49) {
      console.log('1');
    };
    // two
    if (keyCode == 50) {
      console.log('2');
    };
    // three
    if (keyCode == 51) {
      console.log('3');
    };
    // four
    if (keyCode == 52) {
      console.log('4');
    };
    // five
    if (keyCode == 53) {
      console.log('5');
    };
    // six
    if (keyCode == 54) {
      console.log('6');
    };
    // seven
    if (keyCode == 55) {
      console.log('7');
    };
    // eight
    if (keyCode == 56) {
      console.log('8');
    };
    // nine
    if (keyCode == 57) {
      console.log('9');
    };
    // plus
    if (keyCode == 187) {};
    // minus
    if (keyCode == 189) {};

    // backspace
    if (event.keyCode == 8) {
      state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
      state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
    };

    // tab
    if (event.keyCode == 9) {
      console.log('tab');
      _index2.default.Handle_reset_ui();
    };

    // enter
    if (event.keyCode == 13) {

      state.ui.gui.scroll.y.display = true;
      state.ui.gui.scroll.y.opacity = true;

      setTimeout(function () {
        state.ui.gui.scroll.y.transform = !state.ui.gui.scroll.y.transform;
      }, 1000);
    };

    // esc
    if (event.keyCode == 27) {
      console.log('esc');

      _index2.default.Handle_reset_ui_to_home();
    };

    // arrow left
    if (event.keyCode == 37) {
      console.log('arrow');
      state.ui.stage.enneagon.xaxis -= 1;
      console.log(state.ui.stage.enneagon.xaxis);
    };

    // arrow down
    if (event.keyCode == 38) {
      console.log('arrow');
      state.ui.stage.enneagon.yaxis -= 1;
      console.log(state.ui.stage.enneagon.yaxis);
    };

    // arrow up
    if (event.keyCode == 39) {
      console.log('arrow');
      state.ui.stage.enneagon.xaxis += 1;
      console.log(state.ui.stage.enneagon.xaxis);
    };

    // arrow right
    if (event.keyCode == 40) {
      console.log('arrow');
      state.ui.stage.enneagon.yaxis += 1;
      console.log(state.ui.stage.enneagon.yaxis);
    };

    // a
    if (event.keyCode == 65) {
      state.ui.interaction.player_1.xaxis -= 1;

      if (state.ui.interaction.player_1.display == true) {
        if (state.ui.interaction.player_1.xaxis == state.ui.pieces.workspace.desk.xaxis) {
          state.data.score.current.met += 1;
        };
      };
    };

    // d
    if (event.keyCode == 68) {
      state.ui.interaction.player_1.xaxis += 1;

      if (state.ui.interaction.player_1.display == true) {
        if (state.ui.interaction.player_1.xaxis == state.ui.pieces.workspace.desk.xaxis) {
          state.data.score.current.met += 1;
        };
      };
    };

    // w
    if (event.keyCode == 83) {
      state.ui.interaction.player_1.yaxis -= 1;
    };

    // s
    if (event.keyCode == 87) {
      state.ui.interaction.player_1.yaxis += 1;
    };

    if (keyCode == 192) {};

    _index2.default.Handle_get_state_from_events();
  });

  document.getElementById('component_app').addEventListener('keyup', event => {
    state = _index2.default.Handle_return_state();
    // console.log('state in events');
    console.log('keyup');

    state = _index2.default.Handle_return_state();
    console.log('event: keyup');
    console.log(event);
    var index = state.events.key.keys.indexOf(event.keyCode);

    if (index > -1) {
      state.events.key.keys.splice(index, 1);
    };

    _index2.default.Handle_get_state_from_events();
  });
};

// Mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  component_app.addEventListener("click", function (event) {
    alert('on phone');
  });
};

let Handle_return_state_from_events = () => {
  return state;
};

exports.default = {
  state,
  Handle_return_state_from_events
};
},{"../index.js":3}],121:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
let element_grid_cross = () => {
  let component = '\
    <div id="grid_cross" class="display_none opacity_0 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto grid_cross">\
    </div>\
  ';

  return component;
};

let element_grid_depth_90 = () => {
  let component = '\
    <div id="grid_depth_90" class="display_none opacity_0 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto grid_depth_90">\
    </div>\
  ';

  return component;
};

exports.default = {
  element_grid_cross,
  element_grid_depth_90
};
},{}],6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elements = require("./elements");

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let state = '';

let colors = [{
  parent: 'component_app',
  id: '',
  classList: '',
  innerHTML: `
      ${_elements2.default.element_grid_cross()}
      ${_elements2.default.element_grid_depth_90()}
      <input type="text" placeholder="search..." id="element_input_filter"/>
      <input type="text" placeholder="sort by likesup, likesdown" id="element_input_sort"/>
      <input type="text" placeholder="card, grid or list" id="element_input_view"/>
      <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      <ul id="element_ol_firebase_roster"></ul>
      <ul id="element_ol_firebase_library"></ul>
      <ul id="element_ol_firebase_skills"></ul>
      <ul id="element_ol_firebase_abilities"></ul>
      <ul id="element_ol_firebase_services"></ul>
      <ul id="element_ol_firebase_partners"></ul>
    `
}];

exports.default = {
  colors
};
},{"./elements":121}],7:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let state = '';

let get_components_handled = () => {

  state = _index2.default.Handle_return_state();

  let components = [

  // colors
  {
    component: 'component_color_load_light_yellow_0',
    component_state_transform: state.ui.colors.load_light_yellow_0.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.colors.load_light_yellow_0.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'component_app_gui_scroll_y',
    component_state_transform: state.ui.gui.scroll.y.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.scroll.y.display
    // component_state_opacity:  state.ui.gui.scroll.y.opacity
  }, {
    component: 'component_app_stage_enneagon',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_outside',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_sky',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_office',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_load_horizontal',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_load_verticle',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_pieces_office',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  },

  // gui
  {
    component: 'component_app_gui_bottom_center',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom.display
    // component_state_opacity:  state.ui.gui.bottom.opacity
  }, {
    component: 'component_app_gui_bottom_left',
    component_state_transform: state.ui.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom_left.display
    // component_state_opacity:  state.ui.gui.bottom_left.opacity
  }, {
    component: 'component_app_gui_bottom_right',
    component_state_transform: state.ui.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom_right.display
    // component_state_opacity:  state.ui.gui.bottom_right.opacity
  }, {
    component: 'component_app_gui_top_center',
    component_state_transform: state.ui.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top.display
    // component_state_opacity:  state.ui.gui.top.opacity
  }, {
    component: 'component_app_gui_top_left',
    component_state_transform: state.ui.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top_left.display
    // component_state_opacity:  state.ui.gui.top_left.opacity
  }, {
    component: 'component_app_gui_top_right',
    component_state_transform: state.ui.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top_right.display
    // component_state_opacity:  state.ui.gui.top_right.opacity
  }, {
    component: 'component_app_gui_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.left.display
    // component_state_opacity:  state.ui.gui.left.opacity
  }, {
    component: 'component_app_gui_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.right.display
    // component_state_opacity:  state.ui.gui.right.opacity
  },

  // modal

  {
    component: 'component_app_modal_element_nav_top',
    component_state_transform: state.ui.modal.nav.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.top.display
    // component_state_opacity:  state.ui.modal.nav.top.opacity
  }, {
    component: 'component_app_modal_element_nav_bottom',
    component_state_transform: state.ui.modal.nav.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.bottom.display
    // component_state_opacity:  state.ui.modal.nav.bottom.opacity
  }, {
    component: 'component_app_modal_element_nav_left',
    component_state_transform: state.ui.modal.nav.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.left.display
    // component_state_opacity:  state.ui.modal.nav.left.opacity
  }, {
    component: 'component_app_modal_element_nav_right',
    component_state_transform: state.ui.modal.nav.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.right.display
    // component_state_opacity:  state.ui.modal.nav.right.opacity
  }, {
    component: 'component_app_modal_element_page_top',
    component_state_transform: state.ui.modal.page.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.top.display
    // component_state_opacity:  state.ui.modal.page.top.opacity
  }, {
    component: 'component_app_modal_element_page_bottom',
    component_state_transform: state.ui.modal.page.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.bottom.display
    // component_state_opacity:  state.ui.modal.page.bottom.opacity
  }, {
    component: 'component_app_modal_element_page_left',
    component_state_transform: state.ui.modal.page.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.left.display
    // component_state_opacity:  state.ui.modal.page.left.opacity
  }, {
    component: 'component_app_modal_element_page_right',
    component_state_transform: state.ui.modal.page.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.right.display
    // component_state_opacity:  state.ui.modal.page.right.opacity
  }, {
    component: 'component_app_modal_element_pop_top',
    component_state_transform: state.ui.modal.pop.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.top.display
    // component_state_opacity:  state.ui.modal.pop.top.opacity
  }, {
    component: 'component_app_modal_element_pop_bottom',
    component_state_transform: state.ui.modal.pop.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.bottom.display
    // component_state_opacity:  state.ui.modal.pop.bottom.opacity
  }, {
    component: 'component_app_modal_element_pop_left',
    component_state_transform: state.ui.modal.pop.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.left.display
    // component_state_opacity:  state.ui.modal.pop.left.opacity
  }, {
    component: 'component_app_modal_element_pop_right',
    component_state_transform: state.ui.modal.pop.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.right.display
    // component_state_opacity:  state.ui.modal.pop.right.opacity
  }, {
    component: 'component_app_modal_element_overlay_top',
    component_state_transform: state.ui.modal.overlay.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.overlay.top.display
    // component_state_opacity:  state.ui.modal.overlay.top.opacity
  }, {
    component: 'component_app_modal_element_overlay_bottom',
    component_state_transform: state.ui.modal.overlay.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.overlay.bottom.display
    // component_state_opacity:  state.ui.modal.overlay.bottom.opacity
  }, {
    component: 'component_app_modal_element_overlay_left',
    component_state_transform: state.ui.modal.overlay.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.overlay.left.display
    // component_state_opacity:  state.ui.modal.overlay.left.opacity
  }, {
    component: 'component_app_modal_element_overlay_right',
    component_state_transform: state.ui.modal.overlay.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.overlay.right.display
    // component_state_opacity:  state.ui.modal.overlay.right.opacity
  }, {
    component: 'component_app_modal_element_gradient_top',
    component_state_transform: state.ui.modal.gradient.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.top.display
    // component_state_opacity:  state.ui.modal.gradient.top.opacity
  }, {
    component: 'component_app_modal_element_gradient_bottom',
    component_state_transform: state.ui.modal.gradient.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.bottom.display
    // component_state_opacity:  state.ui.modal.gradient.bottom.opacity
  }, {
    component: 'component_app_modal_element_gradient_left',
    component_state_transform: state.ui.modal.gradient.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.left.display
    // component_state_opacity:  state.ui.modal.gradient.left.opacity
  }, {
    component: 'component_app_modal_element_gradient_right',
    component_state_transform: state.ui.modal.gradient.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.right.display
    // component_state_opacity:  state.ui.modal.gradient.right.opacity
  }, {
    component: 'component_app_modal_element_menu_top',
    component_state_transform: state.ui.modal.menu.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.top.display
    // component_state_opacity:  state.ui.modal.menu.top.opacity
  }, {
    component: 'component_app_modal_element_menu_bottom',
    component_state_transform: state.ui.modal.menu.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.bottom.display
    // component_state_opacity:  state.ui.modal.menu.bottom.opacity
  }, {
    component: 'component_app_modal_element_menu_left',
    component_state_transform: state.ui.modal.menu.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.left.display
    // component_state_opacity:  state.ui.modal.menu.left.opacity
  }, {
    component: 'component_app_modal_element_menu_right',
    component_state_transform: state.ui.modal.menu.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.right.display
    // component_state_opacity:  state.ui.modal.menu.right.opacity
  }, {
    component: 'component_app_modal_element_fade_top',
    component_state_transform: state.ui.modal.fade.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.fade.top.display
    // component_state_opacity:  state.ui.modal.fade.top.opacity
  }, {
    component: 'component_app_modal_element_fade_bottom',
    component_state_transform: state.ui.modal.fade.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.fade.bottom.display
    // component_state_opacity:  state.ui.modal.fade.bottom.opacity
  }, {
    component: 'component_app_modal_element_fade_left',
    component_state_transform: state.ui.modal.fade.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.fade.left.display
    // component_state_opacity:  state.ui.modal.fade.left.opacity
  }, {
    component: 'component_app_modal_element_fade_right',
    component_state_transform: state.ui.modal.fade.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.fade.right.display
    // component_state_opacity:  state.ui.modal.fade.right.opacity
  }, {
    component: 'component_app_modal_element_morph_top',
    component_state_transform: state.ui.modal.morph.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.top.display
    // component_state_opacity:  state.ui.modal.morph.top.opacity
  }, {
    component: 'component_app_modal_element_morph_bottom',
    component_state_transform: state.ui.modal.morph.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.bottom.display
    // component_state_opacity:  state.ui.modal.morph.bottom.opacity
  }, {
    component: 'component_app_modal_element_morph_left',
    component_state_transform: state.ui.modal.morph.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.left.display
    // component_state_opacity:  state.ui.modal.morph.left.opacity
  }, {
    component: 'component_app_modal_element_morph_right',
    component_state_transform: state.ui.modal.morph.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.right.display
    // component_state_opacity:  state.ui.modal.morph.right.opacity
  }, {
    component: 'component_app_modal_element_corner_top',
    component_state_transform: state.ui.modal.corner.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.corner.top.display
    // component_state_opacity:  state.ui.modal.corner.top.opacity
  }, {
    component: 'component_app_modal_element_corner_bottom',
    component_state_transform: state.ui.modal.corner.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.corner.bottom.display
    // component_state_opacity:  state.ui.modal.corner.bottom.opacity
  }, {
    component: 'component_app_modal_element_corner_left',
    component_state_transform: state.ui.modal.corner.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.corner.left.display
    // component_state_opacity:  state.ui.modal.corner.left.opacity
  }, {
    component: 'component_app_modal_element_corner_right',
    component_state_transform: state.ui.modal.corner.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.corner.right.display
    // component_state_opacity:  state.ui.modal.corner.right.opacity
  }, {
    component: 'element_gui_scroll_y',
    component_state_transform: state.ui.gui.scroll.y.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.scroll.y.display
    // component_state_opacity:  state.ui.gui.scroll.y.opacity
  }];

  return components;
};

exports.default = {
  get_components_handled

};
},{"../index.js":3}],8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let state = '';

let Handle_ui = () => {

  state = _index2.default.Handle_return_state();

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
    component_app_gui_logo_combo_feature_container.style = 'height: ' + 2 * state.ux.dimensions.height8 + 'px;' + 'width: ' + 2 * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.events.mouse.drop.clientY + 'px;' + 'left: ' + state.events.mouse.drop.clientX + 'px;';
  };

  if (document.getElementById('logo_load_container') != null) {
    let logo_load_container = document.getElementById('logo_load_container');
    logo_load_container.style = 'height: ' + 2 * state.ux.dimensions.height8 + 'px;' + 'width: ' + 2 * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.events.mouse.drag.clientY + 'px;' + 'left: ' + state.events.mouse.drag.clientX + 'px;';
  };

  if (document.getElementById('component_app_interaction_hands') != null) {
    let component_app_interaction_hands = document.getElementById('component_app_interaction_hands');
    component_app_interaction_hands.style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;' + 'bottom: ' + 0 + 'px;' + 'left: ' + state.events.mouse.drop.clientX + 'px;';
  };

  if (document.getElementById('component_app_pieces_office_shoplights') != null) {
    let component_app_pieces_office_shoplights = document.getElementById('component_app_pieces_office_shoplights');
    component_app_pieces_office_shoplights.style = 'height: ' + state.ui.stage.shoplight.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.stage.shoplight.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.stage.shoplight.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.stage.shoplight.xaxis * state.ux.dimensions.width8 + 'px;';
  };
  if (document.getElementById('component_app_gui_key') != null) {
    let component_app_gui_key = document.getElementById('component_app_gui_key');
    component_app_gui_key.style = 'height: ' + state.ui.gui.key.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.gui.key.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.events.mouse.drag.clientY + 'px;' + 'left: ' + state.events.mouse.drag.clientX + 'px;';
  };

  if (document.getElementById('component_app_gui_keyhole') != null) {
    let component_app_gui_keyhole = document.getElementById('component_app_gui_keyhole');
    component_app_gui_keyhole.style = 'height: ' + state.ui.gui.key.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.gui.key.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.gui.key.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.gui.key.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  // 10 is half the size of the element_ball
  // It center the positioning point to the center of the element_ball
  if (document.getElementById('element_ball') != null) {
    document.getElementById('element_ball').style.top = state.events.mouse.gamma / state.ux.dimensions.height * 100 + "%";
    document.getElementById('element_ball').style.left = state.events.mouse.beta / state.ux.dimensions.width * 100 + "%";
  };

  // pieces
  // - workspace
  if (document.getElementById('component_app_pieces_workspace') != null) {
    document.getElementById('component_app_pieces_workspace').style = 'height: ' + state.ui.stage.workspace.desk.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.stage.workspace.desk.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.stage.workspace.desk.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.stage.workspace.desk.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  // interaction
  // - game
  // - player_1
  if (document.getElementById('component_app_interaction_game_players_1_body') != null) {
    document.getElementById('component_app_interaction_game_players_1_body').style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.player_1.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_1.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  if (document.getElementById('component_app_particle_game_players_1') != null) {
    document.getElementById('component_app_particle_game_players_1').style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.player_1.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_1.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  // Enemy
  if (document.getElementById('component_app_interaction_enemy') != null) {
    document.getElementById('component_app_interaction_enemy').style = 'height: ' + state.ui.interaction.enemy.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.enemy.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.enemy.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.enemy.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  if (document.getElementById('bounce') != null) {
    document.getElementById('bounce').style = 'top: ' + state.ui.interaction.bounce.yaxis * state.ux.dimensions.height8 + 'px; \
        left: ' + state.ui.interaction.bounce.xaxis * state.ux.dimensions.width8 + 'px ;';
  };
  if (document.getElementById('track_x') != null) {
    document.getElementById('track_x').style = 'top: ' + 0 + 'px; \
        left: ' + state.events.mouse.clientX + 'px ;';
  };
  if (document.getElementById('track_y') != null) {
    document.getElementById('track_y').style = 'top: ' + state.events.mouse.clientY + 'px; \
        left: ' + 0 + 'px ;';
  };
  if (document.getElementById('component_app_interaction_helper_body') != null) {
    document.getElementById('component_app_interaction_helper_body').style = 'height: ' + state.ui.interaction.helper.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.helper.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.helper.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.helper.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  //stage
  // Enneagon
  if (document.getElementById('component_app_stage_enneagon') != null) {
    document.getElementById('component_app_stage_enneagon').style = "transform: translate3d(" + state.ui.stage.enneagon.xaxis * 100 + "%, " + state.ui.stage.enneagon.yaxis * 100 + "%, 0);";
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

    if (state.events.mouse.down == true && state.events.mouse.clientX > state.ux.dimensions.width8 * 4 && state.events.mouse.clientY > state.ux.dimensions.height8 * 3 && state.events.mouse.clientX < state.ux.dimensions.width8 * 5 && state.events.mouse.clientY < state.ux.dimensions.height8 * 4) {

      alert('mouse is in x_axis:5 x y_axis:4 grid');
    };
  };

  // component_app_pieces_workspace_chair_1
  if (state.ui.interaction.player_1.display == true && document.getElementById('component_app_interaction_game_players_1_body') != null) {
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
  if (state.ui.stage.workspace.desk.display == true && document.getElementById('component_app_interaction_game_players_1_body') != null) {
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

exports.default = {
  Handle_ui
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

// Imports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = require("./partials/state");

var _state2 = _interopRequireDefault(_state);

var _functions = require("./partials/functions");

var _functions2 = _interopRequireDefault(_functions);

var _events = require("./partials/events");

var _events2 = _interopRequireDefault(_events);

var _defaults = require("./partials/defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _components = require("./partials/components");

var _components2 = _interopRequireDefault(_components);

var _ui = require("./partials/ui");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Declaration
let state;
// import imported_generators from './partials/generators';
// import imported_elements from './partials/elements';

let functions;
let defaults;
let components;

// Assignment
state = _state2.default.default_state;
functions = _functions2.default;
defaults = _defaults2.default;
components = _components2.default;

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
        // console.log(filtered_array_gnougn_library[i]);
        document.getElementById('element_ol_firebase_library').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(filtered_array_gnougn_library[i])));
      }

      // 6.) add events later
      find_view();
      find_type();
    }, 0);
  })();

  state.data.refs = true;
};

let Handle_return_state = () => {
  return state;
};

let Handle_check_route = (route, info) => {

  state.app.route = route;

  alert(state.app.route);
};

let Handle_render = () => {

  document.getElementById('component_app').innerHTML = '';
  for (var i = 0; i < defaults.colors.length; i++) {
    console.log('defaults.colors[i]: ' + defaults.colors[i]);
    document.getElementById(defaults.colors[i].parent).appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')));
  };
};

let Handle_display_with_delay = () => {

  for (var i = 0; i < components.length; i++) {
    // console.log(components[i].component);
    // console.log(components[i].component_state);

    // colors
    if (document.getElementById(components[i].component) != null) {
      _functions2.default.Toggle_functions_IF_State(_functions2.default.Toggle_display_and_opacity_on_with_no_delay, _functions2.default.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
    };
  };
};

let Handle_transform = () => {

  for (var i = 0; i < components.length; i++) {
    // console.log(components[i].component);
    // console.log(components[i].component_state);

    // colors
    if (document.getElementById(components[i].component) != null) {
      _functions2.default.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
    };
  };
};

let Handle_opacity = () => {

  for (var i = 0; i < components.length; i++) {

    // colors
    if (document.getElementById(components[i].component) != null) {
      _functions2.default.Toggle_classes_IF_State('opacity_0', 'opacity_1', components[i].component, components[i].component_state_opacity);
    };
  };
};

let Handle_init = () => {
  console.log('Handle_init');
};

let Handle_check_states = () => {
  console.log('Handle_check_states');
  components = _components2.default.get_components_handled();
  _ui2.default.Handle_ui();
  Handle_display_with_delay();
  Handle_opacity();
  Handle_transform();
  Handle_init();
};

let Handle_get_state_from_events = () => {
  state = _events2.default.Handle_return_state_from_events();
  console.log('state in index from events');
  // console.log(state);
};

// Create
let addListings = child => {

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
      "profile_picture": "photo_person1"
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
      }]
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
      }]
    }],
    "info": {
      "subtitle": "and 3d animator",
      "summary": "If the formula doesn't work, we change the formula.",
      "testimonials": [{
        "experience": 7,
        "id": 1
      }]
    }
  };

  document.getElementById('element_input_title').value = '';

  // Firebase References
  // Firebase Database
  const rootRef = firebase.database().ref();
  const gnougnRef = rootRef.child('gnougn');
  const Ref = gnougnRef.child(child);

  Ref.push(default_item).then(snap => {
    const key = snap.key;
    console.log('from addListing' + key);
    // update created item with snap.key
    Ref.child(key).update({
      id: key
    });

    // Set firebase data
    setTimeout(function () {
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
  setTimeout(function () {
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
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });

  changeThisValue.likes += 1;
  Ref.child(id).set(changeThisValue);
  console.log(id);
  // Set firebase data
  setTimeout(function () {
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
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });

  changeThisValue.likes -= 1;

  Ref.child(id).set(changeThisValue);

  console.log(id);
  console.log(changeThisValue);

  // Set firebase data
  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
};

let find_sort = () => {
  if (document.getElementById('element_input_sort').value == 'likesup' || '') {
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
  if (document.getElementById('element_input_view').value == 'card' || document.getElementById('element_input_view').value == '') {
    document.getElementById('element_ol_firebase_library').classList.add('card');
    document.getElementById('element_ol_firebase_library').classList.remove('grid');
    document.getElementById('element_ol_firebase_library').classList.remove('list');
  };

  if (document.getElementById('element_input_view').value == 'grid') {
    document.getElementById('element_ol_firebase_library').classList.add('grid');
    document.getElementById('element_ol_firebase_library').classList.remove('card');
    document.getElementById('element_ol_firebase_library').classList.remove('list');
  };

  if (document.getElementById('element_input_view').value == 'list') {
    document.getElementById('element_ol_firebase_library').classList.add('list');
    document.getElementById('element_ol_firebase_library').classList.remove('card');
    document.getElementById('element_ol_firebase_library').classList.remove('grid');
  };
};

let find_type = () => {
  if (document.getElementById('element_input_type').value == 'ux/ui' || document.getElementById('element_input_type').value == '') {
    document.getElementById('element_ol_firebase_library').classList.add('ux/ui');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
  };

  if (document.getElementById('element_input_type').value == 'code') {
    document.getElementById('element_ol_firebase_library').classList.add('code');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

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

  if (document.getElementById('element_input_type').value == 'video') {
    document.getElementById('element_ol_firebase_library').classList.add('video');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'read') {
    document.getElementById('element_ol_firebase_library').classList.add('read');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'graphic') {
    document.getElementById('element_ol_firebase_library').classList.add('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'photo') {
    document.getElementById('element_ol_firebase_library').classList.add('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'slider') {
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
      width256: window.innerWidth / 256
    }
  };

  values_update();
};

// Exports
exports.default = {
  Handle_get_state_from_events,
  Handle_return_state,
  Handle_check_route
};
},{"./partials/state":4,"./partials/functions":5,"./partials/events":9,"./partials/defaults":6,"./partials/components":7,"./partials/ui":8}],0:[function(require,module,exports) {
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
  var ws = new WebSocket('ws://' + window.location.hostname + ':54768/');
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