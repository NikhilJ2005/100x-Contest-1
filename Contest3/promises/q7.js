//Q7 ### Promisify fs.readFile` with callbacks looks like this:


function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });

      fn.apply(this, args);
    });
  };
}

const fs = require("fs");
const readFileP = promisify(fs.readFile);

readFileP("D:/TODO/Contest3/promises/a.txt", "utf-8")
  .then(console.log)
  .catch(console.error);
        


