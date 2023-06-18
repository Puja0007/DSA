// Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

// If the answer does not exist return an array with a single integer "-1".

// First sub-array means the sub-array for which starting index in minimum.

function findFirstContinuousSubarray(A,B){
    let i = 0;
    let j = 0;
    let sum = 0;
    while(j<A.length){
        sum += A[j];
        while(sum>B){
            sum -= A[i];
            i++;
        }
        if(sum==B){
            return A.slice(i,j+1);
        }
        j++;
    }
    return [-1];
}