//remove falsy values from object
// OUTPUT:- { c: "hello", e: 5 }
L={ a: 0, b: null, c: "hello", d: undefined, e: 5 }

for (let key in L){
    if(L[key]){
        console.log(key + ":"+ L[key]);
    }
}

