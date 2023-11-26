function DecimalToBinary(n) {
   
    if (n == 0) {
        return 0;
    } 
        return (n % 2) + 10 * DecimalToBinary(Math.floor(n / 2));
}

console.log(DecimalToBinary(10)); 