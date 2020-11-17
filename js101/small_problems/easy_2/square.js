/**
 * THE PROBLEM
 * =====
 * Return a square of a given number, using multiply function from the previous exercise
 * input: number
 * output: square of the given number
 *
 * EXAMPLES AND TEST CASES
 * =====
 * square(5); // 25
 * square(-10); // 100
 *
 * DATA STRUCTURES
 * =====
 * numbers, function multiply
 *
 * ALGORITHM
 * =====
 * return the result of multiplication function with number passed as both arguments
 */

// CODE IMPLEMENTATION
const multiply = require('./multiply');
function square(number) {
  return multiply(number, number);
}

console.log(square(-10));
console.log(square(10));
console.log(square(-1));
console.log(square(0));
