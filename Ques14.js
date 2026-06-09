// 14 Find top N keys by value
//OUTPUT:-["b","d"]

const input = { a: 10, b: 50, c: 30, d: 40 }, N = 2;
const result = Object.keys(input)
  .sort((a, b) => input[b] - input[a])
  .slice(0, N);
console.log(result); 

