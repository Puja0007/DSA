function UnionOfArrays(arr1,arr2){
    // two pointer approach
    let i = 0;
    let j = 0;
    let n1 = arr1.length;
    let n2 = arr2.length;
    let res = [];

    while(i<n1 && j<n2){
        if(arr1[i]<arr2[j]){
            if(res.length == 0 || res[res.length-1] != arr1[i]){
                res.push(arr1[i]);
            }
            i++;
          
        }
        else if(arr1[i]>arr2[j]){
            if(res.length == 0 || res[res.length-1] != arr2[j]){
                res.push(arr2[j]);
            }
            j++;
        }

        else if(arr1[i] == arr2[j]){
            if(res.length == 0 || res[res.length-1] != arr2[j]){
                res.push(arr2[j]);
            }
            i++;
            j++;
        }

    }

   while(i<arr1.length){
    res.push(arr1[i]);
    i++;
   }
   while(j<arr2.length){
    res.push(arr2[j]);
    j++
   }

   return res;
}



let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [2,3,4,4,5,11,12]; 
console.log(UnionOfArrays(arr1,arr2))
