// Count digits in a number
// Problem Statement: Given an integer N, write a program to count the number of digits in N.


function CountDigit(num) {
    
    return Math.ceil(Math.log10(num));
   
}

let num = 124;

console.log(CountDigit(num));