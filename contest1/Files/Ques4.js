// Sequential File Processor Q4.

const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'message.txt');
const upperPath = path.join(__dirname, 'uppercase.txt');
const summaryPath = path.join(__dirname, 'summary.txt');


fs.readFile(inputPath, 'utf8', (err, data) => {
  if (err) return console.error("Error reading file:", err);

  const upperData = data.toUpperCase();


  fs.writeFile(upperPath, upperData, (err) => {
    if (err) throw err;
    console.log("Written to uppercase.txt");

    fs.readFile(upperPath, 'utf8', (err, data) => {
      if (err) throw err;


      const wordCount = data.split(/\s+/).filter(word => word.length > 0).length;


      fs.writeFile(summaryPath, `Total words: ${wordCount}`, (err) => {
        if (err) throw err;
        console.log("Summary saved to summary.txt");
      });
    });
  });
});