function UnionOfArrays(nums1,nums2){
    let i=0,j=0;
    let res = [];

    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            if(res.length == 0 ||res[res.length-1] != nums1[i]){
            res.push(nums1[i]);
            }
            i++;
        }

        else if(nums2[j]<nums1[i]){
        if(res.length == 0 || res[res.length-1] != nums2[j]){
            res.push(nums2[j]);
        }
            j++;
        }else if(nums1[i] == nums2[j]){ 
            if(res.length == 0 ||res[res.length-1] != nums2[j]){
            res.push(nums2[j]);
            }
            i++;
            j++;
        }
    }

    return res;
}

/*
1 1 3
4 5 6
*/

let nums1 = [1,2,3,4,5];
let nums2 = [2,3,4,4,5];

console.log(UnionOfArrays(nums1,nums2))