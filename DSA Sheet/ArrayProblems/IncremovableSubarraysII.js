


function IncremovableSubarraysI(nums){
    let n = nums.length;
   let count=0

    for(let i=0; i<n; i++){
       
        for(let j=i; j<n; j++){
            let flag = true;
            let tempArr = nums.slice(0,i).concat(nums.slice(j+1,n));
           
            for(let k=0; k<tempArr.length; k++){
                if(tempArr[k]>=tempArr[k+1]){
                    flag = false;
                    break;
                }
            }
            if(flag){
                count++;
            }
          
        }
       
    }

    return count;

}


let nums = [6,5,7,8];

console.log(IncremovableSubarraysI(nums))

