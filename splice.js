let fruits = ["mango", "apple", "grapes", "oranges"];

//The splice() method can be used to add new items to an array:
let result = fruits.splice(1, 2, "guava", "pears");

//  With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
console.log(result); //[ 'apple', 'grapes' ]

// The splice() method returns an array with the deleted items:
console.log(fruits); //[ 'mango', 'guava', 'pears', 'oranges' ]

let result1 = fruits.splice(1, 0, "melon");
console.log(fruits); //[ 'mango', 'melon', 'guava', 'pears', 'oranges' ]
