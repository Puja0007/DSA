function PairWithGivenSum(nums,target){
    let n = nums.length;
    let left = 0;
    let right = n-1;
    let sum = 0;
    let count = 0;
    

    while(right < n){
        sum = nums[right]+nums[left];

        if(sum == target){
            if(nums[left] == nums[right]){
                let range = right - left+1;
                count += ((range * (range - 1)) / 2) % MOD;
                break;
            }
            else if(nums[right] != nums[left]){
                let a=1,b=1;
                if(left+1<n && nums[left+1]==nums[left]){
                    left++;
                    a++;
                }
                if(right-1>0 && nums[right-1]==nums[right]){
                    right--;
                    b++;
                }
                left++;
                right--;

            }
            

        }
        else if(sum>target){
            right--;

        }
        else if(sum<target){
            left++;
        }

    }
    return count;

    
}