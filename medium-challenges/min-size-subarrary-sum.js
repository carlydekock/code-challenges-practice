//209. Minimum Size Subarray Sum
//Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
//Ex: target = 7, nums = [2,3,1,2,4,3], Output: 2 (The subarray [4,3] has the minimal length under the problem constraint.)
//Ex: target = 4, nums = [1,4,4], Output: 1
//Ex: target = 11, nums = [1,1,1,1,1,1,1,1], Output: 0

//set variable length
//Iterate through the array
//See if can sum up to target using sliding window
//once get target, update length

function minSubArrayLength(target, nums){
  let left = 0;
  let sum = 0;
  let answer = Number.MAX_SAFE_INTEGER;

  for(let i = 0; i < nums.length; i++){
    sum += nums[i];
    while(sum >= target){
      answer = Math.min(answer, i+1 - left);
      sum -= nums[left];
      left++;
    }
  }

  if(answer === Number.MAX_SAFE_INTEGER){
    return 0;
  } else {
    return answer;
  }
}

console.log(minSubArrayLength(7, [2,3,1,2,4,3]));
console.log(minSubArrayLength(4, [1,4,4]));
console.log(minSubArrayLength(11, [1,1,1,1,1,1,1,1]));

//Summary: Since we are looking for the min size subarray that is greater than or equal to the target, we can start iterating through the array until we have a sum total that is >= target. Once we do, while the sum >= target, we can move a left pointer compressing the size of the subarray, keeping the minimum size each time until we no longer have sum >= target. 
//Pattern: Two pointers, or a for loop with a left pointer. Also, use of the MAX_SAFE_INTEGER for the answer, taking the min each time, or never having a min and the max safe integer will remain and we can return 0.