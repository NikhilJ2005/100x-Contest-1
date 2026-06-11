// Multiple Files using .then()

const fs = require("fs/promises");

fs.readFile("D:/TODO/contest2/a.txt", "utf-8")
  .then(data1 => fs.readFile("D:/TODO/contest2/b.txt", "utf-8").then(data2 => data1 + " " + data2))
  .then(combined => fs.readFile("D:/TODO/contest2/c.txt", "utf-8").then(data3 => combined + " " + data3))
  .then(final => console.log(final))
  .catch(err => console.error(err));



