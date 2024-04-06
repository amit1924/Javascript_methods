let fruits = ["mango", "apple", "grapes", "oranges"];

// array.includes(search-item)

// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
let result = fruits[2].includes("grapes");
console.log(result); //true
