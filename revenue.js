// 5 .transform array of orders to revenue per category
// OUTPUT:- { electronics: 300, clothes: 50 }


const orders = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
];

const revenuePerCategory = orders.reduce((acc, order) => {
  acc[order.category] = (acc[order.category] || 0) + order.price;
  return acc;
}, {});

console.log(revenuePerCategory); 


