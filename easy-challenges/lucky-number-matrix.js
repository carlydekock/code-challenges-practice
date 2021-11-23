//1380. Lucky Numbers in Matrix
//Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
//A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
//Ex- Input: matrix = [[3,7,8],[9,11,13],[15,16,17]], Output: [15], Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
//Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]], Output: [12], Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
//Input: matrix = [[7,8],[1,2]], Output: [7], Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.
//Input: matrix = [[3,6],[7,1],[5,2],[4,8]], Output: [], Explanation: There is no lucky number.

function luckyNumbers(matrix){
  let luckyNums = [];
  for(let row = 0; row < matrix.length; row++){
    let min = matrix[row][0];
    let index = 0;
    for(let col = 0; col < matrix[row].length; col++){
      if(matrix[row][col] < min){
        min = matrix[row][col];
        index = col;
      }
    }
    let isMax = true;
    for(let i = 0; i < matrix.length; i++){
      if(matrix[i][index] > min){
        isMax = false;
        break;
      }
    }
    if(isMax) luckyNums.push(min);
  }
  return luckyNums;
}

const matrix = [[3,7,8],[9,11,13],[15,16,17]];
const matrix2 = [[1,10,4,2],[9,3,8,7],[15,16,17,12]];
const matrix3 = [[7,8],[1,2]];
const matrix4 = [[3,6],[7,1],[5,2],[4,8]];
console.log(luckyNumbers(matrix));
console.log(luckyNumbers(matrix2));
console.log(luckyNumbers(matrix3));
console.log(luckyNumbers(matrix4));