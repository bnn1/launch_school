/* 
*** THE PROBLEM ***

Write a function that computes sum of all number between 1 and input number inclusive
that are multiplies of 3 or 5 (number is divisable by 3 or 5 without remainder)

** RULES **
  - input is an integer greater than 1

** QUESTIONS **
should the sum be returned or logged? 

*** EXAMPLES AND TEST CASES ***

if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

*** DATA STRUCTURE *** 
Number

*** ALGORITHM ***

create a holder for the sum 
go over numbers from 1 to input number inclusive
for each number, check if it is divisable by 3 or 5 without a remainder
if it is, increase the sum by that number

*/

// CODE

function multisum(inputNumber) {
  let sum = 0;
  for (let number = 1; number <= inputNumber; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    } else continue;
  }
  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168