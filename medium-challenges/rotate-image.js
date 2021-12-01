//48. Rotate Image
//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
//You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

function rotate(matrix){
  let n = matrix.length;
  //transpose the matrix-> swap rows and columns across the diagonal
  for(let i = 0; i < n; i++){
    for(let j = i; j < n; j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  //reverse the rows-> two pointers, working from outside in and swapping values
  for(let row = 0; row < n; row++){
    let left = 0;
    let right = n-1;
    while(left < right){
      let temp = matrix[row][left];
      matrix[row][left] = matrix[row][right];
      matrix[row][right] = temp;
      left++;
      right--;
    }
  }

  return matrix;
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotate(matrix));

//Summary: First, we need to transpose the matrix, then reverse the rows. Doing this in place is the tricky part. In the first step, transposing the matrix -> we need to swap matrix[i][j] and matrix [j][i]. Then to reverse the rows, as we iterate through rows in an outer for loop, we can set left=0, right=n-1 and while (left < right) swap the values at left and right indexes, then increment both in towards the center. As with the transpose, the middle element will not change if there is an odd number of elements.
//Pattern: Nested for loop to transpose, then another loop with while statement (this could be nested for loops as well).