//485. Max Consecutive Ones
//Given a binary array nums, return the maximum number of consecutive 1's in the array.
//Ex- Input: nums = [1,1,0,1,1,1], Output: 3

function findMaxConsecutiveOnes(nums){
  let counter = 0;
  let max = 0;

  for(let i = 0; i < nums.length; i++){
    const currentNum = nums[i];
    console.log(currentNum, counter);
    if(currentNum === 1){
      counter++;
    } else {
      counter = 0;
    }
    max = Math.max(max, counter);
  }
  return max;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

