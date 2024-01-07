// There is a 1-indexed 8 x 8 chessboard containing 3 pieces.

// You are given 6 integers a, b, c, d, e, and f where:

// (a, b) denotes the position of the white rook.
// (c, d) denotes the position of the white bishop.
// (e, f) denotes the position of the black queen.
// Given that you can only move the white pieces, return the minimum number of moves required to capture the black queen.

// Note that:

// Rooks can move any number of squares either vertically or horizontally, but cannot jump over other pieces.
// Bishops can move any number of squares diagonally, but cannot jump over other pieces.
// A rook or a bishop can capture the queen if it is located in a square that they can move to.
// The queen does not move.



var minMovesToCaptureTheQueen = function(a, b, c, d, e, f) {
    let rookMoves = 0;
    if(a === e || b === f){
        rookMoves = 1;
    }
    else {
        rookMoves = 2;
    }

     let bishopMoves = 0;
     if(Math.abs(c-e) === Math.abs(d-f)){
         bishopMoves = Math.abs(c-e);
         
     }
     else {
         return rookMoves
     }
     return Math.min(rookMoves, bishopMoves);
     
 };

console.log(minMovesToCaptureTheQueen(1,1,8,8,2,3));

