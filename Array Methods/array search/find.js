// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

let fruits = ["mango", "apple", "grapes", "oranges"];

let result = fruits.find((fruit) => fruit === "apple");

if (result) {
  console.log("apple is present");
} else {
  console.log("fruits is not present");
}

// findindex()
fruits.findIndex(findIndexes);

function findIndexes(fruit, index, array) {
  if (fruit === "apple") {
    console.log("index of apple is ", index);
  } else {
    console.log("couldnt find index of apple");
  }
}

// findlast()
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log(high);

// findlastindex()
const temp1 = [27, 28, 30, 40, 42, 35, 30];
let index = temp.findLastIndex((x) => x > 40);
console.log(`index of number greater than 40 is ${index}`);
