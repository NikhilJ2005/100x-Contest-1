//Q1 Student Score Transformation
const students = [
  { name: "Aman", marks: 78 },
  { name: "Riya", marks: 91 },
  { name: "Kabir", marks: 65 }
];

const result = students.map(s => {
  const grade = s.marks >= 90 ? "A" : s.marks >= 70 ? "B" : "C";
  return { name: s.name.toUpperCase(), grade };
});

console.log(result);