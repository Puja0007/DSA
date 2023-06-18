

// Given a sorted array of distinct integers A and an integer B, find and return how many rectangles with distinct configurations can be created using elements of this array as length and breadth whose area is lesser than B.

// (Note that a rectangle of 2 x 3 is different from 3 x 2 if we take configuration into view)

function CountRectanglesInArray(A,B){
    // using two pointer approach
    let count = 0;
    let i = 0;
    let j = A.length-1;
    while(i<=j){
        if(A[i]*A[j]<B){
            count += 2*(j-i)+1; 
            i++;
        }else{
            j--;
        }
    }
    
}

let A = [1, 2, 3];B = 15;
console.log(CountRectanglesInArray(A,B));
