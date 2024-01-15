function MoveZerosToEnd(arr) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[count] = nums[i];
            count++;
        }
    }
    while(count < nums.length){
        nums[count] = 0;
        count++;
    }
    return nums;
   
   
}

let arr = [0,1,0,3,12];
console.log(MoveZerosToEnd(arr));