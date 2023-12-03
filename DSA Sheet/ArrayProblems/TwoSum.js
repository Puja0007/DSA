function TwoSum(nums,k){

    // two pointer approach
    let left = 0,right = nums.length-1;
    let result = [];
    
    while(left<right){
        let sum = nums[left] + nums[right];
        if(sum === k){
          
            return result;
        }else if(sum > k){
            right--;
        }else{
            left++;
        }
    }
    return "no";

}

let nums = [2,7,11,15]; k = 13;
console.log(TwoSum(nums,k));