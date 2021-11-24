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