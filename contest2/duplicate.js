// To Find Duplicate emails Q3
const users = [
  { id: 1, email: "a@test.com" },
  { id: 2, email: "b@test.com" },
  { id: 3, email: "a@test.com" },
  { id: 4, email: "c@test.com" }
];


const counts = {};
users.forEach(u => {
  counts[u.email] = (counts[u.email] || 0) + 1;
});


const duplicates = users.filter(u => counts[u.email] > 1);
console.log(duplicates);