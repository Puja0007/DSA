function LeftRotateByOnePlace(nums){
    let n = nums.length;
    let temp = nums[0];

    for(let i=1; i<n; i++){
          nums[i-1] = nums[i];
        
    }
    nums[n-1] = temp;
    return nums;
}

let nums = [1,2,3,4,5];

console.log(LeftRotateByOnePlace(nums))