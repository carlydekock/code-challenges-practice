//Search 2D Matrix
//Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//Integers in each row are sorted from left to right.
//The first integer of each row is greater than the last integer of the previous row.
//Example - Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3, Output: true
//Example - Input: matrix = matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13, Output: false

function searchMatrix(matrix, target){
  //since values are sorted, if first entry is greater than target or last entry is less than target, output false
  let smallestValue = matrix[0][0];
  let lastRow = matrix[matrix.length - 1];
  let largestValue = lastRow[lastRow.length - 1];
  if(largestValue < target || smallestValue > target){
    return false;
  }
  if(smallestValue === target || largestValue === target){
    return true;
  }

  let currentRow;
  let firstValue = 0;
  let lastValue = 0;

  for(let i = 0; i < matrix.length; i++){
    currentRow = matrix[i];
    firstValue = currentRow[0];
    lastValue = currentRow[matrix[i].length - 1];
    let left = 0;
    let right = currentRow.length - 1;
    console.log(firstValue, lastValue);
    if(firstValue === target || lastValue === target){
      return true;
    } else if(firstValue < target && lastValue < target){
      continue;
    } else if(firstValue > target && lastValue > target){
      return false;
    } else if(firstValue < target && lastValue > target){
      while(left < right){
        console.log('inside while', left, right);
        if(currentRow[left] === target || currentRow[right] === target){
          return true;
        } else if(currentRow[left] < target && currentRow[right] > target){
          left++;
          // right--;
        } else {
          return false;
        }
      }
      return false;
    }
  }
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 34));
console.log(searchMatrix([[1], [3], [5]], 3));