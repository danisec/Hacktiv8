// rest
let [c, b, ...m] = [1, 2, 3, 4, 5];

console.log([...m]);

// rest
function foo(x, y, ...z) {
  console.log(x, y, z);
}

foo(1, 2, 3, 4, 5);

console.log(foo(1, 2, 3, 4, 5));

// spread
let params = ["Hello", true, 7];
let other = [1, 2, ...params, 3];

console.log(other);

// spread
let a = [2, 3, 4];
let b = [1, ...a, 5];

console.log(b);
