//Sum of transactions per user
//OUTPUT { A: 150, B: 200 }
L=[
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]
function sumofTransactions(transactions){
    let sum={};
    for(i=0;i<transactions.length;i++){
        let user=transactions[i].user;
        let amount=transactions[i].amount;
        if(sum[user]){
            sum[user]+=amount;
        }
        else{
            sum[user]=amount;
        }

    }
    return sum;

}
console.log(sumofTransactions(L));
