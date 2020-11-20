/*

=====
THE PROBLEM
=====
Replace all the special characters in a given string with spaces
  * input: string
  * input: string with spec chars removed
Rules:
  * if spec chars come in sequence, remove all but only insert once space

=====
EXAMPLES
=====
cleanUp("---what's my +*& line?");    // " what s my line "

=====
DATA STRUCTURES
=====
strings, regex

=====
ALGORITHM
=====
using regex, replace special characters with spaces

*/

// CODE IMPLEMENTATION

function cleanUp(string) {
  return string.replace(/\W+/g, ' ');
}
console.log(cleanUp("---what's my +*& line?")); // " what s my line "
console.log(cleanUp('!!@# pidooor #@# u !! SUK!!!'));
