// Given an array A of N integers, find three integers in A such that the sum is closest to a given number B. Return the sum of those three integers.

// Assume that there will only be one solution.


function ThreeSumClosest(A,B){
    let n = A.length;
    let ptr1 = 0;
    let ptr2 = ptr1+1;
    let ptr3 = n-1;
    let sum = A[0]+A[1]+A[2];
    let closestElm = sum;

  for(let i = 0; i < A.length; i++){
    ptr1 = i;
    ptr2 =i+1;
    ptr3 = n-1;
    while(ptr2<ptr3){
        sum = A[ptr1]+A[ptr2]+A[ptr3];

        if(sum==B){
            return sum;
        }
        else if(sum>B){
            ptr3--;

        }
        else{
            ptr2++;
        }

        if(Math.abs(sum-B)<Math.abs(minElm-B)){
            closestElm = sum;
        }
    }
  }

  return closestElm;
}

let A = [-1, 2, 1, -4];B = 1;

console.log(ThreeSumClosest(A,B));



