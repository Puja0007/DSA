function PrintDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
     if(!divisors.includes(i)){
        if (n % i == 0) {
            divisors.push(i);
            if(n/i !== i){
                divisors.push(n/i);
            }
        }
      }
    }
    return divisors;
}