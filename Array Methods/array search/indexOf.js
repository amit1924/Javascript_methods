// The indexOf() method searches an array for an element value and returns its position.

// array.indexOf(item, start)

let fruits = ["mango", "apple", "grapes", "oranges"];

let result = fruits.indexOf("apple");
console.log(result); //1

let results = fruits.indexOf("apple", 1);
console.log(results); //1

let resultss = fruits.indexOf("apple", 2);
console.log(result); //-1

// Array.indexOf() returns -1 if the item is not found.
let result1 = fruits.indexOf("pears");
console.log(result1); //-1

let fruits1 = ["mango", "apple", "grapes", "apple", "oranges"];

let resultFruit1 = fruits1.indexOf("apple", 2);
console.log(resultFruit1); //3

// //////////////////////////////////////////////////////////////////

// lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

const fruitsNew = ["Apple", "Orange", "Apple", "Mango"];
let position = fruitsNew.lastIndexOf("Apple") + 1;
console.log(position); //
