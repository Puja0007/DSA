var largestPerimeter = function(nums) {
    let n = nums.length;
   nums.sort((a,b)=>a-b);
  let prefixSum = [];
   prefixSum[0] = nums[0];
   for(let i=1; i<n; i++){
       prefixSum[i] = prefixSum[i-1]+nums[i];
   }
   let len = prefixSum.length;

   for(let i=len-1; i>=2; i--){
       if(nums[i]<prefixSum[i-1]){
           return prefixSum[i];
       }
   }

   return -1;
};