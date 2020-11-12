/* let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach( subarray => {
  subarray.forEach( number => number % 2 === 0 ? console.log(number) : '');
}); */

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let classifiedArray = myArray.map( number => number % 2 === 0 ? 'even' : 'odd');
console.log(classifiedArray);