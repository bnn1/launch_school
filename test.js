// the problem
/*
* Function that checks if a given number is 'narcissistic' 
* That means that the number is equal to sum of each of its digit to the power of number length
  * only valid integers will be passed
  * input: number
  * output: boolean (true or false)
Examples and Test Cases
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

Data Structures

numbers to make calculations
arrays to split the initial number

Algorithm 

Split the number into an array
Make a var to store array length 
For each element of the array power it to the array length (map)
Sum the resulting array (reduce)
Check if the value is the same as the input
*/

// function narcissistic(value) {
//   let arrayOfNums = String(value).split("");
//   let power = arrayOfNums.length;
//   let poweredNumbers = arrayOfNums.map( num => num ** power);
//   let resultingNumber = poweredNumbers.reduce( (acc, number) => {
//     return acc + number;
//   }, 0);
//   return resultingNumber === value;
// }

// console.log(narcissistic(7));
// console.log(narcissistic(371));

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let strLength = 3;
let strChars = '123'.split('');

strChars.reduce((acc, val, index) => {});
