// You are given an array of positive integers nums.

// You have to check if it is possible to select two or more elements in the array such that the bitwise OR of the selected elements has at least one trailing zero in its binary representation.

// For example, the binary representation of 5, which is "101", does not have any trailing zeros, whereas the binary representation of 4, which is "100", has two trailing zeros.

// Return true if it is possible to select two or more elements whose bitwise OR has trailing zeros, return false otherwise.



function hasTrailingZeros(nums){
 
    for(let i=0; i<nums.length; i++){
       for(let j=i+1; j<nums.length; j++){
           if((nums[i] | nums[j]) %2 === 0) return true;
           
       }
    }
    return false;

}

let nums = [1,2,3,4,5];
console.log(hasTrailingZeros(nums));