/*const fs = require("fs/promises");

async function totalLength(files) {
  let total = 0;
  files.forEach(async (file) => {
    const data = await fs.readFile(file, "utf-8");
    total += data.length;
  });
  return total;
}

totalLength(["D:/TODO/Contest3/promises/a.txt", "D:/TODO/Contest3/promises/b.txt", "D:/TODO/Contest3/promises/c.txt"]).then(console.log); */ 
// DEBUG WHAT IS WRONG HERE . The Correction here is to change ForEach into a normal for loop as ForEach does not wait for async funtion to complete here. 

// Corrected Code:- 
const fs = require("fs/promises");

async function totalLength(files) {
  let total = 0;
  for (const file of files) {
    const data = await fs.readFile(file, "utf-8");
    total += data.length;
  }
  return total;
}

totalLength([
  "D:/TODO/Contest3/promises/a.txt", 
  "D:/TODO/Contest3/promises/b.txt", 
  "D:/TODO/Contest3/promises/c.txt"
]).then(console.log);
