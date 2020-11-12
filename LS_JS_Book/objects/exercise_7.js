/**
 * Create a function that creates and returns a copy of an object.
 * The function takes two arguments: 
 *              the object to copy and an array of the keys that you want to copy.
 * You can omit the array of keys, in which case you should copy all the keys of the object.
*/


function copyObject(objectToCopy, arrayOfKeys) {
  if (!arrayOfKeys) return Object.assign({}, objectToCopy);
  let copyOfObject = {};
  for (let key of arrayOfKeys) {
    copyOfObject[key] = objectToCopy[key];
  }
  return copyOfObject;
}

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObject(objToCopy);

let newObj2 = copyObject(objToCopy, ['foo']);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
