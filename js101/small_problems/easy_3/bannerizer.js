/**
 * THE PROBLEM
 * =====
 * Write a function that will wrap an input text into a box
 * input: string
 * output: string
 *
 * EXAMPLES AND TEST CASES
 * =====
 * logInBox('To boldly go where no one has gone before.');
 * +--------------------------------------------+
 * |                                            |
 * | To boldly go where no one has gone before. |
 * |                                            |
 * +--------------------------------------------+
 * logInBox('');
 * +--+
 * |  |
 * |  |
 * |  |
 * +--+
 *
 * DATA STRUCTURES
 * =====
 * strings, maybe numbers and arrays?
 *
 * ALGORITHM
 * =====
 * calculate the length of the string so we know where to draw borders and write it to variable stringLen
 *    stringLen + 2 is the amount of top and bottom dashes and spaces in the hollow lines=> contentLen
 *    stringLen + 4 is the total length of the output string => totalLen
 * create an array of dashes with the length of totalLen => dashes
 * replace the first and the last elements of `dashes` with the '+' sign => floorceil
 * create an array populated with spaces => spaces
 * replace the first and the last elements of `spaces` with the '|' sign => walls
 */

// CODE IMPLEMENTATION

function logInBox(string) {
  let charsArr = string.split('');
  let stringLen = string.length;
  let totalLen = stringLen + 4;
  let placeholderArr = [];
  for (let itemIdx = 0; itemIdx < totalLen; itemIdx += 1) {
    placeholderArr.push('');
  }
  let floorceil = placeholderArr
    .map((item, idx) => (idx === totalLen - 1 || idx === 0 ? '+' : '-'))
    .join('');
  let walls = placeholderArr
    .map((item, idx) => (idx === totalLen - 1 || idx === 0 ? '|' : ' '))
    .join('');
  let content = walls.split('').slice();
  content.splice(2, stringLen, ...charsArr);
  content = content.join('');
  // prettier-ignore
  let result = (
    `
    ${floorceil}
    ${walls}
    ${content}
    ${walls}
    ${floorceil}
  `);
  return result;
}
console.log(logInBox('To boldly go where no one has gone before.'));
console.log(logInBox('heheuhe asd'));
logInBox(''); // length 7
