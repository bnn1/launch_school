let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);

studentBob.year = 'Senior';

for (let prop in studentBob) console.log(prop);

/* let arr = [1, 2, 3];

for (let el of arr) console.log(el); */