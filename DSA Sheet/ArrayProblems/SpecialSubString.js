// Find Longest Special Substring That Occurs Thrice I

// You are given a string s that consists of lowercase English letters.

// A string is called special if it is made up of only a single character. For example, the string "abc" is not special, whereas the strings "ddd", "zz", and "f" are special.

// Return the length of the longest special substring of s which occurs at least thrice, or -1 if no special substring occurs at least thrice.

// A substring is a contiguous non-empty sequence of characters within a string.



function longestSpecialSubstring(s) {
    const n = s.length;

    
    function isSpecial(substring) {
        return new Set(substring).size === 1;

    }

    let maxSpecialLength = -1;


    for (let i = 0; i < n; i++) {
       
        for (let j = i; j < n; j++) {
            const substring = s.substring(i, j + 1);
            if (isSpecial(substring)) {
             
                let count = 0;
                for (let k = 0; k < n; k++) {
                    if (s.substring(k, k + substring.length) === substring) {
                        count++;
                    }
                }
                if (count >= 3) {
                    maxSpecialLength = Math.max(maxSpecialLength, substring.length);
                }
            }
        }
    }

    return maxSpecialLength;
}


// Example usage
const s = "abcaba";
const result = longestSpecialSubstring(s);
console.log(result);  // Output: 3
