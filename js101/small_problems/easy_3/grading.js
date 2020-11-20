/*
=====
THE PROBLEM
=====
Write a function that grades the provided scorings based on their mean.
  * input: three numbers
  * output: grade letter 

Rules:
  * the values are always in range of 0 to 100
  * the grading should be done as following:
    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

=====
EXAMPLES AND TEST CASES
=====
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

=====
DATA STRUCTURES
=====
numbers as input and to calculate the mean
symbol (string) as an output

=====
ALGORITHM
=====
first, calculate the mean:
  summ up all the provided numbers and divide them by the amount of provided numbers
  write the result into variable
check is the result is in range (the first number of the range should be included):
  90 to 100 => 'A'
  80 to 89 => 'B'
  70 to 79 => 'C'
  60 to 69 => 'D'
  less than 60 => 'F'
  return the grading letter
*/

// CODE IMPLEMENTATION

function getGrade(...scorings) {
  let mean = scorings.reduce((acc, score) => acc + score, 0) / scorings.length;
  if (mean >= 90) return 'A';
  else if (mean >= 80) return 'B';
  else if (mean >= 70) return 'C';
  else if (mean >= 60) return 'D';
  else return 'F';
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
console.log(getGrade(81, 92, 84)); // "B"
console.log(getGrade(22, 99, 31)); // "F"
