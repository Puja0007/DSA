var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false
    }
    let freqS = {};
    let freqT = {};

    for(let i = 0; i< s.length; i++){
        if(freqS[s[i]] !== undefined){
            freqS[s[i]]++;
        }
        else{
            freqS[s[i]] = 1;
        }
    }

    for(let i = 0; i< t.length; i++){
        if(freqT[t[i]] !== undefined){
            freqT[t[i]]++;
        }
        else{
            freqT[t[i]] = 1;
        }
    }

    const keysT = Object.keys(freqT);

    for (let key of keysT) {
        if (freqS[key] !== freqT[key]) {
          return false;
        }
      }

      return true;
};

let s = "anagram", t = "nagaram";

console.log(isAnagram(s,t));