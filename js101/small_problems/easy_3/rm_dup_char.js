/**
 * THE PROBLEM
 * =====
 * Write a function that removes consequent duplicate characters from the given string
 * input: string
 * output: string
 *
 * EXAMPLES AND TEST CASES
 * =====
 * crunch('ddaaiillyy ddoouubbllee');    // "daily double"
 * crunch('4444abcabccba');              // "4abcabcba"
 * crunch('ggggggggggggggg');            // "g"
 * crunch('a');                          // "a"
 * crunch('');                           // ""
 *
 * DATA STRUCTURES
 * =====
 * string input and output
 * array to process the string
 *
 * ALGORITHM
 * =====
 * create an arr to store all the string chars => split the string
 * for each character check if any other characters in the array are the same as the current character
 * if it is, save the index of the latest duplicate character in the sequence (or count the number of the duplicate characters)
 * remove these characters
 * join an array back to the string
 * return the string
 */
// CODE IMPLEMENTATION

function crunch(string) {
  if (typeof string !== 'string') {
    console.log('You must pass a string as an argument.');
    return;
  }
  let charsArray = string.split('');
  let counter = 0;
  for (let charIdx = 0; charIdx < charsArray.length; charIdx += 1) {
    for (
      let otherCharIdx = charIdx + 1;
      otherCharIdx < charsArray.length;
      otherCharIdx += 1
    ) {
      if (charsArray[charIdx] === charsArray[otherCharIdx]) {
        counter += 1;
      } else break;
    }
    charsArray.splice(charIdx + 1, counter);
    counter = 0;
  }
  return charsArray.join('');
}

console.log(crunch('Yaa eebbuuu sssobbak'));
console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""
