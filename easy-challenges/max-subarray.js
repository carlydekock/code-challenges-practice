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