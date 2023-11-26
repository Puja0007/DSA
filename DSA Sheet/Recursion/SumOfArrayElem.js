function SumOfArrayElem(arr,n){
    if(n==0){
        return 0;
    }

    return arr[n-1]+ SumOfArrayElem(arr,n-1);
}

let arr = [1,2,3];

console.log(SumOfArrayElem(arr,3));