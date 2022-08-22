// reduce
let foods = [800, 200, 100, 300];

let total = foods.reduce(function (sum, item) {
  return sum + item;
});

console.log(total);
