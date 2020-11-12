/**
 * Add a qux property with value 3 to the myObj object we created in the previous exercise. 
 * Now, examine the following code snippets:
 */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObj = Object.create(myProtoObj);

newObj.qux = 3;

let objKeys = Object.keys(newObj);

objKeys.forEach( key => console.log(key)); // qux

for (let key in newObj) console.log(key); // qux (own property), foo, bar