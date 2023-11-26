function MoveZeroesToEnd(nums){
    let n = nums.length;
    let i = 0;

    for(let j=0; j <n; j++){
        if(nums[j]!=0){
           let temp = nums[j];
           nums[j] = nums[i];
           nums[i++] = temp;
            
        }
    }

    return nums;


}


let nums = [0,1,0,3,12];

console.log(MoveZeroesToEnd(nums))