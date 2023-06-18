// Take 3 pointers X, Y and Z
// Initialize them to point to the start of arrays A, B and C
// Find min of X, Y and Z.
// Compute max(X, Y, Z) - min(X, Y, Z).
// If new result is less than current result, change it to the new result.
// Increment the pointer of the array which contains the minimum.

function ThreePointersArray(A,B,C){
    let i = 0, j = 0, k = 0;
    let result = Number.MAX_SAFE_INTEGER;
    while(i < A.length && j < B.length && k < C.length){
        let min = Math.min(A[i], B[j], C[k]);
        let max = Math.max(A[i], B[j], C[k]);
        if(max - min < result){
            result = max - min;
        }
        if(result === 0){
            break;
        }
        if(A[i] === min){
            i++;
        }else if(B[j] === min){
            j++;
        }else{
            k++;
        }
    }
    return result;
  
}


let A = [1, 4, 10];B = [2, 15, 20];C = [10, 12];

console.log(ThreePointersArray(A,B,C));