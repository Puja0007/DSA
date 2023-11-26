function SumOfN(n){
    if(n<1){
       
        return 0;
    }
    else{
       return n+SumOfN(n-1);
    }

}

console.log(SumOfN(5));