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

//Summary: First, loop through and add all the numbers in nums to a set. Then, loop through again starting at 1, and up to nums.length (key piece to make sure nums.length included), checking if i is in the set. If not, then push it into the result array, as it is one of the values not in nums of 1...n.
//Pattern: Two loops, first to fill set, and next to check the set against values 1...n. This does use extra space, to do it without, we could mark values as checked at the indexes they should be at. 