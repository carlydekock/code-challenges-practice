//34. Find First and Last Position of Element in Sorted Array
//Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
//If target is not found in the array, return [-1, -1].
//You must write an algorithm with O(log n) runtime complexity.
//Ex- Input: nums = [5,7,7,8,8,10], target = 8, Output: [3,4]
//Ex- Input: nums = [5,7,7,8,8,10], target = 6, Output: [-1,-1]

function searchRange(nums, target){
  let startIndex = -1;
  let endIndex = -1;
  let start = 0;
  let end = nums.length - 1;

  while(start <= end){
    let mid = Math.floor((start + (end - start) / 2));

    if(nums[mid] === target){
      start = mid;
      end = mid;
      while(nums[start-1] === target){
        start--;
      }
      while(nums[end+1] === target){
        end--;
      }
      return [start,end];
    } else if(nums[mid] < target){
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return [startIndex, endIndex];
}

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));