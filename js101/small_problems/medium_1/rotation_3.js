/*
=====
THE PROBLEM
=====
735291 => 352917 => fix the 3
352917 => 329175 => fix the 32
329175 => 321759 => fix the 321
321759 => 321597 => fix the 3215
321597 => 321579 => fix the 32157
321579 => 321579
number of iterations should be equal to the number length or number length - 1

=====
EXAMPLES
=====
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

=====
DATA STRUCTURES
=====
function rotateRightmostDigits from the prev exercise
numbers - we are probably gonna loop 

=====
ALGORITHM
=====
1) Convert a number into string
2) Write its length into a variable
3) write result of rotateRightmostDigits(number, numLen) to a variable rotated
3) Make a for (from len upto 2) loop up until the number length:
  4) use rotateRightmostDigits(number, numLen - (numLen - counter))
  5) reassign rotated with the result of previous step
7) return rotated

*/

// CODE IMPLEMENTATION

function maxRotation(number) {
  const numberLength = String(number).length;
  let rotatedNumber = rotateRightmostDigits(number, numberLength);
  for (let digitIdx = 1; digitIdx < numberLength; digitIdx += 1) {
    rotatedNumber = rotateRightmostDigits(
      rotatedNumber,
      numberLength - digitIdx
    );
  }
  return rotatedNumber;
}

maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845

function rotateRightmostDigits(number, count) {
  const stringifiedNumber = String(number);
  const numberLength = stringifiedNumber.length;
  const digitsArray = stringifiedNumber.split('');
  const digitToRotate = digitsArray.splice(numberLength - count, 1);
  digitsArray.push(digitToRotate);
  return Number(digitsArray.join(''));
}
