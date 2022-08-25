// Object is
let x = NaN,
  y = 0,
  z = -0;

x === x;
y === z;
console.log(x === x); // false
console.log(y === z); // true

// If use object is
Object.is(x, x); // true
Object.is(y, z); // false

// Get on properties symbol
let o1 = {
  foo() {
    console.log("foo");
  },
};

let o2 = {
  o2,
};

Object.setPrototypeOf(o2, o1);
o2.foo();
