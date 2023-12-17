function MaximumSubArraySumWithPosNeg(nums,k){
    let n = nums.length;
    let sum =0,maxLen=0;
    let prefixSumMap = new Map();

    for(let i=0; i<n; i++){
        sum = sum + nums[i];
        if(!prefixSumMap.has(sum)){
            prefixSumMap.set(sum,i);
        }
        if(sum === k){
            maxLen = Math.max(maxLen,i+1);
        }else if(prefixSumMap.has(sum-k)){
            maxLen = Math.max(maxLen,i-prefixSumMap.get(sum-k));
        }
    }

    return maxLen;
}

let nums = [-1, 1, 1];
console.log(MaximumSubArraySumWithPosNeg(nums,1))