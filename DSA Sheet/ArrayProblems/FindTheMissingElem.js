function FindTheMissingElem(n,arr){
   
    let j = 1;

    for(let i=0;i<arr.length; i++){
        if(arr[i] == j){
          j++;
        }
        else{
            return j;
        }

    }
}

let N = 5;
let arr = [1,2,4,5];

console.log(FindTheMissingElem(N,arr));