//Largest Perimeter Triangle
//Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
//Example: input nums = [2,1,2], output: 5
//input nums= [1,2,1], output: 0
//input nums= [3,2,3,4], output: 10

function largestPerimeter(nums){
  let sorted = nums.sort((a,b) => b - a);
  for(let i = 0; i < sorted.length-2; i++){
    if(sorted[i] < (sorted[i+1] + sorted[i+2])){
      return sorted[i] + sorted[i+1] + sorted[i+2];
    }
  }
  return 0;
}

console.log(largestPerimeter([2,2,1]));