var repeatedSubstringPattern = function(s) {

    let freqS = {};

    for(let i = 0 ; i< s.length; i++){

        if(freqS[s[i]] !== undefined){
            freqS[s[i]]++;
        }
        else{
            freqS[s[i]] = 1;
        }

    }

    let keys = Object.keys(freqS);
    for(let key in freqS){
        if(freqS[key] !== keys[0]){
            return false;
        }

    }

    return true;
}

let s = "abab";
console.log(repeatedSubstringPattern(s));