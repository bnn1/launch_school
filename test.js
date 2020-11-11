const prompt = require("./my_modules/prompt");

function times(number1, number2) {
  let result = number1 * number2;
  return result;
}
// The problem

/* Use the times function shown below to write a program that logs the value of 1! 
(one factorial), 2! (two factorial), 3!, 4!, and 5! (five factorial) to the console. 
factorial is a multiplication of all the numbers up to given number

// Examples and Test cases

1! =	1 =	1
2! =	1 * 2 =	2
3! =	1 * 2 * 3 =	6
4! =	1 * 2 * 3 * 4 =	24
5! =	1 * 2 * 3 * 4 * 5 =	120


// Data structures 

Number

// Algorithm 
Ask for a number factorial of which we need
if the number is 1, return 1
else find factorial of previous number and multiply it by current number
*/

function factorial(num) {
  if (num === 1) return times(1, 1);
  else return factorial(num - 1) * num;
  
}
let fact5 = factorial(5);
console.log(fact5);


let aNumber = 5;

function modifyNumber(num) {
  aNumber = 7;
}

function modifyParameter(aNumber) {
  aNumber += 2;
}

modifyNumber(aNumber);
console.log(aNumber);

modifyParameter(aNumber);
console.log(aNumber);