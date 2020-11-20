/*

=====
THE PROBLEM
=====

Write a function that takes two arguments: a number and a count, that moves specified digit (count) of an input number to the end of the number
  input: number
  output: number
Rules:
  count digit from the end of the number

=====
EXAMPLES
=====
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

=====
DATA STRUCUTRES
=====
string so we can split our number
array to manipulate our digits
number as an input and return value

=====
ALGORITHM
=====
1) Convert a number into string
2) Split it into an array
3) Find array element to be moved to the end (length - count)
4) Remove that element from the array and write it to a variable - specNum
5) Shift all the other elements
6) Push specNum to the array
7) Join array
8) Convert to Number and return

*/

// CODE IMPLEMENTATION

function rotateRightmostDigits(number, count) {
  const stringifiedNumber = String(number);
  const numberLength = stringifiedNumber.length;
  const digitsArray = stringifiedNumber.split('');
  const digitToRotate = digitsArray.splice(numberLength - count, 1);
  digitsArray.push(digitToRotate);
  return Number(digitsArray.join(''));
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
