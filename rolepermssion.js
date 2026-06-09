//Role permission check
//OUTPUT:- false
roles={ admin:["read","write"], user:["read"], staff: ["write"]}
checkRole="user",
action="write"

if(roles[checkRole] && roles[checkRole].includes(action)){
    console.log(true);
}
else(console.log(false));
