const productss = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 499.99 },
  { name: "Tablet", price: 299.99 },
  { name: "Headphones", price: 89.99 },
];

const searchTerm = "Laptop";
const product = productss.find((p) => p.name === searchTerm);

if (product) {
  console.log(`Found product: ${product.name} - $${product.price}`);
} else {
  console.log("Product not found.");
}

const productNames = ["Laptop", "Smartphone", "Tablet", "Headphones"];

const searchTerms = "laptop";
const productExists = productNames.includes(searchTerm);

if (productExists) {
  console.log(`Product "${searchTerms}" exists in the list.`);
} else {
  console.log(`Product "${searchTerms}" does not exist in the list.`);
}
