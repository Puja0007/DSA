// Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

// If the answer does not exist return an array with a single integer "-1".

// First sub-array means the sub-array for which starting index in minimum.


function SubArraySum(A,B){
    let n = A.length;
    let left = 0;
    let right = 0;
    let sum = 0;
  
    while(right<n){
        sum = sum+A[right];

        while(sum>B){
            sum = sum-A[left];
            left++
        }

         if(sum == B){
            return A.slice(left,right+1);
        }
        else{
            right++;
        }
    }
    return [-1];

}


let A = [5, 10, 20, 100, 105];B = 110
console.log(SubArraySum(A,B));