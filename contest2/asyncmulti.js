
//Multiple Files using async/await
const fs = require("fs/promises");
async function main() {
  try {
    const a = await fs.readFile("D:/TODO/contest2/a.txt", "utf-8");
    const b = await fs.readFile("D:/TODO/contest2/b.txt", "utf-8");
    const c = await fs.readFile("D:/TODO/contest2/c.txt", "utf-8");
    console.log(`${a} ${b} ${c}`);
  } catch (err) {
    console.error(err);
  }
}

main();

