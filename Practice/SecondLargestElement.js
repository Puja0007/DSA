function secondLargestElem(nums){
    let largest= -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<nums.length; i++){
        if(nums[i]>largest){
            secondLargest = largest;
            largest = nums[i]
        }else if(secondLargest<nums[i] && nums[i] != largest){
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}

let nums = [1,2,3,4,5,7,7,4];

console.log(secondLargestElem(nums)); 