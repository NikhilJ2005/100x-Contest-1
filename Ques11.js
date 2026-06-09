// Question 11  Finding most common word
// OUTPUT:- apple

const input = { 
  fruits: ["apple", "apple", "banana"], 
  drinks: ["apple", "tea"] 
};

let allWords = [...input.fruits, ...input.drinks];

let counts = {};
for (let word of allWords) {
  counts[word] = (counts[word] || 0) + 1;
}


let mostRepeated = "";
let maxCount = 0;

for (let word in counts) {
  if (counts[word] > maxCount) {
    maxCount = counts[word];
    mostRepeated = word;
  }
}

console.log(mostRepeated); 