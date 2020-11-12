let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.reduce( (accumulator, element) => {
    if (element.length % 2 === 1) {
      accumulator[accumulator.length] = element.length;
    }
    return accumulator;
  }, []);
}