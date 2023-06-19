function FourSum(nums,target){
    nums.sort(function(a,b){return a-b;});
    let n = nums.length;
    let sum =0;
    let result=[];


    for(let i = 0; i < nums.length; i++){
        if (i > 0 && nums[i - 1] === nums[i]) continue;
        for(let j = i+1; j < nums.length; j++){
            if(j>i+1 && nums[j-1] === nums[j]) continue;
            let left = j+1;
            let right = n-1;
            while(left < right){
                sum = nums[i]+nums[j]+nums[left]+nums[right];
                if(sum < target){
                    left++;
                }
                else if(sum > target){
                    right--;
                }
                else if(sum == target){
                    let A = nums[left], B = nums[right];
                    result.push([nums[i],nums[j],nums[left],nums[right]]);

                while(left+1<n && nums[left+1]==A){
                    left++;
                }
                while(right-1>0 && nums[right-1]==B){
                    right--;
                }

                left++;
                right--;


                }
            }
        }
    }
    return result;
}

let nums = [2,2,2,2,2], target = 8;
console.log(FourSum(nums,target));