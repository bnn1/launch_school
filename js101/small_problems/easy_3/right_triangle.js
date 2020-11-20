/**
 * THE PROBLEM
 * =====
 * write a program that draws a regular triangle with specified side length using asteriks (*)
 * rule: triangle hypothenuse must be on the left side of the triangle
 * 
 * EXAMPLES AND TEST CASES
 * =====
 * triangle(5);

    *
   **
  ***
 ****
*****
 * 
 * triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

 * DATA STRUCTURES
 * =====
 * array to store each line of the triangle
 * numbers to count things and represent row num
 * 
 * ALGORITHM
 * repeat (*) times length
 * repeat (*) times length - 1
 * 
 */
// CODE IMPLEMENTATION

function triangle(len) {
  let asteriks = '*';
  let space = ' ';
  for (let row = len; row >= 0; row -= 1) {
    console.log(`${space.repeat(row)}${asteriks.repeat(len - row)}`);
  }
}
triangle(5);
triangle(9);
