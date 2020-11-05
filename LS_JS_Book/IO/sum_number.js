const readline = require("readline-sync");

let number1 = +readline.question("What's the first number?\n==> ");
let number2 = +readline.question("What's the second number?\n==> ");

let sum = number1 + number2;

console.log(`The number ${number1} and ${number2} add to ${sum}.`);