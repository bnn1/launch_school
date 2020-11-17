/**
 * THE PROBLEM
 * =====
 * convert a signed string to an integer number
 * input: string
 * output: number
 * rules:
 *    if a string has leading + => return a positive integer
 *    if a string has leading - => return a negative integer
 *    if a string has no leading sign => return a positive integer
 *    the string always contains a valid number
 *    no use of built-in methods like parseInt() or Number()
 *    you can use the stringToInteger() function from the previous exercise
 *
 * EXAMPLES AND TEST CASES
 * =====
 * console.log(stringToSignedInteger("4321") === 4321); // logs true
 * console.log(stringToSignedInteger("-570") === -570); // logs true
 * console.log(stringToSignedInteger("+100") === 100); // logs true
 *
 * DATA STRUCTURES
 * function stringToInteger
 * string
 *
 * ALGORITHM
 * function will be passed a callback - stringToInteger() function and a string
 * split the string into an array of characters
 * if the first el of the array is a minus sign `-`, splice it, then join array and pass it to callback, multiply the result by -1
 * if the first el of the array is a plus sign `+`, splice it, then join the array and pass it to callback
 * if the first el of the array is a number, join the array and pass it to callback
 * return the result of the callback
 */
//CODE IMPLEMENTATION
const stringToInteger = require('./string_to_int');

function stringToSignedInteger(string, callback) {
  let strNumbers = string.split('');
  let result = 0;
  if (strNumbers[0] === '-') {
    strNumbers.splice(0, 1);
    result = -callback(strNumbers.join(''));
  } else if (strNumbers[0] === '+') {
    strNumbers.splice(0, 1);
    result = callback(strNumbers.join(''));
  } else {
    result = callback(strNumbers.join(''));
  }
  return result;
}

console.log(stringToSignedInteger('4321', stringToInteger) === 4321); // logs true
console.log(stringToSignedInteger('-570', stringToInteger) === -570); // logs true
console.log(stringToSignedInteger('+100', stringToInteger) === 100); // logs true
