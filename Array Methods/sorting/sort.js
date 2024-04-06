// The sort() method sorts an array alphabetically:

let fruits = ["mango", "apple", "grapes", "oranges"];

let result = fruits.sort();

console.log(fruits); //[ 'apple', 'grapes', 'mango', 'oranges' ]

// The reverse() method reverses the elements in an array:

let result1 = fruits.reverse();
console.log(fruits); //[ 'oranges', 'mango', 'grapes', 'apple' ]

// By combining sort() and reverse(), you can sort an array in descending order:

let fruits1 = ["mango", "apple", "grapes", "oranges"];
let result2 = fruits1.sort();
let result3 = fruits1.reverse();

console.log(fruits); //[ 'oranges', 'mango', 'grapes', 'apple' ]

////////////////////////////////////////////////////////////////
// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

// the toSorted() method as a safe way to sort an array without altering the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted); //[ 'Apr', 'Feb', 'Jan', 'Mar' ]

// toReversed() method as a safe way to reverse an array without altering the original array.
const reversed = months.toReversed();
console.log(reversed); //[ 'Apr', 'Mar', 'Feb', 'Jan' ]

//
let num = [10, 40, 5, 60, 80, 20, 100];
console.log(num.sort()); //this line of code cant sort,that's why we need to compare them
num.sort((a, b) => {
  return a - b;
});
console.log(num); //[
//     5, 10,  20, 40,
//    60, 80, 100
//  ]
//

// This code will work like reverse ie descending order of numbers
let num1 = [10, 40, 5, 60, 80, 20, 100];
num1.sort((a, b) => {
  return b - a;
});
console.log(num1); //[
// 100, 80, 60, 40,
//  20, 10,  5
//   ]
