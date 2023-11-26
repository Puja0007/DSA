function CountRectangle(nums,B){
    let n = nums.length;
    let left = 0;
    let right = n-1;
    let count = 0;

    while(left<=right){

        if(nums[left]*nums[right]<B){
            count += 2*(right-left)+1;
            i++;
        }
        else{
            j--;
        }

    }
    return count;
}