/*

Write a function that checks if a provided string is a palindrome
input: string
output: boolean

Rules:
  case-sensetive
  all characters matter

examples

isPalindrome('madam') // true
isPalindrome('Madam') // false
isPalindrome('His is si sih') // true? 

data structure

string

algorithm 

check if the current index character is the same as last index - current index character

*/

// code

function isPalindrome(string) {
  let strLastIdx = string.length - 1;
  for (let charIdx = 0; charIdx < string.length; charIdx += 1) {
    if (string[charIdx] !== string[strLastIdx - charIdx]) return false;
  }
  return true;
}
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('Madam')); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome('356653')); // true
