// Notification Service Simulator  Q3
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'events.txt');
const outputPath = path.join(__dirname, 'analytics.txt');

fs.readFile(inputPath, 'utf8', (err, data) => {
  if (err) return console.error("Error reading file:", err);


  const events = data.split('\n').map(line => line.trim()).filter(line => line !== "");


  const counts = events.reduce((acc, event) => {
    acc[event] = (acc[event] || 0) + 1;
    return acc;
  }, {});

 
  const summary = Object.entries(counts)
    .map(([event, count]) => `${event}: ${count}`)
    .join('\n');

  
  fs.writeFile(outputPath, summary, (err) => {
    if (err) throw err;
    console.log("Analytics summary generated in analytics.txt");
  });
});
