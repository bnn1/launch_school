function arraysEqual(array1, array2) {
  return array1.join() === array2.join();
}

/* console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([2,3,4], [2,4,3]));
console.log(arraysEqual(['array', 'equal'], ['array', 'equal']));
console.log(arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5])); // returns false */

console.log([1, 2, [3, 4], 5].join());
