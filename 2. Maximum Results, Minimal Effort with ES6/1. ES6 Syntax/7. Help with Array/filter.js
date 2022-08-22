// filter
let values = [1, 60, 34, 30, 20, 7];

function lessThan20(val) {
  return val < 20;
}

let valueLessThan20 = values.filter(lessThan20);

console.log(valueLessThan20);
