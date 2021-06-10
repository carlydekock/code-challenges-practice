//Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it.
//Input: rowIndex=3
//Output: [1,3,3,1]

function getRow(rowIndex){
  let pascals = [[1]];
  if(rowIndex == 0){
    return pascals[0];
  }

  for(let i = 1; i <= rowIndex; i++){
    let previousRow = pascals[i-1];
    let newRow = [];

    newRow.push(1);

    for(let j = 1; j < previousRow.length; j++){
      newRow.push(previousRow[j-1] + previousRow[j]);
    }

    newRow.push(1);
    pascals.push(newRow);
    console.log(pascals);
  }

  return pascals[rowIndex];
}

// console.log(getRow(3));