const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log("object1=",object1);

let object2 = {
	c:4,
	d:5,
}

console.log("BEFORE: object2=",object2);

// @returns the target object
// Object.assign(target, ...sources)
//const object3 = Object.assign({c: 4, d: 5}, object1);
const object3 = Object.assign(object2, object1);

console.log("AFTER: object2=",object2);
console.log("object3=",object2);
console.log("object2==object3 = ", (object2==object3) );

console.log("object3.c=",object3.c,", object3.d=", object3.d);
// expected output: 3 5
