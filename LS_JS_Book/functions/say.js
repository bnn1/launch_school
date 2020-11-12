const print = require("../../my_modules/print");

function say(word) {
  print(word);
}

say("Hey, I just met you =)");

let arr = [1, 2, 3, 4];

let newArr = arr.concat();
console.log(newArr);