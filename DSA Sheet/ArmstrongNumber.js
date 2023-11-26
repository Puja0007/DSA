/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
  
    let sum = 0;
    let temp = n;
    if(n<10){
        return true;
    }
    while (temp > 0) {
      let rem = temp % 10;
      sum += rem ** 3;
      temp = parseInt(temp / 10);
    }
    return sum === n;
  };