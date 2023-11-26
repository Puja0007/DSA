/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ReverseNumber = 0;
    const INT_MAX = Math.pow(2, 31) - 1; // maximum 32-bit signed integer value
  const INT_MIN = -Math.pow(2, 31); // minimum 32-bit signed integer value

  // handle negative numbers
  // for negative number take the absolute value of x.
  let isNegative = false;
  if (x < 0) {
    x = Math.abs(x);
    isNegative = true;
  }

    while(x>0){
        ReverseNumber = (ReverseNumber*10 + (x%10));
        x = Math.floor(x/10);
    }

    if (ReverseNumber > INT_MAX || ReverseNumber < INT_MIN) {
    return 0;
  }
if (isNegative === true) {
    ReverseNumber = ReverseNumber * -1;
  }


    return ReverseNumber;

    
};