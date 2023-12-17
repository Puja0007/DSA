// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.





function RearraingeArrayNegetivePositiveNumPair(nums){
    let n = nums.length;

    let posIndex = 0;
    let negIndex = 1;

    let ans = new Array(n).fill(0);

    for(let i=0; i<n; i++){
        if(nums[i]<0){
            ans[negIndex]= nums[i];
            negIndex= negIndex+2;
        } else if(nums[i]>0){
            ans[posIndex]= nums[i];
            posIndex= posIndex+2;
        }
    }

    return ans;
   
   

}

let nums = [1,2,-4,-5];


console.log(RearraingeArrayNegetivePositiveNumPair(nums));
