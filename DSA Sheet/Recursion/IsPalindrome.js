function IsPalindrome(str,i,n){
    if(str[i] != str[n]){
        return false;
    }
    if(n==i){
        return true;
    }

    return IsPalindrome(str,i+1,n-1);

}
let str = "max"
console.log(IsPalindrome(str,0,str.length-1))

