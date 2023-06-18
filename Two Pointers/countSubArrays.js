// You can find all subarrays having unique elements using Two Pointers and Hashing.

// Maintain two pointer l and r. Store all the elements in the current window in a set.
// If the element A[j] is already present in the window, then we keep removing elements
// from the left till the window has only unique elements. 
// Now the we can have subarrays with unique elements ending at r with any starting index i
// in the range l <= i <= r. So the number of subarrays ending at r is given by (r - l + 1).
// Add this contribution for all the indices of the array.





function CountSubArray(A){
    let left = 0, right = 0;
    let count = 0;
    let map = new Map();
    let MOD = 1e9 + 7;
    while(right < A.length){
        while(map.has(A[right])){
            map.delete(A[left]);
           // console.log("del", map);
            left++;
        }
        map.set(A[right], true);
        //console.log("add", map);
        count += (right - left + 1);
        right++;
    }
    return count % MOD;
}

let A = [1, 1, 3];
console.log(CountSubArray(A));