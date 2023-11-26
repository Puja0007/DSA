function CountCoins(sum,coins,n){
    if(sum === 0){
        return 1;
    }else if(n == 0){
        return 0;
    }else if(sum<0){
        return 0;
    }
    return CountCoins(sum-coins[n-1],coins,n)+CountCoins(sum,coins,n-1);
}


let sum = 10, coins = [2, 5, 3, 6];

console.log(CountCoins(sum,coins,4));