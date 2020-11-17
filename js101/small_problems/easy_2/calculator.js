/**
 * THE PROBLEM
 * =====
 * Write a program that do following operations:
 * addition
 * substraction
 * multiplication
 * division
 * remainder
 * power
 * input: user input - two numbers
 * output: result of each of the operations performed on the user input
 * rules:
 *  must always return an integer
 *  only integers are passed
 *
 * EXAMPLES AND TEST CASES
 * =====
 * calc(20, 2);
 * 20 + 2 = 22
 * 20 - 2 = 18
 * 20 * 2 = 40
 * 20 / 2 = 10
 * 20 % 2 = 0
 * 20 ** 2 = 400
 * calc(7, 2);
 * 7 + 2 = 9
 * 7 - 2 = 5
 * 7 * 2 = 14
 * 7 / 2 = 4
 * 7 % 2 = 1
 * 7 ** 2 = 49
 * DATA STRUCTURES
 * =====
 * numbers
 *
 * ALGORITHM
 * =====
 * ask for user input: two numbers
 * perform all the operations, rounding result, when needed
 * log the results to the console
 */
// CODE IMPLEMENTATION

const prompt = require('../../../my_modules/prompt');

function calculator() {
  let number1 = Number(prompt('Enter the first number:'));
  let number2 = Number(prompt('Enter the second number:'));
  console.log(`${number1} + ${number2} = ${number1 + number2}`);
  console.log(`${number1} - ${number2} = ${number1 - number2}`);
  console.log(`${number1} * ${number2} = ${number1 * number2}`);
  console.log(`${number1} / ${number2} = ${Math.round(number1 / number2)}`);
  console.log(`${number1} % ${number2} = ${number1 % number2}`);
  console.log(`${number1} ** ${number2} = ${number1 ** number2}`);
}

calculator();
