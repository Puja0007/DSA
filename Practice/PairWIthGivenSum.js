// Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers ( A[i], A[j] ) such that i != j have sum equal to B.

// Since the number of such pairs can be very large, return number of such pairs modulo (109 + 7).

function PairWithGivemSum(A,B){
    let n = A.length;
    let left = 0;
    let right = n-1;
    let count = 0;
    let sum =0;
    let MOD = 1e9 + 7;

    while(left<right){
        sum = A[left]+A[right];
        if(sum == B){
            if(A[left]==A[right]){
                let range = right-left+1;
                count = count+(range*(range-1)/2)%MOD;
            }
            else{
                let a=1;b=1;
                while(left+1<n && A[left]==A[left+1]){
                    a++;
                    left++;
                }
                while(right-1>0 && A[right]==A[right-1]){
                    b++;
                    right--;
                }
                count=(count+(a*b))%MOD;
                left++;
                right--;
            }
        }
        else if(sum>B){
            right--;
        }
        else{
            left++;
        }

    }
     
    return count;



}

let A = [1, 1, 1];B = 2;

//o/p:3

console.log(PairWithGivemSum(A,B));