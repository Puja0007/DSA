function IsSortednumsay(nums){
   let n = nums.length;

   for(let i=0; i<n; i++){
    if(nums[i+1]<nums[i] && nums[i+1]<n+1){
            return false;
    }
   }
   return true;
}

let nums = [1,2,3,5,4];

console.log(IsSortednumsay(nums));