function maximumSubArraySum(nums){
    let sum =nums[0];
    let maxSum = nums[0];
    let n = nums.length;
    let subArray = [];

    for(let i =1; i<n; i++){
        sum = sum + nums[i];

       if(sum>maxSum){

            maxSum = sum;
       }

        if(sum <0){
            sum = 0;
        }
    }

    return maxSum;

}

let nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maximumSubArraySum(nums));