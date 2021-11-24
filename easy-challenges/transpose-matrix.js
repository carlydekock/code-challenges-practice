//867. Transpose Matrix
//Given a 2D integer array matrix, return the transpose of matrix.
//The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

function transpose(matrix){
  const newMatrix = [];
  for(let i = 0; i < matrix[0].length; i++){
    const newRow = [];
    for(let j = 0; j < matrix.length; j++){
      newRow.push(matrix[j][i]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const matrix2 = [[1,2,3],[4,5,6]];

console.log(transpose(matrix));
console.log(transpose(matrix2));

//Summary: Need to flip the rows and columns and push into a new matrix. From the original matrix, we want to take the first column, and push it in as the first row in the newMatrix, and continue iterating from there. Outer loop runs for the length of a row, inner for the length of the matrix. Accessing each value in columns, to push into rows by doing matrix[j][i] where i is the outer loop and j is the inner loop.
