/*
the problem
-----------
Write a program that generates random number between 20 and 120 (inclusive)
interpolates that number in a string and outputs the string to the console

input: none
output: message teddy is ... years old

examples
---------
Teddy is 69 years old!

data structures
----------
math.random method
number
string

algorithm
----------
1) generate random number
2) insert it in a string
3) output the string


function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomBetween(20, 120) => 

Math.random() => 0 >= x < 1
x = 0 => 0 * (120 - 20 + 1) + 20 => 0 * 101 + 20 => 20
x = 0.1 => 0.1 * 101 + 20
x = 0.999 => 0.999 * 101 + 20
*/
// CODE IMPLEMENTATION

function getTeddyAge(min, max) {
  let maxVal = max > min ? max : min;
  let minVal = max > min ? min : max;
  let age = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
  console.log(`Teddy is ${age} years old!`);
}

getTeddyAge(100, 20);
