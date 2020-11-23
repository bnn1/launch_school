/*

the problem

write a function that takes user input:
  current age
  retirment age
and logs to the user when he will retire (what year and how many years left)
input: 
  current age - str - convert to num
  retirement age - str - convert to num
output: string interpolated with numbers

examples 

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

data structure

numbers - to make calculations
string - input and output

algorithm 

1) ask user for age
2) ask user for retirement
3) calculate how many years left til retirement
4) logs to the user

*/

// code
import prompt from '../../../my_modules/prompt.js';

function retire() {
  let age = Number(prompt("What's your age?"));
  let retirementAge = Number(prompt("What's retirement age?"));
  let untilRetirement = retirementAge - age;
  let currentYear = new Date().getFullYear();
  let retirementYear = currentYear + untilRetirement;
  console.log(
    `It's ${currentYear}. You will retire in ${retirementYear}.\nYou have only ${untilRetirement} years of work to go!`
  );
}
retire();
