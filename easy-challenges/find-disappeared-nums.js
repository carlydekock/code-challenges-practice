//448. Find All Numbers Disappeared in an Array
//Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
//Ex: Input: nums = [4,3,2,7,8,2,3,1], output: [5,6]

function findDisappearedNumbers(nums){
  let numSet = new Set();
  let result = [];
  for(let i = 0; i < nums.length; i++){
    numSet.add(nums[i]);
  }

  for(let i = 1; i <= nums.length; i++){
    if(!numSet.has(i)){
      result.push(i);
    }
  }
  return result;
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
