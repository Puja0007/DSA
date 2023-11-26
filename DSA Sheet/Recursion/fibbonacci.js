function fib(n){
    if(n <= 1){
        return n;
    }

    else{
        return n + fib(n-1)
    }


}

console.log(fibonacci(5));