//Set Matrix Zeroes
//Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
//Example- Input: matrix = [[1,1,1],[1,0,1],[1,1,1]], Output: [[1,0,1],[0,0,0],[1,0,1]]
//Helpful tutorial: https://www.youtube.com/watch?v=8-a6dNedR68&ab_channel=andygala


function setZeroes(matrix){

  const helpSetZeroes = (r, c, matrix) => {
    for(let i = 0; i < matrix.length; i++){
      matrix[i][c] = 0;
    }
    for(let i = 0; i < matrix[0].length; i++){
      matrix[r][i] = 0;
    }
  };

  let zerosLocation = [];

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      let currentNumber = matrix[i][j];
      if(currentNumber === 0){
        // console.log('found a zero', i, j);
        zerosLocation.push([i, j]);
      }
    }
  }

  for(let address of zerosLocation){
    let row = address[0];
    let column = address[1];
    helpSetZeroes(row, column, matrix);
  }

  //Leetcode specifies for no return, modify matrix in place
  return matrix;
}

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
