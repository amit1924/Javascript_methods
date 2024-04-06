// The every() method checks if all array values pass a test.

let num = [10, 20, 25, 30, 40, 50, 60, 45, 55, 75, 85];
let check = (value, index) => {
  return value > 45;
};

let res = num.every(check);

console.log(res); //false
