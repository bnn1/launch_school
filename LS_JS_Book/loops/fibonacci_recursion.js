/**
  *** THE PROBLEM ***
  * Write a function that returns the value of the given fibonacci number
  * In fibonacci sequence, each number is the sum of the two previous numbers
  *   - input: fibonacci number
  *   - output: the value of that number
  * 
  *** EXAMPLES AND TEST CASES *** 
  * fibonacci(0); // 0;
  * fibonacci(1); // 1;
  * fibonacci(2); // 1;
  * fibonacci(3); // 2;
  * fibonacci(4); // 3;
  * fibonacci(5); // 5;
  * fibonacci(6); // 8;
  *** DATA STRUCTURES ***
  * only numbers
  *** ALGORITHM *** 
  * each fibonacci number is the sum of the two previous numbers, so
  * we define the zeroth (0) fibonacci number and the first (1)
  * second number is the sum of the two previous ones => 0 + 1 = 1
  * the third number is the sum of the two previous numbers => 1 + 1 = 2
  * the fourth number is the sum of the two previous numbers => 2 + 1 = 3
*/

// CODE IMPLEMENTATION

function fibonacci(number) {
  let zerothNumber = 0;
  let firstNumber = 1;
  if (number === 0) {
    return zerothNumber;
  } else if (number === 1) {
    return firstNumber;
  } else {
    return fibonacci(number - 2) + fibonacci(number - 1);
  }
}

/**
  * fibonacci(3) => 
  *   
    * number is not equal to 0 or 1
    * fibonacci(3 - 2) + fibonacci(3 - 1) is returned
      * fibonacci(3 - 2) => fibonacci(1) => returns 1
      * fibonacci(3 - 1) => fibonacci(2) => 
        * => fibonacci(2 - 2) + fibonacci(2 - 1) is returned =>
          * fibonacci(2 - 2) => fibonacci(0) => 0
          * fibonacci(2 - 1) => fibonacci(1) => 1
        * fibonacci(3 - 1) === fibonacci(2 - 2) + fibonacci(2 - 1) returns 0 + 1
      * 
 */

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(10));

console.log(fibonacci(3 - 1) === (fibonacci(2 - 2) + fibonacci(2 - 1)));