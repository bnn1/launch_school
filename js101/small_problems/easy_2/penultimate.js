/**
 * THE PROBLEM
 * =====
 * write a program that returns penultimate word (a word that comes before the last word in a string);
 * input: string sentence
 * output: string word
 * rules:
 *  string contains at least two words
 *  words are sequence of non-blank characters
 * questions:
 *  is numeric considired to be a word?
 *  is spec characters considered to be a word?
 * EXAMPLES AND TEST CASES
 * =====
 * console.log(penultimate("last word") === "last"); // logs true
 * console.log(penultimate("Launch School is great!") === "is"); // logs true
 *
 * DATA STRUCTURES
 * =====
 * string input and output
 * an array to check for punctuation marks and remove them
 *
 * ALGORITHM
 * =====
 * split a string into an array of characters
 * check if the array contains any special characters(!@#$%^&*()-_=+\|{[]}/?.>,<)
 * if so, remove it from the array
 * join the array into string
 * split it the string where the spaces are
 * return the penultimate element of the array (array.length - 2)
 */

// CODE IMPLEMENTATION

function penult(string) {
  let trimmedString = string.replace(/[^\w\s]/g, ''); // remove any special characters from the string
  let wordsArray = trimmedString.split(/\s+/g); // split the string into array of words
  let penultimateWord = wordsArray[wordsArray.length - 2]; // find the penultimate word
  return penultimateWord;
}

console.log(penult('Hello! My Name is ??? &* #@# !!! BORYAN!') === 'is'); // logs true
console.log(penult('last word') === 'last'); // logs true
console.log(penult('Launch School is great!') === 'is'); // logs true
console.log(penult('Launch School is great!') === 'zhopa'); // logs false
