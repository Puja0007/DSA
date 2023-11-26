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

let arr = [2,5,1,3,0]
console.log(LargestElement(arr));