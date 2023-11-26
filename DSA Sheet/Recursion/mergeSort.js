function mergeSort(arr,low,high){

    if(low<high){
        let mid = Math.floor((low+high)/2);
        mergeSort(low,mid);
        mergeSort(mid+1,high);
        merge(arr,low,mid,high);
    }
   

}

function merge(arr,low,mid,high){
    let i = low;
    let j = mid+1;
    let k = low;
    let temp = [];
    while(i<=mid && j<=high){
        if(arr[i]<arr[j]){
            temp[k] = arr[i];
            i++;
            k++;
        }
        else{
            temp[k] = arr[j];
            j++;
            k++;
        }
    }
    while(i<=mid){
        temp[k] = arr[i];
        i++;
        k++;
    }
    while(j<=high){
        temp[k] = arr[j];
        j++;
        k++;
    }
    for(let i = low; i<=high; i++){
        arr[i] = temp[i];
    }
    return arr;
    
  
}


let arr = [5,4,3,2,1];
let low = 0;
let high = arr.length-1;
mergeSort(arr,low,high);