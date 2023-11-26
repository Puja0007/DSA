function MaxCosecutiveOnes(nums){
    let i = 0;
    let count = 0;
    let maxCount;

    while(i<nums.length){
        if(nums[i] == 1){
            count++;
            i++;
        
        }
        else{
            
            if(maxCount == undefined){
                maxCount = count;
            }
            else if(maxCount<count){
                maxCount = count;
            }
            count = 0;
            i++;
        }
        if(maxCount == undefined){
            maxCount = count;
        }
        else if(maxCount<count){
            maxCount = count;
        }
    }

    return maxCount;

   
}

let nums = [1, 1, 0, 1, 1, 1];
console.log(MaxCosecutiveOnes(nums))