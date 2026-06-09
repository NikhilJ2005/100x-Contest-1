// ques 12 Find intersection of all arrays in object
// Output:-[3]

const input = { a: [1, 2, 3], b: [2, 3, 4], c: [3, 4, 5] };
const arrays = Object.values(input);
const result = arrays.reduce((a, b) => a.filter(c => b.includes(c)));
console.log(result); 

