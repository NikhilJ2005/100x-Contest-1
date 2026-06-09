// Question 6 . Remove duplicates by id
// Output:-[{ id: 1, name: "A" },{ id: 2, name: "B" ]


const L = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];

const seen = new Set();
const result = L.filter(item => {
  if (seen.has(item.id)) return false;
  seen.add(item.id);
  return true;
});


console.log(JSON.stringify(result, null, 2));
