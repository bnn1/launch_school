/*
=====
THE PROBLEM
=====
Write a function that prints what centuary the given number (year) is. 
Input:
  * input: number - a year
  * output: string - a centuary with appropriate ending (st, nd, rd, th);
Rules: 
  * the output string should end with 'st', 'nd', 'rd', 'th' appropriate to the centuary

=====
EXAMPLES
=====
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

=====
DATA STRUCTURES
=====
numbers to perform calculations to find what century the number is belongs to
string to output the result

=====
ALGORITHM
=====
1) create a var to store century and set it to 1
2) a loop with counter up until the year:
  3) make counter to 100
  4) check if the counter is lesser than year:
    5) if so:
      6) increase counter by 100 
      7) increase century by 1
      8) go back to step 4)
    9) if not:
      10) convert century to string
      11) find if century ends with one of these ('0', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'):
        12) if so, return century + 'th'
      12) blah blah T_T
*/

//CODE IMPLEMENTATION

function century(year) {
  let century = 1;
  for (let counter = 100; counter < year; counter += 100) {
    century += 1;
  }
  century = String(century);
  let th = ['0', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  let isEndingTh = th.some((ending) => century.endsWith(ending));
  if (isEndingTh) {
    return century + 'th';
  }

  let threeFirstEndings = ['st', 'nd', 'rd'];
  let ordinalCentury;
  threeFirstEndings.forEach((ending, idx) => {
    if (century.endsWith(idx + 1)) {
      ordinalCentury = century + threeFirstEndings[idx];
    }
  });
  return ordinalCentury;
}

century(2000); // "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
century(1052); // "11th"
century(1127); // "12th"
century(11201); // "113th"
