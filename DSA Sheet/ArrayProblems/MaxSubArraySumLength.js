function MaximumSubArraySum(nums,k){
    let left =0,right=0,n=nums.length,len = 0,maxLen =0,sum = 0;

    while(right<n){
        sum = sum + nums[right];
        while (left <= right && sum > k) {
            sum = sum - nums[left];
            left++;
        }
        if(sum === k){
            len = right-left+1;
            maxLen = Math.max(maxLen,len);
           
          // right++
        } 
        right++;
    }

    return maxLen;
}

/*
 i = 0
 sum = 4,left = 0,right = 0
 right = 1
 sum = 5 left = 0 right = 1
 right = 2
 sum = 10 left = 0 right = 2
 
*/

let nums = [-1, 1, 1];
console.log(MaximumSubArraySum(nums,2));