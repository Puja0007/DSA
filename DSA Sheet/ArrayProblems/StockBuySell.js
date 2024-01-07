function StockBuySell(prices){
    let n = prices.length;
   let min = +Infinity;
   
    let diff=0;

  for(let i=0; i<n; i++){
    min = Math.min(min,prices[i]);
    diff = Math.max(diff,prices[i]-min);
  }
    return diff; 
}

  
 let prices = [7,1,5,3,6,4];

 console.log(StockBuySell(prices));

 
