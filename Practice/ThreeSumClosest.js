function ThreeSumClosest(nums, target) {
    nums.sort(function(a, b) {
      return parseInt(a) - parseInt(b);
    });
    let n = nums.length;
    let sum = 0;
    let minElm = Infinity;
  
    // for (let i = 0; i < n; i++) {
    //   sum = sum + nums[i];
    // }
  
    // if (sum < target) {
    //   return 0;
    // }
  
    for (let i = 0; i < n; i++) {
      let first = nums[i];
      let left = i + 1;
      let right = n - 1;
  
      while (left < right) {
        sum = first + nums[left] + nums[right];
  
        if (sum == target) {
          return sum;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
  
        if (Math.abs(sum - target) < Math.abs(minElm - target)) {
          minElm = sum;
        }
      }
    }
  
    return minElm;
  }
  
  const nums = [0,0,0];
  const target = 1;
  const result = ThreeSumClosest(nums, target);
  console.log(result);