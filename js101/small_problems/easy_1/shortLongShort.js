/* 
*** THE PROBLEM ***

Write a function that takes two arguments, then concatinate them in the order: Short - Long - Short

** RULES **
  - strings are of different size
  - new string must be returned
** QUESTIONS **
  - what to do if input is not strings or an empty string? 

*** EXAMPLES AND TEST CASES *** 

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

*** DATA STRUCTURES ***

String

*** ALGORITHM ***

compare both strings length
concatinate short + long + short

*/

// CODE

function shortLongShort(str1, str2) {
  return str1.length > str2.length ? `${str2}${str1}${str2}` : `${str1}${str2}${str1}`;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"