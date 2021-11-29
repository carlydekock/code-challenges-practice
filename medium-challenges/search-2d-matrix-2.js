//240. Search a 2D Matrix II
//Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:
//Integers in each row are sorted in ascending from left to right.
//Integers in each column are sorted in ascending from top to bottom.

function searchMatrix(matrix, target){
  const smallestValue = matrix[0][0];
  const largestValue = matrix[matrix.length-1][matrix[0].length-1];
  if(target < smallestValue || target > largestValue){
    return false;
  }

  let row = 0; 
  let col = matrix[0].length-1; 
  while(row < matrix.length && col >= 0){
    if(matrix[row][col] > target){
      col--;
    } else if(matrix[row][col] < target){
      row++;
    } else if(matrix[row][col] === target){
      return true;
    }
  }
  return false;
}

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
const matrix2 = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];

console.log(searchMatrix(matrix, 5));
console.log(searchMatrix(matrix2, 20));

//Summary: Since the rows are sorted, and columns are sorted, we can do something similar to binary search. Starting in the top right, we can check if the value is greater than the target. If it is, we can go to the next row (row++), if it isn't, we can go back a column (col--). All while row < matrix.length && col >= 0.
//Pattern: Having bounds on the matrix (row, col) running in a while loop. If matrix[row][col] > target -> col--, if matrix[row][col] < target -> row++.
