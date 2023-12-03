function FrequencyOfElem(nums){
    let n = nums.length;
    let count = 0;
    let maxElem = null;

    for(let i =0; i<n; i++){
        
       if(count == 0){
        count++;
        maxElem = nums[i]
       }else if(maxElem == nums[i]){
        count++;
       }else{
        count--
       }
    }

    if(count>0){
        return maxElem;
    } 
}

let nums = [3,3,4];
console.log(FrequencyOfElem(nums));

// [2,3,3]

// 1.SLOW=0, FAST = 1
// SLOW = 2, FAST = 3
