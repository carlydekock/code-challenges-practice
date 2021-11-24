//566. Reshape the Matrix
//In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
//You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
//The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
//If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

function matrixReshape(matrix, r, c){
  let row = matrix.length;
  let col = matrix[0].length;

  //check if given parameters are possible and legal
  if((row * col) !== (r * c)){
    return matrix;
  }

  let row_num = 0;
  let col_num = 0;
  let newMatrix = [];
  //filling the newMatrix with placeholder values
  for(let i = 0; i < r; i++){
    newMatrix[i] = new Array(c);
  }

  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      newMatrix[row_num][col_num] = matrix[i][j];
      col_num++;
      if(col_num === c){
        col_num = 0;
        row_num++;
      }
    }
  }
  return newMatrix;
}

const matrix = [[1,2],[3,4]];
const matrix2 = [[1,2],[3,4]];
console.log(matrixReshape(matrix, 1, 4));
console.log(matrixReshape(matrix2, 2, 4));

//Summary: First, we need to check if the matrix can be reshaped into the new r*c matrix, meaning the current number of elements in the matrix (matrix.length * matrix[0].length) must be exactly equal to the input r*c for the desired new matrix. If they are equivalent, then we need to create a newMatrix to fill. We need to traverse through the original matrix with a nested for loop, putting the values into the newMatrix until we've reached the end of the intended number of columns (c), at which point we need to then move down a row and continue on. 
//Pattern: Matrix -> nested for loops to traverse, with a specified dimension newMatrix to fill. Need to have counters for the row_num and col_num, to break to a new row when the col_num === c (when we've reached the input number of columns). 