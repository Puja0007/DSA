function sortNumbers(nums){

    let n = nums.length;
    let low = 0,mid = 0, high = n-1;

    while(mid<=high){
        if(nums[mid] ==0){
            let temp = nums[mid];
            nums[mid] = nums[low];
            nums[low] = temp;
            mid++;
            low++;
        }else if(nums[mid] ==1){
          
            mid++;
           
        }else if(nums[mid] == 2){
            let temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }
    }
    return nums;
     

}

let nums = [2,0,2,1,1,0];
console.log(sortNumbers(nums));