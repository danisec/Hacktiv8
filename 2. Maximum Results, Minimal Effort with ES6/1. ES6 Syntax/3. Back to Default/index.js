// Function old
function greet(name, greeting) {
  name = typeof name !== "undefined" ? name : "Student";
  greeting = typeof greeting !== "undefined" ? greeting : "Welcome Kode";

  return `${greeting} ${name}`;
}

greet();

// Function new
function greet(name = "Students", greeting = "Welcome Kode") {
  return `${greeting} ${name}`;
}

greet();

console.log(greet("Dani")); // Welcome Kode Dani

// Default value parameter
let Func = (a, b = 10) => a + b;

Func(20);

console.log(Func(20)); // 20 + 10 = 30

// Not default value parameter
let notWorking = (a = 10, b) => a + b;
notWorking(20);

console.log(notWorking(20)); // NaN (Not a Number)
