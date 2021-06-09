//Given an integer numRows, return the first numRows of Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//Ex: input: 5
//Output: [
//   [1]
//   [1,1]
//   [1,2,1]
//   [1,3,3,1]
//   [1,4,6,4,1]
// ]

function generate(numRows){
  let triangle = [];
  if(numRows === 0){
    return triangle;
  }

  triangle.push([1]);

  for(let i = 1; i < numRows; i++){
    let previousRow = triangle[i - 1];
    let newRow = [];

    newRow.push(1);

    for(let j = 1; j < previousRow.length; j++){
      newRow.push(previousRow[j-1] + previousRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
}