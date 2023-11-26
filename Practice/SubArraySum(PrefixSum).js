function SubArraySum(nums,target){
    nums.sort((a,b) =>a-b);
   let cumSum = 0; count =0; 
   let map  = new Map();
   map.set(0,1);

   for(let i=0; i<nums.length; i++){
        cumSum += nums[i];

        if(map.has(cumSum-target)){
            count += map.get(cumSum-target);

        }
        if(map.has(cumSum)){
           map.set(cumSum,map.get(cumSum)+1);
        }
        else{
            map.set(cumSum,1)
        }
   }
   return count;

}


let target = 7, nums = [2,3,1,2,4,3];
 console.log(SubArraySum(nums,target));