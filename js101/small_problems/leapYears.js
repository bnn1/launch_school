/* 
*** THE PROBLEM ***

write a function that returns true if given year is leap and false otherwise.

** RULES **
  - leap year is a year evenly divisable by 4
  - year that is divisable by 100 is not leap
  - year evenly divisable by 400 is also leap

** QUESTIONS **
what to do if the input is less than 0? if it is not a number? 

*** EXAMPLES AND TEST CASES ***

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true


*** DATA STRUCTURES *** 
Numbers

*** ALGORITHM ***

check if the year is divisable by 400. if it is, return true
if not, check if the year is divisable by 100. if it is, return false
if not, check if the year is divisable by 4. if it is, return true
otherwise return false.
*/

function isLeapYear(year) {
  if (year >= 1752) {
    if (year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else if (year % 4 === 0) return true;
    else return false;
  }
  else {
    if (year % 4 === 0) return true;
    else return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false`
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true