/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.trim()===""){
        return true;
    }

    let str = "";
    let lowerString =  s.toLowerCase();

    for(let i = 0; i<lowerString.length; i++){
        if((lowerString[i] >= "a" && lowerString[i] <= "z") || (lowerString[i]>= "0" && lowerString[i] <="9")){
            str = str +lowerString[i];
        }
    }

    let len = str.length;
    let left = 0;
    let right = len-1;

    while(left<right){

        if(str[left] == str[right]){
           left++;
           right--;
        }
        else{
            return false;
        }
       
    }

    return true;
    
    
};  