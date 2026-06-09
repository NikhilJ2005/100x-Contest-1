//  Api to Object
// OUTPUT { 1: "Alice", 2: "Bob" }
L= [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]
function toObject(Arr){
    let obj={};
    for(i=0;i<Arr.length;i++){
        let id=Arr[i].id;
        let name=Arr[i].name;
        obj[id]=name;
    }
    return obj;
}
console.log(toObject(L));
