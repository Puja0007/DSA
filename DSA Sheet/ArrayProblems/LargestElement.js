function LargestElement(arr){
    let max = arr[0];
    let n = arr.length;
    for(let i=1; i<n; i++){
        max = Math.max(max,arr[i]);
    }

    return max;
}

let arr = [2,5,1,3,0];
console.log(LargestElement(arr));