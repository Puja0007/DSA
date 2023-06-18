// Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers ( A[left], A[right] ) such that left != right have sum equal to B.

// Since the number of such pairs can be very large, return number of such pairs modulo (109 + 7).


function PairWithGivenSum(A,B){
    // using two pointer inclue duplicate pairs
    let n = A.length;
    let left = 0;
    let right = n-1;
    let count = 0;
    const MOD = 1e9 + 7;
    while(left<right){

        if(A[left]+A[right]==B){
            if(A[left]==A[right]){
                let range = (right-left+1);
                count+= ((range * (range - 1)) / 2) % MOD;
                break;
            }
             else if(A[left]!=A[right]){
                let a=1;b=1;
                while(left+1<n && A[left+1]==A[left]){
                    left++;
                    a++;
                }
                while(right-1>=0 && A[right-1]==A[right]){
                    right--;
                    b++;
                }
                count = (count+(a*b))%MOD
                left++;
                right--;
             }
        }
        else if(A[left]+A[right]>B){
            right--;
        }
        else{
            left++
        }
    }

    return count;


}

let A = [1,1,1];B = 2; 
// [1,1,1], b=3

console.log(PairWithGivenSum(A,B));