//2022. Convert 1D Array Into 2D Array
//You are given a 0-inexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with m rows and n columns using all the elements from original.
//The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.
//Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

function construct2DArray(original, m, n){
  const result = [];
  if(original.length !== (m * n)){
    return result;
  }

  let index = 0;
  for(let row = 0; row < m; row++){
    const newRow = [];
    for(let col = 0; col < n; col++){
      newRow.push(original[index]);
      index++;
    }
    result.push(newRow);
  }
  return result;
}

const matrix = [1,2,3,4];
const matrix2 = [1,2,3];

console.log(construct2DArray(matrix, 2, 2));
console.log(construct2DArray(matrix2, 1, 3));

//Summary: First, we have to determine if the matrix is possible, that is if the original.length === m*n. If it does, then we can start to fill the rows of the new matrix. To do this, we need to keep track of an index in the original matrix that we are tracking through and filling the new matrix. To create the new matrix we'll need nested for loops, the outer one running while row < m, and the inner while col < n, pushing in the value of the original[index] and incrementing the index.
//Pattern: Pointer index variable, and two nested for loops to create the matrix.