//OUTPUT: [10, 26, 17, 1, 0]:- Required output
//Question 1 : Array Sum
L= [[1,2,3,4], [5,6,7,8], [1e0,4,2,1], [1], [-10, 8]]

function sumOfArrays(arr){
    let sum=[]
    for(i=0;i<arr.length;i++){
        let s=0;
        for(j=0;j<arr[i].length;j++){
            if(s<0){
                s=0
            }
            else{
                 s+=arr[i][j]

            }
           
        }
        sum.push(s)
    }
    return sum
}
console.log(sumOfArrays(L));


