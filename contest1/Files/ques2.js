//Q2. Student Marks Report Generator

const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'marks.json');
const outputPath = path.join(__dirname, 'report.txt');

fs.readFile(inputPath, 'utf8', (err, data) => {
  if (err) return console.error("Error reading file:", err);

  const students = JSON.parse(data);


  const totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
  const average = totalMarks / students.length;

  const topStudent = students.reduce((max, s) => s.marks > max.marks ? s : max);

  const report = `Average Marks: ${average.toFixed(2)}\nTop Performer: ${topStudent.name} (${topStudent.marks})`;


  fs.writeFile(outputPath, report, (err) => {
    if (err) throw err;
    console.log("Report generated successfully in report.txt");
  });
});

