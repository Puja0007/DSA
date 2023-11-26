// for negetive integers

function subarraySum(sum,arr){
  nums.sort(function(a, b){return parseInt(a) - parseInt(b)});
    let map = new Map();
   let cumsum = 0; let cnt = 0;
   map.set(0, 1);
   for (let i = 0; i < arr.length; i++) {
       cumsum += arr[i];
       if (map.has(cumsum - sum)){
  cnt += map.get(cumsum - sum);
  console.log(i)
      }
         
       if (map.has(cumsum)){
 map.set(cumsum, map.get(cumsum) + 1);
      }
          
       else  {
         map.set(cumsum, 1);
      }
            
   }
   return cnt;
 
 }

 let target = 7, nums = [2,3,1,2,4,3];
 console.log(subarraySum(target, nums));

 // explaination of the above code
  // explaination by writting : 
  // 1. we are using a map to store the cummulative sum and the number of times it has occured
  