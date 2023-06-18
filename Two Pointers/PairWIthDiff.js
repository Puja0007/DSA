// Given an one-dimensional integer array A of size N and an integer B.

// Count all distinct pairs with difference equal to B.

// Here a pair is defined as an integer pair (x, y), where x and y are both numbers in the array and their absolute difference is B.

// input: A = [1, 5, 3, 4, 2], B = 3
// output: 2

 function countPairsWithDiff(A,B){
    // using two pointer approach
   
    let n = A.length;
    A.sort(function(a, b){return parseInt(a) - parseInt(b)});
    let left = 0, right = 1;
    let ans = 0;
    while (right < n) {
        if (right == left) {
            right++;
            continue;
        }
        let x = A[left], y = A[right];
        if (y - x == B) {
            // count the pair A[left], A[right] only once
            ans++;
            while (left < n && A[left] == x) {
                left++;
            }
            while (right < n && A[right] == y) {
                right++;
            }
        } else if (y - x > B) {
            left++;
        } else {
            right++;
        }
    }
    return ans;
 }