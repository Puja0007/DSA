function ArrayMin(arr, n){
    if(n == 1){
        return arr[0];
    }
    else{
        return Math.min(arr[n-1], ArrayMin(arr, n-1));
    }

   
    
}

let arr= [1,2,3,4,5];
let n = arr.length;
ArrayMin(arr,n);