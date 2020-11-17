/**
 * THE PROBLEM
 * Greet user with 'Hello %name%.' if exclamation mark is missing
 * Greet with 'HELLO, %NAME%. WHY ARE WE SCREAMING?' otherwise.
 * input: string - name
 * output: string - greeting
 * EXAMPLES AND TEST CASES
 * greeting('bob'); // Hello bob.
 * greeting('bob!'); // HELLO, BOB. WHY ARE WE SCREAMING?
 * DATA STRUCTURES
 * strings
 * ALGORITHM
 * check if the passed string ends with exclamation mark
 * if so, return screaming greeting
 * otherwise, return normal greeting
 */

// CODE IMPLEMENTATION

const prompt = require('../../../my_modules/prompt');

function greeting() {
  let name = prompt('Hey, what is your name?');
  let isExclamation = name[name.length - 1] === '!';
  return isExclamation
    ? `HELLO, ${name.toUpperCase()} WHY ARE WE SCREAMING?`
    : `Hello ${name}.`;
}

console.log(greeting('Bob'));
console.log(greeting('Bob!'));
