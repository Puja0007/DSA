function SubArrayCountWithGivenSum(nums, k){
    let n = nums.length,count =0, sum = 0;
    let prefixSum = new Map();

   for(let i=0; i<n; i++){
         sum = sum + nums[i];
    
         if(sum == k){
              count++;
         }
    
         if(prefixSum.has(sum-k)){
              count = count + prefixSum.get(sum-k);
         }
    
         if(!prefixSum.has(sum)){
              prefixSum.set(sum, 1);
         }else{
              prefixSum.set(sum, prefixSum.get(sum)+1);
         }
        
   }
    return count;


}


let nums = [3, 1, 2, 4], k = 6;

console.log(SubArrayWithGivenSum(nums, k))