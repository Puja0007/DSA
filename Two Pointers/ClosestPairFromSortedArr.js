// Given two sorted arrays of distinct integers, A and B, and an integer C, find and return the pair whose sum is closest to C and the pair has one element from each array.

// More formally, find A[i] and B[j] such that abs((A[i] + B[j]) - C) has minimum value.
// If there are multiple solutions find the one with minimum i and even if there are multiple values of j for the same i then return the one with minimum j.

// Return an array with two elements {A[i], B[j]}.

// Let say l = 0 i.e. it point at the start of array A and r = len(B) - 1 i.e. it points to end of array B.

// Also maintain a variable, let say, dif, which stores the minimum of abs(A[i]+B[j]-C).

// Now, If abs(A[l]+B[r]-C) < dif then update the value of dif and the value of two A[i] and B[j] and there indices.

// If abs(A[l]+B[r]-C) == dif then we need to update the indixes such that l and r are minimum as possible in case of multiple solution.

// Also, increment l and decrement r accordingly.



function ClosestPairOfSortedArrays(A, B,C) {
    let i = 0;
    let j = B.length - 1;
    let dif = Number.MAX_SAFE_INTEGER;
    let result = [];


    while (i < A.length && j >= 0) {
        let sum = Math.abs(A[i] + B[j] - C);
        if (sum < dif) {
            dif = sum;
            result = [i,j];
        }
        else if (sum == dif) {
           //why this condition give the minimum i and j value if there are multiple solutions
           
           
            if (i < result[0] || (i == result[0] && j < result[1])) {
                result = [i,j];
            }
            //explaination: if i is less than result[0] then it will update the result array with new i and j value
            //if i is equal to result[0] then it will check if j is less than result[1] then it will update the result array with new i and j value
            // how i will be equal to result[0] and j will be greater than result[1] because we are decrementing j value



        }
        if (A[i] + B[j] >= C) {
            // explaination: if A[i] + B[j] is greater than C then we need to decrement j value because we need to find the minimum value
            // explaination: if A[i] + B[j] is equal to C then we need to decrement j value because we need to find the minimum value
            j--;
        }
        else {
            i++;
        }
    }
    return [A[result[0]], B[result[1]]];

  
}

let A = [1, 2, 3, 4, 5];B = [2, 4, 6, 8];C = 9;
console.log(ClosestPairOfSortedArrays(A, B, C));

m
