/*

problem

write a function that takes an array 
and returns a new array with the same
amount of elements but with each element
being the sum of the previous elements

input array
output array

examples

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

datastructures

arrays
maybe numbers

algorithm 

loop through an array 
for each element of the array
create a new element that is the sum of the previous elements

*/

function runningTotal(array) {
  if (array.length === 0) return array;
  let result = [array[0]];
  for (let idx = 1; idx < array.length; idx += 1) {
    result.push(array[idx] + result[idx - 1]);
  }
  return result;
}
runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]);
