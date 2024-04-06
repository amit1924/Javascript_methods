let fruits = ["mango", "apple", "grapes", "oranges"];

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

let result = fruits.slice(1);
console.log(result); //[ 'apple', 'grapes', 'oranges' ]

// The method then selects elements from the start argument, and up to (but not including) the end argument.
let result1 = fruits.slice(1, 2);
console.log(result1); //[ 'apple' ]

let result3 = fruits.slice(-3, -1);
console.log(result3); //;[ 'apple', 'grapes' ]
