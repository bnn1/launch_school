/**
 * THE PROBLEM
 * =====
 * Write a program that returns the index of the first fibonacci number of specified length
 * input: number - fibonacci number length
 * output: number - index of the first number
 * rules:
 *      an argument is always an integer greater than 2
 * EXAMPLES AND TEST CASES
 * =====
 * findFibonacciIndexByLength(2);       // 7
 * findFibonacciIndexByLength(10);      // 45
 * findFibonacciIndexByLength(16);      // 74
 *
 * DATA STRUCTURES
 * =====
 * function to calc the fibonacci number
 * array to store fibonacci numbers
 * numbers probably
 *
 * ALGORITHM -- FIBONACCI
 * =====
 * fibonacci is the sum of the two previous numbers, so fibonnaci 3 is equal to 2 (first and second fib numbers are ones)
 * so for the given number, say fibonacci(5) is equal to fibonacci(4) + fibonacci(3), fibonacci(4) in turn is equal to fibonacci(3) + fibonacci(2)
 * fibonacci(3) is equal to fibonacci(2) + fibonacci(1) which is 1 + 1 = 2
 * so for fibonacci(number) we must call fibonacci(number - 1) + fibonacci(number - 2);
 *
 * ALGORITHM -- THE PROBLEM
 * =====
 * create an array with two ones as its elements - the first two fibonacci numbers
 * generate the next fibonacci number
 * convert it to string, find length.
 * Compare length with the provided argument
 * if length is not the same, push that element to the array, repeat steps 2-4
 * if the length is equal, find its index and return it
 */

// function findFibonacciIndexByLength(numLen) {
//   let fibonacciNumbers = [1, 1];
//   let counter = 3;
//   let currentNum;
//   while (true) {
//     currentNum = fibonacci(counter++);
//     fibonacciNumbers.push(currentNum);
//     console.log(fibonacciNumbers);
//     if (currentNum.toString().length === numLen)
//       return fibonacciNumbers.indexOf(currentNum) + 1;
//   }
// }

// function fibonacci(number) {
//   if (number === 1 || number === 2) return 1;
//   return fibonacci(number - 1) + fibonacci(number - 2);
// }

function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

// console.log(findFibonacciIndexByLength(2)); // 7
console.log(findFibonacciIndexByLength(10)); // 45
// findFibonacciIndexByLength(16); // 74
