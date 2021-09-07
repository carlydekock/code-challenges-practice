//33. Search in Rotated Sorted Array
//There is an integer array nums sorted in ascending order (with distinct values).
//Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
//Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
//You must write an algorithm with O(log n) runtime complexity.
//Ex- Input: nums = [4,5,6,7,0,1,2], target = 0, Output: 4

//Binary Search -> O(log n) runtime
//Input: sorted array of unique values, rotated at unknown pivot index k
//Output: index of target value, or -1 if target not found

//Find min value of array - to know where array was rotated
//  while left < right -> if nums[mid] > nums[right] -> left = mid + 1; else right = mid;
//  return left;
//Using min value index, check if target value will be in right side or left side
//  if(target >= nums[min] && target <= nums[right]) left = start; else right = start;
//Use binary search from there to find if target value exists in the array or not
//  if nums[mid] === target -> return mid;
//  if target > nums[mid] -> left = mid+1; else right = mid -1;

function search(nums, target){
  if(nums.length === 0 || nums === null || target === null){
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;
  let start = findMin(nums);

  if(target >= nums[start] && target <= nums[right]){
    left = start;
  } else {
    right = start;
  }

  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(nums[mid] === target){
      return mid;
    } else if(target > nums[mid]){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while(left < right){
    let mid = Math.floor((left + right) / 2);
    if(nums[mid] > nums[right]){
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([1], 0));
console.log(search([1], 1));


//Summary: First, need to find where the array is rotated from, (where the min value is), and with that - we can them implement binary search on the side that should have target value. If we know where min value is, each portion from min to right, and left to min will be sorted - binary search will be a quick way to tell if the target value is included in the array.
//Pattern: binary search, first to identify where the min value in the array is (pivot point), and then using the index of the min value to binary search on whichever side is necessary for the target value.