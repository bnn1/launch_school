/* PROBLEM
Input: array of strings

Output: array of the number of letters -> letters that match position

Explicit: determine true when position in word is deeply equal to position in alphabet
  alphabetic only

Implicit:
 case insensitive
 ignore anything not alphabetic
 count should be zero if no position matchers

EXAMPLES/TEST CASES
solve(["abode","ABc","xyzD"]) // [4,3,1]
solve(["abide","ABc","xyz"])  // [4,3,0]
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) // [6,5,7]
solve(["encode","abc","xyzD","ABmD"]) // [1, 3, 1, 3]


DATA STRUCTURES
array or object with alphabet 
  iterate over each string in our arg array??

result array
Number to track our matches

ALGORITHM 
create an array that contains all alphabet letters in order
for each element of the input array:
1) make the string toLowerCase();
2) compare if the alphabet array has the same letter at the given index as the input array
if it is, incremenet counter
if it is not, go to the next character
*/

function solve(arrOfWords) {
  let alphabet = [
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'
  ];
  let result = [];
  let counter = 0;
  arrOfWords.forEach( word => {
    for (let charIdx = 0; charIdx < word.length; charIdx++) {
      if (word[charIdx].toLowerCase() === alphabet[charIdx]) {
        counter++;
      }
    }
    result.push(counter);
    counter = 0;
  });
  return result;
}

console.log(solve(['abc', 'dbdbe']));