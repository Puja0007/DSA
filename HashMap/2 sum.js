
// https://www.scaler.com/academy/mentee-dashboard/class/7013/assignment/problems/157?navref=cl_tt_lst_nm

// Given an array of integers, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 < index2. Please note that your returned answers (both index1 and index2 ) are not zero-based. Put both these numbers in order in an array and return the array from your function ( Looking at the function signature will make things clearer ). Note that, if no pair exists, return empty list.

// If multiple solutions exist, output the one where index2 is minimum. If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them.

// Input: [2, 7, 11, 15], target=9
// Output: index1 = 1, index2 = 2

function TwoSum(A,B){
    
    // with hashmap
    let map = new Map();
    let n = A.length;
    let result = [];
    for(let i=0;i<n;i++){
        if(map.has(B-A[i])){
            // If multiple solutions exist, output the one where index2 is minimum. If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them.
            if(result.length == 0){
                result.push(map.get(B-A[i])+1);
                result.push(i+1);
            }
            else if(result.length > 0){
                if(result[1] > i+1){  
                    result[0] = map.get(B-A[i])+1;
                    result[1] = i+1;
                }
                else if(result[1] == i+1){
                    if(result[0] > map.get(B-A[i])+1){
                        result[0] = map.get(B-A[i])+1;
                        result[1] = i+1;
                    }
                }
            }
        }
        else if(!map.has(A[i])){
            map.set(A[i],i);
        }
    }
    return result;
    
}

let Input= [2, 7, 11, 15]; target=9;
console.log(TwoSum(Input,target));