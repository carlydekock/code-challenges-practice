//766. Toeplitz Matrix
//Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
//A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
//Ex- Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]], Output: true, Explanation: In the above grid, the diagonals are:
//"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
//In each diagonal all elements are the same, so the answer is True.

function isToeplitzMatrix(matrix){
  for(let i = 1; i < matrix.length; i++){
    let j = 1;
    while(j < matrix[i].length){
      if(matrix[i][j] !== matrix[i-1][j-1]){
        return false;
      }
      j++;
    }
  }
  return true;
}

const matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];
const matrix2 = [[1,2],[2,2]];
const matrix3 = [[53,64,90,98,34],[91,53,64,90,98],[17,91,53,64,0]];

console.log(isToeplitzMatrix(matrix));
console.log(isToeplitzMatrix(matrix2));
console.log(isToeplitzMatrix(matrix3));

//Summary: Key is to check the number up and to the left, at position matrix[i-1][j-1]. We can iterate through starting at the second row, and check each of the top left neighbors. If the values don't match, we can return false, otherwise increment j and keep moving until we've reached the end of the row. Then the outer loop will increment and we'll start at j=1 again, checking the top left neighbor for the next row down. If we make it through with no mismatched values, then return true.
//Pattern: Matrix -> for loop and a while loop (could be another for loop) with an if conditional.