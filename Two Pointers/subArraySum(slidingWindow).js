// incase of positive numbers only


function SubArraySum(arr, k) {
  //count of total subArray of sum K in sliding window method
    let count = 0;
    let sum = 0;
    let left = 0;
    let right = 0;
    if(arr.length==1 && arr[0]!=k){
        return 0;
    }
    if(arr.length==1 && arr[0]==k){
        return 1;
    }
    while (right < arr.length) {
        sum += arr[right];
        while (sum > k) {
            sum -= arr[left];
            left++;
        }
        if (sum == k) {
            sum = sum -arr[left];
            count++;
            left++;
        }
        right++;
        }
    return count;

  }

  let arr=[1]; k =0;
  console.log(SubArraySum(arr,k));


