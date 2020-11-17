/**
 * THE PROBLEM
 * =====
 * write a function that converts a number to a string with:
 *                                            * a plus sign leading if the number is positive
 *                                            * a minus sign leading if the number is negative
 *                                            * no sign if the number is zero
 *
 * EXAMPLES AND TEST CASES
 * =====
 * console.log(signedIntegerToString(4321) === "+4321");
 * console.log(signedIntegerToString(-123) === "-123");
 * console.log(signedIntegerToString(0) === "0");
 *
 * DATA STRUCTURES
 * =====
 * function from the previous exercise, and a number, maybe a string
 *
 * ALGORITHM
 * =====
 * determine whether the number is positive or negative (or zero) using Math.sign(), write the result of sign method call to a variable (say whatSign)
 * if the result is zero, return the result of integerToString function call with whatSign passed
 * otherwise split the result of integerToString function call with number passed as argument
 *
 */

const integerToString = require('./number_to_string');

function signedIntegerToString(number) {}

console.log(signedIntegerToString(4321) === '+4321');
console.log(signedIntegerToString(-123) === '-123');
console.log(signedIntegerToString(0) === '0');
