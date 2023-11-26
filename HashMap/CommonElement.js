function CommonElements(A,B){
    let mapA = new Map();
    let mapB = new Map();
    let result =[];

    for(let i=0; i<A.length; i++){
        if(A[i] in mapA){
            mapA[A[i]]++;
        }
        else{
            mapA[A[i]] = 1;
        }
    }
// console.log(mapA);
    for(let i=0; i<B.length; i++){
        // console.log(mapA[B[i]],B[i]);
        if(mapA[B[i]]>0){
            mapA[B[i]]--;
            result.push(B[i]);

        }
    }

    return result;
}