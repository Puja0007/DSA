function LeadersInArray(nums){
    let n = nums.length;
    let left = 0;
    let right = 1;
    let res = [nums[n-1]];

    while(right<n){
        console.log(nums[left]);
        console.log(nums[right]);
        while(nums[left]>nums[right] && right<n){
            right++;
        }
        console.log("right",right);

        if(right == n){
            res.push(nums[left]);
        }
        
        left++;
        right=left+1;

    }
    return res;


   
}

let nums = [10, 22, 12, 3, 0, 6];
console.log(LeadersInArray(nums));