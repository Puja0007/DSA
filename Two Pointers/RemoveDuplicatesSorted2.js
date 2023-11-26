var removeDuplicatesII = function(nums) {
    let n = nums.length;
    let left = 2;
    let right = 2;

    while(right < n) {
        if(nums[right] === nums[left-2]) {
            nums.splice(right, 1);
            n--;
        }
        else{
            left++;
            right++;
        }
    }
return nums;
    
    
};

let nums = [1,1,1,2,2,3];
console.log(removeDuplicatesII(nums));