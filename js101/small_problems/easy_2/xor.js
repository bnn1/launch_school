/**
 * THE PROBLEM
 * =====
 * Write a function that acts like a 'xor' operator - it returns true only if ONE of the operands is true, false otherwise
 * input: anything that is an expression
 * output: boolean true or false
 * questions:
 *  can objects be used?
 *
 * EXAMPLES AND TEST CASES
 * =====
 * console.log(xor(5, 0)); // true
 * console.log(xor(false, true)); // true
 * console.log(xor(1, 1)); // false
 * console.log(xor(true, true)); // false
 *
 * DATA STRUCTURES
 * =====
 * every data types
 *
 * ALGORITHM
 * =====
 * using if statement decide whether passed argument is a truthy value
 * for each of the argument create a variable that contains whether the value is truthy
 * return arg1 !== arg2
 */
// CODE IMPLEMENTATION

// function xor(arg1, arg2) {
//   let isArg1Truthy;
//   let isArg2Truthy;
//   if (arg1) isArg1Truthy = true;
//   else isArg1Truthy = false;
//   if (arg2) isArg2Truthy = true;
//   else isArg2Truthy = false;
//   return isArg1Truthy !== isArg2Truthy;
// }

function xor(val1, val2) {
  return !val1 !== !val2;
}

console.log(xor(5, 0)); // true
console.log(xor(false, true)); // true
console.log(xor(1, 1)); // false
console.log(xor(true, true)); // false
