// Given an array of integers A consisting of only 0 and 1.

// Find the maximum length of a contiguous subarray with equal number of 0 and 1.


//https://www.scaler.com/academy/mentee-dashboard/class/7013/homework/problems/4836/?navref=cl_pb_nv_tb



function ContiguousArray(A){
    let map = new Map();
    let sum = 0;
    let max = 0;
    for(let i=0;i<A.length;i++){
        if(A[i]==0){
            sum -= 1;
        }
        else{
            sum += 1;
        }
        if(sum==0){
            max = i+1;
        }
        else if(map.has(sum)){
            max = Math.max(max,i-map.get(sum));  
        }
        else{
            map.set(sum,i);
        }
    }
    return max;
    
}

let A = [1,1,1,0];
console.log(ContiguousArray(A));

// dry run the [1,1,1,0] array 

// 1 1 1 0

602+264+20+414+214+230



