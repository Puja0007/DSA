function MoveZerosToEnd(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] != 0) {
            let temp = arr[j];
            arr[j] = arr [i];
            arr[i++] = temp;
           
        }
    }
    return arr;

   
}

let arr = [0,1,0,3,12];
console.log(MoveZerosToEnd(arr));