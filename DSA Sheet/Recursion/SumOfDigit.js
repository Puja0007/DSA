function SumDigitOfNum(num){
    if(num == 0){
        return 0
    }

    return ((num % 10) + SumDigitOfNum(Math.floor(num/10)));
}

console.log(SumDigitOfNum(12345));   