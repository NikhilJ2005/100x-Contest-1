const fs = require('fs');
const path = require('path');

const studentsPath = path.join(__dirname, 'students.json');
const marksPath = path.join(__dirname, 'marks2.json');
const reportPath = path.join(__dirname, 'report.txt');


fs.readFile(studentsPath, 'utf8', (err, studentsData) => {
  if (err) return console.error("Error reading students:", err);

 
  fs.readFile(marksPath, 'utf8', (err, marksData) => {
    if (err) return console.error("Error reading marks:", err);

    const students = JSON.parse(studentsData);
    const marks = JSON.parse(marksData);

    const reportContent = students.map(student => {
      const studentMarks = marks.find(m => m.id === student.id);
      return `${student.name} - ${studentMarks ? studentMarks.marks : 'N/A'}`;
    }).join('\n');

    fs.writeFile(reportPath, reportContent, (err) => {
      if (err) throw err;
      console.log("Report generated successfully in report.txt");
    });
  });
});