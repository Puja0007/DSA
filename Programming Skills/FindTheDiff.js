function findTheDifference(s,t){
    let lenT = t.length;
    let lenS = s.length;
    let freqS = new Map();
    let freqT = new Map();

    for(let i=0; i< lenS; i++){
       if(s[i] in freqS){
            freqS[s[i]]++;
       }
       else{
            freqS[s[i]] = 1;
       }

    }

    //console.log(freqS)

    for(let i=0; i< lenT; i++){
      
       if(freqS[t[i]] == undefined || freqS[t[i]] < 1){
        return t[i];
       }
       else if(freqS[t[i]] !== undefined){
        freqS[t[i]]--;
       }
     }

     //console.log(freqS)

    
}

let s = "abcd", t = "abcde";
console.log(findTheDifference(s,t));
