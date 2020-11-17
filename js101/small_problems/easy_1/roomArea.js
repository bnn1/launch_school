// The problem

// Given user input (width and length), calculate the area and log it to the console
// In both Meters and Square feets.
// 1 square meter === 10.7639 square feets
// rules: 
//    - input is always valid
//    - use readline.prompt() to collect user input
//    - user inputs width and length in meters
// questions: how many decimals after dot?
// Examples and Test cases

// calculateArea(); => 
/* Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

// Data structures

// Numbers.

// Algorithm 

// Ask user for input (length and width)
// Calculate the area in meters
// Convert area in meters to area in square feets
// Console log the result

// Code
const readline = require("readline-sync");
function calculateArea() {
  console.log("Welcome to the Area calculator!");
  console.log("Enter the length of the room: ");
  let roomLength = parseFloat(readline.prompt());
  console.log("Enter the width of the room: ");
  let roomWidth = parseFloat(readline.prompt());
  let areaInSquareMeters = roomLength * roomWidth;
  let areaInSquareFeets = (areaInSquareMeters * 10.7639).toFixed(2);
  console.log(`The area of the room is ${areaInSquareMeters} meters (${areaInSquareFeets} square feets)`);
}

calculateArea();