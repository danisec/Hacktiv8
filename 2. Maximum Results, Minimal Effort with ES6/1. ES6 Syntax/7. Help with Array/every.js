// every
let people = [
  { name: "Dani", age: 24 },
  { name: "Nana", age: 23 },
  { name: "Danu", age: 30 },
  { name: "Sana", age: 18 },
  { name: "Randi", age: 19 },
];

function teenager(person) {
  return person.age > 10 && person.age < 20;
}

let firstTeenager = people.every(teenager);

console.log("Semua yang ada di array adalah :", firstTeenager);
