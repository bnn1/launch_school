let obj1 = { name: 'Boryanich' };
let obj2 = { surname: 'Novikov' };

let obj1to2 = Object.assign({}, obj1, obj2);
console.log(obj1to2);