// old ways
let name = "Dani";
let greeting = "Hello " + name + "!";

console.log(greeting);
console.log(typeof greeting);

// ES6
let name = "Dani";
let greeting = `Hello ${name}!`;

console.log(greeting);
console.log(typeof greeting);

// function
function upper(s) {
  return s.toUpperCase();
}

let who = "teman kode";
let text = `Selamat datang ${upper("Teman")} ${who}`;

console.log(text);

// scope literal
function kode(str) {
  let name = "kode";
  console.log(str);
}

function dani() {
  let name = "dani";
  kode(`Hello from ${name}!`);
}

let name = "global";
dani();

// string raw
console.log(String.raw`Hello\World!`.length);
