//4. Find the Second Most Frequent  OUTPUT:- { product: "Mouse", count: 3 }
const orders = [
  "Laptop", "Mouse", "Laptop", "Keyboard", 
  "Laptop", "Mouse", "Keyboard", "Mouse", "Monitor"
];

function findSecond(orders) {
  const freq = {};
 
  for (let order of orders) {
    freq[order] = (freq[order] || 0) + 1;
  }

 
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  
  if (sorted.length < 2) return null; 
  
  return { 
    product: sorted[1][0], 
    count: sorted[1][1] 
  };
}

console.log(findSecond(orders));