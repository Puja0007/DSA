function ArrayMinMax(arr,n){
    if(n == 0){
       return 0
    }

    return Math.max(arr[n-1],ArrayMinMax(arr,n-1));

}

let arr = [1, 4, 3, -5, -4, 8, 6];

console.log(ArrayMinMax(arr,arr.length));