/*

Write a function that takes 6 numbers from user and then tells whether the 6th number is presented in the first 5 numbers
input: 6 user inputs
output: a string

examples

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

datastructures

string to get input
array to store inputs
string to output the result


algorithm 

ask for 6 inputs
store each input as an element of an array
get the last element from the array
check if the array contains same value as the element we got

*/

// code

import prompt from '../../../my_modules/prompt.js';

function searchNumbers() {
  let numbers = [];
  for (let numberIdx = 0; numberIdx < 6; numberIdx += 1) {
    numbers.push(
      prompt(
        `Enter the ${
          numberIdx === 0
            ? numberIdx + 1 + 'st'
            : numberIdx === 1
            ? numberIdx + 1 + 'nd'
            : numberIdx === 2
            ? numberIdx + 1 + 'rd'
            : numberIdx + 1 + 'th'
        } number: `
      )
    );
  }
  let numberToFind = numbers.pop();
  console.log(
    numbers.includes(numberToFind)
      ? `The number ${numberToFind} appears in ${numbers.join()}`
      : `The number ${numberToFind} does not appear in ${numbers.join()}`
  );
}
searchNumbers();
