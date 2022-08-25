// export
export function foo() {
  //...
}

export let kode = 42;

let bar = [1, 2, 3];
export { bar };

// cara lain
function foo() {
  //...
}

let kode = 42;
let bar = [1, 2, 3];

export { foo, kode, bar };

// rename
function foo() {
  //...
}

export { foo as kode };

let kode = 42;
export { kode };

kode = 100;
