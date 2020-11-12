/**
 * 
 * THE PROBLEM
 *  Write a function that utilises recursion to return the factorial of a given number
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
    console.log(factorial(8));     // => 40320 
 * THE ALGORITHM 
 *  create a variable to store the result, assign it to 1
 *  if the number is less than 2, return the result
 *  else multiply the result by the return value of the factorial function call with factorial number decreased by 1;
 *  return the result variable
 * 
 * 

 factorial(3) = factorialNumber * factorial(2)
 */

// CODE IMPLEMENTATION 


function factorial(factorialNumber) {
  if (factorialNumber < 2) return 1;
  else {
    return factorialNumber * factorial(factorialNumber - 1);
  }
}

/**
 *                factorial(3)
 *        3             *         factorial(2)
 *        3     *       2             *           factorial(1)
 *        3     *       2             *               1
 */

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320 