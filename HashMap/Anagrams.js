// Given an array A of N strings, return all groups of strings that are anagrams.

// Represent a group by a list of integers representing the index(1-based) in the original list. Look at the sample case for clarification.

// NOTE: Anagram is a word, phrase, or name formed by rearranging the letters, such as 'spar', formed from 'rasp'.

// https://www.scaler.com/academy/mentee-dashboard/class/7013/assignment/problems/154?navref=cl_tt_lst_nm



    
function Anagrams(A){
        
        // with hashmap
        let map = new Map();
        let n = A.length;
        let result = [];
        for(let i=0;i<n;i++){
            let temp = A[i].split("").sort().join("");
            if(map.has(temp)){
                map.get(temp).push(i+1);
            }
            else{
                map.set(temp,[i+1]);
            }
        }
        for(let [key,value] of map){
            result.push(value);
        }
        return result;

   

}
let A = ["cat", "dog", "god", "tca","bot"];
console.log(Anagrams(A));