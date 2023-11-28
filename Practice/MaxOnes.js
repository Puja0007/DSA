function MaximumOnesSeries(nums){

    let count = 0;
    let maxCount = 0

  for(let i =0; i<nums.length; i++){
     
        while(nums[i] == 1){
            count++;
            maxCount = Math.max(maxCount,count);
            i++;
        }
        if(nums[i]==0){
            count=0;
           
        }

  }

  return maxCount;
}

let nums = [1, 1, 0, 1, 1, 1,0,0,0,1,1,1,1];

console.log(MaximumOnesSeries(nums))