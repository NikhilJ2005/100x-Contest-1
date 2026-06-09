// Ques 10 , Deep flatten nested arrays inside object
// Output: { a: [1, 2, 3], b: [4, 5] }
const input = { 
  a: [1, [2, [3]]], 
  b: [4, [5]] 
};

const output = {};

for (const key in input) {
 
  output[key] = input[key].flat(Infinity);
}

console.log(JSON.stringify(output, null, 2));
