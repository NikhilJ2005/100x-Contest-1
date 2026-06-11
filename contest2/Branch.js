// Group Students by Branch Q4
//output:- {CSE: ["A","C"],ECE: ["B"],ME: ["D"]}
const students= [
  { name:"A", branch:"CSE" },
  { name:"B", branch:"ECE" },
  { name:"C", branch:"CSE" },
  { name:"D", branch:"ME" }
];

const result=students.reduce((acc,s)=>{
    if(!acc[s.branch]){
        acc[s.branch]=[];
    }
    acc[s.branch].push(s.name);
    return acc;
})
console.log(result);
