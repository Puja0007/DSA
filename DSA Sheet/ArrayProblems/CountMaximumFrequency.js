// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.

 

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.


function MaximumFrequency(nums) {
    let freq = new Map();
    let maxFreq = 0;
    let maxFreqCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (freq.has(nums[i])) {
            freq.set(nums[i], freq.get(nums[i]) + 1);
        } else {
            freq.set(nums[i], 1);
        }
    }

    for (let [key, value] of freq) {
        maxFreq = Math.max(maxFreq, value);
    }

    for (let [key, value] of freq) {
        if (value === maxFreq) {
            maxFreqCount += value; // Increment by the frequency of the elements with maximum frequency
        }
    }

    return maxFreqCount;
}

let nums = [1,2,3,4,5];

console.log(MaximumFrequency(nums));

