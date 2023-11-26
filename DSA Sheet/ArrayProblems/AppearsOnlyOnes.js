function AppearOnlyOne(arr){
    let xor =0;

    for(let i=0; i<arr.length; i++){
        xor = xor ^ arr[i];
    }

    return xor;
}

let arr = [4,1,2,1,2];
console.log(AppearOnlyOne(arr));