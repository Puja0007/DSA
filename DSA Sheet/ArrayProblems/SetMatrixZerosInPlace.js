function setMatrixZero(matrix){
    let row = matrix.length;
    let col = matrix[0].length;
    let x = 1;
    let y = 1;
    for(let i=0; i<col; i++){
        if(matrix[0][i]==0){
            x =0;
            return;

        }
    }

    for(let j =0; j<row; j++){
        if(matrix[j][0] == 0){
            y = 0;
            return;
        }
    }


    for(let i = 1; i<row; i++){
        for(let j = 1; j<col; j++){
            if(matrix[i][j] == 0){
                matrix[0][i] = 0;
                matrix[j][0] = 0;
            }
        }
    }

    for(let i = 0; i<row; i++){
        if(matrix[0][i] == 0){
            for(let j = 0; j<col; j++){
                matrix[i][j] = 0;
            }

        }
    }

    for(let i = 0; i<col; i++){
        if(matrix[i][0] == 0){
            for(let j = 0; j<row; j++){
                matrix[j][i] = 0;
            }

        }
    }

    if(x==0){
        for(let i = 0; i<col; i++){
            matrix[0][i] = 0;
        }
    }

    if(y==0){
        for(let i = 0; i<row; i++){
            matrix[i][0] = 0;
        }
    }

    return matrix;

}