const readline = require("readline-sync");

module.exports = function prompt(message) {
  let msg = readline.question(`${message}\n==> `);
  return msg;
}