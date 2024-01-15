function FindTheMissingElem(nums){
    let n = nums.length;
   let targateSum = (n * (n + 1)) / 2;

    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }

    return targateSum - sum;

   
}


let nums = [1,2,4,5];

console.log(FindTheMissingElem(nums));