/**
 * 
 * THE PROBLEM
 *  Write a function using `for` loop to return the value of the factorial of a given number
 *  A factorial is a number that is a result of multiplication all of the previous numbers
 * INPUT:
 *  - a factorial number
 * OUTPUT:
 *  - factorial of the input number
 * RULES: 
 *  - argument is a valid non-negative integer
 * 
 * DATA STRUCTURES 
 *  numbers
 * EXAMPLES AND TEST CASES
    console.log(factorial(0));     // => 1
    console.log(factorial(1));     // => 1
    console.log(factorial(2));     // => 2
    console.log(factorial(3));     // => 6
    console.log(factorial(4));     // => 24
    console.log(factorial(5));     // => 120
    console.log(factorial(6));     // => 720
    console.log(factorial(7));     // => 5040
    console.log(factorial(8));     // => 40320 * THE ALGORITHM 
 *  create a variable to store the result, assign it to 1
 *  if the number is less than 2, return the result
 *  else do multiplication of all the numbers up to (including) the given number and the the result in the result variable
 *  return the result variable
 */

 // CODE IMPLEMENTATION 
function factorial(factorialNumber) {
  let result = 1;
  if (factorialNumber < 2) return result;
  else {
    for (let number = 1; number <= factorialNumber; number += 1) {
      result *= number;
    }
  }
  return result;
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320