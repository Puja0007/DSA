
// explaination of the code please
//expaination : 
// 1. i and j are two pointers
// 2. count is the number of zeros in the current window
// 3. max is the maximum window size
// 4. start and end are the starting and ending index of the window
// 5. if the number of zeros in the current window is greater than B, then we need to reduce the window size
// 6. we reduce the window size by incrementing i until the number of zeros in the window is less than or equal to B
// 7. if the window size is greater than max, then we update max, start and end
// 8. we return the array from start to end

function MaximumContinuousSeriesOfOnesWithMinimumIndex(A,B){
    var i = 0;
    var j = 0;
    var count = 0;
    var max = 0;
    var start = 0;
    var end = 0;
    while(j < A.length){
       // console.log("i: ", i, "j: ", j, "count: ", count, "max: ", max, "start: ", start, "end: ", end);
        if(A[j] == 0){
            count++;
        }
        if(count > B){
            if(A[i] == 0){
                count--;
            }
            i++;
        }
        if(j - i + 1 > max){
            max = j - i + 1;
            start = i;
            end = j;
        }
        
        j++;
    }
    var result = [];
    for(var i = start; i <= end; i++){
        result.push(i);
    }
    return result;
}


var A = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1]
var B = 1
console.log("Maximum Continuous Series Of Ones With Minimum Index: ", MaximumContinuousSeriesOfOnesWithMinimumIndex(A,B));