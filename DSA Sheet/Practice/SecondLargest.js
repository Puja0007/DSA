function SecondLargestElement(nums){
    let largeElm = -Infinity;
    let secondLargeElm = -Infinity;
    let n = nums.length;

    for(let i =0; i<nums.length; i++){
        if(nums[i]>largeElm){
            secondLargeElm = largeElm;
            largeElm = nums[i]
        }else if(nums[i]<largeElm && nums[i]>secondLargeElm){
            secondLargeElm = nums[i];
        }
    }

    return secondLargeElm;
}

let nums = [1,2,4,7,7,5];

console.log(SecondLargestElement(nums));