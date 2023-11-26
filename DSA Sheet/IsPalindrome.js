/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let realNum = x;

    if(x<0){
        return false;
    }
    let reverseNumber = 0;

    while(x>0){

         reverseNumber = ((reverseNumber* 10) + (x%10));
        x = Math.floor(x/10);

    }

    if(reverseNumber != realNum){
        return false;
    }
    else if(reverseNumber == realNum){
        return true;
    }
    
};