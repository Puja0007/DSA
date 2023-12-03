function MaximumSubArraySumWithPosNeg(nums,k){
    let n = nums.length;
    let sum =0,maxLen=0;

    for(let i=0; i<n; i++){
        sum = nums[i];
        for(let j =i; j<n; j++){
            if(i != j){
                sum = sum +nums[j];
            }
            
            if(sum === k){
                 maxLen = (maxLen,j-i+1);

            }
        }
    }

    return maxLen;
}

let nums = [-1, 1, 1];
console.log(MaximumSubArraySumWithPosNeg(nums,0))