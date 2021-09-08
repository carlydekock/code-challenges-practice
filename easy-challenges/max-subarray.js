//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

function maxSubArray(nums){
  let solution = nums[0];
  let sum = nums[0];
  for(let i = 1; i < nums.length; i++){
    sum = Math.max(nums[i], sum + nums[i]);
    solution = Math.max(sum, solution);
  }
  return solution;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([1]));

//Summary: Start with a sum and solution, both with the first number as the value. As we iterate through the array, starting from i=1, we'll take the max of the sum + currentNum, or just currentNum. And then for the ongoing solution value, we'll take the max of the current solution value and the current sum. Once we've reached the end of the array, we just need to return the solution.
//Pattern: Two variables to use for currentSum and the solution, each iteration, we'll evaluate whether the current value of each of these, or the potential updated value of these plus the addition of the currentNum is greater. At each stage we'll take the max, and keep carrying that through, it will be overwritten when a new sum is greater.
