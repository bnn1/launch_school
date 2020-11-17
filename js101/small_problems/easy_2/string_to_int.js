/**
 * THE PROBLEM
 * =====
 * write a function that converts input string into integer number without using in-built methods.
 * input: string
 * output: integer
 *
 * EXAMPLES AND TEST CASES
 * =====
 * console.log(stringToInteger('4321') === 4321); // logs true
 * console.log(stringToInteger('570') === 570); // logs true
 *
 * DATA STRUCTURES
 * =====
 * input string
 * output number
 * arrays during conversion process
 *
 * ALGORITHM
 * =====
 * create an object that will contain all the numbers numbers = [0-9]
 * split string into an array of characters stringChars = ['0'-'9']
 * write stringChars length into a variable stringLength = stringChars.length
 * create an empty array to store the converted values
 * for each stringChars character find the corresponding number in the numbers array and multiply it by 10 in the power of (stringLength - current character index - 1),
 *      push it to the empty array
 * sum all the elements of that array and return it.
 *
 *
 * THE PROCESS
 * object = [0-9]
 * stringChars = string.split("")
 * stringLength = string.length
 * converted = []
 *
 * string = '123'
 * strlength = 3
 * for the first char '1' the power would be 10 ** (3 - 0 - 1) => 10 ** 2 => 100 * 1
 * for the second char '2' the power would be 10 ** (3 - 1 - 1) => 10 ** 1 => 10 * 2
 * for the third char '3' the power would be 10 ** (3 - 2 - 1) => 10 ** 0 => 1 * 3
 */

module.exports = function stringToInteger(string) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let strChars = string.split('');
  let strLength = string.length;
  return strChars.reduce((acc, val, index) => {
    numbers.forEach((number) => {
      if (val == number) {
        let power = strLength - index - 1;
        acc += number * 10 ** power;
      }
    });
    return acc;
  }, 0);
};

// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//   };
//   let arrayOfDigits = string.split('').map((char) => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach((digit) => {
//     value = 10 * value + digit; // 4 43
//     console.log(value);
//   });
//   return value;
// }

// console.log(stringToInteger('0004321') === 4321); // logs true
// console.log(stringToInteger('570') === 570); // logs true
// console.log(stringToInteger('2342') === 1232); // logs false

// stringToInteger('4321');
