function SumOfNaturalNum(n){

    if(n == 1){
        return 1;
    }
    else {
        return n+ SumOfNaturalNum(n-1);
    }
}

console.log(SumOfNaturalNum(5));