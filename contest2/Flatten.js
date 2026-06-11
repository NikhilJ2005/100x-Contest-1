//Flatten Orders Q5
//OUTPUT:-["Laptop","Mouse","Keyboard"]

const users= [
  {
    name:"Aman",
    orders: ["Laptop","Mouse"]
  },
  {
    name:"Riya",
    orders: ["Keyboard"]
  }
];
const allOrders = users.flatMap(u => u.orders);
console.log(allOrders);

