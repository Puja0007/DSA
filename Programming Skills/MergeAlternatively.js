function mergeAlternately(str1,str2){

    let str1len = str1.length;
    let str2len = str2.length;
    let res="";
    let len = str1len > str2len ? str1len:str2len;

    
        for(let i = 0; i < len; i++){

                if(str1[i] != undefined){
                    res += str1[i];
                }
                if(str2[i] != undefined){
                    res += str2[i];
                }
            
        }
    


    return res;
}

let word1 = "ab", word2 = "pqrs";
console.log(mergeAlternately(word1, word2));


