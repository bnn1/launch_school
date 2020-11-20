/*

=====
THE PROBLEM
=====
Write a function that returns a double number as is, or returns the number multiplied by 2 if it is not double

Inputs:
  * input: number
  * output: number

Rules:
  * double numbers are even numbers whose left-side digits the same as its right-side digits
  * for example, 3333 is even, 333 is not, 123123 is even, 123321 is not

=====
EXAMPLES AND TEST CASES
=====
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

=====
DATA STRUCTURES
=====
strings - we convert input number into string so we can work with it
number - to perform multiplication

=====
ALGORITHM
=====
create a varibale and assign it to the number converted to a string
check the length of the string:
  if the length is odd:
    return the doubled number
  if it is not odd:
    divide its length by 2 - that would be the index of the start of the left side
    compare slices of: 
      left side - which is a slice upto the index from the prev step
      right side - which is a leftover of the string
    if slices are the same:
      return the number
    if not:
      return the doubled number

*/

// CODE IMPLEMENTATION

function twice(number) {
  const stringifiedNumber = String(number);
  const stringLength = stringifiedNumber.length;
  if (stringLength % 2 === 1) return number * 2;
  const middleIdx = stringLength / 2;
  const leftSide = stringifiedNumber.slice(0, middleIdx);
  const rightSide = stringifiedNumber.slice(middleIdx);
  if (leftSide === rightSide) return number;
  else return number * 2;
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
