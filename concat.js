let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

// The concat() method does not change the existing arrays. It always returns a new array.
let result = arr1.concat(arr2);
console.log(result);
console.log(result[7]);
console.log(arr1); // Ans :[ 1, 2, 3, 4 ]

// The concat() method can also take strings as arguments:
let fruits = ["mango", "apple", "grapes", "oranges"];

let addFruits = fruits.concat("guava");
console.log(addFruits);
