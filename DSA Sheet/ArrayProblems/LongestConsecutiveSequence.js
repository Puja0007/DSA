function LongestConsecutiveSubSequence(nums){

    let n = nums.length;
    let cnt =0;
    let maxLen = 1;

function LinearSearchElm(elm){
    for(let i =0; i<n; i++){
        if(nums[i] == elm){
            return true;
        }
    }
    return false;

}
    for(let i=0; i<n; i++){
        let x = nums[i];
        while(LinearSearchElm(x)){
            x +=1;
            cnt +=1;
        }
        maxLen = Math.max(maxLen,cnt)
    }

    return maxLen;
}