//Spiral Matrix
//Given an m x n matrix, return all elements of the matrix in spiral order.
//Ex- Input: matrix = [[1,2,3],[4,5,6],[7,8,9]], Output: [1,2,3,6,9,8,7,4,5]
//Youtube tutorial: https://www.youtube.com/watch?v=BdQ2AkaTgOA&ab_channel=KevinNaughtonJr.

function spiralOrder(matrix){
  let numbers = [];
  if(matrix === null || matrix.length === 0){
    return numbers;
  }
  //setting boundaries
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let totalOfNums = matrix[0].length * matrix.length; //this is how many numbers should be in numbers array

  while(numbers.length < totalOfNums){
    //adding numbers going across the "top"
    for(let i = left; i <= right && numbers.length < totalOfNums; i++){
      numbers.push(matrix[top][i]);
    }
    top++;

    //adding numbers going down the "right"
    for(let i = top; i <= bottom && numbers.length < totalOfNums; i++){
      numbers.push(matrix[i][right]);
    }
    right--;

    //adding numbers going backwards across the "bottom"
    for(let i = right; i >= left && numbers.length < totalOfNums; i--){
      numbers.push(matrix[bottom][i]);
    }
    bottom--;

    //adding numbers going up the "left"
    for(let i = bottom; i >= top && numbers.length < totalOfNums; i--){
      numbers.push(matrix[i][left]);
    }
    left++;
  }
  return numbers;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
