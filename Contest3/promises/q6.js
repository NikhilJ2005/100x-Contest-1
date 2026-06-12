// 6 Write a function delay(ms, value) that returns a promise which resolves with value after ms milliseconds. You must use new Promise(...) and setTimeout — no libraries.

// Now extend it: delay(ms, value, shouldFail) — if shouldFail is true, the promise should reject after ms with the error "Operation failed". Demonstrate catching it with .catch()

delay(1000, "done").then(console.log); // prints "done" after 1 second

function delay(ms,value,shouldFail=false){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(shouldFail){
                reject('Operation Failed')
            }else{
                resolve(value)
            }
        },ms)
    })
}
delay(100,"done",true).catch(console.log)

        
    
