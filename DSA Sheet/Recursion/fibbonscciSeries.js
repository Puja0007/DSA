function fibonacci(n,a=0,b=1) {
    if(n==0){
        return []
    }

   

const series = fibonacci(n-1,b,a+b);

return series.concat([a]);


    
}

const n = 5; // Change this to the desired term
const series =  fibonacci(n);
console.log(series);

3,2,1,1,0
