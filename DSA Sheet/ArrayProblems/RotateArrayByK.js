function RotateArrayByK(nums,k,dir){
    let n = nums.length;

    if(nums.length==1){
        return nums;
    }

    k = k % n;

    if(dir == "Left"){
       Reverse(nums,0,n-1);
     
    Reverse(nums,0,k-1);
        
       Reverse(nums,k,n-1);
      
    }else{
        Reverse(nums,0,n-1);
        Reverse(nums,k,n-1);
        Reverse(nums,0,k-1);
    }

        return nums;
}

function Reverse(nums,start,end){
    while(start<end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end]= temp
        start++;
        end--;

    }
    return nums;
}

let arr = [1,2];

console.log(RotateArrayByK(arr,3,"Right"));
//console.log(Reverse(arr,0,6));