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
}

console.log(foo);   // 5
