// ES5
function person(name, height) {
  this.name = name;
  this.height = height;
}

person.prototype.sayName = function () {
  this.console.log(this.name);
};

// ES6
class person {
  constructor() {
    this.name = "person";
    this.height = 150;
  }
  sayName() {
    console.log(this.name);
  }
}

// class expresion
let person = class person {
  constructor() {
    this.name = name;
    this.height = height;
  }
  sayName() {
    console.log(this.name);
  }
};

// class extends
class Person {
  constructor() {
    this.name = "person";
    this.height = 150;
  }
  sayName() {
    console.log(this.name);
  }
}

class Developer extends Person {
  constructor(name, height) {
    super(name, height);
    this.name = "Developer";
  }
}

let kode = new Developer();
kode.sayName(); // Developer
