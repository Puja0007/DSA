function setMatrixZero(matrix){
    let row = matrix.length;
    let col = matrix[0].length;

    let rowArr = new Array(row).fill(-1);
    let colArr = new Array(col).fill(-1);

    for(let i =0; i<row; i++){
        for(let j =0; j<col; j++){
            if(matrix[i][j]==0){
                rowArr[i] = 0;
                colArr[j] = 0;
            }
        }
    }

    for(let i =0; i<row; i++){
        for(let j =0; j<col; j++){
            if(rowArr[i]==0 || colArr[j] == 0){
                matrix[i][j]=0;
            }
        }
    }
    return matrix;
}

let matrix = [[1,1,1],[1,0,1],[1,1,1]];

console.log(setMatrixZero(matrix));


