/**
 * THE PROBLEM
 * -----
 * Write a program that returns a sequence of ones and zeroes with the length equal to the given argument
 *
 * EXAMPLES AND TEST CASES
 * -----
 * stringy(6); // "101010"
 * stringy(9); // "101010101"
 * stringy(4); // "1010"
 * stringy(7); // "1010101"
 *
 * DATA STRUCTURES
 * -----
 * numbers, strings
 *
 * ALGORITHM
 * -----
 * create a var to indicate that the number is 1 (boolean) - say isOne
 * create an empty string to concatinate our sequence to - say sequence
 * while number is greater than zero do:
 * if isOne, concatinate sequence with 1, set isOne to false
 * else concatinate sequence with 0, set isOne to true
 * decrease the number
 * return the string
 */
// CODE IMPLEMENTATION

function stringy(sequenceLength) {
  let sequence = '';
  let isOne = true;
  while (sequenceLength > 0) {
    if (isOne) {
      sequence += 1;
      isOne = false;
    } else {
      sequence += 0;
      isOne = true;
    }
    sequenceLength -= 1;
  }
  return sequence;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
console.log(stringy(0));
