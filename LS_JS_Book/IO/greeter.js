const readline = require("readline-sync");

function greet() {
  let name = readline.question("What's your name?\n==> ");
  console.log(`Good day, ${name}!`);
}
greet();