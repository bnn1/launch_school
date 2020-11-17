/**
 * THE PROBLEM
 * =====
 * Convert an input number to a string
 * input: number
 * output: string
 * rules:
 *    numbers are non-negative integers
 *    can't use built-in methods such as String(), Number.prototype.toString() or converting expressions such as '' + number
 *
 * EXAMPLES AND TEST CASES
 * =====
 * integerToString(4321);      // "4321"
 * integerToString(0);         // "0"
 * integerToString(5000);      // "5000"
 * integerToString(1234567890);      // "1234567890"
 *
 * DATA STRUCTURES
 * =====
 * numbers and strings I believe
 *
 * ALGORITHM
 * =====
 * create an empty array `let array = []`
 * while number is > 0
 *  * push a remainder of an input number to the array `array.push(number % 10)`
 *  * substract the remainder and divide the number by 10
 * reverse the array
 * return the joined array.
 */

module.exports = function integerToString(number) {
  let numbers = [];
  do {
    // if (number < 10) {
    //   numbers.push(number);
    //   break;
    // }
    numbers.push(number % 10);
    number = (number - (number % 10)) / 10;
  } while (number > 0);
  return numbers.reverse().join('');
};

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
