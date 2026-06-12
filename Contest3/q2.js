// Inverse Mapping
/* OUTPUT:- {
  Aman: "CSE",
  Riya: "CSE",
  Kabir: "ECE",
  Arjun: "ME",
  Sneha: "ME"
} */
const branchStudents = {
  CSE: ["Aman", "Riya"],
  ECE: ["Kabir"],
  ME: ["Arjun", "Sneha"]
};

const studentBranches={};
for ( const [branch , students] of Object.entries(branchStudents)){
    for(const student of students){
        studentBranches[student]=branch;
    }

}
console.log(studentBranches);
