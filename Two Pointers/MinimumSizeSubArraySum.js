var minSubArrayLen = function(target, nums) {
    let right = 0;
     let left = 0;
     let curSum = 0;
     let minLen=nums.length;
     let sum =0;
    for(let i = 0; i < nums.length;i++){
        if(nums[i]>=target){
            return 1;
        }
        
     }
     for(let i = 0; i < nums.length;i++){
        sum = sum+nums[i];
 
     }
     if(sum<target){
         return 0;   
     }
     while(right<nums.length){
         curSum = curSum+nums[right];
         while(curSum>=target){
             minLen = Math.min(minLen,right-left+1);
             curSum = curSum-nums[left];
             left++;
         }
         right++;
     }
     return minLen;
 };