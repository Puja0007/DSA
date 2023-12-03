function LargestElement(arr){
   let secondLargest= -Infinity;
   let largest = -Infinity;

   for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
          secondLargest = largest;
          largest = arr[i];
        }else if(arr[i]>secondLargest && arr[i] !=largest){
          secondLargest = arr[i];
        }
   }

   return secondLargest;
  
}

let arr = [1,2,3,4,5,7,7,4];
console.log(LargestElement(arr));