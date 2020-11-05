// The problem

// Log all the even numbers in range from 1 to 99 inclusive. Each number on its own line

// Examples and test cases

// evenNumber(); => 2, 4, 6, 8...

// Data structures

// Numbers

// Algorithm

// Start from 2, log the number, increase it by 2. Do that while number is less than 99

// Code

function evenNumber() {
  for (let number = 2; number <= 99; number+=2) {
    console.log(number);
  }
}

evenNumber();