function RemoveDuplicates(nums){

    let n = nums.length;
    let i = 0;

    for(let j= 1; j<n; j++){
        if(nums[i] != nums[j]){
            i++;
            nums[i] = nums[j];

        }
        
    }
    nums.length = i+1;
    return nums;
}

let nums = [1,1,2,2,2,3,3];
console.log(RemoveDuplicates(nums))