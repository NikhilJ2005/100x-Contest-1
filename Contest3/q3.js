// Cart Total with Coupons
//OUTPUT Calculate the final payable amount after applying the category discount to each item.Final amount: 75300
const cart = [
  { name: "Laptop", price: 80000, qty: 1, category: "electronics" },
  { name: "Mouse", price: 500, qty: 2, category: "electronics" },
  { name: "Shoes", price: 3000, qty: 1, category: "fashion" }
];

const coupons = {
  electronics: 0.10,   // 10% off
  fashion: 0.20        // 20% off
};

function calculateTotal(cart,coupons){
    let total=0;
    for (let item of cart){
        const discount = coupons[item.category] ;
        const discounterPrice=item.price * (1-discount);
        total += discounterPrice*item.qty;
    }
    return total;
}
const finalAmount=calculateTotal(cart,coupons);
console.log('Final Amount:',finalAmount);


