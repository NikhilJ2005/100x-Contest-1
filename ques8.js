//question 8  group by category
//OUTPUT:-{ fruit: [1,3], veggie: [2] }
const input = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
];

const result = input.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item.id);
  return acc;
}, {});

console.log(JSON.stringify(result, null, 2));

