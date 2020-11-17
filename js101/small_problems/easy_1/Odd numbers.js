// The problem

// Output all the odd numbers in range from 1 to 99 inclusive
// Every number should be on its own line

// input: none
// output: numbers

// Examples and Test cases

// console.log(oddNumber()); => 1, 3, 5, 7...

// Data Structures

// numbers

// Algorithm 

// For each number in range from 1 to 99 check
// if a number is odd
// if it is, log it and break the line
// if it is not, go to the next number

// Code

function oddNumbers() {
  for (let number = 1; number <= 99; number += 2) {
    console.log(number);
  }
}

oddNumbers();