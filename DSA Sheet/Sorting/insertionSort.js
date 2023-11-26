function insertionSort(arr){
    let i = 1;
    let j;
    let temp;
    while(i<arr.length){
        temp = arr[i];
        j = i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
        i++;
    }
    return arr;

}