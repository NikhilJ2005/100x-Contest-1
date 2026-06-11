// Merge User Files Q9
//merged.json 
const fs = require("fs");

const users1 = JSON.parse(fs.readFileSync("D:/TODO/contest2/users1.json", "utf-8"));
const users2 = JSON.parse(fs.readFileSync("D:/TODO/contest2/users2.json", "utf-8"));

const merged = [...users1, ...users2];
fs.writeFileSync("merged.json", JSON.stringify(merged, null, 2));

console.log(merged);
