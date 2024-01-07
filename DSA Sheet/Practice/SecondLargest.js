function secondLargestElem(nums){
    let n = nums.length;
    let max = -Infinity;
    let secondMax = -Infinity;

    for(let i=0; i<n; i++){
        
        if(nums[i]>max){
            secondMax = max;
            max = nums[i];
        }else if(nums[i]>secondMax && nums[i] != max){
            secondMax = nums[i];
        }

    }
    return secondMax;



     
}