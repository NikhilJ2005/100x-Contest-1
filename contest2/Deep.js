//. Deep Object Filtering Q7
// output:-["Aman","Riya"]

const users= [
  {
    name:"Aman",
    posts: [
      { title:"JS", likes:50 },
      { title:"React", likes:10 }
    ]
  },
  {
    name:"Riya",
    posts: [
      { title:"Node", likes:80 }
    ]
  }
];

const names = users
  .filter(u => u.posts.some(p => p.likes > 40))
  .map(u => u.name);

console.log(names);