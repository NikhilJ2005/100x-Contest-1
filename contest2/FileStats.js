// Q8 File Statistics 
// create file.txt with these stuff hello world,node js,hello javascript

const fs = require("fs");

fs.readFile("D:/TODO/contest2/file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const lines = data.trim().split("\n");
  const words = data.trim().split(/\s+/).filter(w => w.length > 0);
  const characters = data.length;
  
  console.log({
    lines: lines.length,
    words: words.length,
    characters
  });
});