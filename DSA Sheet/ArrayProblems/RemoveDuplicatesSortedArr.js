// Remove Duplicates in-place from Sorted Array
// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

// If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.

// Note: Return k after placing the final result in the first k slots of the array.


function removeDuplicates(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
          i++;
          nums[i]=nums[j];
          
        }

        console.log(nums);
    }
    return i + 1;
}

let arr = [1, 1,1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(removeDuplicates(arr));

// 1.i=0; j =3,
// [1,2,1,1,3,4,5,5,5,6]
// [1,2,3]
// 2.i=1,j=4, 

