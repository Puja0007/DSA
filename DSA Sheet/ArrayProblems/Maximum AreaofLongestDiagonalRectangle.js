// You are given a 2D 0-indexed integer array dimensions.

// For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.

// Return the area of the rectangle having the longest diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.


var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;
    let area = 0;
    for(let i=0; i<dimensions.length; i++){
        let length = dimensions[i][0];
        let width = dimensions[i][1];
        area = length * width;
        let diagonal = Math.sqrt(Math.pow(length,2) + Math.pow(width,2));
        if(diagonal > maxDiagonal){
            maxDiagonal = diagonal;
            maxArea = area;
        }else if(diagonal === maxDiagonal){
            maxArea = Math.max(maxArea, area);
        }
       
    }
    return maxArea;
};