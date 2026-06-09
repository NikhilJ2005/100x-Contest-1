//15. Merge two objects (no sum, override second)

// output:- { a: 5, b: 20, c: 15 }

const obj1 = { a: 10, b: 20 }, obj2 = { a: 5, c: 15 };
const result = { ...obj1, ...obj2 };
console.log(result); 