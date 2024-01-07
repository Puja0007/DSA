function LongestConsecutiveSubSequence(nums){

    let n = nums.length;
    let set = new Set();
    let cnt =0;
    let maxLen = 1;
    for(let i=0; i<n; i++){
        set.add(nums[i]);
    }

    for(let i = 0; i<n; i++){
        let x = nums[i];
        cnt = 0;
        if(!set.has(nums[i]-1)){
            cnt= 1;
            while(set.has(x+1)){
                x++;
                cnt++;
            }

            maxLen = Math.max(maxLen,cnt);
        }

    }

    return maxLen
}



let nums =[100, 200, 1, 3, 2, 4];

console.log(LongestConsecutiveSubSequence(nums))