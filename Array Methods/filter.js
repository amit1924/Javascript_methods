let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.filter((num) => {
  if (num % 2 === 0) {
    console.log("following was divisble by 2");
  } else {
    console.log("not divisble by 2");
  }
});

let fruits = ["mango", "apple", "grapes", "oranges"];

let fruitArray = fruits.filter((item) => {
  item.includes("apple") && item.includes("grapes");
});
console.log("fruits contain apple and grapes", fruitArray);
