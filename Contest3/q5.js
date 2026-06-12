// Nested Aggregation Return one flat array of every student who has cgpa ≥ 8, tagged with their college and department:
/*[
  { name: "A", cgpa: 8.2, college: "MITS", dept: "CSE" },
  { name: "B", cgpa: 9.1, college: "MITS", dept: "CSE" },
  { name: "D", cgpa: 8.8, college: "NIT", dept: "ME" }
] */

const colleges = [
  {
    name: "MITS",
    departments: [
      { name: "CSE", students: [{ name: "A", cgpa: 8.2 }, { name: "B", cgpa: 9.1 }] },
      { name: "ECE", students: [{ name: "C", cgpa: 7.5 }] }
    ]
  },
  {
    name: "NIT",
    departments: [
      { name: "ME", students: [{ name: "D", cgpa: 8.8 }, { name: "E", cgpa: 6.9 }] }
    ]
  }
];
const result = colleges.flatMap(college =>{
    return college.departments.flatMap(dept=>{
        return dept.students.filter(student =>student.cgpa >=8).map(student =>{
            return {
                name:student.name,
                cgpa:student.cgpa,
                college:college.name,
                dept:dept.name,
            }
        })
    })
})

console.log(JSON.stringify(result,null,2));

