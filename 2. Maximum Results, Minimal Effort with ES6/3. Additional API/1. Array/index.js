// Array
let c = Array.of(1, 2, 3);
c.length;

console.log(c.length); // 3

// Array from
let arrLike = {
  length: 4,
  2: "foo",
};

Array.from(arrLike);

console.log(Array.from(arrLike)); // [ undefined, undefined, 'foo', undefined ]

// Copy withthin
[1, 2, 3].copyWithin(3, 0);
console.log([1, 2, 3].copyWithin(3, 0)); // [ 1, 2, 3 ]

[1, 2, 3, 4, 5, 6, 7].copyWithin(3, 0, 1);
console.log([1, 2, 3, 4, 5, 6, 7].copyWithin(3, 0, 1)); // [ 1, 2, 3, 1, 5, 6, 7 ]

// Fill
let a = [null, null, null, null].fill(42, 1, 3);
console.log(a); // [ null, 42, 42, null ]

// Find
let b = [1, 2, 3, 4, 5];

b.find(function matcher(v) {
  return v == "2";
}); // 2

let b = [1, 2, 3, 4, 5];

b.find(function matcher(v) {
  return v == "7";
}); // undefined

// Key and Entri
let a = [1, 2, 3]

// keys
[...a.keys()] // Array(3) [ 0, 1, 2 ]

// entries
[...a.entries()] // Array(3) [ (2) […], (2) […], (2) […] ]