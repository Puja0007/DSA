function selectionSort(arr){
    let i = 0;

    while(i<arr.length-1){
        let min = arr[i];
        let minIndex;
        for(let j=i; j<arr.length; j++){
         if(min>arr[j]){
            min = arr[j];
            minIndex = j;
         }
        }
        
        arr[minIndex] = arr[i]
        arr[i] = min;
        i= i+1;
    }

    return arr;
}
let arr = [13,46,24,52,20,9]
console.log(SelectionSort(arr));