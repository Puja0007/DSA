// Given an one-dimensional integer array A of size N and an integer B.

// Count all distinct pairs with difference equal to B.

// Here a pair is defined as an integer pair (x, y), where x and y are both numbers in the array and their absolute difference is B.


function PairWithGivenDiff(A,B){
    let left = 0;
    let right = left+1;
    let count = 0;
    let diff = 0;
    let n = A.length;

    while(right<A.length){
        let x= A[left]; y= A[right];
        diff = Math.abs(y-x);
        if(diff==B){
            count++;

            while(left<n && A[left]==x){
                left++;
            }
            while(right<n && A[right]==y){
                right++;
            }
         
        }
        if(diff>B){
            left++;
        }
        if(diff<B){
            right++;
        }
    }
    return count;

}

let A = [1, 1, 1, 2, 2];B = 0
console.log(PairWithGivenDiff(A,B));

 


