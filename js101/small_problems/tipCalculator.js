/* 
*** The problem *** 
Write a program that takes user input (bill amount and tip rate in percents), 
computes the tip and then logs out summ of the bill amount with tip 

** Question **
How many numbers after decimals? 

** Rules **

- The input is always valid (numbers)

*** Examples and Test cases ***

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

*** Data structures *** 

input: number
output: number

*** Algorithm *** 

Ask user for input (bill amount and tip rate in percents)
Calculate the tip
Display the tip
Display total

*/

// *** Code ***
const readline = require("readline-sync");
function calculateTotalBill() {
  console.log("Welcome to the Tip calculator!");
  console.log("What is the bill?");
  let bill = parseFloat(readline.prompt());
  console.log("What is the tip percentage?");
  let tipPercentage = parseFloat(readline.prompt()) / 100;
  let calculatedTip = parseFloat((bill * tipPercentage).toFixed(2));
  let total = bill + calculatedTip;

  console.log(`The tip is $${calculatedTip}`);
  console.log(`The total is $${total}`);
}

calculateTotalBill();