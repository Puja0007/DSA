function RotateMatrix(matrix){

    let n = matrix.length;
    let m = matrix[0].length;
  
    // rotate matrix by 90 degree
    for(let i=0; i<n; i++){
        for(let j=i; j<m; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;

        }
    }
  

    // reverse each row
    for(let i=0; i<n; i++){
        let low = 0;
        let high = m-1;
        while(low<high){
            let temp = matrix[i][low];
            matrix[i][low] = matrix[i][high];
            matrix[i][high] = temp;
            low++;
            high--;
        }
    }

    

    return matrix;



}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(RotateMatrix(matrix));