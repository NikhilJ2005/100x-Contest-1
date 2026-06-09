// 2nd Largest number in array
//OUTPUT NEEDED:-OUTPUT: 67
const L= [10, 25, 8, 99, 67];

function secondLargest(){
    let max=0;
    let secmax=0;
    for(i=0; i<L.length; i++){
        if(L[i]>max){
            secmax=max;
            max=L[i];
        }
        else if(L[i]>secmax && L[i]!=max){
            secmax=L[i];
        }
    }
    return secmax
}
console.log(secondLargest());


