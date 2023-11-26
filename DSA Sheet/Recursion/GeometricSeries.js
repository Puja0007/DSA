function GeometricSeries(n){

    if(n == 0){
        return 1;
    }

    return 1/Math.pow(3,n) + GeometricSeries(n-1);
}

console.log(GeometricSeries(7));