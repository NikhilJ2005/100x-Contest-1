//  Transaction Summary Q.10

const transactions = [
  { user: "Aman", type: "credit", amount: 1000 },
  { user: "Aman", type: "debit", amount: 200 },
  { user: "Riya", type: "credit", amount: 500 },
  { user: "Riya", type: "debit", amount: 100 }
];

const summary = transactions.reduce((acc, t) => {
  if (!acc[t.user]) acc[t.user] = 0;
  acc[t.user] += t.type === "credit" ? t.amount : -t.amount;
  return acc;
}, {});

console.log(summary);