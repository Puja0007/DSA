function IsSortednumsay(nums){
   let n = nums.length;
   let minElm = +Infinity;
   let minIndex = -1;

   for(let i=0; i<n; i++){
        if(minElm>nums[i]){
         minElm = nums[i];
         minIndex = i;
        }
   }
   if(minIndex==0){
        for(let i=1; i<n; i++){
         if(nums[i]<nums[i-1]){
                  return false;
         }
        }
   }else{
        for(let i =0; i<minIndex; i++){
         if(nums[i]<nums[i-1]){
                  return false;
         }

        }

   }

        

   return true;
}

let nums = [2,1,3,4];

console.log(IsSortednumsay(nums));