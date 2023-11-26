function ReverseString(str,n){
        if(n == 0){
            return "";
        } else if(n){ 
            return str[n-1]+ReverseString(str,n-1);
        }


}

let str = "abc";
let n = str.length;

console.log(ReverseString(str,n));