function IncremovableSubarrays(nums){
    let n = nums.length;
    let count = 0;
    let max = -Infinity;
    let min = Infinity;
    let maxIndex = -1;
    let minIndex = -1;
    for(let i=0; i<n; i++){
        if(nums[i]>max){
            max = nums[i];
            maxIndex = i;
        }
        if(nums[i]<min){
            min = nums[i];
            minIndex = i;
        }
    }

    let left = 0;
    let right = n-1;
    while(left<=maxIndex){
        if(nums[left]<nums[left+1]){
            count++;
        }
        left++;
    }
    while(right>=minIndex){
        if(nums[right]<nums[right-1]){
            count++;
        }
        right--;
    }

    return count;

}