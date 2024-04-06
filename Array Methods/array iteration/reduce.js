// reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

const numbers = [10, 20, 30, 40, 50];

// Define the callback function for reduce
const total = (accumulator, value) => {
  return accumulator + value; // Return the updated accumulator
};

// Pass the callback function to reduce
const sum = numbers.reduce(total, 10); // Start with an initial value of 10 or any numbers

console.log(sum); // Output the final sum
