let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(isElementIncluded(numbers1, 3));
console.log(isElementIncluded(numbers2, 3));
console.log(isElementIncluded(numbers3, 3));

function isElementIncluded(array, element) {
  return array.includes(element);
}