function SubArraySum(nums,target){
    let n = nums.length;
    let left = 0;
    let right = 0;
    let sum = 0;

    while(right<n){
        sum = sum + nums[right];
        while(sum>target){
            sum = sum - nums[left];
            left++;
        }
    
         if(sum == target){
            return nums.slice(left,right+1);
        }
        right++;
    }
    return [-1];
}

let A = [1, 2, 3, 4, 5];B = 5;
console.log(SubArraySum(A, B));

