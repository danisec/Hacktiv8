function f() {
  var x = 1;
  let y = 2;
  const z = 3;

  {
    var x = 100;
    let y = 200;
    const z = 300;

    console.log("X dalam block scope adalah", x); // X dalam block scope adalah 100
    console.log("Y dalam block scope adalah", y); // Y dalam block scope adalah 200
    console.log("Z dalam block scope adalah", z); // Z dalam block scope adalah 300
  }

  console.log("X luar block scope adalah", x); // X luar block scope adalah 100
  console.log("Y luar block scope adalah", y); // Y luar block scope adalah 2
  console.log("Z luar block scope adalah", z); // Z luar block scope adalah 3
}

f();
