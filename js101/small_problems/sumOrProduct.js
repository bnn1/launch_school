/* 
*** The problem ***
Program asks for user input, then asks if user wants to calculate sum or the product of all the
numbers between 1 and the entered number

** Rules **
- input is an integer greater than 0
- program must calculate sum or product inclusive to the entered number

*** Examples and Test cases ***

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

==============================================

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

*** Data structures *** 
Numbers

*** Algorithm *** 
1. Ask user for an input 
2. Check if input is valid (greater than 0)
3. Ask user for an operation (either sum or product)
4. Check if input is valid (either sum or prod)
5. Calculate the result depending on the input from step 3
*/

// Code
const readline = require("readline-sync");
function calculateSumOrProduct() {
  console.log("Hello! Here you can calculate the sum or the product between\
  one and your entered number");
  console.log("Please enter an integer greater than 0: ")
  let numberToCalculateTo = Number(readline.question());
  while (!(numberToCalculateTo > 0)) {
    console.log("Please, an Integer greater than 0!");
    numberToCalculateTo = Number(readline.question());
  }
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  let operation = readline.question();
  while (!(operation === "s") && !(operation === "p")) {
    console.log("Please, enter one of the following operations: 's' or 'p'!");
    operation = readline.question();
  }
  switch (operation) {
    case "s":
      let sumResult = 0;
      for (let number = 1; number <= numberToCalculateTo; number++) {
        sumResult += number;
      }
      console.log(`The sum of integers between 1 and ${numberToCalculateTo} is ${sumResult}.`);
      break;
    case "p":
      let prodResult = 1;
      for (let number = 1; number <= numberToCalculateTo; number++) {
        prodResult *= number;
      }
      console.log(`The product of integers between 1 and ${numberToCalculateTo} is ${prodResult}.`);
      break;
  }
}

calculateSumOrProduct();