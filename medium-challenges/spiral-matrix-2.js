//Spiral Matrix II
//Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
//Ex - Input: n=3, Output: [[1,2,3],[8,9,4],[7,6,5]];

function generateMatrix(n) {
  let numbers = [];
  for(let i = 0; i < n; i++){
    numbers[i] = new Array(n);
  }
  
  let left = 0;
  let right = n-1;
  let top = 0;
  let bottom = n-1;
  let value = 1;

  while(left <= right && top <= bottom){
    //move left to right
    for(let i = left; i <= right; i++){
      numbers[top][i] = value;
      value++;
    }
    top++;

    //move down
    for(let i = top; i <= bottom; i++){
      numbers[i][right] = value;
      value++;
    }
    right--;

    //move right to left
    for(let i = right; i >= left; i--){
      numbers[bottom][i] = value;
      value++;
    }
    bottom--;

    //move up
    for(let i = bottom; i >= top; i--){
      numbers[i][left] = value;
      value++;
    }
    left++;
  }
  return numbers;
}

console.log(generateMatrix(3));

//Summary: Using similar logic as the other spiral matrices problems, we'll have left/right, and top/bottom values, that will increment up/down as needed as we move around the matrix. This time, we are starting with a value of 1, and filling in values as we go around. We want to continue this while (left <= right && top <= bottom). One of the keys to this, is setting up our matrix to be filled correctly. 