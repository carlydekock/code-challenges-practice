//152. Maximum Product Subarray
//Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
//It is guaranteed that the answer will fit in a 32-bit integer.
//A subarray is a contiguous subsequence of the array.
//Ex- Input: nums = [2,3,-2,4], Output: 6, Explanation: [2,3] has the largest product 6.
//Ex - Input: nums = [-2,0,-1], Output: 0, Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


function maxProduct(nums){
  if(nums.length === 0){
    return 0;
  }

  let result = nums[0];
  let currentMin = nums[0];
  let currentMax = nums[0];

  for(let i = 1; i < nums.length; i++){
    let temp = currentMax; //need to do this so this original value can be used on line 21, not the updated value from below
    currentMax = Math.max(nums[i] * currentMax, nums[i] * currentMin, nums[i]);
    currentMin = Math.min(nums[i] * currentMax, nums[i] * currentMin, nums[i]);
    result = Math.max(result, currentMax);
  }
  return result;
}

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([-4,-3,-2]));


//Summary: Since we are dealing with negative numbers as well, trick is to deal with the currentMax and the currentMin. Start out with result, currentMin and currentMax all equal to nums[0], and then update as go through the for loop from i=1. Each iteration keep track of the max, min, and result. Since we are dealing with negative numbers, and we know two negatives multiplied together will be a positive, we can keep track of the min as well, since the min multiplied by the next number might become the max on the next iteration. 
//O values are a tricky part of this to be aware of.
//Pattern: sort of sliding window idea but more so iteration through all nums, taking min and max values along the way. Starting with the right values and the approach of keeping track of min an max is the key.
