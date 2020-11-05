/* 
*** THE PROBLEM ***
write a function that returns the sum of all ASCII values of a given string.

** Questions **
What do you mean by 'determines'
What to do if the input is not string/isn't convertable to string?

*** Examples and Test cases ***

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

*** Data Structures ***
String

*** Algorithm ***
create a holder for sum of values
for each character get its ASCII value and increase the sum by it 

*/

// Code

function asciiValue(inputString) {
  return inputString.split("").reduce( (sum, char) => {
    return sum + Number(char.charCodeAt());
  }, 0)
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
