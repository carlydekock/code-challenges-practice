//Contains Duplicate
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//Example, Input: nums = [1,2,3,1], Output: true
//Example, Input: nums = [1,2,3,4], Output: false

function containsDuplicate(nums){
  let count = {};
  let currentNum;

  for(let i = 0; i < nums.length; i++){
    currentNum = nums[i];
    count[currentNum] = (count[currentNum] || 0) + 1;
  }

  for(let key in count){
    if(count[key] > 1){
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1,2,3,4, 3]));
