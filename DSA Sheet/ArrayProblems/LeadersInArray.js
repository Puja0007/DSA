function LeadersInArray(nums){
    let n = nums.length;
    let left = 0;
    let right = n-1;
    let res = [];
    res.push(nums[n-1]);

    while(left<right){
        
        while(right>left){
            if(nums[right]<nums[left]){
                right--;
            }else{
                break;
            }
        }
        if(right== left){
            res.push(nums[left]);
        }
        left++;
        right = n-1;

    }
    
    return res;
}

let nums = [10, 22, 12, 3, 0, 6];
console.log(LeadersInArray(nums));