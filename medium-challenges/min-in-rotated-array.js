//153. Find Minimum in Rotated Sorted Array
//Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
//[4,5,6,7,0,1,2] if it was rotated 4 times.
//[0,1,2,4,5,6,7] if it was rotated 7 times.
//Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
//Given the sorted rotated array nums of unique elements, return the minimum element of this array.
//You must write an algorithm that runs in O(log n) time.
//Ex- Input: nums = [3,4,5,1,2], Output: 1

function findMin(nums){
  if(nums.length === 0){
    return -1;
  }
  if(nums.length === 1){
    return nums[0];
  }

  let left = 0;
  let right = nums.length - 1;

  while(left < right){
    let mid = Math.floor((left + right) / 2);
    if(mid > 0 && nums[mid] < nums[mid -1]){
      return nums[mid];
    } else if(nums[left] <= nums[mid] && nums[mid] > nums[right]){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[left];
}

console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([11,13,15,17]));
console.log(findMin([2,1]));

//Summary: Since the array is sorted, and then rotated at an unknown value, we need to figure out where it was rotated, as that will be our minimum value. Key to use binary search by the mention of algorithm that will run in O(log n) time. Starting with pointers at the left and right, calculate mid and determine which side of the array is sorted and which side is not. The side that is not sorted (nums[mid] > nums[right] for example) will tell us that the smallest value is in that side. Key here is that if nums[mid] < nums[mid-1] we know we've found the minimum value, as the number before should not be larger than the currentNum. 
//Pattern: Two pointers and binary search. 