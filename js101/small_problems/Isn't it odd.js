// THE PROBLEM

// write a function that returns true if the input value's absolute value is odd.

// rules:
  // function expect 1 argument
  // function's argument is an integer, which may be positive, negative or zero
  // input is a valid integer
// absolute value is the value without regard to its sign (i.e. absolute value of -3 is 3,
                // absolute value of 3 is 3)
                // odd is a value which is % 2 === 1

// EXAMPLES AND TEST CASES

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// DATA STRUCTURES 

// We're going to only use Numbers.


// ALGORITHM

// find if the value is an odd number
// if it is, return its absolute value (Math.abs())

// Code

function isOdd(inputNumber) {
  return Math.abs(inputNumber) % 2 === 1 ? true : false;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
