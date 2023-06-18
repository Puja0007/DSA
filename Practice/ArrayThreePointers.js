// You are given 3 sorted arrays A, B and C.

// Find i, j, k such that : max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) is minimized.


function ArrayThreePointers(A, B, C) {
    let i=0;j = 0;k = 0;
    let result = Number.MAX_SAFE_INTEGER;

    while(i<A.length && j<B.length && k<C.length) {
        let min = Math.min(A[i],B[j],C[k]);
        let max = Math.max(A[i],B[j],C[k]);

        result = Math.min(result,(max-min));
        if(result == 0){
            break;
        }

        if(min== A[i]){
            i++;
        }
        else if(min == B[j]){
            j++;
        }
        else if(min = C[k]){
            k++;
        }
    }
    return result;
}