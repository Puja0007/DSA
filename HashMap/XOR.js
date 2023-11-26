// https://www.scaler.com/academy/mentee-dashboard/class/7013/assignment/problems/10640?navref=cl_tt_lst_nm


 // Given an integer array A containing N distinct integers.

 // Find the number of unique pairs of integers in the array whose XOR is equal to B.

 // NOTE
 // Pair (a, b) and (b, a) is considered to be the same and should be counted once.

 //The idea is based on the fact that A[i] ^ A[j] is equal to B if and only if A[i] ^ B is equal to A[j].

function XOR(A,B) { 
    let map = new Map();
    let result = [];
    let count=0;

    for(let i=0;i<A.length;i++){
        if(!map.has(A[i])){
            map.set(A[i],true);
        }
    }
   // console.log(map);

    for(let i=0;i<A.length;i++){
        if(map.has(A[i]^B)){
            count++;
            map.delete(A[i]^B);
            map.delete(A[i]);
        }

    }

    return count;


}

let A = [3, 6, 8, 10, 15, 50];
let B = 5;

console.log(XOR(A, B));
