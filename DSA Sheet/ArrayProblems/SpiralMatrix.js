/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   
    let row = matrix.length;
    let col = matrix[0].length;
    let top = 0;
    let bottom = row-1;
    let left = 0;
    let right = col-1;
    let result = [];

    while(top<=bottom && left<=right){
        for(let i= left; i<=right; i++){
            result.push(matrix[top][i]);
        }
        top++;
        for(let i=top; i<=bottom; i++){
            result.push(matrix[i][right]);
        }
        right--;
        if(top<=bottom){
            for(let i=right; i>=left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if(left<=right){
            for(let i=bottom; i>=top; i--){
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;

};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

console.log(spiralOrder(matrix));

