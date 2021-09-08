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

//Summary: Checking for any number that occurs twice, doesn't matter how many numbers occur twice, return true if at least one occurs twice. Set up a counter object, that logs the number of times a number has been present in the array. Iterate through the array once to set up the counter object, then iterate through the keys in count, if the value at a key is greater than one, return true. Else, and we make it out of the loop, return false as there is no number that appears more than once.
//Pattern: Hash map or object to count instances of a number. Iterate through to fill the map/object, then iterate over the keys to check for a certain condition, in this case, whether the count is greater than 1.
//Big O: O(n) -> iterating over all nums in the array, then over keys in the object.