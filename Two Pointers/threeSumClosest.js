function ThreeSumClosest(A,B){
    A.sort(function(a, b){return parseInt(a) - parseInt(b)});
    let n = A.length;
    let first = 0;
    let left = 1;
    let right = n-1;
    let count =0;
    let sum =0;
   let minElm = A[0]+A[1]+A[2];

    for(let i = 0; i < n; i++){
        first = A[i];
        left = i+1;
        right = n-1;
        while(left<right){
            sum = first+A[left]+A[right];
            if(sum==B){
                return sum;
            }
            else if(sum>B){
                right--;
            }
            else{
                left++;
            }
            if(Math.abs(sum-B)<Math.abs(minElm-B)){
                minElm = sum;
            }
        }
    }
    return minElm;
}

let A = [-1,-2,-10,5,10];B = 5;

console.log(ThreeSumClosest(A,B));

// 1. minElm = -13;
// sum = -1-2+10=7>5, right--;
// 2.sum = -1-2+5= 2<5, min= 2,left++
// 3. sum = -1-10+5= -6<5,min = 2, left++

