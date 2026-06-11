//Q6 Most Purchased Product
//output:-{product:"Laptop",count:3}

const orders= [
"Laptop",
"Mouse",
"Laptop",
"Keyboard",
"Laptop",
"Mouse"
];

const counts = {};
orders.forEach(item => {
  counts[item] = (counts[item] || 0) + 1;
});

const top = Object.entries(counts).reduce((max, [product, count]) => {
  return count > max.count ? { product, count } : max;
}, { product: null, count: 0 });

console.log(top);
