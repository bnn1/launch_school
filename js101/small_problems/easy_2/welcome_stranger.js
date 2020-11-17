/**
 * Create a function that takes 2 arguments, an array and an object.
 * The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name.
 * The object will contain two keys, "title" and "occupation", and the appropriate values.
 * Your function should return a greeting that uses the person's full name, and mentions the person's title.
 */

/**
 * THE PROBLEM
 * input: array, object
 * output: string
 * Concatinate the array and object in such a way that it becomes a greeting which contains full name and the title
 * Rules:
 * the object contains two props: title and occupation
 * array contains two or more elements
 *
 * EXAMPLES AND TEST CASES
 * greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }); // Hello, John Q Doe! Nice to have a Master Plumber around.
 * greetings(["Bob", "Marley"], { title: "Greatest", occupation: "Singer" }); // Hello, Bob Marley! Nice to have a Greatest Singer around.
 *
 * DATA STRUCTURES
 * array and object - inputs
 * string
 *
 * ALGORITHM
 * create placeholder variable to interpolate the array elements
 * concatinate array's placeholder string with joined array elements
 * return string literal with interpolated object's values
 */

// CODE IMPLEMENTATION

function greetings(array, object) {
  let name = array.join(' ');
  let { title, occupation } = { ...object };
  let titleAndOccupation = `${title} ${occupation}`;
  let result = `Hello, ${name}! Nice to have a ${titleAndOccupation} around.`;
  return result;
}

console.log(
  greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
);
console.log(
  greetings(['Bob', 'Marley'], { title: 'Greatest', occupation: 'Singer' })
);
