/*

Write a function that checks if a provided string is a palindrome
input: string
output: boolean

Rules:
  case-insensetive
  only alphanumeric

examples

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
data structure

string

algorithm 

check if the current index character is the same as last index - current index character

*/

// code

function isRealPalindrome(str) {
  // let string = str.match(/\w+/g).join('').toLowerCase();
  // let strLastIdx = string.length - 1;
  // for (let charIdx = 0; charIdx < string.length; charIdx += 1) {
  //   if (string[charIdx] !== string[strLastIdx - charIdx]) {
  //     return false;
  //   }
  // }
  // return true;
  return (
    str.match(/\w+/g).join('').toLowerCase().split('').reverse().join('') ===
    str.match(/\w+/g).join('').toLowerCase()
  );
}
console.log(isRealPalindrome('madam')); // true
isRealPalindrome('Madam'); // true (case does not matter)
isRealPalindrome("Madam, I'm Adam"); // true (only alphanumerics matter)
isRealPalindrome('356653'); // true
isRealPalindrome('356a653'); // true
console.log(isRealPalindrome('123ab321')); // false
